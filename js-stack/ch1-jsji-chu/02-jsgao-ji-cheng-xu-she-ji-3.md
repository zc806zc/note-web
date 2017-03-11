#### **ch15 使用 Canvas 绘图**
~~~
总结在 canvas基础
~~~

#### <del>**ch19 E4X**</del>
* E4X 本身不是一门语言，它只是 ECMAScript 语言的可选扩展
* 几个新的全局类型
	* XML ：XML 结构中的任何一个独立的部分。
	* XMLList ：XML 对象的集合。
	* Namespace ：命名空间前缀与命名空间 URI 之间的映射。
	* QName ：由内部名称和命名空间 URI 组成的一个限定名
* 其内部机制是将每一种类型（特别是XML 和 XMLList ）都映射为多个 DOM 类型
* for-each-in 循环
* 使用两个点（ .. ）表示要匹配所有后代元素，
* 使用 @ 字符表示应该返回一或多个特性。
* 星号字符（ * ）是一个通配符，可以匹配任意类型的节点。
* 所有这些查询都可以通过一组执行相同操作的方法来实现。

~~~
<script type="text/javascript;e4x=1" src="e4x_file.js"></script>
~~~


#### **ch21 Ajax 与 Comet**
* 使用 XMLHttpRequest 对象
* 使用 XMLHttpRequest 事件
* 跨域 Ajax 通信的限制
* 跨资源共享 CORS Cross-Origin Resource Sharing
* 其他跨域技术
	* 图像ping 单向
    	* 只能发送 GET 请求，
        * 无法访问服务器的响应文本
    *  JSONP
    	*  JSON with padding
		* 回调函数和数据
    * Comet 更高级的 Ajax 技术 服务器推送
    	* 有两种实现 Comet 的方式：长轮询和流
* 服务器发送事件 SSE Server-Sent Events
	* 组合 XHR 和 SSE 也是能实现双向通信的
* Web Sockets 全双工、双向通信
	* 非常适合移动应用
* ajax与comet的安全问题
    
~~~
// JSONP示例
function handleResponse(response){
alert("You’re at IP address " + response.ip + ", which is in " +
response.city + ", " + response.region_name);
}
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);

// 用 XHR 对象实现 HTTP 流的典型代码
function createStreamingClient(url, progress, finished){
var xhr = new XMLHttpRequest(),
received = 0;
xhr.open("get", url, true);
xhr.onreadystatechange = function(){
var result;
if (xhr.readyState == 3){
//只取得最新数据并调整计数器
result = xhr.responseText.substring(received);
received += result.length;
//调用 progress 回调函数
progress(result);
} else if (xhr.readyState == 4){
finished(xhr.responseText);
}
};
xhr.send(null);
return xhr;
}
var client = createStreamingClient("streaming.php", function(data){
alert("Received: " + data);
}, function(data){
alert("Done!");
});

// WebSocket简单示例
var socket = new WebSocket("ws://www.example.com/server.php");
socket.onopen = function(){
alert("Connection established.");
};
socket.onerror = function(){
alert("Connection error.");
};
socket.onclose = function(){
alert("Connection closed.");
};
~~~


#### **ch23 离线应用与客户端存储*** 
* 与传统的客户端应用同场竞技
* 进行离线检测
	*  navigator.onLine
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
    	* getAttribute() 
		* setAttribute() 
        * removeAttribute()
	* Web存储机制 Web Storage
    	* sessionStorage  只保持到浏览器关闭
        * globalStorage -> localStorage
    * IndexedDB 替代目前已被废弃的 Web SQL Database API
    	* **对象** 存储空间，不是存储在表里
    	* 异步API
    	* 并发问题
        	* 只有当浏览器中仅有一个标签页使用数据库的情况下，调用 setVersion() 才能完成操作
        * 限制 ： 同源 磁盘占用
        
~~~
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
~~~


#### **ch25 新兴的 API**
* 创建 **平滑**的动画
	* requestAnimationFrame()
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

~~~
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
~~~