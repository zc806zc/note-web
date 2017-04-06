#### **PHP-应用实例**

* 表单

```php
// HyperText Transfer Protocol
// HTTP请求方式
Get 数据就在URL地址的参数里
Post 表单提交 传输数据可以更多 更安全

// 超全局变量 $_GET $_REQUEST...

$name = isset($_GET['name']) ? $_GET['name'] : ""; // echo $name;
$name = urlencode("A&B C");
echo $name . "\n"; // A%26B+C

// HTML特殊字符转义
htmlspecialchars()函数 // 预定义的字符转换为 HTML 实体
&  &amp;
"  &quot;
'  &#039;
<  &lt;
>  &gt;

$str = "hello \n world";
nl2br($str);
// hello <br />
//  world

表单传给它自己，而不是跳转 // 用户在同一表单页面得到错误信息，更容易发现

// "必需" 的JS 实现 
// HTML5 required
if (empty($_POST["gender"])) {
    $genderErr = "性别是必需的。";
} else {
    $gender = test_input($_POST["gender"]);
}

<span class="error"> * <?php echo $genderErr;?></span>
```

* 文件

```php
// 模式
r    // 只读。在文件的开头开始。
r+   // 读/写
w    // 只写。打开并清空文件的内容；如果文件不存在，则创建新文件。
a    // 追加。打开并向文件末尾进行写操作，如果文件不存在，则创建新文件。
a+   w+  
x    // 只写。创建新文件。如果文件已存在，则返回 FALSE 和一个错误。
x+   

// 文件上传
// 文件基本操作
解析
遍历
创建目录

// 生成缩略图

// zip file函数
```

* Cookie/Session/浏览历史

```php
// Cookie

// Session
HTTP响应消息头
输出缓冲

unset() 或 session_destroy()
```

* 图像生成/验证码生成

```php
// GD库 处理图像的扩展库
查看支持的图片格式
创建图像资源
填充颜色
图像输出
绘制文本
绘制基本图形

var_dump(gd_info());
```

* 分页
  * [AmazeUI-page](https://github.com/lscho/am-page) \| [bootstrap-twbs-pagination](https://github.com/esimakin/twbs-pagination)

```php
// 前端库实现分页
PHP查询数据后传参给JS

// PHP库实现分页
```

* MySQL常用命令

```js
// 访问数据库
mysql (-h localhost) -u root -p
// set names gbk; // 仅本次访问有效
exit quit // 退出db

// 创建
create database `hello`; // 反引号包裹数据库名/字段名/表名
user `hello`;

create table `news` (
  `id` int unsigned auto_increment primary key comment '新闻编号',
  `title` varchar(60) not null comment '新闻标题',
  `content` text not null comment '新闻内容',
  `addtime` timestamp default current_timestamp not null comment '发布时间'
)charset=utf8;

// 查询
show databases;
show tables;
desc `student`; // 查看已经创建的表结构
select * from `news` \G
show create table `student`\G // 查看建表的sql


// 插入
insert into `news` (`title`, `content`, `addtime`) values
('新闻标题1', '新闻内容1', '2015-10-09 17:07:58'),
('新闻标题2', '新闻内容2', '2015-10-11 12:06:56'),
('新闻标题3', '新闻内容3', '2015-11-11 10:05:08');

// 删改
update `student` set `name` = '赵六'， `gender` = '女' where `id` = 2; 
delete from `student` where `id`=2; // 注意不会填补空缺的id
drop table `student`;
drop database `itcast`;

// 高级查询 
order by ...
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

习惯用哪个用哪个
两者都支持预处理语句。 
预处理语句可以防止 SQL 注入，
对于 web 项目的安全性是非常重要的。

// 预处理
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

* cURL

```php

```

* 邮件

```php

```

* 参考

```php
PHP + MariaDB Web开发 李世川
```



