#### **ch15 使用 Canvas 绘图**
~~~
总结在 canvas基础
~~~

#### **ch16 使HTML5 脚本编程**
* 跨文档消息传递 XDM
	* 核心是 postMessage() 方法
    * 混搭（mashup）和社交网络应用
* 拖放 API
	* 拖放事件  dragstart drag dragend
    * 顺序 dragenter  -> dragover -> dragleave 或 drop
    * 自定义放置目标
    * dataTransfer  getData() 和 setData()
    * dropEffect 与 effectAllowed
    * 可拖动draggable 
    * 检测编解码器的支持情况 canPlayType() 
* 音频和视频
	* 自定义媒体播放器
* 历史状态管理
	* hashchange
    * history.pushState()
~~~
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
~~~

#### **ch17 错误处理与调试**
* 使用 Web 的绝大多数人都不是技术高手，其中甚至有很多人根本就不明白浏览器到底是什么，更不用说让他们说喜欢哪一个了 
*  使用 window.onerror 事件处理程序，这种方式可以接受 try-catch 不能处理的所有错误（仅限于 IE、Firefox 和 Chrome）。
*  错误类型
	* Error
	* EvalError
	* RangeError
	* ReferenceError
	* SyntaxError
	* TypeError 在变量中保存着意外的类型时，或者在访问不存在的方法
	* URIError
* 抛出错误的时机
* 只应该捕获那些你确切地知道该如何处理的错误
* 常见的错误类型
	* 类型转换错误
	* 数据类型错误
	* 通信错误
    	* 将数据发送给服务器之前，没有使用 encodeURIComponent() 对数据进行编码
* 区别致命错误和非致命错误
	* 非致命错误
    	*  不影响用户的主要任务；
		* 只影响页面的一部分；
		* 可以恢复；
		* 重复相同操作可以消除错误。
    * 致命错误
    	* 应用程序根本无法继续运行；
		* 错误明显影响到了用户的主要操作；
		* 会导致其他连带错误
* 建立JavaScript 错误记录系统
* 调试技术
	* 将消息记录到控制台
    	* console系列
    	* LiveConnect 在 JavaScript 中把消息写入到 Java 控制台
    * 将消息记录到当前页面
* 常见的 IE 错误 P518
	* 操作终止
    * 无效字符
    * 未找到成员
    	* IE 中的所有 DOM 对象都是以 COM 对象，而非原生 JavaScript 对象的形式实现的
    * 未知运行时错误
    * 语法错误
    * 系统无法找到指定资源
~~~
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

#### **ch20 JSON**
* JSON 字符串必须使用双引号
* JSON 中的对象要求给属性加引号
* 没有末尾的分号
* 解析与序列化
	* toJSON() 可以作为函数过滤器的补充
~~~
// json示例
[
    {
        "title": "Professional JavaScript",
        "authors": [
            "Nicholas C. Zakas"
        ],
        edition: 3,
        year: 2011
    },
    {
        "title": "Professional JavaScript",
        "authors": [
            "Nicholas C. Zakas"
        ],
        edition: 2,
        year: 2009
    },
    {
        "title": "Professional Ajax",
        "authors": [
            "Nicholas C. Zakas",
            "Jeremy McPeak",
            "Joe Fawcett"
        ],
        edition: 2,
        year: 2008
    },
    {
        "title": "Professional Ajax",
        "authors": [
            "Nicholas C. Zakas",
            "Jeremy McPeak",
            "Joe Fawcett"
        ],
        edition: 1,
        year: 2007
    },
    {
        "title": "Professional JavaScript",
        "authors": [
            "Nicholas C. Zakas"
        ],
        edition: 1,
        year: 2006
    }
]

// 序列化选项  过滤
var book = {
"title": "Professional JavaScript",
"authors": [
"Nicholas C. Zakas"
],
edition: 3,
year: 2011
};
var jsonText = JSON.stringify(book, ["title", "edition"]);
// result:
// {"title":"Professional JavaScript","edition":3}
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

#### **ch22 高级技巧**
* 由于它天生的动态属性，这种语言还能使用更为复杂和有趣的模式。这些技巧要利用 ECMAScript 的语言特点、BOM扩展和 DOM 功能来获得强大的效果。
* 使用 **高级函数**
	* 安全的类型检测
    * 作用域安全的构造函数
    * 惰性载入函数
    	* 任何代码分支推迟到第一次调用函数的时候
    * 函数绑定 
    	* 始终在指定环境中运行
    	* 创建一个函数，可以在特定的 this 环境中以指定参数调用另一个函数
    * 函数柯里化
    	* 创建已经填了某些参数的函数
* 防篡改对象
	* 一旦把对象定义为防篡改，就无法撤销了
    * 不可扩展对象
    	* 不允许给对象添加新的属性或方法
    	* Object.preventExtensions(person);
    	* alert(Object.isExtensible(person)); //true
    * 密封的对象 seal
    	* 不允许删除已有的属性和方法
    * 冻结的对象 freeze
    	* 不允许重写对象的成员
