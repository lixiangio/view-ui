import I from "/view-ui/libs/network.js";
import { Langs as C, setThemeColor as N, urls as V, mode as j } from "/view-ui/libs/view.js";
import { openBlank as D, open as E } from "/view-ui/libs/navigator.js";
import { menu as n, historys as B } from "/view-ui/libs/state.js";
import { back as T } from "/view-ui/libs/router.js";
import { openBlock as c, createElementBlock as s, Fragment as x, createElementVNode as d, createStaticVNode as F, resolveComponent as L, createTextVNode as A, toDisplayString as m, renderList as _, withModifiers as g, normalizeStyle as k, normalizeClass as y, withDirectives as G, createVNode as b, withCtx as w, TransitionGroup as M, vShow as O, createCommentVNode as q, pushScopeId as H, popScopeId as J } from "/view-ui/libs/vue.js";
const K = `.search-input[data-v-d39c5933]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-d39c5933]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-d39c5933]{width:50px;font-size:15px;color:#000;cursor:pointer}.search-list[data-v-d39c5933]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-d39c5933]{font-size:14px;line-height:30px}.search-list ul li[data-v-d39c5933]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, z = (a, i) => {
  const e = a.__vccOpts || a;
  for (const [t, r] of i)
    e[t] = r;
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
}, R = { class: "search-input" }, U = ["placeholder"], W = /* @__PURE__ */ F('<div class="search-list" data-v-d39c5933><h4 data-v-d39c5933>\u641C\u7D22\u5386\u53F2</h4><ul data-v-d39c5933><li data-v-d39c5933>vite</li><li data-v-d39c5933>vue</li><li data-v-d39c5933>react</li><li data-v-d39c5933>flutter</li></ul><h4 data-v-d39c5933>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-d39c5933><li data-v-d39c5933>typescript</li><li data-v-d39c5933>node.js</li><li data-v-d39c5933>rust</li></ul><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div></div>', 1);
function X(a, i, e, t, r, o) {
  return c(), s(x, null, [
    d("div", R, [
      d("input", {
        type: "text",
        name: "search",
        placeholder: t.langs.search,
        ref: "input"
      }, null, 8, U),
      d("div", {
        class: "close center",
        onClick: i[0] || (i[0] = (...p) => o.close && o.close(...p))
      }, "\u53D6\u6D88")
    ]),
    W
  ], 64);
}
const Y = /* @__PURE__ */ z(Q, [["render", X], ["styles", [K]], ["__scopeId", "data-v-d39c5933"]]), Z = C({
  applicationCenter: {
    en: "Application center",
    zh: "\u5E94\u7528\u4E2D\u5FC3"
  },
  search: {
    en: "Search",
    zh: "\u641C\u7D22"
  }
});
n.lock === void 0 && (n.lock = !0, I.get("/view-ui/api/menu.json").then((a) => {
  for (const i of a) {
    const e = V[i];
    e && n.push(e);
  }
}));
const dd = {
  pages: { search: Y },
  setup() {
    return {
      mode: j,
      langs: Z,
      historys: B,
      menu: n
    };
  },
  methods: {
    open(a, i) {
      i === "blank" ? D(a) : E(a);
    }
  }
}, ad = `.split .apps-center[data-v-162cdfaf]{max-width:1100px;margin:0 auto}.apps-center .search[data-v-162cdfaf]{padding:12px}.apps-center .search .search-button[data-v-162cdfaf]{background-color:#fff3;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#e9e9e9}.apps-center .search .search-button i[data-v-162cdfaf]{font-size:15px;margin-right:8px}.apps-center .link[data-v-162cdfaf]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .link .icon[data-v-162cdfaf]{width:66px;height:66px;background-color:#e5e5e529;border-radius:22px;margin-bottom:6px}.apps-center .link .icon i[data-v-162cdfaf]{font-size:30px}.apps-center .link .name[data-v-162cdfaf]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .apps-items[data-v-162cdfaf]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start}.apps-center .apps-items .item[data-v-162cdfaf]{display:flex;justify-content:center;align-items:center;overflow:hidden;margin-bottom:8px;width:10%}.apps-center .historys[data-v-162cdfaf]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-162cdfaf]{text-align:center}.apps-center .historys .apps .item[data-v-162cdfaf]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-162cdfaf]{padding:12px 10px}.apps-center .padding[data-v-162cdfaf]{height:150px}container[level="100"] .apps-items .item[data-v-162cdfaf]{width:25%!important}container[level="150"] .apps-items .item[data-v-162cdfaf]{width:16.6%!important}container[level="200"] .apps-items .item[data-v-162cdfaf]{width:12.5%!important}
`, $ = (a) => (H("data-v-162cdfaf"), a = a(), J(), a), id = { class: "apps-center" }, td = { class: "search center" }, vd = /* @__PURE__ */ $(() => /* @__PURE__ */ d("i", { class: "ficon-sousuo-sousuo" }, null, -1)), ed = { class: "apps-items" }, cd = ["href", "onClick"], sd = { class: "name" }, od = /* @__PURE__ */ $(() => /* @__PURE__ */ d("div", { class: "padding" }, null, -1)), nd = {
  key: 0,
  class: "historys"
}, rd = ["href", "onClick"], pd = { class: "link" }, ld = { class: "name" };
function fd(a, i, e, t, r, o) {
  const p = L("Scroll");
  return c(), s("div", id, [
    d("div", td, [
      d("div", {
        class: "search-button center",
        onClick: i[0] || (i[0] = (v) => a.$router.open("home/search"))
      }, [
        vd,
        A(m(t.langs.search), 1)
      ])
    ]),
    d("div", ed, [
      (c(!0), s(x, null, _(t.menu, ({ url: v, name: l, icon: f, color: h, target: u }) => (c(), s("div", {
        class: "item",
        key: v
      }, [
        d("a", {
          class: "link",
          href: v,
          onClick: g((S) => o.open(v, u), ["prevent"])
        }, [
          d("div", {
            class: "icon center",
            style: k({ color: h })
          }, [
            d("i", {
              class: y(f)
            }, null, 2)
          ], 4),
          d("div", sd, m(l), 1)
        ], 8, cd)
      ]))), 128))
    ]),
    od,
    t.mode === "split" ? G((c(), s("div", nd, [
      b(p, { class: "apps" }, {
        default: w(() => [
          b(M, { name: "scale" }, {
            default: w(() => [
              (c(!0), s(x, null, _(t.historys, ({ url: v, name: l, icon: f, color: h, target: u }) => (c(), s("a", {
                key: v,
                href: v,
                class: "item",
                onClick: g((S) => o.open(v, u), ["prevent"])
              }, [
                d("div", pd, [
                  d("div", {
                    class: "icon center",
                    style: k({ color: h })
                  }, [
                    d("i", {
                      class: y(f)
                    }, null, 2)
                  ], 4),
                  d("div", ld, m(l), 1)
                ])
              ], 8, rd))), 128))
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
const kd = /* @__PURE__ */ z(dd, [["render", fd], ["styles", [ad]], ["__scopeId", "data-v-162cdfaf"]]);
export {
  kd as default
};
