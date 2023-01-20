import { Lang as l } from "/view-ui/libs/view.js";
import { defineComponent as m, resolveComponent as c, openBlock as u, createElementBlock as d, Fragment as f, createVNode as s, createElementVNode as i } from "/view-ui/libs/vue.js";
const a = l({
  en: "FAQ",
  zh: "\u5E38\u89C1\u95EE\u9898"
}), v = m({
  app: { name: a },
  setup() {
    return { name: a };
  }
}), E = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, N = /* @__PURE__ */ i("div", { class: "body" }, "...", -1);
function $(e, n, t, o, r, b) {
  const p = c("Navbar"), _ = c("Test");
  return u(), d(f, null, [
    s(p, { title: e.name }, null, 8, ["title"]),
    N,
    s(_)
  ], 64);
}
const k = /* @__PURE__ */ E(v, [["render", $]]);
export {
  k as default
};
