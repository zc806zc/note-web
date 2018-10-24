# 基础

- 数据类型 <http://www.yiibai.com/java_data_type/>
- JCFInternals 深入理解Java集合框架 https://github.com/CarpenterLee/JCFInternals
- Java 数据结构 <http://www.runoob.com/java/java-data-structures.html>

  - ArrayList | Vector | Stack(后进先出的栈)
  - Map | Dictionary | Hashtable | Properties
  - BitSet

- Java 集合框架 
  - <http://www.runoob.com/java/java-collections.html>
  - https://juejin.im/post/5a2f80a3f265da430406962a

```java
Collection

Map 
Map.Entry 
SortedMap

Set
SortedSet

// 抽象类
在抽象类层面都没有涉及具体的数据结构和算法，
只对操作这些数据结构的方法做了基本实现

// 历史遗留
Vetor,Stack,Hashtable,Properties

HashMap 
ArrayList
```

![](http://www.runoob.com/wp-content/uploads/2014/01/java-coll.png)

# 集合框架

- Java集合框架常见面试题总结https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E5%B8%B8%E8%A7%81%E9%9D%A2%E8%AF%95%E9%A2%98%E6%80%BB%E7%BB%93.md

- 这几道Java集合框架面试题几乎必问https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/%E8%BF%99%E5%87%A0%E9%81%93Java%E9%9B%86%E5%90%88%E6%A1%86%E6%9E%B6%E9%9D%A2%E8%AF%95%E9%A2%98%E5%87%A0%E4%B9%8E%E5%BF%85%E9%97%AE.md

- List，Set,Map区别
- Arraylist 与 LinkedList 

```
Arraylist底层使用的是数组（存读数据效率高，插入删除特定位置效率低），
LinkedList底层使用的是双向循环链表数据结构（插入，删除效率特别高）

经常需要插入删除元素时建议选用LinkedList.
一般程序只用Arraylist就够用了 Arraylist是使用最多的集合类。
```

- ArrayList 与 Vector 

```
Vector类的所有方法都是同步的
```

- HashMap 和 Hashtable 

```
HashMap是非线程安全的，HashTable是线程安全的
```

# 源码分析 

- ArrayList源码 https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/ArrayList.md
- HashMap源码 https://github.com/Snailclimb/JavaGuide/blob/master/Java%E7%9B%B8%E5%85%B3/HashMap.md