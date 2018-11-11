# CSS

- awesome-css-cn <https://github.com/jobbole/awesome-css-cn>
- CSS速查表 <http://www.css88.com/book/css/>
- CSS查漏补缺 <https://segmentfault.com/a/1190000006242814>
- You-need-to-know-css@NICE <https://github.com/l-hammer/You-need-to-know-css>
  - CSS Tricks for web developer
  - <https://l-hammer.github.io/You-need-to-know-css/>
- you don't need js
  - <https://github.com/you-dont-need/You-Dont-Need-JavaScript>

- 12个HTML和CSS必须知道的重点难点问题 <https://juejin.im/post/5a954add6fb9a06348538c0d>

  - height line-height
  - position: relative absolute
- 你以为 CSS 只是个简单的布局 https://juejin.im/post/5a446d19f265da43052eebcc
- iCSS@NICE 谈谈一些有趣的 CSS 话题 https://github.com/chokcoco/iCSS   
- 负值之美(将一个元素的margin设置为负值，元素将会变大) <http://www.cnblogs.com/jscode/archive/2012/08/28/2660078.html>
- 伪类与伪元素

  - 伪类 <http://www.runoob.com/css/css-pseudo-classes.html>
  - 伪元素 <http://www.runoob.com/css/css-pseudo-elements.html>
  - <https://juejin.im/post/5a0029a45188254dd935cc40>
  - 计数器
  - 梯形标签页 <http://dabblet.com/gist/1345dc9399dc8e794502>

![](/static/img/css/css-books.jpg)

# CSS3

> 限制住自己的不是技术而是想象力

- CSS3: 把下一代CSS试验性地拆分成一组组独立的标准模块，并且是还在试验和反馈的循环

- 查看兼容现状 
  - <http://tinyurl.com/css3-stages>
  - CSS contents and browser compatibility <http://www.quirksmode.org/css/contents.html>
  - caniuse.com | CSS3 Click Chart
  - Modernizr 检测支持情况
  - -prefix-free自动添加前缀 @deprecated <http://leaverou.github.io/prefixfree>

- 移动性能 - 标准反模式

