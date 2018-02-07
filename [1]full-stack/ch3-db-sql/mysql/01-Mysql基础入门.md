# MySQL

- 图形化工具

  - heidiSQL 但界面一般 <https://www.heidisql.com/download.php>
  - navicat($)
  - phpMyAdmin PHP开发

- MySQL/MariaDB常用命令

  - 常用函数
  - 常用命令

```sql
-- 进入数据库
mysql (-h localhost) -u root -p // 访问数据库,回车输命令

-- 设置编码
set names gbk;
-- 仅本次访问有效

-- 退出
exit quit

-- 创建
create database `hello`; // 使用反引号包裹数据库名/字段名/表名，防注入
user `hello`;
create table `news` (
  `id` int unsigned auto_increment primary key comment '新闻编号',
  `title` varchar(60) not null comment '新闻标题',
  `content` text not null comment '新闻内容',
  `addtime` timestamp default current_timestamp not null comment '发布时间'
)charset=utf8;

--  查询
show databases;
show tables;
desc `student`; // 查看已经创建的表结构
select * from `news` \G
show create table `student`\G // 查看建表的sql

-- 插入
insert into `news` (`title`, `content`, `addtime`) values
('新闻标题1', '新闻内容1', '2015-10-09 17:07:58'),

-- 删改
update `student` set `name` = '赵六'， `gender` = '女' where `id` = 2;
delete from `student` where `id`=2; // 注意不会填补空缺的id
drop table `student`;
drop database `itcast`;

-- 高级查询
order by ...
```

# 索引和视图

- 索引

  - 不在SQL标准中, 却是一种事实标准
  - 用空间换时间,可以加快数据库记录的查询速度，还是值得的

- 索引类型

  - 单列索引 组合索引 一般索引
  - 主键索引
  - 唯一索引 -> 是多列的组合是唯一

  - 全文索引 -> 查询文本

- 一个表只能创建一个主键索引 联合主键?

```sql
对于实时性要求高的环境
先对数据进行维护 延迟对索引的维护

create index i_name on student(name(5));
alter table student add index(name); // 索引名不可指定
show index from students;
drop index i_name on students;
 -- alter table students drop PRIMARY KEY

create unique index ui_name on student(name);

-- 或者在建表的时候 UNIQUE KEY `iu_name` (`name`)
alter table students add k_id PRIMARY KEY (id);

-- 全文索引
SELECT WHERE LIKE %...% // 低效
my.conf

-- 只支持MyISAM
FULLTEXT KEY

-- 如果一个关键词在50%的搜索数据中出现, 那么这个词就会被当做无效词
select * from `student` where match(`favorite`) against ('play*' in BOOLEAN MODE);
```

- 视图

```sql
虚拟表, 它的内容有查询定义
行列来自定义视图时查询所引用的表
在引用视图时动态生成

-- 安全性 隐藏了连接关系
使不同的用户看到不同的数据
```

# 函数和存储过程

- 函数

  - 字符串处理函数
  - 数值处理函数
  - 日期处理函数
  - 流程处理函数
  - 其他函数

```sql
database()
version()
user()
password()
md5()
...
```

- 自定义函数

- 存储过程

```sql
经编译后存储在数据库中
DELIMITER $$
```

# 用户和权限

```sql
create user kitty@'192.168.0.50' identified by '123456';
rename user kitty@'192.168.0.50' to kit@'192.168.0.50'; // update实现也行
set password for user@'192.168.0.50' = password('pwd'); // update也行
grant select,update on school.* to kit@'192.168.0.50'
grant...
revoke select on school.student from bear@'localhost'
dropp user kitty;
```

# 备份和恢复

- 主从复制 <http://www.cnblogs.com/superfat/p/5267449.html>

```sql
主服务器完成写入记录
从服务器只进行读

主服务器出现问题时,快速切换至服务器工作的方式

my.conf
```

- 备份

  - 在线/离线备份
  - 完全/部分(增量)备份

```sql
灾难发生时...

-- mysqldump 重要的逻辑备份工具
cd /d C:\wamp\bin\mysql\mysql5.6.17\bin
mysqldump -uroot -p --database cakephp_test > e:\cakephp_test_backup.sql // 回车输密码

-- mysql还原
mysql -uroot -p <e:\test.sql
mysql -uroot -p cakephp_test <e:\test.sql

-- source还原
source d:\test.sql
-- 可以先选择数据库

-- 二进制日志文件的备份与还原
my.ini
log-bin = E:/mysql-log/logbin.log
重启mysql
flush logs

mysqlbinlog d:/mysql-log/logbin.000001
mysqlbinlog d:/mysql-log/logbin.000001 | mysql -uroot -p // 恢复数据操作
mysql -uroot -p -e "d:\log\log.txt" // 多次执行合并

-- 物理备份
要先关闭db

-- 备份策略
定期完整备份
开启二进制日志备份 // 默认关闭
采用主从复制
定时备份数据 // 每天夜间或每周的某个时间
```

- 使用MySQL扩展

# 联结

- SQL的几种连接：内连接、左联接、右连接、全连接、交叉连接 <http://www.cnblogs.com/zxlovenet/p/4005256.html>
