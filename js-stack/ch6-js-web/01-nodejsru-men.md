#### **Node.js**

* 安装
  * [npmjs.org](http://npmjs.org)

```js
Installing nodejs-legacy // ubuntu wire error或许可以解决
node filename.js

// npm
npm init
npm install -g express
npm install yuidocjs --save // 将自动保存到package.json
// npm install jshint --save-dev
npm publish
npm update
npm uninstall

// express
npm install express --save
npm install connect --save

// socket.io
npm install express --save
npm install socket.io --save

// 项目文件结构
src 用于开发
dist 生产就绪的版本 // 构建处理,自动生成
```

* 基础
  * [expressjs.com](http://expressjs.com/en/4x/api.html) \| [http://socket.io/docs/](http://socket.io/docs/)
  * [Node-App的托管](https://github.com/nodejs/node-v0.x-archive/wiki/node-hosting)

```js
Netscape Enterprise Server // 类似前身  
为HTTP应用程序编码


// 当用作网络工作环境
加载http模块 
AMD require()

// 划分Node.js应用程序分布至多个文件

// 框架

// Express
// Sencha Lab的Connect中间件

// Socket.IO
BS之间的双向通信
多浏览器独立分离 
多用户连接的在线应用程序

socket.emit()
io.emit("new-data-on-server","Message Text")
socket.broadcast.emit("new-data-on-server","Message Text")

// Node.js的APP托管
Joyent
```

* 基础

```js
// 访问命令行参数
var index = 2, length = process.argv.length;
for (; index < length; index++) {
    console.log(process.argv[index]);
}


// package.json示例
{
    "name": "my-test-project",
    "version": "0.0.1",
    "description": "This is my test project",
    "homepage": "https://github.com/denodell/my-test-project",

    "repository": {
        "type": "git",
        "url": "https://github.com/denodell/my-test-project.git"
    },
    "author": {
        "name": "Den Odell",
        "email": "denodell@me.com"
    },

    "dependencies": {
        "async": "0.9.0",
        "request": ">=2.36.0",
        "underscore": "~1.6.0",
        "promise-the-earth": "git+ssh://github.com/denodell/promise-the-earth.git" // cdn?
    },

    "devDependencies": {
        "yuidocjs": "~0.3.50"
    }
}
```

#### **构建工具及自动化**

* 基础
  * [gulpjs](http://gulpjs.com) \| [grunt使用示例](http://developer.51cto.com/art/201506/479127.htm) \| [grunt插件](http://www.gruntjs.net/plugins)
  * [yaml.org](http://yaml.org)

```js
// 日复一日的工作流程
1.资源管理 : 图像压缩
2.代码编写
    JS静态代码分析
    单元测试
    代码缩编
    利用sass处理css
3.改进工作流，创建生产就绪的代码

    
// Gulp(Grunt)/webpack/bower??
JavaScript任务运行器
"流式"构建系统

// 相比Grunt的优势
利用Node.js的Stream, 
使得一个任务的输出可以进行feed和pipe
而成为另一个任务的输入，
不需要一个在硬盘写入临时文件的中途步骤，
更高效

配置信息不再是一个独立的很大的配置对象，
而是链式调用

专门设计成细分化的任务

// YAML
更容易被人类阅读的语言格式 
file.readYAML() 


// 第三方库和框架的管理 
保证安装准确的版本
[Bower](http://bower.io)
[grunt-bowercopy](https://github.com/timmywil/grunt-bowercopy)
[gulp-bower](https://github.com/zont/gulp-bower)

// 其他 
spm 
component 
Jam
```

* 使用示例

```js
// grunt
npm install -g grunt-cli
npm init
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
grunt

// gulp
npm install -g gulp
npm install gulp --save-dev
npm install gulp-jshint --save-dev
gulp

// bower
npm install -g bower
bower.json
bower install jquery --save
bower install

// 改进grunt工作流
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

// 改进Gulp工作流
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

#### **ch1 安装**

* 基础

```js
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
```

* 安装模块
  * 彩虹

```
require('colors');
console.log('smashing node'.rainbow);
```

* 自定义模块
  * package.json -&gt; 双引号

```
{
"name": "node-basic",
"version": "0.0.1",
"main": "./index",
"dependencies": {
"colors": "*"
}
}
```

* 基础

```
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
```

#### **ch2 JavaScript概览**

* V8中的JavaScript
* Object - key
  * hasOwnProperty
  * 获取自有键

```
    var a = {c : "j", d : "h"};
    console.log( Object.keys(a) ); // [ 'c', 'd' ]
```

* isArray
* bind
  * 允许改变对this的引用

```
    function a() {
      this.hello == 'world'; // true
      console.log(this.hello);
    }

    var b = a.bind({ hello : 'hu' });
    b(); // hu
```

* forEach filter map reduce ...
* trim\(\);
* JSON
  * JSON.stringify 解码
  * JSON.parse 编码

```
    var obj = JSON.parse('{"a":"b"}');
    console.log(obj); // { a: 'b' }
    console.log(obj.a); // b
```

* 非标准的
  * name

```
    var a = function your () {};
    console.log(a.name); // your
    console.log(a.name == 'your'); // true
```

* 始终对函数命名 便于调试
  * **PROTO**
* 不需要中间构造器
* 也不需要第三方的OPP工具类库

```
    function Animal() {}
    function Cat() {}

    Cat.prototype.__proto__ = Animal.prototype;

    var cat = new  Cat();
    console.log(cat instanceof Animal); // true
```

* 存取器

```
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

#### **ch3 阻塞与非阻塞IO**

```

```

#### **ch4 Node中的JavScript**

```

```

#### **ch5 命令行工具以及FS API**

```

```

#### **ch6-7 TCP/HTTP/Connect**

```

```

#### **ch9 Express**

```

```

#### **ch10 WebSocket**

```

```

#### **ch11 Socket.IO**

```

```

#### **ch12-13 MongoDB/MySQL**

```

```

#### **ch14 Redis**

```

```

#### **ch15 代码共享**

```

```

#### **ch16 测试**

```

```

#### 参考

```js
精通JS开发
了不起的Node.js开发
```



