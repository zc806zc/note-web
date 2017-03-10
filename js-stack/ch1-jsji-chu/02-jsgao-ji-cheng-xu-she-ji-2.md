#### **ch6 面向对象的程序设计**
* 对象定义：无序属性的集合，其属性可以包含基本值、对象或者函数
	* 即散列表
*  数据属性
	* [[Configurable]] 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性
    * [[Enumerable]] 表示能否通过 for-in 循环返回属性
    * [[Writable]]
    * [[Value]]
* 访问器属性
	* [[Configurable]]
    * [[Enumerable]]
    * [[Get]]
    * [[Set]]
    
~~~
var person = {};
Object.defineProperty(person, "name", {
writable: false,
value: "Nicholas"
});
alert(person.name); //"Nicholas"
person.name = "Greg";
alert(person.name); //"Nicholas"

// 一旦把属性定义为不可配置的，就不能再把它变回可配置了
var person = {};
Object.defineProperty(person, "name", {
configurable: false,
value: "Nicholas"
});
//抛出错误
Object.defineProperty(person, "name", {
configurable: true,
value: "Nicholas"
});

// 定义访问器属性
var book = {
	_year: 2004,
	edition: 1
};
Object.defineProperty(book, "year", {
  get: function(){
  	return this._year;
  },
  set: function(newValue){
  	if (newValue > 2004) {
  		this._year = newValue;
  		this.edition += newValue - 2004;
  	}
  }
});

book.year = 2005;
alert(book.edition); //2

// 定义多个属性
var book = {};
Object.defineProperties(book, {
  _year: {
  	value: 2004
  },
  edition: {
  	value: 1
  },
  year: {
  	get: function(){
  		return this._year;
 	 },
  	set: function(newValue){
  		if (newValue > 2004) {
 			this._year = newValue;
  			this.edition += newValue - 2004;
  		}
  	}
  }
});
~~~ 

#### **ch7 函数表达式**