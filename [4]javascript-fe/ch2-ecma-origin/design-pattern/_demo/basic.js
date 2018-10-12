// javascript设计模式

// 设计模式与多态

var duck = {
	duckSinging: function(){
		console.log('ga ga ga');
	}
};

var chicken = {
	duckSinging: function() {
		console.log('ga ga ga');
	}
};

// 合唱团
var choir = [];

var joinChoir = function(animal) {
	if(animal && typeof animal.duckSinging === 'function') {
		choir.push(animal);

		console.log('恭喜加入合唱团');
		console.log('合唱团已有成员数量：' + choir.length);
	}
};

joinChoir(duck);
joinChoir(chicken);

/*
* 多态的例子
*/
var makeSound = function(animal){
	if(animal instanceof Duck) {
		console.log('是一只鸭子')
	}
	else if(animal instanceof Chicken) {
		console.log('是一只鸡')
	}
}

var Duck = function () {}
var Chicken = function () {}

makeSound( new Duck() ) // 是一只鸭子
makeSound( new Chicken() ) // 是一只鸡

/*
* 这样的判断比较繁琐，如果后面要判断一只狗，则要修改makeSound函数，
* 不符合开发封闭原则，我们将代码重新修改一下
*/

var makeSound = function(animal) {
	animal.sound()
}

var Duck = function() {}
Duck.prototype.sound = function() {
	console.log('是一只鸭子')
}

var Chicken = function() {}
Duck.prototype.sound = function() {
	console.log('是一只鸡')
}

makeSound(new Duck())
makeSound(new Chicken())

/* 现在加多一只狗进来 */
var Dog = function () {}
Dog.prototype.sound = function() {
	console.log('单身狗一只')
}

makeSound(new Dog())

/*
* 假设我们要编写一个地图应用
*/
var googleMap = {
	show: function() {
		console.log('google map')
	}
}

var renderMap = function() {
	googleMap.show()
}

renderMap() // 渲染google 地图

/* 后来因为某些原因，要把谷歌地图换成百度地图，为了让 renderMap
 * 函数保持一定的弹性，我们用一些条件分支来让 renderMap
 * 函数同时支持谷歌地图和百度地图
*/
var googleMap = {
	show: function(){
		console.log('google map')
	}
}

var baiduMap = {
	show: function(){
		console.log('baidu map')
	}
}

var renderMap = function(type) {
	if(type === 'google'){
		googleMap.show()
	}
	else if(type === 'baidu') {
		baiduMap.show()
	}
}

renderMap('google') // 渲染google地图
renderMap('baidu') // 渲染baidu地图

/*
* 我们可以把程序中相同的部分抽象出来
*/

var renderMap = function(map) {
	if(map.show instanceof Function) {
		map.show()
	}
}

renderMap( googleMap ) // 渲染google地图
renderMap( baiduMap ) // 渲染baidu地图

/*
* 当再添加其他的地图的时候，我们只需要添加如下代码
*/
var sosoMap = {
	show: function(){
		console.log('soso map')
	}
}

renderMap( sosoMap ) // 渲染soso地图

/*
* 封装数据
*/
var myObject = (function() {
	var _name = 'helloman' // private变量

	return {
		getName: function(){
			return _name
		}
	}
})()

console.log( myObject.getName() ) // helloman
console.log( myObject._name ) // undefined

/*
* 使用克隆的原型模式
*/
var Plane = function() {
	this.boold = 100
	this.attackLevel = 1
	this.defenseLevel = 1
}

var plane = new Plane()
plane.boold = 200
plane.attackLevel = 6
plane.defenseLevel = 10

var clonePlane = Object.create(plane)
console.log(clonePlane) // {boold: 200, attackLevel: 6, defenseLevel: 10}

/*
* 不支持Object.clone方法的浏览器可以使用如下方法
*/
Object.create = Object.create || function(obj) {
	var F = function() {}
	F.prototype = obj

	return new F()
}

/*
* 对象原型链
*/

