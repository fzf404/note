<!-- 
title: 13-NodeMCU闪存
sort: 
--> 

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

