



https://docs.localstack.cloud/integrations/

![Screenshot (212)](https://github.com/dragonRageX/AWS_Local/assets/114085260/470f4882-db20-4abc-b305-88960d5031b5)

## Installation/Starting Localstack (Option 1)
```
python -m pip install localstack==0.9.0
localstack start
```

## Running localstack on Docker (Option 2)
```
docker run --rm -it -p 4566:4566 -p 4571:4571 localstack/localstack
OR
docker run --rm -it -p 127.0.0.1:4566:4566 -p 127.0.0.1:4510-4559:4510-4559 -v /var/run/docker.sock:/var/run/docker.sock localstack/localstack
```

# Using AWS CLI

## AWSLocal wrapper (Option #1)
```
pip install awslocal-cli
awslocal s3api list-buckets --region us-east-1
```

## AWS CLI pointing to endpoint (Option #2)
```
aws --endpoint-url=http://localhost:4566 s3api create-bucket --bucket my-bucket --region us-east-1
```

![Screenshot (212)](https://github.com/dragonRageX/AWS_Local/assets/114085260/349dcf7f-a537-4628-9d13-e92fd2763769)

### Uploading an object to s3:
```
aws --endpoint-url="http://localhost:4566" s3api put-object --bucket my-bucket --key screenshot --body "C:\Users\Param.DESKTOP-MEMSLIO\Pictures\Screenshots\Screenshot (63).png"
```

![Screenshot (218)](https://github.com/dragonRageX/AWS_Local/assets/114085260/fe216f9a-56b8-4f2a-b13e-755c35b4f123)

### Getting all objects in a bucket:
```
aws --endpoint-url="http://localhost:4566" s3api list-objects --bucket my-bucket --region us-east-1 --query "Contents[].{Key: Key, Size: Size}"
```

![Screenshot (221)](https://github.com/dragonRageX/AWS_Local/assets/114085260/ecac7016-d103-462c-aaa5-8bce826cc208)


# Get List of EC2 instances
### Run 'terraform init' and 'terraform apply' in the terraform folder terminal to setup the project and provision the specified EC2 instances.
```
aws --endpoint-url=http://localhost:4566 ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,InstanceType,PublicIpAddress,Tags[?Key==`Name`]| [0].Value]' --output table --region us-east-1
```

![Screenshot (214)](https://github.com/dragonRageX/AWS_Local/assets/114085260/7b93ceef-cf4f-47da-9830-c3b442928bf1)

![Screenshot (215)](https://github.com/dragonRageX/AWS_Local/assets/114085260/dc9bdec0-d5e6-42ef-b6a9-2d15bc78b931)
