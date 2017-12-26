# Effect/Animate/Decoration

主要分为以下几类

- 图标|字体

  - <https://icons8.com/preloaders/en/free>

- 动画

  - 网站

    - jq22
    - <http://www.17sucai.com/>
    - <http://microjs.com/>

  - 粒子效果

    - create.js

  - SuperSlide v2.1.1 <http://www.SuperSlide2.com/>

  - jquery.easing <https://github.com/gdsmith/jquery.easing>

```javascript
// 动画 ====================
quicksand
jQuery plugin. Reorder and filter items with a nice shuffling animation.

// create a smooth jump to sub navigational menu in one JS call
jumpto

// wow.js
Reveal Animations When You Scroll. Very Animate.css Friend :-)
Easily customize animation settings: style, delay, length, offset, iterations...


// 效果
Filterizr is a jQuery plugin that sorts, shuffles and applies stunning filters over
responsive galleries using CSS3 transitions and custom CSS effects.
```

- 交互

  - interact.js <https://github.com/taye/interact.js>

    - <http://www.jq22.com/yanshi17203>

- 色彩

  - 配色方案
  - 分析网页主色/配色方案

    - <http://www.jq22.com/jquery-info235>

  - 取色器

  - 渐变背景色

  - 换肤

# 图标库

- feather

  - <https://github.com/feathericons/feather>

- Snap.svg

  - <https://github.com/adobe-webplatform/Snap.svg>
  - 一个操纵 SVG 节点/制作 SVG 动画的框架
  - <https://aotu.io/notes/2017/01/22/snapsvg/index.html>

- <https://github.com/FortAwesome/Font-Awesome>

- 大量象形文字 <https://github.com/ryanoasis/nerd-fonts>

# 动画

- 插件

  - animate.css | A+
  - Effeckt <https://github.com/h5bp/Effeckt.css>
  - mojs

    - <https://github.com/legomushroom/mojs>
    - motion graphics toolbelt for the web

  - popmotion <https://github.com/Popmotion/popmotion>

    - Create unique animations and interactions with tweens, physics and input tracking.

# 交互

# 色彩

- 右下角角标选中/标记

  - <http://www.jq22.com/webqd1488>

- 按钮变化

  - =变× <http://www.jq22.com/webqd2638>

```javascript
<div class="wrap">
    <span></span>

    <span></span>
</div>


.wrap {
    width:48px;
    height:30px;
    border:1px solid #ccc;
    position:relative;
}
span {
    height:2px;
    position:absolute;
    color:#484848;
    width:30px;
    margin:10px 10px;
    display:block;
    background:#484848;
    transition:.5s;
}
span:nth-child(2) {
    top:10px
}
.span1 {
    position:absolute;
    transform:rotate(-46deg);
    margin:15px  10px;
    height:2px;
    transition:.5s;
}
.span2 {
    position:absolute;
    transform:rotate(45deg);
    margin:5px 10px;
    height:2px;
    transition:.5s;
}
```

- 数字滚动显示

  - <http://www.jq22.com/webqd2739>
  - <http://www.jq22.com/webqd1652>

- 导航滑动跟随效果 <http://www.jq22.com/webqd1900>

```javascript
$("ul>li").hover(function() {
    var x = $(this).offset().left - 40; //计算li的位置
    console.log(x);
    $("span").css("marginLeft", x)
}, function() {
    $("span").css("marginLeft", "0")
})
```

- 导航下划线动画 <http://www.jq22.com/webqd2744>

```css
.nav1 a {
    width:70px;
    height:100%;
    float:left;
    margin:0 15px;
    position:relative;
    text-align:center;
}
.nav1 a span {
    margin:auto;
    display:inline-block;
    position:absolute;
    bottom:5px;
    left:0;
    right:0;
    width:0px;
    height:2px;
    background:#ff0000;
    transition:.5s;
    border-radius:50px;
}
.nav1 a:hover span {
    width:100%;
    left:0;
}
```

- 图片响应模式

  - 3D倾斜响应 <http://www.jq22.com/webqd2763>
  - 放大(传统首选)
  - 抖动 <http://www.jq22.com/webqd3242>
  - 模仿小米 图片hover的阴影效果 <http://www.jq22.com/webqd1367>

```less
// 放大
.pic-box {
    width: 200px;
    height:200px;
    overflow: hidden; // 超出隐藏

    img {
        width: 100%;
        transition: transform 1.6s; // 动画过渡

        &:hover{
          transform: scale(2.0);
        }
    }
}

// 抖动
body{
    padding:30px;
}
img:hover {
    -webkit-animation:sucaijiayuan 1s .1s ease both;
    -moz-animation:tada 1s .1s ease both;
}
@-webkit-keyframes sucaijiayuan {
    0% {
         -webkit-transform:scale(1)
  }
  10%,20% {
         -webkit-transform:scale(0.8) rotate(-2deg)
  }
   30%,50%,70%,90% {
        -webkit-transform:scale(1.1) rotate(2deg)
  }
  40%,60%,80% {
         -webkit-transform:scale(1.1) rotate(-2deg)
  }
  100% {
          -webkit-transform:scale(1) rotate(0)
  }
}
```

- 饿了么添加菜品小球动画

  - <http://www.jq22.com/webqd2892>

- 卷轴动画

  - <http://www.jq22.com/webqd790>

- 代码高亮

  - <https://asvd.github.io/microlight/>

- 对勾 <http://www.jq22.com/webqd1741>

- 雨雪风霜

  - 下雪 <http://www.jq22.com/webqd2417>
  - 代码雨 <http://www.jq22.com/webqd2385>

