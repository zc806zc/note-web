# Web Storage-数据/离线存储（做离线小游戏）

- 原理：（AppCache）从浏览器的缓存中分出来的一块缓存区，与传统的客户端应用同场竞技
- 存储类型

  - localStorage 本地存储 上限5M
  - sessionStorage
  - 两者的区别，以及为什么cookie可能会挂
  - 尽量不要在客户端存储敏感信息, 因为数据缓存不会加密
  - HTTP 专有 cookie 可以从浏览器或者服务器设置，但是只能从服务器端读取

```javascript
// cookie
大小限制 存储大量数据是低效的

// 子cookie

// IE用户数据 userData 行为
getAttribute()
setAttribute()
removeAttribute()

// cookie工具
var CookieUtil = {
    get: function(name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart
                    + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" +
            encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    unset: function(name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};

//设置 cookie
CookieUtil.set("name", "Nicholas");
CookieUtil.set("book", "Professional JavaScript");

//读取 cookie 的值
alert(CookieUtil.get("name")); //"Nicholas"
alert(CookieUtil.get("book")); //"Professional JavaScript"

//删除 cookie
CookieUtil.unset("name");
CookieUtil.unset("book");

//设置 cookie，包括它的路径、域、失效日期
CookieUtil.set("name", "Nicholas", "/books/projs/", "www.wrox.com",
new Date("January 1, 2010"));

//删除刚刚设置的 cookie
CookieUtil.unset("name", "/books/projs/", "www.wrox.com");

//设置安全的 cookie
CookieUtil.set("name", "Nicholas", null, null, null, true);

// globalStorage
globalStorage[location.host].name = "Nicholas";
var book = globalStorage[location.host].getItem("book");

// indexDB简单示例
request.onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) { //必须要检查
        console.log("Key: " + cursor.key + ", Value: " +
            JSON.stringify(cursor.value));
        cursor.
        continue (); // 移动到下一项
    } else {
        console.log("Done!");
    }
};
```

