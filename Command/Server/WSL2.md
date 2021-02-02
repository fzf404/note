<!-- 
title: WSL2
sort: 
--> 
# WSL2

### 开启WSL2

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
wsl --set-default-version 2
wsl --list --verbose
```

> 进入应用商店安装想要的发行版即可
>
> 彩蛋：`wslfetch`

## SSH

```bash
sudo vi /etc/ssh/sshd_config\

Port = 22 # 去掉前面的#号
ListenAddress 0.0.0.0		#去掉前面的#号
PasswordAuthentication yes # 将 no 改为 yes 表示使用帐号密码方式登录

dpkg-reconfigure openssh-server		#用于安装RSA_KEY
sudo service ssh restart 		#重启SSH服务
```

## WSL

> docker与vm冲突
>
> 所以只好在WSL的ubuntu下安装了

### Docker安装

- 更新系统源

  ```bash
  sudo vi /etc/apt/sources.list
  
  deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
  deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
  deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
  deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
  deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
  deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
  
  sudo apt-get update
  sudo apt-get upgrade -y
  ```

- 安装Docker

  ```bash
  sudo apt-get remove -y docker docker-engine docker.io containerd runc
  sudo apt-get update
  # sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common && \
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
  
  sudo add-apt-repository \
     "deb [arch=amd64] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu \
     $(lsb_release -cs) \
     stable"
  
  sudo apt-get update && \
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io
  ```

- 启动docker

  ```bash
  sudo service docker start
  sudo systemctl enable docker	# 开机自启
  sudo docker version		# docker版本
  sudo docker run hello-world		# 运行hello-world
  ```

- 切换国内源

  ```bash
  sudo nano /etc/docker/daemon.json
  {
    "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"]
  }
  
  # sudo mkdir -p /etc/docker
  # sudo tee /etc/docker/daemon.json <<-'EOF'
  # {
  #   "registry-mirrors": ["https://zedcut9y.mirror.aliyuncs.com"]
  # }
  # EOF
  # sudo systemctl daemon-reload
  # sudo systemctl restart docker
  
  sudo service docker restart
  sudo docker info|grep Mirrors -A 1	# 查看是否修改成功
  ```

## mysql

### 问题

- 2013 - Lost connection to MySQL server

  > `cd /etc/mysql/mysql.conf.d`
  >
  > `sudo vi mysqld.cnf`
  >
  > 找到【mysqld】模块
  >
  > 增加一行：`skip-name-resolve` 
  >
  > 并重启mysql服务：`service mysql restart `

- 1130 - Host 127.0.0.1 is not allowed to connect to this MySQL server

  > ```bash
  > mysql -u root -p
  > 
  > use mysql;
  > select host from user where user='root';# 配置信息
  > update user set host = '%' where user ='root';	# 设置允许登录的IP
  > flush privileges;	# 立即生效
  > ```
  >