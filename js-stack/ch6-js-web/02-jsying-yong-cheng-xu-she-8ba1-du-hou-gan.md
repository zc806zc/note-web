#### **ch1 JS的革命时代**
+ [源码下载](https://github.com/oreillymedia/programming_javascript_applications) | [在线阅读](http://chimera.labs.oreilly.com/books/1234000000262/pr01.html)


```
* 进入的新的领域
  + 在**操作系统**上用web技术来构建原生应用
    + <del>win8</del> / Gnome
    + firefox / Chrome操作系统 - **Node-Webkit**
    + 移动端
  + 硬件方面/嵌入系统/机器人
      + Arduino
      + tessel
      + espruino
      + nodebots
  * 服务端 
  	* Node.js
   	* IO.js
+ <del>阿特伍德定律： 任何可以用JS实现的应用，最终都会被JS改写。</del>
+ 性能：
  + 代码执行可以提升的方面 ： **垃圾回收** 和 **动态绑定**
  + node.js(v8)件驱动无阻塞，不用再代码执行速度上再拼命了
  	* JS又在服务端又在客户端运行 -> 移植,模块化与封装性
     * 并行处理
+ underscore.js 函数式编程工具集
+ NoSQL 
    * MongoDB
    * CouchDB
+ RESTful JSON Web Services
    + post 在资源集合中创建条目
    + get 获取资源状态
    + put 更新替换资源
    + delete
```



#### **ch2 函数**


```
+ <del>函数可以作为对象使用也可以在程序运行时动态声名</del>
+ <del>优秀的程序员 ≈ 懒惰 + 效率</del>
+ 不重复造轮子，封装成函数 -> 对象 -> 模块
+ 每个函数只做一件事情
	+ 操作DOM的函数只专注于DOM操作
+ 减少**隐式副作用？？**
	+ 作用域，共享变量或属性
+ 传入函数之前先复制，不要将原始值直接传入
	+ **纯函数**：调用时不改变任何外部变量
+ **函数的正确打开方式**
	+ func() {} 不能在条件语句中声名
	+ var bar = func() {} 可以在条件语句中声名
	+ 一定要指定名称，否则变成匿名函数
	+ var bar = { f: func() {} } 易读，拆解并重排
	+ var bar = { f: func hello() {} }
		+ 具有名称的特殊匿名函数
	+ 尽量不要用func构造函数进行函数声明 ≈ eval()
```



#### **ch3 对象**


```

```


#### **ch4 模块**


```

```


#### **ch5 关注点分离**


```

```


#### **ch6 访问控制**


```

```


#### **ch7 日志**


```

```


#### **ch8 构建RESTful API**


```

```


#### **ch9 特性开关**


```

```


#### **ch10 应用工程国际化**


```
* 文本、数据、日期、货币 -> 转义
	* 日期转义 Moment.js
    * 字符串转义 il8next
    * 整体解决方案 Globalize 
    	* Unicode通用区域数据库 CLDR
* 用户区域语言偏好设置 存在cookies
	* 将默认区域语言集插入页面
    * 异步请求语言值
* Our Hour Translation服务
```


