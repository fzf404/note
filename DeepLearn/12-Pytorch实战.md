<!-- 
title: 12-Pytorch实战
sort: 
--> 

## MNIST

```python
import torch
import numpy as np
import torch.optim as optim
import matplotlib.pyplot as plt
import torch.nn.functional as F
import torchvision

w1, b1 = torch.randn(200, 784, requires_grad=True),\
    torch.zeros(200, requires_grad=True)
w2, b2 = torch.randn(200, 200, requires_grad=True),\
    torch.zeros(200, requires_grad=True)
w3, b3 = torch.randn(10, 200, requires_grad=True),\
    torch.zeros(10, requires_grad=True)

# 数据初始化 kaiming-对于relu友好
torch.nn.init.kaiming_normal_(w1)
torch.nn.init.kaiming_normal_(w2)
torch.nn.init.kaiming_normal_(w3)

# 向前传播
def forward(x):
    x = x@w1.t()+b1
    x = F.relu(x)
    x = x@w2.t()+b2
    x = F.relu(x)
    x = x@w3.t()+b3
    x = F.relu(x)
    return x

learning_rate = 0.01
epochs = 10
batch_size = 64

# 数据初始化
train_loader = torch.utils.data.DataLoader(torchvision.datasets.MNIST('datasets/mnist_data',
                train=True,
                download=True,
                transform=torchvision.transforms.Compose([
                torchvision.transforms.ToTensor(),                
                torchvision.transforms.Normalize((0.1307, ), (0.3081, )) 
    ])), batch_size=batch_size,shuffle=True)

test_loader = torch.utils.data.DataLoader(torchvision.datasets.MNIST('datasets/mnist_data/',
                train=False,
                download=True,
                transform=torchvision.transforms.Compose([
                torchvision.transforms.ToTensor(),
                torchvision.transforms.Normalize((0.1307, ), (0.3081, ))
    ])),batch_size=batch_size,shuffle=False)

# 优化器
# 实现随机梯度下降算法
optimizer = optim.SGD([w1, b1, w2, b2, w3, b3], lr=learning_rate)
# 交叉熵-损失函数
criteon = nn.CrossEntropyLoss()
# 开始训练
for epoch in range(epochs):
  # batch的索引, 图像数据， 标签
  for batch_idx, (data, target) in enumerate(train_loader):
      # 变换形状
      data = data.view(-1, 28*28)
      # 向前传播
      logits = forward(data)
      # 计算梯度
      loss = criteon(logits, target)
      # 清空梯度
      optimizer.zero_grad()
      # 先后传播
      loss.backward()
      optimizer.step()

      if batch_idx % 100 == 0:
        print('Train Epoch: {} [{}/{} ({:.0f}%)]\tLoss: {:.6f}'.format(
            epoch, batch_idx * len(data), len(train_loader.dataset),
              100. * batch_idx / len(train_loader), loss.item()))

  test_loss = 0
  correct = 0
  for data, target in test_loader:
    data = data.view(-1, 28 * 28)
    logits = forward(data)
    test_loss += criteon(logits, target).item()

    pred = logits.data.max(1)[1]
    correct += pred.eq(target.data).sum()

  test_loss /= len(test_loader.dataset)
  print('\nTest set: Average loss: {:.4f}, Accuracy: {}/{} ({:.0f}%)\n'.format(
      test_loss, correct, len(test_loader.dataset),
      100. * correct / len(test_loader.dataset)))

# fzf奇怪の验证代码
for data, target in test_loader:
  data = data.view(-1, 28 * 28)[1]
  pred = forward(data).argmax()
  print(pred)
  plt.imshow(data.view(28,28))
  break
```

## 高级API

```python
class MLP(nn.Module):

    def __init__(self):
        super(MLP, self).__init__()
				# 定义连接层
        self.model = nn.Sequential(
            nn.Linear(784, 200),
            nn.LeakyReLU(inplace=True),
            nn.Linear(200, 200),
            nn.LeakyReLU(inplace=True),
            nn.Linear(200, 10),
            nn.LeakyReLU(inplace=True),
        )

    def forward(self, x):
        x = self.model(x)
        return x
      
# GPU加速
device = torch.device('cuda:0')
net = MLP().to(device)
# 重新定义优化器      
optimizer = optim.SGD(net.parameters(), lr=learning_rate)   

+ data, target = data.to(device), target.to(device)
- logits = forward(data)
+ logits = net(data)
```

## 调整

```python
# 正则化
optimizer = optim.SGD(net.parameters(), lr=learning_rate, weight_decay = 0.01)

# 动量
# 连续200次loss没有减少，就将学习率×70%
from torch.optim.lr_scheduler import ReduceLROnPlateau
scheduler = ReduceLROnPlateau(optimizer, mode="min", patience=200, factor=0.7)
	scheduler.step(loss)
# 每执行800次，就将学习率×90%
scheduler = StepLR(optimizer, step_size=800, gamma=0.9)
	scheduler.step()
  
# DropOut
self.model = nn.Sequential(
  nn.Linear(784, 200),
  nn.Dropout(0.5),  # 以0.5的概率断开
  nn.LeakyReLU(inplace=True),
  nn.Linear(200, 200),
  nn.Dropout(0.5),  # 以0.5的概率断开
  nn.LeakyReLU(inplace=True),
  nn.Linear(200, 10),
  nn.LeakyReLU(inplace=True),
)
# 测试集取消DropOut
	net.eval()
```

