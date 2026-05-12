# 🏠 居委会排班表 Duty Schedule

> 专为社区 / 居委会值班场景打造的轻量化排班工具。  
> 支持自动排班、历史排班顺序学习、节假日 / 调休管理、请假冲突检测、导出备份、打印归档、飞书卡片推送等功能。

<p align="center">
  <img src="./assets/readme-advantages.png" alt="居委会排班表核心优点" width="100%">
</p>

<p align="center">
  <a href="https://github.com/MSCNUAN/duty-schedule"><img src="https://img.shields.io/badge/GitHub-duty--schedule-blue?logo=github" alt="GitHub"></a>
  <img src="https://img.shields.io/badge/Version-V2.6.0-brightgreen" alt="Version">
  <img src="https://img.shields.io/badge/Frontend-HTML%20%2B%20CSS%20%2B%20JS-orange" alt="Frontend">
  <img src="https://img.shields.io/badge/Storage-localStorage-purple" alt="Storage">
  <img src="https://img.shields.io/badge/Deploy-Static%20Site-success" alt="Deploy">
</p>

---

## 📌 项目地址

GitHub 仓库：

```text
https://github.com/MSCNUAN/duty-schedule
```

---

## ✨ 项目简介

**居委会排班表** 是一个适合社区、居委会、小型单位、办公室值班场景使用的纯前端排班工具。

它最大的特点是：

- 不需要数据库
- 不需要后端服务
- 不需要复杂部署
- 一个 HTML 文件即可运行
- 可本地离线使用
- 可部署到 GitHub Pages / Cloudflare Pages / Vercel / NAS / Nginx

相比普通 Excel / WPS 表格，它更适合长期维护排班，因为它内置了人员管理、节假日识别、请假记录、冲突检测、自动排班、打印归档和飞书推送等功能。

---

## ✅ 核心优点

| 功能 | 说明 |
|---|---|
| 🧩 单文件运行 | 纯 HTML / CSS / JS，打开即可使用 |
| 📅 日历视图 | 按月展示排班，比普通表格更直观 |
| 👥 人员管理 | 支持姓名、职务、负责小区、联系电话、启用 / 停用 |
| ✨ 自动排班 | 可按历史顺序轮转，快速生成整月排班 |
| 🧠 顺序学习 | 支持从 WPS / Office 历史排班表中学习排班顺序 |
| 🎌 节假日 / 调休 | 支持法定假日、周末、调休补班等场景 |
| 🩺 请假冲突检测 | 自动发现请假人员、停用人员仍被排班的问题 |
| 📤 导出备份 | 支持 JSON 备份，方便迁移和防止数据丢失 |
| 🖨️ 打印归档 | 支持打印月度排班表，适合纸质张贴和留档 |
| 🔔 飞书推送 | 支持飞书机器人卡片提醒 |
| 🌙 深色模式 | 支持桌面端、移动端查看，夜间更护眼 |
| 🛠️ 可定制 | 可根据实际居委会排班规则继续修改和扩展 |

---

## ⚠️ 使用前重要提醒

### 1. 前几个月建议优先搭配原排班表使用

本工具支持自动排班和历史顺序学习，但刚开始使用时，系统还没有完全掌握你们原来的排班习惯。

因此建议：

- 前 1～3 个月优先搭配原来的 WPS / Excel 排班表一起使用
- 先导入历史排班表，让系统学习原有轮转顺序
- 自动生成后，务必人工核对一遍
- 确认无误后，再正式打印、发布或推送

这样可以减少以下问题：

- 人员轮转顺序不符合原习惯
- 节假日值班分配不符合实际安排
- 个别人因请假、调岗、停用导致排班不准确
- 初期历史数据不足，自动排班参考不够充分

> 简单理解：  
> **前几个月先把它当成“辅助排班工具”，等数据和顺序稳定后，再逐步作为主力排班工具使用。**

---

### 2. 导入排班表时，请另存为 UTF-8 CSV 格式

如果你要从 WPS / Excel 导入历史排班表，建议先另存为：

```text
CSV UTF-8（逗号分隔）.csv
```

不要直接上传普通 `.xlsx`、`.xls` 或编码不确定的 CSV，否则可能出现：

- 中文乱码
- 日期识别失败
- 姓名识别失败
- 班次列读取异常
- 导入后没有任何显示

推荐表头格式：

