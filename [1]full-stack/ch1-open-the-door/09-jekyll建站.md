# Jekyll

- 资源

  - [jekyll安装-centOS](https://mos.meituan.com/library/22/how-to-install-jekyll-on-centos6/)
  - [Ubuntu安装ruby](http://blog.csdn.net/chszs/article/details/42462517)
  - [centos-apache-maven安装](https://my.oschina.net/u/2358326/blog/667953) | [oneinstack安装](http://www.cnblogs.com/fx2008/p/5056123.html) | [jekyll-ubuntu](http://www.jianshu.com/p/0d6a4f94898d)

```javascript
// yam rvm
curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -   // rvm安装失败的话
// nodejs
// ruby jekyll
Jekyll 是用 Ruby 开发的静态网站框架

jekyll serve -w --host=0.0.0.0 // 这样就可以局域网访问了
nohup jekyll serve -w --host=0.0.0.0 & // 关闭cmd后台任然运行

lsof -i:4000 // netstat -ap | grep 8080
kill -9 pid

// apt-get install screen  // 还没试过
```
