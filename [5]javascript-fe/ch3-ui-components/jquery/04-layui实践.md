# Layui

- 优点

  - layer弹框组件与表格组件
  - 几乎自成体系
  - 社区

- 缺陷与建议

  - 表格行内编辑还不支持填充数据与动态更新
  - 表格不完全支持resize, f12以后分页会消失(估计已解决)
  - 弹框不支持滚动条，目前提供的参数是 是否屏蔽浏览器滚动条
  - 表格组件数据格式封装过于死板
  - 自成一家的模块化系统有点尴尬
  - 模板渲染引擎也有点尴尬
  - 校验规则变来变去的...

- LayUI实际开发过程的细节点总结 http://fly.layui.com/jie/24673/

# 二次开发项目

- jqadmin <https://gitee.com/jqcool/jqadmin>


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
