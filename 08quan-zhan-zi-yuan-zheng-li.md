#### 在线学习

* [free-programming-books](https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md) \| [frontenddevhandbook](https://www.gitbook.com/book/dwqs/frontenddevhandbook/details) 
* [史上最全FE资源](http://www.jianshu.com/p/6cb49271cd2a#)\| [最全的前端资源汇总](https://github.com/helloqingfeng/Awsome-Front-End-learning-resource)
* [前端面试-WangChloe](http://www.jianshu.com/p/3944732228f0) \| [前端学习路径](https://www.gitbook.com/book/luo0412/white/edit#)

#### 在线编辑器

* [dillinger.io](http://dillinger.io/) \| JSbin \| jsfiddle

### 笔记/博客

* 文档 [Docute](https://docute.js.org/#/home) \| JSDOCS
* Gitbook （国内的看云）：[Gitbook插件安装配置- 星夜雨年](http://www.tuicool.com/articles/JjQ3qm) \| [Gitbook插件件2](http://www.tuicool.com/articles/zee2ui)
* Jekyll \| HEXO : [ruanyifeng-jekyll](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html) \| [jekyll-Sites](https://github.com/jekyll/jekyll/wiki/Sites)

```js
// Gitbook
本地开发 npm install gitbook-plugin-插件名
使用网站 写好book.json就会提供相应支持
示例如下

{
    "title": "小白书",
    "description": "前端入门书",
    "author": "luo0412",
    "language" : "zh-hans",
    "output.name": "xiaobaishu",
    "gitbook": "3.2.2",
    "plugins": [
        "splitter",
        "tbfed-pagefooter",
        "expandable-chapters-small",
        "emphasize"
    ],
    "pluginsConfig": {
        "tbfed-pagefooter": {
            "modify_label": "全书最后修改 ",
            "modify_format": "YYYY-MM-DD HH:mm:ss"
        }
    }
}

// 插件示例
1. 高亮 This text is {% em %}highlighted with **markdown**!{% endem %}
2. prism主题插件
```

## IDE/编辑器

* 优雅的编辑器
  * **Atom\(我最喜欢啦\)**
  * VScode [vs-code插件-](http://blog.csdn.net/u011127019/article/details/53158660)[天马3798](http://blog.csdn.net/u011127019)
  * Sublime [Sublime插件推荐](http://www.jianshu.com/p/2f30ccd41165)  \| [推荐2](https://www.zhihu.com/question/37342465)
* IDE重器
  * Web Storm\($\)
  * netbeans
  * Eclipse \| ~~Aptana Studio~~

```js
// itellj idea 文件编码问题的解决
选择file encodings 
utf-8 -> utf-16 -> utf-8

// vscode插件
vscode-icons （文件图标）
One Dark Theme (主题)

HTML Snippets
HTML CSS Support (HTML中提示可用的class)
Auto Close Tag （自动关闭HTML标签）
Auto Rename Tag (HTML标签自动改名)
Beautify css/sass/scss/less
Complete JSDoc Tags (js文档注释提示)

Babel ES6/ES7 
npm Intellisense (提示可以require的模块名称)
Path Intellisense (路径补全)
Reactjs code snippets (reactjs代码提示)
Sass
SCSS IntelliSense
Sublime Babel


// Sublime重要插件
CSScomb CSS属性排序插件 ctrl + shift + c

// Sublime + node.js 来运行JS 
Tools --> Build System --> new Build System...
复制以下文件内容

{
"cmd": ["node", "$file"],
"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
"selector": "source.javascript"
}

文件保存为 JavaScript.sublime-build
重启，勾选Tools --> Build System --> JavaScript
Ctrl + b执行JavaScript 程序


// js shell的配置方法
先在windows环境下设置环境变量
pushed folderPath 或 cd /d 进入文件夹
js filename.js执行
```

#### 线框图与原型设计

* Balsamiq



