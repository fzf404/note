<!--
title: Https
sort:
-->

## acme.sh

> [复制下载](https://raw.githubusercontent.com/acmesh-official/acme.sh/master/acme.sh)

```bash
curl https://get.acme.sh | sh
alias acme.sh=~/.acme.sh/acme.sh

# 注册
acme.sh --register-account -m xxx@qq.com

# 验证所有权
acme.sh --issue -d cloud.fzf404.art --webroot /opt/xxx/
# 自动nginx验证
acme.sh --issue -d cloud.fzf404.art --nginx

# 安装证书
acme.sh --install-cert -d cloud.fzf404.art \
--key-file       /www/nginx/key.pem  \
--fullchain-file /etc/nginx/cert.pem

# nginx配置文件
# 注释掉
listen 443 ssl default_server;
listen [::]:443 ssl default_server;

ssl_certificate			cert.pem;
ssl_certificate_key key.pem;
```

## 一键配置脚本

### shell

```bash
#!/bin/bash

git clone https://github.com.cnpmjs.org/acmesh-official/acme.sh.git /root/.acme.sh/acme.sh

/root/.acme.sh/acme.sh --register-account -m xxx@163.com

webList=("xxx.fzf404.art")

# 批量为网站创建SSL证书
for item in ${webList[*]}
do
/root/.acme.sh/acme.sh --issue -d $item --nginx

mkdir -p /www/cert/$item

/root/.acme.sh/acme.sh --install-cert -d $item \
--key-file       /www/cert/$item/key.pem  \
--fullchain-file /www/cert/$item/cert.pem
done

# Nginx
ln -s /etc/nginx/sites-available/*.conf /etc/nginx/sites-enabled/
```

### 配置文件

- 反向代理

```nginx
server {
    listen 80;
    # listen 443 ssl;

    server_name xxx.fzf404.art;

    # ssl_certificate /www/cert/xxx.fzf404.art/cert.pem;
    # ssl_certificate_key /www/cert/xxx.fzf404.art/key.pem;

    location / {
        proxy_pass http://localhost:8080/;

        proxy_set_header Host $host;
        proxy_set_header Referer $http_referer;
        proxy_set_header X-Real-Ip $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection upgrade;
        proxy_set_header Accept-Encoding gzip;

    }

    access_log /www/log/xxx.fzf404.art.log;
    error_log /www/log/xxx.fzf404.art.error.log;
}
```
