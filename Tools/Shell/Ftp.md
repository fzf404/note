<!--
title: Ftp
sort:
-->

## goftp

```bash
# 依赖库
go get github.com/goftp/file-driver
go get github.com/goftp/server
# 安装
go install github.com/goftp/server/exampleftpd
ln ~/go/bin/exampleftpd /usr/bin/ftpd
# 运行
ftpd --host 0.0.0.0 \
     --port 2121 \
     --user fzf \
     --pass mxr2002+ftp \
     --root /www/website/dl.fzf404.art
```

## docker

```bash
docker run -d -v /opt/download:/home/vsftpd/<user_name> \
  -p 20:20 -p 21:21 -p 21100-21110:21100-21110 \
  -e FTP_USER=<user_name> -e FTP_PASS=<password> \
  -e PASV_ADDRESS=<server_ip> -e PASV_MIN_PORT=21100 -e PASV_MAX_PORT=21110 \
  --name vsftpd --restart=always fauria/vsftpd
```

## 客户端

> 推荐使用[Filezilla](https://www.filezilla.cn/)

## 问题

> Can't open that file: Permission denied

```bash
sudo chown -fR www ./*
sudo chgrp -fR www ./*
```
