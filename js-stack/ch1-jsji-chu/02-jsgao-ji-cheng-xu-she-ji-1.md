#### **ch1、2 在 HTML 中使用 JavaScript**
* 资源下载
	* [源码下载](http://www.wrox.com/WileyCDA/WroxTitle/Professional-JavaScript-for-Web-Developers-3rd-Edition.productCd-1118026691,descCd-DOWNLOAD.html)
	* [github下载](https://github.com/zgdong/Professional-Javascript-for-Web-Developers/tree/master/Professional-Javascript-for-web-developers)
* **宿主**语言
	* Web 浏览器只是 ECMAScript 实现可能的宿主环境之一
	* 其他宿主环境包括 Node <del>和 Adobe Flash</del>
    * JS ≈ ECMA + DOM + BOM
* **ECMA-262** 给出了 ECMAScript **兼容**的定义
	* 支持 ECMA-262 描述的所有“类型、值、对象、属性、函数以及程序句法和语义”
    *  <del>支持 Unicode 字符标准</del>
* **DOM** 文档对象模型 Document Object Model
	* 针对 **XML** 但经过扩展用于 HTML 的应用程序编程接口
	* <del>DOM 并不只是针对 JavaScript 的，很多别的语言也都实现了 DOM</del>
	* **SVG**（Scalable Vector Graphic，可伸缩矢量图）
	* MathML（Mathematical Markup Language，数学标记语言）
	* SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）
* **BOM** 浏览器对象模型
	* 弹出新浏览器窗口的功能；
    * 移动、缩放和关闭浏览器窗口的功能；
	* 提供浏览器详细信息的 **navigator** 对象；
	* 提供浏览器所加载页面的详细信息的 **location** 对象；
	* 提供用户显示器分辨率详细信息的 **screen** 对象；
	* 对 **cookies** 的支持；
	* 像 **XMLHttpRequest** 和 IE的 ActiveXObject 这样的 **自定义对象**
* script
	* **async** 立即下载脚本，但不应妨碍页面中的其他操作
    	* **异步**脚本不要在加载期间修改 DOM
    * **defer** 表示脚本可以**延迟**到文档 **完全被解析和显示**之后再执行
    	* 最好只包含一个延迟脚本
        * 只适用于外部脚本文件
        * 还是按照顺序来
    * <del>language type charset</del>
    * <del>不要在代码中的任何地方出现 "</script>"</del>
    
    ~~~
    function sayScript(){
        // alert("</script>");
        alert("<\/script>"); // 正确方式
    }
    ~~~
    * <del>尽管不检查.js 扩展名，但要确保服务器能返回正确的 MIME 类型</del>
    	* php,jsp等
* <del>文档模式</del>
	* 混杂模式（quirks mode）
	* 标准模式（standards mode）
* <del>noscript 脚本不支持或禁用</del>
~~~
<noscript>
<p> 本页面需要浏览器支持（启用）JavaScript 。
</noscript>
~~~

#### **ch3、4、5 基本概念、变量、作用域和内存问题, 引用类型**
* 大量借鉴了 C 及其他类 C 语言（如 Java 和 Perl）的语法
* <del>驼峰大小写格式</del>
* 保留字

![](image/screenshot_1484202024526.png)
* **初始化变量**并不会把它标记为字符串类型，就是给变量赋一个值那么简单。因此，可以在修改变量值的同时修改值的类型
~~~
var message = "hi";
message = 100; // 有效但不推荐

//  关于声名
var message; 
alert(message); // "undefined"
alert(age); // 产生错误
~~~
* <del>从技术角度讲，**函数在 ECMAScript中是对象**，不是一种数据类型。然而，函数也确实有一些特殊的属性，因此通过 typeof 操作符来区分函数和其他对象是有必要的。</del>
* Boolean
	* True 和 False（以及其他的混合大小写形式）都不是 Boolean 值，只是标识符
    
    ~~~
    var message = "Hello world!";
    if (message) { // 自动转化
        alert("Value is true"); // 将被执行
    }
    ~~~
* Number
	* <del>八进制字面量在严格模式下是无效的</del>
    * <del>在进行算术计算时，所有以八进制和十六进制表示的数值最终都将被转换成十进制数值</del>
    * <del>保存浮点数值需要的内存空间是保存整数值的两倍，因此 ECMAScript会不失时机地将浮点数值转换为整数值</del>
    *  <del>浮点数值的最高精度是 17 位小数，但在进行算术计算时其精确度远远不如整数, 这是使用基于IEEE754 数值的浮点计算的通病</del>
    *  <del>在 ECMAScript中，<del>任何数值</del>除以 0会返回 NaN因此不会影响其他代码的执行</del>
    	* 只有 0除以 0 才会返回 NaN，正数除以 0 返回 Infinity，负数除以 0返回-Infinity
    *  <del>尽管有点儿不可思议，但 isNaN() 确实也适用于 **对象**。在基于对象调用 isNaN()函数时，会首先调用对象的 **valueOf()** 方法，然后确定该方法返回的值是否可以转换为数值。如果不能，则基于这个返回值再调用 **toString()** 方法，再测试返回值。</del>
    *  **数值转化**
    	* Number()
       *  parseInt()
       *  parseFloat()
    
    ~~~
    var floatNum1 = 1.; // 小数点后面没有数字——解析为 1
    var floatNum2 = 10.0; // 整数——解析为 10

    // 判断这个数字是不是有穷
    var result = Number.MAX_VALUE + Number.MAX_VALUE;
    alert(isFinite(result)); //false
    
    alert(isNaN(NaN)); //true
    alert(isNaN(10)); //false（10 是一个数值）
    alert(isNaN("10")); //false（可以被转换成数值 10）
    alert(isNaN("blue")); //true（不能转换成数值）
    alert(isNaN(true)); //false（可以被转换成数值 1）
    
    // 数值转化
    var num1 = parseInt("1234blue"); // 1234
    var num2 = parseInt(""); // NaN
    // var num3 = parseInt("0xA"); // 10（十六进制数）
    var num1 = parseInt("AF", 16); //175 指定
    var num2 = parseInt("AF"); //NaN
    var num4 = parseInt(22.5); // 22
    var num5 = parseInt("070"); // 56（八进制数）
    // ECMAScript 5 JavaScript 引擎中， parseInt() 已经不具有解析八进制值的能力，因此前导的零会被认为无效
    var num6 = parseInt("70"); // 70（十进制数）
    var num7 = parseInt("0xf"); // 15（十六进制数
    
    var num1 = parseFloat("1234blue"); //1234 （整数）
    var num2 = parseFloat("0xA"); //0
    var num3 = parseFloat("22.5"); //22.5
    var num4 = parseFloat("22.34.5"); //22.34
    var num5 = parseFloat("0908.5"); //908.5
    var num6 = parseFloat("3.125e7"); //31250000
    ~~~ 
* String
	* <del>如果字符串中包含双字节字符，那么 length 属性可能不会精确地返回字符串中的字符数目</del>
    
    ~~~
    var num = 10;
    alert(num.toString()); // "10"
    alert(num.toString(2)); // "1010"
    alert(num.toString(8)); // "12"
    alert(num.toString(10)); // "10"
    alert(num.toString(16)); // "a"
    ~~~
* Object
	* constructor
   * hasOwnProperty
   *  isPrototypeOf(object) ：用于检查传入的对象是否是传入对象的原型
   * propertyIsEnumerable(propertyName) ：用于检查给定的属性是否能够使用 for-in 语句来枚举
   *  toLocaleString() toString()  valueOf()
   *  <del>BOM 和 DOM 中的对象，都属于宿主对象，因为它们是由宿主实现提供和定义的。ECMA-262 不负责定义宿主对象，因此宿主对象可能会也可能不会继承 Object</del>
*  运算
	* 负数同样以二进制码存储，但使用的格式是二进制补码
   *  <del>位运算符</del> P40
~~~
var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
valueOf: function() {
return -1;
}
};
s1++; // 值变成数值 3
s2++; // 值变成 NaN
b++; // 值变成数值 1
f--; // 值变成 0.10000000000000009（由于浮点舍入错误所致）
o--; // 值变成数值-2

var result = "Brick" < "alphabet"; //true

var result1 = NaN < 3; //false
var result2 = NaN >= 3; //false

true == 2  // false  
undefined == 0  // false
NaN == NaN  // false  
null == 0  // false
NaN != NaN  // true  
"5"==5  // true
true == 1  // true

// 符号只是简化，不会带来性能的提升
左移/赋值（ <<= ）
有符号右移/赋值（ >>= ）
无符号右移/赋值（ >>>= ）

var num = (5, 1, 4, 8, 0); // num 的值为 0
~~~
* 语句
	* 使用 while 循环做不到的，使用 for 循环同样也做不到...
   *  label 语句
   *  <del>with语句</del>
   *  switch-case, 假如需要混合几种情形，不要忘了在代码中添加 **注释**，说明你是有意省略了 break 关键字
~~~
// continue语句
var num = 0;
for (var i=1; i < 10; i++) {
	if (i % 5 == 0) {
		continue;
	}
    num++;
}
alert(num); //8

// 定义的 start 标签可以在将来由 break 或 continue 语句引用。
// 加标签的语句一般都要与 for 语句等循环语句配合使用
start: for (var i=0; i < count; i++) {
	alert(i);
}

var num = 0;
outermost:
for (var i=0; i < 10; i++) {
  for (var j=0; j < 10; j++) {
  	if (i == 5 && j == 5) {
  	break outermost;
  }
  num++;
  }
}
alert(num); //55， continue为95

// with语句
with(location) {
	var qs = search.substring(1);
	var hostName = hostname;
	var url = href;
}
~~~
* 函数
	* 没有重载，定义了两个名字相同的函数，则该名字只属于后定义的函数
   *  <del>ECMAScript 中也没有函数签名的概念，因为其函数参数是以一个包含零或多个值的 **数组**的形式传递的</del>
* 变量
	* <del>基本类型值和引用类型值</del>
   * <del>与其他语言不同，JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间</del>
   *  <del>在很多语言中，字符串以对象的形式来表示，因此被认为是引用类型,ECMAScript 放弃了这一传统</del>
   *  <del>当复制保存着对象的某个变量时，操作的是对象的引用。但在为对象添加属性时，操作的是实际的对象</del>
   *  <del>instanceof</del>
   *  <del>typeof检测正则表达式 function或者object</del>
   *  <del>全局执行环境的变量对象始终都是作用域链中的最后一个对象</del>
   *  变量查询也不是没有代价的。很明显，访问局部变量要比访问全局变量更快，因为不用向上搜索作用域链
   
~~~
// 变量复制不会相互影响
var num1 = 5;
var num2 = num1;

// 对象复制会相互影响
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name); //"Nicholas"

