<!-- 
title: 01-Rust入门
sort: 
--> 

## 安装

[安装文档](https://www.rust-lang.org/tools/install)

```bash
rustup update	# 更新
rustc --version	# 版本 
rustup doc		# 本地文档
```

## Cargo

> [包管理器](https://crates.io/)
>
> [安装](https://doc.rust-lang.org/cargo/getting-started/installation.html)

```bash
cargo new hello_cargo
cargo check	# 检查语法错误
cargo build	# 编译
cargo run		# 编译并执行
cargo build --release	# 发布编译

# 添加依赖
Cargo.toml
```

## 语法

### HelloWorld

```rust
fn main(){
  println!("{} World", "Hello");
}

// 编译
rustc main.rs
./main
```

### 基础

```rust
// 标量
let demo: i16 = 40404;		// 有符号
let demo = 40404u16;			// 无符号
// 可变变量 字符串切片 &str
let mut demo = "String"; 	

// 常量
const MILLION = 1_000_000;

// 数据类型
let byte = b'A'		// byte类型

// 字符串
let mut s = String::from("fzf");
let s2 = String::from("404");
s.push_str(&s2); // 向字符串添加字符串切片
//  s.push_str("40");   // 直接添加
s.push('4')         // 添加字符
// 字符串拼接
let s3 = s + &s2;
format!("{}-{}",s,s2);

// 元组
let tup: (i32, f32, u8) = (404, 3.14, 1);
// 数组
let week = [1,2,3,4,5,6,0];  

// 条件分支
if x == 0 {
    println!("True");
} else if x == 1 {
    println!("False");
} else {
    println!("Error")
}
// 数组遍历
for day in week.iter() {
    println!("{}", day)
}
// range, 翻转
for number in (1..10).rev() {
    println!("{}", number)
}

// 循环
loop {
  break;
}

while stop == true {
  
}

// 函数名(参数)->f
fn get_lens(s: &String) -> usize {
    s.len()
}
```

### 使用

```rust
// 获得输入
let mut input = String::new();
// 错误处理
std::io::stdin().read_line(&mut input).expect("取得输入失败");
println!("{}", input);

// 字符串转数字
let input = input.trim().parse().expect("输入不为数字");

// 比较
// 类似Switch
match input.cmp(&secret) {
    Ordering::Less => println!("太小了"),
    Ordering::Equal => println!("正好") ,
    Ordering::Greater => println!("太大了"),
}

// 错误处理
let input = match input.trim().parse() {
    Ok(num) => num,
    Err(_) => {
        println!("输入错误, 请重新输入: ");
        continue;
    }
};
```

