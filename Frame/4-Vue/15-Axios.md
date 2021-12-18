<!--
title: 08-Axios
sort:
-->

## 使用

```
yarn add axios
```

### `request.js`

```js
import axios from 'axios'
import router from '@/router/router'

async function request(url, options) {
  // axios 实例
  const service = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL, // base url
    timeout: 12000, // 超时时间
  })
  // 请求拦截
  service.interceptors.request.use((config) => {
    // 设置请求头等信息
    if (options && options.body) {
      config.data = options.body
    }
    return config
  })
  // 返回拦截
  service.interceptors.response.use(
    (res) => {
      // 返回数据的处理
      return res.data
    },
    (err) => {
      // 失败的处理
      alert("网络请求失败")
    }
  )
  return service(url, options)
}

export default request
```

## 请求

```js
// Get
request('/exam-info/search', {
  params: { 'student_id': student_id.value },
}).then((data) => {
  console.log(data)
})

// Post
request('url', {
  method: 'post',
  data: info,
}).then((data) => {
  console.log(data)
})
```

