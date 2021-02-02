<!-- 
title: Ftp
sort: 
--> 

## 开启服务

> debian10

```bash
apt update
# 安装vsftpd
apt install vsftpd
vsftpd -versions
# 启动服务
systemctl start vsftpd
# 开防火墙
ufw allow 20/tcp
ufw allow 21/tcp
# 备份配置
cp /etc/vsftpd.conf /etc/vsftpd.conf.orig
# 添加配置
vim /etc/vsftpd.conf
```

```conf
anonymous_enable=NO             # 禁用匿名登录
local_enable=YES		# 允许本地登录
write_enable=YES		# 启用更改文件系统的FTP命令
local_umask=022		        # 为本地用户创建文件的umask值
dirmessage_enable=YES	        # 允许用户首次进入时显示消息新目录
xferlog_enable=YES		# 将维护一个日志文件，详细说明上传和下载
connect_from_port_20=YES        # 使用服务器计算机上的端口20（ftp-data）进行PORT样式连接
xferlog_std_format=YES          # 保持标准日志文件格式
listen=NO   			# 防止vsftpd在独立模式下运行
listen_ipv6=YES		        # vsftpd的监听TPv6，而不是TPv4
pam_service_name=vsftpd         # PAM服务的姓名将使用
userlist_enable=YES  	        # 使vsftpd加载一个用户名列表
tcp_wrappers=YES  		# 开启TCP封装
idle_session_timeout=600        # 无操作超时时间，默认时间单位秒
```

```bash
# 重载
systemctl restart vsftpd
# 新建用户
useradd -m <user_name>
passwd
# 接下来就可以连接了
```

## 客户端


> 推荐使用[Filezilla](https://www.filezilla.cn/)

## 问题

>  Can't open that file: Permission denied

```bash
sudo chown -fR www ./*
sudo chgrp -fR www ./*
```