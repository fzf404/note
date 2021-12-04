 <!-- 
title: 15-JSON解析
sort: 
-->

## JSON 解析

> [计算缓冲区](https://arduinojson.org/v6/assistant/)

```cpp
#include <ArduinoJson.h>
void jsonParse(String data) {
  // 创建doc对象
  StaticJsonDocument<768> doc;
  DeserializationError error = deserializeJson(doc, data);
  // 错误处理
  if (error) {
    Serial.print(F("deserializeJson() failed: "));
    Serial.println(error.f_str());
    return;
  }
  String code = doc["code"];
  String msg = doc["msg"];
  Serial.println(code + ',' + msg);
}
```

## JSON 生成

```cpp
String rootJson(){
  StaticJsonDocument<512> doc;
  doc["code"] = 200;
  doc["msg"] = "获取成功";
  // 新建子数据
  sonObject data = doc.createNestedObject("data");
  data["D1"] = String(digitalRead(D1));
  data["D2"] = String(digitalRead(D2));
  data["D3"] = String(digitalRead(D3));

  serializeJson(doc, jsonCode);
  Serial.print("Json Code: ");
  Serial.println(jsonCode);

  return jsonCode;
}
// 绑定
void handleRoot() {
  esp8266_server.send(200, "application/json", rootJson());
}
```
