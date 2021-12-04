<!--
title: 01-第一个LED
sort:
-->

# 点亮第一个 LED

## 建立新项目

1. 新建项目

![image-20200328185720856](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200711105806.png)

2. 选择芯片类型

![image-20200328190335746](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200711105813.png)

3. 新建文件，并双击添加

![image-20200328190641409](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200711105816.png)

## 输入程序

1. 选择锤子，选择生成 hex 文件

![image-20200328190947197](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200711105819.png)

![image-20200328191000848](https://gitee.com/nmdfzf404/Image-hosting/raw/master/20200711105822.png)

2. 输入程序

   ```c
   #include "reg51.h"		// 导入头文件

   sbit led = P0^0;		// 命名针脚

   void main()
   {
   	while(1)
   	{
   		led = 0;
   	}
   }
   ```

3. 生成 hex 文件

   > 按 F7，或直接鼠标点击 build

   ![image-20201031211923095](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201031211923.png)