var count = 20;
var result = addTen(count);
alert(count); //20，没有变化
alert(result); //30

// 对象是按值传递的
function setName(obj) {
	obj.name = "Nicholas";
}
var person = new Object();
setName(person);
alert(person.name); //"Nicholas"

// 在函数内部修改了参数的值，但原始的引用仍然保持未变
function setName(obj) {
	obj.name = "Nicholas";
	obj = new Object();
	obj.name = "Greg";
}
var person = new Object();
setName(person);
alert(person.name); //"Nicholas"
~~~
* 垃圾收集
	* 标记清除
   *  <del>引用计数</del> P79
   		* 循环引用问题
   *  垃圾收集器是 **周期性**运行的
   		* window.CollectGarbage()
   *  管理内存
   		* 分配给 Web浏览器的可用内存数量通常要比分配给桌面应用程序的少，一旦数据不再有用，最好通过将其值设置为 null 来释放其引用——这个做法叫做解除引用
   
~~~
// 循环引用示例
function problem(){
  var objectA = new Object();
  var objectB = new Object();
  objectA.someOtherObject = objectB;
  objectB.anotherObject = objectA;
}

// 解除一个值的引用并不意味着自动回收该值所占用的内存。
// 解除引用的真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收
function createPerson(name){
  var localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}
