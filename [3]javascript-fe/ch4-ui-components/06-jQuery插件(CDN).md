# jquery组件方案

- awesome-jquery <https://github.com/petk/awesome-jquery>
- jq22 http://www.jq22.com/
- jquerycards https://www.jquerycards.com/
- jquery扩展 https://gitee.com/explore/starred/jquery-plugins
- bootstrap扩展 https://gitee.com/explore/starred/bootstrap-plugins

# 常用CDN

- staticfile @nice https://www.staticfile.org/
- http://cdn.code.baidu.com/
- http://www.bootcdn.cn/
- ...

# 万金油方案 | IE兼容

- jquery1.x -> 最终版本1.12.4 
- bootstrap
- require.js(IE6+)/sea.js(IE6+)
- underscore | loadsh3.x compat(IE8+) -> 注意有些方法可能没有
- handlebar(IE6+)/artTemplates(IE8+)
    - handlebar的一些用法——个人使用总结 https://www.cnblogs.com/yldf55/p/5147996.html
- layer(IE6+)/artDialog(IE6+)/magnific-popup
- zeroclipboard(IE8+) | clipbord.js(IE9+)
- JQuery Validation Plugin 1.11
- 富文本在线编辑：CKEditor
- 在线文件管理：CKFinder
- 数据表格：jqGrid https://github.com/tonytomov/jqGrid
- 对话框：jQuery jBox
- 下拉选择框：jQuery Select2
- 树结构控件：jQuery zTree
- 日期控件： My97DatePicker
- 手机端框架：Jingle
- 动态页签：Jerichotab

# jqueryWidgets

- @$ 
- https://www.jqwidgets.com/jquery-widgets-documentation/
- 参考思路与结构，这是一个功能完整的前端UI框架
- 提供了Angular React版本

# jQuery相关

```html
<!-- jquery -->
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="http://apps.bdimg.com/libs/jquery/1.9.1/jquery.min.js"></script>
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
<script src="https://cdn.bootcss.com/jquery-validate/1.11.1/jquery.validate.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.11.1/localization/messages_zh.min.js"></script>

<script src="https://cdn.bootcss.com/jquery.form/4.2.2/jquery.form.min.js"></script>

<!-- jquery ui -->
<link rel="stylesheet" href="https://cdn.staticfile.org/jqueryui/1.12.1/jquery-ui.min.css">
<script src="https://cdn.staticfile.org/jqueryui/1.12.1/jquery-ui.min.js"></script>

<!-- jquery mobile -->
<link href="https://cdn.bootcss.com/jquery-mobile/1.4.5/jquery.mobile.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/jquery-mobile/1.4.5/jquery.mobile.min.js"></script>

<!-- jquery.mousewheel -->
<script src="https://cdn.bootcss.com/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"></script>

<!-- tooltip -->
<script src="https://cdn.bootcss.com/jquery.tipsy/1.0.3/jquery.tipsy.min.js"></script>
```



# 常用样式

```html
<!-- 重置 -->
<!-- normalize -->
<link href="https://cdn.bootcss.com/normalize/7.0.0/normalize.min.css" rel="stylesheet">

<!-- reset -->
<link href="https://cdn.bootcss.com/minireset.css/0.0.2/minireset.min.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/meyer-reset/2.0/reset.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">


<!-- pure.css -->
<link href="https://cdn.bootcss.com/pure/1.0.0/pure-min.css" rel="stylesheet">
```


# bootstrap系列

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

# 兼容与嗅探

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

<!-- placeholder -->
<script src="https://cdn.bootcss.com/jquery-placeholder/2.3.1/jquery.placeholder.min.js"></script>
```


# 动画

```html
<!--animate.css-->
<link href="https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css" rel="stylesheet">

<!--wow.js-->
<script src="https://cdn.bootcss.com/wow/1.1.2/wow.min.js"></script>

<!-- dynamics -->
<script src="https://cdn.bootcss.com/dynamics.js/1.1.5/dynamics.min.js"></script>
```

# 轮播 幻灯片

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

# 弹框

```html
<!--magnific-popup-->
<link href="https://cdn.bootcss.com/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>

<!-- layer -->
<script src="https://cdn.bootcss.com/layer/3.1.0/layer.js"></script>
```

# 模块化

```html
<!-- sea.js -->
<script src="https://cdn.bootcss.com/seajs/3.0.2/sea-debug.js"></script>
<script src="https://cdn.bootcss.com/seajs/3.0.2/sea.js"></script>

<!-- require.js -->
<script src="https://cdn.bootcss.com/require.js/2.3.5/require.min.js"></script>
```

# 模板引擎

```html
<!-- artTemplate -->
<script src="https://cdn.staticfile.org/artTemplate.js/3.0.1/template.js"></script>

<!-- handlebars -->
<script src="https://cdn.bootcss.com/handlebars.js/4.0.11/handlebars.min.js"></script>
```

# 地图

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

# 工具

```html

<script src="https://cdn.bootcss.com/lodash-compat/3.10.2/lodash.min.js"></script>
```

# 其他

```html
<!--smoothscroll-->
<script src="https://cdn.bootcss.com/smoothscroll/1.4.6/SmoothScroll.min.js"></script>

<!--mixitup-->
<script src="https://cdn.bootcss.com/mixitup/3.2.2/mixitup.min.js"></script>

<!-- fancybox -->
<link href="https://cdn.bootcss.com/fancybox/3.3.5/jquery.fancybox.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/fancybox/3.3.5/jquery.fancybox.min.js"></script>

<!-- smooth scroll -->
<script src="https://cdn.bootcss.com/smooth-scroll/14.2.0/smooth-scroll.min.js"></script>
```
