<!--
title: 01-Jquery入门
sort: 
--> 

## 选择器

```js
var getOne = $('demo')

// 添加css
getOne.css('color', 'white')
// 获得下面的p标签
getOne.find('p')
// 获取父类
getOne.parent().css('color', 'white')
// 含有yellow类的
getOne.filter('.yellow').css('background', 'yellow')

// 批量添加
getOne.css({
    color: 'red',
    'background-color': 'gray',
    border: '2px solid black'
})
// 添加删除类名
getOne.addClass('demo')
	.removeClass('demo')
// 判断是否含有类名
jquery_test.hasClass('demo');

// 展示、隐藏
jquery_test.show();
jquery_test.hide();
// 缓出 缓入
jquery_test.fadeIn(500);
jquery_test.fadeOut(500);
// 滑入 滑出
jquery_test.slideUp(500)
jquery_test.slideDown(500)

// 内容
jquery_test.text()
jquery_test.html()
jquery_test.append('<p>test</p>')
jquery_test.prepend('<p>test</p>')
jquery_test.remove()
```

> 广告版

```js
<h1 id="board">成人用品 二楼右拐</h1>

var board = $('#board');
function toggle(){
  	// 判断是否active
    if(board.hasClass('active')){
        board.removeClass('active');
    } else {
        board.addClass('active');
    }
}
// 200ms执行一次
setInterval(toggle,200);
```

## 事件

```js
var card = $('#card');
var cardTrigger = $('#card-trigger');

// 触发
cardTrigger.click(
  () => {
    // 判断是否展示
    if (card.is(':visible')) {
      card.slideUp()
    } else {
      card.slideDown()
    }
  }
)
// 鼠标移动则active
card.on('mouseenter',
  () => {
    card.addClass('active');
  }
)

card.on('mouseleave',
  () => {
    card.removeClass('active');
  }
)

// 更简单的方法-隐藏或显示元素
// card.toggle();
```

## 属性操作

```js
$('#a')
  .attr('href', 'https://baidu.com');

$('#a')
  .prop('href', 'https://baidu.com');

// input
$('#name').val();	//获取值
$('#name').val('fzf');	//设置值
// 集中于Input
$('#name').focus();
// 选中
$('#name').select();
// 不选
$('#name').blur();
// 触发
$('#name').focus(
  () => {
    alert("Don't Touch me")
  }
);
// 提交表单
$('#name').submit();
```

> 实战

```js
$('#input').focus(
  () => {
    alert("Don't Touch me")
  }
);
```

## 获取URL参数

```js
// 获取url
window.location.href
// 解析url参数
$.getUrlParam = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

var name = $.getUrlParam('name');

// 最新方法
const url_params = new URLSearchParams(window.location.search)
url_params.has('id')	// 是否有此参数
url_params.get('id')	// 获取参数
```

## 事件

```js
// 判断checkbox是否选中
$checkbox.is(':checked')
// checkbox赋值
$checkbox.attr("checked",true)
```

