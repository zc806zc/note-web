/*
单例模式
 */

var Singleton = function( name ) {
	this.name = name
	this.instance = null
}

Singleton.prototype.getName = function() {
	console.log( this.name )
}
Singleton.getInstance = function( name ) {
	if( !this.instance ) {
		this.instance = new Singleton( name )
	}

	return this.instance
}

var a = Singleton.getInstance( 'sven1' )
var b = Singleton.getInstance( 'sven2' )

console.log( a === b )

/* ------或者------- */

var Singleton = function( name ) {
	this.name = name
}

Singleton.prototype.getName = function() {
	console.log( this.name )
}

Singleton.getInstance = (function() {
	var instance = null

	return function( name ) {
		if( !instance ) {
			instance = new Singleton( name )
		}

		return instance
	}
})()

/*
 CreateDiv 的构造函数实际上负责了两件事情。第一是创建对象和执行初始
化 init 方法，第二是保证只有一个对象。虽然我们目前还没有接触过“单一职责原则”的概念，
但可以明确的是，这是一种不好的做法，至少这个构造函数看起来很奇怪
 */
var CreateDiv = (function(){
	var instance

	var CreateDiv = function( html ) {
		if( instance ) {
			return instance
		}

		this.html = html
		this.init()

		return instance = this
	}

	CreateDiv.prototype.init = function() {
		var div = document.createElement( 'div' )
		div.innerHTML = this.html
		document.body.appendChild( div )
	}

	return CreateDiv

})()

var a = new CreateDiv('hello1')
var b = new CreateDiv('hello2')

alert( a === b )

/*
用代理实现单例模式
 */

var CreateDiv = function( html ) {
	this.html = html
	this.init()
}

CreateDiv.prototype.init = function() {
	var div = document.createElement( 'div' )
	div.innerHTML = this.html
	document.body.appendChild( div )
}

// 代理类
var ProxySingleCreateDiv = (function() {
	var instance

	return function( html ) {
		if( !instance ) {
			instance = new CreateDiv( html )
		}
		return instance
	}
})()

var a = new ProxySingleCreateDiv( 'hello-a' )
var b = new ProxySingleCreateDiv( 'hello-b' )

alert(a === b)

/*
使用命名空间
*/

// 1.简单的例子

var namespace = {
	a: function() {
		console.log(1)
	},
	b: function() {
		console.log(2)
	}
}

/*
把 a 和 b 都定义为 namespace1 的属性，这样可以减少变量和全局作用域打交道的机会。另外
我们还可以动态地创建命名空间
 */

var MyApp = {}

MyApp.namespace = function( name ) {
	var parts = name.split( '.' )
	var current = MyApp

	for( var n in parts ) {
		if( !current[ parts[n] ] ) {
			current[ parts[n] ] = {}
		}
		current = current[ parts[n] ]
	}
}

MyApp.namespace( 'tab.item' )
console.dir(MyApp)

// 上述代码等价于

var MyApp = {
	tab: {
		item: {}
	}
}

// 2.使用闭包封装私有变量
// 这种方法把一些变量封装在闭包的内部，只暴露一些接口跟外界通信

var user = (function() {
	var _name = 'john'
	var _age = 30

	return {
		getUserInfo: function() {
			return _name + ' -- ' + _age
		}
	}
})()

var u1 = user.getUserInfo()
console.log(u1)

var user = (function() {
	var _name = 'hello',
			_age = 20;

	var getUserInfo = function() {
		return _name + ' - ' + _age
	}

	return {
		getUserInfo: getUserInfo
	}
})()

var u2 = user.getUserInfo()
console.log(u2)

/*
惰性单例
*/
// 全局变量结合实现惰性的单例

var loginLayer = (function() {
	var div = document.createElement( 'div' )
	div.innerHTML = '登陆悬浮框'
	div.style.display = 'none'
	document.body.appendChild( div )

	return div
})()

document.getElementById('loginBtn').onclick = function () {
	loginLayer.style.display = 'block'
}

/*
	这种方式有个问题，也许用户进入页面但并不需要登陆，
	那么一开始就创建好就白白浪费了一些DOM
	现在改写一下代码，使用户点击登录按钮的时候才开始创建该浮窗
 */

var createLoginLayer = function() {
	var div = document.createElement('div')
	div.innerHTML = '登陆悬浮框'
	div.style.display = 'none'

	document.body.appendChild(div)
}

document.getElementById('loginBtn').onclick = function() {
	var loginLayer = createLoginLayer()

	loginLayer.style.display = 'block'
}

/*
我们可以用一个变量来判断是否已经创建过登录浮窗
 */

var createLoginLayer = (function() {
	var div

	return function() {
		if(!div) {
			div = document.createElement('div')
			div.innerHTML = '登陆悬浮框'
			div.style.display = 'none'
			document.body.appendChild(div)
		}
		return div
	}
})()

document.getElementById('loginBtn').onclick = function() {
	var loginLayer = createLoginLayer()

	loginLayer.style.display = 'block'
}

/*
通用的惰性单例
 */

var getSingle = function(fn) {
	var result

	return function() {
		return result || ( result = fn.apply( this, arguments ) )
	}
}

var createLoginLayer = function() {
	var div = document.createElement('div')
	div.innerHTML = '登陆悬浮框'
	div.style.cssText = "position:relative;width:200px;height:200px;background-color: #ddd;border:solid 1px red"
	var close = document.createElement('span')
	close.innerHTML = 'x'
	close.id = 'close'
	close.style.cssText = 'position:absolute;top:0;right:0;width:20px;height:20px;text-aligin:center;line-height:20px;cursor:pointer'
	div.appendChild(close)

	div.style.display = 'none'
	document.body.appendChild(div)
	return div
}

var createSingleLoginLayer = getSingle( createLoginLayer )

document.getElementById('loginBtn').onclick = function() {
	var loginLayer = createSingleLoginLayer()
	loginLayer.style.display = 'block'

	document.getElementById('close').onclick = function() {
		loginLayer.style.display = 'none'
	}
}
// 创建iframe
var createSingleIframe = function() {
	var iframe = document.createElement('iframe')

	document.body.appendChild(iframe)
	return iframe
}

document.getElementById('loginBtn').onclick = function() {
	var loginLayer = getSingle( createSingleIframe )
	loginLayer.src = 'http://www.baidu.com/'
}

/*
通过 ajax 动态往列表里追加数据，在使用事件代理的前提
下， click 事件实际上只需要在第一次渲染列表的时候被绑定一次，但是我们不想去判断当前是
否是第一次渲染列表，如果借助于 jQuery，我们通常选择给节点绑定 one 事件
 */

var bindEvent = function() {
	$('div').one('click', function() {
		alert('click')
	})
}

var render = function() {
	console.log('开始渲染页面')
	bindEvent()
}

render()
render()
render()

// 单例模式实现事件绑定

var bindEvent = function() {
	document.getElementById('div2').onclick = function() {
		console.log('click')
	}
	return true
}

var render = function() {
	console.log('开始渲染页面')
	bindEvent()
}

render()
render()
render()

/*
策略模式
 */

/*
使用策略模式计算奖金
最初的代码实现
 */

var calculateBonus = function(performanceLevel, salary) {

	if(performanceLevel === 'S') {
		return salary * 4
	}
	if(performanceLevel === 'B') {
		return salary * 3
	}
	if(performanceLevel === 'A') {
		return salary * 2
	}

}

calculateBonus('B', 2000) // 6000
calculateBonus('S', 4000) // 16000

/*
可以发现，这段代码十分简单，但是存在着显而易见的缺点
1.calculateBonus 函数比较庞大，包含了很多 if-else 语句，这些语句需要覆盖所有的逻辑分支
2. 函数缺乏弹性，如果增加了一种新的绩效等级 C，或者想把绩效 S 的奖金系数改为 5，
那我们必须深入 calculateBonus 函数的内部实现，这是违反开放封闭原则的
3.算法的复用性差，如果在程序的其他地方需要重用这些计算奖金的算法呢？我们的选择只有复制和粘贴
 */

var performaceS = function(salary) {
	return salary * 4
}

var performaceA = function(salary) {
	return salary * 3
}

var performaceB = function(salary) {
	return salary * 2
}

var calculateBonus = function(performanceLevel, salary) {

	if(performanceLevel === 'S') {
		return performaceS(salary)
	}
	if(performanceLevel === 'A') {
		return performaceA(salary)
	}
	if(performanceLevel === 'B') {
		return performaceB(salary)
	}

}

calculateBonus('A', 1000) // 3000

/*
目前，我们的程序得到了一定的改善，但这种改善非常有限，我们依然没有解决最重要的问题：
calculateBonus 函数有可能越来越庞大，而且在系统变化的时候缺乏弹性
 */

/*
使用策略模式重构代码
 */

// 1. 传统面向对象语言中的实现
var performanceS = function() {}

performanceS.prototype.calculate = function(salary) {
	return salary * 4
}

var performanceA = function() {}

performanceA.prototype.calculate = function(salary) {
	return salary * 3
}

var performanceB = function() {}

performanceB.prototype.calculate = function(salary) {
	return salary * 2
}

// 接下来定义奖金类
var Bonus = function() {
	this.salary = null // 原始工资
	this.strategy = null // 绩效等级对于的策略对象
}

Bonus.prototype.setSalary = function(salary) {
	this.salary = salary // 设置员工的原始工资
}

Bonus.prototype.setStrategy = function(strategy) {
	this.strategy = strategy // 设置员工绩效等级对应的策略对象
}

Bonus.prototype.getBonus = function() { // 取得奖金数额
	return this.strategy.calculate(this.salary) // 把计算奖金的操作委托给对应的策略对象
}


var bonus = new Bonus()
bonus.setSalary(3000)
bonus.setStrategy( new performanceS() )
bonus.getBonus()

/*
使用javascript实现策略模式
 */

var strategies = {
	"S": function(salary) {
		return salary * 4
	},
	"A": function(salary) {
		return salary * 3
	},
	"B": function(salary) {
		return salary * 2
	}
}

var calculateBonus = function(level, salary) {
	return strategies[level](salary)
}

calculateBonus('S', 3000) // 12000
calculateBonus('A', 3000) // 6000

/*
t: 动画已消耗的时间、
b: 小球原始位置、
c: 小球目标位置、
d: 动画持续的总时间
 */

var tween = {
	linear: function( t, b, c, d ){
		return c*t/d + b;
	},
	easeIn: function( t, b, c, d ){
		return c * ( t /= d ) * t + b;
	},
	strongEaseIn: function(t, b, c, d){
		return c * ( t /= d ) * t * t * t * t + b;
	},
	strongEaseOut: function(t, b, c, d){
		return c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b;
	},
	sineaseIn: function( t, b, c, d ){
		return c * ( t /= d) * t * t + b;
	},
	sineaseOut: function(t,b,c,d){
		return c * ( ( t = t / d - 1) * t * t + 1 ) + b;
	}
};

var Animate = function(dom) {
	this.dom = dom // 进行运动的 dom 节点
	this.startTime = 0	// 动画开始时间
	this.startPos = 0 // 动画开始时，dom 节点的位置，即 dom 的初始位置
	this.endPos = 0   // 动画结束时，dom 节点的位置，即 dom 的目标位置
	this.propertyName = null // dom 节点需要被改变的 css 属性名
	this.easing = null  // 缓动算法
	this.duration = null // 动画持续时间
}

