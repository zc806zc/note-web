#### **ch1 PHP网站搭建**

* [图书源码下载](http://book.boxuegu.com/php_ajax/)
* [WeCenter社区](http://www.wecenter.com/)
* discuz

```php
// discuz与wecenter安装注意
chmod -R 777  folder // 更改读写权力

wecenter要事先手动创建好数据库
数据库密码指的是服务器的 初始的就是root root
localhost改成127.0.0.1
不要用已经配置过的discuz和wecenter文件夹
```

#### **ch2 学生信息管理**

#### **ch3 网站用户中心**

#### **ch4 面向对象网站开发**

#### **ch5 新闻发布系统**

#### **ch6 jQuery个人主页**

```php
记在01-jQuery-基础
```

#### **ch7 Ajax商品发布**

* 
```php
进度条文件上传
收集表单数据
获取Ajax传输进度

下拉菜单三级联动

在线编辑器
```

* 进度条文件上传
  * 收集表单数据
  * 获取Ajax传输进度
* 下拉菜单三级联动
* 在线编辑器
  * [UEditor](http://ueditor.baidu.com/website/)
  * 富文本过滤 [HTMLPurifier](http://htmlpurifier.org/download)Standalone版

#### **ch8 电子商务网站**

* 项目安全巩固
  * $\_GET,$\_COOKIE等超全局变量都是不可信的，所以在framework下有function.php统一处理
  * 表单验证
  * 防止SQL注入 
    * PDO的预处理机制把SQL和数据分离
    * 不要采用SQL语句拼接 select _ from **ADMIN** where _`name`_ = "" \*or 1 = '1'_
  * 防御XSS攻击
    * htmlspecialchars\(\) 单引号不会被转义
      * PHPSESSID cookie HttpOnly
* 商务网站部署方式



