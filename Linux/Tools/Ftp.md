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
     --root /www/website/dl.fzf404.top
     

```



## 客户端


> 推荐使用[Filezilla](https://www.filezilla.cn/)

## 问题

>  Can't open that file: Permission denied

```bash
sudo chown -fR www ./*
sudo chgrp -fR www ./*
```