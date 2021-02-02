<!-- 
title: 11-NodeMCU网络
sort: 
--> 

> 开发板：`NodeMCU 1.0 (ESP-12E Module)`

## 第一个程序

```c
// AP模式
#include <ESP8266WiFi.h>

const char * ssid = "fzf-esp8266";

const char * password = "8266isbest";

void setup()
{
    Serial.begin(9600); // 串口通信
    // 无线AP模式
    WiFi.softAP(ssid, password);
    // IP信息
    Serial.print("Access Point: ");
    Serial.println(ssid);
    Serial.print("IP: ");
    Serial.println(WiFi.softAPIP());
    
    // 连接wifi
    # 添加Wifi信息
    ESP8266WiFiMulti wifiMulti;     
    # 建立ESP8266WiFiMulti对象
    wifiMulti.addAP(ssid1,passwd1);
    wifiMulti.addAP(ssid2,passwd2);
	# 自动连接
    wifiMulti.run()；
    
    // 直接连接
    WiFi.begin(ssid,password)
    // 判断是否连接
    WiFi.ststus() == WL_CONNECTED

    WiFi.localIP()	// 连接WiFi后，本地地址。
    WiFi.SSID()		// 连接WiFi后，WiFi名称。
}

void loop()
{
}

```

## 总结

```c
// 连接wifi
WiFi.begin(ssid,password)
// 根据添加的信息自动连接
ESP8266WiFiMulti wifiMulti.addAP(ssid1,passwd1);
wifiMulti.run();	
// 判断是否连接
WiFi.status() == WL_CONNECTED;
// 连接信息
WiFi.localIP();
WiFi.SSID();
    
// AP模式
WiFi.softAP(ssid, password);
WiFi.softAPIP();
```