* Yielding Timers 高级定时器
	* 给队列添加代码并不意味着对它立刻执行，而只能表示它会尽快执行
    * 指定的时间间隔表示何时将定时器的代码添加到队列，而不是何时实际执行代码
    * 重复计时器
* 函数节流
	* 计时器
    * resize
	* DOM 操作比起非 DOM 交互需要更多的内存和 CPU 时间
* 自定义事件
	* 观察者模式
	* 寄生组合继承 P618
* 拖放 DragAndDropExample04.htm示例
* 

~~~
// 判断数组
function isArray(value){
	return Object.prototype.toString.call(value) == "[object Array]";
}

// 确认 this 对象是正确类型的实例
function Person(name, age, job){
if (this instanceof Person){
this.name = name;
this.age = age;
this.job = job;
} else {
return new Person(name, age, job);
}
}
var person1 = Person("Nicholas", 29, "Software Engineer");
alert(window.name); //""
alert(person1.name); //"Nicholas"
var person2 = new Person("Shelby", 34, "Ergonomist");
alert(person2.name); //"Shelby"

// 使用惰性载入重写createXHR()
function createXHR(){
if (typeof XMLHttpRequest != "undefined"){
createXHR = function(){
return new XMLHttpRequest();
};
} else if (typeof ActiveXObject != "undefined"){
createXHR = function(){
if (typeof arguments.callee.activeXString != "string"){
var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
"MSXML2.XMLHttp"],
i, len;
for (i=0,len=versions.length; i < len; i++){
try {
new ActiveXObject(versions[i]);
arguments.callee.activeXString = versions[i];
break;
} catch (ex){
//skip
}
}
}
return new ActiveXObject(arguments.callee.activeXString);
};
} else {
createXHR = function(){
throw new Error("No XHR object available.");
};
}
return createXHR();
}

// 函数绑定演示
var handler = {
message: "Event handled",
handleClick: function(event){
alert(this.message + ":" + event.type);
}
};
var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
// EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));

// 创建柯里化函数的通用示例
function curry(fn){
  var args = Array.prototype.slice.call(arguments, 1);
  return function(){
  var innerArgs = Array.prototype.slice.call(arguments);
  var finalArgs = args.concat(innerArgs);
  return fn.apply(null, finalArgs);
  };
}

// bind实现柯里化
var handler = {
message: "Event handled",
handleClick: function(name, event){
alert(this.message + ":" + name + ":" + event.type);
}
};
var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler, "my-btn"));

// 冻结对象演示
var person = { name: "Nicholas" };
alert(Object.isExtensible(person)); //true
alert(Object.isSealed(person)); //false
alert(Object.isFrozen(person));  //false
Object.freeze(person);
alert(Object.isExtensible(person)); //false
alert(Object.isSealed(person)); //true
alert(Object.isFrozen(person)); //true

// 计时器
var btn = document.getElementById("my-btn");
btn.onclick = function(){
	setTimeout(function(){
		document.getElementById("message").style.visibility = "visible";
	}, 250);
	//其他代码
};

// div右移
setTimeout(function(){
var div = document.getElementById("myDiv");
var left = parseInt(div.style.left) + 5;
div.style.left = left + "px";
if (left < 200) {
	setTimeout(arguments.callee, 50);
}
}, 50);

// 数组分块模式
setTimeout(function(){
	// 取出下一个条目并处理
	var item = array.shift();	
	process(item);
    
	//若还有条目，再设置另一个定时器
	if(array.length > 0){
		setTimeout(arguments.callee, 100);
	}
}, 100);

// 升级
function chunk(array, process, context){
	setTimeout(function(){
		var item = array.shift();
		process.call(context, item);
		if (array.length > 0){
			setTimeout(arguments.callee, 100);
		}
	}, 100);
}

var data = [12,123,1234,453,436,23,23,5,4123,45,346,5634,2234,345,342];
function printValue(item) {
	var div = document.getElementById("myDiv");
	div.innerHTML += item + "<br>";
}

chunk(data, printValue);
chunk(data.concat(), printValue); // 保持原数组不变

// 如果前一个定时器没有执行
// 后一个定时器
var processor = {
  timeoutId: null,
  
  //实际进行处理的方法
  performProcessing: function(){
 	//实际执行的代码
  },
  
  //初始处理调用的方法
  process: function(){
  	clearTimeout(this.timeoutId);
  	var that = this;
  	this.timeoutId = setTimeout(function(){
  		that.performProcessing();
  	}, 100);
  }
};

//尝试开始执行
processor.process();

// 自动进行定时器的设置和清除
function throttle(method, context) {
  clearTimeout(method.tId);
  method.tId= setTimeout(function(){
  	method.call(context);
  }, 100);
}
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