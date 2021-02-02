<!-- 
title: 03-Arduino数字IO
sort: 
--> 
# Arduino数字IO

## 数字信号

- 配置引脚模式

  `pinMode(pin, mode);`

  > INPUT[0]	输入模式
  >
  > OUTPUT[1]	输出模式
  >
  > INPUT_PULLUP	输入上拉模式

- 控制引脚输出

  `digitalWrite(pin, value);`

  > LOW[0]		低电平
  >
  > HIGH[1]		高电平

- 读取引脚输入

  `digitalRead(pin);`

## 流水灯

```c
void setup() 
{
  // 初始化I/O口
  for(int i=2;i<8;i++)
    pinMode(i,OUTPUT);
}
 
void loop() 
{
  // 从引脚2到引脚6，逐个点亮LED，等待1秒再熄灭LED
  for(int i=2;i<7;i+=2)
  {
    digitalWrite(i,HIGH);
    delay(100);
    digitalWrite(i,LOW);   
  }
  // 从引脚7到引脚3，逐个点亮LED，等待1秒再熄灭LED
  for(int i=7;i>2;i-=2)
  {
    digitalWrite(i,HIGH);
    delay(100);
    digitalWrite(i,LOW);   
  } 
}
```

