# **PHP-应用实例**

- 表单提交

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
&  &
"  "
'  '
<  <
>  >

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

- 文件

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

- Cookie/Session/浏览历史

```php
// Cookie

// Session
HTTP响应消息头
输出缓冲

unset() 或 session_destroy()
```

- 图像生成/验证码生成

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

- 分页

  - [AmazeUI-page](https://github.com/lscho/am-page) | [bootstrap-twbs-pagination](https://github.com/esimakin/twbs-pagination)

```php
// 前端库实现分页
PHP查询数据后传参给JS

// PHP库实现分页
```

- cURL

```php
```

- XML/JSON

```php
// 定义XML架构
// DTD
PCDATA // 字符数据 数据块...
CDATA
Entities // 实体 避免文档的重复输入...


// XML解析/PHP操作XML
Expat
SimpleXML
DOMDocument
XMLReader

// 创建RSS源

// PHP操作JSON
json_encode()
json_decode()

// 中文编码问题 JSON_UNESCAPED_UBICODE
// urlEncode 低版本
```

- 邮件

```php
```

- 参考

```php
PHP + MariaDB Web开发 李世川
```

# **PHP实用技能**

- 分页

```php
// 学生信息管理为例
```

- [php提示undefined index的几种解决方法](http://www.jb51.net/article/30328.htm)

```php
error_reporting = E_ALL & ~E_NOTICE
```

# PHP-进阶

- 说明

```php
主要的学习准备是

1\. 加深对面向对象的理解
2\. 最佳实践等
```
