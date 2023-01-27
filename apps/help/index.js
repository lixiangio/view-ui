import { defineComponent as a, openBlock as l, createElementBlock as _, createApp as u, resolveComponent as r, createVNode as c } from "/view-ui/libs/vue.js";
import d from "/view-ui/libs/components.js";
import { Langs as f } from "/view-ui/libs/view.js";
const h = { class: "markdown-body" }, v = /* @__PURE__ */ a({
  __name: "test",
  setup(e, { expose: t }) {
    return t({ frontmatter: { title: "My Cool App", meta: [{ name: "description", content: "Hello World" }] }, excerpt: void 0 }), (o, n) => (l(), _("div", h));
  }
}), p = f({
  help: {
    en: "Help",
    zh: "\u5E2E\u52A9\u6587\u6863"
  }
}), $ = a({
  app: {
    name: p.help,
    level: 100
  },
  components: { Test: v },
  setup() {
    return { langs: p };
  },
  install(e) {
    const t = u(this);
    t.use(d), t.mount(e);
  }
}), x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, g = { class: "help" };
function k(e, t, o, n, s, C) {
  const m = r("Navbar"), i = r("Test");
  return l(), _("div", g, [
    c(m, {
      title: e.langs.help
    }, null, 8, ["title"]),
    c(i)
  ]);
}
const E = /* @__PURE__ */ x($, [["render", k]]);
export {
  E as default
};
