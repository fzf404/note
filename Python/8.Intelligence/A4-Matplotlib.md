<!--
title: A4-Matplotlib
sort:
-->

> `matplotlib`

## 统计图

```python
import matplotlib.pyplot as plt

# 调整图
plt.figure(figsize=(16,5))		# 大小
plt.title('title')
plt.xlabel('index')
plt.ylabel('count')
# 需要在plot之后定义
plt.legend(['sin','cos'])			# 图例

x = np.arange(-10,10,0.1)
y = np.sin(x)
# 折线图
plt.plot(x,y,'g')			# 线色为绿
plt.plot(x,y,'go')		# 绿点
plt.plot(x,y,'g--')		# 绿虚线
plt.show()

y = pow(x,2)
# 柱状图
plt.bar(x,y)

# 饼图
plt.pie([2,5,3],labels=[1,2,3],autopct='%1.1f%%')

# 散点图
plt.scatter(x,y)
c='', edgecolors='', alpha=0.5		# 颜色
s='', marker='x'		# 大小与标志

```

## 图像

```python
# 设置图形对象 ：窗口
plt.figure('Figure Object 1',       # 图形对象名称  窗口左上角显示
           figsize = (8, 6),        # 窗口大小
           dpi = 120,               # 分辨率
           facecolor = 'lightgray', # 背景色
           )
plt.subplot(5,3,i+1)	# 行，列，索引
plt.imshow(img)				# 添加图片 cmap='gray' 灰度图
plt.axis('on') 				# 是否显示坐标轴 on/off
plt.colorbar()				# 显示颜色图例
plt.grid(False)				# 是否显示网格线
plt.title('image') 		# 图像题目
plt.show()
```

## 3D

- 使用 plt

```python
# 生成点
def himmelblau(x):
  return (x[0]**2+x[1]-11)**2+(x[0]+x[1]**2-7)**2
x = np.arange(-6,6,0.1)
y = np.arange(-6,6,0.1)
# 转换为网格点坐标矩阵
X, Y = np.meshgrid(x,y)
Z = himmelblau([X,Y])

# jupter鼠标旋转3d图
%matplotlib notebook

fig = plt.figure("Himmelblau",figsize=(8,8))
ax = fig.gca(projection='3d')
# 面图
ax.plot_surface(X,Y,Z)
# 线性图
# ax.plot_wireframe(X,Y,Z)
# 散点图
# ax.scatter(X,Y,Z)

ax.set_xlabel('x')
ax.set_ylabel('y')
plt.show()
```
