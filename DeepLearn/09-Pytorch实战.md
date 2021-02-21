<!-- 
title: 09-Pytorch实战
sort: 
--> 

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

```

```

