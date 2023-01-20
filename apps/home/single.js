import { openBlock as o, createElementBlock as n, Fragment as p, createElementVNode as i, createStaticVNode as l, normalizeStyle as b, pushScopeId as g, popScopeId as y, ref as F, resolveComponent as x, createVNode as m, createTextVNode as S, toDisplayString as _, renderList as A, withModifiers as I, normalizeClass as j, Transition as B, withCtx as D, createBlock as T, createCommentVNode as N } from "/view-ui/libs/vue.js";
import V from "/view-ui/libs/network.js";
import { Langs as u, setThemeColor as k, urls as L } from "/view-ui/libs/view.js";
import { openBlank as M, open as O } from "/view-ui/libs/navigator.js";
import { menu as f, historys as P } from "/view-ui/libs/state.js";
import { message as q } from "/view-ui/libs/viewui.js";
import { back as G } from "/view-ui/libs/router.js";
const H = `.search-input[data-v-03902304]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-03902304]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-03902304]{width:50px;font-size:15px;color:#000}.search-list[data-v-03902304]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-03902304]{font-size:14px;line-height:30px}.search-list ul li[data-v-03902304]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, h = (a, d) => {
  const t = a.__vccOpts || a;
  for (const [v, r] of d)
    t[v] = r;
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
}, Q = { class: "search-input" }, R = ["placeholder"], U = /* @__PURE__ */ l('<div class="search-list" data-v-03902304><h4 data-v-03902304>\u641C\u7D22\u5386\u53F2</h4><ul data-v-03902304><li data-v-03902304>vite</li><li data-v-03902304>vue</li><li data-v-03902304>react</li><li data-v-03902304>flutter</li></ul><h4 data-v-03902304>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-03902304><li data-v-03902304>typescript</li><li data-v-03902304>node.js</li><li data-v-03902304>rust</li></ul><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div><div data-v-03902304>--</div><div data-v-03902304>-</div></div>', 1);
function W(a, d, t, v, r, e) {
  return o(), n(p, null, [
    i("div", Q, [
      i("input", {
        type: "text",
        name: "search",
        placeholder: v.langs.search,
        ref: "input"
      }, null, 8, R),
      i("div", {
        class: "close center",
        onClick: d[0] || (d[0] = (...c) => e.close && e.close(...c))
      }, "\u53D6\u6D88")
    ]),
    U
  ], 64);
}
const X = /* @__PURE__ */ h(K, [["render", W], ["styles", [H]], ["__scopeId", "data-v-03902304"]]), Y = u({}), Z = {
  setup() {
    return {
      langs: Y
    };
  }
}, aa = `.topbar[data-v-22a0ff11]{position:fixed;z-index:1;display:flex;justify-content:space-between;height:42px;background-color:#e6fbef}.topbar .apps[data-v-22a0ff11]{flex:none;display:flex;align-items:center;justify-content:center;width:60px}.topbar .apps i[data-v-22a0ff11]{font-size:20px;color:#585858}.topbar .tabs[data-v-22a0ff11]{display:flex;overflow-x:auto;scrollbar-width:none}.topbar .tabs[data-v-22a0ff11]::-webkit-scrollbar{display:none}.topbar .tabs .tab[data-v-22a0ff11]{flex:none;display:flex;align-items:center;font-size:16px;padding:0 10px;margin-right:10px;color:#333}.topbar .tabs .tab.active[data-v-22a0ff11]{font-weight:700;font-size:17px;color:#111}.topbar-padding[data-v-22a0ff11]{height:42px}
`, da = (a) => (g("data-v-22a0ff11"), a = a(), y(), a), ia = /* @__PURE__ */ l('<div class="tabs" data-v-22a0ff11><div class="tab active" data-v-22a0ff11>\u6587\u6863</div><div class="tab" data-v-22a0ff11>\u7EC4\u4EF6</div><div class="tab" data-v-22a0ff11>\u793E\u533A</div><div class="tab" data-v-22a0ff11>\u6570\u636E\u5E93</div><div class="tab" data-v-22a0ff11>\u6E38\u620F</div><div class="tab" data-v-22a0ff11>AI</div></div><div class="apps" data-v-22a0ff11><i class="ficon-apps1" data-v-22a0ff11></i></div>', 2), va = [
  ia
], ta = /* @__PURE__ */ da(() => /* @__PURE__ */ i("div", { class: "topbar-padding" }, null, -1));
function ea(a, d, t, v, r, e) {
  return o(), n(p, null, [
    i("div", {
      class: "topbar",
      style: b(a.style)
    }, va, 4),
    ta
  ], 64);
}
const sa = /* @__PURE__ */ h(Z, [["render", ea], ["styles", [aa]], ["__scopeId", "data-v-22a0ff11"]]), oa = u({
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
V.get("/view-ui/api/menu.json").then((a) => {
  if (!f.lock) {
    f.lock = !0;
    for (const d of a) {
      const t = L[d];
      t && f.push(t);
    }
  }
});
const na = {
  app: {
    style: {
      background: "-webkit-linear-gradient(266deg, #e6fbef, #fff, #fff)"
    }
  },
  components: { Topbar: sa, Search: X },
  setup() {
    return {
      langs: oa,
      historys: P,
      menu: f,
      search: F(!1)
    };
  },
  methods: {
    open(a, d) {
      d === "blank" ? M(a) : O(a);
    },
    onSearch() {
      this.search = !0;
    }
  },
  mounted() {
    k("#e6fbef");
  }
}, ra = `.apps-center .search[data-v-d475a65f]{padding:4px 10px}.apps-center .search .search-button[data-v-d475a65f]{background-color:#fff;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#666;padding:10px}.apps-center .search .search-button i[data-v-d475a65f]{font-size:15px;margin-right:8px}.apps-center .apps-items[data-v-d475a65f]{display:flex;flex-wrap:wrap;justify-content:space-around;flex-direction:column;width:200%;height:165px;overflow-x:auto}.apps-center .apps-items .item[data-v-d475a65f]{display:flex;justify-content:center;align-items:center;overflow:hidden;width:10%;height:80px}.apps-center .apps-items .item .link[data-v-d475a65f]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .apps-items .item .link .icon[data-v-d475a65f]{width:50px;height:50px;margin-bottom:2px}.apps-center .apps-items .item .link .icon i[data-v-d475a65f]{font-size:26px}.apps-center .apps-items .item .link .name[data-v-d475a65f]{font-size:11px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .historys[data-v-d475a65f]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-d475a65f]{text-align:center}.apps-center .historys .apps .item[data-v-d475a65f]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-d475a65f]{padding:12px 10px}
`, fa = (a) => (g("data-v-d475a65f"), a = a(), y(), a), pa = { class: "apps-center" }, ca = { class: "search" }, la = /* @__PURE__ */ fa(() => /* @__PURE__ */ i("i", { class: "ficon-sousuo-sousuo" }, null, -1)), ua = { class: "apps-items" }, ha = ["href", "onClick"], xa = { class: "name" }, ma = /* @__PURE__ */ l('<div class="" data-v-d475a65f><div data-v-d475a65f></div></div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div><div data-v-d475a65f>-</div><div data-v-d475a65f>--</div>', 51);
function _a(a, d, t, v, r, e) {
  const c = x("Topbar"), w = x("Search");
  return o(), n(p, null, [
    m(c),
    i("div", pa, [
      i("div", ca, [
        i("div", {
          class: "search-button",
          onClick: d[0] || (d[0] = (...s) => e.onSearch && e.onSearch(...s))
        }, [
          la,
          S(_(v.langs.search), 1)
        ])
      ]),
      i("div", ua, [
        (o(!0), n(p, null, A(v.menu, ({ url: s, name: $, icon: C, color: z, target: E }) => (o(), n("div", {
          class: "item",
          key: s
        }, [
          i("a", {
            class: "link",
            href: s,
            onClick: I((ba) => e.open(s, E), ["prevent"])
          }, [
            i("div", {
              class: "icon center",
              style: b({ color: z })
            }, [
              i("i", {
                class: j(C)
              }, null, 2)
            ], 4),
            i("div", xa, _($), 1)
          ], 8, ha)
        ]))), 128))
      ])
    ]),
    ma,
    m(B, { name: "fade" }, {
      default: D(() => [
        v.search ? (o(), T(w, {
          key: 0,
          onClose: d[1] || (d[1] = (s) => v.search = !1)
        })) : N("", !0)
      ]),
      _: 1
    })
  ], 64);
}
const Ea = /* @__PURE__ */ h(na, [["render", _a], ["styles", [ra]], ["__scopeId", "data-v-d475a65f"]]);
export {
  Ea as default
};
