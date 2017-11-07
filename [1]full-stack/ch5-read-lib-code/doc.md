# 弹框

```javascript
// [号码比对]弹框
// ===============================
function numCompareBox(options) {
    var settings = {
        title: '号码比对',
        self: '',  // 弹框所在div
        parent: '' // 弹框父级div
    };
    this.settings = $.extend(settings, options);
    this.body = $(this.settings.self);
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
            // zIndex: 700, // 弹框上弹框，注释这一行
            init: function () {
                var wrap = this.DOM.wrap;
                wrap.css({ opacity: "0" }).animate({ opacity: "1" }, 500);
            },
            ok: false, // 不用原生
            cancel: false,
            close: function () {
                $this.reset(); // 重置
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

    // 提交按钮
    bindSubmitBtn: function () {
        var $this = this;
        this.body.find('.btn').off('click').on('click', function () {
            if ($this.checkForm()){
              alert('提交');
            }
        });
    },

    /**
     * 数据交互
     * ===========================
     */
    // 表单校验
    checkForm: function () {

        return true;
    },

    // 弹框隐藏/表单重置
    reset: function () {
       // 弹框重置并隐藏
       this.body.appendTo(this.settings.parent).hide();

       // 表单重置
    }

};
$.extend(numCompareBox.prototype, numCompareBoxExtend);

// 调用
$('.btn').off('click').on('click', function () {
    new numCompareBox({
        self: '.yyy',
        parent: '.xxx'
    });
});
```