- 缓动效果/逐帧动画/闪烁动画

- 状态平滑的动画

- 波纹动画

  - <http://www.jq22.com/webqd2309>
  - 实用导航点击效果 <http://www.jq22.com/webqd1977>

- 呼吸灯 <http://www.jq22.com/webqd1732>

- 鼠标

  - 鼠标滑过 <http://www.jq22.com/webqd2506>
  - 鼠标跟随 <http://www.jq22.com/webqd2430> | 鼠标蛇 <http://www.jq22.com/webqd2385>
  - 鼠标替换

- CSS3-3D立方体 <http://www.html5tricks.com/demo/css3-3d-cube-rotate/index.html>

- 打字动画

  - typetype <https://github.com/iamdanfox/typetype>
  - 简单 <http://www.jq22.com/webqd2098>
  - css3 <http://www.jq22.com/webqd1444>

```javascript
// 思路
var zi = "这是个神奇的网站！";
var i = 0;
var divObj; //全局变量
function init() {
    divObj = document.getElementById("divId");
    setInterval(show, 200); //每个指定的毫秒执行一次函数
}init();

function show() {
    i++;
    var jzi = zi.substring(0, i); //截取字符串，每次截取一个
    divObj.innerHTML = jzi; //往div设置内容
    if (i == zi.length) { //当字符串写完后，重新开始执行
        i = 0;
    }
}
```

- 纸张效果 <http://www.zhangxinxu.com/wordpress/2011/02/几种纯csscss3下的纸张效果展示/>
- 锯齿效果 <http://www.softwhy.com/forum.php?mod=viewthread&tid=19089>
- 加载

  - <https://codepen.io/collection/jifIK/>
  - <https://github.com/tobiasahlin/SpinKit>

- 动画效果

```javascript
默认情况下，所有 HTML 元素的位置都是静态的，并且无法移动。如需对位置进行操作，记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute。
```

- 图片炸裂 <http://www.jq22.com/webqd3028>

- 拖放

  - draggable <https://github.com/Shopify/draggable>
  - 图片 <http://www.jq22.com/webqd2950>
  - 支持排序 <http://www.jq22.com/webqd2944>
  - HTML5拖拽 <http://www.jq22.com/webqd2072>

```javascript
// 图片拖放
<div id="wrap2" class="wrap" ondragover="allowDrop(event)" ondrop="drop(event)"></div>

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Img");
    ev.target.appendChild(document.getElementById(data));
}

// 拖拽排序
function DragDrop(id) {
    this.parentBox = document.getElementById(id)
    this.editSwith = this.parentBox.querySelector('.editOrder');
    this.save = this.parentBox.querySelector('.save');
    this.list = this.parentBox.querySelector('.list');
    this.li = this.list.querySelectorAll('li');
    this.aPosXY = []; //原始位置
    this.aPosXYClone = [];
    this.moveStatus = false; //移动状态
    this.editAble = false; //编辑状态
    this.dashedBox = null;
    this.moveItem = null;
    this.moveItemH = null;
    this.mouseDownPos = [];
    this.inScope = false;
}

//鼠标移动
DragDrop.prototype.mouseMove = function(e, obj) {

    var relativeListX = e.pageX - this.list.offsetLeft; //鼠标相对ul的位置 x
    var relativeListY = e.pageY - this.list.offsetTop; //鼠标相对ul的位置 y
    var objIndex = obj.getAttribute('data-index'); //获取当前选中元素的下标
    var objLeft = this.aPosXY[objIndex].x;
    var objTop = this.aPosXY[objIndex].y; //根据下标获取当前选中元素 固定的时候的定位 x,y;
    //      console.log('objLeft：'+objLeft+'  objTop：'+objTop); //  objLeft：10px  objTop：10px
    var relativeObjX = this.mouseDownPos.x - parseInt(objLeft); //鼠标按下时鼠标相对于选中元素的位置x
    var relativeObjY = this.mouseDownPos.y - parseInt(objTop); //鼠标按下时鼠标相对于选中元素的位置y
    var objMoveX = relativeListX - relativeObjX;
    var objMoveY = relativeListY - relativeObjY;
    //      console.log(objMoveX +'  '+objMoveY)
    //      console.log('x:'+relativeListX+' y:'+relativeListY);
    //      console.log('x:'+relativeObjX+' y:'+relativeObjY);
    setCss(obj, {
        'left': objMoveX + 'px',
        'top': objMoveY + 'px'
    });
    for (var i = 0; i < this.aPosXYClone.length; i++) {
        if (!(i == objIndex)) {
            if (objMoveY + obj.offsetHeight >= parseInt(this.aPosXYClone[i].y) + this.li[i].offsetHeight / 2 && objMoveY + obj.offsetHeight < parseInt(this.aPosXYClone[i].y) + this.li[i].offsetHeight || objMoveY >= parseInt(this.aPosXYClone[i].y) && objMoveY < parseInt(this.aPosXYClone[i].y) + this.li[i].offsetHeight / 2) {
                //            console.log(i);
                var ts = [];
                ts.x = this.dashedBox.style.left;
                ts.y = this.dashedBox.style.top;
                this.aPosXYClone[objIndex] = this.aPosXYClone[i];
                this.aPosXYClone[i] = ts;
                setCss(this.dashedBox, {
                    'left': this.aPosXYClone[objIndex].x,
                    'top': this.aPosXYClone[objIndex].y
                });
                setCss(this.li[i], {
                    'left': ts.x,
                    'top': ts.y
                });
                //            console.log(this.aPosXYClone)
                //            console.log(this.aPosXY)
                return false;
            }
        }
    }

}
```
