#### **JS函数基础**

* 常识

```js
因为分号是用来分隔可执行的JavaScript语句的，
函数并不是可执行语句，
函数声明不以分号结束

尽可能避免使用 new 关键字

将function描述为 对象 更为准确

如果函数调用时设置了过多的参数，
参数将无法被引用，
因为无法找到对应的参数名。 
只能使用 arguments 对象来调用。

在 ECMAScript 5 中， 
prototype 属性是不可枚举的，
因此使用 for-in 无法发现

// 函数表达式可以存储在变量中
var add = function (a, b) { return a * b };
console.log(add(4, 3)); // 12
console.log(add(7, 3)); // 21

函数可以通过Function()定义,但不推荐
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);

// 也可以写成
var myFunction = function (a, b) {return a * b}
var x = myFunction(4, 3);
x = myFunction(4, 3) * 2; // 总之变成了一个值

// 函数自调用  自执行  闭包演示
(function () {
var x = "Hello!!"; // 我将调用自己
})();

// arguments.length 属性返回函数调用过程接收到的参数个数
function argNum(a, b) {
    return arguments.length;
}
console.log(argNum(1,2,3,4)); // 4
console.log(typeof argNum); // function
console.log( argNum == Object); // false

// toString() 方法将函数作为一个字符串返回
function myFunc(a, b) {
    return a * b;
}
console.log(myFunc.toString()); // function myFunc(a, b) { return a * b; }

// 建议为函数参数设置一个默认值
function myFunction(x, y) {
    if (y === undefined) { y = 0; }
    // y = y || 0; 
}

// 如果你打算直接传入 arguments 对象，
// 或者包含函数中先接收到的也是一个数组，
// 那么使用 apply()肯定更方便；否则可能call更合适。
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



