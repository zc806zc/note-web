#### **ch18 JavaScript 与 XML**

* DOMParser 类型
* XMLSerializer 类型
* 浏览器对 XPath 的支持
  * Xpath : 设计用来在 DOM 文档中查找节点的一种手段
* 浏览器对 XSLT 的支持
  * XSLT:利用 XPath 将文档从一种表现形式转换成另一种表现形式
  * XSLTProcessor 类型

```js
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
```



