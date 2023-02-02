import { Langs as X } from "/view-ui/libs/view.js";
import { resolveComponent as _, openBlock as o, createElementBlock as n, Fragment as r, createVNode as e, withCtx as a, renderList as u, toDisplayString as g, createStaticVNode as Y, pushScopeId as S, popScopeId as N, createElementVNode as d, defineAsyncComponent as b, createTextVNode as i } from "/view-ui/libs/vue.js";
import { open as k } from "/view-ui/libs/navigator.js";
const I = `h3[data-v-6deea413]{padding:14px}.X[data-v-6deea413]{flex:none;display:flex}.X .itemX[data-v-6deea413]{display:flex;justify-content:center;align-items:center;flex:none;width:120px;height:200px;margin:0 4px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}.Y[data-v-6deea413]{display:flex;flex-direction:column;height:420px}.Y .itemY[data-v-6deea413]{display:flex;justify-content:center;align-items:center;flex:none;height:120px;margin:5px;background:#f3f3f3;border:1px solid #eaeaea;border-radius:6px;font-size:16px}
`, $ = (s, m) => {
  const f = s.__vccOpts || s;
  for (const [l, p] of m)
    f[l] = p;
  return f;
}, A = {
  setup() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: { open: k }
}, y = (s) => (S("data-v-6deea413"), s = s(), N(), s), w = /* @__PURE__ */ y(() => /* @__PURE__ */ d("h3", null, "Scroll X", -1)), C = /* @__PURE__ */ y(() => /* @__PURE__ */ d("h3", null, "Scroll Y", -1)), B = /* @__PURE__ */ y(() => /* @__PURE__ */ d("h3", null, "Scroll X / Y", -1)), E = /* @__PURE__ */ Y('<div class="padding" data-v-6deea413><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div><div data-v-6deea413>-</div><div data-v-6deea413>--</div></div>', 1);
function R(s, m, f, l, p, x) {
  const h = _("Navbar"), t = _("Scroll", !0);
  return o(), n(r, null, [
    e(h, {
      title: "Scroll",
      back: "/components"
    }),
    w,
    e(t, {
      direction: "X",
      class: "X"
    }, {
      default: a(() => [
        (o(!0), n(r, null, u(l.list, (v) => (o(), n("div", {
          key: v,
          class: "itemX"
        }, g(v), 1))), 128))
      ]),
      _: 1
    }),
    C,
    e(t, {
      direction: "Y",
      class: "Y"
    }, {
      default: a(() => [
        (o(!0), n(r, null, u(l.list, (v) => (o(), n("div", {
          key: v,
          class: "itemY"
        }, g(v), 1))), 128))
      ]),
      _: 1
    }),
    B,
    e(t, {
      direction: "Y",
      class: "Y"
    }, {
      default: a(() => [
        e(t, {
          direction: "X",
          class: "X"
        }, {
          default: a(() => [
            (o(!0), n(r, null, u(l.list, (v) => (o(), n("div", {
              key: v,
              class: "itemX"
            }, g(v), 1))), 128))
          ]),
          _: 1
        }),
        (o(!0), n(r, null, u(l.list, (v) => (o(), n("div", {
          key: v,
          class: "itemY"
        }, g(v), 1))), 128))
      ]),
      _: 1
    }),
    E
  ], 64);
}
const V = /* @__PURE__ */ $(A, [["render", R], ["styles", [I]], ["__scopeId", "data-v-6deea413"]]), z = b(() => import("./base/router/async.js")), F = {
  pages: { async: z }
}, j = { class: "items" }, L = /* @__PURE__ */ i(" Async Page "), D = /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1), O = /* @__PURE__ */ i("category?id=1");
function P(s, m, f, l, p, x) {
  const h = _("Navbar"), t = _("A");
  return o(), n(r, null, [
    e(h, { title: "Router" }),
    d("div", j, [
      e(t, {
        class: "item",
        href: "components/base/router/async"
      }, {
        default: a(() => [
          L,
          D
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "category/index?id=1"
      }, {
        default: a(() => [
          O
        ]),
        _: 1
      })
    ])
  ], 64);
}
const T = /* @__PURE__ */ $(F, [["render", P]]), q = {
  app: {},
  pages: { scroll: V, router: T }
}, G = { class: "items" }, H = /* @__PURE__ */ i(" Scroll "), J = /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1), K = /* @__PURE__ */ i(" Router "), M = /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1);
function Q(s, m, f, l, p, x) {
  const h = _("Navbar"), t = _("A");
  return o(), n(r, null, [
    e(h, { title: "Base" }),
    d("div", G, [
      e(t, {
        class: "item",
        href: "components/base/scroll"
      }, {
        default: a(() => [
          H,
          J
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/base/router"
      }, {
        default: a(() => [
          K,
          M
        ]),
        _: 1
      })
    ])
  ], 64);
}
const U = /* @__PURE__ */ $(q, [["render", Q]]), W = X({
  title: {
    en: "Components",
    zh: "\u7EC4\u4EF6"
  }
}), Z = {
  app: {},
  pages: {
    base: U,
    form: b(() => import("./form/index.js")),
    image: b(() => import("./image/index.js"))
  },
  setup() {
    return { langs: W };
  }
}, ee = "", c = (s) => (S("data-v-bd4b4fcb"), s = s(), N(), s), te = { class: "items" }, de = /* @__PURE__ */ i(" Base "), ae = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), ie = /* @__PURE__ */ i(" Scroll "), se = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), oe = /* @__PURE__ */ i(" Router "), ne = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), ce = /* @__PURE__ */ i(" Router -> Async "), ve = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), le = { class: "items" }, re = /* @__PURE__ */ i("Form "), _e = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), he = /* @__PURE__ */ i(" Input "), fe = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), me = /* @__PURE__ */ i("Select "), pe = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), ue = /* @__PURE__ */ i(" Slider "), ge = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), $e = /* @__PURE__ */ i(" Switch "), xe = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), be = { class: "items" }, ye = /* @__PURE__ */ i(" Image "), Se = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), Ne = /* @__PURE__ */ i(" Image "), Xe = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1)), Ye = /* @__PURE__ */ i(" Images "), ke = /* @__PURE__ */ c(() => /* @__PURE__ */ d("i", { class: "ficon-right" }, null, -1));
function Ie(s, m, f, l, p, x) {
  const h = _("Navbar"), t = _("A");
  return o(), n(r, null, [
    e(h, {
      title: l.langs.title
    }, null, 8, ["title"]),
    d("div", te, [
      e(t, {
        class: "header item",
        href: "components/base"
      }, {
        default: a(() => [
          de,
          ae
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/base/scroll?a=1&b=2"
      }, {
        default: a(() => [
          ie,
          se
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/base/router"
      }, {
        default: a(() => [
          oe,
          ne
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/base/router/async"
      }, {
        default: a(() => [
          ce,
          ve
        ]),
        _: 1
      })
    ]),
    d("div", le, [
      e(t, {
        class: "header item",
        href: "components/form"
      }, {
        default: a(() => [
          re,
          _e
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/form/input"
      }, {
        default: a(() => [
          he,
          fe
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/form/select"
      }, {
        default: a(() => [
          me,
          pe
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/form/slider"
      }, {
        default: a(() => [
          ue,
          ge
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/form/switch"
      }, {
        default: a(() => [
          $e,
          xe
        ]),
        _: 1
      })
    ]),
    d("div", be, [
      e(t, {
        class: "header item",
        href: "components/image"
      }, {
        default: a(() => [
          ye,
          Se
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/image/image"
      }, {
        default: a(() => [
          Ne,
          Xe
        ]),
        _: 1
      }),
      e(t, {
        class: "item",
        href: "components/image/images"
      }, {
        default: a(() => [
          Ye,
          ke
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Be = /* @__PURE__ */ $(Z, [["render", Ie], ["styles", [ee]], ["__scopeId", "data-v-bd4b4fcb"]]);
export {
  $ as _,
  Be as i
};
