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
sudo service mysql start
sudo service mysql stop
ps -ajx|grep mysql
```

### Docker

```bash
docker pull mariadb
docker run -d -p 3306:3306 --name mariadb -e MYSQL_ROOT_PASSWORD=root mariadb
docker exec -it <name>/<cid> bash
```



### 更换密码

```bash
set password = password('ql2020kpi');
flush privileges;  #立即生效
```

### 其他

```mysql
# 选择要使用的数据库
use mysql;
# 查询用户
select User from user;
# 开启远程访问
update user set host = '%' where user = 'root';	
```

