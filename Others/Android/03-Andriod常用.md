<!--
title: 03-Android常用
sort:
-->

### 定时器

```java
// m
private void addText(SerialPort serialPort){
  Runnable runnable = new Runnable(){
    @Override
    public void run(){
      do Somthing...
			handler.postDelayed(this, 1000);
    }
  };
  handler.post(runnable);
}

// kotlin
Handler(Looper.getMainLooper()).postDelayed({
    do Somthing...
}, 500)
```

### 字体

> 设置字体

```kotlin
val face = Typeface.createFromAsset
    assets,
    "digital.ttf"
)
text.setTypeface(face)
```
