import I from "/view-ui/libs/network.js";
import { Langs as C, setThemeColor as N, urls as V, mode as j } from "/view-ui/libs/view.js";
import { openBlank as D, open as E } from "/view-ui/libs/navigator.js";
import { menu as r, historys as B } from "/view-ui/libs/state.js";
import { back as T } from "/view-ui/libs/router.js";
import { openBlock as s, createElementBlock as o, Fragment as x, createElementVNode as a, createStaticVNode as F, resolveComponent as L, createTextVNode as A, toDisplayString as m, renderList as _, withModifiers as g, normalizeStyle as k, normalizeClass as y, withDirectives as G, createVNode as b, withCtx as w, TransitionGroup as M, vShow as O, createCommentVNode as q, pushScopeId as H, popScopeId as J } from "/view-ui/libs/vue.js";
const K = `.search-input[data-v-03902304]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-03902304]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-03902304]{width:50px;font-size:15px;color:#000}.search-list[data-v-03902304]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-03902304]{font-size:14px;line-height:30px}.search-list ul li[data-v-03902304]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, z = (d, i) => {
  const e = d.__vccOpts || d;
  for (const [t, c] of i)
    e[t] = c;
  return e;
}, P = C({
  search: {
    en: "Search",
    zh: "\u641C\u7D22\u5E94\u7528"
  }
}), Q = {
  inline: !0,
  app: {},
  setup() {
    return { langs: P };
  },
  methods: {
    close() {
      T(this.$el);
    }
  },
  mounted() {
    this.$refs.input.focus(), N("#f5f5f5");
  }
}, R = { class: "search-input" }, U = ["placeholder"], W = /* @__PURE__ */ F('<div class="search-list" data-v-03902304><h4 data-v-03902304>\u641C\u7D22\u5386\u53F2</h4><ul data-v-03902304><li data-v-03902304>vite</li><li data-v-03902304>vue</li><li data-v-03902304>react</li><li data-v-03902304>flutter</li></ul><h4 data-v-03902304>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-03902304><li data-v-03902304>typescript</li><li data-v-03902304>node.js</li><li data-v-03902304>rust</li></ul><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div></div>', 1);
function X(d, i, e, t, c, n) {
  return s(), o(x, null, [
    a("div", R, [
      a("input", {
        type: "text",
        name: "search",
        placeholder: t.langs.search,
        ref: "input"
      }, null, 8, U),
      a("div", {
        class: "close center",
        onClick: i[0] || (i[0] = (...p) => n.close && n.close(...p))
      }, "\u53D6\u6D88")
    ]),
    W
  ], 64);
}
const Y = /* @__PURE__ */ z(Q, [["render", X], ["styles", [K]], ["__scopeId", "data-v-03902304"]]), Z = C({
  applicationCenter: {
    en: "Application center",
    zh: "\u5E94\u7528\u4E2D\u5FC3"
  },
  search: {
    en: "Search",
    zh: "\u641C\u7D22"
  }
});
r.lock === void 0 && (r.lock = !0, I.get("/view-ui/api/menu.json").then((d) => {
  for (const i of d) {
    const e = V[i];
    e && r.push(e);
  }
}));
const aa = {
  pages: { search: Y },
  setup() {
    return {
      mode: j,
      langs: Z,
      historys: B,
      menu: r
    };
  },
  methods: {
    open(d, i) {
      i === "blank" ? D(d) : E(d);
    }
  }
}, da = `.split .apps-center[data-v-162cdfaf]{max-width:1100px;margin:0 auto}.apps-center .search[data-v-162cdfaf]{padding:12px}.apps-center .search .search-button[data-v-162cdfaf]{background-color:#fff3;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#e9e9e9}.apps-center .search .search-button i[data-v-162cdfaf]{font-size:15px;margin-right:8px}.apps-center .link[data-v-162cdfaf]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .link .icon[data-v-162cdfaf]{width:66px;height:66px;background-color:#e5e5e529;border-radius:22px;margin-bottom:6px}.apps-center .link .icon i[data-v-162cdfaf]{font-size:30px}.apps-center .link .name[data-v-162cdfaf]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .apps-items[data-v-162cdfaf]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start}.apps-center .apps-items .item[data-v-162cdfaf]{display:flex;justify-content:center;align-items:center;overflow:hidden;margin-bottom:8px;width:10%}.apps-center .historys[data-v-162cdfaf]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-162cdfaf]{text-align:center}.apps-center .historys .apps .item[data-v-162cdfaf]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-162cdfaf]{padding:12px 10px}.apps-center .padding[data-v-162cdfaf]{height:150px}container[level="100"] .apps-items .item[data-v-162cdfaf]{width:25%!important}container[level="150"] .apps-items .item[data-v-162cdfaf]{width:16.6%!important}container[level="200"] .apps-items .item[data-v-162cdfaf]{width:12.5%!important}
`, $ = (d) => (H("data-v-162cdfaf"), d = d(), J(), d), ia = { class: "apps-center" }, ta = { class: "search center" }, va = /* @__PURE__ */ $(() => /* @__PURE__ */ a("i", { class: "ficon-sousuo-sousuo" }, null, -1)), ea = { class: "apps-items" }, sa = ["href", "onClick"], oa = { class: "name" }, na = /* @__PURE__ */ $(() => /* @__PURE__ */ a("div", { class: "padding" }, null, -1)), ra = {
  key: 0,
  class: "historys"
}, ca = ["href", "onClick"], pa = { class: "link" }, la = { class: "name" };
function fa(d, i, e, t, c, n) {
  const p = L("Scroll");
  return s(), o("div", ia, [
    a("div", ta, [
      a("div", {
        class: "search-button center",
        onClick: i[0] || (i[0] = (v) => d.$router.open("home/search"))
      }, [
        va,
        A(m(t.langs.search), 1)
      ])
    ]),
    a("div", ea, [
      (s(!0), o(x, null, _(t.menu, ({ url: v, name: l, icon: f, color: h, target: u }) => (s(), o("div", {
        class: "item",
        key: v
      }, [
        a("a", {
          class: "link",
          href: v,
          onClick: g((S) => n.open(v, u), ["prevent"])
        }, [
          a("div", {
            class: "icon center",
            style: k({ color: h })
          }, [
            a("i", {
              class: y(f)
            }, null, 2)
          ], 4),
          a("div", oa, m(l), 1)
        ], 8, sa)
      ]))), 128))
    ]),
    na,
    t.mode === "split" ? G((s(), o("div", ra, [
      b(p, { class: "apps" }, {
        default: w(() => [
          b(M, { name: "scale" }, {
            default: w(() => [
              (s(!0), o(x, null, _(t.historys, ({ url: v, name: l, icon: f, color: h, target: u }) => (s(), o("a", {
                key: v,
                href: v,
                class: "item",
                onClick: g((S) => n.open(v, u), ["prevent"])
              }, [
                a("div", pa, [
                  a("div", {
                    class: "icon center",
                    style: k({ color: h })
                  }, [
                    a("i", {
                      class: y(f)
                    }, null, 2)
                  ], 4),
                  a("div", la, m(l), 1)
                ])
              ], 8, ca))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ], 512)), [
      [O, t.historys.length]
    ]) : q("", !0)
  ]);
}
const ka = /* @__PURE__ */ z(aa, [["render", fa], ["styles", [da]], ["__scopeId", "data-v-162cdfaf"]]);
export {
  ka as default
};
