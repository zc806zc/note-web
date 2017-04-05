#### 理解计算机

* Monad
  * http://adit.io/posts/2013-04-17-functors,\_applicatives,\_and\_monads\_in\_pictures.html

```
// Monad // 看不懂

fmap的内部，
实际上是这样：打开封装的数据类型，取出值，
用值函数处理以后，再封装回数据类型

Monad就是一种设计模式
通过函数拆解成互相连接的多个步骤。
你只要提供下一步运算所需的函数，整个运算就会自动进行下去。
```

![](/assets/monad.png)

* 编译器的工作原理
  * http://www.ruanyifeng.com/blog/2014/11/compiler.html

```js
1. 配置（configure） // 当前的系统环境，比如标准库在哪里...
./configure --prefix=/www --with-mysql

2. 确定标准库和头文件的位置
3. 确定依赖关系 // makefile文件
只有在B文件编译完成后，才开始编译A文件
当B文件发生变化时，A文件会被重新编译

4. 头文件的预编译
5. 预处理
6. 编译 生成机器码 // obj
7. 连接
8. 安装
9. 操作系统连接
10. 生成安装包
11. 动态链接 // .so .dll

```

* 数据库的最简单实现
  * http://www.ruanyifeng.com/blog/2014/07/database\_implementation.html

```js
// 1.数据以文本形式保存

// 2.B树
// 二叉查找树
每个节点最多只有两个子树
左子树都为小于父节点的值，右子树都为大于父节点的值
在n个节点中找到目标值，一般只需要log(n)次比较

B树是对二叉查找树的改进。
它的设计思想是，将相关数据尽量集中在一起，
以便一次读取多个数据，减少硬盘操作次数

// 3.索引
按照"主键"查找数据
C-ISAM库和D-ISAM库

// 4.高级功能
SQL解析器
两张表通过"外键"，建立连接关系的优化
数据库事务
备份机制
远程操作
```

![](/assets/b-tree.png)
