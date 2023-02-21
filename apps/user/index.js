import { openBlock as n, createElementBlock as r, defineComponent as _, createElementVNode as o, createVNode as c, unref as f, pushScopeId as l, popScopeId as h } from "/libs/vue.js";
import { back as u } from "/libs/router.js";
import { Image as x } from "/libs/viewui.js";
const m = `.test[data-v-33c1af75]{font-size:20px;color:#666;padding:8px}
`, i = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [a, p] of s)
    t[a] = p;
  return t;
}, v = {}, g = { class: "test" };
function y(e, s) {
  return n(), r("div", g, "Setup style test");
}
const k = /* @__PURE__ */ i(v, [["render", y], ["styles", [m]], ["__scopeId", "data-v-33c1af75"]]), d = (e) => (l("data-v-231880f8"), e = e(), h(), e), I = { class: "user" }, b = { class: "header item" }, w = /* @__PURE__ */ d(() => /* @__PURE__ */ o("div", { class: "name" }, "View Ui", -1)), S = /* @__PURE__ */ d(() => /* @__PURE__ */ o("i", { class: "ficon-cha" }, null, -1)), z = [
  S
], V = /* @__PURE__ */ _({
  __name: "index",
  setup(e) {
    function s(t) {
      u(t.currentTarget);
    }
    return (t, a) => (n(), r("div", I, [
      o("div", b, [
        c(f(x), {
          class: "avatar",
          src: "image/avatar.png",
          read: "",
          round: ""
        }),
        w
      ]),
      o("div", {
        class: "close",
        onClick: s
      }, z),
      c(k)
    ]));
  }
}), $ = `.user[data-v-231880f8]{height:100%;background-color:#f5f5f5}.user .header[data-v-231880f8]{height:80px;padding:10px;display:flex;align-items:center;background-color:#fff}.user .header .avatar[data-v-231880f8]{width:60px;height:60px;border-radius:60px;overflow:hidden;margin:0 20px 0 10px}.user .header .name[data-v-231880f8]{font-size:14px}.user .close[data-v-231880f8]{z-index:1;position:absolute;right:6px;top:6px;display:flex;justify-content:center;align-items:center;width:45px;height:45px;flex:none;cursor:pointer}
`, N = /* @__PURE__ */ i(V, [["styles", [$]], ["__scopeId", "data-v-231880f8"]]);
export {
  N as default
};
