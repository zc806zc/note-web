# python web基础

- growth-in-action <https://github.com/phodal/growth-in-action>
- 简单的模板引擎 <https://juejin.im/post/5a4c93a7f265da430b7ba1d4>

# Flask基础

- <https://github.com/pallets/flask>

- 基础

  - 年轻
  - 着眼于微小项目

- 路由

- Context上下文

- jinja2模板编程

- SQLAlchemy数据库编程

- WTForm表单编程

# Twisted基础

- windows安装 需要zope Interface与pywin32支持库
- 开发TCP广播系统 见源码

```python
twisted.internet.reactor.run()
```

- 组播技术 相对于单播点对点模式

# Tornado

- 强项是利用协程机制开发高并发的服务器系统 eg. 社交网络
- 可扩展的web服务器

- 异步与协程基础

- 用户身份验证框架

# Python-web

- [Python高效开发实战-code-dl](http://www.broadview.com.cn/book/3661)

  - Django + PostgreSQL开发移动 Twitter
  - Tornado + jQuery开发WebSocket聊天室
  - Flask + BootStrap + Restful开发学校管理系统
  - Twisted + SQLAlchemy + ZeroMQ开发跨平台物联网消息网关

# 其他基础

- 三种协议

  - TCP/IP
  - HTTP
  - Socket 进程通信机制 用于IP地址和端口，是一个通信链的句柄(?)

- Socket TCP原语 | Socket UDP原语

```python
客户端
socket() -> connect() -> send()/recv() -> close()

服务端
socket() -> bind() -> listen() -> accept() -> recv()/send() -> close()

UDP
recvfrom()
sendto()

http://m.qmen.space:8888/
```

- 常用端口号（搜索下）

- ngnix | WSGI

```python
pip install uwsgi
uwsgi --http:9090 --wsgi-file webapp.py
uwsgi uwsgi.ini
```

- 基础

  - 开源事件驱动框架，很高的运行效率
  - 并不是全栈框架 例如没有提供模板引擎
  - 从传输层到(底层)自定义应用协议的网络程序开发
  - 对python3支持有限

- UDP编程技术

- 高级

- 延迟调用 Defer

  - 正常处理函数链
  - 错误处理函数链
  - 结合Defer和reactor开发功能强大的异步调用函数

- 使用多线程

  - 主线程
  - 辅线程 相对耗时的任务

- 安全信道

```python
pip install pyopenssl
```

# 数据库

- 数据库

  - postgresql 最丰富的数据类型
  - Oracle 价格昂贵 小项目几乎不用
  - sqlite 进程内的数据库引擎 适合嵌入式设备或并发性可能性低的场合

- ORM

  - SQLAlchemy 最成熟
  - Django专用的ORM
  - Peewee库
  - SQLObject ruby式
  - storm 中型 要写ddl代码

# 参考

```python
Python高效开发实战
```
