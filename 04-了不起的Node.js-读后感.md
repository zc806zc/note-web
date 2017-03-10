#### **ch1 安装**
* v8是Google为Chrome Web浏览器设计
	* JavaScript解释器
    * 虚拟器
* 获取Web服务的完全控制权 -> 实时Web应用
* [Node.js邮件列表](https://groups.google.com/forum/#!forum/nodejs)
* [Stack Overflow](http://stackoverflow.com/questions/tagged/node.js)
* [源码下载](https://github.com/kdchang/smashing-nodejs-examples)
* Node REPL
	* node
    * >Object.keys(global)
    * 忘记某个API的用法 可以用来验证
*  执行文件 node + filename.js
* npm
	* 从源码编译安装 curl http://npmjs.org/install.sh | sh
* 安装模块
	* 彩虹
    
    ~~~
    require('colors');
    console.log('smashing node'.rainbow);
    ~~~
* 自定义模块
	* package.json -> 双引号
    
    ~~~
        {
        "name": "node-basic",
        "version": "0.0.1",
        "main": "./index",
        "dependencies": {
            "colors": "*"
        }
        }
    ~~~
    * npm install
    * npm publish
    	* "private": "true"  // 避免误发布
    * npm help json // 查看属性文档
* 安装二进制工具包
	* express 可执行工具
	* 有些项目发布的是Node编写的命令行工具  加上-g
    * 发布时在package.json中添加 "bin" 指向可执行文件
* 浏览npm仓库
	* npm search realtime
    * npm view socket.io

####  **ch2 JavaScript概览**
* V8中的JavaScript
* Object - key
	* hasOwnProperty
    * 获取自有键
    
    ~~~
	var a = {c : "j", d : "h"};
	console.log( Object.keys(a) ); // [ 'c', 'd' ]
    ~~~
* isArray
* bind
	* 允许改变对this的引用
    
    ~~~
    function a() {
      this.hello == 'world'; // true
      console.log(this.hello);
    }

    var b = a.bind({ hello : 'hu' });
    b(); // hu
    ~~~
* forEach filter map reduce ...
* trim();
* JSON
	* JSON.stringify 解码
    * JSON.parse 编码
    
    ~~~
    var obj = JSON.parse('{"a":"b"}');
    console.log(obj); // { a: 'b' }
    console.log(obj.a); // b
    ~~~
* 非标准的
	* name
    
    ~~~
    var a = function your () {};
    console.log(a.name); // your
    console.log(a.name == 'your'); // true
    ~~~
    * 始终对函数命名 便于调试
* __PROTO__
	* 不需要中间构造器
    * 也不需要第三方的OPP工具类库
    
    ~~~
    function Animal() {}
    function Cat() {}

    Cat.prototype.__proto__ = Animal.prototype;

    var cat = new  Cat();
    console.log(cat instanceof Animal); // true
    ~~~
* 存取器
~~~
// Based on prettyDate by John Resig (MIT license)
Date.prototype.__defineGetter__('ago', function () {
  var diff = (((new Date()).getTime() - this.getTime()) / 1000)
      , day_diff = Math.floor(diff / 86400);

  return day_diff == 0 && (
    diff < 60 && "just now" ||
    diff < 120 && "1 minute ago" ||
    diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
    diff < 7200 && "1 hour ago" ||
    diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
    day_diff == 1 && "Yesterday" ||
    day_diff < 7 && day_diff + " days ago" ||
    Math.ceil( day_diff / 7 ) + " weeks ago";
});

var a = new Date('12/25/1990');
console.log(a.ago); // 1360 weeks ago
~~~

####  **ch3 阻塞与非阻塞IO**
####  **ch4 Node中的JavScript**
####  **ch5 命令行工具以及FS API**
####  **ch6 TCP**
####  **ch7 HTTP**
####  **ch8 Connect**
####  **ch9 Express**
####  **ch10 WebSocket**
####  **ch11 Socket.IO**
####  **ch12 MongoDB**
####  **ch13 MySQL**
####  **ch14 Redis**
####  **ch15 代码共享**
####  **ch16 测试**


