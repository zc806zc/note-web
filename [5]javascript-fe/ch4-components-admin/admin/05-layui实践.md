# Layui

- 优点

  - layer等组件
  - 组件差不多能闭环，但不够强可以找jquery生态替换
  - 社区比较活跃
- CDN
    - https://layui.hcwl520.com.cn/

# layuiAdmin

- 

# 使用前要考虑的不足 | 发现的一些BUG

- 表格和树不够强
    - 表格行内编辑还不支持填充数据与动态更新
- 表格不完全支持resize, f12以后分页会消失(估计已解决)
- 弹框不支持滚动条，目前提供的参数是 是否屏蔽浏览器滚动条
- 表格组件数据格式封装过于死板
- 自成一家的模块化系统有点尴尬
- 模板渲染引擎也有点尴尬
- 校验规则变来变去的...
- 表格行内编辑在IE浏览器的窗口切换时,onblur的时候不能相应时间 -> 暂时处理 编辑框自行生成然后监听

# 自己的一些坚持

- 不用iframe
- 复杂表头也用js渲染 官方的栗子是html + js，这样视图和渲染分尸很不喜欢

# 开发细节 | 开发优化

- 年度精华 http://fly.layui.com/jie/30227/
- LayUI实际开发过程的细节点总结 http://fly.layui.com/jie/24673/

# 入坑问题

- 为什么表单不显示 -> 依赖于form组件
- 动态追加的表单元素不生效 -> form.render
- 页面一打开就执行layer.open/alert/msg时，为何有时大有时小 -> 放入 layer.ready

# 一些操作

- 弹框回车关闭

```js
layer.open({
  title: '回车关闭测试'
  ,content: '我是内容'
  ,btn: ['确认','关闭']
  ,success: function(layero, index){
    this.enterEsc = function(event){
      if(event.keyCode === 13){
        layer.close(index);
        return false; //阻止系统默认回车事件
      }
    };
    $(document).on('keydown', this.enterEsc);	//监听键盘事件，关闭层
  }
  ,end: function(){
    $(document).off('keydown', this.enterEsc);	//解除键盘关闭事件
  }
});
```

# 第三方组件

- layui 封装第三方组件 http://fly.layui.com/jie/5080/

```js
(function (window, factory) {
    if (typeof exports === 'object') {
        // 支持 CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // 支持 AMD
        define(factory);
    } else if (window.layui && layui.define) {
        // layui加载
        layui.define(function (exports) {
          exports('fullPage', factory());
        });
    } else {
        window.eventUtil = factory();
    }
})(this, function () {
    // 模块源代码
    //module ...
});
```

- 加载第三方jQuery插件
    - 直接用
    - Layui完美加载第三方jQuery插件的正确姿势 http://fly.layui.com/jie/11259/

```js
layui.config({base: 'js/'}).extend({
    // 默认寻找base也就是js/index.js模块导入
    jquery_cookie: 'extends/jquery.cookie' 
}).use('index');

layui.define(['jquery', 'jquery_cookie'], function (exports) {
    var $ = layui.jquery;  

    // 可能需要导入多个扩展插件
    $ = layui.jquery_cookie($);

    // 尝试使用jquery.cookie.js
    $.cookie('name', 'limanman');

    alert($.cookie('name'));

    // 作为入口无需注册模块,所以直接null
    exports('index', null);
});
```

- table
    - 基于 layui 的 treeGrid 插件
        - http://fly.layui.com/jie/23618/
        - https://gitee.com/lrd110/tree_table_treegrid_based_on_layui/blob/master/web/design/lay/modules/treeGrid.js
    - 实现layui的树形表格treeTable，对layui数据表格进行扩展
        - layui树形表格treeTable http://fly.layui.com/jie/30625/
        - https://gitee.com/whvse/treetable-lay

- select 
    - layui拓展之“下拉多选功能” 
        - http://fly.layui.com/jie/17065/
        - https://gitee.com/layuicms/XiaLaDuoXuan/blob/master/layui/lay/modules/form.js
    - 基于layui的无限级联选择器
        - http://fly.layui.com/jie/30820/
        - https://github.com/hsiangleev/layuiExtend
