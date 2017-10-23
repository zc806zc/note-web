# **jQuery UI**

- 基础

  - [主题下载](http://jqueryui.com/themeroller/)
  - [upgrade-guide](http://jqueryui.com/upgrade-guide/)
  - [手册](http://www.runoob.com/jqueryui/jqueryui-api.html)

```javascript
一组用户界面交互、特效、小部件及主题
组件间相对独立，可按需加载，避免浪费带宽拖慢网页打开速度
20 种预设主题 + 60 项可配置样式 + 24 种背景纹理(约...)
完整汉化
部分组件 Bugs 较多，不能达到企业级产品开发要求
组件间 API 缺乏协调，缺乏配合使用帮助
相对于 Dojo、YUI、Ext JS 等成熟产品，可用控件较少，无法满足复杂界面功能要求
jQuery UI 的版本是配合特定的 jQuery 版本设计的
```

- API内容

```javascript
特效 支持颜色动画和 Class 转换 提供了一些额外的 Easings
特效核心 jquery.ui.effect.js 提供
鼠标交互 拖拽...
重载了几个内置的 jQuery 方法，以提供额外的功能。
增加了便利性的一些简单方法 异步聚焦到一个元素
选择器
主题：一个强大的 CSS 框架 采用共享标记公约，便于插件社区的代码集成
UI核心 jquery.ui.core.js
实用工具 jQuery.widget.bridge() 中介...
小部件 扩展和调用小部件
```

- 工作原理

```javascript
生命周期
只要是颜色、背景图像、图标等。
所以这些是 "安全的" 样式，不会影响到插件的功能

theme.css(观感) + 具体的样式表(尺寸、内边距、外边距、定位、浮动)
为了易于维护，建议只更改 ui.theme.css 文件和图像
```

- 部件库： 一致的API 尽可能多的选项定义 defaults

```javascript
$.widget( "ns.plugin", {
// Default options.
options: {
param1: "foo",
param2: "bar",
param3: "baz"
},
_create: function() {
// Options are already merged and stored in this.options
// Plugin logic goes here.
}
});

首先，语境是一个对象，不是 DOM 元素。
其次，语境总是一个单一的对象，不是一个集合。

只能创建一层深的命名空间

在本章节中我们使用了 custom 命名空间。
ui 命名空间被官方的 jQuery UI 插件保留。
当创建您自己的插件时，您应该创建自己的命名空间。
这样才能更清楚插件来自哪里，属于哪个范围

所有自动添加到插件的功能都来自一个基本的小部件原型，jQuery.Widget.prototype

var bar = $.custom.progressbar( {}, $( "<div></div>" ).appendTo( "body") )
alert( bar.options.value );


// 插件有构造函数和原型的最大好处是易于扩展插件。
$.custom.progressbar.prototype.reset = function() {
this._setOption( "value", 0 );
};

_destroy() 移除实例引用 解除绑定所有使用_bind()添加的事件
部件库（Widget Factory）只是创建有状态插件的一种方式
```

# **jQuery Easy UI的元素**

```javascript
应用
curd应用（数据网格 + 表单）
RSS阅读器
拖放
购物车 + 课程表
菜单和按钮
布局
边框布局 → 复杂布局
折叠面板
标签页（动态添加 自动播放...）
XP左侧面板
数据网格
HTML table 转换成数据网格
添加工具栏/复选框/页脚摘要
查询 排序 冻结/动态改变列/创建列组合 行背景颜色
自定义分页
行内编辑
列运算
合并单元格
自定义视图
显示海量数据


窗口
窗口 + 工具栏
可自定义的对话框
树形菜单
异步
添加结点 创建复选框 拖放
树形网格(动态加载,添加分页,惰性加载结点)
表单
异步提交
验证
下拉框（格式化,过滤）
```

## UI

- 背景
- 对话框和灯箱
- 弹出层
- 筛选排序
- 反馈
- 悬停
- 布局
- 图表
- 加载

  - <https://codepen.io/collection/jifIK/>

- 圆边

- 滚动

- 标签

- 文本链接

- 工具提示

- 网络类型

## 输入

- 通用输入
- 拾色器
- 定制和风格
- 时间日期
- 拖放
- 自动完成
- 密码
- 投票率
- 搜索
- 选择框
- 快捷键
- 触摸
- 丰富的输入
- 上传
- 验证

## 媒体

- 音频和视频
- 幻灯片和轮播图
- 图片展示
- 图像
- 地图
- 滑块和旋转
- Tabs

## 导航

- 水平导航
- 垂直导航
- 文件树
- 手风琴导航
- 分页
- 其他导航

## 其他

- 动画效果

  - 默认情况下，所有 HTML 元素的位置都是静态的，并且无法移动。如需对位置进行操作，记得首先把元素的 CSS position 属性设置为 relative、fixed 或 absolute。

- 浏览器调整

- 移动

- 独立的部件

- 杂项

- 游戏

  - 找不同色块的游戏 <http://www.jq22.com/webqd2835>

## 网页模板

## 常用代码

- 图片放大

```css
.box{
    width: 200px;
    height:200px;
    overflow: hidden;
}
img{
    width: 100%;
    transition: transform 1.6s;
}
img:hover{
    transform: scale(2.0);
}
```

- 返回顶部

  - <http://www.jq22.com/webqd2804>

```js
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

- 表格排序

  - <http://www.jq22.com/webqd2793>

- 表单

  - 文本框自动跳转下一个 <http://www.jq22.com/webqd2809>

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

- 表单验证

  - <http://www.jq22.com/webqd2853>

- 三级联动

  - 省市区 <http://www.jq22.com/webqd3010>

- 拖放

  - 图片 <http://www.jq22.com/webqd2950>
  - 支持排序 <http://www.jq22.com/webqd2944>

```javascript
// 图片拖放
<div id="wrap2" class="wrap" ondragover="allowDrop(event)" ondrop="drop(event)"></div>

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Img");
    ev.target.appendChild(document.getElementById(data));
}

// 拖拽排序
function DragDrop(id) {
    this.parentBox = document.getElementById(id)
    this.editSwith = this.parentBox.querySelector('.editOrder');
    this.save = this.parentBox.querySelector('.save');
    this.list = this.parentBox.querySelector('.list');
    this.li = this.list.querySelectorAll('li');
    this.aPosXY = []; //原始位置
    this.aPosXYClone = [];
    this.moveStatus = false; //移动状态
    this.editAble = false; //编辑状态
    this.dashedBox = null;
    this.moveItem = null;
    this.moveItemH = null;
    this.mouseDownPos = [];
    this.inScope = false;
}

//鼠标移动
DragDrop.prototype.mouseMove = function(e, obj) {

    var relativeListX = e.pageX - this.list.offsetLeft; //鼠标相对ul的位置 x
    var relativeListY = e.pageY - this.list.offsetTop; //鼠标相对ul的位置 y
    var objIndex = obj.getAttribute('data-index'); //获取当前选中元素的下标
    var objLeft = this.aPosXY[objIndex].x;
    var objTop = this.aPosXY[objIndex].y; //根据下标获取当前选中元素 固定的时候的定位 x,y;
    //      console.log('objLeft：'+objLeft+'  objTop：'+objTop); //  objLeft：10px  objTop：10px
    var relativeObjX = this.mouseDownPos.x - parseInt(objLeft); //鼠标按下时鼠标相对于选中元素的位置x
    var relativeObjY = this.mouseDownPos.y - parseInt(objTop); //鼠标按下时鼠标相对于选中元素的位置y
    var objMoveX = relativeListX - relativeObjX;
    var objMoveY = relativeListY - relativeObjY;
    //      console.log(objMoveX +'  '+objMoveY)
    //      console.log('x:'+relativeListX+' y:'+relativeListY);
    //      console.log('x:'+relativeObjX+' y:'+relativeObjY);
    setCss(obj, {
        'left': objMoveX + 'px',
        'top': objMoveY + 'px'
    });
    for (var i = 0; i < this.aPosXYClone.length; i++) {
        if (!(i == objIndex)) {
            if (objMoveY + obj.offsetHeight >= parseInt(this.aPosXYClone[i].y) + this.li[i].offsetHeight / 2 && objMoveY + obj.offsetHeight < parseInt(this.aPosXYClone[i].y) + this.li[i].offsetHeight || objMoveY >= parseInt(this.aPosXYClone[i].y) && objMoveY < parseInt(this.aPosXYClone[i].y) + this.li[i].offsetHeight / 2) {
                //            console.log(i);
                var ts = [];
                ts.x = this.dashedBox.style.left;
                ts.y = this.dashedBox.style.top;
                this.aPosXYClone[objIndex] = this.aPosXYClone[i];
                this.aPosXYClone[i] = ts;
                setCss(this.dashedBox, {
                    'left': this.aPosXYClone[objIndex].x,
                    'top': this.aPosXYClone[objIndex].y
                });
                setCss(this.li[i], {
                    'left': ts.x,
                    'top': ts.y
                });
                //            console.log(this.aPosXYClone)
                //            console.log(this.aPosXY)
                return false;
            }
        }
    }

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

- 广告

- 饿了么添加菜品小球动画 <http://www.jq22.com/webqd2892>

- 选项卡

```javascript
$("#" + wrapId).find("div").eq(index).show().siblings().hide();  // 显示自己隐藏兄弟
```

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

- 限时答题 <http://www.jq22.com/webqd3103>
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

- 关于jquery实现px转换为rem代码

```javascript
var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 640) {
    deviceWidth = 640;
}
if (deviceWidth < 320) {
    deviceWidth = 320;
}
document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px';
//此部分是设计稿宽度为375px的，这边设置为3.75  页面调用时，如果实际设计稿为760px，那边这边的3.75数值改为7.60
window.onresize = function() {
    var deviceWidth = document.documentElement.clientWidth;
    if (deviceWidth > 640) {
        deviceWidth = 640;
    }
    if (deviceWidth < 320) {
        deviceWidth = 320;
    }
    document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px';
}
```

- canvas选座位 <http://www.jq22.com/webqd3040>

- 原生弹幕 <http://www.jq22.com/webqd3046>

- 淘宝评分 <http://www.jq22.com/webqd3035>

```javascript
function praise(num, obj) {
    obj.prevAll().attr('class', 'xx-star');
    obj.attr('class', 'xx-star');
    obj.nextAll().attr('class', 'xx-star2');
    $(".display-star").html(num + '星');
}
```

- js数字金额大写转换 <http://www.jq22.com/webqd3030>

- 下拉菜单 css实现 <http://www.jq22.com/webqd3033>

- 本地input选择图片实时显示

  - createObjectURL <http://www.jq22.com/webqd2884>
  - FileReader <http://www.jq22.com/webqd2885>
  - 转base64显示 <http://www.jq22.com/webqd2806>

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

- jQuery弹出窗口可移动、缩放 <http://www.jq22.com/webqd3029>

- 图片炸裂 <http://www.jq22.com/webqd3028>

  - 切割轮播图 <http://www.jq22.com/webqd2833>

- 打字效果

```javascript
var zi = "这是个神奇的网站！";
var i = 0;
var divObj; //全局变量
function init() {
    divObj = document.getElementById("divId");
    setInterval(show, 200); //每个指定的毫秒执行一次函数
}init();

function show() {
    i++;
    var jzi = zi.substring(0, i); //截取字符串，每次截取一个
    divObj.innerHTML = jzi; //往div设置内容
    if (i == zi.length) { //当字符串写完后，重新开始执行
        i = 0;
    }
}
```

- 百度搜索结果 <http://www.jq22.com/webqd2961>

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

- 碰撞检测

```javascript
function judgeCrash(obj) {
    this.first = obj.elem1;
    this.second = obj.elem2;
    this.fnS = obj.fnS;
    this.fnE = obj.fnE;
    this.judge = function() {
        var Stop = this.second.offsetTop;
        var Sleft = this.second.offsetLeft;
        var Ftop = this.first.offsetTop;
        var Fleft = this.first.offsetLeft;
        var minLeft = Fleft - this.second.offsetWidth;
        var maxLeft = Fleft + this.first.offsetWidth;
        var minTop = Ftop - this.second.offsetHeight;
        var maxTop = Ftop + this.first.offsetHeight;
        if (Sleft >= minLeft && Sleft <= maxLeft && Stop >= minTop && Stop <= maxTop) {
            if (this.fnS) { //判断fun有没有
                this.fnS();
                return;
            }
        }
        if (this.fnE) { //判断error有没有
            this.fnE();
        }
    }
    var fn = this.judge;
    this.first.onmousedown = function(event) {
        var t = this; //t=this.first
        console.log(t)
        var startX = event.clientX;
        var startY = event.clientY;
        var offX = t.offsetLeft;
        var offY = t.offsetTop;
        document.onmousemove = function(event) {
            var theleft = event.clientX - startX;
            var theTop = event.clientY - startY;
            fn();
            t.style.left = offX + theleft + 'px';
            t.style.top = offY + theTop + 'px';
        }
        document.onmouseup = function(event) {
            document.onmousemove = null;
        }
    }
}

judgeCrash({
    elem1: second1,
    elem2: first1,
    fnS: function() {
        console.log("Yes");
        document.getElementById('one').innerHTML = 'Yes';
    },
    fnE: function() {

    }
});
```

- 格式化CSS代码 <http://www.jq22.com/webqd2886>

  - 正则表达式

## 参考

```javascript
jq22.com
```
