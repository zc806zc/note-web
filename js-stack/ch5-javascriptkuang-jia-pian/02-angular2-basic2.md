#### AngularJS2 模板语法

```js
// HTML
<script> 元素是被禁用的外 
其他 HTML 元素都是支持的

// 插值表达式

// 模板表达式
<p>The sum of 1 + 1 is {{1 + 1}}</p> // 求值
<p>{{1 + 1 + getVal()}}</p> // 使用 getVal() 来获取这个表达式的值
很多 JavaScript 表达式也是合法的模板表达式，但不是全部

// 绑定语法
// 属性绑定
<div [ngClass]="classes">[ngClass]绑定到classes 属性</div>

// HTML 属性、 class 和 style 绑定
<table border=1>
  <tr><td [attr.colspan]="1 + 1">One-Two</td></tr> // 由一个attr.的前缀和HTML标签属性的名称组成
  <tr><td>Five</td><td>Six</td></tr>
</table>

<div class="bad curly special" [class]="badCurly">Bad curly</div>
<div [class.special]="isSpecial">这个样式比较特殊</div>

<button [style.background-color]="canSave ? 'cyan': 'grey'" >保存</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >小</button>

// 模板语句
模板语法为那些不太适合使用属性绑定的场景提供了
专门的 单向数据 绑定形式

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

// NgForTrackBy
trackByUsers(index: number, user: User){return user.id}  // 追踪函数
<div *ngFor="let user of users; trackBy:trackByUsers">({{user.id}}) {{user.fullName}}</div>
如果用来判断是否为同一个联系人的属性变化了
就会更新DOM元素
反之就会留下这个DOM元素

列表界面就会变得比较更加平滑
具有更好的响应效果


// * 与 <template>
// 模板引用变量
fax 引用了 input 元素，并将  `value` 传递给事件句柄
<input ref-fax placeholder="fax number">
<button (click)="callFax(fax.value)">Fax</button>

// 输入输出属性
// 模板表达式操作符
```

#### 参考

```js
菜鸟教程
```



