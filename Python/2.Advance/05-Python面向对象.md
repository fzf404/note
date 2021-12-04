<!--
title: 05-Python面向对象
sort:
-->

# Python 面向对象

- 面向对象的设计思想是抽象出 Class（类），根据 Class 创建 Instance（实例）。

- python 中所有数据类型可成为对象，可自行创建 Class。

  > classs 是人，instance 是他人 ，你会有些属性：身高、年龄、体重，你会有些技能：吃饭、写代码。
  >
  > `__init__` 方法，就是上帝初始化你的属性。比如`zhangsan = Person(170,29,50)`这时上帝就实例化了你。
  >
  > 你到底有哪些技能呢，如果类里定义吃饭的技能，那么你就可以调用吃饭的技能来吃饭，看看下面的例子就更清楚了：
  >
  > ```python
  > class Person(object):
  > # 这里就是初始化你将要创建的实例的属性
  > def __init__(self,hight,weight,age):
  >   	self.hight = hight
  >   	self.weight = weight
  >   	self.age = age
  >
  > # 定义你将要创建的实例所有用的技能
  > def program(self):
  >   	print('你开始编程了')
  >
  > def eat(self):
  >   	print('you can eat')
  >
  > # 开始创建实例
  > zhangsan=Person(170,50,29)      # 调用init
  > lisi = Person(175,100,30)
  >
  > # 你的实例开始使用它的技能
  > zhangsan.paoniu()
  > lisi.eat()
  > ```
  >
  > 另一个实例：
  >
  > ```python
  > class 人类列表(object):
  > def __init__(属性,姓名,性别,生日):
  >   属性.姓名=姓名
  >   属性.性别=性别
  >   属性.生日=生日
  >
  > def 介绍(属性):
  >   print("姓名:%s"%属性.姓名)
  >   print("性别:%s" % 属性.性别)
  >   print("生日:%s"%属性.生日)
  >
  > one = 人类列表('dad','女',2001)
  > two = 人类列表('fa','男',2001)
  >
  > one.介绍()
  > two.介绍()
  > ```

## 类和实例

- `Class`是抽象的模板，`Instance`是根据类创建出的对象，每个对象数据可能不同，但具有相同的方法。

- 类名通常大写开头字母，`(object)`表示该类从哪个类继承。

- 定义好一个类，就可以创建一个实例:`fzf = human()`。

- `fzf`是指向`human`的实例。

- 可以给变量绑定属性：`fzf.name = '你们的小f'`

- 可以在创建类时绑定强制属性：

  ```python
  class Human(object):
  	def __init__(self, name, sex):		#此行强制要要求了两个属性
  		self.name = name
  		self.sex = sex
  ```

- `self`表示实例本身（当前还未创建的实例）。

- 可以通过函数访问这些对象的数据。

## 访问限制

- 为了是内部属性不被外部访问，可在属性前加两个`_`。

- `__xxx__`属于特殊变量，不是 private。

- 例子：

  ```python
  class Student(object):
      def __init__(self, name, gender):
          self.name = name
          self.__gender = gender
      def get_gender(self):
          return self.__gender
      def set_gender(self, gender):
          self.__gender = gender
  ```

## 继承和多态

- 定义一个 class 时，可以使用现有的 class 继承，称为子类，被继承的叫做父类。

- 子类可以使用父类的全部方法。

- 当子类父类存在相同的方法时，子类的方法覆盖父类的。

- 定义一个 class，相当于定义了一种数据类型（与 list、str、dict 没啥差别）

- 判断变量类型可使用`isinstance()`判断。

- 在继承关系中，一个实例的数据类型是某个子类，那它的数据类型也包括父类。

- 这就是多态，可以传入任何父类类型。

- 所有类都继承自 object。

  ```python
  class World(object):
      def __init__(self, earth, country):
          self.earth = earth
          self.country = country

      def timerun(self):
          print("%sに%sのtime -1s " % (self.earth, self.country))


  class Human(World):
      def humrun(self):
          print('%s' % (self.speak))

  h = Human('earth', 'china')
  h.timerun()
  h.speak = '233333'	# 设定speak的值
  h.humrun()

  ```

## 获取对象信息

- `type`函数，判断对象类型。

- 判断对象是否为函数，可使用 types 模块

  ```python
  >>> import types
  >>> def fn():
  ...     pass
  ...
  >>> type(fn)==types.FunctionType
  True
  >>> type(abs)==types.BuiltinFunctionType
  True
  >>> type(lambda x: x)==types.LambdaType
  True
  >>> type((x for x in range(10)))==types.GeneratorType
  True
  ```

- 优先使用`isinstance`判断继承关系。

