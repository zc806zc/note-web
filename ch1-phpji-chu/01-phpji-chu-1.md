#### **PHP基础**
* 基础
~~~
超文本预处理器 
动态生成html  增强信息交互
70%的网站

LAMP = Linux + Apache + MySQL/MongoDB + PHP 
免费 跨平台  支持数据库多
面向对象 

// 框架多
Zend Framework/Laravel/Symfony/Yii/CodeIgniter/ThinkPHP

JSP效率最高 用于建设大型电子商务网站
PHP 缺少规模支持 小型商业网站
ASP.NET  .NET库的支持
~~~

* 语法
~~~
标识符采用下划线连接

传值赋值与引用赋值
// 传值赋值
$age = 12;
$num = $age;
$age = 100;
echo $num . "\n"; // 12

// 引用赋值
$num = &$age;
echo $num; // 100

define函数与const

if elseif else
~~~

* 数据类型
~~~
标量：布尔型 整型 浮点型 字符串型 
有时 0 表示false 1表示true
浮点数的有效位数 14

双引号中的变量可以解析，同时可以处理转义字符
单引号原样输出

{}界定变量

复合 : 数组 对象

特殊 : resource NULL
~~~

* 输出
~~~
// echo 
// var_dump 打印变量或表达式相关信息

array(2) {
  [0] =>
  int(1)
  [1] =>
  int(4)
}

// print_r 打印易于理解的信息

Array
(
  [0] => 1
  [1] => 4
  [2] => 5
)
~~~
    
* Date函数
~~~
从1970-01-01 00:00:00 开始的总秒数
time()获取时间戳

echo time() ; // 1483346204
echo date('Y-m-d H:i:s') ; // 2017-01-02 09:36:44
echo date('Y-m-d', time()); // 2017-01-02
~~~

* 运算
~~~
// 运算结果正负
echo (-8)%7 ; // -1
echo (8)%7 ; // 1

$str = 'hi ';
$str .= 'world'; // hi world

=== 与 ==
<>不等于
xor 一个false一个true 才为true

or与||类似，但是优先级低

短路
~~~

* 数据类型转化
~~~
// 数据类型自动转化
if("123abc" == 123) { echo "yes"; } // yes
if("abc" == 0) { echo "yes"; } // yes

// 数据类型强制转化
var_dump((bool)-5.9); // bool(true)
var_dump((string)12); // string(2) "12"
var_dump((integer)'hello'); // int(0)
var_dump((float)false); // float(0) 
var_dump((array)'php'); // array(1) {[0] => string(3) "php"}
var_dump((object)2.34);
  // class stdClass#1 (1) { public $scalar => double(2.34) }
  
三元运算
~~~

* 数组
~~~
// 赋值有关

$arr = [];
$arr[] = 'hi';
$arr[5] = '5';
$arr[] = 'world';
$arr['sub'] = 'sub';

var_dump($arr);
// 输出结果
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

数组声名
下标只有整型和字符型
相同的下标，赋值会覆盖

$info = array('id'=>1,'help',3=>'msg');

var_dump($info);
// array(3) {
//   'id' =>
//   int(1)
//   [0] =>
//   string(4) "help"
//   [3] =>
//   string(3) "msg"
// }

$info = array(1,2,3,4);
        
访问 $info['name']

unset

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
~~~

*  PHP内置函数
~~~
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
~~~

* 包含语句
~~~
include include_once
require require_once

./ 表示当前目录 
../

// include "hi.php";
include("hi.php");
~~~

* 替代语句
~~~
{ -> :
} ->endif endwhile endfor endforeach endswitch
~~~

* GET传参
~~~
URL实现
$_GET

$name = isset($_GET['name']) ? $_GET['name'] : "";
echo $name;
$name = urlencode("A&B C");
echo $name . "\n"; // A%26B+C
~~~

* HTTP协议
~~~
HyperText Transfer Protocol
超文本传输协议

// HTTP请求方式
Get 数据就在URL地址的参数里

Post 表单提交
传输数据可以更多 更安全

// 超全局变量
$_GET $_REQUEST
~~~

* HTML特殊字符转义
~~~
htmlspecialchars()函数

$str = "hello \n world";
nl2br($str);
~~~