<!-- 
title: 14-RNN
sort: 
--> 

> 循环神经网络

- 数据处理方式

> 3句话，每句10词，每词100维向量
>
> `seq_len=10 batch=3 feature_len=100`

- 隐藏记忆单元

> h是可自定义的二维向量 `[batch,hidden_len]`
>
> 每个样本用 `hidden_len` 长度的向量记录

### 构造RNN

```python
from torch import nn

# 表示feature_len=100, hidden_len=10(隐藏单元)
rnn = nn.RNN(100, 10)
# odict_keys(['weight_ih_l0', 'weight_hh_l0', 'bias_ih_l0', 'bias_hh_l0'])
# 源数据与隐藏数据的参数w，源数据与隐藏数据的偏执b
print(rnn._parameters.keys())
```

