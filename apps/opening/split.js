import { closeMask as i } from "/demo/libs/state.js";
import { openBlock as r, createElementBlock as d, createElementVNode as o, toDisplayString as p, pushScopeId as l, popScopeId as f } from "/demo/libs/vue.js";
setTimeout(i, 1e3);
const { brand: _ } = VIEW.initOptions, u = {
  setup() {
    return { brand: _ };
  }
}, g = `.opening[data-v-c2faca10]{position:fixed;z-index:100000;left:0;top:0;background:#ffffffdc}.opening .center[data-v-c2faca10]{color:#17a049;flex-direction:column}.opening .center .logo[data-v-c2faca10]{font-size:80px}.opening .center .name[data-v-c2faca10]{margin-top:12px;font-size:24px;font-weight:600;text-align:center}.opening .bottom[data-v-c2faca10]{height:80px;color:#888}
`, m = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [c, a] of n)
    e[c] = a;
  return e;
}, s = (t) => (l("data-v-c2faca10"), t = t(), f(), t), v = { class: "opening col full" }, h = { class: "center full" }, x = /* @__PURE__ */ s(() => /* @__PURE__ */ o("i", { class: "logo ficon-tuozhuai" }, null, -1)), b = { class: "name" }, k = /* @__PURE__ */ s(() => /* @__PURE__ */ o("div", { class: "bottom center" }, "@Jimu cloud", -1));
function I(t, n, e, c, a, y) {
  return r(), d("div", v, [
    o("div", h, [
      x,
      o("div", b, p(c.brand), 1)
    ]),
    k
  ]);
}
const E = /* @__PURE__ */ m(u, [["render", I], ["styles", [g]], ["__scopeId", "data-v-c2faca10"]]);
export {
  E as default
};
