# IDEA

- IntelliJ IDEA 从入门到上瘾 <https://www.jianshu.com/p/9c65b7613c30>

  - 没有工作空间的概念
  - 自动编译

```shell
File ->Other Settings -> Default Settings -> Auto Import
Ctrl+Shift+F9
```

- IntelliJ-IDEA-Tutorial <https://github.com/judasn/IntelliJ-IDEA-Tutorial>
- IDEA神器 - mooc

  - 界面介绍 <https://www.imooc.com/video/16215>
  - 无处不在的跳转

    - 打开最近的文件
    - 书签
    - emacsIDEAs插件

- 正确使用 IntelliJ IDEA 的方式 <https://juejin.im/post/590050f98d6d810058afc85f>

# 常用操作

- dao | entity 右键自动生成 (或者直接lombok)
- 右键将文件标记为source root
- 右键add as library
- 将node_modules排除 <https://www.cnblogs.com/chengwb/p/6183440.html>
- 设置为不提示Could not autowire (提示级别) <https://www.cnblogs.com/jamieYu/p/5681886.html>

  - 将spring 的severity的值设置为"warning"

- maven修改一下settings.xml 因为IDEA有内置的

# 常用配置

- IntelliJ IDEA文件头注释模板 <http://blog.csdn.net/totally123/article/details/53466011>

# IDEA常用插件

- 自带的rest client
- Java程序员必备的Intellij插件 https://juejin.im/entry/5aea80346fb9a07ab9794f06
  - FindBugs
  - GenerateAllSetter
  - MyBatisCodeHelperPro
  - Maven Helper 用于分析jar包冲突
  - check-style 代码质量

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

# 常见问题

- IDEA 内存溢出问题

```
http://blog.csdn.net/fyqcdbdx/article/details/46788915
-server -XX:PermSize=128M -XX:MaxPermSize=256m
```

- 找不到符号 -> utf-8统一编码
- 忽略node_modules https://www.cnblogs.com/chengwb/p/6183440.html

# 使用正则表达式进行搜索替换

```html
tppabs="h[^"]*"
/\*tpa=.*\*/
```

# 热部署

- 节约生命，使用热部署
- <https://www.imooc.com/video/16066>

- jRebel 热部署插件

- twitter激活
- <https://zeroturnaround.com/software/jrebel/quickstart/intellij/>

- SpringBoot项目使用JRebel热部署 <http://blog.csdn.net/qq_31230915/article/details/78069148>

- <https://www.cnblogs.com/yjmyzz/p/use-devtools-of-spring-boot-framework.html>

```shell
IDEA设置 默认项一定要勾上此项，否则无效
Build project automatically
```

# 常用快捷键

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

# 处理快捷键冲突

# 与WebStorm的区别

- 超集 
- 如果同时也要写后台用IDEA
