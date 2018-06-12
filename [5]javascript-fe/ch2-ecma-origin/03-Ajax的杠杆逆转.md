# XML

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

# JSON

- JSON框架模式

  - <http://www.yiibai.com/json/json_schema.html>
  - JSON模式验证库

- 各种语言交互

  - PHP
  - Perl
  - Python
  - Ruby
  - Java


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

```
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

# JSONP

```javascript
// demo
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


# Axios封装

- <https://juejin.im/post/59a22e71518825242c422604>

```javascript
const Axios = axios.create({
  baseURL: "/", // 因为我本地做了反向代理
  timeout: 10000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

//POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "delete"
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }

    // 若是有做鉴权token , 就给头部带上token
    if (localStorage.token) {
      config.headers.Authorization = localStorage.token;
    }
    return config;
  },
  error => {
    Message({  //  饿了么的消息弹窗组件,类似toast
      showClose: true,
      message: error,
      type: "error.data.error.message"
    });
    return Promise.reject(error.data.error.message);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    //对响应数据做些事
    if (res.data && !res.data.success) {
      Message({ //  饿了么的消息弹窗组件,类似toast
        showClose: true,
        message: res.data.error.message.message
          ? res.data.error.message.message
          : res.data.error.message,
        type: "error"
      });
      return Promise.reject(res.data.error.message);
    }
    return res;
  },
  error => {
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 直接丢localStorage或者sessionStorage
    if (!window.localStorage.getItem("loginUserBaseInfo")) {
      // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
      router.push({
        path: "/login"
      });
    } else {
      // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
      // 乖乖的返回去登录页重新登录
      let lifeTime =
        JSON.parse(window.localStorage.getItem("loginUserBaseInfo")).lifeTime *
        1000;
      let nowTime = (new Date()).getTime(); // 当前时间的时间戳
      if (nowTime > lifeTime) {
        Message({
          showClose: true,
          message: "登录状态信息过期,请重新登录",
          type: "error"
        });
        router.push({
          path: "/login"
        });
      }
    }
    // 下面是接口回调的status ,因为我做了一些错误页面,所以都会指向对应的报错页面
    if (error.response.status === 403) {
      router.push({
        path: "/error/403"
      });
    }
    if (error.response.status === 500) {
      router.push({
        path: "/error/500"
      });
    }
    if (error.response.status === 502) {
      router.push({
        path: "/error/502"
      });
    }
    if (error.response.status === 404) {
      router.push({
        path: "/error/404"
      });
    }
    // 返回 response 里的错误信息
    return Promise.reject(error.data.error.message);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function(Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
```

- GET 请求

```javascript
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function(response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
```

- 并行请求

```javascript
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
```

- Testing

```javascript
// 创造实例
var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// Config
// Global axios defaults

axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Custom instance defaults

// Set config defaults when creating the instance
var instance = axios.create({
  baseURL: 'https://api.example.com'
});

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Config order of precedence

// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
var instance = axios.create();

// Override timeout default for the library
// Now all requests will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;

// Override timeout for this request as it's known to take a long time
instance.get('/longRequest', {
  timeout: 5000
});

// 拦截器
// Intercept request/responses

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

// Remove interceptor

var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);

// Custom instance interceptors

var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});

// 错误处理
// Catch error

axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });

// Custom HTTP status code error

axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
})

// 取消请求
// Cancel request with cancel token

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');

// Create cancel token

var CancelToken = axios.CancelToken;
var cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```

# 其他

- mvc验证jquery.unobtrusive-ajax  https://www.cnblogs.com/Leo_wl/p/4886638.html
  - 重点是Asynchronous 部分
  - 没有一句是专门为某个特定的Web页面中的某个Html元素来编写的，即所有函数都是通用的
  - Html.BeginForm() 

- rapid.js <https://github.com/rapidjs/rapid.js>

> An ORM-like Interface and a Router For Your API Requests


