# Canvas-**基础知识**

- [HTML5 Canvas核心技术-code-dl](https://github.com/corehtml5canvas/code)
- [Canvas-kev3d作品集](http://www.kevs3d.co.uk/dev/phoria/index.html) | [画布中播放黑白图片](http://html5doctor.com/video-canvas-magic) |[迟钝的水滴](http://www.blobsallad.se) | [星空效果](http://tinyurl.com/crn3ed)
- 有视觉冲击力的Canvas应用实例

  - [3D Walker](http://www.benjoffe.com/code/demos/canvascape)

  - [国际象棋](http://htmlchess.sourceforge.net/demo/example.html)

- 绘图库 | [关于前两者谁好的争论](https://www.gitbook.com/book/luo0412/white/edit#)

  - [Fabric.js](http://fabricjs.com)
  - [KineticJS](http://kineticjs.com)
  - [Paper.js](http://paperjs.org)
  - [EaselJS](http://www.createjs.com)

- [AI 插画导出HTML](http://visitmix.com/labs/ai2canvas/) | [RGraph](http://www.rgraph.net/) | [Zing](http://www.zingchart.com/)

- 基于Canvas的绘图程序

  - [iPaint](https://www.gitbook.com/book/luo0412/white/edit#)
  - [SketchPad](https://www.gitbook.com/book/luo0412/white/edit#)

- 使IE兼容Canvas

  - ExplorerCanvas VML
  - FlashCanvas （推荐）

- 简述：把简化版的windows画图程序硬塞到网页

  - Canvas里的width height 和 css的区别
  - Canvas是非保留性的绘图界面 记录 交互性 - save() 和 restore()

# **绘制/文本/图像视频**

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

## 后记

```javascript
// 参考
HTML5 Canvas核心技术
```

# 使用CanvasAPI创建游戏

- [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/canvas/hidpi/) | [forgger游戏-code](https://github.com/denodell/frogger) | [HTML5 Games](http://html5gamedevelopment.com/)
- 使用Canvas制作游戏, 但以前是Flash Player的专属

  - 游戏花样很多，但处理过程和结构是类似的
  - 设定游戏面板棋盘或世界
  - 定义游戏中各种行为的约束
  - 游戏角色的绘制及其动画，及其位置追踪 （更新分值，历史最高分，剩余生命和时间，碰撞检测，损失的生命值计算，是否通关...）
  - 输入机制的控制（mouse | kb | touch）

- WebGL-针对 Canvas 的 3D 上下文

  - OpenGL ES 2.0
  - 并不是 W3C制定的标准
  - 某个浏览器的某个版本实现了它，并不一定意味着就真能使用它
  - 可以通过WebGL规范在canvas中建立三维图形
  - 高清Canvas元素 | 视网膜屏幕显示 (单个像素的边界裸眼视网膜分辨不出)

```javascript
// window的devicePixelRatio属性
1表示标准显示屏幕
2表示视网膜显示屏

但这项技术只适合较少密集图形操作的时候

// 类型化数组 ArrayBuffer类型化视图

// 视口与坐标
视口坐标的原点(0, 0)在 canvas元素的左下角
x轴和 y轴的正方向分别是向右和向上
缓冲区 gl.createBuffer()

// 错误
WebGL操作一般不会抛出错误反复调用 gl.getError()直至它返回 gl.NO_ERROR

// WebGL 中有两种着色器
顶点着色器片段（或像素）着色器
使用 OpenGL着色语言GLSL  // OpenGL Shading Language , 类 C语言

// 绘图
WebGL只能绘制三种形状 -- 点、线和三角
gl.drawArrays()数组缓冲区
gl.drawElements()元素数组缓冲区


// 使用dataView的细节
var buffer = new ArrayBuffer(20),
    view = new DataView(buffer),
    value;
view.setUint16(0, 25);
view.setUint16(2, 50); //不能从字节 1 开始，因为 16 位整数要用 2B
value = view.getUint16(0);

// 通过一个循环来调用 getError()
var errorCode = gl.getError();
while (errorCode) {
    console.log("Error occurred: " + errorCode);
    errorCode = gl.getError();
}

// OpenGL 着色语言
attribute vec2 aVertexPosition;
void main() {
    gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}
```
