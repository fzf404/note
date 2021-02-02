<!-- 
title: 03-Python高级特性
sort: 
--> 
## 列表生成式

- 常规写法与生成式写法：

  ```python
  L = []
  for x in range(1, 11):
      L.append(x * x)
      
  L = [x * x for x in range(1, 11)]
  #将生成式提前，条件是放后
  ```

- [元素 for ]			要生成的元素在前，for循环在后。

  > ```python
  > [m + n for i in 'ABC' for n in 'XYZ']				# 生成全排列
  > 
  > [k + '=' + v for k, v in d.items()]					# 字典变列表
  > 
  > L = [s.lower() for s in L2 if isinstance(s,str)]	# 增加判断条件
  > 
  > # 练习
  > # 1. 100内的全部偶数
  > # 2. 100内的全部质数
  > ```

## 生成器

- 使用`yield`的函数成为生成器。

- 生成器是一个返回迭代器的函数。

- 保存生成式算法

  > next()	 	调用下一项
  >
  > yield			中断，下次从这里执行
  >
  > - 函数是顺序执行，遇到`return`语句或者最后一行函数语句就返回。
  > - 而generator的函数，在每次调用`next()`的时候执行，遇到`yield`语句返回，再次执行时从上次返回的`yield`语句处继续执行。
  > - 注：必须不断递归才能代替next函数。
  
  ```python
  # 生成器
  def n1():
      a = 0
      while True:
          yield a
          a = a+1
  
  ne = n1()
  g1 = next(ne)
  g2 = next(ne)
  pint(g1,g2)
  ```
  

## 迭代器

- 迭代是Python最强大的功能之一，是访问集合元素的一种方式。

- 迭代器有两个基本的方法：**iter()** 和 **next()**。

  ```python
  list = [1, 2, 3, 4]
  it = iter(list)f
  print(next(it))
  ```

- 列表、字典、字符串都是`Iterable`【可迭代对象】

- ```python
  from collections.abc import Iterable
  print(isinstance(对象, Iterable))					# 判断是否为可迭代对象
  ```

- 可以被`next()`函数调用并不断返回下一个值的对象称为迭代器：`Iterator`。

- ```python
  from collections import Iterator
  >>> isinstance((x for x in range(10)), Iterator)
  ```

- 可以使用`isinstance()`判断一个对象是否是`Iterator`对象。

- 生成器全都是`Iterator`对象。

- 可以使用`iter()`函数把`list、dict、str`等变成`iter`函数。

- `Iterator`的计算是惰性的，只有在需要返回下一个数据时它才会计算。

- 建立一个迭代器：

  ```python
  class MyNumbers:
    def __iter__(self):
      self.a = 1
      return self
   
    def __next__(self):
      x = self.a
      self.a += 1
      return x
   
  myclass = MyNumbers()
  myiter = iter(myclass)
  
  print(next(myclass))
  print(next(myclass))
  ```

