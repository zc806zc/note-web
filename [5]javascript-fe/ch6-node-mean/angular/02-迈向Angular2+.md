# Angular2+

- NiceFish 大漠穷秋 <https://gitee.com/mumu-osc/NiceFish>

- [Code-download](https://github.com/mgechev/switching-to-angular2) | [angular2文档](https://angular.io/docs/ts/latest/quickstart.html)

- 学习清单 <https://juejin.im/post/599e4ad151882524417ac921>

```
npm install -g cnpm --registry=https://registry.npm.taobao.org

// 配置文件
package.json
tsconfig.json     // 定义TS编译器如何从项目源文件生成 JS代码
typings.json      // 为TS编译器无法识别的库提供额外的定义文件
systemjs.config.js
```

- 架构

```javascript
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

- 基础

```javascript
// AngularJS2
发布于2016年9月份,性能上得到显著的提高

// 立足于ES2015(即ES6)
模块化
块级作用域增加了语言级的内置支持

需要一些 shim 和 polyfill(IE)
让ES6写的代码能够转化为ES5形式,并可以正常运行在浏览器中

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
```

## 基础构件

- 组件
- 管道
- 增强版的脏值检测
- 服务
- 新的基于组件的路由机制

## TypeScript

## Angular2组件和指令入门

- 配置开发环境
- Angular2指令用法
- 改进指令语法的语义
- Angular2 内存指令
- 组件视图封装
- 实现组件的控制器
- 处理用户交互
- Angular2内容投影
- 挂钩到组件的生命周期
- 执行的顺序
- TemplateRef定义通用视图
- 理解并优化脏值检测机制

## 依赖注入

- Angular2的依赖注入

  - DI的优点

- 配置注射器

- 定义实例化服务的工厂

- 子注射器及其可见性

## 路由和表单

- Angular2的路由
- Angular2的表单用法
- Angular2的双向数据绑定
- 存储表单数据

## 管道 / RESTful服务端之间的通信

- 数据模型驱动型表单
- Angular的HTTP模块
- 参数化视图 嵌套视图
- 使用管道进行数据交换

## 开发体验和服务端渲染

- 在Web Worker中运行应用
- SPA的加载过程
- 改善开发体验

  - 各种文本编辑器和IDE
  - 使用angular-cli初始化项目
  - 热重载

## AngularJS2的模板语法

```javascript
// HTML
<script> 元素是被禁用的外,其他 HTML 元素都是支持的

// 插值表达式
// 模板表达式
<p>The sum of 1 + 1 is {{1 + 1}}</p> // 求值
<p>{{1 + 1 + getVal()}}</p>

// 绑定语法
// 属性绑定
<div [ngClass]="classes">[ngClass]绑定到classes 属性</div>

// HTML 属性、 class 和 style 绑定
<table border=1>
  <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
  <tr><td>Five</td><td>Six</td></tr>
</table>

<div class="bad curly special" [class]="badCurly">Bad curly</div>
<div [class.special]="isSpecial">这个样式比较特殊</div>

<button [style.background-color]="canSave ? 'cyan': 'grey'" >保存</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >小</button>

// 模板语句
模板语法为那些不太适合使用属性绑定的场景提供了专门的 单向数据 绑定形式

// 事件绑定
<button (click)="onSave()">Save</button>
<button on-click="onSave()">On Save</button>

// 使用 NgModel 进行双向数据绑定
<input [(ngModel)]="currentUser.firstName">
<input bindon-ngModel="currentUser.firstName">

// 内置指令
NgClass
NgStyle
NgIf
NgFor
NgSwitch

// 样式
setStyles() {
  let styles = {
    // CSS属性名
    'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
    'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
  };
  return styles;
}

<div [ngStyle]="setStyles()">
    这个div的样式是italic, normal weight, 和extra large (24px)。
</div>

<span [ngSwitch]="userName">
  <span *ngSwitchCase="'张三'">张三</span>
  <span *ngSwitchCase="'李四'">李四</span>
  <span *ngSwitchCase="'王五'">王五</span>
  <span *ngSwitchCase="'赵六'">赵六</span>
  <span *ngSwitchDefault>龙大</span>
</span>

// NgForTrackBy, 追踪函数
trackByUsers(index: number, user: User){return user.id}
<div *ngFor="let user of users; trackBy:trackByUsers">({{user.id}}) {{user.fullName}}</div>
如果用来判断是否为同一个联系人的属性变化了
就会更新DOM元素, 反之就会留下这个DOM元素

列表界面就会变得比较更加平滑,具有更好的响应效果

// * 与 <template>
// 模板引用变量
fax 引用了 input 元素，并将value传递给事件句柄
<input ref-fax placeholder="fax number">
<button (click)="callFax(fax.value)">Fax</button>

// 输入输出属性
// 模板表达式操作符
```

# Aurelia

- Angular 2.0的开发者之一创建了新的框架Aurelia
- <https://www.zhihu.com/question/28735192?sort=created>
