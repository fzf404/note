<!--
title: Yapi
sort:
-->

[官方文档](https://hellosean1025.github.io/yapi/devops/index.html)

### 部署

```nginx
# nginx
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";

# mongo
apt install mongodb
# nodejs
curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# 图形化部署
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 持续服务
npm i -g pm2
pm2 start ./vendors/server/app.js
# 开机自启动
pm2 startup
pm2 save

# 禁止注册
"closeRegister": true,
```

### 配置文件

```bash
{
   "port": "3000",
   "adminAccount": "ql@sylu.edu.cm",
   "timeout": 120000,
   "db": {
     "servername": "mongodb",
     "port": 27017,
     "DATABASE": "yapi"
   }
 }
```

