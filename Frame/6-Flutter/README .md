<!--
title: Flutter
sort:
-->

> Google 的移动端开发神器神器

## 安装

- [SDK 官网](https://flutter.dev/docs/development/tools/sdk/releases)

```bash
flutter doctor	# 环境验证
# 设置代理
set PUB_HOSTED_URL=https://pub.flutter-io.cn
set FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
# 设置代理
set http_proxy=http://127.0.0.1:10809
set https_proxy=http://127.0.0.1:10809
```

## 问题

- 与 AndroidStudio4.1 不匹配

```
flutter channel dev
flutter upgrade
```