var globalPerson = createPerson("Nicholas");
// 手工解除 globalPerson 的引用
globalPerson = null;
~~~
*  引用类型
	* 如果数组中的某一项的值是 null 或者 undefined ，那么该值在 join() 、
toLocaleString() 、 toString() 和 valueOf() 方法返回的结果中以空字符串表示。
	* 栈方法和队列方法
   *  splice() 方法是最强大的数组方法
   *  every filter some map()
   * forEach() ：对数组中的每一项运行给定函数。这个方法没有返回值。
   *  reduce reduceRight
   * 
   
~~~
var person = {
	"name" : "Nicholas",
	age : 29,
	5 : true // 自动转成字符串
};

person["first name"] = "Nicholas"; // 方括号的好处

// toString toLocalString
var person1 = {
  toLocaleString : function () {
  	return "Nikolaos";
  },
  toString : function() {
  	return "Nicholas";
  }
};
var person2 = {
  toLocaleString : function () {
  	return "Grigorios";
  },
  toString : function() {
  	return "Greg";
  }
};

var people = [person1, person2];
alert(people); //Nicholas,Greg
alert(people.toString()); //Nicholas,Greg
alert(people.toLocaleString()); //Nikolaos,Grigorios

var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); // 删除第一项
alert(colors); // green,blue
alert(removed); // red，返回的数组中只包含一项

