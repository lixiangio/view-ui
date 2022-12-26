import { openBlock as o, createElementBlock as c, defineComponent as _, createElementVNode as d, createVNode as s, unref as p, pushScopeId as f, popScopeId as l } from "/view-ui/libs/vue.js";
import { Image as h } from "/view-ui/libs/viewui.js";
const u = `.test[data-v-a5d67ddb]{font-size:20px;color:#fff;padding:8px;background-color:#858585}
`, r = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, i] of t)
    a[n] = i;
  return a;
}, v = {}, m = { class: "test" };
function x(e, t) {
  return o(), c("div", m, "Setup style test");
}
const g = /* @__PURE__ */ r(v, [["render", x], ["styles", [u]], ["__scopeId", "data-v-a5d67ddb"]]), b = (e) => (f("data-v-b63ce7a9"), e = e(), l(), e), y = { class: "user" }, k = { class: "header item" }, I = /* @__PURE__ */ b(() => /* @__PURE__ */ d("div", { class: "name" }, "View Ui", -1)), w = /* @__PURE__ */ _({
  __name: "index",
  setup(e) {
    return (t, a) => (o(), c("div", y, [
      d("div", k, [
        s(p(h), {
          class: "avatar",
          src: "image/avatar.png",
          read: "",
          round: ""
        }),
        I
      ]),
      s(g)
    ]));
  }
}), S = `.user[data-v-b63ce7a9]{height:100%;background-color:#f5f5f5}.user .header[data-v-b63ce7a9]{height:80px;padding:10px;display:flex;align-items:center;background-color:#fff}.user .header .avatar[data-v-b63ce7a9]{width:50px;height:50px;border-radius:50px;overflow:hidden;margin:0 20px 0 10px}.user .header .name[data-v-b63ce7a9]{font-size:14px}
`, z = /* @__PURE__ */ r(w, [["styles", [S]], ["__scopeId", "data-v-b63ce7a9"]]);
export {
  z as default
};
