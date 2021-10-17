<!--
title: 02-Ajax入门
sort: 
-->

## load

```js
var text1 = $('#text1')
var text2 = $('#text2')
var text3 = $('#text3')
var info = $('#info')

// 加载
info.load("/api/info")
// 使用load发送get请求
text2.load('/api/getdata?name=gdy')
// 使用load发送Post请求
text3.load("/api/getjson",{"data":"bili"})
```

> 异步加载

```js
var trigger = $('#trigger');
var card = $('#card');
var loaded;
// 点击trigger触发加载
trigger.click(() => {
  // 如果visable，缓出
  if (card.is(':visible')) {
    card.slideUp();
  } else {
    if (!loaded) {
      card.load('card.html');
      loaded = true;
    }
    card.slideDown();
  }
})
```

## ajax

```js
$.ajax('/login', {
  method: 'POST',
  data: {
    username: 'fzf',
    password: 'password'
  },
  success: data => {},
  error: () => {}
})

// get or post
$.get('url',func);
$.getJSON('url',func);
$.post('url',{
    data: '...',
    data2: '...'.
},func);

// 重定向页面
window.location.href = "/";

// 上传图片
$('#uploadimg').on('change', (event) => {
  // console.log(event.target.files[0].name);
  var uploadURL = '/api/upimg'
  var formData = new FormData();
  formData.append('img', event.target.files[0])
  // ajax上传图片
  $.ajax(uploadURL, {
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false,
    beforeSend: xhr => {
      token = window.localStorage.getItem('token');
      xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    // 得到响应的处理
    success: data => {
    },
    // 未响应的处理
    error: () => {
    }
  })
})
```

## Token

```js
// 存储Token
window.localStorage.setItem('token', data.data.token);
// 获取token
window.localStorage.getItem('token')

// ajax请求
$.ajax(myinfoURL, {
  method: 'POST',
  beforeSend: xhr => {
    token = window.localStorage.getItem('token');
    xhr.setRequestHeader("Authorization", "Bearer " + token);
  },
  success: () => {},
});
```
