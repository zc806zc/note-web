# JS基础-致最爱的语言

> JavaScript不是世界上最好的语言,但这些致力于改善JavaScript的程序员是！！

- 书单名人堂/资源

  - 精通JavaScript开发 <https://github.com/denodell/pro-javascript-development>
  - JS数据结构与算法 <https://github.com/oreillymedia/data_structures_and_algorithms_using_javascript>
  - JS红宝书 图书源码 <http://www.wrox.com/WileyCDA/WroxTitle/Professional-JavaScript-for-Web-Developers-3rd-Edition.productCd-1118026691,descCd-DOWNLOAD.html>
  - Professional-Javascript-for-Web-Developers 源码 <https://github.com/zgdong/Professional-Javascript-for-Web-Developers/tree/master/Professional-Javascript-for-web-developers>

- 博客/资源

  - JS深入系列 <https://juejin.im/post/59278e312f301e006c2e1510>

```javascript
// 入门
JavaScript编程全解（太细腻）
精通JavaScript开发
(学校看这本书的时候,JS浪潮早已更新换代...)

// 进阶
JavaScript DOM编程艺术
JavaScript基础教程
你不知道的JavaScript

// 扩展或深入
JavaScript快速全栈开发
JavaScript设计模式和开发实战
JavaScript高级程序设计(红宝书)
犀牛书（JS圣经）
数据结构与算法JavaScript描述（第1版虎头蛇尾）

// 再深入
全端Web开发:使用JavaScript与Java
```

# 语言

> 一门基于对象和事件驱动并具有安全性的脚本语言

- 现代浏览器完全支持ES5标准

- Unicode <https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/>

```javascript
// 宿主语言
Web 浏览器只是 ECMAScript 实现可能的宿主环境之一
其他宿主环境包括Node、Adobe、Flash

// 公式
Browser JS ≈ ECMA + DOM + BOM

// 安全性表现
不允许访问本地硬盘(但firefox可以运行webGL)
是否可以对文档进行编辑? HTML5对此的冲击 editable

// 人物关系
ECMA-262/(吾之真名)
Brendan Eich(他爸)
Netscape(死去的奶妈)
JScript(半死不活的对手)
typeScript(涅槃重生)
```

# 语法

- 变量提升：函数及变量的声明被提升到最顶部
- prototype
- constructor
- arguments

```javascript
// href操作
href="#"
href="javascript:void(0)"  // 优于href=""
href="javascript:void(alert('Warning!!!'))"
href="javascript:test();" // 执行此全局函数

// void
function getValue(){
    var a, b, c;
    a = void ( b = 5, c = 7 );  // undefined
}

// 再次声名, 值不会丢失
var carname="Volvo";
var carname;
console.log(carname); // Volvo

var y;
console.log(y); // undefined
y = 7;


// switch
使用===进行比较,对比对象可以是任意类型,

// 打印输出
js shell等中的print
innerHTML
console.log()
window.alert()
document.writeln()  // 注意执行覆盖

// 字符串
toString, toLocaleString
toFixed  toExponential toPrecision()
不要new一个对象, 对象会拖慢速度, 现实中亦如此...
"It's alright";
"He is called 'Johnny'";
'He is called "Johnny"';

var x = "John",
y = new String("John");
console.log(x === y) // false

var arr = ["hello ","world ","JS "];
console.log(arr.toLocaleString()); // hello ,world ,JS

var num = 10000;
console.log(num.toExponential(2));  //1.00e+4

var num = 99;
console.log(num.toPrecision(1)); //"1e+2"
console.log(num.toPrecision(2)); //"99"
console.log(num.toPrecision(3)); //"99.0"

// return的作用
1/.暴露出去
2/.退出函数
让函数始终都返回一个值，或者永远都不要返回值

// break和continuet
跳出的是代码块而已
var cars=["BMW","Volvo","Saab","Ford"];
list:
{
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
break list;
console.log(cars[3]);
}

// eval()
好用但不安全

// this
<button onclick="this.innerHTML=Date()">现在的时间是?</button>

// for-in循环
性能不佳
且输出顺序不可测

要迭代的对象的变量值为 null 或 undefined，
for-in 语句及不执行, 也不抛出错误,
建议在使用 for-in 循环之前，先检测确认该对象的值不是 null 或 undefined

// use strict
在脚本或函数的头部位置添加
可以为新版本作铺垫
若考虑大型项目在用情况，需注意

var强制性声名
禁止this关键字指向全局对象 eg.函数中的this不再指向全局
巴拉巴拉......
```

## 7种数据类型

- String
- Number
- Boolean
- Array
- Object
- Null
- Undefined

