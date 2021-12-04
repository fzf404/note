<!--
title: 50-OpenCV
sort:
-->

# OpenCV

## 安装

`pip install opencv`

## 示例程序

### 调用摄像头

```python
import cv2

# 获取摄像头，传入0表示获取系统默认摄像头
cap = cv2.VideoCapture(0,cv2.CAP_DSHOW)
# 打开cap
cap.open(0)

while cap.isOpened():
    # 获取画面
    flag, frame= cap.read()
    cv2.imshow('my_window',frame)
    # 获取键盘上按下哪个键
    key_pressed=cv2.waitKey(60)
    print('键盘上被按下的键是：',key_pressed)
    # 如果按下esc键，就退出循环
    if key_pressed==27:
        break
# 关闭摄像头
cap.release()
# 关闭图像窗口
cv2.destroyAllWindows()
```

### 边缘检测

```python
# 调用摄像头，实时边缘检测
import cv2
import numpy as np

# 获取摄像头，传入0表示获取系统默认摄像头
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
# 打开cap
cap.open(0)

while cap.isOpened():
    # 获取画面
    flag, frame = cap.read()
    if not flag:
        break
    # 获取键盘上按下哪个键
    key_pressed = cv2.waitKey(60)
    print('键盘上被按下的键是：', key_pressed)
    # frame=cv2.resize(frame,(100,100))
    # 进行canny边缘检测
    frame = cv2.Canny(frame, 100, 200)
    # 将单通道图像复制三份，累成三通道图像
    frame = np.dstack((frame, frame, frame))
    # 展示处理后的三大通道图像
    cv2.imshow('my_window', frame)
    # 如果按下esc键，就退出循环
    if key_pressed == 27:
        break

# 关闭摄像头
cap.release()
# 关闭图像窗口
cv2.destroyAllWindows()
```

### 微笑识别

```python
import cv2

# 载入人脸检测器、眼睛检测器、微笑检测器
face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_frontalface_default.xml')

eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_eye.xml')

smile_cascade = cv2.CascadeClassifier(cv2.data.haarcascades+'haarcascade_smile.xml')

# 调用摄像头
cap = cv2.VideoCapture(0)

while(True):
    # 获取摄像头拍摄到的画面
    ret, frame = cap.read()
    faces = face_cascade.detectMultiScale(frame, 1.3, 2)
    img = frame
    for (x,y,w,h) in faces:
    	# 画出人脸框，蓝色，画笔宽度微
        img = cv2.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)
    	# 框选出人脸区域，在人脸区域而不是全图中进行人眼检测，节省计算资源
        face_area = img[y:y+h, x:x+w]

        ## 人眼检测
        # 用人眼级联分类器引擎在人脸区域进行人眼识别，返回的eyes为眼睛坐标列表
        eyes = eye_cascade.detectMultiScale(face_area,1.3,10)
        for (ex,ey,ew,eh) in eyes:
            #画出人眼框，绿色，画笔宽度为1
            cv2.rectangle(face_area,(ex,ey),(ex+ew,ey+eh),(0,255,0),1)

        ## 微笑检测
        # 用微笑级联分类器引擎在人脸区域进行人眼识别，返回的eyes为眼睛坐标列表
        smiles = smile_cascade.detectMultiScale(face_area,scaleFactor= 1.16,minNeighbors=65,minSize=(25, 25),flags=cv2.CASCADE_SCALE_IMAGE)
        for (ex,ey,ew,eh) in smiles:
            #画出微笑框，红色（BGR色彩体系），画笔宽度为1
            cv2.rectangle(face_area,(ex,ey),(ex+ew,ey+eh),(0,0,255),1)
            cv2.putText(img,'Smile',(x,y-7), 3, 1.2, (0, 0, 255), 2, cv2.LINE_AA)

	# 实时展示效果画面
    cv2.imshow('frame2',img)
    # 每5毫秒监听一次键盘动作
    if cv2.waitKey(5) & 0xFF == ord('q'):
        break

# 最后，关闭所有窗口
cap.release()
cv2.destroyAllWindows()
```
