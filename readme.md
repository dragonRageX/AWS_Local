



https://docs.localstack.cloud/integrations/


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





# Get List of EC2 instances
### Run 'terraform init' and 'terraform apply' in the terraform folder terminal to setup the project and provision the specified EC2 instances.
```
aws --endpoint-url=http://localhost:4566 ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,InstanceType,PublicIpAddress,Tags[?Key==`Name`]| [0].Value]' --output table --region us-east-1
```