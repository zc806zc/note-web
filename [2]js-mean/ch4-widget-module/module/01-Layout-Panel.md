# Layout/Panel

- 布局

  - 栅格布局
  - 网格布局
  - muuri

    - <https://github.com/haltu/muuri>
    - Responsive, sortable, filterable and draggable grid layouts

  - 全屏

    - fullPage

      - <https://github.com/alvarotrigo/fullPage.js>

  - 拖拽

    - dragula <https://github.com/bevacqua/dragula>

  - 滚动条

    - scrollreveal

      - <https://github.com/jlmakes/scrollreveal>

- 弹框

  - layer
  - sweetalert

    - <https://github.com/t4t5/sweetalert>
    - <https://github.com/limonte/sweetalert2>

  - izimodal <https://github.com/dolce/iziModal>

- 元素定位

  - 页脚置底 <http://liaokeyu.com/%E6%8A%80%E6%9C%AF/2017/01/06/%E8%AF%91-CSS%E4%BA%94%E7%A7%8D%E6%96%B9%E5%BC%8F%E5%AE%9E%E7%8E%B0Footer%E7%BD%AE%E5%BA%95.html>
  - 固定在浏览器顶部 <http://www.jq22.com/webqd2646>

- 锚点跳转

  - <http://www.jq22.com/webqd2418>

```javascript
$(window).ready(function() {
    $('#nav > .menu').on('click', function() {
        var $this = $(this);
        $this.addClass('active').siblings('.menu').removeClass('active');
        $("html,body").animate({
            scrollTop: $("#main > .box").eq($this.index() - 1).offset().top // 这一句
        }, 300);
        $("#bar").animate({
            left: $this.offset().left
        }, 300);
    });
});
```

- 全屏/放大

  - <http://www.jq22.com/webqd2471>

- jQuery段实现左右div自适应相同高度

```javascript
function autoHeight() {
    if ($("left").offsetHeight >= $("right").offsetHeight) {
        $("right").style.height = $("left").offsetHeight + "px";
    } else {
        $("left").style.height = $("right").offsetHeight + "px";
    }
}
```

- 文本截断

  - css
  - js <http://www.jq22.com/webqd2751>
  - 插件 <https://dollarshaveclub.github.io/shave/>

```javascript
var shortName = "我和我好朋友写代码的照片.jpg".replace(/^(^.{8})(.+)(.{2}\.+\w+$)$/g, "$1...$3");
document.getElementById('output').append(shortName);

// 多行
p {
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:5;
  overflow:hidden;
  width:200px;
  margin:50px;
}
```

- 仿淘宝页面点击元素收起或展开内容

  - <http://www.jq22.com/webqd2760>

```javascript
<div class="cf_allGoods">
    <div class="cf_listATitle"><i>-</i><span>查看所有商品</span></div>
    <div class="cf_agClassFi"><a>按销量</a><a>按价格</a><a>按商品</a><a>按收藏</a></div>
</div>

$(".cf_listATitle").on("click", function() {
    $(this).next().toggle(1000, function() {
        console.log($(this).prev().find("i").text());
        if ($(this).prev().find("i").text() == "-") {
            $(this).prev().find("i").text("+");
        } else {
            $(this).prev().find("i").text("-");
        }
    });
});
```

- 点击空白处关闭弹窗

  - document加阻止冒泡 两个点击事件
  - <http://www.jq22.com/webqd2693>

```javascript
click("box","box");
function click(name,box) {
    $(document).on("click", function(e) {
        var _conss = $('.'+name);//点击的容器范围
        if (!_conss.is(e.target) && _conss.has(e.target).length === 0) {
            $("."+box).hide();//选择要关闭的容器
        }
    });
}
```

- 选项卡

