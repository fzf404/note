<!-- 
title: 05-Python面向对象高级
sort: 
--> 
# Python面向对象

## 面向对象总结

- 类的属性

  > 私有属性
  >
  > - 以两个下划线开头
  > - 不能被外部使用
  > - 调用：`self.__private_attrs`

- 类的方法

  ```python
  __init__       # 构造函数，在生成对象时调用
  __del__        # 析构函数，释放对象时使用
  __repr__       # 打印，转换
  __setitem__    # 按照索引赋值
  __getitem__    # 按照索引获取值
  __len__        # 获得长度
  __cmp__        # 比较运算
  __call__       # 函数调用
  __add__        # 加运算
  __sub__        # 减运算
  __mul__        # 乘运算
  __div__        # 除运算
  __mod__        # 求余运算
  __pow__        # 称方
  ```

- 使用类的内置方法进行方法的构造：

  ```python
  class person():
      def __init__(self,name,age,weight):
          self.name = name
          self.age = age
          self.__weight = weight
      def __cmp__(self):
          pow_age = self.age.__pow__(2)
          print(pow_age)
      def __len__(self):
          name_del = self.name.__len__()
          print(name_del)
      def __add__(self):
          adds = self.age.__add__(self.__weight)
          print(adds)
      def infoma(self):
          print('%s is %s weights %s'%(self.name,self.age,self.__weight))
  print(person.__class__)		# <class 'type'>
  print(person.__repr__)		# <slot wrapper '__repr__' of 'object' objects>
  
  person = person('bruce',25,60)
  print(person)				# <__main__.person object at 0x0000020744E69668>
  infoma = person.infoma()	# bruce is 25 weights 60
  cmp = person.__cmp__()		# 625
  lens = person.__len__()		# 5
  adds = person.__add__()		# 85
  print('doc is %s'%person.__doc__)	
  print('dir is %s'%person.__dir__)
  print('delatter is %s'%person.__delattr__)
  print('gt is %s'%person.__gt__)
  print('hash is %s'%person.__hash__)
  print('init is %s'%person.__init__)
  print('new is %s'%person.__new__)
  
  '''
  doc is None
  dir is <built-in method __dir__ of person object at 0x0000020744E69668>
  delatter is <method-wrapper '__delattr__' of person object at 0x0000020744E69668>
  gt is <method-wrapper '__gt__' of person object at 0x0000020744E69668>
  hash is <method-wrapper '__hash__' of person object at 0x0000020744E69668>
  init is <bound method person.__init__ of <__main__.person object at 0x0000020744E69668>>
  new is <built-in method __new__ of type object at 0x00000000617BDFD0>
  '''
  ```

## 类的属性

- 数据属性

  ```python
  class person(object):
      tall = 180
      hobbies = []
      def __init__(self, name, age,weight):
          self.name = name
          self.age = age
          self.weight = weight
      def infoma(self):
          print('%s is %s weights %s'%(self.name,self.age,self.weight))
  person.hobbies.extend(["football", "woman"])   # 类数据属性可以进行访问/修改
  print("person hobbies list: %s" %person.hobbies) 
  
  person.hobbies2 = ["reading", "jogging", "swimming"]  # 可以通过类名动态添加类数据属性。
  print("person hobbies2 list: %s" %person.hobbies2)  
  print(dir(person))		# person中所有属性
  
  
  Bruce = person("Bruce", 25,60)    #实例数据属性只能通过实例访问
  print("%s is %d years old" %(Bruce.name, Bruce.age))
  Bruce.gender = "male"   #动态添加实例数据属性
  print("%s is %s" %(Bruce.name, Bruce.gender) )  
  print(dir(Bruce))
  Bruce.hobbies.append("C#")
  print(Bruce.hobbies)	# ['football', 'woman', 'C#']
  
  will = person("Will", 27,60) 
  print("%s is %d years old" %(will.name, will.age))  
  print(will.__dict__)    # 列出所有属性及值
  print (will.hobbies)	# ['football', 'woman', 'C#']
  ```

- 类的属性

  > _ _ name_ _：类的名字（字符串）
  > _ _ doc _ _ ：类的文档字符串
  > _ _ bases _ _：类的所有父类组成的元组
  > _ _ dict _ _：类的属性组成的字典
  > _ _ module _ _：类所属的模块
  > _ _ class _ _：类对象的类型

## 类的方法

1. 实例方法

   > 第一个参数必须是`self`

2. 类方法

   > 以`cls`作为第一个参数。
   >
   > 使用`@classmethod`装饰器。

   ```python
   class person(object):
       tall = 180
       hobbies = []
       def __init__(self, name, age,weight):
           self.name = name
           self.age = age
           self.weight = weight
       @classmethod     	# 类的装饰器
       def infoma(cls):   	# cls表示类本身，可直接调用
           print(cls.__name__)
           print(dir(cls))
   ```

3. 静态方法

   > 不需要参数，使用`staticmethod`装饰器。

   ```python
   @staticmethod   # 静态方法装饰器
   def infoma():	# 没有参数限制
   	print(person.tall)
   	print(person.hobbies)
   ```

## 类的访问控制

- 单下划线

  > 通过`_`来实现模块私有化
  >
  > **变量除外**
  >
  > `from moduleName import *`不会引用

- 双下划线

  > 双下划线开头的属性在运行时会被"混淆”
  >
  > **属性名前增加了单下划线和类名**

## 类的继承、初始化与super方法

1. 继承

   > **子类将继承父类的属性**
   >
   > 通过`issubclass()`判断是否为子类

   ```python
   class Parent(object):
       Value = "Hi, Parent value"
       def fun(self):
           print("This is from Parent")
   
   class Child(Parent):
       Value = "Hi, Child  value"
       def fun(self):
           print("This is from Child")
           Parent.fun(self)   #调用父类Parent的fun函数方法
   
   c = Child()    
   c.fun()
   ```

   

2. 继承中的`__init__`

   > **若子类未定义初始化函数，父类的初始化函数会被调用**
   >
   > **在子类中显示调用父类，子类和父类的属性都会被初始化**

   ```python
   class Parent(object):
       def __init__(self, name):
           self.name = name
           print("create an instance of:", self.__class__.__name__)
           print("name attribute is:", self.name)
   
   class Child(Parent):
       pass
   
   c = Child('fzf')		# 调用父函数
   c = Child()				# 报错
   ```

## Super的使用

- 调用父类方法，以显示父类

  > 子类会继承父类的所有的属性和方法
  >
  > 并覆盖父类的同名属性和方法
  >
  ```python
  super(Child,self).fun()
  # 代替Parent.fun()
  ```

