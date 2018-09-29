# 工具

- 校验工具 JSONLint <http://www.jsonlint.com/>
- 构建JSON逻辑模型 JSON Editor Online <http://jsoneditoronline.org/>
- JSON→CSV <https://github.com/konklone/json>
- 用 前端助手chrome扩展 格式化

# 框架与库

- jquery-ajax
- axios
- jquery-pjax @deprecated https://github.com/defunkt/jquery-pjax

> pushState + ajax = pjax

```js
if ($.support.pjax) {
  $(document).on('click', 'a[data-pjax]', function(event) {
    var container = $(this).closest('[data-pjax-container]')
    var containerSelector = '#' + container.id
    $.pjax.click(event, {container: containerSelector})
  })
}
```

- .net中 mvc验证jquery.unobtrusive-ajax  https://www.cnblogs.com/Leo_wl/p/4886638.html
  - 重点是Asynchronous 部分
  - 没有一句是专门为某个特定的Web页面中的某个Html元素来编写的，即所有函数都是通用的
  - Html.BeginForm() 

- rapid.js 
  - <https://github.com/rapidjs/rapid.js>
  - An ORM-like Interface and a Router For Your API Requests

# JSON

- JSON框架模式 <http://www.yiibai.com/json/json_schema.html>
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

# Ajax

- AJAX(Asynchronous Javascript And XML)

```js
Ajax的核心： XMLHttpRequest

// 比较传统
普通网页流程 处理 - 等待 - 处理 -等待
按需获取数据, 减少冗余请求和响应, 减轻服务器负担,节省带宽，
用户体验,不刷新页面的情况下与服务器进行通信
```

- async: false
- 防止重复发送 Ajax 请求的解决方案 http://www.hollischuang.com/archives/931
    - 利用jquery ajaxPrefilter中断请求

# Promise

- ->>

# 跨域请求

- jsonp
- cors

# JSONP

- 封装

```js
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
```

- 调用栗子

```javascript
// 栗子
$.ajax({
  // async: false,
  url: "http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?",
  type: "GET",
  dataType: "jsonp",
  data: null,
  success: function (json) {
  }
});
```

# Comet @deprecated

- 轮询

# E4X @deprecated

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

# XML @deprecated

```
// XML
Extensible Markup Language
可自定义
描述 和存储数据
```

- DOMParser 类型
- XMLSerializer 类型
- 浏览器对 XPath 的支持
- 浏览器对 XSLT 的支持

- 缺点 -> 冗余
- XML解析器 <http://www.yiibai.com/java_xml/java_xml_parsers.html>

  - Dom解析器
  - JDOM解析器 (比DOM解析器更简单)
  - SAX解析器 (基于事件触发器, 不完整(部分)的文件加载到存储器中)
  - StAX解析器 (比SAX解析器更高效)
  - XPath解析器 (解析基于表达式XML并广泛选择使用XSLT)
  - DOM4J解析器 (Java库来解析XML，XPath和使用Java集合框架XSLT，为DOM，SAX和JAXP的支持)

- XML语法分析网站

  - <http://www.yiibai.com/java_xml/java_xml_useful_resources.html>
  - dom4j <http://www.dom4j.org/>
  - jdom <http://www.jdom.org/>

- dom4j

```java
...
public class DOM4jModifyXMLDemo {
   public static void main(String[] args) {
      try {
         File inputFile = new File("input.txt");
         SAXReader reader = new SAXReader();
         Document document = reader.read( inputFile );

         Element classElement = document.getRootElement();

         List<Node> nodes = document.selectNodes("/class/student[@rollno='493']" );               
         for (Node node : nodes) {
            Element element = (Element)node;
            Iterator<Element> iterator=element.elementIterator("marks");
            while(iterator.hasNext()){
               Element marksElement=(Element)iterator.next();
               marksElement.setText("80");
            }
         }

         // Pretty print the document to System.out
         OutputFormat format = OutputFormat.createPrettyPrint();
         XMLWriter writer;
         writer = new XMLWriter( System.out, format );
         writer.write( document );
      } catch (DocumentException e) {
         e.printStackTrace();
      } catch (UnsupportedEncodingException e) {         
         e.printStackTrace();
      } catch (IOException e) {
         e.printStackTrace();
      }
   }    
}


// 
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