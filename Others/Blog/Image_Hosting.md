<!-- 
title: Image_Hosting
sort: 
--> 


## 搭建图床

> 限制的阿里云服务器，用来搭一个图床

## Centos7

### 安装docker

> 详见docker.md
>
> ```bash
> # 安装容器编排工具compose
> sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
> sudo chmod +x /usr/local/bin/docker-compose
> 
> ```
>
> Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。

### Pull仓库

```bash
sudo docker pull mariadb:latest
sudo docker pull nmtan/chevereto:latest
```

### 使用``Docker-compose`启动服务

- 新建配置文件

  ```bash
  mkdir cheverto/
  cd cheverto
  touch docker-compose.yaml
  ```
  
- 增加内容

  ```yaml
  version: '3'
  
  services:
    db:
      image: mariadb
      volumes:
        - database:/var/lib/mysql:rw
      restart: always
      networks:
        - private
      environment:
        MYSQL_ROOT_PASSWORD: chevereto_root
        MYSQL_DATABASE: chevereto
        MYSQL_USER: chevereto
        MYSQL_PASSWORD: chevereto
  
    chevereto:
      depends_on:
        - db
      image: nmtan/chevereto
      restart: always
      networks:
        - private
      environment:
        CHEVERETO_DB_HOST: db
        CHEVERETO_DB_USERNAME: chevereto
        CHEVERETO_DB_PASSWORD: chevereto
        CHEVERETO_DB_NAME: chevereto
        CHEVERETO_DB_PREFIX: chv_
      volumes:
        - chevereto_images:/var/www/html/images:rw
      ports:
        - 8888:80
  
  networks:
    private:
  volumes:
    database:
    chevereto_images:
  ```

- 启动服务

  ```python
  nohup docker-compose up & > run.log &
  ```

- 问题

  ```bash
  sudo chmod 666 /var/run/docker.sock
  
  sudo groupadd docker
sudo gpasswd -a ${USER} docker
  sudo service docker restart
  
  sudo yum update		# 更新系统后终于解决了qwwq
  ```
  
  