<!-- 
title: 01-CPP入门
sort: 
--> 

# C++入门

## 第一个C++程序

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
// 字符串
string str = "hello world";
cout << str << endl;		// 输出
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
p->score=75;
```

## 面向对象

```cpp
#include <stdio.h>

class ClassHi {
public:
  ClassHi() {
    button = false;
    f = stdout;
  }
  ClassHi(FILE *ff) {
    button = false;
    f = ff;
  }
  void print(char *s) { fprintf(f, "%s\n", s); }
  void on() { button = true; }
  void off() { button = false; }

private:
  bool button;
  FILE *f;
};

int main(){
  ClassHi hi;
  hi.print((char*)"Hi~Class");
  ClassHi hi2(stderr);
  hi.print((char*)"Hi~Class");
}
```

