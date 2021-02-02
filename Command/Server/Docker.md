<!-- 
title: Docker
sort: 
--> 

# Docker入门

## 基础操作

> [官方安装文档](https://docs.docker.com/engine/install/)
>
> [阿里镜像源](https://developer.aliyun.com/mirror/docker-ce?spm=a2c6h.13651102.0.0.3e221b11Sit2oJ)
>
> 换源->阿里云->容器镜像服务->镜像加速器

安装后测试

```bash
systemctl start docker
systemctl enable docker
docker run hello-world
```

### 基础命令

```bash
# 拉取镜像
docker pull <image_name>
# 查看所有镜像
docker images
# 删除镜像
docker rmi <id>
# 删除容器
docker rm <cid>
# 导出
docker save -o <path> <id>
# 导入
docker load -i <path>
docker tag <id> name:version
# 容器配置的位置
/var/lib/docker/containers/xx/config.v2.json
```

### 操作

```bash
# 常用参数
docker run -d -p 主机端口:镜像端口 <镜像名称>
# -d 后台运行
# -p 端口
docker run -dit --link <host_name>:<contain_name> image
# 映射网络并增加至/etc/hosst文件

# 正在运行的容器
docker ps [-qa]
# -q 仅查看id 
# -a 全部容器，包括没有运行的

# 查看日志
docker logs -f <cid>
# 进入容器内
docker exec -it <cid> bash
# 停止/删除
docker stop $(docker ps -qa)
docker rm <cid>
# 传文件
docker cp <file> <cid>:<path>
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
from alpine
workdir /app
copy src/ /app
run echo "Success!" > log.txt
cmd cat log.txt
arg bvar=401
env var=404
cmd echo $var
onbuild env pvar=200
# 说明
from: 依赖的镜像
workdir: 工作目录
copy: 相对路径的内容复制到镜像中
run: 构建时运行脚本
cmd: 执行脚本
env: 环境变量
arg: 构建参数-运行时找不到
- build 可通过 --build-arg bvar=403 重新赋值
onbuild: 父镜像传入子镜像的命令

# 制作命令
docker build -t <name>:<version> <path>
docker build -t dftest:1.0 .
# 自动在path中寻找Dockerfile
```

## Docker-Compose

```bash
# 安装
pip3 install docker-compose
docker-compose version
```

### 配置文件`yml`

> `docker-compose.yml`

```yml
version: '3.1'
services:
  mysql:			# 服务名称
    restart: always	# 自启动
    image: mysql	# 镜像
    container_name: mysql_com	# 容器名称
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: password
      TZ: Asia/Shanghai		# 时区
    volumes:	# 数据卷
      - /opt/docker-sql/data:/var/lib/mysql
  tomcat:
  	...
  	volumes:	# 数据卷
      - /opt/docker-tomcat/webapps:/usr/local/tomcat/webapps
      - /opt/docker-tomcat/logs:/usr/local/tomcat/logs	#日志

```

#### 自定镜像

> 父目录要有

```yml
  # 自定义镜像
  self_img:	
    restart: always
    build:
      context: ../	# Dockerfile路径
      dockerfile: Dockerfile	# 指定文件名称
    image: self_img:1.0.1	# 为镜像起名字
    container_name: self_img	# 容器名称
    ports:
      8080:8080
    environment:
      TZ: Asia/Shanghai
```

### 启动

```bash
docker-compose up -d
docker-compose down
docker-compose start|stop|restart
docker-compose ps
docker
```

## LNMP

> `nginx.conf`

```nginx
worker_processes 1;

events {
    worker_connections  1024;
}
http {
    include			mime.types;
    default_type	application/octet-stream;
    
    sendfile		on;
    keepalive_timeout 65;
    
    server {
        listen 80;
        server_name localhost;
        
        location / {
            root /usr/share/nginx/html;
            index index.html index.htm;
        }
        
        error_page  500 502 503 504 /50x.html;
        location = /50x.html {
            root	/usr/share/nginx/html;
        }
        
        location ~ \.php$ {
            fastcgi_pass 	php:9000;
            fastcgi_index 	index.php;
            fastcgi_param 	SCRIPT_FILENAME	/var/www/html/$fastcgi_script_name;
            include 		fastcgi_params;
        }
    }
}
```

> `docker-compose`

```yml
version: "3"
services:
  nginx:
    image: nginx
    ports:
    - 8080:80
    volumes:
    - /root/html:/usr/share/nginx/html
    - /root/conf/nginx.conf:/etc/nginx/nginx.conf
  php:
    image: bitnami/php-fpm
    volumes:
    - /root/html:/var/www/html
  mysql:
    image: mysql
    environment:
    - MYSQL_ROOT_PASSWORD=1234
```

## 配置修改

## 常用镜像

> [DVWA](https://hub.docker.com/r/citizenstig/dvwa)
>
> [code-server](https://hub.docker.com/r/codercom/code-server)

## Code-Server