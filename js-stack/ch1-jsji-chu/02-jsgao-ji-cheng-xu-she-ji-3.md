#### **ch15 使用 Canvas 绘图**
~~~
总结在 canvas基础
~~~

#### **ch19 E4X**


~~~
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



<script type="text/javascript;e4x=1" src="e4x_file.js"></script>
~~~


#### **ch21 Ajax 与 Comet**

    
~~~js

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
