#### **ch8、9  BOM与客户端检测**

* 基础

```js
* BOM-浏览器提供商会按照各自的想法随意去扩展它
*  <del>window 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象</del> 
* window parent top self p195
    *  在使用框架时，每个框架都有自己的 window 对象以及所有原生构造函数及其他函数的副本。每个框架都保存在 frames 集合中，可以通过位置或通过名称来访问。
* 窗口
    *  innerWidth 、 innerHeight 、 outerWidth 和 outerHeight
    *  clientWidth 和 clientHeight
    * [关于viewport](http://quirksmode.org/mobile/viewports2.html)
    * 弹出窗口屏蔽
* <del>间歇调用与超时调用</del>
    * JavaScript 是一个单线程序的解释器，因此一定时间内只能执行一段代码
    *  JavaScript 任务队列
    *  超时调用 ID 例clearTimeout(id);
    * 一般认为，使用 **超时调用** 来模拟间歇调用的是一种最佳模式。
```

* 示例   

  ~~~
  // 全局变量不能通过 delete 操作符删除，
  // 而直接在 window 对象上的定义的属性可以
  var age = 29;
  window.color = "red";
  //在 IE &lt; 9 时抛出错误，在其他所有浏览器中都返回 false
  delete window.age;
  //在 IE &lt; 9 时抛出错误，在其他所有浏览器中都返回 true
  delete window.color; //returns true
  alert\(window.age\); //29
  alert\(window.color\); //undefined

//这里会抛出错误，因为 oldValue 未定义  
var newValue = oldValue;  
//这里不会抛出错误，因为这是一次属性查询  
//newValue 的值是 undefined  
var newValue = window.oldValue;

// 跨浏览器取得窗口左边和上边的位置  
var leftPos = \(typeof window.screenLeft == "number"\) ?  
            window.screenLeft : window.screenX;  
var topPos = \(typeof window.screenTop == "number"\) ?  
            window.screenTop : window.screenY;

//将窗口移动到屏幕左上角  
window.moveTo\(0,0\);  
//将窗向下移动 100 像素  
window.moveBy\(0,100\);

// 取得页面视口的大小  
var pageWidth = window.innerWidth,  
    pageHeight = window.innerHeight;  
if \(typeof pageWidth != "number"\){  
    if \(document.compatMode == "CSS1Compat"\){  
        pageWidth = document.documentElement.clientWidth;  
        pageHeight = document.documentElement.clientHeight;  
    } else {  
        pageWidth = document.body.clientWidth;  
        pageHeight = document.body.clientHeight;  
    }  
}

// 在 Chrome中，将新创建的标签页的 opener 属性设置为 null  
// 即表示在单独的进程中运行新标签页  
var wroxWin = window.open\("[http://www.wrox.com/","wroxWindow](http://www.wrox.com/","wroxWindow)",  
"height=400,width=400,top=10,left=10,resizable=yes"\);  
wroxWin.opener = null;

// 弹出窗口是否被屏蔽  
var blocked = false;  
try {  
    var wroxWin = window.open\("[http://www.wrox.com](http://www.wrox.com)", "\_blank"\);  
    if \(wroxWin == null\){  
        blocked = true;  
    }  
} catch \(ex\){  
    blocked = true;  
}

if \(blocked\){  
    alert\("The popup was blocked!"\);  
}

//不建议传递字符串！  
setTimeout\("alert\('Hello world!'\) ", 1000\);

//推荐的调用方式  
setTimeout\(function\(\) {  
alert\("Hello world!"\);  
}, 1000\);

if \(confirm\("Are you sure?"\)\) {  
    alert\("I'm so glad you're sure! "\);  
} else {  
    alert\("I'm sorry to hear you're not sure. "\);  
}

    * <del>迁就各方的“最小公分母”策略</del>


    ```
    * 最常见的客户端检测方法是 **能力检测**/特性检测
        * [ JavaScript 中能力检测 文章](http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting)
        *  <del>能力检测，不是浏览器检测</del>
    *  怪癖检测
        * 知道浏览器存在什么缺陷
    * 用户代理检测 P222
        * 通过检测用户代理字符串来确定实际使用的浏览器
        *  navigator.userAgent
        *  电子欺骗：浏览器通过在自己的用户代理字符串加入一些错误或误导性信息，来达到欺骗服务器的目的
        * Gecko 是 Firefox 的呈现引擎
        * Safari 的呈现引擎叫 WebKit，是 Linux 平台中 Konqueror 浏览器的呈现引擎 KHTML 的一个分支
        * <del>至今，基于 WebKit的所有浏览器都将自己标识为 Mozilla 5.0，与基于 Gecko 的浏览器完全一样</del>
        * <del>确定浏览器是否基于 WebKit 要比确定它是不是 Safari 更有价值</del>
        *  谷歌公司的 Chrome 浏览器以 WebKit 作为呈现引擎，但使用了不同的 JavaScript 引擎
        *  <del>Opera 喜欢在不告知用户的情况下针对站点来设置用户代理字符串</del>
        *  移动操作系统 iOS 和 Android 默认的浏览器都基于 WebKit
    *  用户代理字符串检测技术  P228
         *  识别呈现引擎
        *   识别浏览器
        *   识别平台
        *   识别windows操作系统
        *   识别移动设备
        *   识别游戏系统

    ```


    * 示例

// 检测某个属性是否存在并不能确定对象是否支持排序。  
// 更好的方式是检测 sort 是不是一个函数。  
function isSortable\(object\){  
    return !!object.sort; // 错误  
    return typeof object.sort == "function";  
}

// 在浏览器环境下测试任何对象的某个特性是否存在，要使用下面这个函数。  
//作者：Peter Michaux  
function isHostMethod\(object, property\) {  
    var t = typeof object\[property\];  
    return t=='function' \|\|  
            \(!!\(t=='object' && object\[property\]\)\) \|\|  
            t=='unknown';  
}

result = isHostMethod\(xhr, "open"\); //true  
result = isHostMethod\(xhr, "foo"\); //false

// 如果你知道自己的应用程序需要使用某些特定的浏览器特性，  
// 那么最好是一次性检测所有相关特性，而不要分别检测  
//确定浏览器是否支持 Netscape 风格的插件  
var hasNSPlugins = !!\(navigator.plugins && navigator.plugins.length\);  
//确定浏览器是否具有 DOM1 级规定的能力  
var hasDOM1 = !!\(document.getElementById   
    && document.createElement   
    && document.getElementsByTagName\);

// 怪癖检测  
var hasDontEnumQuirk = function\(\){  
var o = { toString : function\(\){} };  
for \(var prop in o\){  
if \(prop == "toString"\){  
return false;  
}  
}  
return true;  
}\(\);  
~~~

