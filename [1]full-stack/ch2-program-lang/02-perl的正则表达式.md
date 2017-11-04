# Perl

- 安装

  - [perl-get](https://www.perl.org/get.html)

```perl
tar make 流程... // Linux一般默认装好

perl -e 'print "Hello World\n"' // 测试安装

#!/usr/bin/perl
# 输出 "Hello, World"
print "Hello, world\n";
perl hello.perl // chmod 0755 hello.pl  再 ./hello.perl 文件运行

// IDE
Padre
Eclipse-EPIC
```

- 基础

```perl
脚本语言中的"瑞士军刀"
Practical Extraction and Report Language
实用报表提取语言

Larry Wall 于1987年12月18日发表
内部集成了正则表达式的功能
以及巨大的第三方代码库CPAN

除CGI以外，
Perl被用于图形编程、系统管理、网络编程、金融、生物以及其他领域

// 优点
直接提供 泛型变量、动态数组、Hash表 等更加便捷的编程元素
统一变量类型和掩盖运算细节
CPAN可扩展性
mod_perl 的模块允许 Apache web 服务器使用 Perl 解释器

// 缺点
write-only
秒忘遗忘语法 // 使用use strict;以及use warnings

很多时候，perl.exe进程会占用很多的内存空间，虽然只是一时，但是感觉不好
```

- 语法

```perl
// 标识符区分大小写
// 双引号和单引号区别  转义
用单引号定义可以使用多行文本 // 无法解析会原样输出 ??

// Here 文档
$a = 10;
$var = <<"EOF"; // 若改成单引号 a = $a
a = $a
EOF
print "$var\n"; // 输出 a = 10

// 数据类型
标量、数组、哈希
```

- 正则表达式

```perl
```

- 参考

```
菜鸟教程
```
