# JS基础

- 博客/资源

  - 廖雪峰 <https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000>
  - JS深入系列 <https://juejin.im/post/59278e312f301e006c2e1510>
  - 提升 <http://www.cnblogs.com/jikey/p/3613082.html>
  - <http://www.htmleaf.com/ziliaoku/qianduanjiaocheng/>
  - clean-code-javascript <https://github.com/ryanmcdermott/clean-code-javascript>

  - js-stack-from-scratch <https://github.com/verekia/js-stack-from-scratch>

  - mostly-adequate-guide<https://github.com/MostlyAdequate/mostly-adequate-guide>

  - You-Dont-Know-JS <https://github.com/getify/You-Dont-Know-JS>

  - jstips <https://github.com/loverajoel/jstips>

  - JavaScript30 <https://github.com/wesbos/JavaScript30>


  - 其他

    - 从2.4万篇文章中挑出的最棒的 JavaScript 学习指南 <https://juejin.im/entry/5a69db996fb9a01caa20bb23>

- 书单

  - 精通JavaScript开发 <https://github.com/denodell/pro-javascript-development>
  - JS数据结构与算法 <https://github.com/oreillymedia/data_structures_and_algorithms_using_javascript>
  - 高程 <http://www.wrox.com/WileyCDA/WroxTitle/Professional-JavaScript-for-Web-Developers-3rd-Edition.productCd-1118026691,descCd-DOWNLOAD.html>
  - Professional-Javascript-for-Web-Developers <https://github.com/zgdong/Professional-Javascript-for-Web-Developers/tree/master/Professional-Javascript-for-web-developers>

```javascript
// 入门
JavaScript编程全解（太细腻）
精通JavaScript开发 (学校看这本书的时候,JS早已更新换代...)

// 进阶
JavaScript DOM编程艺术
JavaScript基础教程
你不知道的JavaScript

// 扩展或深入
JavaScript快速全栈开发
JavaScript设计模式和开发实战
JavaScript高级程序设计(红宝书)
犀牛书（圣经）
数据结构与算法JavaScript描述（据说第1版虎头蛇尾掉了，反正也不想看...）

// 再深入
全端Web开发:使用JavaScript与Java
```

- 思维导图 <https://github.com/lidaguang1989/javascript-knowhow>

> JavaScript语言不是世界上最好的,但这些致力于改善JavaScript的程序员是！！

# 语言

> 一门基于对象和事件驱动并具有安全性的脚本语言

- 现代浏览器完全支持ES5标准

- Unicode <https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/>

- eval() 是整个 ECMAScript语言中最强大的一个方法

  - 但也最危险(代码注入问题)
  - 在 eval() 中创建的任何变量或函数都不会被提升

```shell
// 宿主语言
Web 浏览器只是 ECMAScript 实现可能的宿主环境之一
其他宿主环境包括Node、Adobe、Flash

// 公式
Browser JS ≈ ECMA + DOM + BOM

// 安全性表现
不允许访问本地硬盘(但firefox可以运行webGL)
是否可以对文档进行编辑? HTML5对此的冲击 editable

// 人物关系
ECMA-262 (真名)
Brendan Eich(他爸)
Netscape(死去的奶妈)
JScript(半死不活的对手)
typeScript(涅槃重生)
```

# 语法

- 变量提升
- this constructor
- prototype arguments
- call apply bind

```html
// href操作
href="#"
href="javascript:void(0)"  // 优于href=""
href="javascript:void(console.log('Warning!!!'))"
href="javascript:test();" // 执行此全局函数

// 论如何弄死链接
方法一: <a href="##">点击</a>
方法二: <a href="javascript::">点击</a>
方法三: <a href="Javascript:void(0);">点击</a>

var uri = "http://www.wrox.com/illegal value.htm#start";
console.log(encodeURI(uri)); //"http://www.wrox.com/illegal%20value.htm#start"
console.log(encodeURIComponent(uri)); //"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"

var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
console.log(decodeURI(uri)); // http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
console.log(decodeURIComponent(uri)); // http://www.wrox.com/illegal value.htm#start

// void
function getValue(){
    var a, b, c;
    a = void ( b = 5, c = 7 );  // undefined
}

// 再次声名, 值不会丢失
var carname="Volvo";
var carname;
console.log(carname); // Volvo

// 提升的是变量不是赋值
var y;
console.log(y); // undefined
y = 7;


// switch
使用===进行比较,对比对象可以是任意类型,

// 打印输出
js shell等中的print
innerHTML
console.log()
window.console.log()
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


var htmlstr = `${title[0]}: <select  onChange='bindEvent(this)'><option value="0">--请选择${title[0]}--</option>${opt}</select>`
this.dom.innerHTML = htmlstr;

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

# 7种数据类型

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
console.log(isFinite(result)); //false
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false（10 是一个数值）
console.log(isNaN("10")); //false（可以被转换成数值 10）
console.log(isNaN("blue")); //true（不能转换成数值）
console.log(isNaN(true)); //false（可以被转换成数值 1）

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

# 生命周期/生命域

```javascript
局部变量出函数即死
全局变量是window对象,在页面关闭后才被删除

