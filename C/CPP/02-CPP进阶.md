<!-- 
title: 02-CPP进阶
sort: 
--> 

# CPP进阶

## std

> 标准库中函数或对象，都是在std命名空间中定义的。
>
> 调用标准库需要写上std

#### `::`

1. 标明类的变量、函数。

   `Human::setName(char* name);`

2. 命名空间作用域，注明命名空间。

   `std::cout << "Hello World" << std::endl;`

3. 全局作用域，名称一样时调用全局函数

```c++
// 命名空间::类::方法
IR::Statement::toJSON(){}
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
