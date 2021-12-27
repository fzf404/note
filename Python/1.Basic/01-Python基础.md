<!--
title: 01-Python基础
sort:
-->

## 数据类型

### 字符串

```bash
str = 'fzf404'
str2 = "王山而"

# 分割为列表
str.split(",")
# 切三段
s.partition(',')

# 批量替换
s.replace(","," ")

# 删除字符串两边的指定字符 - 默认删除空格
str.strip()
# 左边 右边
str.lstrip() rstrip()
# 查找字符串 - 输出位置
str.index(',')

# 字符串长度
len(str())

# 全部大/小写
s.upper()
s.lower()
```

### 列表

```bash
# 追加元素
list.append()
# 插入元素
list.insert()
# 删除末尾元素
list.pop()
```

### 字典

```bash
# 定义一个字典
d = {'name': 'fzf404', 'age': 404}

d = dict([('name', 'fzf404'), ('age', 404)])

# val: x不存在时的返回值
d.get('name', val)
```

## 工具方法

```python
# 返回属性列表 - 对象的所有方法
dir()
# 对象类型
type()
# 对象帮助
help()
# 对象内存地址
id()
```

## 函数

```python
# 可变参数 - 其他参数传入名为change的tuple中
def (a, b, *change)

# 关键字参数 - 其他参数传入名为change的dict中
def (a, b, *change)

# 传入命名关键字参数, 参数名必须为bit
def (a, *, bit)

# 例子
def f1(a, b, c = 1, *args, **kw)

# 结果
f1(1,2,5,'ai','py',dict = hh)
>>> a = 1, b = 2, c = 5, args = ('ai','py'), kw = {dict:'hh'}

args = (1, 2, 3, 4)
kw = {'d': 99, 'x': '#'}
f1(*args, **kw)
>>> a = 1, b = 2, c = 3, args = (4,) kw = {'d': 99, 'x': '#'}
```