- dropdown 
    - 扩展 layui 增加类似 bootstrap下拉菜单组件 http://fly.layui.com/jie/20494/
- autocomplete
    - 扩展 layui 的 autocomplete 插件 http://fly.layui.com/jie/24072/

- 省市区三级联动 

# 二次开发项目 | 模板

- 案例 http://fly.layui.com/case/2018/
- 关于前端文件组织(模块化)

  - <https://github.com/layui/fly>
  - <https://github.com/BrotherMa/layuiCMS>
  - <https://gitee.com/xmmxjy/layuiAdmin>
  - ...
- jqadmin <https://gitee.com/jqcool/jqadmin>
- 一个轻量，简约，包含丰富模块化前端框架 ，帮您快速构建网站  https://gitee.com/bambi008/Simple

---


# 写弹框

```javascript
/*------------------------------------------------*/
/* 审核通过弹框
/*------------------------------------------------*/
var layerCheckPassed = {

    // 弹框选项
    options: {
        mode: null, // 弹框类型
        title: '审核通过确认',
        layerIndex: null,
        $tmplId: '#tmpl_layer_check_passed',
        $layerId: '#layer_check_passed',
        tableIndex: null,
        $tableId: '#table_check_passed',

        // 填报ID
        fillInId: null
    },

    // 接口常量
    url: {
        listVerifyHistory: '/quote/getVerifyHistory', // 获取审核记录
    },


    // 入口
    ready: function (options) {
        // 覆盖传参配置
        this.options = $.extend(this.options, options);

        // 事件初始化
        this.bindEvent();
    },

    // 绑定初始化事件
    bindEvent: function () {

        // 显示弹框
        this.showLayer();
    },

    // 显示弹框
    showLayer: function () {
        var that = this;

        var title = that.options.title,
            $tmplId = that.options.$tmplId,
            tmpl = $($tmplId).html();

        that.options.layerIndex = layer.open({
            type: 1,
            title: title,
            shadeClose: true,
            maxmin: false,
            content: tmpl,
            area: ['750px', '450px'],
            success: function () {

                // 初始化表格
                that.updateTable();

                // 关闭
                that.bindCancel();
            }
        });
    },


    // 关闭
    bindCancel: function () {
        var that = this;

        $(that.options.$layerId).find('.js-layer-cancel').on('click', function () {
            layer.close(that.options.layerIndex);
        });
    },

    // 更新表格
    updateTable: function () {
        var that = this;

        // 表格查询参数
        var cols = [],
            $tableId = that.options.$tableId,
            url = that.url['listVerifyHistory'],
            param = {
                fillinId: that.options.fillinId
            };

        // 初始化表格头
        cols = [
            [
                {field: 'apply_user', title: '申请人', width: 150},
                {field: 'review_status_view', title: '审核状态', width: 100},
                {field: 'review_comment', title: '审核意见', width: 150},
            ]
        ];

        // 表格渲染
        that.tableIndex = table.render({
            elem: $tableId,
            url: url,
            where: param,
            cols: cols,
            height: 330,
            skin: 'row',
            even: true,
            page: {
                groups: 8
            },
            limit: 10,   // 每页默认显示数量
            limits: [10, 50, 100]
        });
    }

};
```

# layer写弹框

- HTML

