 <!-- 
title: 14-NodeMCU网络
sort: 
-->

## ESP8266HTTPClient

```cpp
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

#define URL "http://opus.fzf404.top/api/active"

void httpClientRequest();

// wifi接入信息
const char* ssid = "Tenda_fzf";
const char* password = "18652798912";

void setup() {
  Serial.begin(9600);

  // 设置工作模式为无线终端模式
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  // 判断连接
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("WiFi Connected!");
  // 发送请求
  httpClientRequest();
}

void loop() {}

// 发送HTTP请求
void httpClientRequest(){

  HTTPClient httpClient;

  // 配置URL
  httpClient.begin(URL);
  Serial.print("URL: "); Serial.println(URL);

  //发送请求
  int httpCode = httpClient.GET();
  Serial.print("Send GET request to URL: ");
  Serial.println(URL);

  if (httpCode == HTTP_CODE_OK) {
    String responsePayload = httpClient.getString();
    Serial.println("Server Response Payload: ");
    Serial.println(responsePayload);
  } else {
    Serial.println("Server Respose Code：");
    Serial.println(httpCode);
  }

  httpClient.end();
}
```

## WiFiClient

```cpp
#include <Arduino.h>
#include <ESP8266WiFi.h>

void wifiClientRequest();

const char *host = "opus.fzf404.top"; // 网络服务器地址
const int httpPort = 80;                         // http端口80

// 设置wifi接入信息(请根据您的WiFi信息进行修改)
const char *ssid = "Tenda_fzf";
const char *password = "18652798912";

void setup() {
  Serial.begin(9600);

  //设置ESP8266工作模式为无线终端模式
  WiFi.mode(WIFI_STA);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi Connected!");

  wifiClientRequest();
}

void loop() {}

// 发送HTTP请求
void wifiClientRequest() {

  WiFiClient client;

  // HTTP请求
  String httpRequest = String("GET /") + " HTTP/1.1\r\n" + "Host: " + host +
                       "\r\n" + "Connection: close\r\n" + "\r\n";

  Serial.print("Connecting to ");
  Serial.print(host);

  // 发送请求
  if (client.connect(host, httpPort)) {
    Serial.println(" Success!");

    client.print(httpRequest);
    Serial.println("Sending request: ");
    Serial.println(httpRequest);

    Serial.println("Web Server Response:");
    while (client.connected() || client.available()) {
      if (client.available()) {
        String line = client.readStringUntil('\n');
        Serial.println(line);
      }
    }
    // 关闭连接
    client.stop();
    Serial.print("Disconnected from ");
    Serial.print(host);

  } else {
    Serial.println(" connection failed!");
    client.stop();
  }
}
```
