#### Canvas-**基础知识**

* [HTML5 Canvas核心技术-code-dl](https://github.com/corehtml5canvas/code)
* [Canvas-kev3d作品集](http://www.kevs3d.co.uk/dev/phoria/index.html) \| [画布中播放黑白图片](http://html5doctor.com/video-canvas-magic) \|[迟钝的水滴](http://www.blobsallad.se) \| [星空效果](http://tinyurl.com/crn3ed)
* 有视觉冲击力的Canvas应用实例

  * [~~Canvas Demos~~](http://www.canvasdemos.com) \| [~~维基知识地图~~](http://en.inforapid.org)

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

* [Making Image Filters with Canvas](https://www.gitbook.com/book/luo0412/white/edit#)

* 绘制文本影响性能 可以先保存成图片再drawImage\(\)

```js
var ctx = document.getElementById("myCanvas").getContext("2d");

// 将画布保存为图片
使用数据URL toDataURL()
使用getImageData() 然后保存到数组里 // 这个蛮要命的

// 剪裁
ctx.drawImage(img, 0, 0, 200, 100, 75, 25, 200, 100);

// 取得画布中的一幅 PNG 格式的图像
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if (drawing.getContext) {
    // 取得图像的数据 URI
    var imgURI = drawing.toDataURL("image/png");
    // 显示图像
    var image = document.createElement("img");
    image.src = imgURI;
    document.body.appendChild(image);
}


// 绘制一个不带数字的时钟表盘
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if (drawing.getContext) {
    var context = drawing.getContext("2d");

    context.beginPath(); // 开始路径
    // 绘制外圆和内圆
    context.arc(100, 100, 99, 0, 2 * Math.PI, false);

    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    // 绘制分针
    context.moveTo(100, 100);
    context.lineTo(100, 15);

    // 绘制时针
    context.moveTo(100, 100);
    context.lineTo(35, 100);

    // 描边路径
    context.stroke();
}

// 通过修改图像数据，创建一个简单的灰阶过滤器
var drawing = document.getElementById("drawing");

if (drawing.getContext) {
    var context = drawing.getContext("2d"),
        image = document.images[0],
        imageData, data,
        i, len, average,
        red, green, blue, alpha;
    //绘制原始图像
    context.drawImage(image, 0, 0);
    //取得图像数据
    imageData = context.getImageData(0, 0, image.width, image.height);
    data = imageData.data;
    for (i = 0, len = data.length; i < len; i += 4) {
        red = data[i];
        green = data[i + 1];
        blue = data[i + 2];
        alpha = data[i + 3];
        //求得 rgb 平均值
        average = Math.floor((red + green + blue) / 3);
        //设置颜色值，透明度不变
        data[i] = average;
        data[i + 1] = average;
        data[i + 2] = average;
    }
    //回写图像数据并显示结果
    imageData.data = data;
    context.putImageData(imageData, 0, 0);
}


```

---

#### **动画/精灵**

* C
  anvas动画
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