```csv
日期,姓名,班次,备注
2026-05-01,马超,节假日值班,劳动节假期
2026-05-02,高阳,周末白班,
2026-05-03,吴杰,周末白班,
2026-05-06,郑楠,工作日晚班,
```

#### WPS / Excel 导出建议

1. 打开原来的排班表
2. 整理出需要导入的列，例如：日期、姓名、班次、备注
3. 点击“文件”
4. 选择“另存为”
5. 文件类型选择：`CSV UTF-8（逗号分隔）.csv`
6. 保存后再导入本工具

---

### 3. 本工具默认是纯本地存储

本项目默认使用浏览器的 `localStorage` 保存数据。

优点：

- 不需要服务器
- 不需要数据库
- 打开即可使用
- 本地运行也可以保存数据

需要注意：

- 换浏览器后数据不会自动同步
- 清理浏览器缓存可能导致数据丢失
- 换电脑后需要手动导入备份
- 多人同时编辑不适合直接使用本地模式

正式使用时强烈建议：

```text
每次批量导入、自动排班、人员变动后，都导出一份 JSON 备份。
```

---

### 4. 飞书推送需要通过 Cloudflare Worker 中转

由于本项目是纯前端 / 纯本地工具，直接在浏览器中请求飞书机器人 Webhook 时，可能遇到：

- 浏览器跨域限制
- Webhook 暴露在前端代码里
- 本地文件协议无法稳定请求接口
- 公网 HTTPS 调用不稳定

因此如果你需要使用飞书推送，建议使用：

```text
居委会排班表 → Cloudflare Worker → 飞书机器人 Webhook
```

这样可以：

- 解决浏览器跨域问题
- 隐藏真实飞书 Webhook
- 统一管理推送入口
- 后续方便加鉴权、日志、限流

下面有完整的 Cloudflare Worker 教程。

---

### 5. 此排班表可以按实际需求定制

不同居委会的排班规则可能不一样，本工具可以继续定制，例如：

- 修改班次类型
- 修改打印模板
- 修改飞书卡片样式
- 修改人员字段
- 增加值班统计
- 增加多人协作
- 增加云端数据库
- 增加企业微信 / 微信推送
- 增加年度统计表
- 增加权限管理

如果你们的排班规则比较特殊，可以基于当前版本继续二次开发。

---

## 🖼️ 项目预览图

README 中使用的展示图位于：

```text
assets/readme-advantages.png
```

Markdown 引用方式：

```markdown
![居委会排班表核心优点](./assets/readme-advantages.png)
```

---

## 📁 推荐目录结构

```text
 duty-schedule/
├── index.html
├── README.md
├── LICENSE
├── assets/
│   └── readme-advantages.png
├── docs/
│   └── import-template.csv
└── cloudflare-worker/
    └── feishu-proxy.js
```

---

## 🚀 快速开始

### 方式一：本地直接使用

适合办公室电脑、内网电脑、临时排班。

1. 下载项目
2. 找到 `index.html`
3. 双击打开
4. 添加人员
5. 导入旧排班表或手动排班
6. 自动排班
7. 核对无误后导出备份或打印

---

### 方式二：部署到 GitHub Pages

适合公开展示或轻量在线访问。

#### 1. 克隆项目

```bash
git clone https://github.com/MSCNUAN/duty-schedule.git
cd duty-schedule
```

#### 2. 确认首页文件

确保项目根目录存在：

```text
index.html
```

#### 3. 打开 GitHub Pages

进入仓库：

```text
Settings → Pages
```

推荐设置：

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

保存后等待部署完成。

访问地址通常类似：

```text
https://你的用户名.github.io/duty-schedule/
```

---

### 方式三：部署到 Cloudflare Pages

适合有域名、想使用 Cloudflare 托管静态页面的场景。

#### 1. 进入 Cloudflare

打开：

```text
Workers & Pages → Create application → Pages
```

#### 2. 连接 GitHub 仓库

选择：

```text
MSCNUAN/duty-schedule
```

#### 3. 构建设置

如果项目根目录就是 `index.html`，可以使用：

```text
Framework preset: None
Build command: 留空
Build output directory: /
```

如果 Cloudflare Pages 不接受 `/`，可以把文件放到 `public` 目录：

```text
public/index.html
```

然后设置：

```text
Build output directory: public
```

#### 4. 部署完成

部署成功后，Cloudflare 会生成一个访问地址，也可以绑定自己的域名。

---

### 方式四：部署到 NAS / Nginx

适合飞牛 OS、1Panel、群晖、Unraid、OpenWrt、小主机等环境。

