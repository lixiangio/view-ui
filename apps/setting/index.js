import { defineComponent as v, resolveComponent as m, openBlock as i, createElementBlock as l, createVNode as a, createElementVNode as e, Fragment as f, renderList as F, unref as n, normalizeClass as k, normalizeStyle as x, createTextVNode as u, toDisplayString as c, createCommentVNode as z, pushScopeId as b, popScopeId as $, withCtx as p } from "/demo/libs/vue.js";
import { urls as A, languages as E, language as I, Langs as N } from "/demo/libs/view.js";
import { open as S, pushState as B } from "/demo/libs/navigator.js";
import { confirm as w } from "/demo/libs/viewui.js";
const V = (t) => (b("data-v-76682b0c"), t = t(), $(), t), L = { class: "apps" }, U = { class: "items" }, P = {
  key: 0,
  class: "item",
  href: "pages/faq"
}, Q = { class: "left" }, D = /* @__PURE__ */ V(() => /* @__PURE__ */ e("div", { class: "right" }, "...", -1)), G = /* @__PURE__ */ v({
  __name: "apps",
  setup(t) {
    return (s, r) => {
      const g = m("Navbar");
      return i(), l("div", L, [
        a(g, { title: "Apps" }),
        e("div", U, [
          (i(!0), l(f, null, F(n(A), ({ icon: d, color: _, name: o }) => (i(), l(f, null, [
            d ? (i(), l("div", P, [
              e("div", Q, [
                e("i", {
                  class: k(d),
                  style: x({ color: _ })
                }, null, 6),
                u(" " + c(o), 1)
              ]),
              D
            ])) : z("", !0)
          ], 64))), 256))
        ])
      ]);
    };
  }
}), M = `.apps .items .item .left i[data-v-76682b0c]{margin-right:5px}
`, y = (t, s) => {
  const r = t.__vccOpts || t;
  for (const [g, d] of s)
    r[g] = d;
  return r;
}, q = /* @__PURE__ */ y(G, [["styles", [M]], ["__scopeId", "data-v-76682b0c"]]), O = (t) => (b("data-v-a8ddfbe7"), t = t(), $(), t), T = { class: "language" }, j = { class: "items" }, H = ["onClick"], J = /* @__PURE__ */ O(() => /* @__PURE__ */ e("i", { class: "ficon-confirm" }, null, -1)), K = ["onClick"], R = /* @__PURE__ */ v({
  __name: "language",
  setup(t) {
    function s(r) {
      localStorage.lang = r, location.reload();
    }
    return (r, g) => {
      const d = m("Navbar");
      return i(), l(f, null, [
        a(d, { title: "Language" }),
        e("div", T, [
          e("ul", j, [
            (i(!0), l(f, null, F(n(E), (_, o) => (i(), l(f, null, [
              _.code === n(I) ? (i(), l("li", {
                key: o,
                class: "item active",
                onClick: (C) => s(_.code)
              }, [
                u(c(_.name) + " ", 1),
                J
              ], 8, H)) : (i(), l("li", {
                key: 1,
                class: "item",
                onClick: (C) => s(_.code)
              }, c(_.name), 9, K))
            ], 64))), 256))
          ])
        ])
      ], 64);
    };
  }
}), W = `.language .items .item.active i.ficon-confirm[data-v-a8ddfbe7]{position:absolute;top:18px;right:18px;font-size:15px;color:#39c79a}
`, X = /* @__PURE__ */ y(R, [["styles", [W]], ["__scopeId", "data-v-a8ddfbe7"]]), Y = v({
  data() {
    return {};
  }
}), Z = "", ee = (t) => (b("data-v-19eb3b6d"), t = t(), $(), t), te = { class: "version" }, se = /* @__PURE__ */ ee(() => /* @__PURE__ */ e("div", null, "v1.0.0", -1));
function oe(t, s, r, g, d, _) {
  const o = m("Navbar");
  return i(), l("div", te, [
    a(o, { title: "Version" }),
    se
  ]);
}
const ne = /* @__PURE__ */ y(Y, [["render", oe], ["styles", [Z]], ["__scopeId", "data-v-19eb3b6d"]]), h = (t) => (b("data-v-f7ed8d71"), t = t(), $(), t), ae = { class: "setting" }, ce = { class: "language items" }, ie = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), le = { class: "items" }, _e = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), ue = { class: "items" }, re = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), de = { class: "items" }, pe = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), he = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), ge = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), fe = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), me = { class: "items" }, ve = /* @__PURE__ */ h(() => /* @__PURE__ */ e("div", null, [
  /* @__PURE__ */ e("span", { style: { "font-weight": "normal" } }, "0.0.1 "),
  /* @__PURE__ */ e("i", { class: "ficon-right" })
], -1)), be = { class: "items" }, $e = {
  pages: { language: X, apps: q, version: ne }
}, ye = /* @__PURE__ */ v({
  ...$e,
  __name: "index",
  setup(t) {
    const s = N({
      setting: {
        en: "Setting",
        zh: "\u8BBE\u7F6E"
      },
      language: {
        en: "Language",
        zh: "\u8BED\u8A00"
      },
      appManagement: {
        en: "Application Management",
        zh: "\u5E94\u7528\u7BA1\u7406"
      },
      appsGroup: {
        en: "Apps Group",
        zh: "\u5E94\u7528\u5206\u7EC4"
      },
      FAQ: {
        en: "FAQ",
        zh: "\u5E38\u89C1\u95EE\u9898"
      },
      feedback: {
        en: "Question Feedback",
        zh: "\u610F\u89C1\u53CD\u9988"
      },
      privacyPolicy: {
        en: "Privacy Policy",
        zh: "\u9690\u79C1\u653F\u7B56"
      },
      about: {
        en: "About View UI",
        zh: "\u5173\u4E8E View UI"
      },
      versionUpdates: {
        en: "Version Updates",
        zh: "\u7248\u672C\u66F4\u65B0"
      },
      logout: {
        en: "Logout",
        zh: "\u9000\u51FA\u767B\u5F55"
      }
    });
    function r() {
      w.open({
        color: "warning",
        body: "\u662F\u5426\u9000\u51FA\u767B\u5F55\uFF1F",
        confirm() {
          S("login"), B("login");
        }
      });
    }
    return (g, d) => {
      const _ = m("Navbar"), o = m("A");
      return i(), l(f, null, [
        a(_, {
          title: n(s).setting
        }, null, 8, ["title"]),
        e("div", ae, [
          e("div", ce, [
            a(o, {
              class: "item header",
              href: "setting/language"
            }, {
              default: p(() => [
                u(c(n(s).language) + " ", 1),
                ie
              ]),
              _: 1
            })
          ]),
          e("div", le, [
            a(o, {
              class: "item header",
              href: "setting/apps"
            }, {
              default: p(() => [
                u(c(n(s).appManagement) + " ", 1),
                _e
              ]),
              _: 1
            })
          ]),
          e("div", ue, [
            a(o, {
              class: "item header",
              href: "group"
            }, {
              default: p(() => [
                u(c(n(s).appsGroup) + " ", 1),
                re
              ]),
              _: 1
            })
          ]),
          e("div", de, [
            a(o, {
              class: "item",
              href: "pages/faq"
            }, {
              default: p(() => [
                u(c(n(s).FAQ) + " ", 1),
                pe
              ]),
              _: 1
            }),
            a(o, {
              class: "item",
              href: "pages/feedback"
            }, {
              default: p(() => [
                u(c(n(s).feedback) + " ", 1),
                he
              ]),
              _: 1
            }),
            a(o, {
              class: "item",
              href: "pages/privacy"
            }, {
              default: p(() => [
                u(c(n(s).privacyPolicy) + " ", 1),
                ge
              ]),
              _: 1
            }),
            a(o, {
              class: "item",
              href: "pages/about"
            }, {
              default: p(() => [
                u(c(n(s).about) + " ", 1),
                fe
              ]),
              _: 1
            })
          ]),
          e("div", me, [
            a(o, {
              class: "item header",
              href: "setting/version"
            }, {
              default: p(() => [
                u(c(n(s).versionUpdates) + " ", 1),
                ve
              ]),
              _: 1
            })
          ]),
          e("div", be, [
            e("div", {
              class: "item header",
              onClick: r
            }, c(n(s).logout), 1)
          ])
        ])
      ], 64);
    };
  }
}), Fe = "", Ae = /* @__PURE__ */ y(ye, [["styles", [Fe]], ["__scopeId", "data-v-f7ed8d71"]]);
export {
  Ae as default
};
