<!--
title: MongoDB
sort:
-->

[官方图形化工具](https://www.mongodb.com/try/download/compass)

## 安装

```bash
sudo apt install mongodb
# 远程连接修改配置文件
vim /etc/mongodb.conf
ip: 127.0.0.1 -> 0.0.0.0
systemctl restart mongodb
```

## 操作

```bash
# 连接
mongo "mongodb+srv://cluster0.11tv4.gcp.mongodb.net/myFirstDatabase" --username fzf404

# 导入数据
mongoimport --uri="mongodb+srv://fzf404:<password>@cluster0.11tv4.gcp.mongodb.net/test"  -c product products.json

# 设置密码
use admin
db.createUser({user: 'root', pwd: '123456', roles: ['root']})
db.auth('root', '123456')	# 验证成功

vim /etc/mongodb.conf
auth: true
systemctl restart mongodb
```

## 语法

```bash
show dbs # 展示数据库
use yapi # 进入数据库

show collections # 展示集合

db.user.find() # 查询集合数据
db.user.find({email:/@gmail/}) # 条件查询, eamail 字段中含有gmail的数据

db.user.remove({email:/@gmail/}) # 条件删除
db.user.remove({email:{"$ne":null}) # 不为空的
```