// 注意
1./JS函数内的for生命域并没有像Java一样实现块级作用域
2./函数内如果赋值给尚未声明过的变量，那么这个变量就会变成全局变量

if (true) {
    var color = "blue";
}
console.log(color); //"blue"

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

# 数组与对象

- 数组API全解密

  - <https://juejin.im/entry/59ad2cacf265da248a7aa6cc>

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
    console.log("Hello " + arguments[0] + "," + arguments[1]);
    console.log(arguments.length);
}

function doAdd(num1, num2) {
    if(arguments.length == 1) {
        console.log(num1 + 10);
    } else if (arguments.length == 2) {
        console.log(arguments[0] + num2);
    }
}
```

# Object

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

# 函数

```javascript
// 变量复制不会相互影响
var num1 = 5;
var num2 = num1;

// 对象复制会相互影响
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); //"Nicholas"

var count = 20;
var result = addTen(count);
console.log(count); //20，没有变化
console.log(result); //30

// 对象是按值传递的
function setName(obj) {
    obj.name = "Nicholas";
}
var person = new Object();
setName(person);
console.log(person.name); //"Nicholas"

// 在函数内部修改了参数的值，但原始的引用仍然保持未变
function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}
var person = new Object();
setName(person);
console.log(person.name); //"Nicholas"
```

# 引用类型

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

# Number对象

- 最大值±1.7976931348623157 x 10308，最小值为±5 x 10 -324
- 整数（不使用小数点或指数计数法）最多为 15 位。
- 小数的最大位数是 17，但是浮点运算并不总是准确
- JavaScript 浮点数运算的精度问题

  - <http://www.css88.com/archives/7340>
  - <https://www.cnblogs.com/Stephenchao/p/5743805.html>
  - JS中浮点数精度问题 <https://juejin.im/post/5aa1395c6fb9a028df223516>

- 解决方案

  - <https://juejin.im/post/5a6fce10f265da3e261c3c71>
  - math.js
  - number-precision <https://github.com/nefe/number-precision>

```javascript
var x = 0.2+0.1; // 输出结果为 0.30000000000000004
var y = 0377; // 八进制
var z = 0xFF; // 十六进制

var myNumber=128;
myNumber.toString(16); // 返回 80
myNumber.toString(8); // 返回 200
myNumber.toString(2); // 返回 10000000
```

- 荒唐现象

```javascript
var c = rate_tax_yzf = 0.11,
    rateTaxYzf = c,
    a = 0.11,

    rate_price_yzf = 31.532,
    ratePriceYzf = 31.352,
    b = 31.352;

console.log(rateTaxYzf, ratePriceYzf, (rateTaxYzf+1) * ratePriceYzf);
console.log(rate_tax_yzf, rate_price_yzf, (rate_tax_yzf+1) * rate_price_yzf);
console.log(a, b, (a+1)*b);

// 0.11 31.352 34.800720000000005
// 0.11 31.532 35.00052
// 0.11 31.352 34.800720000000005
```

- 无穷大Infinity
- NaN - 非数字值

```javascript
var x = 1000 / "Apple"; // true
var x = 100 / "1000"; // still Number, return true
var x = 1000 / 0; // false
to judge: isNaN(x)

var x = 123;
var y = new Number(123);
typeof(x) // return Number
typeof(y) // return Object
(x === y) // false
```

# String对象

- API

  - charAt() charCodeAt() fromCharCode()
  - indexOf() lastIndexOf()
  - concat() match() replace() search()
  - slice() split()
  - substr() substring()
  - toLowerCase() toUpperCase()
  - valueOf()
  - localeCompare()

```javascript
// 3个s方法
var stringValue = "hello world";
console.log(stringValue.slice(3)); //"lo world"
console.log(stringValue.substring(3)); //"lo world"
console.log(stringValue.substr(3)); //"lo world"
console.log(stringValue.slice(3, 7)); //"lo w"
console.log(stringValue.substring(3,7)); //"lo w"
console.log(stringValue.substr(3, 7)); //"lo worl"

