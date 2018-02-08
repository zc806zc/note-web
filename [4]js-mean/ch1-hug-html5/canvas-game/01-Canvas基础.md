# Canvas

- 基础

  - 把简化版的windows画图程序硬塞到网页

- 注意

  - Canvas里的width height 和 css的区别
  - Canvas是非保留性的绘图界面 记录 交互性 - save() 和 restore()

- svg基础 <http://www.cnblogs.com/yizihan/p/4585396.html>

- svg与canvas的区别

  - SVG 是一种使用 XML 描述 2D 图形的语言、Canvas 通过 JavaScript 来绘制 2D 图形。

- HTML5 MathML

- HTML5 Canvas核心技术 <https://github.com/corehtml5canvas/code>)

- 绘图库

  - Fabric.js <http://fabricjs.com>
  - KineticJS <http://kineticjs.com>
  - Paper.js <http://paperjs.org>
  - EaselJS <http://www.createjs.com>

- 工具

  - AI 插画导出HTML <http://visitmix.com/labs/ai2canvas/>
  - RGraph <http://www.rgraph.net/>
  - Zing <http://www.zingchart.com/>

- 基于Canvas的绘图程序

  - iPaint
  - SketchPad

- 使IE兼容Canvas

  - ExplorerCanvas -> VML

    - <https://github.com/arv/explorercanvas>
    - <http://blog.csdn.net/yuanxiaojiao0012/article/details/49801887>

  - FlashCanvas （推荐）

    - <https://github.com/stupidQ/flashcanvas>

```html
<script type="text/javascript" src="../html5.js"></script>
<script type="text/javascript" src="../excanvas.compiled.js"></script>

需要注意
（1） 拖拽事件参数e没有target属性，可由srcElement属性来替代
（2）拖拽事件参数e没有preventDefault方法，这个方法用了阻止默认行为，
如果没有这个方法，拖拽的时候会单独打开一个页面，可以替换为：
window.event.returnValue = false;
（3）如果显示原有的canvas节点，此时就没问题了，
可是如果动态创建节点（var nodeElement = document.createElement(“canvas”);），
不能调用getContext方法了就有问题了，可以用 G_vmlCanvasManager.initElement(nodeElement)先初始化节点，
后再getContext（），记得getContext之前要先添加节点，即$(‘main’).appendChild(nodeElement);
```

# 绘制/文本/图像视频

- [Making Image Filters with Canvas](https://www.gitbook.com/book/luo0412/white/edit#)

- 绘制文本影响性能 可以先保存成图片再drawImage()

```javascript
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
