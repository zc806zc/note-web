### **HTML5基础**
+  HTML5 the missing manual
	+  [missing manual网站](http://www.prosetech.com/html5)
	+  [代码下载](http://www.oreilly.com/pub/missingmanuals/html5tmm2e)

* * * * *

* 废弃元素
~~~
<nobr>  使用css的white-space: nowrap代替 
~~~
+ 新生元素
~~~
<nav>
<section> <aside> 
<time><object>
<abbr>

<base>的target   _blank

data-*  jq已经封装
~~~
* 幸存者: 因其实用功能或者改弦易辙
~~~
<iframe>   Youtube窗口, 广告和谷歌搜索框
<small>  语义转化成 附属细则，页脚的法律条款
<hr> 主题转换 
<s> 不再准确和相关的内容
<b><i> --> <strong> 重要的文本内容  <em> 
<s> <strike> --> <del> <ins>
<embed>加入插件
<wbr> 单词太长允许断行, 但是 <nobr> 挂了...
~~~
* HTML5带来的小变动
~~~
<a>里可以放置任何东西

<ol>加了reversed属性
input和textarea的autofocus required placeholder
script也可用于用户自定义的数据块 例type="application/xml"

可以给不同<div>指定不同的lang，方便屏幕阅读器 
<html lang="en">
~~~

* * * * *

+ 浏览器与设备兼容
	+ 平稳退化	
	+ 积极拥抱HTML5  [Can I use](http://caniuse.com) ,
    * Modernizer检测功能
    * html5shim，html5.js(让IE支持HTML5)，通过 createElement('header')的方式
~~~
// 对付旧版本浏览器,使用腻子脚本
<a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills" target="_blank">腻子脚本</a>

// 在IE上进行js测试 
saved from url=(0014)about:internet 
~~~
+ [浏览器市场占有情况](http://gs.statcounter.com)
+ [html标记争论的论坛](http://html5doctor.com)

* * * * *

* HTML校验
	* w3c -> W3Validator
   * ff插件：HTML Validator（基于HTML Tidy,可以美化代码）

* * * * *

* 语义化
~~~
// <header>的用处
作为网页页眉
作为内容的标题(一般是附带概要日期等信息的那种)

在页眉中添加看不见的标题<h1>  display:none
屏幕阅读器，最好每个页面只有一个<h1>

<figure><figcaption>添加插画,
不要让alt为空字符串，可以删除<img>的alt
代码示例如下

<figure class="FloatLeftFigure">
<img src="human_skull.jpg" alt="Human skull" />
<figcaption>Will you be the last person standing if one of these apocalyptic
scenarios plays out?</figcaption>
</figure>
   
<aside> 添加附注

<section>  比  <div>稍具体些，适合任何以标题开头的区块
About US
购物记录和产品清单
分组内容, 新闻站点中的一组文章，长文档的一部分

<details><summary></summary></details>折叠框, 还不成熟

如何实现胖footer
H5规定footer不能放太多无关内容，但是可以无视啊。。。
或将多余部分提取出来
   
<div id="FatFooter">
    <aside>
        <img onclick="CloseBox()" src="images/manual/close_icon.png" class="CloseButton">
    </aside>
    <footer>
    </footer>
</div>

<main>，一个页面只能有一个
~~~

* HTML5纲要（为了合理结构）
	+ [在线HTML纲要生成器](http://gsnedders.html5.org/outliner/)
	+ [Chrome扩展 h5o](http://code.google.com/p/h5o)
	+ 层级 h1 到 h6
	+ 区块根：body,blockquote,td,fieldset,figure,details 产生自己的纲要，抓取来的文章放到 article 中就会类推下去，不会有问题
   + aside 意外关闭的情况，自己写 section  或者 用 div 代替 aside 
* SEO
+ 文本级的语义元素
+ `<time>`表示纽约东五区，下午4点半，pubdate表article发布时间
```
<article>
Published on <time datetime="2014-03-21 16:30-05:00" pubdate>March 21<sup>st<sup>, 2014, at 4:30 p.m.</time>
</article>
```
+ `<output>`，占位符
```
<form action="#" id="bmiCalculator">
<label for="feet inches">Height:</label>
<input name="feet"> feet<br>
<label></label>
<input name="inches"> inches<br>
<label for="pounds">Weight:</label>
<input name="pounds"> pounds<br><br>
<input type="button" name="calc" value="Calculate"
onclick="CalculateBMI(this.form.feet.value, this.form.inches.value, this.form.pounds.value, 'result')" />
</form>
<p>Your BMI: <output id="result" form="bmiCalculator" for="feet inches pounds"></output></p>
```
+ `<mark>`
+ 其他语义标准
+ ARIA: 屏幕阅读器，通过属性 例`<header role="banner">`
+ RDFa: 属性，笨重
+ 微格式(Microformats), class="vCard"
+ 微数据：
```
<div itemscope itemtype="http://data-vocabulary.org/Review">
<h1 itemprop="itemreviewed">Jan's Pizza House</h1>
<p>Reviewed by <span itemprop="reviewer">Jared Elberadi</span> on
<time itemprop="dtreviewed" datetime="2011-01-26">January 26</time>.<p>
<p itemprop="summary">Pretty bad, and then the Health Department showed up.</p>
<p itemprop="description">...</p>
<p>Rating: <span itemprop="rating">0.5</span></p>
</div>
```
+ 元数据有关工具：
+ Semantic inspector扩展：提取页面元数据
+ Rich Snippets工具和[Structured Data Testing Tools](https://search.google.com/structured-data/testing-tool)
+ 如何防止谷歌对语义化数据视而不见
+ 语义数据不是主要内容
+ 谷歌不使用css隐藏的语义数据
+ 网站只包含很少的语义数据

### web表单
+ 与服务器通信的方式：
+ 表单
+ XMLHTTPRequest对象
+ 表单验证（H5不能指定验证的时机，仅submit的时候）
+ 限制：不能修改浏览器呈现控件的方式 (解决：jQuery UI之类的JS工具包)
+ input的title，autofocus属性
+ 验证方式
+ 客户端验证：减少填表人的麻烦
+ 服务端验证：真正确保数据正确性
+ 关闭验证，测试的时候：可以再form或input添加属性novalidate
+ 验证样式(例 input:required:invalid 伪类)
+ required和optional
+ valid和invalid
+ in-range和out-of-range
+ 使用[正则表达式](http://regexlib.com/) pattern="[A-Z]{3}-[0-9]{3}"
+ 自定义验证 input.setCustomValidity("")
+ form里添加onsubmit="return validateForm()"，在提交表单时自己检测
+ [HTML5Forms库](https://github.com/zoltan-dulac/html5Forms.js)
+ 几个特殊的输入属性
+ multiple 选择多个列表项
+ spellcheck
+ autocomplete
+ autocorrect和autocapitalize 移动设备
+ 新的输入控件
+ email 注意控制也可以通过验证（required）
+ url 验证粗略
+ search 无障碍阅读 引导
+ tel 至少不能接受字母
+ number(min max step value)
+ range
+ 日期和时间 也支持min和max="2014-12-31"
+ color
+ 更新的元素
+ datalist 下拉建议列表 `<input id="" list="animal">`
+ progress和meter
+ `<menu><command></command><menu>`创建工具条和菜单
+ 网页中的HTML编辑器（放在可编辑区内的按钮不能触发事件）
+ contenteditable编辑元素
+ designMode编辑页面



### H5音频和视频
+ 不行还用Flash
+ 版权问题，H5视频可右键下载
+ 录制视频和音频， 在线聊天的视频音频“流”
+ 根据带宽提供不同解析度， 高清标清
+ 低延迟，高性能音频，虚拟合成器
+ 动态创建和编辑视频
+ `<audio>`和`<vedio>`属性
+ preload: auto(下载整个) metadata(开头数据) none
+ controls
+ autoplay loop
+ muted poster height weight
+ 不同媒体相同的mediagroup，不同角度拍摄的体育赛事
+ 格式
+ 最流行：MP3音频 H.264视频
+ 编解码器 和 容器格式
+ 容器：视频 + 音频 + 描述性信息 + 静态图片 + 字幕...
+ 格式转换
+ 音频[Audacity](http://audacity.sourceforge.net/)
+ GoldWave
+ [Miro Video Converter](http://www.mirovideoconverter.com)
+ Firefox插件[Firefogg](http://firefogg.org/)
+ [HandBrake](http://handbrake.fr)
+ 后备措施
+ `<audio><source>`
+ 上传youtube
+ Flash, Flowplayer Flash,参考manual-VideoWithFlashFallback.html
+ Flash都没装的，提供下载链接
+ 翻转方案：优先使用Flash,H5为后备
```
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
```
+ 项目
+ JS控制播放器
+ currentTime play() pause()
+ 加载问题：使用一组audio
+ canPlayType("audio/ogg")
+ 自定义视频播放器
+ 播放进度条，两个嵌套的div
+ onTimeUpdate
+ JS媒体播放器(支持换肤)
+ [VideoJS](http://videojs.com/) `<div class="video-js-box"><video class="video-js"></video></div>`
+ [jPlayer](http://www.jplayer.org/)
+ 视频字幕
+ WebVTT（一致支持） 和 TTML（成熟但复杂）
+ [微软字幕生成器](http://tinyurl.com/capmarker)
+ `<track>`,kind属性：subtitles(外语片)和 captains(静音)
+ Captionator.js 适时抓取文本

### CSS3：字体 + 特效
+ 把下一代CSS拆分成一组独立的标准，模块，试验性
+ [查看兼容现状](http://tinyurl.com/css3-stages)
+ CSS3使用原则
+ 用能用的 所有浏览器的支持
+ 作为增强留条退路
+ Modernizr
```
<html class="no-js">
检测支持情况
.borderradius header {}
.no-borderradius header {}
```
+ 必不可少的最好js实现
+ 开发商前缀，还在试验和反馈的循环中
+ [支持情况can i use](http://caniuse.com)
+ 自动添加前缀 [-prefix-free](http://leaverou.github.io/prefixfree)
+ 多变的盒子 特效
+ 透明
+ rgba()覆盖rgb()
+ opacity(图片半透明，动画淡入淡出)
+ 圆角
+ border-radius: 25px 50px 25px 85px;
+ 椭圆 border-top-left-radius: 150px 30px;
+ 背景
```
background-image: url('a.png'), url('b.png');
background-position: left top, right bottom;
background-repeat: no-repeat, no-repeat;
```
+ 阴影
+ box-shadow
```
box-shadow: 5px 5px 10px 5px(伸展范围) gray;
box-shadow: 0px 0px 20px lime inset;
```
+ text-shadow
```
text-shadow: gray 10px 10px 7px;
```
+ 渐变
+ 线性渐变
```
liner-gradient(from top, white, blue);
liner-gradient(to top left, white 0%, blue20%, yellow 100%);
```
两次的background-image，先pic后渐变，遇上聪明的browser可不下载pic
+ 放射性渐变
```
radial-gradient(circle at 90% 5%, white, lightblue);
```
+ 循环渐变(注意头咬尾)
```
repeating-linear-gradient(circle, yellow, green 10%);
repeating-radial-gradient(to top, red, orange, white, yellow 30px);
```
+ 渐变生成工具
+ [Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor)
+ [微软的](http://tinyurl.com/ms-gradient)
+ 过渡
+ 伪类hover + transition
```
transition: background 0.5s, color 0.5s;
transition: all 0.5s;
transition: opacity 10s ease-in-out 0.1s(delay);
```
+ padding margin font-size不值得过渡，最好变形实现
+ js实现过渡 日夜景图
+ 变换
+ scale scaleX scaleY
+ skew(10deg)
+ rotate(10deg)
+ tansform-origin: 0% 0%; 参照点
+ [3D变换](http://tinyurl.com/3d-transitions)
+ Web字体
+ 优化问题(print) + 版权问题
+ @font-face (EOT + TTF/OTF)
```
@font-face {
font-family: 'xyz';
src: url('xyz.eot');
src: local('xyz'),
url('xyz.woff') format('woff'),
url('xyz.ttf') format('truetype'),
url('xyz.svg') format('svg');
}
```
+ [Font Squirrel](http://www.fontsquirrel.com)
+ 推荐：Callographic,Novelty,Retro
+ Webfont Generator生成
+ [Google Fonts](http://www.google.com/fonts)
```
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Metrophobic" />
```
+ 多栏文本
+ column-count: 3;
+ column-width: 10em;
+ column-rule: 1px solid red;
+ column-span: all;
### 响应式设计
+ 流式布局 等比例缩放 + 百分比
+ 内外边距问题
+ box-sizing: border-box;
+ width: calc(67% - 5px);
+ 流式图片：max-width: 100px;
+ [responsive-img](http://tinyurl.com/responsive-img)
+ 流式排版：em rem body100%;
+ 视口: 缩小显示网页的区域，不仅仅显示角落
```
<meta content="initial-scale=1.0" name="viewport">
```
+ 媒体查询
+ max-width min-width
+ @media, not, 568px
```
@media (max-width: 568px) {
.NavSidebar {
float: none;
width: 100%;
min-height: 0em;
}

.Content {
float: none;
width: 100%;
}
}
```
+ `<link rel="stylesheet" media="print and (min-width: 25cm)" href="" />`
+ Modernizr.mq() 更好
+ max-device-width(移动设备), orientation: landscape/portrait
+ 媒体查询与视频
```
<source src="" type="" media="(max-device-width:480px)"></source>
```