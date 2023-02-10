import { closeMask as a } from "/libs/state.js";
import { openBlock as d, createElementBlock as r, createElementVNode as t, toDisplayString as l, pushScopeId as p, popScopeId as _ } from "/libs/vue.js";
setTimeout(a, 1e3);
const { brand: f } = VIEW.initOptions, u = {
  setup() {
    return { brand: f };
  }
}, g = `.opening[data-v-2b01ed34]{position:fixed;z-index:100000;left:0;top:0;background:#ffffffdc}.opening .center[data-v-2b01ed34]{color:#17a049;flex-direction:column}.opening .center .logo[data-v-2b01ed34]{font-size:80px}.opening .center .name[data-v-2b01ed34]{margin-top:12px;font-size:24px;font-weight:600;text-align:center}.opening .bottom[data-v-2b01ed34]{height:80px;color:#888}
`, m = (e, c) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of c)
    o[n] = s;
  return o;
}, i = (e) => (p("data-v-2b01ed34"), e = e(), _(), e), v = { class: "opening col full" }, b = { class: "center full" }, h = /* @__PURE__ */ i(() => /* @__PURE__ */ t("i", { class: "logo ficon-tuozhuai" }, null, -1)), x = { class: "name" }, k = /* @__PURE__ */ i(() => /* @__PURE__ */ t("div", { class: "bottom center" }, "@Jimu cloud", -1));
function I(e, c, o, n, s, y) {
  return d(), r("div", v, [
    t("div", b, [
      h,
      t("div", x, l(n.brand), 1)
    ]),
    k
  ]);
}
const E = /* @__PURE__ */ m(u, [["render", I], ["styles", [g]], ["__scopeId", "data-v-2b01ed34"]]);
export {
  E as default
};
