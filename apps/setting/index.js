import { resolveComponent as b, openBlock as _, createElementBlock as u, Fragment as m, createVNode as d, withCtx as p, createElementVNode as e, toDisplayString as o, normalizeClass as F, normalizeStyle as z, unref as i, pushScopeId as k, popScopeId as x, defineComponent as I, inject as P, renderList as w, createTextVNode as r } from "/libs/vue.js";
import { Lang as E, Langs as L, urls as B, languages as U, language as G } from "/libs/view.js";
import { open as M, pushState as Q } from "/libs/navigator.js";
import { confirm as S, message as V } from "/libs/viewui.js";
const D = E({
  en: "This feature is temporarily unavailable!",
  zh: "\u8BE5\u529F\u80FD\u6682\u4E0D\u53EF\u7528\uFF01"
}), O = `.app .icon[data-v-de9e5305]{height:150px}.app .icon i[data-v-de9e5305]{font-size:50px}.app .versions .version .time[data-v-de9e5305]{color:#888}.app .cancel[data-v-de9e5305]{height:50px;background-color:#e9e9e9;margin:10px;border-radius:6px;cursor:pointer}.app .delete[data-v-de9e5305]{height:50px;background-color:red;margin:10px;border-radius:6px;color:#fff;cursor:pointer}
`, C = (s, t) => {
  const c = s.__vccOpts || s;
  for (const [v, h] of t)
    c[v] = h;
  return c;
}, A = (s) => (k("data-v-de9e5305"), s = s(), x(), s), T = { class: "navbar-center" }, j = /* @__PURE__ */ A(() => /* @__PURE__ */ e("i", { class: "ficon-xinchuangkou" }, null, -1)), q = { class: "app" }, H = { class: "icon center" }, J = { class: "items" }, K = { class: "item" }, R = /* @__PURE__ */ A(() => /* @__PURE__ */ e("div", null, "Path", -1)), W = { class: "item" }, X = /* @__PURE__ */ A(() => /* @__PURE__ */ e("div", null, "Extends", -1)), Y = { class: "versions items" }, Z = { class: "item header" }, ee = /* @__PURE__ */ A(() => /* @__PURE__ */ e("div", { class: "version item" }, [
  /* @__PURE__ */ e("div", null, "v0.0.1"),
  /* @__PURE__ */ e("div", { class: "time" }, "2022-10-24")
], -1)), se = /* @__PURE__ */ A(() => /* @__PURE__ */ e("div", { class: "version item" }, [
  /* @__PURE__ */ e("div", null, "v0.0.12"),
  /* @__PURE__ */ e("div", { class: "time" }, "2023-01-10")
], -1)), te = {
  __name: "app",
  props: ["name", "icon", "color", "url", "extends"],
  setup(s) {
    const t = s, c = L({
      switchVersion: {
        en: "Versions",
        zh: "\u7248\u672C"
      },
      disable: {
        en: "Disable App",
        zh: "\u7981\u7528\u5E94\u7528"
      },
      deleteApp: {
        en: "Delete App",
        zh: "\u5220\u9664\u5E94\u7528"
      }
    });
    function v() {
      S.open({
        color: "warning",
        body: E({ en: "Is the application disabled?", zh: "\u662F\u5426\u7981\u7528\u5E94\u7528\uFF1F" }),
        confirm() {
          V.warning(D, 3e3);
        }
      });
    }
    function h() {
      S.open({
        color: "warning",
        body: E({ en: "Do you delete the application?", zh: "\u662F\u5426\u5220\u9664\u5E94\u7528\uFF1F" }),
        confirm() {
          V.warning(D, 3e3);
        }
      });
    }
    return (l, n) => {
      const g = b("A"), a = b("Navbar");
      return _(), u(m, null, [
        d(a, null, {
          default: p(() => [
            e("div", T, o(t.name || t.url), 1),
            d(g, {
              class: "navbar-right",
              href: t.url,
              target: "_blank"
            }, {
              default: p(() => [
                j
              ]),
              _: 1
            }, 8, ["href"])
          ]),
          _: 1
        }),
        e("div", q, [
          e("div", H, [
            e("i", {
              class: F(s.icon),
              style: z({ color: t.color })
            }, null, 6)
          ]),
          e("div", J, [
            e("div", K, [
              R,
              e("div", null, o(t.url), 1)
            ]),
            e("div", W, [
              X,
              e("div", null, o(t.extends || "default"), 1)
            ])
          ]),
          e("div", Y, [
            e("div", Z, o(i(c).switchVersion), 1),
            ee,
            se
          ]),
          e("div", {
            class: "cancel center",
            onClick: v
          }, o(i(c).disable), 1),
          e("div", {
            class: "delete center",
            onClick: h
          }, o(i(c).deleteApp), 1)
        ])
      ], 64);
    };
  }
}, ne = /* @__PURE__ */ C(te, [["styles", [O]], ["__scopeId", "data-v-de9e5305"]]), f = (s) => (k("data-v-29bc6e26"), s = s(), x(), s), oe = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "navbar-center" }, "Apps", -1)), ae = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "navbar-right" }, null, -1)), ie = { class: "apps items" }, ce = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "item header" }, "Main Apps", -1)), le = ["onClick"], de = { class: "left" }, re = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "right" }, "...", -1)), _e = { class: "apps items" }, ue = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "item header" }, "Sub Apps", -1)), pe = ["onClick"], he = { class: "left" }, ve = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "right" }, "...", -1)), ge = { class: "apps items" }, me = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "item header" }, "Group Apps", -1)), fe = ["onClick"], $e = { class: "left" }, be = /* @__PURE__ */ f(() => /* @__PURE__ */ e("div", { class: "right" }, "...", -1)), ye = {
  pages: { app: ne }
}, ke = /* @__PURE__ */ I({
  ...ye,
  __name: "index",
  setup(s) {
    const t = P("router"), c = {}, v = {}, h = {};
    for (const l in B) {
      const n = B[l], { main: g } = n;
      if (g) {
        if (n.url === "default")
          continue;
        const { apps: a } = n;
        (g.src || g.iframe) && (c[l] = n), a && a.urls && (v[l] = n);
      } else
        n.app && (h[l] = n);
    }
    return (l, n) => {
      const g = b("Navbar");
      return _(), u(m, null, [
        d(g, null, {
          default: p(() => [
            oe,
            ae
          ]),
          _: 1
        }),
        e("div", ie, [
          ce,
          (_(), u(m, null, w(c, (a, y) => e("div", {
            key: y,
            class: "item",
            onClick: (N) => i(t).open("setting/apps/app", a)
          }, [
            e("div", de, [
              e("i", {
                class: F(a.main.icon),
                style: z({ color: a.main.color })
              }, null, 6),
              r(" " + o(a.main.name), 1)
            ]),
            re
          ], 8, le)), 64))
        ]),
        e("div", _e, [
          ue,
          (_(), u(m, null, w(h, (a, y) => e("div", {
            class: "item",
            key: y,
            onClick: (N) => i(t).open("setting/apps/app", a)
          }, [
            e("div", he, [
              e("i", {
                class: F(a.app.icon),
                style: z({ color: a.app.color })
              }, null, 6),
              r(" " + o(a.app.name), 1)
            ]),
            ve
          ], 8, pe)), 64))
        ]),
        e("div", ge, [
          me,
          (_(), u(m, null, w(v, (a, y) => e("div", {
            key: y,
            class: "item",
            onClick: (N) => i(t).open("setting/apps/app", a)
          }, [
            e("div", $e, [
              e("i", {
                class: F(a.main.icon),
                style: z({ color: a.main.color })
              }, null, 6),
              r(" " + o(a.main.name), 1)
            ]),
            be
          ], 8, fe)), 64))
        ])
      ], 64);
    };
  }
}), xe = `.apps.items .item .left i[data-v-29bc6e26]{display:inline-block;width:25px}
`, Ce = /* @__PURE__ */ C(ke, [["styles", [xe]], ["__scopeId", "data-v-29bc6e26"]]), Ae = (s) => (k("data-v-9c952799"), s = s(), x(), s), Fe = { class: "language" }, ze = { class: "items" }, we = ["onClick"], Ee = /* @__PURE__ */ Ae(() => /* @__PURE__ */ e("i", { class: "ficon-confirm" }, null, -1)), Ie = ["onClick"], Se = /* @__PURE__ */ I({
  __name: "language",
  setup(s) {
    function t(c) {
      localStorage.lang = c, location.reload();
    }
    return (c, v) => {
      const h = b("Navbar");
      return _(), u(m, null, [
        d(h, { title: "Language" }),
        e("div", Fe, [
          e("ul", ze, [
            (_(!0), u(m, null, w(i(U), (l, n) => (_(), u(m, null, [
              l.code === i(G) ? (_(), u("li", {
                key: n,
                class: "item active",
                onClick: (g) => c.onSet(l.code)
              }, [
                r(o(l.name) + " ", 1),
                Ee
              ], 8, we)) : (_(), u("li", {
                key: 1,
                class: "item",
                onClick: (g) => t(l.code)
              }, o(l.name), 9, Ie))
            ], 64))), 256))
          ])
        ])
      ], 64);
    };
  }
}), Ne = `.language .items .item.active i.ficon-confirm[data-v-9c952799]{position:absolute;top:18px;right:18px;font-size:15px;color:#39c79a}
`, Be = /* @__PURE__ */ C(Se, [["styles", [Ne]], ["__scopeId", "data-v-9c952799"]]), Ve = I({
  data() {
    return {};
  }
}), De = "", Le = (s) => (k("data-v-19eb3b6d"), s = s(), x(), s), Pe = { class: "version" }, Ue = /* @__PURE__ */ Le(() => /* @__PURE__ */ e("div", null, "v1.0.0", -1));
function Ge(s, t, c, v, h, l) {
  const n = b("Navbar");
  return _(), u("div", Pe, [
    d(n, { title: "Version" }),
    Ue
  ]);
}
const Me = /* @__PURE__ */ C(Ve, [["render", Ge], ["styles", [De]], ["__scopeId", "data-v-19eb3b6d"]]), $ = (s) => (k("data-v-1badaedb"), s = s(), x(), s), Qe = { class: "setting" }, Oe = { class: "language items" }, Te = /* @__PURE__ */ $(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), je = { class: "items" }, qe = /* @__PURE__ */ $(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), He = { class: "items" }, Je = /* @__PURE__ */ $(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ke = { class: "items" }, Re = /* @__PURE__ */ $(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), We = /* @__PURE__ */ $(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Xe = /* @__PURE__ */ $(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ye = /* @__PURE__ */ $(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ze = { class: "items" }, es = /* @__PURE__ */ $(() => /* @__PURE__ */ e("div", null, [
  /* @__PURE__ */ e("span", { style: { "font-weight": "normal" } }, "0.0.1 "),
  /* @__PURE__ */ e("i", { class: "ficon-right" })
], -1)), ss = { class: "items" }, ts = {
  pages: { apps: Ce, language: Be, version: Me }
}, ns = /* @__PURE__ */ I({
  ...ts,
  __name: "index",
  setup(s) {
    const t = L({
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
    function c() {
      S.open({
        color: "warning",
        body: E({ en: "Do you want to log out?", zh: "\u662F\u5426\u9000\u51FA\u767B\u5F55\uFF1F" }),
        confirm() {
          M("login"), Q("login");
        }
      });
    }
    return (v, h) => {
      const l = b("Navbar"), n = b("A");
      return _(), u(m, null, [
        d(l, {
          title: i(t).setting
        }, null, 8, ["title"]),
        e("div", Qe, [
          e("div", Oe, [
            d(n, {
              class: "item header",
              href: "setting/language"
            }, {
              default: p(() => [
                r(o(i(t).language) + " ", 1),
                Te
              ]),
              _: 1
            })
          ]),
          e("div", je, [
            d(n, {
              class: "item header",
              href: "setting/apps"
            }, {
              default: p(() => [
                r(o(i(t).appManagement) + " ", 1),
                qe
              ]),
              _: 1
            })
          ]),
          e("div", He, [
            d(n, {
              class: "item header",
              href: "group"
            }, {
              default: p(() => [
                r(o(i(t).appsGroup) + " ", 1),
                Je
              ]),
              _: 1
            })
          ]),
          e("div", Ke, [
            d(n, {
              class: "item",
              href: "pages/faq"
            }, {
              default: p(() => [
                r(o(i(t).FAQ) + " ", 1),
                Re
              ]),
              _: 1
            }),
            d(n, {
              class: "item",
              href: "pages/feedback"
            }, {
              default: p(() => [
                r(o(i(t).feedback) + " ", 1),
                We
              ]),
              _: 1
            }),
            d(n, {
              class: "item",
              href: "pages/privacy"
            }, {
              default: p(() => [
                r(o(i(t).privacyPolicy) + " ", 1),
                Xe
              ]),
              _: 1
            }),
            d(n, {
              class: "item",
              href: "pages/about"
            }, {
              default: p(() => [
                r(o(i(t).about) + " ", 1),
                Ye
              ]),
              _: 1
            })
          ]),
          e("div", Ze, [
            d(n, {
              class: "item header",
              href: "setting/version"
            }, {
              default: p(() => [
                r(o(i(t).versionUpdates) + " ", 1),
                es
              ]),
              _: 1
            })
          ]),
          e("div", ss, [
            e("div", {
              class: "item header",
              onClick: c
            }, o(i(t).logout), 1)
          ])
        ])
      ], 64);
    };
  }
}), os = "", ds = /* @__PURE__ */ C(ns, [["styles", [os]], ["__scopeId", "data-v-1badaedb"]]);
export {
  ds as default
};
