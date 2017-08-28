## 图像处理

* [6 款 Javascript 的图像处理库 - Tine](https://juejin.im/post/58c0edac0ce4630054592a78?utm_source=gold_browser_extension)

## 实用库和框架

* 轻量级、无依赖  [https://github.com/jawil/blog/issues/10](https://github.com/jawil/blog/issues/10)

## 工具篇

* 2017年前端开发工具趋势 [http://www.cnblogs.com/powertoolsteam/p/front-end-tooling-trends-2017.html](http://www.cnblogs.com/powertoolsteam/p/front-end-tooling-trends-2017.html)
  * 超过63％的开发者使用Sass，Sass是预处理首选者
  * PostCSS + AutoPrefixer
  * CSS最受欢迎的命名方式是BEM  [https://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html](https://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html)
  * **JavaScript的测试一直是个挑战**
  * 学习**ES6**，即便你一直工作在向后兼容的ES5项目中

```css
// BEM
<div class="media">
  <img src="logo.png" alt="Foo Corp logo" class="media__img--rev">
  <div class="media__body">
    <h3 class="alpha">Welcome to Foo Corp</h3>
    <p class="lede">Foo Corp is the best, seriously!</p>
  </div>
</div>
```

> 如果你仅仅是因为这种代码看上去不怎么好看而羞于使用它，那么你将错失最重要的东西

## 浏览器兼容

* 兼容解决方案  https://juejin.im/post/59a3f2fe6fb9a0249471cbb4?utm\_source=gold\_browser\_extension
  * Normalize.css
  * 求窗口大小的兼容写法
  * DOM 事件处理程序的兼容写法（能力检测）

```css
// 浮动
.fl { float: left; }
.fr { float: right; }
.clearfix:after { display: block; clear: both; content: ""; visibility: hidden; height: 0; }
.clearfix { zoom: 1; }


var eventshiv = {
    // event兼容
    getEvent: function(event) {
        return event ? event : window.event;
    },

    // type兼容
    getType: function(event) {
        return event.type;
    },

    // target兼容
    getTarget: function(event) {
        return event.target ? event.target : event.srcelem;
    },

    // 添加事件句柄
    addHandler: function(elem, type, listener) {
        if (elem.addEventListener) {
            elem.addEventListener(type, listener, false);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + type, listener);
        } else {
            // 在这里由于.与'on'字符串不能链接，只能用 []
            elem['on' + type] = listener;
        }
    },

    // 移除事件句柄
    removeHandler: function(elem, type, listener) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, listener, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, listener);
        } else {
            elem['on' + type] = null;
        }
    },

    // 添加事件代理
    addAgent: function (elem, type, agent, listener) {
        elem.addEventListener(type, function (e) {
            if (e.target.matches(agent)) {
                listener.call(e.target, e); // this 指向 e.target
            }
        });
    },

    // 取消默认行为
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    // 阻止事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
```


