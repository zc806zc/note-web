# IE8-MV* 兼容方案

- san <https://github.com/baidu/san>

  - 百度
  - interlliJ idea 不识别文件类型 <https://blog.csdn.net/aaashen/article/details/46740817>
  - 借用Vue|HTML IDEA插件语法高亮下先

![](https://pic4.zhimg.com/80/v2-3ad18522a77e7e759c969efd6b130c7d_hd.jpg)

- anu.js <https://rubylouvre.github.io/anu/>

  - 兼容IE8的React(anu)开发脚手架 <https://gitee.com/menhal/React_IE8_boilerplate>
  - https://github.com/yunpengGit/anu-antd-axios-echarts-ie8
  - https://github.com/Levan-Du/anu-cli
  - https://gitee.com/menhal/React_IE8_boilerplate
  - https://github.com/magicapple/anujs-webpack4-ie7-8
  - https://github.com/RubyLouvre/create-anu-app

- avalon <https://github.com/RubyLouvre/avalon>

  - 被弃前奏??估计要凉透,如果兼容IE7还是要恬不知耻的考虑一下
  - <http://avalonjs.coding.me/> 资源多看教程
  - Avalon组件库 <https://github.com/RubyLouvre/avalon.oniui>
  - 基于 avalon2 的 SPA 脚手架
    - https://github.com/Levan-Du/avalon-spa-app
    - @NICE 由vue脚手架修改过来，适合vue开发者使用，采用类vue的单文件组件书写，异步、嵌套路由 <https://github.com/hmhao/avalon2-webpack2-spa>
    - <https://segmentfault.com/a/1190000009625441>
    - @deprecated <https://github.com/xxapp/ane>

- 早期版本react0.x
  - 兼容IE8措施 https://github.com/xcatliu/react-ie8
  - https://github.com/HeavenSky/react-antd-ie8
  - https://github.com/jaychsu/react-ie8-boilerplate

- regular <https://github.com/regularjs/regular>

  - regular-ui <https://github.com/regular-ui/regular-ui>
  - 后台管理系统前端开发方案，采用es6 + regular + gulp技术 <https://github.com/xuyanquan/es6-regular-gulp>

- NervJS <https://github.com/NervJS/nerv>

  - 试了半天不知到怎么兼容到IE8+,但文档写着一句  A blazing fast React alternative, compatible with IE8 and React 16
  - <https://nervjs.github.io/docs/>
  - 文档同框架搭建 <https://github.com/NervJS/nerv-website>
  - 脚手架 <https://github.com/NervJS/nerv-webpack-boilerplate>
  - nerv-ie8-boilerplate https://github.com/saltyshiomix/nerv-ie8-boilerplate
  - <https://github.com/NervJS/nerv-redux-todomvc>
  - 性能不错

- knockoutjs @deprecated

- angular1 @deprecated (更迭快,学习门槛高，用过时的总会心理不平衡)
  - ng-seed https://github.com/jm-team/ng-seed

- 网易Nec + Nej @deprecated
  - 参考一下理念
  - <http://nej.netease.com/>
  - 快速入门 <http://nej.netease.com/course/quickStart>

# 基于jquery的兼容 IE8+

- lulu @NICE 眼下黑 https://github.com/yued-fe/lulu
- LayUI 但官方写着IE9+, 悬了
- ZUI https://gitee.com/wwccss/zui
- ligerUI @deprecated http://www.ligerui.com/
- flow-ui <http://flow-ui.refined-x.com/>

# 栗子

- https://github.com/HeavenSky/webpack-frames

# 支持IE8

- 包含了一些对IE8的处理 https://github.com/zhaotoday/webpack-multi-page
- 让Webpack+Babel支持IE8 https://www.maizhiying.me/posts/2017/03/01/webpack-babel-ie8-support.html
- https://www.yukapril.com/2017/08/05/webpack-uglifyjs-ie8.html
    - es3ify-webpack-plugin
    - uglifyjs-webpack-plugin

```html
<!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-shim.min.js"></script>
    <script src="https://cdn.bootcss.com/es5-shim/4.5.10/es5-sham.min.js"></script>
<![endif]-->

<!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script src="https://cdn.bootcss.com/nwmatcher/1.4.2/nwmatcher-base.js"></script>
<![endif]-->

<script >
require("babel-polyfill")
</script>
```

# 参考

- 支持ie8的mvvm框架比较 <https://www.zhihu.com/question/52069420>
- 如何评价百度新造的 MVVM 轮子 San <https://www.zhihu.com/question/65498751/answer/294265707>
