#### **资源**

* 在线书籍

  * [free-programming-books](https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md) \| [frontenddevhandbook](https://www.gitbook.com/book/dwqs/frontenddevhandbook/details) 
  * [史上最全FE资源](http://www.jianshu.com/p/6cb49271cd2a#)\| [最全的前端资源汇总](https://github.com/helloqingfeng/Awsome-Front-End-learning-resource)

* 在线编辑

  * [dillinger.io](http://dillinger.io/) \| JSbin \| jsfiddle
  * [菜鸟工具](https://c.runoob.com/)

* 开始记笔记/博客
  * [sphinx](http://www.sphinx-doc.org/en/stable/)\(还没试过\) \| [MkDocs](http://www.mkdocs.org/) \(md -&gt; html,没试\)
  * [Gitbook插件安装配置- 星夜雨年](http://www.tuicool.com/articles/JjQ3qm)

```js
// gitbook与看云
使用插件前一定要
npm install gitbook-plugin-插件名 // 坑哭... 可能太理所当然了,就没人说

gitbook官网的话直接写book.json就会提供支持

// gitbook高亮插件示例
This text is {% em %}highlighted with **markdown**!{% endem %}

// 看云
在国内较gitbook稳定并方便使用 (插件什么都配置好了)
可惜有空间限制
所以
长远起见还是用了gitbook...

// 简书

// 其他(都没试过)
// varharrie/angular-mdeditor
基于AngularJs，提交到后台解析和保存。
可以使用pegdown作解析。

// benhail/thinker-md osc的md编辑器
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
  * [eclipse color theme](http://download.csdn.net/download/knockheart/6690825)

```
// eclipse

// 线框图与原型设计-工具
Balsamiq
```

* 图像处理
  * [6 款 Javascript 的图像处理库 - Tine](https://juejin.im/post/58c0edac0ce4630054592a78?utm_source=gold_browser_extension)



