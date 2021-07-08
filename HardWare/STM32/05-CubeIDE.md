<!-- 
title: 05-CubeIDE入门
sort: 
--> 

> 图形化开发

## 点灯

1. 进入`.ioc`文件，图形化配置引脚：`PC13->GPIO_Output`
2. 进入`SYS`菜单，配置烧录模式：
![配置烧录模式](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/image-20210314144921580.png)
3. `Ctrl+S`保存，自动生成代码。
4. 在while循环中插入如下代码：

```c
while (1)
{
  /* USER CODE END WHILE */
  HAL_Delay(500);
  HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
  /* USER CODE BEGIN 3 */
}
```

## 问题

### 无法连接设备

> 首先将boot0短接至3.3
>
> 设置sys的Debug模式

![image-20210314144921580](C:\Users\44153\AppData\Roaming\Typora\typora-user-images\image-20210314144921580.png)

