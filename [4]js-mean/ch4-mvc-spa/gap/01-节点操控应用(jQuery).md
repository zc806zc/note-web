# jQuery

> jQuery在渐渐退出历史舞台，因为它已然成了规范的一部分

- 网站

  - jquery官网 <http://jquery.com>
  - 选择器手册

    - <http://www.runoob.com/jquery/jquery-ref-selectors.html>
    - <http://hemin.cn/jq/>

- 插件库

  - jq22 <http://www.jq22.com>
  - <http://www.htmleaf.com>

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

  - select操作(整理后删除) <http://blog.csdn.net/nairuohe/article/details/6307367>

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

- 高效的jQuery代码编写技巧总结

  - <http://gcdn.gcpowertools.com.cn/showtopic-28514-1-3.html?utm_source=gold.xitu.io&utm_medium=referral&utm_campaign=20170222>
  - <http://www.cnblogs.com/edison1105/archive/2012/07/31/2617518.html>

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
```

# JQuery实现类Vue的双向绑定

- <http://www.jq22.com/webqd2649>

```javascript
;(function($) {
    BindSysnc.pt = BindSysnc.prototype;
    BindSysnc.pt.init = function(selector) {
        var $allBinds = $(selector).find("[data-bind]");
        var $container = $("<div class='data-bind-contanier'></div>");
        var data = {};
        var share = new ShareSync(selector);
        for(var bindIndex = 0; bindIndex < $allBinds.length; bindIndex++) {
            var oldElement = $($allBinds[bindIndex]);
            var bindElement = oldElement.clone(true);
            var convertElement = $container.clone(true);
            convertElement.css("display", oldElement.css("display"));
            convertElement.append(bindElement);

            var dsi = $("<div data-bind-value></div>");
            bindElement.attr("data-share-excute", "false");
            bindElement.on("propertychange input focus blur DOMNodeInserted", function(e) {
                if($(e.target).attr("data-share") !== undefined) {
                    $(e.target).unbind("propertychange");
                }
                var value = $(e.target).attr("data-bind") === "value" ? $(e.target).val() : $(e.target).html();
                data[$(e.target).attr("vname")] = value;
                $(e.target).parent().children("[data-bind-value]").html(value);
                share.share(data);
            });
            convertElement.insertAfter(oldElement);
            oldElement.remove();
        }
        this.data = data;
        this.isAutoShare = false;
        var that = this;
        var timer = new TimerSimulator(function(count){
            share.share(that.data);
        },500,"test");

        this.startAutoShare = function(){
            timer.start();
        }
        this.stopAutoShare = function(){
            timer.stop();
        }

        if(this.isAutoShare){
            this.startAutoShare();
        }
    };
    BindSysnc.pt.init.prototype = BindSysnc.pt;
    /**
     * 绑定事件
     * @param {Object} selector
     */
    function BindSysnc(selector) {
        return new BindSysnc.pt.init(selector);
    }
    window.BindSysnc = BindSysnc;
    window.$B = BindSysnc;

    function ShareSync(selector) {
        this.share = function(data) {
            var $allShares = $(selector).find("[data-share]");
            for(var shareIndex = 0; shareIndex < $allShares.length; shareIndex++) {
                var oldElement = $($allShares[shareIndex]);
                var keyName = oldElement.attr("vname");
                if(oldElement.attr("data-share") === "value") {
                    oldElement.val(data[keyName])
                } else {
                    oldElement.html(data[keyName]);
                }
            }
        }
    }

    /**
     * 定时模拟器
     *
     * @version 2017-03-01
     *
     * @returns
     */
    function TimerSimulator(task, times, name) {
        /** 类名 */
        this.imClassName = "TimerSimulator";
        /**
         * 计数器
         */
        this.counter = 0;
        /**
         * taskId
         */
        this.taskId = null;
        /**
         * 时间
         */
        this.times = times;
        /**
         * 任务
         */
        this.task = task;
        /**定时器名称*/
        this.name = name;
        /**
         * 启动定时任务（模拟）
         */
        this.start = function start() {
            var that = this; // 保存当前对象this
            that.counter++;
            that.taskId = setTimeout(function() {
                that.start();
            }, that.times);
            if(that.task != null && typeof that.task === "function") {
                that.task(that.counter);
            }
        };
        /**
         * 终止定时任务（模拟）
         */
        this.stop = function() {
            if(this.taskId != null && this.taskId != undefined) {
                this.counter = 0;
                clearTimeout(this.taskId);
            }
        };
        /**
         * 暂停定时任务（模拟）
         */
        this.suspend = function() {
            if(this.taskId != null && this.taskId != undefined) {
                clearTimeout(this.taskId);
            }
        };
    };

}(jQuery));

//=====================================
$(function() {
    var b = $B("body");
    b.data.sex = 111;
        b.startAutoShare();
    setTimeout(function(){
           b.data.sex = 123124124;
        },22000);
})
//=====================================
```
