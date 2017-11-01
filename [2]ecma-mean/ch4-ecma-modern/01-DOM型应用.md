# **jQuery基础**

- 网站

  - 插件库 <http://www.jq22.com>
  - jquery官网 <http://jquery.com>
  - 选择器手册 <http://www.runoob.com/jquery/jquery-ref-selectors.html、>

- 内容

  - DOM操作
  - ajax
  - 模版
  - css动画
  - 选择符引擎
  - javascript微型框架或jQuery的定制版

- CDN

```javascript
许多用户在访问其他站点时，
已经从百度等加载过 jQuery，
当他们访问您的站点时，会从缓存中加载 jQuery，减少加载时间。

同时，大多数 CDN 都可以确保当用户向其请求文件时，
会从离用户最近的服务器上返回响应，提高加载速度。
```

- jQuery对象

```javascript
[0] DOM对象
length 内部数组元素的个数
__proto__ 查看对象原型
```

- 常用方法

```javascript
html() text()
元素遍历查找
样式结点操作等等
常用事件
页面加载时间
事件绑定和切换
动画效果

// BootStrap有关
bootstrap btn-block // 使其成为块级元素
不要忘记加class="row"
<div class="well"></div> // 视觉深度

// Jq动画
jQuery + Animate.css
$("button").prop("disabled", true);
$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");
$("#target1").parent().css("background-color", "red");

$("#right-well").children().css("color", "red");
$(".target:nth-child(3)").addClass("animated bounce");
```

