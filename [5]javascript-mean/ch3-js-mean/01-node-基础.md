# **Node.js**安装与基础

- npm
- package.json
- express | socket.io [expressjs.com](https://www.gitbook.com/book/luo0412/white/details#) | [http://socket.io/docs/](https://www.gitbook.com/book/luo0412/white/details#)
- [Node-App的托管](https://github.com/nodejs/node-v0.x-archive/wiki/node-hosting) Joyent
- ~~Netscape Enterprise Server (早期类似产品)~~

  - 为HTTP应用程序编码

- v8

  - Google为Chrome Web浏览器设计
  - JavaScript解释器
  - 虚拟器

- 学习资源

  - ~~<https://groups.google.com/forum/\#!forum/nodejs>~~
  - <http://stackoverflow.com/questions/tagged/node.js>
  - 了不起的Node.js <https://github.com/kdchang/smashing-nodejs-examples>

```javascript
// node.js安装
Installing nodejs-legacy // ubuntu wire error或许可以解决
node filename.js

从源码编译安装 curl http://npmjs.org/install.sh | sh

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

- 基础

```javascript
// 访问命令行参数
var index = 2, length = process.argv.length;
for (; index < length; index++) {
    console.log(process.argv[index]);
}
```

--------------------------------------------------------------------------------

# **构建工具及自动化**

- 自动化构建解决日复一日的工作流程

  - 资源管理 : 图像压缩
  - 代码编写（JS静态代码分析，单元测试，代码缩编， 利用sass处理css）
  - 改进工作流，创建生产就绪的代码
  - 确保版本号

- [gulpjs](http://gulpjs.com) | [grunt使用示例](http://developer.51cto.com/art/201506/479127.htm) | [grunt插件](http://www.gruntjs.net/plugins)
- gulp较grunt的优势

  - 利用Node.js的Stream,使得一个任务的输出可以进行feed和pipe，而成为另一个任务的输入不 需要一个在硬盘写入临时文件的中途步骤，更高效
  - 配置信息不再是一个独立的很大的配置对象，而是链式调用
  - 专门设计成细分化的任务

- [yaml.org](http://yaml.org)

  - 更容易被人类阅读的语言格式
  - file.readYAML()

- webpack | prepack
- bower <http://bower.io>

  - <https://github.com/timmywil/grunt-bowercopy>
  - <https://github.com/zont/gulp-bower>

- ~~其他~~

  - spm
  - component
  - Jam

- gulp/webpack/bower等工具的差别

- 使用示例

```javascript
// gulp
npm install -g gulp
npm install gulp --save-dev
npm install gulp-jshint --save-dev
gulp

// grunt工作流
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev // 校验
npm install grunt-contrib-connect --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-jasmine --save-dev // 单元测试
npm install grunt-template-jasmine-istanbul --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev // 代码缩编
npm install grunt-contrib-yuidoc --save-dev // 生成API

// Gulp工作流
npm install gulp --save-dev
npm install gulp-jshint --save-dev
npm install gulp-connect --save-dev
npm install gulp-clean --save-dev
npm install gulp-jasmine --save-dev
npm install gulp-istanbul --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install gulp-yuidoc --save-dev
npm install gulp-rename --save-dev
npm install gulp-header --save-dev // 没有watch, 已经在API里
```

--------------------------------------------------------------------------------

# **JavaScript概览**

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

  - **PROTO**

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

# **阻塞与非阻塞IO**

# **Node中的JavScript**

# **命令行工具以及FS API**

--------------------------------------------------------------------------------

# **TCP/HTTP/Connect**

# **Express**

# **WebSocket**

# **Socket.IO**

--------------------------------------------------------------------------------

# **MongoDB/MySQL**

# **Redis**

# **代码共享**

--------------------------------------------------------------------------------

# **测试**

--------------------------------------------------------------------------------

# 参考

```javascript
精通JS开发
了不起的Node.js开发
```

# Node.js

- [ ] 用上MongoDB的一个项目
- [ ] Node基础整理
