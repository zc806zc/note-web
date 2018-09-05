# JPA

```java
public enum GenerationType {    
    TABLE,      // 使用一个特定的数据库表格来保存主键
    SEQUENCE,   // 根据底层数据库的序列来生成主键，条件是数据库支持序列。  
    IDENTITY,   // 主键由数据库自动生成（主要是自动增长型）   
    AUTO        // 主键由程序控制。
}
```
