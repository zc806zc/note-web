# IDE

- IntelliJ IDEA
- NetBeans | Eclipse
- eclipse color theme <http://download.csdn.net/download/knockheart/6690825>

# IDEA

- <https://github.com/judasn/IntelliJ-IDEA-Tutorial>

- 正确使用 IntelliJ IDEA 的方式 <https://juejin.im/post/590050f98d6d810058afc85f>

```javascript
// idea 内存溢出问题
http://blog.csdn.net/fyqcdbdx/article/details/46788915
-server -XX:PermSize=128M -XX:MaxPermSize=256m
```

# jRabel 热部署插件(节约生命)

- twitter激活
- <https://zeroturnaround.com/software/jrebel/quickstart/intellij/>

- SpringBoot项目使用JRebel热部署 <http://blog.csdn.net/qq_31230915/article/details/78069148>

# 常用快捷键

- <http://www.open-open.com/lib/view/open1396578860887.html>

- 结构排版

  - Ctrl+D，复制行
  - Ctrl+E，最近的文件
  - Ctrl+Shift+E，最近更改的文件
  - Ctrl+F12，可以显示当前文件的结构
  - Ctrl+Alt+I，将选中的代码进行自动缩进编排，这个功能在编辑 JSP 文件时也可以工作
  - Ctrl+Shift+Space，自动补全代码
  - Ctrl+Alt+T，可以把代码包在一个块内，例如：try/catch
  - Alt+Shift+Up/Down，上/下移一行
  - Shift+F6，重构 – 重命名
  - Ctrl+Alt+left/right，返回至上次浏览的位置
  - Ctrl+Shift+Up/Down，向上/下移动语句
  - Ctrl+Shift+Backspace，跳转到上次编辑的地方
  - Ctrl+Shift+J，整合两行
  - Ctrl+Enter，上插一行
  - Shift+Enter，向下插入新行
  - Ctrl+"+/-"，当前方法展开、折叠
  - Ctrl+Shift+"+/-"，全部展开、折叠

- 功能

  - Ctrl+Alt+Y，(Maven)同步
  - Alt+F8，计算变量值
  - Ctrl+Enter，导入包，自动修正
  - Ctrl+Alt+O，优化导入的类和包
  - Alt+Insert，可以生成构造器/Getter/Setter
  - Ctrl+Q，显示注释文档
  - Alt+Up/Down，在方法间快速移动定位
  - Ctrl+Alt+Space，类名自动完成
  - Alt+F7，查找整个工程中使用地某一个类、方法或者变量的位置
  - Ctrl+Alt+Y，同步

# 处理快捷键冲突

# 与WebStorm的区别

# Spring Boot配置

- <https://github.com/chenfromsz/spring-boot-hello> 配置演示
- JDK要求1.8以上的版本，Tomcat必须是8.0以上的版本
- RUN配置的是spring boot 不是tomcat
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

# 多模块 + spring boot

- IDEA创建多个模块MavenSpringBoot项目

  - <https://segmentfault.com/a/1190000011367492>
  - <http://blog.csdn.net/willjgl/article/details/77773634>
  - <http://blog.csdn.net/Message_lx/article/details/54632947>
  - 示例 <https://github.com/williamHappy/tao-shopping-mall>

- 基于maven使用IDEA创建多模块项目 <http://blog.csdn.net/williamhappy/article/details/54376855>

- 模块

```java
common-utils
```

- 热部署 spring-boot-devtools

  - (推荐) <https://www.cnblogs.com/bingshu/p/6876030.html>
  - <http://blog.csdn.net/isea533/article/details/70495714>
  - jRabel

- 注意

  - 父项目必须为pom
  - xxx-parent文件结构是否包含这些模块
  - 删除父项目的src
  - Mark As Source Root
