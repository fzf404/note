<!-- 
title: Rust
sort: 
--> 

> [中文文档](https://rustwiki.org/zh-CN/rust-by-example/)

```rust
// 遍历字符串
let bytes = s.as_bytes();
for (i, &item) in bytes.iter().enumerate() {
    println!("ID: {}, Word: {}", i, String::from_utf8_lossy(&[item]));
}
```



