# 如何在HTML页面中插入截图

> 📸 **简单易懂的截图插入指南，无需HTML基础**

## 方案概述

我为您提供了一个非常简单的方案：
1. **准备截图文件** - 按照命名规范保存截图
2. **找到插入位置** - 在HTML文件中找到特定的标记
3. **复制粘贴代码** - 使用提供的模板代码
4. **调整参数** - 修改文件名和描述

---

## 第一步：准备截图文件

### 1.1 创建图片文件夹
在 `docs` 文件夹中创建 `images` 文件夹：
```
docs/
├── images/           ← 新建这个文件夹
│   ├── 01-实例初始化/
│   ├── 02-添加服务平台/
│   └── ...
├── index.html
├── 快速入门指南.html
└── ...
```

### 1.2 按章节分类保存截图
```
docs/images/
├── 01-实例初始化/
│   ├── 1-1-1-软件启动界面.png
│   ├── 1-2-1-实例管理界面.png
│   └── 1-2-2-添加实例对话框.png
├── 02-添加服务平台/
│   ├── 2-1-1-平台管理界面.png
│   ├── 2-2-1-Dify配置界面.png
│   └── 2-3-1-OpenAI配置界面.png
└── ...
```

---

## 第二步：找到插入位置

### 2.1 打开HTML文件
用记事本或任何文本编辑器打开HTML文件（如 `快速入门指南.html`）

### 2.2 查找插入标记
在文件中搜索以下标记（按Ctrl+F搜索）：
```html
<!-- 插入截图：描述 -->
```

例如，搜索：
```html
<!-- 插入截图：软件启动界面 -->
```

---

## 第三步：插入截图代码

### 3.1 基本截图模板
找到插入位置后，将以下代码粘贴到标记下方：

```html
<div class="screenshot-container mb-4">
    <img src="images/文件夹名/文件名.png" 
         alt="截图描述" 
         class="img-fluid border rounded shadow-sm">
    <p class="text-center text-muted mt-2 small">图：截图说明</p>
</div>
```

### 3.2 实际示例
例如，插入软件启动界面的截图：

```html
<div class="screenshot-container mb-4">
    <img src="images/01-实例初始化/1-1-1-软件启动界面.png" 
         alt="WXAUTO-MGT软件启动界面" 
         class="img-fluid border rounded shadow-sm">
    <p class="text-center text-muted mt-2 small">图：WXAUTO-MGT主界面首次启动状态</p>
</div>
```

### 3.3 需要修改的部分
只需要修改以下几个地方：
1. **文件路径**：`images/01-实例初始化/1-1-1-软件启动界面.png`
2. **alt描述**：`WXAUTO-MGT软件启动界面`
3. **图片说明**：`图：WXAUTO-MGT主界面首次启动状态`

---

## 第四步：不同尺寸的截图

### 4.1 小尺寸截图（适合按钮、对话框）
```html
<div class="screenshot-container mb-4 text-center">
    <img src="images/文件夹名/文件名.png" 
         alt="截图描述" 
         class="img-fluid border rounded shadow-sm"
         style="max-width: 500px;">
    <p class="text-muted mt-2 small">图：截图说明</p>
</div>
```

### 4.2 中等尺寸截图（适合配置界面）
```html
<div class="screenshot-container mb-4 text-center">
    <img src="images/文件夹名/文件名.png" 
         alt="截图描述" 
         class="img-fluid border rounded shadow-sm"
         style="max-width: 800px;">
    <p class="text-muted mt-2 small">图：截图说明</p>
</div>
```

### 4.3 全尺寸截图（适合主界面）
```html
<div class="screenshot-container mb-4">
    <img src="images/文件夹名/文件名.png" 
         alt="截图描述" 
         class="img-fluid border rounded shadow-sm">
    <p class="text-center text-muted mt-2 small">图：截图说明</p>
</div>
```

---

## 第五步：并排显示多张截图

