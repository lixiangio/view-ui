import { openBlock as s, createElementBlock as o, Fragment as p, createElementVNode as i, createStaticVNode as l, normalizeStyle as b, pushScopeId as g, popScopeId as y, ref as F, resolveComponent as x, createVNode as m, createTextVNode as S, toDisplayString as _, renderList as A, withModifiers as I, normalizeClass as j, Transition as B, withCtx as D, createBlock as T, createCommentVNode as N } from "/view-ui/libs/vue.js";
import V from "/view-ui/libs/network.js";
import { Langs as u, setThemeColor as k, urls as L } from "/view-ui/libs/view.js";
import { openBlank as M, open as O } from "/view-ui/libs/navigator.js";
import { menu as r, historys as P } from "/view-ui/libs/state.js";
import { message as q } from "/view-ui/libs/viewui.js";
import { back as G } from "/view-ui/libs/router.js";
const H = `.search-input[data-v-d39c5933]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-d39c5933]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-d39c5933]{width:50px;font-size:15px;color:#000;cursor:pointer}.search-list[data-v-d39c5933]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-d39c5933]{font-size:14px;line-height:30px}.search-list ul li[data-v-d39c5933]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, h = (d, a) => {
  const t = d.__vccOpts || d;
  for (const [v, n] of a)
    t[v] = n;
  return t;
}, J = u({
  search: {
    en: "Search",
    zh: "\u641C\u7D22\u5E94\u7528"
  }
}), K = {
  inline: !0,
  app: {},
  setup() {
    return { langs: J };
  },
  methods: {
    close() {
      G(this.$el);
    }
  },
  mounted() {
    this.$refs.input.focus(), k("#f5f5f5");
  }
}, Q = { class: "search-input" }, R = ["placeholder"], U = /* @__PURE__ */ l('<div class="search-list" data-v-d39c5933><h4 data-v-d39c5933>\u641C\u7D22\u5386\u53F2</h4><ul data-v-d39c5933><li data-v-d39c5933>vite</li><li data-v-d39c5933>vue</li><li data-v-d39c5933>react</li><li data-v-d39c5933>flutter</li></ul><h4 data-v-d39c5933>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-d39c5933><li data-v-d39c5933>typescript</li><li data-v-d39c5933>node.js</li><li data-v-d39c5933>rust</li></ul><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div></div>', 1);
function W(d, a, t, v, n, e) {
  return s(), o(p, null, [
    i("div", Q, [
      i("input", {
        type: "text",
        name: "search",
        placeholder: v.langs.search,
        ref: "input"
      }, null, 8, R),
      i("div", {
        class: "close center",
        onClick: a[0] || (a[0] = (...f) => e.close && e.close(...f))
      }, "\u53D6\u6D88")
    ]),
    U
  ], 64);
}
const X = /* @__PURE__ */ h(K, [["render", W], ["styles", [H]], ["__scopeId", "data-v-d39c5933"]]), Y = u({}), Z = {
  setup() {
    return {
      langs: Y
    };
  }
}, dd = `.topbar[data-v-22a0ff11]{position:fixed;z-index:1;display:flex;justify-content:space-between;height:42px;background-color:#e6fbef}.topbar .apps[data-v-22a0ff11]{flex:none;display:flex;align-items:center;justify-content:center;width:60px}.topbar .apps i[data-v-22a0ff11]{font-size:20px;color:#585858}.topbar .tabs[data-v-22a0ff11]{display:flex;overflow-x:auto;scrollbar-width:none}.topbar .tabs[data-v-22a0ff11]::-webkit-scrollbar{display:none}.topbar .tabs .tab[data-v-22a0ff11]{flex:none;display:flex;align-items:center;font-size:16px;padding:0 10px;margin-right:10px;color:#333}.topbar .tabs .tab.active[data-v-22a0ff11]{font-weight:700;font-size:17px;color:#111}.topbar-padding[data-v-22a0ff11]{height:42px}
`, ad = (d) => (g("data-v-22a0ff11"), d = d(), y(), d), id = /* @__PURE__ */ l('<div class="tabs" data-v-22a0ff11><div class="tab active" data-v-22a0ff11>\u6587\u6863</div><div class="tab" data-v-22a0ff11>\u7EC4\u4EF6</div><div class="tab" data-v-22a0ff11>\u793E\u533A</div><div class="tab" data-v-22a0ff11>\u6570\u636E\u5E93</div><div class="tab" data-v-22a0ff11>\u6E38\u620F</div><div class="tab" data-v-22a0ff11>AI</div></div><div class="apps" data-v-22a0ff11><i class="ficon-apps1" data-v-22a0ff11></i></div>', 2), vd = [
  id
], td = /* @__PURE__ */ ad(() => /* @__PURE__ */ i("div", { class: "topbar-padding" }, null, -1));
function ed(d, a, t, v, n, e) {
  return s(), o(p, null, [
    i("div", {
      class: "topbar",
      style: b(d.style)
    }, vd, 4),
    td
  ], 64);
}
const cd = /* @__PURE__ */ h(Z, [["render", ed], ["styles", [dd]], ["__scopeId", "data-v-22a0ff11"]]), sd = u({
  applicationCenter: {
    en: "Application center",
    zh: "\u5E94\u7528\u4E2D\u5FC3"
  },
  search: {
    en: "Search",
    zh: "\u641C\u7D22"
  }
});
q.warning("\u79FB\u52A8\u7AEF\u91CD\u6784\u4E2D\uFF0C\u6682\u4E0D\u53EF\u7528\uFF0C\u5EFA\u8BAE\u5148\u5207\u6362\u81F3 PC \u6A21\u5F0F", 6e3);
V.get("/view-ui/api/menu.json").then((d) => {
  if (!r.lock) {
    r.lock = !0;
    for (const a of d) {
      const t = L[a];
      t && r.push(t);
    }
  }
});
const od = {
  app: {
    style: {
      background: "-webkit-linear-gradient(266deg, #e6fbef, #fff, #fff)"
    }
  },
  components: { Topbar: cd, Search: X },
  setup() {
    return {
      langs: sd,
      historys: P,
      menu: r,
      search: F(!1)
    };
  },
  methods: {
    open(d, a) {
      a === "blank" ? M(d) : O(d);
    },
    onSearch() {
      this.search = !0;
    }
  },
  mounted() {
    k("#e6fbef");
  }
}, nd = `.apps-center .search[data-v-d475a65f]{padding:4px 10px}.apps-center .search .search-button[data-v-d475a65f]{background-color:#fff;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#666;padding:10px}.apps-center .search .search-button i[data-v-d475a65f]{font-size:15px;margin-right:8px}.apps-center .apps-items[data-v-d475a65f]{display:flex;flex-wrap:wrap;justify-content:space-around;flex-direction:column;width:200%;height:165px;overflow-x:auto}.apps-center .apps-items .item[data-v-d475a65f]{display:flex;justify-content:center;align-items:center;overflow:hidden;width:10%;height:80px}.apps-center .apps-items .item .link[data-v-d475a65f]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .apps-items .item .link .icon[data-v-d475a65f]{width:50px;height:50px;margin-bottom:2px}.apps-center .apps-items .item .link .icon i[data-v-d475a65f]{font-size:26px}.apps-center .apps-items .item .link .name[data-v-d475a65f]{font-size:11px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .historys[data-v-d475a65f]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-d475a65f]{text-align:center}.apps-center .historys .apps .item[data-v-d475a65f]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-d475a65f]{padding:12px 10px}
`, rd = (d) => (g("data-v-d475a65f"), d = d(), y(), d), pd = { class: "apps-center" }, fd = { class: "search" }, ld = /* @__PURE__ */ rd(() => /* @__PURE__ */ i("i", { class: "ficon-sousuo-sousuo" }, null, -1)), ud = { class: "apps-items" }, hd = ["href", "onClick"], xd = { class: "name" }, md = /* @__PURE__ */ l('<div class="" data-v-d475a65f><div data-v-d475a65f></div></div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div>', 51);
function _d(d, a, t, v, n, e) {
  const f = x("Topbar"), w = x("Search");
  return s(), o(p, null, [
    m(f),
    i("div", pd, [
      i("div", fd, [
        i("div", {
          class: "search-button",
          onClick: a[0] || (a[0] = (...c) => e.onSearch && e.onSearch(...c))
        }, [
          ld,
          S(_(v.langs.search), 1)
        ])
      ]),
      i("div", ud, [
        (s(!0), o(p, null, A(v.menu, ({ url: c, name: $, icon: C, color: z, target: E }) => (s(), o("div", {
          class: "item",
          key: c
        }, [
          i("a", {
            class: "link",
            href: c,
            onClick: I((bd) => e.open(c, E), ["prevent"])
          }, [
            i("div", {
              class: "icon center",
              style: b({ color: z })
            }, [
              i("i", {
                class: j(C)
              }, null, 2)
            ], 4),
            i("div", xd, _($), 1)
          ], 8, hd)
        ]))), 128))
      ])
    ]),
    md,
    m(B, { name: "fade" }, {
      default: D(() => [
        v.search ? (s(), T(w, {
          key: 0,
          onClose: a[1] || (a[1] = (c) => v.search = !1)
        })) : N("", !0)
      ]),
      _: 1
    })
  ], 64);
}
const Ed = /* @__PURE__ */ h(od, [["render", _d], ["styles", [nd]], ["__scopeId", "data-v-d475a65f"]]);
export {
  Ed as default
};