/*
propertyName ：要改变的 CSS属性名，比如 'left' 、 'top' ，分别表示左右移动和上下移动。
endPos ： 小球运动的目标位置。
duration ： 动画持续时间。
easing ： 缓动算法。
 */
Animate.prototype.start = function(propertyName, endPos, duration, easing, handler) {
	this.startTime = +new Date //
	this.startPos = this.dom.getBoundingClientRect()[propertyName]
	this.propertyName = propertyName
	this.endPos = endPos
	this.duration = duration
	this.easing = tween[easing]

	var self = this
	var timeId = setInterval(function() {
		if(slef.step() === false) {
			clearInterval(timeId)
			handler && handler()
		}
	},19)
}

Animate.prototype.step = function() {
	var t = +new Date

	if(t >= this.startTime + this.duration) {
		this.update(this.endPos)
		return false
	}

	var pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration)
	this.update(pos)
}

Animate.prototype.update = function(pos) {
	this.dom.style[this.propertyName] = pos + 'px'
}

var box = document.getElementById('box')
var animate = new Animate(box)

animate.start('right', 500, 1000, 'strongEaseOut')

/*
表单校验
 */
var registerFome = document.getElementById('registerForm')

registerForm.onsubmit = function() {
	if(registerForm.userName.value === '') {
		alert('用户名不能为空')
		return false
	}

	if(registerForm.password.value.length < 6) {
		alert('密码长度不能小于6位')
		return false
	}

	if(!/(^1[3|5|8][0-9]{9}$)/.test(registerForm.phoneNumber.value)) {
		alert('手机格式不正确')
		return false
	}
}

/*
这是一种很常见的代码编写方式，它的缺点跟计算奖金的最初版本一模一样
1.registerForm.onsubmit 函数比较庞大，包含了很多 if-else 语句，这些语句需要覆盖所有
的校验规则。
2.registerForm.onsubmit 函数缺乏弹性，如果增加了一种新的校验规则，或者想把密码的长
度校验从 6改成 8，我们都必须深入 registerForm.onsubmit 函数的内部实现，这是违反开
放 — 封闭原则的。
3.算法的复用性差，如果在程序中增加了另外一个表单，这个表单也需要进行一些类似的
校验，那我们很可能将这些校验逻辑复制得漫天遍野
*/

// 用策略模式重构表单校验
var strategies = {
	isNonEmpty: function(value, errorMsg) {
		if(value === '') {
			return errorMsg
		}
	}

	minLength: function(value, length, errorMsg) {
		if(value.length < length) {
			return errorMsg
		}
	}

	isMobile: function(value, errorMsg) {
		if(!/(^1[3|4|5|8][0-9]{9})/.test(value)) {
			return errorMsg
		}
	}
}

var validatorFunc = function() {
	var validator = new Validator() // 创建一个Validator对象

	validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空')
	validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位')
	validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确')

	var errorMsg = validator.start()
	return errorMsg
}

var registerForm = document.getElementById('registerFome')

registerFome.onsubmit = function() {
	var errorMsg = validataFunc() // 如果 errorMsg 有确切的返回值，说明未通过校验
	if(errorMsg) {
		return false;	// 阻止表单提交
	}
}

var Validator = function() {
	this.cache = []  // 保存校验规则
}

Validator.prototype.add = function(dom, rule, errorMsg) {
	var ary = rule.split(':') // 把strategy和参数分开
	this.cache.push(function() { // 把校验的步骤用空函数包装起来，并且放入 cache
		var strategy = ary.shift() // 用户挑选的strategy
		ary.unshift(dom.value) // 把 input 的 value 添加进参数列表
		ary.push(errorMsg) // 把 errorMsg 添加进参数列表
		return strategies[strategy].apply(dom, ary)
	})
}

Validator.prototype.start = function() {
	for(var i = 0, validatorFunc; validatorFunc = this.cache[i++]; ) {
		var msg = validatorFunc()

		if(msg) {
			return msg
		}
	}
}

/*
如果我们既想校验它是否为空，又想校验它输入文本的长度不小于 10 呢？我们期望以这样
的形式进行校验
 */

/***********************策略对象**************************/
var strategies = {
	isNonEmpty: function(value, errorMsg) {
		if(value === '') {
			return errorMsg
		}
	},
	minLength: function(value, length, errorMsg) {
		if(value.length < length) {
			return errorMsg
		}
	},
	isMobile: function(value, errorMsg) {
		if(!/(^1[3|4|5|8][0-9]{9})/.test(value)) {
			return errorMsg
		}
	}
}
/***********************Validator 类**************************/
var Validator = function() {
	this.cache = []
}

Validator.prototype.add = function(dom, rules) {
	var self = this

	for(var i = 0, rule; rule = rules[i++];) {
		(function(rule){
			var strategyAry = rule.strategy.split(':')
			var errorMsg = rule.errorMsg

			self.cache.push(function(){
				var strategy = strategyAry.shift()
				strategyAry.unshift(dom.value)
				strategyAry.push(errorMsg)
				return strategies[strategy].apply(dom, strategyAry)
			})
		})(rule)
	}
}

Validator.prototype.start = function() {
	for(var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
		var errorMsg = validatorFunc()

		if(errorMsg) {
			return errorMsg
		}
	}
}

/***********************客户调用代码**************************/
var registerForm = document.getElementById('registerForm')

var validataFunc = function() {
	var validator = new Validator()

	validator.add(registerForm.userName, [{
		strategy: 'isNonEmpty',
		errorMsg: '用户名不能为空'
	},{
		strategy: 'minLength:10',
		errorMsg: '用户名长度不能小于10位'
	}])


	validator.add(registerForm.password,[{
		strategy: 'isNonEmpty',
		errorMsg: '密码不能为空'
	},{
		strategy: 'minLength:6',
		errorMsg: '密码长度不能小于6位'
	}])

	validator.add(registerForm.phoneNumber,[{
		strategy: 'isNonEmpty',
		errorMsg: '手机号码簿能为空'
	},{
		strategy: 'isMobile',
		errorMsg: '密码长度不能小于6位'
	}])

	var errorMsg = validator.start()
	return errorMsg
}

registerForm.onsubmit = function() {
	var errorMsg = validatorFunc()

	if(errorMsg) {
		alert(errorMsg)
		return false
	}
}
/*
策略模式的优缺点
1.策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句
2.策略模式提供了对开放 — 封闭原则的完美支持，将算法封装在独立的 strategy 中，使得它
们易于切换，易于理解，易于扩展
3.策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作
4.在策略模式中利用组合和委托来让 Context拥有执行算法的能力，这也是继承的一种更轻
便的替代方案
 */

// 代理模式

/*
例子：1
在四月一个晴朗的早晨，小明遇见了他的百分百女孩，我们暂且称呼小明的女神为
A。两天之后，小明决定给 A送一束花来表白。刚好小明打听到 A和他有一个共同的朋
友 B，于是内向的小明决定让 B来代替自己完成送花这件事情
 */

var Flower = function() {}

var xiaomin = {
	sendFlower: function(target) {
		var flower = new Flower()
		target.receiveFlower(flower)
	}
}

var A = {
	receiveFlower: function(flower) {
		console.log('收到花' + flower)
	}
}

xiaomin.sendFlower( A )

/*
接下来，我们引入代理 B，即小明通过 B来给 A送花：
 */

var Flower = function() {}

var xiaomin = {
	sendFlower: function(target) {
		var flower = new Flower()
		target.receiverFlower(flower)
	}
}

var B = {
	receiverFlower: function(flower) {
		A.receiverFlower(flower)
	}
}

var A = {
	receiverFlower: function(flower) {
		console.log('收到花 ' + flower)
	}
}

xiaomin.sendFlower( B )

/*
现在我们改变故事的背景设定，假设当 A 在心情好的时候收到花，小明表白成功的几率有
60%，而当 A在心情差的时候收到花，小明表白的成功率无限趋近于 0
但是 A 的朋友 B 却很了解 A，所以小明只管把花交给 B，B 会监听 A 的心情变化，然后选
择 A心情好的时候把花转交给 A
 */

var Flower = function() {}

var xiaomin = {
	sendFlower: function(target) {
		var flower = new Flower()
		target.receiverFlower(flower)
	}
}

var B = {
	receiverFlower: function(flower){
		A.listenGoodMood(function() {
			A.receiverFlower(flower)
		})
	}
}

var A = {
	receiverFlower: function(flower) {
		console.log('收到花 ' + flower)
	},

	listenGoodMood: function(fn) {
		setTimeout(function() {
			fn()
		},5000)
	}
}

xiaomin.sendFlower(B)

/*
保护代理和虚拟代理

1.保护代理
代理 B 可以帮助 A过滤掉一些请求，比如送花的人中年龄太大的或者没有宝马的，
这种请求就可以直接在代理 B处被拒绝掉。这种代理叫作保护代理。
A 和 B 一个充当白脸，一个充当黑脸。白脸 A 继续保持
良好的女神形象，不希望直接拒绝任何人，于是找了黑脸 B来控制对 A的访问

2.虚拟代理
另外，假设现实中的花价格不菲，导致在程序世界里， new Flower 也是一个代价昂贵的操作，
那么我们可以把 new Flower 的操作交给代理 B 去执行，代理 B 会选择在 A 心情好时再执行 new
Flower ，这是代理模式的另一种形式，叫作虚拟代理。虚拟代理把一些开销很大的对象，延迟到
真正需要它的时候才去创建
 */

var Flower = function() {}

var xiaomin = {
	sendFlower: function(target) {
		target.receiverFlower()
	}
}

var B = {
	receiverFlower: function() {
		A.listenGoodMood(function() {
			var flower = new Flower()

			A.receiverFlower(flower)
		})
	}
}

var A = {
	receiverFlower: function(flower) {
		console.log('receiver flower' + flower)
	},
	listenGoodMood: function(fn) {
		setTimeout(fn,5000)
	}
}

xiaomin.sendFlower(B)

/*
虚拟代理实现图片预加载
 */

var myImg = (function(){
	var imgNode = document.createElement('img')
	document.body.appendChild(imgNode)

	return {
		setSrc: function(src) {
			imgNode.src = src
		}
	}
})()

myImg.setSrc('http://new.vgoyun.com/contents/img/logo.png')

/*
现在开始引入代理对象 proxyImage ，通过这个代理对象，在图片被真正加载好之前，页面中
将出现一张占位的菊花图 loading.gif, 来提示用户图片正在加载
 */

var myImg = (function() {
	var imgNode = document.createElement('img')
	document.body.appendChild(imgNode)

	return {
		setSrc: function(src) {
			imgNode.src = src
		}
	}
})()

var proxyImage = (function() {
	var oImg = new Image()
	oImg.onload = function() {
		myImg.setSrc(this.src)
	}

	return {
		setSrc: function(src){
			myImg.setSrc('http://dribbble.s3.amazonaws.com/users/141543/screenshots/1078036/leaf-loading.gif')
			oImg.src = src
		}
	}
})()

proxyImage.setSrc('http://zx.aj1g.com/static/img/mall/mall-b1.jpg')

