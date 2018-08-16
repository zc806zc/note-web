# 工具类

> 在这些库变成你的拐杖之时，你也会随之“残废” -- DOM Scripting, 2nd

- 经典工具库

  - underscore
  - lodash <https://github.com/lodash/lodash>
  - ramda <https://github.com/ramda/ramda>
  - licia 史上最全 <https://github.com/liriliri/licia>

- 30-seconds-of-code

  - <https://github.com/Chalarangelo/30-seconds-of-code#flatten-array>
  - <http://www.css88.com/30-seconds-of-code/#call>

- 编写自己的代码库

  - 可以考虑用typescript
  - 打造自己的JavaScript武器库 <https://juejin.im/post/5a091afe6fb9a044ff30f402>
  - 仓库 ec-do

    - <https://juejin.im/post/5a2a7a5051882535cd4abfce>
    - <https://github.com/chenhuiYj/ec-do>

  - 尝试造了个工具类库，名为 Diana

    - <http://muyunyun.cn/posts/4490810f/>
    - diana <https://github.com/MuYunyun/diana>
  - 7种方法实现数组去重 https://juejin.im/post/5aed6110518825671b026bed
    - [...new Set(arr)]
    - Array.from(new Set(arr))
    - 利用对象属性
    - 排序->相邻元素
    - indexOf x 2
    - 循环

- 常用片段

  - 48 个 JavaScript 代码片段 <http://codebay.cn/post/7452.html>
  - 常用片段 <http://www.css88.com/archives/5180>

  - 简单收集 <https://github.com/jsfront/src/blob/master/js.md>

  - ES6常用片段 <http://www.css88.com/archives/8748>
  - overwrite some javascript methods <https://github.com/xuqiang521/overwrite>

```javascript
字符串操作 格式化|替换|大小写转换|去空格

数组操作 最值
  steamroller 数组扁平化

对象操作

url
  getUrlPrmt

统计

检测数据类型
  isType

浏览器信息
  browserInfo

随机数

表单校验

货币金额
  ecDo.upDigit(10.5)
  result："人民币壹拾元伍角"

Ajax

函数节流
  delayFn
  var count=0;
  function fn1(){
      count++;
      console.log(count)
  }
  //每100ms连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔200ms至少执行一次
  document.onmousemove=delayFn(fn1,100,200)

Cookie
    setCookie
    getCookie

class样式操作 // jquery
关键字高亮
  findKey
  Reg = new RegExp(regStr, "g");
  content = content.replace(/<\/?[^>]*>/g, '')
  return content.replace(Reg, "<" + el + ">$1</" + el + ">");
```

# 事件库封装

- markyun.js https://github.com/markyun/Markyun.js/blob/master/markyunjs/WebContent/js/markyun.js

# 回调处理

- eventproxy https://github.com/JacksonTian/eventproxy 

> An implementation of task/event based asynchronous pattern