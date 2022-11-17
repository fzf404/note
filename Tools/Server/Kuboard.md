<!--
title: Kuboard
sort:
-->

> [视频地址](https://www.bilibili.com/video/BV1mB4y117Hq)

- 快速搭建高可用k8s集群
- 一键创建 CephFS 存储类
- 在集群中搭建开源项目

## 准备

1. 了解 Linux 以及 Docker 的基础知识
2. 拥有两台不少于 2h4g 的 服务器 / 虚拟机
	- 推荐使用 Ubuntu 20.04 系统
	- 可购买按时间收费的云服务器，一小时只有几块钱

| 地址       | 配置   | 存储        | 用途           |
| ---------- | ------ | ----------- | -------------- |
| 10.1.5.208 | 4h8g   | 128G        | 集群管理器     |
| 10.1.5.210 | 8h16g  | 128G + 256G | Master 节点    |
| 10.1.5.212 | 16h32g | 128G + 256G | 集群 Node 节点 |
| 10.1.5.214 | 16h32g | 128G + 256G | 集群 Node 节点 |

## 基础知识

- 节点中都有什么？
- 包含哪些内容？
	- `kube-apiserver`
	- `etcd`
	- `kube-scheduler`
	- `kube-controller`

## 安装

> 使用图形化界面安装 K8S 及 Kuboard

```bash
# 10.1.5.208

# 0. 配置 ssh 登录

# 使用 root 用户登录
ssh root@10.1.5.208
# 生成 ssh 公私钥
ssh-keygen
# 将公钥拷贝到允许列表中
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
# 将公钥配置到其余服务器中
cat ~/.ssh/id_rsa.pub | ssh root@10.1.5.210 'cat - >> ~/.ssh/authorized_keys'
cat ~/.ssh/id_rsa.pub | ssh root@10.1.5.212 'cat - >> ~/.ssh/authorized_keys'
cat ~/.ssh/id_rsa.pub | ssh root@10.1.5.214 'cat - >> ~/.ssh/authorized_keys'
# 测试免密登录
ssh root@10.1.5.210 'echo success && exit'
ssh root@10.1.5.212 'echo success && exit'
ssh root@10.1.5.214 'echo success && exit'

# 1. 安装 Docker
bash <(curl -sSL https://cdn.jsdelivr.net/gh/SuperManito/LinuxMirrors@main/DockerInstallation.sh)

# 2. 启动 Kuboard-Spray
vim kuboard-spray.sh
docker run -d \
  --privileged \
  --restart=unless-stopped \
  --name=kuboard-spray \
  -p 31415:80/tcp \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ~/kuboard-spray-data:/data \
  eipwork/kuboard-spray:latest-amd64

# 访问 http://10.1.5.208:31415
# 用户名 admin 密码 Kuboard123
# 配置集群信息并安装

# 4. 启动 Kuboard
vim kuboard.sh
docker run -d \
  --restart=unless-stopped \
  --name=kuboard \
  -p 31416:80/tcp \
  -p 10081:10081/tcp \
  -e KUBOARD_ENDPOINT="http://10.1.5.208:31416" \
  -e KUBOARD_AGENT_SERVER_TCP_PORT="10081" \
  -v /root/kuboard-data:/data \
  eipwork/kuboard:v3

# 访问 http://10.1.5.208:31416
# 用户名 admin 密码 Kuboard123

# 10.1.5.210

# 查看 kubeconfig 
cat ~/.kube/config

```
## 文件系统

> 搭建所有节点共用的存储系统

```bash
# 10.1.5.210

# 1. 查看磁盘挂载
lsblk -f

# 2. 允许主节点调度资源
kubectl taint nodes --all node-role.kubernetes.io/master-

# 3. 部署 CephFS - Rook
kubectl create -f https://kuboard.cn/statics/learning/ceph/rook-1.5.4/crds.yaml
kubectl create -f https://kuboard.cn/statics/learning/ceph/rook-1.5.4/common.yaml
kubectl create -f https://kuboard.cn/statics/learning/ceph/rook-1.5.4/operator.yaml
kubectl create -f https://kuboard.cn/statics/learning/ceph/rook-1.5.4/cluster.yaml
# 查看创建情况
watch kubectl get pods -n rook-ceph

# 4. 创建文件存储服务
cat > myfs.yaml <<EOF
apiVersion: ceph.rook.io/v1
kind: CephFilesystem
metadata:
  name: myfs
  namespace: rook-ceph
spec:
  metadataPool:
    replicated:
      size: 3
  dataPools:
    - replicated:
        size: 3
  preservePoolsOnDelete: true
  metadataServer:
    activeCount: 1
    activeStandby: true
EOF

# 执行
kubectl create -f myfs.yaml

# 5. 进入图形管理界面

# - 进入 rook-ceph 名称空间中
# - 点击 应用程序 -> 服务
# - 进入 rook-ceph-mgr-dashboard 中
# - 编辑 服务端口 选择 NodePort 更换为端口

# 默认用户名 admin
# 获得密码
kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o jsonpath="{['data']['password']}"|base64 --decode && echo

# 访问链接

https://10.1.5.208:31416

```
### 配置
> 配置好 存储类 及 安装套件
1. 创建存储类
2. 安装资源层监控套件
3. 安装存储卷浏览器

## 部署
> 在集群中部署点东西

1. 创建名称空间
2. 创建工作负载
3. 创建容器

### debian

> [Docker Hub](https://hub.docker.com/_/debian)

```bash
# 启动命令
tail -f /dev/null

# 安装 nginx
apt-get upgrade
apt-get install nginx

# 修改文件内容
vim /var/www/html/index.nginx-debian.html

# 发布服务 NodePort
```

### nginx

> [Docker Hub](https://hub.docker.com/_/nginx)

```bash
# 部署 nginx
# 创建存储类
```

### flarum

> [中文论坛](https://discuss.flarum.org.cn)
> [Github](https://github.com/mondediefr/docker-flarum)


## 参考链接

[Docker - 国内一键安装](https://gitee.com/SuperManito/LinuxMirrors/)

[Kuboard-Spray - 图形化安装高可用集群](https://kuboard.cn/install/install-k8s.html)

[Kuboard - 多集群管理界面](https://kuboard.cn/install/v3/install-built-in.html)

[CephFS Rook - 快速安装 Ceph 集群](https://kuboard.cn/learning/k8s-intermediate/persistent/ceph/rook-config.html)

[Debian Docker 镜像](https://hub.docker.com/_/debian)



