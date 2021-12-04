<!--
title: SQL
sort:
-->

# SQL

## 使用

```mysql
~$ mysql -uroot -p
mysql> select version();	# 版本信息
mysql> select now();		# 当前时间
mysql> exit		# 退出

# 数据库操作
mysql> select database();		# 显示当前使用数据库
mysql> show databases;		# 查看所有数据库
mysql> create database fzf_db charset=utf8;	# 新建
mysql> use fzf_db;		# 切换数据库
mysql> show create database fzf_db;	=# 数据库信息
mysql> drop database zf_db;		# 删除数据库

# 表操作
mysql> show tables；
# 新建表
mysql> create table fzf(
    -> name varchar(10) not null,
    -> id int unsigned primary key auto_increment,
    # 字段名	数据类型		主键		自动增加
    -> age tinyint
    -> );
# 查看表结构
mysql> desc fzf;
mysql> show create table fzf;
# 修改表结构
mysql> alter table fzf add sex enum('man','woman');	# 增加
mysql> alter table fzf add birt datetime;
mysql> alter table fzf change birt birth datetime;	# 重命名
mysql> alter table fzf modify birth datetime not null;		# 修改字段
mysql> alter table fzf drop birth;		# 删除字段

# 数据操作

# Insert	插入
mysql> insert into fzf values('fzf',1,18,'man');
mysql> insert into fzf(id, name) values(null,'cnm');
mysql> insert into fzf values('fzf3',null,15,'man'),('fzf4',null,13,'woman');
+------+----+------+-------+
| name | id | age  | sex   |
+------+----+------+-------+
| fzf  |  1 |   18 | man   |
| cnm  |  2 | NULL | NULL  |
| fzf2 |  3 |   16 | man   |
| fzf3 |  4 |   15 | man   |
| fzf4 |  5 |   13 | woman |
+------+----+------+-------+

# Update 	更新
mysql> update fzf set sex='man';	# 全部设置
mysql> update fzf set sex='woman' where name='fzf4';	# 部分更新
+------+----+------+-------+
| name | id | age  | sex   |
+------+----+------+-------+
| fzf  |  1 |   18 | man   |
| cnm  |  2 | NULL | man   |
| fzf2 |  3 |   16 | man   |
| fzf3 |  4 |   15 | man   |
| fzf4 |  5 |   13 | woman |
+------+----+------+-------+

# Select 选择
mysql> select * from fzf;	# 查看表内容
mysql> select id,name from fzf;
mysql> select id as '编号', name as '姓名' from fzf;	# 别名
+--------+--------+
| 编号   | 姓名    |
+--------+--------+
|      1 | fzf    |
|      2 | cnm    |
|      3 | fzf2   |
|      4 | fzf3   |
|      5 | fzf4   |
+--------+--------+
mysql> select * from students where age>13;

# delete 	删除
mysql> delete from fzf where name='cnm';

# 导入导出
$ mysqldump -uroot -p fzf_db > fzf_db1.sql

```

### where

```mysql
# Where
# 模糊查询
% 任意字符
_ 单个字符
mysql> select * from students where name like '小%';
+----+--------+------+--------+--------+----------------------+
| id | name   | age  | height | gender | ts_delete            |
+----+--------+------+--------+--------+----------------------+
|  1 | 小明   |   14 | 162.00 | 男     | 0x00                 |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00                 |
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00                 |
|  5 | 小齐   |   14 | 163.00 | LGBT   | 0x00                 |
+----+--------+------+--------+--------+----------------------+

mysql> select * from students where age in (13,14);
+----+--------+------+--------+--------+----------------------+
| id | name   | age  | height | gender | ts_delete            |
+----+--------+------+--------+--------+----------------------+
|  1 | 小明   |   14 | 162.00 | 男     | 0x00                 |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00                 |
|  5 | 小齐   |   14 | 163.00 | LGBT   | 0x00                 |
+----+--------+------+--------+--------+----------------------+

mysql> select * from students where age between 13 and 14;
+----+--------+------+--------+--------+----------------------+
| id | name   | age  | height | gender | ts_delete            |
+----+--------+------+--------+--------+----------------------+
|  1 | 小明   |   14 | 162.00 | 男     | 0x00                 |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00                 |
|  5 | 小齐   |   14 | 163.00 | LGBT   | 0x00                 |
+----+--------+------+--------+--------+----------------------+

mysql> select * from students where age not between 13 and 14;
+----+--------+------+--------+--------+----------------------+
| id | name   | age  | height | gender | ts_delete            |
+----+--------+------+--------+--------+----------------------+
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00                 |
+----+--------+------+--------+--------+----------------------+

```

