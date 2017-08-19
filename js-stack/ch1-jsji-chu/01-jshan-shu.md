# **Javascript函数**

* 基础
  * 尽可能避免使用 new 关键字
  * 因    为分号是用来分隔可执行的JavaScript语句的，函数并不是可执行语句，函数声明不以分号结束
  * 如果函数调用时设置了过多的参数，参数将无法被引用，因为无法找到对应的参数名,只能使用 arguments 对象来调用
  * 在 ECMAScript 5 中， prototype 属性是不可枚举的，因此使用 for-in 无法发现
  * 闭包 自执行
  * 建议为函数参数设置一个默认值

```js
var add = function (a, b) { return a * b };
console.log(add(4, 3)); // 12


var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);


function argNum(a, b) {
    return arguments.length;
}
console.log(argNum(1,2,3,4)); // 4
console.log(typeof argNum); // function
console.log( argNum == Object); // false
console.log(myFunc.toString()); // function myFunc(a, b) { return a * b; }


function myFunction(x, y) {
    if (y === undefined) { y = 0; }
    // y = y || 0; 
}


function sum(num1, num2){
    return num1 + num2;
}
alert(sum(10,10)); //20
var anotherSum = sum;
alert(anotherSum(10,10)); //20
sum = null; // 仅切断sum与函数的联系
alert(anotherSum(10,10)); //20


// 作为值的函数
function add10(num){
return num + 10;
}
var result1 = callSomeFunction(add10, 10);
alert(result1); //20
function getGreeting(name){
return "Hello, " + name;
}
var result2 = callSomeFunction(getGreeting, "Nicholas");
alert(result2); //"Hello, Nicholas"

// 从一个函数返回另一个函数
function createComparisonFunction(propertyName) {
  return function(object1, object2){
  var value1 = object1[propertyName];
  var value2 = object2[propertyName];
  if (value1 < value2){
  return -1;
  } else if (value1 > value2){
  return 1;
  } else {
  return 0;
  }
};
}

var data = [{name: "Zachary", age: 28}, {name: "Nicholas", age: 29}];
data.sort(createComparisonFunction("name"));
alert(data[0].name); //Nicholas
data.sort(createComparisonFunction("age"));
alert(data[0].name); //Zachary

// 消除阶乘的紧耦合
function factorial(num){
    if (num <=1) {
        return 1;
    } else {
        return num * arguments.callee(num-1)
    }
}

var trueFactorial = factorial;
factorial = function(){
return 0;
};
alert(trueFactorial(5)); // 120
alert(factorial(5)); // 0

// caller
function outer(){
    inner();
}
function inner(){
    alert(arguments.callee.caller);
}
outer();

// 传递参数并非 apply() 和 call() 真正的用武之地；
// 它们真正强大的地方是能够扩充函数赖以运行的作用域。
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    alert(this.color);
}

sayColor(); //red
sayColor.call(this); //red
sayColor.call(window); //red
sayColor.call(o); //blue

// bind方法
window.color = "red";
var o = { color: "blue" };
    function sayColor(){
    alert(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor(); //blue
```

#### **函数提升**

```js
// 会报错
console.log(sum(10,10));
var sum = function(num1, num2){
    return num1 + num2;
};
```

#### **函数调用**

```js
this 是保留关键字，不能修改 this 的值

JS有4 种函数调用方式
常用的， 可能造成全局变量的冲突

// 使用windows对象可能导致崩溃
function myFunction(a, b) {
return a * b;
}
window.myFunction(10, 2); // 20

function myFunction() {
    return this;
}
myFunction(); // 返回 window 对象


// 函数作为对象方法调用
  var myObject = {
      firstName:"John",
      lastName: "Doe",
      fullName: function () {
          return this.firstName + " " + this.lastName;
          // return this;  // 返回[object object] 所有者对象
      }
  }
  myObject.fullName(); //  "John Doe"

// 使用构造函数调用函数
  function myFunction(arg1, arg2) {
      this.firstName = arg1;
      this.lastName = arg2;
  }

  var x = new myFunction("John","Doe");
  x.firstName;

 // 作为函数方法调用函数 

// call 和 apply是预定义的函数方法
 两个方法的第一个参数必须是对象本身。
通过 call() 或 apply() 方法你可以设置 this 的值, 
且作为已存在对象的新方法调用 

function mul(a, b) {
    return a * b;
}
myArr = [10, 2];
console.log( mul.apply(Object, myArr) ); // 20
console.log( mul.call(Object, 2, 3)); // 6
```

#### **函数闭包**

