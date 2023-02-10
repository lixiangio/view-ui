import { open as _ } from "/libs/navigator.js";
import { resolveComponent as c, openBlock as l, createElementBlock as m, Fragment as p, createVNode as a, withCtx as i, createElementVNode as f, toDisplayString as u, createTextVNode as y } from "/libs/vue.js";
const g = "", v = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [r, t] of n)
    o[r] = t;
  return o;
}, b = {
  app: {
    name: "Category",
    icon: "ficon-mongodb",
    color: "#6fdfa5",
    background: "#6fdfa5ee",
    style: { "background-color": "#eee" }
  },
  inject: ["router"],
  data() {
    const { query: e } = this.router;
    return { query: e };
  },
  methods: { open: _ }
}, h = /* @__PURE__ */ y("recommend");
function x(e, n, o, r, t, k) {
  const s = c("Navbar"), d = c("A");
  return l(), m(p, null, [
    a(s, { title: "Category" }),
    a(d, { href: "recommend" }, {
      default: i(() => [
        h
      ]),
      _: 1
    }),
    f("div", null, u(t.query), 1)
  ], 64);
}
const V = /* @__PURE__ */ v(b, [["render", x], ["styles", [g]], ["__scopeId", "data-v-4bd1294d"]]);
export {
  V as default
};
