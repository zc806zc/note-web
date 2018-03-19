# 登录注册

- 登录

  - <https://profile.freepik.com/login>
  - 复位这个按钮几乎永远都不会帮助到用户
  - 用户很可能不愿意填写表单

    - 逻辑分组
    - 重视交互，做有意思的设计

- 优化建议

  - 用户在输入手机号时，如果能以3 4 4的方式显示，用户看起来会轻松很多
  - 邮箱登陆注册时智能显示后缀
  - 账号或者密码错误
  - 滑动验证
  - 分步注册，减少注册心理负担

![](/static/img/other/login-sample-23.png)

> 所有抛开产品本身谈登陆注册的行为都是耍流氓

<https://juejin.im/entry/5993b3bef265da24874ced54>

```javascript
A产品竟然支持邮箱注册，邮箱注册这种方式主要是PC端时盛行的，现在手机号注册收验证码多方便，这种方式不好；
B产品竟然不能设置密码，每次登陆都要手机验证码，这万一手机没信号收不到验证码怎么办，这种方式不好；
C产品我用第三方登陆了，竟然还让我绑定手机号，这不是欺骗用户么，太不要脸了，这种方式不好；
```

# 验证块

- <http://www.jq22.com/webqd2853> - 滑动验证
- 简单滑动验证 <http://www.jq22.com/webqd1933>

```javascript
function slide(range, conSlide, obj) {
     var rangeValue;
     var flag = false;
     if (obj.max) {
         range.max = obj.max;
     }
     range.onmousedown = function() {
         flag = true;
         if (flag) {
             range.onmousemove = function() {
                 rangeValue = range.value;
                 conSlide.style.left = rangeValue + "px";
             }
         }
     }

     range.onmouseup = function() {
         flag = false;
         range.onmousemove = null;
         if (obj.err) {
             if (rangeValue >= (232 - obj.err) && rangeValue <= (232 + obj.err)) {
                 alert("验证成功");
             }
         } else {
             if (rangeValue >= 227 && rangeValue <= 237) {
                 alert("验证成功");
             }
         }

         conSlide.style.left = "0px";
         range.value = 0;
     }
 }
```

--------------------------------------------------------------------------------

# 按钮

- loading按钮(提交按钮)
- 查询按钮(是否是最新搜索结果)
- 双杠响应，而按钮要有被按得凹陷的感觉

  - photoshoot网

- 大播放按钮，可以引起冲动

  - <https://asciinema.org/>

