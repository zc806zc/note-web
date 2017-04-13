#### **HTML-快速回顾**

* [HTML面试题-sandisen](http://www.jianshu.com/p/872f8fb425ce)

```js
// 浏览器内核

// 对语义化的理解
让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析

使阅读源代码的人更容易将网站分块，便于阅读、维护和理解

搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，有利于SEO

// cookies，sessionStorage 和 localStorage 的区别

// head
Apache .htaccess AddDefaultCharset UTF-8
http://www.standardista.com/html5/http-equiv-the-meta-attribute-explained

// 移动meta标记
eg. 设置全屏 不希望缩放
// 但是网站应该允许用户无限制缩放

// 移动厂商特有的值
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">                 
```

#### HTML5-工具

```js
// 开发工具
Chrome Canary(金丝雀) + Atom

// 渲染引擎与相关 
Gecko Presto Blink Bada...
Bada // 三星自行开发的移动操作系统，现被整合进Tizen

//移动视口
SceenQueri.es网站
touch-event
thumbs.js // 作为触控事件的腻子脚本

// 远程调试
web inspector // http://www.cnblogs.com/jingwei/p/4739618.html

weinre 
// npm install -g weinre
// web inspector remote PhoneGap的一部分
// 利用 Node.js + Socket

Adobe Edge  Inspector和Ghostlab ($)

Aardwolf // 调试JS
// 同步XHR实现断点

// BlackBerry10 调试器

// 仿真器与模拟器
仿真器 // 非常类似
模拟器 // 不太精确的复制设备硬件

// 在线工具
https://www.quirksmode.org/m/tests/widthtest.html // 查看影响媒体查询的重要统计数据
W3C mobileOK Checker // 检查网站是否符合最佳实践  
mobileReady // 基于上者的友好工具
Firefox Modify Headers附加组件 

// 买一部ios
// android 新/旧(2.3)两款
// Nokia Symbian OS

// 自动化测试
Jasmine // BDD
PhantonmJS/CasperJS  // 自动的前端测试
Sinon.JS // 伪造AJAX请求
// SauceLabs
```



