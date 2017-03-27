#### **ch1 基础知识**

```js
// Web服务器
与Web服务器进行通信
不一定要通过浏览器
使用telnet协议也是可以的

// MIME 多用途网际邮件扩充协议
浏览器的转换表 // 当服务器没有指定MIME的时候

// 超文本传输协议
请求阶段
响应阶段 // 状态码
500 // 服务器遇到了问题,且不能完成请求

GET /storefront.html HTTP/1.1
GET HEAD POST PUT DELETE

// 安全性
1. 数据的安全 // eg.RSA加密
2. 对连接到Internet的计算机上的数据进行有意或恶意的破坏 // eg. 拒绝服务攻击
```

#### **ch2 HTML\(XHTML\)**

```js
// XHTML
早期的XHTML1.0 标准其实是
使用XML重新定义了HTML4.01

严格性 Strict
过渡性 Transition
框架集 Frameset

// 为什么
W3C会放弃
强制开发人使用XHTML更严格的语法规则
来编写出不已出错的文档
```

#### **ch3 CSS**

```js
// 盒模型

// 冲突解决方案
继承覆盖
不同来源 优先级 // !important id选择器
```

#### **ch4-6 JavaScript**

```js
// JS与Java
// 面向对象
JS并不支持面向对象的软件开发泛型 // eg.JScript 然而...

// 4.12节 正则表达式
基于Perl
/xy{4}z/  // xyyyyz
/x*y+z?/  // 任意个数的x, 至少一个的y,可选的z
/\bis\b/  // "A frog isn't" -> false

// 正则表达式的锚

// DOM
var dom = document.forms[0].elements[0];
// DOM 0 
// DOM 2事件模型
addEventListener

// 利用JS开发动态文档
eg. 操纵(移动)DOM对象
var dom = document.getElementById('dom').style; // style
dom.top = 12 + "px";
dom.left = 12 + "px";

doucument.body.style.color = newColor; // style.fontSize

client.X
screen.Y

// 元素定位 
绝对/相对/静态定位(static)

// 堆叠元素 z-index

// 缓慢移动元素 setTimeout等定时器
// 拖放元素 用DOM2事件来写
```

#### **ch7、10 XML/AJAX**

```js
// XML 文档结构
// XML架构
// XSLT样式表
// XML处理器 
SAX
DOM

// AJAX
跨浏览器支持

// AJAX工具包
```

#### ch8 FLash

```js
// 忽略，了解程度，做下后备

// 用途
// 环境
// 绘图工具
// 静态图片
// 动画和声音

// 用户交互
```

#### **ch9 PHP**

```php
// 模式匹配 POSIX | Perl(忽略)
preg_match // preg = perl regular

记在PHP基础
```

#### **ch11 Java Web**

```java
// Servlet
// JavaBean
// JSF
```

#### **ch12 ASP.NET**

```js
// 忽略
```

#### **ch13 基于Web的数据库访问**

```php
// 关系数据库
// 结构化查询语言

// 特殊字符的潜在问题
// JDBC 元数据
```

#### **ch14 Android**

```java
// 记在Android基础
```

#### **ch15-16 Ruby/Rails**

```ruby
// 散列
// 类

// 块和迭代器

// 模式匹配

// Rails
```

#### **参考**

```js
Web程序设计基础 Robert W.Sebesta // 个人感觉已经不太适合我们阅读了 适合跳读部分章节 用来梳理下思路 
W3c
```



