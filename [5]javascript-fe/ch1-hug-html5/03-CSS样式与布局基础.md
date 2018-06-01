# CSS

- CSS-API速查表

  - <http://www.css88.com/book/css/>

- CSS规范

  - 这些CSS 命名规范将省下你大把调试时间 <https://juejin.im/post/5a6c5881518825733201daf7>

    - 不要用数据属性（data attributes）作为 JavaScript 钩子

```html
<div class="site-navigation" rel="js-site-navigation"></div>
<script type="text/javascript">
const nav = document.querySelector("[rel='js-site-navigation']")  
</script>
```

# CSS基础

- CSS查漏补缺 <https://segmentfault.com/a/1190000006242814>

- 12个HTML和CSS必须知道的重点难点问题 <https://juejin.im/post/5a954add6fb9a06348538c0d>

  - height line-height
  - position: relative absolute

- 负值之美(将一个元素的margin设置为负值，元素将会变大) <http://www.cnblogs.com/jscode/archive/2012/08/28/2660078.html>

- 伪类与伪元素

  - 伪类 <http://www.runoob.com/css/css-pseudo-classes.html>
  - 伪元素 <http://www.runoob.com/css/css-pseudo-elements.html>
  - <https://juejin.im/post/5a0029a45188254dd935cc40>
  - 计数器
  - 梯形标签页 <http://dabblet.com/gist/1345dc9399dc8e794502>

![](/static/img/css/css-books.jpg)

# CSS实用工具集

- css-protips <https://github.com/AllThingsSmitty/css-protips>
- 30-seconds-of-css <https://atomiks.github.io/30-seconds-of-css/#box-sizing-reset>
- 常用CSS集

  - 148个资源让你成为CSS专家 <https://segmentfault.com/a/1190000006689923>
  - 月报常用CSS <https://github.com/jsfront/src/blob/master/css.md>
  - 小型CSS库 <https://juejin.im/post/5a31f53f51882555cc41deda>
  - CSS清单 <https://juejin.im/post/59ae076b6fb9a0248e5ce689>

    - 抖动分析 <https://juejin.im/entry/59ae15126fb9a0247d4f6d16>
    - A Cross-end HTML5 Game <https://github.com/hiloteam/Hilo>

- 助手类CSS

  - <https://juejin.im/entry/59af8eb8f265da247a15c27f>
  - Shed.css
  - Tachyons 快速加载，高可读性，和100%响应式界面
  - Basscss 人性化命名
  - Beard 具有争议的helper类
  - shards-ui <https://github.com/DesignRevision/shards-ui>

    - 免费的现在UI工具包 Bootstrap 4 + SCSS

# CSS权重

- id声明会覆盖class
- class中的排序不重要,表中的顺序很重要

# 盒模型

- display + position + float

# BFC

- Block formatting context 块级格式化上下文

- BFC与IFC <https://segmentfault.com/a/1190000012993668>

- 哪些元素会生成BFC

  - 根元素
  - float属性不为none
  - position为absolute或fixed
  - display为inline-block, table-cell, table-caption, flex, inline-flex
  - overflow不为visible

- BFC有何用

  - 清除浮动

    - <http://www.cnblogs.com/dolphinX/p/3508869.html>
    - <https://rainylog.com/post/what-methods-of-clearfix-can-i-use/>

  - 防止 margin 重叠

  - 多栏布局的一种方式

- 元素溢出问题的解决

![](https://user-gold-cdn.xitu.io/2018/1/27/161373686b854aac?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

# 理解多层嵌套的div

- 滚动条需求

# 布局

- 各种常见布局实现+知名网站实例分析 <https://juejin.im/post/5aa252ac518825558001d5de>
- CSS布局解决方案（终结版） <https://juejin.im/entry/5aa0afd1f265da239c7aec81>
- 企业网站综合布局实战 <https://www.imooc.com/learn/147>
- 圣杯与双飞翼

  - 圣杯 中间栏为两边腾开位置
  - 双飞翼布局反之

  - <https://juejin.im/post/5a09570c6fb9a045167caf21>

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

# 移动布局方案

- <https://juejin.im/post/5a8c12935188257a6049a0a4>

# 样式控制 | 节流与去抖

- <https://juejin.im/post/5a813b4a5188257a6854d26e>

- 自适应内部元素

- 精确控制表格列宽

  - CSS计算好 100%
  - JS算法

- 根据兄弟元素的数量来设置样式

- 满幅的背景 定宽的内容

- 垂直居中 <https://www.w3.org/Style/Examples/007/center>

- 紧贴底部的页脚

# flex | flexbox

- <http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool>
- <http://www.ruanyifeng.com/blog/2015/07/flex-examples.html>

# Grid

- 网格布局

# 响应式布局

- 阈值

```html
<!-- Bootstrap -->
(xs) 超小屏幕手机，小于 768px // 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（移动优先）
sm 小屏幕\平板，大于等于 768px
md 中等屏幕|桌面显示器，大于等于 992px
lg 大屏幕|大桌面显示器，大于等于 1200px

<!-- UIkit 偏向web  -->
.uk-align-left@s
.uk-align-right@s    Only affects device widths of 640px and higher.
.uk-align-left@m
.uk-align-right@m    Only affects device widths of 960px and higher.
.uk-align-left@l
.uk-align-right@l    Only affects device widths of 1200px and higher.
.uk-align-left@xl
.uk-align-right@xl    Only affects device widths of 1600px and higher.
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

- 响应式布局是有成本的，而且大多数时候不是必需的
- 不见得比固定布局更好,有些方面绝对还是传统布局好

# 预处理与后处理语言

- postcss -> css in js
- sass | less

> 并不想多出一门CSS层面的编程语言

# Sass方案

- sass与scss <http://sass.bootcss.com/docs/scss-for-sass-users/>
- sass进阶 <https://www.imooc.com/learn/436>

- Sass和Compass必备技能之Compass(@deprecated) <https://www.imooc.com/learn/371>

- sass样式库

  - sassCore <https://github.com/marvin1023/sassCore>
  - bourbon <https://github.com/thoughtbot/bourbon>

    - A Lightweight Sass Tool Set

```javascript
// scss 与sass
SCSS 是 Sass 3 引入新的语法，
其语法完全兼容 CSS3，并且继承了 Sass 的强大功能。
也就是说，任何标准的 CSS3 样式表都是具有相同语义的有效的 SCSS 文件。
另外，SCSS 还能识别大部分 CSS hacks（一些 CSS 小技巧）和特定于浏览器的语法，
例如：古老的 IE filter 语法。
```

# CSS命名法

- css常见样式命名思想 <https://juejin.im/post/5a79545a5188257a7924875d>
- BEM
  - https://github.com/sturobson/BEM-resources

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

- Atomic

# CSS模块化

- Less、SASS -> PostCSS -> CSS in JS
- styled-components

  - <https://www.styled-components.com/>

- 开源库

  - emotion <https://github.com/emotion-js/emotion>

- web components <http://css-tricks.com/modular-future-web-components//>

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

# web components

- webcomponents-the-right-way https://github.com/mateusortiz/webcomponents-the-right-way

# POSTCSS

- <https://www.postcss.com.cn/>

# 封装样式库

- <http://ghmagical.com/article/page/id/aqy7vR3DegbG>
- 百度开源 基于less的mixin <https://github.com/ecomfe/est>
- 实用css库 <https://github.com/marvin1023/sassCore>
