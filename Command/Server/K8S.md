<!-- 
title: K8S
sort: 
--> 

> Docker[安装文档](https://docs.docker.com/engine/install/)
>
> kubectl[安装文档](https://kubernetes.io/zh/docs/tasks/tools/install-kubectl-linux/)
>
> minikube[安装文档](https://minikube.sigs.k8s.io/docs/start/)
>
> Dashboard[安装文档](https://kubernetes.io/zh/docs/tasks/access-application-cluster/web-ui-dashboard/)

## 概念

<img src="https://d33wubrfki0l68.cloudfront.net/5cb72d407cbe2755e581b6de757e0d81760d5b86/a9df9/docs/tutorials/kubernetes-basics/public/images/module_03_nodes.svg" alt="pod" style="width:30%" />

- Pod

  > 调度最小单位为Pod。
  >
  > 根容器为Pause，所有业务都共享此根Pod的**IP和Volume**。

- Service

  > Service用于将Pod代理出去，
  >
  > K8S会为其分配一个集群内唯一的IP，叫做**ClusterIP**，
  >
  > 由kube-proxy进程将对Service的请求转发到具体的Pod上

- Label

  > 可以打在Pod与Service上的标签
  >
  > Service可以通过Label Selector，找到打了同一Label的Pod副本集。

- Replica Set

  > 定期的检测当前存活的Pod数量，保持设定副本数量，

## 搭建

### kubeadm

```bash
# 安装docker与kubeadm
./tools/ubuntu-docker.sh
./tools/install-kubeadm.sh

# 设置hostname，方便查看
sudo hostnamectl set-hostname master-node
# 初始化集群
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
# 单核CPU
sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --ignore-preflight-errors=NumCPU

# 返回值，注意保存，用于其他节点加入到集群中
kubeadm join 10.0.8.13:6443 --token 34vads.azh5kfsbtifl3rnc \
        --discovery-token-ca-cert-hash sha256:54e601f935c38d4d17e38430cdd4de98ebc4ddbf013d5a7835d20dc553213e42

# 普通用户可执行
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# 查看节点状态，发现NotReady
kubectl get nodes

# 安装网络通信插件，状态为Ready
sudo kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# node节点
sudo hostnamectl set-hostname slave-node
```

### minikube

> [教程](https://minikube.sigs.k8s.io/docs/start/)

```bash
# 启动
minikube start
# 控制板
minikube dashboard
# 配置代理
kubectl proxy --port=8080 --address='0.0.0.0' --accept-hosts='^.*'
# 访问
http://ip/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/
# 关闭
minikube delete
```

### 常用命令

```bash
kubectl get				# 列出资源
kubectl describe	# 显示有关资源的详细信息
kubectl logs			# 打印 pod 和其中容器的日志
kubectl exec			# 在 pod 中的容器上执行命令
# 进入pod中执行命令
kubectl exec -ti $POD_NAME -- bash
# 重置
kubeadm reset
```

### 问题

1. docker增加用户权限

   ```bash
   # 将 docker 的权限移交给非 root 用户
   sudo usermod -aG docker $USER
   newgrp docker 	# 激活更改
   ```

2. ` The recommended driver is "systemd"`

   ```bash
   vim /etc/docker/daemon.json
   
   {
    "exec-opts":["native.cgroupdriver=systemd"]
   }
   
   systemctl restart docker
   ```

