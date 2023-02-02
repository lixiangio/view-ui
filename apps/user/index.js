import { openBlock as n, createElementBlock as r, defineComponent as _, createElementVNode as s, createVNode as o, unref as l, pushScopeId as f, popScopeId as h } from "/view-ui/libs/vue.js";
import { back as u } from "/view-ui/libs/router.js";
import { Image as x } from "/view-ui/libs/viewui.js";
const m = `.test[data-v-33c1af75]{font-size:20px;color:#666;padding:8px}
`, i = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [c, p] of a)
    t[c] = p;
  return t;
}, v = {}, g = { class: "test" };
function y(e, a) {
  return n(), r("div", g, "Setup style test");
}
const k = /* @__PURE__ */ i(v, [["render", y], ["styles", [m]], ["__scopeId", "data-v-33c1af75"]]), d = (e) => (f("data-v-a5aec116"), e = e(), h(), e), I = { class: "user" }, b = { class: "header item" }, w = /* @__PURE__ */ d(() => /* @__PURE__ */ s("div", { class: "name" }, "View Ui", -1)), S = /* @__PURE__ */ d(() => /* @__PURE__ */ s("i", { class: "ficon-cha" }, null, -1)), z = [
  S
], V = /* @__PURE__ */ _({
  __name: "index",
  setup(e) {
    function a(t) {
      u(t.currentTarget);
    }
    return (t, c) => (n(), r("div", I, [
      s("div", b, [
        o(l(x), {
          class: "avatar",
          src: "image/avatar.png",
          read: "",
          round: ""
        }),
        w
      ]),
      s("div", {
        class: "close",
        onClick: a
      }, z),
      o(k)
    ]));
  }
}), $ = `.user[data-v-a5aec116]{height:100%;background-color:#f5f5f5}.user .header[data-v-a5aec116]{height:80px;padding:10px;display:flex;align-items:center;background-color:#fff}.user .header .avatar[data-v-a5aec116]{width:60px;height:60px;border-radius:60px;overflow:hidden;margin:0 20px 0 10px}.user .header .name[data-v-a5aec116]{font-size:14px}.user .close[data-v-a5aec116]{z-index:1;position:absolute;right:6px;top:6px;display:flex;justify-content:center;align-items:center;width:45px;height:45px;flex:none;cursor:pointer}
`, N = /* @__PURE__ */ i(V, [["styles", [$]], ["__scopeId", "data-v-a5aec116"]]);
export {
  N as default
};
