# Java基础

- LearningNotes <https://github.com/francistao/LearningNotes>

```java
Java程序的执行模式是 半编译半解释

虚拟机可以用硬件实现
字节代码是虚拟机的机器码
```

- 注意

```java
System不是关键字

只能有一个main方法
main方法只能是一个public静态方法
一个源程序文件中最多只能有一个public类，其他类的个数不限
```

# 你真的会写Java吗

- <https://juejin.im/entry/59ae07d9f265da249600f0ec>
- eclipse -> IDEA
- com.xxx.domain -> com.xxx.entity
- 在做DTO转化的时候一直使用set进行属性赋值时, 使用BeanUtils.copyProperties浅拷贝方法


# 输入输出

```java
long = int + float 赋值会出错

控制double输出精度的方法
(int)(26.3456*100)/100 --小数点后两位
System.out.print("%.3f",item);
format

Scanner kb = new Scanner(System.in);
int i = kb.nextInt() % 4;

import java.text.DecimalFormat;
DecimalFormat df = new DecimalFormat( "0.00");
System.out.println("Accumulated value is "+df.format(futureInvestment));

// 输出结果 1.0
int a = 5, b = 4;
double d;
d = a / b;
System.out.println(d);
```

- if(boolean) {} 里面只能是布尔值，与C语言有区别, 例if(3)不允许

```java

if(3) { printf("hello wo"); }
if(3) { System.out.println("je"); } // required: boolean
```

- else总是和最近的if匹配 -> 加括号的重要性

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

# Bean
