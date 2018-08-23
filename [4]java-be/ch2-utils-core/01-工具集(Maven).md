# 工具推荐 | jar包

- 常用jar包的maven依赖于详解 https://blog.csdn.net/q343509740/article/details/80432671
- 代码树 
  - 小众, 讲web开发工具的排行 
  - <http://www.codeyyy.com/java/index.html>

# Spring 

```xml
<!--Spring相关配置-->

<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context-support</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webmvc</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>${spring.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jms</artifactId>
    <version>${spring.version}</version>
</dependency>
<!--Spring security(企业安全权限管理)-->
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-web</artifactId>
    <version>${spring-security.version}</version>
</dependency>
<dependency>
    <groupId>org.springframework.security</groupId>
    <artifactId>spring-security-config</artifactId>
    <version>${spring-security.version}</version>
</dependency>
<!--Spring session(采用redis)-->
<dependency>
    <groupId>org.springframework.session</groupId>
    <artifactId>spring-session-data-redis</artifactId>
    <version>1.3.0.RELEASE</version>
</dependency>
```

# Spring Boot

```xml
...
```

---

# 安全

- shiro

```xml
<!-- shiro （安全验证框架）-->
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-core</artifactId>
    <version>${shiro.version}</version>
</dependency>
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-web</artifactId>
    <version>${shiro.version}</version>
</dependency>
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-quartz</artifactId>
    <version>${shiro.version}</version>
</dependency>
<dependency>
    <groupId>org.apache.shiro</groupId>
    <artifactId>shiro-spring</artifactId>
    <version>${shiro.version}</version>
</dependency>
```

---

# 微信Java开发工具包

- <https://github.com/Wechat-Group/weixin-java-tools>
  - 可能是目前最好最全的微信Java开发工具包，支持包括微信支付、开放平台、小程序、企业号和公众号等的开发

---

# 数据解析 | JSON、XML

- fastjson <https://github.com/alibaba/fastjson>
- Jackson
  - 所依赖的jar包较少，简单易用并且性能也要相对高些
  - 将Java对象转换成json对象和xml文档，同样也可以将json、xml转换成Java对象
  - 三种处理JSON的方法

    - 流式API 类似于Stax解析器XML
    - 树模型 最灵活
    - 数据绑定

  - ObjectMapper类
  - 对象序列化
  - 数据绑定

- XStream
  - <http://www.yiibai.com/xstream/>

# 处理HTML的Java库

- JSoup <http://www.yiibai.com/jsoup/>

# 编译解析

- jadx <https://github.com/skylot/jadx>

- infer <https://github.com/facebook/infer>

  - A static analyzer for Java, C, C++, and Objective-C

---

# 支付 | 二维码扫描

- zxing <https://github.com/zxing/zxing>

---

# 报表

- JasperReports
- JFreeChat

  - <http://www.yiibai.com/jfreechart/>

# JasperReports

- 一个纯Java库，不是独立的应用程序, 不能单独运行
- 生命周期

  - 设计报表
  - 编译 JRXML -> .jasper
  - 执行(数据填充到报表)
  - 导出

- 报表区段

- 报表组

  - 报告组代表连续记录的数据源中有一些共同点

---

# 游戏

- libgdx <https://github.com/libgdx/libgdx>

---

# 日志

- logstash <https://github.com/elastic/logstash>

---

# SQL

- presto <https://github.com/prestodb/presto>

  - Distributed SQL query engine for big data

---

# 深度学习

- <https://github.com/deeplearning4j/deeplearning4j>

---

# 构建

- jenkins

  - <https://github.com/jenkinsci/jenkins>


# JVM

- vert.x <https://github.com/eclipse/vert.x>

  - Vert.x is a tool-kit for building reactive applications on the JVM

- Java RMI远程

  - 构建分布式应用程序; 它提供Java程序之间的远程通信
  - Java RMI数据库应用程序

    - <http://www.yiibai.com/java_rmi/java_rmi_database_application.html>

```java
// 服务端
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class Server extends ImplExample {
   public Server() {}
   public static void main(String args[]) {
      try {
         // Instantiating the implementation class
         ImplExample obj = new ImplExample();

         // Exporting the object of implementation class (
         //   here we are exporting the remote object to the stub)
         Hello stub = (Hello) UnicastRemoteObject.exportObject(obj, 0);  

         // Binding the remote object (stub) in the registry
         Registry registry = LocateRegistry.getRegistry();

         registry.bind("Hello", stub);  
         System.err.println("Server ready");
      } catch (Exception e) {
         System.err.println("Server exception: " + e.toString());
         e.printStackTrace();
      }
   }
}
```

---

# 测试

- selenium

  - <https://github.com/SeleniumHQ/selenium>

- jUnit

```xml
<!--Junit测试-->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
```