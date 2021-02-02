<!-- 
title: 01-Python基础
sort: 
--> 
## python学习阶段常用命令

- `dir()`

  > 返回属性列表
  >
  > 可用于查看一个对象的所有方法

- `type()`

  > 返回对象类型
  
- `help()`

  > 返回对象帮助

- `id()`

  > 返回对象内存地址

## 数据类型

### `list`	列表

> list.append()		追加元素
>
> list.insert()			插入元素至指定位置
>
> list.pop					删除末尾元素

### `tuple`	元组

> tuple = ( )				使用（）	
>
> tuple = ( 1 , )			定义一个数据必须加括号
>
> t = ('a', 'b', ["a"])		定义一个”可变“tuple

### `dict`	字典

> d = {'a': 5, 'b': 6}		定义一个字典
>
> d = dict([('a', 1), ('b', 2)])	
>
> d.get('x', val)			x不存在的返回值	
>
> 不准许放入列表	



## 函数

### 传参

> `function(a, b, *change )`	
>
> 传入可变参数（即不需要名称的参数），所有参数放入一个名叫change的tuple。
>
> `function(a, b, **change )`	
>
> 传入关键字参数（即带名称的参数），所有参数放入一个名为change的dict中。
>
> `function(a, *, bit)`					
>
> 传入命名关键字参数，必须传入，参数名必须为bit	例：「bit = "233"」
>
> `function(a, b, *args, bit, cat)`	
>
> 假如有可变参数，就不用加\*了
>
> `funcation(12, 34, bit, cat=2`)	可以有缺省值，有默认值也可不传入	

### 参数组合

- ```python
  def f1(a, b, c = 1, *args, **kw):
  ```

  > ```python
  > f1(1,2,5,'ai','py',dict = hh)
  > >>> a = 1, b = 2, c = 5, args = ('ai','py'), kw = {dict:'hh'}
  > 
  > args = (1, 2, 3, 4)
  > kw = {'d': 99, 'x': '#'}
  > f1(*args, **kw)
  > >>> a = 1, b = 2, c = 3, args = (4,) kw = {'d': 99, 'x': '#'} 
  > ```

  
  