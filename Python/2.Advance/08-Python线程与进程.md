<!--
title: 08-Python进程
sort:
-->

# Python 进程与线程

> 一个任务就是一个进程。
>
> 进程中的子进程称为线程。

## 多线程

```python
from threading import Thread
import requests

url = "http://39.106.186.128/api/register"

def xss(i):
    for i in range(i, i+10000):
      r = requests.post(url, data={'user_name': i, 'passwd': 'qwert12345'})
      print(str(i) + r.text)

t1 = Thread(target=xss, args=(10000,))
t2 = Thread(target=xss, args=(20000,))

t1.start()
t2.start()


t1.join()
t2.join()
```

> 设置守护进程，主进程结束后停止子进程
>
> `t.setDaemon(True)`
>
> 传入参数
>
> `(target = func, args=(i, ))`

### 自定义线程类

```python
class TestThr(threading.Thread):
    # 调用父类的init
    def __init__(self):
        super().__init__()
    def run(self):
        for i in range(5):
            print("正在执行子线程的run方法...", i)
            time.sleep(0.5)

# 创建实例对象
test = TestThr()
# 启用线程
test.start()
# 运行过程中不影响下面代码执行
print("I'm coming in.")
```

### LOCK

> 多进程变量互相独立，而多线程为共享。
>
> 任何一个变量都可以被修改。

#### 使用

```python
# 创建锁，全局变量
lock = threading.Lock()
# 上锁
lock.acquire()
# 执行操作
# 解锁
lock.release()
```

#### 例子

```python
import time
import threading

balance = 0


def change_b(n):
    global balance
    balance = balance + n
    balance = balance - n

def run_thread(n):
    for i in range(1000000):
        change_b(n)

t1 = threading.Thread(target=run_thread, args=(5,))
t2 = threading.Thread(target=run_thread, args=(8,))
t1.start()
t2.start()
t1.join()
t2.join()
print(balance)		# balance不等于0

# 将t1.join()放在t2.start()前面.即可先执行t1
```

- 使用锁

```python
lock = threading.Lock()
def run_thread(n):
    for i in range(10000000):
        lock.acquire()
        change_b(n) # 修改变量函数
        lock.release()
```

## ThreadLocal

用于进程间通信

```python
import threading


Local_name = threading.local()


def process_staff():
    name = Local_name.criminal
    print('I am process %sand I konw the criminal\'s name is %s.\n' %
          (threading.current_thread().name, name))


def process_thread(name):
    Local_name.criminal = name
    print('I am process %s. Do you konw the criminal\'s name?\n' %
          threading.current_thread().name)
    process_staff()

t1 = threading.Thread(target=process_thread,args=("fzf",),name="007-1")     # 这里的name是进程名
t2 = threading.Thread(target=process_thread,args=("nmdxf",),name="007-2")   # 这里的name是进程名
t1.start()
t2.start()
t1.join()
t2.join()
```

> 全局变量`local_school`就是一个`ThreadLocal`对象，你可以把`local_school`看成全局变量，每个属性如`local_school.student`都是线程的局部变量，`ThreadLocal`内部会处理锁的问题。

> 可以理解为全局变量`local_school`是一个`dict`，不但可以用`local_school.student`，还可以绑定其他变量，如`local_school.teacher`等等。

> `ThreadLocal`最常用的地方就是为每个线程绑定一个数据库连接，HTTP 请求，用户身份信息等，这样一个线程的所有调用到的处理函数都可以非常方便地访问这些资源。

## 进程与线程

- 进程稳定，线程快（a little)
- 计算密集型用 c，IO 密集型用 py。
- 使用异步 IO 单进程单线程执行多任务。

## 分布式进程

- Thread or Process 优先选择 Process，可分布至多计算机