```javascript
// 数据类型
JS中基本类型按值传递，
但数组与对象是按共享传递的。

// 布尔值
True 和 False都不是 Boolean 值，只是标识符

// 判定为false
if(null && undefined && '' && 0) {

}

//  Undefined 和 Null 的区别
typeof undefined // undefined
typeof null // object 一个空对象引用
null === undefined // false
null == undefined // true 因为undefined值是派生自null的


// instanceof Array 这种方式
只适用于与数组初始化在相同上下文环境

对象只有被定义才有可能为 null, 否则为 undefined。因此想测试对象是否存在
if (myObj !== null && typeof myObj !== "undefined")
if (typeof myObj !== "undefined" && myObj !== null) // better


// 数字类型
var x = 0.1, y = 0.2;
var z = x + y;
z == 0.3 // false
z = (x * 10 + y * 10) / 10; // z 的结果为 0.3
// 浮点数值的最高精度是 17 位小数，
// 但在进行算术计算时其精确度远远不如整数,
// 这是使用基于IEEE754 数值的浮点计算的通病

// 科学（指数）计数法
var y=123e5; // 12300000
var z=123e-5; // 0.00123

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
```

## 生命周期/生命域

```javascript
局部变量出函数即死
全局变量是window对象,在页面关闭后才被删除

// 注意
1./JS函数内的for生命域并没有像Java一样实现块级作用域
2./函数内如果赋值给尚未声明过的变量，那么这个变量就会变成全局变量

if (true) {
    var color = "blue";
}
alert(color); //"blue"

function showScope() {
    scope = "local";
    return scope;
}
scope = "global";
console.log(scope); // "global"
console.log(showScope()); // local
console.log(scope); // "local"

// 闭包
(function hello() {
    for (var i = 0; i < 10; i++) { }
    console.log(i); // 10
})();
```

## 数组与对象

- 数组API全解密 <https://juejin.im/entry/59ad2cacf265da248a7aa6cc?utm_source=gold_browser_extension>
- 函数

  - 内置函数
  - 嵌套函数
  - 递归函数

```javascript
// key-value类似
PHP 中的关联数组
Python 中的字典
C 语言中的哈希表
Java 中的哈希映射
Ruby 和 Perl 中的哈希表

var arr = [40, 100, 1, 5, 25, 10]; // 数组的推荐声名方式

// 不推荐
var cars=new Array();
cars[0]="Saab"; cars[1]="Volvo"; cars[2]="BMW";
var cars=new Array("Saab","Volvo","BMW");
var cars=["Saab","Volvo","BMW"];

// 注意
使用名字作为索引，访问数组时，
JavaScript 会把数组重新定义为标准对象。
执行这样操作后，数组的方法及属性将不能再使用，否则会产生错误:

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length; // person.length 返回 0
var y = person[0]; // person[0] 返回 undefined

// 对象
var person={firstname:"John", lastname:"Doe", id:5566};
name = person.lastname;
name = person["lastname"];

// arguments
function sayHi() {
    alert("Hello " + arguments[0] + "," + arguments[1]);
    alert(arguments.length);
}

function doAdd(num1, num2) {
    if(arguments.length == 1) {
        alert(num1 + 10);
    } else if (arguments.length == 2) {
        alert(arguments[0] + num2);
    }
}
```

## Object

```javascript
constructor
hasOwnProperty
isPrototypeOf(object) ：用于检查传入的对象是否是传入对象的原型
propertyIsEnumerable(propertyName) ：用于检查给定的属性是否能够使用 for-in 语句来枚举


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

- 函数

```javascript
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

## 垃圾收集

```javascript
标记清除
引用计数
循环引用问题
垃圾收集器是周期性运行的
window.CollectGarbage()
管理内存
分配给 Web浏览器的可用内存数量通常要比分配给桌面应用程序的少，一旦数据不再有用，最好通过将其值设置为 null 来释放其引用——这个做法叫做解除引用

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

## 引用类型

```javascript
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
console.log(people); //Nicholas,Greg
console.log(people.toString()); //Nicholas,Greg
console.log(people.toLocaleString()); //Nikolaos,Grigorios

var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1); // 删除第一项
console.log(colors); // green,blue
console.log(removed); // red，返回的数组中只包含一项

removed = colors.splice(1, 0, "yellow", "orange"); // 从位置 1 开始插入两项
console.log(colors); // green,yellow,orange,blue
console.log(removed); // 返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple"); // 插入两项，删除一项
console.log(colors); // green,red,purple,orange,blue
console.log(removed); // yellow，返回的数组中只包含一项

var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
console.log(sum); //15
```

## 事件

- 事件流

  - [事件处理程序的缺点 文章](www.jibbering.com/faq/names/event_handler.html)

```javascript
冒泡
捕获

// DOM2事件流
事件捕获阶段
捕获阶段不会涉及事件目标
处于目标阶段
事件冒泡阶段

// 事件对象 Event e
只有在事件处理程序执行期间，
event 对象才会存在；
一旦事件处理程序执行完成，
event 对象就会被销毁。

// IE中的事件对象


// 事件类型
UI（User Interface，用户界面）事件
焦点事件，当元素获得或失去焦点时触发；
鼠标事件，当用户通过鼠标在页面上执行操作时触发；
滚轮事件，当使用鼠标滚轮（或类似设备）时触发；
文本事件，当在文档中输入文本时触发；
键盘事件，当用户通过键盘在页面上执行操作时触发；
合成事件，当为 IME（Input Method Editor，输入法编辑器）输入字符时触发；
变动（mutation）事件，当底层 DOM 结构发生变化时触发。


