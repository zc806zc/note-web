#### **ch10、11、12 DOM及其扩展与DOM2、3**
*  DOM
	* 针对 HTML 和 XML 文档的一个 API（应用程序编程接口）
	* 一个层次化的节点树
    * 真正的跨平台、语言中立
    * **NodeList** 是有生命、有呼吸的对象，而不是在我们第一次访问它们的某个瞬间拍摄下来的一张快照
    * hasChildNodes() 比查询 childNodes列表的 length 属性更简单
    *  ownerDocument 
    *  appendChild() 和 insertBefore()  
    * replaceChild() removeChild()
    	* 与使用 replaceChild() 方法一样，通过 removeChild() 移除的节点仍然为文档所有，只不过在文档中已经没有了自己的位置
    *  cloneNode() 方法接受一个布尔值参数，表示是否执行 **深复制**
    	* 在复制之前最好先移除事件处理程序
    *  normalize() 处理文档树中的文本节点??
    *  网页请求：URL 、 domain 和 referrer
    * 不让表单字段的 name 特性与其他元素的 ID 相同
    * 特殊集合
    	* document.anchors ，包含文档中所有带 name 特性的a元素
        * document.forms
        * document.images
        * document.links 
    * DOM 一致性检测 P259
    	*  document.implementation
        *  hasFeature()
* DOM操作技术
	* 动态脚本
    * 动态样式
    * 操作表格
    * 使用NodeList
    * 尽量减少 DOM 操作
* DOM扩展
	* Selectors API（选择符 API）
    * HTML5
    * <del>Element Traversal（元素遍历）规范</del>
* Selectors API（选择符 API）
  * querySelector()
  * querySelectorAll()
* DOM2 和 DOM3模块
	* DOM2 级核心（DOM Level 2 Core） 节点操作
	* DOM2 级视图（DOM Level 2 Views）样式视图
	* DOM2 级事件 Events
	* DOM2 级样式 Style
	* DOM2 级遍历和范围（DOM Level 2 Traversal and Range）：引入了遍历 DOM 文档和选择其特定部分的新接口。
	* DOM2 级 HTML（DOM Level 2 HTML）：在 1 级 HTML 基础上构建，添加了更多属性、方法和新接口。
    * DOM3 级又增加了“XPath”模块和“加载与保存”（Load and Save）模块
* 模块细节
	* 针对XML **命名空间** 的变化
    * NodeIterator TreeWalker
    
~~~
// 为了确保跨浏览器兼容
// 最好还是将 nodeType 属性与数字值进行比较
if (someNode.nodeType == 1){ // 适用于所有浏览器
	alert("Node is an element.");
}

// 将 NodeList 对象转换为数组
//在 IE8 及之前版本中无效
var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes,0);

// 适合所有浏览器
function convertToArray(nodes){
	var array = null;
	try {
		array = Array.prototype.slice.call(nodes, 0); //针对非 IE 浏览器
	} catch (ex) {
		array = new Array();
		for (var i=0, len=nodes.length; i < len; i++){
			array.push(nodes[i]);
		}
	}
	return array;
}

// 任何 DOM 节点也不能同时出现在文档中的多个位置上
// 如果在调用 appendChild() 时传入了父节点的第一个子节点，
// 那么该节点就会成为父节点的最后一个子节点
//someNode 有多个子节点
var returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild); //false
alert(returnedNode == someNode.lastChild); //true

// insertBefore方法演示
//插入后成为最后一个子节点
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild); //true
//插入后成为第一个子节点
var returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode); //true
alert(newNode == someNode.firstChild); //true
//插入到最后一个子节点前面
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length-2]); //true

// cloneNode
<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
</ul>

var deepList = myList.cloneNode(true);
alert(deepList.childNodes.length); //3（IE < 9）或 7（其他浏览器）
var shallowList = myList.cloneNode(false);
alert(shallowList.childNodes.length); //0 不包含子节点

console.log(document.doctype);

//假设页面来自 p2p.wrox.com 域
document.domain = "wrox.com"; // 成功
document.domain = "nczonline.net"; // 出错！

//假设页面来自于 p2p.wrox.com 域
document.domain = "wrox.com"; //松散的（成功）
document.domain = "p2p.wrox.com"; //紧绷的（出错！）

// 查找元素
var images = document.getElementsByTagName("img");
var myImage = images.namedItem("myImage");
var myImage = images["myImage"];

// 单选按钮
<fieldset>
  <legend>Which color do you prefer?</legend>
  <ul>
    <li><input type="radio" value="red" name="color" id="colorRed">
    <label for="colorRed">Red</label></li>
    <li><input type="radio" value="green" name="color" id="colorGreen">
    <label for="colorGreen">Green</label></li>
    <li><input type="radio" value="blue" name="color" id="colorBlue">
    <label for="colorBlue">Blue</label></li>
  </ul>
</fieldset>

var radios = document.getElementsByName("color");

// DOM一致性检测
var hasXmlDom = document.implementation.hasFeature("XML", "1.0");

// 文档写入
<html>
<head>
<title>document.write() Example 4</title>
</head>
<body>
<p>This is some content that you won't get to see because it will be overwritten.</p>
<script type="text/javascript">
window.onload = function(){
document.write("Hello world!");
};
</script>
</body>
</html>

if (element.tagName == "div"){} //不能这样比较，很容易出错！
if (element.tagName.toLowerCase() == "div"){ }//这样最好（适用于任何文档）

<div id="myDiv" class="bd" title="Body text" lang="en" dir="ltr"></div>
alert(div.className); //"bd"
alert(div.getAttribute("class")); //"bd"
div.setAttribute("class", "ft");
div.removeAttribute("class");

// 取得自定义属性
// 注意style和onclick的属性
<div id="myDiv" my_special_attribute="hello!"></div>
var value = div.getAttribute("my_special_attribute");

<xhtml:html xmlns:xhtml="http://www.w3.org/1999/xhtml">
<xhtml:head>
	<xhtml:title>Example XHTML page</xhtml:title>
</xhtml:head>
<xhtml:body xhtml:class="home">
	Hello world!
</xhtml:body>
</xhtml:html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Example XHTML page</title>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1"
viewBox="0 0 100 100" style="width:100%; height:100%">
<rect x="0" y="0" width="100" height="100" style="fill:red"/>
</svg>
</body>
</html>
~~~


