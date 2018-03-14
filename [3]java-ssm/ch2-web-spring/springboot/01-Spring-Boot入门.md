# Spring Boot

- 翟永超博客 <http://blog.didispace.com/Spring-Boot%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/>
- 纯洁的微笑

  - <http://www.ityouknow.com/>
  - <https://juejin.im/user/57280c611532bc0062874823>

- 启动 banner 定制 <https://juejin.im/post/5a9ff0576fb9a028d4442330>

# Spring Boot配置

- <https://github.com/chenfromsz/spring-boot-hello> 配置演示
- JDK要求1.8以上的版本，Tomcat必须是8.0以上的版本
- spring boot内置了tomcat等不需要单独配置
- 打包成jar

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <executions>
                <execution>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>


<!--  运行jar包 -->
右键mvn package
cd target
java -jar spring-boot-hello-1.0-SNAPSHOT.jar
```

- application.yml <https://docs.spring.io/spring-boot/docs/current/reference/html/common-application-properties.html>


# 常见问题

- 先确定java7 java8版本

# Spring boot多模块部署

- SpringBoot 多模块项目实践 <https://www.jianshu.com/p/59ceea4f029d>
- Springboot 初探 @小马哥 <https://www.imooc.com/video/16354>

  - 单模块重构成多模块
  - 三种运行方式

    - IDEA -> 开发
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

```shell
persistence
model
(tkMybatis)

common
core
utils

web
  - aspect(LogAspect...)
  - handler
  - security
```

- 热部署 spring-boot-devtools

  - (推荐) <https://www.cnblogs.com/bingshu/p/6876030.html>
  - <http://blog.csdn.net/isea533/article/details/70495714>
  - jRabel  

- 注意
  - ctrl + F9 刷新重构一下
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
