# **BOM**

- **DOM** 文档对象模型 Document Object Model

```javascript
针对 XML 但经过扩展用于 HTML 的应用程序编程接口

DOM 并不只是针对 JavaScript 的，
很多别的语言也都实现了 DOM

SVG Scalable Vector Graphic，可伸缩矢量图

MathML（Mathematical Markup Language，数学标记语言）
SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）

// BOM 浏览器对象模型
弹出新浏览器窗口的功能；
移动、缩放和关闭浏览器窗口的功能；
提供浏览器详细信息的 **navigator** 对象；
提供浏览器所加载页面的详细信息的 **location** 对象；
提供用户显示器分辨率详细信息的 **screen** 对象；
对 **cookies** 的支持；
像 **XMLHttpRequest** 和 IE的 ActiveXObject 这样的 **自定义对象**
script
* **async** 立即下载脚本，但不应妨碍页面中的其他操作
* **异步**脚本不要在加载期间修改 DOM
* **defer** 表示脚本可以**延迟**到文档 **完全被解析和显示**之后再执行
* 最好只包含一个延迟脚本
* 只适用于外部脚本文件
* 还是按照顺序来
```

- 示例

```javascript
* <del>language type charset</del>
* <del>不要在代码中的任何地方出现 "</script>"

function sayScript(){
// alert("</script>");
alert("<\/script>"); // 正确方式
}
```

- 引子

```javascript
尚无正式标准
使JavaScript有能力与浏览器 (B)对话
```

- 基础

```javascript
// 窗口与尺寸
window.open()  close()
window.moveTo()  resizeTo() -调整尺寸

弹窗
alert confirm prompt("sometext","defaultvalue");
window.print() find()

// 兼容示例
var w=window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

//  Screen
可用宽度 screen.availWidth   

// Location
location.hostname 返回 web 主机的域名
location.pathname 返回当前页面的路径和文件名
location.port 返回 web 主机的端口 （80 或 443）
location.protocol web 协议（http:// 或 https://）
location.href 返回当前页面的 URL
location.assign() 方法加载新的文档
window.location.search()</del>
reload replace

console.log(window.location === document.location); // true

function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    //保存数据的对象
    args = {},
    //取得每一项
    items = qs.length ? qs.split("&") : [],
    item = null,
    name = null,

    value = null,
    //在 for 循环中使用
    i = 0,
    len = items.length;
    //逐个将每一项添加到 args 对象中
    for (i=0; i < len; i++){
    item = items[i].split("=");
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);
    if (name.length) {
    args[name] = value;
    }
}
return args;
}

//假设查询字符串是?q=javascript#=10
var args = getQueryStringArgs();
alert(args["q"]); //"javascript"
alert(args["num"]); //"10"

// 每次修改 location 的属性（ hash 除外），页面都会以新 URL 重新加载
//假设初始 URL 为 http://www.wrox.com/WileyCDA/
location.hash = "#section1";
location.search = "?q=javascript";
location.hostname = "www.yahoo.com";
location.pathname = "mydir";
location.port = 8080;

// 位于 reload() 调用之后的代码可能会也可能不会执行，
// 这要取决于网络延迟或系统资源等因素。
// 为此，最好将 reload() 放在代码的最后一行。
location.reload(); //重新加载（有可能从缓存中加载）
location.reload(true); //重新加载（从服务器重新加载）

// History
history.back()  
forward()

go(-1)

// Navigator
navigator 对象的信息具有误导性，
不应该被用于检测 浏览器版本，
因为navigator 数据可被浏览器使用者更改

一些浏览器对测试站点会识别错误
浏览器无法报告晚于浏览器发布的新操作系统
if (window.opera) {...some action...}

检测 IE 中的插件比较麻烦，
因为 IE 不支持 Netscape 式的插件

plugins 集合有一个名叫 refresh() 的方法

Firefox 2为 navigator 对象新增了
registerContentHandler()
和 registerProtocolHandler() 方法


txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
txt+= "<p>浏览器名称: " + navigator.appName + "</p>";
txt+= "<p>浏览器版本: " + navigator.appVersion + "</p>";
txt+= "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
txt+= "<p>硬件平台: " + navigator.platform + "</p>";
txt+= "<p>用户代理: " + navigator.userAgent + "</p>";
txt+= "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
document.getElementById("example").innerHTML=txt;

//检测插件（在 IE 中无效）
function hasPlugin(name){
  name = name.toLowerCase();
  for (var i=0; i < navigator.plugins.length; i++){
      if (navigator. plugins [i].name.toLowerCase().indexOf(name) > -1){
          return true;
      }
  }
  return false;
}

//检测 Flash
alert(hasPlugin("Flash")); // chrome -> true
//检测 QuickTime
alert(hasPlugin("QuickTime"));

//检测 IE 中的插件
function hasIEPlugin(name){
  try {
      new ActiveXObject(name);
      return true;
  } catch (ex){
      return false;
  }
}

//检测 Flash
alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));

//检测 QuickTime
alert(hasIEPlugin("QuickTime.QuickTime"));


// 综合上述两者
//检测所有浏览器中的 Flash
function hasFlash(){
var result = hasPlugin("Flash");
if (!result){
result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
}
return result;
}
//检测所有浏览器中的 QuickTime
function hasQuickTime(){
var result = hasPlugin("QuickTime");
if (!result){
result = hasIEPlugin("QuickTime.QuickTime");
}
return result;
}
//检测 Flash
alert(hasFlash());
//检测 QuickTime
alert(hasQuickTime());

navigator.registerProtocolHandler("mailto",
"http://www.somemailclient.com?cmd=%s", "Some Mail Client")
```

