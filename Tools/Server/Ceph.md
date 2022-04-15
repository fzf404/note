<!--
title: Ceph
sort:
-->

> 高性能的分布式存储系统
>
> [快速部署](https://docs.ceph.com/en/latest/cephadm/install/)

## 部署

```bash
# 安装管理器
# 全部节点都要安装
apt install -y cephadm

# 初始化集群
cephadm bootstrap --mon-ip 10.1.5.210
# 进入启动ceph全部命令的bash
# 使用完毕别忘退出
cephadm shell
# 增加节点
ceph orch host add ceph-1

# 移除集群
cephadm rm-cluster --fsid
```