// 不用代理的预加载图片函数实现如下
var MyImage = (function() {
	var imgNode = document.createElement('img')
	document.body.appendChild(imgNode)

	var img = new Image()
	img.onload = function() {
		imgNode.src = img.src
	}

	return {
		setSrc: function(src) {
			imgNode.src = 'http://dribbble.s3.amazonaws.com/users/141543/screenshots/1078036/leaf-loading.gif'
			img.src = src
		}
	}
})()

MyImage.setSrc('http://zx.aj1g.com/static/img/mall/mall-b1.jpg')

var myImage = (function() {
	var imgNode = document.createElement('img')
	document.body.appendChild(imgNode)

	return function(src) {
		imgNode.src = src
	}
})()

var proxyImage = (function() {
	var img = new Image()
	img.onload = function() {
		myImage(this.src)
	}
	return function(src) {
		myImage('http://dribbble.s3.amazonaws.com/users/141543/screenshots/1078036/leaf-loading.gif')
		img.src = src
	}
})()


/*
虚拟代理合并 HTTP 请求
 */

var syncFile = function(id) {
	console.log('开始上传文件，id：' + id)
}

var checkbox = document.getElementsByTagName('input')

for(var i = 0, chk; chk = checkbox[i++];) {
	chk.onclick = function() {
		if(this.checked === true) {
			syncFile(this.id)
		}
	}
}

/*
通过代理，收集一段时间之内的请求，最后一次性的发给服务器
 */

var syncFile = function(id) {
	console.log('开始上传文件，id：' + id)
}

var proxySyncFile = (function() {
	var cache = [] // 保存一段时间内需要同步的 ID
	var timer // 定时器

	return function(id) {
		cache.push(id)
		if(timer) { // 保证不覆盖已经启动的定时器
 			return
		}

		timer = setTimeout(function() {
			syncFile(cache.join(',')) // 2 秒后向本体发送需要同步的 ID 集合
			clearTimeout(timer) // 清空定时器
			timer = null
			cache.length = 0 //  清空 ID 集合
		}, 2000)
	}
})()

var checkbox = document.getElementsByTagName('input')

for(var i = 0, chk; chk = checkbox[i++];) {
	chk.onclick = function() {
		if(this.checked === true) {
			proxySyncFile(this.id)
		}
	}
}

// 虚拟代理在惰性加载中的应用

var cache = []

var miniConsole = {
	log: function() {
		var args = arguments
		cache.push(function() {
			return miniConsole.log.apply(miniConsole, args)
		})
	}
}

var handler = function(ev) {
	if(ev.keyCode === 113) {
		var script = document.createElement('script')
		script.onload = function() {
			for(var i = 0, fn; fn = cache[i++]; ) {
				fn()
			}
		}

		script.src = 'test.js'
		document.getElementsByTagName('head')[0].appendChild(script)
	}
}

document.body.addEventListener('keydown', handler, false)

/*
就是我们要保证在 F2被重复按下的时候，miniConsole.js只被加载一次
另外整理一下 miniConsole 代理对象的代码
 */

var miniConsole = (function(){
	var cache = []
	var handler = function(ev) {
		if(ev.keyCode === 113) {
			var script = document.createElement('script')
			script.onload = function() {
				for(var i = 0, fn; fn = cache[i++]; ) {
					fn()
				}
			}
			script.src = 'test.js'
			document.getElementsByTagName('head')[0].appendChild(script)
			document.body.removeEventListener('keydown', handler) // 只加载一次 test.js
		}
	}

	document.body.addEventListener('keydown', handler, false)

	return {
		log: function() {
			var args = arguments
			cache.push(function() {
				return miniConsole.log.apply(miniConsole, args)
			})
		}
	}
})()

miniConsole.log( 11 )

/*
缓存代理

缓存代理可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参
数跟之前一致，则可以直接返回前面存储的运算结果
 */

var mult = function() {
	var a = 1
	for(var i = 0, l = arguments.length; i < l; i++) {
		a *= arguments[i]
	}
	return a
}

var proxyMult = (function() {
	var cache = {}

	return function() {
		var args = Array.prototype.join.call(arguments, ',')
		if(args in cache) {
			return cache[args]
		}
		return cache[args] = mult.apply(this, arguments)
	}

})()

proxyMult( 1, 2, 3, 4 ); // 输出：24
proxyMult( 1, 2, 3, 4 ); // 输出：24
/*
当我们第二次调用 proxyMult( 1, 2, 3, 4 ) 的时候，本体 mult 函数并没有被计算， proxyMult
直接返回了之前缓存好的计算结果
 */

// 用高阶函数动态创建代理

var mult = function() {
	var a = 1
	for( var i = 0, l = arguments.length; i < l; i++) {
		a = a * arguments[i]
	}
	return a
}

var plus = function() {
	var a = 0
	for( var i = 0, l = arguments.length; i < l; i++) {
		a += arguments[i]
	}
	return a
}


var createProxyFactory = function(fn) {
	var cache = {}

	return function() {
		var args = Array.prototype.join.call(arguments, ',')

		if( args in cache) {
			return cache[args]
		}
		return cache[args] = fn.apply(this, arguments)
	}
}

var proxyMult = createProxyFactory(mult)
var proxyPlus = createProxyFactory(plus)

proxyMult(1, 2, 4)
proxyPlus(1, 2, 4)

// 迭代器模式

/*
1. 实现自己的迭代器
 */
var each = function(ary, callback) {
	for( var i = 0, l = ary.length; i < l; i++) {
		callback.call(ary[i], i, ary[i])
	}
}

each([1,2, 3], function(i, n) {

	console.log([i, n])
})

/*
内部迭代器
 */
var compare = function(ary1, ary2) {
	if(ary1.length !== ary2.length) {
		throw new Error('2个数组不相等')
	}
	each(ary1, function(i,n) {
		if(n !== ary2[i]) {
			throw new Error('2个数组不相等')
		}
	})

	alert('2个数组相等')
}

/*
外部迭代器
 */

var Iterator = function(obj) {
	var current = 0

	var next = function() {
		current += 1
	}

	var isDone = function() {
		return current >= obj.length
	}

	var getCurrentItem = function() {
		return obj[current]
	}


	return {
		next: next,
		isDone: isDone,
		getCurrentItem: getCurrentItem
	}
}

var compare = function(iterator1, iterator2) {
	while(!iterator1.isDone() && !iterator2.isDone()) {
		if(iterator1.getCurrentItem() !== iterator2.getCurrentItem()) {
			throw new Error('iterator1 和 iterator2不相等')
		}
		iterator1.next()
		iterator2.next()
	}
	console.log('iterator1 和 iterator2相等')
}

var iterator1 = Iterator([1,3,4])
var iterator2 = Iterator([1,3,4])

compare(iterator1,iterator2) // iterator1 和 iterator2相等

// jQuery 中的each方法

$.each = function(obj, callback) {
	var value,
		i = 0,
		length = obj.length,
		isArray = isArrayLike(obj)

	if(isArray) {
		for(; i < length; i++) {
			value = callback.call(obj[i], i, obj[i])

			if(value === false) {
				break
			}
		}
	}
	else {
		for( i in obj) {
			value = callback.call(obj[i], i, obj[i])

			if(value === false) {
				break
			}
		}
	}
	return obj
}

// 中止迭代器

var each = function(ary, callback) {
	for(var i = 0, l = ary.length; i < l; i++) {
		if(callback(i, ary[i]) === false) {
			break
		}
	}
}

each([1,2,3,4,5], function(i, n) {
	if(n > 3) {
		return false
	}
	console.log(n)
})

var getUploadObj = function() {
  try {
    return new ActiveXObject("TXFTNActiveX.FTNUpload") // IE 上传控件
  } catch (e) {
    if (supportFlash()) { // supportFlash 函数未提供
      var str = '<object type="application/x-shockwave-flash"></object>'
      return $(str).appendTo($('body'))
    } else {
      var str = '<input name="file" type="file"/>' // 表单上传
      return $(str).appendTo($('body'))
    }
  }
}

/*
现在来梳理一下问题，目前一共有 3种可能的上传方式，我们不知道目前正在使用的浏览器
支持哪几种。就好比我们有一个钥匙串，其中共有 3把钥匙，我们想打开一扇门但是不知道该使
用哪把钥匙，于是从第一把钥匙开始，迭代钥匙串进行尝试，直到找到了正确的钥匙为止
 */

var getActiveUploadObj = function() {
	try{
		return new ActiveXObject("TXFTANctiveX.FTNUpload")
	}
	catch(e) {
		return false
	}
}

var getFlashUploadObj = function() {
	if(supportFlash()) {
		var str = '<object type="application/x-shockwave-flash"></object>'
		return $(str).appendTo($('body'))
	}
	return false
}

var getFormUploadObj = function() {
	var str = '<input name="file" type="file" class="ui-file" />'
	return $(str).appendTo($('body'))
}

var iteratorUploadObj = function() {
	for(var i = 0, fn; fn = arguments[i++]; ) {
		var uploadObj = fn()

		if(uploadObj !== false) {
			return uploadObj
		}
	}
}

// 增加分别获取 Webkit控件上传对象和 HTML5上传对象的函数

var getWebkitUploadObj = function(){
	// 具体代码略
}
var getHtml5UploadObj = function(){
	// 具体代码略
}

var uploadObj = iteratorUploadObj( getActiveUploadObj, getWebkitUploadObj,
getFlashUploadObj, getHtml5UploadObj, getFormUpladObj )

/*
发布 — 订阅模式
 */

// 简单的发布订阅模式
var salesOffices = {}  // 定义售楼处
salesOffices.clientList = [] // 订阅消息的用户（用户花名册）

salesOffices.listen = function(fn){ // 添加订阅者
	this.clientList.push(fn) // 订阅的消息添加进缓存列表
}

salesOffices.trigger = function() { // 发布消息
	for(var i = 0, fn; fn = this.clientList[i++]; ) {
		fn.apply(this, arguments)
	}
}

// 测试发布消息给订阅者
salesOffices.listen(function(price, squareMeter) { // A 订阅的消息
	console.log('价格：' + price + '\n' + '面积：' + squareMeter)
})
salesOffices.listen(function(price, squareMeter) { // B 订阅的消息
	console.log('价格：' + price + '\n' + '面积：' + squareMeter)
})

salesOffices.trigger( 80000, 88 )
salesOffices.trigger( 12000, 100 )


// 确定在于用户只关心自己希望看到的信息，其他与自己无关的信息并不希望看到
// 增加一个key值，只发送用户感兴趣的信息

var salesOffices = {} // 定义售楼处

salesOffices.clientList = [] // 缓存列表，存放订阅者的回调函数

salesOffices.listen = function(key, fn) {
	if(!this.clientList[key]) { // 如果还没有订阅过此类消息，给该类消息创建一个缓存列表
		this.clientList[key] = []
	}
	this.clientList[key].push(fn) // 订阅的消息添加进消息缓存列表
}

salesOffices.trigger = function() { // 发布消息
	var key = Array.prototype.shift.call(arguments) // 取出消息类型
	var fns = this.clientList[key] // 取出该消息对应的回调函数集合

	if(!fns || fns.length === 0) { // 如果没有订阅该消息，则返回
		return false
	}

	for(var i = 0, fn; fn = fns[i++];) {
		fn.apply(this, arguments) // arguments 是发布消息时附送的参数
	}
}

