#### Node.js实战-读后感

* 实战第1季

  * [ch1-2 使用Express + MongoDB搭建多人博客](https://github.com/nswbmw/N-blog)
  * [ch3 使用Redis搭建漂流瓶服务器 ](https://github.com/nswbmw/N-drifter) 
  * [ch4 使用Meteor搭建微博网站 ](https://github.com/nswbmw/N-weibo) 
  * [ch5 使用socket.io+Angular打造单页应用 ](https://github.com/island205/technode-tutorial) 
  * [ch6 网络爬虫与数据操作 ](https://github.com/leizongmin/book-crawler-mysql-cron) 
  * [ch7-9  Node.js的进程与线程，发布一个Package, Web安全实战](https://github.com/DoubleSpout/threadAndPackage)

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

* 编写命令行工具 - 打造一个静态博客系统
  * [code-static-blog](https://github.com/leizongmin/book-nodejs-in-action-season-2/tree/master/static-blog)

```js
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

* 基于Koa快速开发Web应用
  * [es6.ruanyifeng.com](http://es6.ruanyifeng.com/)
  * [nswbmw-N-club](https://github.com/nswbmw/N-club)

```js
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

* Node.js-测试-服务搭建

```js
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

* 使用Node.js绑定C语言库-51Degrees.node
  * [51degrees.node](https://github.com/51Degrees/51degrees.node)

```js
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



