# css优化

- <https://juejin.im/post/5a461f006fb9a0450408358f?utm_medium=fe&utm_source=weixinqun>

- css中用到的字体文件，一定要在所有css之前proload上

```html
<link rel="preload" href="/webfont.woff2" as="font">
```

- 首页CSS内联，非必要CSS异步加载

```js
function LoadStyle(url) {
  try {
    document.createStyleSheet(url)
  } catch(e) {
    var cssLink = document.createElement('link'); // 创建
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(cssLink); // 追加
  }
}

// webpack
import 'style.css'
improt('path-of-a.js').then(module => {})
```
