import { inject as _, resolveComponent as m, openBlock as v, createElementBlock as f, Fragment as h, createVNode as r, withCtx as i, createElementVNode as t, toDisplayString as d, unref as o, createTextVNode as g, pushScopeId as x, popScopeId as b } from "/libs/vue.js";
import { Lang as a, Langs as y } from "/libs/view.js";
import { Alert as F } from "/libs/viewui.js";
const z = a({
  en: "This feature is temporarily unavailable!",
  zh: "\u8BE5\u529F\u80FD\u6682\u4E0D\u53EF\u7528\uFF01"
}), E = `.development[data-v-6283039f]{padding:10px}.development .header[data-v-6283039f]{padding-bottom:10px;font-size:14px}
`, N = (e, c) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of c)
    n[s] = l;
  return n;
}, p = (e) => (x("data-v-6283039f"), e = e(), b(), e), w = { class: "navbar-center" }, B = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "navbar-right" }, null, -1)), D = /* @__PURE__ */ p(() => /* @__PURE__ */ t("div", { class: "development" }, [
  /* @__PURE__ */ t("div", { class: "header" }, "\u8FDE\u63A5\u81F3\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668"),
  /* @__PURE__ */ t("div", null, [
    /* @__PURE__ */ t("input", {
      class: "w100",
      type: "text",
      placeholder: "\u8F93\u5165\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\u5730\u5740"
    })
  ])
], -1)), I = {
  __name: "index",
  setup(e) {
    _("container").buttons.push(
      {
        icon: "ficon-code",
        name: a({
          en: "Build",
          zh: "\u6253\u5305"
        }),
        action() {
          console.log("\u6253\u5305");
        }
      },
      {
        icon: "ficon-code",
        name: a({
          en: "Publish",
          zh: "\u53D1\u5E03"
        }),
        action() {
          console.log("\u53D1\u5E03");
        }
      }
    );
    const n = y({
      name: {
        en: "Development",
        zh: "\u5F00\u53D1"
      }
    });
    return (s, l) => {
      const u = m("Navbar");
      return v(), f(h, null, [
        r(u, null, {
          default: i(() => [
            t("div", w, d(o(n).name), 1),
            B
          ]),
          _: 1
        }),
        r(o(F), { type: "" }, {
          default: i(() => [
            g(d(o(z)), 1)
          ]),
          _: 1
        }),
        D
      ], 64);
    };
  }
}, C = /* @__PURE__ */ N(I, [["styles", [E]], ["__scopeId", "data-v-6283039f"]]);
export {
  C as default
};
