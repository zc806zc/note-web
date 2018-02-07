# Java基础

- LearningNotes <https://github.com/francistao/LearningNotes>
- JAVA学习的方法和过程-知乎 <https://www.zhihu.com/question/29581524/answer/44872235>
- 博客分享 <https://juejin.im/post/586603be1b69e60063d08b7a>

```java
Java程序的执行模式是 半编译半解释
虚拟机可以用硬件实现
字节代码是虚拟机的机器码
```

- 知识点

```java
System不是关键字

只能有一个main方法
main方法只能是一个public静态方法
一个源程序文件中最多只能有一个public类，其他类的个数不限
```

- Java语法清单 <https://zhuanlan.zhihu.com/p/25578170>

# 输入输出

- <http://www.yiibai.com/java_io/>

- 类型转化

- 精度

```java
long = int + float 赋值会出错

(int)(26.3456*100)/100
System.out.print("%.3f",item);

Scanner kb = new Scanner(System.in);
int i = kb.nextInt() % 4;

import java.text.DecimalFormat;
DecimalFormat df = new DecimalFormat( "0.00");
System.out.println("Accumulated value is "+df.format(futureInvestment));
```

- 异常

```java
// 输出结果 1.0
int a = 5, b = 4;
double d;
d = a / b;
System.out.println(d);
```

- else总是和最近的if匹配 -> 加括号的重要性...

```java
int i = 1, j = 1, k =1;
if(i > j)
if( j > k)
System.out.print("A");
else
System.out.print("B"); // 所以什么也不输出
```

- instanceof判断对象类型

```java
class Vehicle {}
public class Car extends Vehicle {
  public static void main(String args[]) {
    Vehicle a = new Car();
    boolean result = a instanceof Car;
    System.out.println( result);
  }
}
```

# 数据类型

- <http://www.yiibai.com/java_data_type/>

# 流程控制

# 异常

```java
用户输入了非法数据

要打开的文件不存在
网络通信时连接中断，或者JVM内存溢出

可控式异常 IOException
运行时异常
```

# 面向对象

- 一个经典到影响整个编程界的面向对象体系

> 站在Java的视角看待别的语言实现面向，这个世界总是不公平....

# 多线程

- 见并发篇...

# Java注解

- <https://www.imooc.com/video/8861>
