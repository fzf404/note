<!--
title: K8S
sort:
-->

> [k8s安装脚本](https://github.com/lework/kainstall)
>
> [参考教程](https://k8s.easydoc.net/)

## 概念

### 物理

- Master

    > 主节点，用于控制平台，可不跑任务，可以开多个主节点来提高集群可用度。

- Worker

    > 工作节点，由主节点管理，可不断加机器扩大集群

<img src="https://d33wubrfki0l68.cloudfront.net/5cb72d407cbe2755e581b6de757e0d81760d5b86/a9df9/docs/tutorials/kubernetes-basics/public/images/module_03_nodes.svg" alt="pod" style="width:30%" />

- Pod

  > 每个Woker可有多个Pod，调度最小单位，可包含多个容器，有自己的虚拟IP。

- deployment

    > 对 Pod 副本数量进行管理

### 组件

- `kube-apiserver`: API 服务器，对外提供 Kubernetes API
- `etcd`: 键值数据库，保存 Kubernetes 所有集群数据
- `kube-scheduler`: 调度 Pod 到哪个节点运行
- `kube-controller`: 集群控制器
- `cloud-controller`: 与云服务商交互

## 使用

```bash
# 部署应用
kubectl apply -f app.yaml
# 应用操作
kubectl rollout restart pod test-pod
kubectl rollout restart deployment test-k8s
kubectl rollout pause # 暂停
kubectl rollout resum # 恢复
# 查看
kubectl get pod # 列出 pod
kubectl get deployment # 列出 deployment
kubectl get all # 全部
kubectl describe pod $POD_NAME # 查看详细信息
# 日志
kubectl logs # 打印 pod 和其中容器的日志
# 删除
kubectl delete pod $POD_NAME
kubectl delete deployment $DEPLOY_NAME
kubectl delete all --all # 删除全部
# 进入容器
kubectl exec
kubectl exec -ti $POD_NAME -- bash
```

- `pod.yaml`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: test-pod
spec:
  # 定义容器，可以多个
  containers:
    - name: test-k8s # 容器名字
      image: # 镜像路径
```

- `deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  # 部署名字
  name: test-k8s
spec:
  # 个数
  replicas: 2
  # 用来查找关联的 Pod，标签需匹配
  selector:
    matchLabels:
      app: test-k8s
  # 定义 Pod 相关数据
  template:
    metadata:
      labels:
        app: test-k8s
    spec:
      # 定义容器，可以多个
      containers:
      - name: test-k8s # 容器名字
        image: # 镜像路径
```
