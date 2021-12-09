<!--
title: GFW
sort:
-->

## V2ray

[服务器部署](https://github.com/sprov065/v2-ui)

[win 客户端](https://github.com/2dust/v2rayN)

[mac 客户端](https://github.com/yanue/V2rayU)

[安卓客户端](https://github.com/2dust/v2rayNG)

## v2ray

> [x-ui](https://github.com/vaxilu/x-ui)

```bash
# 自动安装
su root # 切换到root用户
bash <(curl -Ls https://raw.githubusercontent.com/vaxilu/x-ui/master/install.sh)

# 手动安装
cd /root/
wget https://github.com.cnpmjs.org/vaxilu/x-ui/releases/download/0.3.2/x-ui-linux-amd64.tar.gz

rm x-ui/ /usr/local/x-ui/ /usr/bin/x-ui -rf
tar zxvf x-ui-linux-amd64.tar.gz
chmod +x x-ui/x-ui x-ui/bin/xray-linux-* x-ui/x-ui.sh
cp x-ui/x-ui.sh /usr/bin/x-ui
cp -f x-ui/x-ui.service /etc/systemd/system/
mv x-ui/ /usr/local/
systemctl daemon-reload
systemctl enable x-ui
systemctl restart x-ui

# 默认用户名密码
admin
admin
```

## ss 客户端

> ss-qt5

## ssr 客户端

> ShadowsocksR
>
> [官方文档]()

```bash
pip install shadowsocks
vim /etc/shadowsocks.json
# add info

# run
ssserver -c /etc/shadowsocks.json
# background
ssserver -c /etc/shadowsocks.json -d start
ssserver -c /etc/shadowsocks.json -d stop
```

## Clash

```bash
# 安装
yay -S clash
go get -u -v github.com/Dreamacro/clash
clash -v

# 运行
/usr/bin/clash
clash -d /etc/clash

# 图形化配置
git clone https://github.com/Dreamacro/clash-dashboard.git
yarn install
yarn start

# 重启网卡
Get-NetAdapter
Restart-NetAdapter
```