var obj = { name: 'helloman' }
var A = function() {}
A.prototype = obj

var a = new A()
console.log( a.neme ) // helloman
/*
* 首先，尝试遍历对象 a 中的所有属性，但没有找到 name 这个属性。
* 查找 name 属性的这个请求被委托给对象 a 的构造器的原型，它被 a. __proto__ 记录着并且
* 指向 A.prototype ，而 A.prototype 被设置为对象 obj 。
* 在对象 obj 中找到了 name 属性，并返回它的值
*/

/*
* 当我们期望得到一个“类”继承自另外一个“类”的效果时，往往会用下面的代码来模拟实现
*/
var A = function() {}
A.prototype = { name: 'helloman' }

var B = function(){}
B.prototype = new A()

var b = new B()
console.log( b.name ) // helloman

/*
  this call apply
  作为对象的方法调用
	作为普通函数调用
	构造器调用
	Function.prototype.call 或 Function.prototype.apply 调用
*/

/*
	1. 作为对象的方法调用
	当函数作为对象的方法被调用时， this 指向该对象：
 */
var obj = {
	a: 1,
	getA: function(){
		console.log( this === obj ) // true
		console.log( this.a ) // 1
	}
}

obj.getA()

/*
  2. 作为普通函数调用
 */

window.name = 'globalName'

var getName = function() {
	return this.name
}

console.log( getName() ) // globalName

/* ---------或者----------*/

window.name = 'globalName'

var myObj = {
	name: 'helloman',
	getName: function(){
		return this.name
	}
}

var getName = myObj.getName;
console.log( getName() ) // globalName

window.id = 'window'

document.getElementById('div1').onclick = function() {
	console.log( this.id )

	var callback = function() {
		// 函数内的this指向window
		console.log( this.id ) // window
	}

	callback()
}

document.getElementById('div1').onclcik = function() {
	var that = this // 保存div1的引用
	var callback = function() {
		console.log( that.id ) // div1
	}
	callback()
}

/*
 在 ECMAScript 5的 strict 模式下，这种情况下的 this 已经被规定为不会指向全局对象，而
 是 undefined ：
 */

(function func() {
	'use strict'
	alert( this ) // undefined
})()

/*
  3.构造器调用
 */

var myClass = function() {
	this.name = 'helloman'
}

var obj = new myClass()
console.log( obj.name ) // 'helloman'

/*
  如果构造器显式地返回了一个 object 类型的对
	象，那么此次运算结果最终会返回这个对象
 */

var myClass = function() {
	this.name = 'helloman'
	return {
		name: 'even'
	}
}

var obj = new myClass()
console.log( obj.name ) // even

/*
  如果构造器不显式地返回任何数据，或者是返回一个非对象类型的数据，就不会造成上述
	问题
 */

var myClass = function (){
	this.name = 'helloman'
	return 'even' // return String type
}

var obj = new myClass()
console.log( obj.name ) // helloman

/*
	4.  Function.prototype.call 或 Function.prototype.apply 调用
 */

var obj1 = {
	name: 'helloman'
	getName: function() {
		return this.name
	}
}

var obj2 = {
	name: 'scott'
}

console.log( obj1.getName() )  // 'helloman'
console.log( obj1.getName.call(obj2) ) // scott

/*
	丢失的 this
 */

var obj = {
	name: 'hello'
	getName: function() {
		return this.name
	}
}

console.log( obj.getName() ) // hello

/*
	此时的getName2 是作为普通函数调用
	this指向window,而window上并无name
	所以返回undefined
 */
var getName2 = obj.getName()
console.log( getName2() ) // undefined

/*
	document.getElementById 例子
*/
var getId = function( id ) {
	return document.getElementById( id )
}

getId( 'div1' ) // 程序正常

/*
	我们也许思考过为什么不能用下面这种更简单的方式：
 */

var getId = document.getElementById;
getId( 'div1' );

