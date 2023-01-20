import { closeMask as s } from "/view-ui/libs/state.js";
import { openBlock as d, createElementBlock as l, createElementVNode as e, toDisplayString as r, pushScopeId as b, popScopeId as p } from "/view-ui/libs/vue.js";
setTimeout(s, 1200);
const { brand: f } = VIEW.initOptions, g = {
  setup() {
    return { brand: f };
  }
}, h = `@keyframes loader-76ecbb32{0%{transform:scale(1)}to{transform:scaleY(.3)}}.opening[data-v-76ecbb32]{position:fixed;z-index:100000;left:0;top:0;background:#ffffffe0}.opening .center[data-v-76ecbb32]{color:#17a049;flex-direction:column}.opening .center .flex[data-v-76ecbb32]{width:200px;height:160px;align-items:center;justify-content:space-around}.opening .center .flex .logo[data-v-76ecbb32]{font-size:50px}.opening .center .flex .name[data-v-76ecbb32]{font-size:34px;font-weight:600}.opening .center .loading[data-v-76ecbb32]{display:flex;justify-content:center;align-items:center;width:200px}.opening .center .loading i[data-v-76ecbb32]{width:4px;height:24px;background:#17a049;border-radius:2px;margin:0 2px}.opening .center .loading i[data-v-76ecbb32]:nth-child(1){animation:loader-76ecbb32 .5s -.25s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ecbb32]:nth-child(2){animation:loader-76ecbb32 .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ecbb32]:nth-child(3){animation:loader-76ecbb32 .5s 0s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ecbb32]:nth-child(4){animation:loader-76ecbb32 .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ecbb32]:nth-child(5){animation:loader-76ecbb32 .5s -.4s ease-in-out infinite alternate}.opening .bottom[data-v-76ecbb32]{height:80px;color:#888}
`, _ = (t, a) => {
  const n = t.__vccOpts || t;
  for (const [i, c] of a)
    n[i] = c;
  return n;
}, o = (t) => (b("data-v-76ecbb32"), t = t(), p(), t), u = { class: "opening col full" }, m = { class: "center full" }, v = { class: "flex" }, x = /* @__PURE__ */ o(() => /* @__PURE__ */ e("i", { class: "logo ficon-tuozhuai" }, null, -1)), y = { class: "name" }, k = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "loading" }, [
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i")
], -1)), w = /* @__PURE__ */ o(() => /* @__PURE__ */ e("div", { class: "bottom center" }, "@Jimu cloud", -1));
function I(t, a, n, i, c, z) {
  return d(), l("div", u, [
    e("div", m, [
      e("div", v, [
        x,
        e("div", y, r(i.brand), 1)
      ]),
      k
    ]),
    w
  ]);
}
const $ = /* @__PURE__ */ _(g, [["render", I], ["styles", [h]], ["__scopeId", "data-v-76ecbb32"]]);
export {
  $ as default
};
