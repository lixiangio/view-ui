import { Langs as a } from "/view-ui/libs/view.js";
import { resolveComponent as l, openBlock as _, createElementBlock as m, Fragment as p, createVNode as i, createElementVNode as d } from "/view-ui/libs/vue.js";
const f = "", u = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of o)
    t[n] = r;
  return t;
}, { name: c } = a({
  name: {
    en: "Privacy",
    zh: "\u9690\u79C1\u653F\u7B56"
  }
}), v = {
  name: c,
  setup() {
    return { name: c };
  }
}, y = /* @__PURE__ */ d("div", { class: "terms" }, "...", -1);
function N(e, o, t, n, r, g) {
  const s = l("Navbar");
  return _(), m(p, null, [
    i(s, { title: n.name }, null, 8, ["title"]),
    y
  ], 64);
}
const x = /* @__PURE__ */ u(v, [["render", N], ["styles", [f]]]);
export {
  x as default
};
