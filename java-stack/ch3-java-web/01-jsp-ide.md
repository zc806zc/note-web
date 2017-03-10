#### **JSP开发环境搭建**
* [JSP开发的工具下载与环境搭建](http://www.jianshu.com/p/5b022371de26)
	* [JDK环境变量配置](http://jingyan.baidu.com/article/6dad5075d1dc40a123e36ea3.html)
    * [工具云盘下载 提取密码：vipr](http://pan.baidu.com/s/1o7pUJOm)
    * [ECLIPSE - 新建jsp页面默认模板设置](http://blog.csdn.net/peixuh/article/details/12623547)
    * [使Eclipse下支持编写HTML/JS/CSS/JSP页面的自动提示。](http://www.cnblogs.com/zhuawang/p/5596455.html)
~~~
// 准备环境
JDK
Eclipse Java EE
tomcat 小型系统 轻量级 7.x版本

// 安装中的问题
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
~~~

* * * * *
* Atom（编辑） + Eclipse（IDE）
	* Atom autocomplete-jsp插件
    
* * * * *
* Intellij IDEA
	* [使用IntelliJ IDEA开发JavaWeb项目](http://youthlin.com/20151128.html)
~~~
选择Java Enterprise栏的Web Application
~~~