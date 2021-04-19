<!-- 
title: A2-FairMOT
sort: 
--> 

> [Github地址](https://github.com/ifzhang/FairMOT)

## 环境

### colab
```python
!git clone https://github.com/ifzhang/FairMOT.git
!cd FairMOT
!pip install -U torch==1.4 torchvision==0.5 -f https://download.pytorch.org/whl/cu101/torch_stable.html
!pip install -r requirements.txt

!git clone https://github.com/CharlesShang/DCNv2
!cd DCNv2 
!./make.sh
```

### ubuntu

```python
conda create -n fairmot python=3.6
conda activate fairmot
conda install pytorch==1.4.0 torchvision==0.4.0 cudatoolkit=10.0
pip install cython
pip install -r requirements.txt

# 安装 DCNv2
git clone https://github.com/CharlesShang/DCNv2
cd DCNv2
./make.sh
```

## 预训练模型

```python
cd src

# GPU
python demo.py mot --load_model ../models/fairmot_dla34.pth --conf_thres 0.4

# CPU
python demo.py mot --load_model ../models/fairmot_dla34.pth --conf_thres 0.4 --gpus -1

```

## CV

```python

```