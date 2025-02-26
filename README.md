# DevOps Learning Project: AWS Containerized Application Deployment

A comprehensive hands-on project for learning DevOps practices through deploying containerized applications on AWS infrastructure.

## Project Goals

This project demonstrates how to:

- Deploy containerized applications on AWS EC2
- Implement proper infrastructure configuration with security best practices
- Set up persistent storage with EBS volumes
- Configure Nginx as a reverse proxy
- Implement load balancing with AWS ELB
- Monitor application performance
- Create a basic CI/CD pipeline

## Technology Stack

- **Infrastructure**: AWS EC2, EBS, ELB
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx
- **Front-end**: React
- **Back-end**: Node.js
- **Monitoring**: CloudWatch, stress
- **CI/CD**: GitHub Actions

## Prerequisites

- AWS Account
- Basic knowledge of Linux commands
- GitHub account
- Docker and Docker Compose installed locally (for testing)

## Getting Started

1. Clone this repository
2. Configure your AWS credentials
3. Follow the deployment steps in the documentation

## Project Structure

```
├── frontend/                # React application
│   ├── Dockerfile           # Frontend container configuration
│   └── nginx.conf           # Nginx configuration for frontend
├── backend/                 # Node.js application
│   └── Dockerfile           # Backend container configuration
├── docker-compose.yml       # Service orchestration configuration
├── nginx/                   # Host Nginx configuration
├── scripts/                 # Deployment and setup scripts
│   ├── setup-ec2.sh         # EC2 instance setup script
│   ├── setup-ebs.sh         # EBS volume mount script
│   └── monitoring.sh        # Monitoring setup script
└── .github/workflows/       # CI/CD configuration
    └── deploy.yml           # GitHub Actions workflow
```

## Deployment Steps

See the complete step-by-step guide in my [documentation](LINK_TO_DOCUMENTATION).

## Monitoring

This project includes setup for:
- CloudWatch metrics for CPU, Memory, and Disk usage
- Log aggregation for application and Nginx logs
- Stress testing tools for performance validation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
