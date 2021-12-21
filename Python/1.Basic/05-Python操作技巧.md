<!--
title: 05-Python技巧
sort:
-->

## 优化循环

```python
from itertools import product


def find_twelve_v2(num_list1, num_list2, num_list3):
  # 麻烦的写法
  for num1 in num_list1:
    for num2 in num_list2:
      for num3 in num_list3:
        if num1 + num2 + num3 == 12:
          return num1, num2, num3
  # 高级的写法
  for num1, num2, num3 in product(num_list1, num_list2, num_list3):
    if num1 + num2 + num3 == 12:
      return num1, num2, num3
```

### 替代 break

```
from itertools import takewhile

# 当遇到 is_qualified s
for user in takewhile(is_qualified, users):
    pass
```

