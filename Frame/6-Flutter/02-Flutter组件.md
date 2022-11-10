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
          '测试',
          // 文本位置
          textAlign: TextAlign.left,
          // 超出长度的隐藏方式
          overflow: TextOverflow.ellipsis,
          // 最长行数
          maxLines: 1,
          // 样式
          style: TextStyle(
            fontSize: 25.0,
            color: Color.fromARGB(255, 255, 0, 0), // Color(0xFF0000ff)
            fontWeight: FontWeight.bold,
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
            alignment: Alignment.center, // 容器内部元素对齐方式
            child: Text('Hello Flutter', style: TextStyle(fontSize: 40.0)),
            width: 500.0,
            height: 400.0,
            color: Colors.lightBlue, // 颜色
            // 左上右下
            padding: const EdgeInsets.fromLTRB(50.0, 50.0, 0.0, 0.0),
            // padding: EdgeInsets.all(30),
            margin: const EdgeInsets.fromLTRB(50.0, 50.0, 0.0, 0.0),
            // margin: EdgeInsets.only(left: 150,top: 0,right: 0,bottom: 0),
            transform: Matrix4.rotationZ(0.5), // 旋转
            decoration: BoxDecoration( // 装饰
              gradient: const LinearGradient( // 渐变
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Colors.pink,
                  Colors.blue,
                ],
              ),
              border: Border.all(width: 5, color: Colors.red), // 边框
              borderRadius: const BorderRadius.all(Radius.circular(20)), // 圆角边框
            ),
          ),
        ),
      ),
    );
  }
}
```

### 图片组件

```dart
return MaterialApp(
  title: title,
  home: Scaffold(
    appBar: AppBar(
      title: Text(title),
    ),
    body: Image.network('https://fzf404.art/public/avatar.jpg'),
    // 或
    Image(
      image: NetworkImage("https://mat1.gtimg.com/pingjs/ext2020/qqindex2018/dist/img/qq_logo_2x.png"),
      width: 200.0,
    )
    // 本地图片
    image: AssetImage("images/xxx.jpg"),
  ),
);
```

#### 引入本地图片

`pubspec.yaml`

```yaml
flutter:
  assets:
    - images/xxx.jpg
```

## 布局

```dart
Row(
  children: []
)

Column(
  children:[]
)

Center(
  child:Text("Hello")
)
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

#### 列表

```dart
ListView(
  scrollDirection: Axis.horizontal, // 横向列表
  children: [
    Container(
      width: 20,
      height: 20,
      color: Colors.red,
    ),
    Container(
      height: 20,
      width: 20,
      color: Colors.blue,
    ),
    Container(
      width: 20,
      color: Colors.green,
    ),
    Container(
      width: 20,
      color: Colors.yellow,
    ),
    Container(
      width: 20,
      color: Colors.orange,
    ),
  ],
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

### Flex

```dart
body: Flex(
  direction: Axis.horizontal,
  children: [
    Container(
      width: 30,
      height: 100,
      color: Colors.blue,
    ),
    Expanded(
      flex: 2,
      child: Container(
        height: 100.0,
        color: Colors.red,
      ),
    ),
    Expanded(
      flex: 1,
      child: Container(
        height: 100.0,
        color: Colors.green,
      ),
    ),
  ],
),
```

### Grid

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
