<!--
title: 01-AndroidUI
sort:
-->

## Android UI

### HelloWorld

> 布局文件

```xml
<TextView
    android:id="@+id/textView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Hello World!"
    android:textSize="24dip"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintLeft_toLeftOf="parent"
    app:layout_constraintRight_toRightOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```

> 主活动

```java
// 根据id获取View对象
TextView textView = (TextView) findViewById(R.id.textView);
textView.setText("Get Layout");
// 读取配置
float w = textView.getWidth();
float h = textView.getHeight();
float l = textView.getLeft();
float r = textView.getRight();

Log.e("info","w=:"+h);
Log.e("info","h=:"+w);
Log.e("info","l=:"+l);
Log.e("info","r=:"+r);
```

## 布局

### 线性布局 - LinearLayout

> `vertical & horizontal`

```xml
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <TextView
        android:layout_width="300dp"
        android:layout_height="300dp"
        android:background="#f00"
        android:gravity="center"
        android:text="1"
        android:textColor="#fff"
        android:textSize="26sp" />

    <TextView
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:background="#0f0"
        android:gravity="center"
        android:text="2"
        android:textColor="#fff"
        android:textSize="26sp" />

    <TextView
        android:layout_width="100dp"
        android:layout_height="100dp"
        android:background="#00f"
        android:gravity="center"
        android:text="3"
        android:textColor="#fff"
        android:textSize="26sp" />
</LinearLayout>
```

![image-20210215220034946](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/image-20210215220034946.png)

### 布局权重-

> `android:layout_weight="1"`

```xml
<LinearLayout
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <View
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:background="#f00" />
    <View
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:background="#0f0"
        android:gravity="center" />
    <View
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1"
        android:background="#00f"
        android:gravity="center" />
</LinearLayout>
```

![image-20210215220704513](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/image-20210215220704513.png)

### 相对布局

![img](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/797932661-1.png)
