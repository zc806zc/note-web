# Hybrid设计

- <https://www.imooc.com/learn/850>

# 移动开发

- 原生(nice)

- WebApp(跨平台)

  - React Native | Vue + Veex (Vux) | NativeScript | flutter

    - <https://github.com/NativeScript/NativeScript>
    - flutter <https://github.com/flutter/flutter>

  - Angular + Ionic + Vue + WeUI (Vux) | React + (Onsen UI/TouchstoneJS/Reapp + ...)

  - jQuery/Zepto + Sencha Touch + Framework7(iOS 和 Android 双皮肤)

  - Meteor + React 技术架构(发展似乎并不好)

    - <https://guide.meteor.com/>
    - <https://www.zhihu.com/question/20296322>

  - hyperapp <https://github.com/hyperapp/hyperapp>

  - ratchet

    - <https://github.com/twbs/ratchet/>
    - Build mobile apps with simple HTML, CSS, and JavaScript components.

  - keystone

    - <https://github.com/keystonejs/keystone>

> 注意：webapp包括H5页面级别的app和React Native这样的接近原生体验的两种，是不一样的

- 混合开发
- 三者的比较

  - <https://www.jianshu.com/p/4356ca0561ab>

```shell
Native APP：就是所说的原生开发，
Native Code编程，代码编译之后以2进制或者字节码的形式运行在OS上，
直接调用OS的Device API；


Web APP，以HTML+JS+CSS等WEB技术编程，代码运行在浏览器中，
通过浏览器来调用Device API（取决于HTML5未来的支持能力）

Hybrid APP，就是混合开发。部分代码以WEB技术编程，部分代码由某些Native Container承担（例如PhonGAP插件，BAE插件），其目的是在HTML5尚未完全支持Device API和Network API的目前阶段，承担这部分职责。常用的技术就是webview+html5

React Native 是 Facebook 推出的
一个用 javascript语言就能同时编写 ios，android，以及后台的一项技术。
用React Native 就是真正意义上的全栈，一个项目从头到尾可以一个人搞定
```
