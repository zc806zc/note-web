#### **JSP-框架**

* Spring Boot

```java

```

* Spring框架

```java
降低开发企业应用程序的复杂性
使用Spring代替EJB开发企业级应用

以IoC(反向控制)和AOP（面向切面编程）两种先进的技术为基础

// 模块
核心模块
上下文模块
AOP模块
DAO模块
Web模块
```

* Struts 2框架
  * [struts-dl](http://struts.apache.org/download.cgi#struts25101) \| [struts2-startdemo](http://blog.csdn.net/wwwgeyang777/article/details/19078545)

```java
// 一般只用到 lib下的
// 考虑到版本冲突，可以将apps下的war解压再拷贝
struts2-core-x.x.jar
xwork-x.x.jar // webwork的核心库
commons-fileupload-x.jar // 文件上传组件
commons-io-x.x.jar // java.io的扩展
commons-langx.x.jar // 数据类型工具 lang
commons-logging-x.x.jar // 日志管理
ognl-x.x.jar // EL
freemarker-x.x.jar // 表现层框架,定义了Struts2的可视化组件主题
javassist-x.x.GA.jar // Javassist字节码解释器


// 起源于WebWork框架
MVC // 简单讲就是 把输入处理输出分开的软件架构

// 其他MVC框架 
JSF ,Tapestry , Spring MVC

通过控制反转 使应用程序测试更加简单

使用 拦截器 的机制来处理用户请求 // 过滤链
使得业务控制逻辑和Servlet API完全脱离开

// Struts2拦截器


// Action对象
框架的核心类 业务逻辑控制层
实现对用户请求信息的处理 // 主要是HTTP请求
// Struts2可以选择实现或不实现Struts2接口(耦合度) 比较灵活
// SUCCESS　NONE ERROR INPUT LOGIN

doFilter() -> execute()

// 动态Action 针对不同的用户请求调用不同的方法
// 可以指定method, 配置struts.xml
// 也可以不指定method 
<s:form action="ActionName!MethodName">
<action name="ActionName" class="PackageName.Action类名">
    <result>URL</result>
</action>

// Struts2的配置文件

// Struts2开发模式

// Struts2标签库
```

* Hibernate技术

```java
对象-关系映射 ORM (Object Relational Mapping)

在MVC三层架构上
从业务逻辑层又分离出一个持久层
专门负责数据的持久化操作
使业务逻辑层可以真正地专注于业务逻辑的开发
不再需要编写复杂的SQL语句

表示层 业务逻辑层 数据库曾

开发者不需要遵循太多的规则和设计模式
更灵活

运用面向对象的思想操纵数据库，无须考虑资源的问题
```

* MyBatis

```java

```



