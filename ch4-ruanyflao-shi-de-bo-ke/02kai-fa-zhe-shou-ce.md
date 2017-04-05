#### 开发者手册

* 函数式编程
  * [http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html](http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html) 入门教程

```js
Functional programming
```

* 技术热门度曲线
  * [https://stateofdev.com/](https://stateofdev.com/) 提供各种技术的热门程度图

```
启动期 // 有所报道，难以商用
泡沫期 // 出现个别成功案例，非理性渲染
低谷期
爬升期 // 优缺点明晰 重新认识
高原期

争取风险投资，要选择热门的技术 // 创业公司
解决实际问题， 要选择可靠的技术

// 图片来源 http://www.ruanyifeng.com/blog/2017/03/gartner-hype-cycle.html
```

![](/assets/jieduan.png)

* 编程规范
  * [https://github.com/ruanyf/document-style-guide](https://github.com/ruanyf/document-style-guide)  中文技术文档的写作规范

```js
// 文件名必须小写
// 驼峰命名法可能也不合适

可移植 // Linux Mac 平台问题等
便于区分(系统)目录或文件相区分 // ls 大写的容易先看到
例如 易于大小写搜索 还有可读性
```

* Content Security Policy
  * [http://www.ruanyifeng.com/blog/2016/09/csp.html](http://www.ruanyifeng.com/blog/2016/09/csp.html)

```js
// 跨域脚本攻击 XSS

能不能根本上解决问题，浏览器自动禁止外部注入恶意脚本
// 网页安全政策 CSP
实质就是白名单制度 // 列入可信主机

1. 通过 HTTP 头信息的Content-Security-Policy的字段
2. <meta http-equiv="Content-Security-Policy" 
         content="script-src 'self'; 
         object-src 'none';  // <object>标签：不信任任何URL，即不加载任何资源
         style-src cdn.example.org third-party.org; 
         child-src https:"> // 必须使用HTTPS协议加载

// report-uri
不仅希望防止 XSS，还希望记录此类行为

// Content-Security-Policy-Report-Only
不执行限制选项，只是记录违反限制的行为
```

* 软件架构

  * [http://www.oreilly.com/programming/free/files/software-architecture-patterns.pdf](http://www.oreilly.com/programming/free/files/software-architecture-patterns.pdf)

  * [http://www.ruanyifeng.com/blog/2016/09/software-architecture.html](http://www.ruanyifeng.com/blog/2016/09/software-architecture.html)

```js
architect 只有资深程序员才可以担任

// 1. 分层架构
表现层 presentation // 用户界面，负责视觉和用户互动
业务层 business     // 实现业务逻辑
持久层 persistence  // 提供数据，SQL 语句就放在这一层
数据库 database
// 可能会在逻辑层和持久层加一个服务层 差不多

// 分层架构的缺点
即使只修改一个小地方
往往需要整个软件重新部署 // 不容易做持续发布

// 2. 事件驱动架构
通过事件进行通信

事件队列 event queue // 接收事件的入口
分发器 event mediator // 将不同的事件分发到不同的业务逻辑单元
事件通道 event channel // 分发器与处理器之间的联系渠道
事件处理器 event processor // 实现业务逻辑，处理完成后会发出事件，触发下一步操作

高度解耦，软件的扩展性好
事件的异步本质，软件不易产生堵塞
事件处理器可以独立地加载和卸载，容易部署

难以支持原子性操作，因为事件通过会涉及多个处理器，很难回滚
开发难度，难测试

// 3.微核架构/插件架构

// 4. 微服务架构
服务导向架构
通过远程通信协议（比如REST、SOAP）联系

// 三种实现模式
RESTful API 模式
RESTful 应用模式 // 背后通常是一个多功能的应用程序，常见于企业内部
集中消息模式 
// 采用消息代理message broker，可以实现消息队列、负载均衡、统一日志和异常处理
// 缺点是会出现单点失败，消息代理可能要做成集群

// 5.云架构
主要解决扩展性和并发的问题，是最容易扩展的架构

没使用中央数据库，而是把数据都复制到内存中，变成可复制的内存数据单元

处理单元（processing unit）+ 虚拟中间件（virtualized middleware）
```

* HTTP

  * [https://certbot.eff.org/](https://certbot.eff.org/)

  * [http://www.ruanyifeng.com/blog/2016/08/http.html](http://www.ruanyifeng.com/blog/2016/08/http.html) HTTP协议入门

```
// HTTPS 升级指南

// HTTP协议入门
TCP/IP 协议的应用层协议
默认使用80端口

// HTTP/2 // 没有子版本
```

* YAML
  * [http://www.ruanyifeng.com/blog/2016/07/yaml.html](http://www.ruanyifeng.com/blog/2016/07/yaml.html)
  * [https://github.com/nodeca/js-yaml](https://github.com/nodeca/js-yaml)  \([JS-YAML](https://github.com/nodeca/js-yaml)库 把函数和正则表达式转为字符串\)

```js
YAML 是专门用来写配置文件的语言，非常简洁和强大
远比 JSON 格式方便

一种通用的数据串行化格式
只允许使用空格

// 支持的数据结构
对象
数组
纯量（scalars） // 单个的、不可再分的值

hash: { name: Steve, foo: bar } 
// { hash: { name: 'Steve', foo: 'bar' } } // JS

-
 - Cat
 - Dog
 - Goldfish
// [ [ 'Cat', 'Dog', 'Goldfish' ] ] // JS

// 复合结构

// 纯量
parent: ~
// { parent: null } // JS

e: !!str 123
f: !!str true
// { e: '123', f: 'true' } // 强调数据类型转化

// | > + -
// 锚点&和别名*，可以用来引用
```


