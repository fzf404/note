<!--
title: 14-pug模板语法
sort:
-->

```pug
h1 欢迎呀 🙌
h2 停止体温自动填报 🌡
div
  label 学号
  input(v-model.lazy='info.student_id' placeholder='你的学号' autofocus)
  br
  label 密码
  input(v-model.lazy='info.password' placeholder='身份证后六位')
  br
p.center
  a.purple(@click="onSubmit") 提交 
  a
  a(@click="$router.back()") 返回 
```
