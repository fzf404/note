<!-- 
title: 04-Arduino模拟IO
sort: 
--> 
# Arduino模拟IO

> 编号带有`A`的引脚是模拟输入引脚.
>
> 可以将外部信号转换为`0-1024`的数字表示
>
> `analogRead(pin)`：读取引脚上的模拟值
>
> `analogWrite(pin, value)`：输出PWM

## 串口监视器

```c
Serial.begin(9600);
Serial.println();
```

  

