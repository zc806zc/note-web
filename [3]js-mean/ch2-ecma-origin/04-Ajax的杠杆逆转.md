# JSON

- 解析与序列化

```javascript
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
// {"title":"Professional JavaScript","edition":3}
```

# JSON和Ajax

- 工具

  - 校验工具 JSONLint <http://www.jsonlint.com/>
  - 构建JSON逻辑模型 JSON Editor Online <http://jsoneditoronline.org/>
  - JSON→CSV <https://github.com/konklone/json>
  - 用 前端助手chrome扩展 格式化

- JSON

- AJAX

  - Ajax的核心： XMLHttpRequest
  - 普通网页流程 处理 - 等待 - 处理 -等待
  - Asynchronous Javascript And XML
  - 按需获取数据, 减少冗余请求和响应, 减轻服务器负担,节省带宽，
  - 用户体验,不刷新页面的情况下与服务器进行通信

# 优雅封装JSON

- 添加拦截, 处理后台发过来数据

```javascript
//
const apiService = new Proxy(axios, {
  get (target, propKey, receiver) {
    return function (...args) {
      return target[propKey](...args)
        .then((res) => {
          const resData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
          return typeof resData.obj === 'string' ? JSON.parse(resData.obj) : resData.obj; // string or object are both ok
        })
        .catch((err) => {
          throw err;
        });
    }
  }
});

apiService.get('/user/12345')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
```

# JSONP

```javascript
// jQuery获取json
$(".message").html(JSON.stringify(json));
$.getJSON(‘http://example/service/addresses/home/1’,
    function(data) {
        var address = JSON.parse(data);
        console.log(“Address Line 1 = “ + address.line1);
    }
);

// forEach()函数来循环
$.getJSON("/json/cats.json", function(json) {
var html = "";
json.forEach(function(val) {
var keys = Object.keys(val);
html += "<div class = 'cat'>";
keys.forEach(function(key) {
html += "<b>" + key + "</b>: " + val[key] + "<br>";
});
html += "</div><br>";
});

// 过滤
json = json.filter(function(val) {
    return (val.id !== 1);
});

// java实现
import java.io.Writer;
import java.io.StringWriter;
import org.codehaus.jackson.map.ObjectMapper;

public class Address {
private String line1;
private String city;
private String stateOrProvince;
private String zipOrPostalCode;
private String country;

public Address() {}

public String getLine1() {
return line1;
}

public void setLine1(line1) {
this.line1 = line1;
}

// Remaining getters and setters
}

Address addrOut = new Address();

// Call setters to populate addrOut
ObjectMapper mapper = new ObjectMapper(); // Reuse this.
// Marshal Address object to JSON String.
Writer writer = new StringWriter();
mapper.writeValue(writer, addrOut);
System.out.println(writer.toString());

// Unmarshal Address object from JSON String.
String addrJsonStr =
“{“ +
“\”address\” : {“ +
“\”line1\” : \”555 Main Street\”,” +
“\”city\” : \”Denver\”,”
“\”stateOrProvince\” : \”CO\”,”
“\”zipOrPostalCode\” : \”80202\”,” +
“\”country\” : \”USA\”” +
“}” +
“}”;

Address addrIn = mapper.readValue(addrJsonStr, Address.class);
```

# Ajax 与 Comet

