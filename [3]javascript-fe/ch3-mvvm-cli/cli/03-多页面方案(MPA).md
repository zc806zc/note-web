# README

- 基于 Webpack 开发和构建多页面站点  <https://juejin.im/post/5a9358d76fb9a0633c662f17>
- webpack多页应用架构系列 https://segmentfault.com/a/1190000006843916
- 非默认需要配置entries  https://github.com/Monine/webpack-multi-page
- webpack增量打包多页应用 若干思考 
    - https://juejin.im/post/5a63f082f265da3e303c95cc 
    - [使用webpack重构koa2多页应用](http://www.guofengxian.com/2017/08/08/%E4%BD%BF%E7%94%A8webpack%E9%87%8D%E6%9E%84koa2%E5%A4%9A%E9%A1%B5%E5%BA%94%E7%94%A8/#more) 
- webpack不适合多页面应用？你写的插件还不够多 https://www.jianshu.com/p/f6a2a47d084d
- 从无到有，学习 webpack 的多页面配置 
    - https://juejin.im/entry/58e73a7661ff4b006b40d023
    - https://github.com/Heyff12/webpack-pages  
- 讲思路 搭建一个多页面的无依赖的工程化项目
    - https://juejin.im/post/59f338695188255f5c513fb1
    - https://github.com/wuomzfx/pure-webpage
- 用webpack搭建多页面项目 @deprecated https://juejin.im/post/5a0c13b3518825329314154d    
- 中小型多页面应用整合webpack终极方案 https://juejin.im/post/5a1b9a6ef265da432a7b4d0d    
- 思路 @deprecated http://hawkzz.com/blog/blog/1514542087911  
- 一个简单易用的webpack4多页面脚手架配置加学习 @deprecated
    - https://juejin.im/post/5ad0a7f7518825482e394f41
    - https://github.com/673800357/webpack4-multpage-learn
- Webpack 4 和单页应用入门 多页面 https://github.com/wallstreetcn/webpack-and-spa-guide/blob/master/examples/mpa
- 公共部分提取 
    - https://github.com/czero1995/webpack-common  
    - https://juejin.im/post/5a35f6845188253865094365


```js
// 配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
	let entries = [],
		basename, tmp, pathname, appname;

	glob.sync(globPath).forEach(function(entry) {
		basename = path.basename(entry, path.extname(entry));
		tmp = entry.split('/').splice(-3);
		pathname = basename; // 正确输出js和html的路径
		entries.push({
			js: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
			html: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
			name: tmp[2]
		});
	});
	return entries;
}

// 或者
function getEntries (path) {
  let entries = {}
  glob.sync(path).forEach(entry => {
    if (/(views\/(?:.+[^.html]))/.test(entry)) {
      entries[RegExp.$1.slice(0, RegExp.$1.lastIndexOf('/'))] = entry
    }
  })
  return entries
}

// 替换名字 方式1
pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
```

# 通用脚手架

- webpack-seed https://github.com/Array-Huang/webpack-seed
- WebpackTemplate https://github.com/BryanAdamss/WebpackTemplate
- multipage-webpack-scaffolding https://github.com/JesseZhao1990/multipage-webpack-scaffolding
- webpack-multi-page @deprecated 结构略复杂 原生无框架的 兼容IE8+ <https://github.com/zhaotoday/webpack-multi-page>
- webpack-multiple-page-boilerplate <https://github.com/b5156/webpack-multiple-page-boilerplate>
- 多页面Webpack脚手架 @deprecated https://github.com/HeavenBin/WebpackTemplate
- webpack-study @deprecated
    - https://github.com/qq20004604/webpack-study  
    - 综合案例是多页面的解决方案，可以稍微参考一下思路    
- multipage-start-kit https://github.com/HuaRongSAO/multipage-start-kit

# Vue多页面基础

- vue-cli 提供了pages 
    - [vie-cli pages](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E6%9E%84%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%A4%9A%E9%A1%B5%E5%BA%94%E7%94%A8)

- Vue或React多页应用脚手架 

  - <https://github.com/MeCKodo/vue-multipage>
  - <https://www.imooc.com/article/12697>
  
- vue多页面开发和打包的正确姿势 

    - https://juejin.im/post/5a8e3f00f265da4e747fc700
    - https://github.com/Faithree/multiple-vue-amazing
    - vue多页面打包优化,主要讲打包上线的优化 
- vue-cli + es6 多页面项目开发及部署 https://juejin.im/post/5ab1d9c0f265da239c7b3c0b
- 从搭建vue-脚手架到掌握webpack配置 https://juejin.im/post/5a5cb391f265da3e317e2579
- Vue或React多页应用脚手架 
    - webpack替换为3.X  
    - https://github.com/MeCKodo/vue-multipage
    - https://juejin.im/post/582d74ec128fe10069565416
- 基于vue-cli重构多页面脚手架 
    - https://juejin.im/post/5a6559e55188257330610ac5
    - https://github.com/xueshuai/vue-multipage 
- vue单页面，多路由，前进刷新，后退不刷新 
    - https://segmentfault.com/a/1190000012083511
    - https://github.com/bingyang519/vueGoBack

```jsx
// 小结目前做法与观点
// https://github.com/natural-fe/natural-cli
pages拿出src，放在最外面

vue -> san.js，这样可以兼容一波IE8+,
但目前的考虑是仅提供若干个用户需要的页面
不是整个系统，没事干嘛兼容

所谓多页面是诡计，其实就是N个弱鸡单页面...

期待vue-cli的pages
```

# Vue的多页面脚手架

- vue-multiplePages-useCdn @nice 
    - https://github.com/Jerry12138/vue-multiplePages-useCdn 
    - CDN注入配置 与 上传阿里云/七牛云的配置 
- vue-element-ui-scaffold-webpack4 @nice 
    - https://github.com/hzsrc/vue-element-ui-scaffold-webpack4
    - libs丰富，参考
    - router和入口单独放在文件夹下
- vue-cli-multi-page @nice 
    - <https://github.com/bluefox1688/vue-cli-multi-page>
    - webpack3 
    - vux的配置不错
- vue-cli-multipage-bootstrap 
    - https://github.com/zhoou/vue-cli-multipage-bootstrap
    - 使用bootstrap

- 其他(供参考)

    - vue-mpa-cli 正则匹配的入口 可以嵌套 https://github.com/ecitlm/vue-mpa-cli
    - webpack4-vue-more-page-cli 有部署，webpack4没配好 https://github.com/libin1991/webpack4-vue-more-page-cli
    - 基于vue-cli的多页面应用脚手架
        - 中规中距的写法
        - https://github.com/JayZangwill/vue-multipage
        - https://github.com/breezefeng/vue-cli-multipage
    - Webapck+Vue多页面商城模板 
        - 结构太扁平了，有点揪心 应该还行
        - https://juejin.im/post/5a2257a2f265da432a7b6532
        - https://github.com/czero1995/webpack-store    
    - vue-multiple-page 看不懂，算了 https://github.com/Mrminfive/vue-multiple-page
    - vue-multiple-pages 
        - 定制了Vue-cli3的模板 配置少 @nice  https://github.com/Plortinus/vue-multiple-pages
        - https://github.com/wlx200510/vue-multiple-pages-cli    
    - webpack-multipages-template https://github.com/Fi2zz/webpack-multipages-template 单页多页皆可 @deprecated
    - vue-cli-multi-page https://github.com/chen1218chen/vue-cli-multi-page @deprecated
    - A vue template for multipage project @deprecated https://github.com/brandonxiang/mpa


# React的多页面基础

- create-react-app修改为多页面支持 https://juejin.im/post/5afcd2bd51882542c832f155
- 前端人人 基于react的多页面 @NICE https://www.jianshu.com/u/d6102adf76ac

# React的MPA脚手架

- 多页面解决方案 @deprecated <https://github.com/MeCKodo/react-multipage> 