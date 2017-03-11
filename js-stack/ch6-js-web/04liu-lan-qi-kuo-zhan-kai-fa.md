#### **浏览器调试**
+ chrome开发者工具内容 f12
	* Task Management
	* Profiles - Heap Snapshot
	* Timeline 内存时间轴
	
```
// 如何在浏览器查看代码
1.pretty-printing 重排版代码

2.source maps 缩编时添加一个指向完整版的引用
// # souceMappingURL=/scripts/scripts.js.map
X-SourceMap: /scripts/scripts/js.map

3.或使用UglifyJS或Google Closure Compiler实现
```
* 内存（泄漏） - 不再需要的变量一直没有释放？
	* console.log发布前一定要删掉
   *  函数闭包 removeEventListener
   *  多个对象之间的循环引用 - 数据引用保存独立的局部变量副本
+ 性能瓶颈：浏览器有时会出现一瞬间的锁定或冻结
    + 原因：浏览器渲染被迫优先处理JS解释器，使其赶上渲染速度
    + for 或 while执行太多的迭代
    + Collect JavaScript CPU Profile
* console.log()  可类型过滤
	* 可在调试输出时，使用配色方案，css等
	
```
console.info()  一般信息
console.bug()  辅助错误调试
console.warn() 指出 潜在问题 的具体情况
console.error() 出现 错误 并指出错误的具体情况
```
* 计时

```
console.time()
console.timeEnd()
```

------------

+ 如何在发布时自动移除console对象
	+ [grunt-strip](https://github.com/jsoverson/grunt-strip)
	+ [gulp-strip-debug](https://github.com/sindresorhus/gulp-strip-debug)
* [前端工程师必会的6个调试技术](https://read.douban.com/reader/column/5945187/chapter/30774228/)
	* 基本的调试： HTML、CSS 和 JavaScript
    * 使用网络工具对 API 进行测试
    	* 状态码与错误
    	* 设计表单时，我们可以看到它发出的参数是否是正确的
    * 对移动设备进行调试：**先在浏览器进行响应式设计，随后在真机上进行测试**。
    * 对网站的性能进行调试
    
```
// 真机测试
桌面 chrome://inspect/
android-app chrome-dev 
```
* [推荐工具 - toolbox](https://github.com/phodal/toolbox)
	* postman API
   *  Google 的 Page Speed
    
------------

+ 学习链接
	+ [Mastering The Developer Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console)
    + [谷歌开发者工具docs](https://developers.google.com/web/tools/chrome-devtools/memory-problems/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)
    + [Dev Tool Secrets](http://devtoolsecrets.com/)
    + [调试有关](http://www.jb51.net/article/58570.htm)
	+ Chrome调试台技巧 [例手动设置断点等](http://www.open-open.com/lib/view/open1416809904055.html)
	+ [Firebug使用](http://www.ruanyifeng.com/blog/2011/03/firebug_console_tutorial.html)