只需要把文件放到 Nginx 网站目录即可。

例如：

```text
/usr/share/nginx/html/index.html
```

然后访问：

```text
http://你的NAS局域网IP
```

如果使用 1Panel，可以：

1. 新建一个静态网站
2. 上传 `index.html`
3. 上传 `assets/readme-advantages.png`
4. 绑定域名或内网访问
5. 开启 HTTPS

---

## 🔔 Cloudflare Worker 飞书推送教程

### 一、为什么需要 Worker？

本项目是纯前端项目，飞书推送如果直接写在前端，会有两个问题：

1. 飞书 Webhook 容易暴露
2. 浏览器可能出现跨域请求失败

所以建议把 Cloudflare Worker 作为中转层。

调用链路如下：

```text
居委会排班表前端
        ↓
Cloudflare Worker 推送接口
        ↓
飞书机器人 Webhook
        ↓
飞书群消息卡片
```

---

### 二、创建飞书机器人

1. 打开飞书群
2. 点击群设置
3. 添加机器人
4. 选择自定义机器人
5. 复制 Webhook 地址

Webhook 地址大概长这样：

```text
https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

⚠️ 不要把真实 Webhook 上传到 GitHub。

---

### 三、创建 Cloudflare Worker

进入 Cloudflare 后台：

```text
Workers & Pages → Create application → Worker → Create Worker
```

然后把 `cloudflare-worker/feishu-proxy.js` 的内容复制进去。

仓库中已提供示例文件：

```text
cloudflare-worker/feishu-proxy.js
```

核心代码如下：

```js
export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Push-Token",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return Response.json(
        { ok: false, message: "Only POST is allowed" },
        { status: 405, headers: corsHeaders }
      );
    }

    if (!env.FEISHU_WEBHOOK) {
      return Response.json(
        { ok: false, message: "Missing FEISHU_WEBHOOK" },
        { status: 500, headers: corsHeaders }
      );
    }

    if (env.PUSH_TOKEN) {
      const url = new URL(request.url);
      const auth = request.headers.get("Authorization") || "";
      const headerToken = request.headers.get("X-Push-Token") || "";
      const queryToken = url.searchParams.get("token") || "";
      const bearerToken = auth.replace(/^Bearer\s+/i, "");
      const passed = [bearerToken, headerToken, queryToken].includes(env.PUSH_TOKEN);

      if (!passed) {
        return Response.json(
          { ok: false, message: "Unauthorized" },
          { status: 401, headers: corsHeaders }
        );
      }
    }

    const bodyText = await request.text();

    const feishuResp = await fetch(env.FEISHU_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: bodyText,
    });

    const resultText = await feishuResp.text();

    return new Response(resultText, {
      status: feishuResp.status,
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  },
};
```

---

### 四、配置环境变量

在 Worker 设置中找到：

```text
Settings → Variables
```

添加变量：

| 变量名 | 说明 |
|---|---|
| `FEISHU_WEBHOOK` | 飞书机器人 Webhook 完整地址 |
| `PUSH_TOKEN` | 自定义推送令牌，建议设置 |

示例：

```text
FEISHU_WEBHOOK = https://open.feishu.cn/open-apis/bot/v2/hook/xxxxxx
PUSH_TOKEN = 自己设置一个复杂密码
```

---

### 五、获取 Worker 推送地址

部署后会得到类似地址：

```text
https://duty-schedule-feishu-proxy.xxxxxx.workers.dev
```

如果设置了 `PUSH_TOKEN`，前端推送地址可以填写：

```text
https://duty-schedule-feishu-proxy.xxxxxx.workers.dev?token=你的PUSH_TOKEN
```

---

### 六、在排班表中填写推送地址

打开排班表：

```text
更多功能 → 飞书推送
```

填写：

```text
推送接口地址：Cloudflare Worker 地址
推送平台：飞书
推送格式：飞书卡片
```

然后点击测试推送。

如果飞书群能收到消息，说明配置成功。

---

## 📥 导入排班表说明

### 推荐 CSV 格式

```csv
日期,姓名,班次,备注
2026-05-01,马超,节假日值班,劳动节假期
2026-05-02,高阳,周末白班,
2026-05-03,吴杰,周末白班,
2026-05-06,郑楠,工作日晚班,
```

### 支持识别的班次示例

| 班次写法 | 说明 |
|---|---|
| 工作日晚班 | 普通工作日晚班 |
| 周末白班 | 周六 / 周日白班 |
| 节假日值班 | 法定节假日值班 |
| 调休补班晚班 | 调休上班日晚班 |

### 导入注意事项

- 日期建议使用 `YYYY-MM-DD`
- 姓名要和人员管理中的姓名一致
- CSV 文件请使用 UTF-8 编码
- 不建议直接导入格式复杂的合并单元格表格
- 导入前建议先导出 JSON 备份
- 导入后建议人工核对本月排班

---

## 🧭 推荐使用流程

### 第一次使用

1. 打开排班表
2. 编辑居委会信息
3. 添加人员
4. 导入历史排班表
5. 学习排班顺序
6. 设置节假日 / 调休
7. 添加请假记录
8. 生成当月排班
9. 对照原排班表人工核对
10. 导出 JSON 备份
11. 打印或飞书推送

### 每月排班

1. 先导出当前 JSON 备份
2. 检查人员是否有变动
3. 检查请假记录
4. 检查节假日 / 调休
5. 自动生成当月排班
6. 人工核对
7. 打印归档
8. 飞书推送通知
9. 再导出一份最终备份

---

## 🛠️ 可定制方向

本排班表可以继续定制，适配不同单位的真实工作流。

常见定制方向：

- 自定义居委会名称和 Logo
- 自定义班次名称
- 自定义节假日规则
- 自定义人员字段
- 自定义飞书卡片内容
- 自定义打印版样式
- 增加年度统计报表
- 增加排班公平性统计
- 增加多人协作功能
- 增加云端同步
- 增加权限登录
- 增加数据导出 Excel / PDF

---

## 💾 备份建议

建议养成以下习惯：

| 场景 | 建议 |
|---|---|
| 第一次配置完成 | 立即导出 JSON 备份 |
| 导入旧排班表前 | 先备份 |
| 自动排班前 | 先备份 |
| 自动排班后 | 再备份 |
| 人员变动后 | 再备份 |
| 每月最终发布前 | 备份最终版 |
| 每月归档 | 备份并保存到固定文件夹 |

推荐文件命名：

```text
居委会排班表备份-2026-05.json
居委会排班表备份-2026-06.json
```

---

## 🔐 安全与隐私提醒

如果仓库是公开仓库，请不要上传真实数据。

不要上传：

- 真实人员姓名
- 真实联系电话
- 真实办公地址
- 真实值班安排
- 飞书机器人 Webhook
- JSON 备份文件
- 内部 CSV 排班表

建议公开仓库只保留：

- `index.html`
- `README.md`
- 示例截图
- 示例 CSV
- Worker 示例代码
- License

---

## ❓ 常见问题

### Q1：为什么导入 CSV 后没有识别？

请检查：

- 是否是 UTF-8 CSV
- 日期是否是 `YYYY-MM-DD`
- 姓名是否已在人员管理中存在
- 表头是否包含日期、姓名、班次等字段
- 是否存在合并单元格或隐藏列

---

### Q2：为什么飞书推送失败？

请检查：

- Cloudflare Worker 是否部署成功
- `FEISHU_WEBHOOK` 是否填写正确
- `PUSH_TOKEN` 是否和前端填写一致
- 飞书机器人是否还在群里
- Worker 地址是否使用 HTTPS
- 浏览器控制台是否有跨域或 401 错误

---

### Q3：可以多人同时使用吗？

当前版本主要是纯本地工具，不建议多人同时编辑同一份数据。

如果需要多人协作，建议后续改成：

- 后端数据库版本
- 登录权限版本
- 云端同步版本
- 操作日志审计版本

---

### Q4：可以只在内网使用吗？

可以。

本工具本体可以完全在内网使用。  
但如果要使用飞书推送，则需要能访问 Cloudflare Worker 和飞书接口。

---

## 🗺️ 后续计划

- [ ] 值班次数统计
- [ ] 年度排班统计
- [ ] 一键导出 Excel
- [ ] 一键导出 PDF
- [ ] 请假冲突汇总
- [ ] 停用人员排班检测
- [ ] 自动备份提醒
- [ ] 企业微信机器人推送
- [ ] 多人协作版本
- [ ] 云端数据库版本
- [ ] 权限登录版本
- [ ] 手机端进一步优化

---

## 📄 开源协议

本项目使用 MIT License。

---

## 🙋 作者

作者：暖暖  
项目地址：`https://github.com/MSCNUAN/duty-schedule`

如果这个项目帮到了你，欢迎点一个 Star ⭐
