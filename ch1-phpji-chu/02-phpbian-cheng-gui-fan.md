#### **PHP-编程规范**

* [CodeIgniter-编程规范](http://codeigniter.org.cn/user_guide/general/styleguide.html)

```php
所有纯PHP文件不使用结束标签 ?> , 并以一个空行代替 // CodeIgniter可能出错
// 所有的换行符使用 Unix 格式换行符 LF
// PHP 起始标签的前面和结束标签的后面都不要留空格，
// 输出是被缓存的 ??

使用制表符代替空格  // 可自定义缩进 2/4

TRUE  FALSE 和 NULL // 这几个关键字全部大写
// if ($foo OR $bar) // 建议不用 || 
// if ($foo && $bar) 
if ( ! $foo)
if ( ! is_array($foo)) // 在 ! 操作符的前后都应该加一个空格
$arr[$foo] = 'foo'; // 使用中括号和小括号的时候不应该使用多余的空格


// 类命名
类文件的命名必须以大写字母开头，
// 其他文件（配置文件，视图，一般的脚本文件等）的命名是全小写
Somelibrary.php 或 Some_library.php
applicationconfig.php 或 application_config.php
function xml_encode($str)

一个类一个文件


'My String' // 字符串使用单引号
"My string {$foo}" // 有变量时使用双引号， 并且使用大括号
"SELECT foo FROM bar WHERE baz = 'bag'" // 当字符串中有单引号时

检查返回值和变量时, 必要时使用 === 和 !==
```

---

* 命名纠结

```php
// 倾向中划线 
// 与表现有关，与资源有关，碎片的形式易于搜寻
css                ie-style.css
图片              bg-yellow.png
class             first-name > FirstName
一般文件       first-name.后缀

// 倾向下划线   
// 有其编程目的与语法限制，相对也是易于索引搜寻的
id                     first_name > firstName
数据库           db_id
html             first_name.html > first-name.html
php文件       hello_world.php > helloWorld.php

// 倾向驼峰  
// JS有关
JS变量           firstName
js文件            firstName.js > first_name.js // 但我更喜欢用中划线 其次是点号

// 注意windows与linux文件大小写问题
我遇到win下的login_check.php -> ubuntu login_Check.php的闹鬼事件？？
```



