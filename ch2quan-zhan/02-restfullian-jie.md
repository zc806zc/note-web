#### RESTful

```js
Representational State Transfer
一组架构约束条件和原则

// RESTful API
POST
GET
PUT
DELETE


```

#### PHP实现

* 基础
  * [runoob-php-restful](http://www.runoob.com/php/php-restful.html) \| [restful-成九](http://www.cnblogs.com/luyucheng/p/6016801.html)

```php
// 原生 PHP实现

// conf开启rewrite模块
LoadModule rewrite_module modules/mod_rewrite.so 

// chrome postman插件
GET  http://localhost/restful/class  列出所有班级
GET  http://localhost/restful/class/1    获取指定班的信息
POST http://localhost/restful/class?name=SAT班&count=23 新建一个班
PUT  http://localhost/restful/class/1?name=SAT班&count=23  更新指定班的信息（全部信息）
PATCH  http://localhost/restful/class/1?name=SAT班    更新指定班的信息（部分信息）
DELETE  http://localhost/restful/class/1 删除指定班
```

#### JAVA实现

* 基础

```java

```



