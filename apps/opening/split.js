import { closeMask as s } from "/view-ui/libs/state.js";
import { openBlock as f, createElementBlock as c, createElementVNode as e, toDisplayString as l, pushScopeId as r, popScopeId as p } from "/view-ui/libs/vue.js";
setTimeout(s, 1200);
const { brand: g } = VIEW.initOptions, h = {
  setup() {
    return { brand: g };
  }
}, _ = `@keyframes loader-10e3ff4d{0%{transform:scale(1)}to{transform:scaleY(.3)}}.opening[data-v-10e3ff4d]{position:fixed;z-index:100000;left:0;top:0;background:#ffffffcc}.opening .center[data-v-10e3ff4d]{color:#17a049;flex-direction:column}.opening .center .flex[data-v-10e3ff4d]{width:200px;height:160px;align-items:center;justify-content:space-around}.opening .center .flex .logo[data-v-10e3ff4d]{font-size:50px}.opening .center .flex .name[data-v-10e3ff4d]{font-size:34px;font-weight:600}.opening .center .loading[data-v-10e3ff4d]{display:flex;justify-content:center;align-items:center;width:200px}.opening .center .loading i[data-v-10e3ff4d]{width:4px;height:24px;background:#17a049;border-radius:2px;margin:0 2px}.opening .center .loading i[data-v-10e3ff4d]:nth-child(1){animation:loader-10e3ff4d .5s -.25s ease-in-out infinite alternate}.opening .center .loading i[data-v-10e3ff4d]:nth-child(2){animation:loader-10e3ff4d .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-10e3ff4d]:nth-child(3){animation:loader-10e3ff4d .5s 0s ease-in-out infinite alternate}.opening .center .loading i[data-v-10e3ff4d]:nth-child(4){animation:loader-10e3ff4d .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-10e3ff4d]:nth-child(5){animation:loader-10e3ff4d .5s -.4s ease-in-out infinite alternate}.opening .bottom[data-v-10e3ff4d]{height:80px;color:#888}
`, u = (t, a) => {
  const n = t.__vccOpts || t;
  for (const [i, d] of a)
    n[i] = d;
  return n;
}, o = (t) => (r("data-v-10e3ff4d"), t = t(), p(), t), m = { class: "opening col full" }, v = { class: "center full" }, x = { class: "flex" }, y = /* @__PURE__ */ o(() => /* @__PURE__ */ e("i", { class: "logo ficon-tuozhuai" }, null, -1)), b = { class: "name" }, k = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "loading" }, [
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i")
], -1)), w = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "bottom center" }, "@Jimu cloud", -1));
function I(t, a, n, i, d, z) {
  return f(), c("div", m, [
    e("div", v, [
      e("div", x, [
        y,
        e("div", b, l(i.brand), 1)
      ]),
      k
    ]),
    w
  ]);
}
const $ = /* @__PURE__ */ u(h, [["render", I], ["styles", [_]], ["__scopeId", "data-v-10e3ff4d"]]);
export {
  $ as default
};
