#### **PHP基础1 - 语法扫盲**

* 资源

  * [PHP资源](https://www.zhihu.com/question/20034403) \| [Github资源](https://github.com/justjavac/free-programming-books-zh_CN#php)

  * [packagist](https://packagist.org/explore/popular)

  * [PHP: PHP 手册](http://php.net/manual/zh/) \| [MySQL 5.1参考手册](http://www.kancloud.cn/k12_develop/mysql51/77410)

  * [Apache 2.2 官方文档](http://www.kancloud.cn/wizardforcel/apache-doc/105614) \| [Nginx 官方文档](http://www.kancloud.cn/wizardforcel/nginx-doc/92403)

  * [鸟哥的 Linux 私房菜](http://www.kancloud.cn/thinkphp/linux_basic/43213)

  * [Laravel 5 中文文档](https://www.gitbook.com/book/lbp0200/laravel-5-doc/details)

  * [psysh](http://psysh.org/)

  * [segmentfault](https://segmentfault.com/t/php)

  * [开源后台模板](http://www.cnblogs.com/DiYuShe/archive/2012/08/21/2648563.html)

  ---

* PHP基础

```php
超文本预处理器  // "动态"生成html  增强信息交互
占70%的网站    // 仅是数量占比，不代表地位

LAMP = Linux + Apache + MySQL/MongoDB + PHP 

// 特点
免费 跨平台  支持数据库多
面向对象 

// 框架多
Zend Framework/Laravel/Symfony/Yii/CodeIgniter/ThinkPHP

// 3P的比较
PHP 缺少规模支持 小型商业网站

JSP效率最高 用于建设大型电子商务网站
ASP.NET  有.NET库的支持，不会弱到哪里
```

* 特殊点的语法

```php
// 标识符采用"下划线"连接
$user_pwd
可以用 {} 界定变量


// 传值赋值与引用赋值的区别
// 传值赋值
$age = 12;
$num = $age;
$age = 100;
echo $num; // 12

// 引用赋值
$num = &$age;
echo $num; // 100

// define函数与const 常量

// 分支语句
if elseif else
```

* 数据类型

```php
标量：布尔型 整型 浮点型 字符串型 
有时 0 表示false 1表示true
浮点数的有效位数 14

复合 : 数组 对象
特殊 : resource NULL

// 字符串类型的特点
双引号中的变量可以解析，同时可以处理转义字符
单引号原样输出

$str = 'hi ';
$str .= 'world'; // hi world  点号连接
```

* 输出函数

```php
// echo print

// var_dump 
// 打印变量或表达式相关信息
array(2) {
  [0] =>
  int(1)
  [1] =>
  int(4)
}

// print_r 
// 打印易于理解的信息
Array
(
  [0] => 1
  [1] => 4
  [2] => 5
)
```

* Date函数

```php
从1970-01-01 00:00:00 开始的总秒数
time()获取时间戳

echo time() ; // 1483346204
echo date('Y-m-d H:i:s') ; // 2017-01-02 09:36:44
// echo date('Y-m-d', time()); // 2017-01-02
```

* 运算符的注意点

```php
// 运算结果正负
echo (-8)%7 ; // -1
echo (8)%7 ; // 1


// 符号 
=== 与 ==
<> 不等于
xor 一个false一个true 才为true

or与||类似，但是优先级低

短路运算
```

* 数据类型

```php
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

* 数组

```js
// 赋值有关
$arr = [];
$arr[] = 'hi';
$arr[5] = '5';
$arr[] = 'world';
$arr['sub'] = 'sub';

// var_dump($arr)输出结果
// array(4) {
//   [0] =>
//   string(2) "hi"
//   [5] =>
//   string(1) "5"
//   [6] =>
//   string(5) "world"
//   'sub' =>
//   string(3) "sub"
// }

// 数组声名
下标只有整型和字符型
相同的下标，赋值会覆盖

$info = array('id'=>1,'help',3=>'msg');

// var_dump($info)输出结果
// array(3) {
//   'id' =>
//   int(1)
//   [0] =>
//   string(4) "help"
//   [3] =>
//   string(3) "msg"
// }

$info = array(1,2,3,4);

// 访问 
$info['name']

// unset

// 数组遍历   
$fruit = ['apple', 'pear'];
foreach($fruit as $key => $value) {
  echo $key . "=>" . $value . "\n";
}
foreach($fruit as $value) {
  echo $value . "\n";
}

// 0=>apple
// 1=>pear
// apple
// pear
```

* 内置函数

```js
// 字符串函数
strlen
strpos 指定字符串最后出现位置
explode 使用一个字符串分割另一个字符串
implode 用指定的连接符连接
str_replace
trim
substr
str_repeat

// 数组函数
count
array_merge
array_chunk
range
sort
asort 保持索引
rsort 逆向排序
arsort 逆向排序并保持索引
ksort 键名排序
shuffle 洗牌
krsort
array_reverse 返回的是数组
array_search
array_rand 从数组中随机取出一个或多个单元
array_unique 移除重复的值
key 从关联数组中取出键名
array_column
in_array 检查数组中是否存在某个值,第3个参数设为true 相当于===
array_keys 返回数组中的键名
array_values

// 数学函数
abs
min
max
ceil 天花板
floor
pi()
pow()
sqrt
fmod 返回除法的浮点数余数
is_nan 判断是否为合法数值
round 对浮点数四舍五入
rand 返回随机整数

多维数组

break n; // 指定跳出几重循环

// 自定义函数
function add($a, $b) {
  return $a + $b;
}
echo add(3, 4); // 7

// 包含语句
include include_once
require require_once

./ 表示当前目录 
../

// include "hi.php";
include("hi.php");

// 替代语句
{ -> :
} ->endif endwhile endfor endforeach endswitch
```

* URL/GET传参

```php
HyperText Transfer Protocol
超文本传输协议

// HTTP请求方式
Get 数据就在URL地址的参数里

Post 表单提交
传输数据可以更多 更安全

// 超全局变量
$_GET $_REQUEST

URL实现 $_GET

$name = isset($_GET['name']) ? $_GET['name'] : ""; // echo $name;
$name = urlencode("A&B C");
echo $name . "\n"; // A%26B+C

// HTML特殊字符转义
htmlspecialchars()函数

$str = "hello \n world";
nl2br($str);
// hello <br />
//  world
```



