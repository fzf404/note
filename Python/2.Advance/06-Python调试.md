d<!-- 
title: 06-Python调试
sort: 
--> 
# Python调试

## 错误处理

- 发生错误时返回错误代码。

- 使用`try...except...finally...`处理错误：

  > Python的错误其实也是class，所有的错误类型都继承自`BaseException`

  ```python
  try:
      print('try...')
      r = 10 / 0
      print('result:', r)
  except ZeroDivisionError as e:		# 发生错误执行
      print('except:', e)				# ‘0’错误
  except ValueError as e:				# 值错误
      print('ValueError:', e)
  else:								# 无错误执行
      print('no error!')
  finally:		4					# 一定执行
      print('finally...')
  print('END')
  ```

- 调用函数链：

  > ```python
  > Traceback (most recent call last):		# 错误信息
  >   File "err.py", line 11, in <module>	# 出错位置
  >     main()
  >   File "err.py", line 9, in main		# 原因再第九行
  >     bar('0')
  >   File "err.py", line 6, in bar			# 原因在第六行
  >     return foo(s) * 2
  >   File "err.py", line 3, in foo			# 最终原因
  >     return 10 / int(s)
  > ZeroDivisionError: division by zero 	# 错误类型
  > ```

- **记录错误**

  > 可以使用内置的`logging`模块记录错误信息。
  >
  > 打印完错误信息后会继续执行。

  ```python
  # err_logging.py
  
  import logging
  
  def foo(s):
      return 10 / int(s)
  
  def bar(s):
      return foo(s) * 2
  
  def main():
      try:
          bar('0')
      except Exception as e:
          logging.exception(e)
  
  main()
  print('END')
  
  '''
  ERROR:root:division by zero
  Traceback (most recent call last):
    File "err_logging.py", line 13, in main
      bar('0')
    File "err_logging.py", line 9, in bar
      return foo(s) * 2
    File "err_logging.py", line 6, in foo
      return 10 / int(s)
  ZeroDivisionError: division by zero
  END
  '''
  ```

- **抛出错误**

  > 可以自定义错误class，列出可能出现的错误
  >
  > `raise`自动抛出异常
>
  > 使用`raise`抛出错误实例。

  ```python
  class FooError(ValueError):
      pass
  
  def foo(s):
      n = int(s)
      if n==0:
          raise FooError('invalid value: %s' % s)
      return 10 / n
  
  foo('0')
  
  '''
  Traceback (most recent call last):
    File "err_throw.py", line 11, in <module>
      foo('0')
    File "err_throw.py", line 8, in foo
      raise FooError('invalid value: %s' % s)
  __main__.FooError: invalid value: 0
  '''
  ```

## 调试

- 出现问题时可以用`print()`

- #### **assert**

  > 可以用`assert`(断言)来替代。
  >
  > `assert`会抛出`assertionError`异常。
  >
  > 启动程序时可使用`-0`参数关闭。

  ```python
  def foo(s):
      n = int(s)
      assert n != 0, 'n is zero!'			# 表达式错误，抛出异常
      return 10 / n
  
  def main():
      foo('0')
      
  # python -0 err.py
  ```
  
- ### **logging**

  > `logging`不会抛出错误，而且可以输出到文件。
  >
  > 允许指定记录信息的级别，有`debug`，`info`，`warning`，`error`等几个级别。
  >
  > 当我们指定`level=INFO`时，`logging.debug`就不起作用了。指定`level=WARNING`后，`debug`和`info`就不起作用了。这样一来，你可以放心地输出不同级别的信息，也不用删除，最后统一控制输出哪个级别的信息。

  ```python
  import logging
  logging.basicConfig(level=logging.INFO)
  
  s = '0'
  n = int(s)
  logging.info('n = %d' % n)
  print(10 / n)
  ```

- ### **pdb**

  > 让程序以单步方式运行。
  
  ```python
  $ python -m pdb err.py		# 运行代码
  (Pdb) l						# 显示全部代码
  (Pdb) n						# 运行下一行
  (Pdb) p name				# 可以输入命令p 变量名来查看变量
  (Pdb) q						# 结束程序
  ```
  
