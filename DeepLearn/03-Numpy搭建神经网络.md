<!--
title: 03-Numpy搭建神经网络
sort:
-->

### 详解

> [MNIST](http://yann.lecun.com/exdb/mnist/)
>
> 手写数字识别

1. 随机初始化参数，使用线性回归算法`y=wx+b`
2. 测试集中选图，对第一张进行第一轮运算，得出预测值
3. 梯度下降：预测值与实际值相减，进行矩阵运算，返回梯度下降后的 parameters
4. 100 个为一组，100 组 parameters 相加求平均数
5. 更新 parameters 进行下一组运算
6. 运算完全部测试集
7. 使用验证集测试训练结果，输出准确度
8. 使用测试集进行测试

## 代码

> 手写数字识别

```python
# -*- coding: utf-8 -*-

# 引入库
import numpy as np
import matplotlib.pyplot as plt
import math
import struct
import copy
from PIL import Image

# 神经网络规模
# 双层，784->10
dimensions = [28*28, 10]

# 参数分配
# 第一层x+b，第二层wx+b
distribution = [
    {'b': [0, 0]},
    {'b': [0, 0], 'w':[-math.sqrt(6/(dimensions[0]+dimensions[1])),
                       math.sqrt(6/(dimensions[0]+dimensions[1]))]}
]

# 正确值信息
# 10*10矩阵，每行相对应列数为1
onehot = np.identity(dimensions[-1])

# 初始化b参数
# 根据数据范围初始化随机数
def init_parameters_b(layer):
    dist = distribution[layer]['b']
    return np.random.rand(dimensions[layer])*(dist[1]-dist[0])+dist[0]

# 初始化w参数
def init_parameters_w(layer):
    dist = distribution[layer]['w']
    return np.random.rand(dimensions[layer-1], dimensions[layer])*(dist[1]-dist[0])+dist[0]

# 初始化全部
def init_parameters():
    # 结果列表
    parameter = []
    for i in range(len(distribution)):
        # 生成参数字典
        layer_parameter = {}
        for j in distribution[i].keys():
            if j == 'b':
                layer_parameter['b'] = init_parameters_b(i)
                continue
            if j == 'w':
                layer_parameter['w'] = init_parameters_w(i)
                continue
        parameter.append(layer_parameter)
    return parameter

# 数据信息
train_num = 50000
valid_num = 10000
test_num = 10000
ob_path = 'Material/MNIST/'

train_img_path = ob_path+'train-images-idx3-ubyte'
train_lab_path = ob_path+'train-labels-idx1-ubyte'
test_img_path = ob_path+'t10k-images-idx3-ubyte'
test_lab_path = ob_path+'t10k-labels-idx1-ubyte'

# 读入数据集
with open(train_img_path, 'rb') as f:
    # 读取头并抛掉
    struct.unpack('>4i', f.read(16))
    tmp_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)
    train_img = tmp_img[:train_num]
    valid_img = tmp_img[train_num:]

with open(test_img_path, 'rb') as f:
    struct.unpack('>4i', f.read(16))
    test_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)

with open(train_lab_path, 'rb') as f:
    struct.unpack('>2i', f.read(8))
    tmp_lab = np.fromfile(f, dtype=np.uint8)
    train_lab = tmp_lab[:train_num]
    valid_lab = tmp_lab[train_num:]

with open(test_lab_path, 'rb') as f:
    struct.unpack('>2i', f.read(8))
    test_lab = np.fromfile(f, dtype=np.uint8)

# 展示数据集
def show_train(index):
    plt.imshow(train_img[index].reshape(28, 28), cmap='gray')
    print('lable:{}'.format(train_lab[index]))

def valid_train(index):
    plt.imshow(valid_img[index].reshape(28, 28), cmap='gray')
    print('lable:{}'.format(valid_lab[index]))

def show_test(index):
    plt.imshow(test_img[index].reshape(28, 28), cmap='gray')
    Image.fromarray(test_img[index].reshape(28, 28)).show()
    print('lable:{}'.format(test_lab[index]))

# 激活函数
def tanh(x):
    return np.tanh(x)

def softmax(x):
    exp = np.exp(x-x.max())
    return exp/exp.sum()

# 激活函数求导
# 用于梯度下降
def d_softmax(data):
    sm = softmax(data)
    return np.diag(sm)-np.outer(sm, sm)

def d_tanh(data):
    return 1/(np.cosh(data))**2

# 函数表
activation = [tanh, softmax]
differential = {softmax: d_softmax, tanh: d_tanh}

# 损失函数
# 返回损失值-10位预测值的平方
def sqr_loss(img, lab, paramenters):
    # 算出预测值
    y_pred = predict(img, paramenters)
    y = onehot[lab]
    diff = y-y_pred
    # 返回10位预测值的平方
    return np.dot(diff, diff)

# 预测函数
# 返回10位列表->各个数字的概率
def predict(img, parameters):
    L0_in = img+parameters[0]['b']
    L0_out = activation[0](L0_in)
    L1_in = np.dot(L0_out, parameters[1]['w'])+parameters[1]['b']
    L1_out = activation[1](L1_in)
    return L1_out

# 梯度下降预测值
def grad_parameters(img, lab, parameters):
    # 先利用现有参数计算
    L0_in = img+parameters[0]['b']
    L0_out = activation[0](L0_in)
    L1_in = np.dot(L0_out, parameters[1]['w'])+parameters[1]['b']
    L1_out = activation[1](L1_in)
    # 与实际的差[10位列表]
    diff = onehot[lab]-L1_out

    act1 = np.dot(differential[activation[1]](L1_in), diff)
    act2 = differential[activation[0]](L0_in)
    # 将参数进行梯度下降
    grad_b1 = -2 * act1
    grad_w1 = -2 * np.outer(L0_out, act1)
    grad_b0 = -2 * act2 * np.dot(parameters[1]['w'], act1)
    return {'w1': grad_w1, 'b1': grad_b1, 'b0': grad_b0}

# 精确度判断
def valid_loss(parameters):
    loss_accu = 0
    for img_i in range(valid_num):
        loss_accu += sqr_loss(valid_img[img_i], valid_lab[img_i], parameters)
    return loss_accu
# 正确率计算
def valid_accuracy(parameters):
    correct = [predict(valid_img[img_i], parameters).argmax()
               == valid_lab[img_i] for img_i in range(valid_num)]
    print('validation accuracy : {}'.format(correct.count(True)/len(correct)))

# 训练函数
batch_size = 100
# 传入当前组索引，当前参数
def train_batch(current_batch, parameters):
    # 训练第一张图
    grad_accu = grad_parameters(
        train_img[current_batch*batch_size+0], train_lab[current_batch*batch_size+0], parameters)
    # 持续训练一个batch
    for img_i in range(1, batch_size):
        grad_tmp = grad_parameters(
            train_img[current_batch*batch_size+img_i], train_lab[current_batch*batch_size+img_i], parameters)
        # 累加进grad
        for key in grad_accu.keys():
            grad_accu[key] += grad_tmp[key]
    # 除以batch_size
    for key in grad_accu.keys():
        grad_accu[key] /= batch_size
    return grad_accu

# 更新参数
# 传入当前参数，梯度数据，学习速率，返回梯度值
def combine_parameters(parameters, grad, learn_rate):
    parameter_tmp = copy.deepcopy(parameters)
    parameter_tmp[0]['b'] -= learn_rate*grad['b0']
    parameter_tmp[1]['b'] -= learn_rate*grad['b1']
    parameter_tmp[1]['w'] -= learn_rate*grad['w1']
    return parameter_tmp


# 初始化参数
parameters = init_parameters()

learn_rate = 1
for i in range(train_num//batch_size):
    if i % 100 == 99:
        print('runing batch {}/{}'.format(i+1, train_num//batch_size))
    grad_tmp = train_batch(i, parameters)
    parameters = combine_parameters(parameters, grad_tmp, learn_rate)

# 模型准确度
valid_accuracy(parameters)

# 展示
r = np.random.randint(test_num)
pre = predict(test_img[r], parameters)
print('predict:{}'.format(pre.argmax()))
show_test(r)
```
