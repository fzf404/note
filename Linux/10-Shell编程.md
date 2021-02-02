<!-- 
title: 10-Shell编程
sort: 
--> 

## 变量

```bash
#!/bin/bash 

# 变量
name="value"		# 定义变量
echo $name			# 变量取值
unset name			# 删除变量
readonly name		# 变量设置为只读

varls=`ls`			# 命令返回值赋值
varls=$(ls)

# 字符串
str='this is a string'	
# 双引号内部可有变量
str="You are \"$name\"! \n"
len = ${#str}		# 字符串长度
str = ${str:4}	# 第四个到结束
str = ${str:1:4}		# 第1个字符开始取4个
str = ${str:0-3:4}	# 右边第3个字符串开始取4个

# 读取
read -p "Input Num=" NUM1
echo "Your Num：$NUM1"
# 等待10s
read -t 10 -p "Input Num=" NUM1	
# 数组
array=(value0 value1 value2 value3)
$(array[index])			# 取值
$(array[@])					# 全部

# 运算
$(( (2+3)*4 ))
$[(2+3)*4] 
```

### 参数

```bash
$num		# $0 命令本身 $1- 全部参数
$*			# 所有参数
$@			# 所有参数-列表
$#			# 参数个数

$$			# 当前进程号			
```

## 条件判断

```bash
if [ 条件判断式 ]
then
    程序
elif [ 条件判断式 ]
then
    程序
fi

# 常用判断条件
if [ 'test' = 'test' ] 		# 等于
if [ 20 -gt 10] 					# 大于
if [ -e /root/nohup.out ] # 文件是否存在

if [ 'test' = 'test' ] && echo 'equal' || echo '!' 
```

### case

```bash
case $1 in
"1")
echo 周一
;;
"2")
echo 周二
;;
*)
echo 其它
;;
esac
```

### for

```bash
for var in val1 val2 val3...
do
	echo var
done

# 其他语法
for ((i=0;i<=100;i++))
do
	echo $i
done

# while
while [ $i -le 100 ]
do
    SUM=$[$SUM+$i]
    i=$[$i+1]
done
```

## 函数

```bash
function getSum(){
    SUM=$[$n1+$n2]
    echo "sum=$SUM"
}
read -p "Input n1: " n1
read -p "Input n2: " n2

# 调用 getSum 函数
getSum $n1 $n2
```

