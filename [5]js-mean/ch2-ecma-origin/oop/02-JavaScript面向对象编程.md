# 创建对象

```javascript
var person= {}; // 少用new
person.firstname="John";
person.run  = function(){}; // 自动添加属性

// 添加方法到对象
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
myFather.changeName("Doe");
```

# 实现继承

- 原型链
- 函数伪装
- 原型链 + 函数伪装(正确打开方式)

```javascript
// 第一部分
function Parent(name){
  this.color = ["red","blue"];
  this.name = name;
}
Parent.prototype.talk = function(){
  alert(this.name+"["+this.color+"]");
}

// 第二部分
function Child(name,age){
  //函数伪造继承
  Parent.call(this,name);
  this.age = age;
}

// 原型链继承
Child.prototype = new Parent();

Child.prototype.say = function(){
  alert(this.name+","+this.color);
}

//第三部分
var c1 = new Child("Leon",22);
c1.color.push("green");
c1.say();     // 输出：Leon[red,blue,green]
var c2 = new Child("Ada",25);
c2.say();     // 输出：Ada[red,blue]
```

# 面向对象编程指南

- <https://github.com/batmanimal/object-oriented-js>

- 博客 <http://www.cnblogs.com/zengFyzL/>

- 重新理解JS的6种继承方式 <https://www.cnblogs.com/ayqy/p/4471638.html>

  - 简单原型链 Sub.prototype = new Super();
  - 借用构造函数 Super.call(this, val);
  - 组合继承（最常用）Sub.prototype = new Super(); + Super.call(this, val);
  - 原型式
  - 寄生式(给原型式继承穿了个马甲而已，看起来更像继承了) ：创建新对象 -> 增强 -> 返回该对象
  - 寄生组合继承（最佳方式）有缺陷的寄生式继承 + 不完美的组合继承 = 完美的寄生组合式继承

```javascript
// 寄生组合继承
function beget(obj){   // 生孩子函数 beget：龙beget龙，凤beget凤。
    var F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    // 只在此处声明基本属性和引用属性
    this.val = 1;
    this.arr = [1];
}
//  在此处声明函数
Super.prototype.fun1 = function(){};
Super.prototype.fun2 = function(){};
//Super.prototype.fun3...
function Sub(){
    Super.call(this);   // 核心
    // ...
}
var proto = beget(Super.prototype); // 核心
proto.constructor = Sub;            // 核心
Sub.prototype = proto;              // 核心

var sub = new Sub();
alert(sub.val);
alert(sub.arr);
```


# JS实现继承

- 摘自《javaScript面向对象编程指南(第2版)》chapter 6
- https://github.com/Lvqx/ooptest
- 分类方式
  - 基于构造器或对象
  - 是否使用原型或执行属性拷贝

# 原理实现(9种)


>  原型链法(仿传统) Child.prototype = new Parent();  

- 把可重用部分迁移到原型链，不可重用部分设置为对象自身的属性

```js
function Shape() {
  this._final =  "final";
}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
  return this.name;
}

function TwoDShape(){}
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape';

function Triangle(side,height) {
  this.side = side;
  this.height = height;
}
Triangle.prototype = new TwoDShape();
Triangle.prototype.constructor = Triangle;

Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function() {
  console.log(this.side * this.height / 2);
}
var triangle = new Triangle(5,10);
triangle.getArea();
```

> 仅从原型继承法 Child.prototype = Parent.prototype;

- 原型拷贝，不存在原型链，所有对象共享一个原型对象
- 不用新建对象，效率更高
- 缺点是对子对象的修改会影响到父对象

```js
function Shape() {}
Shape.prototype.name = 'shap';
Shape.prototype.toString = function() {
  return this.name;
}

function TwoDShape() {}
// 区别
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape';

function Triangle(side,height) {
  this.side = side;
  this.height = height;
}
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;

Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function() {
  return (this.side * this.height) / 2;
  // console.log(1);
}
```

> 临时构造器法 extend: new F() + uber

- 基于构造器工作模式
- 只继承父对象的原型属性，不继承父对象的自身属性(构造器this追加)
- 使用uber方便访问父对象

```js
function Person () {}
Person.prototype.name = 'person';
Person.prototype.sleep = function() {
 return this.name + '睡觉';
}

function Teacher() {}
Teacher.prototype.name = 'teacher';

function extend(Child, Parent) {
   // function F() {}
   var F = function() {}
   F.prototype = Parent.prototype;
   Child.prototype = new F();
   Child.prototype.constructor = Child;
   Child.uber = Parent.prototype;
}
extend(Teacher,Person);
```

> 原型属性拷贝法 extend2: for copy... + uber

- 无需为继承单独创建对象实例
- 原型链相对更短

```js
function extend2(Child,Parent) {
  var p = Parent.prototype;
  var c= Child.prototype;
  for(var i in p) {
    c[i] = p[i];
  }
  c.uber = p;
}
var Shape = function() {}
var TwoDShape = function() {}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
  return this.name;
}
TwoDShape.prototype.name = '2D shape';
extend2(TwoDShape,Shape);
```

> 浅/深拷贝法(2种) extendCopy + return

- 基于对象，拷贝属性
- 浅拷贝 即属性全拷贝法
- 区别于浅拷贝, 深拷贝遇到对象类型是重复调用拷贝(值传递)

