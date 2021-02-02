<!-- 
title: MySQL
sort: 
--> 

# MySQL

## 安装

### Debian10

```bash
apt isntall mariadb-server
```

### Ubuntu+WSL2

```bash
sudo apt-get install mysql-server 
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

### Win

> `mysqld --initialize --console`

1. 添加至环境变量

2. 新建配置文件`my.ini`

3. ```ini
   [mysql]
   # 设置mysql客户端默认字符集
   default-character-set=utf8
   [mysqld]
   #设置3306端口
   port = 3306
   # 设置mysql的安装目录
   basedir=D:\App\mysql-8.0.21-winx64\
   # 设置mysql数据库的数据的存放目录
   datadir=D:\App\mysql-8.0.21-winx64\data
   # 允许最大连接数
   max_connections=200
   # 服务端使用的字符集默认为8比特编码的latin1字符集
   character-set-server=utf8
   # 创建新表时将使用的默认存储引擎
   default-storage-engine=INNODB
   ```

4. 生成data文件

   > 进入data目录
   >
   > `mysqld --initialize-insecure --user=mysql`

5. 启动服务

   > 安装服务：`mysqld -install`
   >
   > 开启服务：`net start mysql `
   >
   > 停止服务：`net stop mysql`
   >
   > 卸载服务：`mysqld --remove mysql`

## 配置

```bash
cd /etc/mysql/mysql.conf.d/
cat mysqld.conf
```

### 更换密码

```bash
mysql -u root -p

# update mysql.user set authentication_string=password('passwd') where user='root';
set password = '1234';
# ERROR 1372 (HY000): Password hash should be a 41-digit hexadecimal number
# 密码是明文，需要用十六进制码
select password('1234')；
+-------------------------------------------+
| password('mysql')                         |
+-------------------------------------------+
| *E74858DB86EBA20BC33D0AECAE8A8108C56B17FA |
+-------------------------------------------+
1 row in set (0.000 sec)
# 重新修改
set password='*E74858DB86EBA20BC33D0AECAE8A8108C56B17FA';

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

