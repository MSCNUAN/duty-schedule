# 居委会排班表 · 正式飞书版 V2.6.0

<p align="center">
  <img src="assets/居委会排班表功能总览 .png" width="100%">
</p>


<p align="center">
  <strong>单文件离线使用 · WPS/Office 顺序学习 · 自动排班 · 数据健康检查 · 飞书卡片推送</strong>
</p>

<p align="center">
  <img alt="HTML" src="https://img.shields.io/badge/HTML-单文件-orange?style=flat-square">
  <img alt="Offline" src="https://img.shields.io/badge/Offline-本地可用-brightgreen?style=flat-square">
  <img alt="Feishu" src="https://img.shields.io/badge/Feishu-卡片推送-blue?style=flat-square">
  <img alt="WPS Office" src="https://img.shields.io/badge/WPS%2FOffice-表格导入-purple?style=flat-square">
</p>

<p align="center">
  <img src="assets/%E9%A6%96%E9%A1%B5%E6%80%BB%E8%A7%88.png" alt="居委会排班表首页总览" width="100%">
</p>

## 项目介绍

**居委会排班表** 是一个面向社区、居委会、物业、值班小组等场景的轻量级排班工具。

它的核心目标是：**不用安装复杂系统，不依赖数据库，打开 `index.html` 就能完成日常值班排班、导入导出、请假管理、节假日调休、统计检查和飞书推送。**

适合这些使用场景：

- 社区居委会每日/每月值班排班
- 工作日晚班、周末白班、节假日值班安排
- 从 WPS / Office / Excel 历史表格中导入并学习轮转顺序
- 排班完成后导出 CSV、JSON 或打印张贴版
- 通过飞书 Webhook 推送排班提醒或变更通知

---

## 功能亮点

| 功能 | 说明 |
|---|---|
| ✅ 单文件运行 | 直接打开 `index.html` 即可使用，不需要数据库和后端服务 |
| ✅ 人员管理 | 支持添加、编辑、启用/停用、删除值班人员 |
| ✅ 自动排班 | 支持按学习顺序、班次类型、请假情况自动生成排班 |
| ✅ 表格导入 | 支持 CSV/TXT、WPS/Office/Excel 复制粘贴导入 |
| ✅ 顺序学习 | 可从历史排班表中学习常用轮转顺序 |
| ✅ 节假日/调休 | 支持节假日值班、调休补班、假日对照 |
| ✅ 请假记录 | 自动识别请假冲突，避免错误排班 |
| ✅ 数据健康检查 | 检查空缺、冲突、公平性和异常数据 |
| ✅ 值班统计 | 统计每个人不同类型班次和加权分 |
| ✅ 打印模板 | 支持普通打印、归档版、隐私张贴版等 |
| ✅ 飞书推送 | 支持飞书卡片样式推送排班变更 |
| ✅ JSON 备份 | 可完整备份和恢复人员、排班、配置数据 |

---

## 快速开始

### 1. 下载项目

将本仓库下载到本地后，找到项目里的：

```text
index.html
```

双击打开即可使用。

<p align="center">
  <img src="assets/%E6%89%93%E5%BC%80%20index.html.png" alt="打开 index.html 演示" width="100%">
</p>

### 2. 编辑社区基础信息

首次使用建议先点击左侧社区信息区域的 **编辑信息**，填写社区名称、联系电话、办公地址、书记、社区民警、负责小区等内容。

<p align="center">
  <img src="assets/%E7%BC%96%E8%BE%91%E4%BF%A1%E6%81%AF.png" alt="编辑社区信息" width="100%">
</p>

### 3. 添加值班人员

可以手动逐个添加，也可以使用批量添加。

建议填写：

- 姓名
- 职务
- 负责小区
- 联系电话

<p align="center">
  <img src="assets/%E4%BA%BA%E5%91%98%E7%AE%A1%E7%90%86.jpg" alt="人员管理界面" width="100%">
</p>

<p align="center">
  <img src="assets/%E6%B7%BB%E5%8A%A0%E5%80%BC%E7%8F%AD%E4%BA%BA%E5%91%98.png" alt="添加值班人员" width="100%">
</p>

---

## 推荐使用流程

建议按照下面顺序使用：

