# RESTful

- <https://segmentfault.com/a/1190000006735330>

- <https://zhuanlan.zhihu.com/p/21644769>

- RESTful 架构风格概述 <https://juejin.im/post/57d0db282e958a0054496596>

- 什么才是真正的 RESTful 架构？ <https://blog.jimmylv.info/2015-11-11-what-is-really-rest/>

```javascript
Representational State Transfer
一组架构约束条件和原则

// RESTful API
POST
GET
PUT
DELETE
```

# 某小公司

- <https://juejin.im/post/59eafab36fb9a045076eccc3>

# PHP实现

- 基础

  - [runoob-php-restful](http://www.runoob.com/php/php-restful.html) | [restful-成九](http://www.cnblogs.com/luyucheng/p/6016801.html)

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

# 参考文献

```javascript
Java RESTful Web Service实战 韩陆
Java与JS全端开发
```
