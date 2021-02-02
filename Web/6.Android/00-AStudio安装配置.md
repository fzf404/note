<!-- 
title: 00-AStudio安装配置
sort: 
--> 

# Android Studio安装配置

## 安装

1. Java SDK

   > 甲骨文：[Java SE](https://www.oracle.com/java/technologies/javase-downloads.html)

   生成`jre`

   - 进入安装目录
   - `bin\jlink.exe --module-path jmods --add-modules java.desktop --output jre`

   设置环境变量至bin目录

   > `jre\bin`与`jdk\bin`

2. 安装`AndroidStudio`

   > 官网：[developers](https://developer.android.google.cn/studio?hl=zh-cn)

   - 安装SDk

     > 重新配置Auto：https://mirrors.tuna.tsinghua.edu.cn/
     >
     > clear passwd
     >
     > 重新进入Android SDK
     >
     > 设置文件夹，开始下载
     

## 遇到过的问题

> Gradle sync failed: Could not GET 'https://dl.google.com/dl/android/maven2/com/android/tools/build/gradle/3.5.2/gradle-3.5.2.pom'. Received status code 400 from server: Bad Request

`build.gradle`

```ini

buildscript {
    repositories {
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/google' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/gradle-plugin' }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
    }
}
 
allprojects {
    repositories {
        maven { url 'http://maven.aliyun.com/nexus/content/groups/public/' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/jcenter' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/google' }
        maven { url 'http://maven.aliyun.com/nexus/content/repositories/gradle-plugin' }
    }
}buildscript {

    repositories {

        google()

        jcenter()

    }
}
```

> 删除代理
>
> `C:\Users\<UserName>\.gradle\gradle.properties`