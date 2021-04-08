<!-- 
title: SQLite
sort: 
--> 

```bash
# 创建数据库
$ sqlite3 <DBname.db>
.open <DBname.db>

# 信息
.databases
.tables
.show

# 数据类型
REAL	# 浮点数

# 命令
sqlite> CREATE TABLE COMPANY(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);

# 导出为文本文件
$ sqlite3 testDB.db .dump > testDB.sql
$ sqlite3 testDB.db < testDB.sql	# 恢复

.exit	# 退出
```

