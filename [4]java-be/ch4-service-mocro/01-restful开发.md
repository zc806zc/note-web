# 前后端分离

- JSP时代不能说错了, 只是开发模式很不合理. 我们需要尽量避免
- 前后端分离

  - 大多数人以浏览器作为前后端的分界线。
  - 前后端分离并不只是开发模式，而是Web应用的一种架构模式
  - 有些人比较推崇全栈工程师

> 前后端分离是架构分离而非代码分离

```javascript
// 半分离
前后端共用一个代码库，但是代码分别存放在两个工程中。
后端不关心或很少关心前端元素的输出情况，
前端不能独立进行开发和测试，项目中缺乏前后端交互的测试用例。

// 分离
前后端代码库分离，
前端代码中有可以进行Mock测试
（通过构造虚拟测试对象以简化测试环境的方法）的伪后端，
能支持前端的独立开发和测试。
而后端代码中除了功能实现外，还有着详细的测试用例，
以保证API的可用性，降低集成风险。
```

- SPA

  - SPA适合操作性很强的web应用
  - 展示性网站却不一定

    - 列表展示类的网页可能后端渲染可能更方便

- 微服务架构应用

  - 基于SpringBoot实现

- 分离部署方案

  - Nginx+Server
  - Node+Server
  - Nginx+Node+Server

- 参考文档

  - <https://juejin.im/entry/5a33290ef265da431876c832>
  - <https://juejin.im/post/5a2cf50651882510b27550ba>

# RPC

- 面向动作
- <https://segmentfault.com/q/1010000003049016>

# RESTful

- <https://segmentfault.com/a/1190000006735330>

- RESTful Web 服务：教程 <https://zhuanlan.zhihu.com/p/21644769>
  - 模型表示（Representations）
  - 消息（Messages）
  - URIs
  - 一致接口（Uniform interface）
  - （无状态）Stateless
  - 资源之间的链接（Links between resources）
  - 缓存（Caching）

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
