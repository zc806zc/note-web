# Ant

- 构建工具
- XML构建文件

# Maven

- <https://juejin.im/post/5a4a5e2bf265da4322418d7f>

```java
Maven的主要好处是它的生命周期。虽然接连的多个项目生命周期相同，这是以灵活性为代价的
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
