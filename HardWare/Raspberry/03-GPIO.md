<!--
title: 03-GPIO操作
sort:
-->

## 引脚图


![引脚图](https://shumeipai.nxez.com/wp-content/uploads/2015/03/rpi-pins-40-0.png)

## RPi 库使用

```python
import RPi.GPIO as GPIO

# 通道编号系统
GPIO.setmode(GPIO.BCM)
# 主板编号系统
GPIO.setmode(GPIO.BOARD)

# 设置引脚模式
GPIO.setup(channel, GPIO.IN)
GPIO.setup(channel, GPIO.OUT)
GPIO.setup(channel, GPIO.OUT, initial=GPIO.HIGH) # 设置初始值

GPIO.input(channel) # 读取输出
GPIO.output(channel, state) # 设置输入
```
