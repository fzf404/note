<!-- 
title: GFW
sort: 
--> 

## V2ray

[服务器部署](https://github.com/sprov065/v2-ui)

[win客户端](https://github.com/2dust/v2rayN)

[mac客户端](https://github.com/yanue/V2rayU)

[安卓客户端](https://github.com/2dust/v2rayNG)

## ss客户端

> ss-qt5

## ssr客户端

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

