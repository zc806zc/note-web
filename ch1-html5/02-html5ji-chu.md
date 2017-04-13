#### 积极拥抱**HTML5**

* [missing-manual-website](http://www.prosetech.com/html5) \| [missing-manual-code-dl](http://www.oreilly.com/pub/missingmanuals/html5tmm2e) 
* [www.standardista.com/mobile/](http://www.standardista.com/mobile/)

* 元素更迭史

```js
https://www.w3.org/TR/html5-diff/ // 查看变动

// 1. 废弃
<nobr>  使用css的white-space: nowrap代替

// 可访问性的失败尝试
tabindex = -1 // 不起作用 可编程聚焦
tabindex = 0  // 给一个链接或表单元素之外的元素提供键盘访问的同时又不改变的页面顺序
// accesskey

// 2. 新生
<nav><footer><article><section><aside> 
<time><object>
<abbr title>
// <base>的target _blank

// 3. 幸存者
// 实用功能强势生存下来 // <iframe>   Youtube窗口, 广告和谷歌搜索框
// 或者面目全非地活下来 // 即语义的变化 
<small>  // 附属细则，页脚的法律条款
<hr>     // 主题转换 
<s>      // 不准确或不相关的内容
<b><i> go die --> <strong> 重要的文本内容  <em> 
<s><strike> --> <del> <ins>
// <embed> // 加入插件
<wbr> 单词太长允许断行 // 其实是一个换行机会 阅读目的
//  类似,但<nobr>却挂了...

// HTML5没有内联元素 块元素...的概念了 
// 因为那是基于外观的定义
eg. 语义上 <a>里可以放置任何东西了
// 且<a href="tel:16505551212">xxx</a>

// 现分为 
短语元素
区段元素 // 但即使语义限制也不能位于短语元素中
heading元素
metadata
flow流元素
嵌入式embedd元素
交互式interactive元素

// 交互式属性
contenteditable spellcheck
contextmenu
draggable dropzone


// 其他
// <ol> 的 reversed
// input和textarea 的autofocus required placeholder
// <script> type="application/xml"
// <html lang="en"> // 给不同<div>指定不同的lang，方便屏幕阅读器
```

* 浏览器与设备兼容
  * 平稳退化    
  * 积极拥抱HTML5 ,
  * Modernizer \| html5shim/html5.js
  * [浏览器市场占有率](http://gs.statcounter.com) \| [html标记争论的论坛](http://html5doctor.com) \| [Can I use](http://caniuse.com) 

```js
// 对付旧版本浏览器,使用腻子脚本
<a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills" 
    target="_blank">腻子脚本</a>

// 在IE上进行js测试 
saved from url=(0014)about:internet

// 腻子脚本 让IE支持HTML5 
通过 createElement('header')的方式

// HTML校验
w3c的W3Validator
ff插件：HTML Validator // 基于HTML Tidy,可以美化代码
```

![](/assets/h5-grammar755.png)

pic from [http://www.cnblogs.com/polk6/p/5320428.html\](http://www.cnblogs.com/polk6/p/5320428.html%29%29 \)

---

#### 动骨-HTML的语义化

* 语义化

```js
// <header>的用处
作为网页页眉
作为内容的标题(一般是附带概要日期等信息的那种)

在页眉中添加看不见的标题<h1>  display:none
// 屏幕阅读器，最好每个页面只有一个<h1>

// <figure><figcaption>添加插画,
不要让alt为空字符串，可以删除<img>的alt

<figure class="FloatLeftFigure">
<img src="human_skull.jpg" alt="Human skull" />
<figcaption>Will you be the last person standing if one of these apocalyptic
scenarios plays out?</figcaption>
</figure>

// <main> 一个页面只能有一个
// <aside> 添加附注

// <section> 略带语义的块  
// 比<div>稍具体些，适合任何以标题开头的区块
// 类似bootstrap的样式嵌套还是用div 因为并没有语义
About US
购物记录和产品清单
分组内容, 新闻站点中的一组文章，长文档的一部分

// <details><summary></summary></details>折叠框, 还不成熟

// 胖footer
HTML5规定footer不能放太多无关内容，但你可以无视啊 ORZ
或者将多余部分提取出来如下

<div id="FatFooter">
    <aside>
        <img onclick="CloseBox()" src="images/manual/close_icon.png" class="CloseButton">
    </aside>
    <footer>
    </footer>
</div>
```

* HTML5纲要（为了合理结构）
  * [在线HTML纲要生成器](http://gsnedders.html5.org/outliner/) \| [Chrome扩展 h5o](http://code.google.com/p/h5o)

```js
// 层级 h1 到 h6

// 区块根：body,blockquote,td,fieldset,
figure,details 产生自己的纲要，抓取来的文章放到 article 中就会类推下去，不会有问题

// 遇到aside 意外关闭的情况，自己写 section 或者 用 div 代替 aside
```

* SEO

```js
// data-*  
// jq已经封装
不至于与未来的属性相冲突
与微数据等有关

// 文本级的语义元素
<time>表示纽约东五区，下午4点半
pubdate表示article发布时间

<article>
Published on 
<time datetime="2014-03-21 16:30-05:00" pubdate>March 21<sup>st<sup>, 2014, at 4:30 p.m.</time>
</article>

// <output>占位符

<form action="#" id="bmiCalculator">
<label for="feet inches">Height:</label>
<input name="feet"> feet<br>
<label></label>
<input name="inches"> inches<br>
<label for="pounds">Weight:</label>
<input name="pounds"> pounds<br><br>
<input type="button" name="calc" value="Calculate"
onclick="CalculateBMI(this.form.feet.value, 
this.form.inches.value, this.form.pounds.value, 'result')" />
</form>
<p>Your BMI: <output id="result" form="bmiCalculator" for="feet inches pounds"></output></p>

// <mark>

// 其他语义标准
ARIA: 屏幕阅读器，通过属性 例 <header role="banner">
RDFa: 属性，笨重

微格式 Microformats, class="vCard"
微数据

<div itemscope itemtype="http://data-vocabulary.org/Review">
<h1 itemprop="itemreviewed">Jan's Pizza House</h1>
<p>Reviewed by <span itemprop="reviewer">Jared Elberadi</span> on
<time itemprop="dtreviewed" datetime="2011-01-26">January 26</time>.<p>
<p itemprop="summary">Pretty bad, and then the Health Department showed up.</p>
<p itemprop="description">...</p>
<p>Rating: <span itemprop="rating">0.5</span></p>
</div>


// 元数据有关工具：
Semantic inspector扩展 // 提取页面元数据

Rich Snippets工具和
Structured Data Testing Tools // https://search.google.com/structured-data/testing-tool

// 如何防止谷歌对语义化数据视而不见
语义数据不是主要内容
谷歌不使用css隐藏的语义数据
网站只包含很少的语义数据
```

### 换血-web组件进化

* web表单

```js
// 与服务器通信的方式：
表单
XMLHTTPRequest对象

// 表单验证
HTML5不能指定验证的时机 // 仅submit的时候
// 不能修改浏览器呈现控件的方式 
// 可以用jQuery UI之类的JS工具包

// input的title，autofocus

// 验证方式
客户端验证：减少填表人的麻烦
服务端验证：真正确保数据正确性

// 关闭验证
测试的时候：可以再form或input添加属性novalidate

// 验证样式 input:required:invalid 伪类
required和optional
valid和invalid
in-range和out-of-range

// 使用正则表达式
http://regexlib.com

pattern="\[A-Z\]{3}-\[0-9\]{3}"

// 自定义验证 input.setCustomValidity\(""\)
// form里添加onsubmit="return validateForm\(\)"在提交表单时自己检测

// HTML5Forms库
https://github.com/zoltan-dulac/html5Forms.js

// 几个特殊的输入属性
multiple 选择多个列表项
spellcheck
// autocomplete
// autocorrect和autocapitalize 移动设备

// 新的输入控件
email range color
url // 验证很粗略
// search // 无障碍阅读 引导
tel 至少不能接受字母
number// min max step value

// 日期和时间 也支持min和max="2014-12-31"


// 更新的元素
datalist 下拉建议列表 
<input id="" list="animal">

// progress和meter

// <menu><command></command><menu>创建工具条和菜单

// 网页中的HTML编辑器
// 放在可编辑区内的按钮不能触发事件
contenteditable编辑元素
designMode编辑页面
```

* HTML5音频和视频

```js
// HTML5不行还用成熟的Flash

版权问题 // HTML5视频可以右键下载
录制视频和音频
在线聊天的视频音频“流”

高清标清 // 根据带宽提供不同解析度
低延迟，高性能音频，虚拟合成器
动态创建和编辑视频

// <audio> 和 <vedio>属性
preload: auto | metadata | none
controls autoplay(loop)
muted poster height weight

// 不同媒体相同的mediagroup
不同角度拍摄的体育赛事

// 格式
最流行：MP3音频 H.264视频

// 编解码器 和 容器格式
// 容器
视频 + 音频 + 描述性信息 + 静态图片 + 字幕...

// 格式转换
音频
// [Audacity](http://audacity.sourceforge.net/)
// GoldWave 
// [Miro Video Converter](http://www.mirovideoconverter.com)

// Firefox插件[Firefogg](http://firefogg.org/)
// [HandBrake](http://handbrake.fr)

// 后备措施
<audio><source>
1. 上传youtube

2. Flash, Flowplayer Flash
// manual-VideoWithFlashFallback.html

3. 若Flash都没装的，提供下载链接

// 翻转方案
优先使用Flash,H5为后备

<object id="flowplayer" width="704" height="400"
data="flowplayer/flowplayer-3.2.16.swf"
type="application/x-shockwave-flash">
<param name="movie" value="flowplayer/flowplayer-3.2.16.swf" />
<param name="flashvars" value='config={"clip":"beach.mp4"}' />
<video controls width="704" height="400">
<source src="beach.mp4" type="video/mp4">
<source src="beach.webm" type="video/webm">
</video>
</object>

// 项目
JS控制播放器
currentTime play|pause

// 加载问题 使用一组audio
canPlayType("audio/ogg")

// 自定义视频播放器
播放进度条// 两个嵌套的div
onTimeUpdate

// JS媒体播放器(支持换肤)
[VideoJS](http://videojs.com/) 
<div class="video-js-box"><video class="video-js"></video></div>

// [jPlayer](http://www.jplayer.org/)

// 视频字幕
WebVTT（一致支持） 和 TTML（成熟但复杂）
[微软字幕生成器](http://tinyurl.com/capmarker)
<track>,kind属性
subtitles(外语片)和 captains(静音)

Captionator.js // 适时抓取文本
```

### 装扮-CSS3，厉害起来叫整容

* css3

```js
// class
class中的顺序不重要
但表的顺序重要

// <style>的scoped // 避免影响宿主网站 但没得到支持
移动性能： 标准反模式
style block被JS提取作为localStorage保存起来
并把keyd的值保存在cookie字符串

// 把下一代CSS拆分成一组独立的标准 // 模块 试验性
[查看兼容现状](http://tinyurl.com/css3-stages)

// CSS3使用原则
用浏览器支持的交集
// 为增强留条退路
// Modernizr // 检测支持情况
<html class="no-js">

.borderradius header {}
.no-borderradius header {}

// 实在不行js实现
开发商前缀 // ∵ 还在试验和反馈的循环中
can i use
-prefix-free // http://leaverou.github.io/prefixfree 自动添加前缀


// 多变的盒子特效
透明 // rgba 覆盖rgb
opacity // 图片半透明，动画淡入淡出

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

// Web字体
优化问题(print) + 版权问题
@font-face (EOT + TTF/OTF)

@font-face {
  font-family: 'xyz';
  src: url('xyz.eot');
  src: local('xyz'),
  url('xyz.woff') format('woff'),
  url('xyz.ttf') format('truetype'),
  url('xyz.svg') format('svg');
}

[Font Squirrel](http://www.fontsquirrel.com)
Callographic,Novelty,Retro
Webfont Generator
[Google Fonts](http://www.google.com/fonts)

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Metrophobic" />


// 多栏文本
column-count: 3;
column-width: 10em;
column-rule: 1px solid red;
column-span: all;
```

* 响应式设计

```js
// 流式布局 
等比例缩放 + 百分比

// 内外边距问题
box-sizing: border-box;
// width: calc(67% - 5px);

流式图片 // max-width: 100px;
responsive-img // http://tinyurl.com/responsive-img)
流式排版 // em rem body100%;

// 视口 // 缩小显示网页的区域，不仅仅显示角落(某一区域)?
<meta content="initial-scale=1.0" name="viewport">

// 媒体查询
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
<source src="" type="" media="(max-device-width:480px)"></source> // 媒体查询与视频

// Modernizr.mq //  更好?

// max-device-width移动设备
orientation: landscape/portrait
```



