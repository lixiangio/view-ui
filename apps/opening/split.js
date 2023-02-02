import { defineComponent as c, ref as l, openBlock as s, createBlock as r, Transition as p, withCtx as f, createElementBlock as g, createElementVNode as e, toDisplayString as h, unref as u, createCommentVNode as _, pushScopeId as m, popScopeId as v } from "/view-ui/libs/vue.js";
const i = (t) => (m("data-v-e0de8ae9"), t = t(), v(), t), x = {
  key: 0,
  class: "opening col full"
}, y = { class: "center full" }, k = { class: "flex" }, b = /* @__PURE__ */ i(() => /* @__PURE__ */ e("i", { class: "logo ficon-tuozhuai" }, null, -1)), w = { class: "name" }, I = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "loading" }, [
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i"),
  /* @__PURE__ */ e("i")
], -1)), z = /* @__PURE__ */ i(() => /* @__PURE__ */ e("div", { class: "bottom center" }, "@Jimu cloud", -1)), S = /* @__PURE__ */ c({
  __name: "split",
  setup(t) {
    const n = l(!0);
    setTimeout(() => n.value = !1, 1200);
    const { brand: a } = VIEW.initOptions;
    return (o, d) => (s(), r(p, { name: "fade" }, {
      default: f(() => [
        n.value ? (s(), g("div", x, [
          e("div", y, [
            e("div", k, [
              b,
              e("div", w, h(u(a)), 1)
            ]),
            I
          ]),
          z
        ])) : _("", !0)
      ]),
      _: 1
    }));
  }
}), B = `@keyframes loader-e0de8ae9{0%{transform:scale(1)}to{transform:scaleY(.3)}}.opening[data-v-e0de8ae9]{position:fixed;z-index:1000000;left:0;right:0;top:0;bottom:0;background:#ffffffcc}.opening .center[data-v-e0de8ae9]{color:#17a049;flex-direction:column}.opening .center .flex[data-v-e0de8ae9]{width:200px;height:160px;align-items:center;justify-content:space-around}.opening .center .flex .logo[data-v-e0de8ae9]{font-size:50px}.opening .center .flex .name[data-v-e0de8ae9]{font-size:34px;font-weight:600}.opening .center .loading[data-v-e0de8ae9]{display:flex;justify-content:center;align-items:center;width:200px}.opening .center .loading i[data-v-e0de8ae9]{width:4px;height:24px;background:#17a049;border-radius:2px;margin:0 2px}.opening .center .loading i[data-v-e0de8ae9]:nth-child(1){animation:loader-e0de8ae9 .5s -.25s ease-in-out infinite alternate}.opening .center .loading i[data-v-e0de8ae9]:nth-child(2){animation:loader-e0de8ae9 .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-e0de8ae9]:nth-child(3){animation:loader-e0de8ae9 .5s 0s ease-in-out infinite alternate}.opening .center .loading i[data-v-e0de8ae9]:nth-child(4){animation:loader-e0de8ae9 .5s -.15s ease-in-out infinite alternate}.opening .center .loading i[data-v-e0de8ae9]:nth-child(5){animation:loader-e0de8ae9 .5s -.4s ease-in-out infinite alternate}.opening .bottom[data-v-e0de8ae9]{height:80px;color:#888}
`, C = (t, n) => {
  const a = t.__vccOpts || t;
  for (const [o, d] of n)
    a[o] = d;
  return a;
}, V = /* @__PURE__ */ C(S, [["styles", [B]], ["__scopeId", "data-v-e0de8ae9"]]);
export {
  V as default
};
