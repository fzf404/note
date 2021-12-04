<!--
title: A3-Numpy入门
sort:
-->

# Numpy 入门

## 创建数据

```python
import numpy as np
# 创建np数组
np.array([1,2,3])
# 创建十个空数组
np.zeros(10)
#	使用4填充一个10*10数组
np.full((10,10),2)
# 创建1-100的数组
arr = np.arange(100)
# 改变数组形状
arr = arr.reshape(10,10)
```

### ndarray 的参数

```python
arr.ndim	# 阶数
arr.shape	# 形状
arr.dtype	# 元素类型
arr.itemsize	# 字节数
arr.size		# 数据大小
```

## 提取数据

```python
arr[0][1]	# 提取二阶数组
arr[5,3:-1:2]	#第六行 第三个到最后 步长为2
arr[[0,6],::2]	# 第一行 与 第七行 步长2
arr[arr > 50]	# 提取大于50的数据
```

## 操作数据

```python
np.max(arr,axis=1)	# y轴提取最大值
np.sum(arr,axis=0)	# 按列相加
np.sin(arr[0])		# 求sin
arr[:,1]*arr[:,3]	# 第一列乘以第三列
numpy.apply_along_axis(func, axis, arr, *args, **kwargs)
np.apply_along_axis(lambda x:print(x[1]+x[3]*x[5]), arr = arr ,axis = 1)	# 对arr里的每一个元素进行函数变换
# 向下拼接数组
np.vstack([arr,arr2])
# 向右拼接数组
np.hstack([arr,arr3])

```

## 打开文件

```python
# 提取csv
np.genfromtxt('csv.csv', delimiter = ',', dtype = 'int16')
# fmt指定存储类型
np.savetxt('2.csv', arr, fmt='%d', delimiter = ',')
```
