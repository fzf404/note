<!--
title: 02-Flutter组件
sort:
-->

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
