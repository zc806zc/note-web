# MVVM

- 不好意思！耽误你的十分钟，让MVVM原理还给你 https://juejin.im/post/5abdd6f6f265da23793c4458

# 数据绑定

- 原生JS数据绑定 [https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==∣=2651227803&idx=1&sn=aa90993cf4711f99f6f8203cf2fb4e6b&chksm=bd495f1f8a3ed60972c9f8e66c8405265ec3b86c128ba44ede405872d758642d0c5286e60502&mpshare=1&scene=1&srcid=0224bSSD795JDR60ZynlFPfr#rd](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651227803&idx=1&sn=aa90993cf4711f99f6f8203cf2fb4e6b&chksm=bd495f1f8a3ed60972c9f8e66c8405265ec3b86c128ba44ede405872d758642d0c5286e60502&mpshare=1&scene=1&srcid=0224bSSD795JDR60ZynlFPfr#rd)

- way.js <https://github.com/gwendall/way.js>

  - 轻量的双向绑定

- jsblocks <https://github.com/astoilkov/jsblocks>

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="http://jsblocks.com/blocks/0.3.2/blocks.js"></script>
    <script>
      blocks.query({
        firstName: blocks.observable()
      });
    </script>
  </head>
  <body>
    Name:
    <input data-query="val(firstName)" placeholder="Enter your name here" />
    <hr />
    <h1>Hello {{firstName}}!</h1>
  </body>
</html>
```
