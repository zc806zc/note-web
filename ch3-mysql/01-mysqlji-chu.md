#### **MySQL基础**
* MySQL的常用命令
~~~
mysql -h localhost -u root -p // 本地登录可以省略 -h localhost
set names gbk; // 仅本次访问有效
exit quit 都是退出db
show databases;
create database `itcast`; // 反引号包裹数据库名/字段名/表名
user `itcast`;
drop database `itcast`;
show tables;

-- 创建新闻表
create table `news` (
  `id` int unsigned auto_increment primary key comment '新闻编号',
  `title` varchar(60) not null comment '新闻标题',
  `content` text not null comment '新闻内容',
  `addtime` timestamp default current_timestamp not null comment '发布时间'
)charset=utf8;

desc `student`; // 查看已经创建的表结构
show create table `student`\G // 查看建表的sql
drop table `student`;

-- 插入测试数据
insert into `news` (`title`, `content`, `addtime`) values
('新闻标题1', '新闻内容1', '2015-10-09 17:07:58'),
('新闻标题2', '新闻内容2', '2015-10-11 12:06:56'),
('新闻标题3', '新闻内容3', '2015-11-11 10:05:08');

-- 查看测试数据
select * from `news` \G

高级查询 order by ...

修改数据, 注意where
update `student` set `name` = '赵六'， `gender` = '女' where `id` = 2; 

删除数据, 不会填补空缺的id
delete from `student` where `id`=2;
~~~

* 使用MySQL扩展
