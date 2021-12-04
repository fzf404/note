<!--
title: 02-Flutter布局
sort:
-->

## 水平布局 Row

> 顺带介绍三种按钮

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ListView widget',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Row'),
        ),
        body: Row(
          children: <Widget>[
            TextButton(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {},
              child: Text('TextButton'),
            ),
            ElevatedButton(
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {},
              child: Text('ElevatedButton'),
            ),
            OutlinedButton(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {},
              child: Text('OutlinedButton'),
            ),
          ],
        ),
      ),
    );
  }
}

```

### 灵活布局

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ListView widget',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Row'),
        ),
        body: Row(
          children: <Widget>[
            Expanded(
                child: TextButton(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {},
              child: Text('TextButton'),
            )),
            Expanded(
                child: ElevatedButton(
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {},
              child: Text('ElevatedButton'),
            )),
            Expanded(
                child: OutlinedButton(
              style: ButtonStyle(
                foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
              ),
              onPressed: () {},
              child: Text('OutlinedButton'),
            )),
          ],
        ),
      ),
    );
  }
}

```

## 垂直布局 Colume

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ListView widget',
      home: Scaffold(
        appBar: AppBar(
          title: Text('垂直方向布局'),
        ),
        body: Center(
          child: Column(
            children: <Widget>[
              Text('123123'),
              Text('123123123'),
              // 单独横纵居中对齐
              // Expanded(child: Center(child: Text('123123123'))),
              Text('123123123123'),
            ],
            // 垂直居中对齐
            mainAxisAlignment: MainAxisAlignment.center,
            // 左对齐
            crossAxisAlignment: CrossAxisAlignment.start,
          ),
        ),
      ),
    );
  }
}

```

## 层叠布局 Stack

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var stack = Stack(
      children: <Widget>[
        CircleAvatar(
          backgroundImage: NetworkImage('https://fzf404.top/public/avatar.jpg'),
          radius: 100.0,
        ),
        Positioned(
          top: 20.0,
          left: 50.0,
          child: Text('fzf404.top'),
        ),
        Positioned(
          bottom: 20.0,
          right: 50.0,
          child: Text('fzf404'),
        )
      ],
    );

    return MaterialApp(
      title: 'ListView widget',
      home: Scaffold(
        appBar: AppBar(
          title: Text('层叠布局'),
        ),
        body: Center(child: stack),
      ),
    );
  }
}

```

### 卡片布局

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var card = Card(
      child: Column(
        children: <Widget>[
          ListTile(
            title: Text(
              'fzf',
              style: TextStyle(fontWeight: FontWeight.w500),
            ),
            subtitle: Text('404040404'),
            leading: Icon(
              Icons.account_box,
              color: Colors.lightBlue,
            ),
          ),
          Divider(),
          ListTile(
            title: Text(
              'fzf',
              style: TextStyle(fontWeight: FontWeight.w500),
            ),
            subtitle: Text('404040404'),
            leading: Icon(
              Icons.account_box,
              color: Colors.lightBlue,
            ),
          ),
          Divider(),
          ListTile(
            title: Text(
              'fzf',
              style: TextStyle(fontWeight: FontWeight.w500),
            ),
            subtitle: Text('404040404'),
            leading: Icon(
              Icons.account_box,
              color: Colors.lightBlue,
            ),
          ),
          Divider(),
        ],
      ),
    );

    return MaterialApp(
      title: 'ListView widget',
      home: Scaffold(
        appBar: AppBar(
          title: Text('卡片布局'),
        ),
        body: Center(child: card),
      ),
    );
  }
}

```
