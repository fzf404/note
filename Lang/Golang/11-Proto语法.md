<!-- 
title: 11-Proto语法.md
sort: 
--> 

```protobuf
// protoc/person.proto
syntax = "proto3";    // 声明语法为 proto3

import "protoc/date.proto"; // 引入其他 proto 文件

option go_package = "./protoc";

message PersonMessage {      // 消息体
  int32 id = 1;
  string name = 2;
  float money = 3;
  bytes avatar = 4;   // 二进制
  bool is_super = 5;
  // 允许重复
  repeated string phone_numbers = 6;

  // 枚举实例
  Gender gender = 7;
  // 引入其他消息类型
  Date birthday = 8;
  // 嵌套消息类型应用
  repeated Address addresses = 9;


  // 保留字段
  reserved 10,  100 to max;
  reserved "foo", "bar";

  message Address {
    string province = 1;
    string city = 2;
    string district = 3;
    string street = 4;
  }
}

enum Gender {
  option allow_alias = true;
  NOT_SPECIFIED = 0;
  FEMALE = 1;
  MALE = 2;

  WOMAN = 1;
  MAN = 2;
}

// protoc/date.proto
syntax = "proto3";

option go_package = "./protoc";

message Date {
	int32 year = 1;
	int32 month = 2;
	int32 day = 3;
}

// 编译
protoc  --go_out=. protoc/person.proto protoc/date.proto 
```

