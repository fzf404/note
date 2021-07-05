 <!-- 
title: 02-Rust进阶
sort: 
--> 

### 数据操作

```rust
// 存在栈Stack上的Int
let i = 5;
// 存在堆Heap上的String
let mut s = String::from("Hello");
s.push_str(" World");

// 字符串引用 &st
let str = "Hello World";

// 复制Copy
let j = i;

// 移动Move
// s的所有权移给s2，s失效,指针赋给s2
let s2 = s;

// 克隆Clone，s不失效
let s2 = s.clone();

// 引用
// 引用某些值而不获得所有权
let s1 = &s;
let s2 = &mut s;	// 可变引用

// 切片
&s[..3]
```

