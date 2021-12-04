<!--
title: 12-gRPC服务
sort:
-->

## 开始

> 单向流与双向流

### 安装

```bash
# 初始化
go mod init grpc-server
# 依赖
go get google.golang.org/grpc

# 证书
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cery.pem -days 365 -nodes -subj /CN=localhost
# 设置证书环境变量
export GODEBUG=x509ignoreCN=0

# 编译proto
protoc --proto_path=./protos ./protos/*.proto --go_out=plugins=grpc:.
```

### Server

```go
const port = ":5000"

unc main() {
	// 监听端口
	listen, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalln(err.Error())
	}
	// 证书加载
	creds, err := credentials.NewServerTLSFromFile("cert.pem", "key.pem")
	if err != nil {
		log.Fatalln(err.Error())
	}
	options := []grpc.ServerOption{grpc.Creds(creds)}
	// 初始化server
	server := grpc.NewServer(options...)
	pb.RegisterEmployeeServiceServer(server, new(employeeService))
	log.Println("gRPC Server Started.")
	log.Println("Listen in", port)
	// 持续监听
	server.Serve(listen)
}

// 定义方法实现结构体
type employeeService struct{}
```

### Client

```go
const port = ":5000"

func main() {
	// 加载证书
	creds, err := credentials.NewClientTLSFromFile("cert.pem", "")
	if err != nil {
		log.Fatalln(err.Error())
	}
	options := []grpc.DialOption{grpc.WithTransportCredentials(creds)}
	// 获得tcp连接
	conn, err := grpc.Dial("localhost"+port, options...)
	if err != nil {
		log.Fatalln(err.Error())
	}
	defer conn.Close()
	// 初始化客户端
	client := pb.NewEmployeeServiceClient(conn)
	// 调用各个方法
	GetByNo(client)
	GetAll(client)
	AddPhoto(client)
	SaveAll(client)
}
```
