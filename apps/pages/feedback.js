import { Langs as r } from "/view-ui/libs/view.js";
import { defineComponent as p, resolveComponent as d, openBlock as l, createElementBlock as _, Fragment as m, createVNode as u, pushScopeId as i, popScopeId as f, createElementVNode as v } from "/view-ui/libs/vue.js";
const c = r({
  name: {
    en: "Question Feedback",
    zh: "\u610F\u89C1\u53CD\u9988"
  }
}), k = p({
  app: {
    name: c.name
  },
  setup() {
    return { langs: c };
  }
}), b = "", g = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of o)
    t[n] = a;
  return t;
}, h = (e) => (i("data-v-ee76a709"), e = e(), f(), e), C = /* @__PURE__ */ h(() => /* @__PURE__ */ v("div", { class: "feedback" }, "...", -1));
function I(e, o, t, n, a, N) {
  const s = d("Navbar");
  return l(), _(m, null, [
    u(s, {
      title: e.langs.name
    }, null, 8, ["title"]),
    C
  ], 64);
}
const F = /* @__PURE__ */ g(k, [["render", I], ["styles", [b]], ["__scopeId", "data-v-ee76a709"]]);
export {
  F as default
};