removed = colors.splice(1, 0, "yellow", "orange"); // 从位置 1 开始插入两项
alert(colors); // green,yellow,orange,blue
alert(removed); // 返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow，返回的数组中只包含一项

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
	return prev + cur;
});
alert(sum); //15
~~~

#### **ch8、9  BOM与客户端检测**
* <del>BOM-浏览器提供商会按照各自的想法随意去扩展它</del>
*  <del>window 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象</del> 
* window parent top self p195
	*  在使用框架时，每个框架都有自己的 window 对象以及所有原生构造函数及其他函数的副本。每个框架都保存在 frames 集合中，可以通过位置或通过名称来访问。
* 窗口
	*  innerWidth 、 innerHeight 、 outerWidth 和 outerHeight
    *  clientWidth 和 clientHeight
    * [关于viewport](http://quirksmode.org/mobile/viewports2.html)
    * 弹出窗口屏蔽
* <del>间歇调用与超时调用</del>
	* JavaScript 是一个单线程序的解释器，因此一定时间内只能执行一段代码
    *  JavaScript 任务队列
    *  超时调用 ID 例clearTimeout(id);
    * 一般认为，使用 **超时调用** 来模拟间歇调用的是一种最佳模式。
~~~
// 全局变量不能通过 delete 操作符删除，
// 而直接在 window 对象上的定义的属性可以
var age = 29;
window.color = "red";
//在 IE < 9 时抛出错误，在其他所有浏览器中都返回 false
delete window.age;
//在 IE < 9 时抛出错误，在其他所有浏览器中都返回 true
delete window.color; //returns true
alert(window.age); //29
alert(window.color); //undefined

//这里会抛出错误，因为 oldValue 未定义
var newValue = oldValue;
//这里不会抛出错误，因为这是一次属性查询
//newValue 的值是 undefined
var newValue = window.oldValue;

// 跨浏览器取得窗口左边和上边的位置
var leftPos = (typeof window.screenLeft == "number") ?
			window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ?
			window.screenTop : window.screenY;

//将窗口移动到屏幕左上角
window.moveTo(0,0);
//将窗向下移动 100 像素
window.moveBy(0,100);

// 取得页面视口的大小
var pageWidth = window.innerWidth,
	pageHeight = window.innerHeight;
if (typeof pageWidth != "number"){
	if (document.compatMode == "CSS1Compat"){
		pageWidth = document.documentElement.clientWidth;
		pageHeight = document.documentElement.clientHeight;
	} else {
		pageWidth = document.body.clientWidth;
		pageHeight = document.body.clientHeight;
	}
}

// 在 Chrome中，将新创建的标签页的 opener 属性设置为 null
// 即表示在单独的进程中运行新标签页
var wroxWin = window.open("http://www.wrox.com/","wroxWindow",
"height=400,width=400,top=10,left=10,resizable=yes");
wroxWin.opener = null;

// 弹出窗口是否被屏蔽
var blocked = false;
try {
	var wroxWin = window.open("http://www.wrox.com", "_blank");
	if (wroxWin == null){
		blocked = true;
	}
} catch (ex){
	blocked = true;
}

if (blocked){
	alert("The popup was blocked!");
}

//不建议传递字符串！
setTimeout("alert('Hello world!') ", 1000);

//推荐的调用方式
setTimeout(function() {
alert("Hello world!");
}, 1000);

if (confirm("Are you sure?")) {
	alert("I'm so glad you're sure! ");
} else {
	alert("I'm sorry to hear you're not sure. ");
}
~~~
* <del>迁就各方的“最小公分母”策略</del>
* 最常见的客户端检测方法是 **能力检测**/特性检测
	* [ JavaScript 中能力检测 文章](http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting)
    *  <del>能力检测，不是浏览器检测</del>
*  怪癖检测
	* 知道浏览器存在什么缺陷
* 用户代理检测 P222
	* 通过检测用户代理字符串来确定实际使用的浏览器
    *  navigator.userAgent
    *  电子欺骗：浏览器通过在自己的用户代理字符串加入一些错误或误导性信息，来达到欺骗服务器的目的
    * Gecko 是 Firefox 的呈现引擎
    * Safari 的呈现引擎叫 WebKit，是 Linux 平台中 Konqueror 浏览器的呈现引擎 KHTML 的一个分支
    * <del>至今，基于 WebKit的所有浏览器都将自己标识为 Mozilla 5.0，与基于 Gecko 的浏览器完全一样</del>
    * <del>确定浏览器是否基于 WebKit 要比确定它是不是 Safari 更有价值</del>
    *  谷歌公司的 Chrome 浏览器以 WebKit 作为呈现引擎，但使用了不同的 JavaScript 引擎
    *  <del>Opera 喜欢在不告知用户的情况下针对站点来设置用户代理字符串</del>
    *  移动操作系统 iOS 和 Android 默认的浏览器都基于 WebKit
*  用户代理字符串检测技术  P228
	 *  识别呈现引擎
    *   识别浏览器
    *   识别平台
    *   识别windows操作系统
    *   识别移动设备
    *   识别游戏系统
~~~
// 检测某个属性是否存在并不能确定对象是否支持排序。
// 更好的方式是检测 sort 是不是一个函数。
function isSortable(object){
    return !!object.sort; // 错误
	return typeof object.sort == "function";
}

// 在浏览器环境下测试任何对象的某个特性是否存在，要使用下面这个函数。
//作者：Peter Michaux
function isHostMethod(object, property) {
	var t = typeof object[property];
	return t=='function' ||
			(!!(t=='object' && object[property])) ||
			t=='unknown';
}

result = isHostMethod(xhr, "open"); //true
result = isHostMethod(xhr, "foo"); //false

// 如果你知道自己的应用程序需要使用某些特定的浏览器特性，
// 那么最好是一次性检测所有相关特性，而不要分别检测
//确定浏览器是否支持 Netscape 风格的插件
var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
//确定浏览器是否具有 DOM1 级规定的能力
var hasDOM1 = !!(document.getElementById 
	&& document.createElement 
    && document.getElementsByTagName);
    
// 怪癖检测    
var hasDontEnumQuirk = function(){
var o = { toString : function(){} };
for (var prop in o){
if (prop == "toString"){
return false;
}
}
return true;
}();
~~~

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
    
![](image/screenshot_1484458580701.png)
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

#### **ch13 事件**
* 事件流
	* 冒泡
    * 捕获
* DOM2事件流
	* 事件捕获阶段
    	* 捕获阶段不会涉及事件目标
    * 处于目标阶段
    * 事件冒泡阶段
* 事件处理程序
	* [缺点 文章](www.jibbering.com/faq/names/event_handler.html)
* 事件对象 Event e
	* 只有在事件处理程序执行期间， event 对象才会存在；一旦事件处理程序执行完成， event 对象就会被销毁。
    * IE中的事件对象
* 事件类型
	*   UI（User Interface，用户界面）事件
	* 焦点事件，当元素获得或失去焦点时触发；
	* 鼠标事件，当用户通过鼠标在页面上执行操作时触发；
	* 滚轮事件，当使用鼠标滚轮（或类似设备）时触发；
	* 文本事件，当在文档中输入文本时触发；
	* 键盘事件，当用户通过键盘在页面上执行操作时触发；
	* 合成事件，当为 IME（Input Method Editor，输入法编辑器）输入字符时触发；
	* 变动（mutation）事件，当底层 DOM 结构发生变化时触发。
* 鼠标事件顺序
	* mousedown
	* mouseup
	* click
	* mousedown
	* mouseup
	* click
	* dblclick
* 比较
	* clientX clientY 
	* pageX pageY
	* scrollLeft 和 scrollTop
    * screenX 和 screenY
* 键盘事件
	* 键码
    * 字符编码
* <del>复合事件</del>
	* 处理 IME 的输入序列
* HTML5事件
	* contextmenu
    * beforeunload
    * DOMContentLoaded 不理会图像、JavaScript 文件、CSS 文件或其他资源是否下载完毕
    *  readystatechange
    *  pageshow 和 pagehide 事件
    	* 往返缓存 p393
    *  hashchange 事件
* 设备事件
	* orientationchange 屏幕纵横 事件
    	* 所有 iOS 设备都支持 orientationchange 事件和 window.orientation 属性
    	*  MozOrientation
        *  **deviceorientation** 告诉开发人员设备在空间中朝向哪儿，而不是如何移动
        *  devicemotion 告诉开发人员设备什么时候移动，而不仅仅是设备方向如何改变
* 触摸事件
	*  touchstart  touchmove  touchend touchcancel
    * 顺序
    	1. touchstart
		1.  mouseover
		1. mousemove （一次）
		1. mousedown
		1. mouseup
		1. click
		1. touchend
* 手势事件
	* gesturestart ：当一个手指已经按在屏幕上而另一个手指又触摸屏幕时触发。
	* gesturechange ：当触摸屏幕的任何一个手指的位置发生变化时触发。
	* gestureend：当任何一个手指从屏幕上面移开时触发。
* 内存和性能
	* 事件委托
    * 移除事件处理程序
* 模拟事件
	* 使用 **JavaScript** 在任意时刻来 **触发**特定的事件
    * 模拟鼠标事件
    * 模拟键盘事件
    * 模拟其他
    * 自定义DOM事件
    * ie中的事件模拟
~~~
//  DOM0 级,在元素的作用域执行
var btn = document.getElementById("myBtn");
btn.onclick = function(){
	alert(this.id); //"myBtn"
};
btn.onclick = null;  // 删除

// DOM2 级事件处理程序
// 按顺序执行
// 通过 addEventListener() 添加的匿名函数将无法移除
var btn = document.getElementById("myBtn");
btn.addEventListener("click", function(){
	alert(this.id);
}, false);
btn.addEventListener("click", function(){
alert("Hello world!");
}, false);

// 移除监听
var btn = document.getElementById("myBtn");
var handler = function(){
alert(this.id);
};
btn.addEventListener("click", handler, false);
// 这里省略了其他代码
btn.removeEventListener("click", handler, false); // 有效

// EventUtil 的用法如下所示。
var EventUtil = {
  addHandler: function(element, type, handler){
    if (element.addEventListener){
    	element.addEventListener(type, handler, false);
    } else if (element.attachEvent){
    	element.attachEvent("on" + type, handler);
    } else {
    	element["on" + type] = handler;
    }
  },
  removeHandler: function(element, type, handler){
    if (element.removeEventListener){
    	element.removeEventListener(type, handler, false);
    } else if (element.detachEvent){
    	element.detachEvent("on" + type, handler);
    } else {
    	element["on" + type] = null;
    }
    }
};

// EventUtil使用示例
var btn = document.getElementById("myBtn");
var handler = function(){
alert("Clicked");
};
EventUtil.addHandler(btn, "click", handler);
// 这里省略了其他代码
EventUtil.removeHandler(btn, "click", handler);

// 在需要通过一个函数处理多个事件时，可以使用 type 属性
var btn = document.getElementById("myBtn");
var handler = function(event){
switch(event.type){
case "click":
alert("Clicked");
break;
case "mouseover":
event.target.style.backgroundColor = "red";
break;
case "mouseout":
event.target.style.backgroundColor = "";
break;
}
};

btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

// 阻止特定事件的默认行为，可以使用 preventDefault() 方法
var link = document.getElementById("myLink");
link.onclick = function(event){
	event.preventDefault();
};

// stopPropagation() 方法用于立即停止事件在 DOM 层次中的传播
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
	alert("Clicked");
	event.stopPropagation();
};
document.body.onclick = function(event){
	alert("Body clicked");
};