```javascript
$("#" + wrapId).find("div").eq(index).show().siblings().hide();  // 显示自己隐藏兄弟
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

- 下拉菜单

  - css实现 <http://www.jq22.com/webqd3033>

- jQuery弹出窗口可移动、缩放 <http://www.jq22.com/webqd3029>

- 网页标签页消息提示 <http://www.jq22.com/webqd1653>

```javascript
(function(){
    $.extend({
        mengfan:{
            show:function(str){
                var step=0,title=document.title;
                var timer=setInterval(function(){
                    step++;
                    if(step==3){step=1};
                    if(step==1){document.title=title};
                    if(step==2){document.title='【'+str+'】'+title};
                },500);
                return [timer,title];
            },
            clear:function(timerarr){
                if(timerarr){
                clearInterval(timerarr[0]);
                document.title=timerarr[1];
                };

            }
        }
    });
})(jQuery)


message=$.mengfan.show('新消息');
    setTimeout(function(){
        $.mengfan.clear(message);
},10000);
```

- 贴边停靠 <http://www.jq22.com/webqd2141>

- 下拉加载更多 <http://www.jq22.com/webqd2043>

```javascript
$(window).scroll(function() {
    //当时滚动条离底部60px时开始加载下一页的内容
    if (($(window).height() + $(window).scrollTop() + 60) >= $(document).height()) {
        clearTimeout(timers);
        timers = setTimeout(function() {
            page++;
            console.log("第" + page + "页");
            LoadingDataFn();
        }, 300);
    }
});
```

- 视频背景

  - bideo.js

    - <https://github.com/rishabhp/bideo.js>
    - Fullscreen HTML5 Background Video for the Web

- 单页面

  - senna.js

    - <https://github.com/liferay/senna.js/>
    - A blazing-fast Single Page Application engine

- 轮播图

  - 别再使用轮播图了 <https://juejin.im/post/599cf1596fb9a02481205803?utm_source=gold_browser_extension>
  - 切割轮播图 <http://www.jq22.com/webqd2833>
  - 全屏垂直滚动 <http://www.jq22.com/webqd1991>
  - CSS3轮播 <http://www.jq22.com/webqd2427>
  - 渐隐效果仿dribble <http://www.jq22.com/webqd2023>

```css
#photos {
    position:absolute;
    z-index:9;
    width:calc(300px * 4);
    /*---修改图片数量的话需要修改下面的动画参数*/
}
.play {
    animation:ma 20s ease-out infinite alternate;
}
@keyframes ma {
    0%,25% {
    margin-left:0px;
  }
  30%,50% {
    margin-left:-300px;
  }
  55%,75% {
    margin-left:-600px;
  }
  80%,100% {
    margin-left:-900px;
  }
}
```

> 轮播图: 获取1% 的用户点击却占用了页面一半甚至更多的位置

- 对话框和灯箱
- 弹出层与工具提示(也可以属于tool)

  - layer 推荐
  - tecent artDialog
  - lhgdialog
  - JS简单 <http://www.jq22.com/webqd2525>
  - <http://www.jq22.com/webqd2001>

- 布局

  - 图片瀑布流 <http://www.jq22.com/webqd2082>

- Tabs

- 导航

  - 水平导航

    - 旋转显示 <http://www.jq22.com/webqd2435>
    - 立体导航 <http://www.jq22.com/webqd1907>

```javascript
// 立体导航
ul li:hover .left {
    transform-origin:left;
    transform:skew(0deg,-30deg);
    background-color:#c1c1c1;
    box-shadow:10px 20px 20px  -10px #666;
}
ul li:hover .center {
    transform:translateY(-17px);
    text-shadow:5px 5px 3px #666;
    box-shadow:0 20px 20px -10px #666;
}
```

- 垂直导航

- 微信底部菜单 <http://www.jq22.com/webqd487>

- 文件树

  - 简易 <http://www.jq22.com/webqd2457>

- 手风琴导航

- 分页

  - 简单分页 <http://www.jq22.com/webqd1246>

- 其他导航

- 垂直字幕|中奖名单

  - CSS <http://www.jq22.com/webqd2625>
  - marquee(过时) <http://www.jq22.com/webqd2575>
  - JS <http://www.jq22.com/webqd2444> | <http://www.jq22.com/webqd2391>

```less
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
