# Spring Boot

- 翟永超博客 <http://blog.didispace.com/Spring-Boot%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/>
- 纯洁的微笑

  - <http://www.ityouknow.com/>
  - <https://juejin.im/user/57280c611532bc0062874823>
- 基于SpringBoot的后台管理系统 <https://juejin.im/post/5a9cfc6851882555677e0666>
- 给你一份Spring Boot知识清单 https://juejin.im/entry/5b94cf495188255c3a2d26f8  

# 定制启动banner

- <https://juejin.im/post/5a9ff0576fb9a028d4442330>
- 图片->ASCII http://picascii.com/
- 字母->ASCII http://network-science.de/ascii/
- http://www.ascii-art-generator.org/
- ...

# Spring Boot配置

- <https://github.com/chenfromsz/spring-boot-hello> 配置演示
- JDK要求1.8以上的版本，Tomcat必须是8.0以上的版本
- spring boot内置了tomcat等不需要单独配置
- 打包成jar
- properties优先级高于yml
- @SpringBootApplication = @EnableAutoConfiguration + @ComponentScan + @SpringBootConfiguration
- spring-boot-starter-parent 使用以后常用的包可以省略version

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

# 事务支持

- 类级别事务 | 方法级事务 -> NullPointException

```
@EnableTransactionManagement
@Transactional
```

- 并发事务导致的问题
    
    - 脏读
    - 幻读 ：T1 -> T2插入数据 -> T1发现原本不存在的记录
    - 不可重复读

# 过滤器和监听器

- Filter -> URL级别的权限访问控制 过滤敏感词汇 压缩详细信息
    - Filters -> FilterChain
    - doFilter()

```java
@ServletCommponentScan
```

- Listener -> 统计在线人数和在线用户

```java
@WebListener
```

# 全局异常处理和Retry重试

- EmbeddedServletContainerCustomizer 自定义错误页面
- @ControllerAdvice(basePackages={"com.example.demo"})
- @ExceptionHandler

- Retry重试机制

```java
// 首先全局
@EnableRetry

@Override
@Retryable(value= {BusinessException.class},maxAttempts = 5,backoff = @Backoff(delay = 5000,multiplier = 2))
public AyUser findByNameAndPasswordRetry(String name, String password) {
    System.out.println("[findByNameAndPasswordRetry] 方法失败重试了！");
    throw new BusinessException();
}
```

# 应用监控

```py
# 指定访问这些监控方法的端口
management.port
# 指定地址，比如只能通过本机监控，可以设置 management.address = 127.0.0.1
management.address=127.0.0.1
# 敏感信息访问限制，
endpoints.bean.sensitive=false
# 设置关闭安全限制
anagement.security.enabled=false
```

# 分布式文件系统

- FastDFS

  - 服务端API(跟踪器 + 存储节点)
  - 客户端API
  - 支持动态扩展
  - Tracker Server
