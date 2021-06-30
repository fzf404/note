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
      // Scaffold: Material 布局结构
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

