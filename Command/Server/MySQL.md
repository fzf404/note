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
vi /etc/mysql/my.cnf
bind-address = 0.0.0.0
# 增加远程访问权限
use mysql;
update user set host = '%' where user = 'root';
flush privileges;  # 立即生效

set password = password('1234');
set password for 'root'@'%' = password('1234');
flush privileges;  # 立即生效
```

### 操作

```sql
# 修改表名
> alter table old_name rename as new_name;

# 导出数据库
mysqldump -uroot -p temp > temp.sql 
# 导出数据表
mysqldumo -uroot -p temp name > temp_name.sql

# 导入
mysql -uroot -p
mysql> use temp;
mysql> source temp.sql;
```

