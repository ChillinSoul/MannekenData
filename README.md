# MannekenData

**MannekenData** is a Nuxt-based platform engineered for Kubernetes, designed to provide real-time traffic analysis in Brussels. The platform aims to enhance urban mobility by leveraging scalable data processing solutions.

## Prerequisites
- Kubernetes cluster running locally or on the cloud.
- Docker installed and configured.
- Port `5432` should be available for the services.

## Getting Started

### 1. Build the Docker Image
Navigate into the `nuxt-app` directory:
```bash
cd nuxt-app
```
Ensure Kubernetes is up and running. Then, build the Docker image for the Nuxt app:
```bash
docker build -t nuxt-app .
```

### 2. Deploy to Kubernetes
To deploy the application, apply the Kubernetes configuration:
```bash
kubectl apply -f ./deployment.yaml
```

### 3. Verify Deployment
Check if the deployment is successful by listing the pods:
```bash
kubectl get pods
```

### 4. Clean Up
To remove the deployed application, run the following command:
```bash
kubectl delete pod <nuxt-app-POD-NAME>
```
You can find the pod name by running `kubectl get pods`.

## Notes
- Ensure port `5432` is available for the services.
- Customize `deployment.yaml` as needed for your environment.

---
