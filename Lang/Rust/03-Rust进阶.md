 <!-- 
title: 03-Rust进阶
sort: 
-->

### 数据操作

```rust
// 存在栈Stack上的Int
let i = 5;
// 存在堆Heap上的String
let mut s = String::from("Hello");
s.push_str(" World");

// 字符串引用 &str
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


// 切片 &t
// 对于字符串中某一长度数组的引用
&s[..3]
// 这也是切片
let s = "Hello World!"

// 例子
fn first_word(s: &String) -> &str {
  // 转换为&[u8]
  let bytes = s.as_bytes();
  // 遍历
  for (i, &item) in bytes.iter().enumerate() {
    if item == b' ' {
      return &s[..i];
    }
  }
  &s[..]
}
```

### Module

```rust
// lib.rs
mod eat {
    pub struct Breakfast {
        pub staple: String,
        fruit: String,
    }
    impl Breakfast {
        pub fn rice(fruit: &str) -> Breakfast {
            Breakfast {
                staple: String::from("rice"),
                fruit: String::from(fruit),
            }
        }
    }
}

pub fn eat_normal() {
    let meal = eat::Breakfast::rice("apple");
    println!("{}", meal.staple);
}

/
use eat::Breakfast;

// main.rs
include!("lib.rs");
fn main() {
    eat_normal();
}
```
