# gulp

- gulp资料收集 https://github.com/Platform-CUF/use-gulp
- 定位 ：兼容IE 不复杂的项目

- gulp常用插件 <http://pinkyjie.com/2015/08/02/commonly-used-gulp-plugins-part-1/>

- gulp前端自动化构建 <https://www.imooc.com/video/16174>

```javascript
// POSTCSSs深入系列
// https://www.w3cplus.com/PostCSS/using-postcss-together-with-sass-stylus-or-less.html
// 导入模块
var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    cssmin = require('gulp-clean-css');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');

// 定义任务
gulp.task('compileLess', function () {
    var processors = [ autoprefixer, cssnano ];

    gulp.src('./**/css/**/*.less')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(postcss(processors))
        // gulp-clean-css {rebase: false }ff
        .pipe(cssmin({compatibility: 'ie7', inline: ['remote'], rebase: false })) // 兼容ie7 @import fix
        .pipe(gulp.dest('./')); // 相对路劲下生成
});

// 监控
gulp.task('watchLessCompile', function () {
    gulp.watch('./**/css/**/*.less', ['compileLess']);
});
```

# 脚手架

- tmtworkflow
- generator-sapling-pc IE8+ https://github.com/sapling-team/generator-sapling-pc


# 一些优化

- tmpl -> js 模板转化为JS 异步加载
    - https://github.com/thesadboy/gulp-template2js

# 字体处理

- 前端加载自定义字体及速度优化 https://blog.csdn.net/creabine/article/details/55099602
- font-spider
    - http://font-spider.org/
    - https://github.com/aui/font-spider
    - 字库下载字体
    - 字体转换 http://www.sfont.cn/tools/font
    
- fontmin 

    - http://ecomfe.github.io/fontmin/en#feature