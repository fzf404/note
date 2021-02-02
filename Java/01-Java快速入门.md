<!-- 
title: 01-Java快速入门
sort: 
--> 

> [refer_1](https://blog.csdn.net/yhsnihao/article/details/88697660) [refer_2](https://blog.csdn.net/qq_30993595/article/details/81951361)

## JAVA基础

> 面向对象
>
> 编译器将每一个class编译成相应名称的`.class`字节码文件。

## 特性

- 自动回收内存

  `System.gc();`

## 关键字

- `static`

  > 无论一个类实例化多少对象，它的静态变量只有一份拷贝。
  >
  > `main()`方法是静态的，执行时不会创建所在类的实例对象
  
- `final`

  > 指向变量的指针不可修改

### 变量

> 函数中变量分配栈内存，调用结束后自动释放。
>
> `new`定义的对象或数组分配堆内存，由java虚拟机自动回收

```java
// 数组不可指定大小
int i[] = {1,2,3,4};
int i[] = new x[num];
int i[] = new x[]{1,2,3,4};
// 多维数组
// 本质是数组中的数组
int x[][];
x = new int[3][];
x[0] = new int[3];
x[1] = new int[2];
// x[2]未赋值，指向null
```

## 基础语句

```java
// 高级for循环
int for_array[] = { 2, 3, 5, 7, 11 };
for (int num : for_array) {
    System.out.println(num);
}
// 三目运算
(a>b)?c:d;
```


### 枚举

```java
class FreshJuice {
   enum FreshJuiceSize{ SMALL, MEDIUM , LARGE }
   FreshJuiceSize size;
}
 
public class FreshJuiceTest {
   public static void main(String[] args){
      FreshJuice juice = new FreshJuice();
      juice.size = FreshJuice.FreshJuiceSize.MEDIUM;
   }
}
```

## 面向对象

### 函数重载

### 构造函数

> 无返回值，创建实例时执行初始化

```java
import java.util.*;

class demo{
	public static void main(String[] args) {
		Todo test1 = new Todo();
		Todo test2 = new Todo("admin");
		Scanner sc = new Scanner(System.in);
		String name = sc.nextLine();
		Todo test3 = new Todo(name);
	}
}

class Todo{
	private String name = "fzf404";
	private static String static_time = new Date().toString();
	private String time = new Date().toString();
	public Todo(){
		System.out.println("Welcom " + name);
		System.out.println("Static time:"+ static_time);
		System.out.println("now time:"+ time);
	}
    // 函数重载
	public Todo(String name){
		this.name = name;
		System.out.println("Welcom " + name);
		System.out.println("Static time:"+ static_time);
		System.out.println("now time:"+ time);
	}
}
/*
Welcom fzf404
Static time:Thu Dec 10 09:12:40 CST 2020
now time:Thu Dec 10 09:12:40 CST 2020

Welcom admin
Static time:Thu Dec 10 09:12:40 CST 2020
now time:Thu Dec 10 09:12:40 CST 2020

guest
Welcom guest
Static time:Thu Dec 10 09:12:40 CST 2020
now time:Thu Dec 10 09:12:43 CST 2020
```

### this

> 指向对象在堆内存中的首地址

```java
class A
{
	public void fun1()
	{
	}
	public void fun2()
	{
		A a2 = new A();
		// 调用a2的func1()方法
		a2.fun1();
		// 调用实例的func()方法
		this.fun1();
	}

	public static void main(String arg[])		//main函数
	{
		// 实例化A类
		A a1 = new A();
		// 对象a1调用fun2()方法
		a1.fun2();		
	}
}
```

```java
class Person
{
	private String name;
	public shout(String name)
	{
		// 对象的属性->方法中的局部变量
		this.name=name;
		System.out.println("My name is "+name);
	}
}
```

> 调用构造方法

```java
class Test
{
	public Test()
	{
		this("function2");
	}
	public Test(String m)
	{
		System.out.println(m+" is running");
	}

	public static void main (String arg[])
	{
		Test t = new Test();
	}
}
/*
function2 is running
```

### 对象的强制类型转换

```java
class A
{
	public void func1()
	{
		System.out.println("A func1 is calling");
	}
		public void func2()
	{
		System.out.println("A func2 is calling");
	}
}

class B extends A
{
	public void func1()
	{
		System.out.println("B func1 is calling");
	}
	public void func3()
	{
		System.out.println("B func3 is calling");
	}
}

class Test
{
	public static void main(String args[])
	{
		callA(new B());			//将类B传递给callA函数
	}
	public static void callA(A a)		//函数接受一个类A的对象作为参数
	{
		a.func1();
		a.func2();
	}
}
/*
B func1 is calling
A func2 is calling
```

### 内部类

> 使用`static`则成为同级类

```java
class Outer
{
	private int size;
	public class Inner
	{
		private int size;
		public void doStuff(int size)
		{
			size++;				//引用的是doStuff()函数的size
			this.size++;		//引用的是Inner类的size
			Outer.this.size++;	//引用的是Outer类的size
		}
	}
}
// 引用
class demo
{
	public static void main(String[] args) {
		Outer test = new Outer();
		Outer.Inner test_in = test.new Inner();
	}
}
```

## 继承

> `extends`
>
> 子类继承父类所有成员变量和方法
>
> JAVA只支持单继承,但可多层继承

### 子类的实例化

```java
// 父类
class Person
{
	public String name = "unknow";
	public int age =-1;
	public Person()
	{
	}
	public Person(String name,int age)
	{
		this.name = name;
		this.age = age;
	}
	void getInfo()
	{
		System.out.println(name);
		System.out.println(age);
	}
}
// 子类
class Student extends Person
{
	public String school = "unknow";
	public Student()
	{
        // 调用父类的构造方法
		super();
	}
	public Student(String name,int age)
	{
		super(name,age);
	}
	public Student(String name,int age,String school)
	{
		this(namde,age);
		
		this.school = school
	}
}
class Test
{
	public static void main(String args[])
	{
		Student stu = new Student("DRF",20,"UESTC");
		stu.getInfo();
	}
}
```

## 抽象类

> 仅声明,没有方法的具体实现,交由子类重载

```java
abstract class Abstract {
	abstract int test(int x,String y);
	public Abstract{
		System.out.println("Abstract Construct Success!")
	}
}
```

### 接口

> 如果类中所有方法都是抽象的,可直接写为接口

```java
abstract class A
{
	public static final int ID = 1;
	abstract int aa();
	abstract void bb();
}
```

```java
interface A
{
	int ID = 1;
	int aa();
	void bb();
}
```

