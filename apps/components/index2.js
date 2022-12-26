import { Langs as k } from "/view-ui/libs/view.js";
import { resolveComponent as _, openBlock as a, createElementBlock as o, Fragment as h, createVNode as t, withCtx as s, renderList as g, toDisplayString as $, createStaticVNode as A, pushScopeId as S, popScopeId as N, createElementVNode as e, createTextVNode as c, defineAsyncComponent as b } from "/view-ui/libs/vue.js";
import { open as X } from "/view-ui/libs/navigator.js";
const Y = `h3[data-v-3385ce95]{padding:14px}.X[data-v-3385ce95]{flex:none;display:flex}.X .itemX[data-v-3385ce95]{display:flex;justify-content:center;align-items:center;flex:none;width:120px;height:200px;margin:0 4px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}.Y[data-v-3385ce95]{display:flex;flex-direction:column;height:420px}.Y .itemY[data-v-3385ce95]{display:flex;justify-content:center;align-items:center;flex:none;height:120px;margin:5px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}
`, u = (d, p) => {
  const f = d.__vccOpts || d;
  for (const [v, r] of p)
    f[v] = r;
  return f;
}, I = {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: { open: X }
}, y = (d) => (S("data-v-3385ce95"), d = d(), N(), d), C = /* @__PURE__ */ y(() => /* @__PURE__ */ e("h3", null, "Scroll X", -1)), w = /* @__PURE__ */ y(() => /* @__PURE__ */ e("h3", null, "Scroll Y", -1)), E = /* @__PURE__ */ y(() => /* @__PURE__ */ e("h3", null, "Scroll X / Y", -1)), B = /* @__PURE__ */ A('<div class="padding" data-v-3385ce95><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div></div>', 1);
function V(d, p, f, v, r, x) {
  const m = _("Navbar"), i = _("Scroll", !0);
  return a(), o(h, null, [
    t(m, {
      title: "Scroll",
      back: "/components"
    }),
    C,
    t(i, {
      direction: "X",
      class: "X"
    }, {
      default: s(() => [
        (a(!0), o(h, null, g(r.list, (n) => (a(), o("div", {
          key: n,
          class: "itemX"
        }, $(n), 1))), 128))
      ]),
      _: 1
    }),
    w,
    t(i, {
      direction: "Y",
      class: "Y"
    }, {
      default: s(() => [
        (a(!0), o(h, null, g(r.list, (n) => (a(), o("div", {
          key: n,
          class: "itemY"
        }, $(n), 1))), 128))
      ]),
      _: 1
    }),
    E,
    t(i, {
      direction: "Y",
      class: "Y"
    }, {
      default: s(() => [
        t(i, {
          direction: "X",
          class: "X"
        }, {
          default: s(() => [
            (a(!0), o(h, null, g(r.list, (n) => (a(), o("div", {
              key: n,
              class: "itemX"
            }, $(n), 1))), 128))
          ]),
          _: 1
        }),
        (a(!0), o(h, null, g(r.list, (n) => (a(), o("div", {
          key: n,
          class: "itemY"
        }, $(n), 1))), 128))
      ]),
      _: 1
    }),
    B
  ], 64);
}
const z = /* @__PURE__ */ u(I, [["render", V], ["styles", [Y]], ["__scopeId", "data-v-3385ce95"]]), F = {}, R = { class: "items" }, T = { class: "item" }, j = /* @__PURE__ */ c("category?id=1"), L = { class: "item" }, D = /* @__PURE__ */ c("category?id=2"), O = { class: "item" }, q = /* @__PURE__ */ c("Shop");
function G(d, p) {
  const f = _("Navbar"), v = _("A");
  return a(), o(h, null, [
    t(f, { title: "Router" }),
    e("ul", R, [
      e("li", T, [
        t(v, {
          class: "link",
          href: "#/category/index?id=1"
        }, {
          default: s(() => [
            j
          ]),
          _: 1
        })
      ]),
      e("li", L, [
        t(v, {
          class: "link",
          href: "#/category/index?id=2"
        }, {
          default: s(() => [
            D
          ]),
          _: 1
        })
      ]),
      e("li", O, [
        t(v, {
          class: "link",
          href: "#/shop/details?id=123"
        }, {
          default: s(() => [
            q
          ]),
          _: 1
        })
      ])
    ])
  ], 64);
}
const H = /* @__PURE__ */ u(F, [["render", G]]), J = {
  pages: { async: b(() => import("./base/child/async.js")) }
}, K = { class: "items" }, M = /* @__PURE__ */ c("Async Test");
function P(d, p, f, v, r, x) {
  const m = _("Navbar"), i = _("A");
  return a(), o(h, null, [
    t(m, { title: "Child" }),
    e("div", K, [
      t(i, {
        class: "item",
        href: "components/base/child/async"
      }, {
        default: s(() => [
          M
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Q = /* @__PURE__ */ u(J, [["render", P]]), U = {
  pages: { scroll: z, router: H, child: Q }
}, W = { class: "items" }, Z = /* @__PURE__ */ c(" Scroll "), tt = /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1), et = /* @__PURE__ */ c(" Router "), it = /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1), st = /* @__PURE__ */ c(" Child "), ct = /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1);
function dt(d, p, f, v, r, x) {
  const m = _("Navbar"), i = _("A");
  return a(), o(h, null, [
    t(m, { title: "Base" }),
    e("div", W, [
      t(i, {
        class: "item",
        href: "components/base/scroll"
      }, {
        default: s(() => [
          Z,
          tt
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/base/router"
      }, {
        default: s(() => [
          et,
          it
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/base/child"
      }, {
        default: s(() => [
          st,
          ct
        ]),
        _: 1
      })
    ])
  ], 64);
}
const at = /* @__PURE__ */ u(U, [["render", dt]]), ot = k({
  title: {
    en: "Components",
    zh: "\u7EC4\u4EF6\u5E93"
  }
}), nt = {
  pages: {
    base: at,
    form: b(() => import("./form/index.js")),
    image: b(() => import("./image/index.js"))
  },
  url: "form/select",
  setup() {
    return { langs: ot };
  }
}, lt = "", l = (d) => (S("data-v-12fd64b0"), d = d(), N(), d), vt = { class: "items" }, _t = /* @__PURE__ */ c(" Base "), rt = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), ht = /* @__PURE__ */ c(" Scroll "), ft = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), mt = /* @__PURE__ */ c(" Router "), pt = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), ut = /* @__PURE__ */ c(" Child -> Async Test "), gt = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), $t = { class: "items" }, xt = /* @__PURE__ */ c("Form "), bt = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), yt = /* @__PURE__ */ c(" Input "), St = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Nt = /* @__PURE__ */ c("Select "), kt = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), At = /* @__PURE__ */ c(" Switch "), Xt = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Yt = { class: "items" }, It = /* @__PURE__ */ c(" Image "), Ct = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), wt = /* @__PURE__ */ c(" Image "), Et = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1)), Bt = /* @__PURE__ */ c(" Images "), Vt = /* @__PURE__ */ l(() => /* @__PURE__ */ e("i", { class: "ficon-right" }, null, -1));
function zt(d, p, f, v, r, x) {
  const m = _("Navbar"), i = _("A");
  return a(), o(h, null, [
    t(m, {
      title: v.langs.title
    }, null, 8, ["title"]),
    e("div", vt, [
      t(i, {
        class: "header item",
        href: "components/base"
      }, {
        default: s(() => [
          _t,
          rt
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/base/scroll?a=1&b=2"
      }, {
        default: s(() => [
          ht,
          ft
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/base/router"
      }, {
        default: s(() => [
          mt,
          pt
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/base/child/async"
      }, {
        default: s(() => [
          ut,
          gt
        ]),
        _: 1
      })
    ]),
    e("div", $t, [
      t(i, {
        class: "header item",
        href: "components/form"
      }, {
        default: s(() => [
          xt,
          bt
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/form/input"
      }, {
        default: s(() => [
          yt,
          St
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/form/select"
      }, {
        default: s(() => [
          Nt,
          kt
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/form/switch"
      }, {
        default: s(() => [
          At,
          Xt
        ]),
        _: 1
      })
    ]),
    e("div", Yt, [
      t(i, {
        class: "header item",
        href: "components/image"
      }, {
        default: s(() => [
          It,
          Ct
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/image/image"
      }, {
        default: s(() => [
          wt,
          Et
        ]),
        _: 1
      }),
      t(i, {
        class: "item",
        href: "components/image/images"
      }, {
        default: s(() => [
          Bt,
          Vt
        ]),
        _: 1
      })
    ])
  ], 64);
}
const jt = /* @__PURE__ */ u(nt, [["render", zt], ["styles", [lt]], ["__scopeId", "data-v-12fd64b0"]]);
export {
  u as _,
  jt as i
};
