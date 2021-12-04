<!--
title: debugfs
sort:
-->

> 恢复误删除文件

```bash
df ~		# 查看当前目录所属分区
debugfs
> open /dev/vda1
> ls -d /root/.ssh/
<134670> (3992) authorized_keys.bak
> logdump -i <134670>
Inode 134670 is at group 16, block 524432, offset 1664
Journal starts at block 16415, transaction 2235770
No magic number at block 17011: end of journal.
> q

dd if=/dev/vda1 of=/root/.ssh/authorized_keys.bak bs=1664 count=1 skip=524432
```
