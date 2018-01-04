# Java

- IDE

  - IntelliJ IDEA
  - NetBeans | Eclipse
  - eclipse color theme <http://download.csdn.net/download/knockheart/6690825>

- 资源

  - <http://droidyue.com/blog/2014/11/30/java-programmer-must-read-these-9-books>
  - <https://www.zhihu.com/question/19848946?rf=19752221>
  - 你真的会写java吗 <https://juejin.im/entry/59ae07d9f265da249600f0ec>

- 网站

  - [并发编程指南](http://ifeve.com/java-7-concurrency-cookbook/)
  - [100问](https://github.com/giantray/stackoverflow-java-top-qa)
  - [ConcretePage](http://www.concretepage.com/) Java 资源类网站，可以找到各种 Java 框架及相关教程

- 书单

```java
// 入门
《Head First Java》
《Java 核心技术》两卷

// 进阶  
《Java 编程思想(第4版)》  
《Head First 设计模式》   
《Effective Java 中文版(第2版)》  
《重构:改善既有代码的设计》  
《Java Concurrency in Practice》Java并发编程实战

// 高级  
《深入理解Java 虚拟机》  
《Java 虚拟机规范(Java SE 7版)》

// J2EE  
《分布式 Java 应用：基础与实践》  
 《企业应用架构模式 》

// 数据结构  
《Java数据结构和算法》

// 算法  
《算法》  
《算法设计与分析》王晓东
```

- 基础

```java
Java程序的执行模式是 半编译半解释

虚拟机可以用硬件实现，<br>
字节代码是虚拟机的机器码

只能有一个main方法<br>
main方法只能是一个public静态方法<br>
一个源程序文件中最多只能有一个`public`类，其他类的个数不限

System不是关键字<br>
加号 + 的优先级大于 =<br>
java.lang包中的所有类是隐式导入的
```

# 异常

```java

用户输入了非法数据

要打开的文件不存在<br>
网络通信时连接中断，或者JVM内存溢出

可控式异常 IOException<br>
运行时异常
```

# 输入输出

```java

long = int + float 赋值会出错

控制double输出精度的方法<br>
(int)(26.3456*100)/100 --小数点后两位<br>
System.out.print("%.3f",item);<br>
format

Scanner kb = new Scanner(System.in);<br>
int i = kb.nextInt() % 4;

import java.text.DecimalFormat;<br>
DecimalFormat df = new DecimalFormat( "0.00");<br>
System.out.println("Accumulated value is "+df.format(futureInvestment));

// 输出结果 1.0<br>
int a = 5, b = 4;<br>
double d;<br>
d = a / b;<br>
System.out.println(d);
```

- if(boolean) {} 里面只能是布尔值，与C语言有区别, 例if(3)不允许

```java

if(3) { printf("hello wo"); }<br>
if(3) { System.out.println("je"); } // required: boolean
```

- else总是和最近的if匹配 -> 加括号的重要性

```java

int i = 1, j = 1, k =1;<br>
if(i > j)<br>
if( j > k)<br>
System.out.print("A");<br>
else<br>
System.out.print("B"); // 所以什么也不输出
```

- instanceof判断对象类型

```java
class Vehicle {}<br>
public class Car extends Vehicle {<br>
public static void main(String args[]) {<br>
Vehicle a = new Car();<br>
boolean result = a instanceof Car;<br>
System.out.println( result);<br>
}<br>
}
```

# 流程控制

# 数组、字符串

# 类和对象，接口、继承与多态，类的高级特性*

- 面向对象
- 类和对象
- 接口
- 继承
- 多态
- Object类
- 对象类型的转换

  - 向上转型
  - 向下转型

- Instanceof

  - 判断对象类型

- 模式

# Swing程序设计 事件处理 表格与树组件

# 多线程

- 实现的两种方式

  - 继承Thread类
  - 实现Runnable接口

- 线程的生命周期

- 操作线程

  - 休眠
  - 加入
  - 中断
  - 礼让

- 线程的优先级

- 线程同步

  - 线程安全
  - 线程同步机制

- 线程之间的通信

- 线程死锁

# 图形绘制技术

# 常用工具类

# 数据库编程

- 快递打印系统
- 软件注册程序
- 决策分析程序
