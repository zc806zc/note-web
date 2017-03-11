#### **JS基础**

* 书单

```js
JavaScript编程全解 
精通JavaScript开发(Den Odell) 

JavaScript DOM编程艺术
JavaScript基础教程 / 你不知道的JavaScript

JavaScript快速全栈开发 / JavaScript设计模式和开发实战
JavaScript高级程序设计  
数据结构与算法JavaScript描述 / 全端Web开发:使用JavaScript与Java
```

* 源码下载
  * [精通JavaScript开发](https://github.com/denodell/pro-javascript-development)
  * [JS数据结构与算法](https://github.com/oreillymedia/data_structures_and_algorithms_using_javascript)

---

* 语言
  * [对文档进行编辑](https://luo0412.github.io/learn-HTML5-CSS3/03-html5-basis/h5-page-edting.html)
  * JS使用[Unicode](https://rainsoft.io/what-every-javascript-developer-should-know-about-unicode/)字符集&lt;/del&gt; 
  * [ECMA标准](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
  * [ECMAScript5支持情况](https://kangax.github.io/compat-table/es5/)       

```js
// JS定义
基于 对象 和 事件驱动 并具有 安全性  的 脚本语言

脚本语言 解释型
浏览器按照顺序自上至下执行渲染

安全性
不允许访问本地硬盘 
但firefox可以运行webGL
不允许对网络文档进行
只能通过浏览器实现信息浏览或动态交互(防止数据丢失)<

// 人物关系
Brendan Eich(他爸)
Netscape(死去的奶妈)
JScript(半死不活的对手)  -> typeScript
ECMA-262(真名) 

// 标准
现代浏览器完全支持ES5
```

---

* 语法

```js
// href操作
href="#" // 当前页面
href="javascript:void(0)"  // 比href=""留空要好href="javascript:void(alert('Warning!!!'))" // 会执行 
href="javascript:test();" // 执行此全局函数

function getValue(){
    var a, b, c;
    a = void ( b = 5, c = 7 );  // undefined
}


// 变量提升
函数及变量的声明被提升到最顶部

// 再次声名, 值不会丢失
var carname="Volvo";
var carname; 

// 仅声名提升, 初始化并不会提升  
var y;
console.log(y); // undefined
y = 7;


// switch使用===进行比较
// JS 中，switch用来判断的表达式可以是任意类型,
 // 而不仅限于整型。例可以是**对象**等，很灵活
var num = 25;
switch (true) {
    case num < 0:
        alert("Less than 0.");
        break;
    case num >= 0 && num <= 10:
        alert("Between 0 and 10.");
        break;
    case num > 10 && num <= 20:
        alert("Between 10 and 20.");
        break;
    default:
        alert("More than 20.");
}


// JS本身并没有任何的打印输出函数，
但是
js shell等中的print
innerHTML
console.log()
window.alert()
document.writeln()  注意执行时加载覆盖问题


// String字符串
toString()
不要用new创建String对象, 会拖慢速度, 现实中的对象可能也是如此...

// 字符串声名**单**双引号皆可, 但例如 java就不行
"It's alright";
"He is called 'Johnny'";
'He is called "Johnny"';

// 因为不同声名并不相等
var x = "John",
y = new String("John");
console.log(x === y) // false

// return的作用
暴露出去
退出函数
注意让函数始终都返回一个值，或者永远都不要返回值，便于调试
不要对return语句进行断行

// break和continuet跳出的是代码块而已
var cars=["BMW","Volvo","Saab","Ford"];
list:
{
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
break list;
console.log(cars[3]);
}

// const的意思 
var
只读
ECMA262里慎用

// eval()可计算某个字符串，执行其中的JS代码，
但不安全

// this 操作自身
<button onclick="this.innerHTML=Date()">现在的时间是?</button>

// for-in语句，性能不佳
且顺序是不可预测的
要迭代的对象的变量值为 null 或 undefined，
for-in 语句仅不执行, 不抛出错误,
建议在使用 for-in 循环之前，先检测确认该对象的值不是 null 或 undefined

for (var propName in window) {
    document.write(propName);
}

// use strict
在脚本或函数的头部添加 
为新版本作铺垫
大型项目在用

var强制性声名
不允许删除变量/对象/函数。
不允许变量/函数参数/对象属性重名
不允许使用八进制
不允许使用转义字符
不允许对只读属性赋值
不允许对一个使用getter方法读取的属性进行赋值 
禁止this关键字指向全局对象 eg.函数中的this不再指向全局
新增了一些保留关键字

不允许删除一个不允许删除的属性
变量名不能使用 "eval" "arguments" 字符串
安全原因, 在作用域 eval() 创建的变量不能被调用
```

* 数组与对象

```js
// 对象键值对的写法类似于
PHP 中的关联数组
Python 中的字典
C 语言中的哈希表
Java 中的哈希映射
Ruby 和 Perl 中的哈希表

 // 数组的推荐声名方式 
 var arr = [40, 100, 1, 5, 25, 10];

 // 数组
var cars=new Array();
cars[0]="Saab"; cars[1]="Volvo"; cars[2]="BMW";

var cars=new Array("Saab","Volvo","BMW");
var cars=["Saab","Volvo","BMW"];

// 使用名字作为索引，访问数组时，
// JavaScript 会把数组重新定义为标准对象。
// 执行这样操作后，数组的方法及属性将不能再使用，否则会产生错误:

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length; // person.length 返回 0
var y = person[0]; // person[0] 返回 undefined

// 对象声名 
var o = {firstName:"John", age:50};

// 取对象key的方法
var person={firstname:"John", lastname:"Doe", id:5566};
name = person.lastname; // solution1
name = person["lastname"]; // solution2
```

* **数据类型**

```js
JS中基本类型是按值传递的，数组与对象是按共享传递的。


// 在条件表达式中，以下会被判定为false
null
undefined
' '
0

// 7种数据类型
String 
Number 
Boolean 
Array 
Object 
Null 
Undefined

//  Undefined 和 Null 的区别
未使用值来声明的变量, 是undefined
typeof undefined // undefined
typeof null // object 一个空对象引用
null === undefined // false
null == undefined // true 因为undefined 值是派生自 null 值的


// instanceof Array 这种方式
只适用于与数组初始化在相同上下文环境

对象只有被定义才有可能为 null, 否则为 undefined。因此想测试对象是否存在
if (myObj !== null && typeof myObj !== "undefined") 
if (typeof myObj !== "undefined" && myObj !== null) // better


// JavaScript只有一种数字类型
var x = 0.1, y = 0.2;
var z = x + y; // 0.3
z == 0.3 // false

// 解决方案 
z = (x * 10 + y * 10) / 10; // z 的结果为 0.3


// 极大或极小的数字可以通过科学（指数）计数法来书写
var y=123e5; // 12300000
var z=123e-5; // 0.00123
```

* 生命周期/生命域 

```js
局部变量出函数就死
全局变量是window对象,在页面关闭后才被删除

// JS函数内的for生命域并没有像Java一样实现块级作用域
(function hello() {
    for (var i = 0; i < 10; i++) { }
    console.log(i); // 10
})();

if (true) {
    var color = "blue";
}
alert(color); //"blue"


// 函数内如果赋值给尚未声明过的变量，那么这个变量就会变成全局变量
function showScope() {
    scope = "local";
    return scope;
}
scope = "global";
console.log(scope); // "global"
console.log(showScope()); // 相当于赋值一遍
console.log(scope); // "local"
```

* 函数与对象

```js
内置函数 
嵌套函数 
递归函数

parseInt(strNum, n)  
parseFloat 
要求数字开头，否则NaN

// toString, toLocaleString

// toFixed  toExponential toPrecision()


prototype  constructor arguments 


// 命名的参数只提供便利
// 但不是必需的,它的值永远与对应命名参数的值保持同步
// 内存空间是独立的，但它们的值会同步
// 严格模式下做出了限制,所有参数传递的都是值
// 不可能通过引用传递参数
function sayHi() {
    alert("Hello " + arguments[0] + "," + arguments[1]);
    alert(arguments.length);
}

//  num2 和 arguments[1]可以互换使用
function doAdd(num1, num2) {
    if(arguments.length == 1) {
        alert(num1 + 10);
    } else if (arguments.length == 2) {
        alert(arguments[0] + num2);
    }
}

// toLocaleString()示例
var arr = ["hello ","world ","JS "];
console.log(arr.toLocaleString()); // hello ,world ,JS 

// toExponential()示例
var num = 10000;
console.log(num.toExponential(2));  //1.00e+4

// toPrecision()
var num = 99;
alert(num.toPrecision(1)); //"1e+2"
alert(num.toPrecision(2)); //"99"
alert(num.toPrecision(3)); //"99.0"
```



