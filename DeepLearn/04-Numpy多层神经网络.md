<!--
title: 04-Numpy多层神经网络
sort:
-->

```python
# -*- coding: utf-8 -*-
import numpy as np
import matplotlib.pyplot as plt
from tqdm import notebook
import math
import struct
import copy


def bypass(x):
    return x
# 激活函数


def tanh(x):
    return np.tanh(x)


def softmax(x):
    exp = np.exp(x-x.max())
    return exp/exp.sum()

# 激活函数求导


def d_softmax(data):
    sm = softmax(data)
    return np.diag(sm)-np.outer(sm, sm)


def d_tanh(data):
    return 1/(np.cosh(data))**2


def d_bypass(x):
    return 1


differential = {softmax: d_softmax, tanh: d_tanh, bypass: d_bypass}
d_type = {bypass: 'times', softmax: 'dot', tanh: 'times'}

# 神经网络信息
dimensions = [28*28, 100, 10]
activation = [bypass, tanh, softmax]
# 层数分布
distribution = [
    {},  # leave it empty!!
    {'b': [0, 0], 'w':[-math.sqrt(6/(dimensions[0]+dimensions[1])),
                       math.sqrt(6/(dimensions[0]+dimensions[1]))]},
    {'b': [0, 0], 'w':[-math.sqrt(6/(dimensions[1]+dimensions[2])),
                       math.sqrt(6/(dimensions[1]+dimensions[2]))]},
]

# 测试d_softmax
h = 0.0001
input_len = 4
func = softmax

# 遍历求每行导数
for i in range(input_len):
    # 函数求导
    test_input = np.random.rand(input_len)
    derivative = differential[func](test_input)
    # 手动求导
    value1 = func(test_input)
    test_input[i] += h
    value2 = func(test_input)
    # print((value2-value1)/h)
    # print(derivative[i])
    print(derivative[i]-((value2-value1)/h))
    print('over')

# 测试d_tanh

func = tanh

# 遍历求每行导数
for i in range(input_len):
    # 函数求导
    test_input = np.random.rand(input_len)
    derivative = differential[func](test_input)
    # 手动求导
    value1 = func(test_input)
    test_input[i] += h
    value2 = func(test_input)
    # print((value2-value1)/h)
    # print(derivative[i])
    print(derivative[i]-((value2-value1)/h))
    print('over')

# 初始化b参数


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


train_num = 50000
valid_num = 10000
test_num = 10000
train_img_path = '/content/drive/MyDrive/NN_Model/MNIST/train-images-idx3-ubyte'
train_lab_path = '/content/drive/MyDrive/NN_Model/MNIST/train-labels-idx1-ubyte'
test_img_path = '/content/drive/MyDrive/NN_Model/MNIST/t10k-images-idx3-ubyte'
test_lab_path = '/content/drive/MyDrive/NN_Model/MNIST/t10k-labels-idx1-ubyte'

# 读入数据集
with open(train_img_path, 'rb') as f:
    struct.unpack('>4i', f.read(16))
    tmp_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)/255
    train_img = tmp_img[:train_num]
    valid_img = tmp_img[train_num:]

with open(test_img_path, 'rb') as f:
    struct.unpack('>4i', f.read(16))
    test_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)/255

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
    print('lable:{}'.format(test_lab[index]))


onehot = np.identity(dimensions[-1])
# 损失函数
# 返回损失值


def sqr_loss(img, lab, paramenters):
    # 算出预测值
    y_pred = predict(img, paramenters)
    y = onehot[lab]
    diff = y-y_pred
    # 返回10位预测值的平方
    return np.dot(diff, diff)

# 预测函数
# 返回各个数字的概论


def predict(img, parameters):
    L_in = img
    L_out = activation[0](L_in)
    for layer in range(1, len(dimensions)):
        L_in = np.dot(L_out, parameters[layer]['w'])+parameters[layer]['b']
        L_out = activation[layer](L_in)
    return L_out

# 参数梯度


def grad_parameters(img, lab, parameters):
    L_in_list = [img]
    L_out_list = [activation[0](L_in_list[0])]
    for layer in range(1, len(dimensions)):
        L_in = np.dot(L_out_list[layer-1],
                      parameters[layer]['w'])+parameters[layer]['b']
        L_out = activation[layer](L_in)
        L_in_list.append(L_in)
        L_out_list.append(L_out)

    # 每项差[10位矩阵]
    d_layer = -2*(onehot[lab]-L_out_list[-1])

    grad_result = [None]*len(dimensions)
    for layer in range(len(dimensions)-1, 0, -1):
        if d_type[activation[layer]] == 'times':
            d_layer = differential[activation[layer]](L_in_list[layer])*d_layer
        if d_type[activation[layer]] == 'dot':
            d_layer = np.dot(differential[activation[layer]](
                L_in_list[layer]), d_layer)
        # 算偏微分导数
        grad_result[layer] = {}
        grad_result[layer]['b'] = d_layer
        grad_result[layer]['w'] = np.outer(L_out_list[layer-1], d_layer)
        d_layer = np.dot(parameters[layer]['w'], d_layer)

    return grad_result

# predict(train_img[1],init_parameters())
# grad_parameters(train_img[0],train_lab[0],init_parameters())
# parameters = init_parameters()


# 梯度偏导数测试->b
h = 0.001
layer = 1
pname = 'b'
grad_list = []
for i in range(len(parameters[layer][pname])):
    img_i = np.random.randint(train_num)
    test_parameters = init_parameters()
    derivative = grad_parameters(
        train_img[img_i], train_lab[img_i], test_parameters)[layer][pname]
    value1 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)
    test_parameters[layer][pname][i] += h
    value2 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)
    grad_list.append(derivative[i]-(value2-value1)/h)
np.abs(grad_list).max()

# 梯度偏导数测试->w
h = 0.001
layer = 2
pname = 'w'
grad_list = []
for i in notebook.tqdm(range(len(parameters[layer][pname]))):
    for j in range(len(parameters[layer][pname][0])):
        img_i = np.random.randint(train_num)
        test_parameters = init_parameters()
        derivative = grad_parameters(
            train_img[img_i], train_lab[img_i], test_parameters)[layer][pname]
        value1 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)
        test_parameters[layer][pname][i][j] += h
        value2 = sqr_loss(train_img[img_i], train_lab[img_i], test_parameters)
        grad_list.append(derivative[i][j]-(value2-value1)/h)
np.abs(grad_list).max()

# 精确度判断


def valid_loss(parameters):
    loss_accu = 0
    for img_i in range(valid_num):
        loss_accu += sqr_loss(valid_img[img_i], valid_lab[img_i], parameters)
    return loss_accu/(valid_num/10000)


def valid_accuracy(parameters):
    correct = [predict(valid_img[img_i], parameters).argmax()
               == valid_lab[img_i] for img_i in range(valid_num)]
    return correct.count(True)/len(correct)
# 精确度判断


def train_loss(parameters):
    loss_accu = 0
    for img_i in range(train_num):
        loss_accu += sqr_loss(train_img[img_i], train_lab[img_i], parameters)
    return loss_accu/(train_num/10000)


def train_accuracy(parameters):
    correct = [predict(train_img[img_i], parameters).argmax()
               == train_lab[img_i] for img_i in range(train_num)]
    return correct.count(True)/len(correct)


def test_accuracy(parameters):
    correct = [predict(test_img[img_i], parameters).argmax()
               == test_lab[img_i] for img_i in range(test_num)]
    return correct.count(True)/len(correct)


def grad_add(grad1, grad2):
    for layer in range(1, len(grad1)):
        for pname in grad1[layer].keys():
            grad1[layer][pname] += grad2[layer][pname]
    return grad1


def grad_divide(grad, denominator):
    for layer in range(1, len(grad)):
        for pname in grad[layer].keys():
            grad[layer][pname] /= denominator
    return grad
# 更新参数
# 传入当前参数，梯度数据，学习速率
# 返回梯度值


def combine_parameters(parameters, grad, learn_rate):
    parameters_tmp = copy.deepcopy(parameters)
    for layer in range(len(parameters_tmp)):
        for pname in parameters_tmp[layer].keys():
            parameters_tmp[layer][pname] -= learn_rate*grad[layer][pname]
    return parameters_tmp


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
        grad_add(grad_accu, grad_tmp)
    # 除以batch_size
    grad_divide(grad_accu, batch_size)
    return grad_accu


# 初始化参数
parameters = init_parameters()

train_loss_list = []
valid_loss_list = []
train_accu_list = []
valid_accu_list = []

# 模型准确度
valid_accuracy(parameters)

learn_rate = 10**-9.5
epoch_num = 10
current_epoch = 0
for epoch in notebook.tqdm(range(epoch_num)):
    for i in notebook.tqdm(range(train_num//batch_size)):
        grad_tmp = train_batch(i, parameters)
        parameters = combine_parameters(parameters, grad_tmp, learn_rate)
    current_epoch += 1
    train_loss_list.append(train_loss(parameters))
    train_accu_list.append(train_accuracy(parameters))
    valid_loss_list.append(valid_loss(parameters))
    valid_accu_list.append(valid_accuracy(parameters))

train_accuracy(parameters)

# 模型准确度
valid_accuracy(parameters)

test_accuracy(parameters)

lower = 0
plt.plot(valid_loss_list[lower:], color='red', label='validation loss')
plt.plot(train_loss_list[lower:], color='black', label='train loss')
plt.show()

lower = 0
plt.plot(valid_accu_list[lower:], color='red', label='validation accu')
plt.plot(train_accu_list[lower:], color='black', label='train accu')
plt.show()

rand_batch = np.random.randint(train_num//batch_size)
grad_lr = train_batch(rand_batch, parameters)

lr_list = []
lower = -20
upper = -5
step = 2
# 学习速率测试
for lr_pow in notebook.tqdm(np.linspace(lower, upper, int((upper-lower)//step+1))):
    learn_rate = 10**lr_pow
    parameters_tmp = combine_parameters(parameters, grad_lr, learn_rate)
    train_loss_tmp = train_loss(parameters_tmp)
    lr_list.append([lr_pow, train_loss_tmp])

start = 0
stop = -1
plt.plot(np.array(lr_list)[start:stop, 0], np.array(
    lr_list)[start:stop, 1], color='red')
plt.show()

r = np.random.randint(test_num)
pre = predict(test_img[r], parameters)
while pre.argmax() == test_lab[r]:
    r = np.random.randint(test_num)
    pre = predict(test_img[r], parameters)
print('predict:{}'.format(pre.argmax()))
show_test(r)

np.save('parameters.npy', parameters)
# parameters = np.load('complete_train.npy').item()

```
