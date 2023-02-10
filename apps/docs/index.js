import { defineComponent as m, inject as p, resolveComponent as u, openBlock as g, createElementBlock as v, Fragment as z, createVNode as e, unref as l, createElementVNode as t, withCtx as o, createTextVNode as n, toDisplayString as _, pushScopeId as B, popScopeId as E } from "/libs/vue.js";
import { Langs as x } from "/libs/view.js";
import { defineAsyncMarkdown as f } from "/libs/components.js";
const c = (a) => (B("data-v-998a332f"), a = a(), E(), a), y = { class: "items docs" }, A = /* @__PURE__ */ n(" View UI "), I = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), w = /* @__PURE__ */ n("API "), S = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), b = { class: "items" }, C = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), N = /* @__PURE__ */ n("Base "), k = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), F = /* @__PURE__ */ n(" Base -> Scroll"), V = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), D = /* @__PURE__ */ n(" Base -> Router -> Async"), L = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), j = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), M = /* @__PURE__ */ n("Image "), O = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), P = { class: "items setting" }, R = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), T = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), U = /* @__PURE__ */ c(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), q = {
  pages: {
    viewui: f({
      zh: () => import("./viewui/zh.md.js"),
      en: () => import("./viewui/en.md.js")
    }),
    api: f({
      zh: () => import("./api/zh.md.js"),
      en: () => import("./api/en.md.js")
    })
  }
}, G = /* @__PURE__ */ m({
  ...q,
  __name: "index",
  setup(a) {
    p("router");
    const i = x({
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
    });
    return (r, h) => {
      const d = u("Navbar"), s = u("A");
      return g(), v(z, null, [
        e(d, {
          title: l(i).docs
        }, null, 8, ["title"]),
        t("div", y, [
          e(s, {
            class: "item",
            href: "docs/viewui"
          }, {
            default: o(() => [
              A,
              I
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "docs/api?cid=6"
          }, {
            default: o(() => [
              w,
              S
            ]),
            _: 1
          })
        ]),
        t("div", b, [
          e(s, {
            class: "header item",
            href: "components"
          }, {
            default: o(() => [
              n(_(l(i).components) + " ", 1),
              C
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "components/base"
          }, {
            default: o(() => [
              N,
              k
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "components/base/scroll"
          }, {
            default: o(() => [
              F,
              V
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "components/base/router/async"
          }, {
            default: o(() => [
              D,
              L
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "components/form"
          }, {
            default: o(() => [
              n(_(l(i).form) + " ", 1),
              j
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "components/image"
          }, {
            default: o(() => [
              M,
              O
            ]),
            _: 1
          })
        ]),
        t("div", P, [
          e(s, {
            class: "header item",
            href: "setting"
          }, {
            default: o(() => [
              n(_(l(i).setting) + " ", 1),
              R
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "setting/language"
          }, {
            default: o(() => [
              n(_(l(i).language) + " ", 1),
              T
            ]),
            _: 1
          }),
          e(s, {
            class: "item",
            href: "setting/apps"
          }, {
            default: o(() => [
              n(_(l(i).apps) + " ", 1),
              U
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
}), H = "", J = (a, i) => {
  const r = a.__vccOpts || a;
  for (const [h, d] of i)
    r[h] = d;
  return r;
}, X = /* @__PURE__ */ J(G, [["styles", [H]], ["__scopeId", "data-v-998a332f"]]);
export {
  X as default
};
