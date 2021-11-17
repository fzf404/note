<!-- 
title: Code-Server
sort: 
--> 

## 安装

### 可执行

```bash
# 安装
curl -fsSL https://code-server.dev/install.sh | sh
# 安装特定版本
curl -fsSL https://code-server.dev/install.sh | sh -s -- --version 3.9.3


# 运行
code-server
systemctl enable code-server@root
systemctl rstart code-server@root

# 配置
vim ~/.config/code-server/config.yaml

# https
curl https://get.acme.sh | sh
alias acme.sh=~/.acme.sh/acme.sh

# 注册
acme.sh --register-account -m xxx@qq.com
# 验证所有权
acme.sh --issue -d xxx.xxxxx.xxx --webroot /var/www/html

# 安装证书
acme.sh --install-cert -d code-server.fzf404.top \
--key-file       /etc/nginx/key.pem  \
--fullchain-file /etc/nginx/cert.pem \

# nginx 配置文件
server {
    listen 443 ssl;
    listen [::]:443 ssl;

    ssl_certificate cert.pem;
    ssl_certificate_key key.pem;
    server_name code-server.fzf404.top;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                proxy_pass http://127.0.0.1:8080/;
                
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection upgrade;
                proxy_set_header Accept-Encoding gzip;
        }
}
```

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

## 环境

```bash
sudo apt-get update
sudo apt-get gcc gdb
```