### 排序

```mysql
# 排序
# asc 升序 desc 降序
mysql> select * from students where gender=1 order by age desc;
+----+--------+------+--------+--------+----------------------+
| id | name   | age  | height | gender | ts_delete            |
+----+--------+------+--------+--------+----------------------+
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00                 |
|  1 | 小明   |   14 | 162.00 | 男     | 0x00                 |
+----+--------+------+--------+--------+----------------------+

mysql> select * from students order by age desc,height asc;
+----+--------+------+--------+--------+----------------------+
| id | name   | age  | height | gender | ts_delete            |
+----+--------+------+--------+--------+----------------------+
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00                 |
|  1 | 小明   |   14 | 162.00 | 男     | 0x00                 |
|  5 | 小齐   |   14 | 163.00 | LGBT   | 0x00                 |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00                 |
+----+--------+------+--------+--------+----------------------+
```

### 聚合函数

```mysql
# 聚合函数
count(*)	# 计算总行数
mysql> select count(*) '总人数' from students;
+-----------+
| 总人数    |
+-----------+
|         4 |
+-----------+
mysql> select count(*) from students where gender='男';
+----------+
| count(*) |
+----------+
|        2 |
+----------+

max() min()		# 最大/小值
mysql> select max(age) from students;
+----------+
| max(age) |
+----------+
|       15 |
+----------+

sum()		# 求和
# 平均年龄
mysql> select sum(age)/count(*) from students;
+-------------------+
| sum(age)/count(*) |
+-------------------+
|           14.0000 |
+-------------------+
avg()	# 平均数
round(num,digits)	# 保留位数

```

### 分组

```mysql
# group 分组
group by	# 分组
mysql> select gender from students group by gender;
+--------+
| gender |
+--------+
| 男     |
| 女     |
| LGBT   |
+--------+
mysql> select gender,count(*) from students group by gender;
+--------+----------+
| gender | count(*) |
+--------+----------+
| 男     |        2 |
| 女     |        1 |
| LGBT   |        1 |
+--------+----------+
mysql> select age,count(*) from students group by age;
+------+----------+
| age  | count(*) |
+------+----------+
|   14 |        2 |
|   13 |        1 |
|   15 |        1 |
+------+----------+
mysql> select gender,max(age) from students where gender='男' or gender='女' group by gender;
+--------+----------+
| gender | max(age) |
+--------+----------+
| 男     |       15 |
| 女     |       13 |
+--------+----------+
# 包含
mysql> select gender,group_concat(name) from students group by gender;
+--------+--------------------+
| gender | group_concat(name) |
+--------+--------------------+
| 男     | 小明,小刚          |
| 女     | 小红               |
| LGBT   | 小齐               |
+--------+--------------------+
mysql> select gender,avg(age) from students group by gender;
+--------+----------+
| gender | avg(age) |
+--------+----------+
| 男     |  14.5000 |
| 女     |  13.0000 |
| LGBT   |  14.0000 |
+--------+----------+
# having
mysql> select gender,avg(age) from students group by gender having avg(age) >= 14;
+--------+----------+
| gender | avg(age) |
+--------+----------+
| 男     |  14.5000 |
| LGBT   |  14.0000 |
+--------+----------+
# 设置别名
mysql> select gender,avg(age) av from students group by gender having avg(age) >= 14;
+--------+---------+
| gender | av      |
+--------+---------+
| 男     | 14.5000 |
| LGBT   | 14.0000 |
+--------+---------+
mysql> select gender,count(*),avg(age)from students group by gender;
+--------+----------+----------+
| gender | count(*) | avg(age) |
+--------+----------+----------+
| 男     |        2 |  14.5000 |
| 女     |        1 |  13.0000 |
| LGBT   |        1 |  14.0000 |
+--------+----------+----------+
# with rollup 合计
mysql> select gender,count(*) from students group by gender with rollup;
+--------+----------+
| gender | count(*) |
+--------+----------+
| 男     |        2 |
| 女     |        1 |
| LGBT   |        1 |
| NULL   |        4 |
+--------+----------+

# limit begin, len
mysql> select gender,count(*) from students group by gender limit 0,1;
+--------+----------+
| gender | count(*) |
+--------+----------+
| 男     |        2 |
+--------+----------+
mysql> select * from students limit 0,3;
+----+--------+------+--------+--------+----------------------+
| id | name   | age  | height | gender | ts_delete            |
+----+--------+------+--------+--------+----------------------+
|  1 | 小明   |   14 | 162.00 | 男     | 0x00                 |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00                 |
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00                 |
+----+--------+------+--------+--------+----------------------+
```

