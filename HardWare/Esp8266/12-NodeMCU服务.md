<!-- 
title: 12-NodeMCU服务
sort: 
--> 

# Esp8266网络

## 第一个网络服务器

```c
#include <ESP8266WiFi.h>        
#include <ESP8266WiFiMulti.h>   
#include <ESP8266WebServer.h>   
 
ESP8266WiFiMulti wifiMulti;     // 建立ESP8266WiFiMulti对象
 
ESP8266WebServer esp8266_server(80);// 建立ESP8266WebServer对象，80为端口号
 
void setup(void){
  Serial.begin(9600);          // 启动串口通讯
 
  wifiMulti.addAP("fzf", "12345678");  
  // 判断连接                                     
  int i = 0;                                 
  while (wifiMulti.run() != WL_CONNECTED) {     
    delay(1000);                            
    Serial.print(i++); Serial.print(' ');   
  }                                         
  // 输出连接信息
  Serial.println('\n');                        
  Serial.print("Connected to ");            
  Serial.println(WiFi.SSID());              
  Serial.print("IP address:\t");            
  Serial.println(WiFi.localIP());           
  
  // 启动服务
  esp8266_server.begin();                   
  esp8266_server.on("/", handleRoot); // 网站路径，处理函数     
  esp8266_server.on("/fzf", handleFzf); // 网站路径，处理函数
  esp8266_server.onNotFound(handleNotFound);  // 404处理函数

  Serial.println("HTTP esp8266_server started");

}

void loop(void){
  esp8266_server.handleClient();     // 循环处理
}
 
                                                                          
void handleRoot() {    
  // 响应码，信息类型，信息
  esp8266_server.send(200, "text/plain", "Hello from ESP8266 By FZF");   
}

void handleFzf() {    
  // 响应码，信息类型，信息
  esp8266_server.send(200, "text/plain", "嘿嘿，被你找到了！");   
}

void handleNotFound(){                                        
  esp8266_server.send(404, "text/plain", "404: Not found");   
}
```

## 操作LED

```c
#include <ESP8266WiFi.h>        
#include <ESP8266WiFiMulti.h>   
#include <ESP8266WebServer.h>   
 
ESP8266WiFiMulti wifiMulti;     
 
ESP8266WebServer esp8266_server(80);
 
void setup(void){
  Serial.begin(9600);  
 
  pinMode(LED_BUILTIN, OUTPUT); //设置内置LED引脚为输出模式
  
  wifiMulti.addAP("fzf", "12345678");  
  Serial.println("Connecting ...");    
    
  int i = 0;                                 
  while (wifiMulti.run() != WL_CONNECTED) {  
    delay(1000);                             
    Serial.print(i++); Serial.print(' ');    
  }                                          
                                             
  
  Serial.println('\n');
  Serial.print("Connected to ");
  Serial.println(WiFi.SSID());              
  Serial.print("IP address:\t");
  Serial.println(WiFi.localIP());           
 
  esp8266_server.begin();                   
  esp8266_server.on("/", HTTP_GET, handleRoot);     
  esp8266_server.on("/LED", HTTP_POST, handleLED);  
  esp8266_server.onNotFound(handleNotFound);        
 
  Serial.println("HTTP esp8266_server started");
}
 
void loop(void){
  esp8266_server.handleClient();                     
}
 
void handleRoot() {       
  esp8266_server.send(200, "text/html", "<form action=\"/LED\" method=\"POST\"><input type=\"submit\" value=\"Toggle LED\" style=\"background-color: #4CAF50;color: white;\"></form>");
}
 
// 处理LED控制请求
void handleLED() {                          
  digitalWrite(LED_BUILTIN,!digitalRead(LED_BUILTIN));
  esp8266_server.sendHeader("Location","/");          
  esp8266_server.send(303);                           
}
 

void handleNotFound(){
  esp8266_server.send(404, "text/plain", "404: Not found"); 
}
```

## 查看开发板信息

```c
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <ESP8266WebServer.h>

#define buttonPin D3

ESP8266WiFiMulti wifiMulti;

ESP8266WebServer esp8266_server(80);

void handleRoot();
void handleNotFound();

bool pinState; // 存储引脚状态用变量

void setup()
{
    Serial.begin(9600);

    pinMode(buttonPin, INPUT_PULLUP); // 将按键引脚设置为输入上拉模式
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, 1);

    wifiMulti.addAP("Tenda_fzf", "18652798912");
    Serial.println("Connecting ...");

    int i = 0;
    while (wifiMulti.run() != WL_CONNECTED)
    {
        delay(1000);
        Serial.print(i++);
        Serial.print(' ');
    }

    Serial.println('\n');
    Serial.print("Connected to ");
    Serial.println(WiFi.SSID());
    Serial.print("IP address:\t");
    Serial.println(WiFi.localIP());

    esp8266_server.begin();
    esp8266_server.on("/", handleRoot);
    esp8266_server.onNotFound(handleNotFound);

    Serial.println("HTTP esp8266_server started");
}

void loop()
{
    esp8266_server.handleClient();
    pinState = digitalRead(buttonPin);
}

void handleRoot()
{
    String displayPinState;

    if (pinState == HIGH)
    {
        displayPinState = "Button State: Up";
        digitalWrite(LED_BUILTIN, 0);
    }
    else
    {
        displayPinState = "Button State: Down";
        digitalWrite(LED_BUILTIN, 1);
    }

    esp8266_server.send(200, "text/plain", displayPinState);
}

void handleNotFound()
{
    esp8266_server.send(404, "text/plain", "404: Not found");
}
```
