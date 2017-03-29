#### **Linux**

* 基础
  * 鸟哥的linux私房菜
  * [中科大-yum](https://lug.ustc.edu.cn/wiki/mirrors/help/centos)
  * [史上最全vim快捷键](http://www.runoob.com/w3cnote/all-vim-cheatsheat.html)

```js
Linus Torvalds
基于POSIX和UNIX的
多用户、多任务、
支持多线程和多CPU的
操作系统

性能稳定的多用户网络操作系统

// 发行版
Ubuntu、RedHat、CentOS、Debain、Fedora、SuSE、OpenSUSE
// TurboLinux、BluePoint、RedFlag、Xterm、SlackWare

目前国内Linux更多的是应用于服务器上 
而桌面操作系统更多使用的是Window // 图形化界面 系统构造复杂、变化频繁，且知识、技能淘汰快，深入学习困难


// 运行级别

// 正确的关机流程为：
sync > shutdown > reboot > halt

// 远程登录
SecureCRT, Putty, SSH Secure Shell
putty的ssh登录 // ...

// yum  Yellow dog Updater, Modified
一个在Fedora和RedHat以及SUSE中的Shell前端软件包管理器
yum check-update
yum update # 更新所有的软件
yum install <package_name>
yum update <package_name>
yum list # 列出所有可安裝的软件清单命令
yum list pam*
yum remove <package_name>
yum search <keyword>

mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup // 备份

// vi/vim
快捷键

命令模式（Command mode）
插入模式（Insert mode）
底线命令模式（Last line mode） // esc q 退出程序 w 保存文件
i 切换到插入模式，以输入字符
x 删除当前光标所在处的字符
: 切换到底线命令模式，以在最底一行输入命令
```

* 安装

```js
将下载的Linux系统刻录成光盘或U盘

// 使用系统安装光盘的救援模式rescue

//忘记密码
单用户模式更改密码

// centos系统目录结构
/bin    // Binary缩写, 存放最经常使用的命令。
/boot   // 启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件。
/dev    // Device缩写, Linux的外部设备，在Linux中访问设备的方式和访问文件的方式是相同的。
/etc    // 这个目录用来存放所有的系统管理所需要的配置文件和子目录。
/home   // 用户主目录，一般以用户账号命名
/lib    // 这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。
        // 几乎所有的应用程序都需要用到这些共享库。
/lost+found // 一般为空，当系统非法关机后，这里就存放了一些文件。
/media  // linux系统会自动识别一些设备，例如U盘、光驱等等
        // 当识别后，linux会把识别的设备挂载到这个目录下。
/mnt    // 系统提供该目录是为了让用户临时挂载别的文件系统的，
        // 我们可以将光驱挂载在/mnt/上，
        // 然后进入该目录就可以查看光驱里的内容了。
/opt    // 这是给主机额外安装软件所摆放的目录。eg. ORACLE数据库
/proc   // 这个目录是一个虚拟的目录，它是系统内存的映射，
        // 我们可以通过直接访问这个目录来获取系统信息。
        // 这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件
        // 比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：
/root   // 该目录为系统管理员，也称作超级权限者的用户主目录。
/sbin   // Super User，这里存放的是系统管理员使用的系统管理程序。
/selinux // Redhat/CentOS特有，Selinux是一个安全机制，
         // 类似于windows的防火墙，但是这套机制比较复杂，
         // 这个目录就是存放selinux相关的文件的。
/srv     // 该目录存放一些服务启动之后需要提取的数据。
/sys     
// 这是linux2.6内核的一个很大的变化。该目录下安装了2.6内核中新出现的一个文件系统 sysfs 
// sysfs文件系统集成了下面3种文件系统的信息：
针对进程信息的proc文件系统、
针对设备的devfs文件系统
以及针对伪终端的devpts文件系统。

该文件系统是内核设备树的一个直观反映。
当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。

/tmp
/usr      // 应用程序和文件，类似于windows的program files
/usr/bin  // 系统用户使用的应用程序
/usr/sbin // 超级用户使用的比较高级的管理程序和系统守护程序
/usr/src  // 内核源代码默认的放置目录。
/var      // 在不断扩充着的东西，
          // 那些经常被修改的。包括各种日志文件
```

* 常用命令
  * [linux命令大全](http://www.runoob.com/linux/linux-command-manual.html) 

```js

```

* 文件

```js
ls -l # 列出目录
-a ：全部的文件，连同隐藏档( 开头为 . 的文件) 一起列出来
-d ：仅列出目录
-l ：长数据串列出，包含文件的属性与权限等等数据
eg. ls -al ~

// 文件权限
dr-xr-xr-x   2 root root 4096 Dec 14  2012 bin // d开头表示目录 (- | b c)

rwx // read write execute

chown bin install.log
chown root:root install.log

owner = rwx = 4+2+1 = 7
group = rwx = 4+2+1 = 7
others= --- = 0+0+0 = 0

chmod [-R] xyz 文件或目录 // -R recursive 连同次目录下的所有文件都会变更

chmod  a-x  .bashrc // 拿掉全部人的可执行权限

pwd 显示目前的目录
mkdir
mkdir -m 711 test2
rmdir 删除一个空的目录
cp
rm

man cp

cd ..

// 文件内容查看
cat  
tac  从最后一行开始显示 tac是cat倒着写
nl   显示的时候，顺道输出行号
more 一页一页的显示文件内容
less 与 more 类似，但是比 more 更好的是，他可以往前翻页
head 只看头几行
tail 只看尾巴几行
```

* 用户和用户组管理

```py

```

* 磁盘管理

```
df -h // 列出文件系统的整体磁盘使用量
df -h /etc
du // 检查磁盘空间使用量
du -sm /*

fdisk // 用于磁盘分区

// 磁盘格式化
mkfs -t ext3 /dev/hdc6

// 磁盘检验
// 磁盘挂载与卸除
```

#### Windows

* 常用命令

```js
alt + tab
alt + f4 关闭
shift + del
win + L 锁定计算机
ctrl +U/B/I
ctrl + shift + esc 打开任务管理器
alt + enter 打开选中对象的属性
ctrl + tab 切换浏览器
win + tab
win + r
ctrl + shift + left 选中文本
```

* 浏览器快捷键

```js
常看一下浏览器上面的提示
shift + esc 打开任务管理器
ctrl + J 下载
ctrl + T/N/W 标签页处理
ctrl + shift + T 打开最近关闭标签也
ctrl + shift + B 书签
ctrl + shift + del 清除浏览记录
ctrl + D
ctrl + H
```

#### **操作系统**

* FCFS
* 抢占式SJF
* 时间片轮转RR
* LA -&gt; PA
* 快表
* PV
  * 信号量S S&gt;0 S=0 S&lt;0
  * 互斥，非互斥
* 进程
* 5 6 8章为重点
* deadline
  * 资源分配头 
* 预防死锁
* 内核kernel
  * 强内核
  * 微内核
* 中断
* 系统调用
* 页表分类 , 三种结构

#### **考试范围**

* 填空 10分
* 单选 20分
* PV操作 10分
  * 爸爸妈妈女儿儿子 苹果橘子问题
  * 进出图书馆问题
  * PUT MOVE GET问题
* 简答 20分
* 计算题 
  * FCFS RR 抢占式SJF  10分
    * 根据不同的CPU调度算法计算平均周转时间。并画出CPU调度的甘特图。 周转时间＝等待时间＋运行时间
  * 银行家算法 10分
    * 银行家算法计算需求矩阵和安全序列
  * [FIFO OPT LRU](http://www.programering.com/a/MzN0ATMwATE.html) 求缺页率 10分
    * PPT - 页面置换算法
    * FIFO页置换:依次淘汰最先装入的页面
    * OPT\(\)页置换:依次从内存中移出以后不再使用
      的页面；如果没有这样式页面，则选择以后最长
      时间内不需要访问的页面。
    * **LRU**页置换:选择最近一段时间最久未使用的页
      面予以淘汰\( 淘汰上次使用距当前最远的页\)
  * PA -&gt; LA 5分
  * 快表计算时间 5分
    * 教材 P239 中文版252页
    * PPT - P499
    * [例题 12](http://wenku.baidu.com/link?url=gdkAZ9K-wGzUZixccsiYqrTCZ2WCEx35PzpE7zH4g6WNDVrDRvy8rpXwBJCCj3_K1sdRdhMf0kCkm36ZTzN3Ji4sd6QnOMih9QjDIeg5nom)

#### 理论

* [复习题](http://wenku.baidu.com/link?url=WArW_02gcTYCwAYLvLc6zJn8JiBw-5kDA1Sg2poOVYon1vyLcYFtoBMIUOkfIzshZPgMS9jPRZTsQYqCfzC7jcttiy-njcaIhm_MFMmbtUJEwca5JKZUcp7A3n8YKpjV) \| [2013-2014卷](http://wenku.baidu.com/link?url=JhpAd5F2rn_A_iTPWqIy9n9YZgw8_qgq5c-lcbyWfRab93fLbZyEnmDbjnL5lh9ALBOIKf2tYx3bPNKZgVle_Ey04jfj30FAB-6kaxFrMsu)

```
* 页表分类：层次页表 反向页表 哈希页表
* 多线程模型：多对一 一对多 多对多
* 死锁的定义原因和4个必要条件
* **操作系统**是计算机系统中的一个 **系统软件**，它管理和控制计算机系统中的**资源**
    * 操作系统既能管理软件，又能管理硬件
    * 在现代操作系统中引入了 **对象**，从而使并发和共享成为可能
    * **分布式**操作系统允许在一台主机上同时连接多台终端，多个用户可以通过各自的终端同时交互地使用计算机
    * <del>从用户的观点看，操作系统是 **用户与计算机硬件之间的接口**
* **链接文件**存储方式适合于 **顺序** 存取
* 进程 程序 线程
    * 进程和程序的本质区别是前者为**动态**的，后者为**静态**的
    * **原子操作** 一个操作中的所有动作要么全做，要么全不做，它是一个不可分割的操作。 
    * 当一个进程处于 **它正等待合作进程的一个消息状态** 时，称其为等待（或阻塞）状态
    * 一个进程释放一种资源将有可能导致一个或几个进程 **由阻塞变就绪**
    * 当处理器空闲时，调度程序从 **就绪** 进程队列中选择一个进程给其分配CPU，处于 **阻塞** 状态的进程是不会获得CPU的
    * **死锁**：多个进程因竞争资源而造成的永久性阻塞的现象。
    * 死锁产生的原因和必要条件 
    * 进程从运行状态（Running）进入就绪状态（Ready）的原因可能是 **时间片用完**
    * **最短任务优先（SJF）**可能会导致进程饿死（Starvation）
* ??? 计算机操作系统中有3个用户进程，若Wait（P）、Signal（V）操作的信号量S初值为2，当前值为－2，则表示当前有（**2**）个进程在等待
* <del>显示当前目录所在的位置命令是 **pwd**
* 下列哪种方法不能实现客户端-服务器（Client-Server）模式的进程间通信     
    * A．远程方法调用（Remote Method Invocation） 
    * B．远程过程调用（Remote Procedure Calls） 
    * C．套接字编程（Sockets） 
    * **D．消息传递系统**（Message Passing Systems） 
* 在**响应比最高者优先**的作业调度算法中，当各个作业等待时间相同时，**运行时间短的** 的作业将得到优先调度；当各个作业要求运行的时间相同时， **等待时间长** 的作业得到优先调度
* <del>某系统中共有10台磁带机被 m 个进程竞争，每个进程最多要求3台磁带机，那么当m的取值不超过 **4** 时，系统不会发生死锁 
    * (max - 1)*m + 1 <= all   =>  **m <= 4**
* <del>设有8页的逻辑空间，每页有1024字节，它们被映射32块的物理存储区中,那么，逻辑地址的有效位是（13）位，物理地址至少是（15）位
* 某系统采用分页存储管理（Paging），页长（Page Size）为1K（1024），该进程分页后0、1、2，三页分别装入到主存的1、2、4帧（Frame）。现有一逻辑地址（Logical Address）为2048，页内地址（Page Offset）为（ B）。 
    * A．2048    
    * **B．0**
    * C．1024    
    * D．2
* 上述条件中，如果逻辑地址（Logical Address）为2048，则它的物理地址（Physical Address）为 **4096**
* <del>某页式管理系统中，地址寄存器的低11位表示页内地址，则页面大小为 **2KB**
*  **临界区** 在每个进程中访问临界资源的那段代码 
*  **虚拟存储器** , 是指仅把作业的一部分装入内存便可运行作业的存储器系统。也即是具有请求调入功能和置换功能，能从逻辑上进行内存扩充的一种存储系统。  
    *  要求程序运行前不必全部装入内存且在运行过程中不必一直驻留在内存
* 请求分页式存储管理允许作业在执行过程中，如果所要访问的页面不在主存中，则产生的中断称**缺页中断**
```

#### 参考

```js
菜鸟教程
```



