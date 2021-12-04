<!--
title: WireShark入门
sort:
-->

# WireShark

## 过滤器

- eth [mac 层过滤]

  > .addr == mac 地址
  >
  > .dst == 目的地址
  >
  > .src == 源地址

- ip [ip 层的过滤]

  > .addr == ip 地址
  >
  > .dst == 目的地址
  >
  > .src == 源地址

- tcp

  > .port == 443

- arp

  > 可以看到路由器问 mac 地址

### 过滤器应用

- `ip.addr == 192.168.0.12 and tcp.port == 22`
