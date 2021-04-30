<!-- 
title: 内网穿透
sort: 
--> 

## 自搭

> [Release](https://github.com/fatedier/frp/releases)

### 服务端配置

```ini
# vim frps.ini
[common]
# 连接端口
bind_port = 7000
# 控制板端口,用于网页查看状态
dashboard_port = 7800
# 连接密码
token = passswd_token
# z
max_pool_count = 5
# 控制板登录用户名密码
dashboard_user = name
dashboard_pwd = passwd

# 运行一下试试
./frps -c ./frps.ini
```

### 自启动

> 为frps创建services
>
> 项目中service文件已经写好,直接copy过去就可以

```bash
# 进入frp的systemd目录
cp ./systemd/frps.service /lib/systemd/system/
# @的服务可自定义配置文件名
cp ./systemd/frps@.service /lib/systemd/system/


# 把frps与配置文件拷贝到其应在的目录
cp frps /usr/bin
mkdir /etc/frp       
cp frps.ini /etc/frp

# 启动服务
# 重载services
systemctl daemon-reload 
# 尝试运行
systemctl start frps
# 开机自启动
systemctl enable frps
```

## 客户端配置

```ini
# vim frpc.ini
[common]
# 写服务端信息
server_addr = ip
server_port = 7000
token = passwd_token
 
[localhost]
# 写你要开放的端口
type = tcp
local_ip = 127.0.0.1
local_port = 22
# 用英文写的下面这行注释,这句话十分重要
remote_port = [make sure your server open this port on filrewall]
```

### 自启

```bash
# 进入frp的systemd目录
cp ./systemd/frpc.service /lib/systemd/system/
cp ./systemd/frpc@.service /lib/systemd/system/

# 把frpc与配置文件拷贝到其应在的目录
cp frpc /usr/bin
mkdir /etc/frp
cp frpc.ini /etc/frp
# 尝试运行
/usr/bin/frpc -c /etc/frp/frpc.ini

# 启动服务
# 重载services
systemctl daemon-reload 
# 尝试运行
systemctl start frpc
# 开机自启动
systemctl enable frpc
```