```text
填写社区信息
    ↓
添加 / 导入值班人员
    ↓
导入历史排班表，让系统学习轮转顺序
    ↓
维护节假日、调休和请假记录
    ↓
自动生成本月或未来多月排班
    ↓
运行数据健康检查
    ↓
查看值班统计
    ↓
导出备份 / 打印 / 飞书推送
```

---

## 节假日与调休管理

系统可以区分普通工作日、周末、节假日、调休补班等情况。

适合处理：

- 法定节假日值班
- 周末白班
- 调休补班晚班
- 手动添加特殊日期
- 导入或对照节假日数据

<p align="center">
  <img src="assets/%E8%8A%82%E5%81%87%E6%97%A5%E8%B0%83%E4%BC%91.jpg" alt="节假日调休管理" width="100%">
</p>

<p align="center">
  <img src="assets/%E8%8A%82%E5%81%87%E6%97%A5%E8%B0%83%E4%BC%912.jpg" alt="节假日调休补充设置" width="100%">
</p>

---

## 请假记录与冲突处理

请假记录用于提前标记人员不可排班的日期范围。自动排班和数据健康检查会结合请假信息，帮助发现或规避冲突。

适合处理：

- 单日请假
- 连续多日请假
- 排班后临时请假
- 自动识别请假冲突
- 后续换班和修复冲突

<p align="center">
  <img src="assets/%E8%AF%B7%E5%81%87%E8%AE%B0%E5%BD%95.jpg" alt="请假记录与冲突处理" width="100%">
</p>

---

## 导入排班数据

导入功能支持多种方式：

- 选择 JSON 备份文件恢复
- 选择 CSV / TXT 文件导入
- 从 WPS / Office / Excel 复制表格后粘贴
- 通过历史排班数据自动学习人员轮转顺序

导入前系统会先展示预检结果，确认无误后才写入当前数据。

推荐表格列：

```text
日期、星期、日期类型、班次、值班人员、时间、备注
```

<p align="center">
  <img src="assets/%E5%AF%BC%E5%85%A5%E5%89%8D%E9%A2%84%E8%A7%88.jpg" alt="导入前预览" width="100%">
</p>

---

## 自动排班

点击顶部 **自动排班** 后，可以根据已有人员、请假记录、节假日调休、历史学习顺序生成排班。

适合：

- 自动生成当月排班
- 自动生成未来多月排班
- 尽量避开请假人员
- 按不同班次类型分配人员
- 根据统计结果尽量保持公平

<p align="center">
  <img src="assets/%E8%87%AA%E5%8A%A8%E6%8E%92%E7%8F%AD%E5%BC%B9%E7%AA%97.png" alt="自动排班弹窗" width="100%">
</p>

生成前可以先查看预览，确认后再写入正式排班。

<p align="center">
  <img src="assets/%E8%87%AA%E5%8A%A8%E6%8E%92%E7%8F%AD%E9%A2%84%E8%A7%88.jpg" alt="自动排班预览" width="100%">
</p>

---

## 数据健康检查

排班完成后，建议先运行一次 **数据健康检查**。

它可以帮助你检查：

- 是否有空排班
- 是否安排了已停用人员
- 是否与请假记录冲突
- 是否存在人员不存在的问题
- 是否存在明显不均衡的排班情况

<p align="center">
  <img src="assets/%E6%95%B0%E6%8D%AE%E5%81%A5%E5%BA%B7%E6%A3%80%E6%9F%A5.jpg" alt="数据健康检查界面" width="100%">
</p>

<p align="center">
  <img src="assets/%E6%95%B0%E6%8D%AE%E5%81%A5%E5%BA%B7%E6%A3%80%E6%9F%A5.png" alt="数据健康检查入口" width="100%">
</p>

<p align="center">
  <img src="assets/%E6%95%B0%E6%8D%AE%E5%81%A5%E5%BA%B7%E6%A3%80%E6%9F%A5%E7%BB%93%E6%9E%9C.jpg" alt="数据健康检查结果" width="100%">
</p>

---

## 值班统计

值班统计可以查看每个人的排班次数和不同班次占比，适合用来判断排班是否公平。

可以重点关注：

- 工作日晚班次数
- 周末白班次数
- 节假日值班次数
- 调休补班晚班次数
- 总次数和加权分

