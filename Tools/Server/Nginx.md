<!--
title: Nginx
sort:
-->

# Nginx 入门

> [OpenResty](http://openresty.org/cn/)

## docker

```yml
# docker-compose
version: "3.1"
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

```bash
# nginx替代品
python3 -m http.server 80

# 重新加载配置文件
nginx -s reload

# 返回特定值
return 200 'ok';


# 禁止IP访问
deny 39.106.106.202;
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

# 全部加 / 就对了

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
server {
    listen 80;
    charset utf-8; # 防止中文文件名乱码

    location /download {
        alias /usr/share/nginx/static;  # 静态资源目录

        autoindex on;    # 开启静态资源列目录，浏览目录权限
        autoindex_exact_size off;   # on(默认)显示文件的确切大小，单位是byte；off显示文件大概大小，单位KB、MB、GB
        autoindex_localtime off;   # off(默认)时显示的文件时间为GMT时间；on显示的文件时间为服务器时间
    }
}

# clone本项目到服务器
cd /opt
git clone https://github.com/QinLiStudio/download.git download-theme

# 使用docker部署
docker run -d \
  --name fancyindex \
  -v /opt/download:/share \
  -v /opt/download-theme:/theme/Nginx-Fancyindex-Theme/ \
  -p 8000:80 \
  -e "DISABLE_AUTH=true" \
  --restart always \
  fraoustin/fancyindex
```

### 重定向

```nginx
server {
    listen 80;
    server_name url;
    # 强制 https
    rewrite ^(.*)$ https://$host$1 permanent;

    # 单域名重定向
    if ($host = 'www.sherlocked93.club'){
        return 301 https://www.sherlocked93.club$request_uri;
    }

    # 全局非 https 协议时重定向
    if ($scheme != 'https') {
        return 301 https://$server_name$request_uri;
    }

    # 或者全部重定向
    return 301 https://$server_name$request_uri;
}
```

### 负载均衡

```nginx
# 负载均衡 权重
upstream group1{
    ip_hash; # 同一客户端访问同一服务器
    least_conn; # 动态分配给压力较小服务器
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
# 过期时间
expires 10h;
# 关闭
expires -1;
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

# 加速访问
gzip on;
```

### 移动端适配

```nginx
server {
    listen 80;
    server_name test.com;

    location / {
     root  /usr/local/app/pc; # pc 的 html 路径
        if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
            root /usr/local/app/mobile; # mobile 的 html 路径
        }
        index index.html;
    }
}
```
