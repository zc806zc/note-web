#### **ch16 使HTML5 脚本编程**

* 跨文档消息传递 XDM
  * 核心是 postMessage\(\) 方法
  * 混搭（mashup）和社交网络应用
* 拖放 API
  * 拖放事件  dragstart drag dragend
  * 顺序 dragenter  -&gt; dragover -&gt; dragleave 或 drop
  * 自定义放置目标
  * dataTransfer  getData\(\) 和 setData\(\)
  * dropEffect 与 effectAllowed
  * 可拖动draggable 
  * 检测编解码器的支持情况 canPlayType\(\) 
* 音频和视频
  * 自定义媒体播放器
* 历史状态管理
  * hashchange
  * history.pushState\(\)

```js
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

#### **ch17 错误处理与调试**

* 使用 Web 的绝大多数人都不是技术高手，其中甚至有很多人根本就不明白浏览器到底是什么，更不用说让他们说喜欢哪一个了 
* 使用 window.onerror 事件处理程序，这种方式可以接受 try-catch 不能处理的所有错误（仅限于 IE、Firefox 和 Chrome）。
* 错误类型
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
    * 将数据发送给服务器之前，没有使用 encodeURIComponent\(\) 对数据进行编码
* 区别致命错误和非致命错误
  * 非致命错误
    * 不影响用户的主要任务；
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

```js
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


