# HTML

- HTML标记争论的论坛 <http://html5doctor.com>
- 移动meta标记

  - 关于head <http://www.css88.com/archives/6410>

```javascript
<meta http-equiv="refresh" content="30"> // 每30秒中刷新当前页面:

<meta charset="UTF-8">

<!-- 视图窗口，移动端特属的标签。 -->
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no">

<!-- 是否启动webapp功能，会删除默认的苹果工具栏和菜单栏。 -->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- 这个主要是根据实际的页面设计的主体色为搭配来进行设置。 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<!-- 忽略页面中的数字识别为电话号码,email识别 -->
<meta name="format-detection" content="telephone=no, email=no">

<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">

<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">

<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">

<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- UC应用模式 -->
<meta name="browsermode" content="application">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">

<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

<!-- pc端调整页面兼容代码 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="renderer" content="webkit|ie-comp|ie-stand">

// 移动厂商特有的值
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
```

- YAML

  - <http://www.ruanyifeng.com/blog/2016/07/yaml.html>
  - <https://github.com/nodeca/js-yaml> ([JS-YAML](https://github.com/nodeca/js-yaml)库 把函数和正则表达式转为字符串)

```javascript
YAML 是专门用来写配置文件的语言，非常简洁和强大
远比 JSON 格式方便

一种通用的数据串行化格式
只允许使用空格

// 支持的数据结构
对象
数组
纯量（scalars） // 单个的、不可再分的值

hash: { name: Steve, foo: bar }
// { hash: { name: 'Steve', foo: 'bar' } } // JS

-
 - Cat
 - Dog
 - Goldfish
// [ [ 'Cat', 'Dog', 'Goldfish' ] ] // JS

// 复合结构

// 纯量
parent: ~
// { parent: null } // JS

e: !!str 123
f: !!str true
// { e: '123', f: 'true' } // 强调数据类型转化

// | > + -
// 锚点&和别名*，可以用来引用
```

- 浏览器内核与渲染引擎

> 浏览器会思考，而且经常会取笑我们

# 积极拥抱HTML5

> 开发人员就不要说H5了,不然会显得自己很low, HTML5 ≠ 那些个酷炫的页面, HTML5更多的是新标准而不是新技术

- HTML5 有哪些让你惊艳的 demo？ <https://www.zhihu.com/question/24398907>
- html5-boilerplate

  - <https://github.com/h5bp/html5-boilerplate>
  - A professional front-end template for building fast, robust, and adaptable web apps or sites.

- HTML5秘籍

  - <http://www.prosetech.com/html5>

- HTML5移动开发

  - <http://www.oreilly.com/pub/missingmanuals/html5tmm2e>
  - <http://www.standardista.com/mobile/>

- 渐近增强|优雅降级

  - 浏览器与设备兼容
  - Modernizer | html5shiv/html5.js

    - <https://github.com/Modernizr/Modernizr>

  - 浏览器市场占有率 <http://gs.statcounter.com>

  - Can I use
  - 腻子脚本

    - <https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills>
    - 腻子脚本 通过 createElement('header')的方式 让IE支持HTML5

```javascript
// 在IE上进行js测试
saved from url=(0014)about:internet
```

# HTML5语义化

- 元素更迭史

  - <https://www.w3.org/TR/html5-diff>

```javascript
<nobr>  // 被css white-space: nowrap 代替

// 可访问性的失败尝试
tabindex = -1|0  
accesskey // 按键紊乱

<nav><footer><time><object>...
<abbr title>
<base>的target _blank
<embed> // 对规范来说是新的 加入插件

<iframe>   Youtube窗口, 广告和谷歌搜索框
// 新增srcdoc sandbox seamless等属性

<small>  // 附属细则，页脚的法律条款
<hr>     // 主题转换
<s>      // 不准确或不相关的内容
// <b>      // eg.摘要的关键字
<strong> // 重要
<em>     // 强调  
<del> <ins> // 原来<s><strike>
<wbr> // 换行机会 阅读目的 但<nobr>却挂了...

// 其他
<ol> 的 reversed
input和textarea 的autofocus required placeholder
<script> type="application/xml"
<html lang="en"> // 方便屏幕阅读器

<map><area> http://www.runoob.com/try/try.php?filename=tryhtml_areamap
```

![](/assets/h5-grammar755.png)

- 语义化

  - 再没有内联元素块元素的概念了，因为那是外观定义不是语义定义
  - 分类

    - 短语元素 段落 img span
    - 区段元素 章式 article nav aside
    - heading 标题 h6 hgroup
    - metadata 元数据 link meta base...
    - flow流元素 span div
    - 嵌入式embedd元素 iframe svg
    - 交互式interactive元素 a button input select

- 语义化的优势

  - 让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析
  - 使阅读源代码的人更容易将网站分块，便于阅读、维护和理解
  - 搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，有利于SEO