- 计时事件

```javascript
 setInterval()
 setTimeout()
```

- Cookies

```javascript
存储 web 页面的用户信息
存储在文本文件中

如果您设置了新的 cookie，
旧的 cookie 不会被覆盖。
新 cookie 将添加到 document.cookie中

    document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
    var x = document.cookie;
    document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/"; // 修改覆盖
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT"; // 过期时间删除 不用指定值

    function setCookie(cname,cvalue,exdays)
    {
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname)
    {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
      {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
    }

    function checkCookie()
    {
    var user=getCookie("username");
    if (user!="")
      {
      alert("Welcome again " + user);
      }
    else
      {
      user = prompt("Please enter your name:","");
      if (user!="" && user!=null)
        {
        setCookie("username",user,365);
        }
      }
    }
```

# **DOM**

```javascript
// 三个坐标
id tag class

// DOM操作
删除子元素
声名与取值

// 定位演示
var x=document.getElementById("intro");
var y=x.getElementsByTagName("p");  // div里的p
document.write(y[0].innerHTML);  // 注意0

// x=document.getElementsByClassName("intro");

// 指定属性
document.getElementById("p1").innerHTML="新文本!";
document.getElementById("image").src="landscape.jpg";
document.getElementById("p2").style.fontFamily="Arial";

// 移除子元素
var parent=document.getElementById("div1");
var child=document.getElementById("p1");
parent.removeChild(child);

// 确定父子关系才能删除的
var child=document.getElementById("p1");
child.parentNode.removeChild(child);

// input, rather than input.value
var input_val = document.getElementById("input_val");  
get_val_btn.addEventListener("click", myFunc);
function myFunc() { alert(input_val.value); }
```

- 事件

```javascript
onload onunload 页面的加载与卸载

鼠标事件
onmouseover  onmouseout
onmousedown onmouseup onclick

onchange

监听器
可以向同一个元素中添加多个事件及事件类型
向windows添加句柄(例调整窗口时触发)
注意移除监听器
注意 on前缀

// html页面耦合
<h1 onclick="this.innerHTML='oops!'">点击!</h1>
<h1 onclick="changetext(this)">点击!</h1>
<body onload="checkCookies()">

// 联系JS中的函数
function changetext(id) {
    id.innerHTML="Ooops!";
}

// 分离
document.getElementById("myBtn").onclick = function(){
    displayDate()
};

// 监听器
document.getElementById("myBtn").addEventListener("click", displayDate);

// 对window对象的resize事件进行监听
window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = sometext;
});

// 移除监听器
element.removeEventListener("mousemove", myFunction);

// 跨浏览器兼容
var x = document.getElementById("myBtn");
if (x.addEventListener) {            
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {      // IE 8 及更早版本
    x.attachEvent("onclick", myFunction);
}

element.attachEvent(event, function);
element.detachEvent(event, function);
```

