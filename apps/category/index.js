import { open as _ } from "/view-ui/libs/navigator.js";
import { resolveComponent as c, openBlock as l, createElementBlock as m, Fragment as p, createVNode as a, withCtx as f, createElementVNode as i, toDisplayString as u, createTextVNode as y } from "/view-ui/libs/vue.js";
const g = "", b = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [r, t] of n)
    o[r] = t;
  return o;
}, v = {
  app: {
    name: "Category",
    icon: "ficon-mongodb",
    color: "#6fdfa5",
    background: "#6fdfa5ee",
    style: { "background-color": "#eee" }
  },
  data() {
    const { query: e } = this.$router;
    return { query: e };
  },
  methods: { open: _ }
}, h = /* @__PURE__ */ y("recommend");
function x(e, n, o, r, t, k) {
  const s = c("Navbar"), d = c("A");
  return l(), m(p, null, [
    a(s, { title: "Category" }),
    a(d, { href: "recommend" }, {
      default: f(() => [
        h
      ]),
      _: 1
    }),
    i("div", null, u(t.query), 1)
  ], 64);
}
const $ = /* @__PURE__ */ b(v, [["render", x], ["styles", [g]], ["__scopeId", "data-v-4ab2a7db"]]);
export {
  $ as default
};
