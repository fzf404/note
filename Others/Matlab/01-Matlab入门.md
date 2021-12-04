<!--
title: 01-Matlab入门
sort:
-->

# Matlab 入门

## 数据

```matlab
Inf: ∞
NaN

# 字符串
str='This is a String.';	# ；不显示运算结果
clear str

# 格式化
format longE

# 矩阵
>> a=[1 2 3;4 5 6;7 8 9]

     1     2     3
     4     5     6
     7     8     9

>> a(3)

     7

>> a(2,3)

     6

>> a([3,6,9])

     7     8     9

>> a([1 3;2 3])

     1     7
     4     7

>> a([1,3],[2])

     2
     8

# 批量
A = 1:100
A = 1:5:100 	# 1+5 -> 100
str = 'a':2:'z'	# ace -> z
```
