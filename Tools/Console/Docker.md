<!-- 
title: Docker
sort: 
--> 

# Docker入门

## 安装

> [清华安装源](https://mirrors.tuna.tsinghua.edu.cn/help/docker-ce/)

## 基础操作

> [官方安装文档](https://docs.docker.com/engine/install/)
>
> [阿里镜像源](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
>
> 清华镜像
>
> 换源->阿里云->容器镜像服务->镜像加速器

安装后测试

```bash
systemctl start docker
systemctl enable docker

docker run hello-world
# 将 docker 的权限移交给非 root 用户
sudo usermod -aG docker $USER
```

### 基础命令

![img](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/16f6e0a6b0e1ab95.png)

```bash
# 拉取镜像
docker pull <image_name>

# 查看所有镜像
docker images
# 删除镜像
docker rmi <id>
docker rmi (docker image -qa)
# 删除容器
docker rm <cid>
docker rm (docker ps -qa)

# 导出
docker save -o <path> <id>
# 导入
docker load -i <path>
docker tag <id> name:version

# 构建容器 dockerfile
docker build -t <name> .

# 容器配置的位置
/var/lib/docker/containers/xx/config.v2.json
```

### 操作

```bash
# 常用参数
docker run -d -p 主机端口:镜像端口 <镜像名称>
# -d 后台运行
# -p 端口
# 运行并进入
docker run -it <name/id>

# 正在运行的容器
docker ps [-qa]
# -q 仅查看id 
# -a 全部容器，包括没有运行的

# 查看日志
docker logs -f <cid>
# 进入容器内
docker exec -it <cid> bash
# 停止/删除
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rm <cid>
# 传文件
docker cp <file> <cid>:<path>
# 容器转镜像
docker commit <cid>:<img_name>

# 上传镜像
docker push fzf404/opus-go
```

### 数据卷

```bash
# 创建数据卷
docker volume create <name>
# 数据卷信息
docker volume ls
docker volume inspect <name>
# 删除
docker volume rm <name>
# 使用
docker run -v <volume>:<c_path>
/var/lib/docker/volums/<v_name>/_data
```

### Dockerfile

> 自定义镜像

```dockerfile
# 编辑Dockerfile
FROM golang
# 维护人
MAINTAINER "nmdfzf404@163.com"
# 环境变量
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64 \
    GOPROXY="https://goproxy.cn,direct"
# 将此目录作为工作目录
WORKDIR /opt/opus-go
# 复制go文件
COPY . /opt/opus-go 
# 跑起来
RUN go build .
# 开放端口
EXPOSE 8080
# 运行命令
CMD ["./Opus"]

# 制作命令
docker build -t <name>:<version> <path>
docker build -t fzf404/opus-go:1.0 .
# 自动在path中寻找Dockerfile
```

## Docker-Compose

```bash
# 安装
pip3 install docker-compose

docker-compose version
docker-compose up -d
docker-compose down
docker-compose start|stop|restart
docker-compose ps
```

### 配置文件

> `docker-compose.yml`

```yml
version: "3.1"
services:

  db:
    image: mariadb
    container_name: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: ql2020kpi
      MYSQL_DATABASE: Opus

  go:
    image: fzf404/opus-go
    container_name: opus-go
    ports:
    - 8080
    depends_on:
    - db
    links:
    - db
    volumes:
    - /opt/images:/opt/images
    - /opt/opus-go/config/config.toml:/opt/opus-go/config/config.toml

  web:
    image: nginx
    restart: always
    ports:
    - 80:80
    depends_on:
    - go
    links:
    - go
    volumes:
    - /opt/opus-web:/opt/opus-web
    - /opt/nginx/nginx.conf:/etc/nginx/nginx.conf
    - /opt/images:/opt/images
```

> `nginx.conf`

```nginx
worker_processes 1;

events {
  worker_connections  1024;
}

http {
  include		mime.types;
  default_type  application/octet-stream;

  sendfile      on;
  keepalive_timeout 65;

  server {
    listen 80 ;l,.
    server_name localhost;

    location / {
      root /opt/opus-web;
    }

    location /api/ {
      proxy_pass http://opus-go:8080/;
    }

    location /images/ {
      root /opt/;
          }
  }

}

```

### 常用镜像

- Gitlab

```
sudo docker run --detach \
  --hostname gitlab.example.com \
  --publish 9980:80 --publish 9922:22 \
  --name gitlab \
  --restart always \
  --volume /srv/gitlab/config:/etc/gitlab \
  --volume /srv/gitlab/logs:/var/log/gitlab \
  --volume /srv/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest
```

