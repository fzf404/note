<!-- 
title: 15-LSTM
sort: 
--> 

> 学习长的依赖关系

```python
# 输入特征维度，隐藏特征维度，LSTM层数
rnn = nn.LSTM(100, 20, 2)
# 序列长度(单词数)，batch(句子数)，隐藏特征维度
input = torch.randn(10, 3, 20)
# 初始化隐藏元和记忆元
h0 = torch.randn(2, 3, 20)
c0 = torch.randn(2, 3, 20)
output, (hn, cn) = rnn(input, (h0, c0))
```

