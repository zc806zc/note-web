# Tool

- 图片显示

  - prettyPhoto

    - <http://www.jq22.com/jquery-info255>

- 聊天

  - <https://github.com/RocketChat/Rocket.Chat>

- 地图

  - <https://github.com/Leaflet/Leaflet>

- 视频

  - video.js

    - <https://github.com/videojs/video.js>
    - open source HTML5 & Flash video player

- 复制粘贴

  - clipboard.js <https://github.com/zenorocha/clipboard.js>

- 文件格式转化

  - pdf2htmlEX

    - <https://github.com/coolwanglu/pdf2htmlEX>
    - Convert PDF to HTML without losing text or format.

- 邮件

  - foundation-emails

    - <https://github.com/zurb/foundation-emails>
    - Quickly create responsive HTML emails that work on any device and client. Even Outlook

- 用户操作导航

  - intro.js

    - <https://github.com/usablica/intro.js>
    - A better way for new feature introduction and step-by-step users guide for your website and project.

- 提示标签

  - popper.js <https://github.com/FezVrasta/popper.js>

- 浏览器信息

  - <http://www.jq22.com/webqd77>
  - feature.js

    - <https://github.com/viljamis/feature.js>

```javascript
function getBrowserInfo() {
    var Info = {};
    var str = window.navigator.userAgent.toLowerCase();
    var bReg = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    var infoArr = str.match(bReg);
    Info.browser = infoArr[1].replace(/version/, "safari");
    Info.ver = infoArr[2];
    return Info;
}
```

- URL/路由/router/路径参数

  - <http://www.jq22.com/webqd443>

```javascript
function GetQueryString(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   //这里是为测试给大家看的以下两行
   //测试开始
   var ur="?id=111&bb=33333"; //真实环境下删除
   var r = ur.substr(1).match(reg);//真实环境下删除
   //测试结束，

   //真实环境下请用下面一句。
   //var r = window.location.search.substr(1).match(reg); //真实环境请用这句
   if (r!=null) return (r[2]); return null;
}
GetQueryString("id")
```

- md5/加密

  - <http://www.jq22.com/webqd1506>

- 时间工具/时间格式化

  - 周显示 <http://www.jq22.com/webqd2426>
  - luxon <https://github.com/moment/luxon>

```javascript
Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "S": this.getMilliseconds() //毫秒
    };
    //周
    var week = {
        "0": "日",
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六"
    };
    //季度
    var quarter = {
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[this.getDay() + ""]);
    }
    if (/(q+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? "第" : "") + quarter[Math.floor((this.getMonth() + 3) / 3) + ""] + "季度");
    }
    for (var j in o) {
        if (new RegExp("(" + j + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[j]) : (("00" + o[j]).substr(("" + o[j]).length)));
        }
    }
    return fmt;
}

new Date().Format("yyyy-MM-dd E HH:mm:ss")
```

- 货币处理

  - currency.js

- 加入购物车

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

- 时钟

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
```

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

- 计时器

  - 限时答题 <http://www.jq22.com/webqd3103>

- 原生弹幕 <http://www.jq22.com/webqd3046>

- 星级评分

  - <http://www.jq22.com/webqd3035>
  - CSS实现 <http://www.jq22.com/webqd1144>

```javascript
function praise(num, obj) {
    obj.prevAll().attr('class', 'xx-star');
    obj.attr('class', 'xx-star');
    obj.nextAll().attr('class', 'xx-star2');
    $(".display-star").html(num + '星');
}
```

- js数字金额大写转换

  - <http://www.jq22.com/webqd3030>
  - <http://www.jq22.com/webqd1708>

- 网页表格导出excel格式 <http://www.jq22.com/webqd2279>

```javascript
var daochu = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,',
        template = template = '<html 字数限制省略属性><meta http-equiv="Content-Type" charset=utf-8"><head><!--[if gte mso 9]> <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
        base64 = function(s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        },
        format = function(s, c) {
            return s.replace(/{(\w+)}/g, function(m, p) {
                return c[p];
            })
        }
    return function(table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {
            worksheet: name || 'Worksheet',
            table: table.innerHTML
        }
        window.location.href = uri + base64(format(template, ctx))
    }
})()
```

- gif预览

  - jqGifPreview <https://github.com/SodhanaLibrary/jqGifPreview>

- 放大镜

  - jfMagnify <https://github.com/fonstok/jfMagnify>

- 网站标签页

  - I-Miss-You

    - <https://github.com/Bahlaouane-Hamza/I-Miss-You>
    - jQuery plugin to change the title & favicon of the page when the user is not viewing your website

- 弹幕 <http://www.jq22.com/webqd2447>

```javascript
spanDom.stop().animate({
    "right": pageW + 300
}, 10000, "linear", function() {
    $(this).remove();
});
```

- 放大镜

  - 精简版JS <http://www.jq22.com/webqd2110>
  - <http://www.jq22.com/webqd643>

- 聊天室 <http://www.jq22.com/webqd2560>

- 客服反馈

- 滚动条 | 进度条

  - jquery.slimScroll
  - JS自定义 <http://www.jq22.com/webqd2618> | <http://www.jq22.com/webqd1910>
  - 进度条 <http://www.jq22.com/webqd1913>
  - css3进度条 <http://www.jq22.com/webqd1062>

- 返回顶部

  - <http://www.jq22.com/webqd2804>

```javascript
$(function() {
  // 监听一定的高度
  $(window).scroll(function() {
      if ($(window).scrollTop() >= 300) {
          $('.gongyong a').fadeIn(600);
      } else {
          $('.gongyong a').fadeOut(600);
      }
  });
  $('.bottom a').click(function() {
      $("html,body").animate({
          scrollTop: $(document).height()
      }, 500);
  });
});
```

- 音频和视频
- 图像
- 地图
- 浏览器调整
- 格式化CSS代码 <http://www.jq22.com/webqd2886>

  - 正则表达式

- canvas选座位 <http://www.jq22.com/webqd3040>

- 广告

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

- 打印

  - jqprint <http://www.jq22.com/jquery-info347>

- 计算器

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

- 定时器

  - <http://www.jq22.com/webqd2595>
  - 倒计时 <http://www.jq22.com/webqd2484> | 毫秒 <http://www.jq22.com/webqd2064>

```javascript
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

- 日历一览 <http://www.jq22.com/webqd2183>

- 抽奖摇号 <http://www.jq22.com/webqd2292>
