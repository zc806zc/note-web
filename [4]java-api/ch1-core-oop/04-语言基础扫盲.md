# 基础

- 什么情况下需要序列化

```
a）当你想把的内存中的对象写入到硬盘的时候；
b）当你想用套接字在网络上传送对象的时候；
c）当你想通过RMI传输对象的时候；
```

- @interface自定义注解 https://www.cnblogs.com/keyi/p/6797282.html

```
@interface用来声明一个注解，
其中的每一个方法实际上是声明了一个配置参数
```

- @SuppressWarnings将警告关闭
- Iterable

```
Java集合类的基本接口是Collection接口。
而Collection接口必须继承java.lang.Iterable接口。
```

![](https://images2015.cnblogs.com/blog/280044/201601/280044-20160128221600535-738941593.png)


- Locale 每一个Locale对象都代表了一个特定的地理、政治和文化地区
- enum https://www.cnblogs.com/liaojie970/p/6474733.html

- @component 

```
（把普通pojo实例化到spring容器中，相当于配置文件中的 <bean id="" class=""/>）
```

- 打印异常 logger.error(e.getStackTrace()[0].getMethodName(), e);
- Enumeration

# shiro

- realm 
    - Spring-shiro源码陶冶-AuthorizingRealm用户认证以及授权 https://www.cnblogs.com/question-sky/p/6806419.html