#### **移动设备JavaScript开发**
*   电池续航能力
    *   最少量的JS代码
    *   CSS3实现动画和图片过渡
    *   间隔式访问，不需要访问时立即切断监听器和与传感器的连接
*   网络带宽速度和延时
    *   延时，多次HTTP请求 → 合并成一个JS
    *   CSS Minifier工具压缩整合CSS
    *   CSS图像拼合技术做CSS精灵
    *   尽量把较小的接近图标尺寸的图片以base64编码方式放在CSS中,以data URI直接引用
    *   把请求资源放在分开放在多个域名下,跨域并行下载
    *   HTML5的应用缓存Application Cache
*   板载内存容量
    *   512M的内存只有不到一半给前台应用来运行
    *   例传输的大图，消耗的内存
    *   内存一旦告罄，系统会尝试关闭处于非使用状态的后台任务和应用来释放内存
    *   GPU图形处理器 使CSS transform处理的图片加载至显存，显存里的图片处理是硬件加速的
    *   同一图像用硬件合成所占用的显存数量是常规的4倍(rgba)
*   操作系统响应能力
    *   .3s内得不到响应就算卡
    *   可视化的回应动作，表示我其实已经在回应你
    *   新一代的指示方式 [Tim Holman](http://codepen.io/collection/HtAne/)
    *   这300ms是故意的，单双击,touch和click

#### **使用JS访问移动设备上的传感器**
*   各种平台Android,IOS,Microsoft Windows Phone的API
*   开放框架[PhoneGap](http://phonegap.com/) 使用HTML5编写代码母版
*   标准的网页标准[API](https://www.w3.org/2009/dap/)，主要用于各找移动版浏览器
    *   不用经过应用商店审批，自动完成更新
    *   建立功能强大、界面美观的应用程序
    *   [H5兼容性列表](http://mobilehtml5.org)
*   地理定位
    *   Wifi定位 GMS基站三角测量 GPS卫星定位
    *   Panoramio API 上传图片的时候采集用户的即时地理位置数据
    *   [训练助手](http://mobile.tutsplus/com/)
    *   W3C Geolocation API
    *   如果用户拒绝定位，可利用[FreeGeoIP](http://freegeoip.net)定位到国家城市
*   触摸传感器
    *   W3C Touch API
    *   旋转木马或幻灯片或屏幕绘图或[Adobe小游戏](http://www.memoryvitamins.biz/index.php)
    *   preventDefault()然后改写系统默认行为
    *   [Hammer.js](https://github.com/EightMedia/eightmedia.github.io)是手势功能适应多种设备,例IOS手指在屏幕上捏或者旋转可以返回移动距离
*   姿态传感器和方向传感器
    *   姿态传感器：摆放 类似 内部陀螺仪
    *   W3C Screen Orientation API
```
    <div class="comments-icon">
    <div class="marker">+</div>
    </div>

        <div class="comments-icon">

        <div class="marker">+</div>

        </div>

            // Define an event handler function to execute when the device orientation changes between
            // portrait and landscape
            function onOrientationChange() {

              // The device is in portrait orientation if the device is held at 0 or 180 degrees, and in
              // landscape orientation if the device is held at 90 or -90 degrees
              var isPortrait = window.orientation % 180 === 0;

              // Add a class to the <body> tag of the page according to the orientation of the device
              document.body.className += isPortrait ? " portrait" : " landscape";
            }

            // Execute the event handler function when the browser tells us the device has
            // changed orientation
            window.addEventListener("orientationchange", onOrientationChange, false);

            // Execute the same function on page load to set the initial <body> class
            onOrientationChange();
```

    *   CSS Media Queries 关注点分离??
    *   W3C DeviceOrientation API
    *   [Jenga](https://en.wikipedia.org/wiki/Jenga) 和[Marble Madness](https://en.wikipedia.org/wiki/Marble_Madness)考验用户的稳定性和神经
*   运动传感器
    *   翻面静音
    *   W3C DeviceMotionEvent API 加速度和旋转速度...
*   未能访问的传感器
    *   摄像头传感器
    *   麦克风传感器
    *   W3C Media Capture and Streams API
*   事件框架化与传感器数据
    *   移动设备的browser不能快速处理JS

######  **网络连接故障和离线状态**
*   在屏幕上告知用户网络连接已经断开
*   或者把HTTP请求缓存起来,直到网络连接恢复时再发出
*   离线和在线的检测 `navigator.onLine`
*   利用Web Storage API长期保存数据
    *   以往做法 cookies
    *   现在：window.sessionStroage(使用期间)和window.localStorage
*   HTML5 Application Cache
    *   特定格式的文件 cache manifest
    *   以这项技术缓存，可以瞬间完成加载
    *   在服务器添加MIME类型为text/cache-manifest
    *   一旦有错误即视为无效
    *   `<html manifest="manifest.appcache">`
    *   更新的话就#注释写版本号
    *   引用manifest的html是默认缓存的
```
  CACHE MANIFEST
  # Version 1.0.1 - 2013-01-02
  /library/styles/main.css
  /library/scripts/lib/jquery.min.js
  /library/scripts/main.js
  /images/background.jpg
  /images/logo.png
```

#### **响应式网页设计的JavaScript**
*   CSS3 Media Queries
*   window.matchMedia()可以获悉那条规则正在生效