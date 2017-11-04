# Docker

- 安装

```go
// uname -r // 内核版本要高于 3.10
sudo service docker start

sudo docker run ubuntu:15.10 /bin/echo "Hello world" // 镜像本地若没有则下载
此时我们已进入一个 ubuntu15.10系统的容器
cat /proc/version // 查看当前系统的版本信息
ls

exit/ ctrl + D // 退出

// 运行交互是容器
docker run -i -t ubuntu:15.10 /bin/bash
/bin/echo "Hello world"

// 启动容器（后台模式）
docker run -d ubuntu:15.10 /bin/sh -c "while true; do echo hello world; sleep 1; done"
docker ps // 查看容器是否在运行
```

- 基础

  - [docker](https://github.com/docker/docker) | [docker-hub](https://hub.docker.com/)

```go
一个开源的应用容器引擎
让开发者打包他们的应用以及依赖包
到一个轻量级、可移植的容器中
然后发布到任何流行的 Linux 机器上
也可以实现虚拟化

容器是完全使用沙箱机制，
相互之间不会有任何接口
更重要的是容器性能开销极低

// 应用场景
// 适合运维工程师及后端开发人员
Web 应用的自动化打包和发布
自动化测试和持续集成、发布
在服务型环境中部署和调整数据库或其他的后台应用
从头编译或者扩展现有的OpenShift或Cloud Foundry平台来搭建自己的PaaS环境 ?

// 对手
VMware

// 优点
1、简化程序
2、避免选择恐惧症
3、节省开支 // 改变了虚拟化的方式

// Docker 架构
(C/S) 架构模式
使用远程API来管理和创建Docker容器

容器与镜像的关系类似于面向对象编程中的对象与类
```

- Docker镜像使用

```go
```

- Docker 安装 Nginx/Apache/Tomcat

```go
```

- Docker安装 PHP

```go
```

- Docker安装Python

```go
```

- Docker安装 MYSQL/MongoDB/Redis

```go
```

- 参考

```go
菜鸟教程
```
