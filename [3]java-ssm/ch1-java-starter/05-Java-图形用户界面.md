# 图形绘制技术

# Swing

- 程序设计
- 事件处理
- 表格与树组件

# AWT

- 控件

  - UI元素
  - 布局
  - 行为

- 事件处理

  - 前台事件
  - 后台事件

- 适配器

  - 方便创建侦听器对象

- 布局

  - BorderLayout
  - CardLayout
  - FlowLayout
  - GridLayout
  - GridBagLayout

- 图形控件

  - Arc2D 二维弧
  - Ellipse2D
  - BasicStroke 一套基本的轮廓基本图形
  - ...

# JavaFX

- Java的下一代图形用户界面工具包

```java
创建和部署富客户端应用程序
快速构建丰富的跨平台应用程序
通过硬件加速图形支持现代GPU

3D图形功能
Canvas API

通过CSS自定义外观和样式
还可以在FXML脚本语言中描述UI的表示方面
JavaFX Scene Builder(可视布局工具) -> 可以通过拖放来设计UI

将Swing内容嵌入到应用程序中
```

- 安装配置

  - <http://www.yiibai.com/javafx/javafx_environment.html>
  - eclipse <http://www.yiibai.com/javafx/install-efxclipse-into-eclipse.html>
  - JavaFX Scene Builder <http://www.yiibai.com/javafx/install-javafx-scene-builder-into-eclipse.html>

- 快速入门 <http://www.yiibai.com/javafx/javafx-tutorial-for-beginners.html>

- 形状

  - 线条
  - 路径
  - 曲线
  - 椭圆
  - 文本
  - ...

```java
import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.paint.Color;
import javafx.scene.text.Text;
import javafx.stage.Stage;
// by w Ww .YI  iB A I .C  o M
public class Main extends Application {
    public static void main(String[] args) {
        Application.launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Drawing Text");
        Group root = new Group();
        Scene scene = new Scene(root, 300, 250, Color.WHITE);
        int x = 100;
        int y = 100;
        int red = 30;
        int green = 40;
        int blue = 50;

        Text text = new Text(x, y, "JavaFX 2.0");

        text.setFill(Color.rgb(red, green, blue, .99));
        text.setRotate(60);
        root.getChildren().add(text);


        primaryStage.setScene(scene);
        primaryStage.show();
    }
}
```

- 属性

  - 颜色
  - 渐变色
  - 绑定 <http://www.yiibai.com/javafx/javafx_binding.html>
  - 集合

- 布局

  - JavaFX FlowPane | BorderPane | GridPane
  - JavaFX HBox | VBOX
  - JavaFX ScrollPane布局
  - JavaFX TitledPane布局(具有标题的面板窗格)
  - JavaFX Accordion布局

```java
// HBox
布局类将JavaFX子节点放在水平行中。 新的子节点附加到右侧的末尾。默认情况下，HBox布局尊重子节点的首选宽度和高度

// VBox
布局将子节点堆叠在垂直列中。新添加的子节点被放置在上一个子节点的下面。默认情况下，VBox尊重子节点的首选宽度和高度。
```

- UI控件

  - 标签
  - 按钮
  - 单选 | 复选 | 切换
  - 选择框 | 输入框 | ...
  - 文件选择器 <http://www.yiibai.com/javafx/javafx_filechooser.html>
  - ...

```java
public class Main extends Application {
    public static void main(String[] args) {
        launch(args);
    }
    @Override
    public void start(final Stage primaryStage) {
        Group root = new Group();

        Button buttonLoad = new Button("Load");
        buttonLoad.setOnAction(new EventHandler<ActionEvent>(){
             @Override
            public void handle(ActionEvent arg0) {
                FileChooser fileChooser = new FileChooser();
                FileChooser.ExtensionFilter extFilter = new FileChooser.ExtensionFilter("TXT files (*.txt)", "*.txt"); // 扩展过滤器
                fileChooser.getExtensionFilters().add(extFilter);
                File file = fileChooser.showOpenDialog(primaryStage);
                System.out.println(file);
            }
        });
        VBox vBox = VBoxBuilder.create()
                .children(buttonLoad)
                .build();
        root.getChildren().add(vBox);
        primaryStage.setScene(new Scene(root, 500, 400));
        primaryStage.show();
    }

}
```

# 然而, 腾讯QQ使用的技术

- Windows客户端 -> C++ COM/ATL
- Q+ Web

  - 后端 C++ CGI (安全因素,为hold住开发难度很大)
  - 前端 javascript和flash

# JOGL

- <http://www.yiibai.com/jogl/>


# 快递打印系统

# 软件注册程序

# 决策分析程序