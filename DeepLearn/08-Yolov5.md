<!-- 
title: 52-YOLOv5
sort: 
--> 

# YOLOv5

> [Github](https://github.com/ultralytics/yolov5)
>
> [模型](https://github.com/ultralytics/yolov5/releases)

## Run

```powershell
# clone代码
git clone https://github.com/ultralytics/yolov5.git

# 依赖问题
pip install pycocotools-Windows
# 安装cuda
conda install cudatoolkit=11.1 -c conda-forge

# 摄像头
python detect.py --source 0 --device 0 --weights <model>

# 视频
python detect.py --source origin.mp4 --weights weights/yolov5x.pt --output.mp4
```

## 训练自己的模型

> coco128数据集

```python
# 使用colib进行训练
import os
os.chdir('./yolov5')

!pip install -r requirements.txt

!python .\train.py
	--epochs 10
	--cfg ./models/yolov5s.yaml
	--weights ''
    
# 运行模型
python detect.py --source 0 --weights .\best.pt
```

