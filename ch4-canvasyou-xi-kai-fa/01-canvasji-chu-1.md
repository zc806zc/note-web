#### Canvas-**基础知识**

* [HTML5 Canvas核心技术-code-dl](https://github.com/corehtml5canvas/code)
* [Canvas-kev3d作品集](http://www.kevs3d.co.uk/dev/phoria/index.html) \| [画布中播放黑白图片](http://html5doctor.com/video-canvas-magic) \|[迟钝的水滴](http://www.blobsallad.se) \| [星空效果](http://tinyurl.com/crn3ed)
* 有视觉冲击力的Canvas应用实例
  * [Canvas Demos](http://www.canvasdemos.com)
  * [维基知识地图](http://en.inforapid.org)
  * [3D Walker](http://www.benjoffe.com/code/demos/canvascape)
  * [国际象棋](http://htmlchess.sourceforge.net/demo/example.html)
* 绘图库 \| [关于前两者谁好的争论](https://www.gitbook.com/book/luo0412/white/edit#)
  * [Fabric.js](http://fabricjs.com)
  * [KineticJS](http://kineticjs.com)
  * [Paper.js](http://paperjs.org)
  * [EaselJS](http://www.createjs.com)
* [AI 插画导出HTML](http://visitmix.com/labs/ai2canvas/) \| [RGraph](http://www.rgraph.net/) \| [Zing](http://www.zingchart.com/)
* 基于Canvas的绘图程序
  * [iPaint](https://www.gitbook.com/book/luo0412/white/edit#)
  * [SketchPad](https://www.gitbook.com/book/luo0412/white/edit#)
* 使IE兼容Canvas
  * ExplorerCanvas VML
  * FlashCanvas （推荐）
* 简述：把简化版的windows画图程序硬塞到网页
  * Canvas里的width height 和 css的区别
  * Canvas是非保留性的绘图界面 记录 交互性 - save\(\) 和 restore\(\)

---

#### **绘制/文本/图像视频**

* 绘制文本影响性能 可以先保存成图片再drawImage\(\)

```js
var ctx = document.getElementById("myCanvas").getContext("2d");

// 将画布保存为图片
使用数据URL toDataURL()
使用getImageData() 然后保存到数组里 // 这个蛮要命的

// 剪裁
ctx.drawImage(img, 0, 0, 200, 100, 75, 25, 200, 100);
```

---

#### **动画/精灵**

* C  anvas动画
  * setTimeout\(\) 
  * setInterval\(\) 可能牺牲性能
  * requestAnimate\(\)

```js

```

---

### **物理效果/碰撞检测**

```js

```

---

### **游戏开发/自定义控件**

```js

```

---

#### **移动平台开发**

```js

```

---

#### 后记

```js
// 参考
HTML5 Canvas核心技术
```



