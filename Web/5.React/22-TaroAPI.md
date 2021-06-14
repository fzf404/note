<!-- 
title: 21-Taro调用API
sort: 
--> 

## 基础

### 跳转

```react
// 直接跳转
Taro.redirectTo({
  url: '/pages/reserve/index'
})

// 当前界面跳转
Taro.navigateTo({
  url: '/pages/calendar/index'
})
// 向前一个页面写入数据
Taro.getCurrentPages()[0].setData({
  data: this.state.,
})
// 跳回前一个页面
Taro.navigateBack({
  delta: 1
})
```

### 存储

```react
// 存储
Taro.setStorage({
  key: "userInfo",
  data: res.userInfo
})
// 读取
Taro.getStorage({
  key: 'openId'
})
```



## 云开发

### 开发云函数

```js
const cloud = require('wx-server-sdk')
// 初始化
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {

  const { OPENID } = cloud.getWXContext()
  
  return {
    code: 200,
    msg: '获取成功',
    openId: OPENID,
  }

}
```

### 调用云函数

```react
Taro.cloud
  .callFunction({
    name: "login",
    data: {}
  })
  .then(res => {
    Taro.setStorage({
      key: "openId",
      data: res.result.openId
    }).then(() => {
      this.getDBUser(res.result.openId)
    })
  })
```

### 数据库

```react
// 小程序端调用数据库
const userDB = Taro.cloud.database().collection('user
await userDB.where({
  _openid: openId
}).get({
  success: (res) => {
    // 用户不存在则创建
    if (res.data.length == 0) {
      userDB.add({
        data: {
          point: 0,
          nickName: this.state.nickName,
        },
      })
      // 用户存在则获取积分
    } else {
      this.setState({ point: res.data[0].point })
    }
  },
})

// 服务端调用数据库
const cloud = require('wx-server-sdk')
// 初始化
cloud.init({
	env: cloud.DYNAMIC_CURRENT_ENV
})
const userDB = cloud.database().collection('users')
exports.main = async (event, context) => {
  const usersInfo =  await userDB.where({
    date: date,
  }).get()
}
```

