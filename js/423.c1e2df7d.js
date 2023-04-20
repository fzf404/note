(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1051:function(e,n){e.exports='\x3c!--\ntitle: 06-H5媒体\nsort:\n--\x3e\n\n## 插件\n\n### object\n\n> 定义了在 HTML 文档中嵌入的对象。\n>\n> 与 embed 差不多\n\n```html\n<object width="400" height="50" data="bookmark.swf"></object>\n```\n\n## 音频\n\n```html\n<object height="50" width="100" data="horse.mp3"></object>\n\x3c!-- 使用audio标签 --\x3e\n<audio controls height="100" width="100">\n  <source src="horse.mp3" type="audio/mpeg" />\n  <source src="horse.ogg" type="audio/ogg" />\n  <embed height="50" width="100" src="horse.mp3" />\n</audio>\n```\n\n- embed\n\n  > 在 HTML 页面中嵌入多媒体元素。\n\n## 视频\n\n```html\n<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4" />\n  <source src="movie.ogg" type="video/ogg" />\n  <source src="movie.webm" type="video/webm" />\n  <object data="movie.mp4" width="320" height="240">\n    <embed src="movie.swf" width="320" height="240" />\n  </object>\n</video>\n```\n\n- object\n\n  > 在 HTML 页面中嵌入多媒体元素。\n  >\n  > HTML 5 `<video>` 元素会尝试播放以 mp4、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 `<embed> `元素。\n'}}]);