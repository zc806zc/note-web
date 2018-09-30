# 图像处理

- 6 款 Javascript 的图像处理库 <https://juejin.im/post/58c0edac0ce4630054592a78>

- device-pixel-ratio

  - <http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/>

- 视网膜类似设备 retina.js

# 倒计时 | 计时器

...

# 繁简字转化

- OpenCC <https://github.com/BYVoid/OpenCC>


# 浏览器信息

- <http://www.jq22.com/webqd77>
- feature.js

  - <https://github.com/viljamis/feature.js>


# 阅读器 | 网页 打印

- jqprint <http://www.jq22.com/jquery-info347>
- pdf.js
- <https://github.com/MrRio/jsPDF>
- <https://github.com/devongovett/pdfkit>
- https://github.com/RelaxedJS/ReLaXed


# 放大镜 | zoom

- Magnifier IE8+ https://github.com/mark-rolich/Magnifier.js
- jfMagnify <https://github.com/fonstok/jfMagnify>
- jquery.etalage.min.js https://github.com/flintdigital/jquery-plugin-gallery-etalage
- jquery.panzoom 
    - IE9+ 利用CSS3
    - https://github.com/timmywil/jquery.panzoom
- jqzoom
- 栗子
  - <http://www.jq22.com/webqd643>

# 截图

- jcrop <http://www.bootcdn.cn/jquery-jcrop/>
- smartcrop <https://github.com/jwagner/smartcrop.js>
- html2canvas <https://github.com/niklasvh/html2canvas>

- 栗子

  - <http://www.shearphoto.com/>
  - 精简版JS <http://www.jq22.com/webqd2110>

- img2css <https://github.com/javierbyte/img2css>

  - 图片转css


# 聊天

- Rocket.Chat <https://github.com/RocketChat/Rocket.Chat>

- 聊天室 <http://www.jq22.com/webqd2560>


# 地图

- Leaflet <https://github.com/Leaflet/Leaflet>

# 视频

- 多青：dogeek.net/
- chimee <https://github.com/Chimeejs/chimee>
- video.js

  - <https://github.com/videojs/video.js>
  - open source HTML5 & Flash video player

- jplayer https://github.com/jplayer/jPlayer
    - 兼容 IE8+ 
- ckplayer
- flv.js

  - <https://github.com/Bilibili/flv.js>

- plyr

  - <https://github.com/sampotts/plyr>

- DPlayer 
  - 一个很好看的弹幕视频播放
  - https://github.com/MoePlayer/DPlayer


# 音频

- howler <https://github.com/goldfire/howler.js>
- APlayer https://github.com/MoePlayer/APlayer
- tone.js 交互式音频框架 https://github.com/Tonejs/Tone.js


# 格式转化 | 导入导出

- 思路 https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
    - data:text/csv;charset=utf-8
    - encodeURI(csvContent)
- pdf2htmlEX

  - <https://github.com/coolwanglu/pdf2htmlEX>
  - Convert PDF to HTML without losing text or format.

- 导入导出

  - CSV parser <https://github.com/mholt/PapaParse>
  - js-xlsx @NICE IE8+ <https://github.com/SheetJS/js-xlsx>
  - 网页表格导出excel格式 <http://www.jq22.com/webqd2279>
  - excellentexport JS导出EXCEL https://github.com/jmaister/excellentexport


# 邮件

- foundation-emails

  - <https://github.com/zurb/foundation-emails>
  - Quickly create responsive HTML emails that work on any device and client. Even Outlook


# 用户操作导航

- 如何实现"新手引导"效果 <https://www.imooc.com/learn/14>
- intro.js

  - <https://github.com/usablica/intro.js>
  - A better way for new feature introduction and step-by-step users guide for your website and project.
- tourist https://github.com/easelinc/tourist


# 购物车

- <http://www.jq22.com/webqd2752>
- <http://www.jq22.com/webqd2615>

```javascript
function MoveBox(obj) {
    var divTop = $(obj).offset().top;
    var divLeft = $(obj).offset().left;
    $(obj).css({
        "position": "absolute",
        "z-index": "0",
        "left": divLeft + "px",
        "top": divTop + "px"
    });
    $(obj).parent().append($(obj).clone());
    $(obj).animate({
        "left": ($("#posBtnR").offset().left) + "px",
        "top": $("#posBtnR").offset().top + "px",
        "width": "100px",
        "height": "70px"
    }, 1000, function() {
        $(obj).animate({
            "left": $("#posBtnR").offset().left + "px",
            "top": $("#posBtnR").offset().top + "px"
        }, 1000);
        num++;
        $("#btn_num", parent.document).text(num).animate({
            'opacity': 1,
            'marginTop': '0'
        }, 500, function() {
            setTimeout(function() {
                $("#btn_num").hide()
            }, 8000);
        });
    });
}
```


# 网站标签页

- I-Miss-You

  - <https://github.com/Bahlaouane-Hamza/I-Miss-You>
  - jQuery plugin to change the title & favicon of the page when the user is not viewing your website


# 代码格式化

- CSS代码格式化 <http://www.jq22.com/webqd2886>

- 正则表达式


# 选座位

- canvas选座位 <http://www.jq22.com/webqd3040>


# 广告

