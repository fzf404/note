

<!-- 
title: 28-JSDOM
sort: 
--> 

> `Document Object Model`
>
> 将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作。

## 常用

```js
// 元素
document.querySelector('.demo');
document.createElement('canvas');

// 操作
let demo = document.createElement('#demo');
// 末尾插入元素
demo.insertAdjacentHTML('beforeend', `<option value="new">123</option>`);
demo.value		// 获取元素的值
demo.innerHTML = '<p>demo</p>';		// 增加内容
demo.click()	// 模拟点击
// class操作
demo.classList.add('disable');			// 为元素增加类
demo.classList.remove('disable');		// 为元素减少类
```

## Document节点

### 属性

```js
// 滚动元素
// 页面滚动到浏览器顶部
document.scrollingElement.scrollTop = 0;
// 焦点元素
document.activeElementhref
// 节点集合
// 返回HTMLCollection
document.links
document.forms
document.images
document.scripts
document.styleSheets

// 静态信息
document.URL
document.domain
document.location
document.title

// 状态属性
document.hidden
document.visibilityState
document.readyState		// 案例1
document.cookie
document.designMode = 'on'
```

### 方法

```js
document.open();
document.write('<p>hello world</p>');
document.querySelector('.class')
document.querySelectorAll('p')
document.getElementsByTagName('p')
document.getElementsByClassName('container')
document.getElementById() 
// 获取坐标位置的html元素
document.elementFromPoint(500, 500)
document.createElement('div') 
// 转义防止XSS
var div = document.createElement('div');
div.appendChild(document.createTextNode('<span>Foo & bar</span>'));
// 插入属性
attr = document.createAttribute('onClick')
attr.value = 'main.js';
node.setAttributeNode(a)
node.setAttribute('onClick', 'main.js');
// 事件监听
// 创建事件
var event = document.createEvent('Event');
// 初始化事件
event.initEvent('build', true, true);
// 添加事件监听函数
document.addEventListener('build', ()=>alert('event'), false);
// 触发事件
document.dispatchEvent(event);
// 移除监听(不能为匿名函数)
document.removeEventListener('build', ()=>alert('event'), false);
// 子节点遍历器
var nodeIterator = document.createNodeIterator(document.body)
nodeIterator.nextNode()
```

### 实例

1. 文档加载

```js
var interval = setInterval(function() {
  if (document.readyState === 'complete') {
    console.log('Loading Complete')
    clearInterval(interval);
    // ...
  }
}, 100);
```

2. 更改title

```js
var OriginTitile = document.title,titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        document.title = "为什么离开我了QWQ";
        clearTimeout(titleTime)
    } else {
        document.title = "AWA咦！欢迎回来QWQ！ " + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        1000)
    }
});
```

## Node接口

### 属性

```js
// 节点类型
document.nodetype
// 绝对路径
document.baseURL
test = document.getElementById('test')
// 节点名称
test.nodeName
// 文本值
test.nodeValue
// 节点及所有后代文本内容
test.textContent
// 顶层文档对象
test.ownerDocument
// 同级节点
test.nextSibling
test.previousSibling
// 父节点 删除子节点
test.parentNode.removeChild(node)
// 父元素节点
test.parentElement
// 子节点 第一个 最后一个
test.firstChild/lastChild
// 全部子节点
test.childNodes
// 判断节点是否在文档之中
var test1 = document.createElement('p');
test1.isConnected // false

document.body.appendChild(test1);
test1.isConnected // true
```

### 方法

```js
// 插入节点
var p = document.createElement('p');
document.body.appendChild(p);
// 当前节点是否子节点
test.hasChildNodes()
// 克隆子节点
test.cloneNode(true)
// 要插入的节点newNode,
// 插在父节点parentNode的子节点referenceNode之前
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
// 删除节点
test.parentNode.removeChild(test)
// 替换节点
parentNode.replaceChild(newChild, oldChild);
// 是否包含
document.body.contains(test)
// 包含判断
var head = document.head;
var body = document.body;
if (head.compareDocumentPosition(body) & 4) {
  console.log('文档结构正确');
} else {
  console.log('<body> 不能在 <head> 前面');
}
// 节点是否相等
var p1 = document.createElement('p');
var p2 = document.createElement('p');

p1.isEqualNode(p2) // true
p1.isSameNode(p2) // false
// 合并文本节点
test.normalize();
```

