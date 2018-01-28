# Layui - 贤心

- 贤心是男的......

- 优点

  - 因为layer组件开始关注, 弹框组件非常好
  - 表格组件整体的设计极其优雅
  - 几乎自成体系
  - 社区

- 组件设计缺陷与建议

  - 表格行内编辑还不支持填充数据与动态更新
  - 表格不完全支持resize, f12以后分页会消失(估计已解决)
  - 弹框不支持滚动条，目前提供的参数是 是否屏蔽浏览器滚动条
  - 表格组件数据格式封装过于死板
  - 自成一家的模块化系统有点尴尬
  - 模板渲染引擎也有点尴尬
  - 校验规则变来变去的...  

# jQuery UI

- 基础

  - <http://www.css88.com/jquery-ui-api/accordion/>
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

# 其他

- JQuery 类似Vue.js的双向数据绑定器 <http://www.jq22.com/webqd2649>

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
