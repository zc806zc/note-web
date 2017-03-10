#### **HTML5基础2**
* Canvas绘图与交互动画
+ 把简化版的windows画图程序硬塞到网页
+ `var ctx = document.getElementById("myCanvas").getContext("2d");`
+ 画布大小(默认 300*150)
+ `<canvas>`里的width height
+ css里的设置
+ 变换变的是坐标系
+ save() 和 restore()
+ 绘图库
+ [Fabric.js](http://fabricjs.com)
+ [KineticJS](http://kineticjs.com)
+ 关于上述两者的争论[Stack Overflow](http://tinyurl.com/canvas-libraries)
+ [AI 插画导出HTML](http://visitmix.com/labs/ai2canvas/)
+ [RGraph](http://www.rgraph.net/)
+ [Zing](http://www.zingchart.com/)
+ 将画布保存为图片
+ 使用数据URL `toDataURL`
+ 使用getImageData()
+ 保存到数组里(要命)
+ 基于Canvas的绘图程序
+ [iPaint](htttp://tinyurl.com/js-ipaint)
+ [SketchPad](http://mugtug.com/sketchpad)
+ IE兼容Canvas
+ [ExplorerCanvas](http://code.google.com/p/explorercanvas) VML
+ FlashCanvas 推荐
+ 绘制图像 drawImage()
+ createImage() 一点一点画
+ 使用网页中已有的`<img>`
+ 先创建对象，再加载外部图片
+ 剪裁`ctx.drawImage(img, 0, 0, 200, 100, 75, 25, 200, 100);`
+ [画布中播放黑白图片](http://html5doctor.com/video-canvas-magic)
+ 绘制文本影响性能 可以先保存成图片再drawImage()
+ Canvas是非保留性的绘图界面 记录 交互性
+ clearRect() 绘图逻辑执行完毕后才清楚或绘制所有内容
+ Canvas动画
+ setTimeout() 放循环里
+ setInterval() 周期循环 clearInterval() 可能牺牲性能
+ [迟钝的水滴](http://www.blobsallad.se)
+ [星空效果](http://tinyurl.com/crn3ed)
+ Canvas动画框架
+ Fabric.js
+ KineticJS
+ [Paper.js](http://paperjs.org)
+ [EaselJS](http://www.createjs.com)
+ 有视觉冲击力的Canvas应用实例
+ [Canvas Demos](http://www.canvasdemos.com)
+ [维基知识地图](http://en.inforapid.org)
+ [3D Walker](http://www.benjoffe.com/code/demos/canvascape)
+ [国际象棋](http://htmlchess.sourceforge.net/demo/example.html)


### 数据存储
+ web存储
+ localStorage 本地存储 上限5M
+ sessionStorage 会话存储
+ 迷宫游戏
+ localstorage 自己的代码存在bug，不能保存最后位置
+ 但源代码[测试](http://www.prosetech.com/html5/Chapter%2010/Maze.html)
+ JSON编码
+ JSON.stringify()
+ JSON.parse()
+ File API
+ Blob 一大块数据 逐块处理
+ readAsDataURL()
+ IndexDB(已经废弃的Web SQL Database)
+ 创建离线应用 离线访问
+ 超级定制缓存 性能优化
+ 改进本地存储 简单快捷
+ `data-url` 自定义数据 浏览器可忽略

### 离线应用
+ manifest file 描述文件
+ CACHE MANIFEST
+  NETWORK 总是从服务器获取不缓存 `*`
+ FALLBACK 是否在线而互换 `/`
+ SETTING: prefer-online
+ 不要缓存有查询字符串的页面
+ 描述文件更新 加注释版本号

### 与web服务器通信
+ 通信的方式
+ 服务器发送事件
+ Web Socket框架
+ Web Socket
+ [简单试验](http://www.websocket.org/echo.html)
+ [PHP](http://code.google.com/p/phpwebsocket)
+ [Ruby](http://github.com/igrigorik/em-websocket)
+ [Python](http://code.google.com/p/pywebsocket)
+ [.NET](http://superwebsocket.codeplex.com)
+ [Java](http://jwebsocket.org/)
+ [node.js](http://github.com/miksago/node-websocket-server)
+ [Kaazing](http://kaazing.com/products/html5-edition.html)

### 地理定位、Web Worker和历史管理
+ 地理定位
+ [Manual Geolocation 插件](http://tinyurl.com/manual-geo) 伪造位置
+ `getCurrentPosition()`
+ position.coords.longtitude
+ position.coords.latitude
+ `watchPosition()` 跟踪访客移动
+ `clearPosition()`
+ Web Worker
 + 不同的线程不能同时占用相同的内存区域
 + 费时的任务 把任务放到后台
+ 在多个任务中重用Web Worker
+ 创建多个Web Worker
+ 在一个WW里创建另一个WW
+ 通过WW下载数据
+ 利用WW执行周期性任务
+ 会话历史
 + `history.back()` `forward()` `go()`
+ 新功能核心: `pushState()` 改变URL但不刷新
+ `onPopState()` 前者存入新状态 这个是返回某个状态
+ 以往解决方案 hashbang URL
 + 创建额外页面
+ 服务端包含技术 
~~~
<!-- #include file="footer.html" -->
~~~
+ Adobe Dreamweaver web模板功能
