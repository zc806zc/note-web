# 阿里云(Oneinstack|CentOS为例)

- 官方教程 <https://help.aliyun.com/document_detail/50774.html?spm=5176.doc50775.6.630.uJaGYl>

- oneinstack <https://oneinstack.com/install/>

  - 支持JAVA和PHP，把所有事情都做好了，不需要其他任何配置
  - 自带了https

- 建站步骤

  - 学生机购买ECS
  - 安全组规则修改
  - ftp
  - 安装oneinstack

- 问题

  - 改端口
  - 虚拟路径设置

```javascript
// 操作过程
cd /root/oneinstack
./vhost.sh add/del

// 启停服务器
service nginx reload/restart
service tomcat start/stop

sudo /usr/local/nginx/sbin/nginx -s reload
sudo /phpstudy/server/httpd/bin/apachectl restart
sudo ./../tomcat/bin/startup.sh // 先cd进去 再 ./startup.sh

// 配置文件
/usr/local/nginx/conf/   // https证书配在这里
/root/oneinstack/config/
```

# VPS

- Virtual Private Server 虚拟专用服务器
- 购买时要考量一下它的扩展技术

  - FrontPage
  - 多媒体
  - FSO组件
  - 邮件发送 | 文件上传

- 域名解析 DNS

  - A类型 优先解析
  - CNAME 别名指向
  - MX类型

# 腾讯云(Ubuntu|phpstudy环境为例)

- [phpstudy安装](https://bbs.aliyun.com/read/165947.html?spm=5176.bbsr165947.0.0.sl6Fe6&displayMode=1&page=1#527830)
- 遇到的问题

  - 权限原因, ftp只能上传到Desktop，可以sudo mv /home/ubuntu/Desktop/tmp /phpstudy/www/ 或者chmod -R 777 /phpstudy/www
  - [mysql -远程访问授权](https://zhidao.baidu.com/question/358796386.html) | [ueditor-无法创建目录](http://blog.csdn.net/chengyi_l/article/details/46377307)
  - [如何开放端口](http://www.server110.com/linux/201308/740.html) | [腾讯云安全组-公网ip无法访问](http://bbs.qcloud.com/forum.php?mod=viewthread&tid=12878&highlight=公网ip)
  - 单独安装的mysql时允许远程访问 <http://blog.csdn.net/guguant/article/details/53066280>
  - win和linux文件大小写

- 常用命令

  - 删除文件夹 sudo rm -rf /phpstudy/www/tmp/

```javascript
// 数据库
phpstudy/mysql/bin/mysql -h 127.0.0.1 -u root -p // 回车输密码

// 生成链接
sudo ln -s /phpstudy/mysql/bin/mysql /usr/local/bin/mysql

// 允许用户远程访问
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' IDENTIFIED BY 'password' WITH GRANT OPTION;
flush privileges;­

// iptables防火墙问题 开放端口  kernel update
iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 3000 -j ACCEPT
service iptables save
iptables -nvL // 查看规则

// ubuntu可能是这个
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT // Ubuntu
sudo iptables-save
```

- HTTPS升级

  - [HTTPS升级指南-ruanrf](http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)

  - [阿里云证书配置](https://yundun.console.aliyun.com/?spm=5176.2020520163.1001.87.ZMNtx7&p=cas#/cas/download/214052692260308) | [AMH实现(还没试过)](https://www.gitbook.com/book/luo0412/white/edit#)

  - 证书可能只用配ngnix,不用配tomcat

  - 可能问题

    - 不能自动加载index.php/html 而是跳到damain.com
    - 文件夹权限问题
    - 即使显示https访问，照样显示图片可能被劫持不安全
    - 强制HTTPS访问，但子文件照样可以http直接访问
    - 翻墙貌和浏览器貌似也有影响，注意及时清理缓存，必要时重新开启浏览器或换个浏览器
    - 重启nginx后丢失nginx.pid的解决方法 /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

  - Apache证书配置 phpstudy/server/httpd/conf/extra/httpd-ssl.conf

```javascript
listen 443 ssl; // 或ssl on
server_name hellou.space;
access_log / data / wwwlogs / access_nginx.log combined;
root / data / wwwroot /
default;
index index.html index.htm index.php;
ssl_certificate / usr / local / nginx / cert / 214052692260308.pem;
ssl_certificate_key / usr / local / nginx / cert / 214052692260308.key;
ssl_session_timeout 5m;
ssl_ciphers ECDHE - RSA - AES128 - GCM - SHA256: ECDHE: ECDH: AES: HIGH: !NULL: !aNULL: !MD5: !ADH: !RC4;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;

// phpstudy nginx.conf配置
server {
    listen 80;
    server_name localhost;
    index index.html index.htm index.php;
    return 301 https: //qmen.space$request_uri; // 重定向

    root / phpstudy / www;
    location / {}
    error_page 500 502 503 504 / 50x.html;
    location = /50x.html {
}
location ~ \.php(.*)$ {
}
}

server {
listen 443;
server_name qmen.space www.qmen.space;
index index.html index.htm index.php;

ssl on;
ssl_certificate cert/214052607290308.pem;
    ssl_certificate_key cert / 214052607290308.key;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH: !NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    root / phpstudy / www;
    location / {}
    error_page 500 502 503 504 / 50x.html;
    location = /50x.html {
}
location ~ \.php(.*)$ {
}

}
```

![](/static/img/other/https-aliyun-1.jpg)

# 建站小结

- 高流量下载的网站（视频服务） 每年2-3万成本是很正常的
- wap网站 mobi手机域名
- 注意

  - 要略早于访问高峰更新发布内容
  - 最好做用户体验好的图片广告 即移到图片上方出现提示信息
  - 百度等的搜索分成广告
  - 培养广告品牌好感
  - 控制内容的流失

- 收购 合并 上市

- 建站能力

  - 了解客户需求 + 美工 + 技术协调 + 发布推广 + 营销 + 维护 + ...

- 市场调查找切入点 考量受众

- 网站规模与类型

- 网站风格与框架

  - 没有个性地套用模板
  - 设计师的网站（图片 + 动画，高流量卡顿）
  - 工程师的网站
