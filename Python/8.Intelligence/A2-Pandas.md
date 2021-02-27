<!-- 
title: A2-Pandas
sort: 
--> 
# Pandas

## 基本

- 初识pandas

  `import pandas as pd`

  `pd.__version__`

- 主要数据

  > `DateFrame`：一个关系型数据表格，其中包含多个行和已命名的列。
  >
  > `series`：`DataFrame` 中包含一个或多个 `Series`，每个 `Series` 均有一个名称。


## 使用方法

  > 构建 `Series` 对象.
  >
  > 创建`DateFrame`对象：
  >
  > ```python
  > 城市名称 = pd.Series(['San Francisco', 'San Jose', 'Sacramento'])
  > 人口 = pd.Series([852469, 1015785, 485199])
  > 
  > pd.DataFrame({ 'City name': 城市名称, '人口': 人口 })
  > ```
  >
  > 加载文件：
  >
  > ```python
  > 数据表 = pd.read_csv("x.csv", sep=",")
  > # 显示关于DataFrame的统计信息
  > 数据表.describe()	
  > # 显示前几个记录
  > 数据表.head()
  > # 绘制图表
  > 数据表.hist('series_name')
  > ```
  >
  > 可以使用熟悉的 Python dict/list 指令访问 `DataFrame` 数据：
  >
  > ```python
  > 城市信息 = pd.DataFrame({ 'City name': 城市名称, '人口': 人口 })
  > 
  > 城市信息['City name']
  > '''
  > <class 'pandas.core.series.Series'>
  > 0    San Francisco
  > 1         San Jose
  > 2       Sacramento
  > Name: City name, dtype: object
  > '''
  > print(type(城市信息['City name'][1]))
  > 城市信息['City name'][1]
  > '''
  > <class 'str'>
  > 'San Jose
  > '''
  > 城市信息[0:2]
  > '''
  > 	City name	人口
  > 0	San Francisco	852469
  > 1	San Jose	1015785
  > '''
  > # 别的方法
  > 城市信息.iloc[1,2]	# 第一行第二个
  > .iloc[1,:][人口]
  > ```

## 操作数据

> ```python
>城市信息['Area square miles'] = pd.Series([46.87, 176.53, 97.92])
> 
>城市信息['人口'] = 城市信息['人口'] / 城市信息['Area square miles']
> 
># 选择最大值
> idxmax()
>```

`Series.apply` 以参数形式接受 [lambda 函数](https://docs.python.org/2/tutorial/controlflow.html#lambda-expressions)，而该函数会应用于每个值。

```python
人口.apply(lambda val: val > 1000000)

0    False
1     True
2    False
dtype: bool
```

## 索引

> `Series` 和 `DataFrame` 对象也定义了 `index` 属性，该属性会向每个 `Series` 项或 `DataFrame` 行赋一个标识符值。
>
> 调用 `DataFrame.reindex` 以手动重新排列各行的顺序。
>
> `城市信息.reindex([2, 0, 1])`
>
> 重建索引是一种随机排列 `DataFrame` 的绝佳方式。
>
> `城市信息.reindex(np.random.permutation(城市信息.index))`