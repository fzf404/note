<!--
title: 11-NodeMCU网络
sort:
-->

> 开发板：`NodeMCU 1.0 (ESP-12E Module)`

## 第一个程序

```c
// AP模式
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

const char * ssid = "fzf-esp8266";

const char * password = "8266isbest";

void setup()
{
  	// 串口通信
    Serial.begin(9600); 
  
    // AP 模式
    WiFi.softAP(ssid, password);
    // IP信息
    Serial.print("Access Point: ");
    Serial.println(ssid);
    Serial.print("IP: ");
    Serial.println(WiFi.softAPIP());

  	// Wifi 直连
    WiFi.begin(ssid,password)
    // 判断是否连接
    WiFi.ststus() == WL_CONNECTED
      
    // Wifi 自动连接

    ESP8266WiFiMulti wifiMulti;

    wifiMulti.addAP(ssid1,passwd1);
    wifiMulti.addAP(ssid2,passwd2);

    wifiMulti.run()；
      
		// 连接WiFi后，本地地址。
    WiFi.localIP()	
    // 连接WiFi后，WiFi名称。
    WiFi.SSID()		
}
```

