# 面向对象

- 一个经典到影响整个编程界的面向对象体系

> 站在Java的视角看待别的语言实现面向对象，总是不公平的....

# 类和对象，接口、继承与多态，类的高级特性

- <http://www.yiibai.com/java_object_oriented_design/>
- 面向对象
- 类和对象

  - 访问级别

```shell
数字字段（byte, short, char, int, long, float和double）初始化为0。 布尔字段初始化为false。 引用类型字段初始化为null
```

- 继承
- 接口:它承诺提供由该接口发布的行为
- 多态

```java
// 静态多态性(编译时多态性/方法重载)
package oopsconcept;  
class Overloadsample {  
    public void print(String s){  
        System.out.println("First Method with only String- "+ s);  
    }  
    public void print (int i){  
        System.out.println("Second Method with only int- "+ i);  
    }  
    public void print (String s, int i){  
        System.out.println("Third Method with both- "+ s + "--" + i);  
    }  
}  
public class PolymDemo {  
    public static void main(String[] args) {  
        Overloadsample obj = new Overloadsample();  
        obj.print(10);  
        obj.print("Amit");  
        obj.print("Hello", 100);  
    }  
}

// 动态多态性(运行时多态性/方法覆盖)
package oopsconcept;  
public class OverridingDemo {  
    public static void main(String[] args) {  
        //Creating Object of SuperClass and calling getModel Method  
        Mobile m = new Mobile("Nokia", "Win8", "Lumia",10000);  
        System.out.println(m.getModel());  
        //Creating Object of Sublcass and calling getModel Method  
        Android a = new Android("Samsung", "Android", "Grand",30000);  
        System.out.println(a.getModel());  
        //Creating Object of Sublcass and calling getModel Method  
        Blackberry b = new Blackberry("BlackB", "RIM", "Curve",20000);  
        System.out.println(b.getModel());  
    }  
}
```

- Object类
- 对象类型的转换

  - 向上转型
  - 向下转型

- Instanceof

  - 判断对象类型

- 模式

# Java泛型教程

- <http://www.yiibai.com/java_generics/>
