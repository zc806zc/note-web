## 结构与布局


- 盒模型 display + position + float
- BFC(Block formatting context 块级格式化上下文)

  - 哪些元素会生成BFC

    - 根元素
    - float属性不为none
    - position为absolute或fixed
    - display为inline-block, table-cell, table-caption, flex, inline-flex
    - overflow不为visible

  - BFC有何用

    - 清除浮动
    - 防止 margin 重叠
    - 多栏布局的一种方式

```less
overflow: hidden; // 触发生成BFC,使浮动元素也参与计算
```

- 关于权重

  - id声明会覆盖class
  - class中的排序不重要,表中的顺序很重要

- 负值之美(将一个元素的margin设置为负值，元素将会变大) <http://www.cnblogs.com/jscode/archive/2012/08/28/2660078.html>

- 实用工具集

  - 常用CSS集 <https://github.com/asd0102433/blog/blob/master/前端/css有用的收集.md>
  - <https://juejin.im/entry/59af8eb8f265da247a15c27f?utm_source=gold_browser_extension>

    - Shed.css
    - Tachyons 快速加载，高可读性，和100%响应式界面
    - Basscss 人性化命名
    - Beard 具有争议的helper类

  - CSS清单 <https://juejin.im/post/59ae076b6fb9a0248e5ce689?utm_source=gold_browser_extension>

    - 抖动分析 <https://juejin.im/entry/59ae15126fb9a0247d4f6d16?utm_source=gold_browser_extension>
    - A Cross-end HTML5 Game <https://github.com/hiloteam/Hilo>

- 自适应内部元素

- 精确控制表格列宽

- 根据兄弟元素的数量来设置样式

- 满幅的背景 定宽的内容

- 垂直居中

- 紧贴底部的页脚



- flex

  - flex <http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool>)
  - demo <http://www.ruanyifeng.com/blog/2015/07/flex-examples.html>)

```javascript
// BootStrap有关
bootstrap btn-block // 使其成为块级元素
不要忘记加class="row"
<div class="well"></div> // 视觉深度

// Jq动画
jQuery + Animate.css
$("button").prop("disabled", true);
$("#target2").appendTo("#right-well");

$("#target5").clone().appendTo("#left-well");
$("#target1").parent().css("background-color", "red");

$("#right-well").children().css("color", "red");
$(".target:nth-child(3)").addClass("animated bounce");
```

## 背景与边框

- Web标准
- CSS编码技巧

- 半透明边框/多重边框/边框内圆角/连续的图像边框

- 灵活的背景定位/条纹背景/复杂的背景图案/伪随机背景


## 形状/视觉效果

- 自适应的椭圆/平行四边形/菱形图片

- 切角效果/梯形标签页

- 简单的饼图

- 单侧投影/不规则投影

- 染色效果/毛玻璃/折角效果

## 字体排版

- 连字符断行/插入换行/调整tab的宽度

- 连字/华丽的&符号/自定义下划线

- 文本行的斑马条纹

- 现实中的文字效果/环形文字

## 用户体验

- 适合的鼠标光标
- 扩大可点击区域
- 自定义复选框
- 弱化背景

  - 使用阴影
  - 使用模糊

- 滚动提示

- 交互式的图片对比控件


## 过渡与动画

- 缓动效果/逐帧动画/闪烁动画

- 打字动画

- 状态平滑的动画

## 书单

```javascript
CSS揭秘
```
