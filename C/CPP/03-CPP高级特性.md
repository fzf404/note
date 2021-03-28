<!-- 
title: 03-CPP高级特性
sort: 
--> 

## 列表初始化

```cpp
class foo {
public:
  foo(string s, int i) : name(s), id(i){}; // 初始化列表
private:
  string name;
  int id;
};
```

## 模板编程

```cpp
int add(int a, int b) { return a + b; }
float add(float a, float b) { return a + b; }
// 等同前两个
template <typename T> T add(T a, T b) { return a + b; }
```

## STL

![image-20210328210911422](C:\Users\fzf404\AppData\Roaming\Typora\typora-user-images\image-20210328210911422.png)