# jQuery Mobile

- touch-friendly
- 官网示例 http://demos.jquerymobile.com/1.4.5/
- JQM Gallery https://jqmgallery.com/
- 源码 https://github.com/cfjedimaster/jQuery-Mobile-Book

- 页面 页眉页脚与工具栏、列表

  - 搜索过滤
  - 创建 酒店简易app http://qmen.space/jqm-hotel-simple-app/

- 表单、模态对话框及微件

  - [ColdFusion](http://www.adobe.com/products/coldfusion-family.html)

    - 创建Web应用程序的服务器软件
    - 仅开发而言是免费的

- 单选按钮和复选框

- 选择菜单

- 搜索、开关以及滑块组件

- 使用原生表单控件

  - data-role="none"

- 使用迷你组件

  - data-mini="true"

- 对话框

- 网格布局

  - 响应式网格

- 可折叠内容

- 弹出式窗口

- 响应式表格

- 面板

- 创建[NoteKeeper-app](http://qmen.space/jqm-notekeeper-app/notekeeper.html)

  - 本地存储
  - kittyDressUp
  - 动态创建新页面

- 配置、实用程序以及JS方 法

  - 配置

    - mobileinit
    - jq的extend

- jQuery Mobile的功能增强

- 创建原生应用程序

  - 使用[phoneGap](http://phonegap.com/)封装器技术

    - 开源免费
    - 针对JS的API 接口

      - Accelerometer 加速度计
      - Camera
      - Compass
      - Connection 联机状态
      - Contacts
      - Device 操作系统之类的设备元数据
      - Events
      - File
      - Geolocation
      - Globalization 根据用户所在区域，自动格式化数字和日期格式
      - Media
      - Network
      - Notification
      - Storage 访问简单的SQL数据库

        - [在线构建](https://build.phonegap.com/apps)

          - 可以拿ch12 app1做测试

      - ch12 app2是联系人有关的app

      - 上传以后会针对不同的平台自动添加JS

      - deviceready 当前代码可以使用高级的功能

      - <https://github.com/luo0412/jq-mobile-test.git>

      - 读取联系人失败了。。。

  - Apache Cordova

```javascript

foundContacts = function(matches){ //
  create results in our list var s = ""; for (var i = 0; i < matches.length; i++) { s += "

 "+matches[i].displayName+"
"; } $("#results").html(s); $("#results").listview("refresh");
}
```

- Sencha Touch

  - Sencha Ext JS

- Kendo UI

  - 强大的web控件厂商telerik

- Ionic

  - 基于node.js
  - 深度集成Angular

    - 有选择地使用其中部分的模块
    - 最小限度地减少所使用的框架的大小
    - 调试

- Chrome自带的模拟

- Chrome远程调试

  - 移动端HTML + CSS +JS的最佳实践
  - head中添加必要的meta或link

- viewport

- format-detection 自动识别电话号码

  - 使用mailto连接, 快速打电话发短信

```html
<a href="tel:1-406-666-xxxx">1-406-666-xxxx</a>
```

- 不要使用iframe,慎用table
- ul ol 来代替table
- 或者table竖向显示
- jQuery mobile 数据优先级
- iframe采用超链接代替
- 更好的方法是让第三方提供内容的API
- XML或者JSON格式
- 使用相对单位设置元素尺寸
- 可点击控件设置足够大的尺寸
- 可点击控件之间留下足够大的空间
- 少用图片，小图片考虑icon
- Font Awesome
- Bootstrap Glyphicons
- Base64格式 + Data URLs
- 不要使用:hover设置悬停效果
- 设置合理的字体大小(16px)和行高(1.5)
- 在不需要选中文字区域禁用文字选中功能
- 右键单击 -> 触摸长按

```javascript
webkit-user-selector: none;
webkit-touch-callout: none;
```

- 触发鼠标事件滞后300毫秒（可察觉的延迟）

  - 模拟click -> tap事件
  - 模拟右键 -> taphold

- 横竖屏切换禁止

  - hack方案来模拟静止横竖屏切换
  - 更推荐的方案 orientationchange或者给出提示信息

- 慎用弹出窗口，标准对话框外观不一致最好统一重写

- 慎用Timer setInterval setTimeout

  - 只有Android Chrome在浏览器转后台是任然执行JS
  - Timer完成准确控制时间任务不太靠谱

- 一个RSS阅读器应用程序

# Zepto.js

- <https://github.com/madrobby/zepto>

# mui

# zepto.js
