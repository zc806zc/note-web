# **JSP-开发环境搭建**

- [JSP环境搭建](http://www.jianshu.com/p/5b022371de26)

  - [JDK环境变量配置](http://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html) | [云盘下载 密码vipr](http://pan.baidu.com/s/1o7pUJOm)
  - [ECLIPSE - 新建JSP模板](http://blog.csdn.net/peixuh/article/details/12623547) | [Eclipse支持HTML自动提示](http://www.cnblogs.com/zhuawang/p/5596455.html)
  - [使用IntelliJ IDEA开发JavaWeb项目](http://youthlin.com/20151128.html)
  - [Idea导出war](http://blog.csdn.net/thehide/article/details/52042487) | [Tomcat-IDEA虚拟目录](http://www.cnblogs.com/zhuiyi/p/5900092.html)| [JavaBean classes路径调整](http://www.itnose.net/detail/6272750.html)

```
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
