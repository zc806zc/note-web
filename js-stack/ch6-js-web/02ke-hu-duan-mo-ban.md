#### **客户端模板引擎**
* 基础
~~~
// JS方法
function myFunction()
{
var obj=document.getElementById("h01");
obj.innerHTML="Hello jQuery";
}
onload=myFunction;

// JQuery方法
function myFunction() {
$("#h01").html("Hello jQuery");
}
$(document).ready(myFunction);

上面代码的最后一行，HTML DOM 文档对象被传递到 jQuery ：$(document)。
当您向 jQuery 传递 DOM 对象时，jQuery 会返回以 HTML DOM 对象包装的 jQuery 对象。

jQuery 函数会返回新的 jQuery 对象，其中的 ready() 是一个方法。
由于在 JavaScript 中函数就是变量，因此可以把 myFunction 作为变量传递给 jQuery 的 ready 方法。
不能在 jQuery 对象上使用 HTML DOM 的属性和方法

~~~

* Prototype
~~~
与 jQuery 不同，Prototype 没有用以取代 window.onload() 的 ready() 方法。相反，Prototype 会向浏览器及 HTML DOM 添加扩展。

prototype方法

function myFunction() {
$("h01").insert("Hello Prototype!");
}
Event.observe(window,"load",myFunction);

~~~

* MooTools
* 其他框架
~~~
YUI - Yahoo! User Interface Framework，
涵盖大量函数的大型库，从简单的 JavaScript 功能到完整的 internet widget。

Ext JS - 可定制的 widget，用于构建富因特网应用程序（rich Internet applications）

Dojo - 用于 DOM 操作、事件、widget 等的工具包。

script.aculo.us - 开源的 JavaScript 框架，针对可视效果和界面行为。

UIZE - Widget、AJAX、DOM、模板等等。
~~~

* 客户端模板引擎的使用
~~~
+ 主要应用于那些单页Web应用程序
+ 动态更新页面内容 JS+HTML 但易混淆
+ 通过Ajax动态加载HTML 可视化/DOM的更新 标记重复下载
+ 应用模板(特定占位符 被数据内容替代)
+ 体验先不依赖库实现 eg.regex.replace()
+ 使用logic-less[Mustache.js](https://github.com/janl/mustache.js)
+ 使用[Handlebars.js](http://handlebarsjs.com/)
+ 替代引擎库
+ [EJS](http://www.embeddedjs.com) 远程JSON文件处理时的优势
+ Underscore.js(Backbone.js MVC)
+ SEO有关处理
+ 网页URL原则 - 一个URL表示的应该是一个对象或一块内容，并不是整个网页应用程序
+ 可进入独立特定的URL, JS防止链接或表单引起的页面刷新
+ Ajax 使用HTML5 History API
~~~