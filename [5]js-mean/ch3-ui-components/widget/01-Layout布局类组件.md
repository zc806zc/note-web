# Layout/Panel

```shell
布局
弹框
幻灯片
```

# 布局

- 斑马线产品展示
- 卡片布局导航

  - <http://destinesia.io>
  - <http://www.ghostchina.com>
  - <http://www.yuehetong.com>
  - <http://micourse.net>

![](http://img.blog.csdn.net/20160624152857803)

![](http://img.blog.csdn.net/20160624152937022)

# 栅格布局

# 网格布局

- masonry

  - Cascading grid layout library
  - <https://github.com/desandro/masonry>

# 布局引擎

- muuri

  - <https://github.com/haltu/muuri>
  - Responsive, sortable, filterable and draggable grid layouts

- neat

  - <https://github.com/thoughtbot/neat>

# 懒加载与瀑布流

- 懒加载
- 瀑布流 <https://www.imooc.com/learn/101>
- 图片预加载 <https://www.imooc.com/video/14430>

# 全屏

- fullPage

  - <https://github.com/alvarotrigo/fullPage.js>

- 全屏视频

  - FitVids.js <https://github.com/davatron5000/FitVids.js>

    - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.

# 拖拽

- dragula <https://github.com/bevacqua/dragula>

# 滚动条

- scrollreveal

  - <https://github.com/jlmakes/scrollreveal>

- jquery.slimScroll | jquery.nicescroll

- scrollama

  - <https://github.com/russellgoldenberg/scrollama>
  - Scrollytelling with IntersectionObserver

- 自定义实现

  - jQuery实现自定义滚动条 <https://www.imooc.com/learn/675>
  - <http://www.jq22.com/webqd2618>
  - <http://www.jq22.com/webqd1910>

  - 滚动条

- animatescroll.js <http://plugins.compzets.com/animatescroll/>

```javascript
<a onclick="$('.detail').animatescroll({padding:71});">Screens</a>
```

- 放手机里的滚屏实现

  - !important是CSS1就定义的语法，作用是提高指定样式规则的应用优先权 但最好不要用
  - background-size: cover; 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。

# 元素定位

- 页脚置底 <http://liaokeyu.com/%E6%8A%80%E6%9C%AF/2017/01/06/%E8%AF%91-CSS%E4%BA%94%E7%A7%8D%E6%96%B9%E5%BC%8F%E5%AE%9E%E7%8E%B0Footer%E7%BD%AE%E5%BA%95.html>
- 固定在浏览器顶部 <http://www.jq22.com/webqd2646>
- 返回顶部

  - jumpto (create a smooth jump to sub navigational menu in one JS call)

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

# 锚点跳转

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

# 弹框

- 纯css模拟 <https://github.com/drublic/css-modal>
- layer
- sweetalert

  - <https://github.com/t4t5/sweetalert>
  - <https://github.com/limonte/sweetalert2>

- izimodal <https://github.com/dolce/iziModal>

- Waypoints

- cbpGridGallery.js

- Magnific Popup

- 弹框设计

  - 如何支持alert()这样的阻塞
  - 与其他组件之间的异步问题 setTimeout(fn, 0);
  - 弹框上的下拉框内容是否允许溢出弹框 select下拉选项不确定
  - 是否允许浏览器滚动条滚动

# 相册

- gif预览

  - jqGifPreview <https://github.com/SodhanaLibrary/jqGifPreview>
  - lightbox
  - prettyPhoto

    - <http://www.jq22.com/jquery-info255>

- 全屏/放大

  - <http://www.jq22.com/webqd2471>

- jQuery段实现左右div自适应相同高度

- LightBox插件开发

  - <https://www.imooc.com/learn/454>
  - <https://www.imooc.com/learn/459>

```javascript
function autoHeight() {
    if ($("left").offsetHeight >= $("right").offsetHeight) {
        $("right").style.height = $("left").offsetHeight + "px";
    } else {
        $("left").style.height = $("right").offsetHeight + "px";
    }
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

# 占位元素

# 选项卡

```javascript
$("#" + wrapId).find("div").eq(index).show().siblings().hide();  // 显示自己隐藏兄弟
```

# 下拉菜单

- css实现 <http://www.jq22.com/webqd3033>
- 形形色色的下拉菜单 <https://www.imooc.com/learn/12>

- <https://zoom.us/>

- 滑过显示比点击显示贴心

- 下拉框

  - 一般要模拟下拉框，保持浏览器的一致表现
  - 不要忘记判断向上或向下拉伸

```javascript
.nav > li:hover .dropdown-menu {display: block;}
```

![](http://img.blog.csdn.net/20160624142445478)

# 无延迟菜单

- JS实现京东无延迟菜单效果 <https://www.imooc.com/video/14777>

# jQuery弹出窗口可移动、缩放

- <http://www.jq22.com/webqd3029>

# 网页标签页消息提示

- <http://www.jq22.com/webqd1653>

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

# 浏览器调整

# 贴边停靠 <http://www.jq22.com/webqd2141>

# 下拉加载更多 <http://www.jq22.com/webqd2043>

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

# 视频背景

- <https://wiffinity.com/>

- <http://www.diobox.com>

![](http://img.blog.csdn.net/20160624155047365)

- bideo.js

  - <https://github.com/rishabhp/bideo.js>
  - Fullscreen HTML5 Background Video for the Web

- 局部视频背景

  - <http://www.ottoradio.com/>

![](http://img.blog.csdn.net/20160624154346497)

# 长图背景

- <http://www.desk.com/>

![](http://img.blog.csdn.net/20160624155146593)

# 单页面

- senna.js

  - <https://github.com/liferay/senna.js/>
  - A blazing-fast Single Page Application engine

# 轮播

- 别再使用轮播图了 <https://juejin.im/post/599cf1596fb9a02481205803>
- (首选) slick <https://github.com/kenwheeler/slick>

  - the last carousel you'll ever need

- (推荐) superslide <http://www.SuperSlide2.com/>

- 轻量级

  - unslider
  - siema <https://github.com/pawelgrzybek/siema>

- 传统

  - myfocus(jquery)

- Camera slideshow <https://www.pixedelic.com/plugins/camera/>

- fancybox

- jquery.flexisel.js

- Nivo Slider

  - The Most Awesome jQuery Image Slider

- FlexSlider 2

  - The best responsive slider. Period.

- bxslider-4

  - Responsive jQuery content slider

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

# 斑马条里的滚屏

![](http://img.blog.csdn.net/20160624153124710)

- <http://www.desk.com/>

![](http://img.blog.csdn.net/20160624155403048)

# 对话框和灯箱

- 移动端Web组件-Dialog对话框

  <https: 9="" 70="" www.imooc.com="" learn="">
  </https:>

# 弹出层

- layer (国内最广泛)
- artDialog
- 传统 lhgdialog
- JS简单 <http://www.jq22.com/webqd2525>
- <http://www.jq22.com/webqd2001>

- 弹出层提取理念

  - lhgdialog会销毁之前提取的内容, 这种处理不合理
  - layer这种复制比较好

# 工具提示

# 布局

- 图片瀑布流 <http://www.jq22.com/webqd2082>

# Tabs

- Tab插件开发 <https://www.imooc.com/video/14627>

# 导航 | 侧边栏

- 侧栏工具条开发 <https://www.imooc.com/learn/425>
- 导航条菜单的制作 <https://www.imooc.com/learn/6>

# 导航分类

- 右手习惯导航

  - <https://zoom.us/>

- 变形导航

  - <http://www.mahindra.com/>

- xy轴导航

  - <http://echarts.baidu.com/examples.html>

- 巨幕导航

  - <http://www.desk.com>

  - <https://www.daocloud.io>

  - <http://www.oneapm.com>

- 侧边缩放菜单导航

  - <https://connect.barackobama.com>
  - <https://togetherjs.com/>

![](http://img.blog.csdn.net/20160624152458692)

![](http://img.blog.csdn.net/20160624152509423)

![](http://img.blog.csdn.net/20160624152637269)

![](http://img.blog.csdn.net/20160624152733021)

![](http://img.blog.csdn.net/20160624155626143)

![](http://img.blog.csdn.net/20160624155637847)

![](http://img.blog.csdn.net/20160624153645587)

# 水平导航

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

# 垂直导航

# 微信底部菜单 <http://www.jq22.com/webqd487>

# 文件树导航

- 简易实现 <http://www.jq22.com/webqd2457>

# 手风琴导航

# 分页

- 简单分页 <http://www.jq22.com/webqd1246>

- 与数据表格关联的分页删除数据时注意加载最适合的一页，因为可能删除了所在页的最后一条数据

- <http://wenda.ghostchina.com/>

- <http://www.howzhi.com/channel/photography?page=20>

- <http://www.agoda.com/city/hong-kong-hk.html>

![](http://img.blog.csdn.net/20160624154003214)

![](http://img.blog.csdn.net/20160624154018542)

![](http://img.blog.csdn.net/20160624154027476)

# 其他导航

- 抽屉式
- XY轴

# 可调大小面板

- <https://www.imooc.com/learn/193>

# 页脚

- 连贯占一屏 大气 没有给人边角料的感觉
- <http://www.yuewen.com/>
- <http://www.admaster.com.cn/>

![](http://img.blog.csdn.net/20160624155612482)

# 分支日记

- <http://www.sydjs.com/meetups>

![](http://img.blog.csdn.net/20160624155217312)
