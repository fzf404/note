<!-- 
title: 10-Vidom可视化
sort: 
--> 

## 入门

```python
!python3 -m visdom.server -port 8081
from visdom import Visdom

viz = Visdom()
x = torch.arange(-10,10,0.1)
y = torch.sin(x)
# 绘制正弦函数图像
viz.line(y, x, win='Sin(x)', opts=dict(title='Sin() Image'))
```

## 运行

```python
!npm install -g localtunnel
get_ipython().system_raw('python3 -m pip install visdom')
get_ipython().system_raw('python3 -m visdom.server -port 8097 >> visdomlog.txt 2>&1 &')   
get_ipython().system_raw('lt --port 8097 >> url.txt 2>&1 &')   
import time
time.sleep(5)
!cat url.txt
import visdom
time.sleep(5)
vis = visdom.Visdom(port='8097')  
print(vis)
time.sleep(3)
vis.text('Running')
!cat visdomlog.txt
```

## MINIST

```python
# 展示文本 字符串/窗口id/其他参数				
viz.text('Hello Visdom', win='text', opts=dict(title='Text'))

# loss可视化
viz.line([0.], [0.], win='train_loss', opts=dict(title='Train Loss'))
# 在batch中更新数据
viz.line([loss.item()], [global_step], win='train_loss', update='append')
global_step += 1

# 多数据可视化
viz.line([[0.0, 0.0]], [0.], win='test_info', opts=dict(title='test loss&acc.', 
                                                   legend=['Loss', 'Accu']))
# 每个epoch
viz.line([[test_loss, correct / len(test_loader.dataset)]],
             [global_step], win='test', update='append')
```

