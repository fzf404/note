<!-- 
title: 02-Java基础
sort: 
--> 

## 数据类型

> 占用字节数

```
       ┌───┐
  byte │   │
       └───┘
       ┌───┬───┐
 short │   │   │
       └───┴───┘
       ┌───┬───┬───┬───┐
   int │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
  long │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┬───┬───┐
 float │   │   │   │   │
       └───┴───┴───┴───┘
       ┌───┬───┬───┬───┬───┬───┬───┬───┐
double │   │   │   │   │   │   │   │   │
       └───┴───┴───┴───┴───┴───┴───┴───┘
       ┌───┬───┐
  char │   │   │
       └───┴───┘
```

### 引用类型

> 内部存储地址,指向对象的位置

```java
String s = "hello";
s.equals(arg)	// 判断是否相等
// PI是一个常量
final double PI = 3.14; 
// 类型名字太长
var sb = new StringBuilder();
// 强制类型转换
int i = 12345;
short s = (short) i; // 12345
```

### 数组

```java
int[] array = new int[5];
int[] array2 = { 1, 2, 3, 4, 5 };

array.length();
// 数组转String
String.valueOf(array)
// 字符串转数组
str.toCharArray();
// 对象转换为字符串
object.toString();
// 数组排序
array.sort()
```

## 读取输入

```java
import java.util.Scanner;
Scanner s = new Scanner(System.in);
String name = s.nextLine();
int age = s.nextInt();
```

## 流程控制

```java
if() {
} else if() { 
}else{
}
// switch
switch (i){
	case 1 -> Statement;
  case 2:
		Statement;
		break;
	default -> {
    Statement1;
    Statement2;
  }
}
// 遍历for循环
int[] array = { 1, 4, 9, 16, 25 };
for (int n : array) {
  System.out.println(n);
}
```

## 面向对象

```java
class Friend {
  // 属性
  public String name;
  public int age;
  private double relation;					// 子类实例均无法调用
  protected double relationship;		// 子类可继承,实例无法调用
  
	// 构造方法
  public Friend(String name, int age) {
    this.name = name;
    this.age = age;
  }
  public void sayInfo() {
    System.out.println("Name: " + this.name + "\nAge: " + this.age + "\nPercent: " + this.relationship);
  }
}
// 子类继承Friend
class Son extends Friend {
  public Son(String name, int age) {
    // 调用父类构造函数
    super(name, age);
  }
  public void hi() {
    System.out.println("hi~");
  }
}

// 主类
public class Hello {
  public static void main(String[] args) {
    var oneSon = new Son("小明之子", 18);
    oneSon.sayInfo();
    Friend f1 = new Son("小明之子", 18);
    if (f1 instanceof Son) {
      var f2 = (Son) f1;
      f2.hi();
    }
  }
}

@Override					// 覆写父类方法时判断是否正确签名
super.method();		// 调用父类覆写的方法
public final void method(){}		// 不可被子类覆写

// 父类的方法被全部子类覆写,则可定义抽象方法
abstract class Friend {
	public abstract void methos(int args);
}
class Son extends Friend {
  public double rela;
	public void setRel(double rel) {
    this.rela=rel;
  }
}

// 全部方法都是抽象的,可定义接口
abstract class Person {
    public abstract void run();
    public abstract String getName();
}
interface Person{
  void run();
  String getName();
}
// class实现interface须使用implements
class Student implements Person {}
```

## 泛型

> `ArrayList`使用泛型新建`StringList`对象

```java
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
      	//  List<String> list = List.of("apple", "pear", "banana")
        list.add("apple"); // size=1
        list.add("pear"); // size=2
        list.add("apple"); // 允许重复添加元素，size=3
        System.out.println(list.size());
    }
}
```

## 迭代器

> 使用迭代器访问LIst效率最高

```java
import java.util.Iterator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> list = List.of("apple", "pear", "banana");
        for (Iterator<String> it = list.iterator(); it.hasNext(); ) {
            String s = it.next();
            System.out.println(s);
        }
    }
}
```

## 异常捕获

```java
public static void main(String[] args) {
    try {
      	// 断言 不满足则抛出异常
      	assert process1() > 0;
      	process2();
    } catch (UnsupportedEncodingException e) {
      	// 打印调用栈
      	printStackTrace();
				throw new RuntimeException("Bad encoding");
    } catch (IOException e) {
        System.out.println("IO error");
    } finally {
        System.out.println("END");
    }
}
```