// 鼠标事件顺序
mousedown
mouseup
click
mousedown
mouseup
click
dblclick

// 键盘事件
键码
字符编码

// 复合事件
处理 IME 的输入序列

// 比较

clientX clientY
pageX pageY
scrollLeft 和 scrollTop
screenX 和 screenY

// 设备事件

orientationchange 屏幕纵横 事件
所有 iOS 设备都支持 orientationchange 事件和 window.orientation 属性
MozOrientation
deviceorientation 告诉开发人员设备在空间中朝向哪儿，而不是如何移动
devicemotion 告诉开发人员设备什么时候移动，而不仅仅是设备方向如何改变

// 触摸事件
touchstart  touchmove  touchend touchcancel
顺序
touchstart
mouseover
mousemove （一次）
mousedown
mouseup
click
touchend


// 手势事件
gesturestart ：当一个手指已经按在屏幕上而另一个手指又触摸屏幕时触发。
gesturechange ：当触摸屏幕的任何一个手指的位置发生变化时触发。
gestureend：当任何一个手指从屏幕上面移开时触发。
```

- HTML5事件

```javascript
contextmenu
beforeunload

DOMContentLoaded 不理会图像、JavaScript 文件、CSS 文件或其他资源是否下载完毕
readystatechange

pageshow 和 pagehide 事件
往返缓存 p393

hashchange 事件
```

- 内存和性能

  - 事件委托
  - 移除事件处理程序

- 模拟事件

- 事件使用示例

```javascript
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
```

## 表单脚本

```javascript
事实上， **重置表单的需求是很少见的**。
更常见的做法是提供一个取消按钮，让用户能够回到前一个页面，而不是不分青红皂白地重置表单中的所有值。
fieldset
textbox 选择部分文本 P422
过滤输入
屏蔽字符
操作剪贴板
自动切换焦点
HTML5的验证性API
禁止验证 novalidate
表单序列化
富文本编辑器
designMode
contenteditable
execCommand
富文本选区
富文本编辑器并不是一个表单字段
```

- 示例

```javascript
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
range.pasteHTML("<span style=\"background-color:yellow\"> " +             range.htmlText + "</span>");

// 确保恰好在提交表单之前填充 "comments" 字段
EventUtil.addHandler(form, "submit", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    target.elements["comments"].value =
            document.getElementById("richedit").innerHTML;
});
```

## 浏览器调试

- chrome开发者工具, 例如

  - Task Management
  - Profiles - Heap Snapshot
  - Timeline 内存时间轴

- console <http://ghmagical.com/article/page/id/S6S2E4BolVg7>

  - console.log发布前一定要删掉

- 工具文档 <http://www.css88.com/doc/chrome-devtools/settings/>

- 内存泄漏

  - 不再需要的变量一直没有释放
  - 函数闭包 removeEventListener
  - 多个对象之间的循环引用
  - 数据引用保存独立的局部变量副本

- 性能瓶颈

  - 即浏览器有时会出现一瞬间的锁定或冻结
  - 原因：浏览器渲染被迫优先处理JS解释器，使其赶上渲染速度
  - for 或 while迭代
  - Collect JavaScript CPU Profile

- [前端工程师必会的6个调试技术](https://read.douban.com/reader/column/5945187/chapter/30774228/)

  - 基本的调试： HTML、CSS 和 JavaScript
  - 使用网络工具对 API 进行测试

    - 状态码与错误
    - 设计表单时，我们可以看到它发出的参数是否是正确的

  - 对移动设备进行调试：**先在浏览器进行响应式设计，随后在真机上进行测试**。

  - 对网站的性能进行调试

```javascript
// 让Chrome变成编辑器
document.body.contentEditable=true

// 打开命令菜单
Ctrl + Shift + P

// 如何在浏览器查看代码
1/.pretty-printing 重排版代码
2/.source maps 缩编时添加一个指向完整版的引用
// # souceMappingURL=/scripts/scripts.js.map
X-SourceMap: /scripts/scripts/js.map
3/.或使用UglifyJS或Google Closure Compiler实现

// 输出
console.info()  一般信息
console.bug()  辅助错误调试
console.warn() 指出 潜在问题 的具体情况
console.error() 出现 错误 并指出错误的具体情况

// 设置css输出

// 计时
console.time()
console.timeEnd()
```

- 发布时自动移除console对象

  - [grunt-strip](https://github.com/jsoverson/grunt-strip)
  - [gulp-strip-debug](https://github.com/sindresorhus/gulp-strip-debug)

## 浏览器插件学习

- [推荐工具 - toolbox](https://github.com/phodal/toolbox)
- [Mastering The Developer Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console)
- [谷歌开发者工具docs](https://developers.google.com/web/tools/chrome-devtools/memory-problems/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
- [Dev Tool Secrets](http://devtoolsecrets.com/)
- [调试有关](http://www.jb51.net/article/58570.htm)
- Chrome调试台技巧 [例手动设置断点等](http://www.open-open.com/lib/view/open1416809904055.html)
- [Firebug使用](http://www.ruanyifeng.com/blog/2011/03/firebug_console_tutorial.html)
