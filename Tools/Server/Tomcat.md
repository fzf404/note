<!--
title: Tomcat
sort:
-->

> 使用 docker
>
> [dockerhub](https://hub.docker.com/_/tomcat)

```bash
docker pull tomcat
docker run -d -p 8080:8080 --name tomcat_demo tomcat
docker exec -it tomcat_demo bash
rm -rf webapps
mv webapps.dist/ webapps
curl 127.0.0.1:8080
```

### 新建子页

```bash
cd /var/lib/tomcat9/webapps/
mkdir new
cp <file> new/
curl 127.0.0.1:8080/new
```

## war 包

> HelloWorld

1. 将 war 包放到 tomcat 文件夹下的 webapp 中。
2. 打开浏览器`localhost:8080/war_name`
