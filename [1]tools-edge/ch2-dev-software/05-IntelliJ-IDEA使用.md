# IDEA

- IntelliJ IDEA 从入门到上瘾 <https://www.jianshu.com/p/9c65b7613c30>
- IntelliJ-IDEA-Tutorial <https://github.com/judasn/IntelliJ-IDEA-Tutorial>

```shell
# 编译
File ->Other Settings -> Default Settings -> Auto Import
Ctrl+Shift+F9 
```

- IDEA神器   <https://www.imooc.com/video/16215>
    
    - 打开最近的文件
    - 书签
    - emacsIDEAs插件
    - ...

- 正确使用 IntelliJ IDEA 的方式 <https://juejin.im/post/590050f98d6d810058afc85f>

# 常用操作

- Intellij IDEA打开多项目窗口 @old https://blog.csdn.net/u012050154/article/details/53535637
- IntelliJ IDEA 中如何查看一个类的所有继承关系 https://blog.csdn.net/qq_27093465/article/details/52857307
- Intellij IDEA 14 自动生成 serialVersionUID

```
Preferences->Editor->Inspections->Serialization issues->Serializable class without ’serialVersionUID’勾上
```

- 自动定位类在工程中的位置 https://zhidao.baidu.com/question/244544584549976524.html

```
Autoscroll from scroll
```
- 返回到上次或下次查看的地方
- dao | entity 右键自动生成 (或者直接lombok)
- 右键将文件标记为source root
- 右键add as library
- 将node_modules排除 <https://www.cnblogs.com/chengwb/p/6183440.html>
- 设置为不提示Could not autowire (提示级别) <https://www.cnblogs.com/jamieYu/p/5681886.html>

  - 将spring 的severity的值设置为"warning"

- maven修改一下settings.xml 因为IDEA有内置的
- IntelliJ IDEA文件头注释模板 <http://blog.csdn.net/totally123/article/details/53466011>

- 使用正则表达式进行搜索替换

```html
tppabs="h[^"]*"
/\*tpa=.*\*/
```

# 常用快捷键

- sout 
- <http://www.open-open.com/lib/view/open1396578860887.html>

- 常用

  - alt + insert 新建文件

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

  - Ctrl+右键 直接打开实现类
  - Ctrl + SHift + A
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
  - Alt + Enter

- 其他

  - alt + num 打开侧边栏



# 常用插件

- Java程序员必备的Intellij插件 https://juejin.im/entry/5aea80346fb9a07ab9794f06
  - GSONFormat
  - FindBugs
  - Maven Helper 用于分析jar包冲突
  - check-style 代码质量
  - Background Image Plus 背景图片
  - grep-console
  - GenerateAllSetter
  - MyBatisCodeHelperPro $

- 自带的rest client

```
ctrl+shift+A -> test restful web service
```

# 导入Eclipse

- Java SE

  - 指定JDK
  - 指定out目录

- IDEA导入Eclipse Java Web项目

  - 超详细 <http://blog.csdn.net/github_34123799/article/details/71699203>
  - Librarie -> 上面绿色加号→Java
  - Facets -> Put into Output Root

- 非法字符: '\ufeff' <http://blog.csdn.net/qq55214/article/details/50478081>

- IntelliJ IDEA里缺少javax.servlet IntelliJ IDEA里缺少javax.servlet (add lib)

# 热部署 

- <https://www.imooc.com/video/16066>
- twitter激活
- <https://zeroturnaround.com/software/jrebel/quickstart/intellij/>
- SpringBoot项目使用JRebel热部署 <http://blog.csdn.net/qq_31230915/article/details/78069148>
- <https://www.cnblogs.com/yjmyzz/p/use-devtools-of-spring-boot-framework.html>

```shell
IDEA设置 默认项一定要勾上此项，否则无效
Build project automatically
```

- spring-boot-devtools
- 或者jRabel  
- SpringBoot通过配置devtools实现热部署 https://jingyan.baidu.com/article/870c6fc367b4d7b03fe4beba.html
- @NICE spring boot 之热部署 <https://www.cnblogs.com/bingshu/p/6876030.html>
- Spring DevTools 介绍 <http://blog.csdn.net/isea533/article/details/70495714>

```xml
<dependency>  
  <groupId>org.springframework.boot</groupId>  
  <artifactId>spring-boot-devtools</artifactId>

  <!-- here -->
  <optional>true</optional>  
</dependency>

<plugin>  
    <groupId>org.springframework.boot</groupId>  
    <artifactId>spring-boot-maven-plugin</artifactId>  

    <!-- here -->
    <configuration>  
        <fork>true</fork>
        <addResources>true</addResources>  
    </configuration>  
</plugin> 

<!-- 
  IDEA设置
  File->Setting->Build,…->Compiler  =>  project automatically
  ctrl+shift+a Registry => compiler.automake.allow.when.app.running 
-->
```

# 常见问题

- Error:java: Internal compiler error: java.lang.Exception: java.lang.NoClassDefFoundError解决 
    - https://www.cnblogs.com/jpfss/p/9126186.html

```
IDEA中File-->settings-->Bulid Execution Deloyment-->Complier-->Java Complier中的
user complier由原来的Eclipse改为javac即可
```

- Unable to open debugger port(127.0.0.1:60157):java.net.SocketException"socket closed
    - https://blog.csdn.net/quanbugu/article/details/80180041
    - 修改端口号
    - 或者shell 杀死进程

```shell
netstat -aon|findstr “1099”
taskkill -f -pid 15380
```

- 首先确定java7 java8版本
- 修改IntelliJ IDEA中Maven项目的默认JDK版本 https://blog.csdn.net/geekun/article/details/51325510
- IDEA 内存溢出问题 http://blog.csdn.net/fyqcdbdx/article/details/46788915

```
-server -XX:PermSize=128M -XX:MaxPermSize=256m
```

- 找不到符号 -> utf-8统一编码
- 忽略node_modules https://www.cnblogs.com/chengwb/p/6183440.html
- idea的环境变量设置(Enviroment variables) https://www.cnblogs.com/gradven/p/7228142.html
- 处理快捷键冲突

- https://bbs.csdn.net/topics/391836701

```
过去这么久了。都没有满意答案嘛，换了新公司遇到了这个问题，浪费了好多时间，个人总结的原因是：
如果项目在Myeclipse或者eclipse里面跑起没问题，idea遇到编译错误，
多半是编译问题，这里引用大佬的一句话，Eclipse编译代码时，
使用的是自带的JDT（Java Development Tools），
而Maven默认使用的是JAVA_HONE中的javac，
而javac相对JDT的检查机制来说，更加的严格，
所以导致Eclipse可以编译通过，而用Maven编译会报错的结果。
我们的idea编译默认是Javac。这就是为什么Myeclipse跑起没问题了。
解决办法如下：

在idea找到File | Settings | Build, Execution, Deployment | Compiler | Java Compiler，
右侧的Use compiler项中把Javac 改成Eclipse
```

