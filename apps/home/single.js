import { openBlock as f, createElementBlock as o, Fragment as r, createElementVNode as i, createStaticVNode as l, normalizeStyle as b, pushScopeId as g, popScopeId as y, ref as F, resolveComponent as x, createVNode as m, createTextVNode as S, toDisplayString as _, renderList as A, withModifiers as I, normalizeClass as j, Transition as B, withCtx as D, createBlock as T, createCommentVNode as N } from "/demo/libs/vue.js";
import V from "/demo/libs/network.js";
import { Langs as u, setThemeColor as k, urls as L } from "/demo/libs/view.js";
import { openBlank as M, open as O } from "/demo/libs/navigator.js";
import { menu as n, historys as P } from "/demo/libs/state.js";
import { message as q } from "/demo/libs/viewui.js";
import { back as G } from "/demo/libs/router.js";
const H = `.search-input[data-v-9729e770]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-9729e770]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-9729e770]{width:50px;font-size:15px;color:#000}.search-list[data-v-9729e770]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-9729e770]{font-size:14px;line-height:30px}.search-list ul li[data-v-9729e770]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, h = (a, d) => {
  const v = a.__vccOpts || a;
  for (const [t, c] of d)
    v[t] = c;
  return v;
}, J = u({
  search: {
    en: "Search",
    zh: "\u641C\u7D22\u5E94\u7528"
  }
}), K = {
  type: "inline",
  transition: {},
  data() {
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
}, Q = { class: "search-input" }, R = ["placeholder"], U = /* @__PURE__ */ l('<div class="search-list" data-v-9729e770><h4 data-v-9729e770>\u641C\u7D22\u5386\u53F2</h4><ul data-v-9729e770><li data-v-9729e770>vite</li><li data-v-9729e770>vue</li><li data-v-9729e770>react</li><li data-v-9729e770>flutter</li></ul><h4 data-v-9729e770>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-9729e770><li data-v-9729e770>typescript</li><li data-v-9729e770>node.js</li><li data-v-9729e770>rust</li></ul><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div><div data-v-9729e770>--</div><div data-v-9729e770>-</div></div>', 1);
function W(a, d, v, t, c, e) {
  return f(), o(r, null, [
    i("div", Q, [
      i("input", {
        type: "text",
        name: "search",
        placeholder: c.langs.search,
        ref: "input"
      }, null, 8, R),
      i("div", {
        class: "close center",
        onClick: d[0] || (d[0] = (...p) => e.close && e.close(...p))
      }, "\u53D6\u6D88")
    ]),
    U
  ], 64);
}
const X = /* @__PURE__ */ h(K, [["render", W], ["styles", [H]], ["__scopeId", "data-v-9729e770"]]), Y = u({}), Z = {
  setup() {
    return {
      langs: Y
    };
  }
}, aa = `.topbar[data-v-22a0ff11]{position:fixed;z-index:1;display:flex;justify-content:space-between;height:42px;background-color:#e6fbef}.topbar .apps[data-v-22a0ff11]{flex:none;display:flex;align-items:center;justify-content:center;width:60px}.topbar .apps i[data-v-22a0ff11]{font-size:20px;color:#585858}.topbar .tabs[data-v-22a0ff11]{display:flex;overflow-x:auto;scrollbar-width:none}.topbar .tabs[data-v-22a0ff11]::-webkit-scrollbar{display:none}.topbar .tabs .tab[data-v-22a0ff11]{flex:none;display:flex;align-items:center;font-size:16px;padding:0 10px;margin-right:10px;color:#333}.topbar .tabs .tab.active[data-v-22a0ff11]{font-weight:700;font-size:17px;color:#111}.topbar-padding[data-v-22a0ff11]{height:42px}
`, da = (a) => (g("data-v-22a0ff11"), a = a(), y(), a), ia = /* @__PURE__ */ l('<div class="tabs" data-v-22a0ff11><div class="tab active" data-v-22a0ff11>\u6587\u6863</div><div class="tab" data-v-22a0ff11>\u7EC4\u4EF6</div><div class="tab" data-v-22a0ff11>\u793E\u533A</div><div class="tab" data-v-22a0ff11>\u6570\u636E\u5E93</div><div class="tab" data-v-22a0ff11>\u6E38\u620F</div><div class="tab" data-v-22a0ff11>AI</div></div><div class="apps" data-v-22a0ff11><i class="ficon-apps1" data-v-22a0ff11></i></div>', 2), va = [
  ia
], ta = /* @__PURE__ */ da(() => /* @__PURE__ */ i("div", { class: "topbar-padding" }, null, -1));
function ea(a, d, v, t, c, e) {
  return f(), o(r, null, [
    i("div", {
      class: "topbar",
      style: b(a.style)
    }, va, 4),
    ta
  ], 64);
}
const sa = /* @__PURE__ */ h(Z, [["render", ea], ["styles", [aa]], ["__scopeId", "data-v-22a0ff11"]]), fa = u({
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
V.get("/demo/api/menu.json").then((a) => {
  if (!n.lock) {
    n.lock = !0;
    for (const d of a) {
      const v = L[d];
      v && n.push(v);
    }
  }
});
const ca = {
  style: { background: "-webkit-linear-gradient(266deg, #e6fbef, #fff, #fff)" },
  components: { Topbar: sa, Search: X },
  setup() {
    return {
      langs: fa,
      historys: P,
      menu: n,
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
}, oa = `.apps-center .search[data-v-fdaca1f2]{padding:4px 10px}.apps-center .search .search-button[data-v-fdaca1f2]{background-color:#fff;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#666;padding:10px}.apps-center .search .search-button i[data-v-fdaca1f2]{font-size:15px;margin-right:8px}.apps-center .apps-items[data-v-fdaca1f2]{display:flex;flex-wrap:wrap;justify-content:space-around;flex-direction:column;width:200%;height:165px;overflow-x:auto}.apps-center .apps-items .item[data-v-fdaca1f2]{display:flex;justify-content:center;align-items:center;overflow:hidden;width:10%;height:80px}.apps-center .apps-items .item .link[data-v-fdaca1f2]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .apps-items .item .link .icon[data-v-fdaca1f2]{width:50px;height:50px;margin-bottom:2px}.apps-center .apps-items .item .link .icon i[data-v-fdaca1f2]{font-size:26px}.apps-center .apps-items .item .link .name[data-v-fdaca1f2]{font-size:11px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .historys[data-v-fdaca1f2]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-fdaca1f2]{text-align:center}.apps-center .historys .apps .item[data-v-fdaca1f2]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-fdaca1f2]{padding:12px 10px}
`, na = (a) => (g("data-v-fdaca1f2"), a = a(), y(), a), ra = { class: "apps-center" }, pa = { class: "search" }, la = /* @__PURE__ */ na(() => /* @__PURE__ */ i("i", { class: "ficon-sousuo-sousuo" }, null, -1)), ua = { class: "apps-items" }, ha = ["href", "onClick"], xa = { class: "name" }, ma = /* @__PURE__ */ l('<div class="" data-v-fdaca1f2><div data-v-fdaca1f2></div></div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div><div data-v-fdaca1f2>-</div><div data-v-fdaca1f2>--</div>', 51);
function _a(a, d, v, t, c, e) {
  const p = x("Topbar"), w = x("Search");
  return f(), o(r, null, [
    m(p),
    i("div", ra, [
      i("div", pa, [
        i("div", {
          class: "search-button",
          onClick: d[0] || (d[0] = (...s) => e.onSearch && e.onSearch(...s))
        }, [
          la,
          S(_(t.langs.search), 1)
        ])
      ]),
      i("div", ua, [
        (f(!0), o(r, null, A(t.menu, ({ url: s, name: $, icon: C, color: z, target: E }) => (f(), o("div", {
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
        t.search ? (f(), T(w, {
          key: 0,
          onClose: d[1] || (d[1] = (s) => t.search = !1)
        })) : N("", !0)
      ]),
      _: 1
    })
  ], 64);
}
const Ea = /* @__PURE__ */ h(ca, [["render", _a], ["styles", [oa]], ["__scopeId", "data-v-fdaca1f2"]]);
export {
  Ea as default
};
