#### **ch15 使用 Canvas 绘图**
~~~
总结在 canvas基础
~~~



#### **ch18 JavaScript 与 XML**
* DOMParser 类型
* XMLSerializer 类型
* 浏览器对 XPath 的支持
	* Xpath : 设计用来在 DOM 文档中查找节点的一种手段
* 浏览器对 XSLT 的支持
	* XSLT:利用 XPath 将文档从一种表现形式转换成另一种表现形式
    * XSLTProcessor 类型
~~~
var parser = new DOMParser();
var xmldom = parser.parseFromString("<root><child/></root>", "text/xml");
alert(xmldom.documentElement.tagName); //"root"
alert(xmldom.documentElement.firstChild.tagName); //"child"
var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);
var children = xmldom.getElementsByTagName("child");
alert(children.length); //2

var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmldom);
alert(xml);

// 以异步方式加载 XML 文件的典型模式如下
// 注意要使用 XML 文档变量的名称（xmldom），不能使用 this 对象。
// 原因是 ActiveX 控件为预防安全问题不允许使用 this 对象。
// 虽然可以通过XML DOM文档对象加载XML文件，
// 但公认的还是使用 XMLHttp-Request 对象比较好。
var xmldom = createDocument();
xmldom.async = true;
xmldom.onreadystatechange = function(){
if (xmldom.readyState == 4){
if (xmldom.parseError != 0){
alert("An error occurred:\nError Code: "
+ xmldom.parseError.errorCode + "\n"
+ "Line: " + xmldom.parseError.line + "\n"
+ "Line Pos: " + xmldom.parseError.linepos + "\n"
+ "Reason: " + xmldom.parseError.reason);
} else {
alert(xmldom.documentElement.tagName); //"root"
alert(xmldom.documentElement.firstChild.tagName); //"child"
var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);
var children = xmldom.getElementsByTagName("child");
alert(children.length); //2
alert(xmldom.xml);
}
}
};
xmldom.load("example.xml");
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
#### **ch24 最佳实践**
* **可维护** 的代码
	* 可理解性
	* 直观性——代码中的东西一看就能明白，不管其操作过程多么复杂。
	* 可适应性——代码以一种数据上的变化不要求完全重写的方法撰写。
	* 可扩展性——在代码架构上已考虑到在未来允许对核心功能进行扩展。
    * 可调试性
* 保证代码 **性能**
* 部署代码
	* 尽可能使用最少的 JavaScript 文件
    * **ant**
    * 验证 JSLint
    * 压缩
    	* 文件压缩
        * http压缩
        	* gzip  httpd.conf  .htaccess文件
			* mod_gzip_item_include file \.js$
* 代码约定
	* 匈牙利标记法 已失宠
* 松散耦合
	* HTML/JavaScript 耦合 例onlick
    * 解耦 CSS/JavaScript 
    	* 避免使用表达式
    * 解耦应用逻辑／事件处理程序
    	* 将应用逻辑从事件处理程序中分离的 
    * 几条原则
		* 勿将 event 对象传给其他方法；只传来自 event 对象中所需的数据；
		* 任何可以在应用层面的动作都应该可以在不执行任何事件处理程序的情况下进行；
		* 任何事件处理程序都应该处理事件，然后将处理转交给应用逻辑。
* 编程实践
	*  尊重对象所有权
    	* 不能修改不属于你的对象
    * 避免全局变量和函数
    * 避免与 null 进行比较
    * 使用常量
* 性能
	* 注意作用域
    * 优化循环
    	* 减值迭代
        * 简化终止条件
        * 简化循环体 循环体是执行最多的，所以要确保其被最大限度地优化。确保没有某些可以被很容易移出循环的密集计算。
        * 使用后测试循环
    * 展开循环
    	* Duff 装置技术
        * 如果处理的不是大数据集，一般来说并不值得
    * 避免双重解释
    	* 当使用 eval() 函数或者是Function 构造函数以及使用 setTimeout() 传一个字符串参数时都会发生这种情况
    * 较快
    	* 原生方法较快 例Math的求正弦比JS写一个好
        	* 原生方法是用诸如 C/C++之类的编译型语言写出来的
        * Switch 语句较快
        * 位运算符较快
        	* 取模，逻辑与和逻辑或
     * 最小化语言数
     	* 一个var语句要比单个变量分别声明快很多
        * 插入迭代值 var name = values[i++];
        * 使用数组和对象字面量
    * 优化DOM操作
    	* 最小化现场更新
        * 使用innerHTML 使用 inner HTML 要比使用标准 DOM 方法创建同样的 DOM 结构快得多
        * 使用 **事件代理**
        * 注意 **HTMLCollection**
        	* 保存变量，避免多次循环
~~~
//用于指定数据类型的匈牙利标记法
var bFound; //布尔型
var iCount; //整数
var sName; //字符串
var oPerson; //对象

//CSS 对 JavaScript 的松散耦合
element.className = "edit";

/* JavaScript 对 CSS 的紧密耦合 */
div {
width: expression(document.body.offsetWidth - 10 + "px");
}

// 创建命名空间来组合功能
//创建全局对象
var Wrox = {};

//为 Professional JavaScript 创建命名空间
Wrox.ProJS = {};

//将书中用到的对象附加上去
Wrox.ProJS.EventUtil = { ... };
Wrox.ProJS.CookieUtil = { ... };

// 逻辑与数据隔离
var Constants = {
INVALID_VALUE_MSG: "Invalid value!",
INVALID_VALUE_URL: "/errors/invalid.php"
};
function validate(value){
if (!value){
alert(Constants.INVALID_VALUE_MSG);
location.href = Constants.INVALID_VALUE_URL;
}
}

// 避免全局查找
function updateUI(){
var doc = document;
var imgs = doc.getElementsByTagName("img");
for (var i=0, len=imgs.length; i < len; i++){
imgs[i].title = doc.title + " image " + i;
}
var msg = doc.getElementById("msg");
msg.innerHTML = "Update complete.";
}

var url = window.location.href;
var query = url.substring(url.indexOf("?"));

// 优化循环
for (var i=0; i < values.length; i++){
	process(values[i]);
}

for (var i=values.length -1; i >= 0; i--){
	process(values[i]);
}

var i=values.length -1;
if (i > -1){
  do {
      process(values[i]);
  }while(--i >= 0);
}

// 更快的 Duff 装置技术
//credit: Speed Up Your Site (New Riders, 2003)
var iterations = Math.floor(values.length / 8);
var leftover = values.length % 8;
var i = 0;
if (leftover > 0){
do {
process(values[i++]);
} while (--leftover > 0);
}
do {
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
process(values[i++]);
} while (--iterations > 0);

// 正确使用innerHTML操作DOM
var list = document.getElementById("myList"),
html = "",
i;
for (i=0; i < 10; i++) {
html += "<li>Item " + i + "</li>";
}
list.innerHTML = html;
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