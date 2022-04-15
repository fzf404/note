<!--
title: Kuboard
sort:
-->

> Kubernetes 可视化管理

### 安装

> [高可用k8s安装](https://kuboard.cn/install/install-k8s.html)
>
> [Kuboard安装](https://kuboard.cn/install/v3/install-built-in.html)

```bash
# 管理端

# 集群安装器
https://kuboard-spray.cn/
# 集群管理器
https://kuboard.cn/install/v3/install-built-in.html

# 主节点
# 允许调度
kubectl taint nodes --all node-role.kubernetes.io/master-
# 安装 cephfs - rook
https://kuboard.cn/learning/k8s-intermediate/persistent/ceph/rook-config.html
```



