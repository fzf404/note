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
    const Center(
      child: Text(
        'Hello, world!',
        // 文字显示模式
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```

### 使用主题

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // Material 主题
    return const MaterialApp(
      title: 'Flutter Demo',
      home: MyHomePage(),
    );
  }
}

// 无状态变更
class MyHomePage extends StatelessWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Scaffold: 页面脚手架
    // 包含 appBar, body, floatingActionButton 等
    return Scaffold(
        appBar: AppBar(
          title: const Text("我是Title"),
        ),
        body: const Center(
            child: Text(
          'Hello World',
        )));
  }
}
```

### 状态更新

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // Material 主题
    return const MaterialApp(
      title: 'Flutter Demo',
      home: MyHomePage(),
    );
  }
}

// 数据渲染
class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  MyHomePageState createState() => MyHomePageState();
}

class MyHomePageState extends State<MyHomePage> {
  var count = 0;

  final ButtonStyle flatButtonStyle = TextButton.styleFrom(
    primary: Colors.white,
    backgroundColor: Colors.blue,
    // 圆角
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.all(Radius.circular(10.0)),
    ),
  );

  @override
  Widget build(BuildContext context) {
    // Scaffold: 页面脚手架
    // 包含 appBar, body, floatingActionButton 等
    return Scaffold(
      appBar: AppBar(
        title: const Text("我是Title"),
      ),
      body: Center(
          child: Column(children: <Widget>[
        Text('$count'),
        TextButton(
          style: flatButtonStyle,
          //点击按钮，修改 count
          onPressed: () {
            setState(() {
              count++;
            });
          },
          child: const Text(
            "Click",
            style: TextStyle(fontSize: 20.0),
          ),
        )
      ])),
    );
  }
}
```

