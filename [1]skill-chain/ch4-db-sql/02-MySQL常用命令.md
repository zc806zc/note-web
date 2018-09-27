# MySQL常用命令

- Mysql常用SQL语句集锦 <https://juejin.im/post/584e7b298d6d81005456eb53>
- MySQL常用操作和主从配置 <https://juejin.im/post/5a8e53675188257a71687e1f>
- MySQL命令，一篇文章替你全部搞定 https://juejin.im/post/5ae55861f265da0ba062ec71

# 数据库配置

- 基本

```sql
-- 修改密码
set password for root@localhost = password('123456');

-- 查看数据库
show databases like ''

-- 查看数据库的创建语句
show create database mvcdemo

-- 更新数据库(字符集和校对集)
alter database mvcdemo charset gbk

-- 删除数据库
drop database mvcdemo

-- 查看有结构的表的创建语句
show create table student\G

-- 查看表的结构
desc student/describe student/show columns from student

-- 修改字段(将学号字段变成固定长度且放在第二位)
alter table my_student modify number char(10) after id

-- 重命名字段
alter table my_student change gender sex varchar(10)

-- 删除表
drop table my_student

-- 删除数据
delete from my_student
```

- 配置信息

```sql
-- 查看数据库服务器支持哪一些字符集
show character set

-- 查看数据库默认使用的对外数据处理的字符集
show variables like 'character_set%'

-- 删除外键
alter table my_foreign drop foreign key
```

# 操作

- 格式化

```sql
-- 查询时间，友好提示
select date_format(create_time, '%Y-%m-%d') as day from cpm_materials
from_unixtime ??
```

- 增删改查

```sql
-- 替换某字段的内容的语句
update table_name 
set content = REPLACE(content, 'aaa', 'bbb') 
where (content like '%aaa%')

-- 获取表中某字段包含某字符串的数据
SELECT * FROM `表名` WHERE LOCATE('关键字', 字段名)

-- 获取字段中的前4位
SELECT SUBSTRING(字段名,1,4) FROM 表名

-- 查找表中多余的重复记录
-- 单个字段
select * from 表名 
where 字段名 in 
(select 字段名 from 表名 
group by 字段名 
having count(字段名) > 1)
-- 多个字段
select * from 表名 别名
where (别名.字段1,别名.字段2) in
(select 字段1,字段2 from 表名 
group by 字段1,字段2 
having count(*) > 1)

-- 删除表中多余的重复记录(留id最小)
-- 单个字段
delete from 表名 
where 字段名 in
(select 字段名 from 表名 
group by 字段名 having count(字段名) > 1) 
and 主键ID not in 
(select min(主键ID) from 表名 
group by 字段名 having count(字段名 )>1) 
-- 多个字段
delete from 表名 别名 where (别名.字段1,别名.字段2) in 
(select 字段1,字段2 from 表名 group by 字段1,字段2 having count(*) > 1) 
and 主键ID not in 
(select min(主键ID) from 表名 group by 字段1,字段2 having count(*)>1)

```

- 业务
 
    - 连续范围
    - 签到
