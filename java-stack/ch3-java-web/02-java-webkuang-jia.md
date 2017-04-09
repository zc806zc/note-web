#### **JSP-框架**

```java

```

#### Spring Boot

* 基础

```java

```

#### Spring

* 基础

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

#### Struts 2框架

* 基础
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
AOP的一种实现方式

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
struts-default.xml
struts.xml
struts-plugin.xml 
struts.properties // struts框架属性配置
web.xml

配置包和命名空间 // 已经配置好的包可以被其他包继承
使用通配符简化配置

// Struts2开发模式
开发模式与产品模式

// 实现与Servlet API的交互
间接访问 // ActionContext
直接访问 // 分为Ioc和非Ioc

// 域模型DomainModel
// 驱动模型ModelDriven 

// Struts2标签库
完全可以代替JSTL
应用数据/控制/表单标签
```

![](/assets/structs-structure3453.png)  ![](/assets/struts2-lib23784.png)

#### Hibernate

* 基础
  * [hibernate.org](http://hibernate.org/orm/)

```java
使用lib/required下面的jar包即可

// 开发者不需要遵循太多的规则和设计模式 // 更灵活

对象-关系映射 ORM (Object Relational Mapping)
// 对于大型程序, JDBC无法满足
// JDBC在批量操作 多表联接 表单级联当面并不优秀

面向对象是从软件工程的基本原则发展而来的
关系数据库确是基于数学理论
// 使用Hibernate,可以运用面向对象的思想操纵数据库，无须考虑资源的问题

Hibernate可以在应用EJB的J2EE架构中取代CMP
完成数据持久化的重任

// Hibernate在MVC三层架构上
// 表示层 + 业务逻辑层 + 数据库层
从业务逻辑层又分离出一个持久层,专门负责数据的持久化操作
使业务逻辑层可以真正地专注于业务逻辑的开发
不再需要编写复杂的SQL语句

// 3个重要的类
配置类
会话工厂类 // 生成session的工厂
会话类 // 不是线程安全的 不要多个线程共享一个Session

POJO // Plain Old java Object
```

* 使用

```java
// 数据类型映射
long-Long-BIGINT
// short-Short-SMALLINT
character-String-Char(1)
string-String-varchar
text-String-CLOB
calender-Calender-TIMESTAMP
class-class-VARCHAR

// 重要文件
持久化类 .java
映射文件 .hbm.xml
配置文件 .cfg.xml // 如数据库的连接信息

// Hibernate自动建表

// 持久化对象
```

#### MyBatis

```java

```



