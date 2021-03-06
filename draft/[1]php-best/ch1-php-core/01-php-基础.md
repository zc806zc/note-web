# PHP - 语法

- 安装

  - [php5.5下载](http://www.pc6.com/softview/SoftView_51016.html)
  - [Sublime - 配置](http://jingyan.baidu.com/article/09ea3ede04ebe9c0aede390d.html?qq-pf-to=pcqq.group) | [Atom - 配置](http://haafiz.me/development/how-to-setup-atom-for-php-development) | [Netbean - 换主题](http://netbeansthemes.com/darkcalm/)
  - [Wamp的localhost - 文件解析](https://zhidao.baidu.com/question/625842715884857684.html) | [phpstorm表单提交问题](http://blog.csdn.net/muzilinxi90/article/details/52458511)

```php
// 集成安装包
XAMPP Wamp phpstudy
// AppServ phpnow easyphp vertrigo

// Appache等的配置 httpd.conf

// IDE/编辑器
sublime
Atom + script 插件

// Sublime的相关配置
编译系统 改成PHP
utf-8
tab-4
高亮空格 // 可能影响到PHP解释
浏览器的快速打开

// Netbean使用时的运行问题
运行配置那里选 PHP"内置"
utf-8 // 中文乱码

// NetBeans/PHPStrom(最强) // 推荐后者
// phpEclipse
// komodo edit, APtana Studio, PHPEdit
// komodo IDE, Zend studio
```

--------------------------------------------------------------------------------

- PHP基础

  - [PHP 手册](http://php.net/manual/zh/) | [MySQL 5.1参考手册](http://www.kancloud.cn/k12_develop/mysql51/77410)
  - [Apache 2.2 官方文档](http://www.kancloud.cn/wizardforcel/apache-doc/105614) | [Nginx 官方文档](http://www.kancloud.cn/wizardforcel/nginx-doc/92403) |[鸟哥的 Linux 私房菜](http://www.kancloud.cn/thinkphp/linux_basic/43213)
  - [Laravel 5文档](https://www.gitbook.com/book/lbp0200/laravel-5-doc/details)
  - [PHP资源](https://www.zhihu.com/question/20034403) | [Github资源](https://github.com/justjavac/free-programming-books-zh_CN#php) | [开源后台模板](http://www.cnblogs.com/DiYuShe/archive/2012/08/21/2648563.html)
  - [packagist](https://packagist.org/explore/popular) | [segmentfault - PHP](https://segmentfault.com/t/php)
  - [psysh](http://psysh.org/)

```php
超文本预处理器  // "动态"生成html  增强信息交互
占70%的网站    // 仅是数量占比，不代表地位

// 特点
免费 跨平台  
支持数据库多
面向对象等

// 框架多
Laravel/CodeIgniter/Symfony/Yii/Zend Framework
ThinkPHP // 国内

// 3P
PHP 缺少规模支持 小型商业网站
JSP效率最高 用于建设大型电子商务网站
ASP.NET  有.NET库的支持，不会弱到哪里

// 学习路径
PHP框架是可以用来
节省时间
并强化自己代码的工具 // 安全 功能
// 了解了面向对象和框架后，你应该接触一下XML了 really ??
```

--------------------------------------------------------------------------------

- 语法

  - [php-手册-string](http://www.runoob.com/php/php-ref-string.html)

```php
$user_pwd // 可以用 {} 界定变量
// 分支语句的elseif

// 四种不同的变量作用域
local // 局部
global
static
// parameter 参数作用域

// 传值赋值与引用赋值
$age = 12;
$num = $age; // 结果将是100 引用赋值
$age = 100;
echo $num; // 12 传值赋值

// define函数与const 常量
常量 常量是全局的 大小写敏感设置

// 超级全局变量
// $_REQUEST等
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> // xss攻击

// 输出
// echo(语言结构,不是函数) print(返回值) printf

// var_dump 打印变量或表达式相关信息
// print_r 打印易于理解的信息
array(2) {
  [0] =>
  int(1)
  [1] =>
  int(4)
}

Array
(
  [0] => 1
  [1] => 4
  [2] => 5
)


// Date函数
echo time() ; // 获取时间戳 1483346204 从1970-01-01 00:00:00 开始的总秒数
echo date('Y-m-d H:i:s') ; // 2017-01-02 09:36:44
// echo date('Y-m-d', time()); // 2017-01-02


// 运算符
echo (-8)%7 ; // -1
echo (8)%7 ; // 1

<> 不等于
xor 一个false一个true 才为true

or与||类似，但是优先级低

// 短路运算

// ./ 表示当前目录  ../

// 替代语句
{ -> :
} ->endif endwhile endfor endforeach endswitch
```

- 数据类型

```php
标量：布尔型 整型 浮点型 字符串型
有时 0 表示false 1表示true
// 浮点数的有效位数 14

复合 : 数组 对象
特殊 : resource NULL

// 字符串
双引号中的变量可以解析，同时可以处理转义字符
单引号原样输出
$str .= 'world'; // 点号连接

// 数据类型自动转化
if("123abc" == 123) // TRUE
if("abc" == 0)  // TRUE

// 数据类型强制转化
var_dump((bool)-5.9); // bool(true)
var_dump((string)12); // string(2) "12"
var_dump((integer)'hello'); // int(0)
var_dump((float)false); // float(0)
var_dump((array)'php'); // array(1) {[0] => string(3) "php"}
var_dump((object)2.34);
  // class stdClass#1 (1) { public $scalar => double(2.34) }

// 三元运算
```

- 数组

```javascript
// 赋值有关
// 并不会补位 sparse array
$arr = [];
$arr[] = 'hi';
$arr[5] = '5';
$arr[] = 'world';
$arr['sub'] = 'sub';

// 数组声名
下标只有 整型 和 字符型
相同的下标，赋值会覆盖

// $info = array(1,2,3,4); // 不带key
// $info['name'] // 访问方法
$info = array('id'=>1,'help',3=>'msg');

// array(3) {
//   'id' =>
//   int(1)
//   [0] =>
//   string(4) "help"
//   [3] =>
//   string(3) "msg"
// }

// unset method

// 数组遍历   
$fruit = ['apple', 'pear'];
foreach($fruit as $value) {
  echo $value . "\n";
}
foreach($fruit as $key => $value) {
  echo $key . "=>" . $value . "\n";
}
```

- 内置函数

```javascript
// 字符串函数
strlen
strpos 指定字符串最后出现位置

explode 使用一个字符串分割另一个字符串
implode 用指定的连接符连接
// str_replace trim substr str_repeat...

// 数组函数
count range
// array_merge array_chunk


// 数组排序
sort   // 用数字键替换
asort  // 根据元素值排序保持索引
ksort rsort krsort
arsort // 逆向排序并保持索引

// shuffle 洗牌
array_reverse 返回的是数组
// array_search
// array_rand 从数组中随机取出一个或多个单元
// array_unique 移除重复的值
// in_array 检查数组中是否存在某个值,第3个参数设为true 相当于===

// 数学函数
abs min max
floor ceil 天花板
pi() pow() sqrt
round 对浮点数四舍五入
rand 返回随机整数
// fmod 返回除法的浮点数余数
// is_nan 判断是否为合法数值


break n; // 指定跳出几重循环


// 包含语句
include include_once // include 生成一个警告（E_WARNING）会继续执行
require require_once // require 生成一个致命错误（E_COMPILE_ERROR） 会停止执行
```

--------------------------------------------------------------------------------

- 异常

```php
// try catch throw
// 设置顶层异常处理器
处理所有未捕获异常的用户定义函数

function myException($exception) {
    echo "<b>Exception:</b> " , $exception->getMessage();
}
set_exception_handler('myException');
throw new Exception('Uncaught Exception occurred');
```

- 过滤器

```php
filter_var()
filter_var_array()
filter_input
filter_input_array // 获取多个输入变量，并通过相同的或不同的过滤器对它们进行过滤

// Validating 和 Sanitizing
Validating 用于验证用户输入 如果成功则返回预期的类型，如果失败则返回 FALSE
Sanitizing 用于允许或禁止字符串中指定的字符 无数据格式规则 始终返回字符串

// 使用 Filter Callback

// 高级过滤器
检测一个数字是否在一个范围内
检测 IPv6 地址
检测 URL - 必须包含QUERY_STRING（查询字符串）
...
```

--------------------------------------------------------------------------------

- 命名空间

```php
// 避免名字冲突
// 缓解长标识符名称, 提高源代码的可读性
用户编写的代码
与
PHP内部的类/函数/常量
或第三方类/函数/常量之间

所有非 PHP 代码包括空白符都不能出现在命名空间的declare声明之前

// 名称解析遵循下列规则：
new \A\B 解析为类 A\B。

如果命名空间 A\B\C 被导入为 C，
那么对 C\D\e() 的调用就会被转换为 A\B\C\D\e()。

// 在命名空间 A\B 内部调用 C\D\e()，
C\D\e() -> A\B\C\D\e()

例如，如果命名空间 A\B\C 导入为C，
则 new C() 被转换为 new A\B\C() 。


在当前命名空间中查找名为 A\B\foo() 的函数
尝试查找并调用 全局(global) 空间中的函数 foo()。


下面是调用 new C() 及 new D\E() 的解析过程：
new C()的解析:
在当前命名空间中查找A\B\C类。
尝试自动装载类A\B\C。

new D\E()的解析:
在类名称前面加上当前命名空间名称变成：A\B\D\E，然后查找该类。
尝试自动装载类 A\B\D\E。

为了引用全局命名空间中的全局类，必须使用完全限定名称 new \C()
```

- php7

  - [php7-new-features](http://www.runoob.com/php/php7-new-features.html)

````php
```

- 参考

```php
菜鸟教程
````
