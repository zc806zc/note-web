# Log4j

- 教程

  - <http://www.yiibai.com/log4j/>

- 日志级别

  - DEBUG 开发环境
  - INFO
  - WARN
  - ERROR 生产环境

# awk

- 日志分析和数据统计
- 教程
  - https://coolshell.cn/articles/9070.html

```java
awk -F '[:,]' '{s[$4] += $6; a[$4] += $8}END{for(i in s){print i, s[i], a[i]}}' OFS="\t" odsToolResBak

将一个json字符串组成的日志文件，按照冒号和分号切割，并按照第4列分组，分别求第6列和第8列的和，最后每行的结果直接用'\t'分割
```
