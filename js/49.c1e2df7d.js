(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{677:function(n,r){n.exports="\x3c!--\ntitle: 42-文本纠错\nsort:\n--\x3e\n\n```python\n'''\nAuthor: your name\nDate: 2021-02-22 20:49:19\nLastEditTime: 2021-07-26 13:27:03\nLastEditors: Please set LastEditors\nDescription: In User Settings Edit\nFilePath: \\WorkSpace\\Demo\\demo.py\n'''\nimport re\nimport collections\n\n# 单词分割\ndef words(text): return re.findall('[a-z]+', text.lower())\n\n# 训练\ndef train(features):\n    model = collections.defaultdict(lambda: 1)\n    for word in features:\n        model[word] += 1\n    return model\n\n\n# 全部单词列表\nNWORDS = train(words(open('threeBody.txt').read()))\nALPHABET = 'abcdefghijklmnopqresuvwxyz'\n\n# 组合所有可能的词\ndef make_words(word):\n    n = len(word)\n    all_words = set([word[0:i]+word[i+1:] for i in range(n)] +\n                    [word[0:i]+word[i+1:]+word[i]+word[i+2:] for i in range(n-1)] +\n                    [word[0:i]+c+word[i+1:] for i in range(n) for c in ALPHABET] +\n                    [word[0:i]+c+word[i:] for i in range(n+1) for c in ALPHABET])\n    # print(\"Easy Mode: \" , all_words)\n    return all_words\n\n# 组合更多可能的词\ndef effective_more_words(word):\n    full_words = set(e2 for e1 in make_words(word)\n                     for e2 in make_words(e1) if e2 in NWORDS)\n    # print(\"Hard Mode: \" , full_words)\n    return full_words\n\n# 判断是否在词汇表中\ndef known(words):\n    known_words = set(w for w in words if w in NWORDS)\n    # print(\"Known: \" , known_words)\n    return known_words\n\n# 寻找正确的词\ndef correct(sentence):\n    cut_words = words(sentence)\n    result = ''\n    for word in cut_words:\n        # 判断是否在词汇表、中\n        candidates = known([word]) or known(make_words(\n            word)) or effective_more_words(word) or [word]\n        print(\"All Words: \", candidates)\n        result += max(candidates, key=lambda w: NWORDS[w]) + ' '\n    return result\n\n print(correct('Do yout knoe thas sentenca'))\n```\n"}}]);