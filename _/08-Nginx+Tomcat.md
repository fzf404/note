<!--
title: 08-Nginx+Tomcat
sort:
-->

> 配置文件列表
>
> `/etc/nginx/nginx.conf`
>
> `/etc/nginx/sites-enabled/default`
>
> `/opt/lib/tomcat9/webapps/`

## Nginx 配置文件

```nginx
# /etc/nginx/sites-enable/default

server {
	listen 80;
    server_name localhost;

	location / {
		root /var/www/html;
		index index.html index.htm index.nginx-debian.html;
	}
}

include	<someconfig>
```

### 反向代理

```nginx
location /test {
	# 反向代理
	proxy_pass http://group1/;
}
```

### 负载均衡

```nginx
# 负载均衡 权重
upstream group1 {
   	server 192.168.0.1:80 weight=2;
    server 192.168.0.1:8080 backup;
}

server{
    location /test/ {
        # 随机重定向到两个网页
		proxy_pass http://group1/;
  }
}
```

## Tomcat

```bash
cd /var/lib/tomcat9/webapps/
```

## Git

```
git clone
git push
git pull
git status
git branch -v
git add .
git commit -a -m "Message"
git checkout .
git checkuot -b new_branch
git merge
```