<p align="center">
  <img src="assets/%E5%80%BC%E7%8F%AD%E7%BB%9F%E8%AE%A1.jpg" alt="值班统计界面" width="100%">
</p>

<p align="center">
  <img src="assets/%E5%80%BC%E7%8F%AD%E7%BB%9F%E8%AE%A1.png" alt="值班统计" width="100%">
</p>

<p align="center">
  <img src="assets/%E5%80%BC%E7%8F%AD%E7%BB%9F%E8%AE%A1%E8%A1%A8.jpg" alt="值班统计表" width="100%">
</p>

---

## 飞书推送

本项目支持飞书 Webhook 推送，并以飞书卡片形式展示排班信息。

适合用于：

- 排班变更提醒
- 请假调整提醒
- 换班提醒
- 今日 / 明日值班通知
- 群内同步排班结果

<p align="center">
  <img src="assets/%E9%A3%9E%E4%B9%A6%E6%8E%A8%E9%80%81%E8%AE%BE%E7%BD%AE.jpg" alt="飞书推送设置" width="100%">
</p>



## Cloudflare Worker 飞书推送中转配置

由于浏览器跨域限制，`index.html` 这种纯前端页面**不建议直接请求飞书 Webhook**。正确做法是让浏览器先请求 Cloudflare Worker，再由 Worker 在服务端转发到飞书机器人 Webhook。

这样做有三个好处：

- 解决浏览器直接请求飞书 Webhook 时可能出现的 CORS / `Failed to fetch` 问题
- 避免把真实飞书 Webhook 暴露在前端页面里
- 可以用 `PUSH_TOKEN` 做一层简单口令校验，防止接口被随便调用

推荐流程：

```text
居委会排班表 index.html
        ↓ POST
Cloudflare Worker 中转接口
        ↓ fetch
飞书群自定义机器人 Webhook
        ↓
飞书群收到排班卡片消息
```

本仓库已提供 Worker 脚本：

```text
cloudflare_worker_push_card_v2_1.js
```

源码地址：

```text
https://github.com/MSCNUAN/duty-schedule/blob/main/cloudflare_worker_push_card_v2_1.js
```

### 1. 准备飞书群机器人 Webhook

先在飞书群里添加一个自定义机器人：

1. 打开需要接收排班提醒的飞书群
2. 进入群设置
3. 找到 **群机器人 / Bot / 添加机器人**
4. 选择 **自定义机器人**
5. 设置机器人名称，例如：`居委会排班提醒`
6. 创建后复制 Webhook 地址

Webhook 地址一般类似：

```text
https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

> ⚠️ 注意：Webhook 等同于推送钥匙，不能公开发到 GitHub、博客、截图或群聊里。

如果飞书机器人开启了安全设置，建议优先使用「关键词」方式，关键词可以设置为：

```text
居委会排班表
```

如果你开启了「签名校验」，需要额外在 Worker 里实现签名逻辑；当前仓库提供的 `cloudflare_worker_push_card_v2_1.js` 默认更适合 Webhook 或关键词模式。

### 2. 创建 Cloudflare Worker

1. 登录 Cloudflare 控制台
2. 进入 **Workers & Pages**
3. 点击 **Create application / 创建应用**
4. 选择 **Worker** 或从模板创建一个简单 Worker
5. 名称可以填写：

```text
duty-schedule-push
```

6. 创建后进入 Worker 编辑页面
7. 删除默认示例代码
8. 粘贴仓库里的 `cloudflare_worker_push_card_v2_1.js` 完整代码
9. 点击 **Save and Deploy / 保存并部署**

部署完成后，你会得到一个 Worker 地址，例如：

```text
https://duty-schedule-push.你的账号.workers.dev
```

这个地址就是后面要填到居委会排班表里的「推送地址」。

### 3. 配置 Worker 环境变量

进入刚刚创建的 Worker，找到 **Settings / 设置 → Variables and Secrets / 变量和机密**，添加以下变量：

| 变量名 | 必填 | 示例 | 说明 |
|---|---|---|---|
| `FEISHU_WEBHOOK` | 必填 | `https://open.feishu.cn/open-apis/bot/v2/hook/xxxx` | 飞书群自定义机器人 Webhook |
| `PUSH_TOKEN` | 必填 | `nuan_duty_2026_xxx` | 推送口令，前端填写时必须一致 |
| `DINGTALK_WEBHOOK` | 可选 | `https://oapi.dingtalk.com/robot/send?...` | 钉钉机器人 Webhook，不用钉钉可以不填 |

