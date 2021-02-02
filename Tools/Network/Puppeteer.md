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
  // 关闭无头模式 
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // 调整页面大小
  await page.setViewport({width: 1920, height: 1080})
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

## 爬取信息

> 爬取b站科技区

```js
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

  // 全部数据
  let data = [];

  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: "./data"
  });

  const one_page = await browser.newPage();

  for (let mo = 1; mo <= 12; mo++) {
    for (let page = 1; page <= 10; page++) {

      mon = mo.toString().padStart(2, '0');
      
      await one_page.goto('https://www.bilibili.com/v/digital/mobile' +
        `/#/all/click/0/${page}/2020-${mon}-01,2020-${mon}-29`
      );

      await one_page.waitForSelector('.vd-list-cnt > ul > li > div > div.r > a');

      let titles = await one_page.$$eval('.vd-list-cnt > ul > li > div > div.r > a', links =>
        links.map(x => x.innerText)
      );

      console.log(titles);
      data = data.concat(titles);
    }
  }

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err) {
    if (err) {
      console.log(err);
    }
  });
  //   await browser.close();
})();
```

