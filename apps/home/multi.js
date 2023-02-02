import { openBlock as e, createElementBlock as c, Fragment as _, createElementVNode as d, createStaticVNode as N, defineComponent as V, inject as D, resolveComponent as E, unref as r, createTextVNode as B, toDisplayString as x, renderList as g, withModifiers as k, normalizeStyle as y, normalizeClass as b, withDirectives as T, createVNode as w, withCtx as C, TransitionGroup as A, vShow as F, createCommentVNode as L, pushScopeId as G, popScopeId as M } from "/view-ui/libs/vue.js";
import O from "/view-ui/libs/network.js";
import { Langs as $, setThemeColor as q, urls as H, mode as J } from "/view-ui/libs/view.js";
import { openBlank as K, open as P } from "/view-ui/libs/navigator.js";
import { menu as l, historys as z } from "/view-ui/libs/state.js";
import { back as Q } from "/view-ui/libs/router.js";
const R = `.search-input[data-v-d39c5933]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-d39c5933]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-d39c5933]{width:50px;font-size:15px;color:#000;cursor:pointer}.search-list[data-v-d39c5933]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-d39c5933]{font-size:14px;line-height:30px}.search-list ul li[data-v-d39c5933]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, S = (i, s) => {
  const p = i.__vccOpts || i;
  for (const [o, t] of s)
    p[o] = t;
  return p;
}, U = $({
  search: {
    en: "Search",
    zh: "\u641C\u7D22\u5E94\u7528"
  }
}), W = {
  inline: !0,
  app: {},
  setup() {
    return { langs: U };
  },
  methods: {
    close() {
      Q(this.$el);
    }
  },
  mounted() {
    this.$refs.input.focus(), q("#f5f5f5");
  }
}, X = { class: "search-input" }, Y = ["placeholder"], Z = /* @__PURE__ */ N('<div class="search-list" data-v-d39c5933><h4 data-v-d39c5933>\u641C\u7D22\u5386\u53F2</h4><ul data-v-d39c5933><li data-v-d39c5933>vite</li><li data-v-d39c5933>vue</li><li data-v-d39c5933>react</li><li data-v-d39c5933>flutter</li></ul><h4 data-v-d39c5933>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-d39c5933><li data-v-d39c5933>typescript</li><li data-v-d39c5933>node.js</li><li data-v-d39c5933>rust</li></ul><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div></div>', 1);
function dd(i, s, p, o, t, a) {
  return e(), c(_, null, [
    d("div", X, [
      d("input", {
        type: "text",
        name: "search",
        placeholder: o.langs.search,
        ref: "input"
      }, null, 8, Y),
      d("div", {
        class: "close center",
        onClick: s[0] || (s[0] = (...n) => a.close && a.close(...n))
      }, "\u53D6\u6D88")
    ]),
    Z
  ], 64);
}
const ad = /* @__PURE__ */ S(W, [["render", dd], ["styles", [R]], ["__scopeId", "data-v-d39c5933"]]), j = (i) => (G("data-v-d5411264"), i = i(), M(), i), id = { class: "apps-center" }, td = { class: "search center" }, vd = /* @__PURE__ */ j(() => /* @__PURE__ */ d("i", { class: "ficon-sousuo-sousuo" }, null, -1)), ed = { class: "apps-items" }, cd = ["href", "onClick"], sd = { class: "name" }, od = /* @__PURE__ */ j(() => /* @__PURE__ */ d("div", { class: "padding" }, null, -1)), nd = {
  key: 0,
  class: "historys"
}, rd = ["href", "onClick"], pd = { class: "link" }, ld = { class: "name" }, hd = {
  pages: { search: ad }
}, ud = /* @__PURE__ */ V({
  ...hd,
  __name: "multi",
  setup(i) {
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
    l.lock === void 0 && (l.lock = !0, O.get("/view-ui/api/menu.json").then((t) => {
      for (const a of t) {
        const n = H[a];
        n && l.push(n);
      }
    }));
    const p = D("router");
    function o(t, a) {
      a === "blank" ? K(t) : P(t);
    }
    return (t, a) => {
      const n = E("Scroll");
      return e(), c("div", id, [
        d("div", td, [
          d("div", {
            class: "search-button center",
            onClick: a[0] || (a[0] = (v) => r(p).open("home/search"))
          }, [
            vd,
            B(x(r(s).search), 1)
          ])
        ]),
        d("div", ed, [
          (e(!0), c(_, null, g(r(l), ({ url: v, name: h, icon: u, color: f, target: m }) => (e(), c("div", {
            class: "item",
            key: v
          }, [
            d("a", {
              class: "link",
              href: v,
              onClick: k((I) => o(v, m), ["prevent"])
            }, [
              d("div", {
                class: "icon center",
                style: y({ color: f })
              }, [
                d("i", {
                  class: b(u)
                }, null, 2)
              ], 4),
              d("div", sd, x(h), 1)
            ], 8, cd)
          ]))), 128))
        ]),
        od,
        r(J) === "multi" ? T((e(), c("div", nd, [
          w(n, { class: "apps" }, {
            default: C(() => [
              w(A, { name: "scale" }, {
                default: C(() => [
                  (e(!0), c(_, null, g(r(z), ({ url: v, name: h, icon: u, color: f, target: m }) => (e(), c("a", {
                    key: v,
                    href: v,
                    class: "item",
                    onClick: k((I) => o(v, m), ["prevent"])
                  }, [
                    d("div", pd, [
                      d("div", {
                        class: "icon center",
                        style: y({ color: f })
                      }, [
                        d("i", {
                          class: b(u)
                        }, null, 2)
                      ], 4),
                      d("div", ld, x(h), 1)
                    ])
                  ], 8, rd))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ], 512)), [
          [F, r(z).length]
        ]) : L("", !0)
      ]);
    };
  }
}), fd = `.split .apps-center[data-v-d5411264]{max-width:1100px;margin:0 auto}.apps-center .search[data-v-d5411264]{padding:12px}.apps-center .search .search-button[data-v-d5411264]{background-color:#fff3;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#e9e9e9}.apps-center .search .search-button i[data-v-d5411264]{font-size:15px;margin-right:8px}.apps-center .link[data-v-d5411264]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .link .icon[data-v-d5411264]{width:66px;height:66px;background-color:#e5e5e529;border-radius:22px;margin-bottom:6px}.apps-center .link .icon i[data-v-d5411264]{font-size:30px}.apps-center .link .name[data-v-d5411264]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .apps-items[data-v-d5411264]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start}.apps-center .apps-items .item[data-v-d5411264]{display:flex;justify-content:center;align-items:center;overflow:hidden;margin-bottom:8px;width:10%}.apps-center .historys[data-v-d5411264]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-d5411264]{text-align:center}.apps-center .historys .apps .item[data-v-d5411264]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-d5411264]{padding:12px 10px}.apps-center .padding[data-v-d5411264]{height:150px}container[level="100"] .apps-items .item[data-v-d5411264]{width:25%!important}container[level="150"] .apps-items .item[data-v-d5411264]{width:16.6%!important}container[level="200"] .apps-items .item[data-v-d5411264]{width:12.5%!important}
`, bd = /* @__PURE__ */ S(ud, [["styles", [fd]], ["__scopeId", "data-v-d5411264"]]);
export {
  bd as default
};