- `dir()`函数，获取对象的所有属性和方法。

  > 8i `调用一个函数，相当于调用该对象的方法
  >
  > `len('abc') = 'abc'.__len__`

- 配合`getattr()、setattr()、hasattr()`,操作一个对象的状态。

  ```python
  class MyObject(object):
      def __init__(self):
          self.x = 6
      def power(self):
          return self.x * self.x

  obj = MyObject()
  obj.x = 9
  hasattr(obj, 'y')			# 判断是否有y属性
  setattr(obj, 'y', 10)		# 新建y属性为10
  print(getattr(obj, 'y'))	# 打印y属性

  fn = getattr(obj, 'power')	# 获取fn函数的方法
  print(fn())					# 打印值
  ```

## 实例属性与类属性

- 给实例绑定属性的方法：

  > 在`__init__`中定义。
  >
  > 在调用过程中绑定。

- 每次创建新实例并建立对象都会执行`__init__`函数

- 可以给实例绑定方法：

```python
def set_age(self, age):
	self.age = age

from types import MethodType
obj.set_age = MethdType(set_age, obj)
obj.set_age(17)
print(obj.age)

obj2.set_age(19)				# 错误
```

- 可直接给 class 绑定方法：

  `MyObject.set_age = set_age`

- 在动态语言中是很容易的

## 面向对象高级

### 使用\_\_slots\_\_

- 限制实例的属性，使其只能添加该属性。

  ```python
  class Student(object):
      __slots__ = ('name', 'age')	# 使用tuple定义属性
  ```

- 使用方法检查函数：

  ```python
  class Student(object):

      def get_score(self):
          return self._score

      def set_score(self, value):
          if not isinstance(value, int):
              raise ValueError('score must be an integer!')
          if value < 0 or value > 100:
              raise ValueError('score must between 0 ~ 100!')
          self._score = value


  lisi = Student()
  lisi.set_score(77)
  print(lisi.get_score())
  ```

### 使用@property

- 使用@property 装饰器来创建只读属性。

- @property 装饰器会将**方法**转换为相同名称的只读属性

  ```python
  class DataSet(object):
    @property
    def method_with_property(self): # 含有@property
        return 15
    def method_without_property(self): # 不含@property
        return 15

  l = DataSet()
  print(l.method_with_property) # 加了@property后，可以用调用属性的形式来调用方法,后面不需要加（）。
  print(l.method_without_property())  #没有加@property , 必须使用正常的调用方法的形式，即在后面加()
  两个都输出为15。
  ```

- 添加@property 后，方法变成了属性。

  ```python
  class DataSet(object):
      def __init__(self):
          self._images = 1
          self._labels = 2 #定义属性的名称
      @property
      def images(self): #方法加入@property后，这个方法相当于一个属性，这个属性可以让用户进行使用，而且用户有没办法随意修改。
          return self._images
      @property
      def labels(self):
          return self._labels
  l = DataSet()
  #用户进行属性调用的时候，直接调用images即可，而不用知道属性名_images，因此用户无法更改属性，从而保护了类的属性。
  print(l.images) # 加了@property后，可以用调用属性的形式来调用方法,后面不需要加（）。
  ```

- 创建另外的装饰器，以便于赋值：

  ```python
  class Student(object):

      @property
      def score(self):
          return self.a_attr

      @score.setter
      def score(self, value):
          if not isinstance(value, int):
              raise ValueError('score must be an integer!')
          if value < 0 or value > 100:
              raise ValueError('score must between 0 ~ 100!')
          self.a_attr = value
  ```

- **小栗子**

  ```python
  class Human(object):
      def __init__(self, country, name):
          self.country = country
          self.name = name
          self._chairman = '川建国'

      @property
      def chairman(self):
          return self._chairman

      @chairman.setter
      def chairman(self, value):
          self._chairman = value


  f = Human('china', 'fzf')
  # f.chairman = '习近平'
  print(f.chairman)

  ```

### 多重继承

- 当对象分类较多时，可使用继承简化代码。

  > 先创建大类，在其中建立功能
  >
  > 再创建小类，继承大类功能。

- **MIxln**：给一个类增加多个功能

### 定制类

- **\_\_str\_\_()**：实例返回值

  ```python
  class Student(object):
       def __init__(self, name):
           self.name = name
       def __str__(self):
           return 'Student object (name: %s)' % self.name

  print(Student('Michael'))
  > Student object (name: Michael)
  # <__main__.Student object at 0x109afb310>
  ```

- **\_\_repr\_\_()**：定义变量返回值

  ```python
  class Student(object):
      def __init__(self, name):
          self.name = name
      def __str__(self):
          return 'Student object (name=%s)' % self.name
      __repr__ = __str__				# 偷懒写法

  s = Student('Michael')
  print(s)
  ```

- **\_\_iter\_\_**：返回迭代对象

  > 使一个类可以被用于 for 循环。

  ```python
  class Fib(object):
      def __init__(self):
          self.a, self.b = 0, 1 		# 初始化两个计数器a，b

      def __iter__(self):
          return self 				# 实例本身就是迭代对象，故返回自己

      def __next__(self):
          self.a, self.b = self.b, self.a + self.b # 计算下一个值
          if self.a > 100000: # 退出循环的条件
              raise StopIteration()
          return self.a 							# 返回下一个值

  for n in Fib():
      print(n)
  ```

- **\_\_getitem\_\_**：比楼上牛逼

  > 不返回一个`generator`对象。
  >
  > 返回一个可以使用下标读取文件。

  ```python
  class Fib(object):
      def __getitem__(self, n):
          a, b = 1, 1
          for x in range(n):
              a, b = b, a + b
          return a
  f = Fib()
  f[5:10]				# 报错
  ```

- 小栗子

  ```python
  class Fib(object):
      def __getitem__(self, n):
          if isinstance(n, int): # n是索引
              a, b = 1, 1
              for x in range(n):
                  a, b = b, a + b
              return a
          if isinstance(n, slice): # n是切片
              start = n.start
              stop = n.stop
              if start is None:
                  start = 0
              a, b = 1, 1
              L = []
              for x in range(stop):
                  if x >= start:
                      L.append(a)
                  a, b = b, a + b
             return L
  ```

- **\_\_getattr\_\_**：尝试获得属性

  > 未找到属性时，会自动调用\_\_getattr\_\_

  ```python
  class Student(object):

      def __init__(self):
          self.name = 'Michael'

      def __getattr__(self, attr):
          if attr=='score':
              return 99
          raise AttributeError('\'Student\' object has no attribute \'%s\'' % attr)
  ```

- 小栗子：

  ```python
  class Vpow(object):

      def __init__(self, x, y=2):				# 初始化变量
          self.x = x
          self.y = y

      def __iter__(self):						# 定义迭代变量
          return self

      def __next__(self):
          self.x = self.x ** self.y
          if self.x > 4294967296:
              raise StopIteration()
          return self.x

      def __str__(self):						# 设置返回值
          return 'Student object (x=%s, y=%s)' % (self.x, self.y)
      __repr__ = __str__


  v = Vpow(2)
  x = Vpow(2,3)
  print(v)
  print(list(v),list(x))
  ```

- **\_\_call\_\_**：直接调用实例

  > 可以直接对实例进行调用。

  ```python
  class Student(object):
      def __init__(self, name):
          self.name = name

      def __call__(self):
          print('My name is %s.' % self.name)

  s = Student('Fzf')
  s()								# My name is Fzf.
  ```

  > 判断一个变量是否可以被调用：`callable(s)`

### 使用枚举类

- 运用`Enum`定义枚举常量：

  ```python
  from enum import Enum

  Month = Enum('Month', ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'))			# 默认从1计数

  for name, member in Month.__members__.items():
      print(name, '=>', member, ',', member.value)
  ```

- 想要更精准的控制枚举类型可从`Enum`派生自定义类：

  ```python
  from enum import Enum, unique

  @unique					#判断是否有重复
  class Weekday(Enum):
      Sun = 0 			# Sun的value被设定为0
      Mon = 1
      Tue = 2
      Wed = 3
      Thu = 4
      Fri = 5
      Sat = 6
  ```

- 访问的方法：

  > 类名.常量名 -》本身
  >
  > 类名[常量名] -》同上
  >
  > 类名.常量名.value -》值
  >
  > 类名.\_\_members\_\_.item() -》可迭代类型
  >
  > - 特殊属性* `__members__` *是一个将名称映射到成员的有序字典，也可以通过它来完成遍历：

  ```python
    >>> day1 = Weekday.Mon
    >>> print(day1)					# 返回常量名
    Weekday.Mon
    >>> print(Weekday.Tue)
    Weekday.Tue
    >>> print(Weekday['Tue'])
    Weekday.Tue
    >>> print(Weekday.Tue.value)		# 返回值
    2
    >>> print(day1 == Weekday.Mon)
    True
    >>> print(day1 == Weekday.Tue)
    False
    >>> print(Weekday(1))
    Weekday.Mon
    >>> print(day1 == Weekday(1))
    True
    >>> Weekday(7)
    Traceback (most recent call last):
      ...
    ValueError: 7 is not a valid Weekday
    >>> for name, member in Weekday.__members__.items():
  ...     print(name, '=>', member)
    ...
    Sun => Weekday.Sun
    Mon => Weekday.Mon
    Tue => Weekday.Tue
    Wed => Weekday.Wed
    Thu => Weekday.Thu
    Fri => Weekday.Fri
    Sat => Weekday.Sat
  ```

### 使用元类

- `type()`函数可以查看一个类型或变量的类型。

  > class 的类型是`type`
  >
  > 实例的类型是`class '所有函数'`

- `type()`函数既可以返回一个对象的类型，又可以创建出新的类型。

  > 先定义函数，
  >
  > 再通过`type()`创建类：
  >
  > 1. class 的名称
  > 2. 继承的父类集合（只有一个记得 tuple 的单元素写法）
  > 3. 绑定方法对应的函数

  ```python
  def fn(self, name='world'): 		# 先定义函数
  	print('Hello, %s.' % name)

  Hello = type('Hello', (object,), dict(hello=fn))
  ```

- `metaclass`控制创建类的实例。

  > 先定义类，然后创建实例。
  >
  > 如果我们想创建出类呢？那就必须根据 metaclass 创建出类。
  >
  > 先定义 metaclass，就可以创建类，最后创建实例。
