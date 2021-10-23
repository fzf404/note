<!-- 
title: 05-NexT个性化
sort: 
--> 

# NexT主题个性化配置

## 配置

- 更改主题配置文件

  > NexT共有三种主题设定
  >
  > \#scheme: Muse 
  >
  > \#scheme: Mist 
  >
  > \#scheme: Pisces

  ```bash
  notepad themes/next/_config.yml
  # 设置菜单栏对应中文
  # 在language目录下对应的语言文件
  ```

- 设定菜单内容

  | 键值       | 设定值                    | 显示文本 |
  | :--------- | :------------------------ | :------- |
  | home       | `home: /`                 | 主页     |
  | archives   | `archives: /archives`     | 归档页   |
  | categories | `categories: /categories` | 分类页   |
  | tags       | `tags: /tags`             | 标签页   |
  | about      | `about: /about`           | 关于页面 |
  | commonweal | `commonweal: /404.html`   | 404      |

- 创建菜单文件

  ```bash
  hexo n page tags
  # 打开index.md
  # 添加Font-Matter:
  #	title: 标签
  #	type: "tags"
  hexo n page categories
  #	type: "categories"
  ```

- 设定头像

  ```bash
  avatar: URL/PATH
  ```

- 侧边栏社交链接

  ```bash
  social:
  	#名称: 链接
  ```

- 设定菜单显示文本

  > 在language目录下对应的语言文件

- 添加友链

  > 编辑NexT_config：`link`字段

- 开启打赏

  > 修改`reward_settings`为`true`
  >
  > 在`reward`中添加二维码

- 其他发布平台

  > `follow_me`

- 设置头像

  > `\themes\next\source\css\_common\outline\sidebar\sidebar-author.styl`
  >
  > ```css
  > border-radius: 20%;	/*头像变圆*/
  > ```

- 设置阅读全文

  > 在文章中添加
  >
  > `<!--more-->`

- 添加动态背景

  > ```bash
  > cd themes/next
  > git clone https://github.com/theme-next/theme-next-three source/lib/three
  > ```
  >
  > 开启动态背景
  >
  > ```css
  > three:
  > enable: true
  > three_waves: true
  > canvas_lines: false
  > canvas_sphere: false
  > ```


## 编辑文章

- 新建文章

  > `hexo n firstblog`
  >
  > 保存在_posts文件夹
  >
  > 修改md文件添加信息

- 修改内链颜色

  > `.\themes\next\source\css\_common\components\post\post.styl`
  >
  > ```css
  > .post-body p a {
  > color: #345;
  > border-bottom: none;
  > &:hover{
  >  color:#aaa;
  > }
  > }
  > ```

- 修改图标

  > `".\themes\next\layout\_macro\post.swig"`
  >
  > https://fontawesome.com/
  >
  > ```css
  > rel="tag" 
  > /* 在此之后添加 */
  > <i class="fas fa-tags"></i>
  > ```

## 添加功能

- 评论功能：https://leancloud.cn/

  ```yml
  # _config.yml
  valine:
    enable: false
  ```

- Local Search

  添加百度/谷歌/本地 自定义站点内容搜索

  1. 安装 `hexo-generator-searchdb`，在站点的根目录下执行以下命令：

     ```bash
     $ npm install hexo-generator-searchdb --save
     ```

  2. 编辑 **站点配置文件**，新增以下内容到任意位置：

     ```yml
     search:
       path: search.xml
       field: post
       format: html
       limit: 10000
     ```

  3. 编辑 **主题配置文件**，启用本地搜索功能：

     ```yml
     # Local search
     local_search:
       enable: true
     ```

- gitalk

```yml
gitalk:
  enable: true
  github_id: fzf404 # GitHub repo owner
  repo: blog-comment # Repository name to store issues
  client_id: xxx # GitHub Application Client ID
  client_secret: xxxxxx # GitHub Application Client Secret
  admin_user: # GitHub repo owner and collaborators, only these guys can initialize gitHub issues
  distraction_free_mode: true # Facebook-like distraction free mode
  # Gitalk's display language depends on user's browser or system environment
  # If you want everyone visiting your site to see a uniform language, you can set a force language value
  # Available values: en | es-ES | fr | ru | zh-CN | zh-TW
  language: zh-CN
```

