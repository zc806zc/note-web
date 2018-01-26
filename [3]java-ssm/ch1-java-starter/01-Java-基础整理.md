# Java基础

- LearningNotes <https://github.com/francistao/LearningNotes>

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

# 输入输出

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

# 异常

```java
用户输入了非法数据

要打开的文件不存在
网络通信时连接中断，或者JVM内存溢出

可控式异常 IOException
运行时异常
```

# 流程控制

# 数组、字符串

# 类和对象，接口、继承与多态，类的高级特性

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

- 模式?

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
