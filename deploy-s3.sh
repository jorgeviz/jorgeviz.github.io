#!/bin/bash
# Execution usage:
# bash deploy-s3.sh <aws_profile_name> <bucket_name>

echo "Deploying to AWS Bucket S3 ($2)"
aws --profile $1 s3 sync --exclude ".git/*" --exclude ".envvars" --exclude ".gitignore" --exclude "node_modules/*" --exclude ".DS*" ./build/ s3://$2 --cache-control 'max-age=0'
echo "Version has been deployed!"
