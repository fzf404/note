<!--
title: 06-TensorFlow
sort:
-->

# TensorFlow

> 机器学习框架

### 过程

1. 导入数据
2. 设置层数分布
3. 设置模型
4. 训练
5. 测试

```python
import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt

# 获得MNIST_Fashion数据集
fashion_mnist = keras.datasets.fashion_mnist
# 两个集合，每个集合中两个np数组
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()

# 标签名称
class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']

# 测试集的形状
train_images.shape
len(train_labels)

# 展示图片
plt.figure()
plt.imshow(train_images[5])
plt.colorbar()
plt.show()

# 数据预处理
train_images = train_images / 255.0
test_images = test_images / 255.0

# 展示图片及标签
plt.figure(figsize=(10,10))
for i in range(25):
  plt.subplot(5,5,i+1)
  # 隐藏坐标信息
  plt.xticks([])
  plt.yticks([])
  plt.imshow(train_images[i], cmap=plt.cm.binary)
  plt.xlabel(class_names[train_labels[i]])
plt.show()

# 设置层
model = keras.Sequential([
  # 声明图像格式为28*28，压平
  keras.layers.Flatten(input_shape=(28, 28)),
  # 第一Dense层，128个神经元
  keras.layers.Dense(128, activation='relu'),
  # 最终层
  keras.layers.Dense(10)
])

# 编译模型，优化器，损失函数，指标
model.compile(optimizer='adam',
              loss=tf.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

# 训练模型 10次
model.fit(train_images, train_labels, epochs=10)

# 评估准确率
test_loss, test_acc = model.evaluate(test_images, test_labels, verbose=2)

# 进行预测 增加softmax层
probability_model = keras.Sequential([model,keras.layers.Softmax()])
predictions = probability_model.predict(test_images)

np.argmax(predictions[0])
test_labels[0]

# 预测图表
def plot_image(i, predictions_array, true_label, img):
  predictions_array, true_label, img = predictions_array, true_label[i], img[i]
  plt.grid(False)
  plt.xticks([])
  plt.yticks([])

  plt.imshow(img, cmap=plt.cm.binary)

  predicted_label = np.argmax(predictions_array)
  if predicted_label == true_label:
    color = 'blue'
  else:
    color = 'red'

  plt.xlabel("{} {:2.0f}% ({})".format(class_names[predicted_label],
                                100*np.max(predictions_array),
                                class_names[true_label]),
                                color=color)
# 预测标签图表
def plot_value_array(i, predictions_array, true_label):
  predictions_array, true_label = predictions_array, true_label[i]
  plt.grid(False)
  plt.xticks(range(10))
  plt.yticks([])
  thisplot = plt.bar(range(10), predictions_array, color="#777777")
  plt.ylim([0, 1])
  predicted_label = np.argmax(predictions_array)

  thisplot[predicted_label].set_color('red')
  thisplot[true_label].set_color('blue')

# 单个预测
i = 12
plt.figure(figsize=(6,3))
plt.subplot(1,2,1)
plot_image(i, predictions[i], test_labels, test_images)
plt.subplot(1,2,2)
plot_value_array(i, predictions[i],  test_labels)
plt.show()

# 绘制预测表
num_rows = 5
num_cols = 3
num_images = num_rows*num_cols
plt.figure(figsize=(2*2*num_cols, 2*num_rows))
for i in range(num_images):
  plt.subplot(num_rows, 2*num_cols, 2*i+1)
  plot_image(i, predictions[i], test_labels, test_images)
  plt.subplot(num_rows, 2*num_cols, 2*i+2)
  plot_value_array(i, predictions[i], test_labels)
plt.tight_layout()
plt.show()

# 使用模型
img = test_images[1]
# 图片转为列表
img = (np.expand_dims(img,0))
# 预测
predictions_single = probability_model.predict(img)
# 绘制图表
plot_value_array(1, predictions_single[0], test_labels)
_ = plt.xticks(range(10), class_names, rotation=45)

# 预测值
np.argmax(predictions_single[0])
```
