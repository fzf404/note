<!-- 
title: 01-Rust入门
sort: 
--> 

## 安装

[官网](https://www.rust-lang.org/tools/install)

```bash
rustup update	# 更新
rustc --version	# 版本 
rustup doc		# 本地文档
```

### HelloWorld

```rust
fn main(){
  println!("Hello World");
}

rustc main.rs
./main
```

## Cargo

> 包管理器

```bash
cargo new hello_cargo
cargo build	# 编译
cargo run	# 编译并执行
cargo build --release	# 发布编译
```

### 语法

```
let 
```

