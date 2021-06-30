<!-- 
title: 02-Hexo配置
sort: 
--> 
# Hexo配置

## `_config.yml`

### 网站

| 参数          | 描述                                            |
| :------------ | :---------------------------------------------- |
| `title`       | 网站标题                                        |
| `subtitle`    | 网站副标题                                      |
| `description` | 网站描述                                        |
| `keywords`    | 网站的关键词。使用半角逗号 `,` 分隔多个关键词。 |
| `author`      | 您的名字                                        |
| `language`    | 网站使用的语言                                  |
| `timezone`    | 网站时区。Hexo 默认使用您电脑的时区。           |

### 网址

| 参数                         | 描述                                                         | 默认值                      |
| :--------------------------- | :----------------------------------------------------------- | :-------------------------- |
| `url`                        | 网址                                                         |                             |
| `root`                       | 网站根目录                                                   |                             |
| `permalink`                  | 文章的 [永久链接](https://hexo.io/zh-cn/docs/permalinks) 格式 | `:year/:month/:day/:title/` |
| `permalink_defaults`         | 永久链接中各部分的默认值                                     |                             |
| `pretty_urls`                | 改写 [`permalink`](https://hexo.io/zh-cn/docs/variables) 的值来美化 URL |                             |
| `pretty_urls.trailing_index` | 是否在永久链接中保留尾部的 `index.html`，设置为 `false` 时去除 | `true`                      |
| `pretty_urls.trailing_html`  | 是否在永久链接中保留尾部的 `.html`, 设置为 `false` 时去除 (*对尾部的 `index.html`无效*) | `true`                      |

### 目录	（新手没必要修改）

| 参数           | 描述                                                         | 默认值           |
| :------------- | :----------------------------------------------------------- | :--------------- |
| `source_dir`   | 资源文件夹，这个文件夹用来存放内容。                         | `source`         |
| `public_dir`   | 公共文件夹，这个文件夹用于存放生成的站点文件。               | `public`         |
| `tag_dir`      | 标签文件夹                                                   | `tags`           |
| `archive_dir`  | 归档文件夹                                                   | `archives`       |
| `category_dir` | 分类文件夹                                                   | `categories`     |
| `code_dir`     | Include code 文件夹，`source_dir` 下的子目录                 | `downloads/code` |
| `i18n_dir`     | 国际化（i18n）文件夹                                         | `:lang`          |
| `skip_render`  | 跳过指定文件的渲染。匹配到的文件将会被不做改动地复制到 `public` 目录中。您可使用 [glob 表达式](https://github.com/micromatch/micromatch#extended-globbing)来匹配路径。 |                  |

### 文章

| 参数                    | 描述                                                         | 默认值    |
| :---------------------- | :----------------------------------------------------------- | :-------- |
| `new_post_name`         | 新文章的文件名称                                             | :title.md |
| `default_layout`        | 预设布局                                                     | post      |
| `auto_spacing`          | 在中文和英文之间加入空格                                     | false     |
| `titlecase`             | 把标题转换为 title case                                      | false     |
| `external_link`         | 在新标签中打开链接                                           | true      |
| `external_link.enable`  | 在新标签中打开链接                                           | `true`    |
| `external_link.field`   | 对整个网站（`site`）生效或仅对文章（`post`）生效             | `site`    |
| `external_link.exclude` | 需要排除的域名。主域名和子域名如 `www` 需分别配置            | `[]`      |
| `filename_case`         | 把文件名称转换为 (1) 小写或 (2) 大写                         | 0         |
| `render_drafts`         | 显示草稿                                                     | false     |
| `post_asset_folder`     | 启动 [Asset 文件夹](https://hexo.io/zh-cn/docs/asset-folders) | false     |
| `relative_link`         | 把链接改为与根目录的相对位址                                 | false     |
| `future`                | 显示未来的文章                                               | true      |
| `highlight`             | 代码块的设置                                                 |           |
| `highlight.enable`      | 开启代码块高亮                                               | `true`    |
| `highlight.auto_detect` | 如果未指定语言，则启用自动检测                               | `false`   |
| `highlight.line_number` | 显示行数 *Enabling this option will also enable `wrap` option* | `true`    |
| `highlight.tab_replace` | 用 n 个空格替换 tabs；如果值为空，则不会替换 tabs            | `''`      |
| `highlight.wrap`        | Wrap the code block in [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | `true`    |
| `highlight.hljs`        | Use the `hljs-*` prefix for CSS classes                      | `false`   |

### 分类 & 标签

| 参数               | 描述     | 默认值          |
| :----------------- | :------- | :-------------- |
| `default_category` | 默认分类 | `uncategorized` |
| `category_map`     | 分类别名 |                 |
| `tag_map`          | 标签别名 |                 |

### 日期 / 时间格式

- Hexo使用 [Moment.js](http://momentjs.com/) 来解析和显示时间。

| 参数                   | 描述                                                         | 默认值       |
| :--------------------- | :----------------------------------------------------------- | :----------- |
| `date_format`          | 日期格式                                                     | `YYYY-MM-DD` |
| `time_format`          | 时间格式                                                     | `HH:mm:ss`   |
| `use_date_for_updated` | 启用以后，如果 Front Matter 中没有指定 `updated`， [`post.updated`](https://hexo.io/zh-cn/docs/variables#页面变量) 将会使用 `date` 的值而不是文件的创建时间。在 Git 工作流中这个选项会很有用 | `true`       |

### 分页

| 参数             | 描述                                | 默认值 |
| :--------------- | :---------------------------------- | :----- |
| `per_page`       | 每页显示的文章量 (0 = 关闭分页功能) | `10`   |
| `pagination_dir` | 分页目录                            | `page` |

### 扩展

| 参数             | 描述                                                         |
| :--------------- | :----------------------------------------------------------- |
| `theme`          | 当前主题名称。值为`false`时禁用主题                          |
| `theme_config`   | 主题的配置文件。在这里放置的配置会覆盖主题目录下的 `_config.yml` 中的配置 |
| `deploy`         | 部署部分的设置                                               |
| `meta_generator` | [Meta generator](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta#属性) 标签。 值为 `false` 时 Hexo 不会在头部插入该标签 |

## 同步github

```yaml
npm install hexo-deployer-git --save
_congig.yml
deploy:
  type: git
  repo: git@github.com:fzf404/fzf404.github.io.git
  master: master
```

