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

# ThreadLocal

- ThreadLocal的作用是提供线程内的局部变量，在多线程环境下访问时能保证各个线程内的ThreadLocal变量各自独立
- 保证多线程访问共享变量的正确性

  - synchronization
  - ThreadLocal 通过避免对象的共享来实现线程安全

# Synchronized

- synchronized的作用和原理 <http://www.fwqtg.net/java%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B%EF%BC%9Asynchronized%E5%8F%8A%E5%85%B6%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86.html>

# volatile关键字

- <http://www.infoq.com/cn/articles/java-memory-model-4>
- 面试官最爱的volatile关键字 <https://juejin.im/post/5a2b53b7f265da432a7b821c>

  - 内存可见性：当一个变量被volatile修饰时，那么对它的修改会立刻刷新到主存，当其它线程需要读取该变量时，会去内存中读取新值。而普通变量则不能保证这一点
  - 重排序
  - 原子性、可见性和有序性

```java
int a = 0;
bool flag = false;
// volatile bool flag = false;

public void write() {
   a = 2;              //1
   flag = true;        //2
}

public void multiply() {
   if (flag) {         //3
       int ret = a * a;//4
   }

}
```

- volatile 使用场景

  - 单例模式的实现，典型的双重检查锁定（DCL）

```java
class Singleton{
    private volatile static Singleton instance = null;

    private Singleton() {

    }

    public static Singleton getInstance() {
        if(instance==null) {
            synchronized (Singleton.class) {
                if(instance==null)
                    instance = new Singleton();
            }
        }
        return instance;
    }
}
```
