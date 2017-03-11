#### **Canvas基础2**
* 使用CanvasAPI创建游戏
	* SitePoint
	* [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/canvas/hidpi/)
    * [forgger代码](https://github.com/denodell/frogger)
    * [HTML5 Games](http://html5gamedevelopment.com/)


```
可以通过WebGL规范在canvas中建立三维图形
高清Canvas元素

// 视网膜屏幕显示 
单个像素的边界裸眼视网膜分辨不出

window的devicePixelRatio属性 
表示当前屏幕所支持的标准显示分辨率对应的显示分辨率系数
1表示标准显示屏幕,2表示视网膜显示屏
但这项技术只适合较少密集图形操作的时候

// 使用Canvas制作游戏
以前是Flash Player的专属
游戏处理过程和结构

设定游戏面板棋盘或世界，
定义游戏中各种行为的约束
游戏角色的绘制及其动画，及其位置追踪
输入机制的控制（mouse,kb,touch...）

更新分值，历史最高分，剩余生命和时间
碰撞检测，损失的生命值计算，是否通关...


```

------------

* 使用canvas绘图
	* [Making Image Filters with Canvas](http://www.html5rocks.com/en/tutorials/canvas/imagefilters/)


```
绘制上下文

绘制路径

// 模式
repeat  repeat-x 
repeat-y
no-repeat

合成

// WebGL
针对 Canvas 的 3D 上下文

并不是 W3C 制定的标准
某个浏览器的某个版本实现了它，并不一定意味着就真能使用它
WebGL 目前只适合实验性地学习，不适合真正开发和应用

OpenGL ES 2.0
   
类型化数组 ArrayBuffer
类型化视图

// 视口与坐标
视口坐标的原点(0,0)在 canvas元素的左下角
x轴和 y 轴的正方向分别是向右和向上

缓冲区  gl.createBuffer() 

// 错误
WebGL 操作一般不会抛出错误
反复调用 gl.getError() 直至它返回gl.NO_ERROR

// WebGL 中有两种着色器
顶点着色器
片段（或像素）着色器
使用 **GLSL**（OpenGL Shading Language，OpenGL 着色语言）写的
类 C 语言

// 绘图
WebGL 只能绘制三种形状：点、线和三角
gl.drawArrays() 数组缓冲区
gl.drawElements()  元素数组缓冲区

纹理


// 取得画布中的一幅 PNG 格式的图像
var drawing = document.getElementById("drawing");
//确定浏览器支持<canvas>元素
if (drawing.getContext){
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
if (drawing.getContext){
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

if (drawing.getContext){
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
  for (i=0, len=data.length; i < len; i+=4){
  red = data[i];
  green = data[i+1];
  blue = data[i+2];
  alpha = data[i+3];
  //求得 rgb 平均值
  average = Math.floor((red + green + blue) / 3);
  //设置颜色值，透明度不变
  data[i] = average;
  data[i+1] = average;
  data[i+2] = average;
	}
  //回写图像数据并显示结果
  imageData.data = data;
  context.putImageData(imageData, 0, 0);
}

// 使用dataView的细节
var buffer = new ArrayBuffer(20),
	  view = new DataView(buffer),
      value;
view.setUint16(0, 25);
view.setUint16(2, 50); //不能从字节 1 开始，因为 16 位整数要用 2B
value = view.getUint16(0);

// 通过一个循环来调用 getError() 
var errorCode = gl.getError();
while(errorCode){
	console.log("Error occurred: " + errorCode);
	errorCode = gl.getError();
}

// OpenGL 着色语言
attribute vec2 aVertexPosition;
void main() {
gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}


```
