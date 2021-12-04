<!--
title: SIM800l
sort:
-->

# SIM800L 入门

![image-20201022135213683](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201022135220.png)

## 开机检查

模块开机后应该执行下面初始化流程：

```c
AT                       // 测试串口通讯是否正常
  > OK
AT+CPIN?                // 查询是否检测到SIM卡
  > +CPIN: READY
  > OK
AT+CSQ                  // 查询信号质量
  > +CSQ: 18,0
  > OK
AT+CREG?               	// 查询模块是否注册网络
  > +CREG: 0,1
  > OK
AT+CGATT?             	// 查询模块是否GPRS
  > +CGATT: 1
  > OK
```

## 发送第一条短信

```c
1. AT+CMGF=1			// 设定短信模式为TEXT
2. AT+CSCA? 			// 模块会自动设置短信中心号码
// AT+CSCA="+8613010980500"			// 手动设置
3. AT+CSGS="This is a HelloWorld Message."
```
