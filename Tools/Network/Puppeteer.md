<!-- 
title: Puppeteer
sort: 
--> 

> 爬虫框架-基于Chrome
>
> [官方中文文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/)

## Nodejs

```bash
yarn add puppeteer
# 不包含chromium
yarn add puppeteer-core
```

> HelloWorld

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();
```

### 更改配置

```js
const puppeteer = require('puppeteer');

(async () => {
  // 显示浏览器窗体
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // 调整页面大小
  await page.setViewport({width: 1920, height: 1080})
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

## 操作

### 模拟用户操作

- `elementHandle.click()`：点击某个元素
- `elementHandle.tap()`：模拟手指触摸点击
- `elementHandle.focus()`：聚焦到某个元素
- `elementHandle.hover()`：鼠标 hover 到某个元素上
- `elementHandle.type('hello')`：在输入框输入文本

```js
const puppeteer = require('puppeteer');

(async () => {
  // 创建新浏览器
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1280, height: 960 },
    ignoreHTTPSErrors: false,     // 忽略https报错
    // args: ['--start-fullscreen']  // 全屏
  });

  const page = await browser.newPage();
  await page.goto('https://www.baidu.com/');

  const inputElement = await page.$('#kw');
  // type 输入文本
  await inputElement.type('hello world', { delay: 20 });
  
  // 等待跳转
  await page.waitForNavigation();
  // 模拟按键
  await page.keyboard.down('Enter');

  // 点击进入
  let searchElement = await page.$('#\\31 > h3 > a');

  // 等待页面跳转完成，一般点击某个按钮需要跳转时，都需要等待 page.waitForNavigation() 执行完毕才表示跳转成功
  await Promise.all([
    searchElement.click(),
    page.waitForNavigation()
  ])

  await page.close();
  await browser.close();
})();
```

### 植入JS

> 浏览器内部执行代码

- `page.evaluate(pageFunction[, ...args])`：在浏览器环境中执行函数
- `page.evaluateHandle(pageFunction[, ...args])`：在浏览器环境中执行函数，返回 JsHandle 对象
- `page.$$eval(selector, pageFunction[, ...args])`：把 selector 对应的所有元素传入到函数并在浏览器环境执行
- `page.$eval(selector, pageFunction[, ...args])`：把 selector 对应的第一个元素传入到函数在浏览器环境执行
- `page.evaluateOnNewDocument(pageFunction[, ...args])`：创建一个新的 Document 时在浏览器环境中执行，会在页面所有脚本执行之前执行
- `page.exposeFunction(name, puppeteerFunction)`：在 window 对象上注册一个函数，这个函数在 Node 环境中执行，有机会在浏览器环境中调用 Node.js 相关函数库

```js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com/');

    // page.evaluate 在浏览器里执行代码
    const resultData = await page.evaluate(async () =>  {
      let data = {};
      // 选择实时热榜
      const ListEle = [...document.querySelectorAll('#hotsearch-content-wrapper > li')];
      data = ListEle.map((ele) => {
        // 从li中筛出信息
        const url = ele.querySelector('a.c-link');
        const title = ele.querySelector('.title-content-title');
        return {
          href: url.href,
          title: title.innerText,
        };
      });
      return data;
    });

    console.log(resultData)
    await page.close();
    await browser.close();
})();
```

### 生命周期

- `page.on('close')` 页面关闭
- `page.on('console')` console API 被调用
- `page.on('error')` 页面出错
- `page.on('load')` 页面加载完
- `page.on('request')` 收到请求
- `page.on('requestfailed')` 请求失败
- `page.on('requestfinished')` 请求成功
- `page.on('response')` 收到响应
- `page.on('workercreated')` 创建 webWorker
- `page.on('workerdestroyed')` 销毁 webWorker

#### 请求拦截

```js
const page = await browser.newPage();

// 拦截没有必要的请求
const blockTypes = new Set(['image', 'media', 'font']);
await page.setRequestInterception(true); //开启请求拦截
page.on('request', request => {
  const type = request.resourceType();
  const shouldBlock = blockTypes.has(type);
  if (shouldBlock) {
    // 阻止请求
    return request.abort();
  } else {
    // 请求重写
    return request.continue({
      // 可以对 url method postData headers 进行覆盖
      headers: Object.assign({}, request.headers(), {
        'puppeteer-test': 'true'
      })
    });
  }
});

await page.goto('https://www.baidu.com/');
```

### 上传下载

