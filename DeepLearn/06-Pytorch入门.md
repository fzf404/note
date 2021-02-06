<!-- 
title: 06-Pytorch入门
sort: 
--> 

> 使用pytorch
>
> [官方安装教程](https://pytorch.org/get-started/locally/)

### 测试

```python
$ python3
>>> import torch
>>> print(torch.rand(5,3))
tensor([[0.4404, 0.8982, 0.5171],
        [0.8257, 0.1787, 0.0903],
        [0.5172, 0.6681, 0.8938],
        [0.0109, 0.2770, 0.5885],
        [0.0446, 0.9772, 0.1019]])
>>> torch.cuda.is_available()
True
```

## 数据操作

> 关键词说明

`tensor`: 多维数组

> 建立数据

```python
torch.tensor([1,2,1])		# tensor([1, 2, 1])
torch.Tensor(2,3)				# torch.Size([2, 3])
torch.FloatTensor(2)		# 随机两个tensor
torch.from_numpy(data)	# numpy转torch

torch.empty(5,3)
torch.rand(5,3)			# 范围(0, 1)
torch.randn(5, 3)		# 范围(-1, 1)
torch.arange(0,10,2)		# tensor([0,2,4,6,8])

torch.linspace(0,10,steps=4)	# tensor([0.00,3.33,6.67,10.00])
torch.logspace(0,-1,steps=4)	# tensor([1.0000, 0.4642, 0.2154, 0.1000])
torch.eye(5,5)
'''
tensor([[1., 0., 0., 0., 0.],
        [0., 1., 0., 0., 0.],
        [0., 0., 1., 0., 0.],
        [0., 0., 0., 1., 0.],
        [0., 0., 0., 0., 1.]])
'''

torch.zeros(5,3).type()	# torch.FloatTensor
torch.zeros(5,3,dtype=torch.long)
torch.ones(5,3)

x = torch.tensor([1,2])
x = x.new_ones(5,3,dtype=torch.double)
'''
tensor([[1., 1., 1.],
        [1., 1., 1.],
        [1., 1., 1.],
        [1., 1., 1.],
        [1., 1., 1.]], dtype=torch.float64)
'''
# 仿照x填入数据
x = torch.randn_like(x, dtype=torch.float)
'''
tensor([[ 1.2358,  0.8365, -0.3136],
        [-1.7273,  1.6472,  0.0520],
        [-0.5576, -0.6262, -0.5728],
        [-0.2788, -0.0570, -0.0740],
        [-0.0728,  0.2494,  0.9421]])
'''
# 数据信息
x.size()
x.size(0)		# 行数
x.size(1)		# 列数
```

> 操作数据

```python
y.add_(x)
torch.add(x, y, out=result)

# 查看
y.view(-1,5)	# 规定形状查看，不限行数 每行5个元素
y[3,1].item()	# 取值

# 打乱保持索引
a = torch.rand(4,6)
b = torch.rand(4,4)
# 随机索引
idx = torch.randperm(4)
# 打乱
a[idx]
b[idx]

# 取值
a = torch.randn(4,3,28,28)
a[:,1,...].shape
torch.size([4,28,28])
# 取值列号，取值行号
a.index_select(0,torch.tensor([0,1])).shape
torch.where(cond>0.5,a,b)		# cond>0.5则取a

# 掩码取值
x = torch.randn(3,4)
mask = x.ge(0.5)
x.masked_select(mask)

# 维度操作
a.squeeze(1).shape		# 挤压维度
a.unsqueeze(1).shape	# 增加维度
a.expand([4,32,28,28])	# 扩展维度
a.expand([4,32,28,28])	# 重复扩展维度-次数
# 转至
a.t() # 维度调转2D
a.a.transpose(1,3)	# 1-3维度调转
a.permute(2,3,1,0)	# 维度转换

# 合并拆分
a = torch.rand(4,32,8)
b = torch.rand(4,32,8)
torch.cat([a,b],dim=0)		# torch.Size([8, 32, 8])
c = torch.stack([a,b],dim=1)	# torch.Size([4, 2, 32, 8])
aa,b = c.split(1,dim=1)		# [4, 1, 32, 8]

# 相等		大于
a.eq(a,b) gt(0)
```

### CUDA

```python
# True
torch.cuda.is_available()
# Use .to() move tensor to other device
device_obj = torch.device('cuda')
x = torch.rand(5,3)
x.to(device_obj)
'''
tensor([[0.4783, 0.3188, 0.4842],
        [0.2552, 0.4863, 0.7803],
        [0.1680, 0.7451, 0.6912],
        [0.9617, 0.3069, 0.7458],
        [0.7645, 0.9438, 0.0892]], device='cuda:0')
'''
x.to('cpu', dtype=torch.double)
'''
tensor([[0.4783, 0.3188, 0.4842],
        [0.2552, 0.4863, 0.7803],
        [0.1680, 0.7451, 0.6912],
        [0.9617, 0.3069, 0.7458],
        [0.7645, 0.9438, 0.0892]], dtype=torch.float64)
'''
```

## 数学计算

```python
# 相加
torch.add(x, y, out=result)
# 相乘相除
torch.mul(x, y, out=result)
torch.div(x, y, out=result)
# 矩阵相乘
torch.matmul(a,b)
torch.mm(a,b)			# 2维简写
a@b								# 简写

# 平方与平方根
a.pow(2)
a.sqrt()
a.rsqrt()		# 平方根倒数

# 对数 e^x
a = torch.exp(torch.ones(2,2))
a.log()		# 取对数

# 值
a = torch.tensor(3.14)
a.floor(),a.ceil(),a.trunc(),a.frac(),a.round()
# (tensor(3.), tensor(4.), tensor(3.), tensor(0.1400)), tensor(3.)
# 设置最大最小值
a.clamp(10)		# 最大值
a.clamp(1,10)	# 1-10之间
# 最小	最大	平均		累乘		求和
a.min() max() mean() prod()	sum()
a.argmax() argmin()		# 最大最小值的索引
# 取最大值及其对应的索引 取前三3个
grad.topk(3,dim=1)
grad.topk(3,dim=1,largest=False)	# 最小
gard.kthvalue(4)	# 第四大的值

# 求导
x = torch.tensor(2.)	# 定义求导
a = torch.tensor(1., requires_grad=True)
b = torch.tensor(2., requires_grad=True)
c = torch.tensor(5., requires_grad=True)
y = a**2*x + b*x + c
grads = torch.autograd.grad(y,[a,b,c])
grads[0],grads[1],gard[2]

# 范数
a.norm(1)
a.norm(2, dim=1)
```





