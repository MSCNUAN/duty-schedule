export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (request.method === "GET") {
      return json({
        ok: true,
        message: "居委会排班表推送中转接口已运行，请使用 POST 请求推送消息。",
        version: "2.1-card-fixed",
      });
    }

    if (request.method !== "POST") {
      return json({ ok: false, message: "只允许 POST 请求" }, 405);
    }

    try {
      const body = await request.json();
      const platform = String(body.platform || "feishu").toLowerCase();
      const token = String(body.token || "").trim();
      const messageType = String(body.messageType || "text").toLowerCase();
      const title = String(body.title || "居委会排班表");
      const text = String(body.text || "").trim();

      if (!env.PUSH_TOKEN || token !== env.PUSH_TOKEN) {
        return json({ ok: false, message: "推送口令错误" }, 403);
      }

      if (!text && !body.card) {
        return json({ ok: false, message: "推送内容为空" }, 400);
      }

      let webhook = "";
      let payload = {};

      if (platform === "feishu") {
        webhook = env.FEISHU_WEBHOOK;
        if (messageType === "card" && body.card) {
          payload = { msg_type: "interactive", card: body.card };
        } else if (messageType === "markdown") {
          payload = {
            msg_type: "interactive",
            card: {
              config: { wide_screen_mode: true },
              header: { template: "blue", title: { tag: "plain_text", content: title } },
              elements: [{ tag: "div", text: { tag: "lark_md", content: text } }],
            },
          };
        } else {
          payload = { msg_type: "text", content: { text } };
        }
      } else if (platform === "dingtalk") {
        webhook = env.DINGTALK_WEBHOOK;
        if (messageType === "markdown") {
          payload = { msgtype: "markdown", markdown: { title, text } };
        } else {
          payload = { msgtype: "text", text: { content: text } };
        }
      } else {
        return json({ ok: false, message: "未知平台，请使用 feishu 或 dingtalk" }, 400);
      }

      if (!webhook) {
        return json({ ok: false, message: "Webhook 没有配置" }, 500);
      }

      const resp = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const resultText = await resp.text();
      let resultJson = null;
      try { resultJson = resultText ? JSON.parse(resultText) : null; } catch (_) {}

      const robotOk = isRobotSuccess(platform, resultJson, resultText);
      const ok = resp.ok && robotOk;

      return json({
        ok,
        status: resp.status,
        platform,
        messageType,
        result: resultJson || resultText,
      }, ok ? 200 : 502);
    } catch (err) {
      return json({ ok: false, message: err && err.message ? err.message : "推送失败" }, 500);
    }
  },
};

function isRobotSuccess(platform, resultJson, resultText) {
  if (!resultJson || typeof resultJson !== "object") return true;
  if (platform === "feishu") {
    if (typeof resultJson.code === "number") return resultJson.code === 0;
    if (typeof resultJson.StatusCode === "number") return resultJson.StatusCode === 0;
    if (typeof resultJson.status_code === "number") return resultJson.status_code === 0;
    return true;
  }
  if (platform === "dingtalk") {
    if (typeof resultJson.errcode === "number") return resultJson.errcode === 0;
    return true;
  }
  return true;
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(),
    },
  });
}
