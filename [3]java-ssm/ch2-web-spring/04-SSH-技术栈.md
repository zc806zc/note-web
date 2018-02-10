# SSH

- Spring
- Struts2
- Hibernate5

# Struts2

- 基础

- 安装 <http://struts.apache.org/download.cgi#struts25101>

- 示例 <http://blog.csdn.net/wwwgeyang777/article/details/19078545>

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

![](/assets/img/java/structs-structure3453.png) ![](/assets/img/java/struts2-lib23784.png)

# Hibernate

- 快速入门 <http://www.yiibai.com/hibernate/hibernate-quick-guide.html>

- hibernate.org <http://hibernate.org/orm/>

- ORM(对象关系映射)工具

- 作为EJB2风格实体bean的替代品开发的对象关系映射工具

- 稳定版 Hibernate 5.2.9

![](http://www.yiibai.com/uploads/images/201703/2203/604080357_24119.jpg)

- 优点

  - 快速性能 -> 有一级缓存和二级缓存。一级缓存默认是启用的
  - HQL 生成数据库独立查询
  - 提供了自动创建数据库表的功能
  - 简化复杂连接
  - 提供查询统计和数据库状态

- Hibernate体系结构

  - Java应用层
  - hibernate框架层
  - 反手api层
  - 数据库层

![](http://www.yiibai.com/uploads/images/201703/2203/108090306_94168.jpg)

- Hibernate的高级架构

![](http://www.yiibai.com/uploads/images/201703/2203/173090306_68782.jpg)

- 注释
- Hibernate生成器类
- Hibernate使用Log4j日志记录
- 二级缓存 SessionFactory 默认不启用

  - 实现由不同的程序开发者(商)提供
  - EH二级缓存
  - OS二级缓存
  - Swarm二级缓存
  - JBoss二级缓存

- 继承映射

- 集合映射

  - Bag
  - Set
  - Map

- 组件映射

  - 将依赖对象映射作为组件
  - 组件是存储为值而不是实体引用的对象
  - HAS-A

- 事务管理

- many-to-one

- one-to-one

- HQL与标准查询语言

- 命名查询

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

// POJO // Plain Old java Object
```

- 使用

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
瞬间状态
持久状态
托管状态

// Hibernate缓存
首先在缓存里查询，查不到再用SQL查

一级缓存 // session的缓存
二级缓存
// SessionFactory的缓存 可在多个session间共享
// ehcache.xml用于设置缓存策略 位于project/etc

延迟加载策略

// Hibernate实体关联关系映射
多对一单向 关联映射
多对一双向 关联映射
一对一主键 关联映射  
一对一外键 关联映射
多对多    关联映射 // 学生选修课程
继承映射 // Hibernate

// Hibernate查询语句
// HQL // 支持但请避免DML语句操作 可能导致脏数据
select * from User user where user.id > 10 order by user.id desc

动态赋值 // ? 与 :infoId
分页查询
```

# SSH工程结构

```shell
core
persistent
util
```

# 信息管理系统

- 使用SpringMVC+Spring+Hibernate开发人员信息管理功能 <https://www.imooc.com/video/9338>
- 学生信息管理系统 <https://www.imooc.com/video/9020>

# 基于SSH实现员工管理系统

- <https://www.imooc.com/video/12474>
- <https://www.imooc.com/video/12461>