salesOffices.listen('squareMeter88',function(price) { // A 订阅88㎡的消息
	console.log('价格：' + price )
})
salesOffices.listen('squareMeter120',function(price) { // B 订阅120㎡的消息
	console.log('价格：' + price )
})

salesOffices.trigger('squareMeter88', 8000) // 发布 88 平方米房子的价格
salesOffices.trigger('squareMeter120', 10000) // 发布 110 平方米房子的价格

// 通用的 发布 － 订阅模式实现

var event = {
	clientList: [],
	listen: function(key, fn) {
		if(!this.clientList[key]) {
			this.clientList[key] = []
		}
		this.clientList[key].push(fn)
	},
	trigger: function() {
		var key = Array.prototype.shift.call(arguments),
				fns = this.clientList[key]

		if(!fns || fns.length === 0) {
			return false
		}

		for(var i = 0, fn; fn = fns[i++]; ) {
			fn.apply(this, arguments)
		}
	}
}

var installEvent = function(obj) {
	for(var i in event) {
		obj[i] = event[i]
	}
}


var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('squareMeter88', function(price) {
	console.log('price: ' + price)
})
salesOffices.listen('squareMeter120', function(price) {
	console.log('price: ' + price)
})

salesOffices.trigger('squareMeter88', 9000)
salesOffices.trigger('squareMeter120', 10000)

// 取消订阅的事件
event.remove = function(key, fn) {
	var fns = this.clientList[key]

	if(!fns) { // 如果 key 对应的消息没有被人订阅，则直接返回
		return false
	}

	if(!fn) { // 如果没有传入具体的回调函数，表示需要取消 key 对应消息的所有订阅
		fns && (fns.length = 0)
	}
	else {
		for(var l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表
			var _fn = fns[l]
			if(_fn == fn) {
				fns.splice(l, 1) // 删除订阅者的回调函数
			}
		}
	}
}

var salesOffices = {}

var installEvent = function(obj) {
	for(var i in event) {
		obj[i] = event[i]
	}
}

installEvent(salesOffices)

salesOffices.listen('squareMeter88', fn1 = function(price) {
	console.log('price: ' + price)
})

salesOffices.listen('squareMeter88', fn2 = function(price) {
	console.log('price: ' + price)
})

salesOffices.remove('squareMeter88', fn1)
salesOffices.trigger('squareMeter88', 80000)

var event = {
	clientList: [],
	listen: function(key, fn) {
		if(!this.clientList[key]) {
			this.clientList[key] = []
		}
		this.clientList[key].push(fn)
	},
	trigger: function() {
		var key = Array.prototype.shift.call(arguments)
		var fns = this.clientList[key]

		if(!fns && fns.length === 0) {
			return false
		}

		for(var i = 0, fn; fn = fns[i++]; ) {
			fn.apply(this, arguments)
		}
	},
	remove: function() {
		var fns = this.clientList[key]

		if(!fns) {
			return false
		}

		if(!fn) {
			fns && (fns.length = 0)
		}
		else {
			for(var l = fns.length-1; l >= 0; l--){
				var _fn = fns[l]
				if(_fn === fn) {
					fns.splice(l, 1)
				}
			}
		}
	}
}

// 真实的例子——网站登录
// 假如我们正在开发一个商城网站，网站里有 header头部、nav导航、消息列表、购物车等模块
// 这几个模块的渲染有一个共同的前提条件，就是必须先用 ajax异步请求获取用户的登录信息

login.succ(function(data) {
	header.setAvatar(data.avatar) // 设置 header 模块的头像
	nav.setAvatar(data.avatar) // 设置导航模块的头像
	message.refresh() // 刷新消息列表
	cart.refresh() // 刷新购物车列表
})

// 等到有一天，项目中又新增了一个收货地址管理的模块，这个模块本来是另一个同事所写的，
// 而此时你正在马来西亚度假，但是他却不得不给你打电话：“Hi，登录之后麻烦刷新一下收货地
// 址列表。”于是你又翻开你 3个月前写的登录模块，在最后部分加上这行代码

login.succ(function(data) {
	header.setAvatar(data.avatar)
	nav.setAvatar(data.avatar)
	message.refresh()
	cart.refresh()
	address.refresh() // 新增加
})

// 用发布 — 订阅模式重写代码

var login = {}

installEvent(login)

$.get(url, function(data) { // 登陆成功
	login.trigger('loginSucc', data) // 发布登录成功的消息
})

var header = (function() {
	login.listen('loginSucc', function(data) {
		header.setAvatar(data.avatar)
	})

	return {
		setAvatar: function(data) {
			console.log( '设置 header 模块的头像' )
		}
	}
})()

var nav = (function() {
	login.listen('loginSucc', function(data){
		nav.setAvatar(data.avatar)
	})

	return {
		setAvatar: function(data) {
			console.log( '设置 nav 模块的头像' )
		}
	}
})()

var address = (function() {
	login.listen('loginSucc', function(obj){
		address.refresh(obj)
	})

	return {
		setAvatar: function(data) {
			console.log( '刷新收货地址列表' )
		}
	}
})()

// 全局的发布 － 订阅对象

var Event = (function() {
	var clientList = {},
			listen,
			trigger,
			remove

	listen = function(key, fn) {
		if(!clientList[key]) {
			clientList[key] = []
		}

		clientList[key].push(fn)
	}

	trigger = function() {
		var key = Array.prototype.shift.call(arguments),
				fns = clientList[key]

		if(!fns || fns.length === 0) {
			return false
		}

		for(var i = 0, fn; fn = fns[i++]; ) {
			fn.apply(this, arguments)
		}
	}

	remove = function(key, fn) {
		var fns = clientList[key]

		if(!fns) {
			return false
		}

		if(!fn) {
			fns && (fns.length = 0)
		}
		else {
			for(var j = fns.length - 1; j >= 0; j--) {
				var _fn = fns[j]
				if(_fn === fn) {
					fns.splice(l, 1)
				}
			}
		}
	}

	return {
		listen: listen,
		trigger: trigger,
		remove: remove
	}
})()

Event.listen('squareMeter88', function(price) {
	console.log('price: ' + price)
})

Event.trigger('squareMeter88', 20000)

// 模块间通信

var a = (function() {
	var count = 1
	var btn = document.getElementById('count')

	btn.onclick = function() {
		Event.trigger('add', count++)
	}
})()

var b = (function() {
	var content = document.getElementById('content')

	content.innerHTML = 0
	Event.listen('add', function(count) {
		content.innerHTML = count
	})
})()

// 全局事件的命名冲突
/************** 先发布后订阅 ********************/
Event.trigger('click', 1)
Event.listen('click', function(a) {
  console.log(a) // 输出：1
})

/************** 使用命名空间 ********************/
Event.create('namespace1').listen('click', function(a) {
  console.log(a) // 输出：1
})

Event.create('namespace1').trigger('click', 1)
Event.create('namespace2').listen('click', function(a) {
  console.log(a) // 输出：2
})

Event.create('namespace2').trigger('click', 2)

// 具体实现代码如下：
var Event = (function() {
  var global = this,
    Event,
    _default = 'default';
  Event = function() {
    var _listen,
      _trigger,
      _remove,
      _slice = Array.prototype.slice,
      _shift = Array.prototype.shift,
      _unshift = Array.prototype.unshift,
      namespaceCache = {},
      _create,
      find,
      each = function(ary, fn) {
        var ret;
        for (var i = 0, l = ary.length; i < l; i++) {
          var n = ary[i];
          ret = fn.call(n, i, n);
        }
        return ret;
      };
    _listen = function(key, fn, cache) {
      if (!cache[key]) {
        cache[key] = [];
      }
      cache[key].push(fn);
    };
    _remove = function(key, cache, fn) {
      if (cache[key]) {
        if (fn) {
          for (var i = cache[key].length; i >= 0; i--) {
            if (cache[key][i] === fn) {
              cache[key].splice(i, 1);
            }
          }
        } else {
          cache[key] = [];
        }
      }
    };
    _trigger = function() {
      var cache = _shift.call(arguments),
        key = _shift.call(arguments),
        args = arguments,
        _self = this,
        ret,
        stack = cache[key];
      if (!stack || !stack.length) {
        return;
      }
      return each(stack, function() {
        return this.apply(_self, args);
      });
    };
    _create = function(namespace) {
      var namespace = namespace || _default;
      var cache = {},
        offlineStack = [], // 离线事件
        ret = {
          listen: function(key, fn, last) {
            _listen(key, fn, cache);
            if (offlineStack === null) {
              return;
            }
            if (last === 'last') {
              offlineStack.length && offlineStack.pop()();
            } else {
              each(offlineStack, function() {
                this();
              });
            }
            offlineStack = null;
          },
          one: function(key, fn, last) {
            _remove(key, cache);
            this.listen(key, fn, last);
          },
          remove: function(key, fn) {
            _remove(key, cache, fn);
          },
          trigger: function() {
            var fn,
              args,
              _self = this;
            _unshift.call(arguments, cache);
            args = arguments;
            fn = function() {
              return _trigger.apply(_self, args);
            };
            if (offlineStack) {
              return offlineStack.push(fn);
            }
            return fn();
          }
        };
      return namespace ?
        (namespaceCache[namespace] ? namespaceCache[namespace] :
          namespaceCache[namespace] = ret) : ret;
    };

    return {
      create: _create,
      one: function(key, fn, last) {
        var event = this.create();
        event.one(key, fn, last);
      },
      remove: function(key, fn) {
        var event = this.create();
        event.remove(key, fn);
      },
      listen: function(key, fn, last) {
        var event = this.create();
        event.listen(key, fn, last);
      },
      trigger: function() {
        var event = this.create();
        event.trigger.apply(this, arguments);
      }
    };
  }();
  return Event;
})();

/*
命令模式
 */

var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')

var setCommand = function(btn, command) {
	btn.onclick = function() {
		command.execute()
	}
}

var MenuBar = {
	refresh: function() {
		console.log('refresh menu')
	}
}

var subMenu = {
	add: function() {
		console.log('add submenu')
	},
	del: function() {
		console.log('del submenu')
	}
}

var RefreshMenuBarCommand = function(receiver) {
	this.receiver = receiver
}

RefreshMenuBarCommand.prototype.execute = function() {
	this.receiver.refresh()
}

var AddSubMenuCommand = function(receiver) {
	this.receiver = receiver
}

AddSubMenuCommand.prototype.execute = function() {
	this.receiver.add()
}

var DelSubMenuCommand = function(receiver) {
	this.receiver = receiver
}

DelSubMenuCommand.prototype.execute = function() {
	this.receiver.del()
}

var refreshMneuBarCommand = new RefreshMenuBarCommand( MenuBar )
var addSubMenuCommand = new AddSubMenuCommand( subMenu )
var delSubMenuCommand = new DelSubMenuCommand( subMenu )

setCommand(button1, refreshMneuBarCommand)
setCommand(button2, addSubMenuCommand)
setCommand(button3, delSubMenuCommand)

// JavaScript 中的命令模式
var setCommand = function(button, fun) {
	button.onclick = function() {
		fun()
	}
}

