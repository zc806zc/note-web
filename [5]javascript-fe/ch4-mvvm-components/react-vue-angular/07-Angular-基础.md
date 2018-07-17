# AngularJS

- awesome-angular <https://github.com/gdi2290/awesome-angular>
- 开发

  - 浏览器插件

    - Batarang
    - ng-inspector for AngularJS

- 基础

```javascript
// 项目结构 - 垂直结构
每个模块都对用各自的子文件夹
对不同的 实体 进行组织
文件命名 eg. main.client.service.js // 不同文件夹下的"重复"

// 关于Angular1
但至少还会流行一段时间

// 设想
1\. 使用 JSON 来提供服务的平台
2\. 结构化框架  // 用来连接JS和HTML 通过<script> 添加到HTML 浏览器模板...
3\. MVC
4\. 单页面SPAs,开发大型应用
5\. 双向数据绑定,实时保持同步,模型是唯一的数据来源 // Model ⇌ View 而且是连续合并
6\. 简化DOM操作 // 精简版的jQuery-jqLite, 提出了jquery外的解决方案

// 其他特性优势
AngularJS 支持输入验证
完美支持数据库的 CRUD
HTML目前还不支持包含HTML文件的功能,但Angular可以 // iframe

// 注意
AngularJS 属性以 ng- 开头，
用data-ng- 来让网页对 HTML5 有效

// Angular表达式与JS表达式的区别
AngularJS 表达式，支持过滤器，但不支持条件判断、循环及异常

// 过滤器
<p>姓名为 {{ lastName | uppercase }}</p>
currency    // 格式化数字为货币格式
filter      // 从数组项中选择一个子集
lowercase  orderBy  uppercase   

// 下拉列表实现
<select ng-model="selectedSite" ng-options="x for (x, y) in sites"></select>
<select ng-model="selectedCar" ng-options="y.brand for (x, y) in cars"></select>
```

- 模块

```javascript
至少要1个模块才运行

1\. 核心模块
2\. 扩展模块(由核心框架的开发团队开发,但不在核心模块,分散到扩展库，更灵活)
3\. 第三方模块

// 应用引导(自动引导)
angular.module()
1\. 哪个DOM元素是应用的root元素
2\. 何时进行初始化 // application.js 要放在JS引用最后

// 也可以手工引导
可以确保有些逻辑在AngularJS应用之前执行
```

- 依赖注入与控制反转(inversion of control)

```javascript
一种软件开发模式

由注入器来负责往构造函数中注入对象 // 且便于测试
```

> 没事你不要来找我，有事我会去找你

- Angular指令

```javascript
// 目的
扩展HTML的目的,实现AngularJS与DOM之间的交互

Angular指令就是标签

Angular的编译器为 DOM元素及下级元素 + 附加特殊行为

1\. 核心指令
2\. 自定义指令
即第三方的补充性开源指令

restrict 默认值为 EA // 即可以通过元素名和属性名来调用指令
E 元素名
A 属性
C 类名
M 注释
<!-- directive: runoob-directive -->
```

- Angular的MVC实体

```javascript
// 视图
<section ng-include="'example/views/example.client.view.html'"></section>

// 控制器和scope
控制器大多是构造函数,实例化出新的控制器对象

数据模型引用对象, $scope, 使控制器对模型的修改快速反应到视图上 // 视图和控制器之间的粘合剂
模仿DOM的树状结构,子级scope找不到的DOM向上遍历,直到找到或者到达root scope
```

> AngularJS 是自成一体的框架

- AngularJS 路由

```javascript
// ng-Route
路由：定义不同URL路径及对应模板的模块,根据用户请求的路径来实现不同的页面填充

并不是从服务器获取相应的Web页面，而是加载相应的模板对其进行编译
并将得到的结果放在特定的DOM元素之中 // ng-view

服务器只是将模板以静态文件的形式发送给浏览器，不会响应ngRoute控制下的URL路径变化

Express便成为了专门提供API服务的后端

// 支持两种URL模式
传统模式 #
HTML5的路由模式 历史记录

// 但单页应用有个致命缺陷
SEO爬虫无法对单页应用进行索引

所以开发者需要做标记 // Hashbangs
爬虫抓住标记会等ajax执行完毕，填充好各路径之后才离开
```

- AngularJS 服务

```javascript
Angular服务都是独立的实体

// 实现不同实体之间的数据共享
可以在AngularJS-app, 任何两个没有关联的实体之间,实现双向数据绑定

eg.从服务器端获取数据,共享缓存数据,向AngularJS组件中注入全局变量

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

- 管理AngularJS 的身份验证

```javascript
作为客户端的AngularJS应用
如何 知晓 和 保存 相关的状态

// $http服务
查询用户的身份验证状态
但这样整个应用的所有组件都得等待请求的返回

所以,直接由Express应用在EJS视图中直接填充user对象
然后以 Angular服务 的方式进行封装

user对象存储在JSON字符串放到主视图
window.user = <%- user || 'null' %>;

// Facebook身份验证后的跳转bug
if(window.location.hash === '#_=_') window.location.hash = ''#!;
```

- 参考

```javascript
MEAN Web开发 Amos Q. Haviv
```