```html
<script id="tmpl_report_time" type="text/html">

    <div class="layui-form _layer-report-time" lay-filter="form-report-time">

        <div class="layui-form-item">
            <label class="layui-form-label">地区</label>
            <div class="layui-form-mid layui-word-aux"> {{ d.username }} </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">当月开始上报日</label>
            <div class="layui-input-block">
                <input class="layui-input"
                       type="number"
                       value="{{ d.score }}"
                       min="1"
                       max="31"
                       name="report_date_begin"
                       lay-verify="number"
                       lay-vertype="tips"
                       autocomplete="off">
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">次月截止上报日</label>
            <div class="layui-input-block">
                <input class="layui-input"
                       type="number"
                       value="{{ d.logins }}"
                       min="1"
                       max="31"
                       name="report_date_end"
                       lay-verify="number"
                       lay-vertype="tips"
                       autocomplete="off">
            </div>
        </div>

        <!-- 按钮区 -->
        <div class="layui-form-item">
            <div class="layui-input-block btn-group clearfix">
                <button type="button" class="layui-btn layui-btn-primary fr js-btn-cancel">取消</button>
                <button class="layui-btn layui-btn-default fr js-btn-submit" lay-submit=""
                        lay-filter="form-report-time">保存
                </button>
            </div>
        </div>
    </div>

</script>
```

- JS

```javascript
/**
 * 上报时间编辑弹框
 * ===================
 */
function layerReportTime(options) {
    // 配置信息(不指定就默认)
    var settings = {
        mode: 'edit',   // edit 编辑
        title: '上报时间',
        tmplId: null,   // 渲染弹框内容的模板ID
        data: null,      // 数据

        index: null,    // 弹框索引
        body: null     // 弹框内容
    };
    this.settings = $.extend(settings, options); // 配置信息覆盖

    this.ready(); // 指定入口函数
    return this;
}

var layerReportTimeExtend = {

    // 接口
    url: {},

    // 弹框
    layerIndex: null, // 用于关闭

    // 入口
    ready: function () {
        this.showLayer(); // 打开弹框
        this.bindEvent();
    },


    // 绑定初始化事件
    bindEvent: function () {

    },

    // 弹框显示
    showLayer: function () {
        var that = this;
        var settings = that.settings,
            title = settings.title,
            tmplId = settings.tmplId,
            data = settings.data,
            content = that.getLayerContent(tmplId, data);

        layer.open({
            type: 1,
            title: title,
            shadeClose: true,
            maxmin: false,
            content: content,
            success: function (layero, index) {
                that.markLayer.call(that, layero, index);  // 标记弹框索引
                that.bindCancel.call(that, layero, index); // 取消关闭
                that.bindSubmit.call(that, layero, index); // 提交

                form.render(null, 'form-report-time'); // 表单重载
            }
        });

    },

    // 标记弹框
    markLayer: function (layero, index) {
        this.settings.body = layero;
        this.settings.index = index;
    },

    // 获取弹框内容
    getLayerContent: function (tmplId, data) {
        var content = document.getElementById(tmplId).innerHTML;

        // 有数据则进行渲染再输出
        if (data) {
            laytpl(content).render(data, function (html) {
                content = html;
            });
        }

        return content;
    },

    // 数据渲染弹框内容
    setLayerContent: function (tmplId, data) {
        var content = document.getElementById(tmplId).innerHTML;

        // 有数据则进行渲染
        if (data) {
            var a  = laytpl(content).render(data, function (html) {
                // $this.layerBodyMain.find('.compute-box').html(html).show();
            });
            debugger
        }
    },

    // 提交
    bindSubmit: function (layero, index) {
        var that = this;

        form.on('submit(form-report-time)', function (data) {
            var param = data.field; // 查询所需的参数

            param.areaId = that.settings.data.id;

            layer.alert(JSON.stringify(param));

            // $.ajax({
            //     type: "post",
            //     url: $this.url.addArea,
            //     data: obj,
            //     success: function (res) {
            //         if (res.code === 0) {
            //             // $this.reloadTable();
            //
            //             layer.msg(res.msg,{time: 1200});
            //             layer.close(index); // 关闭弹框
            //
            //         } else{
            //             layer.alert(res.msg);
            //         }
            //     }
            // });
        });
    },

    // 弹框关闭
    bindCancel: function (layero, index) {
        var that = this;
        var btnCancel = layero.find('.js-btn-cancel');

        btnCancel.on('click', function () {
            layer.close(index);
        });
    }
};
$.extend(layerReportTime.prototype, layerReportTimeExtend); // 扩展弹框方法
```