![](http://img.blog.csdn.net/20160624150523029)

![](http://img.blog.csdn.net/20160624150558076)

- btn-css-generator <http://www.bestcssbuttongenerator.com/#/8>
- 防止表单重复提交的loading
- 悬浮

  - <http://www.jq22.com/webqd1687>
  - <http://www.jq22.com/webqd1688>
  - <http://www.jq22.com/webqd114>

![](/static/img/other/import-double-submit.png)

# 通用输入

- 密码框 zxcvbn <https://github.com/dropbox/zxcvbn>

# 单选复选框优化

- <http://www.jq22.com/webqd2718>
- jquery-labelauty

```html
<span class="radio_box">
 <input type="radio" id="radio_1" name="radio" checked="">
 <label for="radio_1"></label>
 <em>选项1</em>
</span>
```

# 自动完成 | autocomplete

- typeahead.js <https://github.com/twitter/typeahead.js>
- Fuse <https://github.com/krisk/Fuse>
- At.js <https://github.com/ichord/At.js>
- bootstrap-typeahead
- awesomplete <https://github.com/LeaVerou/awesomplete>

# 星级评分 | 投票率

- 策略模式实现星级评分 <https://www.imooc.com/video/15115>
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

# 关注 | 点赞

- <http://www.jq22.com/webqd2408>

- 单向关注有效性，不要因为开了多个页面多次关注而状态发生toggle，也就是说关注到的是 unstar -> star的这种状态

# 拾色器

- 兼容性好 <http://www.jq22.com/jquery-info367>
- colors <https://github.com/mrmrs/colors>
- color-thief

  - <https://github.com/lokesh/color-thief>
  - 利用 javascript 和 canvas 抓取一张图片中的主要颜色

# 穿梭框

# 下拉框 | 选择框

- 插件

  - niceSelect
  - select2
  - chosen <https://github.com/harvesthq/chosen>
  - selectize-js <https://www.awesomes.cn/repo/selectize/selectize-js>
  - jquery.sumoselect

    - A jQuery Single/Multi Select plugin which can be used on almost any device

  - Superfish

    - It is a jQuery plugin that adds usability enhancements to existing multi-level drop-down menus.

- 模拟下拉框 <http://www.jq22.com/webqd2375> | 可多选 <http://www.jq22.com/webqd933>

- 简单自动义 <http://www.jq22.com/webqd1696>

- 可编辑下拉框 <http://www.jq22.com/webqd1511>

- 标签 <http://www.jq22.com/webqd462>

```javascript
// 外面嵌套一层
<div class="select">
  <select name="slct" id="slct">
    <option>Choose an option</option>
    <option value="1">Pure CSS</option>
  </select>
</div>
```

# 云标签

- <http://www.jq22.com/webqd1921>

# 标签输入框

- jquery-tags-input

  - <http://xoxco.com/projects/code/tagsinput/>

- bootstrap-tagsinput <https://github.com/bootstrap-tagsinput/bootstrap-tagsinput>

--------------------------------------------------------------------------------

# 时间日期

- moment.js
- flatpickr <https://github.com/chmln/flatpickr>
- 时间日期处理 <https://github.com/datejs/Datejs>
- date-fns <https://github.com/date-fns/date-fns>
- bootstrap-datepicker <https://github.com/uxsolutions/bootstrap-datepicker>
- bootstrap-datetimepicker<https://github.com/Eonasdan/bootstrap-datetimepicker>
- 日历一览 <http://www.jq22.com/webqd2183>
- fullcalender | my97
- 农历 <https://github.com/zzyss86/LunarCalendar>
- <https://github.com/dangrossman/bootstrap-daterangepicker>
- pickadate.js <https://github.com/amsul/pickadate.js>
- DatePicker开发 <https://www.imooc.com/video/14520>

--------------------------------------------------------------------------------

# 联动

- 省市下拉框联动

  - (推荐) 传统类型 <http://www.jq22.com/jquery-info8054>
  - 同一下拉框内三次点击 <http://www.jq22.com/jquery-info16612>
  - 原生JS

    - 0_27_12拼接 <http://www.jq22.com/jquery-info448>

    - 省市区面板点击

      - (推荐) <http://www.jq22.com/jquery-info7095>
      - 仿京东 <http://www.jq22.com/jquery-info9397>
      - 较全面 <http://www.jq22.com/jquery-info13655>

    - 字母点击 移动端 <http://www.jq22.com/webqd2257>

--------------------------------------------------------------------------------

# 表格

- 最好看的表格 <https://colorlib.com/wp/css3-table-templates/>

  - Crisp table <http://codepen.io/stursby/pen/HdiJh>
  - heavy table <http://codepen.io/victordarras/pen/hJHAm?editors=0110>

- 固定

  - 固定表格列和表格头部内容可拖拽 <http://www.jq22.com/webqd1769>
  - 可滚动的tbody <http://www.jq22.com/webqd3098>

- HTML5响应式表格

  - CSS简单实现 <http://www.jq22.com/jquery-info6700>
  - 好看一点的样式 <http://www.jq22.com/jquery-info1372>

- 自动生成表格

  - <http://www.jq22.com/jquery-info3656>

```javascript
第一步是：设置 tbody 为 display:block ，以便我们可以应用 height 和 overflow 属性。
下一步将是：设置thead 中的 tr元素设置为 display:block。
```

# 数据表格

- 筛选排序
- dataTables | bootstrap-table

  - <https://github.com/wenzhixin/bootstrap-table>

- layui table

- Filterizr (a jQuery plugin that sorts, shuffles and applies stunning filters over responsive galleries using CSS3 transitions and custom CSS effects)

# 商业表格($)

- handsontable <https://handsontable.com/>

--------------------------------------------------------------------------------

# 分页

- 简单分页 <http://www.jq22.com/webqd1246>

- 与数据表格关联的分页删除数据时注意加载最适合的一页，因为可能删除了所在页的最后一条数据

- <http://wenda.ghostchina.com/>

- <http://www.howzhi.com/channel/photography?page=20>

- <http://www.agoda.com/city/hong-kong-hk.html>

![](http://img.blog.csdn.net/20160624154003214)

![](http://img.blog.csdn.net/20160624154018542)

![](http://img.blog.csdn.net/20160624154027476)

--------------------------------------------------------------------------------

# 模板引擎 | 渲染引擎

- artTemplate

```javascript
// 导出
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

--------------------------------------------------------------------------------

# 传输数据格式

- normalizr(json)

  - <https://github.com/paularmstrong/normalizr>

- 货币处理

  - currency.js
  - js数字金额大写转换

    - <http://www.jq22.com/webqd3030>
    - <http://www.jq22.com/webqd1708>

--------------------------------------------------------------------------------

# 加密处理

- md5.js | jquery-md5(@deprecated)
- <http://www.jq22.com/webqd1506>

- ccxt <https://github.com/ccxt/ccxt>

> A JavaScript / Python / PHP cryptocurrency trading library with support for more than 90 bitcoin/altcoin exchanges

--------------------------------------------------------------------------------

# 时间

- 周显示 <http://www.jq22.com/webqd2426>
- luxon | moment.js

  - <https://github.com/moment/luxon>

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

--------------------------------------------------------------------------------

# 权限

- 弹框模式
- CURD

--------------------------------------------------------------------------------

# 上传

- uppy(推荐) <https://github.com/transloadit/uppy>

  - The next open source file uploader for web browsers

- jQuery-File-Upload

- Uploadify

- jQuery-File-Upload | fex webuploader(兼容性好)

  - <https://github.com/blueimp/jQuery-File-Upload>
  - <https://blueimp.github.io/jQuery-File-Upload/>
  - <http://fex.baidu.com/webuploader/>

- dropzone

  - <https://github.com/enyo/dropzone>

- fine-uploader

  - <https://github.com/FineUploader/fine-uploader>

- 本地input选择图片实时显示

  - createObjectURL <http://www.jq22.com/webqd2884>
  - FileReader <http://www.jq22.com/webqd2885>
  - 转base64显示 <http://www.jq22.com/webqd2806>
  - 使用ie滤镜实现ie低版本图片预览功能 <http://www.jq22.com/webqd2344>
  - 带剪裁 <http://www.jq22.com/webqd1198>

```javascript
$('.a').change(function(e) {
    var _URL = window.URL || window.webkitURL;
    var file, img;
    if ((file = this.files[0])) {
        img = new Image();
        img.onload = function() {
            $('.img').attr('src', this.src);
            console.log(this.width)
        };
        img.src = _URL.createObjectURL(file);
    }
})

if (window.FileReader) {
    var reader = new FileReader();
    var _file = this.files[0];

    reader.readAsDataURL(_file);
    reader.onload = function() {
        preImg.setAttribute('src', this.result);
    }
}
```

--------------------------------------------------------------------------------

# 行内编辑

- <http://www.jq22.com/webqd1430>

```javascript
$('tr td').on('click', function() {
    var txt = $(this).text();
    $(this).text('');
    $(this).append('<input type="text">');
    $(this).children('input').focus();
    $(this).unbind('clcik');
    var child = $(this).children('input');
    var that = $(this);
    child.blur(function() {
        var childTxt = child.val();
        if (childTxt == '') {
            that.text(txt);
        } else {
            that.text(childTxt);
        }
        that.remove('input');
    })
})
```

--------------------------------------------------------------------------------

# 搜索

- list.js <https://github.com/javve/list.js>

> The perfect library for adding search, sort, filters and flexibility to tables, lists and various HTML elements. Built to be invisible and work on existing HTML.

- mark.js 正则高亮 <https://github.com/julmot/mark.js/>

- 搜索示例

  - 百度搜索结果 <http://www.jq22.com/webqd2961>
  - 豆瓣图书搜索功能 <http://www.jq22.com/webqd2702>
  - 搜索 <http://www.jq22.com/webqd1354>

```javascript
/*
需求:
1.找到文本框，在文本框中输入的字符会出现再搜索信息框中
2.键盘事件
3.如何拿到百度关键字的数据
后台传输    AJAX    jsonp    数据渲染
*/
var oText = document.getElementById("text");
var oSea = document.getElementsByClassName("search")[0]; //class是集合，要获取下标
var oUl = oSea.getElementsByTagName("ul")[0];
oText.onkeyup = function() {
    var val = this.value;
    /*            if(val){
                    oSea.style.display = "block";
                }else{
                    oSea.style.display = "none";                
                }*/
    //三目运算
    oSea.style.display = val ? "block" : "none";
    var os = document.createElement("script");
    os.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + val + "&cb=xiaolong&_=1499584946110";
    document.body.appendChild(os); //当前节点中添加一个子节点
}

function xiaolong(json) {
    oUl.innerHTML = '';
    json.s.forEach(function(data) {
        var oLi = document.createElement("li");
        oLi.innerHTML = "<a href='https:www.baidu.com/s?wd=" + data + "'>" + data + "</a>";
        oUl.appendChild(oLi);
    }); //数组专门遍历
}
```

- 标签页搜索

  - <http://www.51jingying.com/>

  - <http://www.shanghai.gov.cn/>

- 大搜索框和注册框

  - <https://botlist.co/>

![](http://img.blog.csdn.net/20160624154656266)

--------------------------------------------------------------------------------

# 表单校验

- superstruct

  - <https://github.com/ianstormtaylor/superstruct>
  - A simple and composable way to validate data in Javascript.

- cleave.js

  - <https://github.com/nosir/cleave.js>
  - Format input text content when you are typing...

- validator.js

  - <https://github.com/chriso/validator.js>
  - String validation

- jquery validate

- jQuery-form

- 银行卡

  - card <https://github.com/jessepollak/card>

# 表单校验设计

- 用户编辑后离开前的保存校验
- jquery-validation
- Parsley.js <https://github.com/guillaumepotier/Parsley.js>

# 邮箱

- mailcheck <https://github.com/mailcheck/mailcheck>

  - Reduce misspelled email addresses in your web apps

- 邮箱自动加上@后面内容 <http://www.jq22.com/webqd2374>

```javascript
function $(id) {
    return document.getElementById(id);
}
var lists;
var len;
window.onload = function() {
    var objtxt = $("regemail");
    var objlist = $("maillist");

    lists = document.getElementsByTagName("li");
    len = lists.length;

    //给每一个li绑定一个鼠标点击事件
    for (var i = 1; i < len; i++) {
        lists[i].onmousedown = function() {
            objtxt.value = this.textContent;
            objlist.style.display = "none";
        }
    }

    //计算这个下拉框的显示位置
    //焦点选中时
    objtxt.onfocus = function() {
        objlist.style.display = "block";
    }
    //焦点移开时
    objtxt.onblur = function() {
        // objlist.style.display="none";
    }

    //输入过程中时
    objtxt.onkeyup = function() {
        //获取文本中的值
        var txt = this.value;
        var flag = "";
        if (txt.indexOf("@") > 0) {
            flag = txt.substring(txt.indexOf("@") - 1); //获取输入的@开始的内容
            txt = txt.substring(0, txt.indexOf("@"));
        } else {
            flag = "";
        }
        var val = "";
        //将这个值放到所有的li前面
        for (var i = 1; i < len; i++) {
            val = lists[i].textContent;
            val = val.substring(val.indexOf("@"));
            lists[i].textContent = txt + val;
        }

        //如果用户输入了@，则检查哪些是否满足条件的
        if (flag != "") {
            var reg = new RegExp(flag, "i");
            for (var i = 1; i < len; i++) {
                if (reg.test(lists[i].textContent)) {
                    lists[i].style.display = "block";
                } else {
                    lists[i].style.display = "none";
                }
            }
        }
    }
}
```

# 表单输入实时监听

```javascript
$("input").on("input propertychange", function() {
    check("user", "pass", "btn", "orange");
});
```

# 输入框输入字数限制

- <http://www.jq22.com/webqd2084>

# 银行卡号空格

- <http://www.jq22.com/webqd1489>

```javascript
$(function() {
    $('#kahao').on('keyup', function(e) {
        //只对输入数字时进行处理
        if ((e.which >= 48 && e.which <= 57) ||
            (e.which >= 96 && e.which <= 105)) {
            //获取当前光标的位置
            var caret = this.selectionStart
            //获取当前的value
            var value = this.value
            //从左边沿到坐标之间的空格数
            var sp = (value.slice(0, caret).match(/\s/g) || []).length
            //去掉所有空格
            var nospace = value.replace(/\s/g, '')
            //重新插入空格
            var curVal = this.value = nospace.replace(/(\d{4})/g, "$1 ").trim()
            //从左边沿到原坐标之间的空格数
            var curSp = (curVal.slice(0, caret).match(/\s/g) || []).length
            //修正光标位置
            this.selectionEnd = this.selectionStart = caret + curSp - sp

        }
    })
})
```

# 表单输入

- 文本框自动跳转下一个 <http://www.jq22.com/webqd2809>
- <http://www.jq22.com/webqd2468>

```javascript
$(function() {
    var inputLength = $('input').length;
    //$('input').keyup(function(){})
    //使用jQuery事件代理的事件绑定方式，不需要对每个input进行事件绑定，有利于性能优化
    $('#body').delegate('input', 'keyup', function() {
        var _this = $(this),
            valLength = _this.val().length,
            index = _this.index();
        if (valLength > 0) {
            if ((index + 1) > inputLength) return false; //输入完成时进行操作
            _this.attr('data-in', 'true').next().focus();
        } else if (valLength == 0 && _this.attr('data-in') == 'true') {
            if (index == 0) return false; //删除所有时进行操作
            _this.attr('data-in', 'false').prev().focus();
        }
    });
});
```

--------------------------------------------------------------------------------

# 筛选排序

- sortable <https://www.awesomes.cn/repo/RubaXa/sortable>
- jquery.isotope

  - Filter & sort magical layouts GPL

- 时间正序排序

- 表格排序

  - <http://www.jq22.com/webqd2793>

```javascript
var data = {
    "rows": [{
        "name": "张三",
        "time": "2011-4-1 0:00:00",
    },{
        "name": "李四",
        "time": "2015-5-6 12:30:00",
    },{
        "name": "王五",
        "time": "2012-10-1 22:10:00",
    },{
        "name": "赵六",
        "time": "2011-9-1 22:10:00",
    }]
};
var rows = data.rows;
rows.sort(function(a,b){
    return Date.parse(a.time) - Date.parse(b.time);//时间正序
});
```

--------------------------------------------------------------------------------

# 图表

- 在可视化章节

--------------------------------------------------------------------------------

# 进度条

- 进度条 | progress

  - nprogress <https://github.com/rstacruz/nprogress>
  - <http://www.jq22.com/webqd1913>
  - css3进度条 <http://www.jq22.com/webqd1062>

- 超链接悬浮上去时, 打开新窗口图标提示

# 提示标签 | Tooltip

- popper.js <https://github.com/FezVrasta/popper.js>

# 加载等待

- 用加载等待与页面刷新照顾用户心理

  - <https://juejin.im/entry/598d130e6fb9a03c445de7e7>

```javascript
// 暗示
我知道你很着急，但是我也很努力的在刷新

你看，这只骆驼走路好萌啊，我都不好意思生气了。

// bilibili
松手：够了啦，松开人家嘛（下拉至一定位置后出现）
有个小姐姐很悲伤，而这和用户的情感是相符合的
```

![](/static/img/other/camel-loading.png)

![](/static/img/other/jiaohu-tip.png)

- 等待动画与加载动画

  - <http://truthlabs.com>

![](http://img.blog.csdn.net/20160624152030917)

- 顶部加载条显示网页的加载进度

  - <https://ingworld.ing.com/en/2015-1Q>

![](http://img.blog.csdn.net/20160624152117988)
