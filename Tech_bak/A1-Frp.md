<!-- 
title: 内网穿透
sort: 
--> 

> 推荐使用[Sakura](https://www.natfrp.com/)
>
> 咱学校ip好像被sakura给ban了
>
> 自己用阿里云搭吧

## 自搭

> [Release](https://github.com/fatedier/frp/releases)
>
> 使用开源项目frp-v0.32

```bash
wget https://github.com/fatedier/frp/releases/download/v0.32.0/frp_0.32.0_linux_amd64.tar.gz
tar -zxvf frp_0.32.0_linux_amd64.tar.gz
```

### 编辑配置

> frpc是客户端(client),frps是服务端(server)
>
> 别忘记开端口!

```ini
# vim frps.ini
[common]
# 连接端口
bind_port = 7000
# 控制板端口,用于网页查看状态
dashboard_port = 7800
# 连接密码
token = passswd_token
# 控制板登录用户名密码
dashboard_user = name
dashboard_pwd = passwd

# 运行一下试试
./frpc -c ./frpc.init
```

### 自启动

> 为frps创建services
>
> 项目中service文件已经写好,直接copy过去就可以

```bash
# 进入frp的systemd目录
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

