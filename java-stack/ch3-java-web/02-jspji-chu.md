#### **JSP基础**

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

#### 注释与脚本标识

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

#### include 动作和include指令区别

```java
如果要在JSP页面中显示大量的文本文字，可以将文字写入txt
再使用include指令或标识

但是include指令包含jsp文件
contentType要一直，否则报错
```

| 描述 | include指令 | include 动作 |
| --- | --- | --- |
| 语法 | &lt; % @ include file=""/&gt; | &lt; jsp:include page="url" flush="true"/&gt; |
| 发生时间 | 页面转换期间 | 请求期间 |
| 包含内容 | 文件实际内容 | 页面的输出 |
| 转化servlet | 一个servlet | 2个servlet |
| 编译时间 | 较慢 | 较快 |
| 执行时间 | 稍快 | 较慢--每次资源必须被编译 |

#### JSP生命周期

```
jspService()是用来处理客户端请求的，
对于每一个请求，服务器会创建一个新的线程来处理该请求。
以多线程方式执行大大降低对系统的资源需求，
提高系统的并发量和缩短了响应时间

servlet是常驻在服务器内存中。
```

#### Javaben的使用

* 像普通的java类一样，创建javabean;
  * 在jsp使用动作标签来使用 javaben
  * 四大作用域
    * page ，仅当前页面有效
    * request ,通过httpRequest.getAttribute\(\)获取jvabean对象
    * session  httpSession.getAttribute\(\)
    * application 只要没有关闭服务器就会一直存在

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

#### cookie

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

#### JSP内置对象

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

#### 参考

* [当Java遇见HTML](http://www.jianshu.com/p/c7260f7588c5)

```

```



