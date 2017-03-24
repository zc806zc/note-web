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
// angular1 
至少还会流行一段时间 // 虽然已经在边缘

始于2009
使用JSON来提供服务的平台
结构化框架
连接JS和HTML

MVC
单页面
浏览器模板 
双向数据绑定 M和V之间data的无缝同步
简化DOM操作

开发大型应用

// angular全局变量
DOM操作 -angular对象包含了一个精简版的jQuery-jqLite
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

```

```

* AngularJS 服务

```

```

* 管理AngularJS 的身份验证

```

```

* 参考

```
MEAN Web开发 Amos Q. Haviv
菜鸟教程
```



