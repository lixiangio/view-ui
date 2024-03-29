import { Lang as r } from "/libs/view.js";
import { openBlock as i, createElementBlock as p, createElementVNode as c, toDisplayString as _ } from "/libs/vue.js";
const l = `._404{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100vh;background:#fff}._404 i{font-size:80px;color:#333}._404 .prompt{margin-top:30px;font-size:14px;color:#333}
`, a = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of n)
    o[e] = s;
  return o;
}, f = r({
  en: "This page is not found!",
  zh: "\u9875\u9762\u4E0D\u5B58\u5728\uFF01\u70B9\u51FB\u53CD\u9988\u95EE\u9898\uFF1F"
}), m = {
  setup() {
    return { prompt: f };
  }
}, d = { class: "_404" }, u = /* @__PURE__ */ c("i", { class: "ficon-meiyoushuju" }, null, -1), h = { class: "prompt" };
function g(t, n, o, e, s, x) {
  return i(), p("div", d, [
    u,
    c("div", h, _(e.prompt), 1)
  ]);
}
const k = /* @__PURE__ */ a(m, [["render", g], ["styles", [l]]]);
export {
  k as default
};
