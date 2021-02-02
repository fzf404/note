<!-- 
title: 02-Vue进阶
sort: 
--> 

## 指令

> `v-model`

```js
// 单选
<label>
  ♂ <input v-model="sex" value="male" type="radio">
  ♀ <input v-model="sex" value="female" type="radio">
</label>

data:{
  sex: "female",
},
  
// 多选 类型修改，data变成数组
type="checkbox"
data:{
  sex: []
},
 
// 文本输入框
<textarea v-model="article"></textarea>
  
// select
<select v-model="from">
  <option value="1">*黑龙江</option>
  <option value="2">*吉林</option>
  <option value="3">*辽宁</option>
</select>
<p>您来自：{{from}}号疫情区</p>
  
data:{
  from:1
}
```

## 计算属性

```js
<table border="1">
  <thead>
    <th>学科</th>
    <th>分数</th>
  </thead>
  <tbody>
    <tr>
      <td>数学</td>
      <td><input type="text" v-model.number="math"></td>
    </tr>
    <tr>
      <td>英语</td>
      <td><input type="text" v-model.number="english"></td>
    </tr>
    <tr>
      <td>平均分</td>
      <td>{{average}}</td>
    </tr>
    <tr>
      <td>总分</td>
      <td>{{sum}}</td>
    </tr>
  </tbody>
</table>

data: {
  math: 98,
  english: 35,
},
computed: {
  sum: function () {
    return this.math + this.english
  },
  average: function () {
    return (this.sum)/2
  }
}
```

