import { Lang as l } from "/libs/view.js";
import { resolveComponent as i, openBlock as p, createElementBlock as _, Fragment as m, createVNode as u, createElementVNode as n } from "/libs/vue.js";
const d = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, c] of r)
    t[o] = c;
  return t;
}, a = l({
  en: "About View UI",
  zh: "\u5173\u4E8E View UI"
}), f = {
  app: { name: a },
  setup() {
    return { name: a };
  }
}, v = /* @__PURE__ */ n("div", { class: "body" }, [
  /* @__PURE__ */ n("svg", {
    class: "ficon",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ n("use", { "xlink:href": "#ficon-konglong1" })
  ])
], -1);
function g(e, r, t, o, c, b) {
  const s = i("Navbar");
  return p(), _(m, null, [
    u(s, { title: o.name }, null, 8, ["title"]),
    v
  ], 64);
}
const x = /* @__PURE__ */ d(f, [["render", g]]);
export {
  x as default
};
