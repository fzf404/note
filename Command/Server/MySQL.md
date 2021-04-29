<!-- 
title: MySQL
sort: 
--> 

## 安装

### Debian10

```bash
apt install mariadb-server

# sqlmap问题解决
sudo apt-get install libmariadb-dev
pip isntall mysqlclient
```

### Ubuntu+WSL2

```bash
sudo apt-get install mariadb-server
```

### Docker

```bash
docker pull mariadb
docker run -d -p 3306:3306 --name mariadb -e MYSQL_ROOT_PASSWORD=root mariadb
docker exec -it <name>/<cid> bash
```


### 更换密码

```bash
# 开启远程访问
update user set host = '%' where user = 'root';

set password = password('1234');
flush privileges;  #立即生效
```
