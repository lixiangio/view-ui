import { openBlock as i, createElementBlock as t, Fragment as _, createElementVNode as d, createStaticVNode as I, defineComponent as N, inject as V, resolveComponent as D, unref as r, createTextVNode as E, toDisplayString as m, renderList as g, withModifiers as b, normalizeStyle as k, withDirectives as B, createVNode as y, withCtx as w, TransitionGroup as T, vShow as A, createCommentVNode as F, pushScopeId as L, popScopeId as G } from "/libs/vue.js";
import M from "/libs/network.js";
import { Langs as $, setThemeColor as O, urls as q, mode as H } from "/libs/view.js";
import { openBlank as J, open as K } from "/libs/navigator.js";
import { menu as l, historys as C } from "/libs/state.js";
import { back as P } from "/libs/router.js";
const Q = `.search-input[data-v-d39c5933]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-d39c5933]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-d39c5933]{width:50px;font-size:15px;color:#000;cursor:pointer}.search-list[data-v-d39c5933]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-d39c5933]{font-size:14px;line-height:30px}.search-list ul li[data-v-d39c5933]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, S = (v, s) => {
  const p = v.__vccOpts || v;
  for (const [n, e] of s)
    p[n] = e;
  return p;
}, R = $({
  search: {
    en: "Search",
    zh: "\u641C\u7D22\u5E94\u7528"
  }
}), U = {
  inline: !0,
  app: {},
  setup() {
    return { langs: R };
  },
  methods: {
    close() {
      P(this.$el);
    }
  },
  mounted() {
    this.$refs.input.focus(), O("#f5f5f5");
  }
}, W = { class: "search-input" }, X = ["placeholder"], Y = /* @__PURE__ */ I('<div class="search-list" data-v-d39c5933><h4 data-v-d39c5933>\u641C\u7D22\u5386\u53F2</h4><ul data-v-d39c5933><li data-v-d39c5933>vite</li><li data-v-d39c5933>vue</li><li data-v-d39c5933>react</li><li data-v-d39c5933>flutter</li></ul><h4 data-v-d39c5933>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-d39c5933><li data-v-d39c5933>typescript</li><li data-v-d39c5933>node.js</li><li data-v-d39c5933>rust</li></ul><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div></div>', 1);
function Z(v, s, p, n, e, a) {
  return i(), t(_, null, [
    d("div", W, [
      d("input", {
        type: "text",
        name: "search",
        placeholder: n.langs.search,
        ref: "input"
      }, null, 8, X),
      d("div", {
        class: "close center",
        onClick: s[0] || (s[0] = (...o) => a.close && a.close(...o))
      }, "\u53D6\u6D88")
    ]),
    Y
  ], 64);
}
const dd = /* @__PURE__ */ S(U, [["render", Z], ["styles", [Q]], ["__scopeId", "data-v-d39c5933"]]), z = (v) => (L("data-v-a1888b5f"), v = v(), G(), v), ad = { class: "apps-center" }, id = { class: "search center" }, td = /* @__PURE__ */ z(() => /* @__PURE__ */ d("svg", { class: "ficon" }, [
  /* @__PURE__ */ d("use", { "xlink:href": "#ficon-sousuo-sousuo" })
], -1)), vd = { class: "apps-items" }, ed = ["href", "onClick"], cd = { class: "icon center" }, sd = ["xlink:href"], nd = { class: "name" }, od = /* @__PURE__ */ z(() => /* @__PURE__ */ d("div", { class: "padding" }, null, -1)), rd = {
  key: 0,
  class: "historys"
}, pd = ["href", "onClick"], ld = { class: "link" }, hd = { class: "icon center" }, fd = ["xlink:href"], ud = { class: "name" }, xd = {
  pages: { search: dd }
}, md = /* @__PURE__ */ N({
  ...xd,
  __name: "multi",
  setup(v) {
    const s = $({
      appsCenter: {
        en: "Application center",
        zh: "\u5E94\u7528\u4E2D\u5FC3"
      },
      search: {
        en: "Search",
        zh: "\u641C\u7D22"
      }
    });
    l.lock === void 0 && (l.lock = !0, M.get("/api/menu.json").then((e) => {
      for (const a of e) {
        const o = q[a];
        o && l.push(o);
      }
    }));
    const p = V("router");
    function n(e, a) {
      a === "blank" ? J(e) : K(e);
    }
    return (e, a) => {
      const o = D("Scroll");
      return i(), t("div", ad, [
        d("div", id, [
          d("div", {
            class: "search-button center",
            onClick: a[0] || (a[0] = (c) => r(p).open("home/search"))
          }, [
            td,
            E(" " + m(r(s).search), 1)
          ])
        ]),
        d("div", vd, [
          (i(!0), t(_, null, g(r(l), ({ url: c, name: h, icon: f, color: u, target: x }) => (i(), t("div", {
            class: "item",
            key: c
          }, [
            d("a", {
              class: "link",
              href: c,
              onClick: b((j) => n(c, x), ["prevent"])
            }, [
              d("div", cd, [
                (i(), t("svg", {
                  class: "ficon",
                  "aria-hidden": "true",
                  style: k({ color: u })
                }, [
                  d("use", {
                    "xlink:href": "#" + f
                  }, null, 8, sd)
                ], 4))
              ]),
              d("div", nd, m(h), 1)
            ], 8, ed)
          ]))), 128))
        ]),
        od,
        r(H) === "multi" ? B((i(), t("div", rd, [
          y(o, { class: "apps" }, {
            default: w(() => [
              y(T, { name: "scale" }, {
                default: w(() => [
                  (i(!0), t(_, null, g(r(C), ({ url: c, name: h, icon: f, color: u, target: x }) => (i(), t("a", {
                    key: c,
                    href: c,
                    class: "item",
                    onClick: b((j) => n(c, x), ["prevent"])
                  }, [
                    d("div", ld, [
                      d("div", hd, [
                        (i(), t("svg", {
                          class: "ficon",
                          "aria-hidden": "true",
                          style: k({ color: u })
                        }, [
                          d("use", {
                            "xlink:href": "#" + f
                          }, null, 8, fd)
                        ], 4))
                      ]),
                      d("div", ud, m(h), 1)
                    ])
                  ], 8, pd))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512)), [
          [A, r(C).length]
        ]) : F("", !0)
      ]);
    };
  }
}), _d = `.split .apps-center[data-v-a1888b5f]{max-width:1100px;margin:0 auto}.apps-center .search[data-v-a1888b5f]{padding:12px}.apps-center .search .search-button[data-v-a1888b5f]{background-color:#fff3;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#e9e9e9}.apps-center .search .search-button .ficon[data-v-a1888b5f]{font-size:15px;margin-right:8px}.apps-center .link[data-v-a1888b5f]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .link .icon[data-v-a1888b5f]{width:64px;height:64px;background-color:#e5e5e529;border-radius:22px;margin-bottom:6px}.apps-center .link .icon .ficon[data-v-a1888b5f]{width:32px;height:32px}.apps-center .link .name[data-v-a1888b5f]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .apps-items[data-v-a1888b5f]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start}.apps-center .apps-items .item[data-v-a1888b5f]{display:flex;justify-content:center;align-items:center;overflow:hidden;margin-bottom:8px;width:10%}.apps-center .historys[data-v-a1888b5f]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-a1888b5f]{text-align:center}.apps-center .historys .apps .item[data-v-a1888b5f]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-a1888b5f]{padding:12px 10px}.apps-center .padding[data-v-a1888b5f]{height:150px}container[level="100"] .apps-items .item[data-v-a1888b5f]{width:25%!important}container[level="150"] .apps-items .item[data-v-a1888b5f]{width:16.6%!important}container[level="200"] .apps-items .item[data-v-a1888b5f]{width:12.5%!important}
`, $d = /* @__PURE__ */ S(md, [["styles", [_d]], ["__scopeId", "data-v-a1888b5f"]]);
export {
  $d as default
};