### 5.1 两张截图并排
```html
<div class="row mb-4">
    <div class="col-md-6">
        <div class="screenshot-container">
            <img src="images/文件夹名/文件名1.png" 
                 alt="截图1描述" 
                 class="img-fluid border rounded shadow-sm">
            <p class="text-center text-muted mt-2 small">图：截图1说明</p>
        </div>
    </div>
    <div class="col-md-6">
        <div class="screenshot-container">
            <img src="images/文件夹名/文件名2.png" 
                 alt="截图2描述" 
                 class="img-fluid border rounded shadow-sm">
            <p class="text-center text-muted mt-2 small">图：截图2说明</p>
        </div>
    </div>
</div>
```

### 5.2 三张截图并排
```html
<div class="row mb-4">
    <div class="col-md-4">
        <div class="screenshot-container">
            <img src="images/文件夹名/文件名1.png" 
                 alt="截图1描述" 
                 class="img-fluid border rounded shadow-sm">
            <p class="text-center text-muted mt-2 small">图：截图1说明</p>
        </div>
    </div>
    <div class="col-md-4">
        <div class="screenshot-container">
            <img src="images/文件夹名/文件名2.png" 
                 alt="截图2描述" 
                 class="img-fluid border rounded shadow-sm">
            <p class="text-center text-muted mt-2 small">图：截图2说明</p>
        </div>
    </div>
    <div class="col-md-4">
        <div class="screenshot-container">
            <img src="images/文件夹名/文件名3.png" 
                 alt="截图3描述" 
                 class="img-fluid border rounded shadow-sm">
            <p class="text-center text-muted mt-2 small">图：截图3说明</p>
        </div>
    </div>
</div>
```

---

## 第六步：特殊效果截图

### 6.1 带标注的重要截图
```html
<div class="screenshot-container mb-4">
    <div class="alert alert-info">
        <i class="fas fa-info-circle me-2"></i>
        <strong>重要步骤：</strong>请仔细查看以下截图中的标注
    </div>
    <img src="images/文件夹名/文件名.png" 
         alt="截图描述" 
         class="img-fluid border rounded shadow-sm">
    <p class="text-center text-muted mt-2 small">图：截图说明</p>
</div>
```

### 6.2 可点击放大的截图
```html
<div class="screenshot-container mb-4 text-center">
    <a href="images/文件夹名/文件名.png" target="_blank">
        <img src="images/文件夹名/文件名.png" 
             alt="截图描述" 
             class="img-fluid border rounded shadow-sm"
             style="cursor: pointer;">
    </a>
    <p class="text-muted mt-2 small">图：截图说明（点击查看大图）</p>
</div>
```

---

## 快速操作步骤总结

### 步骤1：准备文件
1. 在 `docs` 文件夹中创建 `images` 文件夹
2. 按章节创建子文件夹
3. 将截图保存到对应文件夹

### 步骤2：找位置
1. 用记事本打开HTML文件
2. 搜索 `<!-- 插入截图：` 找到插入位置

### 步骤3：插入代码
1. 复制上面提供的模板代码
2. 粘贴到插入位置
3. 修改文件路径、描述和说明

### 步骤4：保存查看
1. 保存HTML文件
2. 用浏览器打开查看效果

---

## 常见问题解决

### Q1: 图片不显示怎么办？
**A1:** 检查以下几点：
- 文件路径是否正确（注意大小写）
- 图片文件是否存在
- 文件名是否包含中文或特殊字符

### Q2: 图片太大或太小怎么办？
**A2:** 修改 `style` 属性：
- 太大：添加 `style="max-width: 500px;"`
- 太小：删除 `style` 属性或增大数值

### Q3: 图片位置不对怎么办？
**A3:** 调整对齐方式：
- 居中：添加 `text-center` 类
- 左对齐：删除 `text-center` 类
- 右对齐：添加 `text-end` 类

---

## 示例文件

我已经在HTML文件中为您预留了插入位置，您只需要：
1. 按照命名规范保存截图
2. 找到对应的插入标记
3. 复制粘贴模板代码
4. 修改文件路径和描述

这样就能轻松地将截图插入到合适的位置了！
