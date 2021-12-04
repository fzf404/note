<!--
title: 10-类Linux系统
sort:
-->

![image-20210313200305368](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/20210313215516.png)

1. `bootsect.asm`

   > 引导块程序
   >
   > 移动自己至`0x90000`地址处执行
   >
   > 将`setup`模块加载到到`0x90200`
   >
   > `system`模块加载到`0x10000`

2. `setup.asm`

   > BIOS 中断读取机器系统数据
   >
   > 将`system`模块移动到`0x00000`
   >
   > 进入 32 位保护模式

3. `head.asm`

   > 展示信息

4. `makefile`

   > 使用 make 编译出 img 文件
