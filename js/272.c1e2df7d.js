(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{900:function(n,a){n.exports="\x3c!--\ntitle: 00-Conda配置\nsort:\n--\x3e\n\n> [Anaconda](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D)\n\n## Conda\n\n> [清华源下载](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)\n\n### 换源\n\n> 生成配置文件: `conda config --set show_channel_urls yes`\n>\n> 清除索引缓存: `conda clean -i`\n\n```python\n# .condarc\nchannels:\n  - defaults\nshow_channel_urls: true\ndefault_channels:\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r\n  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2\ncustom_channels:\n  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n\n# 代理设置\nproxy_servers:\n  http: http://127.0.0.1:1087\n  https: http://127.0.0.1:1087\nssl_verify: false\n```\n\n> 虚拟环境\n\n```powershell\n# 初始化环境\nconda init <shell_name>\n# 取消初始化\nconda init <shell_name> --reverse\n\n# 取消自动激活\nonda config --set auto_activate_base false\n\n# 全部环境列表\nconda env list\n\n# 创建环境\nconda create -n <name> python=3.8.10\nconda remove -n <name> --all\n\n# 激活环境\nconda activate <name>\nconda deactivate\n\n# 默认不启动/启动\nconda config --set auto_activate_base false\nconda config --set auto_activate_base true\n# 清除缓存包\nconda clean --packages --tarballs\n\n# 安装依赖库\nconda install --yes --file requirements.txt\n```\n\n> 实战\n\n```python\nconda create -n learn-pytorch\n# 指定python版本\nconda create -n chat python=3.6\n# 重命名\nconda create -n ltorch --clone conda remove -n <name> --all\n# 删除\nconda remove -n learn-pytorch --all\n\n```\n\n### 问题\n\n> ==powershell==\n>\n> `在此系统上禁止运行脚本 profile.ps1`\n\n```bash\nSet-ExecutionPolicy -ExecutionPolicy RemoteSigned\n```\n\n> `Crypto`\n\n```\npip install pycryptodome\n```\n\n> 卸载后无法使用 cmd\n\n```bash\n# regedit\nComputer\\HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Command Processor\n# AutoRun 设置为空\n```\n"}}]);