####  **Java编程风格**
* 参考
	* [阿里巴巴Java开发手册](https://yq.aliyun.com/articles/69327?utm_campaign=javac&utm_medium=images&utm_source=renyimen&utm_content=m_10068)
    * [博客 - yakov](http://www.cnblogs.com/yakov/archive/2011/12/19/the_elements_of_java_style.html)

------------

* 格式
~~~
统一采用utf-8编码

断开很长的句子,例在逗号的地方另起一行
加空白行：每个逻辑上独立的方法和代码段之间
不要使用Tab
~~~

+ 命名规则
	* [关于 Java 数组的 12 个最佳方法](http://www.iteye.com/news/28296)
~~~
缩写词的第一个字母大写
类和接口名中的每个单词的第一个字母大写

包命名：域名倒序 小写

// 类型/属性（noun）命名
具有成组相关属性，
静态服务或者常量的类名字使用复数形式
  
// 方法（verb）命名
驼峰命名
set，get，is开头的默认

// 变量命名
集合引用名要用复数形式
为临时变量使用一套标准前缀

// 常量命名
大写，下划线连接

// 注释
文档注释 描述
标准注释 
单行注释 细节

+ 避免用flag来命名状态变量，用is来命名逻辑变量。

  ```
  if(isClosed){ code; }
  ```
        
数组声名 int[] arr = new int[10];        
~~~


    

