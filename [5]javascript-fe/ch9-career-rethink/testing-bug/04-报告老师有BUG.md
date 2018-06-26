# 文件BUG

- 网上直接拷贝下来的可能有隐藏字符

# 组件BUG

- <http://www.w3help.org/zh-cn/kb/>

- line-hight的影响

- 既悬浮又点击

- 悬浮下拉菜单连续触发BUG

  - <https://www.youyong.top/article/11592663d6394>
  - filter(':not(:animated)')

```javascript
$("td").hover(
    function () {
        $(this).filter(':not(:animated)').slideDown(200);
    },
    function () {
        $(this).slideUp(200);
    }
);

$("#menu").hover(    
        function () {    
            $("#menu").stop(true).animate({ height: "500" }, 5000).animate({ width: "500px" }, 5000);    
        },    
        function () {    
            $("#menu").stop(true).animate({ height: "100" }, 5000).animate({ width: "100px" },5000);    
        }    
);
```

