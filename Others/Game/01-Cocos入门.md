<!--
title: 01-Cocos2D入门
sort:
-->

## 事件处理

### 点击事件

> [node.on](https://docs.cocos.com/creator/api/zh/classes/Node.html#on)
>
> `this.node.on(cc.Node.EventType.TOUCH_START, callback, this);`

### 键盘事件

> [systemEvent.on](https://docs.cocos.com/creator/api/zh/classes/SystemEvent.html?h=cc.systemevent.on)
>
> `cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, callback, this);`
>
> [按键枚举](https://docs.cocos.com/creator/api/zh/enums/macro.KEY.html)

```js
cc.systemEvent.on(
  cc.SystemEvent.EventType.KEY_DOWN,
  (event) => {
    cc.log(event.keyCode);
    switch (event.keyCode) {
      //
      case cc.macro.KEY.space: {
        cc.log("Enter Space");
      }
    }
  },
  this
);
```

### 自定义事件

- emit

```js
onLoad() {
    this.node.on('boom',(msg)=>{
        cc.log(msg,'炸了');
    },this)
},
start() {
    setInterval(()=>{
        this.node.emit('boom',"你妈");
    },2000)
},
```

- dispatchEvent

```js
onLoad() {
    this.node.on('boom', (msg) => {
        cc.log(msg.detail, '炸了');
    }, this)
},
start() {
    setInterval(() => {
        let msgForDispatchEvent = new cc.Event.EventCustom('boom', true);
        msgForDispatchEvent.detail = '你妈';
        this.node.dispatchEvent(msgForDispatchEvent);
    }, 2000)
},
```

## 图像

- plist
- 位图字体

## 软件

- [粒子特效](http://www.effecthub.com/particle2dx)
- Spine: 骨骼动画
- Tiled: RPG 地图编辑

## Class

```js
let obj = cc.Class({
  sayHi: () =>{
    cc.log("hi~");
  }
})

let obj2 = cc.Class({
	extends: onj
})

let demo = new obj2();
demo.sayHi();

// 添加参数
properties: {
    player: {
        default: null,
        type: cc.Node,
    }
}
// 获取绑定的节点
let player = this.player;
```