// 事件对象的 eventPhase 属性
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
	alert(event.eventPhase); //2
};
document.body.addEventListener("click", function(event){
	alert(event.eventPhase); //1
}, true);
document.body.onclick = function(event){
	alert(event.eventPhase); //3
};

// ie中的事件对象
var btn = document.getElementById("myBtn");
btn.onclick = function(){
	var event = window.event;
	alert(event.type); //"click"
};
btn.attachEvent("onclick", function(event){
	alert(event.type); //"click"
});

// returnValue 属性相当于 DOM中的 preventDefault() 方法
var link = document.getElementById("myLink");
link.onclick = function(){
	window.event.returnValue = false;
    // window.event.cancelBubble = true; // ie取消事件冒泡
};

<input type="button" value="Click Me" onclick="alert(event.type)">

// 跨浏览器的事件对象
var EventUtil = {
	addHandler: function(element, type, handler){
		//省略的代码
	},
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(event){
		if (event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	removeHandler: function(element, type, handler){
		//省略的代码
	},
	stopPropagation: function(event){
    	if (event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
};

btn.onclick = function(event){
	event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
};

// load事件
var image = document.getElementById("myImage");
EventUtil.addHandler(image, "load", function(event){
	event = EventUtil.getEvent(event);
	alert(EventUtil.getTarget(event).src);
});

// 创建新的img
EventUtil.addHandler(window, "load", function(){
var image = document.createElement("img");
EventUtil.addHandler(image, "load", function(event){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});
document.body.appendChild(image);
image.src = "smile.gif"; // 在事件之后
});

var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
	event = EventUtil.getEvent(event);
	var pageX = event.pageX,
	pageY = event.pageY;
	if (pageX === undefined){
		pageX = event.clientX + (document.body.scrollLeft ||
		document.documentElement.scrollLeft);
	}
	if (pageY === undefined){
		pageY = event.clientY + (document.body.scrollTop ||
		document.documentElement.scrollTop);
	}
	alert("Page coordinates: " + pageX + "," + pageY);
});

// contextmenu事件
EventUtil.addHandler(window, "load", function(event){
	var div = document.getElementById("myDiv");
	EventUtil.addHandler(div, "contextmenu", function(event){
		event = EventUtil.getEvent(event);
		EventUtil.preventDefault(event);
		var menu = document.getElementById("myMenu");
		menu.style.left = event.clientX + "px";
		menu.style.top = event.clientY + "px";
		menu.style.visibility = "visible";
	});
	EventUtil.addHandler(document, "click", function(event){
		document.getElementById("myMenu").style.visibility = "hidden";
	});
});

// beforeunload事件
EventUtil.addHandler(window, "beforeunload", function(event){
	event = EventUtil.getEvent(event);
	var message = "I'm really going to miss you if you go.";
	event.returnValue = message;
	return message;
});

// JS的readystatechange
EventUtil.addHandler(window, "load", function(){
var script = document.createElement("script");
EventUtil.addHandler(script, "readystatechange", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
if (target.readyState == "loaded" || target.readyState == "complete"){
EventUtil.removeHandler(target, "readystatechange", arguments. callee);
alert("Script Loaded");
}
});
script.src = "example.js";
document.body.appendChild(script);
});

// pageshow事件演示
(function(){
	var showCount = 0;
	EventUtil.addHandler(window, "load", function(){
		alert("Load fired");
	});
	EventUtil.addHandler(window, "pageshow", function(){
			showCount++;
			alert("Show has been fired " + showCount +
			" times. Persisted? " + event.persisted);
	});
})();

// 跟踪用户对屏幕的触摸操作
function handleTouchEvent(event){
//只跟踪一次触摸
if (event.touches.length == 1){
var output = document.getElementById("output");
switch(event.type){
case "touchstart":
output.innerHTML = "Touch started (" + event.touches[0].clientX +
"," + event.touches[0].clientY + ")";
break;
case "touchend":
output.innerHTML += "<br>Touch ended (" +
event.changedTouches[0].clientX + "," +
event.changedTouches[0].clientY + ")";
break;
case "touchmove":
event.preventDefault(); //阻止滚动
output.innerHTML += "<br>Touch moved (" +
event.changedTouches[0].clientX + "," +
event.changedTouches[0].clientY + ")";
break;
}
}
}
EventUtil.addHandler(document, "touchstart", handleTouchEvent);
EventUtil.addHandler(document, "touchend", handleTouchEvent);
EventUtil.addHandler(document, "touchmove", handleTouchEvent);

// 事件委托
var list = document.getElementById("myLinks");
EventUtil.addHandler(list, "click", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
switch(target.id){
case "doSomething":
document.title = "I changed the document's title";
break;
case "goSomewhere":
location.href = "http://www.wrox.com";
break;
case "sayHi":
alert("hi");
break;
}
});

