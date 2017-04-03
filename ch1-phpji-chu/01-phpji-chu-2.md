#### **PHP基础2-应用实例**

* 表单

```php
把表单传给它自己，而不是跳转到不同的页面 // 更好的方式
// 用户在同一表单页面得到错误信息，更容易发现

// 表单必需的JS 实现 
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
处理上传表单 
获取文件信息(文件类型 文件属性) 
文件的保存

生成缩略图

// 文件基本操作
解析
遍历
创建目录

// zip file函数
```

* Cookie/Session/浏览历史

```php
// Cookie
创建 读取 查看

// Session
HTTP响应消息头
输出缓冲

unset() 或 session_destroy()
```

* 图像生成/验证码生成

```php
// GD库
处理图像的扩展库

查看支持的图片格式
创建图像资源
填充颜色
图像输出

绘制文本
绘制基本图形

var_dump(gd_info());
```

* 分页

```php
// 学生信息管理为例
// 思路1
分页的样式由前端库生成，
PHP查询数据后 <?php echo $page_size ?> 到JS
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

* 常见问题

```php
// 提示undefined index
httpd.conf修改
error_reporting = E_ALL & ~E_NOTICE
```



