#### VPS

* 腾讯云下PHP环境为例

  * [phpstudy安装](https://bbs.aliyun.com/read/165947.html?spm=5176.bbsr165947.0.0.sl6Fe6&displayMode=1&page=1#527830)\| [oneinstack-install](https://oneinstack.com/install/)
  * [mysql 远程访问授权](https://zhidao.baidu.com/question/358796386.html) \| [使用ueditor无法创建目录问题](http://blog.csdn.net/chengyi_l/article/details/46377307)
  * [开放端口](http://www.server110.com/linux/201308/740.html)\| [公网ip无法访问问题](http://bbs.qcloud.com/forum.php?mod=viewthread&tid=12878&highlight=公网ip)

```js
/phpstudy/mysql/bin/mysql -h 127.0.0.1 -u root -p // 进入数据库, 然后回车输入密码
sudo ln -s /phpstudy/mysql/bin/mysql /usr/local/bin/mysql // 快链接

GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'%' IDENTIFIED BY 'mypassword' WITH GRANT OPTION; // 远程权限

sudo rm -rf /phpstudy/www/tmp/ // 删除文件夹

// 腾讯云
权限原因, ftp只能上传到Desktop
sudo mv /home/ubuntu/Desktop/tmp /phpstudy/www/ // 可以以此作中转站再移动内容
chmod -R 777 /phpstudy/www // 或者直接修改权限 

// win和linux文件大小写 
// 注意统一命名风格

// iptables 防火墙问题 kernel update
iptables -I INPUT 4 -p tcp -m state --state NEW -m tcp --dport 3000 -j ACCEPT
service iptables save
iptables -nvlptables -nvl // 查看规则


// 安全组导致的公网ip无法访问问题特别坑，我郁闷到两次重装系统。知道真相的我眼泪掉下来...
```

* 阿里云
  * [阿里云官方教程](https://help.aliyun.com/document_detail/50774.html?spm=5176.doc50775.6.630.uJaGYl)

```js
// oneinstack 一揽子方案
也就是说里面已经默认安装好了jdk、tomcat等等
根本不需要安装什么了,
直接上就行 
因为oneinstack已经把事情做的不要太简单了...

// 哭了，还倒腾了好久
// 所以,这是一个惨痛的教训
oneinstack是有手册的, 先沉下心看完，
不要急着移植腾讯云的经验
// 否则可能死的很惨


// 大致步骤
1. 添加虚拟主机
cd /root/oneinstack
./vhost.sh // 工程文件war放在 /data/xxx.com

2. 防火墙 // 可能
3. 服务的启停
service nginx reload/restart
service tomcat start/stop

// 改端口
// 虚拟路径设置
```

* HTTPS升级
  * [AMH实现\(还没试过\)](https://bbs.aliyun.com/read/303413.html?spm=5176.100241.0.0.T6qT5U)
  * [阿里云证书配置](https://yundun.console.aliyun.com/?spm=5176.2020520163.1001.87.ZMNtx7&p=cas#/cas/download/214052692260308) \| [HTTPS升级指南-ruanrf](http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)

```js
JAVA WEB 只用配ngnix,不用配tomcat
按照证书服务教程来就能成功


// 可能能用到的命令
sudo /usr/local/nginx/sbin/nginx -s reload
sudo /phpstudy/server/httpd/bin/apachectl restart
sudo ./../tomcat/bin/startup.sh // 开启tomcat服务


// 腾讯云Apache证书配置
listen 443 ssl; // ssl on报错的话 可以改成这样
server_name hellou.space;
access_log /data/wwwlogs/access_nginx.log combined;
root /data/wwwroot/default;
index index.html index.htm index.php;
ssl_certificate /usr/local/nginx/cert/214052692260308.pem;
ssl_certificate_key /usr/local/nginx/cert/214052692260308.key;
ssl_session_timeout 5m;
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;

// phpstudy nginx.conf配置
server {
listen 80;
server_name lcoalhost;
index index.html index.htm index.php;
return 301 https://qmen.space$request_uri; // 重定向

root /phpstudy/www;
location / {
}
error_page 500 502 503 504 /50x.html;
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
ssl_certificate_key cert/214052607290308.key;
ssl_session_timeout 5m;
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_prefer_server_ciphers on;

root /phpstudy/www;
location / {
}
error_page 500 502 503 504 /50x.html;
location = /50x.html {
}
location ~ \.php(.*)$ {
}

}

// 腾讯云还要配置
phpstudy/server/httpd/conf/extra/httpd-ssl.conf文件下

DocumentRoot "/phpstudy/www"
ServerName qmen.space:443
ServerAdmin 1095847440@qq.com
ErrorLog "/phpstudy/server/httpd/logs/error_log"
TransferLog "/phpstudy/server/httpd/logs/access_log"


// 证书配置的可能后遗症如下:

// 不能自动加载index.php/html 而是跳到damain.com
// 即使显示https访问，照样显示图片可能被劫持不安全
// 强制HTTPS访问，但子文件照样可以http直接
// 翻不翻墙貌似会有影响
// 浏览器不用貌似也有影响
注意及时清理缓存
必要时重新开启浏览器
适当时候再换个浏览器 ff // 我突然成功，无法解释这个灵异现象，chrome有点怪

// 重启nginx后丢失nginx.pid的解决方法
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf // 可能的解决方法

// 文件夹权限问题
<Directory />
AllowOverride none
Require all denied // 该不该拒绝啊，懵了
</Directory>

// <Directory "/phpstudy/www">


// 最后注意阿里云的配置文件
/usr/local/nginx/conf/ // 证书配在这里
/root/oneinstack/config/ // 谁能告诉我这里干嘛的...
```

![](/assets/https-aliyun-1.jpg)

* 网站盈利

```js
供下载等高流量的网站 每年2-3万成本是很正常的 // 成本

要略早于访问高峰更新发布内容

最好做图片广告 // 移到图片上方出现提示信息  用户体验好
搜索分成广告   // Baidu等
品牌好感      // 什么是拿到优惠券的唯一机会
控制内容的流失

// 收购 合并 上市
```

* 基础

```js
// wap网站 mobi手机域名

// 虚拟空间购买
需要考量一下它的扩展技术
FrontPage
多媒体
FSO组件 
邮件发送
文件上传

// 域名解析 DNS
A类型 优先解析
CNAME 别名指向
MX类型 

// 建站能力
客户需求 美工 技术协调 发布推广 营销 维护
市场调查找切入点 考量受众
网站规模与类型
网站风格与框架

// 网站类型
1. 模板 // 死气沉沉的 没有个性
2. 图片 + 动画 // “华丽丽”且卡卡的
3. 我们正在做的事
```



