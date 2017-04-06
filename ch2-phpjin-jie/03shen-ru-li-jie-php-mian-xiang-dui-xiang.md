#### **PHP-Trick/PHP解惑**

```php
// 多维数组
// 数据库驱动的数组

// 高级函数定义
递归函数
使用静态变量
匿名函数

// 原型文档语法

// printf与sprintf

// empty isset is_null
empty函数可以接受任意形式的表达式

// 多维数组排序
usort

// 超级全局数组
// global 关键字 数组
$GLOBALS['var'] 是外部的全局变量本身
global $var是外部$var的同名引用或指针

// require require_once
// include include_once
// autoload
Apache提供了apache benchmark
ab -c 10 -n 100000 localhost/index.php
可以用来测试脚本性能 // 例 每秒支持的访问数量 响应时间

// HereDoc NowDoc

// 函数传值与引用
// 避免过多的参数
使用数组
使用对象

// 匿名函数

// exit() return;(结束函数运行 无返回值)
// is_callable() method_exists()

// 执行外部程序
$out = `dir e:`; // `ls -al`
echo $out;

// shell_exec()实现
$out = shell_exec("dir");
echo $out;

// 安全模式
php.ini safe_mode = on
限制/禁用函数的功能
dl() // 动态加载扩库函数 被禁用
safe_mode_exec_dir
safe

// goto 最后的手段 不常用但也是一种选择
局部的goto 不跳出例程或者进入循环
for($i=0,$j=50; $i<100; $i++) {
  while($j--) {
    if($j==17) {
      goto end;
    }
  }
}

echo "hello";
end:
echo "hi";
// 输出
// hi

// 利用phar扩展来节省空间
类似Java的jar
应用分发方式
phar pack -f animals.phar -c gzwild.php domestic.php
include('phar://animals.phar/wild.php');

// 手册上的小瑕疵
echo "用户信息".get_username()."密码".get_userpwd(); // 0.147s
echo "用户信息",get_username(),"密码",get_userpwd(); // 0.106s 推荐
```

---

#### **开发Web应用程序**

```php
// 模块化一个Web网站
创建配置文件
创建HTML模板
创建索引文件
创建内容模块 
创建搜索模块

// 使用mod_rewrite优化SEO
允许.htaccess重写
激活URL重写

// 调整浏览器缓存
```

#### **PHP网络编程**

```php
// 访问其他网站

// PHP socket编程

// 使用IP进行地址查询

// 使用cURL

// 创建Web服务

// Socket
操作系统提供的通信层的一组API
位于TCP/IP的传输控制层
异步通信

stream socket
datagram stream

psockopen() 持久化连接/长连接

// cURL
```

#### **PHP与服务器**

```php
// 文件压缩

// 创建cron任务

// 使用MCrypt
数据加解密
```

---

#### **高级数据库概念**

```php
// 在数据库中保存会话

<del>处理美国的邮政编码</del>

// 创建存储函数

// 水平展示结果
```

#### **PHP输出缓冲区/缓存技术**

```php
// 系统缓冲区
// PHP输出缓冲区

// 内容压缩输出

// 页面静态化

// 数据级别缓存

// OpCod缓存
// APC eAccelerator 与XCache三者的比较

// 使用deflate压缩页面

// 内存数据库
pecl:memcached扩展

// 缓存的陷阱
```

#### **深度理解MySQL驱动与存储引擎**

```php
// mysqlnd驱动

// 存储引擎
// 第三方存储引擎

// 结合硬件的引擎

// MySQL替代品与分支
```

---

#### **设计模式**

```php
// 单例模式

// 工厂模式

// 组合模式

// 策略模式
```

---

#### **PHP的命令行界面**

```php
// 测试安装 执行

// 可交互的PHP命令行界面

// 创建命令行脚本
// 使用命令行参数

// 接受输入

//内置服务器

// Command Line Interface
CLI是简洁的CGI
没有GET和POST处理
无MIME的头信息输出
以及其他隐含的SAPI的版本

DOS时代的感觉
后台 计划任务

// 参数覆盖
html_errors false
implicit_flush True      // 每个输出块之后自动刷新自身数据
max_execution_time 0     // 没有超时限制
register_argc_argv True  // 告诉PHP是否声名argv(value 实际的参数值)和argc(count 参数数量)变量

// 使用
chmod u+rx hello.php
php filename.php
php -v
php -m // 安装的模块
php -i // phpinfo()
php -h

// CLI开发实践

// CLI实际应用    

// 内置服务器
测试用 不能代替Apache或Nginx
php -S localhost:8078
```

#### **PHP程序调试、测试与性能**

```
// 活用日志
// Xdebug
```

#### **PHP调试、测试和工具**

```php

```

---

#### **XML和PHP**

```php
// 定义XML架构

// XML解析
Expat
SimpleXML

// 创建RSS源
```

#### **用户验证策略**

```php
// HTTP验证

// 纯PHP验证
自定义session
构造安全的cookie

// 访问控制列表
```

---

#### **代码重构实践/最佳实践**

```php
// 代码可读性

// 可扩展性和效率重构

// 模块化设计
// 封装和解耦

// 代码效率
网络带宽
内存
程序处理
```

---

#### 参考

```php
深入理解PHP 面向对象 // 
// PHP高性能 杜江 // 细节上有较多的错误，没看不下去...
```



