<!--
title: 09-Systemd
sort:
--> 

> 配置服务

```bash
systemctl enable service
systemctl start service
systemctl stop service
systemcrl restart service
# 重载services
systemctl daemon-reload 
# 查看日志
journalctl -u service
```

