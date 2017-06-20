# 使用CanvasAPI创建游戏

* [HTML5 Rocks](https://www.html5rocks.com/en/tutorials/canvas/hidpi/) \| [forgger游戏-code](https://github.com/denodell/frogger) \| [HTML5 Games](http://html5gamedevelopment.com/)
* 使用Canvas制作游戏, 但以前是Flash Player的专属
  * 游戏花样很多，但处理过程和结构是类似的
  * 设定游戏面板棋盘或世界
  * 定义游戏中各种行为的约束
  * 游戏角色的绘制及其动画，及其位置追踪
     （更新分值，历史最高分，剩余生命和时间，碰撞检测，损失的生命值计算，是否通关...）
  * 输入机制的控制（mouse \| kb \| touch）
* WebGL-针对 Canvas 的 3D 上下文
  * OpenGL ES 2.0
  * 并不是 W3C制定的标准
  * 某个浏览器的某个版本实现了它，并不一定意味着就真能使用它
  * 可以通过WebGL规范在canvas中建立三维图形
  * 高清Canvas元素 \|  视网膜屏幕显示 \(单个像素的边界裸眼视网膜分辨不出\)

```js
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



