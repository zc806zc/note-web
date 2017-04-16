### Web Storage-数据/离线存储（做离线小游戏）

* 原理：（AppCache）从浏览器的缓存中分出来的一块缓存区，与传统的客户端应用同场竞技
* 存储类型 
  * localStorage 本地存储 上限5M
  * sessionStorage 
  * 两者的区别，以及为什么cookie可能会挂
  * 尽量不要在客户端存储敏感信息, 因为数据缓存不会加密
  * HTTP 专有 cookie 可以从浏览器或者服务器设置，但是只能从服务器端读取

```js
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

* [迷宫游戏](https://www.gitbook.com/book/luo0412/white/edit#) 来自HTML5秘籍

* File API

  * Blob 一大块数据 逐块处理
  * readAsDataURL\(\)

* IndexDB
  * 代替已经废弃但还健在的Web SQL Database
  * [IndexedDBShim](https://github.com/axemclion/IndexedDBShim)

```js
// IndexDB
对象存储空间，而不是存储在表里
支持异步API
解决并发问题

// IndexDB限制: 
要求同源 
磁盘占用问题
以及只有当浏览器中仅有一个标签页使用数据库的情况下调用 setVersion() 才能完成操作
```

* 离线存储的优点

  * 创建离线应用 离线访问
  * 超级定制缓存 性能优化
  * 改进本地存储 简单快捷

* 离线存储

  * manifest file 描述文件
  * CACHE \| NETWORK（总是服务器获取） \| FALLBACK 是否在线而互换 \| SETTING:（prefer-online）
  * 不要缓存有查询（字符串）的页面
  * 描述文件更新 加注释版本号

```js
// 进行离线检测
navigator.onLine // online| offline
```

---

### Web Socket-服务器通信（主要精力学习这个）

* 通信方式 \| 服务器放送事件
* 简单试验 [http://www.websocket.org/echo.html](http://www.websocket.org/echo.html)
* 各种语言实现
  * PHP \| [http://code.google.com/p/phpwebsocket](http://code.google.com/p/phpwebsocket)
  * Ruby \| [http://github.com/igrigorik/em-websocket](http://github.com/igrigorik/em-websocket)
  * Python \| [http://code.google.com/p/pywebsocket](http://code.google.com/p/pywebsocket)
  * .NET \| [http://superwebsocket.codeplex.com](http://superwebsocket.codeplex.com)
  * Java \| [http://jwebsocket.org/](http://jwebsocket.org/)
  * Node.js [http://github.com/miksago/node-websocket-server](http://github.com/miksago/node-websocket-server)
  * Kaazing [http://kaazing.com/products/html5-edition.html](http://kaazing.com/products/html5-edition.html)

---

### Web Geolocation-地理定位（打下酱油先）

* 地理定位
  * [Manual Geolocation 插件](http://tinyurl.com/manual-geo) 伪造位置

```js
getCurrentPosition()

position.coords.longtitude|latitude

watchPosition() // 跟踪访客移动
clearPosition()
```

---

### Web Worker-幕后工作者（不明觉厉）

* 不同的线程不能同时占用相同的内存区域，所以把费时的任务放到后台

* 花样

  * 在多个任务中重用Web Worker
  * 创建多个Web Worker
  * 在一个Web worker中创建另一个web worker

* 用处
  * 通过下载数据
  * 利用WW执行周期性任务

---

### 历史管理

* history.back\(\) \| forward\(\) \| go\(\)

* 新功能核心 - 改变URL但不刷新

  * pushState\(\)    存入新状态
  * onPopState\(\) 返回那种状态

* 出现过的解决方案 - hashbang URL

  * 创建额外页面
  * 事实证明失败了

* 相关技术
  * 服务端包含技术
  * Adobe Dreamweaver web模板功能

```js
<!-- #include file="footer.html" -->

还有 不准歧视 DreamWeaver!!
```

---

#### **新兴的 API**

* requestAnimationFrame\(\) - 创建 **平滑**的动画
* Page Visibility API - 让开发人员知道用户什么时候正在看着页面，而什么时候页面是隐藏的

* File API - 操作文件

  * FileReader - 异步文件读取机制 
  * 能读取拖放上来的文件 实现拖放上传功能
  * 使用XHR上传文件

```js
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

* Web Timing API - Web 计时 
  * 核心 - window.performance
  * 给出了页面加载和渲染过程的很多信息，对性能优化非常有价值

### 后记

```js
当然不止三剑客，我随便说说的...

// 参考
HTML5秘籍
JS高级程序设计 // 经典, 但不更新了
```



