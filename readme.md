




## Installation (Option 1)
```
python -m pip install localstack==0.9.0
localstack start
```

## Running on Docker (Option 2)
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

<br />
![Screenshot (210)](https://github.com/dragonRageX/AWS_Local/assets/114085260/101cc0b6-a298-4317-9f06-7619630013c2)
<br />

# Get List of EC2 instances
### Run 'terraform init' and 'terraform apply' in the terraform folder terminal to setup the project and provision the specified EC2 instances.
```
aws --endpoint-url=http://localhost:4566 ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,InstanceType,PublicIpAddress,Tags[?Key==`Name`]| [0].Value]' --output table --region us-east-1
```

<br />
![Screenshot (212)](https://github.com/dragonRageX/AWS_Local/assets/114085260/6bc796dd-58ae-4bf0-a211-66e17ee56e4b)
<br />
![Screenshot (214)](https://github.com/dragonRageX/AWS_Local/assets/114085260/e5f7ef91-756f-4b17-bfcb-f2ae890ff02e)
<br />
![Screenshot (215)](https://github.com/dragonRageX/AWS_Local/assets/114085260/ce0553cb-abac-4a67-990f-a800479906b9)
<br />
