<!--
title: 30-Next.js
sort:
-->

### 安装

```bash
yarn create next-app

```

## 使用

1. 在`pages`中新建`.js`文件，无需配置路由即可访问

2. 使用`Link`创建链接

    ```jsx
    import Link from 'next/link'
    
    export default function FirstPost() {
      return (
        <Link href="/">
          <a>Back</a>
        </Link>
    }
    ```

3. 使用`Head`修改头

    ```jsx
    import Head from 'next/head'
    
    export default function FirstPost() {
      return (
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )
    ```
    
4. 引入css模块`*.module.css`

    ```jsx
    // css
    .container {
      max-width: 36rem;
      padding: 0 1rem;
      margin: 3rem auto 6rem;
    }
    
    // jsx
    import styles from './layout.module.css'
    
    export default function Layout({ children }) {
      return <div className={styles.container}>{children}</div>
    }
    ```
    
5. 引入全局样式: `styles/global.css` & `pages/_app.js`

    ```jsx
    import '../styles/global.css'
    
    export default function App({ Component, pageProps }) {
      return <Component {...pageProps} />
    }
    ```

6. 静态渲染

    ```react
    // 构建时需要使用的数据依赖
    export async function getStaticProps() {
      const allPostsData = getSortedPostsData()
      return {
        props: {
          allPostsData
        }
      }
    }
    ```

    

 