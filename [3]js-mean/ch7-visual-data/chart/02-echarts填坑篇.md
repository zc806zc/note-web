# echarts

# echarts3知识点与升级注意

- 有精简版等版本,注意加载需要
- 使用 Canvas 或者 SVG 渲染

  - 在另一些数据量较大或者有图表交互动画的场景中，目前的 SVG 渲染器的性能还比不过 Canvas 渲染器

```javascript
var chart = echarts.init(containerDom, null, {renderer: 'svg'});
```

- ECharts 3 开始不再强制使用 AMD 的方式按需引入，代码里也不再内置 AMD 加载器
- 在绘图前我们需要为 ECharts 准备一个具备高宽的 DOM 容器

```javascript
<div id="main" style="width: 600px;height:400px;"></div>

var myChart = echarts.init(document.getElementById('main')); // dom
var option = {
   title: {
       text: 'ECharts 入门示例'
   },
   tooltip: {},
   legend: {
       data:['销量']
   },
   xAxis: {
       data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
   },
   yAxis: {},
   series: [{
       name: '销量',
       type: 'bar',
       data: [5, 20, 36, 10, 10, 20]
   }]
};

myChart.setOption(option);
```

- 使用rollup | webpack构建

- 按需加载

```javascript
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
```

- 通过 visualMap 组件将数值的大小映射到明暗度

```javascript
visualMap: {
    // 不显示 visualMap 组件，只用于明暗度的映射
    show: false,
    // 映射的最小值为 80
    min: 80,
    // 映射的最大值为 600
    max: 600,
    inRange: {
        // 明暗度的范围是 0 到 1
        colorLightness: [0, 1]
    }
}
```

- 异步加载

```javascript
var myChart = echarts.init(document.getElementById('main'));
myChart.showLoading();

// 显示标题，图例和空的坐标轴
myChart.setOption({
    title: {
        text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: []
    }]
});

// 异步加载数据
$.get('data.json').done(function (data) {
    // 填入数据
    myChart.setOption({
        xAxis: {
            data: data.categories
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            data: data.data
        }]
    });
});
```

- 交互组件

  - 图例组件 legend
  - 标题组件 title
  - 视觉映射组件 visualMap
  - 数据区域缩放组件 dataZoom
  - 时间线组件 timeline

    - <http://www.echartsjs.com/gallery/editor.html?c=doc-example/bar-media-timeline>

- 移动端

- 视觉映射

- 事件行为

- 富文本标签

# echart3会超神吗
