#### **ch1、2 在 HTML 中使用 JavaScript**
* 资源下载
  * [源码下载](http://www.wrox.com/WileyCDA/WroxTitle/Professional-JavaScript-for-Web-Developers-3rd-Edition.productCd-1118026691,descCd-DOWNLOAD.html)
  * [github下载](https://github.com/zgdong/Professional-Javascript-for-Web-Developers/tree/master/Professional-Javascript-for-web-developers)


* 基础

```js
// 宿主语言
Web 浏览器只是 ECMAScript 实现可能的宿主环境之一
其他宿主环境包括 
Node 
Adobe Flash

Browser JS ≈ ECMA + DOM + BOM

// ECMA-262
给出了 ECMAScript 兼容的定义

支持 ECMA-262 描述的
所有类型、值、对象、属性、函数以及程序句法和语义
支持 Unicode 字符标准

```

* **DOM** 文档对象模型 Document Object Model

```
针对 XML 但经过扩展用于 HTML 的应用程序编程接口

DOM 并不只是针对 JavaScript 的，
很多别的语言也都实现了 DOM

SVG Scalable Vector Graphic，可伸缩矢量图

MathML（Mathematical Markup Language，数学标记语言）
SMIL（Synchronized Multimedia Integration Language，同步多媒体集成语言）

// BOM 浏览器对象模型
弹出新浏览器窗口的功能；
移动、缩放和关闭浏览器窗口的功能；
提供浏览器详细信息的 **navigator** 对象；
提供浏览器所加载页面的详细信息的 **location** 对象；
提供用户显示器分辨率详细信息的 **screen** 对象；
对 **cookies** 的支持；
像 **XMLHttpRequest** 和 IE的 ActiveXObject 这样的 **自定义对象**
script
* **async** 立即下载脚本，但不应妨碍页面中的其他操作
* **异步**脚本不要在加载期间修改 DOM
* **defer** 表示脚本可以**延迟**到文档 **完全被解析和显示**之后再执行
* 最好只包含一个延迟脚本
* 只适用于外部脚本文件
* 还是按照顺序来

```

   
* 示例
```
* <del>language type charset</del>
* <del>不要在代码中的任何地方出现 "</script>"

function sayScript(){
// alert("</script>");
alert("<\/script>"); // 正确方式
}

```


    
* <del>尽管不检查.js 扩展名，但要确保服务器能返回正确的 MIME 类型</del>
* php,jsp等
* <del>文档模式</del>
	* 混杂模式（quirks mode）
	* 标准模式（standards mode）
* <del>noscript 脚本不支持或禁用</del>



```


<noscript>
<p> 本页面需要浏览器支持（启用）JavaScript 。
</noscript>


```



#### **ch3、4、5 基本概念、变量、作用域和内存问题, 引用类型**
* 大量借鉴了 C 及其他类 C 语言（如 Java 和 Perl）的语法
* <del>驼峰大小写格式</del>
* 保留字

* **初始化变量**并不会把它标记为字符串类型，就是给变量赋一个值那么简单。因此，可以在修改变量值的同时修改值的类型



```


var message = "hi";
message = 100; // 有效但不推荐

//  关于声名
var message; 
alert(message); // "undefined"
alert(age); // 产生错误


```



* <del>从技术角度讲，**函数在 ECMAScript中是对象**，不是一种数据类型。然而，函数也确实有一些特殊的属性，因此通过 typeof 操作符来区分函数和其他对象是有必要的。</del>
* Boolean
	* True 和 False（以及其他的混合大小写形式）都不是 Boolean 值，只是标识符
    


```


var message = "Hello world!";
if (message) { // 自动转化
alert("Value is true"); // 将被执行
}


```


    
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
    


```


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


```



    
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
   


```


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


```


* 语句
	* 使用 while 循环做不到的，使用 for 循环同样也做不到...
   *  label 语句
   *  <del>with语句</del>
   *  switch-case, 假如需要混合几种情形，不要忘了在代码中添加 **注释**，说明你是有意省略了 break 关键字
   


```



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


```



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
   


```


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


```



* 垃圾收集
	* 标记清除
   *  <del>引用计数</del> P79
   		* 循环引用问题
   *  垃圾收集器是 **周期性**运行的
   		* window.CollectGarbage()
   *  管理内存
   		* 分配给 Web浏览器的可用内存数量通常要比分配给桌面应用程序的少，一旦数据不再有用，最好通过将其值设置为 null 来释放其引用——这个做法叫做解除引用
   


```


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


```



*  引用类型
  * 如数组中的某一项的值是 null 或者 undefined ，那么该值在 join() 
toLocaleString() 、 toString() 和 valueOf() 方法返回的结果中以空字符串表示。
	* 栈方法和队列方法
   *  splice() 方法是最强大的数组方法
   *  every filter some map()
   * forEach() ：对数组中的每一项运行给定函数。这个方法没有返回值。
   *  reduce reduceRight
   * 
   


```


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



```



