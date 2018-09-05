# 按钮

- loading按钮(提交按钮)
- 查询按钮(是否是最新搜索结果)

- btn-css-generator <http://www.bestcssbuttongenerator.com/#/8>
- 防止表单重复提交的loading
- 悬浮

  - <http://www.jq22.com/webqd1687>
  - <http://www.jq22.com/webqd1688>
  - <http://www.jq22.com/webqd114>


# 表单 | 样式模拟统一

- 复杂表单

    - 输入的格式化
    - dropdown等交互联动

- 表单美化 <https://www.imooc.com/learn/42>


# 通用输入

- 密码框 zxcvbn <https://github.com/dropbox/zxcvbn>

# 单选复选框 | Radio | Checkbox

- icheck https://github.com/fronteed/icheck
- jquery-labelauty
- 栗子
    - <http://www.jq22.com/webqd2718>

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
- bootstrap-typeahead https://github.com/bassjobsen/Bootstrap-3-Typeahead
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

- colorify.js http://colorify.rocks
- 兼容性好 <http://www.jq22.com/jquery-info367>
- colors <https://github.com/mrmrs/colors>
- color-thief

  - <https://github.com/lokesh/color-thief>
  - 利用 javascript 和 canvas 抓取一张图片中的主要颜色

# 穿梭框

# 下拉框 | 选择框

- 论如何实现一个完美的Select组件 https://juejin.im/post/5b02b960f265da0b9e655e61
    - 一个相对定位的Selection + 一个绝对定位的DropdownMenu
    - Selection与页面滚动

- niceSelect
- select2
- chosen <https://github.com/harvesthq/chosen>
- selectize-js <https://www.awesomes.cn/repo/selectize/selectize-js>
- jquery.sumoselect

- A jQuery Single/Multi Select plugin which can be used on almost any device

- Superfish

- It is a jQuery plugin that adds usability enhancements to existing multi-level drop-down menus.

- 栗子
    - 模拟下拉框 <http://www.jq22.com/webqd2375> 
    - 可多选 <http://www.jq22.com/webqd933>
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

# 登录注册

- 登录

  - 复位这个按钮几乎帮不到用户
  - 用户不愿意填写表单 -> 逻辑分组 + 有意思的交互设计
  - demo https://profile.freepik.com/login
  - 输密码遮眼睛 <https://codepen.io/dsenneff/pen/QajVxO>

![](/static/img/other/login-sample-23.png)

- 优化建议

  - 用户在输入手机号时，如果能以3 4 4的方式显示，用户看起来会轻松很多
  - 邮箱登陆注册时智能显示后缀
  - 账号或者密码错误
  - 滑动验证
  - 分步注册，减少注册心理负担


- 所有抛开产品本身谈登陆注册的行为都是耍流氓

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


# URL操作库

- URI.js <https://github.com/medialize/URI.js/>
- domurl https://github.com/Mikhus/domurl
- nanoid 唯一ID生成 @NICE https://github.com/ai/nanoid

--------------------------------------------------------------------------------

# 时间日期

- moment.js
- day.js moment.js的轻量替换
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

  - @NICE 传统类型 <http://www.jq22.com/jquery-info8054>
  - 同一下拉框内三次点击 <http://www.jq22.com/jquery-info16612>
  - 原生JS

    - 0_27_12拼接 <http://www.jq22.com/jquery-info448>

    - 省市区面板点击

      - @NICE <http://www.jq22.com/jquery-info7095>
      - 仿京东 <http://www.jq22.com/jquery-info9397>
      - 较全面 <http://www.jq22.com/jquery-info13655>

    - 字母点击 移动端 <http://www.jq22.com/webqd2257>

--------------------------------------------------------------------------------

# 分页

- 简单分页 <http://www.jq22.com/webqd1246>
- paginationjs 基于jquery https://github.com/superRaytin/paginationjs
- twbs-pagination https://github.com/josecebe/twbs-pagination
- am-page 基于amazeUI https://github.com/lscho/am-page
- 与数据表格关联的分页删除数据时注意加载最适合的一页，因为可能删除了所在页的最后一条数据

