#### 数据存储

* web存储
* localStorage 本地存储 上限5M
* sessionStorage 会话存储
* 迷宫游戏
* localstorage 自己的代码存在bug，不能保存最后位置
* 但源代码[测试](http://www.prosetech.com/html5/Chapter 10/Maze.html)
* JSON编码
* JSON.stringify\(\)
* JSON.parse\(\)
* File API
* Blob 一大块数据 逐块处理
* readAsDataURL\(\)
* IndexDB\(已经废弃的Web SQL Database\)
* 创建离线应用 离线访问
* 超级定制缓存 性能优化
* 改进本地存储 简单快捷
* `data-url` 自定义数据 浏览器可忽略

### 离线应用

* manifest file 描述文件
* CACHE MANIFEST
* NETWORK 总是从服务器获取不缓存 `*`
* FALLBACK 是否在线而互换 `/`
* SETTING: prefer-online
* 不要缓存有查询字符串的页面
* 描述文件更新 加注释版本号

### 与web服务器通信

```
+ 通信的方式
+ 服务器发送事件
+ Web Socket框架
+ Web Socket
+ [简单试验](http://www.websocket.org/echo.html)
+ [PHP](http://code.google.com/p/phpwebsocket)
+ [Ruby](http://github.com/igrigorik/em-websocket)
+ [Python](http://code.google.com/p/pywebsocket)
+ [.NET](http://superwebsocket.codeplex.com)
+ [Java](http://jwebsocket.org/)
+ [node.js](http://github.com/miksago/node-websocket-server)
+ [Kaazing](http://kaazing.com/products/html5-edition.html)
```

### 地理定位、Web Worker和历史管理

* 地理定位
* [Manual Geolocation 插件](http://tinyurl.com/manual-geo) 伪造位置
* `getCurrentPosition()`
* position.coords.longtitude
* position.coords.latitude
* `watchPosition()` 跟踪访客移动
* `clearPosition()`
* Web Worker
  * 不同的线程不能同时占用相同的内存区域
  * 费时的任务 把任务放到后台
* 在多个任务中重用Web Worker
* 创建多个Web Worker
* 在一个WW里创建另一个WW
* 通过WW下载数据
* 利用WW执行周期性任务
* 会话历史
  * `history.back()` `forward()` `go()`
* 新功能核心: `pushState()` 改变URL但不刷新
* `onPopState()` 前者存入新状态 这个是返回某个状态
* 以往解决方案 hashbang URL
  * 创建额外页面
* 服务端包含技术

```
<!-- #include file="footer.html" -->
```

* Adobe Dreamweaver web模板功能

```

```

#### **ch23 离线应用与客户端存储**

* 与传统的客户端应用同场竞技
* 进行离线检测
  * navigator.onLine
  * online offline事件
* 使用离线缓存
  * appache 从浏览器的缓存中分出来的一块缓存区
* 数据存储
  * 在浏览器中保存数据
  * 尽量不要在客户端存储敏感信息，**数据缓存不会加密**
  * cookie
    * 大小限制 存储大量数据是低效的
    * 不要存储敏感数据
      * 子 cookie
    * HTTP 专有 cookie 可以从浏览器或者服务器设置，但是只能从服务器端读取
  * IE用户数据 userData 行为
    * getAttribute\(\) 
    * setAttribute\(\) 
    * removeAttribute\(\)
  * Web存储机制 Web Storage
    * sessionStorage  只保持到浏览器关闭
    * globalStorage -&gt; localStorage
  * IndexedDB 替代目前已被废弃的 Web SQL Database API
    * **对象** 存储空间，不是存储在表里
    * 异步API
    * 并发问题
      * 只有当浏览器中仅有一个标签页使用数据库的情况下，调用 setVersion\(\) 才能完成操作
    * 限制 ： 同源 磁盘占用

```js
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
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
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

#### **ch25 新兴的 API**

* 创建 **平滑**的动画
  * requestAnimationFrame\(\)
* Page Visibility API
  * 让开发人员知道用户什么时候正在看着页面，而什么时候页面是隐藏的
* Geolocation API
* File API 操作文件
  * FileReader 类型 异步文件读取机制 
  * 读取拖放的文件
  * 使用XHR上传文件
  * 实现拖放上传功能
* Web 计时 Web Timing API
  * 核心  window.performance
  * 给出了页面加载和渲染过程的很多信息，对性能优化非常有价值
* 使用 Web Workers在后台执行 JavaScript

```js
// 文件读取
var filesList = document.getElementById("files-list");
EventUtil.addHandler(filesList, "change", function(event){
var info = "",
output = document.getElementById("output"),
progress = document.getElementById("progress"),
files = EventUtil.getTarget(event).files,
type = "default",
reader = new FileReader();
if (/image/.test(files[0].type)){
reader.readAsDataURL(files[0]);
type = "image";
} else {
reader.readAsText(files[0]);
type = "text";
}
reader.onerror = function(){
output.innerHTML = "Could not read file, error code is " +
reader.error.code;
};
reader.onprogress = function(event){
if (event.lengthComputable){
progress.innerHTML = event.loaded + "/" + event.total;
}
};
reader.onload = function(){
var html = "";
switch(type){
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



