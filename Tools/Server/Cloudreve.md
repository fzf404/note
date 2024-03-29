<!--
title: Cloudreve
sort:
-->

> 文件管理系统
>
> [DockerHub 地址](https://hub.docker.com/r/xavierniu/cloudreve)

## docker

> [cloudreve](https://hub.docker.com/r/xavierniu/cloudreve)

```bash
mkdir -vp cloudreve/{uploads,avatar} \
  && touch cloudreve/conf.ini \
  && touch cloudreve/cloudreve.db \
  cd cloudreve

docker run -d \
  -p 5212:5212 \
  --mount type=bind,source=$PWD/conf.ini,target=/cloudreve/conf.ini \
  --mount type=bind,source=$PWD/cloudreve.db,target=/cloudreve/cloudreve.db \
  -v $PWD/uploads:/cloudreve/uploads \
  -v $PWD/avatar:/cloudreve/avatar \
  --name cloudreve \
  cloudreve/cloudreve:latest

# 获取初始密码
docker logs -f cloudreve
```

### Docker-compose

> `docker-compose up -d`

- `.env`

```ini
# Required

# > PUID & PGID
CLOUDREVE_PUID=0
CLOUDREVE_PGID=0

# > Aria2
ARIA2_RPC_SECRET=password

# Optional
# But I highly recommend you keep items below as default
# unless you know what you are doing.

# > Temp download folder for Aria2 & Cloudreve
TEMP_FOLDER_PATH=/opt/aria2/temp

# > Aria2
ARIA2_CONFIG_PATH=/opt/aria2/conf

# > Cloudreve
CLOUDREVE_UPLOAD_PATH=/opt/cloudreve/uploads
CLOUDREVE_CONF_PATH=/opt/cloudreve/config
CLOUDREVE_DB_PATH=/opt/cloudreve/db
CLOUDREVE_AVATAR_PATH=/opt/cloudreve/avatar
```

- `docker-compose.yml`

```yaml
version: '3'

services:
  aria2:
    image: p3terx/aria2-pro
    logging:
      options:
        max-size: 1m
    ports:
      - 6800:6800
      - 6888:6888
      - 6888:6888/udp
    environment:
      - PUID=${CLOUDREVE_PUID}
      - PGID=${CLOUDREVE_PGID}
      - RPC_SECRET=${ARIA2_RPC_SECRET}
    volumes:
      - ${ARIA2_CONFIG_PATH}:/config
      - ${TEMP_FOLDER_PATH}:/downloads
    networks:
      - cloudreve-network
    restart: unless-stopped

  cloudreve:
    image: xavierniu/cloudreve
    ports:
      - 5212:5212
    environment:
      - PUID=${CLOUDREVE_PUID}
      - PGID=${CLOUDREVE_PGID}
    volumes:
      - ${CLOUDREVE_UPLOAD_PATH}:/cloudreve/uploads
      - ${TEMP_FOLDER_PATH}:/downloads
      - ${CLOUDREVE_CONF_PATH}:/cloudreve/config
      - ${CLOUDREVE_DB_PATH}:/cloudreve/db
      - ${CLOUDREVE_AVATAR_PATH}:/cloudreve/avatar
    networks:
      - cloudreve-network

networks:
  cloudreve-network:
```

- nginx

```nginx
server {
  listen 80;
  server_name cloud.fzf404.art;
  rewrite ^(.*)$ https://$host$1 permanent;
}

server {

    listen 443 ssl;
    server_name cloud.fzf404.art;

    ssl_certificate /www/cert/cloud.fzf404.art/cert.pem;
    ssl_certificate_key /www/cert/cloud.fzf404.art/key.pem;

    location / {

        proxy_pass http://127.0.0.1:5212;

        proxy_set_header Host $host;
        proxy_set_header Referer $http_referer;
        proxy_set_header X-Real-Ip $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_redirect off;

        client_max_body_size 20000m;

    }

    access_log  /www/logs/cloud.fzf404.art.log;
    error_log  /www/logs/cloud.fzf404.art.error.log;

}
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
