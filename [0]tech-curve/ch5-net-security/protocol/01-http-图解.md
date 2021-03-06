# HTTP图解

- ch1 了解Web及网络基础

- ch2 简单的HTTP协议

- ch3 HTTP报文里的HTTP信息

- ch4 返回结果的HTTP状态码

- ch5 与HTTP协作的Web服务器

- ch6 HTTP首部

- ch7 确保Web安全的HTTPS

- ch8 确认访问用户身份的认证

- ch9 基于HTTP的功能追加协议

- ch10 构建Web内容的技术

- ch11 Web的攻击技术

# HTTP和HTTPS的差异

- 浅谈推进全站HTTPS项目-工程篇 https://juejin.im/post/5aa7327051882510fd3f488a
- 九个问题从入门到熟悉HTTPS

  - <https://juejin.im/post/5a2ff29c6fb9a045132aac5a>

- http2

  - <https://files.alicdn.com/tpsservice/0f6bc44e79b1aab8c849242dd6149522.pdf>

- HTTP

  - <https://certbot.eff.org/>

  - <http://www.ruanyifeng.com/blog/2016/08/http.html> HTTP协议入门

```javascript
// HTTPS 升级指南

// HTTP协议入门
TCP/IP 协议的应用层协议
默认使用80端口

// HTTP/2 // 没有子版本
```

- Content Security Policy

  - <http://www.ruanyifeng.com/blog/2016/09/csp.html>

```html
// 跨域脚本攻击 XSS

能不能根本上解决问题，浏览器自动禁止外部注入恶意脚本
// 网页安全政策 CSP
实质就是白名单制度 // 列入可信主机

1 通过 HTTP 头信息的Content-Security-Policy的字段
2 <meta http-equiv="Content-Security-Policy"
         content="script-src 'self';
         object-src 'none';  // <object>标签：不信任任何URL，即不加载任何资源
         style-src cdn.example.org third-party.org;
         child-src https:"> // 必须使用HTTPS协议加载

// report-uri
不仅希望防止 XSS，还希望记录此类行为

// Content-Security-Policy-Report-Only
不执行限制选项，只是记录违反限制的行为
```

- <https://juejin.im/post/5a030e326fb9a0450a66c8ea>
- 握手挥手...

- HTTPS是运行在SSL/TLS之上的HTTP协议，SSL/TLS运行在TCP之上。所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密

- 对称加密

  - 密钥只有一个，加密解密为同一个密码，且加解密速度快，典型的对称加密算法有DES、AES等

- 非对称加密

  - 密钥成对出现（且根据公钥无法推知私钥，根据私钥也无法推知公钥），加密解密使用不同密钥（公钥加密需要私钥解密，私钥加密需要公钥解密），相对对称加密速度较慢，典型的非对称加密算法有RSA、DSA等

- HTTPS的优点

  - 客户端产生的密钥只有客户端和服务器端能得到
  - 加密的数据只有客户端和服务器端才能得到明文
  - 客户端到服务端的通信是安全的
  - 比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高

- HTTPS的缺点

  - 耗费更多服务器资源
  - 大流量网站流量成本太高
  - HTTPS并不能防止站点被网络蜘蛛抓取。在某些情形中，被加密资源的URL可仅通过截获请求和响应的大小推得，这就可使攻击者同时知道明文（公开的静态内容）和密文（被加密过的明文），从而使选择密文攻击成为可能。
  - SSL证书要钱
  - SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗。

