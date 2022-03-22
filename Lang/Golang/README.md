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

## 依赖管理

```bash
# 初始化项目
go mod init

# 安装依赖
go mod download

# 清理依赖
go mod tidy
```

