<!-- 
title: Https
sort: 
--> 

## acme.sh

```bash
curl  https://get.acme.sh | sh
alias acme.sh=~/.acme.sh/acme.sh

# 验证所有权
acme.sh  --issue  -d xxx.fzf404.top --webroot /opt/xxx/
# 自动nginx验证
acme.sh  --issue  -d qlyw.fzf404.top --nginx

# 安装证书
acme.sh --install-cert -d qlyw.fzf404.top \
--key-file       /etc/nginx/key.pem  \
--fullchain-file /etc/nginx/cert.pem \
--reloadcmd     "service nginx force-reload"

# nginx配置文件
listen 443 ssl default_server;
listen [::]:443 ssl default_server;

ssl_certificate			cert.pem;
ssl_certificate_key key.pem;
```

