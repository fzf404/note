<!--
title: Fiddler抓包
sort:
-->

## Fiddler 基础

| 功能         | 介绍                           |
| ------------ | ------------------------------ |
| Statistics   | 统计信息，可多选               |
| Inspectors   | 检查，多种方式查看请求响应报文 |
| AutoResponse | 自动响应，修改服务端返回的数据 |
| Composer     | 构造，修改请求后发送至服务端   |
| Filters      | 过滤器，对于数据流进行过滤     |

### 快捷键

- R 键：重放请求（R 包）
- Shift+R：多次重放
- Ctrl+X：删除全部

### QuickExec

| 命令      | 功能                           |
| --------- | ------------------------------ |
| cls       | 清空请求列表                   |
| select    | 选择对应类型<br />select image |
| `?<text>` | 含有关键词的高亮               |
| `>size`   | 根据大小查找 size              |
| bpu xxx   | 响应前根据关键词设置断点       |
| bpa xxx   | 响应后根据关键词设置断点       |
| bps 404   | 中断 404 状态码                |
| bpv get   | 中断 get 请求                  |

## 手机抓包

1. 设置代理到电脑的 8888 端口
2. Fiddler 的 Connection 打开允许所有
3. 手机访问电脑 ip 及端口，安装 CA 证书
