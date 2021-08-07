<!-- 
title: Redis
sort: 
--> 

> 以键值对方式存储数据

```bash
# 安装
apt install redis

# 开启服务
#redis-server

# 连接服务
redis-cli -h host -p port -a password
# 默认端口6379
```

## 基础命令

> 对键值对的操纵

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
lpush line1 value1 value2
lrange line1 0 -1
-- 从第0个到结尾

-- set 操作
-- 存入无法改变
sadd set1 value1 value2

-- 删库
flushall
-- 换库
select <index>

-- 全部key
keys 
```

