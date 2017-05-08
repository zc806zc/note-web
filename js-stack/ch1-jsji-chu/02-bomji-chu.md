#### **BOM与客户端检测**

* BOM 浏览器提供商会按照各自的想法随意去扩展它
* window双重角色
  * JavaScript 访问浏览器窗口的一个接口
  * ECMAScript 规定的 Global 对象
* 窗口
  * innerWidth \| innerHeight \| outerWidth \| outerHeight
  * clientWidth 和 clientHeight
  * 关于viewport  http://quirksmode.org/mobile/viewports2.html\
  * 弹出窗口屏蔽
* 间歇调用与超时调用
  * JavaScript 是一个单线程序的解释器，因此一定时间内只能执行一段代码
  * JavaScript 任务队列
  * 超时调用 ID 例clearTimeout\(id\)
  * 一般认为，使用 超**时调用**来模拟间歇调用的是一种最佳模式

* “最小公分母”策略
  * 最常见的客户端检测方法是 能力检测/特性检测
  * JavaScript 中能力检测 http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
  * 能力检测不是浏览器检测
  * 怪癖检测
  * 用户代理检测navigator.userAgent -- 通过检测用户代理字符串来确定实际使用的浏览器
  * 电子欺骗 -- 浏览器通过在自己的用户代理字符串加入一些错误或误导性信息，来达到欺骗服务器的目的
* webkit
  * 至今，基于 WebKit的所有浏览器都将自己标识为 Mozilla 5.0，与基于 Gecko 的浏览器完全一样
  * 确定浏览器是否基于 WebKit 要比确定它是不是 Safari 更有价值
  * 谷歌公司的 Chrome 浏览器以 WebKit 作为呈现引擎，但使用了不同的 JavaScript 引擎
  * 移动操作系统 iOS 和 Android 默认的浏览器都基于 WebKit
* 用户代理字符串检测技术 P228
  * 识别呈现引擎
  * 识别浏览器
  * 识别平台
  * 识别windows操作系统
  *  识别移动设备
  * 识别游戏系统



