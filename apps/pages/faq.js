import { defineComponent as _, resolveComponent as c, openBlock as l, createElementBlock as u, Fragment as d, createVNode as s, createElementVNode as f } from "/demo/libs/vue.js";
import { Langs as i } from "/demo/libs/view.js";
const { name: a } = i({
  name: {
    en: "FAQ",
    zh: "\u5E38\u89C1\u95EE\u9898"
  }
}), v = _({
  name: a,
  setup() {
    return { name: a };
  }
}), E = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, N = /* @__PURE__ */ f("div", { class: "body" }, "...", -1);
function $(e, n, t, o, r, b) {
  const m = c("Navbar"), p = c("Test");
  return l(), u(d, null, [
    s(m, { title: e.name }, null, 8, ["title"]),
    N,
    s(p)
  ], 64);
}
const k = /* @__PURE__ */ E(v, [["render", $]]);
export {
  k as default
};