- ### pdb.set_trace()

  > 命令用法同上

  ```python
  import pdb
  
  s = '0'
  n = int(s)
  pdb.set_trace() 			# 设置一个断点，运行到这里会自动暂停
  print(10 / n)
  ```

## PySnooper

- @pysnooper.snoop()

## 单元测试

- 单元测试是用来对一个模块、一个函数或者一个类来进行正确性检验的测试工作。

  > 1. 输入正数，比如`1`、`1.2`、`0.99`，期待返回值与输入相同；
  > 2. 输入负数，比如`-1`、`-1.2`、`-0.99`，期待返回值与输入相反；
  > 3. 输入`0`，期待返回`0`；
  > 4. 输入非数值类型，比如`None`、`[]`、`{}`，期待抛出`TypeError`。

- 把上面的测试用例放到一个测试模块里，就是一个完整的单元测试。

  ```python
  # mydict.py
  class Dict(dict):
  
      def __init__(self, **kw):
          super().__init__(**kw)
  
      def __getattr__(self, key):
          try:
              return self[key]
          except KeyError:
              raise AttributeError(r"'Dict' object has no attribute '%s'" % key)
  
      def __setattr__(self, key, value):
          self[key] = value
          
  >>> d = Dict(a=1, b=2)
  >>> d['a']
  1
  >>> d.a
  1
  ```

  > 编写单元测试时，我们需要编写一个测试类，从`unittest.TestCase`继承。
  >
  > 以`test`开头的方法就是测试方法，不以`test`开头的方法不被认为是测试方法，测试的时候不会被执行。
  >
  > 对每一类测试都需要编写一个`test_xxx()`方法。由于`unittest.TestCase`提供了很多内置的条件判断，我们只需要调用这些方法就可以断言输出是否是我们所期望的。最常用的断言就是`assertEqual()`：

  ```python
  # 用于测试Dict
  import unittest
  
  from mydict import Dict
  
  class TestDict(unittest.TestCase):		# 继承
  
      def test_init(self):
          d = Dict(a=1, b='test')
          self.assertEqual(d.a, 1)		# 判断测试是否成功
          self.assertEqual(d.b, 'test')
          self.assertTrue(isinstance(d, dict))
  
      def test_key(self):
          d = Dict()
          d['key'] = 'value'
          self.assertEqual(d.key, 'value')
  
      def test_attr(self):
          d = Dict()
          d.key = 'value'
          self.assertTrue('key' in d)
          self.assertEqual(d['key'], 'value')
  
      def test_keyerror(self):
          d = Dict()
          with self.assertRaises(KeyError):	# 判断程序会抛出KeyError
              value = d['empty']
  
      def test_attrerror(self):
          d = Dict()
          with self.assertRaises(AttributeError):
              value = d.empty
  ```

- ### setUp与tearDown

  > 在测是开始及结束时执行命令

### 文档测试

- Python内置的“文档测试”（doctest）模块可以直接提取注释中的代码并执行测试。

  ```python
  # mydict2.py
  class Dict(dict):
      '''
      Simple dict but also support access as x.y style.
  
      >>> d1 = Dict()
      >>> d1['x'] = 100
      >>> d1.x
      100
      >>> d1.y = 200
      >>> d1['y']
      200
      >>> d2 = Dict(a=1, b=2, c='3')
      >>> d2.c
      '3'
      >>> d2['empty']
      Traceback (most recent call last):
          ...
      KeyError: 'empty'
      >>> d2.empty
      Traceback (most recent call last):
          ...
      AttributeError: 'Dict' object has no attribute 'empty'
      '''
      def __init__(self, **kw):
          super(Dict, self).__init__(**kw)
  
      def __getattr__(self, key):
          try:
              return self[key]
          except KeyError:
              raise AttributeError(r"'Dict' object has no attribute '%s'" % key)
  
      def __setattr__(self, key, value):
          self[key] = value
  
  if __name__=='__main__':
      import doctest
      doctest.testmod()
  ```

  