#### Web**基础**

* Web服务器

  * 与Web服务器进行通信，不一定要通过浏览器，使用telnet协议也是可以的

* MIME 多用途网际邮件扩充协议

  * 当服务器没有指定MIME的时候，浏览器会用自己的转换表

* HTTP\(HTTPS\) 超文本传输协议

  * 请求阶段
  * 响应阶段的状态码
    * 500 服务器遇到了问题,且不能完成请求
    * GET /storefront.html HTTP/1.1
    * GET HEAD POST PUT DELETE

* 安全性

  * 数据的安全 例. RSA加密
  * 对连接到Internet的计算机上的数据进行有意或恶意的破坏 例. 拒绝服务攻击

---

#### **HTML/XHTML**

* XHTML
  * 早期的XHTML1.0 标准其实是用XML重新定义了HTML4.01
  * 严格性 Strict \|  过渡性 Transition \| 框架集 Frameset
  * 但还是被放弃了 why?

#### **CSS**

* 盒模型
* CSS冲突解决方案
  * 继承覆盖
  * 不同来源的优先级 例 id选择器和 ！important

#### **JavaScript**

* JS和Java
* 面向对象-链式实现
* 正则表达式
  * 基于Perl
* DOM 0 -&gt; 1 -&gt; 2
  * addEventListener
  * 拖放实现

```js
// 正则表达式demo
/xy{4}z/  // xyyyyz
/x*y+z?/  // 任意个数的x, 至少一个的y,可选的z
/\bis\b/  // "A frog isn't" -> false


var dom = document.getElementById('dom').style; // style
dom.top = 12 + "px";
dom.left = 12 + "px";
doucument.body.style.color = newColor; // style.fontSize
```

---

#### **XML/AJAX**

* XML 文档结构
* XML架构
* XSLT样式表
* XML处理器 
  * SAX
  * DOM
* Ajax
  * 跨浏览器支持的复杂性
  * Ajax工具包

---

#### ~~FLash~~

* 成熟的视频方案
* 动画前景
  * 移动端至少挂了

---

#### **PHP/Java Web/ASP.NET/Ruby/Rails新旧阵营**

* PHP
  * 模式匹配 POSIX \| Perl\(忽略\)
* Java Web
  * Servlet
  * JavaBean
  * JSF
* Ruby
  * 散列
  * 类
  * 块和迭代器
  * 模式匹配
  * Rails

#### **基于Web的数据库访问**

* 关系数据库
* 结构化查询语言
* 特殊字符的潜在问题
* JDBC 元数据

---

#### **Android**

#### WebAPP

---

#### **参考**

```js
W3school
// Web程序设计基础 Robert W.Sebesta // 经典,但不适合入门
```



