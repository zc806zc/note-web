# Python语法

- [网络爬虫项目大全](http://blog.csdn.net/hp910315/article/details/53517399)
- [Python教程-廖雪峰](http://www.liaoxuefeng.com/wiki/0014316089557264a6b348958f449949df42a6d3a2e542c000)
- awesome-python

  - <https://github.com/vinta/awesome-python>

- <https://github.com/kennethreitz/python-guide>

- 第三方库

```python
numpy

python -m pip install xxx // memeryerror 因为32bit的python 使用内存超过2G就会报错
```

# Python安装

- [Python](https://www.python.org/downloads/windows/) | [第三方库-非官方](http://www.lfd.uci.edu/~gohlke/pythonlibs/) | [Python编译系统配置](http://blog.csdn.net/tstbdt/article/details/44490061)
- windows安装注意

  - 选择可执行版本
  - for all users
  - add to path

```python
// 安装第三方库
cd /d folder
pip install xxx.whl

pip3 freeze // 此命令显示安装过哪些
```

- [Sublime Text 3 python 配置](http://www.cnblogs.com/waising/articles/3466120.html)
- [pylinter下载](https://github.com/biermeester/Pylinter) | [pylinter路径问题](https://www.baidu.com/link?url=yEoP4X-gVdIPEvq6qV_qvkOpBUCcl2lFFq-Ivn4mn4vlAqmv5DtHYWbJgZG-VxY981sMt7z3Vp2pKpdulS6i7a&wd=&eqid=c46c4cf000149f3a0000000458b16c19)(还是失败)
- IDE/编辑器

  - ipython notebook 在web浏览器运行
  - Sublime
  - pyCharm

```python
// pyCharm
file > Settings
输入框搜索encoding
找到Editor-File encodings
将IDE Encoding与Project Encoding 设置为utf-8

// Atom 插件
pylinter
SublimeCodeIntel
Python PEP8 Autoformat // 自动格式化 CTRL+SHIFT+R
```

# Python语言基础

- 解释型、面向对象、动态数据类型. GPL(GNU General Public License)协议
- Python的高级性是针对Java C++ 而言的
- 丰富的库, 这目前仅是Python2的优势（Python3移植还存在风险）
- 如果你需要一段 运行很快 的关键代码或者是一些不愿开放的算法，你可以使用C或C++完成那部分程序， 然后从你的Python程序中调用，因为它是一门胶水语言

```python
// Python2+ 中文编码问题, 而Python 3.0+已经默认指定utf-8
#!/usr/bin/python
# -*- coding: UTF-8 -*-

$ python -h // 命令行参数  
CTRL+C 来退出无限循环
```

- 日期与时间

  - time 和 calendar 和 datetime模块
  - 时间元组
  - 日期格式化 strftime

```python
// 关于时间戳
单位最适于做日期运算。
但是1970年之前的日期就无法以此表示，太遥远的日期也不行
UNIX和Windows只支持到2038年
```

- 语法 （明显与其他语言不同的）

  - 缩进是强制的，因为影响到解释，但只要保持缩进一致

  - 循环语句可以有 else 子句，一些原因导致循环终止时被执行, 但循环被break终止时不执行

  - pass是占位的空语句，什么也不干，只是为了好看

```python
import keyword
keyword.kwlist  // 显示保留字

// 多行语句
item_two + \
    item_three

import sys; x = 'runoob'; sys.stdout.write(x + '\n')

input("按enter后退出")

# 两种注释风格
# 这是一个注释

'''
这是多行注释
'''
```

- 输入输出

  - 表达式语句 和 print() 函数
  - 文件对象的 write() 方法
  - str.format()
  - repr() 或 str() 将输出的值转成字符串

- 文件 OS模块

  - 文件 | 目录

  - pickle 模块

## 数据类型

- List[ ] 列表 可修改

```python
a = [66.25, 333, 333, 1, 1234.5]
print(a.count(333), a.count(66.25), a.count('x'))
# 2 1 0

a.insert(2, -1)
a.append(333)
# [66.25, 333, -1, 333, 1, 1234.5, 333]

a.index(333)
# 1
a.remove(333)
# [66.25, -1, 333, 1, 1234.5, 333]

a.reverse()
# [333, 1234.5, 1, 333, -1, 66.25]

a.sort()
# [-1, 1, 66.25, 333, 333, 1234.5]

// 将列表当做堆栈使用
append pop

// 当做队列使用
在列表里插入或者从头部弹出速度却不快
```

- 嵌套列表解析

```python
>>> [[row[i] for row in matrix] for i in range(4)]
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]

>>> transposed = []
>>> for i in range(4):
...     # the following 3 lines implement the nested listcomp
...     transposed_row = []
...     for row in matrix:
...         transposed_row.append(row[i])
...     transposed.append(transposed_row)
...
>>> transposed
[[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]
```

- Dictionary dict{ } 字典无序 相同键值出现多次，只会有一个值有效
- Tuple() 元组 不可改，但可重新赋值

```python
>>> t = 12345, 54321, 'hello!'
>>> t[0]
12345
>>> t
(12345, 54321, 'hello!')
>>> # Tuples may be nested:
... u = t, (1, 2, 3, 4, 5)
>>> u
((12345, 54321, 'hello!'), (1, 2, 3, 4, 5))
```

- Sets 集合 无序不重复

  - 交并补差运算
  - frozenset (|= 重新赋值）

```python
>>> a = {x for x in 'abracadabra' if x not in 'abc'}
>>> a
{'r', 'd'}

sample1 = set('understand')
set([])
```

- Number | String
- string\list\tuple都属于sequence
- 数学函数 ：随机函数 | 三角函数 | 常量
- 数据类型转化

```python
混合计算时，Python会把整型转换成为浮点数
Python3 支持 int、float、bool、complex（复数）没有 python2 中的 Long

// 在交互模式中，最后被输出的表达式结果被赋值给变量 _
>>> tax = 12.5 / 100
>>> price = 100.50
>>> price * tax
12.5625
>>> price + _
113.0625
>>> round(_, 2)
113.06

List是使用最频繁的数据类型 列表的元素是可变的
for x in [1, 2, 3]: print(x);
>>> a = [-1, 1, 66.25, 333, 333, 1234.5]
>>> del a[0]
a // [1, 66.25, 333, 333, 1234.5]
del a[2:4]
a // [1, 66.25, 1234.5]
del a[:]
a // []

// 嵌套列表
>>> a = ['a', 'b', 'c']
>>> n = [1, 2, 3]
>>> x = [a, n]
x       // [['a', 'b', 'c'], [1, 2, 3]]
x[0]    // ['a', 'b', 'c']
x[0][1] // 'b'

// Tuple的元素不能修改
tup1 = (50,); // 元组中只包含一个元素时，需要在元素后面添加逗号

// Set
进行成员关系测试和删除重复元素
用({})或者 set()函数创建
不是 { }, {} 是用来创建一个空字典的

// Dictionary
通过键来存取，而不是通过偏移存取
key必须使用不可变类型
所以可以用数字，字符串或元组充当，而用列表就不行
在同一个字典中，key必须是唯一的
```

- 列表推导式

```python
从序列创建列表的简单途径

如果希望表达式推导出一个元组，就必须使用括号

>>> freshfruit = ['  banana', '  loganberry ', 'passion fruit  ']
>>> [weapon.strip() for weapon in freshfruit]
['banana', 'loganberry', 'passion fruit']

// 循环
>>> vec1 = [2, 4, 6]
>>> vec2 = [4, 3, -9]
>>> [x*y for x in vec1 for y in vec2]
[8, 6, -18, 16, 12, -36, 24, 18, -54]
>>> [x+y for x in vec1 for y in vec2]
[6, 5, -7, 8, 7, -5, 10, 9, -3]
>>> [vec1[i]*vec2[i] for i in range(len(vec1))]
[8, 12, -54]
```

- 遍历技巧

```python
>>> for i, v in enumerate(['tic', 'tac', 'toe']):
...     print(i, v)
...
0 tic
1 tac
2 toe

>>> questions = ['name', 'quest', 'favorite color']
>>> answers = ['lancelot', 'the holy grail', 'blue']
>>> for q, a in zip(questions, answers):
...     print('What is your {0}?  It is {1}.'.format(q, a))
...
What is your name?  It is lancelot.
What is your quest?  It is the holy grail.
What is your favorite color?  It is blue.
```

### 字符串

- 字符串是不可变的
- 一个字符就是长度为1的字符串
- 在Python3中，所有的字符串都是Unicode字符串
- 字符串内建函数
- 正则表达式
- BeautifulSoup HTML和XML分析库
- JSON格式与 pymongo库

```python
// 单引号和双引号使用完全相同

var1 = 'Hello World!'
print ("已更新字符串 : ", var1[:6] + 'Runoob!')
print ("我叫 %s 今年 %d 岁!" % ('小明', 10))


// 使用三引号可以指定一个多行字符串
让程序员从引号和特殊字符串的泥潭里面解脱出来

paragraph = """这是一个段落，
可以由多行组成"""


// 自然字符串 在字符串前加r或R。
r"this is a line with \n" // \n会显示，并不换行

pip install bs4
```

- 运算符

  - 位运算符
  - 逻辑运算符 and | or | not
  - 成员运算符 in | not in
  - 身份运算符 is | is not

```python
2 / 4  # 0.5
2 // 4 # 0
2  5 # 32

c = a // 即c = c  a
```

- 迭代器和生成器

  - 迭代器只能往前不会后退
  - iter() 和 next()
  - 使用了 yield 的函数被称为生成器，生成器就是一个迭代器

### 函数

- 函数

  - 采用引用传递，原始的参数会被改变
  - 不定长参数 _放元组前 *_ 字典
  - 匿名函数 lambda
  - 有默认值的参数必须声名在没有默认值的参数之后
  - 静态方法 @staticmethod 隐参cls可以获取类的信息

```python
def area(width, height):
    return width * height
print(area(4, 5))

# lambda
sum = lambda arg1, arg2: arg1 + arg2;
print(sum(10, 20))
print(sum(20, 20))
```

- 错误与异常

```python
语法错误和异常

用户中断的信息会引发一个
KeyboardInterrupt 异常

try except 语句还有一个可选的else子句，
如果使用这个子句，
那么必须放在所有的except子句之后。
这个子句将在try子句没有发生任何异常的时候执行

异常处理并不仅仅处理那些直接发生在try子句中的异常，
而且还能处理子句中调用的函数（甚至间接调用的函数）里抛出的异常

使用 raise 语句抛出一个指定的异常
raise NameError('HiThere')

// 自定义异常类

大多数的异常的名字都以"Error"结尾，就跟标准的异常命名一样

// 定义清理行为

以上例子不管try子句里面有没有发生异常，finally子句都会执行。
如果一个异常在 try 子句里（或者在 except 和 else 子句里）被抛出，
而又没有任何的 except 把它截住，
那么这个异常会在 finally 子句执行后再次被抛出。

// 预定清理行为
with语句
```

#### Python基础2

- 模块

```python
sys.path
包含了一个 Python 解释器自动查找所需模块的路径的列表

一个模块只会被导入一次，
不管你执行了多少次import。
这样可以防止导入模块被一遍又一遍地执行。

从模块中导入一个指定的部分
>>> from fibo import fib, fib2
from modname import *
划线（_）开头的名字不在此例

dir() 可以找到模块内定义的所有名称

// 包
不同的作者都可以提供 NumPy 模块，
或者是 Python 图形库。

目录只有包含一个叫做 __init__.py 的文件
才会被认作是一个包

import sound.effects.echo
sound.effects.echo.echofilter(input, output, delay=0.7, atten=4)

from sound.effects import echo
echo.echofilter(input, output, delay=0.7, atten=4)

// 从一个包中导入*
__all__ = ["echo", "surround", "reverse"]
这表示当你使用from sound.effects import *这种用法时，
你只会导入包里面这三个子模块。
```

- 标准库

```python
import os

>>> import shutil
>>> shutil.copyfile('data.db', 'archive.db')
>>> shutil.move('/build/executables', 'installdir')

// 从目录通配符搜索中生成文件列表
>>> import glob
>>> glob.glob('*.py')
['primes.py', 'random.py', 'quote.py']

>>> import sys
>>> print(sys.argv)
['demo.py', 'one', 'two', 'three']
sys 还有 stdin，stdout 和 stderr 属性

// 字符串正则匹配
>>> import re
>>> re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')
['foot', 'fell', 'fastest']
>>> re.sub(r'(\b[a-z]+) \1', r'\1', 'cat in the the hat')
'cat in the hat'

>>> import math
>>> math.cos(math.pi / 4)
0.70710678118654757
>>> math.log(1024, 2)
10.0

>>> import random
>>> random.choice(['apple', 'pear', 'banana'])
'apple'
>>> random.sample(range(100), 10)   # sampling without replacement
[30, 83, 16, 4, 8, 81, 41, 50, 18, 33]
>>> random.random()    # random float
0.17970987693706186
>>> random.randrange(6)    # random integer chosen from range(6)
4

// 访问 互联网

// 日期时间

// 数据压缩

// 性能度量
timeit

// 测试模块
doctest
```

- 面向对象

```python
类的继承机制允许多个基类，
派生类可以覆盖基类中的任何方法，
方法中可以调用基类中的同名方法。

// 构造方法
def __init__(self):
    self.data = []

self代表类的实例，而非类，代表当前对象的地址，
而 self.class 则指向类

类的方法与普通的函数只有一个特别的区别——
它们必须有一个额外的第一个参数名称,
按照惯例它的名称是 self。

若是父类中有相同的方法名，
而在子类使用时未指定，
python从左至右搜索 即方法在子类中未找到时，
从左到右查找父类中是否包含方法。

两个下划线开头，声明该属性为私有
self.__private_attrs。

// 类的专有方法
__init__ : 构造函数，在生成对象时调用
__del__ : 析构函数，释放对象时使用
__repr__ : 打印，转换
__setitem__ : 按照索引赋值
__getitem__: 按照索引获取值
__len__: 获得长度
__cmp__: 比较运算
__call__: 函数调用
__add__: 加运算
__sub__: 减运算
__mul__: 乘运算
__div__: 除运算
__mod__: 求余运算
__pow__: 称方
```

- 正则表达式

```python
// match与search的区别
re.match只匹配字符串的开始，
如果字符串开始不符合正则表达式，则匹配失败，函数返回None；
而re.search匹配整个字符串，直到找到一个匹配。

re.sub用于替换字符串中的匹配项

// 正则表达式修饰符
re.I     使匹配对大小写不敏感
re.L    做本地化识别（locale-aware）匹配
re.M   多行匹配，影响 ^ 和 $
re.S    使 . 匹配包括换行在内的所有字符
re.U  
re.X

// 正则表达式模式
标点符号只有被转义时才匹配自身，否则它们表示特殊的含义

// 实例
[Pp]ython    匹配 "Python" 或 "python"
rub[ye]    匹配 "ruby" 或 "rube"
[aeiou]    匹配中括号内的任意一个字母
[0-9]    匹配任何数字。类似于 [0123456789]
[a-z]    匹配任何小写字母
[A-Z]    匹配任何大写字母
[a-zA-Z0-9]    匹配任何字母及数字
[^aeiou]    除了aeiou字母以外的所有字符
[^0-9]    匹配除了数字外的字符
```

- 多线程

```python
使用线程可以把占据长时间的程序中的任务放到后台去处理

线程可以被抢占（中断）

线程可以分为:
内核线程：由操作系统内核创建和撤销。
用户线程：不需要内核支持而在用户程序中实现的线程。

Python3 线程中常用的两个模块为：
_thread
threading(推荐使用)

在 Python3 中不能再使用"thread" 模块。
为了兼容性，Python3 将 thread 重命名为 "_thread"

run()
start()
join([time]): 等待至线程中止。这阻塞调用线程直至线程的join() 方法被调用中止-正常退出或者抛出未处理的异常-或者是可选的超时发生。
isAlive()
getName()
setName()

// 线程同步
如果多个线程共同对某个数据修改，则可能出现不可预料的结果
使用 Thread 对象的 Lock 和 Rlock 可以实现简单的线程同步
acquire 方法和 release 方法

// 锁

// 线程优先级队列
Queue 模块中提供了同步的、线程安全的队列类，包括FIFO（先入先出)队列Queue，LIFO（后入先出）队列LifoQueue，和优先级队列 PriorityQueue。
```

- CGI编程

```python
Apache 支持CGI 配置

修改文件权限为 755

// CGI环境变量

// get和post方法

// CGI中使用Cookie

// 文件上传实例
```

- 网络编程

```python
两个级别访问的网络服务
低级别的网络服务支持基本的 Socket，
它提供了标准的 BSD Sockets API，
可以访问底层操作系统Socket接口的全部方法。

高级别的网络服务模块 SocketServer，
它提供了服务器中心类，
可以简化网络服务器的开发

Socket
向网络发出请求或者应答网络请求，
使主机间或者一台计算机上的进程间可以通讯。

// Python Internet 模块
HTTP    网页访问    80    httplib, urllib, xmlrpclib
NNTP    阅读和张贴新闻文章，俗称为"帖子"    119    nntplib
FTP    文件传输    20    ftplib, urllib
SMTP    发送邮件    25    smtplib
POP3    接收邮件    110    poplib
IMAP4    获取邮件    143    imaplib
Telnet    命令行    23    telnetlib
Gopher    信息查找    70    gopherlib, urllib

// SMTP发送邮件
SMTP（Simple Mail Transfer Protocol）

// 使用Python发送HTML格式的邮件
// Python 发送带附件的邮件
// 在 HTML 文本中添加图片
```

- XML解析与JSON

```python
python有三种方法解析XML，
SAX，DOM，以及ElementTree:

SAX用事件驱动模型，
通过在解析XML的过程中触发一个个的事件
并调用用户定义的回调函数来处理XML文件。
```
