<!-- 
title: 52-YOLOv5
sort: 
--> 
# YOLOv5

> [PyTorch](https://pytorch.org/)

## Run

```powershell
# 摄像头
python detect.py --source 0 --weights .\weights\yolov5s.pt

# 视频
python detect.py --source origin.mp4 --weights weights/yolov5x.pt --output.mp4
```

