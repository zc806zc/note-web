#### **JSON和Ajax**

* 工具

```js
  + 校验工具 [JSONLint](http://www.jsonlint.com/)
  + 构建JSON逻辑模型 [JSON Editor Online](http://jsoneditoronline.org/)
  + [JSON→CSV](https://github.com/konklone/json)
  + [JSON格式化工具](http://www.runoob.com/jsontool)
```

* 常识

```js
// JSON
JavaScript Object Notation 
JavaScript 对象表示法

对象 + 数组形式
主要是JS和PHP中的JSON

// AJAX
Asynchronous Javascript And XML

普通网页流程 处理 - 等待 - 处理 -等待
Ajax  按需 获取数据
减少冗余请求和响应, 减轻服务器负担,节省带宽，
数据加载 用户体验 减少等待时间 
不刷新页面的情况下与服务器进行通信

AJAX引擎

Ajax的核心： XMLHttpRequest
xhr  

// XML
Extensible Markup Language
可自定义
描述 和存储数据

// Ajax对象的创建过程
声名对象
var xhr = new XMLHttpRequest();

发送请求
open 
send
使用GET方式传递 要使用
encodeURIComponent 处理 
防止中文乱码

接收返回信息
readyState onreadystatechange事件
status状态码 
200 ?
403 被禁止访问
404
503 服务不可用

获取响应信息
responseText
responseBody
responseXM

// 使用jQuery操作ajax
$.get() 
$.post() 
$.ajax()
```

* **JSONP**

```js
通过PHP跨域请求
通过JSONP跨域请求

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



