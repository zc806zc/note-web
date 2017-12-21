# Canvas

- 基础

  - 把简化版的windows画图程序硬塞到网页

- 注意

  - Canvas里的width height 和 css的区别
  - Canvas是非保留性的绘图界面 记录 交互性 - save() 和 restore()

- svg基础 <http://www.cnblogs.com/yizihan/p/4585396.html>

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
    - http://blog.csdn.net/yuanxiaojiao0012/article/details/49801887

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

# 使用CanvasAPI创建游戏

- HTML5 Rocks <https://www.html5rocks.com/en/tutorials/canvas/hidpi/>
- forgger游戏 <https://github.com/denodell/frogger>
- HTML5 Games <http://html5gamedevelopment.com/>

- 使用Canvas制作游戏, 但这以前是Flash Player的专属

- 游戏的处理过程和结构都是类似的

  - 设定游戏面板棋盘或世界
  - 定义游戏中各种行为的约束
  - 输入机制的控制（mouse | kb | touch）
  - 游戏角色的绘制及其动画，及其位置追踪

    - 更新分值，历史最高分
    - 剩余生命和时间, 损失的生命值计算
    - 碰撞检测
    - 是否通关
    - ...

> flash 将于2020年停止维护

# Canvas二维码

- qrcode.js <https://github.com/davidshimjs/qrcodejs>

# Canvas粒子图

- 作品集

  - Canvas-kev3d作品集 <http://www.kevs3d.co.uk/dev/phoria/index.html>

- 粒子图

  - 画布中播放黑白图片 <http://html5doctor.com/video-canvas-magic>
  - 迟钝的水滴 <http://www.blobsallad.se>
  - 星空效果 <http://tinyurl.com/crn3ed>
  - 3D Walker <http://www.benjoffe.com/code/demos/canvascape>
  - 国际象棋 <http://htmlchess.sourceforge.net/demo/example.html>
  - 五星红旗 <http://www.jq22.com/webqd2381>
  - 星空 <http://www.jq22.com/webqd2233>
  - svg路径动画 <http://www.jq22.com/webqd2060>

```javascript
// 使用HTML5绘制标准五星红旗
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var width = canvas.width;
var height = width * 2 / 3;
var w = width / 30; //小网格的宽   
context.fillStyle = "red";
context.fillRect(0, 0, width, height);
var maxR = 0.15,
    minR = 0.05; //   
var maxX = 0.25,
    maxY = 0.25; //大五星的位置   
var minX = [0.50, 0.60, 0.60, 0.50];
var minY = [0.10, 0.20, 0.35, 0.45];
// 画大 ☆   
var ox = height * maxX,
    oy = height * maxY;
create5star(context, ox, oy, height * maxR, "#ff0", 0); //绘制五角星

// 画小 ★   
for (var idx = 0; idx < 4; idx++) {
    var sx = minX[idx] * height,
        sy = minY[idx] * height;
    var theta = Math.atan((oy - sy) / (ox - sx));
    create5star(context, sx, sy, height * minR, "#ff0", -Math.PI / 2 + theta);
}

//绘制五角星
function create5star(context, sx, sy, radius, color, rotato) {
    context.save();
    context.fillStyle = color;
    context.translate(sx, sy); //移动坐标原点
    context.rotate(Math.PI + rotato); //旋转
    context.beginPath(); //创建路径
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI / 5 * 4;
    for (var i = 0; i < 5; i++) { //画五角星的五条边
        var x = Math.sin(i * dig);
        var y = Math.cos(i * dig);
        context.lineTo(x * radius, y * radius);
    }
    context.closePath();
    context.stroke();
    context.fill();
    context.restore();
}
```
