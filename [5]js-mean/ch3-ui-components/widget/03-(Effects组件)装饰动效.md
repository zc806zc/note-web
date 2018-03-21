# 图标 | 字体 | ICON

- 方案

  - font-awesome <https://github.com/FortAwesome/Font-Awesome>
  - 阿里矢量图标库 <http://www.iconfont.cn/>
  - svg <https://icons8.com/preloaders/en/free>
  - google图标 <https://github.com/google/material-design-icons>
  - <http://cssicon.space/#/>
  - svg4everybody <https://github.com/jonathantneal/svg4everybody>
  - feather <https://github.com/feathericons/feather>

  - Snap.svg

    - <https://github.com/adobe-webplatform/Snap.svg>
    - 一个操纵 SVG 节点/制作 SVG 动画的框架
    - <https://aotu.io/notes/2017/01/22/snapsvg/index.html>

  - 大量象形文字 <https://github.com/ryanoasis/nerd-fonts>

- 使用 SVG 打造一个高质量的 ICON 系统 <http://svgtrick.com/tricks/fefc144c481dde654be5455e8e34a6e1>

- 手摸手，带你优雅的使用 icon <https://juejin.im/post/59bb864b5188257e7a427c09>

--------------------------------------------------------------------------------

# 基础样式 | 表单元素梅花

- 表单美化 <https://www.imooc.com/learn/42>

# 文章

- mocka <https://github.com/Chalarangelo/mocka>

  - Simple, elegant content placeholder

# 舒服的阅读配色

- 易佰教程等教程类
- kindle

# 打印优化

```javascript
.page-break    { page-break-before: always; }
/* put this class into your main.css file with "display:none;" */
```

# 文本截断

- css
- js <http://www.jq22.com/webqd2751>
- 插件 <https://dollarshaveclub.github.io/shave/>

```javascript
var shortName = "我和我好朋友写代码的照片.jpg".replace(/^(^.{8})(.+)(.{2}\.+\w+$)$/g, "$1...$3");
document.getElementById('output').append(shortName);

// 多行
p {
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:5;
  overflow:hidden;
  width:200px;
  margin:50px;
}
```

--------------------------------------------------------------------------------

# 动画

- 方案

  - animate.css
  - jquery.easing <https://github.com/gdsmith/jquery.easing>
  - wow.js
  - Hover.css <https://github.com/IanLunn/Hover>
  - quicksand (jQuery plugin. Reorder and filter items with a nice shuffling animation.)

- 网站

  - jq22
  - <http://www.17sucai.com/>
  - microjs <http://microjs.com/>

- 粒子效果

  - create.js

- 一组简单可爱的css动效 <https://github.com/jonsuh/hamburgers>

- 插件

  - animate.css | A+
  - Effeckt <https://github.com/h5bp/Effeckt.css>
  - mojs

    - <https://github.com/legomushroom/mojs>
    - motion graphics toolbelt for the web

  - popmotion <https://github.com/Popmotion/popmotion>

    - Create unique animations and interactions with tweens, physics and input tracking.

- 页面滚动效果

  - wow
  - aos <https://github.com/michalsnik/aos>

--------------------------------------------------------------------------------

# 交互

- interact.js

  - <https://github.com/taye/interact.js>
  - <http://www.jq22.com/yanshi17203>

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

--------------------------------------------------------------------------------

# 色彩方案

- 配色方案
- 分析网页主色/配色方案

  - <http://www.jq22.com/jquery-info235>

- 取色器

- 渐变背景色

- 换肤

# 色彩

- 右下角角标选中/标记

  - <http://www.jq22.com/webqd1488>

- 按钮变化

  - 汉堡按钮变形 <http://www.jq22.com/webqd2638>

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

--------------------------------------------------------------------------------

# 特效

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

- 饿了么添加菜品小球动画

  - <http://www.jq22.com/webqd2892>

- 卷轴动画

  - <http://www.jq22.com/webqd790>

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

  - 宣传的话用 <https://www.wpcom.cn/>

![](http://img.blog.csdn.net/20160624154959099)

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

# 悬停时 鼓动别人做出选择

- 卡片的弹起 <https://haobtc.com/>

```javascript
body {
background-color: #F5F5F5;
}

img {
box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
margin-top:40px;
}

img:hover {
box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.1);
-moz-transform: scale(1.1, 1.1);
-o-transform: scale(1.1, 1.1);
-webkit-transform: scale(1.1, 1.1);
-moz-transform: translate(0px, -6px);
-o-transform: translate(0px, -6px);
-webkit-transform: translate(0px, -6px);
/*transition: transform 0.2s linear 0s; */
transition: 0.15s ease-in-out;
}
```

![](http://img.blog.csdn.net/20160624145302114)

# 翻牌

- <http://zarget.com/>

![](http://img.blog.csdn.net/20160624151017937)

# 点亮灰暗的图标

- <http://www.bootcdn.cn/>

![](http://img.blog.csdn.net/20160624151525285)

- 数字跳动

  - <https://haobtc.com/>

![](http://img.blog.csdn.net/20160624153323805)

- 页脚动画

  - <http://www.ottoradio.com/>

![](http://img.blog.csdn.net/20160624154431215)

- 用于定位的标签 这张页面做的比较长，导航处的标签选项只是用于定位。

  - <https://swite.com/en/>

![](http://img.blog.csdn.net/20160624153506874)
