<!-- 
title: 02-Rust基础
sort: 
-->

### 结构体

```rust
struct User {
    username: String,
    email: String,
    active: bool,
}

struct Color(u8,u8,u8);

fn build_user(username: String, email: String) {
    let mut a_user = User {
        username: username,
        email: email,
        active: false,
    };
    a_user.active = true;
    // 基于实例的更新语法
    User{
      username: String::from("fzf404"),
      ..a_user
    };
    // Tuple Struct
    let white = Color(255,255,255);
}
```

#### 定义方法

```rust
// 为结构体定义方法
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle{
  fn area(&self) -> u32{
    self.width * self.height
  }
  // 关联函数
  fn square(size: u32) -> Rectangle {
    Rectangle {
      height: size,
      width: size,
    }
  }
}
// 将关联函数用于构造器
let a_square = Rectangle::square(30);
println!("{}",a_square.area())
```

### 枚举

```rust
enum IPAddr {
    v4(u8, u8, u8, u8),
    v6(String),
}
let localv4 = IPAddr::v4(127, 0, 0, 1);
let localv6 = IPAddr::v6(String::from("::1"));

// 为枚举定义方法
impl IPAddr{
  fn call(&self) {}
}
```

#### Option

> 可选变量，两种状态，None 或 Some
> 
> Rust 中没有 None 类型，使用 Option 创建。
> 
> 这样当变量不为`Option<T>`类型时，一定不为空。

```rust
let x: Option<i8> = None;
let y = Some(5);
```

### Match

> 必须穷举所有可能性

```rust
// 枚举匹配
enum UsState {
    Alabama,
    Alaska,
}
enum Coin {
    Penny,
    Nickel,
    Quarter(UsState),
}

fn value_in_cent(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Quarter(state) => {
            println!("Quarter {:?}", state);
            25
        }
    }
}

fn main() {
    let c = Coin::Quarter(UsState::Alabama);
    println!("{}", value_in_cent(c));
}

// Option<T>匹配
let y = Some(5);
match y {
  // None => None,
  Some(i) => Some(i + 1),
  _ => None,    // 匹配全部
};

// if let
if let Some(5) = y {
  println!("5")
}
```

### Vector

```rust
// 定义Vectro
let mut v = vec![1, 2, 3];
v[2] = 4;   // 修改值
v.push(4);  // 增加值
// 可变引用
let first =  &mut v[0];
*first = 2; // 修改值
println!("The Fisrt Element is {:?}", v);
```

### HashMap

```rust
use std::collections::HashMap;
// 初始化一个HashMap
let mut color: HashMap<String, Vec<u8>> = HashMap::new();
// 插入
color.insert(String::from("Blue"), vec![0,0,255]);

// 结构体
#[derive(Debug)]
struct RGB {
    r: u8,
    g: u8,
    b: u8,
}
let names = vec![
  String::from("Blue"),
  String::from("Green"),
  String::from("Red"),
];
let rgbs = vec![RGB{r:0,g:0,b:255}, RGB{r:0,g:255,b:0}, RGB{r:255,g:0,b:0}];
// 创建HashMap
let colors: HashMap<_, _> = names.iter().zip(rgbs.iter()).collect();
// 遍历
println!("{:#?}",colors);
for (key,value) in &colors {
  println!("{}: {:#?}", key, value);
}

// 插入
let mut new_colors:HashMap<_, _> = HashMap::new();
new_colors.insert("white",RGB{r:0,g:0,b:0});
// 创建空Map
let e = new_colors.entry("white");
// 不存在value则插入
e.or_insert(RGB{r:255,g:255,b:255});
println!("{:#?}",new_colors)
```
