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
  --name demo # 设置名称
  --watch # 监听文件修改
  --log <log_path> # Log保存位置
  --restart-delay 5 # 重启延时

# 信息
pm2 [list|ls|status]
pm2 logs
pm2 monit
pm2 plus

# 操作
pm2 delete app_name
pm2 restart app_name
pm2 reload app_name
pm2 stop app_name

# 开机自启
pm2 startup
pm2 save
# 验证
systemctl status pm2-root.service
```

### 实践

```bash
# nest
npm build
pm2 start --name nest dist/main.js
```

