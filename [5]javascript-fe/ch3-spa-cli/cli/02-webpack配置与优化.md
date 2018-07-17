# webpack源码分析

- https://github.com/lihongxun945/diving-into-webpack/blob/master/6-process-pipe-line.md

# webpack优化

- webpack 应用编译优化之路 https://juejin.im/post/59dc57f2f265da431d3ba2ef
- 参考
    - webpack-study https://github.com/qq20004604/webpack-study
    - 静态站点 https://github.com/vhtml/webpack-MultiPage-static
    - https://github.com/ruanyf/css-modules-demos
    - https://github.com/css-modules/webpack-demo
    - https://www.jianshu.com/p/63eacd66eb50du
    - https://github.com/rt-zhangxuefei/vue-project-multipages-template

- happypack 
    - https://github.com/amireh/happypack
    - https://juejin.im/post/5a922e776fb9a06337575031

- 优化

    - NICE webpack打包优化探索 https://mp.weixin.qq.com/s/SzD22kTnYYfQShQwRaAGWA
        - https://github.com/zhuanzhuanfe
        - https://github.com/zhuanzhuanfe/zz-webpack-vue
        - https://github.com/zhuanzhuanfe/zz-webpack-react
        
    - 使用 webpack 优化资源 https://qiutc.me/post/resource-optimization-webpack.html
    - 优化Webpack构建性能的几点建议 https://www.cnblogs.com/powertoolsteam/p/Webpack.html
    - 借助webpack对项目进行分析优化 https://segmentfault.com/a/1190000014369413
        - https://segmentfault.com/u/athon
        - http://callmedadaxin.github.io/
    - webpack优化不完全指南 https://juejin.im/post/5a49fb696fb9a0451e402718
    - webpack打包优化（VUE Project）讲ddl优化配置 https://juejin.im/post/5a8797c15188257a836c385d
    - 晚晴幽草轩
        - 速度篇 https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/
        - 体积篇 https://jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/
    - https://juejin.im/post/5a869044f265da4e9c632f94
    - https://github.com/DDFE/DDFE-blog/issues/23

- 再一波优化(lazy boy)
  - Webpack + Vue，部署时减少包体积的几种方法 https://juejin.im/post/5abba68cf265da239c7b6bdc
    - 减少不必要的库依赖(CDN)
    - 懒加载
  -  webpack打包之后的文件过大的解决方法 https://juejin.im/post/5a9d17446fb9a028d374e733
    - 剥离css文件，单独打包 

```javascript
// 懒加载
// import Article from '@/components/Article'
const Article = () => import('@/components/Article') // 利用promise
```

# webpack4

- webpack4-用之初体验，一起敲它十一遍 https://juejin.im/post/5adea0106fb9a07a9d6ff6de