var MenuBar = {
	refresh: function() {
		console.log('refresh menu')
	}
}

var RefreshMenuBarCommand = function(receiver) {
	return function() {
		receiver.refresh()
	}
}
var refreshMenuBarCommand = ReceiveCommand(MenuBar)
setCommand(button1, refreshMenuBarCommand)

// 当然，如果想更明确地表达当前正在使用命令模式，或者除了执行命令之外，将来有可能还
// 要提供撤销命令等操作。那我们最好还是把执行函数改为调用 execute 方法

var RefreshMenuBarCommand = function(receiver) {
	return {
		execute: function() {
			receiver.refresh()
		}
	}
}

var setCommand = function(button, command) {
	button.onclick = function() {
		command.execute()
	}
}

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar)
setCommand(button1, refreshMenuBarCommand)

// 撤销命令

var ball = document.getElementById('ball')
var pos = document.getElementById('pos')
var mvoeBtn = document.getElementById('mvoeBtn')
var cancelBtn = document.getElementById('cancelBtn')

var MoveCommand = function(receiver, pos) {
	this.receiver = receiver
	this.pos = pos
	this.oldPos = null
}

MoveCommand.prototype.execute = function() {
	this.receiver.start('left', this.pos, 1000, 'strongEaseOut')
	this.oldPos = this.dom.getBoundingClientRect()[this.receiver.propertyName]
}

MoveCommand.prototype.undo = function() {
	this.receiver.start('left', this.oldPos, 1000, 'strongEaseOut')
}

var moveCommand

mvoeBtn.onclick = function() {
	var animate = new Animate( ball )
	moveCommand = new MoveCommand (animate, pos.value)
	moveCommand.execute()
}

cancelBtn.onclick = function() {
	moveCommand.undo() // 撤销命令
}

// 撤消和重做

var Ray = {
	attack: function() {
		console.log('攻击')
	},
	defense: function() {
		console.log('防御')
	},
	jump: function() {
		console.log('跳跃')
	},
	crouch: function() {
		console.log('蹲下')
	}
}

var makeCommand = function(receiver, state) {
	return function() {
		receiver[state]()
	}
}

var commands = {
	"119": "jump",  // W
	"115": "crouch", // S
	"97": "defense", // A
	"110": "attack"  // D
}

var commandStack = [] // 保存命令的堆栈

document.onkeypress = function(ev) {
	var keyCode = ev.keyCode,
			command = makeCommand(Ray, commands[keyCode])

	if(command) {
		command()
		commandStack.push(command)
	}
}

document.getElementById('replay').onclick = function() {
	var command
	while(command = commandStack.shift()) {
		command()
	}
}

// 宏命令

var openDoorCommand = {
	execute: function() {
		console.log('打开门')
	}
}
var openComputeCommand = {
	execute: function() {
		console.log('打开电脑')
	}
}
var openQQCommand = {
	execute: function() {
		console.log('登陆QQ')
	}
}

var MacroCommand = function(){
	return {
		commandsList: [],
		add: function(command) {
			this.commandsList.push(command)
		},
		execute: function() {
			for(var i = 0, command; command = this.commandsList[i++];) {
				command.execute()
			}
		},
		undo: function() {
			var command
			while(command = this.commandsList.pop()) {
				command.execute()
			}
		}
	}
}

var macroCommand = MacroCommand()
macroCommand.add(openDoorCommand)
macroCommand.add(openComputeCommand)
macroCommand.add(openQQCommand)

macroCommand.execute()

/*
组合模式
 */
// 组合模式最大的优点在于可以一致地对待组合对象和基本对象。客户不需要知道
// 当前处理的是宏命令还是普通命令

var MacroCommand = function() {
	return {
		commandList: [],

		add: function(command) {
			this.commandList.push(command)
		},

		execute: function() {
			for(var i = 0, command; command = this.commandList[i++]; ) {
				command.execute()
			}
		}
	}
}

var openAcCommand = {
	execute: function() {
		console.log('打开空调')
	}
}
/* ************子组合************** */
var openTvCommand = {
	execute: function() {
		console.log('打开电视')
	}
}

var openSoundCommand = {
	execute: function() {
		console.log('打开电视')
	}
}

/* *************子组合************* */
var closeDoorCommand = {
	execute: function() {
		console.log('关门')
	}
}
var openComputeCommand = {
	execute: function() {
		console.log('打开电脑')
	}
}
var openQQCommand = {
	execute: function() {
		console.log('打开QQ')
	}
}

var macroCommand1 = MacroCommand()
macroCommand1.add(openTvCommand)
macroCommand1.add(openSoundCommand)

var macroCommand2 = MacroCommand()
macroCommand2.add(closeDoorCommand)
macroCommand2.add(openComputeCommand)
macroCommand2.add(openQQCommand)

var macroCommand = MacroCommand()
macroCommand.add(macroCommand1)
macroCommand.add(macroCommand2)

var setCommand = (function(command) {
	document.getElementById('button').onclick = function() {
		command.execute()
	}
})(macroCommand)

// 抽象类在组合模式中的作用

// 组合模式的例子——扫描文件夹

var Folder = function(name) {
	this.name = name
	this.files = []
}

Folder.prototype.add = function(file) {
	this.files.push(file)
}

Folder.prototype.scan = function() {
	for(var i = 0, file, files = this.files; file = files[i++];) {
		file.scan()
	}
}

var File = function(name) {
	this.name = name
}

File.prototype.add = function() {
	throw new Error('哥，这是一个文件啊')
}

File.prototype.scan = function() {
	console.log('开始扫描文件： ' + this.name)
}

// 创建2个文件夹
var folder = new Folder('developer')
var folder1 = new Folder('NodeJs')
var folder2 = new Folder('VueJs')
// 创建3个文件
var file1 = new File('深入浅出NodeJs')
var file2 = new File('锋利的JQuery')
var file3 = new File('Javascript设计模式')

// 将文件添加到文件夹
folder1.add(file1)
folder2.add(file2)
folder.add(file3)

// 将文件夹添加到文件夹
folder.add(folder1)
folder.add(folder2)
// 执行扫描
folder.scan()

/*
一些值得注意的地方
1. 组合模式不是父子关系

2. 对叶对象操作的一致性
	用一致的方式对待列表中的每个叶对象

3. 双向映射关系
	例如：一个员工同属于2个部门

4. 用职责链模式提高组合模式性能
 */

// 引用父对象

var Folder = function(name) {
	this.name = name
	this.parent = null
	this.files = []
}

Folder.prototype.add = function(file) {
	file.parent = this
	this.files.push(file)
}

Folder.prototype.scan = function() {
	console.log( '开始扫描文件夹: ' + this.name );
	for(var i = 0, file; file = this.files[i++]; ) {
		file.scan()
	}
}

Folder.prototype.remove = function() {
	if(!this.parent) {
		return
	}

	for(var files = this.parent.files, l = files.length - 1; l >= 0; l--) {
		var file = files[l]
		if(file === this) {
			files.splice(l, 1)
		}
	}
}

var File = function(name) {
	this.name = name
	this.parent = null
}

File.prototype.add = function() {
	throw new Error( '不能添加在文件下面' )
}

File.prototype.scan = function(){
	console.log( '开始扫描文件: ' + this.name )
}

File.prototype.remove = function(){
	if ( !this.parent ){ //根节点或者树外的游离节点
		return
	}
	for ( var files = this.parent.files, l = files.length - 1; l >=0; l-- ){
		var file = files[ l ]
		if ( file === this ){
			files.splice( l, 1 )
		}
	}
}

var folder = new Folder( '学习资料' )
var folder1 = new Folder( 'JavaScript' )
var file1 = new Folder ( '深入浅出 Node.js' )

folder1.add( new File( 'JavaScript 设计模式与开发实践' ) )
folder.add( folder1 )
folder.add( file1 )
folder1.remove() //移除文件夹
folder.scan()

/*
模板方法模式
 */

// 模板方法模式的定义和组成 咖啡与茶的例子
var Coffee = function() {}

Coffee.prototype.boilWater = function() {
	console.log( '把水煮沸' )
}

Coffee.prototype.brewCoffeeGriends = function() {
	console.log( '用水冲泡咖啡' )
}

Coffee.prototype.pourInCup = function() {
	console.log( '把咖啡倒进杯子' )
}

Coffee.prototype.addSugarAndMilk = function() {
	console.log( '加糖和牛奶' )
}

Coffee.prototype.init = function() {
	this.boilWater()
	this.brewCoffeeGriends()
	this.pourInCup()
	this.addSugarAndMilk()
}

var coffee = new Coffee()
coffee.init()

// 接下来泡一壶茶
var Tea = function() {}

Tea.prototype.boilWater = function() {
	console.log( '把水煮沸' )
}

Tea.prototype.steepTeaBag = function() {
	console.log( '用水冲泡茶叶' )
}

Tea.prototype.pourInCup = function() {
	console.log( '把茶叶倒进杯子' )
}

Tea.prototype.addSometing = function() {
	console.log( '加别的什么' )
}

Tea.prototype.init = function() {
	this.boilWater()
	this.steepTeaBag()
	this.pourInCup()
	this.addSometing()
}

var tea = new Tea()
tea.init()

// 分离共同点

var Beverage = function() {}

Beverage.prototype.boilWater = function() {
	throw new Error( '把水烧开' )
} // 空方法，应该由子类重写

Beverage.prototype.brew = function() {
	throw new Error( '子类必须重写 brew 方法' )
} // 空方法，应该由子类重写

Beverage.prototype.pourInCup = function() {
	throw new Error( '子类必须重写 pourInCup 方法' )
} // 空方法，应该由子类重写

Beverage.prototype.addSometing = function() {
	throw new Error( '子类必须重写 addSometing 方法' )
} // 空方法，应该由子类重写

Beverage.prototype.init = function() {
	this.boilWater()
	this.brew()
	this.pourInCup()
	this.addSometing()
}


// 创建咖啡类
var Coffee = function(){}

Coffee.prototype = new Beverage()

Coffee.prototype.brew = function() {
	console.log( '用水冲泡咖啡' )
}

Coffee.prototype.pourInCup = function() {
	console.log( '把咖啡倒进杯子' )
}

Coffee.prototype.addSometing = function() {
	console.log( '加糖和牛奶' )
}

var coffee = new Coffee()
coffee.init()

// 创建茶类
var Tea = function() {}

Tea.prototype = new Beverage()

Tea.prototype.brew = function() {
	console.log( '用水冲泡茶叶' )
}

Tea.prototype.pourInCup = function() {
	console.log( '把茶叶倒进杯子' )
}

Tea.prototype.addSometing = function() {
	console.log( '加别的什么' )
}

var tea = new Tea()
tea.init()


/*
在 Web开发中也能找到很多模板方法模式的适用场景，比如我们在构建一系列的 UI组件，
这些组件的构建过程一般如下所示：
(1) 初始化一个 div容器；
(2) 通过 ajax请求拉取相应的数据；
(3) 把数据渲染到 div容器里面，完成组件的构造；
(4) 通知用户组件渲染完毕。
我们看到，任何组件的构建都遵循上面的 4 步，其中第(1)步和第(4)步是相同的。第(2)步不
同的地方只是请求 ajax的远程地址，第(3)步不同的地方是渲染数据的方式
 */

