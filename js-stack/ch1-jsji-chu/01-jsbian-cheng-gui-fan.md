#### **JS编程规范**
* 参考链接 
  + [javascript-style-guide](https://github.com/adamlu/javascript-style-guide) 
  * [JS风格指南 - 缪运泽](https://gold.xitu.io/post/587979148d6d810058bb3b32?utm_source=gold_browser_extension)
  + [BootStrap中文网](http://codeguide.bootcss.com/) 已小结如下
  + [TGuide](http://tguide.qq.com/main/index.htm)
  + [CSS规范](ttp://cssguidelin.es/)
    
* 格式约定

~~~
// yahoo军规
js放在body中，
毕竟脚本放在head里感觉怪怪的...

// 缩进与留空
用 空格 来代替 tab键

HTML用2个空格，
JS建议用4个

// 在运算符或逗号后换行

// 输出换行
document.write("你好 \
世界!");

// 语义的空行
例css不同内容之间的空行

在文件结尾添加一个空白行,
保存文件时，用插件删除尾部空白符
~~~

* **命名** 有关

~~~
// 开头统一声名全局变量
全局变量统一大写??  不一定
常量统一大写，避免幻数

// 变量不要轻易以 **$** 和 **_** 符号开头

// JQuery
var = $tocTitle = $('.reader-toc-title');
var $body = $(document.body); // 保存起来

// 构造器命名
function MyType() {
    var _myPrivateVariable; // 下划线
}
var myTypeInstance = new MyType();

// class 的 父前缀命名习惯
.login-header-top

class="js-active" 作为JS调用的钩子，带上前缀

// JS的id用 下划线 ，
而HTML，CSS的class用中划线

// **十六进制值**应该全部 **小写**，#fff。
尽量使用 **简写**形式的十六进制值，
用 #fff 代替 #ffffff。

// 不要使用 @import

// 在 rgb()、rgba()、hsl()、hsla() 或 rect() 值的内部，值之间不加空格。
用-.5px 代替 -0.5px，
用margin: 0; 代替 margin: 0px;。
    
// 文件名统一小写

// 引入 CSS 和 JS文件时一般不需要指定 type 属性

// 公有接口大写字母开头，私有的小写

// HTML与JavaScript尽量使用相同的命名规则
例hello-btn helloBtn hello_btn

// 对于属性的定义，确保全部使用双引号

// 每个声明块的左花括号前加一个空格，右花括号单独成行

// 只包含一条CSS声明的样式，将语句放在同一行

// 好的注释要传达上下文关系和代码目的。
不要简单地重申

// 属性顺序
class
id, name
data-*
src, for, type, href
title, alt
aria-*, role

// CSS顺序 
用**css comb**插件实现
Positioning
Box model
Typographic
Visual

// 字符串定义建议用单引号
var content = '<span id="main_content">'

// 尽量限制使用简写形式 ？？
.element {
  margin-bottom: 10px;
  background-color: red;
  background-image: url("image.jpg");
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
~~~