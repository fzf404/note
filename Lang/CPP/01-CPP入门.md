<!--
title: 01-CPP入门
sort:
-->

# C++入门

## 第一个 C++程序

```c++
#include<iostream>
using namespace std;

int main()
{
	cout << "Hello world" << endl;
	system("pause");
	return 0;
}
```

## 入门

```cpp
// 字符串输出
string str = "hello world";
cout << str << endl;

// 输入
cout << "请输入：" << endl;
cin >> str;
cout << str << endl;

// 三目
c = a > b ? a : b;

// 结构体
struct student {
	string name;
	int age;
	int score;
};

// 结构体数组
struct student arr[3]=
{
	{"张三",18,80 },
	{"李四",19,60 },
	{"王五",20,70 }
};

// 结构体指针
struct student * p = &arr[0];
(*p).score=75;
p->score=75;
```

## 命名空间

> 标准库中函数或对象，都是在 std 命名空间中定义的。
>
> 调用标准库需要写上 std

```c++
// ::作用
// 命名空间::类::方法
IR::Statement::toJSON(){}
```
