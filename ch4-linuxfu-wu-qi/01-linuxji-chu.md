#### **Linux**

* 基础

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

目前国内Linux更多的是应用于服务器上 // 
而桌面操作系统更多使用的是Window // 图形化界面 系统构造复杂、变化频繁，且知识、技能淘汰快，深入学习困难


// 运行级别

// 正确的关机流程为：
sync > shutdown > reboot > halt

// 远程登录
SecureCRT, Putty, SSH Secure Shell
putty的ssh登录 // ...
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

```js
ls -l
```

* 文件

```js
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

#### 参考

```js
鸟哥的linux私房菜
菜鸟教程
```



