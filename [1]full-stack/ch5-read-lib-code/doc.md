# 弹框

```javascript
// [号码比对]弹框
// ===============================
function numCompareBox(options) {
    var settings = {
        title: '号码比对',
    };
    this.settings = $.extend(settings, options);
    this.body = $('.num_compare_dialog'); // 弹框内容所在div
    this.init();
    return this;
}

var numCompareBoxExtend = {
    // 初始化
    init: function () {
        // 默认打开弹框
        this.showDialog();

        // 数据初始化

        // 初始化绑定事件
        this.bindEvent();
    },

    /**
     * 事件绑定
     * =========================
     */
    // 显示弹框
    showDialog: function () {
        var body = this.body,
            title = this.settings.title;
        this.body.show();
        var $this = this;

        this.dialog = $.dialog({
            title: title,
            content: body,
            // zIndex: 700, // 弹框上弹框，这一行注释
            init: function () {
                var wrap = this.DOM.wrap;
                wrap.css({ opacity: "0" }).animate({ opacity: "1" }, 500);
            },
            ok: function () {

            },
            close: function () {
                // 重置函数
                $this.reset();
            },
            esc: false,
            lock: true,
            min: false,
            max: false
        });
    },

    // 监听事件绑定
    bindEvent: function () {
        var $this = this;

    },

    // 弹框隐藏/表单重置
    reset: function () {
        // 弹框重置并隐藏
        this.body.appendTo($('#sms_push')).hide(); // 页面所在父容器

        // 表单重置

    },

    /**
     * 数据交互
     * ===========================
     */

};
$.extend(numCompareBox.prototype, numCompareBoxExtend);
```
