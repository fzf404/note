<!--
title: ZeroTier入门
sort:
-->

> [官网](https://www.zerotier.com/)

## 使用

```bash
# 安装 zerotier
curl -s https://install.zerotier.com | sudo bash
# 加入网络
zerotier-cli join <id>

# 安装 moon 节点
docker run --name zerotier-moon -d --restart always -p 9993:9993/udp -v ~/config:/var/lib/zerotier-one seedgou/zerotier-moon -4 <ip>
# 查看节点
docker logs zerotier-moon
# 加入 moon 节点
Ø <id> <id>

# 配置路由
10.5.0.0/16 via 172.24.1.1
# 开启转发
sudo sysctl -w net.ipv4.ip_forward=1 && sudo sysctl -p
# 查看网卡
ip a
PHY_IFACE=ens32; ZT_IFACE=zteb4n5f64
# 配置防火墙
sudo iptables -t nat -A POSTROUTING -o $PHY_IFACE -j MASQUERADE
sudo iptables -A FORWARD -i $PHY_IFACE -o $ZT_IFACE -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A FORWARD -i $ZT_IFACE -o $PHY_IFACE -j ACCEPT
# 保存配置
iptables-save
```