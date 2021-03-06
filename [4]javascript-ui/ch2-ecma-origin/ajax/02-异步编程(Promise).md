# Promise

- <http://liubin.org/promises-book/>
- 异步模块定义AMD

  - Asynchronous Module Definition

- [RequireJS](http://requirejs.org/docs/download.html)

  - RequireJS的优化工具 查看官网

    - UglifyJS压缩

  - RequireJS的附加插件

    - il8n 使文本实现本地化
    - Text 让文本文件也作为加载依赖
    - Font 通过Google的WebFont Loader API加载字体
    - Handlebars 函数的处理结果是一个HTML字符串，可以注入页面中
    - Cache 页面刷新从本地存储区加载，减少HTTP请求

  - RequireJS的替代品

    - BDLoad

      - Cajon
      - CurlJS
      - LoaderJS
      - UMD
      - Yabble

```javascript
// 定义一个对jQuery有依赖的模块
define(["lib/jquery-1.10.2"], function($) {
    // Module code to execute once jQuery is loaded goes here. The jQuery library
    // is manifest through the first parameter to this function, here named $
});

// 模块名称的别名
requirejs.config({
    paths: {
        "jquery": "lib/jquery-1.10.2"
    }
});

// 后备加载
requirejs.config({
    paths: {
        "jquery": [
            "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
            // If the CDN fails, load from this local file instead
            "lib/jquery-1.10.2"
        ]
    }
});

// 一个RequireJS模块,作为jQuery验证插件进行使用
define(["jquery"], function($) {
    $.fn.isValidEmail = function() {
        var isValid = true,
            // Regular expression that matches if one or more non-whitespace characters are
            // followed by an @ symbol, followed by one or more non-whitespace characters,
            // followed by a dot (.) character, and finally followed by one or more non-
            // whitespace characters
            regEx = /\S+@\S+\.\S+/;

        this.each(function() {
            if (!regEx.test(this.value)) {
                isValid = false;
            }
        });

        return isValid;
    };
});

// 主应用脚本,与模块实现关联
require(["jquery", "lib/validation-plugin"], function($) {
    var $form = $("#form"),
        $email = $("#email");

    $form.on("submit", function(e) {
        e.preventDefault();
        if ($email.isValidEmail()) {
            $form.get(0).submit();
        } else {
            $email.addClass("error").focus();
        }
    });

    $email.on("keyup", function() {
        $email.removeClass("error");
    });
});

// 优化上面的代码,请求时才加载额外的脚本，但如果这个脚本比较大?
require(["jquery"], function($) {
    var $form = $("#form"),
        $email = $("#email");

    $form.on("submit", function(e) {
        e.preventDefault();
        require(["lib/validation-plugin"], function() {
            if ($email.isValidEmail()) {
                $form.get(0).submit();
            } else {
                $email.addClass("error").focus();
            }
        });
    });

    $email.on("keyup", function() {
        $email.removeClass("error");
    });
});
```

# Async/Await

...

# 响应式编程

- 与异步数据流交互的编程范式
