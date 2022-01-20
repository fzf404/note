<!--
title: 02-Flutter组件
sort:
-->

## 组件

### List

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
            color: Color.fromARGB(255, 255, 0, 0),
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

- `bottomCenter`:下部居中对齐。
- `botomLeft`: 下部左对齐。
- `bottomRight`：下部右对齐。
- `center`：纵横双向居中对齐。
- `centerLeft`：纵向居中横向居左对齐。
- `centerRight`：纵向居中横向居右对齐。
- `topLeft`：顶部左侧对齐。
- `topCenter`：顶部居中对齐。
- `topRight`： 顶部居左对齐。

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Text widget',
      home: Scaffold(
        appBar: AppBar(title: Text('hi~')),
        body: Center(
          child: Container(
            child: Text('Hello Flutter', style: TextStyle(fontSize: 40.0)),
            alignment: Alignment.center,
            width: 500.0,
            height: 400.0,
            color: Colors.lightBlue, // 颜色
            // 左上右下
            padding: const EdgeInsets.fromLTRB(50.0, 50.0, 0.0, 0.0),
            margin: const EdgeInsets.fromLTRB(50.0, 50.0, 0.0, 0.0),
          ),
        ),
      ),
    );
  }
}
```

#### decoration

```dart
decoration: BoxDecoration(
    // 渐变
    gradient: const LinearGradient(
        colors: [Colors.lightBlue, Colors.purple]),
    // 边框
    border: Border.all(width: 4.0, color: Colors.green)),
),
```

### 图片组件

```dart
return MaterialApp(
  title: title,
  home: Scaffold(
    appBar: AppBar(
      title: Text(title),
    ),
    body: Image.network('https://fzf404.top/public/avatar.jpg'),
  ),
);
```

### 列表组件

```dart
body: ListView(
  children: <Widget>[
    ListTile(
      leading: Icon(Icons.access_time),
      title: Text('access_time'),
    ),
    ListTile(
      leading: Icon(Icons.account_balance),
      title: Text('account_balance'),
    ),
  ],
),
```

#### 横向列表

```dart
body: Center(
  child: Container(
    height: 200.0,
    child: MyList()
  ),
),

// 封装成组件
class MyList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      scrollDirection: Axis.horizontal,
      children: <Widget>[
        Container(
          width: 160.0,
          color: Colors.red,
        ),
        Container(
          width: 160.0,
          color: Colors.blue,
        ),
        Container(
          width: 160.0,
          color: Colors.green,
        ),
        Container(
          width: 160.0,
          color: Colors.yellow,
        ),
        Container(
          width: 160.0,
          color: Colors.orange,
        ),
      ],
    );
  }
}
```

#### 动态列表

> 传递参数

```dart
import 'package:flutter/material.dart';

void main() =>
    runApp(MyApp(items: List<String>.generate(1000, (i) => "Item $i")));

class MyApp extends StatelessWidget {
  final List<String> items;
  MyApp({Key key, @required this.items}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'fzf404 & flutter',
      home: Scaffold(
        appBar: AppBar(title: Text('List')),
        body: ListView.builder(
          itemCount: items.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text('${items[index]}'),
            );
          },
        ),
      ),
    );
  }
}
```

#### 网格列表

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ListView widget',
      home: Scaffold(
        body: GridView.count(
          padding: const EdgeInsets.all(30),
          crossAxisSpacing: 30.0,
          crossAxisCount: 4,
          children: <Widget>[
            const Text('1'),
            const Text('2'),
            const Text('3'),
            const Text('4'),
            const Text('5'),
            const Text('6'),
            const Text('7'),
            const Text('8'),
          ],
        ),
      ),
    );
  }
}
```
