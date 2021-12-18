<!--
title: WireGuard
sort:
-->

> [安装脚本](https://github.com/angristan/wireguard-install)

```bash
# 服务端
curl -O https://raw.githubusercontent.com/angristan/wireguard-install/master/wireguard-install.sh
chmod +x wireguard-install.sh
./wireguard-install.sh

# 客户端
apt install wireguard # 安装
vim /etc/wireguard/wg0.conf # 配置文件

wg-quick on wg0 # 启动
wg-quick down wg0 # 停止
# 问题
ln -s /usr/bin/resolvectl /usr/local/bin/resolvconf
# 开启后ssh无法连接
```
