provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-037a2314eeca55594"  # Replace with the provided AMI ID
  instance_type = "t2.micro"

  tags = {
    Name = "EmpowerHerAppServer"
  }
}

resource "aws_db_instance" "db" {
  allocated_storage    = 20
  engine               = "postgres"
  engine_version       = "16.3"  # Replace with the provided PostgreSQL version
  instance_class       = "db.t2.micro"
  db_name              = "empowerher"  # Use db_name instead of name
  username             = "postgres"
  password             = "postgres"
  parameter_group_name = "default.postgres16"
  skip_final_snapshot  = true
}