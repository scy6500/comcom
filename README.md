## 커먼컴퓨터 온라인 과제 

### 문제
Open AI 에서 공개한 gpt2 (https://github.com/openai/gpt-2)는 자연어 처리 모델로 다양한 형태의 서비스에서 활용될 수 있습니다. Huggingface(https://huggingface.co/models) 에서는 미리 트레이닝된 버전의 gpt2모델을 제공하고 있고, https://ainize.ai/explore?category=gpt-2 에서는 GPT2 모델들을 API로 호출할 수 있도록 제공하고 있습니다.

예를 들어, 이 API들을 사용하면 https://ainize.ai/ainize-team/tabtab 과 같은 서비스를 만들 수 있습니다. GPT2 model API를 사용하여 나만의 서비스를 기획하고 제출하는 것이 본 과제의 목적입니다.


요구사항:

Kubernetes를 사용 (https://cloud.google.com/kubernetes-engine/docs/tutorials) 

Docker를 사용 (https://docs.docker.com/get-started/) 

 

제출물:

브라우저로 접속 가능한 만들어진 서비스의 IP 혹은 URL

GitHub에 코드 공유

 

가산점:

Public으로 공유되어 있는 모델이 아닌 직접 fine-tuning한 모델을 사용

### 사용법
1. Build Docker
```shell
docker build -t comcom .
```

2. Run Docker
```shell
docker run -d -p 3000:3000 comcom
```

3. Activate Metallb
```shell
minikube addons enable metallb
```

4. Create Deployment
```shell
kubectl create -f deploy.yaml
```

5. Create Config Map 
```shell
kubectl create -f configmap.yaml
```

6. Expose The Deployment
```shell
kubectl expose deployment comcom-deployment --type="LoadBalancer"
```

7. Check External-Ip 
```shell
C:\Users\user\Desktop\comcom>kubectl get svc
NAME                TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)          AGE
comcom-deployment   LoadBalancer   10.105.239.103   <Minikube ip>    3000:30828/TCP   7s
kubernetes          ClusterIP      10.96.0.1        <none>           443/TCP          63m
```
