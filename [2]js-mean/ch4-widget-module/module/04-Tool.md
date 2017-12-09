# Tool

- 浏览器信息

  - <http://www.jq22.com/webqd77>

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
