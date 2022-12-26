import { defineComponent as r, resolveComponent as p, openBlock as d, createElementBlock as l, Fragment as _, createVNode as m, pushScopeId as u, popScopeId as f, createElementVNode as i } from "/view-ui/libs/vue.js";
import { Langs as v } from "/view-ui/libs/view.js";
const c = v({
  name: {
    en: "Question Feedback",
    zh: "\u610F\u89C1\u53CD\u9988"
  }
}), k = r({
  name: c.name,
  data() {
    return { langs: c };
  }
}), b = "", g = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, a] of o)
    t[n] = a;
  return t;
}, h = (e) => (u("data-v-0a5e8fc5"), e = e(), f(), e), C = /* @__PURE__ */ h(() => /* @__PURE__ */ i("div", { class: "feedback" }, "...", -1));
function I(e, o, t, n, a, N) {
  const s = p("Navbar");
  return d(), l(_, null, [
    m(s, {
      title: e.langs.name
    }, null, 8, ["title"]),
    C
  ], 64);
}
const F = /* @__PURE__ */ g(k, [["render", I], ["styles", [b]], ["__scopeId", "data-v-0a5e8fc5"]]);
export {
  F as default
};
