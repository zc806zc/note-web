# Java面试题

- 最近5年133个Java面试问题列表 <http://www.importnew.com/17232.html>

- 如何准备BAT技术面试答案(汇总版)

  - <https://www.jianshu.com/p/1f1d3193d9e3>

- Interview-questions <https://github.com/HuangQinJian/Interview-questions>

# volatile关键字

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
