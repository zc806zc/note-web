#### **Landy网站搭建学习**
* 注释样式
~~~
// CSS注释

/*------------------------------------------------*/
/* GENERAL
/*------------------------------------------------*/

// html注释

<!-- NAVBAR
========================================= -->
~~~

+ [animatescroll.js](http://plugins.compzets.com/animatescroll/#)
~~~
<li>
<a onclick="$('.detail').animatescroll({padding:71});">Screens</a>
</li>
~~~

+ 字体
	*  [css3-font-face](http://www.w3cplus.com/content/css3-font-face)
~~~
// 字体link引用
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic|Roboto+Condensed:300italic,400italic,700italic,400,300,700' rel='stylesheet' type='text/css'>

 // icon (@font-face)
 
 @font-face {
font-family: <YourWebFontName>;
src: <source> [<format>][,<source> [<format>]]*;
[font-weight: <weight>];
[font-style: <style>];
}

-- eot(嵌入式字体，微软开发的技术)
-- svg(W3C制定的开放标准的图形格式)
-- ttf
-- woff(Web开发字体格式)

~~~

+ 放手机里的滚屏
~~~
!important是CSS1就定义的语法，
作用是提高指定样式规则的应用优先权。

background-size: cover; 
把背景图像扩展至足够大，
以使背景图像完全覆盖背景区域。
~~~

+ [device-pixel-ratio](http://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/)
~~~
视网膜类似设备
~~~

+ [retina.js](https://github.com/imulus/retinajs/)
~~~

~~~

+ [animate.min.css](https://github.com/daneden/animate.css)