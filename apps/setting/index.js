import { defineComponent as v, resolveComponent as f, openBlock as i, createElementBlock as l, createVNode as a, createElementVNode as e, Fragment as m, renderList as F, unref as n, normalizeClass as k, normalizeStyle as z, createTextVNode as r, toDisplayString as c, createCommentVNode as x, pushScopeId as $, popScopeId as y, withCtx as p } from "/view-ui/libs/vue.js";
import { urls as A, languages as E, language as I, Langs as N, Lang as S } from "/view-ui/libs/view.js";
import { open as w, pushState as B } from "/view-ui/libs/navigator.js";
import { confirm as V } from "/view-ui/libs/viewui.js";
const L = (t) => ($("data-v-64144d7e"), t = t(), y(), t), U = { class: "apps" }, D = { class: "items" }, P = {
  key: 0,
  class: "item",
  href: "pages/faq"
}, Q = { class: "left" }, G = /* @__PURE__ */ L(() => /* @__PURE__ */ e("div", { class: "right" }, "...", -1)), M = /* @__PURE__ */ v({
  __name: "apps",
  setup(t) {
    return (s, _) => {
      const g = f("Navbar");
      return i(), l("div", U, [
        a(g, { title: "Apps" }),
        e("div", D, [
          (i(!0), l(m, null, F(n(A), ({ icon: d, color: u, name: o }) => (i(), l(m, null, [
            d ? (i(), l("div", P, [
              e("div", Q, [
                e("i", {
                  class: k(d),
                  style: z({ color: u })
                }, null, 6),
                r(" " + c(o), 1)
              ]),
              G
            ])) : x("", !0)
          ], 64))), 256))
        ])
      ]);
    };
  }
}), q = `.apps .items .item .left i[data-v-64144d7e]{margin-right:5px}
`, b = (t, s) => {
  const _ = t.__vccOpts || t;
  for (const [g, d] of s)
    _[g] = d;
  return _;
}, O = /* @__PURE__ */ b(M, [["styles", [q]], ["__scopeId", "data-v-64144d7e"]]), T = (t) => ($("data-v-9c952799"), t = t(), y(), t), j = { class: "language" }, H = { class: "items" }, J = ["onClick"], K = /* @__PURE__ */ T(() => /* @__PURE__ */ e("i", { class: "ficon-confirm" }, null, -1)), R = ["onClick"], W = /* @__PURE__ */ v({
  __name: "language",
  setup(t) {
    function s(_) {
      localStorage.lang = _, location.reload();
    }
    return (_, g) => {
      const d = f("Navbar");
      return i(), l(m, null, [
        a(d, { title: "Language" }),
        e("div", j, [
          e("ul", H, [
            (i(!0), l(m, null, F(n(E), (u, o) => (i(), l(m, null, [
              u.code === n(I) ? (i(), l("li", {
                key: o,
                class: "item active",
                onClick: (C) => _.onSet(u.code)
              }, [
                r(c(u.name) + " ", 1),
                K
              ], 8, J)) : (i(), l("li", {
                key: 1,
                class: "item",
                onClick: (C) => s(u.code)
              }, c(u.name), 9, R))
            ], 64))), 256))
          ])
        ])
      ], 64);
    };
  }
}), X = `.language .items .item.active i.ficon-confirm[data-v-9c952799]{position:absolute;top:18px;right:18px;font-size:15px;color:#39c79a}
`, Y = /* @__PURE__ */ b(W, [["styles", [X]], ["__scopeId", "data-v-9c952799"]]), Z = v({
  data() {
    return {};
  }
}), ee = "", te = (t) => ($("data-v-19eb3b6d"), t = t(), y(), t), se = { class: "version" }, oe = /* @__PURE__ */ te(() => /* @__PURE__ */ e("div", null, "v1.0.0", -1));
function ne(t, s, _, g, d, u) {
  const o = f("Navbar");
  return i(), l("div", se, [
    a(o, { title: "Version" }),
    oe
  ]);
}
const ae = /* @__PURE__ */ b(Z, [["render", ne], ["styles", [ee]], ["__scopeId", "data-v-19eb3b6d"]]), h = (t) => ($("data-v-49c2579d"), t = t(), y(), t), ce = { class: "setting" }, ie = { class: "language items" }, le = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), _e = { class: "items" }, ue = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), re = { class: "items" }, de = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), pe = { class: "items" }, he = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), ge = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), me = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), fe = /* @__PURE__ */ h(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), ve = { class: "items" }, $e = /* @__PURE__ */ h(() => /* @__PURE__ */ e("div", null, [
  /* @__PURE__ */ e("span", { style: { "font-weight": "normal" } }, "0.0.1 "),
  /* @__PURE__ */ e("i", { class: "ficon-right" })
], -1)), ye = { class: "items" }, be = {
  pages: { language: Y, apps: O, version: ae }
}, Fe = /* @__PURE__ */ v({
  ...be,
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
    function _() {
      V.open({
        color: "warning",
        body: S({ en: "Do you want to log out?", zh: "\u662F\u5426\u9000\u51FA\u767B\u5F55\uFF1F" }),
        confirm() {
          w("login"), B("login");
        }
      });
    }
    return (g, d) => {
      const u = f("Navbar"), o = f("A");
      return i(), l(m, null, [
        a(u, {
          title: n(s).setting
        }, null, 8, ["title"]),
        e("div", ce, [
          e("div", ie, [
            a(o, {
              class: "item header",
              href: "setting/language"
            }, {
              default: p(() => [
                r(c(n(s).language) + " ", 1),
                le
              ]),
              _: 1
            })
          ]),
          e("div", _e, [
            a(o, {
              class: "item header",
              href: "setting/apps"
            }, {
              default: p(() => [
                r(c(n(s).appManagement) + " ", 1),
                ue
              ]),
              _: 1
            })
          ]),
          e("div", re, [
            a(o, {
              class: "item header",
              href: "group"
            }, {
              default: p(() => [
                r(c(n(s).appsGroup) + " ", 1),
                de
              ]),
              _: 1
            })
          ]),
          e("div", pe, [
            a(o, {
              class: "item",
              href: "pages/faq"
            }, {
              default: p(() => [
                r(c(n(s).FAQ) + " ", 1),
                he
              ]),
              _: 1
            }),
            a(o, {
              class: "item",
              href: "pages/feedback"
            }, {
              default: p(() => [
                r(c(n(s).feedback) + " ", 1),
                ge
              ]),
              _: 1
            }),
            a(o, {
              class: "item",
              href: "pages/privacy"
            }, {
              default: p(() => [
                r(c(n(s).privacyPolicy) + " ", 1),
                me
              ]),
              _: 1
            }),
            a(o, {
              class: "item",
              href: "pages/about"
            }, {
              default: p(() => [
                r(c(n(s).about) + " ", 1),
                fe
              ]),
              _: 1
            })
          ]),
          e("div", ve, [
            a(o, {
              class: "item header",
              href: "setting/version"
            }, {
              default: p(() => [
                r(c(n(s).versionUpdates) + " ", 1),
                $e
              ]),
              _: 1
            })
          ]),
          e("div", ye, [
            e("div", {
              class: "item header",
              onClick: _
            }, c(n(s).logout), 1)
          ])
        ])
      ], 64);
    };
  }
}), Ce = "", Ee = /* @__PURE__ */ b(Fe, [["styles", [Ce]], ["__scopeId", "data-v-49c2579d"]]);
export {
  Ee as default
};