- 参考

```javascript
菜鸟教程
JavaScript DOM编程艺术
```

# **BOM与客户端检测**

- BOM 浏览器提供商会按照各自的想法随意去扩展它
- window双重角色

  - JavaScript 访问浏览器窗口的一个接口
  - ECMAScript 规定的 Global 对象

- 窗口

  - innerWidth | innerHeight | outerWidth | outerHeight
  - clientWidth 和 clientHeight
  - 关于viewport <http://quirksmode.org/mobile/viewports2.html\>
  - 弹出窗口屏蔽

- 间歇调用与超时调用

  - JavaScript 是一个单线程序的解释器，因此一定时间内只能执行一段代码
  - JavaScript 任务队列
  - 超时调用 ID 例clearTimeout(id)
  - 一般认为，使用 超**时调用**来模拟间歇调用的是一种最佳模式

- "最小公分母"策略

  - 最常见的客户端检测方法是 能力检测/特性检测
  - JavaScript 中能力检测 <http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting>
  - 能力检测不是浏览器检测
  - 怪癖检测
  - 用户代理检测navigator.userAgent -- 通过检测用户代理字符串来确定实际使用的浏览器
  - 电子欺骗 -- 浏览器通过在自己的用户代理字符串加入一些错误或误导性信息，来达到欺骗服务器的目的

- webkit

  - 至今，基于 WebKit的所有浏览器都将自己标识为 Mozilla 5.0，与基于 Gecko 的浏览器完全一样
  - 确定浏览器是否基于 WebKit 要比确定它是不是 Safari 更有价值
  - 谷歌公司的 Chrome 浏览器以 WebKit 作为呈现引擎，但使用了不同的 JavaScript 引擎
  - 移动操作系统 iOS 和 Android 默认的浏览器都基于 WebKit

- 用户代理字符串检测技术 P228

  - 识别呈现引擎
  - 识别浏览器
  - 识别平台
  - 识别windows操作系统
  - 识别移动设备
  - 识别游戏系统

  # **DOM**

  1. 针对 HTML 和 XML 文档的一个 API
  2. 应用程序编程接口

    - 一个层次化的节点树
    - 真正的跨平台、语言中立

  3. NodeList

    - 是有生命、有呼吸的对象，而不是某个瞬间的一张快照
    - hasChildNodes() 比查询 childNodes列表的 length 属性更简单
    - ownerDocument
    - appendChild() 和 insertBefore()
    - replaceChild() removeChild() , 通过 removeChild() 移除的节点仍然为文档所有，只不过在文档中已经没有了自己的位置

    - cloneNode() 方法接受一个布尔值参数，表示是否执行 深复制， 在复制之前最好先移除事件处理程序

    - normalize() 处理文档树中的文本节点

  4. 网页请求：URL 、 domain 和 referrer

  5. 特殊集合

    - document.anchors
    - document.forms
    - document.images
    - document.links

  6. **DOM 一致性检测** P259

    1. document.implementation
    2. hasFeature()

- DOM2 和 DOM3模块

  # DOM优化

- <https://juejin.im/entry/59ae19666fb9a024903aceae?utm_source=gold_browser_extension>

- DOM 性能优化

  - 网络消耗
  - DOM 在浏览器的初始化
  - DOM 的结构和动态操作
  - JS 业务逻辑

- 优化措施

  - 简化 HTML 结构（减少不必要的嵌套，尽量扁平化、语义化）

    - 使用 DIV + CSS 替代 Tables 来布局
    - 多使用 Flex Box
    - 避免使用 hr 标签来添加水平线，可使用 CSS 的 border-bottom 来代替

  - 避免重绘与回流

    - 回流可能导致整个 DOM 树的重新构造，所以是性能的一大杀手
    - 不要对元素进行 JS 动画流操作，尽量使用 CSS 动画属性，以减少回流的 Render Tree 的规模
