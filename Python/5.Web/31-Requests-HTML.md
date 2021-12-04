<!--
title: 31-Requests-HTML
sort:
-->

```python
from requests_html import HTMLSession
session = HTMLSession()

# 发送请求
r = session.get(BASE_URL)
r.html.render() # 运行js

# 搜索特定字符串
r.html.search('姓名: {}') # list

# xpath
href_list = r.html.xpath('/html/body/p/a/@href')
# css
node = r.html.find('#info', first=True)
node.html # html
node.text # 纯文本
node.attrs # 属性

```
