import { Lang as l } from "/view-ui/libs/view.js";
import { defineComponent as m, resolveComponent as c, openBlock as u, createElementBlock as d, Fragment as i, createVNode as s, createElementVNode as f } from "/view-ui/libs/vue.js";
const a = l({
  en: "Share",
  zh: "\u5206\u4EAB"
}), v = m({
  app: { name: a },
  setup() {
    return { name: a };
  }
}), h = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, N = /* @__PURE__ */ f("div", { class: "body" }, "...", -1);
function $(e, n, t, o, r, b) {
  const p = c("Navbar"), _ = c("Test");
  return u(), d(i, null, [
    s(p, { title: e.name }, null, 8, ["title"]),
    N,
    s(_)
  ], 64);
}
const B = /* @__PURE__ */ h(v, [["render", $]]);
export {
  B as default
};
