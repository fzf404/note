<!-- 
title: 01-Flutter入门
sort: 
--> 

## HelloWorld

> [文档](https://api.flutter.dev/)

```dart
import 'package:flutter/material.dart';

// 入口函数
void main() {
  runApp(
    new Center(
      child: new Text(
        'Hello, world!',
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```

### 调用类

```dart
import 'package:flutter/material.dart';

// 入口函数
void main() => runApp(MyApp());

// MyApp类
class MyApp extends StatelessWidget {
  // 重写build方法
  @override
  Widget build(BuildContext context) {
    // 返回一个Material风格的组件
    return MaterialApp(
      title: 'Welcome to Flutteraa',
      home: Scaffold(
        // 创建一个Bar
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        // 主体添加一个hello world
        body: Center(
          child: Text('Hello World'),
        ),
      ),
    );
  }
```

## 组件

### 文本

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Text widget',
      home: Scaffold(
        body: Center(
            child: Text(
          '测试~',
          // 文本位置
          textAlign: TextAlign.left,
          // 超出长度的隐藏方式
          overflow: TextOverflow.ellipsis,
          // 最长行数
          maxLines: 1,
          // 样式 
          style: TextStyle(
            fontSize: 25.0,
            color: Color.fromARGB(255, 255, 255, 150),
            decoration: TextDecoration.underline,
            decorationStyle: TextDecorationStyle.solid,
          ),
        )),
      ),
    );
  }
}
```

### 容器