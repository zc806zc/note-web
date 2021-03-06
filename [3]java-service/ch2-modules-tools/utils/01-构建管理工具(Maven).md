# Ant @deprecated

- 构建工具
- XML构建文件

# Maven

- <https://juejin.im/post/5a4a5e2bf265da4322418d7f>
- 搜索maven https://search.maven.org/

```java
Maven的主要好处是它的生命周期。虽然接连的多个项目生命周期相同，这是以灵活性为代价的
```

- 关键词

  - test 单元测试场景使用
  - provided 容器或者JDK已经提供该依赖，打包时不需要打包入war
  - compile

- 配置镜像
  - maven常用镜像仓库 https://blog.csdn.net/thebigdipperbdx/article/details/81261614

```xml
<mirror>
    <id>nexus-aliyun</id>
    <name>Nexus aliyun</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

# Gradle

- 安装 <http://www.yiibai.com/gradle/how-install-gradle-windows.html>
- 创建任务

  - 依赖

```java
task taskX << {
   println 'taskX'
}

taskX.dependsOn {
   tasks.findAll {
     task -> task.name.startsWith('lib')
   }
}
task lib1 << {
   println 'lib1'
}
task lib2 << {
   println 'lib2'
}
task notALib << {
   println 'notALib'
}

// 列出任务
gradle -q tasks --all
```

- 插件
- 多项目构建
- Maven部署

  - gradle init --type pom

- 创建Gradle Java Web应用程序并在Tomcat上运行

- 使用Gradle构建多模块项目

# Bazel

- https://github.com/bazelbuild/bazel

# Buck

- https://github.com/facebook/buck
- 简介 http://hao.jobbole.com/buck/
