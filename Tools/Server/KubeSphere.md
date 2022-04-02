<!--
title: KubeSphere
sort:
-->

> Kubernetes 可视化管理

## KubeSphere

> [安装文档](https://kubesphere.io/zh/docs/quick-start/all-in-one-on-linux/)

```bash
# 修改主机名
hostname kube-master

# 依赖项
apt update
apt install socat conntrack -y

# 下载 kk
export KKZONE=cn
curl -sfL https://get-kk.kubesphere.io | VERSION=v1.2.1 sh -
chmod +x kk

# 安装
./kk create cluster --with-kubernetes v1.21.5 --with-kubesphere v3.2.1

# 验证安装
kubectl logs -n kubesphere-system $(kubectl get pod -n kubesphere-system -l app=ks-install -o jsonpath='{.items[0].metadata.name}') -f
```
