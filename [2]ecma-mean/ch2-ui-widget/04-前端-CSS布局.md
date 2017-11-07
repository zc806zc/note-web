# CSS学习资源

- <https://segmentfault.com/a/1190000006689923>
- 打印优化

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

# 背景与边框

- Web标准
- CSS编码技巧

- 半透明边框/多重边框/边框内圆角/连续的图像边框

- 灵活的背景定位/条纹背景/复杂的背景图案/伪随机背景

# 形状/视觉效果

- 自适应的椭圆/平行四边形/菱形图片

- 切角效果/梯形标签页

- 简单的饼图

- 单侧投影/不规则投影

  - 高光闪过 <http://www.jq22.com/webqd1500>

- 染色效果/毛玻璃/折角效果

  - 纸张效果 <http://www.jq22.com/webqd2713>
  - 优惠券 <http://www.jq22.com/webqd1778>

- DNA <http://www.jq22.com/webqd1402>

```css
.paper {
    position:relative;
    width:200px;
    height:250px;
    background:#fff;
    border:1px solid #eee;
    float:left;
    margin:10px;
    box-shadow:0 0 5px rgba(0,0,0,0.27),0 0 20px  rgba(0,0,0,.1) inset;
}
.paper::after,.paper::before {
    content:'';
    position:absolute;
    bottom:6px;
    width:100px;
    height:1px;
    z-index:-1;
    box-shadow:0 2px 12px 5px rgba(0,0,0,.3);
}
.paper::after {
    left:4px;
    transform:rotate(-6deg);
}
.paper::before {
    right:4px;
    transform:rotate(6deg);
}
```

# 字体排版

- 连字符断行/插入换行/调整tab的宽度

- 连字/华丽的&符号/自定义下划线

- 文本行的斑马条纹

- 现实中的文字效果/环形文字

  - 文字颜色动态渐变 <http://www.jq22.com/webqd2810>

```css
div {
    width:600px;
    height:300px;
    margin:0 auto;
    margin-top:100px;
    font-size:80px;
    text-align:center;
    background:-webkit-linear-gradient(left,#147B96,#E6D205 25%,#147B96 50%,#E6D205 75%,#147B96);
    color:transparent;
    -webkit-background-clip:text;
    background-size:200% 100%;
    animation:masked-animation 1s infinite linear;
}
@-webkit-keyframes masked-animation {
    0% {
    background-position:0 0;
}
100% {
    background-position:-100% 0;
}
}
```

# 用户体验

- 适合的鼠标光标
- 扩大可点击区域
- 自定义复选框
- 弱化背景

  - 使用阴影
  - 使用模糊

- 滚动提示

- 交互式的图片对比控件

# CSS3

- [10个优秀的CSS和JS Logo动画示例](https://zhuanlan.zhihu.com/p/26155443) | [纯CSS制作各种图案](https://segmentfault.com/a/1190000002780453)

- [小丑汽车技术](https://github.com/estelle/clowncar) 把多张大图片装进一个svg

- CSS3 - 把下一代CSS试验性地拆分成一组组独立的标准模块，并且是还在试验和反馈的循环

- 查看兼容现状 <http://tinyurl.com/css3-stages>

  - Modernizr 检测支持情况

  - -prefix-free自动添加前缀 <http://leaverou.github.io/prefixfree>

  - 用浏览器支持的交集

- 动画

- 移动性能 - 标准反模式

- Web字体

  - Font Squirrel <http://www.fontsquirrel.com> 推荐Callographic,Novelty,Retro
  - Webfont Generator

  - Google Fonts <http://www.google.com/fonts>

  - 还面临的问题 打印优化问题 + 版权问题

## 响应式布局

- 流式布局 = 等比例缩放 + 百分比

  - 流式图片

- 内外边距问题视口

- 媒体查询

- 20个响应式网页设计中的"神话"误区 <https://www.yrucd.com/25813.html>

  - 响应式网页设计 = 移动端优化
  - 不是每个人都看到了响应式网页设计的价值
  - SEO对响应式网页的支持非常好，很多搜索引擎发现你的网站没有针对手机优化，就降低你的网站排名 -

## 实用工具集

- Bulma
- 常用CSS集 <https://github.com/asd0102433/blog/blob/master/前端/css有用的收集.md>
- <https://juejin.im/entry/59af8eb8f265da247a15c27f?utm_source=gold_browser_extension>

  - Shed.css
  - Tachyons 快速加载，高可读性，和100%响应式界面
  - Basscss 人性化命名
  - Beard 具有争议的helper类

## 书单

```javascript
CSS揭秘
```

# CSS最佳实践

- CSS-高维护性

```javascript
// css分为通用类和业务类
// 参考结构如下

css/
    lib/
    reader/
        reader.header.css
        reader.content.css
        reader.footer.css
        reader.action.css // 操作类
    common.css
    default.css
    ie-style.css // 单独写


// 重置css
Eric Meyer的reset
YUI Reset CSS

// 给CSS排序
分类 Andy Ford
Display&Flow
Positioning
Dimensions
Margin padding borders outline
Typographic Style
Backgrounds
Other:opacity ,cursors ,Generated Conetent

// CSS权重
id > 类/伪类/属性选择 > 标签选择/伪对象 > 通配符

// 使用建议
不要用id选择器
减少层级
多组合少继承

// em px %
使用em设置字体 -> gem rem
使用百分比设置尺寸
```

- CSS-高性能

```javascript
CSS选择器是从右到左 匹配
最右边的是关键选择器

避免使用标签选择器或单个选择器
.ref p.list div
.ref p.list [data-link="#red"]

避免使用 * { }

避免id前加标签，因为id是唯一的
例如div#page_index

不要在选择符中定义太多层级

// 测试CSS开销的网站
CSS selectors Test

// css图片处理
图片大小在200kb以内传输时间差不多
上下至少预留14px,左右16px的边距
背景图放在有关图最右侧

// 借助工具
合并上传的多图 -> CSS Sprite Generator
根据选中区域生成CSS -> Sprite Cow
分析网站来生成CSS和雪碧图 -> SpriteMe

// 简洁属性值
p.reader-title {
  color: #F3E;
  font-size: .8em;
  padding: 0;
}


// chrome自带工具来查找无用样式
不使用@import -> 阻止并行下载
避免使用IE浏览器的图片滤镜和CSS表达式
```

# CSS3最佳实践

- 资源

  - CSS3兼容查看: caniuse.com | CSS3 Click Chart | [CSS contents and browser compatibility](http://www.quirksmode.org/css/contents.html)
  - 添加浏览器前缀

    - 在线： Prefixr
    - Autoprefixer (灵活度更高 -> sublime插件)
    - cssFx, CSS Agent, -prefix-tree
    - sass, less 的 模板功能

```javascript
// 优雅降级或兼容处理
JS实现，例框架Modernizr
HTML5建议网站: html5please
```
