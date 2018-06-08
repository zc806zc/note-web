# Node.js

> Using Node.js as service

- 为什么要使用Node.js <https://juejin.im/post/57b54f151532bc0063ebfe31>
- nodejs-learning-guide https://github.com/chyingp/nodejs-learning-guide

- 资源

  - <https://www.awesomes.cn/repos/NodeJS/Frameworks>
  - <https://github.com/sindresorhus/awesome-nodejs>
  - <https://github.com/alsotang/node-lessons>
  - <https://groups.google.com/forum/\#!forum/nodejs>
  - <http://stackoverflow.com/questions/tagged/node.js>
  - 了不起的Node.js <https://github.com/kdchang/smashing-nodejs-examples>


- node面试 <https://github.com/ElemeFE/node-interview>

  - How to pass the Node.js interview of ElemeFE

```shell
// node.js安装
// ubuntu wire error或许可以解决
Installing nodejs-legacy 
node filename.js

// 从源码编译安装 
curl http://npmjs.org/install.sh | sh

// 安装彩虹模块 - demo
require('colors');
console.log('smashing node'.rainbow);

npm help json // 查看属性文档
npm search realtime
npm view socket.io

// 常见命令
npm init
npm install -g express
npm install yuidocjs --save // 将自动保存到package.json
// npm install jshint --save-dev
npm publish
npm update
npm uninstall

// socket.io演示如下
socket.emit()
io.emit("new-data-on-server","Message Text")
socket.broadcast.emit("new-data-on-server","Message Text")

// Node REPL
node
Object.keys(global) // 忘记某个API的用法 可以用来验证
```


# 周边

- sails

  - <https://github.com/balderdashy/sails>

- browserify <https://github.com/browserify/browserify>

- async <https://github.com/caolan/async>

- nw.js

  - <https://github.com/nwjs/nw.js>
  - Call all Node.js modules directly from DOM/WebWorker and enable a new way of writing applications with all Web technologies.

- hackathon-starter <https://github.com/sahat/hackathon-starter>

  - A boilerplate for Node.js web applications

- sequelize

  - <https://github.com/demopark/sequelize-docs-Zh-CN>

- nodebestpractices

  - <https://github.com/i0natan/nodebestpractices>

- <https://github.com/mysqljs/mysql>


- express | socket.io [expressjs.com](https://www.gitbook.com/book/luo0412/white/details#) | [http://socket.io/docs/](https://www.gitbook.com/book/luo0412/white/details#)

- [Node-App的托管](https://github.com/nodejs/node-v0.x-archive/wiki/node-hosting) Joyent

- Netscape Enterprise Server (早期类似产品)

  - 为HTTP应用程序编码


# 基础

```javascript
// 访问命令行参数
var index = 2, length = process.argv.length;
for (; index < length; index++) {
    console.log(process.argv[index]);
}
```

![](/static/img/nodejs/node-jm.jpg)


# 复习JavaScript

- Object - key

  - hasOwnProperty
  - 获取自有键

- isArray

- bind

  - 允许改变对this的引用

```javascript
var a = {c : "j", d : "h"};
console.log( Object.keys(a) ); // [ 'c', 'd' ]

function a() {
this.hello == 'world'; // true
console.log(this.hello);
}

var b = a.bind({ hello : 'hu' });
b(); // hu


var obj = JSON.parse('{"a":"b"}');
console.log(obj); // { a: 'b' }
console.log(obj.a); // b
```

- JSON

  - JSON.stringify 解码
  - JSON.parse 编码

- 非标准的

```javascript
var a = function your () {};
console.log(a.name); // your
console.log(a.name == 'your'); // true
```

- 始终对函数命名 便于调试

  - PROTO

- 不需要中间构造器

- 也不需要第三方的OPP工具类库

```javascript
function Animal() {}
function Cat() {}

Cat.prototype.__proto__ = Animal.prototype;

var cat = new Cat();
console.log(cat instanceof Animal); // true
```

- 存取器

```javascript
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
```

# 阻塞与非阻塞IO

# Node中的JavScript

# 命令行工具以及FS API

# TCP/HTTP/Connect

# Express

# WebSocket

# Socket.IO

# MongoDB/MySQL

# Redis

# 代码共享

# 测试