// 如果是负数
var stringValue = "hello world";
console.log(stringValue.slice(-3)); //"rld"
console.log(stringValue.substring(-3)); //"hello world"
console.log(stringValue.substr(-3)); //"rld"
console.log(stringValue.slice(3, -4)); //"lo w"
console.log(stringValue.substring(3, -4)); //"hel"
console.log(stringValue.substr(3, -4)); //"" （空字符串）

// charCodeAt
var stringValue = "hello world";
console.log(stringValue.charCodeAt(1)); // 输出"101"

// fromCharCode() 方法
console.log(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"

// concat
var stringValue = "hello ";
var result = stringValue.concat("world", "!");
console.log(result); //"hello world!"
console.log(stringValue); //"hello"

// 操作基本类型值的语句一经执行完毕，
// 就会立即销毁新创建的包装对象
var s1 = "some text";
s1.color = "red";
console.log(s1.color); //undefined

var obj = new Object("some text");
console.log(obj instanceof String); //true

// 使用 new 调用基本包装类型的构造函数
// 与直接调用同名的转型函数是不一样的
var value = "25";
var number = Number(value); //转型函数
console.log(typeof number); //"number"
var obj = new Number(value); //构造函数
console.log(typeof obj); //"object"
```

# Date对象

- API

  - getFullYear() 获取年份

  - getTime() 返回从 1970 年 1 月 1 日至今的毫秒数

  - setFullYear() 设置具体的日期

  - toUTCString() 将当日的日期（根据 UTC）转换为字符串

  - 使用getDay() 和数组来显示星期，而不仅仅是数字。

  - 简化的两种方法

    - Date.parse()
    - Date.UTC()

  - toDateString() ----以特定于实现的格式显示星期几、月、日和年；

  - toTimeString() ----以特定于实现的格式显示时、分、秒和时区；

  - toLocaleDateString() ----以特定于地区的格式显示星期几、月、日和年；

  - toLocaleTimeString() ----以特定于实现的格式显示时、分、秒；

  - toUTCString() ----以特定于实现的格式完整的 UTC 日期。

```javascript
new Date() // 当前日期和时间
new Date(milliseconds) //返回从 1970 年 1 月 1 日至今的毫秒数
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

var today = new Date()
var d1 = new Date("October 13, 1975 11:13:00")
var d2 = new Date(79,5,24)
var d3 = new Date(79,5,24,11,33,0)

var myDate=new Date();
myDate.setFullYear(2010,0,14);
myDate.setDate(myDate.getDate() + 5);

// 比较
var x=new Date();
x.setFullYear(2100,0,14);
var today = new Date();

if (x>today) { console.log("今天是2100年1月14日之前"); }
else { console.log("今天是2100年1月14日之后"); }

// 简化
// var someDate = new Date(Date.parse("May 25, 2004"));
var someDate = new Date("May 25, 2004");
console.log(someDate);

// GMT 时间 2000 年 1 月 1 日午夜零时
var y2k = new Date(Date.UTC(2000, 0));

// GMT 时间 2005 年 5 月 5 日下午 5:55:55
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

//取得开始时间
var start = Date.now();
// var start = +new Date(); // 另一种方法
//调用函数
doSomething();
//取得停止时间
var stop = Date.now(),
result = stop – start;
```

# Array对象

- 合并两个或三个数组 - concat()
- 删除末尾 - pop()
- 末尾新增 - push()
- 删除开头元素 - shift()
- 开头新增 - unshift()
- 从一个数组中选择元素 - slice()
- 在数组的第2位置添加一个元素 - splice()
- sort() reverse()
- 数组 -> 字符串 -toString()
- 字符串 -> 数组 - join()

```javascript
Array.prototype.myUcase=function(){ coding... };
```

# Boolean对象

```javascript
var b1=new Boolean(0);
var b1=new Boolean(-0);
var b3=new Boolean("");
var b4=new Boolean(null);
var b5=new Boolean(NaN);
var b1=new Boolean(false);
var b1=new Boolean(undefined);
var b6=new Boolean("false"); // true
var b2=new Boolean(1); // true, others are false

// 布尔表达式中的所有对象都会被转换为 true
var falseObject = new Boolean(false);
var result = falseObject && true;
console.log(result); //true

var falseValue = false;
result = falseValue && true;
console.log(result); //false
```

# Math算数对象

- var y = Math.sqrt(16);
- Math.E Math.PI
- Math.SQRT2 Math.SQRT1_2
- Math.LN2 Math.LN10
- Math.LOG2E Math.LOG10E

```javascript
// random方法
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}
var num = selectFrom(2, 10);
console.log(num); // 介于 2 和 10 之间（包括 2 和 10）的一个数值
```

# RegExp

- 见正则处
