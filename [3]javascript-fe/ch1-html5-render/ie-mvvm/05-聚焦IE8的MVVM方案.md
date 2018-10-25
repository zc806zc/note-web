# README

> 寻找兼容IE8的方法不如换家公司，真解！！

- 支持ie8的mvvm框架比较 <https://www.zhihu.com/question/52069420>
- 如何评价百度新造的 MVVM 轮子 San <https://www.zhihu.com/question/65498751/answer/294265707>
- 如果要兼容IE8，前端用什么框架最好？ https://www.zhihu.com/question/268725034

![](https://pic4.zhimg.com/80/v2-3ad18522a77e7e759c969efd6b130c7d_hd.jpg)


# 脚手架配置 

- Webpack Shimming https://webpack.js.org/guides/shimming/

```
有些脚手架
开发时不一定兼容IE8+
因为IE8很难搞定开发时热更新
要看打包结果是否兼容IE8+
```

# 支持IE8措施

- (React)兼容IE8措施 @nice https://github.com/xcatliu/react-ie8
- 包含了一些对IE8的处理 https://github.com/zhaotoday/webpack-multi-page
- 让Webpack+Babel支持IE8 https://www.maizhiying.me/posts/2017/03/01/webpack-babel-ie8-support.html
- https://www.yukapril.com/2017/08/05/webpack-uglifyjs-ie8.html
    - es3ify-webpack-plugin
    - uglifyjs-webpack-plugin

```html
<!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-shim.min.js"></script>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-sham.min.js"></script>
    <script src="http://cdn.bootcss.com/console-polyfill/0.3.0/index.min.js"></script>
<![endif]-->

<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script src="https://cdn.bootcss.com/nwmatcher/1.4.2/nwmatcher-base.js"></script>
<![endif]-->

<script >
require("babel-polyfill")
</script>
```

# IE8-MV* 兼容方案

- anujs @nice
- sanjs @nice
- react0.14.x @nice
- nerv.js 
- regular

  - 网易
  - <https://github.com/regularjs/regular>
  - 组件库regular-ui <https://github.com/regular-ui/regular-ui>
  - 后台管理系统前端开发方案，采用es6 + regular + gulp技术 ?? <https://github.com/xuyanquan/es6-regular-gulp>
  - https://github.com/regularjs/example ??

- avalon @deprecated

  - <https://github.com/RubyLouvre/avalon>
  - anu发布，估计被弃前奏??
  - 但是如果要兼容IE7还是要恬不知耻的用 =》 如果有人叫我兼容IE7，一定离职！！
  - 教程 <http://avalonjs.coding.me/> 
  - 组件库
    - oniui Avalon组件库 <https://github.com/RubyLouvre/avalon.oniui>
    - ane @deprecated
        - <https://github.com/xxapp/ane>
  - 脚手架
    - avalon2-webpack2-spa @nice
        - 由vue脚手架修改过来
        - 采用类vue的单文件组件书写，异步、嵌套路由  
        - https://github.com/hmhao/avalon2-webpack2-spa
    - webpack-avalon2-SPA-seed https://github.com/crazyliuzc/webpack-avalon2-SPA-seed
    - avalon-spa-app https://github.com/Levan-Du/avalon-spa-app
    - 发布基于 Avalon2 的 UI 组件库与 SPA 脚手架 <https://segmentfault.com/a/1190000009625441>

- angular1 @deprecated 

  - angular更迭快,用过时的总会心理不平衡 
  - 相对学习门槛高
  - ng-seed https://github.com/jm-team/ng-seed

- knockoutjs @deprecated:真不好用

- 网易Nec + Nej @deprecated
  - 参考一下理念
  - <http://nej.netease.com/>
  - 快速入门 <http://nej.netease.com/course/quickStart>


# anu.js 

- <https://rubylouvre.github.io/anu/>

- 如何让React(anujs)跑在IE8上 @deprecated 暂时跑不起来,缺少点东西
    - https://zhuanlan.zhihu.com/p/39103023
    - https://github.com/RubyLouvre/anu-ie8-example

- 脚手架
    - react-ssr-ie8-startup https://github.com/nasawz/react-ssr-ie8-startup
    - anu-starter-kit https://github.com/L-Chris/anu-starter-kit
    - react-ie8-cli https://github.com/tanggd7/react-ie8-cli
    - react-webpack-boilerplate https://github.com/sitorhy/react-webpack-boilerplate
    - React_IE8_boilerplate https://gitee.com/menhal/React_IE8_boilerplate
    - anujs-webpack4-ie7-8 https://github.com/magicapple/anujs-webpack4-ie7-8
- @deprecated o(╥﹏╥)o 没成功
    - https://github.com/Levan-Du/anu-cli
    - https://github.com/RubyLouvre/create-anu-app 
    - https://github.com/yunpengGit/anu-antd-axios-echarts-ie8 chrome可以没试通IE8

```js
// https://github.com/RubyLouvre/anu-ie8-example/blob/master/src/index.js
import 'es5-shim'; //IE8 ^4.5.10
import 'object-create-ie8';//这样就不用加上es5-sham
import 'object-defineproperty-ie8';
import 'console-polyfill';
//只有打开了F12才会有这个方法
import 'json3';  //比IE8的JSON好用
import 'bluebird'; //性能超高的Promise实现
import 'fetch-polyfill2'; //fetch 实现
```

# san 

- 百度出品 类Vue体验
- <https://github.com/baidu/san>
- interlliJ idea 不识别文件类型 <https://blog.csdn.net/aaashen/article/details/46740817>
- 借用Vue|HTML IDEA插件语法高亮下先

```
为了兼容 IE8, 
可能需要放弃 ES6的 export 和 import 语法,
使用es5中的module.exports 和 require 语法

UI还是采用bootstrap等
可能也是cdn引入的
```

- san的脚手架

  - SanFrameWork-IE8 https://github.com/QingHuanMoon/SanFrameWork-IE8

# react0.14.x

- 虽然过时了，但是很多人都会react 
- 脚手架
    - react-antd-ie8 https://github.com/HeavenSky/react-antd-ie8
    - webpack-frames
        - webpack 1,3,4 ie8 react vue 主流框架搭建汇总 
        - https://github.com/HeavenSky/webpack-frames
    - react-redux-antd-ie8 https://github.com/bertFu/react-redux-antd-ie8
    - react-ie8-boilerplate https://github.com/jaychsu/react-ie8-boilerplate
    - react-family-ie8 https://github.com/brickspert/react-family-ie8 开发时热更新，打包时才兼容IE8
- 其他

    - ai-react-template https://github.com/AI-UNICOM/ai-react-template
    - peas_front https://github.com/youka2012/peas_front
    - react-ie8-webpack3-example https://github.com/dunhuang/react-ie8-webpack3-example
    - react-ie8-bootstrap https://github.com/fddfdfdfdf/react-ie8-bootstrap
    - react-adminlte-ie8-test https://github.com/cshenger/react-adminlte-ie8-test
    - react-boilerplate-ie8 https://github.com/localSummer/react-boilerplate-ie8
    - reactwithie8 https://github.com/sampsonli/reactwithie8
    - https://github.com/MrJoe0929/React-antd-IE8
    - https://github.com/hjx5309/reactIe8
    - web-react-ie8-antd-cool https://github.com/webgameone/web-react-ie8-antd-cool
    - react-app-ie8 https://github.com/womendi/react-app-ie8
    - react-redux-support-ie8 https://github.com/zhoulijie/react-redux-support-ie8

# NervJS 

- 试了半天不知到怎么兼容到IE8+....
- <https://github.com/NervJS/nerv>
- A blazing fast React alternative, compatible with IE8 and React 16
- 文档 <https://nervjs.github.io/docs/>
- 脚手架

    - nervjs-ie8 https://github.com/womendi/nervjs-ie8
    - nerv-ie8-boilerplate https://github.com/saltyshiomix/nerv-ie8-boilerplate
    - https://github.com/zhans1993/Nerv-ie8
    - nerv文档同框架搭建 <https://github.com/NervJS/nerv-website>
    - 脚手架 <https://github.com/NervJS/nerv-webpack-boilerplate>
    - nerv-ie8-boilerplate https://github.com/saltyshiomix/nerv-ie8-boilerplate
    - nerv-redux-todomvc <https://github.com/NervJS/nerv-redux-todomvc>