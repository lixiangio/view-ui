import { openBlock as n, createElementBlock as r, createTextVNode as _, pushScopeId as a, popScopeId as d, createElementVNode as h } from "/view-ui/libs/vue.js";
const i = `.share[data-v-1678908c]{position:fixed;left:0;right:0;bottom:0;height:0px;z-index:10000000;background-color:#fff}
`, p = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [c, s] of t)
    o[c] = s;
  return o;
}, l = {}, f = (e) => (a("data-v-1678908c"), e = e(), d(), e), u = { class: "share" }, x = /* @__PURE__ */ f(() => /* @__PURE__ */ h("h3", null, "Share", -1)), m = /* @__PURE__ */ _(" ... "), v = [
  x,
  m
];
function g(e, t) {
  return n(), r("div", u, v);
}
const I = /* @__PURE__ */ p(l, [["render", g], ["styles", [i]], ["__scopeId", "data-v-1678908c"]]);
export {
  I as default
};
