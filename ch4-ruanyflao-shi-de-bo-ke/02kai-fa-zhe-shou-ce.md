#### 开发者手册

* 函数式编程
  * http://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html 入门教程

```js
Functional programming
```

* 技术热门度曲线
  * https://stateofdev.com/ 提供各种技术的热门程度图

```
启动期 // 有所报道，难以商用
泡沫期 // 出现个别成功案例，非理性渲染
低谷期
爬升期 // 优缺点明晰 重新认识
高原期

争取风险投资，要选择热门的技术 // 创业公司
解决实际问题， 要选择可靠的技术

// 图片来源 http://www.ruanyifeng.com/blog/2017/03/gartner-hype-cycle.html
```

![](/assets/jieduan.png)

* 编程规范
  * https://github.com/ruanyf/document-style-guide  中文技术文档的写作规范

```js
// 文件名必须小写
// 驼峰命名法可能也不合适

可移植 // Linux Mac 平台问题等
便于区分(系统)目录或文件相区分 // ls 大写的容易先看到
例如 易于大小写搜索 还有可读性
```

* Content Security Policy

```js
// 跨域脚本攻击 XSS

能不能根本上解决问题，浏览器自动禁止外部注入恶意脚本
// 网页安全政策 CSP
实质就是白名单制度 // 列入可信主机

1. 通过 HTTP 头信息的Content-Security-Policy的字段
2. <meta http-equiv="Content-Security-Policy" 
         content="script-src 'self'; 
         object-src 'none'; 
         style-src cdn.example.org third-party.org; 
         child-src https:">
```

* 


