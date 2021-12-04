<!--
title: 03-JavaIO
sort:
-->

## IO

> 基础操作

```java
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        File f = new File("./fzf");
        // 获得路径
        f.getPath();
        f.getAbsolutePath();
        f.getCanonicalPath();
        // 判断类型
        f.isFile();
        f.isDirectory();
        // 创建删除文件
        file.createNewFile();
        file.delete();
        // 临时文件
        File tf = File.createTempFile("tmp", ".txt"); // 提供临时文件的前缀和后缀
        tf.deleteOnExit(); // JVM退出时自动删除
    }
}
```

### 遍历文件目录

```java
File f = new File("/home");
File[] fs1 = f.listFiles(); // 列出所有文件和子目录
printFiles(fs1);
```

### Path 对象

> 路径操作

```java
import java.io.*;
import java.nio.file.*;

public class Main {
  public static void main(String[] args) throws IOException {
      // 构造一个Path对象
    Path p1 = Paths.get(".", "data", "fzf404");
    System.out.println(p1);					// "./data/fzf404"
    Path p2 = p1.toAbsolutePath();
    System.out.println(p2);					// "/opt/./data/fzf404"
    Path p3 = p2.normalize();
    System.out.println(p3);					// "/opt/data/fzf404"
    File f = p3.toFile(); 					// 转换为File对象
    System.out.println(f);					// "/opt/data/fzf404"
    // 遍历PATH
    for (Path p : Paths.get("data").toAbsolutePath()) {
      // opt data
      System.out.println("  " + p);
      }
  }
}
```

### InputStream

> 字节流读取`1bit`

```java
public String readFile() throws IOException {
  StringBuilder sb = new StringBuilder();
  try (InputStream input = new FileInputStream(this.filename)) {
    int n;
    // StringBuilder对象
    while ((n = input.read()) != -1) {
      sb.append((char) n);
    }
  } // 自动finally并调用close()
  return sb.toString();
}
```

### OutputStream

> 基本输出流

```java
public void writeFile(String context) throws IOException {
  try (OutputStream output = new FileOutputStream(this.filename)) {
    output.write(context.getBytes("UTF-8")); // Hello
  }
}
```

## Reader/Writer

> 字符流读取`2bit`

```java
import java.nio.charset.*;

public String readFile2() throws IOException {
  char[] buffer = new char[1000];
  try (Reader reader = new FileReader(this.filename, StandardCharsets.UTF_
      int n;
      while ((n = reader.read(buffer)) != -1) {
          System.out.println("read " + n + " chars.");
      }
  }
```
