provider "aws" {
  region = "us-east-1"
}

# Create an S3 bucket
resource "aws_s3_bucket" "empowerher_bucket" {
  bucket = "empowerher-bucket-${random_id.bucket_id.hex}"
  #acl    = "private"

  tags = {
    Name        = "EmpowerHerBucket"
    Environment = "Dev"
  }
}

resource "random_id" "bucket_id" {
  byte_length = 8
}

# Create an EC2 instance
resource "aws_instance" "app_server" {
  ami           = "ami-037a2314eeca55594"  # Replace with a valid AMI ID
  instance_type = "t2.micro"

  tags = {
    Name = "EmpowerHerAppServer"
  }
}

# Create an RDS instance
resource "aws_db_instance" "db" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "16.3"  # Replace with a valid PostgreSQL version
  instance_class       = "db.t2.micro"
  db_name              = "empowerher"
  username             = "postgres"
  password             = "postgres"
  parameter_group_name = "default.postgres16"
  skip_final_snapshot  = true

  tags = {
    Name = "EmpowerHerDB"
  }
}