- 客户端分页 -> 数量较少，全部加载，前端控制显示
    - http://www.jq22.com/jquery-info13734
    - 带页码跳转 http://www.jq22.com/jquery-info17447
    - 自渲染分页 丑看原理 http://www.jq22.com/jquery-info13810
- 与数据表格的结合
    
    - 滚动条
    - 水平拉伸 与 省略号

# 时间轴

- TimelineJS <https://github.com/NUKnightLab/TimelineJS>

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

# 权限 |  CURD

- 权限颗粒度

--------------------------------------------------------------------------------

# 上传

- uppy@NICE 
  - <https://github.com/transloadit/uppy>
  - The next open source file uploader for web browsers
- jQuery-File-Upload
    - 兼容性好
    - <https://github.com/blueimp/jQuery-File-Upload>
    - <https://blueimp.github.io/jQuery-File-Upload/>
- fine-uploader
  - <https://github.com/FineUploader/fine-uploader>
- fex webuploader
    - 兼容性好 IE6+
    - https://github.com/fex-team/webuploader
    - <http://fex.baidu.com/webuploader/>
- dropzone
  - <https://github.com/enyo/dropzone>
- Uploadify

- 栗子
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

--------------------------------------------------------------------------------

# 表单 | 字段解析 | ajax提交处理

- 使用serialize() serializeArray()
- LayUI -> 封装了方法会返回表单字段,但也不是很好用
- jquery-form https://github.com/jquery-form/form
    - ajaxForm
    - ajaxSubmit

```js
// jquery-form栗子
// https://www.cnblogs.com/liuhongfeng/p/5149419.html
$('button').on('click', function() {

    $('form').on('submit', function() {
        var title = $('inpur[name=title]').val(),
            content = $('textarea').val();

        $(this).ajaxSubmit({
            type: 'post', // 提交方式 get/post
            url: 'your url', // 需要提交的 url
            data: {
                'title': title,
                'content': content
            },
            success: function(data) { // data 保存提交后返回的数据，一般为 json 数据
                // 此处可对 data 作相关处理
                alert('提交成功！');
            }
            $(this).resetForm(); // 提交后重置表单
        });
        return false; // 阻止表单自动提交事件
    });
});

$('#myFormId').clearForm();
$('#myFormId .specialFields').clearFields();
$('#myFormId').resetForm();
var value = $('#myFormId :password').fieldValue();
var queryString = $('#myFormId .specialFields').fieldSerialize();
```

# 数字

- Numeral-js https://github.com/adamwdraper/Numeral-js
- accounting.js https://github.com/wjcrowcroft/accounting.js
- money.js 货币转换库 https://github.com/wjcrowcroft/money.js
- Fraction.js https://github.com/infusion/Fraction.js
- Complex.js 复数项 https://github.com/infusion/Complex.js
- 多项式 https://github.com/infusion/Polynomial.js

# 表单校验

- 用户编辑后离开前的保存校验 
    - 是否修改过

- jquery validate | jquery-validation https://github.com/jquery-validation/jquery-validation
- Parsley.js <https://github.com/guillaumepotier/Parsley.js>

- validator.js

  - <https://github.com/chriso/validator.js>
  - String validation
  - 提供了常用的校验方法 eg isAlpha isBase64 isEmail
- v8n 常用校验 + 链式 https://github.com/imbrn/v8n

- 格式处理

  - card 银行卡 <https://github.com/jessepollak/card>
  - cleave.js

    - <https://github.com/nosir/cleave.js>
    - Format input text content when you are typing...


# 邮箱

- mailcheck <https://github.com/mailcheck/mailcheck>

  - Reduce misspelled email addresses in your web apps


# 数据表格

- 数据表格排行 <https://jspreadsheets.com/>
- ag-grid THE BEST HTML5 GRID IN THE WORLD 
  - https://www.ag-grid.com/
  - 原生版本 https://www.ag-grid.com/best-javascript-data-grid/
  - vue版本 https://www.ag-grid.com/best-vuejs-data-grid/

- dataTables @NICE 
- bootstrap-table @NICE
- layui table 
  - 设计上上有独到之处，但是不够灵活和强大
  - 使用原因是相信layui生态
- jqGrid 
  - https://github.com/tonytomov/jqGrid
  - https://github.com/rstaib/jquery-bootgrid
