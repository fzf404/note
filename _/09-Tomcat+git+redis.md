<!--
title: 09-Tomcat+git+redis
sort:
-->

> `wget 192.168.25.37/download/hello-world.war`
>
> `tomcat`: `/var/lib/tomcat9/webapps`
>
> `redis-cli`

## Redis

> 对键值对的操纵
>
> `apt install redis`
>
> `redis-cli`

```sql
-- 添加
set <key_name> <value>
-- 查询
get <key_name>
-- 删除
del <key_name>
-- 批量
mset key1 hello key2 world
mget key1 key2

-- hash 操作
hset hash1 name fzf age 18
hget hash1 name
hgetall hash1
hdel hash1 name

-- list 操作
-- 链表
lpush list1 value1 value2
lrange list1 0 -1
-- 从第0个到结尾

-- set 操作
-- 存入无法改变
sadd set1 value1 value2

-- 删库
flushall
-- 换库
select <index>
```

### 列表

> 看不懂拉倒,谁叫你不来.

![image-20201204183917354](https://gitee.com//nmdfzf404/Image-hosting/raw/master/2020/image-20201204183917354.png)

## Tomcat

> 部署 war 包

## GIthub

```bash
Create a new repository#
# 初始化
git init

git add .
git commit -a -m "update"
# 撤回提交
git log
git reset --soft|--hard <id>
# 发送到远程仓库
git remote add origin <url>
git push -u origin master
```