// 可以像分派其他事件一样在 DOM 中分派创建的自定义事件对象
var div = document.getElementById("myDiv"),
event;
EventUtil.addHandler(div, "myevent", function(event){
alert("DIV: " + event.detail);
});
EventUtil.addHandler(document, "myevent", function(event){
alert("DOCUMENT: " + event.detail);
});
if (document.implementation.hasFeature("CustomEvents", "3.0")){
event = document.createEvent("CustomEvent");
event.initCustomEvent("myevent", true, false, "Hello world!");
div.dispatchEvent(event);
}
~~~
#### **ch14 表单脚本**
* 事实上， **重置表单的需求是很少见的**。更常见的做法是提供一个取消按钮，让用户能够回到前一个页面，而不是不分青红皂白地重置表单中的所有值。
* fieldset
* textbox 选择部分文本 P422
* 过滤输入
	* 屏蔽字符
    * 操作剪贴板
    * 自动切换焦点
* HTML5的验证性API
* 禁止验证 novalidate
* 表单序列化
* 富文本编辑器
	*  designMode
    *  contenteditable
    * execCommand
	* 富文本选区
	* 富文本编辑器并不是一个表单字段
~~~
<!-- 通用提交按钮 -->
<input type="submit" value="Submit Form">

<!-- 自定义提交按钮 -->
<button type="submit">Submit Form</button>

