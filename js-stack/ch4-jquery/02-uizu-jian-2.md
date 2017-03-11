#### **导航**
* 导航处的下拉菜单
	* [zoom](https://zoom.us/)
    


```

本来就应该默认设置为鼠标滑过显示。
要勾引别人点击就先让人少点击几次。

实现思路：CSS覆盖一下

.nav > li:hover .dropdown-menu {display: block;}


```



![](http://img.blog.csdn.net/20160624142445478)

---------------


#### **效果**
* 悬停时
	* [haobtc](https://haobtc.com/)


```


别人可能在做选择，例如----“买不买”
而有些人可能真有选择犹豫症，这时候，你就推他一把。。


悬停在这个卡片上，卡片会往上弹起来。

实现思路：纯纯CSS的动画？？
但做出来效果很简单粗暴，没有示例网站那么流畅。

body {
background-color: #F5F5F5;
}

img {
box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
margin-top:40px;
}

img:hover {
box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.1);
-moz-transform: scale(1.1, 1.1);
-o-transform: scale(1.1, 1.1);
-webkit-transform: scale(1.1, 1.1);
-moz-transform: translate(0px, -6px);
-o-transform: translate(0px, -6px);
-webkit-transform: translate(0px, -6px);
/*transition: transform 0.2s linear 0s; */
transition: 0.15s ease-in-out;
}

```



![](http://img.blog.csdn.net/20160624145302114)

-----------------

* 导航处的普通标签双杠响应，而按钮要有被按得凹陷的感觉
	* [photoshoot](https://photoshoot.io/)
	

![](http://img.blog.csdn.net/20160624150523029)
![](http://img.blog.csdn.net/20160624150558076)


----------------------


* 翻牌介绍
	* [zarget](http://zarget.com/)


![](http://img.blog.csdn.net/20160624151017937)


------------------------


* 点亮灰暗的图标
	* [bootcdn](http://www.bootcdn.cn/) 

![](http://img.blog.csdn.net/20160624151525285)


----------------


* 页面缩减
	* [scala](http://www.scala-lang.org/) 


```

可能一条消息很长，就让它只显示部分。

```



![](http://img.blog.csdn.net/20160624151746033)


-------------------


**（7）等待动画与加载动画**
跟进度条和加载圈一样，觉得鸡肋，但读过一点心理学就会知道这个炒鸡重要。。

![这里写图片描述](http://img.blog.csdn.net/20160624152030917)

http://truthlabs.com/


![这里写图片描述](http://img.blog.csdn.net/20160624152117988)

顶部加载条显示网页的加载进度。
https://ingworld.ing.com/en/2015-1Q
实现思路：


----------


**（8）用于局部变换的标签页**

![这里写图片描述](http://img.blog.csdn.net/20160624152302108)

这里变了搜索方式
http://www.51jingying.com/

实现思路：

![这里写图片描述](http://img.blog.csdn.net/20160624152340562)

超级赞
http://www.shanghai.gov.cn/

实现思路：


----------


**（9）变形的导航**

![这里写图片描述](http://img.blog.csdn.net/20160624152458692)

![这里写图片描述](http://img.blog.csdn.net/20160624152509423)

http://www.mahindra.com/

实现思路:


----------


**（10）双向的导航**

![这里写图片描述](http://img.blog.csdn.net/20160624152637269)

http://echarts.baidu.com/examples.html

实现思路：


----------


**（11）巨幕导航**

![这里写图片描述](http://img.blog.csdn.net/20160624152733021)

http://www.desk.com/
https://www.daocloud.io/
http://www.oneapm.com/

实现思路：


----------


**（12）斑马条和卡片式的布局**

![这里写图片描述](http://img.blog.csdn.net/20160624152857803)

http://destinesia.io/

实现思路：

![这里写图片描述](http://img.blog.csdn.net/20160624152937022)

http://www.ghostchina.com/
http://www.yuehetong.com/
http://micourse.net/

实现思路：


----------


**（13）斑马条里的滚屏**

![这里写图片描述](http://img.blog.csdn.net/20160624153124710)

https://wakatime.com/

实现思路：


----------


**（14）数字跳动**

![这里写图片描述](http://img.blog.csdn.net/20160624153323805)

https://haobtc.com/

实现思路：


----------


**（15）用于定位的标签**
这张页面做的比较长，导航处的标签选项只是用于定位。

![这里写图片描述](http://img.blog.csdn.net/20160624153506874)

https://swite.com/en/
实现思路：


----------


**（16）到目前为止最喜欢的一个网站**

![这里写图片描述](http://img.blog.csdn.net/20160624153645587)
https://zoom.us/
实现思路：


----------


**（17）三种喜欢的分页方式**

![这里写图片描述](http://img.blog.csdn.net/20160624154003214)
有大小两种箭头的分页
http://wenda.ghostchina.com/

实现思路：

![这里写图片描述](http://img.blog.csdn.net/20160624154018542)
做长点，把当前页放在正中间
http://www.howzhi.com/channel/photography?page=20

实现思路：

![这里写图片描述](http://img.blog.csdn.net/20160624154027476)
做成滚屏，反正用户也不在乎到底是第几页
http://www.agoda.com/city/hong-kong-hk.html

实现思路：


----------


**（18）右下角组件（返回顶部+咨询+本地目录）**

![这里写图片描述](http://img.blog.csdn.net/20160624154208699)

https://elementor.com/
实现思路：


----------


**（20）局部视频**

![这里写图片描述](http://img.blog.csdn.net/20160624154346497)
局限在这个手机里的视频播放，点击手机视频暂停，
再次点击接着播放视频，总之不喜欢突然跳出一个框来的感觉。
http://www.ottoradio.com/

实现思路：


----------


**（21）页脚动画**

![这里写图片描述](http://img.blog.csdn.net/20160624154431215)
http://www.ottoradio.com/

实现思路：


----------


**（22）超大的东西能引起人的冲动。**

![这里写图片描述](http://img.blog.csdn.net/20160624154641219)

页面中央的大搜索框和注册框
https://botlist.co/

实现思路：

![这里写图片描述](http://img.blog.csdn.net/20160624154656266)
还有大播放按钮，可以引起冲动
https://asciinema.org/

实现思路：


----------


**（23）宣传的话用打字效果**

![这里写图片描述](http://img.blog.csdn.net/20160624154959099)

https://www.wpcom.cn/
实现思路：


----------


**（24）视频背景**

![这里写图片描述](http://img.blog.csdn.net/20160624155047365)
https://wiffinity.com/
http://www.diobox.com/#

实现思路：


----------


**（25）长图背景**

![这里写图片描述](http://img.blog.csdn.net/20160624155146593)
http://www.desk.com/

实现思路：


----------


**（26）分支日记**

![这里写图片描述](http://img.blog.csdn.net/20160624155217312)
http://www.sydjs.com/meetups

实现思路:


----------


**（27）围观吃瓜的群众**

![这里写图片描述](http://img.blog.csdn.net/20160624155304657)
http://www.oneapm.com/
实现思路：


----------


**（28）传送带 + 滚屏**

![这里写图片描述](http://img.blog.csdn.net/20160624155403048)
http://www.desk.com/
实现思路：


----------


#### **菜单**
* 侧边缩放的菜单
	* [barackobama](https://connect.barackobama.com/#)
    * [togetherjs](https://togetherjs.com/)


![这里写图片描述](http://img.blog.csdn.net/20160624155626143)

![这里写图片描述](http://img.blog.csdn.net/20160624155637847)

-------------------------

#### **页脚区**
* [admaster](http://www.admaster.com.cn/)


![这里写图片描述](http://img.blog.csdn.net/20160624155612482)
