<!-- 
title: Nginx
sort: 
--> 

# Nginx入门

> [OpenResty](http://openresty.org/cn/)

## docker

```yml
# docker-compose
version: '3.1'
services:
  nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
      - 80:80
    volumes: 
      - /opt/docker_nginx/conf.d:/etc/nginx/conf.d
      - /usr/share/nginx/html
```

## 默认

```nginx
# /etc/nginx/sites-enable/default

server {
	listen 80;
 	server_name _;

	location / {
		root /var/www/html;
		index index.html index.htm index.nginx-debian.html;
	}
}
include	<someconfig>

$ nginx -s reload
```

### 路径映射

```nginx
# = 匹配
location = / {
    # 精确匹配，不能带任何字符串
}
# 通用匹配
location /xx {
	# 匹配所有/xx/的路径
}
# 正则匹配
location ~/xx {
    # 匹配所有以/xx开头的路径
}
location ~* \. (git|jpg|png)$ {
    # 匹配大多数图片格式
}

# 带/ 与 不带/
location /test {
    proxy_pass http://127.0.0.1:8080/;
}
# 访问: http://127.0.0.1/test/01.html
# location - /
# http://127.0.0.1:8080//01.html
# location + /
# http://127.0.0.1:8080/01.html


# 带/ 与 不带/
location /test/ {
    proxy_pass http://127.0.0.1:8080/;
}
# 访问: http://127.0.0.1/test/01.html
# proxy_pass - /
# http://127.0.0.1:8080/test/01.html
# proxy_pass + /
# http://127.0.0.1:8080/01.html
```

## 实例

### 反向代理

```nginx
location /test {
	# 反向代理
	proxy_pass http://group1/;
}
```

### 文件服务器

```nginx
location /app {
    # 遍历目录
    autoindex on;
    # 文件大小显示
    autoindex_exact_size off;
    # 显示服务器时间
    autoindex_localtime on;
    # 中文文件夹转码
    charset utf-8;
}


server {
  listen 80;
  root /www/website/x;
  
  autoindex on;
  autoindex_exact_size off;
  autoindex_localtime on;
  charset utf-8;
}

```

### 负载均衡

```nginx
# 负载均衡 权重
upstream group1{
   	server 192.168.0.1:80 weight=2;
    server 192.168.0.1:8080 weight=1;
}

server{
    location /test/ {
        # 随机重定向到两个网页
		proxy_pass http://group1/;
  }
}
```

### 关闭缓存

```nginx
add_header Pragma   no-cache;
add_header Expires 0;
add_header Cache-Control no-cache,no-store;
```

### 请求头

```nginx
# 请求来源信息
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

# 支持socket连接
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection upgrade;
proxy_set_header Accept-Encoding gzip;
```