```js
全局和局部变量即便名称相同，
它们也是两个不同的变量。

修改其中一个，不会影响另一个的值。

var a = 3;
function mul() {
    var a = 4;
    return a * a; // 16
}
console.log(mul; 
console.log(mul()); // 16

// 计数器实现 - 可以使用全局变量
使用内嵌函数，怎么解决 计数器困境

function add() {
    var counter = 0;
    function plus() { counter += 1; }
    plus(); // 访问父元素
    return counter;
}  

如何在外部访问 plus() 函数，确保 counter = 0 只执行一次。
函数闭包使得函数拥有私有变量变成可能。
计数器受匿名函数的作用域保护，只能通过 add 方法修改。

var add = (function () {
    var counter = 0;
    return function () { return counter += 1; }
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
```

#### **JS对象基础**

* JS是一门货真价实的面向对象的语言

```js
传统的面向对象 C++ Java PHP Objective-C
JavaScript是面向对象的，但基于prototype(原型), 而不是使用类
继承 → 原型继承 原型链
没有强加刻板的语法结构 更加灵活性
怎么处理封装 多态问题
外层函数 沙箱般的编程环境 闭包 避免变量名冲突
prototype的强大
在对象实例已经创建以后可以继续添加属性和方法
上下文环境

this
对象中的 **嵌套**函数context是window,而非包含它的对象
可以把this的值保存在一个变量里, 命名为 **that**
prototype用来定义方法 this用来定义属性?
两个内置对象/单体内置对象

Global
URI 编码方法
eval() 方法 - 整个 ECMAScript语言中最强大的一个方法
在 eval() 中创建的任何变量或函数都不会被提升
能力非常强大，但也非常危险, 例代码注入问题
window 对象
Math
```

* 示例

```js
var uri = "http://www.wrox.com/illegal value.htm#start";

//"http://www.wrox.com/illegal%20value.htm#start"
alert(encodeURI(uri));

//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
alert(encodeURIComponent(uri));

var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

// http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
alert(decodeURI(uri));

// http://www.wrox.com/illegal value.htm#start
alert(decodeURIComponent(uri));

// 取得Global对象的一种方法
var global = function(){
return this;
}();
```

* 创建对象

```js
// method 1
var person=new Object(); // 少用new
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue"; // 自动添加属性

// method 2
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue", run: function(){}};
```

* 添加方法到对象

```js
function person(firstname,lastname,age,eyecolor) {
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.eyecolor=eyecolor;

  // 方法
  this.changeName=changeName;
  function changeName(name) {
     this.lastname=name;
  }

}
myFather = new person("John","Doe",50,"blue");
// myFather.name = "Dick";
myFather.changeName("Doe");
```

#### **Number对象**

* 基础

```js
+ 最大值±1.7976931348623157 x 10308，最小值为±5 x 10 -324
+ 整数（不使用小数点或指数计数法）最多为 15 位。
+ 小数的最大位数是 17，但是浮点运算并不总是准确


var x = 0.2+0.1; // 输出结果为 0.30000000000000004
var y = 0377; // 八进制
var z = 0xFF; // 十六进制

var myNumber=128;
myNumber.toString(16); // 返回 80
myNumber.toString(8); // 返回 200
myNumber.toString(2); // 返回 10000000
```

* 无穷大Infinity
* NaN - 非数字值

```js
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

#### **String对象**

* 基础

```js
+ charAt() charCodeAt() fromCharCode()
+ indexOf() lastIndexOf()
+ concat() match() replace() search()
+ slice() split()
+ substr() substring()
+ toLowerCase() toUpperCase()
+ valueOf()
* <del>localeCompare()</del>
```

* 示例

```js
// 3个s方法
var stringValue = "hello world";
alert(stringValue.slice(3)); //"lo world"
alert(stringValue.substring(3)); //"lo world"
alert(stringValue.substr(3)); //"lo world"
alert(stringValue.slice(3, 7)); //"lo w"
alert(stringValue.substring(3,7)); //"lo w"
alert(stringValue.substr(3, 7)); //"lo worl"

// 如果是负数
var stringValue = "hello world";
alert(stringValue.slice(-3)); //"rld"
alert(stringValue.substring(-3)); //"hello world"
alert(stringValue.substr(-3)); //"rld"
alert(stringValue.slice(3, -4)); //"lo w"
alert(stringValue.substring(3, -4)); //"hel"
alert(stringValue.substr(3, -4)); //"" （空字符串）

// charCodeAt
var stringValue = "hello world";
alert(stringValue.charCodeAt(1)); // 输出"101"

// fromCharCode() 方法
alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"

// concat
var stringValue = "hello ";
var result = stringValue.concat("world", "!");
alert(result); //"hello world!"
alert(stringValue); //"hello"

// 操作基本类型值的语句一经执行完毕，
// 就会立即销毁新创建的包装对象
var s1 = "some text";
s1.color = "red";
alert(s1.color); //undefined

var obj = new Object("some text");
alert(obj instanceof String); //true