### 连接查询

```mysql
join on
# 将一个表中断内容连接至另一表

mysql> select * from students inner join classes;
+----+--------+------+--------+--------+-------------+----+----------+
| id | name   | age  | height | gender | ts_delete   | id | name     |
+----+--------+------+--------+--------+-------------+----+----------+
|  1 | 小明   |   14 | 162.00 | 男     | 0x00        |  1 | fire     |
|  1 | 小明   |   14 | 162.00 | 男     | 0x00        |  2 | sunshine |
|  1 | 小明   |   14 | 162.00 | 男     | 0x00        |  3 | create   |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00        |  1 | fire     |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00        |  2 | sunshine |
|  3 | 小红   |   13 | 152.00 | 女     | 0x00        |  3 | create   |
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00        |  1 | fire     |
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00        |  2 | sunshine |
|  4 | 小刚   |   15 | 165.00 | 男     | 0x00        |  3 | create   |
|  5 | 小齐   |   14 | 163.00 | LGBT   | 0x00        |  1 | fire     |
|  5 | 小齐   |   14 | 163.00 | LGBT   | 0x00        |  2 | sunshine |
|  5 | 小齐   |   14 | 163.00 | LGBT   | 0x00        |  3 | create   |
+----+--------+------+--------+--------+-------------+----+----------+
mysql> select s.name,s.id from students s inner join classes;
+--------+----+
| name   | id |
+--------+----+
| 小明   |  1 |
| 小明   |  1 |
| 小明   |  1 |
| 小红   |  3 |
| 小红   |  3 |
| 小红   |  3 |
| 小刚   |  4 |
| 小刚   |  4 |
| 小刚   |  4 |
| 小齐   |  5 |
| 小齐   |  5 |
| 小齐   |  5 |
+--------+----+
```

### 子查询

```mysql
# 嵌套查询
select * from students where age > ( select avg(age) from students);
# 查询年龄大于平均值的人
+----+--------+------+--------+--------+------------------+
| id | name   | age  | height | gender | ts_delete        |
+----+--------+------+--------+--------+------------------+
|  4 | 小刚   |    15 | 165.00 | 男      | 0x00            |
+----+--------+------+--------+--------+------------------+
```

### 练习

```sql
 create table students(
 id int unsigned primary key auto_increment not null ,
 name varchar(20) default '',
 age tinyint unsigned default 0,
 height decimal(5,2),
 gender enum('男','女','保密','LGBT') default '保密' ,
 ts_delete bit default 0
 );

 create table classes(
 id int unsigned primary key auto_increment not null ,
 name varchar(30) not null
 );

 insert into students values
 (0,'小明',14,162.00,1,0),
 (0,'小红',13,152.00,2,0),
 (0,'小刚',15,165.00,1,0),
 (0,'小齐',14,163.00,4,0)
 ;

 select s.id,s.name from students as s;
 +----+--------+
 | id | name   |
 +----+--------+
 |  1 | 小明   |
 |  3 | 小红   |
 |  4 | 小刚   |
 |  5 | 小齐   |
 +----+--------+
```

## 数据完整性

### 实体完整性

> 主键约束：不能为空，也不能重复 primary key
>
> 唯一约束：可以为空，不能重复：unique key

### 域完整约束

> 非空约束：不能为空 not null
>
> 默认约束：default

### 参照完整性

> 外键约束：建立表与主键的关系 foreign key

## 数据类型

1. ### 整型

   | 数据类型        | 存储(bytes)                                      | 值                                       |
   | :-------------- | :----------------------------------------------- | ---------------------------------------- |
   | TINYINT(size)   | 1                                                | -128_127                                 |
   | SMALLINT(size)  | 2                                                | -32768_32767                             |
   | MEDIUMINT(size) | 3                                                | -8388608_8388607                         |
   | INT(size)       | 4                                                | -2147483648_2147483647                   |
   | BIGINT(size)    | 8                                                | -9223372036854775808_9223372036854775807 |
   | FLOAT(size,d)   | 4                                                | 总位数最大值，小数位最大值               |
   | DOUBLE(size,d)  | 8                                                |                                          |
   | DECIMAL(size,d) | 作为字符串存储的 DOUBLE 类型，允许固定的小数点。 |                                          |
   | enum(options)   |                                                  |                                          |