建议 `PUSH_TOKEN` 不要太简单，可以使用类似下面这种格式：

```text
nuan_duty_2026_8f3Kp9xQ_please_change_me
```

保存变量后，建议重新部署一次 Worker，确保变量生效。

### 4. 测试 Worker 是否正常运行

先在浏览器打开你的 Worker 地址：

```text
https://你的-worker-地址.workers.dev
```

如果配置正常，页面会返回类似 JSON：

```json
{
  "ok": true,
  "message": "居委会排班表推送中转接口已运行，请使用 POST 请求推送消息。",
  "version": "2.1-card-fixed"
}
```

这一步只能说明 Worker 已经部署成功，还不能代表飞书一定能收到消息。

### 5. 用命令测试飞书推送

把下面命令里的两个地方替换掉：

- `https://你的-worker-地址.workers.dev`
- `你的_PUSH_TOKEN`

#### macOS / Linux / Git Bash

```bash
curl -X POST "https://你的-worker-地址.workers.dev" \
  -H "Content-Type: application/json" \
  -d '{
    "platform": "feishu",
    "token": "你的_PUSH_TOKEN",
    "messageType": "markdown",
    "title": "居委会排班表测试",
    "text": "**测试成功**\n\nCloudflare Worker 已成功连接飞书机器人。"
  }'
```

#### Windows PowerShell

```powershell
$body = @{
  platform = "feishu"
  token = "你的_PUSH_TOKEN"
  messageType = "markdown"
  title = "居委会排班表测试"
  text = "测试成功：Cloudflare Worker 已成功连接飞书机器人。"
} | ConvertTo-Json

Invoke-RestMethod `
  -Uri "https://你的-worker-地址.workers.dev" `
  -Method Post `
  -ContentType "application/json" `
  -Body $body
```

如果飞书群收到测试消息，说明中转接口已经打通。

### 6. 在居委会排班表里填写推送设置

打开 `index.html`，进入：

```text
更多功能 → 飞书推送
```

建议这样填写：

| 设置项 | 填写内容 |
|---|---|
| 推送地址 | Cloudflare Worker 地址，例如 `https://duty-schedule-push.xxx.workers.dev` |
| 推送平台 | `飞书` |
| 推送口令 | 你在 Worker 里设置的 `PUSH_TOKEN` |
| 推送格式 | 飞书卡片 / 卡片推送 |
| 自动通知 | 按需要开启人员变更、请假、换班等提醒 |

保存后点击测试推送。如果飞书群能收到卡片消息，就可以正式使用。

### 7. 常见报错与解决办法

| 问题 | 常见原因 | 解决办法 |
|---|---|---|
| 浏览器提示 `Failed to fetch` | Worker 地址填错、Worker 没部署成功、网络被拦截 | 先直接打开 Worker 地址，确认能看到 `ok: true` |
| 控制台提示 CORS 跨域错误 | 直接请求了飞书 Webhook，或 Worker 没返回 CORS 头 | 不要把飞书 Webhook 直接填进前端，必须填写 Cloudflare Worker 地址 |
| 返回 `403 推送口令错误` | 前端填写的 token 和 Worker 的 `PUSH_TOKEN` 不一致 | 重新复制 `PUSH_TOKEN`，注意不要多空格 |
| 返回 `500 Webhook 没有配置` | Worker 没添加 `FEISHU_WEBHOOK` 环境变量 | 到 Worker 设置里补上 `FEISHU_WEBHOOK` 并重新部署 |
| 返回 `502` | Worker 已请求飞书，但飞书机器人返回失败 | 检查 Webhook 是否正确、机器人是否被移除、安全关键词是否匹配 |
| 飞书群没有消息 | Webhook 失效、机器人安全设置拦截、群机器人被删除 | 重新创建飞书自定义机器人并更新 `FEISHU_WEBHOOK` |
| GET 打开正常，但 POST 失败 | 请求方式、JSON、Content-Type 不正确 | 使用上面的 curl / PowerShell 测试命令排查 |

### 8. 安全建议