- 字体格式 [css3-font-face](http://www.w3cplus.com/content/css3-font-face)

  - eot // 嵌入式字体，微软家的
  - svg // W3C制定的开放标准的图形格式
  - ttf
  - woff // Web开发字体格式

```javascript
// 字体link引用
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,
200italic,300italic,400italic,600italic,700italic,900italic
|Roboto+Condensed:300italic,400italic,700italic,400,300,700'
rel='stylesheet' type='text/css'>

// icon (@font-face)
@font-face {
    font-family: <YourFontName>;
    src: <source> [<format>][,<source> [<format>]]*;
    [font-weight: <weight>];
    [font-style: <style>];
}
```

- Web字体

  - Font Squirrel <http://www.fontsquirrel.com> 推荐Callographic,Novelty,Retro
  - Webfont Generator

  - Google Fonts <http://www.google.com/fonts>

  - 还面临的问题 打印优化问题 + 版权问题

# CSS资源

- css-protips @NICE <https://github.com/AllThingsSmitty/css-protips>
- 30-seconds-of-css @NICE
  - <https://atomiks.github.io/30-seconds-of-css/#box-sizing-reset>
  - https://github.com/atomiks/30-seconds-of-css
- 148个资源让你成为CSS专家 <https://segmentfault.com/a/1190000006689923>

# CSS规范与命名法

- 这些CSS 命名规范将省下你大把调试时间 <https://juejin.im/post/5a6c5881518825733201daf7>

  - 不要用数据属性（data attributes）作为 JavaScript 钩子

```html
<div class="site-navigation" rel="js-site-navigation"></div>
<script type="text/javascript">
const nav = document.querySelector("[rel='js-site-navigation']")  
</script>
```

- css常见样式命名思想 <https://juejin.im/post/5a79545a5188257a7924875d>
- 命名习惯和方式 https://github.com/jobbole/awesome-css-cn#%E5%91%BD%E5%90%8D%E4%B9%A0%E6%83%AF%E5%92%8C%E6%96%B9%E5%BC%8F
- React拾遗：从10种现在流行的 CSS 解决方案谈谈我的最爱 @NICE https://juejin.im/post/5b39e63ae51d4562aa017c81
- BEM @NICE
  - https://github.com/sturobson/BEM-resources
  - https://en.bem.info/methodology/quick-start/

```shell
<nav class="nav">
  <a href="#" class="nav__item nav__item--normal">正常状态</a>
  <a href="#" class="nav__item nav__item--active">当前状态</a>
  <a href="#" class="nav__item nav__item--hover">鼠标移上时的状态</a>
</nav>

.nav {
  &__item {
    &--normal {
    }
    &--active {
    }
    &--hover {
    }
  }
}

@include b(nav) {
  @include e(item) {
    @include m(normal) {
    }
    @include m(active) {
    }
    @include m(hover) {
    }
  }
}
```

- Atomic 原子
  - tailwindcss https://tailwindcss.com/docs/installation

- SUIT CSS

```html
<div class="u-cf">
  <a class="u-floatLeft" href="{{url}}">
    <img class="u-block" src="{{src}}" alt="">
  </a>
  <p class="u-sizeFill u-textBreak">
    …
  </p>
</div>

<article class="Tweet is-expanded">
  <header class="Tweet-header">
    <img class="Tweet-avatar" src="{{src}}" alt="{{alt}}">
    …
  </header>
  <div class="Tweet-bodyText">
    …
  </div>
</article>

<style>
.Tweet { /* … */ }
.Tweet.is-expanded { /* … */ }
</style>
```

# CSS权重

- id声明会覆盖class
- class中的排序不重要,表中的顺序很重要

# 盒模型与BFC

- display + position + float
- DIV + CSS 多个div嵌套 -> 结构考量 + 性能考量
- BFC : Block formatting context 块级格式化上下文
  - 它决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用，处于不同BFC中的元素是不会互相干扰的
  - BFC与IFC <https://segmentfault.com/a/1190000012993668>

- 哪些元素会生成BFC

  - 根元素
  - float属性不为none
  - position为absolute或fixed
  - display为inline-block, table-cell, table-caption, flex, inline-flex
  - overflow不为visible

- BFC有何用

  - 清除浮动
  - 防止 margin 重叠
  - 多栏布局的一种方式

- 元素溢出问题的解决

![](https://user-gold-cdn.xitu.io/2018/1/27/161373686b854aac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

# 清除浮动

- CSS清浮动处理 <http://www.cnblogs.com/dolphinX/p/3508869.html>
- 清除浮动的方法 <https://rainylog.com/post/what-methods-of-clearfix-can-i-use/>
- 父级div定义height
- clear:both
- clearfix:after 和 zoom
- overflow:hidden
- 父级div也浮动，需要定义宽度
- br + clear:both

# CSS布局

> 在可以不兼容IE的情况下 慎用浮动，血的教训！！！

- 各种常见布局实现+知名网站实例分析 @nice <https://juejin.im/post/5aa252ac518825558001d5de>
- CSS布局解决方案（终结版） <https://juejin.im/entry/5aa0afd1f265da239c7aec81>
- 企业网站综合布局实战 @old:video <https://www.imooc.com/learn/147>
- 关于各种布局的选择

  - 在浏览器支持的情况下，页面的大框架推荐用grid布局。
  - 定好架子后，局部布局推荐用flex。
  - float和inline-block浏览器支持好，但各有缺点。

```javascript
分隔符不是网页内容的一部分，应该从html中分离，使用css实现

不要有多余的div，也应该写在css P57

// Background-image和<img>
背景图css实现,语义内容img标签

text-indent: -999px; // 用于说明性的空标签

// 设置网页标题层级
hgroup
保持一个h1
不要跳级，必要时可以选择hide

overflow: hidden; // 触发生成BFC,使浮动元素也参与计算
```

# 移动端布局

适配 ->>

# 居中若干

- 这15种CSS居中的方式，你都用过哪几种？ https://juejin.im/entry/5aead956f265da0ba76f9488
  - 利用“精灵元素” -> 在父容器内放一个100%高度的伪元素，让文本和伪元素垂直对齐，从而达到垂直居中的目的
  - http://www.42du.cn/run/64
- 兼容IE8 https://liyongleihf2006.github.io/center-box/

```css
/* 精灵元素 */
.ghost-center {
    position: relative;
}
.ghost-center::before {
    content: " ";
    display: inline-block;
    height: 100%;
    width: 1%;
    vertical-align: middle;
}
.ghost-center p {
    display: inline-block;
    vertical-align: middle;
    width: 20rem;
}
```

- 绝对定位 relative > absolute
- 水平居中方法
  - .tc + inline-block (子元素宽度不能超父元素宽度)
  - .container
  - 绝对定位 left50% + margin-left/tramsformX 
  - flex

- 垂直居中 
  - 垂直居中 <https://www.w3.org/Style/Examples/007/center>
  - height + line-height 公用水平中垂线 (单行，多行自己计算)
  - tabel-cell (IE8+)
  - 绝对定位 top50% + margin-top/tramsformY 
  - top: 0 + bottom: 0 无限延伸占满空间并平分 (ie8+)
  - flex
  
```less
#parent{
    height: 150px;
    line-height: 150px;
    font-size: 0; // 消除幽灵空白节点的bug
}
// 默认是基线对齐，改为middle
img#son{
  vertical-align: middle;
}
```  

- 水平垂直居中

```js
// 如果是button 
居中元素改成行内或行内块级即可

// 视窗居中 IE9+
#son{
	/*0如果去掉，则会多出滚动条并且上下都是50vh的margin。如果去掉就给body加上overflow:hidden;*/
    margin: 50vh auto 0;  
    transform: translateY(-50%);
}
```

# 常用布局

- 两列布局

```jsx
<body>
  <div class="fl w-20">左列定宽</div>
  <div class="ml-20">右列自适应</div>
</body>

<body>
<div class="pl-20">
    <div class="fl -ml-20">左列自适应</div>
    <div class="fr">右列定宽</div>
</div>
</body>

// fix版 why??
<body>
  <div class="fr">左列定宽</div>
  <div class="fr -ml-20 fix">
      <div class="ml-20">右列自适应</div>
  </div>
</body>

// overflow-hidden -> bfc
<body>
  <div class="fl">左列定宽</div>
  <div class="fr overflow-hidden">右列自适应</div>
</body>

// 一列不定 一列自适应
<body>
  <div class="fl mr-10">左列定宽</div>
  <div class="overflow-hidden">右列自适应</div>
</body>

<body>
  <div class="overflow-hidden">左列定宽</div>
  <div class="fr ml-10">右列自适应</div>
</body>



// 表格布局 @deprecated 自动分配
<body class="l-table">
    <div class="table-cell w-20">左列定宽</div>
    <div class="table-cell">右列自适应</div>
</body>

// 绝对布局
<body>
  <div class="relative">
      <div class="absolute" style="top:0;left: 0;">左列定宽</div>
      <div class="absolute" style="top:0;left: 20px;">右列自适应</div>
  </div>
</body>

<body>
  <div class="relative">
      <div class="absolute" style="top:0;left: 0;right:20px;">左列定宽</div>
      <div class="absolute" style="top:0;right:0;">右列自适应</div>
  </div>
</body>

// flex
<div class="flex">
    <div class="w-20">左列定宽</div>
    <div style="flex:1;">右列自适应</div>
</div>

// grid
<div class="grid" style="grid-template-columns: 100px auto; ">
    <div id="left">左列定宽</div>
    <div id="right">右列自适应</div>
</div>

<body>
<div id="parent" style="grid-template-columns: auto 1fr;">
    <div class="mr-10">左列不定宽</div>
    <div>右列自适应</div>
</div>
</body>
```

- 三列布局

```jsx
<body>
<div class="min-w-310">
    <div class="fl w-100 mr-10">左列定宽</div>
    <div class="fl w-200">中间定宽</div>
    <div class="ml-320">右列自适应</div>
</div>
</body>

<body>
<div class="min-w-310">
    <div class="fl w-100 mr-10">左列定宽</div>
    <div class="fl w-200">中间定宽</div>
    <div class="overflow-hidden">右列自适应</div>
</div>
</body>

// 表格布局
<body>
<div class="l-table" style="margin: -10px 0;border-spacing: 10px;">
    <div class="table-cell w-100">左列定宽</div>
    <div class="table-cell w-200">中间定宽</div>
    <div class="table-cell">右列自适应</div>
</div>
</body>

// flex
<body>
<div class="flex">
    <div class="w-100 mr-10">左列定宽</div>
    <div class="w-100 mr-10">中间定宽</div>
    <div style="flex:1;">右列自适应</div>
</div>
</body>

// Grid
<body>
<div class="grid" style="grid-template-columns: 100px 200px auto;">
    <div class="mr-10">左列定宽</div>
    <div class="mr-10">中间定宽</div>
    <div>右列自适应</div>
</div>
</body>

// 绝对布局
<body>
<div class="relative">
    <div id="left" class="absolute" style="top:0;left:0;">左列定宽</div>
    <div id="center" class="ml-100 mr-100">中间自适应</div>
    <div id="right" class="absolute" style="top:0;right:0;">右列定宽</div>
</div>
</body>
```

- 圣杯与双飞翼

  - 圣杯布局 中间栏为两边腾开位置, 双飞翼布局则反之
  - 聊聊为什么淘宝要提出「双飞翼」布局 <https://juejin.im/post/5a09570c6fb9a045167caf21>

```html
<!-- 流体 -->
<div class="container">
    <div class="left"></div>
    <div class="right"></div>
    <div class="main"></div>
</div>

<!-- 圣杯 -->
<div class="container">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
</div>

<!-- 双飞翼 -->
<div id="header"></div>
<div>
  <div id="center" class="fl border-box">
      <div id="center-box" style="margin: 0 220px 0 120px"></div>
  </div>
  <div id="left" class="relative fl -ml-100"></div>
  <div id="right" class="relative fl -ml-200"></div>
</div> 
<div id="footer"></div>
```

- 自适应布局

  - <https://juejin.im/post/5a22d0086fb9a0451a7631ee>
  - 使用IE盒模型box-sizing: border-box
  - 垂直自适应 <https://www.cnblogs.com/qingkong/p/4448945.html>

- 响应式布局

```javascript
counter-reset: 属性创建或者重置一个或多个计数器；
counter-increment: 属性递增一个或多个计数器值；
content: 与:before 及:after 伪元素配合使用，来插入生成内容。
```

- 多列布局

```jsx
<body>
<div id="parent">
    <div class="column">1 <p>我是文字我是文字我输文字我是文字我是文字</p></div>
    <div class="column">2 <p>我是文字我是文字我输文字我是文字我是文字</p></div>
    <div class="column">3 <p>我是文字我是文字我输文字我是文字我是文字</p></div>
    <div class="column">4 <p>我是文字我是文字我输文字我是文字我是文字</p></div>
    <div class="column">5 <p>我是文字我是文字我输文字我是文字我是文字</p></div>
    <div class="column">6 <p>我是文字我是文字我输文字我是文字我是文字</p></div>
</div>
</body>

#parent {
    height: 500px;
    display: grid;
    grid-template-columns: repeat(6,1fr);  /*6就是列数*/
}
```

- 全屏布局

```jsx
<body>
<div id="parent">
    <div id="top" class="absolute h-100" style="top:0;left:0;right:0;">top</div>
    <div id="left" class="absolute w-200" style="top:100px;left:0;bottom:50px;">left</div>
    <div id="right" class="absolute overflow-auto" style="left:200px;right:0;top:100px;">right</div>
    <div id="bottom" class="absolute h-50" style="left:0;right:0;bottom:0;">bottom</div>
</div>
</body>

<style>
html, body, #parent {height: 100%;overflow: hidden;}
</style>

// flex

// Grid
```

# 响应式布局

- 阈值

```js
// ant-design
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}

// Bootstrap
{
  xs, // 小屏幕手机
  sm: '768px', // 小屏幕\平板
  md: '992px', // 中等屏幕|桌面显示器
  lg: '1200px' // 大屏幕|大桌面显示器
}

// UIkit
{
  s, '640px',
  m: '960px',
  l: '1200px',
  xl: '1600px'
}
```

- 栅格布局

```less
/*生成栅格系统*/
@media screen and (max-width: 768px){
  .generate-columns(12);     /*此处设置生成列数*/
  .generate-columns(@n, @i: 1) when (@i <= @n) {
    .column-xs-@{i} {
      width: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i+1));
  }
}
@media screen and (min-width: 768px){
  .generate-columns(12);    /*此处设置生成列数*/
  .generate-columns(@n, @i: 1) when (@i <= @n) {
    .column-sm-@{i} {
      width: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i+1));
  }
}
div[class^="column-xs-"]{
	float: left;
}
div[class^="column-sm-"]{
	float: left;
}
```

- 流式布局 = 等比例缩放 + 百分比

  - 流式图片

- 内外边距问题视口

- 媒体查询

- 20个响应式网页设计中的"神话"误区 <https://www.yrucd.com/25813.html>

  - 响应式网页设计 = 移动端优化
  - 不是每个人都看到了响应式网页设计的价值
  - SEO对响应式网页的支持非常好，很多搜索引擎发现你的网站没有针对手机优化，就降低你的网站排名

# 响应式布局再思考

- 响应式布局是有成本的
- 而且大多数时候不需要
- 不见得比固定布局优越, 有些方面还是需要传统布局

# flex | flexbox

- 阮一峰
  - <http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html>
  - <http://www.ruanyifeng.com/blog/2015/07/flex-examples.html>

# Grid

- 网格布局

# 样式控制 | 节流与去抖

- <https://juejin.im/post/5a813b4a5188257a6854d26e>

- 自适应内部元素

- 精确控制表格列宽

  - CSS计算好 100%
  - JS算法

- 根据兄弟元素的数量来设置样式

- 满幅的背景 定宽的内容

- 紧贴底部的页脚


# 预处理与后处理语言

> 但并不想多出一门CSS层面的编程语言

- css -> sass|less -> postcss -> css in js

- postcss <https://www.postcss.com.cn/>
- webpack + autoprefix

# Sass方案

- sass与scss <http://sass.bootcss.com/docs/scss-for-sass-users/>
- Sass和Compass必备技能之Compass @deprecated <https://www.imooc.com/learn/371>
- sass样式库

  - sassCore <https://github.com/marvin1023/sassCore>
  - bourbon <https://github.com/thoughtbot/bourbon>

    - A Lightweight Sass Tool Set
- sass进阶 <https://www.imooc.com/learn/436>

```javascript
// scss 与sass
SCSS 是 Sass 3 引入新的语法，
其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。
也就是说，任何标准的 CSS3 样式表都是具有相同语义的有效的 SCSS 文件。
另外，SCSS 还能识别大部分 CSS hacks（一些 CSS 小技巧）和特定于浏览器的语法，
例如：古老的 IE filter 语法。
```

# CSS模块化

- styled-components

  - <https://www.styled-components.com/>

- 开源库

  - emotion <https://github.com/emotion-js/emotion>


# web components

- webcomponents-the-right-way https://github.com/mateusortiz/webcomponents-the-right-way
- web components 

  - modular-future-web-components <http://css-tricks.com/modular-future-web-components/>
  - <https://github.com/ruanyf/css-modules-demos> 示例
  - <https://github.com/css-modules/css-modules/blob/master/docs/get-started.md>
  - <https://github.com/ruanyf/webpack-demos> (webpack教程)

```javascript
// 局部作用域
<h1 class="_3zyde4l1yATCOkgn-DBWEL">
  Hello World
</h1>

._3zyde4l1yATCOkgn-DBWEL {
  color: red;
}
```

# 封装样式库

- 编写自己的代码库 https://juejin.im/post/5a0c18196fb9a045023b2ddf

- 低级css | 助手类

  - basscss
  - tychyons
  - 百度开源 基于less的mixin <https://github.com/ecomfe/est>
  - sassCore 实用scss库 
    - sandal https://github.com/marvin1023/sandal
    - <https://github.com/marvin1023/sassCore>
  - corpus https://github.com/jamiewilson/corpus

- 常用CSS

  - 月报常用CSS <https://github.com/jsfront/src/blob/master/css.md>
  - CSS常用Mixin封装 <https://juejin.im/post/5a31f53f51882555cc41deda>
  - CSS清单 <https://juejin.im/post/59ae076b6fb9a0248e5ce689>

    - 抖动分析 <https://juejin.im/entry/59ae15126fb9a0247d4f6d16>
    - A Cross-end HTML5 Game <https://github.com/hiloteam/Hilo>
