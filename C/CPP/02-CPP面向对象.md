<!-- 
title: 02-CPP面向对象
sort: 
--> 

# CPP进阶

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

### 继承

```cpp
class ClassSon : ClassHi { }
```

### 多态

> 定义虚函数, 子类可以覆写

```cpp
class person {
public:
	virtual int Price(){
		return 10;
	}
};
class student : person {
public:
	virtual int Price(){
		return 5 ;
	}
};
```

### 函数重载

> 可以定义同名函数,根据参数的不同自动选择调用

### 运算符重载

>  两个自定义数据类型的运算

```cpp
#include <iostream>
using namespace std;

class Person {
public:
  Person(){};
  Person(int a, int b) {
    this->m_A = a;
    this->m_B = b;
  }
  // 成员函数实现 + 号运算符重载
  Person operator+(const Person &p) {
    Person temp;
    temp.m_A = this->m_A + p.m_A;
    temp.m_B = this->m_B + p.m_B;
    return temp;
  }

public:
  int m_A;
  int m_B;
};

// 全局函数实现 + 号运算符重载
// Person operator+(const Person& p1, const Person& p2) {
//  Person temp(0, 0);
//  temp.m_A = p1.m_A + p2.m_A;
//  temp.m_B = p1.m_B + p2.m_B;
//  return temp;
// }

// 全局函数实现运算符重载
Person operator+(const Person &p2, int val) {
  Person temp;
  temp.m_A = p2.m_A + val;
  temp.m_B = p2.m_B + val;
  return temp;
}

void test() {

  Person p1(10, 10);
  Person p2(20, 20);

  //成员函数方式
  Person p3 = p2 + p1; // 相当于 p2.operaor+(p1)
  cout << "mA:" << p3.m_A << " mB:" << p3.m_B << endl;

  Person p4 = p3 + 10; // 相当于 operator+(p3,10)
  cout << "mA:" << p4.m_A << " mB:" << p4.m_B << endl;
}

int main() {
  test();
  return 0;
}
```

## vector

> vector (向量) 是一个能够存放任意类型的动态数组。

```c++
#include <iostream>
#include <vector>

using namespace std;

int main(void)
{
    vector<int> v;
    v.push_back(666);
    v.push_back(404);
    v.push_back(233);
    v.pop_back();
    for (size_t i = 0; i < v.size(); i++)
    {
        cout << v[i] << endl;
    }

    return 0;
}
```
