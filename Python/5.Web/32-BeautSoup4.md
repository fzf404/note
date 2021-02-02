<!-- 
title: 32-BeautSoup4
sort: 
--> 
# Beautiful Soup 4

> 从HTML或XML文件中提取数据的Python库。

## 快速开始

- `BeautifulSoup` 对象

  ```python
  from bs4 import BeautifulSoup
  
  html_doc = '''...'''
  
  soup = BeautifulSoup(html_doc, 'html.parser')	# 创建对象，解释器为html。
  ```

- 对象操作

  ```python
  soup.prettify()		# 按照标准缩进输出
  soup.title		# 标题标签
  # <title>The Dormouse's story</title>
  soup.title.name		# 标题名称
  soup.title.string	# 标题内容
  soup.title.parent.name		# 父标签名称
  # head
  soup.p			# 段落标签
  <p class="title"><b>The Dormouse's story</b></p>
  soup.p[class]	# class属性
  soup.a		# 第一a标签
  print(soup.find_all('a'))	# 全部a标签
  # 寻找所有a标签的链接
  for link in soup.find_all('a'):
      print(link.get('href'))
      # http://example.com/elsie
      # http://example.com/lacie
      # http://example.com/tillie
  soup.get_text()		# 获得所有文字信息
  ```

## 对象种类

> 所有对象可以归纳为4种: `Tag` , `NavigableString` , `BeautifulSoup` , `Comment` .

### Tag

`Tag` 对象与XML或HTML原生文档中的tag相同:

```python
soup = BeautifulSoup('<b class="boldest">Extremely bold</b>')
tag = soup.b
type(tag)
# <class 'bs4.element.Tag'>
```

介绍一下tag中最重要的属性: name和attributes

- Name

  > 每个tag都有自己的名字,通过 `.name` 来获取:`tag.name`
  >
  > 如果改变tag的name,那将影响所有通过当前Beautiful Soup对象生成的HTML文档:`tag.name = "blockquote"`

- Attributes

  > 一个tag可能有很多个属性。
  >
  > `<b class="boldest">` 
  >
  > 有一个 “class” 的属性,值为 “boldest” 。
  >
  >  tag的属性的操作方法与字典相同:
  >
  > `tag['class']`
  >
  > 也就是说可以删除与修改
  >
  > 可以直接”点”取属性, 比如: `.attrs` :
  >
  > `tag.attrs	# {u'class': u'boldest'}`

tag的属性可以被添加,删除或修改. 再说一次, tag的属性操作方法与字典一样

- 多值属性

  > 一个tag可以有多个CSS的class。在Beautiful Soup中多值属性的返回类型是list:
  >
  > ```python
  > css_soup = BeautifulSoup('<p class="body strikeout"></p>')
  > css_soup.p['class']
  > # ["body", "strikeout"]
  > 
  > css_soup = BeautifulSoup('<p class="body"></p>')
  > css_soup.p['class']
  > # ["body"]
  > ```

#### 可以遍历的字符串

> Beautiful Soup用 `NavigableString` 类来包装tag中的字符串:
>
> ```python
> tag.string
> # u'Extremely bold'
> type(tag.string)
> # <class 'bs4.element.NavigableString'>
> unicode_string = str(tag.string)	# 类型转换
> ```

## 遍历文档树

- `soup.find_all('a')`

- `tag.contents`

  > 将tag的子节点以列表的方式输出
  >
  > `tag.children`: 生成器

- `tag..descendants`

  > 包括字符串的子孙节点

- `tag.string`

  > 如果tag只有一个 `NavigableString` 类型子节点
  >
  > 那么这个tag可以使用 `.string` 得到子节点。
  >
  > 如果tag中包含多个字符串 ,可以使用 `.strings` 来循环获取
  >
  > 使用 `.stripped_strings` 可以去除多余空白内容

### 父节点