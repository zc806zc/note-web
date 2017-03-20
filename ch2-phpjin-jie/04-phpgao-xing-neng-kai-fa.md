#### **ch1 PHP解惑**

```php
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

#### **ch2 深入PHP面向对象**

```php
记在深入理解面向对象
```

#### **ch3-4 PHP输出缓冲区/缓存技术**

```php

```

#### **ch5 PHP网络编程**

```php

```

#### **ch6 PHP调试、测试和工具**

```php

```

#### **ch7 用户验证策略**

```php

```

#### **ch8 深度理解MySQL驱动与存储引擎**

```php

```

#### **ch9 PHP命令行界面**

```php
// Command Line Interface
CLI是简洁的CGI
没有GET和POST处理
无MIME的头信息输出
以及其他隐含的SAPI的版本

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

#### **ch10 代码重构实践**

```php

```



