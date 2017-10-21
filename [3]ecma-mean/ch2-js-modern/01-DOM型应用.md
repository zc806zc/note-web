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
