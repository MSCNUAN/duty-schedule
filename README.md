# 🏠 居委会排班表 · 纯净开源版

一个适合居委会、社区、办公室值班场景使用的单文件 HTML 排班工具。

本仓库版本为 **纯净开源版**：

- 不内置真实人员信息
- 不内置真实电话、地址、请假记录
- 不内置飞书 / 钉钉 Webhook
- 不内置 Cloudflare Worker 口令
- 默认不创建示例人员，首次使用需要自行添加或导入

## ✨ 功能特点

- 👥 人员管理：添加、编辑、停用、删除人员
- 🧠 WPS / Office / Excel 排班顺序学习
- ✨ 自动排班：支持预览后确认应用
- 📅 节假日 / 调休 API 导入
- 🩺 请假记录与冲突提示
- ⚠️ 一键修复请假 / 停用人员冲突
- 📥 WPS / Office / CSV 导入排班
- 📤 CSV / JSON 导出备份
- 🖨️ 多种打印模板
- 🔔 飞书 / 钉钉推送，支持 Cloudflare Worker 中转
- 📜 操作日志

## 🚀 使用方法

直接下载或克隆仓库后，双击打开：

```text
index.html
```

推荐浏览器：

- Microsoft Edge
- Google Chrome
- Chromium
- Firefox
- 360 极速浏览器

## 📦 发布到 GitHub Pages

1. 新建 GitHub 仓库
2. 上传 `index.html` 和 `README.md`
3. 进入仓库 `Settings`
4. 找到 `Pages`
5. Source 选择 `Deploy from a branch`
6. Branch 选择 `main`，目录选择 `/root`
7. 保存后等待部署完成

访问地址通常类似：

```text
https://你的用户名.github.io/仓库名/
```

## ☁️ 发布到 Cloudflare Pages

也可以把本项目上传到 Cloudflare Pages。

建议把 `index.html` 作为静态首页文件。

## 🔔 飞书 / 钉钉推送说明

前端页面不建议直接填写飞书 / 钉钉真实 Webhook。

推荐使用 Cloudflare Worker 中转：

```text
排班表 HTML → Cloudflare Worker → 飞书 / 钉钉机器人
```

仓库中的 `cloudflare_worker_push_card_v2_1.js` 是 Worker 示例代码。

需要在 Cloudflare Worker 中配置 Secret：

```text
PUSH_TOKEN
FEISHU_WEBHOOK
DINGTALK_WEBHOOK
```

只使用飞书时，可以只配置：

```text
PUSH_TOKEN
FEISHU_WEBHOOK
```

只使用钉钉时，可以只配置：

```text
PUSH_TOKEN
DINGTALK_WEBHOOK
```

## ⚠️ 数据安全提醒

本工具为单文件本地版，数据默认保存在浏览器本地 `localStorage` 中。

可能导致数据丢失的情况：

- 清理浏览器缓存
- 更换浏览器
- 更换电脑
- 使用无痕模式
- 手动重置数据

正式使用前后建议导出 JSON 备份。

## 🔒 隐私提醒

如果你要发布到公开仓库，请不要把以下内容写进 HTML 源码：

- 真实人员姓名
- 真实联系电话
- 真实地址
- 请假记录
- 真实值班安排
- PUSH_TOKEN
- 飞书 / 钉钉 Webhook

本纯净版已经清空这些内容，适合作为公开发布模板。

## 🧪 测试版声明

目前仍为测试版，有 bug 在所难免。正式使用初期建议搭配原排班表一起使用，以免数据丢失造成不便。

## 🙋 作者

@暖暖
