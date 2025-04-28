provider "aws" {
  region = "us-east-1"
}

resource "aws_db_instance" "kl_mysql_db" {
  allocated_storage    = 20
  engine               = "mysql"
  engine_version       = "8.0"
  instance_class       = "db.t3.micro"
  db_name              = "kl_university"
  username             = "root"
  password             = "Chand1807#"
  parameter_group_name = "default.mysql8.0"
  multi_az             = false
  publicly_accessible  = true
  skip_final_snapshot  = true
}

output "db_endpoint" {
  value       = aws_db_instance.kl_mysql_db.endpoint
  description = "The endpoint of the kl_university database."
}
