<!-- 
title: SQLite
sort: 
--> 

```sqlite
# 创建数据库
$ sqlite3 <DBname.db>
.open <DBname.db>

# 信息
.databases
.tables
.show

# 数据类型
REAL	# 浮点数

# 建表
sqlite> CREATE TABLE USER(
   ID INTEGER PRIMARY KEY,
   QQNUM          UNSIGNED BIG INT  NOT NULL,
   CITY        	  INT,
   SUPER          BOOLEAN
);
# 表信息
sqlite> .schema USER
# 删表
sqlite> DROP TABLE database_name.table_name;

# 插入
INSERT INTO COMPANY (QQNUM,CITY,SUPER)
VALUES (null,441535134, 210100, 1);
# 或
INSERT INTO USER VALUES (null,441535134, 210100, 1);


# 导出为文本文件
$ sqlite3 testDB.db .dump > testDB.sql
$ sqlite3 testDB.db < testDB.sql	# 恢复

.exit	# 退出
```

