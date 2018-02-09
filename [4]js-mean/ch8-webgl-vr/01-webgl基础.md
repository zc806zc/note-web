# 虚拟现实

- VR
- AR

- 基础知识

  - 图形管线
  - 顶点 图元 片元 像素
  - OpenGL
  - 几何建模
  - 线框模型
  - 三角风格
  - 参数曲面(自由曲面)
  - 隐式曲面
  - 点云
  - 计算几何算法
  - 空间划分
  - 碰撞检测
  - 层次细节(LOD)
  - 层次包围盒

- 硬件

  - 立体显示原理
  - 人机交互技术
  - 触觉设备
  - 自然接口设备
  - 人机交互算法

- 其他

  - 计算机动画
  - 三维游戏 游戏引擎Unity3D

# WebGL

- 针对 Canvas 的 3D 上下文

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

# WebGL基础

- <http://www.yiibai.com/webgl/>
- 发展前景

```javascript
OpenGL → WebGL(WebVR) → three.js
webVR = web + VR
```

- 书单

  - Learning Three.js:The JavaScript 3D Library for WebGL

- 网站
- 入门博客 <http://blog.csdn.net/lijunfan1994/article/details/52370629>
- 官方示例 <https://threejs.org/examples/>
- Three.js入门教程 <http://www.cnblogs.com/yiyezhai/category/447410.html>
- WebGL中文网 <http://www.webglchina.cn/>
- HiWebGL <http://www.hiwebgl.com/>
- 官方文档<https://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene>
- three中文手册 <https://luo0412.github.io/luo-WebGL-ThreeJS/ThreeJS-Notes-doc/index.html>
- 干货分享 <http://blog.csdn.net/tencent_bugly/article/details/52414003>

- 软件

```javascript
3Dmax 2009
```

- WebGL与Canvas的暧昧

  - <http://www.zhangxinxu.com/wordpress/2011/10/html5-canvas-webgl-css-shaders-glsl%E7%9A%84%E6%9A%A7%E6%98%A7%E5%85%B3%E7%B3%BB/>
  - <http://www.zhangxinxu.com/wordpress/category/graphic/canvas-graphic/>

```javascript
WebGL是一种3D绘图标准，
这种绘图技术标准允许把JavaScript和OpenGL ES 2.0结合在一起，
通过增加OpenGL ES 2.0的一个JavaScript绑定，
WebGL可以为HTML5 Canvas提供硬件3D加速渲染，
这样Web开发人员就可以借助系统显卡来
在浏览器里更流畅地展示3D场景和模型了，
还能创建复杂的导航和数据视觉化。

显然，WebGL技术标准免去了开发网页专用渲染插件的麻烦，
可被用于创建具有复杂3D结构的网站页面，
甚至可以用来设计3D网页游戏等等。
```

# Web VR

- three.js
- Babylon.js <https://github.com/BabylonJS/Babylon.js>
- pixi.js <https://github.com/pixijs/pixi.js>
- <http://www.ibiblio.org/e-notes/webgl/models.htm#tex>

# 图像处理

- [6 款 Javascript 的图像处理库 - Tine](https://juejin.im/post/58c0edac0ce4630054592a78)
