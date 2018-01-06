# CSS布局基础与CSS3

- CSS布局基础

  - 速查表 <http://www.css88.com/book/css/>

  - 伪类与伪元素

    - 伪类 <http://www.runoob.com/css/css-pseudo-classes.html>
    - 伪元素 <http://www.runoob.com/css/css-pseudo-elements.html>

- CSS3

  - 背景边框
  - 形状/视觉效果
  - 字体排版
  - 用户体验

- 响应式布局

- CSS模块化

# CSS实用工具集

- 常用CSS集 <https://github.com/asd0102433/blog/blob/master/前端/css有用的收集.md>
- 20个CSS高级技巧汇总 <https://juejin.im/entry/5a1b93ee6fb9a044fa1993f2>
- 助手类CSS <https://juejin.im/entry/59af8eb8f265da247a15c27f?utm_source=gold_browser_extension>

  - Shed.css
  - Tachyons 快速加载，高可读性，和100%响应式界面
  - Basscss 人性化命名
  - Beard 具有争议的helper类

- 小型CSS库

  - <https://juejin.im/post/5a31f53f51882555cc41deda>

- bourbon <https://github.com/thoughtbot/bourbon>

  - A Lightweight Sass Tool Set

- <https://github.com/marvin1023/sassCore>

# CSS布局基础

- <https://segmentfault.com/a/1190000006689923>
- 打印优化
- 在外嵌套div

```javascript
.page-break    { page-break-before: always; }
/* put this class into your main.css file with "display:none;" */
```

- 伪元素

  - <https://juejin.im/post/5a0029a45188254dd935cc40?utm_source=gold_browser_extension>
  - 计数器
  - 梯形标签页 <http://dabblet.com/gist/1345dc9399dc8e794502>

```javascript
counter-reset: 属性创建或者重置一个或多个计数器；
counter-increment: 属性递增一个或多个计数器值；
content: 与:before 及:after 伪元素配合使用，来插入生成内容。
```

> 前端最难的不是JS，果然还是CSS...

# 结构与布局

- 盒模型 display + position + float
- BFC(Block formatting context 块级格式化上下文)

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

- 清除浮动 <http://www.cnblogs.com/dolphinX/p/3508869.html>

- 元素溢出

- 自适应布局

  - <https://juejin.im/post/5a22d0086fb9a0451a7631ee>
  - 使用IE盒模型box-sizing: border-box

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

- 关于权重

  - id声明会覆盖class
  - class中的排序不重要,表中的顺序很重要

- 负值之美(将一个元素的margin设置为负值，元素将会变大) <http://www.cnblogs.com/jscode/archive/2012/08/28/2660078.html>

- CSS清单 <https://juejin.im/post/59ae076b6fb9a0248e5ce689?utm_source=gold_browser_extension>

  - 抖动分析 <https://juejin.im/entry/59ae15126fb9a0247d4f6d16?utm_source=gold_browser_extension>
  - A Cross-end HTML5 Game <https://github.com/hiloteam/Hilo>

- 自适应内部元素

- 精确控制表格列宽

- 根据兄弟元素的数量来设置样式

- 满幅的背景 定宽的内容

- 垂直居中

- 紧贴底部的页脚

- flex

  - flex <http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool>)
  - demo <http://www.ruanyifeng.com/blog/2015/07/flex-examples.html>)

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
