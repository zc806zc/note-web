# Idea

- <https://github.com/judasn/IntelliJ-IDEA-Tutorial>

```javascript
// idea 内存溢出问题
http://blog.csdn.net/fyqcdbdx/article/details/46788915
-server -XX:PermSize=128M -XX:MaxPermSize=256m
```

# JSP-开发环境搭建

- [JSP环境搭建](http://www.jianshu.com/p/5b022371de26)

  - [JDK环境变量配置](http://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html) | [云盘下载 密码vipr](http://pan.baidu.com/s/1o7pUJOm)
  - [ECLIPSE - 新建JSP模板](http://blog.csdn.net/peixuh/article/details/12623547) | [Eclipse支持HTML自动提示](http://www.cnblogs.com/zhuawang/p/5596455.html)
  - [使用IntelliJ IDEA开发JavaWeb项目](http://youthlin.com/20151128.html)
  - [Idea导出war](http://blog.csdn.net/thehide/article/details/52042487) | [Tomcat-IDEA虚拟目录](http://www.cnblogs.com/zhuiyi/p/5900092.html)| [JavaBean classes路径调整](http://www.itnose.net/detail/6272750.html)

```javascript
// 准备环境
JDK
Eclipse Java EE
tomcat 小型系统 轻量级 7.x版本

// 安装中可能遇到的问题
配置JAVA环境变量
tomcat端口问题
eclipse与tomcat的绑定  window|preferences
绑定后工程放在eclipse工作环境下，不用单独打开tomcat了

// 端口问题
netstat -ano
找到对应端口的pid
再到 任务管理器 去结束进程


// 新建工程文件
File|New|Dynamic Web Project
WebContent下new JSP file

// UTF-8编码问题
charset 与 pageEncoding建议都改成UTF-8

包括 浏览器上页面的显示编码
文件的存储编码
还有在编辑器上的显示编码



// 编辑器/IDE
// (首选) Intellij IDEA
注意选择Java Enterprise栏的 Web Application
JSP模板设置 http://www.phperz.com/article/15/0923/159051.html

// 记得及时刷新
因为Java不是解释型的 千万别被这个反复坑到...

// (次次选)Atom + Eclipse
Atom的autocomplete-jsp插件
```

![](/assets/idea-refresh978.png) ![](/assets/auto453.png)![](/assets/webroot-add899.png)![](/assets/classes-path785.png)![](/assets/artifacts-setting432.png)

# JSP基础

```java
// java server page
jsp 是另一种形式的servlet

// 指令
page指令： 通常位于jsp页面的顶端，同一个页面可以有多个page指令。
include指令：将一个外部文件嵌入到jsp文件中。
taglib指令 ：使用标签定义新的自定义标签。

<%@ page 属性=“属性值”>
<%@ include file="url" %>

// include动作
<jsp:include page="url" flush="true"/>

// 动作标识与指令标识
动作标识是在请求处理阶段按照在页面中出现的顺序被执行的
只有在它们被执行的时候才会去执行自己所具有的的功能
而指令标识
在JSP页面被执行是首先进入翻译阶段
程序会先查找页面的指令标识并将它们转换成servlet
所以这些指令标识会首先执行，从而设置整个JSP页面

// 转发请求 request对象会保留并带到目标页面
// 不同于请求重定向
<jsp:forward page="user.jsp">
  <jsp:param name="email"  value="1233@154.com"/>
</jsp:forward>

plugin fallback param
codebase属性
```

# 注释与脚本标识

```java
<!-- html注释 -->                  // 客户端可见
在HTML注释中可嵌入JSP表达式

隐藏注释 <%-- jsp注释 --%>  // 客户端不可见
// jsp 脚本单行注射          // 客户端不可见
/* jsp 脚本多行注释 ) */    // 客户端不可见

// jsp脚本
<%   java 代码 %>

// jsp声名
<%!
 String s="adele";
 int add(int x,int y){
    return x+y;
 }
%>

// jsp表达式
<%!
 String s="adele";
%>
<h2>  hello,<%=s %> </h2>
```

# include 动作和include指令区别

```java
如果要在JSP页面中显示大量的文本文字，可以将文字写入txt
再使用include指令或标识

但是include指令包含jsp文件
contentType要一直，否则报错
```

描述        | include指令               | include 动作
--------- | ----------------------- | ---------------------------------------
语法        | < % @ include file=""/> | < jsp:include page="url" flush="true"/>
发生时间      | 页面转换期间                  | 请求期间
包含内容      | 文件实际内容                  | 页面的输出
转化servlet | 一个servlet               | 2个servlet
编译时间      | 较慢                      | 较快
执行时间      | 稍快                      | 较慢--每次资源必须被编译

# JSP生命周期

```
jspService()是用来处理客户端请求的，
对于每一个请求，服务器会创建一个新的线程来处理该请求。
以多线程方式执行大大降低对系统的资源需求，
提高系统的并发量和缩短了响应时间

servlet是常驻在服务器内存中。
```

# Javaben的使用

- 像普通的java类一样，创建javabean;

  - 在jsp使用动作标签来使用 javaben
  - 四大作用域

    - page ，仅当前页面有效
    - request ,通过httpRequest.getAttribute()获取jvabean对象
    - session httpSession.getAttribute()
    - application 只要没有关闭服务器就会一直存在

```java
当程序执行<jsp:setProperty>标识时，
会按照page request session application的顺序来查找Bean示例

getProperty
若指定值userName
那么Bean中必须存在getUserName()方法

<jsp:useBwan id="" class="" scope="" />
<jsp:setProperty name="javabean 是例"  property="*"/>(跟表单关联)
<jsp:setProperty name="javabean 是例"  property="javaben 属性名"/>(跟表单关联)
<jsp:setProperty name="javabean 是例"  property="javaben 属性名"  value=""/>(手动设置)
<jsp:setProperty name="javabean 是例"  property="javaben 属性名"  param="request对象参数"/>
// (跟request参数关联)
<jsp:getProperty name="" property=""/>


<body>
    <jsp:useBean id="myUsers" class="com.po.Users" scope="page"/>
    <h1>setProperty动作元素</h1>
    <hr>
   <!--根据表单自动匹配所有的属性 -->
   <%--
   <jsp:setProperty name="myUsers" property="*"/>  
   --%>
   <!--根据表单匹配所有部分的属性 -->
   <%--
   <jsp:setProperty name="myUsers" property="username"/>  
   --%>
   <!--根表单无关，通过手工赋值给属性 -->
   <%--
   <jsp:setProperty name="myUsers" property="username" value="lisi"/>
   <jsp:setProperty name="myUsers" property="password" value="888888"/>
   --%>
   <!--通过URL传参数给属性赋值 -->
   <jsp:setProperty name="myUsers" property="username"/>
   <jsp:setProperty name="myUsers" property="password" param="mypass"/>
   <!-- 使用传统的表达式方式来获取用户名和密码 -->
   <%--     
       用户名：<%=myUsers.getUsername() %><br>
       密码：<%=myUsers.getPassword() %><br>
   --%>
   <!-- 使用getProperty方式来获取用户名和密码 -->
      用户名：<jsp:getProperty name="myUsers" property="username"/> <br>
      密码：<jsp:getProperty name="myUsers" property="password"/><br>
   <br>
   <br>
      <a href="testScope.jsp">测试javabean的四个作用域范围</a>
      <%
         request.getRequestDispatcher("testScope.jsp").forward(request, response);
      %>
  </body>
```

# cookie

```java
// 创建使用与读取
Cookie cookie=new Cookie(String ,Object);
response.addCookie(cookie);
Cookie[] cookies=request.getCookies();

// cookie的常用方法
setMaxAge();
setValue();
getName();
getValue();
getMaxAge();
```

# JSP内置对象

```java
// BS进行交互通信的控制
request 获取客户端的请求
response 对客户端进行响应
session
// HTTP是一种无状态协议
// session对象是BS的连接一直保持下去
// 销毁session invalidate()
// 会话超时管理

// 设置HTTP头可实现禁用缓存功能
要在没有任何输出发送到客户端前使用
<%response.setHeader("Cache-Control","no-store");
response.setDateHeader("Expires",0); %>

// application
WEB-INF/web.xml

// out
// flush() 刷新流
// isAutoFlush()

pageContext 获取会话范围  // 集大成者，通过它可以访问其他所有对象

// config 读取web.xml配置信息
// page 应答或请求

exception exception.getMessage()
```

# 参考

- [当Java遇见HTML](http://www.jianshu.com/p/c7260f7588c5)

````
```

# JSP开发基础

- [JSP程序设计-code-dl](http://download.csdn.net/detail/gaoyuyihao/9249135)
- Java

```java
// Java里，类是最小单位，
// 不允许在类外面定义变量和方法
// 没有 全局变量 的概念 方法属性的权限修饰特点
// 析构方法 finalize()
// 强制类型转换 高级数据类型赋值给低级类型变量

// Vector类
一元集合，可以加入重复数据，
可以方便地对集合内的数据进行curd

// throw throws
````

- JSP

```java
// Serlet
是服务端Java // 继承自javax.servlet.http.HttpServlet类

// JavaBean
独立的组件 // 分可视化与不可视化

// 为什么使用JSP 2点
1\. JSP 安全性相对更高 // 跨平台... 那谁不跨平台的?扯淡

2\. 预编译, JSP页面在被服务器执行前, 都是已经编译好的，
并且通常只进行一次编译,所以相对执行速度也快? // 若没修改过，直接调用编译好的

// JSP的处理过程...

// 与其他语言的比较
// CGI PHP
// ASP COM组件 但有平台限制 // IIS
ASP.NET Web Form 强大的窗体

// JSP程序开发模式
纯JSP ->  JSP + JavaBean(可重用) -> JSP + Servlet(类似分发器,逻辑更好) + JavaBean
-> Struts等代表的框架模式 // MVC +  准备好的实用程序
-> J2EE // 大型网站 业务逻辑更复杂 EJB 难测试

// EJB
```

# ![](/assets/j2ee-structure77283.png)

# JSP语法/内置对象

```java
// request/response
获取客户端信息
获取HTTP Headers // setHeader
重定向

// session
在线考试系统
```

# JavaBean

```java
// JavaBean
JavaBean组件与企业级JavaBean(EJB)

实现java.io.Serializable接口 序列化 // 考虑到不同的操作系统
// JSP中的JavaBean不用实现这个接口

// 类中必须存在一个无参数的构造函数
// 索引属性 通过索引访问属性

// 分为2类
toolbean // 可以实现业务逻辑与页面显示的分离 eg . 转化 < >
valuebean

<jsp:setProperty>的property取值为 * // 一 一赋予Bean中与参数具有相同名字的属性

// Bound/Constrained 监听器
主要是图形编程的JavaBean中 JSP较少用

// javabean实现邮箱验证
// Javabean统计登录次数
```

# Servlet

```java
主要用于B/S结构,用来充当一个请求控制处理的角色

// Servlet使用
// 在web.xml中进行描述
在server 3.0中也可以通过注解进行配置

<servlet>
    <servlet-name>MyServlet</servlet-name>
    <servlet-class>com.MyServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>MyServlet</servlet-name>
    <url-pattern>/textServlet/*</url-pattern>
</servlet-mapping>

<load-on-startup> 启动装入优先权

@WebServlet("/textServlet");
访问链接 http://localhost:8686/LearnServlet/textServlet

// Servlet作用特点

// Servlet不仅可以生成HTML脚本
// 也可以生成二进制表单进行输出
Servlet可以是多参与者的游戏服务器
// 当允许单连接方式下进行数据传输时
// applet

// 当允许客户机和服务器简单、高效地执行会话的情况下
通过定制协议进行通信

将定制的处理提供给所有服务器的标准程序
在各个程序之间共享数据

// Servlet的生命周期
Servlet部署在容器里, 它的生命周期由容器管理

init()
HttpServletRequest HttpServletResponse -> sercive()
destory

// Servlet与JSP的区别
Servlet是服务端的Applet
Servlet必须编译后才能运行
JSP基于Servlet

// servlet实现请求的转发，还可以通过
javax.servlet.RequestDispatcher类的forward方法

// Servlet API编程常用接口和类
Servlet接口
HttpServlet接口 针对Web服务器的Servlet
// ServletConfig接口 配置对象，初始化时传递信息
HttpServletRequest接口
HttpServletResponse接口
// GenericServlet接口 抽象类

// 用Servlet处理表单
// Servlet过滤器 // 身份验证
// Servlet监听器 // 实现同一用户只能有一个在线
```

# JSP实用组件

- [Common-FileUpload](http://commons.apache.org/proper/commons-fileupload/)

```java
// JSP文件操作
Common-FileUpload // 需要commons-io包的支持
// enctype="multipart/form-data"
1\. 实现限制上传文件的类型
2\. 不使用组件实现 上传下载

// Java Mail发送E-mail
// JSP动态图表 JFreeChat
// JSP报表

// XML操作
DOM解析器
SAX解析器
DOM4J
JDOM
```

# JSP数据库

- [JSP连接JSTL-MySQL](http://www.runoob.com/jsp/jsp-database-access.html)

```java
// SQL Server2008  Access
// MySQL  关系型数据库

// Oracle
以RDBMS为核心的一批软件产品
分布式结构
支持大数据库、多用户的高性能的事务处理
系统维具有很高的性能

// 其他 Sybase PostgreSQL DB2

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

# JSP与AJAX

```java
// 中文乱码 utf-8
// String name = request.getParameter("name");
// out.println("姓名" + new String(name.getBytes("iso-8859-1"),"utf-8"));

// 浏览器兼容
使用AJAX框架 // 对象封装 避免大量重写

// 客户端更多的压力 // 性能问题
优化for循环
将DOM结点附加到文档上
减少 . 操作符的使用

// AJAX实现注册时用户名的查重
// AJAX级联
```

# JSTL/EL

```java
\ ${user[user-name]}

// ignore的 2种方式
page
web.xml

// EL输出数组
// EL获取表单 session JavaBean属性...

// EL函数

// JSTL
<c:catch> // 捕获异常
<c:import>
<c:url>
<c:redirect>

// JSTL实现用户登录(表单)

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
${"a"} ${"b"} // ${"a" + "b"} // 错误


// EL的条件运算符功能比较弱, 用JSTL替代

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

# 日志/参考

```java
// JSP程序设计 第2版 郭珍 王国辉 // 我们的教材，略有错漏，但相对还好
Java Web开发实践教程 王占中 崔志刚 // 感觉略厚
```
