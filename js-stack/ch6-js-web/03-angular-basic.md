#### **AngularJS**

* 安装

```js
// 大量使用第三方库
npm 
bower // 前端依赖管理的工具

npm install -g bower
bower.json // package.json结构几乎一致
先要装git

.bowerrc // 修改bower的默认安装位置
{
  directory: public/lib
}

// 文件夹布置 
垂直结构
每个模块都对用各自的子文件夹对不同的实体进行组织
但是出现了不同文件夹下的“重复”
所以注意文件命名 eg. main.client.service.js
```

* 基础

```js
// Angular1 
至少还会流行一段时间 // 虽然已经被挤到边缘

始于2009 发布于2012
使用 JSON 来提供服务的平台
结构化框架 连接JS和HTML
可通过 <script> 标签添加到 HTML 页面

MVC
单页面SPAs
浏览器模板 
双向数据绑定 M和V之间data的无缝同步
简化DOM操作

开发大型应用 
// AngularJS 支持输入验证
// 完美支持数据库的 CRUD

// AngularJS 属性以 ng- 开头，
但是您可以使用 data-ng- 来让网页对 HTML5 有效

// Angular全局变量
DOM操作 -angular对象包含了一个精简版的jQuery-jqLite

// Angular表达式与JS表达式的区别
AngularJS 表达式不支持条件判断，循环及异常
AngularJS 表达式支持过滤器

// Angular指令
restrict 值可以是以下几种:
E 作为元素名使用
A 作为属性使用
C 作为类名使用
M 作为注释使用
restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。
```

* 模块

```js
至少要1个模块才运行

// 核心模块

// 扩展模块
由核心框架的开发团队开发
但是不会在核心模块

// 第三方模块  

// MVC实体
// 路由
// 服务
// 身份验证
```

* 双向数据绑定

```js
Model ⇌ View
而且是连续合并

模型是唯一的数据来源
视图保持实时更新
```

* 依赖注入

```js
一种软件开发模式

控制反转 inversion of control

测试目的
由注入器来负责往构造函数中注入对象

// 依赖注入
依赖列表
```

* Angular 指令

```js
扩展HTML的目的

Angular指令就是标签
Angular的编译器为DOM元素及下级元素附加特殊行为
实现AngularJS与DOM之间的交互

// 核心指令
ng-app 放body/html根标签
<body ng-app></body>

ng-controller
ng-model
ng-show/ng-hide
ng-repeat // 遍历一个集合，为集合中的每一个项目都复制一个元素与之对应


// 支持自定义指令
帮助减少冗余的前端代码
第三方的补充性开源指令
```

* Angular应用引导

```js
application.js // 放在JS引用最后
1. 哪个DOM元素是应用的root元素
2. 何时进行初始化 

// 自动引导
angular.module() 

// 手工引导
可以确保有些逻辑在AngularJS应用之前执行
```

* Angular的MVC实体

```js
AngularJS 自成一体的框架

// 视图
<section ng-include="'example/views/example.client.view.html'"></section>

// 控制器和scope
控制器大多是构造函数
实例化出新的控制器对象

数据模型引用对象 scope // 视图和控制器之间的粘合剂
使控制器对模型的修改快速反应到视图上
模仿DOM的树状结构 
子级scope找不到的DOM向上遍历
直到找到或者到达root scope
```

* AngularJS 路由

```js
ng-Route
定义不同URL路径及对应模板的模块
根据用户请求的路径来实现不同的页面填充

AngularJS 的路由并不是从服务器获取相应的Web页面
而是加载相应的模板对其进行编译
并将得到的结果放在特定的DOM元素之中

服务器只是将模板以静态文件的形式发送给浏览器
不会响应ngRoute控制下的URL路径变化
Express便成为了专门提供API服务的后端

// 支持两种URL模式
传统模式 #
HTML5的路由模式 历史记录

angular-route
bower update

单页应用有个致命缺陷
SEO 爬虫无法对单页应用进行索引
所以
开发者可以做标记 // Hashbangs
爬虫抓住标记会等ajax执行完毕，填充好各路径之后才离开

<section ng-view></section>
```

* AngularJS 服务

```js
Angular服务都是独立的实体
实现不同实体之间的数据共享
eg.
从服务器端获取数据
共享缓存数据
向AngularJS组件中注入全局变量

可以在AngularJS-app 
任何两个没有关联的实体之间
实现双向数据绑定

// 预置服务
$http // ajax
$resource // REST风格的API
$location // URL操作
$q        // promise操作
$rootScope 
$window


// 自定义服务
更好的可测试性
代码重用

provider() // 最复杂最全面 较少用
service()  // 将一个服务定义成原型
factory()  // 提供调用函数返回值一类的服务
```

* 管理AngularJS 的身份验证

```js
作为客户端的AngularJS应用如何知晓和保存相关的状态

$http服务来查询用户的身份验证状态
但这样整个应用的所有组件都得等待请求的返回

所以
直接由Express应用在EJS视图中直接填充user对象
然后以Angular服务的方式进行封装

user对象存储在JSON字符串放到主视图
window.user = <%- user || 'null' %>;

// Facebook身份验证后的跳转bug
if(window.location.hash === '#_=_') window.location.hash = ''#!;
```

* 参考

```js
MEAN Web开发 Amos Q. Haviv
菜鸟教程
```



