# **MongoDB**

- 安装

  - [MongoDB-dl](https://www.mongodb.com/download-center#community) | [文档-系统服务方式运行](https://docs.mongodb.com/manual/reference/configuration-options/)
  - 安装教程 <http://www.runoob.com/mongodb/mongodb-window-install.html>

```javascript
// Mongo在win10环境下的安装
在C盘自己创建mongo,data两个文件夹
下载msi版本 解压到C://mongo路径下

md data\db // 指定数据文件存储目录路径
--dbpath

// mongodb是没有系统依赖的

c:\mongodb\bin\mongod.exe //启动服务
c:\mongodb\bin\mongo.exe  // MongoDB命令行工具

// 测试安装是否成功
db.articles.insert({ title:"hello mongo"} )
db.articles.find()
{ "_id" : ObjectId("5870f0ef40d2a61007a9e062"), "title" : "hello mongo" }

// win配置成服务
// 实现失败，还需解决
// 注意等号之后有一个空格，要以管理员身份运行
md C:\mongodb\log
echo logpath=c:\mongodb\log\mongo.log > c:\mongodb\mongod.cfg

sc.exe create MongoDB
binPath= "\"C:\mongodb\bin\mongod.exe\"
--service
--config= \"C:\mongodb\mongod.cfg\""  
DisplayName= "MongoDB"
start= "auto"
password= ""


// ubuntu-install
官网下载 / curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.0.6.tgz    
tar -zxvf mongodb-linux-x86_64-3.0.6.tgz                                   
mv  mongodb-linux-x86_64-3.0.6/ /usr/local/mongodb
export PATH=/usr/local/mongodb/bin:$PATH // 添加至路径??
// sudo ln -s /usr/local/mongodb/bin/mongod /usr/local/bin/mongod

mkdir -p /data/db // 设置db路径

mongod // mongdb服务
mongo // JS Shell 可以进行简单的运算

mongod --dbpath=/data/db --rest
http://localhost:28017
// It looks like you are trying to access MongoDB over HTTP on the native drive
```

- MongoDB基础

  - [副本集](https://docs.mongodb.com/manual/replication/)

```javascript
// NoSQL迎合的趋势
虚拟云计算
取代垂直扩展的水平扩展

垂直扩展 给单台服务器增加CPU内存等资源
水平扩展 增加服务器

// BSON/JSON
Binary JavaScript object Notation
高吞吐率地读写
还支持Date等数据类型

// _id主键
要么由应用驱动生成
要么由mongod服务生成

// 即席查询
db.posts.find({title:/mongo/ }); // SELECT * FROM Posts WHERE Title LIKE '%mongo%'


// 索引   
// 查询评论多于10条的博文的查询语句
db.posts.find({ commentsCount ：{ $gt : 10 } } );

// 副本集
提供数据冗余和提升可用性
应对硬件故障
提升数据库的读取性能
活跃结点与备用结点
自动恢复
复制是MongoDB稳健的特性 -> 生产

// 分片
用于支持水平扩展
通过查询路由服务进行
```

- MongoDB增删改查

```javascript
use mean // 新建或切换至数据库 db没有创建语句

show dbs         // 显示所有数据库
mongo mean
show collections // 查看所有可用的集合
db.query.drop() // 删除posts集合

// 新增 3种方法
db.posts.insert({ "title": "First Post", "user": "bob"})
db.posts.update({"user": "alice"},{"title":"second post","user":"alice"}, { upsert:true })
db.posts.save({"title":"second post", "user":"alice"})

// 读取
db.posts.find()
db.posts.find({})
db.posts.find({"user":"alice"})
db.posts.find({ "user": { $in : [ "alice", "bob"] }})
db.posts.find({ $or : [{ "user":"alice"}, { "user": "bob" }]})

// 更新
// 也可以用save
db.posts.update({ "user" : "alice"}, { $set:{ "title": "HELLO"}}, {multi:true})

// 删除
// drop与remove的区别

db.post.remove( {"user":"alice"} )
db.post.remove({"user":"alice"},true)

// 删除单个文档
```

- 对象关系映射

```javascript
// 存储设计模式
键值存储
列存储
对象存储
主键 外键
获取数据 -> 层级方式组织数据

// 面向文档的数据库 （文档存储 NoSQL的主流）
JSON / XML
博客文章会存储在单个文档中以供查询
加快读取操作 不用重新构建对象
无模式 自由度
    维护起来不麻烦 表结构不用改 反正无模式

// 无结构数据库的主要问题
缓存
规模
```

# **Mongoose**

- [Curl-download](http://curl.haxx.se/download/curl-7.33.0-win64-ssl-sspi.zip)

```javascript
// 简介
// Mongoose模式
ODM模块
让Express支持MongoDB
将MongoDB的无模式方法与实际应用结合

对象模式化

// curl
// 安装注意 win64
cd curl安装文件/src curl.exe
或者加入环境变量

// 注意配置
mongodb localhost:27017端口号问题
http://localhost:3000/users/ // 访问,直接显示json
http://localhost:3000/users/58d10ad8c04b494e73b14474 // 某位id用户

// 新增(存在错误)
curl -X POST
-H "Content-Type: application/json"
-d '{"firstName":"luo", "lastName":"JS", "email":"1095847440@qq.com",
"username":"luo0412", "password":"pwd"}'
localhost:3000/users

// 更新
curl -X PUT
-H "Content-Type: application/json"
-d {"lastname":"Updated"}
localhost:3000/users/58d10ad8c04b494e73b14474

// 删除
curl -X DELETE
localhost:3000/users/[id]

// 扩展Mongoose模式========
定义默认值 default: Date.now

// 使用模式修饰符
trim:true 去除两端多余的空格
自定义setter getter(当文档在下级输出之前。对文档数据进行修改)修饰符  

UserSchema.set('toJSON', {getters: true}); // 强制执行getter修饰符

// 增加虚拟属性
动态计算但不用真正保存到文档的数据 例如 fullname = firstname + lastname

// 使用索引优化查询
username unique:true
email index:true // 作为辅助索引 提升查询效率

// 模型方式自定义============
自定义静态方法
UserSchema.statics.findOneByUsername = function() {};
User.findOneByUserName('username', function(err, user){});

自定义实例方法
UserSchema.methods.authenticate = function(pwd) {
    return this.pwd === pwd;
}
user.authenticate('pwd');

// 模型的校验================
required:true
enum:['Admin','User']
match: /.+@..../ // 正则表达式

validate // 支持自定义校验

// Mongoose中间件===========
预处理中间件
例pre-save中间件会在文档保存之前执行
UserSchema.pre('save', function() {});

后置处理中间件
例post-save 日志功能 // isNew 判断是创建还是更新

// Mongoose DBRef=======
MongoDB不支持连续查询
ref
在不同文档之间建立引用关系

还支持在查询时将子文档填充到父文档 populate
```

# 参考

```javascript
MEAN Web开发
```

# **ch3 使用Express开发Web应用**

```javascript
// 应用、请求和响应对象
// 外部的中间件
// 实现MVC模式
应用配置
渲染视图
    配置视图系统
    EJS视图渲染
配置文件服务
静态文件服务
配置会话
```

# **ch1-2 基础**

```
// Node.js-to-AngularJS套件

// JavaScript基础
```

# **ch3-10 Node.js基础**

```
// Node.js基础

// 在Node.js中使用事件、监听器、定时器和回调

// 在Node.js中处理数据I/O

// 从Node.js访问文件系统

// 在Node.js中实现HTTP服务

// 在Node.js中实现套接字服务

// 在Node.js中使用多处理扩展应用程序

// 使用Node.js模块
```

# **ch11 NoSQL和MongoDB**

```
MongoDB
Node.js操作访问MongoDB文档
利用Mongoose使用结构化模块与验证
高级MongoDB概念
```

# ch12 **使用Express**

```
Express
实现Express中间件
```

# ch13 **学习AngularJS**

```
AngularJS
模块与依赖注入
把作用域实现为数据模型
使用AnguarJS模板创建视图
视图中实现指令
在Web应用程序中实现Angular服务
```

# ch14 **构建实用的Web应用程序组件**

```
将用户账户添加到网站
添加评论主题页
创建自己的购物车
构建交互式的Web2.0应用程序组件
```

# **ch1 MEAN**

- [Code-download](https://github.com/amoshaviv/mean-web-development)

```javascript
// 3层Web应用开发
数据层 数据库
逻辑层 服务器
展现层 客户端

// MEAN
只使用一种语言
MVC
对JSON对象进行数据封装
```

# **ch2 Node.js**

```javascript
// JavaScript时间驱动编程
// Node.js时间驱动编程

// JS闭包

// Node模
CommonJS模块
核心模块
第三方模块
    文件模块
    文件夹模块

// Node.jsWeb应用开发
```

# **ch3 使用Express开发Web应用**

```javascript
记在express-basic
```

# **ch4-5 MongoDB/Mongoose**

```javascript
记在mongo 基础
```

# **ch6 使用Passport模块管理用户权限**

```javascript
// Passport
登录注册 身份验证
鉴权模块  中间件

// Passport策略
passport-local 本地策略模块
Connect-Flash  存储临时消息

使用passport.authenticate() 会自动调用req.login()

//Passport的OAuth策略
```

# **ch7 AngualrJS入门**

```javascript
记在angular-basic
```

# **ch8 创建MEAN的CURD模块**

```javascript
// CURD模块简介
增删改查模块
既包括服务器端的Express组件
又包括浏览器端的AngularJS 客户端模块


// 配置Express组件

// ngResource模块简介

// 实现AngularJS的MVC模块    
创建模块服务
建立模块控制器
实现模块视图
编写AngularJS路由
```

# **ch9 基于Socket.io的实时通信**

```javascript
// WebSockets

// Socket.io
服务器端对象
客户端对象
事件
命名空间
房间

// Socket.io配置
服务器
会话

// 创建聊天室
```

# **ch10 MEAN应用的测试**

```javascript
// JS测试
TDD BDD和单元测试
测试框架
断言库
测试执行过程管理器工具

// Express应用测试
Mocha
Should.js
SuperTest

// AngularJS应用测试
Jasmine
单元测试
E2E测试
```

# **ch11 MEAN应用的调试和自动化**

```javascript
// Grunt
// node-inspector调试Express

// batarang调试AngularJS
```
