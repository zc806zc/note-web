# README

- 组件划分会有重叠，按照目的来分类 => melt = model + effects + layout + toolbox
- 难分类的就是toolbox -> 业务工具类组件 

```js
// ant design的分类

// element的分类
Basic + Form + Data + Notice + Navigation + Others

// uikit 

// bulma
```

# Model 数据模型

- 按钮类

  - 基本按钮 Button
  - 带进度条的按钮
  - 关闭按钮 Close Button
  - 带下拉菜单的按钮 Drop

    - Drop (Position any element in relation to another element.)
    - Dropdown

- 表单类 Form

  - 文本标签 Label
  - 输入框 Input
    - Search
  - 下拉框 Select 
    - 级联选择器 Cascader
  - 文本域 Textarea
  - 单选 Radio
  - 多选 Checkbox
  - 滑动输入条 Range 
    - Slider有歧义，可能指的是轮播 
  - 上传 Upload
    - Placeholder (Create a placeholder space that can be used for uploading files via drag and drop.)
  - 标签 Tag | TagsInput
  - 选择器
    - DatePicker 
    - TimePicker 
    - Calendar
  - 提到@ mention
  - 评分 Rate 
  - 切换器 Switch
  - 穿梭框 Transfer 
  - ...

- 表格 Table

  - Table
  
- 列表 List

  - List
  - Description list

- 树状图 Tree
- Http请求工具 

  - 因为数据相关特意分到此类

# Effects 装饰动效

- 基本主题样式 Theme/Base

  - 重置/基本 Base(This component provides the default style for all HTML elements.)
  - 背景 
    - Background
    - Inverse(Inverse the style of any component for light or dark backgrounds.)
  - 打印 Print(Optimize your pages for legible and economic printing.)

- 阅读/文章元素 Article

  - 头像 Avator
  - 标题 Tile(Create layout boxes with different backgrounds that can be arranged seamlessly next to each other.)
  - 文章 Article
  - 链接 Link
  - 文本 Text
  - Heading
  - Section
  - Comment
  - 分割线 Divider 
  - Marker(Create a marker icon that can be displayed on top of images.)

- Card 卡片

  - 导航卡片
  - 名片
  - 价格卡片

- Icon/Font 图标字体

- Animation 动画

  - 切换 Toggle
  - 变换 Transition
  - 滚动时动画 Scrollspy
  - 视差 Parallax

    - Grid Parallax(Move single columns of a grid at different speeds while scrolling.)

# Layout 布局导航



- Overlay(Create an image overlay, which comes in different styles.)

- Layout 布局

  - Width Height 长宽 +  Margin Padding 边距 + Visibility 可见性
  - Position

    - Cover
    - Align

  - Container

  - Column

  - Flex | Grid

  - Sticky(Make elements remain at the top of the viewport, like a sticky navigation.)

  - Sortable
  - Darggable
  - Scroll

    - Scroll
  - Totop | BackTop 返回顶部 | Achor


- 导航 Nav

  - Navbar
    - Drawer抽屉
    - NavMenu
    - Slidenav
    - Thumbnav
  - Breadcrumb 面包屑
    - Dotnav | Iconnav
    - Subnav(Defines different styles for a sub navigation.)
  - Pagination 分页
  - Affix 固钉
  - Anchor 锚点
  - Steps 步骤条
  - Tab

    - Tab
    - Switcher
    - Accordion

  - Off-canvas (Create an off-canvas sidebar that slides in and out of the page, which is perfect for creating mobile navigations.)

- 进度

  - Badge
  - Progress
  - Step
  - Spinner | Spin
  - Timeline
  
- 面板 Panel(这是一个大类)

  - Ⅰ.弹框 Layer/Modal/Lightbox
    - 弹框
      - Alert | Confirm
    - 蒙层
    - 图片预览 Gallery
    - Popver | Tooltip
    - Notification

  - Ⅱ.轮播 Slider



# Toolbox 业务工具

- countdown 倒计时
- email
- 问卷调查
- ...