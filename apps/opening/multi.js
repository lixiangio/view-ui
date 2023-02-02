import { defineComponent as l, ref as d, openBlock as c, createBlock as r, Transition as p, withCtx as f, createElementBlock as g, createElementVNode as e, toDisplayString as u, unref as h, createCommentVNode as _, pushScopeId as m, popScopeId as v } from "/view-ui/libs/vue.js";
const i = (t) => (m("data-v-76ea6041"), t = t(), v(), t), x = {
  key: 0,
  class: "opening col full"
}, y = { class: "center full" }, k = { class: "flex" }, b = /* @__PURE__ */ i(() => /* @__PURE__ */ e("i", { class: "logo ficon-tuozhuai" }, null, -1)), w = { class: "name" }, I = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "loading" }, [
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i")
], -1)), z = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "bottom center" }, "@Jimu cloud", -1)), S = /* @__PURE__ */ l({
  __name: "multi",
  setup(t) {
    const n = d(!0);
    setTimeout(() => n.value = !1, 1200);
    const { brand: a } = VIEW.initOptions;
    return (o, s) => (c(), r(p, { name: "fade" }, {
      default: f(() => [
        n.value ? (c(), g("div", x, [
          e("div", y, [
            e("div", k, [
              b,
              e("div", w, u(h(a)), 1)
            ]),
            I
          ]),
          z
        ])) : _("", !0)
      ]),
      _: 1
    }));
  }
}), B = `@keyframes loader-76ea6041{0%{transform:scale(1)}to{transform:scaleY(.3)}}.opening[data-v-76ea6041]{position:fixed;z-index:1000000;left:0;right:0;top:0;bottom:0;background:#ffffffcc}.opening .center[data-v-76ea6041]{color:#17a049;flex-direction:column}.opening .center .flex[data-v-76ea6041]{width:200px;height:160px;align-items:center;justify-content:space-around}.opening .center .flex .logo[data-v-76ea6041]{font-size:50px}.opening .center .flex .name[data-v-76ea6041]{font-size:34px;font-weight:600}.opening .center .loading[data-v-76ea6041]{display:flex;justify-content:center;align-items:center;width:200px}.opening .center .loading i[data-v-76ea6041]{width:4px;height:24px;background:#17a049;border-radius:2px;margin:0 2px}.opening .center .loading i[data-v-76ea6041]:nth-child(1){animation:loader-76ea6041 .5s -.25s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ea6041]:nth-child(2){animation:loader-76ea6041 .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ea6041]:nth-child(3){animation:loader-76ea6041 .5s 0s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ea6041]:nth-child(4){animation:loader-76ea6041 .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-76ea6041]:nth-child(5){animation:loader-76ea6041 .5s -.4s ease-in-out infinite alternate}.opening .bottom[data-v-76ea6041]{height:80px;color:#888}
`, C = (t, n) => {
  const a = t.__vccOpts || t;
  for (const [o, s] of n)
    a[o] = s;
  return a;
}, V = /* @__PURE__ */ C(S, [["styles", [B]], ["__scopeId", "data-v-76ea6041"]]);
export {
  V as default
};