- jsgrid <https://github.com/tabalinas/jsgrid>
- handsontable($) 
    - 支持modern
    - <https://github.com/handsontable/handsontable>
    - <https://handsontable.com/>

- 最好看的表格 
  - <https://colorlib.com/wp/css3-table-templates/>
  - Crisp table <http://codepen.io/stursby/pen/HdiJh>
  - heavy table <http://codepen.io/victordarras/pen/hJHAm?editors=0110>
  - HTML5响应式表格

    - CSS简单实现 <http://www.jq22.com/jquery-info6700>
    - 好看一点的样式 <http://www.jq22.com/jquery-info1372>

# bootstrap系列表格

- bootstrap-table <https://github.com/wenzhixin/bootstrap-table>

# 表格扩展功能

- 固定与滚动

  - 固定表格列和表格头部内容可拖拽 <http://www.jq22.com/webqd1769>
  - 可滚动的tbody <http://www.jq22.com/webqd3098>

- 自动生成表格

  - <http://www.jq22.com/jquery-info3656>

```javascript
第一步是：设置 tbody 为 display:block ，以便我们可以应用 height 和 overflow 属性。
下一步将是：设置thead 中的 tr元素设置为 display:block。
```

- 筛选排序
  - Filterizr (a jQuery plugin that sorts, shuffles and applies stunning filters over responsive galleries using CSS3 transitions and custom CSS effects)
- 移动端
  - stacktable.js 小屏幕排列  https://github.com/johnpolacek/stacktable.js/

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

- ->> 可视化

--------------------------------------------------------------------------------

# 进度条


- nprogress <https://github.com/rstacruz/nprogress>
- pace https://github.com/HubSpot/pace

- 栗子
  - <http://www.jq22.com/webqd1913>
  - css3进度条 <http://www.jq22.com/webqd1062>


# 富文本编辑器

- 为什么都说富文本编辑器是天坑？ https://www.zhihu.com/question/38699645
    - DOM
    - Range/Selection -> 但凡复杂的编辑器都是自己实现类似contentEditable功能的
    - 编辑器本身 -> 撤回 | 重做


- 经典 ckeditor | kindeditor
- tinymce
- ace <https://github.com/ajaxorg/ace>
- editor https://github.com/ory/editor
- draft-js @NICE  基于React <https://github.com/facebook/draft-js>
- quill 图片坑 <https://github.com/quilljs/quill>
- 国内 ueditor | wangeditor
    - neditor 基于Ueditor优化 https://gitee.com/notadd/neditor
- x-editable jquery考虑 <https://github.com/vitalets/x-editable>
- medium-editor 原生JS IE兼容 <https://github.com/yabwe/medium-editor>
- stackedit <https://github.com/benweet/stackedit>
- 次选

  - summernote <https://github.com/summernote/summernote>
  - wysiwyg <https://github.com/mindmup/bootstrap-wysiwyg/>
  - sqire
  - pell

 # Markdown编辑器 | MD 

 - simplemde-markdown-editor https://github.com/sparksuite/simplemde-markdown-editor
- A markdown parser and compiler. Built for speed. <https://github.com/chjj/markedmarked>
- <https://github.com/jgthms/wysiwyg.css> A tiny CSS for generated HTML or Markdown content
- marked 

# 树状图

- zTree https://github.com/zTree/zTree_v3
    - 文档 http://www.treejs.cn/v3/main.php#_zTreeInfo
    - 兼容IE6+
    - 样式优化 http://www.jq22.com/jquery-info15563

# 数据结构 | 格式校验

- superstruct

  - <https://github.com/ianstormtaylor/superstruct>
  - A simple and composable way to validate data in Javascript.

- immutable-js <https://github.com/facebook/immutable-js>

```javascript
const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') + " vs. " + map2.get('b') // 2 vs. 50
```

- js-model

# 复制粘贴

- clipboard.js <https://github.com/zenorocha/clipboard.js>
- zeroclipboard 兼容ie 用到flash https://github.com/zeroclipboard/zeroclipboard

# 本地存储


- store.js <https://github.com/marcuswestin/store.js>
- localForage <https://github.com/localForage/localForage>