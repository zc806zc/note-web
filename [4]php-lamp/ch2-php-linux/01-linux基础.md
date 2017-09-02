# **Linux**

- **常用命令** <https://juejin.im/entry/599b9e07f265da246d6af09f?utm_source=gold_browser_extension>
- 常用软件

<https://juejin.im/entry/599bdfb8f265da24722fb77d?utm\_source=gold\_browser\_extension\#%E9%9F%B3%E9%A2%91>

- 安装

```javascript
// 将下载的Linux系统刻录成光盘或U盘

// 救援模式rescue
// 忘记密码 可使用单用户模式更改密码

// centos系统目录结构
/bin    // Binary, 最经常使用的命令
/boot   // 启动
/dev    // Device
/etc    // 配置文件
/home  
/lib    // 类似于Windows里的DLL文件。
/lost+found // 非法关机后
/media  // 会把识别的设备 例如U盘、光驱等等挂载到这个目录下
/mnt    
/opt    // 额外安装软件
/proc   
/root   
/sbin   // Super User
/selinux // Redhat/CentOS特有，是一个安全机制
/srv    
/sys     
/tmp
/usr      // 类似于windows的program files
/usr/bin  // 系统用户使用的应用程序
/usr/sbin
/usr/src  // 内核源代码默认的放置目录
/var      // 在不断扩充着的东西，那些经常被修改的 包括各种日志文件
```

- 基础

  - 鸟哥的linux私房菜
  - [中科大-yum](https://lug.ustc.edu.cn/wiki/mirrors/help/centos) | [史上最全vim快捷键](http://www.runoob.com/w3cnote/all-vim-cheatsheat.html) | [linux命令大全](http://www.runoob.com/linux/linux-command-manual.html)
  - [Linux探索之旅-谢恩铭](https://juejin.im/post/58de122244d904006d050466)

```javascript
Linus Torvalds
基于POSIX和UNIX的
多用户、多任务、 支持多线程和多CPU的 操作系统
// 性能稳定的多用户网络操作系统

// 发行版
Ubuntu、RedHat、CentOS、Debain、Fedora、SuSE、OpenSUSE
// TurboLinux、BluePoint、RedFlag、Xterm、SlackWare

目前国内Linux更多的是应用于服务器上
而桌面操作系统更多使用的是Window
// 图形化界面 系统构造复杂、变化频繁，且知识、技能淘汰快，深入学习困难

// 运行级别

// 正确的关机流程为：
// sync > shutdown > reboot > halt

// 远程登录
SecureCRT, Putty, SSH Secure Shell // putty的ssh登录

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

// 备份
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

// vi/vim
命令模式 Command mode
插入模式 Insert mode // i 切换到插入模式，以输入字符 x 删除当前光标所在处的字符
底线命令模式 Last line mode // esc q 退出程序 w 保存文件 :wq
// : 切换到底线命令模式，以在最底一行输入命令
```

- **文件**

```javascript
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

- 用户和用户组管理

```python
useradd –d /usr/sam -m sam
useradd -s /bin/sh -g group –G adm,root gem
userdel sam

usermod -s /bin/ksh -d /home/z –g developer sam

passwd sam
passwd -l sam # 锁定某一用户，使其不能登录

groupadd group1
groupadd -g 101 group2
groupdel group1
groupmod -g 102 group2
groupmod –g 10000 -n group3 group2

newgrp root # 切换到其他用户组

/etc/passwd文件是用户管理工作涉及的最重要的一个文件
/etc/shadow

// 标准的伪用户
eg. audit, cron, mail, usenet等
它们都各自为相关的进程和文件所需要

// 批量操作
eg. 批量增加新用户
newusers < user.txt
```

- 磁盘管理

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

# Windows常用命令

```javascript
// 常用command
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
ctrl + shift + left // 选中文本

// 浏览器快捷键
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
