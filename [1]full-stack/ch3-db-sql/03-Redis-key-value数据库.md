# Memcached

- <http://www.yiibai.com/memcached/>

- 安装配置

```javascript
// ubuntu
// sudo apt-get install libevent libevent-deve
// sudo apt-get install memcached


// centos
yum install libevent libevent-deve
yum install memcached
/usr/local/memcached/bin/memcached -h
-p 1024以上的端口
// 或者 /usr/local/bin/memcached

// 源代码下载
// wget 最好进入一个自己知道的文件夹再下载
去 http://libevent.org/ 下载
tar -zxvf libevent-2.0.22-stable.tzr.gz
cd libevent-2.0.22-stable
make
sudo make install
ls -al /usr/lib | grep libevent // 查看是否成功

wget http://memcached.org/latest              
tar -zxvf latest                 
cd memcached-1.4.36                                  
./configure --prefix=/usr/local/memcached         
make (&& make test)  // 编译
sudo make install  // 安装

// 作为前台程序运行
/usr/local/memcached/bin/memcached -p 11211 -m 64m -vv

// 作为后台服务程序运行
/usr/local/memcached/bin/memcached -p 11211 -m 64m -d

// 连接
telnet 127.0.0.1 11211
set foo 0 0 3   
bar // 数据
STORED

get foo
VALUE foo 0 3
bar        
END    

quit
```

- 基础

```javascript
高性能，分布式内存对象缓存系统

提高Web应用扩展性

基于内存的key-value存储
用来存储小块的任意数据（字符串、对象）
这些数据可以是
数据库调用、
API调用或者是
页面渲染的结果

通过缓存数据库查询结果，
减少数据库访问次数，
以提高动态Web应用的速度、提高可扩展性

// 特征
协议简单
基于libevent的事件处理
内置内存存储方式
memcached不互相通信的分布式

许多语言都实现了 // 以Perl、PHP为主
连接memcached的客户端
```

- 存储命令

```javascript
// set
// add
// replace
// append
// prepend

// CAS命令
```

- 查找命令

```javascript
// get
// gets
// delete
// incr decr
```

- 统计命令

```javascript
// stats
// stats items
// stats slabs
// stats sizes
// stats flush_all
```

- 实例

```shell
// Java 连接 Memcached 服务


// PHP 连接 Memcached 服务
// PHP7 版本，则需要下载指定分支, 另外处理
wget http://pecl.php.net/get/memcache-2.2.7.tgz               
tar -zxvf memcache-2.2.7.tgz
cd memcache-2.2.7
/phpstudy/server/php/bin/phpize //注意实际路径
./configure --with-php-config=/phpstudy/server/php/bin/php-config // 注意实际路径
sudo make
sudo make test
sudo make install

// 成功提示
// Installing shared extensions:     /phpstudy/server/php/lib/php/extensions/no-debug-non-zts-20121212/

// phpstudy的php.ini位置 /phpstudy/server/php/etc/
// 尾部加上 注意路径
[Memcache]
extension_dir = "/phpstudy/server/php/lib/php/extensions/no-debug-non-zts-20121212/"
extension = memcache.so

// 重启服务器
eg. sudo phpstudy restart
eg. sudo /usr/local/nginx/sbin/nginx -s reload

// isSuccessed
/phpstudy/server/php/bin/php -m | grep memcache
或phpinfo 查看

// php实现
<?php
$memcache = new Memcache;
$memcache->connect('127.0.0.1', 11211) or die ("Could not connect");
$memcache->set('key', 'mecached-test');
$get_value = $memcache->get('key');
echo $get_value;
```

![](/assets/memcache-successed.jpg)
