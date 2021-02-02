<!-- 
title: Chrome_F12
sort: 
--> 
# Chrome开发者工具

## 简介

> chrome开发者工具最常用的四个功能模块：元素（Elements）、控制台（Console）、源代码（Sources）、网络（Network）。
>
> `Elements`：用于查看HTML、CSS等。
>
> `Console`：执行一次性代码，当作JavaScript源代码调用。
>
> `Sources`：查看源代码，调试JavaScript。
>
> `Network`：查看header与网络信息

## Elemnets

- Ctrl+Shift+C：使用光标选择元素。

  > 点击`Properties`：查看选中元素所有属性。
  >
  > 右键`break on`：添加断点，页面加载暂停

## Console

- 可直接运行JavaScript

## Sources

- 查看所有源代码

## Network

- 工具从左至右：

  > 记录按钮；
  >
  > 清除按钮；
  >
  > 过滤器；
  >
  > 保留日志；
  >
  > 关闭缓存；

- 查看头文件

## 实例

- `document.designMode='on'`：开启编辑模式 
- `document.querySelector('video').playbackRate = 3.0`：视频加速
