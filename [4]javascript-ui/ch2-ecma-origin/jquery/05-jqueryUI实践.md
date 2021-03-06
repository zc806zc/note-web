
# jQuery UI

- 一组用户界面交互、特效、小部件及主题
- 教程

  - <http://www.css88.com/jquery-ui-api/>
  - jquery ui主题 <http://jqueryui.com/themeroller/>
  - 升级指导 <http://jqueryui.com/upgrade-guide/>

- 特点

  - 组件间相对独立，可按需加载，避免浪费带宽拖慢网页打开速度
  - 20 种预设主题 + 60 项可配置样式 + 24 种背景纹理(约...)
  - 完整汉化

- 缺点

  - 部分组件 Bugs 较多，不能达到企业级产品开发要求
  - 组件间 API 缺乏协调，缺乏配合使用帮助
  - 相对于 Dojo、YUI、Ext JS 等成熟产品，可用控件较少，无法满足复杂界面功能要求
  - jQuery UI 的版本是配合特定的 jQuery 版本设计的

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