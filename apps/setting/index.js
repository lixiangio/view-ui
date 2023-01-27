import { resolveComponent as m, openBlock as d, createElementBlock as _, Fragment as h, createVNode as i, withCtx as u, createElementVNode as e, toDisplayString as n, normalizeClass as z, normalizeStyle as C, unref as o, pushScopeId as f, popScopeId as $, defineComponent as y, renderList as F, createTextVNode as p, createCommentVNode as I } from "/view-ui/libs/vue.js";
import { Langs as A, urls as N, languages as S, language as E, Lang as V } from "/view-ui/libs/view.js";
import { open as B, pushState as L } from "/view-ui/libs/navigator.js";
import { confirm as U } from "/view-ui/libs/viewui.js";
const D = `.app .icon[data-v-80d4143c]{height:150px}.app .icon i[data-v-80d4143c]{font-size:50px}.app .versions .version .time[data-v-80d4143c]{color:#888}.app .cancel[data-v-80d4143c]{height:50px;background-color:#e9e9e9;margin:10px;border-radius:6px;cursor:pointer}.app .delete[data-v-80d4143c]{height:50px;background-color:red;margin:10px;border-radius:6px;color:#fff;cursor:pointer}
`, b = (t, s) => {
  const a = t.__vccOpts || t;
  for (const [g, l] of s)
    a[g] = l;
  return a;
}, x = (t) => (f("data-v-80d4143c"), t = t(), $(), t), P = { class: "navbar-center" }, Q = /* @__PURE__ */ x(() => /* @__PURE__ */ e("div", { class: "navbar-right" }, null, -1)), G = { class: "app" }, M = { class: "icon center" }, O = { class: "versions items" }, q = { class: "item header" }, T = /* @__PURE__ */ x(() => /* @__PURE__ */ e("div", { class: "version item" }, [
  /* @__PURE__ */ e("div", null, "v0.0.1"),
  /* @__PURE__ */ e("div", { class: "time" }, "2022-10-24")
], -1)), j = /* @__PURE__ */ x(() => /* @__PURE__ */ e("div", { class: "version item" }, [
  /* @__PURE__ */ e("div", null, "v0.0.12"),
  /* @__PURE__ */ e("div", { class: "time" }, "2023-01-10")
], -1)), H = { class: "cancel center" }, J = { class: "delete center" }, K = {
  __name: "app",
  props: ["name", "icon", "color"],
  setup(t) {
    const s = t, a = A({
      switchVersion: {
        en: "Switch Version",
        zh: "\u7248\u672C\u5207\u6362"
      },
      unpublish: {
        en: "Unpublish",
        zh: "\u53D6\u6D88\u53D1\u5E03"
      },
      deleteApp: {
        en: "Delete App",
        zh: "\u5220\u9664\u5E94\u7528"
      }
    });
    return (g, l) => {
      const r = m("Navbar");
      return d(), _(h, null, [
        i(r, null, {
          default: u(() => [
            e("div", P, n(s.name), 1),
            Q
          ]),
          _: 1
        }),
        e("div", G, [
          e("div", M, [
            e("i", {
              class: z(t.icon),
              style: C({ color: s.color })
            }, null, 6)
          ]),
          e("div", O, [
            e("div", q, n(o(a).switchVersion), 1),
            T,
            j
          ]),
          e("div", H, n(o(a).unpublish), 1),
          e("div", J, n(o(a).deleteApp), 1)
        ])
      ], 64);
    };
  }
}, R = /* @__PURE__ */ b(K, [["styles", [D]], ["__scopeId", "data-v-80d4143c"]]), k = (t) => (f("data-v-3fcada1b"), t = t(), $(), t), W = /* @__PURE__ */ k(() => /* @__PURE__ */ e("div", { class: "navbar-center" }, "Apps", -1)), X = /* @__PURE__ */ k(() => /* @__PURE__ */ e("div", { class: "navbar-right" }, null, -1)), Y = { class: "apps items" }, Z = ["onClick"], ee = { class: "left" }, te = /* @__PURE__ */ k(() => /* @__PURE__ */ e("div", { class: "right" }, "...", -1)), se = {
  pages: { app: R }
}, oe = /* @__PURE__ */ y({
  ...se,
  __name: "index",
  setup(t) {
    return (s, a) => {
      const g = m("Navbar");
      return d(), _(h, null, [
        i(g, null, {
          default: u(() => [
            W,
            X
          ]),
          _: 1
        }),
        e("div", Y, [
          (d(!0), _(h, null, F(o(N), (l, r) => (d(), _(h, null, [
            l.icon ? (d(), _("div", {
              class: "item",
              key: r,
              onClick: (c) => s.$router.open("setting/apps/app", l)
            }, [
              e("div", ee, [
                e("i", {
                  class: z(l.icon),
                  style: C({ color: l.color })
                }, null, 6),
                p(" " + n(l.name), 1)
              ]),
              te
            ], 8, Z)) : I("", !0)
          ], 64))), 256))
        ])
      ], 64);
    };
  }
}), ne = `.apps.items .item .left i[data-v-3fcada1b]{margin-right:5px}
`, ae = /* @__PURE__ */ b(oe, [["styles", [ne]], ["__scopeId", "data-v-3fcada1b"]]), ce = (t) => (f("data-v-9c952799"), t = t(), $(), t), ie = { class: "language" }, le = { class: "items" }, re = ["onClick"], de = /* @__PURE__ */ ce(() => /* @__PURE__ */ e("i", { class: "ficon-confirm" }, null, -1)), _e = ["onClick"], ue = /* @__PURE__ */ y({
  __name: "language",
  setup(t) {
    function s(a) {
      localStorage.lang = a, location.reload();
    }
    return (a, g) => {
      const l = m("Navbar");
      return d(), _(h, null, [
        i(l, { title: "Language" }),
        e("div", ie, [
          e("ul", le, [
            (d(!0), _(h, null, F(o(S), (r, c) => (d(), _(h, null, [
              r.code === o(E) ? (d(), _("li", {
                key: c,
                class: "item active",
                onClick: (w) => a.onSet(r.code)
              }, [
                p(n(r.name) + " ", 1),
                de
              ], 8, re)) : (d(), _("li", {
                key: 1,
                class: "item",
                onClick: (w) => s(r.code)
              }, n(r.name), 9, _e))
            ], 64))), 256))
          ])
        ])
      ], 64);
    };
  }
}), pe = `.language .items .item.active i.ficon-confirm[data-v-9c952799]{position:absolute;top:18px;right:18px;font-size:15px;color:#39c79a}
`, he = /* @__PURE__ */ b(ue, [["styles", [pe]], ["__scopeId", "data-v-9c952799"]]), ve = y({
  data() {
    return {};
  }
}), ge = "", me = (t) => (f("data-v-19eb3b6d"), t = t(), $(), t), fe = { class: "version" }, $e = /* @__PURE__ */ me(() => /* @__PURE__ */ e("div", null, "v1.0.0", -1));
function be(t, s, a, g, l, r) {
  const c = m("Navbar");
  return d(), _("div", fe, [
    i(c, { title: "Version" }),
    $e
  ]);
}
const ye = /* @__PURE__ */ b(ve, [["render", be], ["styles", [ge]], ["__scopeId", "data-v-19eb3b6d"]]), v = (t) => (f("data-v-1badaedb"), t = t(), $(), t), xe = { class: "setting" }, ke = { class: "language items" }, ze = /* @__PURE__ */ v(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ce = { class: "items" }, Fe = /* @__PURE__ */ v(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ae = { class: "items" }, we = /* @__PURE__ */ v(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ie = { class: "items" }, Ne = /* @__PURE__ */ v(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Se = /* @__PURE__ */ v(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ee = /* @__PURE__ */ v(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Ve = /* @__PURE__ */ v(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Be = { class: "items" }, Le = /* @__PURE__ */ v(() => /* @__PURE__ */ e("div", null, [
  /* @__PURE__ */ e("span", { style: { "font-weight": "normal" } }, "0.0.1 "),
  /* @__PURE__ */ e("i", { class: "ficon-right" })
], -1)), Ue = { class: "items" }, De = {
  pages: { apps: ae, language: he, version: ye }
}, Pe = /* @__PURE__ */ y({
  ...De,
  __name: "index",
  setup(t) {
    const s = A({
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
    function a() {
      U.open({
        color: "warning",
        body: V({ en: "Do you want to log out?", zh: "\u662F\u5426\u9000\u51FA\u767B\u5F55\uFF1F" }),
        confirm() {
          B("login"), L("login");
        }
      });
    }
    return (g, l) => {
      const r = m("Navbar"), c = m("A");
      return d(), _(h, null, [
        i(r, {
          title: o(s).setting
        }, null, 8, ["title"]),
        e("div", xe, [
          e("div", ke, [
            i(c, {
              class: "item header",
              href: "setting/language"
            }, {
              default: u(() => [
                p(n(o(s).language) + " ", 1),
                ze
              ]),
              _: 1
            })
          ]),
          e("div", Ce, [
            i(c, {
              class: "item header",
              href: "setting/apps"
            }, {
              default: u(() => [
                p(n(o(s).appManagement) + " ", 1),
                Fe
              ]),
              _: 1
            })
          ]),
          e("div", Ae, [
            i(c, {
              class: "item header",
              href: "group"
            }, {
              default: u(() => [
                p(n(o(s).appsGroup) + " ", 1),
                we
              ]),
              _: 1
            })
          ]),
          e("div", Ie, [
            i(c, {
              class: "item",
              href: "pages/faq"
            }, {
              default: u(() => [
                p(n(o(s).FAQ) + " ", 1),
                Ne
              ]),
              _: 1
            }),
            i(c, {
              class: "item",
              href: "pages/feedback"
            }, {
              default: u(() => [
                p(n(o(s).feedback) + " ", 1),
                Se
              ]),
              _: 1
            }),
            i(c, {
              class: "item",
              href: "pages/privacy"
            }, {
              default: u(() => [
                p(n(o(s).privacyPolicy) + " ", 1),
                Ee
              ]),
              _: 1
            }),
            i(c, {
              class: "item",
              href: "pages/about"
            }, {
              default: u(() => [
                p(n(o(s).about) + " ", 1),
                Ve
              ]),
              _: 1
            })
          ]),
          e("div", Be, [
            i(c, {
              class: "item header",
              href: "setting/version"
            }, {
              default: u(() => [
                p(n(o(s).versionUpdates) + " ", 1),
                Le
              ]),
              _: 1
            })
          ]),
          e("div", Ue, [
            e("div", {
              class: "item header",
              onClick: a
            }, n(o(s).logout), 1)
          ])
        ])
      ], 64);
    };
  }
}), Qe = "", Te = /* @__PURE__ */ b(Pe, [["styles", [Qe]], ["__scopeId", "data-v-1badaedb"]]);
export {
  Te as default
};
