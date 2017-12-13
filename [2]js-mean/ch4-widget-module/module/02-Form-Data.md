# Form/Data/Button

- 表单校验

  - cleave.js

    - <https://github.com/nosir/cleave.js>
    - Format input text content when you are typing...

  - jquery validate

- 银行卡号空格 <http://www.jq22.com/webqd1489>

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

- 表格排序

  - <http://www.jq22.com/webqd2793>

- 表单

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

- 联动

  - 省市下拉框联动

    - (推荐) <http://www.jq22.com/jquery-info8054>
    - <http://www.jq22.com/jquery-info16612>
    - <http://www.jq22.com/jquery-info448>
    - 原生JS <http://www.jq22.com/yanshi16932>
    - <http://www.jq22.com/webqd3010>

  - 字母点击选择 <http://www.jq22.com/webqd2257>

  - 省市区面板点击

    - (推荐) <http://www.jq22.com/jquery-info7095>
    - 仿京东 <http://www.jq22.com/jquery-info9397>
    - <http://www.jq22.com/jquery-info13655>
    - <http://www.jq22.com/jquery-info2876>

- 时间正序排序

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

- 表格

  - 固定表头
  - 固定表格列和表格头部内容可拖拽 <http://www.jq22.com/webqd1769>
  - 可滚动的tbody <http://www.jq22.com/webqd3098>

```javascript
第一步是：设置 tbody 为 display:block ，以便我们可以应用 height 和 overflow 属性。
下一步将是：设置thead 中的 tr元素设置为 display:block。
```

- 去除空格

```javascript
function Trim(str) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    result = result.replace(/\s/g, "");
    return result;
}
```

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

- 搜索

  - 百度搜索结果 <http://www.jq22.com/webqd2961>

  - 豆瓣图书搜索功能 <http://www.jq22.com/webqd2702>

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

- 表单输入实时监听

```javascript
$("input").on("input propertychange", function() {
    check("user", "pass", "btn", "orange");
});
```

- 点赞 <http://www.jq22.com/webqd2408>

- 复制文字追加网站来源

  - <http://www.jq22.com/webqd581>

```javascript
//复制内容自动添加版权信息
var Sys = {};
var ua = navigator.userAgent.toLowerCase();
if( window.ActiveXObject )
{
    document.body.oncopy=function()
    {
        event.returnValue = false;
        var t=document.selection.createRange().text;
        var s="\r\n原文出自[jQuery插件库] 转载请保留原文链接:"+location.href;
        clipboardData.setData('Text',t+'\r\n'+s);
    }
}

else
{
    function addLink()
    {
        var body_element = document.getElementsByTagName('body')[0];
        var selection;
        selection = window.getSelection();
        var pagelink = " 原文出自[jQuery插件库] 转载请保留原文链接:"+document.location.href;

        var copytext = selection + pagelink;
        var newdiv = document.createElement('div');
        newdiv.style.position='absolute';
        newdiv.style.left='-99999px';
        body_element.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);
        window.setTimeout(function(){
          body_element.removeChild(newdiv);
        }, 0);
    }
    document.oncopy = addLink;
}
```

- 输入框输入字数限制 <http://www.jq22.com/webqd2084>

- 按钮

  - btn-css-generator <http://www.bestcssbuttongenerator.com/#/8>
  - 防止表单重复提交的loading
  - 悬浮

    - <http://www.jq22.com/webqd1687>
    - <http://www.jq22.com/webqd1688>
    - <http://www.jq22.com/webqd114>

![](/assets/import-double-submit.png)

- 登录

  - <https://profile.freepik.com/login>
  - 复位这个按钮几乎永远都不会帮助到用户

![](/assets/login-sample-23.png)

- 用户很可能不愿意填写表单

  - 逻辑分组
  - 重视交互，做有意思的设计

- 表格 <https://colorlib.com/wp/css3-table-templates/>

  - Crisp table <http://codepen.io/stursby/pen/HdiJh>
  - heavy table <http://codepen.io/victordarras/pen/hJHAm?editors=0110>

- 筛选排序

- 图表

- 输入

  - 通用输入
  - 拾色器
  - 定制和风格
  - 时间日期
  - 拖放
  - 自动完成
  - 密码
  - 投票率
  - 搜索 <http://www.jq22.com/webqd1354>
  - 选择框
  - 快捷键
  - 触摸
  - 丰富的输入
  - 上传
  - 验证

    - <http://www.jq22.com/webqd2853>

- 滑动验证

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

- 穿梭框

- 下拉框 | 选择框

  - niceSelect
  - select2
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

- 云标签

  - <http://www.jq22.com/webqd1921>

- 行内编辑 <http://www.jq22.com/webqd1430>

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
