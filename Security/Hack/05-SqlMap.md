<!-- 
title: 05-SqlMap
sort: 
--> 

## 基础使用

- 查询数据库

> `-Raw`: 文件
>
> `-Parameter`: 参数
>
> `--dbs`: 全部数据库
>
> `sqlmap -r xxx -p pwd --dbs`

- 使用url

> `-Url`: 网址
>
> `sqlmap -u http://xxx -p pwd --dbs`

- 详细信息

> `-Database`: 数据库名称
>
> `-Table`: 数据表名称
>
> `-Columns`: 行名称
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

- 直连

> `--users`: 用户信息
>
> `sqlmap -d "musql://root:1234@127.0.0.1:3306/dbname" -f --banner`

## 设置

- 请求方法

> `--data="id=1"`
>
> `--method=POST`