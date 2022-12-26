import { resolveComponent as c, openBlock as s, createElementBlock as l, Fragment as _, createVNode as d, createElementVNode as i, toDisplayString as p } from "/view-ui/libs/vue.js";
const m = "", u = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, f = {
  data() {
    return { id: new URLSearchParams(location.search).get("id") };
  }
};
function v(e, t, o, r, n, b) {
  const a = c("Navbar");
  return s(), l(_, null, [
    d(a, { title: "Details" }),
    i("div", null, p(n.id), 1)
  ], 64);
}
const g = /* @__PURE__ */ u(f, [["render", v], ["styles", [m]], ["__scopeId", "data-v-4bb7e2bd"]]);
export {
  g as default
};