- 不要把真实 `FEISHU_WEBHOOK` 写进 `index.html`
- 不要把真实 `FEISHU_WEBHOOK`、`PUSH_TOKEN` 提交到公开仓库
- 如果截图教程里出现 Webhook，请打码后再发布
- 如果发现 Webhook 泄露，立即在飞书群里删除旧机器人并重新创建
- 如果发现 `PUSH_TOKEN` 泄露，立即修改 Worker 环境变量里的 `PUSH_TOKEN`
- 如果你的 Worker 只给自己博客或固定页面使用，可以把 CORS 从 `*` 改成你的固定域名，提高安全性

默认脚本为了方便本地 `index.html` 和 GitHub Pages 使用，CORS 使用：

```js
"Access-Control-Allow-Origin": "*"
```

如果你只允许自己的页面调用，可以改成类似：

```js
"Access-Control-Allow-Origin": "https://你的域名.com"
```

### 9. 这套方案的核心原理

浏览器直接请求飞书 Webhook 时，可能会被浏览器跨域策略拦截；Cloudflare Worker 属于服务端运行环境，由 Worker 去请求飞书 Webhook 不受浏览器 CORS 限制。Worker 再把结果返回给浏览器，并带上允许跨域的响应头，就能让纯前端 `index.html` 安全地完成飞书推送。

简单理解就是：

```text
不要让浏览器直接找飞书
而是让浏览器找 Cloudflare Worker
再由 Worker 代替你去找飞书
```

---

---

## 打印与张贴

排班完成后，可以选择不同打印模板：

- 简洁打印版
- 标准打印版
- 归档打印版
- 隐私张贴版

隐私张贴版适合贴在公共区域，尽量减少不必要的个人信息暴露。

<p align="center">
  <img src="assets/%E6%89%93%E5%8D%B0%E6%A8%A1%E6%9D%BF%E9%80%89%E6%8B%A9.jpg" alt="打印模板选择界面" width="100%">
</p>

<p align="center">
  <img src="assets/%E6%89%93%E5%8D%B0%E6%A8%A1%E6%9D%BF%E9%80%89%E6%8B%A9.png" alt="打印模板选择" width="100%">
</p>

<p align="center">
  <img src="assets/%E9%9A%90%E7%A7%81%E5%BC%A0%E8%B4%B4%E7%89%88%E6%89%93%E5%8D%B0%E9%A2%84%E8%A7%88.jpg" alt="隐私张贴版打印预览" width="100%">
</p>

---

## 导出、备份与恢复

正式使用前，建议养成备份习惯。

支持导出：

- CSV：方便用 WPS / Office / Excel 打开
- JSON：完整备份人员、排班、节假日、请假、设置等数据
- 复制表格：可直接粘贴到 WPS / Office

<p align="center">
  <img src="assets/%E5%AF%BC%E5%87%BA%E5%A4%87%E4%BB%BD.jpg" alt="导出备份" width="100%">
</p>

<p align="center">
  <img src="assets/%E5%AF%BC%E5%87%BAJSON.png" alt="导出 JSON" width="100%">
</p>

恢复 JSON 备份前，系统会进行二次确认，避免误覆盖当前数据。

<p align="center">
  <img src="assets/JSON%20%E6%81%A2%E5%A4%8D%E7%A1%AE%E8%AE%A4.jpg" alt="JSON 恢复确认" width="100%">
</p>

---

## 数据安全提醒

本项目主要面向本地轻量使用，但排班表通常可能包含姓名、电话、地址、小区信息等内容。

请注意：

- 不要把真实人员信息直接提交到公开 GitHub 仓库
- 不要公开上传真实 JSON 备份
- 不要公开飞书 Webhook 地址
- 打印张贴时优先使用隐私张贴版
- 正式排班前建议保留原始 WPS / Office 文件作为备份
- 批量导入、自动排班、恢复 JSON 前建议先导出当前数据

---

## 常见问题

### Q1：这个项目需要服务器吗？

不需要。基础功能直接打开 `index.html` 即可使用。

### Q2：可以放到 GitHub Pages 吗？

可以。它是静态页面，放到 GitHub Pages、个人服务器、NAS、Cloudflare Pages 等静态托管环境都可以访问。

### Q3：数据保存在哪里？

默认保存在浏览器本地存储中。换浏览器、清理浏览器数据或换电脑后，原数据可能无法直接看到，所以建议定期导出 JSON 备份。

