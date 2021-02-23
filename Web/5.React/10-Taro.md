 <!-- 
title: 10-Taro
sort: 
--> 

> 使用React开发微信小程序

## 安装

```bash
npm i -g @tarojs/cli
# 创建新项目
taro init taroTest
# 建议使用TaroUI
```

## 使用

1. 建立Page

   ```jsx
   import React, { Component } from 'react'
   import { View } from '@tarojs/components'
   import Taro from '@tarojs/taro'
   
   export default class Msg extends Component {
     
   	// 设置state
     componentWillMount() {
       this.state = {
         msgs: []
       };
     }
     // 响应函数
     getMessages = () => {
       let that = this;
       Taro.request({
         url: 'https://www.baidu.com/release/chatRoom',
         success: (res) => {
           that.setState({ msgs: res.data.reverse() })
         }
       });
     }
     
     render() {
       const msgs = this.state.msgs
       const msgsItem = []
       msgs.map((item) => {
         let msg = <AtCard
           note={this.handleTime(item.time)}
           title={item.name}
           className='item'
         >{item.msg}
         </AtCard>
         msgsItem.push(msg)
       }
       return (
         <View className='index'>
           <AtButton openType='getUserInfo'>获取用户登录</AtButton>
           {msgsItem}
         </View>
       )
     }
   }
   
     
   ```
   
   