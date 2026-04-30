# DevOps Project 8 — End-to-End CI/CD Pipeline on AWS EKS


## Overview

This project demonstrates a complete DevOps lifecycle by automating infrastructure provisioning, application build, containerization,
and deployment to Kubernetes.
It simulates a real-world production pipeline where every step—from code push to deployment—is automated, reproducible, and scalable.


## Architecture
![Architecture](Project-8_Screenshots/6_Architecture.png)
Developer --> GitHub --> Jenkins Pipeline
          --> Docker Build --> Docker Hub
          --> Helm --> Kubernetes (EKS)
          --> Running Application

---

## Deployment Flow

```text
Code Push → Jenkins → Docker Build → Docker Hub → Helm Deploy → Kubernetes
```

---

## Tech Stack

| Category         | Tools                       |
| ---------------- | --------------------------- |
| Cloud            | AWS (EKS)                   |
| Infrastructure   | Terraform (Terraform Cloud) |
| CI/CD            | Jenkins                     |
| Containerization | Docker                      |
| Orchestration    | Kubernetes                  |
| Deployment       | Helm                        |
| Application      | Node.js                     |

---

## Responsibility Split

| Layer      | Responsibility                   |
| ---------- | -------------------------------- |
| Terraform  | Infrastructure provisioning      |
| Jenkins    | CI/CD automation                 |
| Docker     | Application packaging            |
| Helm       | Kubernetes deployment templating |
| Kubernetes | Application runtime              |


## CI/CD Pipeline (Jenkins)

The Jenkins pipeline automates the full workflow:

### Pipeline Stages

1. **Checkout**

   * Pulls source code from GitHub

2. **Build Image**

   * Builds Docker image from application

3. **Push Image**

   * Authenticates with Docker Hub
   * Pushes image to registry

4. **Deploy**

   * Uses Helm to deploy/update application on Kubernetes
   * Executed inside Jenkins workspace using relative path

---

## Docker

### Build Image

```bash
docker build -t alyyasser10/devops-project-8:latest .
```

### Push Image

```bash
docker push alyyasser10/devops-project-8:latest
```

---

## Kubernetes (EKS)

Cluster is provisioned using Terraform.

### Verify Nodes

```bash
kubectl get nodes
```

### Deploy via Helm

```bash
helm upgrade --install my-app ./helm/my-app
```

---

## Helm Chart

Helm is used for Kubernetes deployment templating.

### Key Files:

* `deployment.yaml` → defines pods
* `service.yaml` → exposes app
* `values.yaml` → configurable parameters
* `_helpers.tpl` → reusable templates

---

## Infrastructure (Terraform)

Terraform provisions:

* VPC
* Subnets
* Internet Gateway
* Route Tables
* IAM Roles
* EKS Cluster
* Node Group

### Terraform Cloud

* Remote execution
* Remote state management
* Secure variable storage

---

## Credentials Management

Sensitive data handled securely:

### Jenkins Credentials

* `dockerhub-creds` → Docker Hub authentication
* `kubeconfig` → Kubernetes cluster access

### Terraform Cloud Variables

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`

❗ Secrets are never stored in GitHub repositories.

---

## Project Screenshots

### 1️⃣ Terraform Cloud — Infrastructure Provisioning

![Terraform](images/terraform.png)

### 2️⃣ Jenkins Pipeline — CI/CD Execution

![Jenkins](images/jenkins.png)

### 3️⃣ Docker Image — Build & Push

![Docker](images/docker.png)

### 4️⃣ Kubernetes Cluster — Nodes Running

![Kubernetes](images/k8s.png)

### 5️⃣ Running Application

![App](images/app.png)

---

## Key Achievements

* ✅ Built full CI/CD pipeline using Jenkins
* ✅ Automated Docker image build and push
* ✅ Deployed application to Kubernetes using Helm
* ✅ Provisioned AWS infrastructure using Terraform
* ✅ Integrated Terraform Cloud for remote execution
* ✅ Achieved end-to-end DevOps workflow

## Lessons Learned

* Importance of Terraform state management
* Handling IAM conflicts and resource duplication
* Debugging CI/CD pipelines effectively
* Kubernetes deployment and troubleshooting
* Integrating multiple DevOps tools into one workflow

---

## Author

Ali Yasser

DevOps Engineer

---

## ⭐ Final Note

This project represents a **real-world DevOps pipeline** integrating multiple tools to deliver a scalable, automated deployment system on Kubernetes.
