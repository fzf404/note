<!-- 
title: 10-CubeIDE
sort: 
--> 

> 图形化开发

![image-20201202225335270](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201202225342.png)

### 无法连接设备

> 首先将boot0短接至3.3
>
> 设置sys的Debug模式

![image-20210314144921580](C:\Users\44153\AppData\Roaming\Typora\typora-user-images\image-20210314144921580.png)

## 点灯

```
  while (1)
  {
    /* USER CODE END WHILE */
	  HAL_Delay(500);
	  HAL_GPIO_TogglePin(GPIOC, GPIO_PIN_13);
    /* USER CODE BEGIN 3 */
  }
```

