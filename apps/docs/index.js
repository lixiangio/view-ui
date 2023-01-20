import { Langs as f } from "/view-ui/libs/view.js";
import { defineComponent as m, resolveComponent as h, openBlock as g, createElementBlock as v, Fragment as z, createVNode as t, createElementVNode as s, withCtx as n, createTextVNode as i, toDisplayString as a, pushScopeId as B, popScopeId as E } from "/view-ui/libs/vue.js";
import { defineAsyncMarkdown as u } from "/view-ui/libs/components.js";
const y = m({
  pages: {
    viewui: u({
      zh: () => import("./viewui/zh.md.js"),
      en: () => import("./viewui/en.md.js")
    }),
    api: u({
      zh: () => import("./api/zh.md.js"),
      en: () => import("./api/en.md.js")
    })
  },
  setup() {
    return {
      langs: f({
        docs: {
          en: "Docs",
          zh: "\u6587\u6863"
        },
        setting: {
          en: "Setting",
          zh: "\u8BBE\u7F6E"
        },
        components: {
          en: "Components",
          zh: "\u7EC4\u4EF6"
        },
        form: {
          en: "Form",
          zh: "\u8868\u5355"
        },
        language: {
          en: "Language",
          zh: "\u8BED\u8A00"
        },
        apps: {
          en: "Application",
          zh: "\u5E94\u7528"
        }
      })
    };
  }
}), A = "", I = (e, r) => {
  const l = e.__vccOpts || e;
  for (const [_, d] of r)
    l[_] = d;
  return l;
}, c = (e) => (B("data-v-267ec186"), e = e(), E(), e), w = { class: "items docs" }, S = /* @__PURE__ */ i(" View UI "), b = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), C = /* @__PURE__ */ i("API "), N = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), k = { class: "items" }, F = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), V = /* @__PURE__ */ i("Base "), $ = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), D = /* @__PURE__ */ i(" Base -> Scroll"), L = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), M = /* @__PURE__ */ i(" Base -> Router -> Async"), O = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), P = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), R = /* @__PURE__ */ i("Image "), T = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), U = { class: "items setting" }, j = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), q = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1)), x = /* @__PURE__ */ c(() => /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1));
function G(e, r, l, _, d, H) {
  const p = h("Navbar"), o = h("A");
  return g(), v(z, null, [
    t(p, {
      title: e.langs.docs
    }, null, 8, ["title"]),
    s("div", w, [
      t(o, {
        class: "item",
        href: "docs/viewui"
      }, {
        default: n(() => [
          S,
          b
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "docs/api?cid=6"
      }, {
        default: n(() => [
          C,
          N
        ]),
        _: 1
      })
    ]),
    s("div", k, [
      t(o, {
        class: "header item",
        href: "components"
      }, {
        default: n(() => [
          i(a(e.langs.components) + " ", 1),
          F
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "components/base"
      }, {
        default: n(() => [
          V,
          $
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "components/base/scroll"
      }, {
        default: n(() => [
          D,
          L
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "components/base/router/async"
      }, {
        default: n(() => [
          M,
          O
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "components/form"
      }, {
        default: n(() => [
          i(a(e.langs.form) + " ", 1),
          P
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "components/image"
      }, {
        default: n(() => [
          R,
          T
        ]),
        _: 1
      })
    ]),
    s("div", U, [
      t(o, {
        class: "header item",
        href: "setting"
      }, {
        default: n(() => [
          i(a(e.langs.setting) + " ", 1),
          j
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "setting/language"
      }, {
        default: n(() => [
          i(a(e.langs.language) + " ", 1),
          q
        ]),
        _: 1
      }),
      t(o, {
        class: "item",
        href: "setting/apps"
      }, {
        default: n(() => [
          i(a(e.langs.apps) + " ", 1),
          x
        ]),
        _: 1
      })
    ])
  ], 64);
}
const W = /* @__PURE__ */ I(y, [["render", G], ["styles", [A]], ["__scopeId", "data-v-267ec186"]]);
export {
  W as default
};