/*
	上面这段代码回抛出异常，原因如下
	getElementById 是document对象下的一个方法
	当我们赋值给getId时候，getId作为普通函数调用时
	this指向了window, 而window并无getElementById方法
 */

/*
	我们可以尝试利用 apply 把 document 当作 this 传入 getId 函数，帮助“修正” this
 */

document.getElementById = (function( func ) {
	return function () {
		return func.apply( document, arguments )
	}
})(document.getElementById)

var getId = document.getElementById
var div = getId( 'div1' )

/*
	call 和 apply 的区别
	apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向，
	第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，
	apply 方法把这个集合中的元素作为参数传递给被调用的函数
 */

var func = function ( a, b, c ) {
	console.log( [a, b, c] ) // 1, 2, 3
}

func.apply( null, [1, 2, 3])

/*
	call 传入的参数数量不固定，跟 apply 相同的是，
	第一个参数也是代表函数体内的 this 指向，
	从第二个参数开始往后，每个参数被依次传入函数
 */

var func = function ( a, b, c ) {
	console.log( [a, b, c]) // 1, 2, 3
}

func.call( null, 1, 2, 3)

/*
	call 是包装在 apply 上面的一颗语法糖，
	如果我们明确地知道函数接受多少个参数，而且想
	一目了然地表达形参和实参的对应关系，那么也可以用 call 来传送参数
 */

var func = function ( a, b, c ) {
	console.log( this === window ) // true 浏览器内，this指向window
}
func.apply( null, [1, 2, 3])

var func = function ( a, b, c) {
	'use strict'
	console.log( this === null ) // true 严格模式下，this为Null
}

func.apply( null, [1, 2, 3])

/*
	有时候我们使用 call 或者 apply 的目的不在于指定 this 指向，
	而有用途，比如借用其他对象的方法。
	那么我们可以传入 null 来代替某个具体的对象
 */

Math.max.apply( null, [1, 3, 5, 2]) // 5

/*
	call 和 apply 的用途
	1. 改变 this 指向
 */

var obj1 = {
	name: 'helloman'
}

var obj2 = {
	name: 'even'
}

window.name = 'global'

var getName = function() {
	return this.name
}

getName(); // 输出: global
getName.call( obj1 ); // 输出: helloman
getName.call( obj2 ); // 输出: even

/*
 call 修正 this 指向
 */

document.getElementById( 'div1' ).onclcik = function() {
	console.log( this.id ) // div1

	var func = function() {
		console.log( this.id ) // undefined
	}
	func()
}

document.getElementById( 'div1' ).onclick = function() {
	console.log( this.id ) // div1

	var func = function() {
		console.log( this.id ) // div1
	}

	func.call( this )
}

/*
	 Function.prototype.bind
 */

Function.prototype.bind = function( context ) {
	var self = this // 保存 this

	// 返回一个新函数
	return function() {
		// 执行新函数的时候，会把之前的contenxt当作新函数体内的this
		return self.apply( context, arguments )
	}
}

var obj = {
	name: 'helloman'
}

var func = function() {
	console.log( this.name ) // helloman
}.bind( obj )

func()
/*
在 Function.prototype.bind 的内部实现中，我们先把 func 函数的引用保存起来，然后返回一
个新的函数。当我们在将来执行 func 函数时，实际上先执行的是这个刚刚返回的新函数。在新
函数内部， self.apply( context, arguments ) 这句代码才是执行原来的 func 函数，并且指定 context
对象为 func 函数体内的 this
 */

Function.prototype.bind = function() {
	var self = this, // 保存原函数
			empty = [],
			context = empty.shift.call( arguments ), // 需要绑定的 this 上下文
			args = empty.slice.call( arguments ); // 剩余的参数转成数组
	return function(){  // 返回一个新的函数
		return self.apply( context, empty.concat.call( args, empty.slice.call( arguments ) ) )
		// 执行新的函数的时候，会把之前传入的 context 当作新函数体内的 this
		// 并且组合两次分别传入的参数，作为新函数的参数
	}
}

var obj = {
	name: 'john'
}

