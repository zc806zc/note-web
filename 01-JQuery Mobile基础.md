#### **ch1 jQuery MObile基础**
* <del>小结自 《JQuery移动Web开发（第2版）》</del>
	* API感觉的书，看官网比较好
    * 有几个小应用可以参考一下
* touch-friendly
* [官网示例](http://demos.jquerymobile.com/1.4.5/)
* [JQM Gallery](https://jqmgallery.com/)
* [源码下载](https://github.com/cfjedimaster/jQuery-Mobile-Book)

#### **ch2-5 页面 页眉页脚与工具栏、列表**
* 搜索过滤
* 创建[酒店简易app](http://qmen.space/jqm-hotel-simple-app/)

#### **ch6-8 表单、模态对话框及微件**
* [ColdFusion](http://www.adobe.com/products/coldfusion-family.html)
	* 创建Web应用程序的服务器软件
    * 仅开发而言是免费的
* 单选按钮和复选框
* 选择菜单
* 搜索、开关以及滑块组件
* 使用原生表单控件
	* data-role="none"
* 使用迷你组件
	* data-mini="true"
* 对话框
* 网格布局
	* 响应式网格
* 可折叠内容
* 弹出式窗口
* 响应式表格
* 面板
* 创建[NoteKeeper-app](http://qmen.space/jqm-notekeeper-app/notekeeper.html)
	* 本地存储
    * kittyDressUp
    * 动态创建新页面

#### **ch9 配置、实用程序以及JS方 法**
*  配置
	* mobileinit
    * jq的extend
    
~~~

~~~

#### **ch10 使用事件**
#### **ch11 jQuery Mobile的功能增强**
#### **ch12 创建原生应用程序**
*  使用[phoneGap](http://phonegap.com/)封装器技术
	* 开源免费
	* 针对JS的API 接口
    	* Accelerometer 加速度计
        * Camera
        * Compass
        * Connection 联机状态
        * Contacts
        * Device 操作系统之类的设备元数据
        * Events
        * File
        * Geolocation
        * Globalization 根据用户所在区域，自动格式化数字和日期格式
        * Media
        * Network
        * Notification
        * Storage 访问简单的SQL数据库
   * [在线构建](https://build.phonegap.com/apps)
   		* 可以拿ch12 app1做测试
        * ch12 app2是联系人有关的app
        * 上传以后会针对不同的平台自动添加JS
        * deviceready 当前代码可以使用高级的功能
        * https://github.com/luo0412/jq-mobile-test.git
        * 读取联系人失败了。。。
* Apache Cordova
~~~
  foundContacts = function(matches){
      //create results in our list
      var s = "";
      for (var i = 0; i < matches.length; i++) {
          s += "<li>"+matches[i].displayName+"</li>";
      }
      $("#results").html(s);
      $("#results").listview("refresh");
  }
~~~

#### **ch13 一个RSS阅读器应用程序**
* [可能的演示地址](http://qmen.space/jqm-rss-reader-app/index.html)