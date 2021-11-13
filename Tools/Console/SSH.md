<!-- 
title: SSH
sort: 
--> 
# SSH入门

## 密钥验证

```bash
ssh-keygen		# 生成公钥私钥
cd .ssh/
# id_rsa 私钥	id_rsa.pub 公钥
# 复制给目标机
ssh-copy-id ip
# 接下来可以直接登录了
ssh 目标机ip
# 假如私钥改名，可手动指定
ssh -i ./newname root@ip
```

## 目标机

```bash
mkdir ~/.ssh/
echo 'id_rsa.pub' >> authorized_keys
# 写入文件
```

## sshd配置

`vim /etc/ssh/sshd_config`

```ini
# 允许root密码登录
PermitRootLogin yes
PasswordAuthentication yes

# 允许密钥登录
PermitRootLogin prohibit-password
PubkeyAuthentication yes
```

