#### **ch1 JSP概述**
* [代码下载](http://download.csdn.net/detail/gaoyuyihao/9249135)
```
Java里，类是最小单位，
不允许在类外面定义变量和方法
没有 全局变量的 概念
权限修饰

Serlet是一种服务端Java技术
继承自javax.servlet.http.HttpServlet类

JavaBean技术
独立的组件
分可视化与不可视化

JSP 安全性高，跨平台
将静态HTML代码和动态数据区分开来
预编译，JSP页面在被服务器执行前,都是已经编译好的，
并且通常只进行一次编译
若没修改过，直接调用编译好的

JSP的处理过程...

与其他语言的比较
CGI 
ASP COM组件 平台限制 IIS
ASP.NET Web Form 强大的窗体
PHP 

// JSP程序开发模式
单纯的JSP页面编程

JSP + JavaBean编程
JSP + Servlet + JavaBean编程
MVC模式
```

#### **ch2 JSP开发基础**
```
析构方法 finalize()

强制类型转换 高级数据类型赋值给低级类型变量

Vector类
一元集合，可以加入重复数据，
可以方便地对集合内的数据进行curd

throw throws
```
#### **ch3-4 JSP语法与内置对象**
```
补充至 《JSP基础》
```

#### **ch5 JavaBean技术**
```
JavaBean 
家具
JavaBean组件与企业级JavaBean(EJB)

工具JavaBean
可以实现业务逻辑与页面显示的分离
转化 < >

实现java.io.Serializable接口
不同的操作系统
序列化
JSP中的JavaBean不用实现这个接口

类中必须存在一个无参数的构造函数

索引属性 通过索引访问属性

<jsp:setProperty>的property取值为 *
一 一赋予Bean中与参数具有相同名字的属性

在JSP页面中应用 工具JavaBean
```

#### **ch6 Servlet技术**
```
在web.xml中进行描述
在server 3.0中也可以通过注解进行配置

// Servlet作用特点
Servlet不仅可以生成HTML脚本
也可以生成二进制表单进行输出

Servlet可以是多参与者的游戏服务器

当允许单连接方式下进行数据传输时
applet

当允许客户机和服务器简单、高效地执行会话的情况下
通过定制协议进行通信

将定制的处理提供给所有服务器的标准程序

在各个程序之间共享数据

// Servlet的生命周期
Servlet部署在容器里
它的生命周期由容器管理

init()
HttpServletRequest HttpServletResponse -> sercive()
destory

// Servlet与JSP的区别
Servlet是服务端的Applet
Servlet必须编译后才能运行
JSP基于Servlet

// Servlet简单演示
<servlet>
    <servlet-name>MyServlet</servlet-name>
    <servlet-class>com.MyServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>MyServlet</servlet-name>
    <url-pattern>/textServlet/*</url-pattern>
</servlet-mapping>

<load-on-startup> 启动装入优先权

// Servlet 3.0利用注释来配置Servlet
@WebServlet("/textServlet");
访问链接 http://localhost:8686/LearnServlet/textServlet

// servlet实现请求的转发，还可以通过
javax.servlet.RequestDispatcher类的forward方法

// Servlet API编程常用接口和类
Servlet接口
HttpServlet接口 针对Web服务器的Servlet
ServletConfig接口 配置对象，初始化时传递信息
HttpServletRequest接口
HttpServletResponse接口
GenericServlet接口 抽象类
```

#### **ch7 JSP实用组件**
* [Common-FileUpload](http://commons.apache.org/proper/commons-fileupload/)
```
// JSP文件操作
Common-FileUpload组件
需要commons-io包的支持

enctype="multipart/form-data"

// 发送E-mail

// JSP动态图表

// JSP报表

```

#### **ch8 JSP数据库应用开发**
* [菜鸟教程-JSP连接MySQL](http://www.runoob.com/jsp/jsp-database-access.html) JSTL
```
SQL Server2008  Access 
MySQL 
关系型数据库

Oracle
以RDBMS为核心的一批软件产品
分布式结构
支持大数据库、多用户的高性能的事务处理
系统维具有很高的性能

Sybase PostgreSQL DB2

// JDBC
驱动程序接口Driver
java.sql.Driver

驱动程序管理器DriverManager
Connection
Statement
执行动态SQL语句接口 PreparedStatement
执行存储过程接口 CallableStatement
Resulset

// JDBC缺点
访问数据库速度
JDBC API是面向对象的，
但是通过JDBC访问数据库依然是面向关系的

// JDBC驱动程序
JDBC-ODBC Bridge
必须将ODBC二进制代码加载到使用该驱动程序的每个客户机上
最适合企业网 
Java编写的3层结构的应用程序服务代码

JDBC-Native API Bridge
调用本地的native程序

JDBC-middleware
完全利用Java编写的JDBC驱动
最为灵活
必须处理Web所提出的安全性
通过防火墙访问

Pure JDBC Driver
专用

// 连接池技术
预先先建立好一定数量的数据库连接
模拟存放在一个连接池中
由连接池负责对这些数据库连接进行管理

免去每次在访问数据库之前建立数据库连接开销

同时这项技术解决了数据库连接数量限制的问题

要及时调用Connection对象的close()或dispose()方法显式关闭连接

要求开发人员准确估算系统需要提供的最大数据库连接的数量

// 在Tomcat中配置连接池
sqljdbc等jar
META-INF\context.xml
JNDI Jav命名与目录接口
```

#### **ch9 JSP高级程序设计**
```
// JSP与Ajax
注意问题
中文乱码 utf-8
String name = request.getParameter("name");
out.println("姓名" + new String(name.getBytes("iso-8859-1"),"utf-8"));

浏览器兼容
AJAX框架 对象封装 避免大量重写
客户端更多的压力 性能问题

优化for循环
将DOM结点附加到文档上
减少 . 操作符的使用

// EL表达式及标签
Expression Language 表达式语言

计算和输出Java对象的简单语言
开发JSP应用程序的新途径

命名空间 PageContext对象
在EL中可以执行关系、逻辑、算数运算
扩展函数可以与Java类的静态方法进行映射
在表达式中可以访问JSP的4个作用域

isELIgnored="true"

\${5+3} // 输出 ${5+3} 而不是 8

// EL 运算符
${user.name}  ${user[name]}
${ para,.pwd1 == param.pwd2 }

// 字符串连接
${"a" + "b"} // 错误
${"a"}${"b"} // 正确

EL的条件运算符功能比较弱
一般用JSTL替代

// EL表达式中的隐含对象
pageContext隐含对象
访问环境信息的隐含对象
访问作用域范围的隐含对象

// EL表达式的保留字

// JSTL标准标签库
JavaServer Pages Standard Tag Library
取代传统JSP程序中嵌入Java代码的做法
提高程序的可维护性

核心标签库 ：表达式 条件 循环 URL操作
格式标签库 I18N 格式化数字和日期
SQL标签
XML标签库
函数标签库 字符串操作

<c:set>的4种语法格式

// 自定义标签库的开发
就是一个扩展的Java类
运行一个或两个接口的JavaBean

描述性的配置文件

加快Web应用开发的速度
代码重用
更加容易维护与升级

实现自定义的Java类文件 + 自定义标签的TLD文件构成
BodyTag接口

<name> <tag-class>建立自定义标签和映射类之间的对应关系

// JSP文件中引用自定义标签
<%@ taglib uri="/WEB-INF/showDate.tld" prefix="taglib.prefix"%>
或者在web.xml中配置
```