var func = function( a, b, c, d) {
	console.log( this.name )
	console.log( [a, b, c, d]) // [ 1, 2, 3, 4 ]
}.bind(obj, 1, 2 )

func( 3, 4 )

/*
	借用其他对象的方法
 */

var A = function( name, age ) {
	this.name = name
	this.age = age
}

var B = function() {
	A.apply( this, arguments )
}

B.prototype.getName = function() {
	return this.name + this.age
}

var b = new B( 'john', 30 )
b.getName() // john

/*
借用方法的第二种运用场景
Array.prototype.push
 */

(function() {
	Array.prototype.push.call( arguments, 'b')
	console.log( arguments )
})( 1, 3 )

/*
我们可以把“任意”对象传入 Array.prototype.push
 */

var myObj = {}

Array.prototype.push.call( myObj, 'a' )
console.log( myObj.length ) // 1
console.log( myObj[0] )

/*
闭包和高阶函数
 */

var func = function() {
	var a = 1
	console.log( a ) // 1
}
func()

console.log( a ) // Uncaught ReferenceError: a is not defined 未定义

var a = 1
var fun1 = function(){
	var b = 2
	var fun2 = function(){
		var c = 3
		console.log( a )
		console.log( b )
	}
	fun2()
	// 函数内可以访问函数外的变量，定义在函数内容的变量，在外面无法访问
	console.log( c ) // Uncaught ReferenceError: c is not defined 未定义
}

fun1()

/*
假设页面上有 5个div 节点，我们通过循环来给每个 div 绑定 onclick 事件，
按照索引顺序，点击第 1个 div 时弹出0，点击第 2个 div 时弹出 1
 */

var nodes = document.getElementByTagName('div')
for( var i = 0; i < nodes.length; i++ ) {
	nodes[i].onclick = function(){
		console.log( i )
	}
}
/* 以上代码 无论点击哪个 div ，最后弹出的结果都是 5 */

for(var i = 0, len = nodes.length; i < len; i++ ) {
	(function(i) {
		nodes[i].onclick = function(){
			console.log(i)
		}
	})(i)
}

var Type = {}
for( var i = 0, type; type = ['String', 'Array', 'Number'][i++]; ) {
	(function(type) {
		Type['is' + type] = function( obj ) {
			return Object.prototype.toString.call( obj ) === '[object ' + type +']'
		}
	})(type)
}

Type.isArray( [] )

/*
	闭包的更多作用
	封装变量
 */

var mult = function() {
	var a = 1

	for(var i = 0, l = arguments.length; i < l; i++) {
		a*= arguments[i]
	}
	return a
}

/*
	现在我们觉得对于那些相同
的参数来说，每次都进行计算是一种浪费，我们可以加入缓存机制来提高这个函数的性能
 */

var cache = {}

var mult = function(){
	var args = Array.prototype.join.call( arguments, ',' )
	if( cache[args] ) {
		return cache[args]
	}

	var a = 1
	for(var i = 0, l = arguments.length; i < l; i++) {
		a*= arguments[i]
	}

	return cache[args] = a
}

/*
我们看到 cache 这个变量仅仅在 mult 函数中被使用，与其让 cache 变量跟 mult 函数一起平行
地暴露在全局作用域下，不如把它封闭在 mult 函数内部，这样可以减少页面中的全局变量，以
避免这个变量在其他地方被不小心修改而引发错误。
 */

var mult = (function() {
	var cache = {}
	var args = Array.prototype.join.call( arguments, ',' )
	var a = 1

	if( cache [args] ) {
		return cache[args]
	}

	for( var i = 0, len = arguments.length; i < len; i++) {
		a *= arguments[i]
	}

	return cache[args] = a
})()

/*
提炼函数是代码重构中的一种常见技巧。如果在一个大函数中有一些代码块能够独立出来，
我们常常把这些代码块封装在独立的小函数里面。独立出来的小函数有助于代码复用，如果这些
小函数有一个良好的命名，它们本身也起到了注释的作用。如果这些小函数不需要在程序的其他
地方使用，最好是把它们用闭包封闭起来
 */