```js
// 浅拷贝
function extendCopy(p) {
  var c = {};
  for (var i in p) {
      c[i] = p[i];
  }
  c.uber = p;
  return c;
}
var shape = {
    name: 'shap',
    toString: function() {
        return this.name;
    }
}
var twoDee = extendCopy(shape);
twoDee.name = '2D shape';
twoDee.toString = function() {
    return this.uber.toString() + ', ' + this.name;
}
var triangle = extendCopy(twoDee);
triangle.name = 'Triangle';
triangle.getArea = function() {
    return this.side * this.height / 2;
}

// 深拷贝
function deepCopy(p,c) {
  var c = c || {};
  for(var i in p) {
    if(typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy(p[i],c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}

var parent = {
  numbers: [1,2,3],
  letters: ['a','b','c'],
  obj: {
    prop: 1
  },
  bool: true
}
// var mydeep = deepCopy(parent)
// undefined
// var myshallow = extendCopy(parent)
// undefined
// mydeep.numbers.push(4,5,6)
// 6
// mydeep.numbers
// [1, 2, 3, 4, 5, 6]
// parent.numbers
// [1, 2, 3]
// myshallow.numbers.push(10)
// 4
// parent.numbers
// [1, 2, 3, 10]
// mydeep.numbers
// [1, 2, 3, 4, 5, 6]

```

> 原型继承法 (F.prototype = o;) + return

- 基于对象，直接在对象之间构建继承关系
- 发挥原型固有优势

```js
function object(o) {
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;
    return n;
}
function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}
var shape = {
    name: 'shap',
    toString: function() {
        return this.name;
    }
}
var twoDee = extendCopy(shape);
twoDee.name = '2D shape';
twoDee.toString = function() {
    return this.uber.toString() + ', ' + this.name;
}
var triangle = object(twoDee);
triangle.name = 'Triangle';
triangle.getArea = function() {
    return this.side * this.height / 2;
}
```

> 寄生继承法 that = object(victim) + return

- 通过一个类似构造器的函数来创建对象

```js
var twoD = {
    name: '2D shape',
    dimensions: 2
}

function object(o) {
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;
    return n;
}
function triangle(s, h) {
    var that = object(twoD);
    that.name = 'Triangle';
    that.getArea = function() {
        return this.side * this.height / 2;
    };
    that.side = s;
    that.height = h;
    return that;
}
/*
  >var t = triangle(5,10);
  <undefined
  >t.dimensions
  <2
  >var t2 =new triangle(5,10)
  <undefined
  >t2.getArea()
  <25
 */
```

> 构造器借用法 Parent.apply(this,argument);

- 只继承父对象的自身属性
- 可结合原型链法

```js
function Shape(id) {
   this.id = id;
}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
   return this.name;
}
function Triangle() {
   Shape.apply(this, arguments);
}
Triangle.prototype.name = 'Triangle';
// >var t = new Triangle(101)
// <undefined
// >t.name;
// <"Triangle"
// >t.toString()
// <"[object Object]"
function Triangle() {
   Shape.apply(this, arguments);
}
Triangle.prototype = new Shape();
Triangle.prototype.name = 'Triangle';
```

# 混合扩展实现 (3种)

> 原型继承 + 属性拷贝

- 通过一个函数一次性完成对象的继承与扩展

```js
function objectPlus(o, stuff) {
    var n;
    function F() {}
    F.prototype = o;
    n = new F();
    n.uber = o;
    for (var i in stuff) {
        n[i] = stuff[i];
    }
    return n;
}
var shape = {
  name: 'shape',
  toString: function() {
    return this.name;
  }
}
var twoDee = objectPlus(shape,{
  name: '2D shape',
  toString :function() {
    return this.uber.toString() + ', ' + this.name;
  }
});
var triangle = objectPlus(twoDee, {
  name: 'Triangle',
  getArea: function() {
    return this.side * this.height /2;
  },
  side:0,
  height:0
})
```

> 构造器借用 + 属性拷贝法 parent.apply(this,arguments) + extend2

- 允许我们在不重复调用父对象构造器的情况下同时继承其自身属性和原型属性

```js
function extend2(Child, Parent) {
    var p = Parent.prototype;
    var c = Child.prototype;
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
}
function Shape(id) {
  this.id = id;
}
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {
  return this.name;
}
function Triangle() {
  Shape.apply(this,arguments);
}
extend2(Triangle,Shape);
Triangle.prototype.name = 'Triangle';
// var t = new Triangle(101)
// undefined
// t.toString()
// "Triangle"
// t.id
// 101
//解决了多重继承的问题
// typeof t.__proto__.id
// "undefined"
// t.uber.name
// "shape"
```

> 多重继承

- 一种混合式插入
- 按照父对象的出现顺序依次对他们执行属性全拷贝

```js
function multi() {
  var n = {},stuff,j=0,len = arguments.length;
  for(j = 0;j<len;j++) {
    stuff = arguments[j];
    for(var i in stuff) {
      n[i] = stuff[i];
    }
  }
  return n;
}
var shape = {
  name: 'shape',
  toString: function() {
    return this.name;
  }
}
var twoDee = {
  name: '2D shape',
  dimensions: 2
}
var triangle = multi(shape,twoDee, {
  name: 'Triangle',
  getArea: function() {
    return this.side * this.height / 2;
  },
  side: 5,
  height: 10
})
```
