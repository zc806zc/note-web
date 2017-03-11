#### **jQuery基础**
+ [jquery官网](http://jquery.com/download/)
+ [选择器手册](http://www.runoob.com/jquery/jquery-ref-selectors.html)

	


```


+ 还有属性，事件，html/css,效果，遍历，杂项，ajax等

DOM操作
ajax
模版
css动画
选择符引擎
javascript微型框架或jQuery的定制版


```




+ CDN


```

许多用户在访问其他站点时，
已经从百度等加载过 jQuery，
当他们访问您的站点时，会从缓存中加载 jQuery，减少加载时间。

同时，大多数 CDN 都可以确保当用户向其请求文件时，
会从离用户最近的服务器上返回响应，提高加载速度。


```

* jQuery对象 


```

[0] DOM对象
length 内部数组元素的个数
__proto__ 查看对象原型


```


* 常用方法


```

html() text()
元素遍历查找
样式结点操作等等
常用事件
页面加载时间
事件绑定和切换
动画效果


```

* [jQuery插件](http://plugins.jquery.com/)
	* [jQuery validate](http://www.runoob.com/jquery/jquery-plugin-validate.html) 表单验证
	


```

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



* 防止冲突的方法


```

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

