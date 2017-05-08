#### **JS的革命时代**

* 资源
  * [JS应用程序设计-code-dl](https://github.com/oreillymedia/programming_javascript_applications) 
  * [图书在线阅读](http://chimera.labs.oreilly.com/books/1234000000262/pr01.html)
* JS的新的领域

  * 在操作系统上用web技术来构建 原生应用
  * ~~firefox / Chrome操作系统~~ -- Node-Webkit
  * 移动端
  * 服务器端 Node.js/IO.js

  * 硬件方面/嵌入系统/机器人

    * Arduino
    * tessel
    * espruino
    * nodebots

* 阿特伍德定律： 任何可以用JS实现的应用，最终都会被JS改写

* 性能
  * 代码执行可以提升的方面 垃圾回收 和 动态绑定
  * 但是 因为Node.js\(v8\)驱动无阻塞和并发处理，可以不用再为代码执行速度拼命了
* underscore.js 函数式编程工具集

---

#### JS**函数**

* 函数可以作为对象使用也可以在程序运行时动态声名
* 函数 -&gt; 对象 -&gt; 模块
* 每个函数只做一件事情 eg.  操作DOM的函数只专注于DOM操作
* 减少隐式副作用 -- 作用域，共享变量或属性

* 传入函数之前先复制，不要将原始值直接传入

* 纯函数：调用时不改变任何外部变量

* 函数的正确打开方式
  * 不能在条件语句中声名
  * 但 var bar = func\(\) {} 这样可以在条件语句中声名
  * 一定要指定名称，否则变成匿名函数（错误追踪）
  * var bar = { f: func\(\) {} }  （易读，拆解并重排）
  * var bar = { f: func hello\(\) {} }  具有名称的特殊匿名函数
  * 尽量不要用构造函数进行函数声明

#### JS**对象与模块**

#### **关注点分离**

#### **访问控制**

#### **日志/监控诊断**

* [Node.js日志库Winston](http://www.jianshu.com/p/e71f727c7b32)
* Node检查器 ： node-inspector
* 性能分析 

---

#### **构建RESTful API**

---

#### **特性开关**

---

#### **应用工程国际化**

* 文本、数据、日期、货币的转义
  * 日期转义 Moment.js
  * 字符串转义 il8next
  * 整体解决方案 Globalize  （Unicode通用区域数据库 CLDR ？？）
* 将用户区域语言偏好设置存到cookies
  * 将默认区域语言集插入页面
  * 异步请求语言值
* Our Hour Translation服务

---

#### 参考

```js
JavaScript应用程序设计
JavaScript Web应用程序开发 Nicolas Bevacqua
```



