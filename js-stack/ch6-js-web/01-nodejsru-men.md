#### **Node.js基础**

* 基础

```js
有关前身 Netscape Enterprise Server 
为HTTP应用程序编码


+ <del>用作网络工作环境</del>
    * 加载http模块 
    * AMD require()
* [npm](http://npmjs.org)
+ 划分Node.js应用程序分布至多个文件
+ 用于网页应用程序的 **Node.js框架**
    + [Express](http://expressjs.com/en/4x/api.html)
        + Sencha Lab的Connect中间件
    + [Socket.IO](http://socket.io/docs/)
        + BS之间的双向通信
        * 多浏览器独立分离 多用户连接的在线应用程序
+ Node.js的APP托管
    + [Joyent](https://github.com/nodejs/node-v0.x-archive/wiki/node-hosting)
```

* 示例

```js
Installing nodejs-legacy // ubuntu wire error或许可以解决

// 运行示例 
node filename.js

// 访问命令行参数
var index = 2, length = process.argv.length;
for (; index < length; index++) {
    console.log(process.argv[index]);
}

// npm使用示例
npm init
npm install -g
npm install yuidocjs --save // **保存到package.json**
npm install jshint --save-dev
npm publish
npm update
npm uninstall

// express使用示例
npm init
npm install express --save
npm install connect --save
node filename.js

// socket.io使用示例
npm init
npm install express --save
npm install socket.io --save
node filename.js
+ socket.emit()
+ io.emit("new-data-on-server","Message Text")
+ socket.broadcast.emit("new-data-on-server","Message Text")


// package.json示例
{
    // The "name" value is mandatory and must be URL-friendly so cannot contain any spaces
    // and should be in lower case
    "name": "my-test-project",

    // The "version" value is mandatory and must adhere to the semantic versioning format
    "version": "0.0.1",

    // An optional friendly description of the project to assist users when searching the npm
    // directory
    "description": "This is my test project",

    // A pointer to the project's homepage online - many use this field to point to the
    // GitHub (or equivalent hosting service) code repository page
    "homepage": "https://github.com/denodell/my-test-project",

    // Details of the code repository which other developers may find useful if they wish
    // to contribute to the project
    "repository": {

        // The type of repository, e.g. "git" (for Git) or "svn" (for Subversion)
        "type": "git",

        // The URL of the repository itself, designed for direct use with software and should
        // not be a link to the project home page
        "url": "https://github.com/denodell/my-test-project.git"
    },

    // Details of the project author, if there is only one. For multiple authors, this key
    // name should be changed to "contributors" and its value will be an array of names and
    // email addresses of those who have worked on the project
    "author": {
        "name": "Den Odell",
        "email": "denodell@me.com"
    },

    // List of package dependencies needed to run the project described by this file. Each is
    // listed by its package name as it is in the npm directory and the version number of the
    // dependency needed. By specifying the version, we can ensure that future breaking updates
    // to dependent packages won't impact our package
    "dependencies": {

        // Specify the exact version number of the dependency required by using its full
        // version number
        "async": "0.9.0",

        // Versions greater than or equal to specific releases can be specified using >=
        "request": ">=2.36.0",

        // Versions reasonably close to a given release can be specific using tilde (~).
        // Here, this means any version between 1.6.0 and any future release up to but not
        // including the next major release (i.e. 1.7.0 in this case)
        "underscore": "~1.6.0",

        // Git URLs can be used in place of version numbers to reference dependencies that
        // are stored in places outside of the npm directory. The latest contents of the repo
        // will be downloaded when this package is installed
        "promise-the-earth": "git+ssh://github.com/denodell/promise-the-earth.git"
    },

    // List of additional package dependencies required for developers who wish to contribute
    // to this project. Often this list includes development build tools, code quality checks
    // and unit test runners
    "devDependencies": {
        "yuidocjs": "~0.3.50"
    }
}
```

#### **构建工具及自动化**

* 基础

```js
+ <del>日复一日的工作流程如下</del>
    * 资源管理
        * 图像压缩
    * 代码编写
        * JS静态代码分析
        + 单元测试
        + 代码缩编
        + 利用sass处理css
+ **Grunt与Gulp**
    * JavaScript任务运行器
    * Grunt 
        + [简单实践教程](http://developer.51cto.com/art/201506/479127.htm)
        + [Grunt插件](http://www.gruntjs.net/plugins )
    * 更容易被人类阅读的语言格式 - [YAML](http://yaml.org)
        + API中有对应的的file.readYAML() 
    + 改进工作流，创建生产就绪的代码
    + [Gulp.js](http://gulpjs.com) - "流式"构建系统
        + 相比Grunt的优势
          + 利用Node.js的Stream, 使得一个任务的输出可以进行feed和pipe而成为另一个任务的输入，
              不需要一个在硬盘写入临时文件的中途步骤，更高效
          + 配置信息不再是一个独立的很大的配置对象，而是链式调用
          + 专门设计成细分化的任务
+ 第三方库和框架的管理 
    * 保证安装准确的版本
    + [Bower](http://bower.io) 基于Node.js
        + [grunt-bowercopy](https://github.com/timmywil/grunt-bowercopy)
        + [gulp-bower](https://github.com/zont/gulp-bower)
    + 其他 spm **component** Jam
+ 项目文件结构
    + src 用于开发
    + **dist** 生产就绪的版本 - 构建处理,自动生成
```

* 示例

```js
// grunt使用示例
npm install -g grunt-cli
npm init
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev

// gulp使用示例
npm install -g gulp
npm install gulp --save-dev
npm install gulp-jshint --save-dev
gulp

// bower使用示例
npm install -g bower
bower.json
bower install jquery --save
bower install

// grunt工作流
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev // 校验
npm install grunt-contrib-connect --save-dev 
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-jasmine --save-dev // 单元测试
npm install grunt-template-jasmine-istanbul --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev // 代码缩编
npm install grunt-contrib-yuidoc --save-dev // 生成API

// Gulp创建生产就绪的代码
npm install gulp --save-dev
npm install gulp-jshint --save-dev
npm install gulp-connect --save-dev
npm install gulp-clean --save-dev
npm install gulp-jasmine --save-dev
npm install gulp-istanbul --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install gulp-yuidoc --save-dev
npm install gulp-rename --save-dev
npm install gulp-header --save-dev // 没有watch, 已经在API里
```

#### 参考

```js
精通JS开发
```



