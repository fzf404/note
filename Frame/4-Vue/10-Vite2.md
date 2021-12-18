<!--
title: 11-Vite
sort:
-->

[官方文档](https://vitejs.dev/guide/)

### 搭建

```bash
# 初始化 vite 项目
yarn create vite

# 安装依赖
yarn

# 启动
yarn dev --host

# 构建
yarn build
```

### 环境变量

```js
// 根目录新建 .env 文件
.env
// 内容
VITE_SERVER_URL = http://42.193.122.21:8080

// 获得值
import.meta.env.VITE_SERVER_URL
```
