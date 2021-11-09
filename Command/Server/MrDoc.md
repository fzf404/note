<!-- 
title: MrDoc
sort: 
--> 

> [官方文档](https://www.mrdoc.fun/doc/18/)

```bash
# 运行
docker run -d --name mrdoc -p 10086:10086 jonnyan404/mrdoc-alpine
# 获得密码
docker logs mrdoc 2>&1|grep pwd
```

