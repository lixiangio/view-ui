import { resolveComponent as d, openBlock as i, createElementBlock as p, Fragment as r, createVNode as _, withCtx as v, createElementVNode as t, toDisplayString as m, unref as u, pushScopeId as h, popScopeId as f } from "/view-ui/libs/vue.js";
import { Langs as g, Lang as s } from "/view-ui/libs/view.js";
const b = `.development[data-v-ecbaa73a]{padding:10px}.development .tip[data-v-ecbaa73a]{padding:10px 0;font-size:14px}
`, x = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [c, a] of n)
    o[c] = a;
  return o;
}, l = (e) => (h("data-v-ecbaa73a"), e = e(), f(), e), y = { class: "navbar-center" }, z = /* @__PURE__ */ l(() => /* @__PURE__ */ t("div", { class: "navbar-right" }, null, -1)), I = /* @__PURE__ */ l(() => /* @__PURE__ */ t("div", { class: "development" }, [
  /* @__PURE__ */ t("div", { class: "tip" }, "\u8FDE\u63A5\u81F3\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668"),
  /* @__PURE__ */ t("div", null, [
    /* @__PURE__ */ t("input", {
      class: "w100",
      type: "text",
      placeholder: "\u8F93\u5165\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\u5730\u5740"
    })
  ])
], -1)), N = {
  mounted() {
    this.$container.buttons.push(
      {
        icon: "ficon-code",
        name: s({
          en: "\u6253\u5305",
          zh: "Build"
        }),
        action() {
          console.log("\u6253\u5305");
        }
      },
      {
        icon: "ficon-code",
        name: s({
          en: "Publish",
          zh: "\u53D1\u5E03"
        }),
        action() {
          console.log("\u53D1\u5E03");
        }
      }
    );
  }
}, S = /* @__PURE__ */ Object.assign(N, {
  __name: "index",
  setup(e) {
    const n = g({
      en: "Development",
      zh: "\u5F00\u53D1"
    });
    return (o, c) => {
      const a = d("Navbar");
      return i(), p(r, null, [
        _(a, null, {
          default: v(() => [
            t("div", y, m(u(n).name), 1),
            z
          ]),
          _: 1
        }),
        I
      ], 64);
    };
  }
}), B = /* @__PURE__ */ x(S, [["styles", [b]], ["__scopeId", "data-v-ecbaa73a"]]);
export {
  B as default
};
