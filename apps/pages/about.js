import { Lang as l } from "/demo/libs/view.js";
import { resolveComponent as i, openBlock as _, createElementBlock as d, Fragment as m, createVNode as p, createElementVNode as n, createTextVNode as u } from "/demo/libs/vue.js";
const f = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [c, o] of r)
    t[c] = o;
  return t;
}, a = l({
  en: "About View UI",
  zh: "\u5173\u4E8E View UI"
}), v = {
  name: a,
  data() {
    return { name: a };
  }
}, g = /* @__PURE__ */ n("div", { class: "body" }, [
  /* @__PURE__ */ n("svg", {
    class: "ficon",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("use", { "xlink:href": "#ficon-konglong" })
  ]),
  /* @__PURE__ */ u(" ... ")
], -1);
function b(e, r, t, c, o, h) {
  const s = i("Navbar");
  return _(), d(m, null, [
    p(s, { title: o.name }, null, 8, ["title"]),
    g
  ], 64);
}
const N = /* @__PURE__ */ f(v, [["render", b]]);
export {
  N as default
};