<!-- 图像按钮 -->
<input type="image" src="graphic.gif">

<!-- 通用重置按钮 -->
<input type="reset" value="Reset Form">

<!-- 自定义重置按钮 -->
<button type="reset">Reset Form</button>

<form method="post" id="myForm">
<ul>
<li><input type="radio" name="color" value="red">Red</li>
<li><input type="radio" name="color" value="green">Green</li>
<li><input type="radio" name="color" value="blue">Blue</li>
</ul>
</form>

var form = document.getElementById("myForm");
var colorFields = form.elements["color"];
alert(colorFields.length); //3
var firstColorField = colorFields[0];
var firstFormField = form.elements[0];
alert(firstColorField === firstFormField); //true

//避免多次提交表单
EventUtil.addHandler(form, "submit", function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	var btn = target.elements["submit-btn"];
	btn.disabled = true; //禁用它
});

// 早期开发实现readonly
document.forms[0].elements[0].blur();

// 读取或设置文本框的值，不建议使用标准的 DOM 方法
var textbox = document.forms[0].elements["textbox1"];
alert(textbox.value);
textbox.value = "Some new value";

// 屏蔽字符
EventUtil.addHandler(textbox, "keypress", function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	var charCode = EventUtil.getCharCode(event);
	if (!/\d/.test(String.fromCharCode(charCode)) 
    	&& charCode > 9 
        && !event.ctrlKey){ // 考虑到ctrl + v等
			EventUtil.preventDefault(event);
	}
});

// 富文本选取实现高亮
var range = frames["richedit"].document.selection.createRange();
range.pasteHTML("<span style=\"background-color:yellow\"> " + 			range.htmlText + "</span>");

// 确保恰好在提交表单之前填充 "comments" 字段
EventUtil.addHandler(form, "submit", function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	target.elements["comments"].value =
			document.getElementById("richedit").innerHTML;
});
~~~