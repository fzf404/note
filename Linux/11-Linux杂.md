<!-- 
title: 11-Linux杂
sort: 
--> 

## Curl

发送网络请求

```bash
curl https://www.baidu.com/
# 下载
curl https://www.baidu.com/ -o 1.html
# 静音模式，不输出任何东西
curl https://www.baidu.com/ -s 
# 指定请求头
curl -H -d -X
# 设置头、post方法以及date
curl https://www.baidu.com/?name =='kiki' -H "A:B" -X POST -d "age = 22"
```

## 后台执行

```
 ./test &
 ./test >> out.txt 2>&1 &    # 将标准输出重定向到out.txt
 jobs -l     # 查看后台程序
 nohup ./test &  # 不挂起
```

## 信息

```
free -h     # 内存信息
ps -ef | grep python3
lsb_release -a
```

## wget

```bash
wget -c -r -np -k -L -p url	# 下载全部文件
wget -m url		# 站点镜像
```

### 定时执行

> `cron`

```
*    *    *    *    *	<command>
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- 星期中星期几 (0 - 7) (星期天 为0)
|    |    |    +---------- 月份 (1 - 12) 
|    |    +--------------- 一个月中的第几天 (1 - 31)
|    +-------------------- 小时 (0 - 23)
+------------------------- 分钟 (0 - 59)
```

### 彻底卸载

```
apt-get remove --purge
```

### 内核

```bash
# 正在使用的内核
uname -a
# 全部内核
rpm -qa | grep kernel
# 卸载
yum remove kernel-x.xx.x
```

