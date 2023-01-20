import { Langs as X } from "/view-ui/libs/view.js";
import { resolveComponent as _, openBlock as s, createElementBlock as c, Fragment as r, createVNode as d, withCtx as t, renderList as $, toDisplayString as x, createStaticVNode as S, pushScopeId as N, popScopeId as I, createElementVNode as i, createTextVNode as v, defineAsyncComponent as b } from "/view-ui/libs/vue.js";
import { open as Y } from "/view-ui/libs/navigator.js";
const k = `h3[data-v-3385ce95]{padding:14px}.X[data-v-3385ce95]{flex:none;display:flex}.X .itemX[data-v-3385ce95]{display:flex;justify-content:center;align-items:center;flex:none;width:120px;height:200px;margin:0 4px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}.Y[data-v-3385ce95]{display:flex;flex-direction:column;height:420px}.Y .itemY[data-v-3385ce95]{display:flex;justify-content:center;align-items:center;flex:none;height:120px;margin:5px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}
`, m = (e, u) => {
  const p = e.__vccOpts || e;
  for (const [h, f] of u)
    p[h] = f;
  return p;
}, A = {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: { open: Y }
}, y = (e) => (N("data-v-3385ce95"), e = e(), I(), e), w = /* @__PURE__ */ y(() => /* @__PURE__ */ i("h3", null, "Scroll X", -1)), C = /* @__PURE__ */ y(() => /* @__PURE__ */ i("h3", null, "Scroll Y", -1)), E = /* @__PURE__ */ y(() => /* @__PURE__ */ i("h3", null, "Scroll X / Y", -1)), z = /* @__PURE__ */ S('<div class="padding" data-v-3385ce95><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div></div>', 1);
function B(e, u, p, h, f, g) {
  const l = _("Navbar"), a = _("Scroll", !0);
  return s(), c(r, null, [
    d(l, {
      title: "Scroll",
      back: "/components"
    }),
    w,
    d(a, {
      direction: "X",
      class: "X"
    }, {
      default: t(() => [
        (s(!0), c(r, null, $(f.list, (o) => (s(), c("div", {
          key: o,
          class: "itemX"
        }, x(o), 1))), 128))
      ]),
      _: 1
    }),
    C,
    d(a, {
      direction: "Y",
      class: "Y"
    }, {
      default: t(() => [
        (s(!0), c(r, null, $(f.list, (o) => (s(), c("div", {
          key: o,
          class: "itemY"
        }, x(o), 1))), 128))
      ]),
      _: 1
    }),
    E,
    d(a, {
      direction: "Y",
      class: "Y"
    }, {
      default: t(() => [
        d(a, {
          direction: "X",
          class: "X"
        }, {
          default: t(() => [
            (s(!0), c(r, null, $(f.list, (o) => (s(), c("div", {
              key: o,
              class: "itemX"
            }, x(o), 1))), 128))
          ]),
          _: 1
        }),
        (s(!0), c(r, null, $(f.list, (o) => (s(), c("div", {
          key: o,
          class: "itemY"
        }, x(o), 1))), 128))
      ]),
      _: 1
    }),
    z
  ], 64);
}
const R = /* @__PURE__ */ m(A, [["render", B], ["styles", [k]], ["__scopeId", "data-v-3385ce95"]]), V = `.test[data-v-ae903f62]{font-size:15px}
`, F = {
  app: {}
}, T = /* @__PURE__ */ S("<div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div><div data-v-ae903f62>-</div><div data-v-ae903f62>--</div>", 106);
function j(e, u, p, h, f, g) {
  const l = _("Navbar");
  return s(), c(r, null, [
    d(l, { title: "Async Test" }),
    T
  ], 64);
}
const L = /* @__PURE__ */ m(F, [["render", j], ["styles", [V]], ["__scopeId", "data-v-ae903f62"]]), D = {
  pages: { async: L }
}, O = { class: "items" }, q = /* @__PURE__ */ v(" Async Test "), G = /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1), H = /* @__PURE__ */ v("category?id=1"), J = /* @__PURE__ */ v("Shop");
function K(e, u, p, h, f, g) {
  const l = _("Navbar"), a = _("A");
  return s(), c(r, null, [
    d(l, { title: "Router" }),
    i("div", O, [
      d(a, {
        class: "item",
        href: "components/base/router/async"
      }, {
        default: t(() => [
          q,
          G
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "category/index?id=1"
      }, {
        default: t(() => [
          H
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "shop/details?id=123"
      }, {
        default: t(() => [
          J
        ]),
        _: 1
      })
    ])
  ], 64);
}
const M = /* @__PURE__ */ m(D, [["render", K]]), P = {
  app: {},
  pages: { scroll: R, router: M }
}, Q = { class: "items" }, U = /* @__PURE__ */ v(" Scroll "), W = /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1), Z = /* @__PURE__ */ v(" Router "), dd = /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1);
function ad(e, u, p, h, f, g) {
  const l = _("Navbar"), a = _("A");
  return s(), c(r, null, [
    d(l, { title: "Base" }),
    i("div", Q, [
      d(a, {
        class: "item",
        href: "components/base/scroll"
      }, {
        default: t(() => [
          U,
          W
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/base/router"
      }, {
        default: t(() => [
          Z,
          dd
        ]),
        _: 1
      })
    ])
  ], 64);
}
const id = /* @__PURE__ */ m(P, [["render", ad]]), td = X({
  title: {
    en: "Components",
    zh: "\u7EC4\u4EF6\u5E93"
  }
}), vd = {
  app: {},
  pages: {
    base: id,
    form: b(() => import("./form/index.js")),
    image: b(() => import("./image/index.js"))
  },
  setup() {
    return { langs: td };
  }
}, ed = "", n = (e) => (N("data-v-34fc0071"), e = e(), I(), e), sd = { class: "items" }, cd = /* @__PURE__ */ v(" Base "), od = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), nd = /* @__PURE__ */ v(" Scroll "), fd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), ld = /* @__PURE__ */ v(" Router "), rd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), _d = /* @__PURE__ */ v(" Router -> Async "), pd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), hd = { class: "items" }, ud = /* @__PURE__ */ v("Form "), md = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), gd = /* @__PURE__ */ v(" Input "), $d = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), xd = /* @__PURE__ */ v("Select "), yd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), bd = /* @__PURE__ */ v(" Switch "), Sd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), Nd = { class: "items" }, Id = /* @__PURE__ */ v(" Image "), Xd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), Yd = /* @__PURE__ */ v(" Image "), kd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1)), Ad = /* @__PURE__ */ v(" Images "), wd = /* @__PURE__ */ n(() => /* @__PURE__ */ i("i", { class: "ficon-right" }, null, -1));
function Cd(e, u, p, h, f, g) {
  const l = _("Navbar"), a = _("A");
  return s(), c(r, null, [
    d(l, {
      title: h.langs.title
    }, null, 8, ["title"]),
    i("div", sd, [
      d(a, {
        class: "header item",
        href: "components/base"
      }, {
        default: t(() => [
          cd,
          od
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/base/scroll?a=1&b=2"
      }, {
        default: t(() => [
          nd,
          fd
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/base/router"
      }, {
        default: t(() => [
          ld,
          rd
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/base/router/async"
      }, {
        default: t(() => [
          _d,
          pd
        ]),
        _: 1
      })
    ]),
    i("div", hd, [
      d(a, {
        class: "header item",
        href: "components/form"
      }, {
        default: t(() => [
          ud,
          md
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/form/input"
      }, {
        default: t(() => [
          gd,
          $d
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/form/select"
      }, {
        default: t(() => [
          xd,
          yd
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/form/switch"
      }, {
        default: t(() => [
          bd,
          Sd
        ]),
        _: 1
      })
    ]),
    i("div", Nd, [
      d(a, {
        class: "header item",
        href: "components/image"
      }, {
        default: t(() => [
          Id,
          Xd
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/image/image"
      }, {
        default: t(() => [
          Yd,
          kd
        ]),
        _: 1
      }),
      d(a, {
        class: "item",
        href: "components/image/images"
      }, {
        default: t(() => [
          Ad,
          wd
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Rd = /* @__PURE__ */ m(vd, [["render", Cd], ["styles", [ed]], ["__scopeId", "data-v-34fc0071"]]);
export {
  m as _,
  Rd as i
};
