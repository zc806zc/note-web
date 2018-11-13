# README

- awesome-mpvue https://github.com/mpvue/awesome-mpvue 

# mpvue

- 美团点评
- <https://github.com/Meituan-Dianping/mpvue>

# mpvue项目

- 基于 mpvue 框架重写 weui https://github.com/KuangPF/mpvue-weui
- 基于mpvue的网易严选商城 @nice
  - https://github.com/heyushuo/mpvue-shop
  - https://github.com/heyushuo/mpvue-shop-node
- cnode社区 https://github.com/jaxQin/mpvue-cnode 
- IT之家 https://github.com/F-loat/ithome-lite 
- 微信小程序商城 https://github.com/yllg/mpvue-xbyjShop
- 聊天机器人 https://github.com/zz570557024/vue-mpvue-ChatRobot
- 没朋友外卖 https://github.com/WsmDyj/mpvue
- 仿网易云音乐 
  - https://github.com/lucaswww/my-project
  - mpvue微信小程序-仿网易云音乐 https://juejin.im/post/5b88a6f36fb9a019f1801b8d
- 仿滴滴出行 
  - 基于mpvue的仿滴滴出行小程序 https://juejin.im/post/5b3a1354e51d45559b6b658c
  - https://github.com/QinZhen001/didi  
- 简易商城小程序全栈开发(mpvue+koa+mongodb) 
  - @deprecated 未提供sql？？？
  - https://juejin.im/post/5b548ce8e51d45191d79f8a6 
  - https://github.com/Mosasa/wx-mpvue
  - onload与onshow的却别
  - mpvue不支持用object的形式传style

- 其他
  - 外卖 https://github.com/xiaotiandada/takeaway
  - 阅读器 https://github.com/joinnew/chage_way  
    
```html
<!-- “v-for嵌套”陷阱 -->
<swiper-item v-for="(items,index) in swiperList" :key="index">
    <!-- 内循环再加上另一个索引 -->
    <div v-for="(item,i) in items" class="swiper-info" :key="i" @click="choose" >
        <image :src="item.url"  class="swiper-image" :style="styleObject"/>
    </div>
</swiper-item>
```

# mpvue踩坑

- 第一个mpvue小程序开发完了，来总结下吧 https://juejin.im/post/5b67e9c6f265da0f955cf158
  - 在详情页onLoad的时候，将要在本页面展示的数据初始化并且进行新的赋值
  - created钩子函数不要调用，可能存在bug
  - onShow() 钩子函数里的js代码不只是刚进入页面时会执行，在息屏后再次点亮后也将会执行
  - 路由跳转在真机表现上的差异
  - 富文本支持 -> mpVue-wxParse

- mpvue“踩坑”指南 https://juejin.im/post/5b920f5e6fb9a05d0530800a
  - slot 嵌套子模板
  
```
别人的主页 -> 我的关注 -> 主页
```