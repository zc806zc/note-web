#### **CPP基础**

* IDE使用

```cpp
// 属性里配置 包含路径等

一个工程只能有一个main函数
学习阶段用单文件编程

// VS2010

// Dev C++
修改成 c++ 11标准
```

* 资源
  * [Free Country](https://www.thefreecountry.com/sourcecode/cpp.shtml) \| [C and C++ Users Group](http://www.hal9k.com/cug/) 

```cpp
// Free Country提供了
免费的 C++ 源代码和 C++ 库，
压缩、存档、游戏编程、标准模板库和 GUI 编程

// C and C++ Users Group 提供了
AI、动画、编译器、数据库、调试、加密、
游戏、图形、GUI、语言工具、系统编程等。

// 书单
好像前辈就没什么推荐过
至于经典书就像 现代汉语词典一样 难啃...
```

---

* 基础

```
Bjarne Stroustrup // C++之父
中级语言
支持过程化编程、面向对象编程和泛型编程

C++ = 核心语法 + (C++标准库) + STL

ANSI 标准

使用 C++ 编写的操作系统的用户接口

MinGW

编辑 -> 编译 -> 链接 -> 运行

// 单入口单出口的控制结构
```

* 语法

```
// 命名空间
using std::cout;

namespace namespace_name1 {
   // 代码声明
   namespace namespace_name2 {
      // 代码声明
   }
}
using namespace namespace_name1::namespace_name2;

return 0; 终止 main( )函数，并向调用进程返回值 0

可以注释嵌套

// 引用

// 程序设计错误
语法错误
运行时错误
逻辑错误

一个是 rand()，
该函数只返回一个伪随机数。
生成随机数之前必须先调用 srand() 函数。
```

* 数据类型

```
无类型    void
宽字符型    wchar_t

typedef int feet; // 别称

// 枚举类型
enum color { red, green, blue } c;
c = blue;

可以使用 extern 关键字在任何地方声明一个变量。
虽然您可以在 C++ 程序中多次声明一个变量，
但变量只能在某个文件、函数或代码块中被定义一次。

extern 修饰符通常用于当有两个或多个文件共享相同的全局变量或函数的时候

// 修饰符
const    
volatile    变量的值可能以程序未明确指定的方式被改变。
restrict    由 restrict 修饰的指针是唯一一种访问它所指向的对象的方式。只有 C99 增加了新的类型限定符 restrict。

auto f=3.14;      //double
auto s("hello");  //const char*
auto z = new auto(9); // int*
auto x1 = 5, x2 = 5.0, x3='r';//错误，必须是初始化为同一类型

register 存储类用于定义存储在寄存器中而不是 RAM 中的局部变量。
这意味着变量的最大尺寸等于寄存器的大小（通常是一个词），
且不能对它应用一元的 '&' 运算符（因为它没有内存位置）。

// thread_local 存储类
使用 thread_local 说明符声明的变量仅可在它在其上创建的线程上访问
thread_local int x;  // 命名空间下的全局变量

class X
{
    static thread_local std::string s; // 类的static成员变量
};
static thread_local std::string X::s;  // X::s 是需要定义的

void foo()
{
    thread_local std::vector<int> v;  // 本地变量
}

// 运算符
C <<= 2 等同于 C = C << 2
C >>= 2 等同于 C = C >> 2
C &= 2 等同于 C = C & 2
C ^= 2 等同于 C = C ^ 2
C |= 2 等同于 C = C | 2

逗号运算符会顺序执行一系列运算。
整个逗号表达式的值是以逗号分隔的列表中的最后一个表达式的值。
```

* 逻辑控制

```
C++ 程序员偏向于使用 for(;;) 结构来表示一个无限循环。
```

* 函数
  * [lambda表达式 - xqs83](http://blog.csdn.net/xqs83/article/details/7612866)
    \| [菜鸟lambda](http://www.runoob.com/cplusplus/cpp-functions.html)

```cpp
// C++ 使用传值调用来传递参数

传值调用    
该方法把参数的实际值复制给函数的形式参数。

指针调用    
修改形式参数会影响实际参数。

引用调用    
该方法把参数的引用复制给形式参数。
在函数内，该引用用于访问调用中要用到的实际参数。
这意味着，修改形式参数会影响实际参数。

// Lambda 函数与表达式
```

* 数组与字符串

```
Array 是固定大小的，
不能额外增加元素.
当我们想定义不固定大小的字符时,
可以使用 vector(向量) 标准库。

const char a4[7] = "runoob"; // 收尾
C++ 编译器会在初始化数组时，自动把 '\0' 放在字符串的末尾

// 字符串函数
strcpy(s1, s2);
strcat(s1, s2);
strlen(s1);

strcmp(s1, s2);
如果 s1 和 s2 是相同的，则返回 0；
如果 s1<s2 则返回小于 0；
如果 s1>s2 则返回大于 0。

strchr(s1, ch);
返回一个指针，指向字符串 s1 中字符 ch 的第一次出现的位置。
strstr(s1, s2);
返回一个指针，指向字符串 s1 中字符串 s2 的第一次出现的位置
```

* 指针与引用

```
Null 指针     NULL 指针是一个定义在标准库中的值为零的常量。
指针的算术运算     ++、--、+、-
指针 vs 数组    指针和数组之间有着密切的关系
指针数组    可以定义用来存储指针的数组。
指向指针的指针
传递指针给函数    通过引用或地址传递参数，使传递的参数在调用函数中被改变。
从函数返回指针

// C++ 引用 vs 指针
不存在空引用。引用必须连接到一块合法的内存

一旦引用被初始化为一个对象，
就不能被指向到另一个对象。
指针可以在任何时候指向到另一个对象。

引用必须在创建时被初始化。
指针可以在任何时间被初始化。

引用通常用于函数参数列表和函数返回值。

// 使用 typedef 关键字来定义非结构类型
typedef long int *pint32;
pint32 x, y, z;
```

* 文件与流 输入输出

```
// 文件位置指针

fileObject.seekg( n );  // 定位到 fileObject 的第 n 个字节（假设是 ios::beg）
fileObject.seekg( n, ios::cur );         // 从当前位置向后移 n 个字节
fileObject.seekg( n, ios::end );     // 从末尾往回移 n 个字节
fileObject.seekg( 0, ios::end );     // 定位到 fileObject 的末尾
```

* STL

```cpp
实现多种流行和常用的算法和数据结构，如向量、链表、队列、栈

容器（Containers）    
容器是用来管理某一类对象的集合。
C++ 提供了各种不同类型的容器，
比如 deque、list、vector、map 等。

算法（Algorithms）    
算法作用于容器。
它们提供了执行各种操作的方式，
包括对容器内容执行初始化、排序、搜索和转换等操作。

迭代器（iterators）    
迭代器用于遍历对象集合的元素。
这些集合可能是容器，也可能是容器的子集。
```

#### 参考

```cpp
菜鸟教程
```



