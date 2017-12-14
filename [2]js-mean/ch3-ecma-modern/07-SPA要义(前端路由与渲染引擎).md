# 客户端模板引擎

- 基础

```javascript
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
```

- Prototype

```javascript
与 jQuery 不同，Prototype 没有用以取代 window.onload() 的 ready() 方法。相反，Prototype 会向浏览器及 HTML DOM 添加扩展。

prototype方法

function myFunction() {
$("h01").insert("Hello Prototype!");
}
Event.observe(window,"load",myFunction);
```

- MooTools
- 其他框架

```javascript
YUI - Yahoo! User Interface Framework，
涵盖大量函数的大型库，从简单的 JavaScript 功能到完整的 internet widget。

Ext JS - 可定制的 widget，用于构建富因特网应用程序（rich Internet applications）

Dojo - 用于 DOM 操作、事件、widget 等的工具包。

script.aculo.us - 开源的 JavaScript 框架，针对可视效果和界面行为。

UIZE - Widget、AJAX、DOM、模板等等。
```

- 客户端模板引擎的使用

```javascript
主要应用于那些单页Web应用程序
动态更新页面内容 JS+HTML 但易混淆
通过Ajax动态加载HTML 可视化/DOM的更新 标记重复下载
应用模板(特定占位符 被数据内容替代)
体验先不依赖库实现 eg.regex.replace()
使用logic-less[Mustache.js](https://github.com/janl/mustache.js)
使用[Handlebars.js](http://handlebarsjs.com/)
替代引擎库
[EJS](http://www.embeddedjs.com) 远程JSON文件处理时的优势
Underscore.js(Backbone.js MVC)
SEO有关处理
网页URL原则 - 一个URL表示的应该是一个对象或一块内容，并不是整个网页应用程序
可进入独立特定的URL, JS防止链接或表单引起的页面刷新
Ajax 使用HTML5 History API
```

# 前端路由库

- <https://github.com/browserstate/history.js>
- 前端路由的两种实现原理

  - <https://segmentfault.com/a/1190000007238999>
  - History API
  - hash

```javascript
function Router() {
  this.routes = {};
  this.currentUrl = '';
}
Router.prototype.route = function (path, callback) {
  this.routes[path] = callback || function () {}; // 此处将执行并赋值
};
Router.prototype.refresh = function () {
  this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl](); // 执行
};
Router.prototype.init = function () {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();


var content = document.querySelector('body');
function changeBgColor(color) {
  content.style.backgroundColor = color;
}

Router.route('/', function () {
  changeBgColor('white');
});
Router.route('/orange', function () {
  changeBgColor('orange');
});
Router.route('/purple', function () {
  changeBgColor('purple');
});
```

# SPA单页面应用

- 如何选择合适的前端SPA框架，告别选择恐惧症<https://read.douban.com/reader/column/5945187/chapter/30511309/>

> 没有一个框架能解决所有的问题

```javascript
// jQuery
一个遗留系统。与其使用其他框架来替换，不如留着以后重写项目

// Backbone.js，脊椎连接框架
模型(models)、集合(collections)、视图(views)的结构
使用 Require.js 来管理依赖；
使用 jQuery 来管理 DOM；
使用 Mustache 来作为模板。
它可以和当时流行的框架，很好地结合到一起。

无法满足复杂的前端应用，
如 Model 模型比较简单，要处理好 View 比较复杂。
除此，还有更新 DOM 带来的性能问题。

// Angular 2 一站式提高生产力
声明式编程应该用于构建用户界面以及编写软件构建，
而命令式编程非常适合来表示业务逻辑

使用 Ionic 来创建混合应用
在应用运行的过程中，需要不断地操作 DOM，会造成明显的卡顿。
对于 WebView 性能较差或早期的移动设备来说，这就是一个致命伤。
Angular 2，它使用 Zone.js 实现变化的自动检测

// React，组件化提高复用
采用 Virtual DOM 则会对需要修改的 DOM 进行比较（DIFF），
从而只选择需要修改的部分。
除了编写应用时，不需要对 DOM 进行直接操作，提高了应用的性能。
React 还有一个重要思想是组件化，即 UI 中的每个组件都是独立封装的。

JSX 模板，即在 JS 中编写模板，还需要使用 ES 6

只是一个 View 层，它是为了优化 DOM 的操作而诞生的
我们还需要路由库、执行单向流库、web API 调用库、测试库、依赖管理库等等

React Native、React VR

// Vue.js，简单也是提高效率
渐进式框架，专注于MVVM 模型的 ViewModel 层。
Vue.js 不仅简单、容易上手、配置设施齐全，同时拥有中文文档。

Vue.js 也使用了 Virtual DOM、Reactive 及组件化的思想，
可以让我们集中精力于编写应用，而不是应用的性能。

 Vuex 、 VueRouter
```

- 2016 年的轻量级 JS 框架和库

  - <https://zhuanlan.zhihu.com/p/24598210>
  - <https://juejin.im/post/58c5e39c8ac24707200a6cff?utm_source=gold_browser_extension>
