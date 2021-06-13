<!-- 
title: Code-Server
sort: 
--> 
# code-server使用

## 安装

### docker

```bash
docker pull linuxserver/code-server

docker create \
  --name=code-server \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -e PASSWORD=password `#登录密码` \
  -e SUDO_PASSWORD=password `#sudo密码` \
  -e PROXY_DOMAIN=code-server.my.domain `#optional` \
  -p 8443:8443 \
  -v /path/to/appdata/config:/config \
  --restart unless-stopped \
  linuxserver/code-server
  
0b4289087f1643420556707388953a58efb653815cb5e63e0a185c6aca175e3a

docker start 0b428
```

### 可执行

```
https://github.com/cdr/code-server/releases

wget https://github.com.cnpmjs.org/cdr/code-server/releases/download/
```

## 环境

```bash
sudo apt-get update
sudo apt-get gcc gdb
```



