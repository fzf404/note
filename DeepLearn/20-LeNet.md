<!--
title: 20-LeNet网络
sort:
-->

## LeNet-5

> 典型的卷积神经网络的结构

![从零开始实现一个基于Pytorch的卷积神经网络](https://img-1257284600.cos.ap-beijing.myqcloud.com/2021/OYoihxStFCslGzw.jpg)

1. C1-卷积层：6 个 5\*5 的卷积核，产生 6 个大小为 28x28 的特征图
2. S2-池化层：2x2 最大池化进行下采样，产生 6 个大小为 14\*14 的滤波图
3. C3-卷积层：16 个 10\*10 的特征图
4. S4-池化层：16 个大小为 5\*5 的滤波图
5. C5-卷积层：卷积层，也可为全连接层，16\*5\*5=129
6. F6-全连接层：输入为 120 维向量，输出为 84 维向量
7. OUTPUT-输出层：输入为 84 维向量，输出为 10 维向量

```python
import torch
import torch.nn as nn

class LeNet(nn.Module):
  def __init__(self):
    # 初始化父类
    super(LeNet, self).__init__()
    # 定义模型中的每一层
    self.C1 = nn.Conv2d(in_channels=1, out_channels=6, kernel_size=5, stride=1, padding=2)
    self.R1 = nn.ReLU()
    self.S2 = nn.MaxPool2d(kernel_size=2)
    self.C3 = nn.Conv2d(6, 16, 5, 1, 0)
    self.R2 = nn.ReLU()
    self.S4 = nn.MaxPool2d(2)
    self.C5 = nn.Conv2d(16, 120, 5, 1, 0)
    self.R3 = nn.ReLU()
    self.F6 = nn.Linear(in_features=120, out_features=84)
    self.R4 = nn.ReLU()
    self.OUT = nn.Linear(84, 10)
  # 向前传播
  def forward(self, x):
    x = self.C1(x)
    x = self.R1(x)
    x = self.S2(x)
    x = self.C3(x)
    x = self.R2(x)
    x = self.S4(x)
    x = self.C5(x)
    x = self.R3(x)
    x = x.view(x.size(0), -1)
    x = self.F6(x)
    x = self.R4(x)
    x = self.OUT(x)
    return x

# 导入数据集
import torchvision
torchvision.datasets.MNIST('./data', download=True)

# 训练开始
import torchvision
import torch.utils.data as Data

model = LeNet()

Epoch = 5
batch_size = 64
lr = 0.001

train_data = torchvision.datasets.MNIST(root='./data/', train=True, transform=torchvision.transforms.ToTensor(), download=False)
# 损失函数和优化器
loss_function = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=lr)

train_loader = Data.DataLoader(train_data, batch_size=batch_size, shuffle=True, num_workers=0, drop_last=True)

# 启动梯度
torch.set_grad_enabled(True)
model.train()

# GPU加速
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
model.to(device)

for epoch in range(Epoch):
  # 损失值及准确率
  running_loss = 0.0
  acc = 0.0
  for step, data in enumerate(train_loader):
    x, y = data
    optimizer.zero_grad() # 梯度清零
    y_pred = model(x.to(device, torch.float)) # 预测值
    loss = loss_function(y_pred, y.to(device, torch.long))  # 损失值
    loss.backward() # 向后传播

    running_loss += float(loss.data.cpu())
    pred = y_pred.argmax(dim=1)
    acc += (pred.data.cpu() == y.data).sum()

    # 打印当前状态
    if step % 100 == 99:
      loss_avg = running_loss / (step + 1)
      acc_avg = float(acc / ((step + 1) * batch_size))
      print('Epoch', epoch + 1, ',step', step + 1, '| Loss_avg: %.4f' % loss_avg, '|Acc_avg:%.4f' % acc_avg)

    optimizer.step()  # 参数更新

# 保存模型
torch.save(model, './LeNet.pkl')

# 测试
test_data = torchvision.datasets.MNIST(root='./data/', train=False, transform=torchvision.transforms.ToTensor(), download=False)
test_loader = Data.DataLoader(test_data, batch_size=1, shuffle=False)

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

net = torch.load('./LeNet.pkl',map_location=torch.device(device))
net.to(device)

# 关闭梯度更新
torch.set_grad_enabled(False)
net.eval()

length = test_data.data.size(0)
acc = 0.0

for i, data in enumerate(test_loader):
  x, y = data
  y_pred = net(x.to(device, torch.float))
  pred = y_pred.argmax(dim=1)
  acc += (pred.data.cpu() == y.data).sum()
  # print('Predict:', int(pred.data.cpu()), '|Ground Truth:', int(y.data))

acc = (acc / length) * 100
print('Accuracy: %.2f' %acc, '%')
```
