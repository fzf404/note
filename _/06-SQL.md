<!-- 
title: 06-数据库
sort: 
--> 

> 高速查询数据的方法

## 为什么使用SQL

> 你要建立一个社交网站，需要储存用户数据。
>
> 学过c语言的人可能会说，用链表实现。
>
> 学过python的人可能会说，存成csv。
>
> 但假如用户超过万人，为了查询用户遍历链表及文件是一件极为痛苦的事情。
>
> 而使用数据库，索引的查询是极为高效的。
>

## 关系与非关系

> 关系型数据库：mysql
>
> 非关系型：MongoDB
>
> 个人更偏向非关系型，但mysql是一定要讲的

## 基础语法

> 关键词
>
> database->table->data

| 命令     | 用法                                                         |
| -------- | ------------------------------------------------------------ |
| `use`    | 选择使用哪个数据库                                           |
| `select` | 选择，可理解为读取并输出。<br />`select version();`          |
| `show`   | 展示数据库信息<br />`show databases;`                        |
| `create` | 新建<br />`create table usrinfo;`                            |
| `drop`   | 删除<br />`drop table usrinfo;`                              |
| `insert` | 插入数据<br />`insert into usrinfo values(1，'fzf', 18, 'pwd')` |
| `where`  | 模糊查询<br />`select * from usrinfo `                       |
| `delete` | 删除数据                                                     |

`select`

> `select name from table`

`create`

> `create table/database name`

`delete`

> `delete from table where name=?;`

### 尝试流程

```mysql
# 安装 使用mariaDB-完全兼容MySQL的开源数据库
apt install mariadb-common mariadb-server
# 使用
mysql
set password='1234';
# 报错？自己搜！
# 运行成功别忘记刷新
flush privileges;
exit	# 退出
mysql -u root -p	# 重新登陆
# 尝试教过的命令
exit
```

## 作业

```bash
wget dl.fzf404.top:7002/work1.sh && chmod +x ./work1.sh && ./work1.sh
```

1. 修改数据库密码为1234。

2. 新建一个`database`名为`homeworkDB`

3. 运行程序，下图所示为运行成功入门

   > 运行失败将会有英文提示，请自己理解。

   ![image-20201127114406613](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201127114406.png)

4. 读取`homeworkDB`中新建的表，出现下图字样则为成功！

![image-20201127114156348](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201127114203.png)