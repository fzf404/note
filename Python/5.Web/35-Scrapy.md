<!--
title: 35-Scrapy入门
sort:
-->

> 集成爬虫框架

## HelloWorld

> `scrapy runspider demo.py -o quotes.json`

```python
import scrapy

# 继承scarpy.Spider
class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    # 爬取网址列表
    start_urls = [
        'http://quotes.toscrape.com/tag/humor/',
        'http://quotes.toscrape.com/tag/books/'
    ]
    # 默认处理函数是parse
    def parse(self, response):
        for quote in response.css('div.quote'):
            # 第一个yield输出数据
            yield {
                'author': quote.xpath('span/small/text()').get(),
                'text': quote.css('span.text::text').get(),
            }
        # 下一page
        next_page = response.css('li.next a::attr("href")').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
```

## 入门

> 新建项目
>
> `scrapy startproject scrapyLearn`
>
> 运行
>
> `scrapy crawl test`

```python
import scrapy

class WebSpider(scrapy.Spider):
    # 唯一的名字
    name = "test"
    # 返回一个可迭代的请求
    def start_requests(self):
        urls = [
            'http://quotes.toscrape.com/page/1/',
            'http://quotes.toscrape.com/page/2/',
        ]
        for url in urls:
            # 指定回调函数
            yield scrapy.Request(url=url, callback=self.parse)
	# 解析响应
    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f'quotes-{page}.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log(f'Saved file {filename}')
```

### 更精简的写法

```python
import scrapy

class WebSpider(scrapy.Spider):
    name = "test"
    start_urls = [
        'http://quotes.toscrape.com/page/1/',
        'http://quotes.toscrape.com/page/2/',
    ]
    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = f'quotes-{page}.html'
        with open(filename, 'wb') as f:
            f.write(response.body)
```

## 提取数据

`scrapy shell 'url'`
