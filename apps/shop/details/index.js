import { resolveComponent as c, openBlock as s, createElementBlock as l, Fragment as _, createVNode as d, createElementVNode as i, toDisplayString as p } from "/libs/vue.js";
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
function v(e, t, o, r, n, h) {
  const a = c("Navbar");
  return s(), l(_, null, [
    d(a, { title: "Shop Details" }),
    i("div", null, p(n.id), 1)
  ], 64);
}
const x = /* @__PURE__ */ u(f, [["render", v], ["styles", [m]], ["__scopeId", "data-v-c6d8b230"]]);
export {
  x as default
};
