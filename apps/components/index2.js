import { Langs as X } from "/view-ui/libs/view.js";
import { resolveComponent as h, openBlock as e, createElementBlock as s, Fragment as _, createVNode as d, withCtx as a, renderList as $, toDisplayString as x, createStaticVNode as S, pushScopeId as N, popScopeId as I, createElementVNode as t, createTextVNode as v, defineAsyncComponent as b } from "/view-ui/libs/vue.js";
import { open as Y } from "/view-ui/libs/navigator.js";
const k = `h3[data-v-3385ce95]{padding:14px}.X[data-v-3385ce95]{flex:none;display:flex}.X .itemX[data-v-3385ce95]{display:flex;justify-content:center;align-items:center;flex:none;width:120px;height:200px;margin:0 4px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}.Y[data-v-3385ce95]{display:flex;flex-direction:column;height:420px}.Y .itemY[data-v-3385ce95]{display:flex;justify-content:center;align-items:center;flex:none;height:120px;margin:5px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}
`, m = (c, u) => {
  const f = c.__vccOpts || c;
  for (const [p, l] of u)
    f[p] = l;
  return f;
}, A = {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: { open: Y }
}, y = (c) => (N("data-v-3385ce95"), c = c(), I(), c), w = /* @__PURE__ */ y(() => /* @__PURE__ */ t("h3", null, "Scroll X", -1)), C = /* @__PURE__ */ y(() => /* @__PURE__ */ t("h3", null, "Scroll Y", -1)), E = /* @__PURE__ */ y(() => /* @__PURE__ */ t("h3", null, "Scroll X / Y", -1)), z = /* @__PURE__ */ S('<div class="padding" data-v-3385ce95><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div><div data-v-3385ce95>-</div><div data-v-3385ce95>--</div></div>', 1);
function B(c, u, f, p, l, g) {
  const r = h("Navbar"), i = h("Scroll", !0);
  return e(), s(_, null, [
    d(r, {
      title: "Scroll",
      back: "/components"
    }),
    w,
    d(i, {
      direction: "X",
      class: "X"
    }, {
      default: a(() => [
        (e(!0), s(_, null, $(l.list, (o) => (e(), s("div", {
          key: o,
          class: "itemX"
        }, x(o), 1))), 128))
      ]),
      _: 1
    }),
    C,
    d(i, {
      direction: "Y",
      class: "Y"
    }, {
      default: a(() => [
        (e(!0), s(_, null, $(l.list, (o) => (e(), s("div", {
          key: o,
          class: "itemY"
        }, x(o), 1))), 128))
      ]),
      _: 1
    }),
    E,
    d(i, {
      direction: "Y",
      class: "Y"
    }, {
      default: a(() => [
        d(i, {
          direction: "X",
          class: "X"
        }, {
          default: a(() => [
            (e(!0), s(_, null, $(l.list, (o) => (e(), s("div", {
              key: o,
              class: "itemX"
            }, x(o), 1))), 128))
          ]),
          _: 1
        }),
        (e(!0), s(_, null, $(l.list, (o) => (e(), s("div", {
          key: o,
          class: "itemY"
        }, x(o), 1))), 128))
      ]),
      _: 1
    }),
    z
  ], 64);
}
const R = /* @__PURE__ */ m(A, [["render", B], ["styles", [k]], ["__scopeId", "data-v-3385ce95"]]), V = `.test[data-v-550dc700]{font-size:15px}
`, F = {}, T = /* @__PURE__ */ S("<div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div><div data-v-550dc700>-</div><div data-v-550dc700>--</div>", 106);
function j(c, u, f, p, l, g) {
  const r = h("Navbar");
  return e(), s(_, null, [
    d(r, { title: "Async Test" }),
    T
  ], 64);
}
const L = /* @__PURE__ */ m(F, [["render", j], ["styles", [V]], ["__scopeId", "data-v-550dc700"]]), D = {
  pages: { async: L }
}, O = { class: "items" }, q = /* @__PURE__ */ v("category?id=1"), G = /* @__PURE__ */ v("category?id=2"), H = /* @__PURE__ */ v("Shop"), J = /* @__PURE__ */ v(" Async Test "), K = /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1);
function M(c, u, f, p, l, g) {
  const r = h("Navbar"), i = h("A");
  return e(), s(_, null, [
    d(r, { title: "Router" }),
    t("div", O, [
      d(i, {
        class: "item",
        href: "category/index?id=1"
      }, {
        default: a(() => [
          q
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "category/index?id=2"
      }, {
        default: a(() => [
          G
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "shop/details?id=123"
      }, {
        default: a(() => [
          H
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/base/router/async"
      }, {
        default: a(() => [
          J,
          K
        ]),
        _: 1
      })
    ])
  ], 64);
}
const P = /* @__PURE__ */ m(D, [["render", M]]), Q = {
  pages: { scroll: R, router: P }
}, U = { class: "items" }, W = /* @__PURE__ */ v(" Scroll "), Z = /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1), dd = /* @__PURE__ */ v(" Router "), id = /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1);
function td(c, u, f, p, l, g) {
  const r = h("Navbar"), i = h("A");
  return e(), s(_, null, [
    d(r, { title: "Base" }),
    t("div", U, [
      d(i, {
        class: "item",
        href: "components/base/scroll"
      }, {
        default: a(() => [
          W,
          Z
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/base/router"
      }, {
        default: a(() => [
          dd,
          id
        ]),
        _: 1
      })
    ])
  ], 64);
}
const ad = /* @__PURE__ */ m(Q, [["render", td]]), vd = X({
  title: {
    en: "Components",
    zh: "\u7EC4\u4EF6\u5E93"
  }
}), cd = {
  pages: {
    base: ad,
    form: b(() => import("./form/index.js")),
    image: b(() => import("./image/index.js"))
  },
  url: "form/select",
  setup() {
    return { langs: vd };
  }
}, ed = "", n = (c) => (N("data-v-fe45685b"), c = c(), I(), c), sd = { class: "items" }, od = /* @__PURE__ */ v(" Base "), nd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), ld = /* @__PURE__ */ v(" Scroll "), rd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), _d = /* @__PURE__ */ v(" Router "), hd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), fd = /* @__PURE__ */ v(" Router -> Async "), pd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), ud = { class: "items" }, md = /* @__PURE__ */ v("Form "), gd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), $d = /* @__PURE__ */ v(" Input "), xd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), yd = /* @__PURE__ */ v("Select "), bd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), Sd = /* @__PURE__ */ v(" Switch "), Nd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), Id = { class: "items" }, Xd = /* @__PURE__ */ v(" Image "), Yd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), kd = /* @__PURE__ */ v(" Image "), Ad = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1)), wd = /* @__PURE__ */ v(" Images "), Cd = /* @__PURE__ */ n(() => /* @__PURE__ */ t("i", { class: "ficon-right" }, null, -1));
function Ed(c, u, f, p, l, g) {
  const r = h("Navbar"), i = h("A");
  return e(), s(_, null, [
    d(r, {
      title: p.langs.title
    }, null, 8, ["title"]),
    t("div", sd, [
      d(i, {
        class: "header item",
        href: "components/base"
      }, {
        default: a(() => [
          od,
          nd
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/base/scroll?a=1&b=2"
      }, {
        default: a(() => [
          ld,
          rd
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/base/router"
      }, {
        default: a(() => [
          _d,
          hd
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/base/router/async"
      }, {
        default: a(() => [
          fd,
          pd
        ]),
        _: 1
      })
    ]),
    t("div", ud, [
      d(i, {
        class: "header item",
        href: "components/form"
      }, {
        default: a(() => [
          md,
          gd
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/form/input"
      }, {
        default: a(() => [
          $d,
          xd
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/form/select"
      }, {
        default: a(() => [
          yd,
          bd
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/form/switch"
      }, {
        default: a(() => [
          Sd,
          Nd
        ]),
        _: 1
      })
    ]),
    t("div", Id, [
      d(i, {
        class: "header item",
        href: "components/image"
      }, {
        default: a(() => [
          Xd,
          Yd
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/image/image"
      }, {
        default: a(() => [
          kd,
          Ad
        ]),
        _: 1
      }),
      d(i, {
        class: "item",
        href: "components/image/images"
      }, {
        default: a(() => [
          wd,
          Cd
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Vd = /* @__PURE__ */ m(cd, [["render", Ed], ["styles", [ed]], ["__scopeId", "data-v-fe45685b"]]);
export {
  m as _,
  Vd as i
};
