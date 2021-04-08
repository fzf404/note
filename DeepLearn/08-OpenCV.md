!-- 
title: 08-OpenCV
sort: 
--> 

```python
# 加载图片
img = cv2.imread(path, flags)
# img = cv2.imread("pic.jpg", cv2.IMREAD_COLOR)
# img = cv2.imread("pic.jpg", cv2.IMREAD_GRAYSCALE)
# img = cv2.imread("pic.jpg", cv2.IMREAD_UNCHANGED)

# 保存
cv2.imwrite("pic.jpg", img)

# 展示
cv2.imshow(fid[index],img_clip)
cv2.waitKey(0)
```