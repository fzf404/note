<!--
title: Sublime
sort:
-->

# Sublime 使用教程

## 基本配置

1. 下载安装

   - [sublime 官网](http://www.sublimetext.cn/)

2. 初始化插件仓库

   - ```python
     import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.cn/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
     ```

3. 安装插件

   - 使用快捷键 Ctrl+P
   - 输入：install
   - 选中`Package Control:Install Package`回车
