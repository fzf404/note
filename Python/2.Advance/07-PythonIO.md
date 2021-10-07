<!-- 
title: 07-PythonIO
sort: 
--> 
# PythonIO编程

> 涉及到数据交换的地方，IO操作会有Input和Output两个数据流。
>
> 同步和异步的区别就在于是否等待IO执行的结果。

## 文件读写

- 读取文件

  ```python
  f = open('/Users/michael/test.txt', 'r')	# 打开一个文件
  f.read()			# 把文件读取到内存
  f.readline()		# 防止文件过大
  f.close()			# 关闭文件对象
  ```

  > 由于文件读写时都有可能产生`IOError`，一旦出错，后面的`f.close()`就不会调用。所以，为了保证无论是否出错都能正确地关闭文件，我们可以使用`try ... finally`来实现：
  >
  > 可以使用更简洁的`with`语句调用方法。
  >
  > ```python
  > with open('/path/to/file', 'r') as f:
  >     print(f.read())
  > ```

- **file-like Object**

  > 像`open()`函数返回的这种有个`read()`方法的对象，在Python中统称为file-like Object。除了file外，还可以是内存的字节流，网络流，自定义流等等。file-like Object不要求从特定类继承，只要写个`read()`方法就行。

- 传入参数

  ```python
  f = open('test.txt', 'rb')						# 二进制文件
  f = open('gbk.txt', 'r', encoding='gbk')		# 设置编码
  f = open('gbk.txt', 'r', errors='ignore')		# 忽略错误
  ```

- 写文件

  ```python
  f = open('test.txt','w')		# 覆盖写入
  f.write('Hello TXT.')
  f.close()
  
  with open('test.txt','a') as f:	# 追加写入
  	f.write('hhh')
  ```

## CSV

```python
import csv
# 读取
data = csv.reader(open(file_name,'r'))	# 返回一个二维列表

# 写入
f = open(file_name, 'w', newline='')
w_csv = csv.writer(f)				# csv_write对象
w_csv.writerow(list)				# 写一行
w_csv.writerows(list)				# 写多行

w_csv = csv.DictWriter(f,headers)		# 字典，传入字典头
f_csv.writeheader()						# 将传入的headers写入csv
f_csv.writerows(rows)					# 写入字典
```

## StringIO

- 在内存中读写str

  ```python
  from io import StringIO
  
  f = StringIO()
  f.write('Hello')
  f.write(' ')
  f.write('fzf')
  print(f.getvalue())				# 获取str
  ```

- **ByteIO**

  ```python
  from io import BytesIO
  
  f = BytesIO()
  f.write('中文'.encode('utf-8'))
  # f.write(r'\xe4...')
  print(f.getvalue())			# b'\xe4\xb8……
  ```

## OS

```python
import os
os.name()				# 系统类型
os.uname()				# 系统详细信息（windows不提供）
os.environ				# 系统环境变量
os.environ.get('PATH')	# 获取特定环境变量的值
# 文件和目录
os.path.abspath('')		# 文件绝对目录
path = os.path.join('path', new_folder)	# 准备工作
# 该函数会自动返回系统对应的目录结构
os.mkdir(path)			# 新建文件夹
os.path.spilt(path)		# 将路径拆分
os.path.spiltext(path)	# 直接得到文件扩展名
# 并不要求文件真实存在
os.rename(old, new)		# 重命名
os.remove(file)			# 删除
# 复制文件可以参考shutil函数
[x for x in os.listdir('.') if os.path.isdir(x)]
# 列出所有文件夹
os.listdir('.')	当前目录的所有文件及文件夹 
os.isdir()		判断是否为路径
[x for x in os.listdir('.') if os.path.isfile(x) and os.path.splitext(x)[1]=='.py']
# 列出所有py文件
```


## 序列化

- 在程序运行过程中修改变量并不会保存。

- 把变量从内存中变成磁盘中的过程叫序列化。

  ```python
  import pickle
  
  with open('dump.txt', 'wb') as f:
      list = '1 2 3 4'.split()
      pickle.dump(list, f)
  with open('dump.txt', 'rb') as f:
      list = pickle.load(f)
      print(list)
  ```

### JSON

- 在不同编程语言之间传递对象。

- | JSON类型   | Python类型 |
  | :--------- | :--------- |
  | {}         | dict       |
  | []         | list       |
  | "string"   | str        |
  | 1234.56    | int或float |
  | true/false | True/False |
  | null       | None       |

  ```python
  import json
  dj = json.dumps(d)				# 返回一个json格式的str
  d = json.load(dj)				# 转换回来
  ```

- 将`class`转换为JSON。

  ```python
  import json
  
  class Student(object):
      def __init__(self, name, age, score):
          self.name = name
          self.age = age
          self.score = score
          
  def student2dict(std):				# 写一个转换函数
      return {
          'name': std.name,
          'age': std.age,
          'score': std.score
      }
      
  s = Student('Bob', 20, 88)
  print(json.dumps(s, default = student2dict))
  ```

  