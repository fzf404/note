<!--
title: Node-Red
sort:
-->

## 安装

```bash
# 安装
yarn global add node-red

# 生成密文
node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" password
# 登录权限
vim /root/.node-red/settings.js

# 运行
node-red
> http://127.0.0.1:1880/
```
