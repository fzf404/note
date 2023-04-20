(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{661:function(n,a){n.exports="\x3c!--\ntitle: 03-Numpy搭建神经网络\nsort:\n--\x3e\n\n### 详解\n\n> [MNIST](http://yann.lecun.com/exdb/mnist/)\n>\n> 手写数字识别\n\n1. 随机初始化参数，使用线性回归算法`y=wx+b`\n2. 测试集中选图，对第一张进行第一轮运算，得出预测值\n3. 梯度下降：预测值与实际值相减，进行矩阵运算，返回梯度下降后的 parameters\n4. 100 个为一组，100 组 parameters 相加求平均数\n5. 更新 parameters 进行下一组运算\n6. 运算完全部测试集\n7. 使用验证集测试训练结果，输出准确度\n8. 使用测试集进行测试\n\n## 代码\n\n> 手写数字识别\n\n```python\n# -*- coding: utf-8 -*-\n\n# 引入库\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport math\nimport struct\nimport copy\nfrom PIL import Image\n\n# 神经网络规模\n# 双层，784->10\ndimensions = [28*28, 10]\n\n# 参数分配\n# 第一层x+b，第二层wx+b\ndistribution = [\n    {'b': [0, 0]},\n    {'b': [0, 0], 'w':[-math.sqrt(6/(dimensions[0]+dimensions[1])),\n                       math.sqrt(6/(dimensions[0]+dimensions[1]))]}\n]\n\n# 正确值信息\n# 10*10矩阵，每行相对应列数为1\nonehot = np.identity(dimensions[-1])\n\n# 初始化b参数\n# 根据数据范围初始化随机数\ndef init_parameters_b(layer):\n    dist = distribution[layer]['b']\n    return np.random.rand(dimensions[layer])*(dist[1]-dist[0])+dist[0]\n\n# 初始化w参数\ndef init_parameters_w(layer):\n    dist = distribution[layer]['w']\n    return np.random.rand(dimensions[layer-1], dimensions[layer])*(dist[1]-dist[0])+dist[0]\n\n# 初始化全部\ndef init_parameters():\n    # 结果列表\n    parameter = []\n    for i in range(len(distribution)):\n        # 生成参数字典\n        layer_parameter = {}\n        for j in distribution[i].keys():\n            if j == 'b':\n                layer_parameter['b'] = init_parameters_b(i)\n                continue\n            if j == 'w':\n                layer_parameter['w'] = init_parameters_w(i)\n                continue\n        parameter.append(layer_parameter)\n    return parameter\n\n# 数据信息\ntrain_num = 50000\nvalid_num = 10000\ntest_num = 10000\nob_path = 'Material/MNIST/'\n\ntrain_img_path = ob_path+'train-images-idx3-ubyte'\ntrain_lab_path = ob_path+'train-labels-idx1-ubyte'\ntest_img_path = ob_path+'t10k-images-idx3-ubyte'\ntest_lab_path = ob_path+'t10k-labels-idx1-ubyte'\n\n# 读入数据集\nwith open(train_img_path, 'rb') as f:\n    # 读取头并抛掉\n    struct.unpack('>4i', f.read(16))\n    tmp_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)\n    train_img = tmp_img[:train_num]\n    valid_img = tmp_img[train_num:]\n\nwith open(test_img_path, 'rb') as f:\n    struct.unpack('>4i', f.read(16))\n    test_img = np.fromfile(f, dtype=np.uint8).reshape(-1, 28*28)\n\nwith open(train_lab_path, 'rb') as f:\n    struct.unpack('>2i', f.read(8))\n    tmp_lab = np.fromfile(f, dtype=np.uint8)\n    train_lab = tmp_lab[:train_num]\n    valid_lab = tmp_lab[train_num:]\n\nwith open(test_lab_path, 'rb') as f:\n    struct.unpack('>2i', f.read(8))\n    test_lab = np.fromfile(f, dtype=np.uint8)\n\n# 展示数据集\ndef show_train(index):\n    plt.imshow(train_img[index].reshape(28, 28), cmap='gray')\n    print('lable:{}'.format(train_lab[index]))\n\ndef valid_train(index):\n    plt.imshow(valid_img[index].reshape(28, 28), cmap='gray')\n    print('lable:{}'.format(valid_lab[index]))\n\ndef show_test(index):\n    plt.imshow(test_img[index].reshape(28, 28), cmap='gray')\n    Image.fromarray(test_img[index].reshape(28, 28)).show()\n    print('lable:{}'.format(test_lab[index]))\n\n# 激活函数\ndef tanh(x):\n    return np.tanh(x)\n\ndef softmax(x):\n    exp = np.exp(x-x.max())\n    return exp/exp.sum()\n\n# 激活函数求导\n# 用于梯度下降\ndef d_softmax(data):\n    sm = softmax(data)\n    return np.diag(sm)-np.outer(sm, sm)\n\ndef d_tanh(data):\n    return 1/(np.cosh(data))**2\n\n# 函数表\nactivation = [tanh, softmax]\ndifferential = {softmax: d_softmax, tanh: d_tanh}\n\n# 损失函数\n# 返回损失值-10位预测值的平方\ndef sqr_loss(img, lab, paramenters):\n    # 算出预测值\n    y_pred = predict(img, paramenters)\n    y = onehot[lab]\n    diff = y-y_pred\n    # 返回10位预测值的平方\n    return np.dot(diff, diff)\n\n# 预测函数\n# 返回10位列表->各个数字的概率\ndef predict(img, parameters):\n    L0_in = img+parameters[0]['b']\n    L0_out = activation[0](L0_in)\n    L1_in = np.dot(L0_out, parameters[1]['w'])+parameters[1]['b']\n    L1_out = activation[1](L1_in)\n    return L1_out\n\n# 梯度下降预测值\ndef grad_parameters(img, lab, parameters):\n    # 先利用现有参数计算\n    L0_in = img+parameters[0]['b']\n    L0_out = activation[0](L0_in)\n    L1_in = np.dot(L0_out, parameters[1]['w'])+parameters[1]['b']\n    L1_out = activation[1](L1_in)\n    # 与实际的差[10位列表]\n    diff = onehot[lab]-L1_out\n\n    act1 = np.dot(differential[activation[1]](L1_in), diff)\n    act2 = differential[activation[0]](L0_in)\n    # 将参数进行梯度下降\n    grad_b1 = -2 * act1\n    grad_w1 = -2 * np.outer(L0_out, act1)\n    grad_b0 = -2 * act2 * np.dot(parameters[1]['w'], act1)\n    return {'w1': grad_w1, 'b1': grad_b1, 'b0': grad_b0}\n\n# 精确度判断\ndef valid_loss(parameters):\n    loss_accu = 0\n    for img_i in range(valid_num):\n        loss_accu += sqr_loss(valid_img[img_i], valid_lab[img_i], parameters)\n    return loss_accu\n# 正确率计算\ndef valid_accuracy(parameters):\n    correct = [predict(valid_img[img_i], parameters).argmax()\n               == valid_lab[img_i] for img_i in range(valid_num)]\n    print('validation accuracy : {}'.format(correct.count(True)/len(correct)))\n\n# 训练函数\nbatch_size = 100\n# 传入当前组索引，当前参数\ndef train_batch(current_batch, parameters):\n    # 训练第一张图\n    grad_accu = grad_parameters(\n        train_img[current_batch*batch_size+0], train_lab[current_batch*batch_size+0], parameters)\n    # 持续训练一个batch\n    for img_i in range(1, batch_size):\n        grad_tmp = grad_parameters(\n            train_img[current_batch*batch_size+img_i], train_lab[current_batch*batch_size+img_i], parameters)\n        # 累加进grad\n        for key in grad_accu.keys():\n            grad_accu[key] += grad_tmp[key]\n    # 除以batch_size\n    for key in grad_accu.keys():\n        grad_accu[key] /= batch_size\n    return grad_accu\n\n# 更新参数\n# 传入当前参数，梯度数据，学习速率，返回梯度值\ndef combine_parameters(parameters, grad, learn_rate):\n    parameter_tmp = copy.deepcopy(parameters)\n    parameter_tmp[0]['b'] -= learn_rate*grad['b0']\n    parameter_tmp[1]['b'] -= learn_rate*grad['b1']\n    parameter_tmp[1]['w'] -= learn_rate*grad['w1']\n    return parameter_tmp\n\n\n# 初始化参数\nparameters = init_parameters()\n\nlearn_rate = 1\nfor i in range(train_num//batch_size):\n    if i % 100 == 99:\n        print('runing batch {}/{}'.format(i+1, train_num//batch_size))\n    grad_tmp = train_batch(i, parameters)\n    parameters = combine_parameters(parameters, grad_tmp, learn_rate)\n\n# 模型准确度\nvalid_accuracy(parameters)\n\n# 展示\nr = np.random.randint(test_num)\npre = predict(test_img[r], parameters)\nprint('predict:{}'.format(pre.argmax()))\nshow_test(r)\n```\n"}}]);