<!--
title: 21-ResNet网络
sort:
-->

> 其内部的残差块使用了跳跃连接，缓解了在深度神经网络中增加深度带来的梯度消失问题。

![image-20210518220802949](https://gitee.com/nmdfzf404/Image-hosting/raw/master/2021/image-20210518220802949.png)

## 模型类

```python
import torch
import torch.nn as nn

# 残差模块
class ResBlock(nn.Module):
  def __init__(self, in_channel, out_channel):
    super(ResBlock, self).__init__()
    self.conv1 = nn.Conv2d(in_channel, out_channel, 3, 1, 1, bias=False)
    self.bn1 = nn.BatchNorm2d(out_channel)
    self.relu1 = nn.ReLU()
    self.conv2 = nn.Conv2d(out_channel, out_channel, 3, 1, 1, bias=False)
    self.bn2 = nn.BatchNorm2d(out_channel)
    self.relu2 = nn.ReLU()

  def forward(self, x):
    res = x
    x = self.conv1(x)
    x = self.bn1(x)
    x = self.relu1(x)
    x = self.conv2(x)
    x = self.bn2(x)
    x = x + res     # 残差连接
    x = self.relu2(x)
    return x

class ResBlockDown(nn.Module):
  def __init__(self, in_channel, out_channel):
    super(ResBlockDown, self).__init__()
    self.conv1 = nn.Conv2d(in_channel, out_channel, 3, 2, 1, bias=False)    # 步长为2
    self.bn1 = nn.BatchNorm2d(out_channel)
    self.relu1 = nn.ReLU()
    self.conv2 = nn.Conv2d(out_channel, out_channel, 3, 1, 1, bias=False)
    self.bn2 = nn.BatchNorm2d(out_channel)
    self.relu2 = nn.ReLU()
    self.pool = nn.Conv2d(in_channel, out_channel, 1, 2, 0, bias=False)
  def forward(self, x):
    res = x
    res = self.pool(res)    # 对输入进行下采样
    x = self.conv1(x)
    x = self.bn1(x)
    x = self.relu1(x)
    x = self.conv2(x)
    x = self.bn2(x)
    x = x + res
    x = self.relu2(x)
    return x

class ResNet34(nn.Module):
  def __init__(self):
    super(ResNet34, self).__init__()
    self.conv1 = nn.Conv2d(3, 64, 7, 2, 3, bias=False)
    self.bn1 = nn.BatchNorm2d(64)
    self.relu1 = nn.ReLU()
    self.pool1 = nn.MaxPool2d(3, 2, 1)
    self.conv2 = nn.Sequential(
      ResBlockDown(64, 64),
      ResBlock(64, 64),
      ResBlock(64, 64),
    )
    self.conv3 = nn.Sequential(
      ResBlockDown(64, 128),
      ResBlock(128, 128),
      ResBlock(128, 128),
      ResBlock(128, 128),
    )
    self.conv4 = nn.Sequential(
      ResBlockDown(128, 256),
      ResBlock(256, 256),
      ResBlock(256, 256),
      ResBlock(256, 256),
      ResBlock(256, 256),
      ResBlock(256, 256),
    )
    self.conv5 = nn.Sequential(
      ResBlockDown(256, 512),
      ResBlock(512, 512),
      ResBlock(512, 512),
    )
    self.gap = nn.AdaptiveAvgPool2d(1)
    self.fc = nn.Linear(512, 2)
  def forward(self, x):
    x = self.conv1(x)
    x = self.bn1(x)
    x = self.relu1(x)
    x = self.pool1(x)
    x = self.conv2(x)
    x = self.conv3(x)
    x = self.conv4(x)
    x = self.conv5(x)
    x = self.gap(x)
    x = x.view(x.size(0), -1)
    x = self.fc(x)
    return x
  def weight_init(self):
    for m in self.modules():
      if isinstance(m, nn.Conv2d):
        nn.init.xavier_normal_(m.weight)
      elif isinstance(m, nn.BatchNorm2d):
        nn.init.constant_(m.weight, 1)
        nn.init.constant_(m.bias, 0)

# 训练
# 训练
import torch
import torch.nn as nn
import torch.optim as optim
import matplotlib.pyplot as plt
from torchvision import transforms
from torch.utils.data import DataLoader
from tqdm import tqdm

model = ResNet34()
model.weight_init()
data_transform = transforms.Compose([
  transforms.Resize([224, 224]),
  transforms.ToTensor(),
])

Epoch = 10
batch_size = 32
lr = 0.001
loss_func = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=lr)
scheduler = optim.lr_scheduler.StepLR(optimizer, 2, 0.5)
train_data = data_set("./train", data_transform, train=True)
train_loader = DataLoader(train_data, batch_size=batch_size, shuffle=True, num_workers=2, drop_last=True)
val_data = data_set("./val", data_transform, train=True)
val_loader = DataLoader(val_data, batch_size=batch_size, shuffle=True, num_workers=2, drop_last=True)
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
model.to(device)

def fit(model, loader, train=True):
  if train:
    torch.set_grad_enabled(True)
    model.train()
  else:
    torch.set_grad_enabled(False)
    model.eval()
  running_loss = 0.0
  acc = 0.0
  max_step = 0
  for img, label in tqdm(loader, leave=False):
    max_step += 1
    if train:
      optimizer.zero_grad()
    label_pred = model(img.to(device, torch.float))
    pred = label_pred.argmax(dim=1)
    acc += (pred.data.cpu() == label.data).sum()
    loss = loss_func(label_pred, label.to(device, torch.long))
    running_loss += loss
    if train:
      loss.backward()
      optimizer.step()
  running_loss = running_loss / (max_step)
  avg_acc = acc / ((max_step) * batch_size)
  if train:
    scheduler.step()
  return running_loss, avg_acc
```
