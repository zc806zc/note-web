# README

- TKmybatis

  - mapper自动生成
  - mybatis-generator和TKmybatis的结合使用 <https://www.cnblogs.com/Jason-Xiang/p/6547152.html>

```xml
<dependency>
    <groupId>tk.mybatis</groupId>
    <artifactId>mapper-spring-boot-starter</artifactId>
    <version>2.0.3-beta1</version>
</dependency>

<dependency>
    <groupId>tk.mybatis</groupId>
    <artifactId>mapper</artifactId>
    <version>4.0.0</version>
</dependency>
```

- mybatis-generator-gui https://github.com/zouzg/mybatis-generator-gui

-  Mapper
    
    - 极其方便的使用Mybatis单表的增删改查 
    - https://gitee.com/free/Mapper


# 关于接口增删改查的增强

- tkmybatis的连缀语法
- 自定义封装


# 栗子

- LKG/heartwork https://github.com/LKG/heartwork

```java
// 处理分页请求
DynamicPageRequest.java 
PageRequest(pageNumber - 1, pagzSize, new Sort(direction,list))

// 动态拼接查询条件
DynamicSpecifications.java 
SearchFilter.java 

EQ("EQ", "等价于 SQL 中的="), NOTEQ("NOTEQ", "等价于 SQL 中的="), 
LIKE("LIKE", "等价于 SQL 中的like '%查询条件%' "), 
NOTLIKE("NOTLIKE", "等价于 SQL 中的not like '%查询条件%' "), 
LIKEP("LIKEP", "等价于 SQL 中的like '%查询条件' "), 
NOTLIKEP("NOTLIKEP", "等价于 SQL 中的 not like '%查询条件%' "), 
LIKES("LIKES", "等价于 SQL 中的 like '查询条件%' "),
NOTLIKES("NOTLIKES", "等价于 SQL 中的 not like '查询条件%' "),
GT("GT", "等价于 SQL 中的>"), 
LT("LT", "等价于 SQL 中的<"), 
GTE("GTE", "等价于 SQL 中的>="), 
LTE("LTE", "等价于 SQL 中的<="), 
ISNULL("null", "is null"), 
ISNOTNULL("null",	"is not null"), 
IN("in", "in"), 
NOTIN("notin", "not in");

使用CriteriaBuilder builder.add

OR || AND


final Collection<SearchFilter> filters = new HashSet<>();
filters.add(new SearchFilter("showInTree", SearchFilter.Operator.EQ, "1"));
filters.add(new SearchFilter("status", SearchFilter.Operator.EQ, CommonConst.Status.enabled));
Specification<CpmCategorys> spec = DynamicSpecifications.bySearchFilter(filters, CpmCategorys.class);

List<CpmCategorys> categorysList = cpmCategorysService.findAll(spec);
```