- [迷宫游戏](https://www.gitbook.com/book/luo0412/white/edit#) 来自HTML5秘籍

- File API

  - Blob 一大块数据 逐块处理
  - readAsDataURL()

- IndexDB

  - 代替已经废弃但还健在的Web SQL Database
  - [IndexedDBShim](https://github.com/axemclion/IndexedDBShim)

```javascript
// IndexDB
对象存储空间，而不是存储在表里
支持异步API
解决并发问题

// IndexDB限制:
要求同源
磁盘占用问题
以及只有当浏览器中仅有一个标签页使用数据库的情况下调用 setVersion() 才能完成操作
```

- 离线存储的优点

  - 创建离线应用 离线访问
  - 超级定制缓存 性能优化
  - 改进本地存储 简单快捷

- 离线存储

  - manifest file 描述文件
  - CACHE | NETWORK（总是服务器获取） | FALLBACK 是否在线而互换 | SETTING:（prefer-online）
  - 不要缓存有查询（字符串）的页面
  - 描述文件更新 加注释版本号

```javascript
// 进行离线检测
navigator.onLine // online| offline
```

--------------------------------------------------------------------------------

# Web Socket-服务器通信（主要精力学习这个）

- 通信方式 | 服务器放送事件
- 简单试验 <http://www.websocket.org/echo.html>
- 各种语言实现

  - PHP | <http://code.google.com/p/phpwebsocket>
  - Ruby | <http://github.com/igrigorik/em-websocket>
  - Python | <http://code.google.com/p/pywebsocket>
  - .NET | <http://superwebsocket.codeplex.com>
  - Java | <http://jwebsocket.org/>
  - Node.js <http://github.com/miksago/node-websocket-server>
  - Kaazing <http://kaazing.com/products/html5-edition.html>

--------------------------------------------------------------------------------

# Web Geolocation-地理定位（打下酱油先）

- 地理定位

  - [Manual Geolocation 插件](http://tinyurl.com/manual-geo) 伪造位置

```javascript
getCurrentPosition()

position.coords.longtitude|latitude

watchPosition() // 跟踪访客移动
clearPosition()
```

--------------------------------------------------------------------------------

# Web Worker-幕后工作者（不明觉厉）

- 不同的线程不能同时占用相同的内存区域，所以把费时的任务放到后台

- 花样

  - 在多个任务中重用Web Worker
  - 创建多个Web Worker
  - 在一个Web worker中创建另一个web worker

- 用处

  - 通过下载数据
  - 利用WW执行周期性任务

--------------------------------------------------------------------------------

# 历史管理

- history.back() | forward() | go()

- 新功能核心 - 改变URL但不刷新

  - pushState() 存入新状态
  - onPopState() 返回那种状态

- 出现过的解决方案 - hashbang URL

  - 创建额外页面
  - 事实证明失败了

- 相关技术

  - 服务端包含技术
  - Adobe Dreamweaver web模板功能

```javascript
<!-- #include file="footer.html" -->

还有 不准歧视 DreamWeaver!!
```

--------------------------------------------------------------------------------

## **新兴的 API**

- requestAnimationFrame() - 创建 **平滑**的动画
- Page Visibility API - 让开发人员知道用户什么时候正在看着页面，而什么时候页面是隐藏的

- File API - 操作文件

  - FileReader - 异步文件读取机制
  - 能读取拖放上来的文件 实现拖放上传功能
  - 使用XHR上传文件

```javascript
//文件读取
var filesList = document.getElementById("files-list");
EventUtil.addHandler(filesList, "change", function(event) {
    var info = "",
        output = document.getElementById("output"),
        progress = document.getElementById("progress"),
        files = EventUtil.getTarget(event).files,
        type = "default",
        reader = new FileReader();
    if (/image/.test(files[0].type)) {
        reader.readAsDataURL(files[0]);
        type = "image";
    } else {
        reader.readAsText(files[0]);
        type = "text";
    }
    reader.onerror = function() {
        output.innerHTML = "Could not read file, error code is " +
            reader.error.code;
    };
    reader.onprogress = function(event) {
        if (event.lengthComputable) {
            progress.innerHTML = event.loaded + "/" + event.total;
        }
    };
    reader.onload = function() {
        var html = "";
        switch (type) {
            case "image":
                html = "<img src=\"" + reader.result + "\">";
                break;
            case "text":
                html = reader.result;
                break;
        }
        output.innerHTML = html;
    };
});
```

- Web Timing API - Web 计时

  - 核心 - window.performance
  - 给出了页面加载和渲染过程的很多信息，对性能优化非常有价值

# 后记

```javascript
当然不止三剑客，我随便说说的...

// 参考
HTML5秘籍
JS高级程序设计 // 经典, 但不更新了
```

# **ch16 使HTML5 脚本编程**

- 跨文档消息传递 XDM

  - 核心是 postMessage() 方法
  - 混搭（mashup）和社交网络应用

- 拖放 API

  - 拖放事件 dragstart drag dragend
  - 顺序 dragenter -> dragover -> dragleave 或 drop
  - 自定义放置目标
  - dataTransfer getData() 和 setData()
  - dropEffect 与 effectAllowed
  - 可拖动draggable
  - 检测编解码器的支持情况 canPlayType()

- 音频和视频

  - 自定义媒体播放器

- 历史状态管理

  - hashchange
  - history.pushState()

```javascript
// 所有支持 XDM 的浏览器也支持 iframe 的 contentWindow 属性
var iframeWindow = document.getElementById("myframe").contentWindow;
iframeWindow.postMessage("A secret", "http://www.wrox.com");

// onmessage 处理程序中检测消息来源
// 可以确保传入的消息来自已知的页面
EventUtil.addHandler(window, "message", function(event){
    //确保发送消息的域是已知的域
    if (event.origin == "http://www.wrox.com"){
        //处理接收到的数据
        processMessage(event.data);
        //可选：向来源窗口发送回执
        event.source.postMessage("Received!", "http://p2p.wrox.com");
    }
});

<!-- 嵌入视频 -->
<video id="myVideo">
<source src="conference.webm" type="video/webm; codecs='vp8, vorbis'">
<source src="conference.ogv" type="video/ogg; codecs='theora, vorbis'">
<source src="conference.mpg">
Video player not available.
</video>

<!-- 嵌入音频 -->
<audio id="myAudio">
<source src="song.ogg" type="audio/ogg">
<source src="song.mp3" type="audio/mpeg">
Audio player not available.
</audio>

history.pushState({name:"Nicholas"}, "Nicholas' page", "nicholas.html");
history.replaceState({name:"Greg"}, "Greg's page");
```

# **ch17 错误处理与调试**

- 使用 Web 的绝大多数人都不是技术高手，其中甚至有很多人根本就不明白浏览器到底是什么，更不用说让他们说喜欢哪一个了
- 使用 window.onerror 事件处理程序，这种方式可以接受 try-catch 不能处理的所有错误（仅限于 IE、Firefox 和 Chrome）。
- 错误类型

  - Error
  - EvalError
  - RangeError
  - ReferenceError
  - SyntaxError
  - TypeError 在变量中保存着意外的类型时，或者在访问不存在的方法
  - URIError

- 抛出错误的时机
- 只应该捕获那些你确切地知道该如何处理的错误
- 常见的错误类型

  - 类型转换错误
  - 数据类型错误
  - 通信错误

    - 将数据发送给服务器之前，没有使用 encodeURIComponent() 对数据进行编码

- 区别致命错误和非致命错误

  - 非致命错误

    - 不影响用户的主要任务；
    - 只影响页面的一部分；
    - 可以恢复；
    - 重复相同操作可以消除错误。

  - 致命错误

    - 应用程序根本无法继续运行；
    - 错误明显影响到了用户的主要操作；
    - 会导致其他连带错误

- 建立JavaScript 错误记录系统
- 调试技术

  - 将消息记录到控制台

    - console系列
    - LiveConnect 在 JavaScript 中把消息写入到 Java 控制台

  - 将消息记录到当前页面

- 常见的 IE 错误 P518

  - 操作终止
  - 无效字符
  - 未找到成员

    - IE 中的所有 DOM 对象都是以 COM 对象，而非原生 JavaScript 对象的形式实现的

  - 未知运行时错误
  - 语法错误
  - 系统无法找到指定资源

```javascript
(function testFinally(){
  try {
      return 2;
  } catch (error){
      return 1;
  } finally {
      return 0;
  }
})();

var obj = x; // 在 x 并未声明的情况下抛出 ReferenceError
eval("a ++ b"); //抛出 SyntaxError

var o = new 10; //抛出 TypeError
alert("name" in true); //抛出 TypeError
Function.prototype.toString.call("name"); //抛出 TypeError

// 判断错误类型
try {
    someFunction();
} catch (error){
  if (error instanceof TypeError){
  // 处理类型错误
  } else if (error instanceof ReferenceError){
  // 处理引用错误
  } else {
  // 处理其他类型的错误
  }
}

// 抛出错误
throw 12345;
throw "Hello world!";
throw true;
throw { name: "JavaScript"};
throw new Error("Something bad happened.");

throw new SyntaxError("I don’t like your syntax.");
throw new TypeError("What type of variable do you take me for?");
throw new RangeError("Sorry, you just don’t have the range.");
throw new EvalError("That doesn’t evaluate.");
throw new URIError("Uri, is that you?");
throw new ReferenceError("You didn’t cite your references properly.");

// 继承 Error 来创建自定义错误类型
function CustomError(message){
  this.name = "CustomError";
  this.message = message;
}
CustomError.prototype = new Error();
throw new CustomError("My message");

// 阻止浏览器报告错误的默认行为。
window.onerror = function(message, url, line){
    alert(message);
    return false;
};

// 最好是使用 instanceof 来检测其数据类型
// 安全，非数组值将被忽略
function reverseSort(values){
  // if (values){ // 错误
  // if (values != null){ // 错误
  // if (typeof values.sort == "function"){ // 不要这样
  if (values instanceof Array){ // 问题解决了
    values.sort();
    values.reverse();
  }
}

// 定义一个处理查询字符串的函数
function addQueryStringArg(url, name, value){
  if (url.indexOf("?") == -1){
      url += "?";
  } else {
      url += "&";
  }
  url += encodeURIComponent(name) + "="
                  + encodeURIComponent(value);
  return url;
}

var url = "http://www.somedomain.com";
var newUrl = addQueryStringArg(url, "redir",
    "http://www.someotherdomain.com?a=b&c=d");
alert(newUrl);

// JS错误记录系统
function logError(sev, msg){
    var img = new Image();
    img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" +
        encodeURIComponent(msg);
}

for (var i=0, len=mods.length; i < len; i++){
  try {
      mods[i].init();
  } catch (ex){
      logError("nonfatal", "Module init failed: " + ex.message);
  }
}

// 不存在一种跨浏览器向 JavaScript 控制台写入消息的机制，
// 但下面的函数倒可以作为统一的接口
function log(message){
  if (typeof console == "object"){
  console.log(message);
  } else if (typeof opera == "object"){
  opera.postError(message);
  } else if (typeof java == "object" && typeof java.lang == "object"){
  java.lang.System.out.println(message);
  }
}

function log(message){
  var console = document.getElementById("debuginfo");
  if (console === null){
    console = document.createElement("div");
    console.id = "debuginfo";
    console.style.background = "#dedede";
    console.style.border = "1px solid silver";
    console.style.padding = "5px";
    console.style.width = "400px";
    console.style.position = "absolute";
    console.style.right = "0px";
    console.style.top = "0px";
    document.body.appendChild(console);
  }
  console.innerHTML += "<p>" + message + "</p>";
}
```