![](https://user-gold-cdn.xitu.io/2017/11/8/774c0fa85a357d384e12c8e395690f64?imageView2/0/w/1280/h/960/ignore-error/1)

# 升级HTTPS

- Let's encrypt

# Nigix

- 基础

```python
高性能的 Web和 反向代理 服务器
也是一个 IMAP/POP3/SMTP 代理服务器

在高连接并发的情况下
Nginx是Apache服务器不错的替代品

// 首先要安装 PCRE

/usr/local/webserver/nginx/sbin/nginx

/usr/local/webserver/nginx/sbin/nginx -s reload            # 重新载入配置文件
/usr/local/webserver/nginx/sbin/nginx -s reopen            # 重启 Nginx
/usr/local/webserver/nginx/sbin/nginx -s stop              # 停止 Nginx
```

# 计算机网络-概论/网络体系

- 三条主线

  - 从ARPANET到Internet
  - 从无线分组网到无线自组网、无线传感器网络
  - 网络安全技术

- 拓扑结构

- 分组交换技术

  - 线路交换
  - 分组交换

- OSI参考模型

- TCP/IP参考模型

# 物理层

- 频带传输技术
- 基带传输技术
- 多路复用技术

  - 时分多路复用
  - 频分多路复用
  - 波分多路复用

- 接入技术

  - ADSL
  - HFC
  - 光纤接入技术
  - 移动通信接入技术

# 数据链路层

- 差错产生与控制
- 数据链路层
- HDLC协议 面向比特型数据链路层协议
- 点-点协议PPP

# 介质访问控制子层

- Ethernet
- 交换式局域网与虚拟局域网
- 高速Ethernet
- 局域网互联与网桥
- 无线局域网

# 网络层

- IPv4协议
- IPv4地址
- 路由选择算法与分组交付

  - 路由信息协议RIP
  - 最短路径优先协议OSPF
  - 外部网关协议BGP

- ICMP Internet控制报文协议

  - Ping
  - Traceroute

- IGMP协议

  - 多播

- MPLS协议

- 地址解析协议

- 移动IP协议

- IPv6协议

# 传输层

# 应用层

# 网络工程概述

- 集成体系结构
- 集成原则与生命周期
- 招投标
- 文档与管理
- 质量控制与监理

# 网络工程理论与技术

- IP地址划分技术

  - 有类IP地址
  - 特殊IP地址
  - 专用IP地址
  - 无分类编址CIDR 与 变长子网掩码 VLSM
  - 路由汇聚技术
  - 最长前缀匹配

- VLAN（虚拟局域网）技术

- 以太网技术

- 路由寻址技术

- 网络接入技术

# 计算机网络设备

- 传输介质与连接器
- 网络适配器
- 调制解调器
- 网桥
- 路由器
- 交换机
- 网络服务器主机

# 网络设计需求分析

- 流量需求分析

# 综合布线系统

# 计算机网络设计

- 网络拓扑结构设计
- 网络分层设计
- 网络性能设计
- 企业网
- IP地址规划设计
- 选择路由协议与网络管理协议

# 路由器配置

- 静态路由配置
- RIP路由协议配置
- OSPF路由协议配置
- 控制访问列表配置

  - 标准访问控制列表配置
  - 扩展访问控制列表配置

- 路由器系统软件恢复与维护

# 交换机配置

- 交换机配置
- VLAN配置

  - 创建跨交换机的VLAN

- VLAN之间的路由器配置

- 用Telnet远程配置交换机

- 用Web界面访问交换机的配置

- 三层交换机配置

- 交换机的系统维护

# 网络测试与分析工具

- 网络测试工具

  - ipconfig
  - arp 查看与设置地址解析协议表项工具
  - ping
  - tracert 查看协议包经过路径
  - netstat 查看网络工具
  - route
  - nslookup 查看域名工具

- 应用层协议工具

  - ftp
  - telnet
  - 实现系统管理的NET命令程序

- 网络协议分析工具 Ethereal

  - 过滤器

# 网络工程验收与维护

# 网络单机

- 计算机硬件基础/计算机组装技术

- 服务器组装技术/安装服务器操作系统

- 计算机故障处理

# 网络设备

- 网络传输介质

- 底层设备-中继器与集线器

- 二层设备-网桥和交换机

- 三层设备--路由器

# 网络组建

- 组建局域网

- 组建办公型网络

- 组建网吧网络

- 组建无线网络

- 局域网的优化与升级

# 网络应用

- Windows Server 2008为例

- DNS 服务器配置

- 活动目录与域应用

- Web服务器

- FTP服务应用

- NAS网络存储应用

# 网络安全

- 网络安全管理体系

- 网络病毒防范

- 黑客入侵防范

# 网络维护

- 网络管理工具

- 局域网故障诊断

- 预防数据丢失与恢复

# 虚拟应用篇

- VMware虚拟机
