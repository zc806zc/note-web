# 脚手架 | 构建工具

- webpack | parcel
- Gulp
- fis3 
  - <http://fis.baidu.com/fis3/docs/beginning/intro.html>
  - https://www.imooc.com/video/4666

- Browserify
- Yeoman
- brunch http://brunch.io/

# IDEA快速配置(@deprecated)

- sass | less

- autoprefix

  - <http://www.css88.com/archives/5670>
  - <https://www.npmjs.com/package/less-plugin-autoprefix>

```javascript
npm install autoprefixer -g
npm install postcss-cli -g
npm install -g less
npm install -g less-plugin-clean-css
C:\Users\Administrator\AppData\Roaming\npm\postcss.cmd

--plugin=less-plugin-clean-css $FileName$

Parameters: -u autoprefixer -o $FileDir$\$FileName$  $FileDir$\$FileName$
Working directory :$ProjectFileDir$

// npm install postcss-less
```

# 构建工具及自动化

- 自动化构建解决日复一日的工作流程

  - 资源管理 : 图像压缩
  - 代码编写（JS静态代码分析，单元测试，代码缩编， 利用sass处理css）
  - 改进工作流，创建生产就绪的代码
  - 确保版本号

- [gulpjs](http://gulpjs.com) | [grunt使用示例](http://developer.51cto.com/art/201506/479127.htm) | [grunt插件](http://www.gruntjs.net/plugins)

- gulp较grunt的优势

  - 利用Node.js的Stream,使得一个任务的输出可以进行feed和pipe，而成为另一个任务的输入不 需要一个在硬盘写入临时文件的中途步骤，更高效
  - 配置信息不再是一个独立的很大的配置对象，而是链式调用
  - 专门设计成细分化的任务

- 移除node_modules

```shell
#  rimraf
npm install rimraf -g
rimraf node_modules

# windows
rmdir /s/q your_app_dir

# Linux
rm -f /node_modules
```

- webpack | prepack | parcel

- bower <http://bower.io>

  - <https://github.com/timmywil/grunt-bowercopy>
  - <https://github.com/zont/gulp-bower>

- 其他替代(@deprecated)

  - spm
  - component
  - Jam

- gulp/webpack/bower等工具的差别

# gulp自动化构建方案

- gulp常用插件 <http://pinkyjie.com/2015/08/02/commonly-used-gulp-plugins-part-1/>

- gulp前端自动化构建 <https://www.imooc.com/video/16174>

- 这个方案很丑陋和暴力，但有效...

```javascript
// POSTCSSs深入系列
// https://www.w3cplus.com/PostCSS/using-postcss-together-with-sass-stylus-or-less.html
// 导入模块
var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    cssmin = require('gulp-clean-css');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

// 定义任务
gulp.task('compileLess', function () {
    var processors = [ autoprefixer, cssnano ];

    gulp.src('./**/css/**/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(postcss(processors))
        // gulp-clean-css {rebase: false }ff
        .pipe(cssmin({compatibility: 'ie7', inline: ['remote'], rebase: false })) // 兼容ie7 @import fix
        .pipe(gulp.dest('./')); // 相对路劲下生成
});

// 监控
gulp.task('watchLessCompile', function () {
    gulp.watch('./**/css/**/*.less', ['compileLess']);
});
```


# 压缩

- Gzip 传输时压缩

  - header Content-Encoding:gzip
  - appache mod_deflate模块
  - Node.js Express compress()
  - 预压缩 + HTTP报头Content-Encoding:gzip

- 缩编、混淆和编译

  - 缩编：去掉空格换行符
  - 混淆：高级 对限定作用域内的变量 重命名为简短的名称

    - 全局变量和函数越少越好

  - 编译：更先进 分析代码

- JS压缩

  - uglifyJS
  - YUI Compressor（仅仅压缩）
  - Closure Compiler

  - JSMin 缩编工具

    - npm install -g jsmin
    - jsmin -o Listing.min.js listing.js

  - UglifyJS 缩编 + 混淆

    - <http://marijnhaverbeke.nl/uglifyjs>
    - npm install uglify-js -g
    - uglifyjs uglify-test.js -m -o uglify-test.min.js

  - Google Closure Compiler 代码编译

    - <http://closure-compiler.appspot.com/home>

- CSS压缩

  - CSS Compressor

- css移除

  - uncss <https://github.com/giakki/uncss>

- HTML压缩

  - 有必要吗？
  - HtmlCompressor

- 图片资源压缩|优化

  - 在线

    - TinyPNG
    - JEPGmini
    - 智图 <http://zhitu.isux.us/>

  - 本地：ImageOptim

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


- 前端人人 基于react的多页面 NICE https://www.jianshu.com/u/d6102adf76ac
- 基于 Webpack 开发和构建多页面站点 <https://juejin.im/post/5a9358d76fb9a0633c662f17>

  - <https://github.com/zhaotoday/webpack-multi-page>

- vue-cli-multi-page(推荐) <https://github.com/bluefox1688/vue-cli-multi-page>

- Vue或React多页应用脚手架 <https://github.com/MeCKodo/vue-multipage>

  - <https://www.imooc.com/article/12697>

- <https://github.com/b5156/webpack-multiple-page-boilerplate>


# neutrino-dev

> Neutrino is a companion tool which lets you build web and Node.js applications with shared presets or configurations. It intends to make the process of initializing and building projects much simpler by providing minimal development dependencies.

- <https://github.com/mozilla-neutrino/neutrino-dev>
- <https://neutrino.js.org/>
