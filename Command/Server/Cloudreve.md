<!-- 
title: Cloudreve
sort: 
--> 

> 文件管理系统
>
> [DockerHub地址](https://hub.docker.com/r/xavierniu/cloudreve)

```bash
# 得到PUID&PGID
id root

docker run -d \
  --name cloudreve \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ="Asia/Shanghai" \
  -p 80:5212 \
  --restart=unless-stopped \
  -v /opt/cloudreve/uploads:/cloudreve/uploads \
  -v /opt/cloudreve/config:/cloudreve/config \
  -v /opt/cloudreve/db:/cloudreve/db \
  -v /opt/cloudreve/avatar:/cloudreve/avatar \
  xavierniu/cloudreve

# 获取初始密码
docker logs -f cloudreve
```

### Webdav

```bash
# regedit
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters

# BasicAuthLevel
2

# 重启服务
net stop webclient
net start webclient

```

