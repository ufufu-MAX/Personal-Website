# 嵌入式个人作品集

轻量静态多页面作品集，无需数据库或 Node.js。`index.html` 可以直接用浏览器打开首页预览。

## 修改内容

- `index.html` 是首页；`projects.html`、`learning.html`、`about.html`、`contact.html` 分别是项目、学习历程、关于和联系页面。
- 编辑 HTML 页面更新项目介绍、视频和源码链接；修改 `style.css` 可以调整颜色和排版。
- 学习历程页面可以新增、筛选和删除记录。记录保存在当前浏览器的本地存储，不会上传到服务器，也不会在设备之间同步。

## 部署

将整个目录上传至 GitHub 仓库根目录，包括所有 HTML、CSS、JavaScript 文件和 `Dockerfile`、`nginx.conf`、`.dockerignore`。在支持从 GitHub 构建 Dockerfile 的平台导入仓库，使用 Dockerfile 构建，应用端口为 **3000**。

如果平台支持直接托管静态网站，也可以直接发布本目录，无需 Docker 或数据库。
