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

- <https://juejin.im/post/5a030e326fb9a0450a66c8ea?utm_source=gold_browser_extension>
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
