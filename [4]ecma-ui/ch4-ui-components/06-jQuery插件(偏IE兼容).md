# README | jquery插件

- awesome-jquery <https://github.com/petk/awesome-jquery>
- jq22 http://www.jq22.com/
- jquerycards https://www.jquerycards.com/
- jquery扩展 https://gitee.com/explore/starred/jquery-plugins
- bootstrap扩展 https://gitee.com/explore/starred/bootstrap-plugins

# CDN

- staticfile @nice https://www.staticfile.org/
- bootcdn http://www.bootcdn.cn/
- 百度 http://cdn.code.baidu.com/
- ...

# 万金油方案 | IE兼容

> 参考jeesite/jfinal/guns使用的前端插件

- jquery1.x -> 使用最终版本1.12.4 
- bootstrap-ie8
- require.js(IE6+)/sea.js(IE6+)
- underscore.js/loadsh3.x compat(IE8+) -> 注意有些方法可能没有
- handlebar(IE6+)/artTemplates(IE8+)
- layer(IE6+)/artDialog(IE6+)/magnific-popup/jQuery jBox 
- zeroclipboard(IE8+)/clipbord.js(IE9+)
- jquery-validation 1.11
- fine-upload/webuploader
- CKEditor/wangEditor 
- iCheck
- CKFinder 在线文件管理
- jqGrid/bootstrap-table
- slimScroll
- Select2/chosen
- Jerichotab 动态页签
- zTree
- My97DatePicker
- Jingle 手机端框架

# jQuery全家桶

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

# 常用样式 | bootstrap

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

# 布局 

```html
<!-- 轮播 | 幻灯片 -->

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

- handlebar的一些用法——个人使用总结 https://www.cnblogs.com/yldf55/p/5147996.html 

```jsx
// handlebars使用

// 注册等于 支持3个数
Handlebars.registerHelper('if_eq', function (v1, v2, options) {
    if (v1 == v2) { return options.fn(this); }
    return options.inverse(this);
});

// Handklebars下拉框赋值
// https://stackoverflow.com/questions/13046401/how-to-set-selected-select-option-in-handlebars-template
Handlebars.registerHelper('select', function (value, options) {
    var $el = $('<select />').html(options.fn(this));
    $el.find('[value="' + value + '"]').attr({ 'selected': 'selected' });
    return $el.html();
});
Handlebars.registerHelper('radio', function (value, options) {
    var $el = $('<div />').html(options.fn(this));
    $el.find('[value="' + value + '"]').attr({ 'checked': 'checked' });
    return $el.html();
});

// 分割选项
Handlebars.registerHelper('split', function (value, options) {
    var value = value || '';
    var arr = value.split('$');
    return arr;
});

// 是否包含
Handlebars.registerHelper('contains', function (v1, v2, options) {
    if(v1.indexOf(v2) >= 0 ) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

// 序号加一
Handlebars.registerHelper("addOne", function (index, options) {
    return parseInt(index) + 1;
});

// 取数组值
Handlebars.registerHelper("arrayKey", function (arr, index, options) {
    return arr[index];
});

// 选项对应
Handlebars.registerHelper("optionCheck", function (judgeType, submitAnswer, index, options) {
    var arr = ['A','B','C','D','E','F','G'];

    if (submitAnswer) {
        // 多选题
        if (judgeType == 'contains') {
            if (submitAnswer.indexOf(arr[index])>=0) {
                return options.fn(this);
            }
        } else if (judgeType == 'is') {
            // 单选题 | 判断题
            if (arr[index] == submitAnswer) {
                return options.fn(this);
            }
        }
    }

    return options.inverse(this);
});


```

# 工具

- 地图

```jsx
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

- 其他

```html
<!-- loadsh -->
<script src="https://cdn.bootcss.com/lodash-compat/3.10.2/lodash.min.js"></script>

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