// 钩子方法

var Beverage = function() {}

Beverage.prototype.boilWater = function() {
	console.lgo('烧开水')
}
Beverage.prototype.brew = function() {
	console.lgo('子类必须重写 brew 方法')
}
Beverage.prototype.pourInCup = function() {
	console.lgo('子类必须重写 pourInCup 方法')
}
Beverage.prototype.addSometing = function() {
	console.lgo('子类必须重写 addSometing 方法')
}
Beverage.prototype.customhook = function() {
	return true
}

Beverage.prototype.init = function() {
	this.boilWater()
	this.brew()
	this.pourInCup()
	if(this.customhook()) { // 如果挂钩返回 true，则需要调料
		this.addSometing()
	}
}

var CoffeeWithHook = function() {}

CoffeeWithHook.prototype = new Beverage()

CoffeeWithHook.prototype.brew = function() {
	console.log('用沸水冲泡咖啡')
}

CoffeeWithHook.prototype.pourInCup = function() {
	console.log('把咖啡倒进杯子')
}

CoffeeWithHook.prototype.addSometing = function() {
	console.log('加糖和牛奶')
}

CoffeeWithHook.prototype.customhook = function() {
	return window.confim('请问需要加调料吗?')
}

var coffeeWithHook = new CoffeeWithHook()
coffeeWithHook.init()

// 真的需要“继承”吗

var Beverage = function(param) {
	var boilWater = function() {
		console.log('boil water')
	}
	var brew = param.brew || function() {
		throw new Error('必须传递 brew 方法')
	}
	var pourInCup = param.pourInCup || function() {
		throw new Error('必须传递 pourInCup 方法')
	}
	var addSometing = param.addSometing || function() {
		throw new Error('必须传递 addSometing 方法')
	}

	var F = function() {}

	F.prototype.init = function() {
		boilWater()
		brew()
		pourInCup()
		addSometing()
	}

	return F
}

var Coffee = Beverage({
	brew: function() {
		console.log('冲咖啡')
	},
	pourInCup: function() {
		console.log('倒入杯子')
	},
	addSometing: function() {
		console.log('加料')
	}
})

var Tea = Beverage({
	brew: function() {
		console.log('泡茶')
	},
	pourInCup: function() {
		console.log('倒入茶杯')
	},
	addSometing: function() {
		console.log('加配料')
	}
})

var coffee = new Coffee()
coffee.init()

var tea = new Tea()
tea.init()

/*
享元模式
 */

/*
假设有个内衣工厂，目前的产品有 50种男式内衣和 50种女士内衣，为了推销产品，工厂决
定生产一些塑料模特来穿上他们的内衣拍成广告照片。 正常情况下需要 50 个男模特和 50 个女
模特，然后让他们每人分别穿上一件内衣来拍照。不使用享元模式的情况下，在程序里也许会这
样写
 */

var Model = function(sex, underwear) {
	this.sex = sex
	this.underwear = underwear
}

Model.prototype.takePhoto = function() {
	console.log('sex=' + this.sex + 'underwear=' + this.underwear)
}

for(var i = 1; i <= 50; i++) {
	var maleModel = new Model('male', 'underwear' + i)
	maleModel.takePhoto()
}

for(var i = 1; i <= 50; i++) {
	var femaleModel = new Model('female', 'underwear' + i)
	femaleModel.takePhoto()
}

// 现在来改写一下代码，既然只需要区别男女模特，那我们先把 underwear 参数从构造函数中
// 移除，构造函数只接收 sex 参数

var Model = function(sex) {
	this.sex = sex
}

Model.prototype.takePhoto = function() {
	console.log('sex=' + this.sex + 'underwear=' + this.underwear)
}

var maleModel = new Model('male'),
		femaleModel = new Model('female')

for(var i = 1; i <= 50; i++) {
	maleModel.underwear = 'underwear' + i
	maleModel.takePhoto()
}

for(var k = 1; k <= 50; k++) {
	femaleModel.underwear = 'underwear' + k
	femaleModel.takePhoto()
}

var id = 0

window.startUpload = function(uploadType, files) {
	for(var i = 0, file; file = files[i++];) {
		var uploadObj = new Upload(uploadType, file.fileName, file.fileSize);
		uploadObj.init(id++)
	}
}

var Upload = function(uploadType, fileName, fileSize) {
	this.uploadType = uploadType
	this.fileName = fileName
	this.fileSize = fileSize
	this.dom = null
}

Upload.prototype.init = function(id) {
	var that = this
	this.dom = document.createElement('div')
	this.dom.id = id
	this.dom.innerHTML = '<span>文件名称:'+ this.fileName +', 文件大小: '+ this.fileSize +'</span>' +
'<button class="delFile">删除</button>'

	this.dom.querySelector('.delFile').onclick = function() {
		that.delFile()
	}

	document.body.appendChild(this.dom)
}

Upload.prototype.delFile = function() {
	if(this.fileSize < 3000) {
		return this.dom.parentNode.removeChild(this.dom)
	}

	if(window.confim('确定要删除'+this.fileName+'该文件吗？')){
		return this.dom.parentNode.removeChild(this.dom)
	}
}

startUpload('plugin',[
	{
		fileName: '1.txt',
		fileSize: 1000
	},
	{
		fileName: '1.txt',
		fileSize: 2000
	},
	{
		fileName: '1.txt',
		fileSize: 3000
	},
	{
		fileName: '1.txt',
		fileSize: 5000
	}
])

startUpload( 'flash', [
	{
		fileName: '4.txt',
		fileSize: 1000
	},
	{
		fileName: '5.html',
		fileSize: 3000
	},
	{
		fileName: '6.txt',
		fileSize: 5000
	}
])


// 剥离外部状态
/*
明确了 uploadType 作为内部状态之后，我们再把其他的外部状态从构造函数中抽离出来，
Upload 构造函数中只保留 uploadType 参数
Upload.prototype.init 函数也不再需要，因为 upload 对象初始化的工作被放在了 upload-
Manager.add 函数里面
 */
var Upload = function(uploadType){
	this.uploadType = uploadType
}

Upload.prototype.delFile = function() {
	uploadManager.setExternalState(id, this)

	if(this.fileSize < 3000) {
		return this.dom.parentNode.removeChild(this.dom)
	}

	if(window.confirm('确定要删除'+ this.fileName +'该文件吗？')) {
		return this.dom.parentNode.removeChild(this.dom)
	}
}

// 工厂进行对象实例化

var UploadFactory = (function() {
	var createdFlyWeightObjs = {}

	return {
		create: function(uploadType) {
			if(createdFlyWeightObjs[uploadType]) {
				return createProxyFactory[uploadType]
			}

			return createdFlyWeightObjs[uploadType] = new Upload(uploadType)
		}
	}
})()

// 管理器封装外部状态
var uploadManager = (function() {
	var uploadDatabase = {} // uploadDatabase 对象保存所有 upload 对象的外部状态

	return {
		add: function(id, uploadType, fileName, fileSize) {
			var flyWeightObj = UploadFactory.create(uploadType)

			var dom = document.createElement('div')
			dom.innerHTML = '<span>文件名称:'+ this.fileName +', 文件大小: '+ this.fileSize +'</span>' +
'<button class="delFile">删除</button>'

			dom.querySelector('.delFile').onclick = function() {
				flyWeightObj.delFile()
			}

			document.body.appendChild(dom)


			uploadDatabase[id] = {
				fileName: fileName,
				fileSize: fileSize,
				dom: dom
			}

			return flyWeightObj
		},
		setExternalState: function(id, flyWeightObj) {
			var uploadData = uploadDatabase[id]

			for(var i in uploadData) {
				flyWeightObj[i] = uploadData[i]
			}
		}
	}
})()

var id = 0;
window.startUpload = function( uploadType, files ){
	for ( var i = 0, file; file = files[ i++ ]; ){
		var uploadObj = uploadManager.add( ++id, uploadType, file.fileName, file.fileSize );
	}
}

startUpload('plugin',[
	{
		fileName: '1.txt',
		fileSize: 1000
	},
	{
		fileName: '1.txt',
		fileSize: 2000
	},
	{
		fileName: '1.txt',
		fileSize: 3000
	},
	{
		fileName: '1.txt',
		fileSize: 5000
	}
])

startUpload( 'flash', [
	{
		fileName: '4.txt',
		fileSize: 1000
	},
	{
		fileName: '5.html',
		fileSize: 3000
	},
	{
		fileName: '6.txt',
		fileSize: 5000
	}
])

// 享元模式的适用性
/*
  一个程序中使用了大量的相似对象。
由于使用了大量对象，造成很大的内存开销。
对象的大多数状态都可以变为外部状态。
剥离出对象的外部状态之后，可以用相对较少的共享对象取代大量对象
 */

// 没有内部状态的享元
var UploadFactory = (function() {
	var uploadObj

	return {
		create: function() {
			if(uploadObj) {
				return uploadObj
			}
			return uploadObj = new Upload()
		}
	}
})()

// 对象池
// 对象池实现

var toolTipFactory = (function() {
	var toolTipPool = []

	return {
		create: function() {
			if(toolTipPool.length === 0) { // 如果对象池子为空
				var div = document.createElement('div') // 创建dom
				document.body.appendChild(div)
				return div
			}
			else {
				return toolTipPool.shift() // 则从对象池中取出dom
			}
		},
		recover: function(tooltipDom) {
			return toolTipPool.push(tooltipDom)
		}
	}
})()

var ary = []

for(var i = 0, str; str = ['A','B'][i++];) {
	var toolTip = toolTipFactory.create()

	toolTip.innerHTML = str
	ary.push(toolTip)
}

for(var i = 0, toolTip; toolTip = ary[i++];) {
	toolTipFactory.recover(toolTip)
}

for(var i = 0, str; str = ['A','B','C','D','E','F'][i++]; ) {
	var toolTip = toolTipFactory.create()

	toolTip.innerHTML = str
}

// 通用对象池实现

var objectPoolFactory = function(createObjFn) {
	var objectPool = []

	return {
		create: function() {
			var obj = objectPool.length === 0
			?	createObjFn.apply(this, arguments)
			: objectPool.shift()

			return obj
		},
		recover: function(obj) {
			objectPool.push(obj)
		}
	}
}

var iframeFactory = objectPoolFactory(function(){
	var iframe = document.createElement('iframe')
	document.body.appendChild(iframe)

	iframe.onload = function() {
		iframe.onload = null // 防止 iframe 重复加载的 bug
		iframeFactory.recover() // iframe 加载完成之后回收节点
	}

	return iframe
})

var iframe1 = iframeFactory.create()
iframe1.src = 'http://www.baidu.com/'

/*
职责链模式
 */

var order = function(orderTpye, pay, stock) {
	if(orderTpye === 1) {
		if(pay === true) {
			console.log('500元定价预定，得到100元优惠券')
		}
		else{
			if(stock > 0) {
				console.log('普通用户购买，无优惠券')
			}
			else {
				console.log('手机库存不足')
			}
		}
	}
	else if(orderTpye === 2) {
		if(pay === true) {
			console.log('200元定价预定，得到50元优惠券')
		}
		else{
			if(stock > 0) {
				console.log('普通用户购买，无优惠券')
			}
			else {
				console.log('手机库存不足')
			}
		}
	}
	else if(orderTpye === 3) {

		if(stock > 0) {
			console.log('普通用户购买，无优惠券')
		}
		else {
			console.log('手机库存不足')
		}

	}
}

