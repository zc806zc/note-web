### CSS3动画

* [10个优秀的CSS和JS Logo动画示例](https://zhuanlan.zhihu.com/p/26155443) \| [纯CSS制作各种图案](https://segmentfault.com/a/1190000002780453)

* [小丑汽车技术](https://github.com/estelle/clowncar) 把多张大图片装进一个svg

* CSS3 - 把下一代CSS试验性地拆分成一组独立的标准模块

  * 而且是还在试验和反馈的循环中。。

  * 查看兼容现状  http://tinyurl.com/css3-stages

  * Modernizr 检测支持情况

  * -prefix-free自动添加前缀 http://leaverou.github.io/prefixfree 

```js
// <style>的scoped // 避免影响宿主网站 但没得到支持

// CSS3使用原则
用浏览器支持的交集

<html class="no-js">
.borderradius header {}
.no-borderradius header {}

// 圆角 border-radius: 25px 50px 25px 85px;
// 椭圆 border-top-left-radius: 150px 30px;

// 背景
background-image: url('a.png'), url('b.png');
background-position: left top, right bottom;
background-repeat: no-repeat, no-repeat;

// 阴影
box-shadow: 5px 5px 10px 5px(伸展范围) gray;
box-shadow: 0px 0px 20px lime inset;
text-shadow: gray 10px 10px 7px;

// 渐变
// 线性渐变
liner-gradient(from top, white, blue);
liner-gradient(to top left, white 0%, blue20%, yellow 100%);
两次的background-image，先pic后渐变，遇上聪明的browser可不下载pic

// 放射性渐变
radial-gradient(circle at 90% 5%, white, lightblue);

// 循环渐变 // 注意咬尾
repeating-linear-gradient(circle, yellow, green 10%);
repeating-radial-gradient(to top, red, orange, white, yellow 30px);

// 渐变生成工具
[Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor)
http://tinyurl.com/ms-gradient
```

* 动画

```js
// 过渡
伪类hover + transition

transition: background 0.5s, color 0.5s;
transition: all 0.5s;
transition: opacity 10s ease-in-out 0.1s(delay);

// padding margin font-size不值得过渡，最好变形实现
// eg. js实现过渡 日夜景图

// 变换
scale scaleX scaleY
skew(10deg)
rotate(10deg)
tansform-origin: 0% 0%; // 参照点
[3D变换](http://tinyurl.com/3d-transitions)
```

* 移动性能 - 标准反模式 , s  tyle block被JS提取作为localStorage保存起来  , 并把keyd的值保存在cookie字符串

* 多栏文本

```js
column-count: 3;
column-width: 10em;
column-rule: 1px solid red;
column-span: all;
```

* web字体

  * Font Squirrel http://www.fontsquirrel.com（推荐Callographic,Novelty,Retro    字体）

  * Webfont Generator

  * Google Fonts http://www.google.com/fonts

```js
// 还面临的问题
打印优化问题 + 版权问题
@font-face (EOT + TTF/OTF)
@font-face {
  font-family: 'xyz';
  src: url('xyz.eot');
  src: local('xyz'),
  url('xyz.woff') format('woff'),
  url('xyz.ttf') format('truetype'),
  url('xyz.svg') format('svg');
}

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Metrophobic" />
```

---

#### 响应式布局

* 流式布局 = 等比例缩放 + 百分比
  * 流式图片

```
box-sizing: border-box;
// width: calc(67% - 5px);

流式图片 // max-width: 100px;
responsive-img // http://tinyurl.com/responsive-img
流式排版 // em rem body 100%;
```

* 内外边距问题视口等等？

```js
// 视口
<meta content="initial-scale=1.0" name="viewport">

// Modernizr.mq

// max-device-width移动设备
orientation: landscape/portrait
```

* 媒体查询

```js
max-width min-width
@media, not, 568px
@media (max-width: 568px) {
    .NavSidebar {
        float: none;
        width: 100%;
        min-height: 0em;
    }
}
<link rel="stylesheet" media="print and (min-width: 25cm)" href="" />
<source src="" type="" media="(max-device-width:480px)"></source>
```



