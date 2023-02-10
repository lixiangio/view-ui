import { Lang as l } from "/libs/view.js";
import { resolveComponent as i, openBlock as p, createElementBlock as _, Fragment as d, createVNode as m, createElementVNode as n, createTextVNode as u } from "/libs/vue.js";
const f = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, c] of r)
    t[o] = c;
  return t;
}, a = l({
  en: "About View UI",
  zh: "\u5173\u4E8E View UI"
}), v = {
  app: { name: a },
  setup() {
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
function b(e, r, t, o, c, h) {
  const s = i("Navbar");
  return p(), _(d, null, [
    m(s, { title: o.name }, null, 8, ["title"]),
    g
  ], 64);
}
const N = /* @__PURE__ */ f(v, [["render", b]]);
export {
  N as default
};