// 使用 new 调用基本包装类型的构造函数
// 与直接调用同名的转型函数是不一样的
var value = "25";
var number = Number(value); //转型函数
alert(typeof number); //"number"
var obj = new Number(value); //构造函数
alert(typeof obj); //"object"
```

#### **Date对象**

* 基础

```js
+ getFullYear() 获取年份
+ getTime() 返回从 1970 年 1 月 1 日至今的毫秒数
+ setFullYear() 设置具体的日期
+ toUTCString() 将当日的日期（根据 UTC）转换为字符串
+ 使用getDay() 和数组来显示星期，而不仅仅是数字。
*  简化的两种方法
    * Date.parse()
    * Date.UTC()
* toDateString() ——以特定于实现的格式显示星期几、月、日和年；
* toTimeString() ——以特定于实现的格式显示时、分、秒和时区；
* toLocaleDateString() ——以特定于地区的格式显示星期几、月、日和年；
* toLocaleTimeString() ——以特定于实现的格式显示时、分、秒；
* toUTCString() ——以特定于实现的格式完整的 UTC 日期。
```

* 示例

```js
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

if (x>today) { alert("今天是2100年1月14日之前"); }
else { alert("今天是2100年1月14日之后"); }

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

#### **Array对象**

* 创建新方法

```js
Array.prototype.myUcase=function(){ coding... };
```

* 方法

```js
  + 合并两个或三个数组 - concat()
  + 删除末尾 - pop()
  + 末尾新增 - push()
  + 删除开头元素 - shift()
  + 开头新增 - unshift()
  + 从一个数组中选择元素 - slice()
  + 在数组的第2位置添加一个元素 - splice()
  + sort() reverse()
  + 数组 -> 字符串 -toString()
  + 字符串 -> 数组 - join()
```

#### **Boolean对象**

* 示例

```js
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
alert(result); //true

var falseValue = false;
result = falseValue && true;
alert(result); //false
```

#### **Math算数对象**

* 基础

```js
+ var y = Math.sqrt(16);
+ 常量
+ <del>Math.E</del> Math.PI
+ <del>Math.SQRT2 Math.SQRT1_2</del>
+ <del>Math.LN2 Math.LN10</del>
+ <del>Math.LOG2E Math.LOG10E</del>
```

* 示例 

```js
// random方法
function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}
var num = selectFrom(2, 10);
alert(num); // 介于 2 和 10 之间（包括 2 和 10）的一个数值
```

#### [**RegExp**](http://www.regular-expressions.info)**对象**  高程P106

* 基础

```js
<del>模式的局限性</del>
    * 匹配字符串开始和结尾的 \A 和 \Z 锚
    * 向后查找（lookbehind）
    * 并集和交集类
    * 原子组（atomic grouping）
    * Unicode 支持（单个字符除外，如 \uFFFF ）
    * 命名的捕获组
    * s （single，单行）和 x （free-spacing，无间隔）匹配模式
    * 条件匹配
    * 正则表达式注释
```

* 示例

```js
// 匹配第一个"bat"或"cat"，不区分大小写
var pattern2 = /[bc]at/i;

// 匹配所有以"at"结尾的 3 个字符的组合，不区分大小写
var pattern3 = /.at/gi;

// 匹配所有".at"，不区分大小写
var pattern4 = /\.at/gi;

// 创建
var re = new RegExp("\\w+");
var re = /\w+/; // 转义字符

// 示例1
var str="Is this all there is?";
var patt1=/is/gi; // 全局查找 不区分大小写
document.write(str.match(patt1)); // Is,is,is

// 示例2 test方法
var str = 'runoob';
var patt1 = new RegExp('\\w', 'g'); // 有转义作为正则表达式处理
var patt2 = new RegExp('\w', 'g'); // 无转义作为字符串处理
var patt3 =/\w+/g; // 与 patt1 效果相同
document.write(patt1.test(str)) // true
document.write("<br>")
document.write(patt2.test(str)) // false
document.write("<br>")
document.write(patt3.test(str)) // true

// 示例3 exec方法
var patt1=new RegExp("e"); // 找到返回值是被找到的值。如果没有,返回 null
document.write(patt1.exec("The best things in life are free")); // e

// RegExp 实例属性
var pattern1 = /\[bc\]at/i;
alert(pattern1.global); //false
alert(pattern1.ignoreCase); //true
alert(pattern1.multiline); //false
alert(pattern1.lastIndex); //0
alert(pattern1.source); //"\[bc\]at"

var pattern2 = new RegExp("\\[bc\\]at", "i");
alert(pattern2.global); //false
alert(pattern2.ignoreCase); //true
alert(pattern2.multiline); //false
alert(pattern2.lastIndex); //0
alert(pattern2.source); //"\[bc\]at"

// RegExp 实例方法
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
alert(matches.index); // 0
alert(matches.input); // "mom and dad and baby"
alert(matches[0]); // "mom and dad and baby"
alert(matches[1]); // " and dad and baby"
alert(matches[2]); // " and baby"

// RegExp 构造函数属性 参考上图
```



