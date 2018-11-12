# Mybatis

- Spring Boot 和 MyBatis 实现多数据源、动态数据源切换

  - <https://juejin.im/post/5a927d23f265da4e7e10d740>
  - <https://github.com/helloworlde/SpringBoot-DynamicDataSource>

# Mybatis Plus

- mybatis-plus https://github.com/baomidou/mybatis-plus

```xml
<!-- MyBatis plus增强和springboot的集成-->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus</artifactId>
    <version>${mybatis-plus.version}</version>
</dependency>
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatisplus-spring-boot-starter</artifactId>
    <version>${mybatisplus-spring-boot-starter.version}</version>
</dependency>
```

# ibatis

- @old @deprecated
- <http://www.yiibai.com/ibatis/>
- 持久层框架
- 轻量级的框架和持久性API适合持久化的POJO
- iBATIS强调使用SQL，而其他的框架通常使用一个自定义的查询语言
- iBATIS和Hibernate区别
- 设计理念

  - 可移植性
  - 独立的接口：iBATIS提供独立于数据库的接口和API，帮助应用程序的其余部分保持独立的任何持久性相关的资源

- 优势

  - 支持存储过程
  - 支持内嵌的SQL
  - 支持动态SQL
  - 支持O / RM： iBATIS支持许多相同的功能作为一个O / RM工具，如延迟加载，连接抓取，缓存，运行时代码生成和继承

- iBATIS动态SQL

- iBATIS OGNL 表达式

- iBATIS调试
