# 框架封装度

- 按照封装度来划分
  - <https://www.zhihu.com/question/37946473>

- 第1级
  - 原始html+css(已不适用大部分实际开发)

- 第2级(JS框架为核心)

  - jquery + bootstrap -> metronic/adminLTE(bootstrap等二次开发)
  - jQuery-ui -> easy-ui/DWZ
  - React + Vue + Angular

- 第3级(自成体系)
  - extjs
    - https://www.w3cschool.cn/extjs/extjs_environment_setup.html

```js
<script type = "text/javascript">
  Ext.onReady(function () {
    Ext.create('Ext.Panel', {
      renderTo: 'helloWorldPanel',
      height: 100,
      width: 200,
      title: 'Hello world',
      html: 'First Ext JS Hello World Program'
    });
  });
</script>
```

- 第4级(用JAVA + 图形拖拽)
  - vaadin | GWT
    - https://www.ibm.com/developerworks/cn/java/j-full-stack-java-web-dev-vaadin/
    - https://vaadin.com/docs/v8/framework/tutorial.html#framework.tutorial.backend

```js
@Override
protected void init(VaadinRequest vaadinRequest) {
    final VerticalLayout layout = new VerticalLayout();

    // add Grid to the layout
    layout.addComponents(grid);

    // fetch list of Customers from service and assign it to Grid
    List<Customer> customers = service.findAll();
    grid.setItems(customers);

    setContent(layout);
}
```

# 移动开发方式

- 原生(nice)
- WebApp
  - jQuery/Zepto + Sencha Touch + Framework7(iOS 和 Android 双皮肤)
  - Angular + Ionic
  - Vue + Veex (Vux)
  - React + (Onsen UI/TouchstoneJS/Reapp + ...)
  - React Native
- 混合开发


# 框架概览

- N大H5前端框架
  - http://www.jianshu.com/p/f066863d5507
  - http://www.tuicool.com/articles/nuaeee
- TOP N
  - http://tech.163.com/16/0112/12/BD4L3NJO00094PDU.html
- 用哪个框架好?
  - https://www.zhihu.com/question/25754764)
  - 适合小团队 https://www.w3ctech.com/topic/1646
- 框架发展趋势
  - http://blog.csdn.net/soindy/article/details/52387286

- MUI
  - 最接近原生App体验的前端框架

- pure.css | Frozen UI |  Jingle

- Foundation | Bootstrap | AmazeUI 前端响应框架

- 滴滴出行
  - cube-ui https://didi.github.io/cube-ui/#/zh-CN/example

- 饿了吗
  - element

- 蚂蚁金服
  - Ant design

- uiKit
  - https://github.com/uikit/uikit
  - 一款轻量级、模块化的前端框架，可快速构建强大的web前端界面

- Semantic UI -- 基于自然语言有效原则的UI组件框架

- Materialize 基于 材料设计的一个现代化的响应式前端框架
   - Material UI

- Furtive 思维超前

- html5-boilerplate

- LimeJS 在线游戏开发

- 腾讯开源

  - WeUI
    - 为微信 Web 服务量身设计
  - JX
    - 腾讯前端 构建和组织大规模、工业级的Web App

- 阿里巴巴开源

  - SUI MobileUI
    - 阿里巴巴国际UED前端团队出品的移动端
  - Arale
    - 支付宝前端

- 百度开源

  - Clouda
    - 基于node.js的Webapp开发框架
  - GMU
    - 百度前端

- 蝉道
  - zui
    - 简单易用、轻量级、易于定制

- 其他
  - SUI 基于bootstrap，同时她也是一套设计规范
  - AUI http://www.auicss.com/
  - AliceUI https://github.com/aliceui/aliceui.github.io
  - H-ui
    - 适用于中国网站
    - 轻量级前端框架，简单免费，兼容性好
  - jQTouch
    - 基于WebKit的浏览器
  - Meteor
    - 新一代的开发即时web应用的开源框架，它能帮助你在最少的时间内完成开发。

  - Skeleton

  - Yui -- 高互动的网页，它采用了AJAX, DHTML 和 DOM 等程式码技术

  - kissy-- 是一款跨终端、模块化、高性能、使用简单的 JavaScript 框架。

  - DHTMLX Touch 一个完整的框架

  - Siimpler

  - Enyo 很多流行的 手机公司开发的重要应用都是采用该框架实现的。

  - Fries 是一款 稳定的HTML-CSS-JS框架

  - Junior 整个框架使用 Zepto，且整合了 backbone.js的视图和路由。

  - Sidetap 简洁轻量
  - Mobello 简化移动Web应用的开发过程