### Q4：为什么导入前要预览？

因为不同表格的列名、日期格式、人员姓名可能不一致。预览可以提前发现日期无法识别、人员不存在、列识别错误等问题。

### Q5：为什么要用 JSON 备份？

CSV 更适合查看和编辑，但 JSON 才适合完整恢复项目数据。正式使用建议同时保留 CSV 和 JSON。

### Q6：飞书推送失败怎么办？

请检查：

- Webhook 地址是否正确
- 飞书机器人是否仍然启用
- 网络是否能访问飞书接口
- 是否把 Webhook 误填成了其他平台地址
- 是否被飞书安全关键词或签名配置限制

---

## 版本更新

### V2.6.0 正式飞书版

- 推送强制使用飞书卡片
- 优化上线文案
- 优化推送设置窗口
- 优化飞书卡片样式
- 旧推送配置会自动迁移到飞书

### V2.5.14 修复增强版

- 修复无备注导入时误把班次写入备注
- 修复只填空白时跳过冲突排班
- 修复人员删除 / 停用后学习顺序残留
- 优化假日导入兼容性
- 优化复制 / 推送容错
- 新增数据引用清理

### V2.5.12 12 个月自动排班版

- 自动排班可选生成后续 12 个月
- 导入 2 个及以上历史排班表后可学习顺序
- 人员停用 / 删除后自动调整未来排班
- 新增旧版横向表自动转换入口

---

## 文件结构建议

```text
duty-schedule/
├── index.html
├── README.md
└── assets/
    ├── 首页总览.png
    ├── 打开 index.html.png
    ├── 编辑信息.png
    ├── 人员管理.jpg
    ├── 添加值班人员.png
    ├── 导入前预览.jpg
    ├── 自动排班弹窗.png
    ├── 自动排班预览.jpg
    ├── 请假记录.jpg
    ├── 数据健康检查.jpg
    ├── 数据健康检查.png
    ├── 值班统计.jpg
    ├── 值班统计.png
    ├── 飞书推送设置.jpg
    ├── 打印模板选择.jpg
    ├── 打印模板选择.png
    └── ...
```

---

## 截图清单

本 README 已使用以下截图：

| 截图 | 使用位置 |
|---|---|
| duty-schedule-feature-overview.png | README 顶部功能总览图 |
| 首页总览.png | 项目顶部展示 |
| 打开 index.html.png | 快速开始 |
| 编辑信息.png | 社区信息设置 |
| 人员管理.jpg | 人员管理 |
| 添加值班人员.png | 添加人员 |
| 节假日调休.jpg | 节假日与调休管理 |
| 节假日调休2.jpg | 节假日与调休管理 |
| 请假记录.jpg | 请假记录与冲突处理 |
| 导入前预览.jpg | 导入排班数据 |
| 自动排班弹窗.png | 自动排班 |
| 自动排班预览.jpg | 自动排班预览 |
| 数据健康检查.jpg | 数据健康检查 |
| 数据健康检查.png | 数据健康检查入口 |
| 数据健康检查结果.jpg | 检查结果 |
| 值班统计.jpg | 值班统计 |
| 值班统计.png | 值班统计入口/界面 |
| 值班统计表.jpg | 统计表 |
| 飞书推送设置.jpg | 飞书推送 |
| 打印模板选择.jpg | 打印模板 |
| 打印模板选择.png | 打印模板 |
| 隐私张贴版打印预览.jpg | 隐私张贴版 |
| 导出备份.jpg | 导出备份 |
| 导出JSON.png | 导出 JSON |
| JSON 恢复确认.jpg | 备份恢复确认 |

---

## 适合谁使用

- 社区居委会工作人员
- 物业值班安排人员
- 小型团队排班负责人
- 需要快速做月度值班表的人
- 想把 WPS / Excel 表格流程网页化的人

---

## 免责声明

本项目主要用于学习、办公辅助和排班效率提升。请在正式使用前自行核对排班结果，涉及人员信息、联系电话、社区地址、飞书 Webhook 等敏感内容时，请妥善保管并遵守相关隐私和数据安全要求。

---

## 作者

由 [MSCNUAN](https://github.com/MSCNUAN) 制作与维护。

如果这个项目对你有帮助，欢迎 Star ⭐ 支持一下。
