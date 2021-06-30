<!-- 
title: 03-Android常用
sort: 
--> 

### 定时器

```java
private void addText(SerialPort serialPort){
    Runnable runnable = new Runnable(){
        @Override
        public void run(){
            serialPort.sendData("100000000010");
            serialPort.sendData("110000000011");
            serialPort.sendData("120000000012");
            serialPort.sendData("130000000013");
            handler.postDelayed(this, 1000);
        }
    };
    handler.post(runnable);
}
```

