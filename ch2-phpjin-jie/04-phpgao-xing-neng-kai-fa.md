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
    
// SQL组合优化

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

```

#### **ch3 PHP输出缓冲区**

```

```

#### **ch4 PHP缓存技术**

```

```

#### **ch5 PHP网络编程**

```

```

#### **ch6 PHP调试、测试和工具**

```

```

#### **ch7 用户验证策略**

```

```

#### **ch8 深度理解MySQL驱动与存储引擎**

```

```

#### **ch9 PHP命令行界面**

```

```

#### **ch10 代码重构实践**

```

```



