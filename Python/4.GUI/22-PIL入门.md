<!--
title: 22-PIL入门
sort:
-->

# Pillow 入门

## 使用 Image

```python
>>> from PIL import Image

>>> im = Image.open("test.jpg")
>>> print(im.format, im.size, im.mode)
JPEG (505, 500) RGB
>>> im.show()
# 展示图片
```

### 读写图像

- 转换格式

  ```python
  import os, sys
  from PIL import Image

  for infile in sys.argv[1:]:
      f, e = os.path.splitext(infile)
      outfile = f + ".jpg"
      if infile != outfile:
          try:
              Image.open(infile).save(outfile)
          except IOError:
              print("cannot convert", infile)
  ```

### 剪切，粘贴，合并图像

- 矩形选区

  ```python
  >>> box = (50,50,100,100)
  >>> copy = im.crop(box)
  >>> copy.show()
  >>> im.paste(copy,(100,100,150,150))
  >>> im.show
  >>> im.save('test.png')
  ```

- 颜色通道

  ```python
  >>> r, g, b = im.split()		# 分离颜色通道
  >>> r.show()
  >>> im = Image.merge("RGB", (b, g, r))`		# 颜色反转
  ```

### 几何变换

```python
>>> im2 = im.resize(128,128)		# 缩小至128*128
>>> im2.rotate(45).show()
# 变换
out = im.transpose(Image.FLIP_LEFT_RIGHT)	# 左右颠倒
out = im.transpose(Image.FLIP_TOP_BOTTOM)	# 上下颠倒
out = im.transpose(Image.ROTATE_90)			# 旋转角度
out = im.transpose(Image.ROTATE_180)
out = im.transpose(Image.ROTATE_270)

>>> im.convert('L').show()			# 转换为灰度图
```

### 颜色增强