- [jQuery插件](http://plugins.jquery.com/)

  - [jQuery validate](http://www.runoob.com/jquery/jquery-plugin-validate.html) 表单验证

```javascript
// 插件机制
封装jQuery对象方法
定义全局函数
自定义选择器

jQuery Treeview 树形菜单
jQuery Autocomplete 根据用户输入值进行搜索和过滤
JQuery Accordian 折叠框
jQuery Message 不用点击自动消失的提示框？？
jQuery Password Validation 密码验证
jQuery Prettydate 为表单提供了强大的验证功能，让客户端表单验证变得更简单
jQuery Tooltip 取代原生的工具提示框，可自定义
```

- 防止冲突的方法

```javascript
// 其他一些 JavaScript 框架
MooTools Backbone Sammy
Cappuccino YUI  prototype
Knockout JavaScript MVC
Google Web Toolkit、Google Closure、Ember、Batman 以及 Ext JS

// 冲突的处理措施
采用 别名
只在函数内用$

// solution 1
var jq = $.noConflict();
jq(document).ready(function(){
    jq("button").click(function(){
        jq("p").text("jQuery 仍然在工作!");
    });
});

// solution 2
$.noConflict();
jQuery(document).ready(function($){
    $("button").click(function(){
        $("p").text("jQuery 仍然在工作!");
    });
});
```

- [高效的jQuery代码编写技巧总结](http://gcdn.gcpowertools.com.cn/showtopic-28514-1-3.html?utm_source=gold.xitu.io&utm_medium=referral&utm_campaign=20170222)

```javascript
// 使用匈牙利命名法

在变量前加$前缀，便于识别出jQuery对象

var $first = $ (' #first' );  
var $second = $ (' #second' ),  
var value = $first.val ( );

// 使用on  
$first.click (function ( ){  
} );  
$first.hover (function ( ){  
} )

// 建议  
$first.on ('click',function ( ){  
} )

$first.on ('hover',function ( ){  
} )

// 选择短路求值  
// 糟糕  
function initVar ($myVar ) {  
    if (!$myVar ) {  
        $myVar = $ (' #selector' );  
    }  
}

// 建议  
function initVar ($myVar ) {  
    $myVar = $myVar  | | $ (' #selector' );  
}

// 选择捷径  
if (collection.length > 0 ){..}  
// 建议  
if (collection.length ){..}

// 繁重的操作中分离元素  
// 糟糕  
var  
    $container = $ (" #container" ),  
    $containerLi = $ (" #container li" ),  
    $element = null;  
$element = $containerLi.first ( );  
//... 许多复杂的操作

// better  
var  
    $container = $ (" #container" ),  
    $containerLi = $container.find ("li" ),  
    $element = null;  
$element = $containerLi.first ( ).detach ( );  
//... 许多复杂的操作  
$container.append ($element );

// 使用子查询缓存的父元素 find

// 避免通用选择符  
$ ('.container >  *' );  
// 建议  
$ ('.container' ).children ( );

// 坚持最新版本
```

# jQuery UI

- 基础

  - [主题下载](http://jqueryui.com/themeroller/)
  - [upgrade-guide](http://jqueryui.com/upgrade-guide/)
  - [手册](http://www.runoob.com/jqueryui/jqueryui-api.html)

```javascript
一组用户界面交互、特效、小部件及主题
组件间相对独立，可按需加载，避免浪费带宽拖慢网页打开速度
20 种预设主题 + 60 项可配置样式 + 24 种背景纹理(约...)
完整汉化
部分组件 Bugs 较多，不能达到企业级产品开发要求
组件间 API 缺乏协调，缺乏配合使用帮助
相对于 Dojo、YUI、Ext JS 等成熟产品，可用控件较少，无法满足复杂界面功能要求
jQuery UI 的版本是配合特定的 jQuery 版本设计的
```

- API内容

```javascript
特效 支持颜色动画和 Class 转换 提供了一些额外的 Easings
特效核心 jquery.ui.effect.js 提供
鼠标交互 拖拽...
重载了几个内置的 jQuery 方法，以提供额外的功能。
增加了便利性的一些简单方法 异步聚焦到一个元素
选择器
主题：一个强大的 CSS 框架 采用共享标记公约，便于插件社区的代码集成
UI核心 jquery.ui.core.js
实用工具 jQuery.widget.bridge() 中介...
小部件 扩展和调用小部件
```

- 工作原理

```javascript
生命周期
只要是颜色、背景图像、图标等。
所以这些是 "安全的" 样式，不会影响到插件的功能

theme.css(观感) + 具体的样式表(尺寸、内边距、外边距、定位、浮动)
为了易于维护，建议只更改 ui.theme.css 文件和图像
```

- 部件库： 一致的API 尽可能多的选项定义 defaults

```javascript
$.widget( "ns.plugin", {
// Default options.
options: {
param1: "foo",
param2: "bar",
param3: "baz"
},
_create: function() {
// Options are already merged and stored in this.options
// Plugin logic goes here.
}
});

首先，语境是一个对象，不是 DOM 元素。
其次，语境总是一个单一的对象，不是一个集合。

只能创建一层深的命名空间

在本章节中我们使用了 custom 命名空间。
ui 命名空间被官方的 jQuery UI 插件保留。
当创建您自己的插件时，您应该创建自己的命名空间。
这样才能更清楚插件来自哪里，属于哪个范围

所有自动添加到插件的功能都来自一个基本的小部件原型，jQuery.Widget.prototype

var bar = $.custom.progressbar( {}, $( "<div></div>" ).appendTo( "body") )
alert( bar.options.value );


// 插件有构造函数和原型的最大好处是易于扩展插件。
$.custom.progressbar.prototype.reset = function() {
this._setOption( "value", 0 );
};

_destroy() 移除实例引用 解除绑定所有使用_bind()添加的事件
部件库（Widget Factory）只是创建有状态插件的一种方式
```

# jQuery Easy UI的元素

```javascript
应用
curd应用（数据网格 + 表单）
RSS阅读器
拖放
购物车 + 课程表
菜单和按钮
布局
边框布局 → 复杂布局
折叠面板
标签页（动态添加 自动播放...）
XP左侧面板
数据网格
HTML table 转换成数据网格
添加工具栏/复选框/页脚摘要
查询 排序 冻结/动态改变列/创建列组合 行背景颜色
自定义分页
行内编辑
列运算
合并单元格
自定义视图
显示海量数据


窗口
窗口 + 工具栏
可自定义的对话框
树形菜单
异步
添加结点 创建复选框 拖放
树形网格(动态加载,添加分页,惰性加载结点)
表单
异步提交
验证
下拉框（格式化,过滤）
```
