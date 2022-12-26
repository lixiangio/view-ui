import { open as _ } from "/demo/libs/navigator.js";
import { resolveComponent as c, openBlock as l, createElementBlock as m, Fragment as f, createVNode as a, withCtx as p, createElementVNode as i, toDisplayString as u, createTextVNode as y } from "/demo/libs/vue.js";
const g = "", v = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [r, t] of n)
    o[r] = t;
  return o;
}, h = {
  name: "Category",
  icon: "ficon-mongodb",
  color: "#6fdfa5",
  background: "#6fdfa5ee",
  style: { "background-color": "#eee" },
  data() {
    const { query: e } = this.$router;
    return { query: e };
  },
  methods: { open: _ }
}, x = /* @__PURE__ */ y("recommend");
function b(e, n, o, r, t, k) {
  const s = c("Navbar"), d = c("A");
  return l(), m(f, null, [
    a(s, { title: "Category" }),
    a(d, { href: "recommend" }, {
      default: p(() => [
        x
      ]),
      _: 1
    }),
    i("div", null, u(t.query), 1)
  ], 64);
}
const $ = /* @__PURE__ */ v(h, [["render", b], ["styles", [g]], ["__scopeId", "data-v-ec70f20e"]]);
export {
  $ as default
};
