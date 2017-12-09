# Form/Data/Button

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

  - 省市二级联动 <http://www.jq22.com/webqd3010>
  - 字母点击选择 <http://www.jq22.com/webqd2257>

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
