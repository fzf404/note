<!-- 
title: XPath
sort: 
--> 
# XPath入门

## 基本

> / 代表根节点
>
> // 代表二次节点
>
> [1-n] 选择器
>
> @ 获取属性

## 选择

> `text()`：获取内容
>
> `normalize-space()`：存在空格
>
> `contains(func,text)`：包括
>
> `node()`：全部节点
>
> `parent::`
>
> `child::`：父子节点

## 例子

```python
from lxml import etree

# 发送请求
r = requests.get(url)
r.encoding='utf-8'

# 解析html
content = etree.HTML(r.text)
# 筛选Xpath
content = content.xpath("/body/input[@name='']")
# 解析为字符串
etree.tostring(content[0],encoding='utf-8').decode('utf-8')
```



