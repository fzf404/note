<!-- 
title: 03-Hexo基本操作
sort: 
--> 
# Hexo基本操作

## 写作

- **新建文章**

  ```bash
  hexo new [layout] <title>
  ```

  > - **layout：文件布局**
  >
  > | 布局  | 路径           | 作用     |
  > | ----- | -------------- | -------- |
  > | post  | source/_post   | 新建文章 |
  > | page  | source         | 新建页面 |
  > | draft | source/_drafts | 新建草稿 |
  >
  > 不想被处理的文章，可修改 Font-Matter 中`layout:false`
  >
  > - **设置titile**
  >
  > `hexo new :2002:03:16:fzf`
  >
  > - **模板（scaffold）**
  >
  > Hexo会根据`scaffolds`文件夹建立文件。

- Font-Matter

  > 是文件上方以`---`分隔的区域。
  >
  > | 参数         | 描述                                                 | 默认值       |
  > | :----------- | :--------------------------------------------------- | :----------- |
  > | `layout`     | 布局                                                 |              |
  > | `title`      | 标题                                                 | 文章的文件名 |
  > | `date`       | 建立日期                                             | 文件建立日期 |
  > | `updated`    | 更新日期                                             | 文件更新日期 |
  > | `comments`   | 开启文章的评论功能                                   | true         |
  > | `tags`       | 标签（不适用于分页）                                 |              |
  > | `categories` | 分类（不适用于分页）                                 |              |
  > | `permalink`  | 覆盖文章网址                                         |              |
  > | `keywords`   | 仅用于 meta 标签和 Open Graph 的关键词（不推荐使用） |              |
  >
  > - **分类和标签**
  >
  >   - 分类具有顺序性，而标签没有。
  >
  >   需要为文章添加多个分类，可以尝试以下 list 中的方法：
  >
  >   ```
  >   categories:
  >    - [Diy, Life]
  >    - [Diy, Cook]
  >    - [Tech]
  >   ```
  >
  > - JSON Font-matter
  >
  >   可使用JSON编写，将`---`变成`;;;`

## 资源文件夹

- 用于自动创建资源文件夹。

  > 修改`config.yml`文件中的`posr_asset_folder: true`
  >
  > 接下来创建新文件使会自动创建「」源文件夹

## 服务器

- 安装hexo-server：`npm install hexo-server --save`

  > -p 5000			更换端口
  >
  > -i 192.168.1.1	 更换ip

## 生成器

- 监视文件变动：`hexo generate --watch`

## 模板

- 将模板克隆到themes目录：

  ```bash
  git clone https://github.com/HmyBmny/hexo-theme-concise.git themes/concise 
  ```

- 修改_config.yml中的theme：

  ```yml
  theme: concise
  ```