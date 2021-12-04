<!--
title: A1-YOLOv5
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

> coco128 数据集

```python
# 使用colib进行训练
import os
os.chdir('./yolov5')

!pip install -r requirements.txt

!python train.py \
  --img 320 \			# 图像大小
  --batch 16 \		# 组大小
  --epochs 100 \	# 次数
  --data /content/DataSet/fire/data.yaml \	# 训练数据
  --cfg models/yolov5s.yaml		# 预训练模型

# 运行模型
python detect.py --weights .\best.pt --source <img/video/camera>
```

### 参数详解

- ##### Precision & Recall

  > 准确率与召回率

- ###### mAP

  > 平均精准度
