<!--
title: 01-CSharp入门
sort:
-->

# CSharp 入门

## 安装

> 安装`.NET Core`
>
> 验证安装：`dotnet`
>
> `.NET Core` 是 CLR(Common Language Runtime)与 FCL(Framework Class Library)

## 第一个 C#程序

```powershell
# 生成第一个程序
dotnet new console --name FirstCSharp
# 运行
dotnet run
```

```c#
// 不使用using 则:System.Console.WriteLine()
using System;	// 引用命名空间

namespace FirstCSharp	// 声明类的命名空间
{
    class Program		// 声明类
    {
        static void Main(string[] args)		// 声明静态无返回值方法
        {
            Console.WriteLine(TempConvert(100));   // 调用方法
        }
        static double TempConvert(double F)		// 声明静态有返回值方法
        {
            double C = (F - 32) / 1.8;     // 将表达式运行结果存放在本地变量中
            return C;
        }
    }
}
```

## Dotnet

```powershell
# 生成dll文件
dotnet restore		# 恢复引用的库
dotnet build		# 把.cs编译成Assembly(.dll)
dotnet .\bin\Debug\netcoreapp3.1\FirstCSharp.dll	# 运行生成的dll
```

## 基础语法

> 基础语法大多与 c++相同
>
> 所有值都是类型的实例

## 面向对象

```c#
// 包含命名空间
using System;
// 声明命名空间
namespace FirstCsharp
{
    // 一个class
	public class ProLang
	{
        // 成员变量
		string name;
		string describe;
		public ProLang(string unitname,string unitdes)
		{
			name = unitname;
			describe = unitdes;
		}
		public void Python()
		{
			name = "Python";
			describe = "The Best Script Program Language";
		}
		public void Display()
		{
			Console.WriteLine(name + ": " + describe);
		}
	}
    // 包含Main函数和实例化ProLang的class
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
			ProLang csharp = new ProLang("c#","I'm Best!");
			csharp.Display();
			csharp.Python();
			csharp.Display();
		}
    }
}

```

### 例子

```c#
using System;	// 引用命名空间

namespace FirstCSharp	// 声明类的命名空间
{
    class Program		// 声明类名
    {
        static void Main(string[] args)		// 声明静态无返回值方法。静态函数不能被引用
        {
            // 使用构造参数实例化：英尺2英寸
            UnitConvert feetToInchConv = new UnitConvert(12);
            // 英里2英尺
            UnitConvert mileToFeetConv = new UnitConvert(5280);
            // 报错。因为ratio默认为private，声明为publi才可以访问。
            // Console.WriteLine(feetToInchConv.ratio);
            // 调动类的实例方法
            Console.WriteLine(feetToInchConv.Conver(mileToFeetConv.Conver(3)));
        }
    }
    // 复杂类型
    public class UnitConvert
    {
        // 数据成员
        // 静态类无法创建实例
        public static bool Flag = true;
        int ratio; // Field 字段

        // 用于构建实例
        public UnitConvert(int unitRatio) // Contstructor 构造函数
        {
            ratio = unitRatio;
        }
        public int Conver(int unit) // Method 方法
        {
            return unit * ratio;
        }
    }
}
```
