#### **Angular2**

* [Code-download](https://github.com/mgechev/switching-to-angular2) \| [angular2文档](https://angular.io/docs/ts/latest/quickstart.html)

* 学习清单  https://juejin.im/post/599e4ad151882524417ac921?utm\_source=gold\_browser\_extension

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

// 配置文件
package.json 
tsconfig.json     // 定义TS编译器如何从项目源文件生成 JS代码
typings.json      // 为TS编译器无法识别的库提供额外的定义文件
systemjs.config.js 
```

* 架构

```js
// 1、模块 (Modules)
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

// 2、组件 (Components)


// 3、模板 (Templates)
<div>
网站地址 : {{site}}
</div>


// 4、元数据 (Metadata)
@Component({
   selector : 'mylist',
   template : '<h2>菜鸟教程</h2>'
   directives : [ComponentDetails]
})
export class ListComponent{...}

// 5、数据绑定 (Data Binding)
<input [value]="currentUser.firstName"
       (input)="currentUser.firstName=$event.target.value" >

// 6、指令 (Directives)
<li *ngFor="let site of sites"></li>
<site-detail *ngIf="selectedSite"></site-detail>

// 7、服务 (Services)
// eg. 日志服务
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}

// 8、依赖注入 (Dependency Injection)
在传统的开发模式中，
调用者负责管理所有对象的依赖，
循环依赖一直是梦魇，
而在依赖注入模式中，
这个管理权交给了注入器(Injector)，
它在软件运行时负责依赖对象的替换，
而不是在编译时。
这种控制反转Ioc，
运行注入的特点即是依赖注入的精华所在。
```

* 基础

```js
// AngularJS2 
发布于2016年9月份
性能上得到显著的提高 // 升级是值得的 但已经Angular4了...

// 立足于ES2015(即ES6)
模块化
块级作用域增加了语言级的内置支持

需要一些 shim 和 polyfill(IE)
让ES6写的代码能够转化为ES5形式
并可以正常运行在浏览器中

// ES5浏览器处理
systemjs  // 通用模块加载器，支持AMD、CommonJS、ES6等各种格式的JS模块加载
es6-module-loader // ES6模块加载器，systemjs会自动加载这个模块
traceur // ES6转码器，将ES6代码转换为当前浏览器支持的ES5代码，systemjs会自动加载 这个模块

// 语法糖
支持class
解构复制

// Web Component
允许自定义HTML标签
更好的封装性
提供的标签具有更好的语义
更好的模块化

// Web Worker
在另一个线程中执行执行计算密集型任务
在主线程之外的独立线程里面监测改动很难获得成效

单页应用的定位是高性能和良好的用户体验
Controller
Scope
依赖注入
服务端渲染
大规模应用
模板

// 脏值检测
```

#### **基础构件**

```js
// 组件基础

// 管道

// 脏值检测
增强版的脏值检测

// 服务

// 新的基于组件的路由机制
```

#### **TypeScript**

```js
记在TypeScript基础
```

#### **Angular2组件和指令入门**

```js
// 配置开发环境

// Angular2指令用法

// 改进指令语法的语义

// 定义Angular2指令

// Angular2 内存指令

// 组件视图封装

// 实现组件的控制器

// 处理用户交互

// Angular2内容投影

// 挂钩到组件的生命周期

// 执行的顺序

// TemplateRef定义通用视图

// 理解并优化脏值检测机制
```

#### **依赖注入**

```js
// Angular2的依赖注入
DI的优点

// 配置注射器

// 定义实例化服务的工厂

// 子注射器及其可见性
```

#### **路由和表单**

```js
// Angular2的路由

// Angular2的表单用法

// Angular2的双向数据绑定

// 存储表单数据

// 显示存储的所有开发者列表
```

#### **管道 / RESTful服务端之间的通信**

```js
// 数据模型驱动型表单

// 探索Angular的HTTP模块

// 参数化视图

// 嵌套视图

// 使用管道进行数据交换
```

#### **开发体验和服务端渲染**

```js
// 在Web Worker中运行应用

// SPA的加载过程

// 改善开发体验
各种文本编辑器和IDE
热重载

// 使用angular-cli初始化项目

// 入门项目
```



