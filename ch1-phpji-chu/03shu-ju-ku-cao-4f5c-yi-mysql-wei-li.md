#### 数据库操作

* MySQL/MariaDB常用命令

```js
mysql (-h localhost) -u root -p // 访问数据库,回车输命令

// set names gbk; // 仅本次访问有效
exit quit // 退出

// 1. 创建
create database `hello`; // 使用反引号包裹数据库名/字段名/表名，防注入
user `hello`; 
create table `news` (
  `id` int unsigned auto_increment primary key comment '新闻编号',
  `title` varchar(60) not null comment '新闻标题',
  `content` text not null comment '新闻内容',
  `addtime` timestamp default current_timestamp not null comment '发布时间'
)charset=utf8;

// 2. 查询
show databases;
show tables;
desc `student`; // 查看已经创建的表结构
select * from `news` \G
show create table `student`\G // 查看建表的sql


// 3. 插入
insert into `news` (`title`, `content`, `addtime`) values
('新闻标题1', '新闻内容1', '2015-10-09 17:07:58'),

// 4. 删改
update `student` set `name` = '赵六'， `gender` = '女' where `id` = 2; 
delete from `student` where `id`=2; // 注意不会填补空缺的id
drop table `student`;
drop database `itcast`;

// 5. 高级查询 
order by ...
```

* 索引和视图

```php
// 索引
不在SQL标准中,却是一种事实标准
可以加快数据库记录的查询速度

用空间换时间 // 还是值得的

先对数据进行维护 延迟对索引的维护 // 实时性要求高的环境

// 索引类型
单列索引
组合索引
主键索引 // 常见 一个表只能创建一个主键索引 联合主键?
唯一索引
一般索引
全文索引
```

* 函数和存储过程

```

```

* 用户和权限

```

```

* 备份和恢复

```

```

* 图形化管理

```

```

* 使用MySQL扩展

```js

```

* PDO/Mysqli/ODBC

```php
// PHP Data Object 
抽象层
统一操作各种数据库

// MySQLi extension // "i" 意为 improved
PDO 应用在 12 种不同数据库中
MySQLi 只针对 MySQL 数据库

// 习惯用哪个用哪个
两者都支持预处理语句 // 可以防止 SQL 注入，
对于 web 项目的安全性是非常重要的。

// 预处理/预处理为什么较安全
创建 SQL 语句模板并发送到数据库。预留的值使用参数 "?" 标记 
数据库解析，编译，对SQL语句模板执行查询优化，并存储结果不输出
应用可以多次执行语句，如果参数的值不一样。
相比于直接执行SQL语句 // 大大减少了分析时间，只做了一次查询（虽然语句多次执行）

绑定参数减少了服务器带宽，你只需要发送查询的参数，而不是整个语句
参数值发送后使用不同的协议，保证了数据的合法性 // SQL注入

i - integer（整型）
d - double（双精度浮点型）
s - string（字符串）
b - BLOB（binary large object:二进制大对象）
$stmt->bind_param("sss", $firstname, $lastname, $email);

// PDO 中的预处理语句
```

* MariaDB

```php

```



