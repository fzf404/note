<!--
title: JDY-31
sort:
-->

# JDY-31 蓝牙

![image-20201022135213683](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201022135220.png)

## 命令大全

| 指令           | 响应                                 | 作用                  |
| -------------- | ------------------------------------ | --------------------- |
| AT+VERSION     | +VERSION=JDY-31-V1.35,Bluetooth V3.0 | 版本号                |
| AT+RESET       | +OK                                  | 复位                  |
| AT+DISC        | +OK                                  | 断开连接              |
| AT+LADDR       | +LADDR=<Param>                       | Mac 地址              |
| AT+BAUD<Param> | +OK/+BUAD=<Param>                    | 波特率设置            |
|                | 注：4(9600)-9(128000)                |                       |
| AT+PIN<Param>  | +OK/+PIN=<Param>                     | 配对密码(默认为 1234) |
| AT+NAME<Param> | +OK/+NAME=<Param>                    | 广播名称              |
| AT+DEFAULT     | OK                                   | 恢复出厂设置          |
| AT+ENLOG       | OK                                   | 开关串口(1 开 0 关)   |
|                |                                      |                       |
