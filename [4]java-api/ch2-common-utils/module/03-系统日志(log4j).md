# Log4j

- 教程 <http://www.yiibai.com/log4j/>
- Log4j,Log4j2,logback,slf4j日志学习 <http://blog.csdn.net/xudan1010/article/details/52890102>
- 日志级别 LEVEL

  - DEBUG 开发环境
  - INFO
  - WARN
  - ERROR 生产环境
  - all < debugger < info < warn < error < fatal < off

- 组件
  - Loggers 记录器(Level)
  - Appenders 输出源 -> 根据天数文件大小产生新文件
  - Layouts 布局

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="WARN">
    <appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <!-- 设置日志输出的格式 -->
            <PatternLayout pattern="[%d{HH:mm:ss:SSS}] [%p] - %l - %m%n"/>
        </Console>
        <RollingFile name="RollingFileInfo" fileName="D:/info.log"
                     filePattern="D:/$${date:yyyy-MM}/info-%d{yyyy-MM-dd}-%i.log">
            <Filters>
                <ThresholdFilter level="INFO"/>
            </Filters>
            <PatternLayout pattern="[%d{HH:mm:ss:SSS}] [%p] - %l - %m%n"/>
            <Policies>
                <TimeBasedTriggeringPolicy/>
                <SizeBasedTriggeringPolicy size="100 MB"/>
            </Policies>
        </RollingFile>
    </appenders>

    <loggers>
        <root level="all">
            <appender-ref ref="Console"/>
            <appender-ref ref="RollingFileInfo"/>
        </root>
    </loggers>

</Configuration>
```

# awk

- 日志分析和数据统计
- 教程 <https://coolshell.cn/articles/9070.html>

```java
awk -F '[:,]' '{s[$4] += $6; a[$4] += $8}END{for(i in s){print i, s[i], a[i]}}' OFS="\t" odsToolResBak

将一个json字符串组成的日志文件，按照冒号和分号切割，并按照第4列分组，分别求第6列和第8列的和，最后每行的结果直接用'\t'分割
```
