#### **ch1 MEAN**

* [Code-download](https://github.com/amoshaviv/mean-web-development)

```js
// 3层Web应用开发
数据层 数据库
逻辑层 服务器
展现层 客户端

// MEAN
只使用一种语言
MVC
对JSON对象进行数据封装
```

#### **ch2 Node.js**

```js
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

#### **ch3 使用Express开发Web应用**

```js
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

#### **ch4 MongoDB**

* 资源
  * [MongoDB-download](https://www.mongodb.com/download-center#community) \| [文档-系统服务方式运行](https://docs.mongodb.com/manual/reference/configuration-options/)
  * [副本集](https://docs.mongodb.com/manual/replication/)
* 安装

```js
// Mongo在win10环境下的安装
在C盘自己创建mongo,data两个文件夹

下载{% em %}msi{% endem %}
解压到C://mongo路径下

mongodb是没有系统依赖的

md data\db 指定数据文件存储目录路径
--dbpath

// 运行服务
c:\mongodb\bin\mongod.exe //启动服务
c:\mongodb\bin\mongo.exe  // MongoDB命令行工具


// 测试安装是否成功
db.articles.insert({ title:"hello mongo"} )
db.articles.find()
{ "_id" : ObjectId("5870f0ef40d2a61007a9e062"), "title" : "hello mongo" }

// 配置
md C:\mongodb\log
echo logpath=c:\mongodb\log\mongo.log > c:\mongodb\mongod.cfg

sc.exe create MongoDB 
binPath= "\"C:\mongodb\bin\mongod.exe\" 
--service 
--config= \"C:\mongodb\mongod.cfg\""  
DisplayName= "MongoDB" 
start= "auto" 
password= "" 
// 注意等号之后有一个空格，要以管理员身份运行
```

* MongoDB基础

```js
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
db.posts.finds({title:/mongo/ }); // SELECT * FROM Posts WHERE Title LIKE '%mongo%'


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

* MongoDB增删改查

```js
use mean // 新建或切换至数据库 
         // db没有创建语句

// 开启时带上参数 
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

* 对象关系映射     

```js
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

#### **ch5 Mongoose**

* [Curl-download](http://curl.haxx.se/download/curl-7.33.0-win64-ssl-sspi.zip)

```js
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

#### **ch6 使用Passport模块管理用户权限**

```js
// Passport
登录注册 身份验证
鉴权模块  中间件

// Passport策略
passport-local 本地策略模块
Connect-Flash  存储临时消息

使用passport.authenticate() 会自动调用req.login()

//Passport的OAuth策略

```

#### **ch7 AngualrJS入门**

```js
// 核心概念
核心模块
模块
双向数据绑定
依赖注入
AngularJS指令
AngularJS引用的引导

// 安装Angular bower
// 应用的结构
// 引导应用
// MVC实体
// 路由
// 服务
// 身份验证
```

#### **ch8 创建MEAN的CURD模块**

```js
// CURD模块简介
// 配置Express组件
// ngResource模块简介
// 实现AngularJS的MVC模块    
创建模块服务
建立模块控制器
实现模块视图
编写AngularJS路由
```

#### **ch9 基于Socket.io的实时通信**

```js
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

#### **ch10 MEAN应用的测试**

```js
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

#### **ch11 MEAN应用的调试和自动化**

```js
// Grunt
// node-inspector调试Express

// batarang调试AngularJS
```



