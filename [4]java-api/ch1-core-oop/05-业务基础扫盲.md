# 业务

- biz

```
biz是Business的缩写，实际上就是控制层（业务逻辑层）。

解释：控制层的主要作用就是协调model层和view层直接的调用和转换。
能够有效的避免请求直接进行数据库内容调用，而忽略了逻辑处理的部分。
实际上biz就起到了一个server服务的角色，很好的沟通了上层和下层直接的转换，
避免在model层进行业务处理（代码太混乱，不利于维护）。
```

# 工具

- 淘宝ip分析 

    - http://ip.taobao.com/index.html
    - http://ip.taobao.com/service/getIpInfo.php

![](/static/img/java/taobao_ip.png)
