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

- 配置

```js
spring.jpa.show-sql=true

// 自动建表
spring.jpa.hibernate.ddl-auto=create

// 默认的数据库存储引擎选择的是 MyISAM
// -> InnoDB 
spring.jpa.database-platform=org.hibernate.dialect.MySQL5InnoDBDialect
```

- 联合主键

```java
新建一个单独的主键类

public class RoleUserId implements Serializable {
    private Long roleId;
    private Long userId;
}

@Entity
@IdClass(RoleUserId.class)
@Table(name = "AUTH_ROLE_USER")
public class RoleUserDO  {
    @Id
    private Long roleId;
    @Id
    private Long userId;
}

@Query("SELECT U FROM UserDO U ,RoleUserDO RU WHERE U.id = RU.userId AND RU.roleId = :roleId")
List<UserDO> findUsersByRole(@Param("roleId") Long roleId);
```

# 实践

- Spring Boot：MyBatis项目通过JPA实现自动创建数据表 https://www.jianshu.com/p/6378f2c0fe9c

```java
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl

testCompile("org.springframework.boot:spring-boot-starter-data-jpa")
compile 'org.hibernate.javax.persistence:hibernate-jpa-2.1-api:1.0.0.Final'
```
 
- 建议 

    - 使用jpa要放弃hibernate的关系映射部分，保持开发的简洁和灵活性