var mult = (function() {

	var cache = {}

	// 封装计算函数
	var calculate = function() {
		var a = 1

		for( var i = 0, len = arguments.length; i < len; i++) {
			a *= arguments[i]
		}

		return a
	}

	return function() {
		var args = Array.prototype.join.call( arguments, ',' )

		for( args in cache ) {
			return cache[args]
		}

		return cache[args] = calculate.apply( null, arguments )
	}

})()

 /*
 延续局部变量的寿命
  */

var report = function(src) {
	var img = new Image()
	img.src = src
}

report('http://xxxxxx.com/aaa.jpg')

 /*
 因为一些低版本浏览器的实现存在 bug，在这些浏览器
下使用 report 函数进行数据上报会丢失 30%左右的数据
现在我们把 img 变量用闭包封闭起来，便能解决请求丢失的问题
  */

var report = (function(src) {
	var imgs = []

	return function() {
		var img = new Image()
		imgs.push(img)
		img.src = src
	}

})()

 /*
 闭包和面向对象设计
  */

var extent = function() {
	var value = 0

	return {
		call: function() {
			value++
			console.log(value)
		}
	}
}

var extent = extent()
extent.call() // 1
extent.call() // 2
extent.call() // 3

// 如果换成面向对象的写法，就是
var extent = {
	value: 0,
	call: function() {
		this.value++
		console.log(this.value)
	}
}

extent.call()
extent.call()
extent.call()

// 或者
var Extent = function(){
	this.value = 0
}

Extent.prototype.call = function() {
	this.value++
	console.log(this.value)
}

var extent = new Extent()
extent.call()

/*
用闭包实现命令模式
 */

// 这是一台电视
var Television = {
	opentv: function() {
		console.log('打开电视')
	},
	closetv: function() {
		console.log('关掉电视')
	}
}

// 接受命令处理程序
var ReceiveCommand = function(receive) {
	this.receive = receive
}

ReceiveCommand.prototype.execute = function() {
	this.receive.opentv() // 执行命令，打开电视机
}

ReceiveCommand.prototype.undo = function() {
	this.receive.closetv() // 执行命令，关闭电视机
}

// 设置命令的遥控器和操作
var setCommand = function(command) {
	document.getElementById('open').onclick = function() {
		command.execute() // 打开电视机
	}
	document.getElementById('close').onclick = function() {
		command.undo() // 打开电视机
	}
}

setCommand( new ReceiveCommand(Television) )

/*
在面向对象版本的命令模式中，预先植入的命令接收者被当成对象的属性保存起
来；而在闭包版本的命令模式中，命令接收者会被封闭在闭包形成的环境中
 */

// 被操作对象
var Television = {
	opentv: function() {
		console.log('open television')
	},
	closetv: function() {
		console.log('close television')
	}
}

// 接收处理者
var createCommand = function(receive) {
	var execute = function() {
		return receive.opentv()
	}

	var undo = function() {
		return receive.closetv()
	}

	return {
		execute: execute,
		undo: undo
	}
}

// 操作者
var setCommand = function( command ) {

	document.getElementById('open').onclick = function() {
		command.execute()
	}

	document.getElementById('close').onclick = function() {
		command.undo()
	}
}

setCommand( createCommand( Television ) )

/*
高阶函数
函数作为参数传递
1、回调函数
 */

var getUserInfo = function(userId, callback) {
	$.ajax('http://xxx.com/getUserInfo?' + userId, function( data ) {
		if( typeof callback === 'function') {
			callback( data )
		}
	})
}

getUserInfo( 13157, function( data ){
	alert ( data.userName )
})

/*
回调函数的应用不仅只在异步请求中，当一个函数不适合执行一些请求时，我们也可以把这
些请求封装成一个函数，并把它作为参数传递给另外一个函数，“委托”给另外一个函数来执行
 */

