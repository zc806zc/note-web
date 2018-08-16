# 布局引擎(栅格布局 | 网格布局)

- masonry

  - Cascading grid layout library
  - <https://github.com/desandro/masonry>

- muuri

  - <https://github.com/haltu/muuri>
  - Responsive, sortable, filterable and draggable grid layouts

- neat

  - <https://github.com/thoughtbot/neat>

- isotope($)

  - https://github.com/metafizzy/isotope

# 懒加载 | 瀑布流

- 懒加载
- 瀑布流 <https://www.imooc.com/learn/101>
- 图片预加载 <https://www.imooc.com/video/14430>
- 图片瀑布流 <http://www.jq22.com/webqd2082>

# 占位元素

...

--------------------------------------------------------------------------------

# 全屏背景 | 视差

- fullPage

  - <https://github.com/alvarotrigo/fullPage.js>

- 全屏视频

  - FitVids.js 嵌入视频 <https://github.com/davatron5000/FitVids.js>

    - A lightweight, easy-to-use jQuery plugin for fluid width video embeds.

  - bideo.js

    - <https://github.com/rishabhp/bideo.js>
    - Fullscreen HTML5 Background Video for the Web

- skrollr 视差 
  - 已不维护 
  - https://github.com/Prinzhorn/skrollr

# 单页面

- senna.js

  - <https://github.com/liferay/senna.js/>
  - A blazing-fast Single Page Application engine

--------------------------------------------------------------------------------

# 拖拽

- Sortable https://github.com/RubaXa/Sortable
- dragula @NICE <https://github.com/bevacqua/dragula>
- draggable <https://github.com/Shopify/draggable>

- 拖放栗子

  - 图片 <http://www.jq22.com/webqd2950>
  - 支持排序 <http://www.jq22.com/webqd2944>
  - HTML5拖拽 <http://www.jq22.com/webqd2072>
  - 支付宝价格拖放 <https://segmentfault.com/a/1190000013266172>

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

# 浏览器调整

# 可调大小面板

- <https://www.imooc.com/learn/193>

--------------------------------------------------------------------------------

# 滚动条

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

--------------------------------------------------------------------------------

# 页面导航

...

# 元素定位 | 返回顶部 | 锚点跳转

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

- 锚点跳转 <http://www.jq22.com/webqd2418>

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

--------------------------------------------------------------------------------

# 弹框 | 相册 | 图片预览

- 弹框设计

  - 如何支持alert()这样的阻塞
  - 与其他组件之间的异步问题 setTimeout(fn, 0);
  - 弹框上的下拉框内容是否允许溢出弹框 select下拉选项不确定
  - 是否允许浏览器滚动条滚动

- 弹出层提取理念

  - lhgdialog会销毁之前提取的内容, 这种处理不合理
  - layer这种复制比较好

- 推荐
  - layer (国内最广泛)
  - artDialog
  - sweetalert
    - <https://github.com/t4t5/sweetalert>
    - <https://github.com/limonte/sweetalert2>
  - Magnific Popup
  - css-modal 纯css模拟 <https://github.com/drublic/css-modal>

- 图片预览
  - viewer.js IE8+ 滚轮放大缩小 
    - https://github.com/fengyuanchen/viewer
    - http://www.jq22.com/jquery-info6536
    
- 其他
  - lhgdialog
  - izimodal <https://github.com/dolce/iziModal>
  - Waypoints
  - cbpGridGallery.js

- 栗子
  - jQuery弹出窗口可移动、缩放 <http://www.jq22.com/webqd3029>
  - JS简单 <http://www.jq22.com/webqd2525>
  - <http://www.jq22.com/webqd2001>


# 提示标签 | Tooltip

- popper.js <https://github.com/FezVrasta/popper.js>
- tipsy IE兼容 https://github.com/jaz303/tipsy

# 对话框和灯箱 | Swiper | 幻灯片

- https://github.com/dimsemenov/PhotoSwipe
- swiper https://github.com/nolimits4web/swiper 
- scrollreveal @NICE

  - <https://github.com/jlmakes/scrollreveal>

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

--------------------------------------------------------------------------------

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

- 无延迟菜单
  - JS实现京东无延迟菜单效果 <https://www.imooc.com/video/14777>

--------------------------------------------------------------------------------

# 轮播 | 焦点图

- 别再使用轮播图了 <https://juejin.im/post/599cf1596fb9a02481205803>

> 轮播图: 获取1% 的用户点击却占用了页面一半甚至更多的位置

- 推荐
  - (首选) slick -> the last carousel you'll ever need <https://github.com/kenwheeler/slick>
  - (推荐) superslide <http://www.SuperSlide2.com/>
  - fancybox
- 轻量级

  - unslider
  - siema <https://github.com/pawelgrzybek/siema>
  
- 兼容性
  - myfocus(jquery) 

- 其他
  - Camera slideshow <https://www.pixedelic.com/plugins/camera/>
  - jquery.flexisel.js
  - Nivo Slider
    - The Most Awesome jQuery Image Slider
  - FlexSlider 2
    - The best responsive slider. Period.
  - bxslider-4
    - Responsive jQuery content slider

- 栗子
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

# Tab | 选项卡

- Tab插件开发 <https://www.imooc.com/video/14627>

```javascript
$("#" + wrapId).find("div").eq(index).show().siblings().hide();  // 显示自己隐藏兄弟
```

- 响应式选项卡


# x-y-导航 | 侧边栏

- 侧栏工具条开发 <https://www.imooc.com/learn/425>
- 导航条菜单的制作 <https://www.imooc.com/learn/6>


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

# Tabbar

- 微信底部菜单

- <http://www.jq22.com/webqd487>

# 文件树导航

- 栗子
  - <http://www.jq22.com/webqd2457>

# 手风琴导航
