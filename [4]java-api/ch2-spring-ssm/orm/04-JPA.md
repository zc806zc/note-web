# JPA

- https://www.w3cschool.cn/java/jpa-entitymanager.html
- Spring Data JPA中常用的注解详解 https://www.jianshu.com/p/1b759ef26ff3

```java
public enum GenerationType {    
    TABLE,      // 使用一个特定的数据库表格来保存主键
    SEQUENCE,   // 根据底层数据库的序列来生成主键，条件是数据库支持序列。  
    IDENTITY,   // 主键由数据库自动生成（主要是自动增长型）   
    AUTO        // 主键由程序控制。
}

@Transient 
并非一个到数据库表的字段的映射,ORM框架将忽略该属性

@Temporal 时间日期类型转化
@Enumerated（"需要定义存入数据库的类型”)

@Embedded
@Embeddable

@ElementCollection
```
