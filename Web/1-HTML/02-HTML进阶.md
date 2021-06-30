<!-- 
title: 02-HTML进阶
sort: 
--> 
# HTML进阶

### 头

- `<base>`

  > `<base href="http://www.runoob.com/images/" target="_blank">`
  >
  > 作为所有链接标签的默认链接。

- `<meta>`

  > 元数据
  >
  > 为网页定义描述内容:
  >
  > `<meta name="description" content="fzf about html">`
  >
  > 设置自动刷新:
  >
  > `<meta http-eqiv="refresh" content="30"> `

- `<link>`

  > ```html
  > <head>
  > <link rel="shortcut icon" href="url">
  > <title>这是一个带图片的标签</title>
  > </head>
  > ```

### 图像

`<img src="url" alt="image" border="2">`

- `src`

  > 图像源属性

- `alt`

  > 可替换的文本

- `height/width`

- `border`

  > 设置边框粗细

- `align`

  > 设置图像对其

### 表格

- `<table>`

  > 使用`border`设置边框
  >
  > `width height`设置长宽
  >
  > `# HTML5 不推荐`
  >
  > - `bgcolor`属性 - 可以设置背景颜色。
  > - `background`属性 - 可以设置背景图像。
  > - `bordercolor`属性 - 可以设置边框颜色。
  >
  > `cellspacing` - 定义单元格间距离
  >
  > `cellpadding` - 表示单元格边框与单元格内容之间的距离

- `<th>`

  > 定义标题
  >
  > `tr`定义行
  >
  > `td`定义元素
  >
  > `colspan` - 此单元格占多少行
  >
  > `rowspan` - 此单元格占多少列

- `theader`

  ```html
  <table border = "1" width = "100%">
      <thead>
          <tr>
              <td colspan = "4">This is the head of the table</td>
          </tr>
      </thead>
           
      <tfoot>
          <tr>
              <td colspan = "4">This is the foot of the table</td>
          </tr>
      </tfoot>
           
      <tbody>
          <tr>
              <td>Cell 1</td>
              <td>Cell 2</td>
              <td>Cell 3</td>
              <td>Cell 4</td>
          </tr>
      </tbody>         
  </table>
  ```

  | This is the head of the table |        |        |        |
  | ----------------------------- | ------ | ------ | ------ |
  | Cell 1                        | Cell 2 | Cell 3 | Cell 4 |
  | This is the foot of the table |        |        |        |

- 实践

  ```html
  <table border="2" cellpadding = "5">
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

- 有序列表

  > `ul`
  >
  > `li`

- 无序列表

  > `ol`

- 自定义列表

  ```html
   <dl>
   <dt>Coffee</dt>
   <dd>- black hot drink</dd>
   <dt>Milk</dt>
   <dd>- white cold drink</dd>
   </dl> 
  ```

### 区块

- `<div>`

  > 分区块

- `<span>`

  > 组合行内元素

  ```html
  <p>我的母亲有 <span style="color:blue;font-weight:bold">蓝色</span> 的眼睛，我得父亲有 <span style="color:darkolivegreen;font-weight:bold">碧绿色</span> 的眼睛。</p>
  
  ```

  ### 表单

  ```html
  <form name="input" action="html_form_action.php" method="get">
  First name: <input type="text" name="firstname"><br>
  Pass world: <input type="password" name="passwd"><br>
  
  <input type="radio" name="sex" value="male">Male<br>
  <input type="radio" name="sex" value="female">Female<br>
  
  <input type="checkbox" name="vehicle" value="Bike">I have a bike<br>
  <input type="checkbox" name="vehicle" value="Car">I have a car<br> 
  
  <input type="text" placeholder="this is placeholder text">
  <input type="submit" value="Submit">
    
  <select>
  	<option>1</option>  
    <option>2</option>  
  </select>
  
  </form>
  
  ```

### 框架

> `<iframe src="URL"></iframe>`
>
> 在一个页面内插入另一个界面

- 属性

  > `frameborder="0"`
  >
  > 移除边框

- 边距

  > `padding`：内边距
  >
  > `margin`：外边距

### 脚本

- `<noscript>`：浏览器不支持脚本时使用

### 字符实体

> `&nbsp;` 空格



