* 盈利

```js
// 成本
供下载等流量高的 每年2-3万

// 更新
略早于访问高峰

// 广告
图片广告 移到图片上方出现提示信息  用户体验好
搜索分成广告 Baidu等
xxx 是 xxx的唯一机会 -> 品牌好感

控制内容的流失

// 收购 合并 上市
```

* 基础

```js
wordpress

?? wap网站 mobi手机域名

虚拟空间
// 需要考量一下它的扩展技术
FrontPage
多媒体
FSO组件 ??
邮件发送
文件上传

// 域名解析 DNS
A类型 优先解析
CNAME 别名指向
MX类型 ??

// 建站能力
客户需求 美工 技术协调 发布推广 营销 维护
市场调查找切入点 考量受众
网站规模与类型
网站风格与框架

// 网站类型
1. 模板
2. 图片 + 动画 华丽丽的 卡卡的
3. 我们要做的
```

#### **腾讯云部署有关**

* [phpstudy安装](https://bbs.aliyun.com/read/165947.html?spm=5176.bbsr165947.0.0.sl6Fe6&displayMode=1&page=1#527830)
* [mysql 远程访问授权问题](https://zhidao.baidu.com/question/358796386.html)
* [使用ueditor 无法创建目录问题](http://blog.csdn.net/chengyi_l/article/details/46377307)

```js
// 操作数据库
/phpstudy/mysql/bin/mysql -h 127.0.0.1 -u root -p // 然后输入密码

// 授予ip地址访问权限
GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'192.168.1.3' IDENTIFIED BY 'mypassword' WITH GRANT OPTION; 

// 删除文件夹及文件夹下内容
sudo rm -rf /phpstudy/www/imedia-test/

// ftp貌似只能上传到Desktop
// 可以以此作为中转站再移动内容
sudo mv /home/ubuntu/Desktop/imedia-test /phpstudy/www/

// 或者直接 chmod 777 www

// 文件大小写命名问题
```

---

* JSP环境安装与配置
  * [阿里云教程](https://help.aliyun.com/document_detail/50774.html?spm=5176.doc50775.6.630.uJaGYl)

```js

```

* HTTPS升级
  * [AMH实现\(还没试过,突然成功了,好开心\)](https://bbs.aliyun.com/read/303413.html?spm=5176.100241.0.0.T6qT5U)
  * [阿里云证书配置](https://yundun.console.aliyun.com/?spm=5176.2020520163.1001.87.ZMNtx7&p=cas#/cas/download/214052692260308) \| [HTTPS升级指南-ruanrf](http://www.ruanyifeng.com/blog/2016/08/migrate-from-http-to-https.html)

```js
// 阿里云服务器配置
// 稀里糊涂就突然好了
oneinstack // ngnix
按照他的证书服务来 
审核通过下载配置 

sudo /usr/local/nginx/sbin/nginx -s reload // 重启重启重启ngnix

// 一共有两处
// /usr/local/nginx/conf/
// /root/oneinstack/config/

listen 443 ssl; // ssl on 是 400 报错的话，改成这样
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


// 配置带来的问题

// qmen.space/ 不是自动加载index.php/html 而是damain.com
// 强制HTTPS访问  貌似设置好以后自带了
// http://hellou.space/hello/index.html 子文件照样可以https
// 翻不翻墙貌似也会有影响
// 重启nginx后丢失nginx.pid的解决方法
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf // 可能的解决方法


// 腾讯云配置
照样用阿里云的教程 配置完httpd.conf
我的情况是 阿里云买的域名(证书服务) + 腾讯云的ECS
注意不要忘记配置
/phpstudy/server/httpd/conf/extra/httpd-ssl.conf 下的

DocumentRoot "/phpstudy/www"
ServerName qmen.space:443
ServerAdmin 1095847440@qq.com
ErrorLog "/phpstudy/server/httpd/logs/error_log"
TransferLog "/phpstudy/server/httpd/logs/access_log"


// phpstudy重启apache 
sudo /phpstudy/server/httpd/bin/apachectl restart
```

![](/assets/https-aliyun-1.jpg)

