<!-- 
title: pm2
sort: 
--> 

> 应用程序管理

```bash
npm install pm2 -g
```

### 常用

```bash
pm2 start app.js
pm2 start app.py 
# 设置名称
--name demo
# 监听文件修改
--watch
# Log保存位置
--log <log_path>
# 重启延时
--restart-delay 5

# 信息
pm2 [list|ls|status]
pm2 logs
pm2 monit
pm2 plus

# 操作
pm2 restart app_name
pm2 reload app_name
pm2 stop app_name
pm2 delete app_name

```

### 实践

```bash
# nest
npm build
pm2 start --name nest dist/main.js
```

