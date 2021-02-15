<!-- 
title: 13-NodeMCU闪存
sort: 
--> 

## 文件访问

```cpp
#include <FS.h> 

String file_name = "/fzf-file/notes.txt";

SPIFFS.format();    // 格式化SPIFFS
SPIFFS.begin();		// 启动SPIFFS

// 写入文件
File dataFile = SPIFFS.open(file_name, "w");
dataFile.println("Hello SPIFFS!");
dataFile.close();  

// 读文件
SPIFFS.exists(file_name);
File dataFile = SPIFFS.open(file_name, "r"); 
dataFile.read();	// 读取单个字符
dataFile.close();

// 追加
File dataFile = SPIFFS.open(file_name, "a");
dataFile.println("This is Appended Info."); 
dataFile.close();

// 读取目录
Dir dir = SPIFFS.openDir(folder_name);
while (dir.next()) {  // dir.next()用于检查目录中是否还有“下一个文件”
  Serial.println(dir.fileName()); // 输出文件名
}

// 删除文件
SPIFFS.remove(file_name);

// 闪存系统信息
FSInfo fs_info;
SPIFFS.info(fs_info);
 
// 可用空间总和（单位：字节）
Serial.print("totalBytes: ");     
Serial.print(fs_info.totalBytes); 
Serial.println(" Bytes"); 

// 已用空间（单位：字节）
Serial.print("usedBytes: "); 
Serial.print(fs_info.usedBytes);
Serial.println(" Bytes"); 

// 最大文件名字符限制（含路径和'\0'）
Serial.print("maxPathLength: "); 
Serial.println(fs_info.maxPathLength);

// 最多允许打开文件数量
Serial.print("maxOpenFiles: "); 
Serial.println(fs_info.maxOpenFiles);

// 存储块大小
Serial.print("blockSize: "); 
Serial.println(fs_info.blockSize);

// 存储页大小
Serial.print("pageSize: ");
Serial.println(fs_info.pageSize);
```

## 文件上传

[插件地址](https://github.com/esp8266/arduino-esp8266fs-plugin/releases)

## 案例

```cpp
#include <Arduino.h>
#include <ESP8266WebServer.h>
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <FS.h>

void handleRequest();
String getContentType(String filename);

// 对象初始化
ESP8266WiFiMulti wifiMulti;
ESP8266WebServer esp8266_server(80);

void setup() {
  Serial.begin(9600);

  wifiMulti.addAP("Tenda_fzf", "18652798912");

  // 判断是否连接
  int i = 0;
  while (wifiMulti.run() != WL_CONNECTED) { // 尝试进行wifi连接。
    delay(1000);
    Serial.print(i++);
    Serial.print(' ');
  }

  // 输出连接信息
  Serial.println('\n');
  Serial.print("Connected to ");
  Serial.println(WiFi.SSID());
  Serial.print("IP address:\t");
  Serial.println(WiFi.localIP());

  // 文件系统
  if (SPIFFS.begin()) { // 启动闪存文件系统
    Serial.println("SPIFFS Started.");
  } else {
    Serial.println("SPIFFS Failed to Start.");
  }

  // 启动服务
  esp8266_server.onNotFound(handleRequest);
  esp8266_server.begin();
  Serial.println("HTTP server started");
}

void loop() { esp8266_server.handleClient(); }

// 处理请求
void handleRequest() {
  String webURL = esp8266_server.uri();
  if (webURL.endsWith("/")) {
    webURL = "/index.html";
  }

  String contentType = getContentType(webURL); // 获取文件类型

  // 读取文件
  if (SPIFFS.exists(webURL)) {
    File file = SPIFFS.open(webURL, "r");
    esp8266_server.streamFile(file, contentType);
    file.close();
  } else {
    esp8266_server.send(404, "text/plain", "404 Not Found");
  }
}

// 获取文件类型
String getContentType(String filename) {
  if (filename.endsWith(".htm"))
    return "text/html";
  else if (filename.endsWith(".html"))
    return "text/html";
  else if (filename.endsWith(".css"))
    return "text/css";
  else if (filename.endsWith(".js"))
    return "application/javascript";
  else if (filename.endsWith(".png"))
    return "image/png";
  else if (filename.endsWith(".gif"))
    return "image/gif";
  else if (filename.endsWith(".jpg"))
    return "image/jpeg";
  else if (filename.endsWith(".ico"))
    return "image/x-icon";
  else if (filename.endsWith(".xml"))
    return "text/xml";
  else if (filename.endsWith(".pdf"))
    return "application/x-pdf";
  else if (filename.endsWith(".zip"))
    return "application/x-zip";
  else if (filename.endsWith(".gz"))
    return "application/x-gzip";
  return "text/plain";
}
```

