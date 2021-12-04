<!--
title: 04-Python高级函数与装饰器
sort:
-->

## 高阶函数

- `f=abs`函数可以赋值给变量。
- `abs=10`函数名可以指向其他对象.
- 高阶函数：接收另一个函数为参数

### map/reduce()

- `map()`函数接收两个参数，一个是函数，一个是`Iterable`。

- `map`将传入的函数依次作用到序列的每个元素，并把结果作为新的`Iterator`返回。

- `reduce`把一个函数作用在序列上。并把结果与下一个元素做累计计算。

- ```python
  from functools import reduce

  l = [1, 4, 8, 20, 52]

  def my_pow(i):
      return i**2

  def my_add(x, y):
      return x+y

  print(reduce(my_add, map(my_pow, l)))
  ```

### filter()

- 根据返回值的`T/F`决定保留还是丢弃该元素。

- 返回值是一个`Iterator`,需要用`list()`

  ```python
  def del_odd(i):
      return i % 2 == 0

  l = [1, 2, 3, 4, 5, 6]
  print(list(filter(del_odd, l)))z
  ```

### sorted()

- 排序函数

- 可以根据`key`来决定排序方式。

- 可以使用`reverse`参数进行反向排序。

  ```python
  example_list = [-4, -2, -1, 0, 3, 6]
  print(sorted(example_list, key=lambda x: x*-1))
  ```

## 闭包

- `return function`返回一个函数，下回调用时求值。

- 即使传入相同参数，每次调用都返回一个新的函数。

- **闭包**

  > **将函数内的变量即内部函数`return`到外面**
  >
  > 返回函数不要引用任何循环变量，或者后续会发生变化的变量。
  >
  > 因为函数不会立即执行。除非创建新函数
  >
  > 否则所有变量都将为最终值。

- 从函数中返回函数

  ```python
  def hi(name='fzf'):
      def admin():
          return "hello admin"

      def guest():
          return "hello guset"
      if name == 'fzf':
          return admin
      else:
          return guest


  a = hi()
  print(a())
  ```

- 装饰器

  ```python
  def hi(func, name='fzf'):		# 装饰函数
      def admin():
          print("hello admin")
          func()
          print("bye admin")

      def guest():
          print("hello %s" % name)
          func()
          print("bye %s" % name)

      if name == 'fzf':
          return admin
      else:
          return guest


  def opera():
      print("i want to kill you!")


  a = hi(opera, name="pig")
  a()
  ```

- 使用`@`

  ```python
  def hi(func, name='fzf'):		# 装饰函数
      def admin():
          print("hello admin")
          func()
          print("bye admin")

      def guest():
          print("hello %s" % name)
          func()
          print("bye %s" % name)

      if name == 'fzf':
          return admin
      else:
          return guest

  @hi
  def opera():
      print("i want to kill you!")

  opera()
  ```

- name

  ```python
  print(opera.__name__)
  > admin
  # 打印函数名发现名称变了
  # 可使用wraps
  from functools import wraps
  def hi(func, name='fzf'):
      @wraps(func)
      ...
  ```

- **最基础的闭包+装饰器：**

```python
from functools import wraps


def decorator_name(f):
  @wraps(f)
  def decorated(*args, **kwargs):
      if not can_run:
          return "Function will not run"
      return f(*args, **kwargs)	# 运行原函数
  return decorated		# 返回修饰好的函数


@decorator_name
def func():
  return("Function is running")


can_run = True
print(func())
# Output: Function is running

can_run = False
print(func())
# Output: Function will not run
```

- 高阶带参数

  ```python
  def log(name):
      def hi(func):		# 装饰函数
          def admin():
              print("hello admin")
              func()
              print("bye admin")

          def guest():
              print("hello %s" % name)
              func()
              print("bye %s" % name)

          if name == 'fzf':
              return admin
          else:
              return guest
     return hi


  @log('pig')
  def opera():
      print("i want to kill you!")

  opera()
  ```

## 匿名函数

- 匿名函数`lambda x: x * x`实际上就是：

  ```python
  def f(x):
      return x * x
  ```

- 可以把一个匿名函数赋值给变量。

  ```python
  f = lambda x: x * x
  ```

## 装饰器

> 装饰器必须满足函数是闭包

- 在代码运行期间动态增加功能的方式。

- ```python
  def log(func):				# decorator
  	def wrapper(*args, **kw):
  		print('call %s():' % func.__name__)
  		return func(*args, **kw)
  	return wrapper

  @log						# 相当于：now = log(now(*))
  def now(s):
  	print(s + '2020-3-10')

  now('现在时间：')

  >>>
  call now()
  现在时间：2020-3-10
  ```

- 只是将 now 函数名指向新的函数。

- 假如 decorator 本身需要传入参数，需要编写返回 d 的高阶函数：

- ```python
  def log(text):		# 多加一层
      def decorator(func):
          def wrapper(*args, **kw):
              print('%s %s():' % (text, func.__name__))
              return func(*args, **kw)
          return wrapper
      return decorator

  @log('execute')				# 相当于：now = log('execute')(now)
  def now():
      print('2015-3-25')

  >>> now()
  execute now():
  2015-3-25
  ```

- 为了保留`func.__name__`属性，可使用`functools.wraps`函数。

- ```python
  import functools

  def log(text):
      def decorator(func):
          @functools.wraps(func)
          def wrapper(*args, **kw):
              print('%s %s():' % (text, func.__name__))
              return func(*args, **kw)
          return wrapper
      return decorator
  ```

## 偏函数

- 为一个函数设置默认传入参数。

- ```python
  int2 = functools.partial(int, base=2)
  #相当于
  def int2(x, base = 2):
      return int(x, base)
  # 将二进制转为十进制
  print(int2('1001'))
  ```

- 使用`functools.partial`可以固定住原函数的部分参数，从而在调用时更简单。

## 模块

- ```python
  if __name__=='__main__':		# 判断是否直接运行
      start()
  ```

- `__x__`这样的变量时特殊变量，可以被引用。

- `__x`这样的变量时非公开的，不应直接引用。