order( 1 , true, 500); // 输出： 500 元定金预购, 得到 100 优惠券

// 用职责链模式重构代码

var order500 = function(orderType, pay, stock) {
	if(orderType === 1 && pay === true) {
		console.log('500元定价预定，得到100元优惠券')
	}
	else {
		order200(orderType, pay, stock)
	}
}
var order200 = function(orderType, pay, stock) {
	if(orderType === 2 && pay === true) {
		console.log('200元定价预定，得到100元优惠券')
	}
	else {
		orderNormal(orderType, pay, stock)
	}
}
var orderNormal = function(orderType, pay, stock) {
	if(stock > 0) {
		console.log('普通用户购买，无优惠券')
	}
	else {
		console.log('手机库存不足')
	}
}

order500( 1, true, 500); // 输出：500 元定金预购, 得到 100 优惠券
order500( 1, false, 500 ); // 输出：普通购买, 无优惠券
order500( 2, true, 500 ); // 输出：200 元定金预购, 得到 500 优惠券
order500( 3, false, 500 ); // 输出：普通购买, 无优惠券
order500( 3, false, 0 ); // 输出：手机库存不足

/*
目前已经有了不小的进步，但我们不会满足于此，虽然已经把大函数拆分成了互不影响的 3
个小函数，但可以看到，请求在链条传递中的顺序非常僵硬，传递请求的代码被耦合在了业务函
数之中
 */

var order500 = function(orderType, pay, stock) {
	if(orderType === 1 && pay === true) {
		console.log( '500 元定金预购，得到 100 优惠券' )
	}
	else {
		return 'nextSuccessor'
	}
}

var order200 = function(orderType, pay, stock) {
	if(orderType === 1 && pay === true) {
		console.log( '200 元定金预购，得到 50 优惠券' )
	}
	else {
		return 'nextSuccessor'
	}
}
var orderNormal = function(orderType, pay, stock) {
	if(stock > 0) {
		console.log('普通用户购买，无优惠券')
	}
	else {
		console.log('手机库存不足')
	}
}

var Chain = function(fn) {
	this.fn = fn
	this.successor = null
}

Chain.prototype.setNextSuccessor = function(successor) {
	return this.successor = successor
}

Chain.prototype.passRequest = function() {
	var ret = this.fn.apply(this, arguments)

	if(ret === 'nextSuccessor') {
		return this.successor && this.successor.passRequest.apply(this.successor, arguments)
	}
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest( 1, true, 500 ) // 输出：500 元定金预购，得到 100 优惠券
chainOrder500.passRequest( 2, true, 500 ) // 输出：200 元定金预购，得到 50 优惠券
chainOrder500.passRequest( 3, true, 500 ) // 输出：普通购买，无优惠券
chainOrder500.passRequest( 1, false, 0 ) // 输出：手机库存不足

/*
通过改进，我们可以自由灵活地增加、移除和修改链中的节点顺序，假如某天网站运营人员
又想出了支持 300元定金购买，那我们就在该链中增加一个节点即可：
*/
var order300 = function(){
// 具体实现略
}
chainOrder300= new Chain( order300 )
chainOrder500.setNextSuccessor( chainOrder300)
chainOrder300.setNextSuccessor( chainOrder200)

// 异步的职责链
// 手动传递请求给职责链中的下一个节点
Chain.prototype.next= function(){
	return this.successor && this.successor.passRequest.apply( this.successor, arguments );
}

var fn1 = new Chain(function() {
  console.log(1);
  return 'nextSuccessor'
})
var fn2 = new Chain(function() {
  console.log(2)
  var self = this
  setTimeout(function() {
    self.next()
  }, 1000)
})
var fn3 = new Chain(function() {
  console.log(3)
})
fn1.setNextSuccessor(fn2).setNextSuccessor(fn3)
fn1.passRequest()

// 用 AOP 实现职责链
Function.prototype.after = function(fn) {
	var self = this
	return function() {
		var ret = self.apply(this, arguments)
		if(ret === 'nextSuccessor') {
			return fn.apply(this, arguments)
		}

		return ret
	}
}

var order = order500.after(order200).after(orderNormal)

order( 1, true, 500 ); // 输出：500 元定金预购，得到 100 优惠券
order( 2, true, 500 ); // 输出：200 元定金预购，得到 50 优惠券
order( 1, false, 500 ); // 输出：普通购买，无优惠券


var getActiveUploadObj = function() {
	try{
		return new ActiveXObject('TXFTNActiveX.FTNUpload') // IE上传控件
	}
	catch(e) {
		return 'nextSuccessor'
	}
}

var getFlashUploadObj = function() {
	if(supportFlash() ) {
		var str = '<object type="application/x-shockwave-flash"></object>'
		return $(str).appendTo('body')
	}
	return 'nextSuccessor'
}

var getFormUpladObj = function() {
	return $('<form><input type="file" name="file" /></form>').appendTo($('body'))
}

var getUploadObj = getActiveUploadObj.after(getFlashUploadObj).after(getFormUpladObj)

/*
中介者模式
 */

var Player = function(name, enemy) {
	this.name = name
	this.enemy = null
}

Player.prototype.win = function() {
	console.log(this.name + ' won')
}

Player.prototype.lose = function() {
	console.log(this.name + ' lost')
}

Player.prototype.die = function() {
	this.lose()
	this.enemy.win()
}

var player1 = new Player('aa')
var player2 = new Player('bb')

player1.enemy = player2
player2.enemy = player1

player2.die()

var players = []

var Player = function(name, teamColor) {
	this.partners = []
	this.enemies = []
	this.state = 'live'
	this.name = name
	this.teamColor = teamColor
}

Player.prototype.win = function() {
	console.log('winner: ' + this.name)
}
Player.prototype.lose = function() {
	console.log('loser: ' + this.name)
}

Player.prototype.die = function() { // 玩家死亡
	var all_dead = true
	this.state = 'dead' // 设置玩家状态为死亡

	for(var i = 0, partner; partner = this.partners[i++];) { // 遍历队友列表
		if(partner.state !== 'dead') { // 如果还有一个队友没有死亡，则游戏还未失败
			all_dead = false
			break
		}

	}
	if(all_dead === true) {
		this.lose()
		for(var i = 0, partner; partner = this.partners[i++];) { // 通知所有队友玩家游戏失败
			partner.lose()
		}
		for(var i = 0, enemy; enemy = this.enemies[i++];) { // 通知所有敌人游戏胜利
			enemy.win()
		}
	}
}

var playerFactory = function(name, teamColor) {
	var newPlayer = new Player(name, teamColor) // 创建新玩家

	for(var i = 0, player; player = players[i++];) { // 通知所有的玩家，有新角色加入
		if(player.teamColor === newPlayer.teamColor) { // 如果是同一队的玩家
			player.partner.push(newPlayer) // 相互添加到队友列表
			newPlayer.partner.push(player)
		}
		else {
			player.enemies.push(newPlayer) // 相互添加到敌人列表
			newPlayer.enemies.push(player)
		}
	}

	players.push(newPlayer)
	return newPlayer
}

//红队：
var player1 = playerFactory( '皮蛋', 'red' ),
		player2 = playerFactory( '小乖', 'red' ),
		player3 = playerFactory( '宝宝', 'red' ),
		player4 = playerFactory( '小强', 'red' )
//蓝队：
var player5 = playerFactory( '黑妞', 'blue' ),
		player6 = playerFactory( '葱头', 'blue' ),
		player7 = playerFactory( '胖墩', 'blue' ),
		player8 = playerFactory( '海盗', 'blue' )

player1.die();
player2.die();
player4.die();
player3.die();

// 用中介者模式改造泡泡堂游戏

function Player(name, teamColor) {
	this.name = name
	this.teamColor = teamColor
	this.state = 'live'
}

Player.prototype.win = function() {
	console.log(this.name + 'won')
}

Player.prototype.lose = function() {
	console.log(this.name + 'lose')
}

Player.prototype.die = function() {
	this.state = 'dead'
	playerDirector.reciveMessage('playerDead', this) // 给中介者发送消息，玩家死亡
}

Player.prototype.remove = function() {
	this.state = 'dead'
	playerDirector.reciveMessage('removePlayer', this) // 给中介者发送消息，移除一个玩家
}

Player.prototype.changeTeam = function(color) {
	playerDirector.reciveMessage('changeTeam', this, color) // 给中介者发送消息，玩家换队
}

var playerFactory = function(name, teamColor) {
	var newPlayer = new Player(name, teamColor)

	playerDirector.reciveMessage('addPlayer', newPlayer)

	return newPlayer
}

var playerDirector = (function() {
	var players = {}, // 保存所有玩家
			operations = {}; // 中介者可以执行的操作

	operations.addPlayer = function(player) {
		var teamColor = player.teamColor  // 玩家的队伍颜色

		players[teamColor] = players[teamColor] || [] // 如果该颜色的玩家还没有成立队伍，则新成立一个队伍
		players[teamColor].push(player)
	}

	operations.removePlayer = function(player) {
		var teamColor = player.teamColor, // 玩家的队伍颜色
				teamPlayers = players[teamColor] || [] // 该队伍所有成员

		for(var i = teamPlayers.length-1; i >= 0; i--) {
			if(teamPlayers[i] === player) {
				teamPlayers.splice(i, 1)
			}
		}
	}

	operations.changeTeam = function(player, newTeamColor) {
		operations.removePlayer(player)  // 从原队伍中删除
		player.teamColor = newTeamColor  // 改变队伍颜色
		operations.addPlayer(player)  // 增加到新队伍中
	}

	operations.playerDead = function(player) {
		var teamColor = player.teamColor,
				teamPlayers = players[teamColor] // 玩家所在队伍

		var all_dead = true

		for(var i = 0, player; player = teamPlayers[i++];) {
			if(player.state !== 'dead') {
				all_dead = false
				break
			}
		}

		if(all_dead === true) {
			for(var i = 0, player; player = teamPlayers[i++];) {
				player.lose() // 本队所有玩家 lose
			}

			for(var color in players) {
				if(color !== teamColor) {
					var teamPlayers = players[color] // 其他队伍的玩家

					for(var i = 0, player; player = teamPlayers[i++];) {
						player.win()
					}
				}
			}
		}
	}

	var reciveMessage = function() {
		var message = Array.prototype.shift.call(arguments)
		operations[message].apply(this, arguments)
	}

	return {
		reciveMessage: reciveMessage
	}

})()


// 红队：
var player1 = playerFactory( '皮蛋', 'red' ),
		player2 = playerFactory( '小乖', 'red' ),
		player3 = playerFactory( '宝宝', 'red' ),
		player4 = playerFactory( '小强', 'red' );
// 蓝队：
var player5 = playerFactory( '黑妞', 'blue' ),
		player6 = playerFactory( '葱头', 'blue' ),
		player7 = playerFactory( '胖墩', 'blue' ),
		player8 = playerFactory( '海盗', 'blue' );
player1.die();
player2.die();
player3.die();
player4.die();

// 中介者模式的例子——购买商品

var goods = {
	"red": 3,
	"blue" : 6
}

/*
选择红色手机，购买 4个，库存不足
选择蓝色手机，购买 5个，库存充足，可以加入购物车
或者是没有输入购买数量的时候，按钮将被禁用并显示相应提示

我们大概已经能够猜到，接下来将遇到至少 5个节点，分别是：
  下拉选择框 colorSelect
  文本输入框 numberInput
  展示颜色信息 colorInfo
  展示购买数量信息 numberInfo
  决定下一步操作的按钮 nextBtn

 */

var colorSelect = document.getElementById( 'colorSelect' ),
		numberInput = document.getElementById( 'numberInput' ),
		colorInfo = document.getElementById( 'colorInfo' ),
		numberInfo = document.getElementById( 'numberInfo' ),
		nextBtn = document.getElementById( 'nextBtn' );

var goods = {
	"red": 3,
	"blue" : 6
}

colorSelect.onchange = function() {
	var color = this.value // 颜色
	var number = numberInput.value // 数量
	var stock = goods[color] // 该颜色手机对应的当前库存

	colorInfo.innerHTML = color

	if(!color) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请选择手机颜色'
		return
	}

	if( ((number - 0) | 0) !== number - 0) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请输入购买数量'
		return
	}

	if(number > stock) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '库存不足'
		return
	}

	nextBtn.disabled = false
	nextBtn.innerHTML = '加入购物车'

}

