# ch1 JAX-RS2入门

- REST(一种架构风格)

  - 对比RPC风格
  - 对比MVC风格

- JAX-RS标准

- Jersey项目

- 快速实现Java REST服务

- Java领域的其他REST实现

- REST调试工具

  - 命令行调试工具
  - 基于浏览器的图形化调试插件

# ch2 REST API设计

- 统一接口

  - GET
  - PUT
  - DELETE
  - POST
  - WebDAV扩展方法

- 资源定位

  - 资源地址设计
  - 注解

- 传输格式

  - InputStream
  - Reader
  - XML
  - JSON

- 连通性

  - 过渡型链接
  - 结构型链接

- 处理响应

  - 返回类型
  - 处理异常

- 内容协商

  - @Produces注解
  - @Consumes注解

# ch3 REST请求处理

- Jersey的AOP机制

- Providers

- REST请求流程

- REST过滤器

- REST拦截器

- 绑定机制

- 优先级

# ch4 REST服务与异步

- 异步机制

- JAX-RS2的异步机制

- 基于HTTP1.1异步通信

- 基于HTML5的异步通信

# ch5 REST客户端

- 客户端接口

  - Client接口
  - WebTarget接口
  - Invocation接口

- 连接池

  - 资源释放
  - 连接器
  - HTTP连接池

- 封装Client

- 请求Spring Boot微服务

- JavaScript客户端

  - jQuery客户端
  - AngularJS客户端

# ch6 REST测试

- Jersey测试框架

- 单元测试

  - 集成Spring的单元测试
  - 异步测试

- 集成测试

- 日志增强

# ch7 微服务

- 微服务技术栈

  - 服务发现
  - 可伸缩性
  - 回到起点

- REST服务与Spring Boot

  - Bootiful
  - RESTful
  - Actuator

- REST服务与Spring Cloud

  - Spring Cloud Zookeeper
  - Spring Cloud Consul
  - Spring Cloud Etcd

# ch8 容器化

- 容器技术

  - Docker

- REST服务和容器

  - 开始容器化之路
  - 开发自测容器化

- 容器化微服务

  - Zookeeper
  - Kafka
  - 微服务
  - Nginx

# ch9 JAX-RS调试

- 使用缓存优化负载

  - 缓存协商
  - 条件GET
  - REST缓存实践
  - ab测试

- 使用版本号优化服务

- 使用参数配置优化服务

  - 通用配置
  - 服务器端和客户端配置类

- Java虚拟机调优

  - 虚拟机
  - 内存溢出和内存泄露

# ch10 REST安全

- 身份认证

  - 基本认证
  - 摘要认证
  - 表单认证
  - 证书认证

- 资源授权

  - 容器管理权限
  - 应用管理权限

- 认证和授权实现

- JAX-RS2实现

- REST服务与OAuth2
