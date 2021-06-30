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

## 技巧

```go
// 执行命令
cmd := exec.Command("/bin/bash", "echo hi~")	// 定义命令
stdout, _ := cmd.StdoutPipe()				// 创建输出流
cmd.Start()		// 执行
bytes, _ := ioutil.ReadAll(stdout)	// 获得输出

// 字符串与数字互转
strconv.Atoi(str)		// 字符串转数字
strconv.Itoa(num)		// 数字转字符串
string(bytes)				// bytes[] 转字符串

// 时间
// 时间转换模板
timeTemplate := "2006-01-02 15:04:05"
// 时间格式化+8
art.CreatedAt.Local().Format(timeTemplate)
时间戳.Local().Format(timeTemplate)
```