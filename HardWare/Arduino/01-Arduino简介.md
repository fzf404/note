<!--
title: 01-Arduino简介
sort:
-->

# Arduino 简介

## 特性

- Arduino 使用 C/C++编写程序。

  > Arduino 语言是 API 的结合。
  > Arduino 将 main 函数的定义隐藏在了核心库文件中。
  > Arduino 程序基本结构由 setup() 和 loop() 两个函数组成。

- 函数 setup()

  > Arduino 控制器通电或复位后，即开始执行 setup() 中的程序。
  > 该部分只会执行一次。
  > 通常在该函数中完成初始化设置，如配置 I/O 口状态，初始化串口等。

- 函数 loop()

  > 接着会执行 loop() 中的程序，该部分只会执行一次。
  > loop() 函数是一个死循环，其中的程序会不断的重复运行。
  > 会在这里完成程序的主要功能。驱动模块，采集数据等。
