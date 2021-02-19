<!-- 
title: 08-Pytorch基础
sort: 
--> 

## 计算

```python
import torch.nn as nn


# 算均方误差
x = torch.ones(1)
w = torch.full([1],3.)
loss_func = nn.MSELoss()


# 将w变为可导
w.requires_grad_()
# 更新计算图 (predict, label)
mse = loss_func(torch.ones(1),x*w)

# 求导
torch.autograd.grad(mse,[w])
# 更简单的向后传播
mse.backward()
w.grad

# 归一化
x = torch.tensor([1,2,3],dtype=torch.float)
softmax1 = nn.Softmax(dim=0)
softmax1(x)
```

## 优化函数

```python
def himmelblau(x):
  return (x[0]**2+x[1]-11)**2+(x[0]+x[1]**2-7)**2
x = np.arange(-6,6,0.1)
y = np.arange(-6,6,0.1)
# 转换为网格点坐标矩阵
X, Y = np.meshgrid(x,y)
Z = himmelblau([X,Y])

xy=torch.tensor([0.,0.],requires_grad=True)
# Adam优化算法
optimizer = torch.optim.Adam([xy],lr=1e-2)
for step in range(20000):
  # 求预测值
  pred=himmelblau(xy)
  # 梯度设置为0
  optimizer.zero_grad()
  # 向后传播
  pred.backward()
  optimizer.step()
  if step%2000==0:
    print ('step {}:xy={},f(x)={}'.format(step,xy.tolist(),pred.item()))

```

## 交叉熵

> `cross entropy`: 分类问题优势-收敛快

```python
a1 = torch.full([4],1/4.)
a2 = torch.tensor([0.1,0.1,0.1,0.7])
a3 = torch.tensor([0.001,0.001,0.001,0.997])
# 求熵
-(a1*torch.log2(a1)).sum()    # 2
-(a2*torch.log2(a2)).sum()    # 1.36
-(a3*torch.log2(a3)).sum()    # 0.03
```

