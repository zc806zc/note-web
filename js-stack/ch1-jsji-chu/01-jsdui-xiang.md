#### **JS对象基础**
+ <del>JS是一门货真价实的面向对象的语言</del>
	+ 传统的面向对象 C++ Java PHP Objective-C
    * JavaScript是面向对象的，但基于prototype(原型), 而不是使用类
    + 继承 → 原型继承 原型链
    + 没有强加刻板的语法结构 更加灵活性
    + 怎么处理封装 多态问题
    + 外层函数 沙箱般的编程环境 闭包 避免变量名冲突
	+ prototype的强大 
		* 在对象实例已经创建以后可以继续添加属性和方法
+ 上下文环境 
	* this
	+ 对象中的 **嵌套**函数context是window,而非包含它的对象
	+ 可以把this的值保存在一个变量里, 命名为 **that**
	+ prototype用来定义方法 this用来定义属性?
* 两个内置对象/单体内置对象
	* Global
    	* URI 编码方法
        * eval() 方法 - 整个 ECMAScript语言中最强大的一个方法
        	* 在 eval() 中创建的任何变量或函数都不会被提升
            * 能力非常强大，但也非常危险, 例代码注入问题
        * window 对象
    * Math
~~~
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
~~~
+ 创建对象
```
// method 1
var person=new Object(); // 少用new
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue"; // 自动添加属性

// method 2
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue", run: function(){}};
```
+ 添加方法到对象
```
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
+ 最大值±1.7976931348623157 x 10308，最小值为±5 x 10 -324
+ 整数（不使用小数点或指数计数法）最多为 15 位。
+ 小数的最大位数是 17，但是浮点运算并不总是准确
```
var x = 0.2+0.1; // 输出结果为 0.30000000000000004
var y = 0377; // 八进制
var z = 0xFF; // 十六进制

var myNumber=128;
myNumber.toString(16); // 返回 80
myNumber.toString(8); // 返回 200
myNumber.toString(2); // 返回 10000000
```
+ 无穷大Infinity
+ NaN - 非数字值
```
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
+ charAt() charCodeAt() fromCharCode()
+ indexOf() lastIndexOf()
+ concat() match() replace() search()
+ slice() split()
+ substr() substring()
+ toLowerCase() toUpperCase()
+ valueOf()
*  <del>localeCompare()</del> 
~~~
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
~~~

#### **Date对象**
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
+ 创建新方法
```
Array.prototype.myUcase=function(){ coding... };
```
+ 方法
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

#### **Boolean对象**
```
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
+ var y = Math.sqrt(16);
+ 常量
+ <del>Math.E</del> Math.PI
+ <del>Math.SQRT2 Math.SQRT1_2</del>
+ <del>Math.LN2 Math.LN10</del>
+ <del>Math.LOG2E Math.LOG10E</del>
~~~
// random方法
function selectFrom(lowerValue, upperValue) {
	var choices = upperValue - lowerValue + 1;
	return Math.floor(Math.random() * choices + lowerValue);
}
var num = selectFrom(2, 10);
alert(num); // 介于 2 和 10 之间（包括 2 和 10）的一个数值
~~~

#### **[RegExp](http://www.regular-expressions.info)对象**  高程P106
* <del>模式的局限性</del>
	* 匹配字符串开始和结尾的 \A 和 \Z 锚
	* 向后查找（lookbehind）
    * 并集和交集类
	* 原子组（atomic grouping）
	* Unicode 支持（单个字符除外，如 \uFFFF ）
	* 命名的捕获组
	* s （single，单行）和 x （free-spacing，无间隔）匹配模式
	* 条件匹配
	* 正则表达式注释
    
![](image/screenshot_1484220984225.png)
```
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