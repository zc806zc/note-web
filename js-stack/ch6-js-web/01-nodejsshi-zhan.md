#### Node.js实战-读后感

* 实战第1季

  * [ch1-2 使用Express + MongoDB搭建多人博客](https://github.com/nswbmw/N-blog)
  * [ch3 使用Redis搭建漂流瓶服务器 ](https://github.com/nswbmw/N-drifter) 
  * [ch4 使用Meteor搭建微博网站 ](https://github.com/nswbmw/N-weibo) 
  * [ch5 使用socket.io+Angular打造单页应用 ](https://github.com/island205/technode-tutorial) 
  * [ch6 网络爬虫与数据操作 ](https://github.com/leizongmin/book-crawler-mysql-cron) 
  * [ch7-9  Node.js的进程与线程，发布一个Package, Web安全实战](https://github.com/DoubleSpout/threadAndPackage)

  [ ](https://github.com/DoubleSpout/threadAndPackage)

* 通过Docker快速发布Node.js应用

  * [源码-nodeInAction](https://github.com/DoubleSpout/nodeInAction)

```js
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

* 开发OAuth2认证服务器
  * [**book-nodejs-in-action-season-2**](https://github.com/leizongmin/book-nodejs-in-action-season-2)

```js
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

* 基于RabbitMQ搭建消息队列

```js
XMLRPC -> RESTful
使用RabbitMQ也能灵活处理这些事情

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

// RabbitMQ的队列路由

// RabbitMQ的RPC远程过程调用

// RabbitMQ与HTTP的对比
```

* 编写命令行工具 - 打造一个静态博客系统

```js
// 

// 编写命令行工具
// 实时预览

// 评论组件
// 分享组件
```

* 基于Koa快速开发Web应用

```js
// ES6
function function*
yield yield*
co和Koa

// 模板系统
ejs和co-ejs
过滤器

// 路由

// 参数验证和错误处理

// 缓存和配置

// 测试
单元测试
co-mocha和co-supertest

// 开发一个论坛系统
```

* Node.js-测试-服务搭建

```js
// pixbi

// 搭建后端测试服务
单元测试
功能测试
可扩展测试

// 搭建前端测试服务
PhantomJS
BrowserStack
Adobe CEP

// 加入持续集成工作流
```

* 使用Node.js绑定C语言库-51Degrees.node

```js
// 51Degrees-C
// C/C++中的Node.js API
// nan及其升级

// v8胶水层接口

// 构建与发布
node-gyp与binding.gyp
```



