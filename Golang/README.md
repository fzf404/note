<!-- 
title: Golang
sort: 
--> 

## 安装

```golang
apt install golang-1.13
ln -s /usr/lib/go-1.13/bin/go /usr/bin/go

yum install golang	# 1.15版
```

## 代理

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```

## 多版本

```bash
go version
go get golang.org/dl/go1.13.6
go env GOPATH
cd ↑/bin
chmod 755 go1.13.6
./go1.13.6 download
```