```javascript
使用 XMLHttpRequest 对象
使用 XMLHttpRequest 事件
跨域 Ajax 通信的限制
跨资源共享 CORS Cross-Origin Resource Sharing
其他跨域技术
    图像ping 单向
        只能发送 GET 请求，
        无法访问服务器的响应文本
    JSONP
        JSON with padding
        回调函数和数据
    Comet 更高级的 Ajax 技术 服务器推送
        有两种实现 Comet 的方式：长轮询和流
服务器发送事件 SSE Server-Sent Events
    组合 XHR 和 SSE 也是能实现双向通信的
Web Sockets 全双工、双向通信
    非常适合移动应用
Ajax与comet的安全问题


// JSONP示例

function handleResponse(response) {
    console.log("You’re at IP address " + response.ip + ", which is in " +
        response.city + ", " + response.region_name);
}
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);

// 用 XHR 对象实现 HTTP 流的典型代码

function createStreamingClient(url, progress, finished) {
    var xhr = new XMLHttpRequest(),
        received = 0;
    xhr.open("get", url, true);
    xhr.onreadystatechange = function () {
        var result;
        if (xhr.readyState == 3) {
            //只取得最新数据并调整计数器
            result = xhr.responseText.substring(received);
            received += result.length;
            //调用 progress 回调函数
            progress(result);
        } else if (xhr.readyState == 4) {
            finished(xhr.responseText);
        }
    };
    xhr.send(null);
    return xhr;
}
var client = createStreamingClient("streaming.php", function (data) {
    console.log("Received: " + data);
}, function (data) {
    console.log("Done!");
});

// WebSocket简单示例
var socket = new WebSocket("ws://www.example.com/server.php");
socket.onopen = function () {
    console.log("Connection established.");
};
socket.onerror = function () {
    console.log("Connection error.");
};
socket.onclose = function () {
    console.log("Connection closed.");
};
```

# 多个Ajax, 异步

```javascript
// jquery解决方案
alert("setp 1");
$.ajax({
	  url: "admin/PfmOptionRuleItem.do",
	  async: false, // 加上这个
	  success: function(data){
		  alert("hello ajax"); //①
	  }
});
alert("setp 2"); //②
```

# E4X(废弃)

```javascript
E4X 本身不是一门语言，它只是 ECMAScript 语言的可选扩展
几个新的全局类型
    XML ：XML 结构中的任何一个独立的部分。
    XMLList ：XML 对象的集合。
    Namespace ：命名空间前缀与命名空间 URI 之间的映射。
    QName ：由内部名称和命名空间 URI 组成的一个限定名
其内部机制是将每一种类型（特别是XML 和 XMLList ）都映射为多个 DOM 类型
for-each-in 循环
使用两个点（ .. ）表示要匹配所有后代元素，
使用 @ 字符表示应该返回一或多个特性。
星号字符（ * ）是一个通配符，可以匹配任意类型的节点。
所有这些查询都可以通过一组执行相同操作的方法来实现。

<script type="text/javascript;e4x=1" src="e4x_file.js"></script>
```

# XML(废弃)

- DOMParser 类型
- XMLSerializer 类型
- 浏览器对 XPath 的支持
- 浏览器对 XSLT 的支持

```javascript
// XML
Extensible Markup Language
可自定义
描述 和存储数据

var parser = new DOMParser();
var xmldom = parser.parseFromString("<root><child/></root>", "text/xml");
console.log(xmldom.documentElement.tagName); //"root"
console.log(xmldom.documentElement.firstChild.tagName); //"child"
var anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);
var children = xmldom.getElementsByTagName("child");
console.log(children.length); //2

var serializer = new XMLSerializer();
var xml = serializer.serializeToString(xmldom);
console.log(xml);

// 以异步方式加载 XML 文件的典型模式如下
// 注意要使用 XML 文档变量的名称（xmldom），不能使用 this 对象。
// 原因是 ActiveX 控件为预防安全问题不允许使用 this 对象。
// 虽然可以通过XML DOM文档对象加载XML文件，
// 但公认的还是使用 XMLHttp-Request 对象比较好。
var xmldom = createDocument();
xmldom.async = true;
xmldom.onreadystatechange = function () {
    if (xmldom.readyState == 4) {
        if (xmldom.parseError != 0) {
            console.log("An error occurred:\nError Code: " + xmldom.parseError.errorCode + "\n" + "Line: " + xmldom.parseError
                .line + "\n" + "Line Pos: " + xmldom.parseError.linepos + "\n" + "Reason: " + xmldom.parseError.reason);
        } else {
            console.log(xmldom.documentElement.tagName); //"root"
            console.log(xmldom.documentElement.firstChild.tagName); //"child"
            var anotherChild = xmldom.createElement("child");
            xmldom.documentElement.appendChild(anotherChild);
            var children = xmldom.getElementsByTagName("child");
            console.log(children.length); //2
            console.log(xmldom.xml);
        }
    }
};
xmldom.load("example.xml");
```
