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

# 开发案例

- 基于Create.js
- <http://www.ryjiaoyu.com/book/details/6086>

# 围住神经猫游戏

# 看你有多色

# 太空英雄大战

# HTML5小游戏---爱心鱼

- <https://www.imooc.com/learn/516>

# javascript高仿热血传奇游戏

- <https://juejin.im/post/5a8d85506fb9a0634417f120>
