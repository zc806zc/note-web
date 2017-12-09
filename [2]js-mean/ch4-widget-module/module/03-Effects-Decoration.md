# Effect/Animate/Decoration

- 右下角角标选中/标记

  - <http://www.jq22.com/webqd1488>

- 按钮变化

  - =变× <http://www.jq22.com/webqd2638>

```javascript
<div class="wrap">
    <span></span>

    <span></span>
</div>


.wrap {
    width:48px;
    height:30px;
    border:1px solid #ccc;
    position:relative;
}
span {
    height:2px;
    position:absolute;
    color:#484848;
    width:30px;
    margin:10px 10px;
    display:block;
    background:#484848;
    transition:.5s;
}
span:nth-child(2) {
    top:10px
}
.span1 {
    position:absolute;
    transform:rotate(-46deg);
    margin:15px  10px;
    height:2px;
    transition:.5s;
}
.span2 {
    position:absolute;
    transform:rotate(45deg);
    margin:5px 10px;
    height:2px;
    transition:.5s;
}
```

- 单选复选框优化 <http://www.jq22.com/webqd2718>

```html
<span class="radio_box">
 <input type="radio" id="radio_1" name="radio" checked="">
 <label for="radio_1"></label>
 <em>选项1</em>
</span>
```

- 数字滚动显示

  - <http://www.jq22.com/webqd2739>
  - <http://www.jq22.com/webqd1652>

- 导航滑动跟随效果 <http://www.jq22.com/webqd1900>

```javascript
$("ul>li").hover(function() {
    var x = $(this).offset().left - 40; //计算li的位置
    console.log(x);
    $("span").css("marginLeft", x)
}, function() {
    $("span").css("marginLeft", "0")
})
```

- 导航下划线动画 <http://www.jq22.com/webqd2744>

```css
.nav1 a {
    width:70px;
    height:100%;
    float:left;
    margin:0 15px;
    position:relative;
    text-align:center;
}
.nav1 a span {
    margin:auto;
    display:inline-block;
    position:absolute;
    bottom:5px;
    left:0;
    right:0;
    width:0px;
    height:2px;
    background:#ff0000;
    transition:.5s;
    border-radius:50px;
}
.nav1 a:hover span {
    width:100%;
    left:0;
}
```

- 图片响应模式

  - 3D倾斜响应 <http://www.jq22.com/webqd2763>
  - 放大(传统首选)
  - 抖动 <http://www.jq22.com/webqd3242>
  - 模仿小米 图片hover的阴影效果 <http://www.jq22.com/webqd1367>

```less
// 放大
.pic-box {
    width: 200px;
    height:200px;
    overflow: hidden; // 超出隐藏

    img {
        width: 100%;
        transition: transform 1.6s; // 动画过渡

        &:hover{
          transform: scale(2.0);
        }
    }
}

// 抖动
body{
    padding:30px;
}
img:hover {
    -webkit-animation:sucaijiayuan 1s .1s ease both;
    -moz-animation:tada 1s .1s ease both;
}
@-webkit-keyframes sucaijiayuan {
    0% {
         -webkit-transform:scale(1)
  }
  10%,20% {
         -webkit-transform:scale(0.8) rotate(-2deg)
  }
   30%,50%,70%,90% {
        -webkit-transform:scale(1.1) rotate(2deg)
  }
  40%,60%,80% {
         -webkit-transform:scale(1.1) rotate(-2deg)
  }
  100% {
          -webkit-transform:scale(1) rotate(0)
  }
}
```

- 饿了么添加菜品小球动画

  - <http://www.jq22.com/webqd2892>

- 卷轴动画

  - <http://www.jq22.com/webqd790>
