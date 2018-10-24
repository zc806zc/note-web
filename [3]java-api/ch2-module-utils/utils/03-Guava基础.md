# Guava

- 教程 https://www.yiibai.com/guava
- https://github.com/google/guava
- 文档 @deprecated：丑 https://google.github.io/guava/releases/snapshot-jre/api/docs/
- guava快速入门 https://blog.csdn.net/dgeek/article/details/76221746
- 包含谷歌很多项目正在使用的很多核心库

```java
集合，缓存，支持原语，并发性，常见注解，字符串处理，I/O和验证的实用方法
```

# 基础

- optional 包含非空对象的不可变对象
- Preconditions 提供静态方法来检查方法或构造函数，被调用是否给定适当的参数
- Ordering(排序) 多类型排序功能
- Objects类

  - equals, hashCode ...

- Range

- Throwable

- 集合

  - Guava Multiset
  - Guava Multimap
  - Guava Bimap
  - Guava Table

- 缓存工具

  - 基于内存的LoadingCache

```java
<k，v>
</k，v>
```

- 字符串工具

  - Joiner
  - Spilter
  - CharMatcher
  - CaseFormat 改变字符串格式

- Guava原语工具

  - 作为Java的原语类型，不能用来传递在泛型或于类别作为输入

- 数学工具

  - IntMath
  - LongMath
  - BigIntegerMath
