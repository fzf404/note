<!-- 
title: 内网穿透
sort: 
--> 

> 推荐使用[Sakura](https://www.natfrp.com/)
>
> 咱学校ip好像被sakura给ban了
>
> 自己搭吧

## 自搭

> [Release](https://github.com/fatedier/frp/releases)

```bash
wget https://github.com/fatedier/frp/releases/download/v0.32.0/frp_0.32.0_linux_amd64.tar.gz
tar -zxvf frp_0.32.0_linux_amd64.tar.gz
```

### 编辑配置

```ini
# vim frpc.ini
[common]
# 连接端口
bind_port = 7000
# 控制板端口
dashboard_port = 7800
# 连接密码
token = passswd_token
# 控制板登录
dashboard_user = name
dashboard_pwd = passwd
```

### 启动

> 为frps创建services

```bash
# 进入systemd目录
# cp frps.service /lib/systemd/system/
# @的服务可自定义配置文件名
# cp frps@.service /lib/systemd/system/
# 下面是service中的内容
[Unit]
Description=Frp Server Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
# 注意下面这行
ExecStart=/usr/bin/frps -c /etc/frp/frps.ini

[Install]
WantedBy=multi-user.target

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

### 后台与任务

## 客户端配置

```ini
# vim frpc.ini
[common]
server_addr = ip
server_port = 7000
token = passwd_token
 
[localhost]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = [make sure you open this port in filrewall
```

### 自启

```bash
# 进入frp的systemd目录
# cp frpc.service /lib/systemd/system/
# cp frpc@.service /lib/systemd/system/
# 下面是其中的内容
[Unit]
Description=Frp Client Service
After=network.target

[Service]
Type=simple
User=nobody
Restart=on-failure
RestartSec=5s
# 注意这行
ExecStart=/usr/bin/frpc -c /etc/frp/frpc.ini
ExecReload=/usr/bin/frpc reload -c /etc/frp/frpc.ini

[Install]
WantedBy=multi-user.target

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