var createDiv = function() {
	for(var i = 0; i < 100; i++) {
		var div = document.createElement('div')
		div.innerHTML = i
		document.body.appendChild(div)
		div.style.display = 'none'
	}
}

/*
把 div.style.display = 'none' 的逻辑硬编码在 appendDiv 里显然是不合理的， appendDiv 未免
有点个性化，成为了一个难以复用的函数，并不是每个人创建了节点之后就希望它们立刻被隐藏
 */

var createDiv = function( callback ) {
	for(var i = 0; i < 100; i++) {
		var div = document.createELement('div')
		div.innerHTML = i
		document.body.appendChild(div)

		if(typeof callback === 'function') {
			callback( div )
		}
	}
}

createDiv( function(node) {
	// 当div创建完成的时候，会执行以下代码
	node.style.display = 'none'
})

/*
 Array.prototype.sort
 */

[1, 9, 6, 4, 2].sort(function( a, b ) {
	return a - b
})

[1, 9, 6, 4, 2].sort(function( a, b ) {
	return b - a
})

//  判断数据的类型
var isType = function( type ) {
	return function(obj) {
		return Object.prototype.toString.call(obj) === '[object '+ type +']'
	}
}

var isString = isType('String')
var isArray = isType('Array')
var isNumber = isType('Number')

console.log(isArray([1, 2, 3])) // true

/*
 用循环语句，来批量注册这些 isType 函数
 注意：object 后一定要有一个英文字符的空格；例如： '[object '+ type +']'， 错误的写法 '[object'+ type +']'
 */
var Type = {}

for(var i = 0, type; type = ['String', 'Number', 'Array'][i++]; ) {
	(function( type ){
		Type['is' + type] = function( obj ) {
			return Object.prototype.toString.call(obj) === '[object '+ type +']'
		}
	})( type )
}

Type.isString('str') // true
Type.isArray([1, 2, 3]) // true

// getSingle
var getSingle = function( fn ) {
	var ret

	return function(){
		return ret || (ret = fn.apply(this, arguments))
	}
}

var createScript = getSingle(function() {
	var scriptNode = document.createElement('script')

	document.body.appendChild(scriptNode)

	return scriptNode
})

function createSingleObje(parent, type) {
	var typeNode = document.createElement(type)

	parent.appendChild(typeNode)

	return typeNode
}

var script1 = createScript()
var script2 = createScript()
console.log(script1 === script2) // true

/*
高阶函数实现AOP
 */

Function.prototype.before = function( beforefn ) {
	var __self = this; // 保存原函数的引用

	return function() { // 返回包含了原函数和新函数的"代理"函数
		beforefn.apply( this, arguments ); // 执行新函数，修正 this
		return __self.apply( this, arguments ); // 执行原函数
	}
}

Function.prototype.after = function( afterfn ) {
	var _self = this
	return function() {
		var ret = _self.apply( this, arguments )
		afterfn.apply( this, arguments )
		return ret
	}
}

var func = function() {
	console.log( 2 )
}

func = func.before(function() {
	console.log( 1 )
}).after(function(){
	console.log( 3 )
})

func()

var cost = (function() {
	var args = []

	console.log(arguments.length)

	return function() {
		if( arguments.length === 0 ) {
			var money = 0

			for(var i = 0; i < args.length; i++) {
				money += args[i]
			}

			return money
		}
		else {
			[].push.apply( args, arguments )
		}
	}
})()

cost( 1000 ) // 未真正求值
cost( 2000 ) // 未真正求值
cost( 3000 ) // 未真正求值
cost() // 6000

var currying = function( fn ) {
	var args = []

	return function() {
		if( arguments.length === 0 ) {
			return fn.apply( this, args )
		}
		else {
			[].push.apply( this, arguments )
			return arguments.callee
		}
	}
}

var cost = (function() {
	var money = 0

	return function () {
		for( var i = 0, len = arguments.length; i < len; i++) {
			money += arguments[i]
		}
		return money
	}
})()

var cost = currying( cost )

