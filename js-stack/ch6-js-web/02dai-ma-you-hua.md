#### **JavaScript文档**
*   代码的可维护性
*   保证文档及时更新
*   想想jQuery的文档
*   从源代码中提取特殊格式的文档
    *   [JSDoc](http://usejsdoc.org/)
    *   [dox](https://github.com/tj/dox)
    *   [YUIDoc](http://yui.github.io/yuidoc/) 业内倾向
    *   让文档处理器只能理解我告诉它的东西
    *   /**
*   Markdown 更具表达性的文档格式
    *   → HTML easy!
    *   富文本
    *   语法 coding
*   使用YUIDoc创建一个文档网站
    *   node.js
    *   npm -g install yuidocjs
    *   cd /d , pushd dir
    *   yui (-n) .
    *   [github](http://yui.github.io/yuidoc/)
    *   [Dana主题](https://github.com/carlo/yuidoc-theme-dana)
    *   [more主题](http://yui.github.io/yuidoc/themes/)
    *   [官方语法指南](http://yui.github.io/yuidoc/syntax/)

#### **静态代码分析工具**
*   [JSlint](http://www.jslint.com)
    *   / _jslint devel: true, nomen: true, white: true_ /
    *   / _global Class_ /
    *   [在线文档](http://www.jslint.com/lint.html)
*   [JSlint nodejs](https://github.com/reid/node-jslint)
    *   npm install jslint
    *   jslint *.js
*   [JSHint](http://www.jshint.com)
    *   在意一个没有用到的变量
    *   / _jshint devel: true, unused: false;_/
    *   [在线文档](http://jshint.com/docs/options/)
    *   npm install jshint -g
    *   jshint *.js
    *   [插件](http://jshint.com/install/)
*   Google Closure Compiler
    *   提高JS代码的下载速度和执行速度
    *   发现语法错误
    *   [在线](http://closure-compiler.appspot.com/home)
    *   [java运行](https://developers.google.com/closure/compiler/docs/gettingstarted_app)
    *   [REST Web服务API](https://developers.google.com/closure/compiler/docs/gettingstarted_api)
*   Closure Linter

#### **单元测试**

*   [QUnit](http://qunitjs.com/)
*   [Mocha](http://mochajs.org/)
    *   [ruanyf](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
*   [Jasmine](https://jasmine.github.io/)
    *   [github](https://github.com/jasmine/jasmine)
    *   [自定义](https://github.com/jasmine/jasmine)
*   [BrowserStack](https://www.browserstack.com/)
*   [Sauce Labs](http://saucelabs.com/)

#### **处理运行时错误**
*   类型
    *   语法错误
    *   类型错误
    *   范围错误
    *   eval错误
    *   引用错误
    *   URI错误 URI函数提供了错误的URL
*   try-catch-finally
*   检测错误类型
*   自定义错误类型
~~~
try {
  // Code that might throw an error to go here
} catch (error) {
  if (error instanceof SyntaxError) {
      // A syntax error was thrown
  } else if (error instanceof TypeError) {
      // A type error was thrown
  } else if (error instanceof RangeError) {
      // A range error was thrown
  } else if (error instanceof EvalError) {
      // An eval error was thrown
  } else if (error instanceof ReferenceError) {
      // A reference error was thrown
  } else if (error instanceof URIError) {
      // A URI error was thrown
  }
}
~~~

#### **度量代码质量**
*   代码覆盖率工具[Istanbul](https://github.com/gotwarlost/istanbul)
    *   [ruanyf](http://www.ruanyifeng.com/blog/2015/06/istanbul.html)
    *   node.js npm grunt 任务执行器
    *   npm install -g grunt-cli
    *   npm install grunt-contrib-jasmine --save-dev
    *   grunt default
    *   [PhantomJS](http://phantomjs.org) 基于Webkit的无界面浏览器
*   代码分析 [Plato](https://github.com/es-analysis/plato)
    *   npm install -g plato
    *   plato -d reports src/*.js

#### **优化页面加载时间**
*   HTML标签顺序</body>
*   GZip编码
    *   appache mod_deflate模块
    *   Node.js Express compress()
    *   预压缩 + HTTP报头Content-Encoding:gzip
*   缩编、混淆和编译
    *   缩编：去掉空格换行符
    *   混淆：高级 对限定作用域内的变量 重命名为简短的名称
        *   全局变量和函数越少越好
    *   编译：更先进 分析代码
*   JSMin 缩编工具
    *   npm install -g jsmin
    *   jsmin -o Listing.min.js listing.js
*   UglifyJS 缩编 + 混淆
    *   [在线](http://marijnhaverbeke.nl/uglifyjs)
    *   npm install uglify-js -g
    *   uglifyjs uglify-test.js -m -o uglify-test.min.js
*   Google Closure Compiler 代码编译
    *   [在线](http://closure-compiler.appspot.com/home)
*   使用匿名、自执行的函数闭包来减少全局变量的使用
~~~
    // Define a global variable
    var myGlobalVariable;
    // Create a self-executing, anonymous (unnamed) function to wrap around your code
    (function() {
        // Your code, that before was global, goes here with a new, non-global scope,
        // making it easier to generate smaller compressed files via minification,
        // obfuscation, or compilation

        // Define a local variable
        var myLocalVariable = "Local";

        // Set the global variable to a string
        myGlobalVariable = "Global";

    // The open-close bracket combination here executes the function straight away
    }());

*   请求时才延迟加载JS文件,从而不阻塞浏览器

    function loadScript(src, onLoad) {
        var scriptTag = document.createElement("script");
        scriptTag.src = src;
        if (typeof onLoad === "function") {
            scriptTag.onload = onLoad;
            scripTag.onreadystatechange = function() {
                if (scriptTag.readyState === 4) {
                    onLoad();
                }
            };
        }
        document.body.appendChild(scriptTag);
    }
    loadScript("my-script.js", function() {
       alert("script loaded and available!"); 
    });
    loadScript("my-script.js"); 
    // 加载完不需要执行额外的代码，不需要第二个参数
~~~

#### **优化文档对象的操作**
*   实现对页面元素的最小化访问
*   尽量利用已有元素
*   离线DOM的利用 小型的元素树结构
*   使用CSS而非JS来操控页面样式
    *   `nav.style.opacity = 0.5;` 不经济,引发重排
    *   `nav.className += "selected";` good
    *   利用dispaly
~~~
    var nav = document.getElementsByTagName("nav");
    nav.style.display = "none"; // Causes a browser reflow, hiding the element from display
    nav.style.backgroundColor = "#000"; // Causes no reflow since the element is hidden
    nav.style.color = "#fff"; // Causes no reflow
    nav.style.opacity = 0.5; // Causes no reflow
    nav.style.display = "block"; // Causes a browser reflow, bringing the element back on display
~~~

#### **提升DOM事件性能**
*   委托事件至父元素
*   使用框架化处理频密发出的事件
    *   频密事件：mousemove resize scroll touchmove
    
#### **提升函数性能**
*   使用记忆功能
*   一般性函数

#### **使用正则表达式实现更快速的字符串操作**

#### **更快速地使用数组**
*   保存array.length的值
~~~
 // The most common type of loop
    for (var index = 0; index < myArray.length; index++) {}
    // A similar but much faster version of the same loop
    for (var index = 0, length = myArray.length; index < length; index++) {}
~~~
*   使用continue和break
*   反向while循环 coding
*   避免在循环中创建函数

#### **转移密集型任务至Web Worker**
*   例处理图像数据