```javascript
<a>里可以放置任何东西了
<a href="tel:16505551212">xxx</a>
// href也不是必需的了

//  datalist
<input list="browsers">

<datalist id="browsers">
  <option value="Internet Explorer">
  </option><option value="Firefox">
  </option><option value="Chrome">
  </option><option value="Opera">
  </option><option value="Safari">
</option></datalist>


// 交互式属性
contenteditable spellcheck
contextmenu
draggable dropzone

// <header>
作网页页眉
作为内容的标题 // 一般是附带概要日期等信息的那种
// 在页眉中添加看不见的标题<h1> // display:none
// 屏幕阅读器，最好每个页面只有一个<h1>


<figure class="FloatLeftFigure" alt="Human skull"> // figure的alt不要为空(/字符串)
    <img src="human_skull.jpg" /> // <img>的alt可以删除?
    <figcaption>Will you be the last person standing if one of these apocalyptic
    scenarios plays out?</figcaption>
</figure>

// <section> 略带语义的块 适合任何以标题开头的区块
// 类似bootstrap的样式嵌套还是用div // 因为并没有语义
eg. About US
购物记录和产品清单
分组内容, // 新闻站点中的一组文章 长文档的一部分

// HTML5规定footer不能放太多无关内容, 但你可以无视啊 ORZ...
<div id="FatFooter">
    <aside>
        <img onclick="CloseBox()" src="images/manual/close_icon.png" class="CloseButton">
    </aside>
    <footer>
    </footer>
</div>

// 其他
// <details><summary></summary></details>折叠框, 还不成熟
details * {display:none; }
details summary {display: auto; }
details[open] * {display: auto; }
// <menu><menuitem> // 类似右键菜单 支持不好
```

- HTML校验

  - w3c的W3Validator
  - ff插件：HTML Validator // 基于HTML Tidy,可以美化代码

- 生成HTML5纲要

  - 为了合理结构
  - 在线HTML纲要生成器 <http://gsnedders.html5.org/outliner>
  - Chrome扩展 h5o <http://code.google.com/p/h5o>

```javascript
// h1~h6 层级
// 区块根 body,blockquote,td,fieldset
figure,details 会产生自己的纲要
抓取来的文章放到 article 中就会类推下去
不会有问题

// 遇到aside 意外关闭的情况
可以自己写 section / div 代替 aside
```

- HTML5的SEO

```css
// data-*  
// jq已经封装
不至于与未来的属性相冲突
与微数据等有关

// 文本级的语义元素
// <mark>
<article>
    Published on
    <time datetime="2014-03-21 16:30-05:00" pubdate> // pubdate表示article发布时间
    March 21<sup>st<sup>, 2014, at 4:30 p.m.
    </time> // <time>表示纽约东五区，下午4点半
</article>

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


// 其他语义标准
ARIA 屏幕阅读器，通过属性 // eg. <header role="banner">
RDFa 属性，笨重
微格式 Microformats, class="vCard"
微数据

// <div itemscope itemtype="http://data-vocabulary.org/Review">
// <h1 itemprop="itemreviewed">Jan's Pizza House</h1>
// <p>Reviewed by <span itemprop="reviewer">Jared Elberadi</span> on
// <time itemprop="dtreviewed" datetime="2011-01-26">January 26</time>.<p>
// <p itemprop="summary">Pretty bad, and then the Health Department showed up.</p>
// <p itemprop="description">...</p>
// <p>Rating: <span itemprop="rating">0.5</span></p>
// </div>


// 元数据有关工具
Semantic inspector扩展 // 提取页面元数据
Rich Snippets工具
Structured Data Testing Tools // https://search.google.com/structured-data/testing-tool

// 谷歌对什么数据视而不见?
语义数据不是主要内容 网站只包含很少的语义数据
// 谷歌不使用css隐藏的语义数据
```

# HTML5组件进化

- web表单

  - [html5Forms.js](https://github.com/zoltan-dulac/html5Forms.js)
  - <http://regexlib.com> 使用正则表达式验证

```javascript
// 与服务器通信的方式 // 表单 + XMLHTTPRequest

表单可以不在form里 // <input form="form1">

// 表单验证
HTML5不能指定验证的时机 // 仅submit时
// form或input添加属性novalidate // 测试时关闭验证
// 自定义验证 input.setCustomValidity("")
// form里添加onsubmit="return validateForm()"

// 验证方式
客户端验证 // 减少填表人的麻烦
服务端验证 // 真正确保数据正确性

// 验证样式
required和optional // aria-required="true" 增强可访问性
valid和invalid
in-range和out-of-range
// readonly与disabled // 能否随form提交

element.validity // 8/10种表单控件属性

// 伪类使用
input:required:invalid
input:placeholder-shown {}

// 输入属性
multiple
// autocomplete spellcheck
// autocorrect和autocapitalize 移动设备

// 新的输入控件
email color progress和meter url // url验证很粗略 IOS的键盘显示
range // input[type=range] {-webkit-apperance: slider-vertical;}
// search // 无障碍阅读 引导
tel // 至少不能接受字母
number// min max step value
// 日期和时间 也支持min和max="2014-12-31"
datalist
// <input id="" list="animal">
// datalist优雅降级 内嵌select
// <menu><command></command><menu>创建工具条和菜单?

// HTML编辑器
// 放在可编辑区内的按钮不能触发事件
contenteditable // 编辑元素
designMode // 编辑页面
```

- HTML5音频和视频

  - 工具 Amaya | Inkspace
  - videojs.com 换肤定制 | Handbrake 转码
  - 视频完全方案 HTML5 + Flash + link
  - 视频自适应 <https://alistapart.com/article/creating-intrinsic-ratios-for-video>
  - https://github.com/Chimeejs/chimee

```javascript
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
最流行：MP3音频 H .264 视频

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
1\. 上传youtube
2\. Flash, Flowplayer Flash
// manual-VideoWithFlashFallback.html
3\. 若Flash都没装的，提供下载链接

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

<!-- 嵌入视频 -->
<video id="myVideo">
<source src="conference.webm" type="video/webm; codecs='vp8, vorbis'">
<source src="conference.ogv" type="video/ogg; codecs='theora, vorbis'">
<source src="conference.mpg">
Video player not available.
</video>

<!-- 嵌入音频 -->
<audio id="myAudio">
<source src="song.ogg" type="audio/ogg">
<source src="song.mp3" type="audio/mpeg">
Audio player not available.
</audio>
```
