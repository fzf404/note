<!--
title: 03-Flutter路由
sort:
-->

## 引入

`list.dart`

```dart
import 'package:flutter/material.dart';

class ListPage extends StatelessWidget {
  const ListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    
    //定义列表 widget 的 list
    List<Widget> list = <Widget>[];

    // 数据
    var data = [
      {"id": 1, "title": "测试数据AAA", "subtitle": "ASDFASDFASDF"},
      {"id": 2, "title": "测试数据bbb", "subtitle": "ASDFASDFASDF"},
      {"id": 3, "title": "测试数据ccc", "subtitle": "ASDFASDFASDF"},
      {"id": 4, "title": "测试数据eee", "subtitle":"ASDFASDFASDF"},
    ];

    // 构造列表 ListTile 组件 list
    for (var item in data) {
      list.add(ListTile(
          title: Text(item["title"] as String,
              style: const TextStyle(fontSize: 18.0)),
          subtitle: Text(item["subtitle"] as String),
          leading: const Icon(Icons.fastfood, color: Colors.orange),
          trailing: const Icon(Icons.keyboard_arrow_right)));
    }

    // 返回整个页面
    return Scaffold(
      appBar: AppBar(
        title: const Text("List Page"),
      ),
      body: Center(
          child: ListView(
        children: list,
      )),
    );
  }
}
```

`main.dart`

```dart
import 'list.dart';

onPressed: () {
  // 路由跳转
  Navigator.push(context, MaterialPageRoute(builder: (context) {
    return const ListPage();
  }));
},
```

## 

## 定义路由

`main.dart`

```dart
import 'package:flutter/material.dart';
import 'hello.dart';
import 'list.dart';
import 'detail.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    // Material 主题
    return MaterialApp(
      title: 'Flutter Demo',
      //路由表定义
      routes: {
        "Hello": (context) => const Hello(),
        "ListPage": (context) => const ListPage(),
        "DetailPage": (context) => const DetailPage(),
      },
      home: const MyHomePage(),
    );
  }
}

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
        TextButton(
            onPressed: () {
              // 路由跳转
              Navigator.pushNamed(context, 'Hello');
            },
            child: const Text("Hello")),
        TextButton(
          style: flatButtonStyle,
          onPressed: () {
            // 路由跳转
            Navigator.pushNamed(context, 'ListPage');
          },
          child: const Text("List"),
        ),
      ])),
    );
  }
}
```

## 路由传参

`list.dart`

```
import 'package:flutter/material.dart';

class ListPage extends StatelessWidget {
  const ListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    //定义列表 widget 的 list
    List<Widget> list = <Widget>[];

    // 数据
    var data = [
      {"id": 1, "title": "测试数据AAA", "subtitle": "ASDFASDFASDF"},
      {"id": 2, "title": "测试数据bbb", "subtitle": "ASDFASDFASDF"},
      {"id": 3, "title": "测试数据ccc", "subtitle": "ASDFASDFASDF"},
      {"id": 4, "title": "测试数据eee", "subtitle": "ASDFASDFASDF"},
    ];

    // 构造列表 ListTile 组件 list
    for (var item in data) {
      list.add(ListTile(
        title: Text(item["title"] as String,
            style: const TextStyle(fontSize: 18.0)),
        subtitle: Text(item["subtitle"] as String),
        leading: const Icon(Icons.fastfood, color: Colors.orange),
        trailing: const Icon(Icons.keyboard_arrow_right),
        onTap: () {
          // 点击的时候，进行路由跳转传参
          Navigator.pushNamed(context, "DetailPage", arguments: item);
        },
      ));
    }

    // 返回整个页面
    return Scaffold(
      appBar: AppBar(
        title: const Text("List Page"),
      ),
      body: Center(
          child: ListView(
        children: list,
      )),
    );
  }
}
```

`detail.dart`

```dart
import 'package:flutter/material.dart';

class DetailPage extends StatelessWidget {
  const DetailPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // 获取路由传参
    final args = ModalRoute.of(context)?.settings.arguments as Map;

    return Scaffold(
        appBar: AppBar(
          title: const Text("Detail Page"),
        ),
        body: Column(
          children: <Widget>[
            const Text("我是Detail页面"),
            Text("id:${args['id']}"),
            Text("id:${args['title']}"),
            Text("id:${args['subtitle']}")
          ],
        ));
  }
}
```

