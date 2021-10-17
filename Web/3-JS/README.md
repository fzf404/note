<!-- 
title: JavaScript
sort: 
--> 

## 常用功能

```js
// 对象转字符串
JSON.stringify(obj)
// 字符串转对象
JSON.parse(str)
// 深拷贝
JSON.parse(JSON.stringify(obj))

// 字符串转数字
parseInt()
parseFloat()
// 数字转字符串
str.toString()

// 批量替换
str.replace(/-/g, '')

// 切片
str.slice(0, 4)

// 排序
itemList.sort((a,b)=>{
  a.id-b.i
})

// 跳转
window.location.href="www.baidu.com"
```

## 递归

```react
// 对源数组进行操作
people.forEach(function (dude) {
  dude.pickUpSoap();
});

// 返回新数组
var wallets = people.map(function (dude) {
  return dude.wallet;
});

// 筛选
var fatWallets = wallets.filter(function (wallet) {
  return wallet.money > 100;
});
```

