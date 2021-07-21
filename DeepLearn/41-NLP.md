<!-- 
title: 41-NLP自然语言处理
sort: 
-->

### python基础

```python
str.strip()		# 去除某个字符
str.replace		# 替换全部
str.find()		# 查找
str.isxx()		# 判断
str.splite()	# 分割为列表
list.join(cc)	# 列表合并为字符串

# 正则
pat = re.compile(r'')
re.findall(pat, str)	# 筛选出全部
# 替换与分割
re.sub(pat, '', str)	# 替换
re.subn(pat, '', str)	# 输出替换次数
re.splite(pat, str)		# 分割

# 查找与分组
re.search(pat, str)		# 查找
↑.group()		# 索引位置

# 使用(?P<name>[])方式创建别名
pat = re.compile(r'(?P<let>[a-z]+)(?P<num>[0-9]+)')
m = re.search(pat,str)	# 查找
m.group('let')					# 别名对应
m.groups()							# 全部组列表
```

### nltk

```python
import nltk
nltk.download('xx')		# 安装扩展包

# 单词分割
from nltk import word_tokenize

input_str = "I'm your father every day."
tokens = word_tokenize(input_str)

# 转化为Text对象
from nltk.text import Text

t = Text(tokens)
t.count('your')		# 单词个数
t.index('every')	# 单词位置
t.plot(8)					# 统计词频

# 停用词
from nltk.corpus import stopwords

stopwords.fileids()		# 支持的语言
# 求交集
set(tokens).intersection(set(stopwords.words('english')))
# 过滤停用词
[w for w in tokens if w not in stopwords.words('english')]

# 词性
from nltk import pos_tag

tags = pos_tag(tokens)

# 词性匹配
import svgling		# 绘图库
from nltk import RegexpParser

grammer = "DEMO: {<VB>?<VBP>*}"	# 正则
cp = RegexpParser(grammer)			# 分析器
result = cp.parse(tags)					# 解析

svgling.draw_tree(result)				# 树状图
```

### SpaCy

```python
import spacy
nlp = spacy.load('en')

doc=nlp(input_str)

[token for token in doc]			# 分词
[sent for sent in doc.sents]	# 分句
[(token,token.pos_) for token in doc]		# 词性
[(ent,ent.label_) for ent in doc.ents]	# 命名体

# 可视化展示
displacy.render(doc,style='ent',jupyter=True)

# 词频统计
from collections import Counter

c = Counter()
for ent in doc.ents:
  if ent.label_ == 'PERSON':
    c[ent.lemma_]+=1

c.most_common(20)
```

### Jieba

> [文档](https://github.com/fxsjy/jieba)

```python
str = "他来到了网易杭研大厦"
jieba.enable_paddle()		# 使用神经网络

# 分词
seg_list = jieba.cut(str, use_paddle=True)
[i for i in seg_list]

# 添加词典
jieba.load_userdict("userdict.txt")
jieba.add_word("")

# 分析词频
import jieba.analyse
tags = jieba.analyse.extract_tags(str,topK=5,withWeight=True)
```

### wordcloud

```python
# 词频统计
count = jieba.analyse.extract_tags(file_text,topK=200,withWeight=True)
# 遮罩
mask = np.array(Image.open('mask.png'))
# 绘图
my_wordcloud = WordCloud(
  background_color='white',						# 背景颜色
  max_words=100,											# 最多词数
  font_path='Source Han Serif.otf',		# 字体文件
  mask=mask,													# 遮罩
  width=1920,													# 长宽
  height=1080,
).generate_from_frequencies(dict(count))	# 词频字典
my_wordcloud.to_file('result.jpg')		# b
```

