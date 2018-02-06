# Java WEB

- Java Web技术总结 <https://www.jianshu.com/p/539bdb7d6cfa>

# 接口的权限认证

- 拦截器 HandlerInterceptorAdapter

# 接口层应该实现如下目标

- 统一的响应体、请求体，规避Map、List作参数或者响应结果的方式
- 统一的错误信息
- 统一的请求数据校验
- 统一的接口异常捕获

# MySQL建表

- 按照字段的使用频率依次定义
- 可为空的字段要提供默认值；
- id + gmt_create + gmt_modified
- 索引和约束

  - 组合索引

# 线程池

- 线程池的大小

  - 根据Little定律（队列中任务的平均数量等于进入速率和平均停留时间的乘积）估算

# 常识与建议

- 别返回null值

```java
当一个方法返回Collection集合的时候，不要返回null，如果没有结果则返回空的集合（例如：Collections.emptyList();），这样该方法的客户就不需要判断null的逻辑。这就是Java开发中的特例模式的应用。
```