- 优雅地做广告 eg. 图片广告
- <http://www.jq22.com/webqd2630>
- <http://www.jq22.com/webqd1461>
- 卡片式广告

  - <http://www.jq22.com/yanshi64>

```javascript
var xin = true,
    yin = true;
var step = 1;
var delay = 10;
var $obj;
$(function() {
    $obj = $("#imgDiv");
    var time = window.setInterval("move()", delay);
    $obj.mouseover(function() {
        clearInterval(time)
    });
    $obj.mouseout(function() {
        time = window.setInterval("move()", delay)
    });
});

function move() {
    var left = $obj.offset().left;
    var top = $obj.offset().top;
    var L = T = 0; //左边界和顶部边界
    var R = $(window).width() - $obj.width(); // 右边界
    var B = $(window).height() - $obj.height(); //下边界
    if (left < L) {
        xin = true; // 水平向右移动
    }
    if (left > R) {
        xin = false;
    }
    if (top < T) {
        yin = true;
    }
    if (top > B) {
        yin = false;
    }
    left = left + step * (xin == true ? 1 : -1);
    top = top + step * (yin == true ? 1 : -1);
    // 给div 元素重新定位
    $obj.offset({
        top: top,
        left: left
    })
}
$(function() {
    $("#a").click(function() {
        var b = $("#a").parent();
        $(b).remove();
    })
})
$("#imgDiv").draggable();
```


# 计算器

- 支持多进制<http://www.jq22.com/webqd3218>

```javascript
switch (sign) {
    case "+":
        document.getElementById("pm").innerHTML = parseFloat(op1) + parseFloat(document.getElementById("pm").innerHTML);
        break;
    ...

    case "x^y":
        document.getElementById("pm").innerHTML = Math.pow(parseFloat(op1), parseFloat(document.getElementById("pm").innerHTML));
        break;
}
```

# 定时器 | 计时器 | 倒计时

- <http://www.jq22.com/webqd2595>
- 倒计时 <http://www.jq22.com/webqd2484> | 毫秒 <http://www.jq22.com/webqd2064>
- 计时器

  - 限时答题 <http://www.jq22.com/webqd3103>

```javascript
window.onload = function() {
    var timer = setInterval(mytime, 1000)
}

function mytime() {
    var a = new Date();
    var b = a.getFullYear();
    var c = a.getMonth() + 1;
    var d = a.getDay();
    var e = a.getDate();
    var f = a.getHours();
    var g = a.getMinutes();
    var m = a.getSeconds();
    con.innerHTML = f + "时" + g + "分" + m + "秒";
}

//  倒计时
function countDown(count) {
    var ms = count % 1000; //毫秒
    var s = (Math.floor(count / 1000)) % 60; //秒
    var min = Math.floor(count / 1000 / 60); //分
    if (ms < 10) {
        ms = '00' + ms;
    } else if (ms < 100) {
        ms = "0" + ms;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (min < 10) {
        min = "0" + min;
    }
    var otime = {
        ms: ms,
        s: s,
        min: min
    };
    return otime;
}
```


# 抽奖 | 摇号

- <http://www.jq22.com/webqd2292>
- 抽奖

```javascript
function playFun() {
    clearInterval(timer); // 先清除
    timer = setInterval(function() {
        var random = Math.floor(Math.random() * data.length);
        title.innerHTML = data[random];
    }, 50);
}

function stopFun() {
    clearInterval(timer);
}
```


# 弹幕 | 字幕

- DanmuPlayer Html5弹幕视频播放器插件 https://github.com/chiruom/DanmuPlayer
- jquery.danmu.js https://github.com/chiruom/jquery.danmu.js
- scroxt 弹幕字体滚动 https://github.com/chenjianfang/scroxt
- <http://www.jq22.com/webqd2447>
- 原生弹幕 <http://www.jq22.com/webqd3046>
- 垂直字幕|中奖名单

  - CSS <http://www.jq22.com/webqd2625>
  - marquee(过时) <http://www.jq22.com/webqd2575>
  - JS <http://www.jq22.com/webqd2444> | <http://www.jq22.com/webqd2391>

```html
<script type="text/javascript">
  spanDom.stop().animate({
      "right": pageW + 300
  }, 10000, "linear", function() {
      $(this).remove();
  });
</script>


<style media="screen">
/* css版本 */
.div1 {
    width:200px;
    height:200px;
    overflow:hidden;
    margin:auto;
    position:relative;
}
@keyframes anis {
    100% {
      transform:translateY(-200px)
    }
}

img {
    position:absolute;
}
.div2 {
    animation:anis 10s linear infinite;
}
.div2:hover {
    animation-play-state:paused;
}
</style>
```


# 分享 | 客服反馈

- 百度分享 <http://share.baidu.com/>
- jiathis <http://jiathis.com/>

# 评论

- 人人网评论功能 <https://www.imooc.com/learn/81>


# 问卷调查

- 用户耐心是设计初衷
- 传统的问卷那种ABCD加滚动很难受
- 应该是加上绿色的透明悬浮选中层
- 注意问题逻辑分组
- 不要出现页面垂直滚动条，一页就放几道题目
- 选完当前页立刻跳转下一页，但也要支持用户翻页
- 用户可以不填完所有的题目，不要叫用户返回去重新填