cost( 1000 ) // 未真正求值
cost( 2000 ) // 未真正求值
cost( 3000 ) // 未真正求值
cost() // 6000

/*
函数节流的代码实现
 */

var throttle = function ( fn, interval ) {
	var _self = fn, // 保持需要被延迟执行的函数引用
			timer, // 定时器
			firstTime = true

	return function() {
		var args = arguments,
				_me = this

		if( firstTime ) {
			_self.apply( _me, args )
			return firstTime = false
		}

		if( timer ) { // 如果定时器还在，说明前一次延迟还没有执行完成
			return false
		}

		timer = setTimeout(function() {
			clearTimeout( timer )
			timer = null
			_self.apply( _me, args )
			console.log(_self)
		}, interval || 500 )
	}
}

window.onresize = throttle(function() {
	console.log(1)
}, 500)

/*
分时函数
 */

/*
在短时间内往页面中大量添加 DOM节点显然也会让浏览器吃不消，我们看到的结果往往就
是浏览器的卡顿甚至假死
 */
var arr = []

for( var i = 0; i <= 1000; i++) {
	arr.push( i ) // 假设arr装了1000个好友的数据
}

var renderFriendList = function( data ) {
	for( var i = 0; i < data.length; i++) {
		var div = document.createElement('div')
		div.innerHTML = i
		document.body.appendChild(div)
	}
}

renderFriendList( arr )
/*
这个问题的解决方案之一是下面的 timeChunk 函数， timeChunk 函数让创建节点的工作分批进
行
*/

var timeChunk = function( ary, fn, count ) {
	var obj, t

	var start = function() {
		for(var i = 0; i < Math.min(count || 1, ary.length); i++) {
			var obj = ary.shift()
			fn( obj )
		}
	}

	return function() {
		t = setInterval(function(){

			if( ary.legnth === 0 ) {
				return clearInterval(t)
			}

			start()
		}, 200)
	}
}

var ary = []
for(var i = 0; i <= 1000; i++) {
	ary.push( i )
}

var renderFriendList = timeChunk( ary, function(n){
	var div = document.createElement('div')
	div.innerHTML = n
	document.body.appendChild(div)
}, 8)

renderFriendList()

/*
惰性加载函数
 */

/*
这个函数的缺点是，当它每次被调用的时候都会执行里面的 if 条件分支，虽然执行这些 if
分支的开销不算大，但也许有一些方法可以让程序避免这些重复的执行过程
 */
var addEvent = function( el, type, handler) {

	if( window.addEventListener ) {
		return el.addEventListener( type, handler, false )
	}

	if( window.attachEvent ) {
		return el.attachEvent( 'on' + type, handler )
	}

}

/*
第二种方案是这样，我们把嗅探浏览器的操作提前到代码加载的时候，在代码加载的时候就
立刻进行一次判断，以便让 addEvent 返回一个包裹了正确逻辑的函数
 */

var addEvent = (function(){
	if( window.addEventListener ) {
		return function( el, type, handler ) {
			el.addEventListener( type, handler, false )
		}
	}

	if( window.attachEvent ) {
		return function( el, type, handler ) {
			el.attachEvent( 'on' + type, handler )
		}
	}
})()

/*
第三种方案即是我们将要讨论的惰性载入函数方案。此时 addEvent 依然被声明为一个普通函
数，在函数里依然有一些分支判断。但是在第一次进入条件分支之后，在函数内部会重写这个函
数，重写之后的函数就是我们期望的 addEvent 函数，在下一次进入 addEvent 函数的时候， addEvent
函数里不再存在条件分支语句
 */
var addEvent = function( el, type, handler ) {
	if( window.addEventListener ) {
		addEvent = function( el, type, handler ) {
			el.addEventListener( type, handler, false )
		}
	}
	else if( window.attachEvent ) {
		addEvent = function( el, type, handler ) {
			el.attachEvent( 'on' + type, handler )
		}
	}

	addEvent( el, type, handler )
}
