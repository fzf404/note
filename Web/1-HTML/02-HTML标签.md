<!--
title: 02-常用标签
sort:
-->

### a

> 链接标签

- href: 目标链接, 使用#跳转 id
- title: 说明, 鼠标悬浮显示
- target: 打开方式, 新标签页

```html
<a href="/url" title="description" target="_blank">Show Text</a>
```

- 常用样式

```css
/* 字体颜色 */
color: #121314;
/* 不展示下划线 */
text-decoration: none;
```

### img

> 图片标签

- src: 图片路径
- alt: 图片无法加载显示的文字
- width/height: 宽度/高度

```html
<img src="" alt="" width="960" height="720" />
```

### table

> 表格

- border: 边框
- celpadding: 边距
- align: 对齐方式
- colspan: 占据行宽
- rowspan: 占据列宽

```html
<table border="2" cellpadding="5" align="center">
  <tr>
    <th colspan="3">Our Classmates</th>
  </tr>
  <tr>
    <td>fzf</td>
    <td>🚹</td>
    <td>18</td>
  </tr>
  <tr>
    <td rowspan="2">ly</td>
    <td>🚺</td>
    <td>16</td>
  </tr>
  <tr>
    <td>🚹</td>
    <td>17</td>
  </tr>
</table>
```

### 列表

> 导航栏

```html
<ul>
  <li><a class="active" href="#home">主页</a></li>
  <li><a href="#news">新闻</a></li>
  <li><a href="#contact">联系</a></li>
  <li><a href="#about">关于</a></li>
</ul>

<style>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 200px;
    background-color: #f1f1f1;
  }

  li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }

  li a.active {
    background-color: #4caf50;
    color: white;
  }

  li a:hover:not(.active) {
    background-color: #555;
    color: white;
  }
</style>
```

### 表单

```html
<form>
  <label>学号</label>
  <input type="text" name="id" placeholder="你的学号" autofocus required />

  <br />

  <label>姓名</label>
  <input type="text" name="name" placeholder="你的姓名" required />

  <br />

  <label>密码</label>
  <input type="text" name="password" placeholder="设置密码" required />

  <br />

  <label>性别</label>
  <input type="radio" name="sex" value="0" required />
  <label>👦</label>
  <input type="radio" name="sex" value="1" required />
  <label>👧</label>

  <br />

  <label class="textarea-label">介绍</label>
  <textarea
    name="intro"
    rows="2"
    cols="36"
    placeholder="自己的基本情况"
    required
  ></textarea>

  <br />

  <label class="textarea-label">爱好</label>
  <textarea
    name="about"
    rows="4"
    cols="36"
    placeholder="自己平时的爱好"
    required
  ></textarea>

  <div id="choice">
    <a id="submit"> 提交 </a>
    <a href="index.html"> 返回 </a>
  </div>
</form>
```

### 其他

```html
<strong>
  # 黑体
  <em>
    # 斜体

    <br />
    # 换行
    <hr />
    # 水平线

    <span>
      # 行内元素

      <iframe src="URL"></iframe> # 内链界面</span
    ></em
  ></strong
>
```
