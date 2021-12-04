<!--
title: 04-Hexo主题
sort:
-->

# Hexo 设置主题

## 安装

- 从 github 下载主题

  ```bash
  git clone https://github.com/theme-next/hexo-theme-next themes/next
  ```

- 更改 Hexo 配置文件

  ```bash
  notepad _config.yml
  # 修改网站信息
  # 将theme项修改为next
  # 将language修改为zh-CN
  hexo g
  # 运行hexo服务，并输出调试信息
  hexo s --debug
  ```
