# 参考插件

- html-webpack-include-assets-plugin https://github.com/jharris4/html-webpack-include-assets-plugin
- html-webpack-inline-source-plugin https://github.com/DustinJackson/html-webpack-inline-source-plugin
- webpack-concat-plugin 压缩合并文件注入到html,目前只支持js https://github.com/hxlniada/webpack-concat-plugin
- html-webpack-harddisk-plugin 开发热更新时输出html  https://github.com/jantimon/html-webpack-harddisk-plugin
- write-file-webpack-plugin
    - webpack 热更新时输出文件 https://segmentfault.com/q/1010000014962454/a-1020000014983460

```js
new WriteFilePlugin({
    test: /static|templates/,
    useHashIndex: false
})
```
