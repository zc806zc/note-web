# Tool

主要包括以下几类

- 富文本编辑器
- 放大镜 | 截图 | 裁剪
- 弹幕 | 字幕
- 聊天
- 地图
- 视频
- 音频
- 邮件
- 文件格式转化

  - xlsx

- 网页打印

- 用户操作导航

- 购物车

- 网站标签页

- 客服反馈

- 打印

- 抽奖 | 摇号

- 代码格式化

- 广告

- 选座位

- 计算器

- 倒计时 | 计时器

- 代码编辑器

  - codemirror

- 分享

- 繁简字转化

  - OpenCC <https://github.com/BYVoid/OpenCC>

# 浏览器信息

- <http://www.jq22.com/webqd77>
- feature.js

  - <https://github.com/viljamis/feature.js>

# 富文本编辑器

- (首选) brackets <https://github.com/adobe/brackets>
- quill <https://github.com/quilljs/quill>
- draft-js <https://github.com/facebook/draft-js>
- ueditor | wangeditor
- 经典 ckeditor | kindeditor
- pell
- x-editable <https://github.com/vitalets/x-editable>

  - jquery

- medium-editor <https://github.com/yabwe/medium-editor>

- stackedit <https://github.com/benweet/stackedit>

- 次选

  - summernote <https://github.com/summernote/summernote>
  - wysiwyg <https://github.com/mindmup/bootstrap-wysiwyg/>

# 放大镜 | 截图

- <https://github.com/jwagner/smartcrop.js>
- <https://github.com/niklasvh/html2canvas>

- jfMagnify <https://github.com/fonstok/jfMagnify>

- jquery.etalage.min.js

- 精简版JS <http://www.jq22.com/webqd2110>

- <http://www.jq22.com/webqd643>

- 裁剪

  - <http://www.shearphoto.com/>

- img2css <https://github.com/javierbyte/img2css>

  - 图片转css

# 聊天

- <https://github.com/RocketChat/Rocket.Chat>

- 聊天室 <http://www.jq22.com/webqd2560>

# 地图

- <https://github.com/Leaflet/Leaflet>

# 视频

- video.js

  - <https://github.com/videojs/video.js>
  - open source HTML5 & Flash video player

- flv.js

  - <https://github.com/Bilibili/flv.js>

- plyr <https://github.com/sampotts/plyr>

# 音频

- <https://github.com/goldfire/howler.js>

# 文件格式转化

- pdf2htmlEX

  - <https://github.com/coolwanglu/pdf2htmlEX>
  - Convert PDF to HTML without losing text or format.

# 邮件

- foundation-emails

  - <https://github.com/zurb/foundation-emails>
  - Quickly create responsive HTML emails that work on any device and client. Even Outlook

# 用户操作导航

- intro.js

  - <https://github.com/usablica/intro.js>
  - A better way for new feature introduction and step-by-step users guide for your website and project.

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

# 客服反馈

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

# 打印

- jqprint <http://www.jq22.com/jquery-info347>

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

- <http://www.jq22.com/webqd2447>
- 原生弹幕 <http://www.jq22.com/webqd3046>
- 垂直字幕|中奖名单

  - CSS <http://www.jq22.com/webqd2625>
  - marquee(过时) <http://www.jq22.com/webqd2575>
  - JS <http://www.jq22.com/webqd2444> | <http://www.jq22.com/webqd2391>

```javascript
spanDom.stop().animate({
    "right": pageW + 300
}, 10000, "linear", function() {
    $(this).remove();
});

//  css版本
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
```

# 分享

- 百度分享 <http://share.baidu.com/>
- 常见 jiathis <http://jiathis.com/>
