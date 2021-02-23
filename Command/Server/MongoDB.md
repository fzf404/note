<!-- 
title: MongoDB
sort: 
--> 

## 安装

```bash
sudo apt install mongodb
# 远程连接修改配置文件
vim /etc/mongodb.conf
ip: 0.0.0.0 -> 127.0.0.1
```

## 操作

```bash
# 连接
mongo "mongodb+srv://cluster0.11tv4.gcp.mongodb.net/myFirstDatabase" --username fzf404 
# 导入数据
mongoimport --uri="mongodb+srv://fzf404:<password>@cluster0.11tv4.gcp.mongodb.net/test"  -c product products.json

```

