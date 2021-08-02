<!-- 
title: 10-Proto入门
sort: 
--> 

## gRPC

### 安装

> [protoc](https://github.com/protocolbuffers/protobuf)

```bash
# vscode 插件
apt install clang-format
vscode -> clang-format / vscode-proto3

# Go语言
go get -u github.com/golang/protobuf/protoc-gen-go
set PATH = "/root/go/bin" $PATH		# 设置环境变量


# 其他语言
wget https://github.com/protocolbuffers/protobuf/releases/download/v3.17.3/protoc-3.17.3-linux-x86_64.zip
set PATH = "/opt/protoc/bin" $PATH
```

### 开始

```protobuf
// proto/person.proto
syntax = "proto3";

option go_package = "./protoc";

message FirstMessage {
  int32 id = 1;
  string name = 2;
  bool is_male = 3;
}

// 编译
protoc --go_out=. proto/person.proto
```

```go
// 使用
func NewPersonMessage() {
	pm := protoc.PersonMessage{
		Id:     1,
		Name:   "fzf404",
		IsMale: true,
	}
	println(pm.GetName())
}
```

### 保存与写入

> `google.golang.org/protobuf/proto`
>
> 将proto生成的结构体保存至文件

```go
// 读取二进制文件
func readFromFile(fileName string, pb proto.Message) error {
	// 读取文件
	dataBytes, err := ioutil.ReadFile(fileName)
	if err != nil {
		log.Fatalln("Read File Error: ", err.Error())
	}
	// 转换为结构踢
	err = proto.Unmarshal(dataBytes, pb)
	if err != nil {
		log.Fatalln("Struct Transform Error: ", err.Error())
	}
	return err
}

// 保存至二进制文件
func writeToFile(fileName string, pb proto.Message) error {
	// 转换为二进制
	dataBytes, err := proto.Marshal(pb)
	if err != nil {
		log.Fatalln("To Bytes Error: ", err.Error())
	}

	// 写入文件
	if err := ioutil.WriteFile(fileName, dataBytes, 0644); err != nil {
		log.Fatalln("Can't Write Error: ", err.Error())
	}

	log.Println("Success Write In: ", fileName)

	return err
}
```

### Json转换

> `google.golang.org/protobuf/encoding/protojson`
>
> proto与json的互转

```go
// 转为JSON
func toJson(pb proto.Message) string {
	marshaler := protojson.MarshalOptions{
		Indent: "	", // 格式化占位符
		UseProtoNames:   true, // 使用proto名称
		EmitUnpopulated: true, // 未定义字段填充
	}

	str, err := marshaler.Marshal(pb)
	if err != nil {
		log.Fatalln("To Json Error: ", err.Error())
	}
	return string(str)
}

// 转为Proto
func fromJSON(in string, pb proto.Message) error {
	err := protojson.Unmarshal([]byte(in), pb)
	if err != nil {
		log.Fatalln("Json To Proto Error: ", err.Error())
	}
	return err
}
```

### 枚举

> 使用`Gender_xxx`来定义。
