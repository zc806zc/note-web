##### 

**ThinkPHP3使用**

* 资源
  * [Thinkphp官网](http://www.thinkphp.cn/)
  * [3.2 开发手册](http://document.thinkphp.cn/manual_3_2.html#preface)
  * [5.0 开发手册](http://www.kancloud.cn/manual/thinkphp5/118003)
* 基础

```php
// 访问示例
// index.php普通模式进入  后缀与忽略的路径
http://localhost/luo-PHP-Web/index.php/Admin/Index
http://localhost/luo-PHP-Web/index.php/admin/Student/showList
http://localhost/luo-PHP-Web/index.php/Admin

// 配置覆盖顺序
惯例配置(convertion) → 
应用配置(config.php) → 
调试配置(debug.php) → 
模块配置(模块/Conf/config.php)

// 数据库配置文件 
Application/Common/Conf/config.php

// URL访问模式
http://localhost/index.php?m=home&c=user&a=login     // 0 普通模式 
http://localhost/index.php/home/user/login           // 1 PATHINFO模式 
http://localhost/home/user/login                     // 2 REWRITE模式 
http://localhost/index.php?s=/home/user/login        // 3 兼容模式
```

* think的方法

```php
U  - URL生成
M
D  - 实例化

// U方法
U('User/add');
U('Blog/read?id=1');
U('Admin/User/select');

// 跳转方法
$this->success('用户登录操作成功，正在跳转，请稍后...', U('Admin/index'), 5);
```

##### 



