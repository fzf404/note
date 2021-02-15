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



