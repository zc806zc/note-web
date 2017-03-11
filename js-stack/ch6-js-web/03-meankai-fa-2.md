#### **ch1 MEAN简介**
* [源码下载](https://github.com/amoshaviv/mean-web-development)

```
// 3层Web应用开发
数据层 数据库
逻辑层 服务器
展现层 客户端

// MEAN
只使用一种语言
MVC
对JSON对象进行数据封装
```



#### **ch2 Node.js入门**
* JavaScript时间驱动编程
* Node.js时间驱动编程
* JS闭包
* Node模块
	* CommonJS模块
    * 核心模块
    * 第三方模块
    * 文件模块
    * 文件夹模块
* Node.jsWeb应用开发

#### **ch3 使用Express开发Web应用**
* 应用、请求和响应对象
* 外部的中间件
* 实现MVC模式
* 应用配置
* 渲染视图
	* 配置视图系统
    * EJS视图渲染
* 配置文件服务
* 静态文件服务
* 配置会话

#### **ch4 MongoDB入门**
* [MongoDB](https://www.mongodb.com/download-center#community)
	* <del>[系统服务方式运行](https://docs.mongodb.com/manual/reference/configuration-options/)</del>
	
```
// Mongo在win10环境下的安装
下载msi,解压到C://mongo路径下
两个文件夹（mongo 、data）自己建，mongodb并没有系统依赖

md data\db 指定数据文件存储目录路径
--dbpath

// 运行服务
手动 c:\mongodb\bin\mongod.exe

// 测试安装是否成功
db.articles.insert({ title:"hello mongo"} )
db.articles.find()
{ "_id" : ObjectId("5870f0ef40d2a61007a9e062"), "title" : "hello mongo" }

// 配置
    md C:\mongodb\log
        echo logpath=c:\mongodb\log\mongo.log > c:\mongodb\mongod.cfg
		sc.exe create MongoDB binPath= "\"C:\mongodb\bin\mongod.exe\" --service --config= \"C:\mongodb\mongod.cfg\""  DisplayName= "MongoDB" start= "auto" password= "" // 注意等号之后有一个空格，要以管理员身份运行
        
// NoSQL迎合的趋势
虚拟云计算
取代垂直扩展的水平扩展

垂直扩展 给单台服务器增加CPU内存等资源
水平扩展 增加服务器        
```

* BSON 类JSON

```
Binary JavaScript object Notation
高吞吐率地读写
还支持Date等数据类型
_id主键

应用驱动生成
mongod服务生成
组成= ... + ... 
```

* 即席查询

```
SELECT * FROM Posts WHERE Title LIKE '%mongo%'
db.posts.finds({title:/mongo/ });
```

* 索引   
 
```
// 查询评论多于10条的博文的查询语句
db.posts.find({ commentsCount ：{ $gt : 10 } } );
```

* [副本集](https://docs.mongodb.com/manual/replication/)

```
提供数据冗余和提升可用性
应对硬件故障
提升数据库的读取性能
活跃结点与备用结点
自动恢复
复制是MongoDB稳健的特性 -> 生产
```

* 分片

```
用于支持水平扩展
通过查询路由服务进行
```

* MongoDB命令行工具
```
c:\mongodb\bin\mongo
```

    
* MongoDB增删改查

```
use mean // 新建或切换至数据库 db没有创建语句
// 开启时带上参数 mongo mean
show dbs
show collections // 查看所有可用的集合
db.query.drop() // 删除posts集合

// 新增
// solution 1 -- insert
db.posts.insert({ "title": "First Post", "user": "bob"})
// solution 2 -- update
db.posts.update({"user": "alice"},{"title":"second post","user":"alice"},{ upsert:true })
// solution 3 -- save
 db.posts.save({"title":"second post", "user":"alice"})
 
 // 读取
 db.posts.find()
 db.posts.find({})
 db.posts.find({"user":"alice"})
  db.posts.find({ "user": { $in : [ "alice", "bob"] }})
  db.posts.find({ $or : [{ "user":"alice"}, { "user": "bob" }]})
  
  // 更新
  db.posts.update({ "user" : "alice"}, { $set:{ "title": "HELLO"}}, {multi:true})
  // 也可以用save
  
  // 删除
  // drop与remove的区别
  db.post.remove( {"user":"alice"} )
  db.post.remove({"user":"alice"},true) // 删除单个文档
```

* 对象关系映射 	
	* 存储设计模式
      * 键值存储
      * 列存储
      * 对象存储
	* 主键 外键
    	* 获取数据 -> 层级方式组织数据
* 面向文档的数据库 （文档存储 NoSQL的主流）
	* JSON / XML 
    * 博客文章会存储在单个文档中以供查询
    * 加快读取操作 不用重新构建对象
    * 无模式 自由度
    	* 维护起来不麻烦 表结构不用改 反正无模式
* 关于无结构数据库主要问题
	* 缓存
    * 规模
    
#### **ch5 Mongoose入门**
* Mongoose模式
* 扩展Mongoose模式
* 模型方式自定义
* 模型的校验
* 中间件
* Mongoose DBRef

#### **ch6 使用Passport模块管理用户权限**
* Passport
* Passport策略
* Passport的OAuth策略

#### **ch7 AngualrJS入门**
* 核心概念
	* 核心模块
    * 模块
    * 双向数据绑定
    * 依赖注入
    * AngularJS指令
    * AngularJS引用的引导
* 安装Angular bower
* 应用的结构
* 引导应用
* MVC实体
* 路由
* 服务
* 身份验证

#### **ch8 创建MEAN的CURD模块**
* CURD模块简介
* 配置Express组件
* ngResource模块简介
* 实现AngularJS的MVC模块	
	* 创建模块服务
    * 建立模块控制器
    * 实现模块视图
    * 编写AngularJS路由

#### **ch9 基于Socket.io的实时通信**
* WebSockets
* Socket.io
	* 服务器端对象
    * 客户端对象
    * 事件
    * 命名空间
    * 房间
* Socket.io配置
	* 服务器
    * 会话
* 创建聊天室

#### **ch10 MEAN应用的测试**
* JS测试
	* TDD BDD和单元测试
    * 测试框架
    * 断言库
    * 测试执行过程管理器工具
* Express应用测试
	* Mocha
    * Should.js
    * SuperTest
* AngularJS应用测试
	* Jasmine
    * 单元测试
    * E2E测试
    
#### **ch11 MEAN应用的调试和自动化**
* Grunt
* node-inspector调试Express
* batarang调试AngularJS
