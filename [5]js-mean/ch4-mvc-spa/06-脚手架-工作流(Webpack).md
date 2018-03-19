# Webpack

- 简介

  - 模块加载器 兼打包工具
  - <http://webpack.github.io/>

- 竞争对手 <https://juejin.im/post/5a439fd7518825455f2f91a7?utm_medium=fe&utm_source=weixinqun>

  - parcel

- 教程

  - webpack深入与实战 <https://www.imooc.com/learn/802>
  - 优化整理 <http://www.cnblogs.com/yexiaochai/p/3759959.html>
  - Webpack + Vue打造简单的todo <https://www.imooc.com/video/16412>

- commonJS AMD/CMD 代码迁移

- 按需加载

  - tree-shaking 通过静态分析 es6 的语法，可以删除没有被使用的模块

```
// 有用的技巧
// shimming：在 AMD/CMD 中，我们需要对不符合规范的模块（比如一些直接返回全局变量的插件）进行 shim 处理
{ test: require.resolve("./src/js/tool/swipe.js"),  loader: "exports?swipe"}

require('./tool/swipe.js');
swipe();

// 自定义公共模块提取：
// 独立打包样式文件
var webpack = require('webpack');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
    module.exports = {
        plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
        entry: {
        //...省略其它配置


// 使用CDN/远程文件
{
    externals: {
        // require("jquery") 是引用自外部模块的
        // 对应全局变量 jQuery
        "jquery": "jQuery"
    }
}

var $script = require("scriptjs");
$script("//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js", function() {
  $('body').html('It works!')
});

// 与 grunt/gulp 配合
gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});
```

# Webpack-MPA(多页面)脚手架方案

- 基于 Webpack 开发和构建多页面站点 <https://juejin.im/post/5a9358d76fb9a0633c662f17>

  - <https://github.com/zhaotoday/webpack-multi-page>

- vue-cli-multi-page(推荐) <https://github.com/bluefox1688/vue-cli-multi-page>

- Vue或React多页应用脚手架 <https://github.com/MeCKodo/vue-multipage>

  - <https://www.imooc.com/article/12697>


# neutrino-dev

> Neutrino is a companion tool which lets you build web and Node.js applications with shared presets or configurations. It intends to make the process of initializing and building projects much simpler by providing minimal development dependencies.

- https://github.com/mozilla-neutrino/neutrino-dev  
- https://neutrino.js.org/
