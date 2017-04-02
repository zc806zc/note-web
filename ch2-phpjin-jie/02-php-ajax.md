#### **PHP-Ajax网站**

* 模板快速建站

  * [code-dl](http://book.boxuegu.com/php_ajax/)
  * [WordPress-主题插件权限-FTP输入问题](http://jingyan.baidu.com/article/4f34706efc1237e387b56da4.html)

```php
// 模板
wordpress
wecenter // discuz

// discuz与wecenter安装注意

chmod -R 777/775  folder // 读写权力
wecenter要手动建数据库
// 数据库密码 指的是初始 root root // 之后记得删除install文件
localhost改成127.0.0.1使更通用
// 不要用已经配置过的discuz和wecenter文件夹
```

* Ajax

  * [PHP AJAX 跨域问题](http://www.runoob.com/w3cnote/php-ajax-cross-border.html)

```js
// 谷歌搜索建议
AJAX =
XMLHttpRequest 对象（与服务器异步交互数据）
+ JavaScript/DOM（显示/取回信息）
+ CSS（设置数据的样式）
+ XML（常用作数据传输的格式）
// AJAX 应用程序与浏览器和平台无关的

// XML
Expat XML 解析器

PHP SimpleXML 处理最普通的 XML 任务，
其余的任务则交由其它扩展处理

// JSON
```

* 面向对象网站开发

```

```

* Ajax商品发布   
  * 富文本过滤 [HTMLPurifier](http://htmlpurifier.org/download) \(Standalone版\)

```php
// UEditor在线编辑器

进度条文件上传
收集表单数据
获取Ajax传输进度

下拉菜单三级联动
```

* 电子商务网站

```php
// 项目安全巩固
$_GET,$_COOKIE等超全局变量都是不可信的，
所以在framework下有function.php统一处理

表单验证

// 防止SQL注入
PDO的预处理机制把SQL和数据分离
不要采用SQL语句拼接 select  from ADMIN where name = "" *or 1 = '1'

// 防御XSS攻击
htmlspecialchars() 单引号不会被转义
PHPSESSID cookie HttpOnly

// 商务网站部署方式
```



