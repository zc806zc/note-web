# Redis

- 教程 <http://www.yiibai.com/redis/>
- Redis从入门到实践 <https://juejin.im/post/5a912b3f5188257a5c608729>
- Redis 深度历险：核心原理与应用实践 https://juejin.im/book/5afc2e5f6fb9a07a9b362527

- 安装 <https://github.com/MSOpenTech/redis/releases>
  - redisClient http://www.uzzf.com/soft/78115.html

```javascript
// win
C:\redis  redis-server.exe redis.windows.conf // 开启服务
redis-cli.exe -h 127.0.0.1 -p 6379 // 注意另启一个cmd窗口

set myKey abc
get myKey

// linux
wget http://download.redis.io/releases/redis-2.8.17.tar.gz
tar xzf redis-2.8.17.tar.gz
cd redis-2.8.17
make

cd src
./redis-server

./redis-cli
set foo bar // OK
get foo // "bar"

// ubuntu
sudo apt-get update
sudo apt-get install redis-server

redis-server // 启动
redis-cli

ping // 返回PONG , 6379 是 redis 服务端口

// 关闭

// 配置/参数
CONFIG GET loglevel
CONFIG GET *

CONFIG SET loglevel "notice"
CONFIG GET loglevel

daemonize no // 默认非守护进程
port 6379
bind 127.0.0.1 // 绑定主机地址
loglevel verbose|debug|notice|warning // 日志级别
databases 16 // 数据库id
dbfilename dump.rdb // 指定本地数据库名
...
```

- 基础

```js
key-value存储系统
日志型

数据结构服务器
因为值可以是 String, Map, list, sets 和 有序集合(sorted sets)等

master-slave模式的数据备份

// 性能极高
Redis能读的速度是110000次/s,写的速度是81000次/s\

// 丰富的特性
Redis还支持 publish/subscribe,
通知, key 过期等等特性

// 数据类型
// String（字符串）
string类型是二进制安全的
jpg图片或者序列化的对象
一个键最大能存储512MB

// Hash（哈希）
特别适合存储对象
HMSET user:1 username runoob password runoob points 200
HGETALL user:1
```

- 操作

```js
// List（列表）
简单的字符串列表，按照插入顺序排序
127.0.0.1:6379> lpush luo java
(integer) 1
127.0.0.1:6379> lpush luo js
(integer) 2
127.0.0.1:6379> lpush luo angular
(integer) 3
127.0.0.1:6379> lrange luo 0 7
1) "angular"
2) "js"
3) "java"

// Set（集合）
string类型的无序集合
通过哈希表实现
所以添加，删除，查找的复杂度都是 O(1)

127.0.0.1:6379> sadd ru react
(integer) 1
127.0.0.1:6379> sadd ru vue
(integer) 1
127.0.0.1:6379> smembers ru
1) "vue"
2) "react"
// 同一数据库下键当然不能重名
// 根据集合内元素的唯一性，第二次插入的元素将被忽略

// zset(sorted set：有序集合)
zset的成员是唯一的,但分数(score)却可以重复
redis 127.0.0.1:6379> zadd runoob 0 redis
(integer) 1
redis 127.0.0.1:6379> zadd runoob 0 mongodb
(integer) 1
redis 127.0.0.1:6379> zadd runoob 0 rabitmq
(integer) 1
redis 127.0.0.1:6379> zadd runoob 0 rabitmq
(integer) 0
redis 127.0.0.1:6379> ZRANGEBYSCORE runoob 0 1000

1) "redis"
2) "mongodb"
3) "rabitmq"
```