# Webpack

- 优化整理 <http://www.cnblogs.com/yexiaochai/p/3759959.html>
- 简介

  - 模块加载器 兼打包工具
  - Github 上各大主流的 React 相关项目，所展示的示例是基于 webpack 来开发的
  - <http://webpack.github.io/>
  - 入门 <http://www.w2bc.com/Article/50764>

- 竞争对手

  - <https://juejin.im/post/5a439fd7518825455f2f91a7?utm_medium=fe&utm_source=weixinqun>
  - parcel

- 教程

  - webpack深入与实战 <https://www.imooc.com/learn/802>

- commonJS AMD/CMD 代码迁移

  - 替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等
  - 支持 React 热插拔??
  - demo 自动加上自己的加载器 回调define...
  - 每个项目下都必须配置有一个 webpack.config.js

- 按需加载

  - tree-shaking 通过静态分析 es6 的语法，可以删除没有被使用的模块

```
var someModule = require("someModule");
    var anotherModule = require("anotherModule");    

    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();

    exports.asplode = function (){
        someModule.doTehAwesome();
        anotherModule.doMoarAwesome();
 };

// 作用如同常规的 gulpfile.js/Gruntfile.js ，配置项，告诉 webpack 它需要做什么
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// 提取多个入口文件的公共脚本部分
// 然后生成一个 common.js 来方便多页面之间进行复用

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    // module.loaders 是最关键的一块配置
    // 它告知 webpack 每一种文件都需要使用什么加载器来处理
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
            //查找module的话从这里开始查找
            root: 'E:/github/flux-example/src', //绝对路径
            //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
            extensions: ['', '.js', '.json', '.scss'],
            //模块别名定义，方便后续直接引用别名，无须多写长长的地址
            alias: {
                AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
                ActionType : 'js/actions/ActionType.js',
                AppAction : 'js/actions/AppAction.js'
            }
        }
};


// 执行：$ webpack --display-error-details
// 其他
$ webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
$ webpack --watch   //监听变动并自动打包
$ webpack -p    //压缩混淆脚本，这个非常非常重要！
$ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了

// 连样式都不用引入，脚本执行时会动态生成style并标签打到head里
// 脚本模块
require('../../css/reset.scss'); //加载初始化样式
require('../../css/allComponent.scss'); //加载组件样式
var React = require('react');
var AppWrap = require('../component/AppWrap'); //加载组件
var createRedux = require('redux').createRedux;
var Provider = require('redux/react').Provider;
var stores = require('AppStore');

var redux = createRedux(stores);

var App = React.createClass({
    render: function() {
        return (
            <Provider redux={redux}>
                {function() { return <AppWrap />; }}
            </Provider>
        );
    }
});

React.render(
    <App />, document.body
);

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

# 练手项目

- Webpack + Vue打造简单的todo <https://www.imooc.com/video/16412>

# Webpack多页面

- 基于 Webpack 开发和构建多页面站点

  - <https://juejin.im/post/5a9358d76fb9a0633c662f17>
  - <https://github.com/zhaotoday/webpack-multi-page>
