# MongoDB

- <http://www.yiibai.com/mongodb/>
- <https://github.com/linnovate/mean>
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
```

- Ubuntu安装

```js
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

# MongoDB基础

- 副本集 https://docs.mongodb.com/manual/replication

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

# 可视化客户端

- mongodbmanager https://www.mongodbmanager.com/download
