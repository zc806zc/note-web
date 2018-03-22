# 经典前端组件方案


- 伯乐在线awesome-javascript(NICE) <https://github.com/jobbole/awesome-javascript-cn>

- fetool <https://github.com/nieweidong/fetool>
- frontend-stuff <https://github.com/moklick/frontend-stuff>
- 前端插件 <https://github.com/iamjoel/front-end-plugins#tool>


- jQuery插件方案

  - awesome-jquery <https://github.com/petk/awesome-jquery>


- 轻量

  - 不可错过的javascript迷你库 <https://juejin.im/entry/5aa728fbf265da239147c59a>

    - <https://github.com/yanhaijing>
    - cookie.js <https://github.com/florian/cookie.js>
    - store.js <https://github.com/marcuswestin/store.js>
    - template.js <https://github.com/yanhaijing/template.js>
    - favico.js 在favico上添加数字 <https://github.com/ejci/favico.js>
    - move.js CSS3动画 <https://github.com/visionmedia/move.js>
    - device.js
    - is.js 几乎所有类型检查 <https://github.com/arasatasaygin/is.js>
    - notie 移动端通知 <https://github.com/jaredreich/notie>
    - share.js 一键分享到微博、QQ空间、QQ好友... <https://github.com/overtrue/share.js>
    - spacetime(A lightweight javascript timezone library) <https://github.com/smallwins/spacetime>
    - iNotify 兼容好 <https://github.com/jaywcjlove/iNotify>

  - 轻量级、无依赖 <https://github.com/jawil/blog/issues/10>

- N个干货集

  - 15个有趣的JS框架 <https://juejin.im/entry/59a802855188252420755982>
  - 67 个拯救前端开发者的工具、库和资源 <https://juejin.im/entry/59b202e96fb9a0249b487fd5>


# 常用CDN

- 重置

```html
<!-- normalize -->
<link href="https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css" rel="stylesheet">

<!-- reset -->
<link href="https://cdn.bootcss.com/minireset.css/0.0.2/minireset.min.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/meyer-reset/2.0/reset.min.css" rel="stylesheet">
```

- 兼容

```html
<!--响应式兼容-->
<!--[if lt IE 9]>
<script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<!--modernizr-->
<script src="https://cdn.bootcss.com/modernizr/2.8.1/modernizr.min.js"></script>
<script src="https://cdn.bootcss.com/modernizr/2010.07.06dev/modernizr.min.js"></script>

<!-- classie -->
<script src="https://cdn.staticfile.org/classie/1.0.1/classie.min.js"></script>

<!-- IE8 | css3 -->
<script src="https://cdn.staticfile.org/ie8/2.9.10/ie8.max.js"></script>
<script src="https://cdn.staticfile.org/css3pie/2.0beta1/PIE_IE678.js"></script>
<script src="https://cdn.staticfile.org/css3pie/2.0beta1/PIE_IE9.js"></script>
```

- jquery

```html
<!-- jquery -->
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/jquery-migrate/1.2.1/jquery-migrate.min.js"></script>
<script src="https://cdn.bootcss.com/jquery-migrate/3.0.1/jquery-migrate.min.js"></script>

<!-- jquery.easing -->
<script src="https://cdn.bootcss.com/jquery-easing/1.4.1/jquery.easing.min.js"></script>

<!-- cookie  -->
<script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>

<!-- cycle2 -->
<script src="https://cdn.bootcss.com/jquery.cycle2/20140415/jquery.cycle2.min.js"></script>

<!-- 表单校验 -->
<script src="https://cdn.bootcss.com/jquery-validate/1.17.0/jquery.validate.min.js"></script>
<script src="https://cdn.bootcss.com/jquery.form/4.2.2/jquery.form.min.js"></script>

<!-- jquery ui -->
<link rel="stylesheet" href="https://cdn.staticfile.org/jqueryui/1.12.1/jquery-ui.min.css">
<script src="https://cdn.staticfile.org/jqueryui/1.12.1/jquery-ui.min.js"></script>

<!-- jquery mobile -->
<link href="https://cdn.bootcss.com/jquery-mobile/1.4.5/jquery.mobile.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/jquery-mobile/1.4.5/jquery.mobile.min.js"></script>

<!-- jquery.mousewheel -->
<script src="https://cdn.bootcss.com/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>
```

- bootstrap

```html
<!--bootstrap-->
<link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<!--font-awesome-->
<link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

<!-- bootstrap-filestyle -->
<!-- a quick and simple plugin to help style your form's file upload inputs. -->
<script src="https://cdn.bootcss.com/bootstrap-filestyle/2.1.0/bootstrap-filestyle.min.js"></script>
```

- 模块化

```html
<!-- sea.js -->
<script src="https://cdn.bootcss.com/seajs/3.0.2/sea-debug.js"></script>
<script src="https://cdn.bootcss.com/seajs/3.0.2/sea.js"></script>

<!-- require.js -->
<script src="https://cdn.bootcss.com/require.js/2.3.5/require.min.js"></script>
```

- 样式库

```html
<!-- pure.css -->
<link href="https://cdn.bootcss.com/pure/1.0.0/pure-min.css" rel="stylesheet">
```

- animate

```html
<!--animate.css-->
<link href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css" rel="stylesheet">

<!--wow.js-->
<script src="https://cdn.bootcss.com/wow/1.1.2/wow.min.js"></script>

<!-- dynamics -->
<script src="https://cdn.bootcss.com/dynamics.js/1.1.5/dynamics.min.js"></script>
```

- 轮播 幻灯片

```html
<!-- slick -->
<link href="https://cdn.bootcss.com/slick-carousel/1.8.1/slick.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/slick-carousel/1.8.1/slick.min.js"></script>

<!--flexslider-->
<link href="https://cdn.bootcss.com/flexslider/2.6.4/flexslider.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/flexslider/2.6.4/jquery.flexslider.min.js"></script>

<!-- unslider -->
<link rel="stylesheet" href="https://cdn.staticfile.org/unslider/2.0.3/css/unslider-dots.css">
<link rel="stylesheet" href="https://cdn.staticfile.org/unslider/2.0.3/css/unslider.css">
<script src="https://cdn.staticfile.org/unslider/2.0.3/js/unslider-min.js"></script>
```

- 弹框

```html
<!--magnific-popup-->
<link href="https://cdn.bootcss.com/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
```

- 地图

```html
<!-- jquery.vmap -->
<link href="https://cdn.bootcss.com/jqvmap/1.5.1/jqvmap.min.css" rel="stylesheet">

<script src="https://cdn.bootcss.com/jqvmap/1.5.1/jquery.vmap.min.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/jquery.vmap.world.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/continents/jquery.vmap.africa.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/continents/jquery.vmap.asia.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/continents/jquery.vmap.australia.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/continents/jquery.vmap.europe.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/continents/jquery.vmap.north-america.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/continents/jquery.vmap.south-america.js"></script>
<script src="https://cdn.bootcss.com/jqvmap/1.5.1/maps/jquery.vmap.usa.js"></script>
```

- 模板引擎

```html
<!-- artTemplate -->
<script src="https://cdn.staticfile.org/artTemplate.js/3.0.1/template.js"></script>
```

- 其他

```html
<!--smoothscroll-->
<script src="https://cdn.bootcss.com/smoothscroll/1.4.6/SmoothScroll.min.js"></script>

<!--mixitup-->
<script src="https://cdn.bootcss.com/mixitup/3.2.2/mixitup.min.js"></script>
```
