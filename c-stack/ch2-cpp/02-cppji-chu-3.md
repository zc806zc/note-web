#### **CPP基础3**

* 动态内存

```cpp
栈：在函数内部声明的所有变量都将占用栈内存。
堆：这是程序中未使用的内存，在程序运行时可用于动态分配内存。

尽量不要使用 malloc() 函数
new 不只是分配了内存，它还创建了对象

// 数组的动态内存分配

int ROW = 2;
int COL = 3;
double **pvalue  = new double* [ROW]; // 为行分配内存

// 为列分配内存
for(int i = 0; i < COL; i++) {
    pvalue[i] = new double[COL];
}

for(int i = 0; i < COL; i++) {
    delete[] pvalue[i];
}
delete [] pvalue; 

// 对象的动态内存分配
```

* 模板

```
模板是泛型编程的基础，
泛型编程即以一种独立于任何特定类型的方式编写代码。
```

* 预处理器

```cpp
函数宏

// ##运算
#include <iostream>
using namespace std;

#define concat(a, b) a ## b
int main()
{
   int xy = 100;

   cout << concat(x, y);
   return 0;
}

// 预定义宏
 __LINE__
 __FILE__  
 __DATE__
__TIME__
```

* 信号处理

```

```

* 多线程

```
向线程传递参数

连接和分离线程
```

* Web编程
  * [CGI - web](http://www.cnblogs.com/gongxijun/p/4366284.html)

```cpp
<Directory "/var/www/cgi-bin">
   AllowOverride None
   Options ExecCGI
   Order allow,deny
   Allow from all
</Directory>

<Directory "/var/www/cgi-bin">
Options All
</Directory>

C:\Apache\cgi-bin 

httpd.conf修改后 注意保存关闭再重启appache
```



