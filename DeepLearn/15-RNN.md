<!--
title: 15-RNN
sort:
-->

> 循环神经网络

- 数据处理方式

> 3 句话，每句 10 词，每词 100 维向量
>
> `seq_len=10 batch=3 feature_len=100`

- 隐藏记忆单元

> h 是可自定义的二维向量 `[batch,hidden_len]`
>
> 每个样本用 `hidden_len` 长度的向量记录

### 构造 RNN

```python
from torch import nn

# 表示feature_len=100, hidden_len=10(隐藏单元)
rnn = nn.RNN(100, 10)
# odict_keys(['weight_ih_l0', 'weight_hh_l0', 'bias_ih_l0', 'bias_hh_l0'])
# 源数据与隐藏数据的参数w，源数据与隐藏数据的偏执b
print(rnn._parameters.keys())
```

## 实战

```python
import numpy as np
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
from torch import optim

# 设置数据参数
num_time_steps = 50   # 输入数据长度
input_size = 1      # 大小
hidden_size = 16    # 隐藏数据大小
output_size = 1     # 输出大小
lr = 0.01
iterations = 6000    # 训练次数


class RnnNet(nn.Module):
  def __init__(self):
    super(RnnNet,self).__init__()
    self.rnn = nn.RNN(
      input_size = input_size,
      hidden_size = hidden_size,
      num_layers = 1,
      # batch放在最前面
      batch_first = True,
    )
    # 输入维度hidden_size*output_size,输出维度output_size的线性层
    self.linear = nn.Linear(hidden_size,output_size)

  def forward(self,x,hidden_prev):
    out,hidden_prev = self.rnn(x,hidden_prev)
    out = out.view(-1,hidden_size)
    out = self.linear(out)
    out = out.unsqueeze(dim = 0)
    return out,hidden_prev


device = torch.device('cuda:0')
model = RnnNet()      # 初始化模型
criterion = nn.MSELoss()  # 均方误差
# Adam优化算法
optimizer = optim.Adam(model.parameters(),lr = lr)
# 隐藏层
hidden_prev = torch.zeros(1,1,hidden_size)
# 训练
for iter in range(iterations):
    # 随机 0-2 的起始点
    start = np.random.randint(3,size = 1)[0]
    # 生成从start->start+10区间内共计num_time_steps个点
    time_steps = np.linspace(start,start + 10,num_time_steps)
    data = np.sin(time_steps)
    data = data.reshape(num_time_steps,1)
    x = torch.tensor(data[:-1]).float().view(1,num_time_steps - 1,1)
    y = torch.tensor(data[1:]).float().view(1,num_time_steps - 1,1)
    # 进行预测
    output,hidden_prev = model(x,hidden_prev)
    hidden_prev = hidden_prev.detach()
    # 计算损失值
    loss = criterion(output,y)
    model.zero_grad()
    loss.backward()

    optimizer.step()

    if iter % 1000 == 999:
        print(f"Iteration: {iter+1} loss: {loss.item()}")


predictions = []
# 取第一个预测值
input =  x[:,0,:]
for _ in range(x.shape[1]):
    input = input.view(1,1,1)
    # 预测下一位置
    (pred,hidden_prev) = model(input,hidden_prev)
    input = pred
    predictions.append(pred.detach().numpy().ravel()[0])

# 绘图
x = x.data.numpy().ravel()
y = y.data.numpy()
plt.scatter(time_steps[:-1], x.ravel(), s=90)
plt.plot(time_steps[:-1], x.ravel())

plt.scatter(time_steps[1:], predictions)
plt.show()
```
