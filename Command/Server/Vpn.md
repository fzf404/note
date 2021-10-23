<!-- 
title: Vpn
sort: 
--> 

## docker搭建

```bash
# 编辑配置文件
vim vpn.env

VPN_IPSEC_PSK=qlstudio	# 密钥
VPN_USER=qlstudio	# 用户名
VPN_PASSWORD=jwcc312c312	# 密码

VPN_PUBLIC_IP=10.1.5.232	# 服务器地址

VPN_ADDL_USERS=guest	# 更多用户名
VPN_ADDL_PASSWORDS=jwcc312c312	# 更多密码

# docker搭建
docker run \
    --name ipsec-vpn-server \
    --env-file ./vpn.env \
    --restart=always \
    -v ikev2-vpn-data:/etc/ipsec.d \
    -p 500:500/udp \
    -p 4500:4500/udp \
    -d --privileged \
    hwdsl2/ipsec-vpn-server
```

[客户端配置](https://github.com/hwdsl2/setup-ipsec-vpn/blob/master/docs/clients-zh.md)

