# Spring Boot

- 翟永超 <http://blog.didispace.com/Spring-Boot%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/>
- 纯洁的微笑 <http://www.ityouknow.com/>
- springboot-learning-example <https://github.com/JeffLi1993/springboot-learning-example>
- springboot 深入实践图书源码 <https://github.com/chenfromsz?tab=repositories>
- spring boot学习目录 <https://www.jianshu.com/p/9a08417e4e84>
- 其他

  - 重拾后端之Spring Boot <https://juejin.im/post/5953bc2c5188250d8d141362>
  - springboot-socks <https://github.com/yizhiwazi/springboot-socks>

# Spring boot多模块部署

- Springboot 初探 @小马哥 <https://www.imooc.com/video/16354>

  - 单模块重构成多模块
  - 三种运行方式
    - IDEA  -> 开发
    - JAR/WAR -> 生产
    - MAVEN mvn:spring-boot:run
  - 响应式编程 Spring Boot特性等  

- IDEA创建多个模块MavenSpringBoot项目

  - <https://segmentfault.com/a/1190000011367492>
  - <http://blog.csdn.net/willjgl/article/details/77773634>
  - <http://blog.csdn.net/Message_lx/article/details/54632947>
  - 示例 <https://github.com/williamHappy/tao-shopping-mall>

- 基于maven使用IDEA创建多模块项目 <http://blog.csdn.net/williamhappy/article/details/54376855>

- 模块

```java
common-utils
```

- 热部署 spring-boot-devtools

  - (推荐) <https://www.cnblogs.com/bingshu/p/6876030.html>
  - <http://blog.csdn.net/isea533/article/details/70495714>
  - jRabel

- 注意

  - 父项目必须为pom
  - xxx-parent文件结构是否包含这些模块
  - 删除父项目的src
  - Mark As Source Root

# 界面设计

- <https://www.tianmaying.com/tutorial/using-thymeleaf>
- Thymeleaf模板(首选)

  - 标签语言与函数
  - 与前端模板的区别
  - 如果前后端分离

- JSP、Velocity和FreeMarker，是上一代的模板引擎

```java
// demo
th:value="${movie.createDate} ? ${#dates.format(movie.createDate, 'yyyy-MM-dd')} : ''"

// layout
```

# 分布式文件系统

- FastDFS

  - 服务端API(跟踪器 + 存储节点)
  - 客户端API
  - 支持动态扩展
  - Tracker Server
