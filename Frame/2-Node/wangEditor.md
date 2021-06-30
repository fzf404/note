<!-- 
title: wangEditor
sort: 
--> 

> 富文本编辑器
>
> [官网](https://www.wangeditor.com/)

## 引入

```html
<div id="div1">
    <p>欢迎使用 <b>wangEditor</b> 富文本编辑器</p>
</div>

<script type="text/javascript" src="//unpkg.com/wangeditor/dist/wangEditor.min.js"></script>
<script type="text/javascript">
    const E = window.wangEditor
    const editor = new E('#div1')
    // 或者 const editor = new E( document.getElementById('div1') )
    editor.create()
</script>
```

## 设置

```js
const editor = new E('#div1')

// 设置高度
editor.config.height = 700
// 模态框覆盖
editor.config.zIndex = 100
// 图片上传
editor.config.uploadImgServer = '/api/upimg'
// 文件大小限制
editor.config.uploadImgMaxSize = 2 * 1024 * 1024
// 类型限制
editor.config.uploadImgAccept = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
// 最大文件大小限制
editor.config.uploadImgMaxLength = 1
// 上传key值
editor.config.uploadFileName = "img"
// token设置
editor.config.uploadImgHeaders = {
  Authorization: "Bearer " + window.localStorage.getItem('token')
}

// 注意，先配置 height ，再执行 create()
editor.create()
```

## GetAPI

```js
// 获取html
editor.txt.html()
// 获取text
editor.txt.text()
// 获取json
editor.txt.getJSON()
// 设置编辑器内容
```

