<!--
title: 02-CSharp基础语法
sort:
-->

## 数据类型

> 与 c++差不多

- sizeof

  `Console.WriteLine("Size of int: {0}", sizeof(int));`

### 引用类型

#### 对象类型

```c#
// Object是c#的基类,可以转换后分配给任何类型
int val=404;
object objtest = val;
objtest = 4042;
Console.WriteLine(objtest);
// 4042
```

#### 动态类型`dynamic`

> 对象类型的变量编译时进行类型检查,动态类型在运行时检查.

```c#
dynamic vars="dynamic test!";
Console.WriteLine(vars);
```

#### 字符串类型

```c#
String str = "hello\tfzf!";
String stra = @"hello
				\tfzf";
Console.WriteLine("Str: {0}\n@Str: {1}", str, stra);
// Str: hello	fzf!
// @Str: hello\
//				\tfzf
```

#### 指针类型

> 与 c 中的指针具有相同功能

### 类型转换

```c#
double d = 3.1415;
int i;
// 转换
i = (int)d;
string str = d.ToString();
```

## 接收用户输入

```c#
num = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Input num is: {0}", num);
```
