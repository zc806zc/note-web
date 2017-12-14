# Node.js安装与基础

- <https://github.com/browserify/browserify>
- <https://github.com/caolan/async>

- 资源

  - <https://github.com/sindresorhus/awesome-nodejs>
  - <https://github.com/alsotang/node-lessons>

- sequelize

  - <https://github.com/demopark/sequelize-docs-Zh-CN>

- nodebestpractices

  - <https://github.com/i0natan/nodebestpractices>

- <https://github.com/mysqljs/mysql>

- npm

- package.json

- express | socket.io [expressjs.com](https://www.gitbook.com/book/luo0412/white/details#) | [http://socket.io/docs/](https://www.gitbook.com/book/luo0412/white/details#)

- [Node-App的托管](https://github.com/nodejs/node-v0.x-archive/wiki/node-hosting) Joyent
- Netscape Enterprise Server (早期类似产品)

  - 为HTTP应用程序编码

- v8

  - Google为Chrome Web浏览器设计
  - JavaScript解释器
  - 虚拟器

- 学习资源

  - <https://groups.google.com/forum/\#!forum/nodejs>
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

# 构建工具及自动化

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

- 其他

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

# JavaScript概览

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

--------------------------------------------------------------------------------

# TCP/HTTP/Connect

# Express

# WebSocket

# Socket.IO

--------------------------------------------------------------------------------

# MongoDB/MySQL

# Redis

# 代码共享

--------------------------------------------------------------------------------

# 测试

--------------------------------------------------------------------------------

# 参考

```javascript
精通JS开发
了不起的Node.js开发
```

# Node.js

- [ ] 用上MongoDB的一个项目
- [ ] Node基础整理

# Node.js实战-读后感

- 实战第1季

  - [ch1-2 使用Express + MongoDB搭建多人博客](https://github.com/nswbmw/N-blog)
  - [ch3 使用Redis搭建漂流瓶服务器](https://github.com/nswbmw/N-drifter)
  - [ch4 使用Meteor搭建微博网站](https://github.com/nswbmw/N-weibo)
  - [ch5 使用socket.io+Angular打造单页应用](https://github.com/island205/technode-tutorial)
  - [ch6 网络爬虫与数据操作](https://github.com/leizongmin/book-crawler-mysql-cron)
  - [ch7-9 Node.js的进程与线程，发布一个Package, Web安全实战](https://github.com/DoubleSpout/threadAndPackage)

- 通过Docker快速发布Node.js应用

  - [源码-nodeInAction](https://github.com/DoubleSpout/nodeInAction)

```javascript
// Docker
// Nginx作为Node.js前端Web Server的作用
静态文件性能
反向代理规则
扩展性
稳定性和转发性能
安全性
运维管理

// 不要用SSH连接到你的container盒子

// Jenkins
Java开发
使持续集成变成可能

Node.js程序不止在一台服务器上
用来Jenkins
只需点击 “立即构建”
就可以自动从Git仓库获取代码
然后远程部署到目标服务器
```

- 开发OAuth2认证服务器

  - [book-nodejs-in-action-season-2](https://github.com/leizongmin/book-nodejs-in-action-season-2)

```javascript
// 第三方模块
Express 4.x
js2xmlparser // 将JS对象转化成XML格式字符串
faker // 生成随机的测试数据
request // HTTP客户端

// REST风格的API
架构约束：
客户-服务器 // 通信只能有客户端单方面发起
无状态
缓存
统一接口
分层系统
按需代码

DELETE /api/articles/#{id}.json

// OAUTH认证
// Access Token过期

// API传输过程中的安全问题

// 生成随机的测试数据
```

- 基于RabbitMQ搭建消息队列

```javascript
XMLRPC -> RESTful
使用RabbitMQ也能灵活处理这些事情

而thrift 性能更好

// 消息队列
应用解耦 // 只要遵循相同的接口约定
冗余存储
可扩展性
灵活性和峰值处理能力
可恢复性
送达保证
排序保证
缓冲
理解数据流
异步通信


// RabbitMQ
虽然现在性能并不是最好的
但是可靠

// RabbitMQ的工作队列
一个生产者配合多个消费者的队列
将一个复杂的任务负载均衡到各个节点

// RabbitMQ的PUB/SU队列
一个消息有对个消费者订阅

// RabbitMQ的队列路由
消费者是各种各样的

// RabbitMQ的RPC远程过程调用

// RabbitMQ与HTTP的对比
HTTP不错，但有个缺陷 - 无法控制请求的频率 // 抢购活动前100名 类似于DDos
```

- 编写命令行工具 - 打造一个静态博客系统

  - [code-static-blog](https://github.com/leizongmin/book-nodejs-in-action-season-2/tree/master/static-blog)

```javascript
Node.js除了可以编写服务器端程序
也可以用来编写一些 命令行工具
gulb.js ??

// 使用到的第三方模块
commander : 解析命令行参数
Express
serve-static : 静态文件服务中间件
markdown-it ： 渲染Markdown格式的文档
swig ： 语法模板引擎
rd ： 遍历目录下的所有文件，包括子目录
fs-extra ： 扩展fs模块的一些方法
open ： 使用系统程序打开指定文件或网址
moment ： 解析 格式化日期时间

// 编写命令行工具
// 实时预览

// 评论组件
多说
Disqus

// 分享组件
加网 http://www.jiathis.com/ 提供的组件
```

- 基于Koa快速开发Web应用

  - [es6.ruanyifeng.com](http://es6.ruanyifeng.com/)
  - [nswbmw-N-club](https://github.com/nswbmw/N-club)

```javascript
// ES6
function function*
yield yield*
co // 回调金字塔
Koa // Express原班人马打造的更小更健壮更富有表现力的Web框架


// 模板系统
ejs和co-ejs
过滤器

// 路由
// 参数验证和错误处理
// 缓存和配置

// 测试
// 单元测试
TDD 测试驱动开发
BDD 行为驱动开发 // 系统最终的实现与用户期望和设计目标是否一致

co-mocha和co-supertest

// 开发一个论坛系统
```

- Node.js-测试-服务搭建

```javascript
// pixbi
连接时尚杂志与电子商品的互联网创业团队
Adobe InDesign插件

// 搭建后端测试服务的技术栈
MochaJS
SinonJS // 截断额外的请求
Node.js
jscoverage // 覆盖率测试



单元测试 // 代码
功能测试 // 产品功能 业务流程 服务器接口...
可扩展测试

// 搭建前端测试服务
PhantomJS // headless浏览器，没有实际的用户界面
BrowserStack // 集成了700个浏览器的测试环境
Adobe CEP

// 加入持续集成工作流
CircleCI
```

- 使用Node.js绑定C语言库-51Degrees.node

  - [51degrees.node](https://github.com/51Degrees/51degrees.node)

```javascript
// 远程工作
将一个已有的C/C++代码库扩展到Node.js平台上使用

// 51Degrees-C
// C/C++中的Node.js API
// nan及其升级
用于兼容v8.h与node.h的版本问题

// v8胶水层接口

// 构建与发布
node-gyp与binding.gyp
```
