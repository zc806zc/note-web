#### 全栈-**资源**

* 在线书籍/学习资源

  * [free-programming-books](https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md) \| [frontenddevhandbook](https://www.gitbook.com/book/dwqs/frontenddevhandbook/details) 
  * [史上最全FE资源](http://www.jianshu.com/p/6cb49271cd2a#)\| [最全的前端资源汇总](https://github.com/helloqingfeng/Awsome-Front-End-learning-resource)
  * [前端面试-WangChloe](http://www.jianshu.com/p/3944732228f0) \| [前端学习路径](https://www.gitbook.com/book/luo0412/white/edit#)

* 在线编辑器

  * [dillinger.io](http://dillinger.io/) \| JSbin \| jsfiddle
  * [菜鸟工具](https://c.runoob.com/)

* 开始记笔记/写博客

  * [sphinx](http://www.sphinx-doc.org/en/stable/)\(没试\) \| [MkDocs](http://www.mkdocs.org/) \(没试\) 
  * 文档型 [docute](https://docute.js.org/#/home)
  * [Gitbook插件安装配置- 星夜雨年](http://www.tuicool.com/articles/JjQ3qm) \| [插件2](http://www.tuicool.com/articles/zee2ui)
  * [ruanyifeng-jekyll](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html) \| [jekyll-Sites](https://github.com/jekyll/jekyll/wiki/Sites)

```js
// gitbook
npm install gitbook-plugin-插件名 // 坑哭... 太理所当然反而没人说
gitbook官网只要写好book.json就会提供支持

This text is {% em %}highlighted with **markdown**!{% endem %} // 高亮
prism主题插件 

// 看云
国内较gitbook稳定
并方便易用插件齐全
可惜有空间限制
长远起见还是用了gitbook...

// jekyll
部分记在ruby/jekyll下

// 简书
// benhail/thinker-md osc的md编辑器
// varharrie/angular-mdeditor
基于AngularJs 使用pegdown作解析
```

* IDE/编辑器

  * [vs-code插件-](http://blog.csdn.net/u011127019/article/details/53158660)[天马3798](http://blog.csdn.net/u011127019)

  * [Sublime插件推荐](http://www.jianshu.com/p/2f30ccd41165)  \| [推荐2](https://www.zhihu.com/question/37342465)

```
// 1. 重器
Web Storm(商业)
netbeans
// Aptana Studio // 没用过

// itellj idea 文件编码问题的解决
选择file encodings 
utf-8 -> utf-16 -> utf-8

// 2. 优雅的编辑器
1.Sublime 
2.Atom
3.VS code

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

// Brackets Light (主题)
// VSCode Great Icons (文件图标)
// Git History (查看git提交记录)



// Sublime插件及配置
CSScomb CSS属性排序插件
ctrl + shift + c

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



// 3. 《JS数据结构与算法》一书中提到的js shell的配置方法
先在windows环境下设置环境变量
pushed  folderPath 或 cd /d 进入文件夹
js filename.js执行


// 4. 偏设计类编辑器
// Adobe Brackets // 没怎么用过
```

* 其他工具

```
// 线框图与原型设计-工具
Balsamiq
```

* 图像处理
  * [6 款 Javascript 的图像处理库 - Tine](https://juejin.im/post/58c0edac0ce4630054592a78?utm_source=gold_browser_extension)

```js

```