```python
# master.py for windows

import time
import queue
from multiprocessing.managers import BaseManager
from multiprocessing import freeze_support

# 任务个数
task_number = 10

# 定义收发队列
task_queue = queue.Queue(task_number)
result_queue = queue.Queue(task_number)


def gettask():
    return task_queue


def getresult():
    return result_queue


def test():
    # windows下绑定调用接口不能使用lambda，所以只能先定义函数再绑定
    BaseManager.register('get_task', callable=gettask)
    BaseManager.register('get_result', callable=getresult)
    # 绑定端口并设置验证码，windows下需要填写ip地址，linux下不填默认为本地
    manager = BaseManager(address=('127.0.0.1', 5002), authkey=b'123')
    # 启动
    manager.start()
    try:
        # 通过网络获取任务队列和结果队列
        task = manager.get_task()
        result = manager.get_result()

        # 添加任务
        for i in range(task_number):
            print('Put task %d...' % i)
            task.put(i)

        # 每秒检测一次是否所有任务都被执行完
        while not result.full():
            time.sleep(1)

        for i in range(result.qsize()):
            ans = result.get()
            print('task %d is finish , runtime:%d s' % ans)

    except:
        print('Manager error')
    finally:
        # 一定要关闭，否则会爆管道未关闭的错误
        manager.shutdown()


if __name__ == '__main__':
    # windows下多进程可能会炸，添加这句可以缓解
    freeze_support()
    test()

```

```python
#!/usr/bin/env python3
# -*- coding : utf-8 -*-
# task.py for windows

import time
import sys
import queue
import random
from multiprocessing.managers import BaseManager

BaseManager.register('get_task')
BaseManager.register('get_result')

conn = BaseManager(address=('127.0.0.1', 5002), authkey=b'123')

try:
    conn.connect()
except:
    print('连接失败')
    sys.exit()

task = conn.get_task()
result = conn.get_result()

while not task.empty():
    n = task.get(timeout=1)
    print('run task %d' % n)
    sleeptime = random.randint(0, 3)
    time.sleep(sleeptime)
    rt = (n, sleeptime)
    result.put(rt)

if __name__ == '__main__':
    pass
```

## 多进程

- `fork()`

操作系统自动复制当前进程，子进程返回 0，父进程返回子进程的 ID。

```python
import os

print('Process (%s) start...', % os.getpid())
pid = os.fork()				# Only work on Linux
# 父子进程同时运行如下命令
if pid == 0:
    print('I am child process (%s) and my parent is %s.' % (os.getpid(), os.getppid()))
else:
    print('I (%s) just created a child process (%s).' % (os.getpid(), pid))
```

- multiprocessing（翻译：多种进程）

```python
from multiprocessing import Process	# windows使用多线程
import os

# 子进程要执行的代码
def run_proc(name):
    print('Run child process %s (%s)...' % (name, os.getpid())
    # os.getppid()	获取父进程id

if __name__=='__main__':
    print('Parent process %s.' % os.getpid())
    p = Process(target=run_proc, args=('test',))
    # targe 函数名
    # args 元组提供参数
    # kwargs 字典方式传参
    print('Child process will start.')
    p.daemon = True
    # 主进程结束子进程自动销毁
    p.start()
    p.join()
    # join()方法可以等待子进程结束后再继续往下运行，通常用于进程间的同步。
    # 等待进程执行完毕
    print('Child process end.')
'''
Parent process 10652.
Child process will start.
Run child process test (19276)...
Child process end.
'''
```

- Pool（进程池）

```python
from multiprocessing import Pool
import os, time, random

def long_time_task(name):
    print('Run task %s (%s)...' % (name, os.getpid()))
    start = time.time()
    time.sleep(random.random() * 3)
    end = time.time()
    print('Task %s runs %0.2f seconds.' % (name, (end - start)))

if __name__=='__main__':
    print('Parent process %s.' % os.getpid())
    p = Pool(4)		# 同时跑四个进程
    for i in range(5):
        p.apply_async(long_time_task, args=(i,))
    print('Waiting for all subprocesses done...')
    p.close()
    # 调用join()之前必须先调用close()，会等待所有子进程执行完毕。
    p.join()
    print('All subprocesses done.')
```

## 子进程

- 在 python 中运行命令

```python
import subprocess

print('$ nslookup www.python.org')
r = subprocess.call(['nslookup', 'www.python.org'])
print('Exit code:', r)
```

### 进程间通信

- 使用`Queues`来交换数据

```python
from multiprocessing import Process, Queue
import os
import time
import random


def make(q):
    print('My PID is %s and I am random a nember,Do you know it?' % os.getpid())
    q.put(random.randint(1, 100))
    time.sleep(3)


def guess(q):
    print('My PID is %s and get the nember is %s' % (os.getpid(), q.get()))


if __name__ == '__main__':
    q = Queue()
    pm = Process(target=make, args=(q,))
    pg = Process(target=guess, args=(q,))
    pm.start()
    pg.start()
    pm.join()
    pg.join()

```