numberInput.oninput = function() {
	var color = colorSelect.value
	var number = this.value
	var stock = goods[color]

	numberInfo.innerHTML = number

	if(!color) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请选择手机颜色'
		return
	}

	if(((number-0) | 0) !== number - 0) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请输入购买数量'
		return
	}

	if(number > stock) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '库存不足'
		return
	}

	nextBtn.disabled = false
	nextBtn.innerHTML = '加入购物车'

}

/*
虽然目前顺利完成了代码编写，但随之而来的需求改变有可能给我们带来麻烦。假设现在要
求去掉 colorInfo 和 numberInfo 这两个展示区域，我们就要分别改动 colorSelect.onchange 和
numberInput.onput 里面的代码，因为在先前的代码中，这些对象确实是耦合在一起的
 */

// 增加内存选择
var colorSelect = document.getElementById( 'colorSelect' ),
		numberInput = document.getElementById( 'numberInput' ),
		memorySelect = document.getElementById( 'memorySelect' ),
		colorInfo = document.getElementById( 'colorInfo' ),
		numberInfo = document.getElementById( 'numberInfo' ),
		memoryInfo = document.getElementById( 'memoryInfo' ),
		nextBtn = document.getElementById( 'nextBtn' );


var goods = {
	"red|32G": 3,
	"red|16G": 0,
	"blue|32G": 1,
	"blue|16G": 6
}

colorSelect.onchange = function() {
	var color = this.value
	var memory = memorySelect.value
	var stock = goods[color + '|' + memory]

	number = numberInfo.value
	colorInfo.innerHTML = color

	if(!color) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请选择手机颜色'
		return
	}

	if(!memory) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请选择内存大小'
		return
	}

	if(((number-0) | 0) !== number - 0) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请输入购买数量'
		return
	}

	if(number > stock) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '库存不足'
		return
	}

	nextBtn.disabled = false
	nextBtn.innerHTML = '加入购物车'

}

memorySelect.onchange = function() {
	var color = this.value
	var number = numberInput.value
	var memory = this.value
	var stock = goods[color + '|' + memory]

	memoryInfo.innerHTML = memory

	if(!color) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请选择手机颜色'
		return
	}

	if(!memory) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请选择内存大小'
		return
	}

	if(((number-0) | 0) !== number - 0) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '请输入购买数量'
		return
	}

	if(number > stock) {
		nextBtn.disabled = true
		nextBtn.innerHTML = '库存不足'
		return
	}

	nextBtn.disabled = false
	nextBtn.innerHTML = '加入购物车'

}

/*
以上代码每个结点都耦合在一起，增加一个条件就要改变如此多的代码
 */




// 引入中介者

/*
当有新需求增加时，比如需要正价一个CPU选择，那么只要简单的添加如下代码
 */

var goods = { // 手机库存
	"red|32G|800": 3, // 颜色 red，内存 32G，cpu800，对应库存数量为 3
	"red|16G|801": 0,
	"blue|32G|800": 1,
	"blue|16G|801": 6
}

var mediator = (function() {
	var colorSelect = document.getElementById( 'colorSelect' ),
		numberInput = document.getElementById( 'numberInput' ),
		memorySelect = document.getElementById( 'memorySelect' ),
		cpuSelect = document.getElementById( 'cpuSelect' ),
		colorInfo = document.getElementById( 'colorInfo' ),
		numberInfo = document.getElementById( 'numberInfo' ),
		memoryInfo = document.getElementById( 'memoryInfo' ),
		cupInfo = document.getElementById( 'cupInfo' ),
		nextBtn = document.getElementById( 'nextBtn' )

		return {
			changed: function(obj) {
				var color = colorSelect.value
				var memory = memorySelect.value
				var number = numberInput.value
				var cpu = cpuSelect.value
				var stock = goods[color + '|' + memory + '|' + cup]

				if(obj === colorSelect) {
					colorSelect.innerHTML = color
				}
				else if(obj === memorySelect) {
					memoryInfo.innerHTML = memeory
				}
				else if(obj === numberInput) {
					numberInfo.innerHTML = number
				}
				else if(obj === cpuSelect) {
					cupInfo.innerHTML = cup
				}

				if(!color) {
					nextBtn.disabled = true
					nextBtn.innerHTML = '请选择手机颜色'
					return
				}

				if(!memory) {
					nextBtn.disabled = true
					nextBtn.innerHTML = '请选择内存大小'
					return
				}

				if(!cup) {
					nextBtn.disabled = true
					nextBtn.innerHTML = '请选CUP型号'
					return
				}

				if(((number-0) | 0) !== number - 0) {
					nextBtn.disabled = true
					nextBtn.innerHTML = '请输入购买数量'
					return
				}

				if(number > stock) {
					nextBtn.disabled = true
					nextBtn.innerHTML = '库存不足'
					return
				}

				nextBtn.disabled = false
				nextBtn.innerHTML = '加入购物车'
			}
		}
})()

// 事件函数
colorSelect.onchange = function() {
	mediator.changed(this)
}

memorySelect.onchange = function() {
	mediator.changed(this)
}

numberInput.oninput = function() {
	mediator.changed(this)
}

// 装饰者模式
var obj = {
	name: 'city',
	address: '深圳市'
}

obj.address = obj.address + '罗湖区'

/*
假设我们在编写一个飞机大战的游戏，随着经验值的增加，我们操作的飞机对象可以升级成
更厉害的飞机，一开始这些飞机只能发射普通的子弹，升到第二级时可以发射导弹，升到第三级
时可以发射原子弹
 */

var Plane = function() {}

Plane.prototype.fire = function() {
	console.log('发射普通子弹')
}

var MissileDecorator = function(plane) {
	this.plane = plane
}

MissileDecorator.prototype.fire = function() {
	this.plane.fire()
	console.log('发射导弹')
}

var AtomDecorator = function(plane) {
	this.plane = plane
}

AtomDecorator.prototype.fire = function() {
	this.plane.fire()
	console.log('发射原子弹')
}

var plane = new Plane()
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)

plane.fire()

/*
回到 JavaScript 的装饰者
*/

var plane = {
	fire: function() {
		console.log('发射普通子弹')
	}
}

var missileDecorator = function() {
	console.log('发射导弹')
}

var atomDecorator = function() {
	console.log('发射原子弹')
}

var fire1 = plane.fire

plane.fire = function() {
	fire1()
	missileDecorator()
}

var fire2 = plane.fire

plane.fire = function() {
	fire2()
	atomDecorator()
}

plane.fire()

/*
装饰函数

要想为函数添加一些功能，最简单粗暴的方式就是直接改写该函数，但这是最差的办法，直
接违反了开放封闭原则
 */

var a = function() {
	alert(1)
}

// 改成
var a = function() {
	alert(1)
	alert(3)
}

/*
很多时候我们不想去碰原函数，也许原函数是由其他同事编写的，里面的实现非常杂乱。甚
至在一个古老的项目中，这个函数的源代码被隐藏在一个我们不愿碰触的阴暗角落里。现在需要
一个办法，在不改变函数源代码的情况下，能给函数增加功能，这正是开放封闭原则给我们指
出的光明道路
 */

var a = function() {
	alert(1)
}

var _a = a

a = function() {
	_a()

	alert(2)
}

a()

window.onload = function() {
	alert(1)
}

var _onload = window.onload || function() {}

window.onload = function() {
	_onload()
	alert(2)
}

/*
这样的代码当然是符合开放封闭原则的 但是这种方式存在以下两个问题
必须维护 _onload 这个中间变量
其实还遇到了 this 被劫持的问题
 */

var _getElementById = document.getElementById

document.getElementById = function(id) {
	alert(1)
	return _getElementById(id)
}

/*
	执行这段代码，我们看到在弹出 alert(1) 之后，紧接着控制台抛出了异常
 */

var _getElementById = document.getElementById

document.getElementById = function() {
	alert(3)
	return _getElementById.apply(document, arguments)
}

// 用 AOP 装饰函数

Function.prototype.before = function(beforefn) {
	var that = this
	return function() {
		beforefn.apply(that, arguments)

		return that.apply(this, arguments)
	}
}

Function.prototype.after = function(afterfn) {
	var that = this
	return function() {
		var ret = that.apply(this, arguments)
		afterfn.apply(that, arguments)

		return ret
	}
}

window.onload = function() {
	console.log(1)
}

window.onload = (window.onload || function() {})
	.after(function() {
		console.log(2)
	})
	.after(function() {
		console.log(3)
	})
	.after(function() {
		console.log(4)
	})

var before = function(fn, beforefn) {
	return function() {
		beforefn.apply(this, arguments)
		fn.apply(this, arguments)
	}
}

var a = before(
	function() {console.log('origin fn 3')},
	function() {console.log('beforefn 2')}
)

a = before(a, function() {
	console.log('before fn 1')
})
a()

/*
AOP 的应用实例
 */

var showlogin = function() {
	console.log('打开登陆浮层')
	log(this.getAttribute('tag'))
}

var log = function(tag) {
	console.log('上报标签' + tag)
}

document.getElementById('button').onclick = showlogin

/*
我们看到在 showLogin 函数里，既要负责打开登录浮层，又要负责数据上报，这是两个层面
的功能，在此处却被耦合在一个函数里。使用 AOP分离之后
 */

Function.prototype.after = function(afterfn) {
	var that = this
	return function() {
		var ret = that.apply(this, arguments)
		afterfn.apply(this, arguments)
		return ret
	}
}

var showLogin = function() {
	console.log('打开登陆浮层')
}

var log = function() {
	console.log('上报标签' + this.getAttribute('tag'))
}

showLogin = showLogin.after(log)

document.getElementById('button').onclick = showLogin()

/*
用AOP动态改变函数的参数
 */

var func = function(param) {
	console.log(param)
}

func = func.before(function(param) {
	param.b = 'b'
})


func( {a: 'a'})
