#### **ch1-2 前端概述**

* 概述

```js
// 概念
前端 = 前端UI + 后端的数据交互 + ... // 留下后端调用的“钩子”
质量 = 页面美感 + 操作体验 + 代码质量 // 兼具艺术气息和逻辑思维   

// 沟通能力
与UI设计师 (效果实现和代价)
与后端工程师(交互接口和传输的数据实体的结构)

// 技能
HTML 入门容易 重点在于语义与结构
CSS 组合和继承 表现有关，所以是核心之一
编程，主要是JS

// 跨平台跨浏览器
移动设备  -> 尺寸 + 性能

// 兼容
IE7、8的兼容，H5的新特性兼容（优雅降级）
使用IE特有的条件表达式
HTML5 html5shim框架

// 调试工具
JS的执行
HTML结构变化
CSS渲染效果

HTTP请求及返回数据
模拟发起HTTP请求并查看后端返回数据
可用插件：Fiddler(HTTP请求监控和模拟)等

// 合理使用前端框架

// 国内浏览器市场
搜狗浏览器
360安全浏览器
```

* 网站重构

```js
// 建议
先易后难(命名格式->模块化）
持续测试（不要大量重构后测试）

// 问题
代码组织混乱 CSS，JS，HTML掺杂
布局随意(例用<br>增距)
HTML代码不符合标准(废弃元素 marquee 因为可以用JS实现)

性能上
没有缓存，动态加载，脚本压缩，图片压缩

// 措施
删除无用代码：不断查看上下文
即使一些误删导致了bug也是值得的

代码规范化，缩小作用域
整理基础类库 例EXT JS和Jquery的重复

模块化 
命名空间
公共方法独立
面向对象，共有私有接口

提高加载性能
CSS Sprite，合并首页背景图
延长静态资源缓存时间

// W3C指定的标准
structure HTML4.01
presentation CSS2
behavior ECMA DOM

// 合并代码文件
YUI Compresser -> Java
Web Optimization -> .NET
```

* 常用的文件组织结构

```js
--js
    --lib
    --custom.js
--css
    --lib
    --images(样式中的背景图)
    --reset.css
    --custom.js 
--resource
--index.html

// 文件命名
jquery-1.8.2.min.js
bootstrap-responsive.css
```

#### **ch3-4 HTML最佳实践**

* 标准HTML

```js
<noscript>不能用的提示信息</noscript>
<noscript><meta url=""/></noscript>

// meta
name  http-equiv content charset
name + content 描述网站信息
http-equiv + content 设置特定的http指令

自定义/注册meta
```

* 高可读性
  * [清除浮动](http://www.cnblogs.com/dolphinX/p/3508869.html)

```css
// 分隔符
不是网页内容的一部分，
应该从html中分离，使用css实现 P54

// 清除浮动时
不要有多余的div，也应该写在css P57

  <style>
      .reader li {
          text-indent: -9999px; /* 隐藏说明文字 */
      }

      .sidebar { float: left; width: 150px; }
      .content { float: right; width: 450px; }
      .clear { clear: both;}

      .clearfix {  *zoom: 1;}
      .clearfix:before,
      .clearfix:after {
          display: table;
          content: "";
      }
      .clearfix:after {
          clear: both;
      }

  </style>

<ul class="reader">
  <li class="reader-lib">lib</li>
  <li class="reader-hi spliter">hi</li>
  <li class="reader-hello spliter">you</li>
  <li class="reader-you">you</li>
</ul> 

<section>
    <div class="sidebar">side bar</div>
    <div class="content">content</div>
    <div class="clear"></div>
</section>

<section class="main clearfix">
    <div>side bar</div>
    <div>content</div>
</section>

背景图css实现, 
语义内容img标签

text-indent: -999px; //用于说明性的空标签

// 设置网页标题层级
hgroup
html编辑器可能会打乱层级
一个h1
不要跳级，必要时可以选择hide
hx不为了样式

// 设计表单
table太臃肿
fieldset legend 分组
tab顺序 tabindex

// 精简html代码
删除div span等无用的容器

过时的块状元素和行内元素

// html5元素分类
元数据 link meta base...
流式 span div 
章式 article nav aside
标题 h6 hgroup
段落 img span 
嵌入 iframe svg
交互  a button input select

// 积极拥抱HTML5
记在HTML5基础
```

#### **ch6-8 CSS最佳实践**

* CSS-高维护性

```js
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

// less sass

// reset.css
* {margin: 0; padding: 0;} // 不推荐

Eric Meyer的reset
YUI Reset CSS

h5的新标签 display:block;
padding margin border
类似em，重置，只要语义
其他元素 table ul li a:link的text-decoration

// 给CSS排序
分类 Andy Ford
Display&Flow 
Positioning
Dimensions
Margin padding borders outline
Typographic Style
Backgrounds
Other:opacity ,cursors ,Generated Conetent
// 写完后排序 CSScomb

// CSS权重
id > 类/伪类/属性选择 > 标签选择/伪对象 > 通配符

// 使用建议
不要用id选择器
减少层级
多组合少继承

// 兼容ie hack代码
可以在根元素上
<! --[if IE7]> <html class="ie7"><! [endif]-->

// em px %
使用em设置字体 -> gem
使用百分比设置尺寸
```

* CSS-高性能

```js
CSS选择器 从右到左 匹配
最右边的是关键选择器

id选择器最快但不易重用
避免使用标签选择器或单个选择器
.ref p.list div 
.ref p.list [data-link="#red"]

避免使用 * { }

避免id前加标签，因为id是唯一的
div#page_index

不要在选择符中定义太多层级

// 测试CSS开销的网站 
CSS selectors Test


// css图片处理
针对原始图片独立做一台缩略图
CSS Sprite（雪碧图） 合并成大图再定位
有利于网站风格变更，因为它们放在一起 
但性能 维护 与开发需要注意
开发后期才做


图片大小在200kb以内传输时间差不多
上下至少预留14px,左右16px的边距
背景图放在有关图最右侧

// 借助工具
合并上传的多图 -> CSS Sprite Generator 
根据选中区域生成CSS -> Sprite Cow
分析网站来生成CSS和雪碧图 -> SpriteMe

// 减少代码量
合并规则: font-size, font-style, font-family...

// 简洁属性值
p.reader-title {
color: #F3E;
font-size: .8em;
padding: 0;
}

// 共同声名重复的，单独定义特殊的 
继承，归并到父类

a,
b {
}
a {}
b {}


// chrome自带工具来查找无用样式
内边距设为负值
拼写错误
但注意其他浏览器的兼容前缀等
不使用@import -> 阻止并行下载
避免使用IE浏览器的图片滤镜和CSS表达式

// 用JS取代css工作
```

#### **ch8 CSS3最佳实践**

* 资源

  * CSS3兼容查看: caniuse.com \| CSS3 Click Chart \|  [CSS contents and browser compatibility](http://www.quirksmode.org/css/contents.html)
  * 添加浏览器前缀
    * 在线： Prefixr
    * Autoprefixer \(灵活度更高 -&gt; sublime插件\)
    * cssFx, CSS Agent, -prefix-tree
    * sass, less 的模板功能

```
// 不要过度添加前缀，例-ms-border-radius

标准定义放在最后，反正会覆盖到

// 优雅降级或兼容处理
渐变背景色 -> 单一背景色
IE的filter样式
JS实现，例框架Modernizr
HTML5建议网站: html5please
```

##### **参考**

```js
web前端最佳实践 党建
```





