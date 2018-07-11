# CSS世界

- @Author: 张鑫旭
- CSS世界中那些说起来很冷的知识 https://juejin.im/post/5b406f40e51d45194832b759 
  - 那些默认需要隐藏的图片作为背景图藏在display:none元素的子元素上，这样的细小改动就可以明显提升页面的加载体验
  - display： none; 与 visibility: hidden;
  - rgba
    - IE8不支持rgba，所以上面借助了filter设置了透明度为一半效果
    - 但是由于IE9支持rgba，再借助:root来进行重置，不使用filter
    - 再加上IE10针对镂空元素会有点击穿透问题，所以再给background设置看不见的背景内容就可以解决
  - 流向的改变
    - direction
    - writing-mode

```css
writing-mode: lr-tb | tb-rl | tb-lr (IE8+)
writing-mode: horizontal-tb | vertical-rl | vertical-lr;
```