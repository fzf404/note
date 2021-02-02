<!-- 
title: 01-Android入门
sort: 
--> 
#  Android开发入门

## 第一个程序

1. 修改`activity_main.xml`改变布局（图形化）

```xml
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="horizontal">
    <EditText
        android:id="@+id/message"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:hint="@string/message"></EditText>

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:text="Send"
        android:onClick="sendMessage"/>
</LinearLayout>
```

2. 编写处理代码

```java
package com.example.mainactivity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    
	// 响应事件
    public void sendMessage(View view){
        EditText msg=findViewById(R.id.message);
        String s = msg.getText().toString();
        System.out.println(s);
        // Log.i( "messagehoo",s);
    }
}
```

- 