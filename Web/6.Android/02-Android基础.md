<!-- 
title: 02-Android基础
sort: 
--> 

# Android基础

## 四大组件

- 活动(Activity)

  > 活动是程序的根本

- 服务(Service)

  > 后台提供服务，无界面，与Activity同级

- 广播接收器(BroadcastReceiver)

  > 程序间信息传输

- 内容提供者(ContentProvider)

  > 访问第三方应用的数据

## layout

> 定义应用中的界面结构

### 结构

> `View`绘制可查看并进行交互的内容
>
> `ViewGroup`是不可见容器

![image-20201028200605153](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2020/20201028200612.png)

> `View`对象一般为小部件，例如`Buttom`或`TextView`

### 声明布局

> 在XML中声明界面元素
>
> 每个布局文件只能包含一个根元素，必须是视图对象或`ViewGroup`

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```
> XML文件将会编译成`View`资源，
>
> 在`MainActivity.onCreate()`回调内，
>
> 调用`setContentView()`
>
> 并以`R.layout.*layout_file_name`形式传递代码布局。

```java
package com.example.helloworld;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
```

### 属性

```xml
<TextView
    android:id="@+id/tv"
	android:layout_width="wrap_content"
	android:layout_height="wrap_content"
	android:text="Hello World!"
	android:textSize="24sp" />
```

> `@id`：对View对象进行唯一标识
>
> `@+id`在R.java文件新增id名称，`@id`直接引用已存在的id资源
>
> 在`MainActivity.java`调用：
>
> `TextView textView = (TextView) findViewById(R.id.tv)`