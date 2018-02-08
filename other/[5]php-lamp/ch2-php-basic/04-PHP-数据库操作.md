# PDO/Mysqli/ODBC

```php
// PHP Data Object
抽象层
统一操作各种数据库

// MySQLi extension // "i" 意为 improved
PDO 应用在 12 种不同数据库中
MySQLi 只针对 MySQL 数据库

// 习惯用哪个用哪个
两者都支持预处理语句 // 可以防止 SQL 注入，
对于 web 项目的安全性是非常重要的。

// 预处理/预处理为什么较安全
创建 SQL 语句模板并发送到数据库。预留的值使用参数 "?" 标记
数据库解析，编译，对SQL语句模板执行查询优化，并存储结果不输出
应用可以多次执行语句，如果参数的值不一样。
相比于直接执行SQL语句 // 大大减少了分析时间，只做了一次查询（虽然语句多次执行）

绑定参数减少了服务器带宽，你只需要发送查询的参数，而不是整个语句
参数值发送后使用不同的协议，保证了数据的合法性 // SQL注入

i - integer（整型）
d - double（双精度浮点型）
s - string（字符串）
b - BLOB（binary large object:二进制大对象）
$stmt->bind_param("sss", $firstname, $lastname, $email);

// PDO 中的预处理语句
```
