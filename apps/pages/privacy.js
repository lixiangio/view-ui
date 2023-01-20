import { Langs as c } from "/view-ui/libs/view.js";
import { resolveComponent as l, openBlock as _, createElementBlock as m, Fragment as p, createVNode as i, createElementVNode as d } from "/view-ui/libs/vue.js";
const f = "", u = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of o)
    t[n] = r;
  return t;
}, a = c({
  name: {
    en: "Privacy",
    zh: "\u9690\u79C1\u653F\u7B56"
  }
}), v = {
  app: {
    name: a.name
  },
  setup() {
    return { langs: a };
  }
}, g = /* @__PURE__ */ d("div", { class: "terms" }, "...", -1);
function y(e, o, t, n, r, N) {
  const s = l("Navbar");
  return _(), m(p, null, [
    i(s, {
      title: n.langs.name
    }, null, 8, ["title"]),
    g
  ], 64);
}
const x = /* @__PURE__ */ u(v, [["render", y], ["styles", [f]]]);
export {
  x as default
};
