import { openBlock as s, createElementBlock as o, Fragment as p, createElementVNode as i, createStaticVNode as f, normalizeStyle as g, pushScopeId as _, popScopeId as y, ref as F, resolveComponent as x, createVNode as m, createTextVNode as A, toDisplayString as b, renderList as I, withModifiers as j, normalizeClass as B, Transition as T, withCtx as D, createBlock as N, createCommentVNode as V } from "/view-ui/libs/vue.js";
import L from "/view-ui/libs/network.js";
import { Langs as u, setThemeColor as k, urls as M } from "/view-ui/libs/view.js";
import { openBlank as P, open as O } from "/view-ui/libs/navigator.js";
import { menu as r, historys as q } from "/view-ui/libs/state.js";
import { message as G } from "/view-ui/libs/viewui.js";
import { back as H } from "/view-ui/libs/router.js";
const J = `.search-input[data-v-d39c5933]{position:fixed;left:0;right:0;top:0;z-index:1;display:flex;height:50px;background-color:#f5f5f5}.search-input input[data-v-d39c5933]{flex:1;height:38px;margin:8px 0 8px 10px;background-color:#fff;border-radius:10px;border:unset;font-size:14px}.search-input .close[data-v-d39c5933]{width:50px;font-size:15px;color:#000;cursor:pointer}.search-list[data-v-d39c5933]{background-color:#f5f5f5;padding:50px 10px 10px}.search-list h4[data-v-d39c5933]{font-size:14px;line-height:30px}.search-list ul li[data-v-d39c5933]{display:inline-block;background-color:#fff;margin:5px 12px 5px 3px;padding:6px 12px;border-radius:10px}
`, h = (d, a) => {
  const t = d.__vccOpts || d;
  for (const [v, n] of a)
    t[v] = n;
  return t;
}, K = u({
  search: {
    en: "Search",
    zh: "\u641C\u7D22\u5E94\u7528"
  }
}), Q = {
  inline: !0,
  app: {},
  setup() {
    return { langs: K };
  },
  methods: {
    close() {
      H(this.$el);
    }
  },
  mounted() {
    this.$refs.input.focus(), k("#f5f5f5");
  }
}, R = { class: "search-input" }, U = ["placeholder"], W = /* @__PURE__ */ f('<div class="search-list" data-v-d39c5933><h4 data-v-d39c5933>\u641C\u7D22\u5386\u53F2</h4><ul data-v-d39c5933><li data-v-d39c5933>vite</li><li data-v-d39c5933>vue</li><li data-v-d39c5933>react</li><li data-v-d39c5933>flutter</li></ul><h4 data-v-d39c5933>\u641C\u7D22\u53D1\u73B0</h4><ul data-v-d39c5933><li data-v-d39c5933>typescript</li><li data-v-d39c5933>node.js</li><li data-v-d39c5933>rust</li></ul><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div><div data-v-d39c5933>--</div><div data-v-d39c5933>-</div></div>', 1);
function X(d, a, t, v, n, c) {
  return s(), o(p, null, [
    i("div", R, [
      i("input", {
        type: "text",
        name: "search",
        placeholder: v.langs.search,
        ref: "input"
      }, null, 8, U),
      i("div", {
        class: "close center",
        onClick: a[0] || (a[0] = (...l) => c.close && c.close(...l))
      }, "\u53D6\u6D88")
    ]),
    W
  ], 64);
}
const Y = /* @__PURE__ */ h(Q, [["render", X], ["styles", [J]], ["__scopeId", "data-v-d39c5933"]]), Z = u({}), dd = {
  setup() {
    return {
      langs: Z
    };
  }
}, ad = `.topbar[data-v-3a7887f5]{position:fixed;z-index:1;display:flex;justify-content:space-between;height:42px;background-color:#e6fbef}.topbar .apps[data-v-3a7887f5]{flex:none;display:flex;align-items:center;justify-content:center;width:60px}.topbar .apps i[data-v-3a7887f5]{font-size:20px;color:#585858}.topbar .tabs[data-v-3a7887f5]{display:flex;overflow-x:auto;scrollbar-width:none}.topbar .tabs[data-v-3a7887f5]::-webkit-scrollbar{display:none}.topbar .tabs .tab[data-v-3a7887f5]{flex:none;display:flex;align-items:center;font-size:16px;padding:0 10px;margin-right:10px;color:#333}.topbar .tabs .tab.active[data-v-3a7887f5]{font-weight:700;font-size:17px;color:#111}.topbar-padding[data-v-3a7887f5]{height:42px}
`, id = (d) => (_("data-v-3a7887f5"), d = d(), y(), d), vd = /* @__PURE__ */ f('<div class="tabs" data-v-3a7887f5><div class="tab active" data-v-3a7887f5>\u6587\u6863</div><div class="tab" data-v-3a7887f5>\u7EC4\u4EF6</div><div class="tab" data-v-3a7887f5>\u793E\u533A</div><div class="tab" data-v-3a7887f5>\u6570\u636E\u5E93</div><div class="tab" data-v-3a7887f5>\u6E38\u620F</div><div class="tab" data-v-3a7887f5>AI</div></div><div class="apps" data-v-3a7887f5><i class="ficon-apps1" data-v-3a7887f5></i></div>', 2), td = [
  vd
], cd = /* @__PURE__ */ id(() => /* @__PURE__ */ i("div", { class: "topbar-padding" }, null, -1));
function ed(d, a, t, v, n, c) {
  return s(), o(p, null, [
    i("div", {
      class: "topbar",
      style: g(d.style)
    }, td, 4),
    cd
  ], 64);
}
const sd = /* @__PURE__ */ h(dd, [["render", ed], ["styles", [ad]], ["__scopeId", "data-v-3a7887f5"]]), w = u({
  appsCenter: {
    en: "Application center",
    zh: "\u5E94\u7528\u4E2D\u5FC3"
  },
  search: {
    en: "Search",
    zh: "\u641C\u7D22"
  },
  warning: {
    en: "Mobile is not available at the moment, it is recommended to browse on the PC side",
    zh: "\u79FB\u52A8\u7AEF\u6682\u4E0D\u53EF\u7528\uFF0C\u5EFA\u8BAE\u5728 PC \u7AEF\u6D4F\u89C8"
  }
});
G.warning(w.warning, 6e3);
L.get("/view-ui/api/menu.json").then((d) => {
  if (!r.lock) {
    r.lock = !0;
    for (const a of d) {
      const t = M[a];
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
  components: { Topbar: sd, Search: Y },
  setup() {
    return {
      langs: w,
      historys: q,
      menu: r,
      search: F(!1)
    };
  },
  methods: {
    open(d, a) {
      a === "blank" ? P(d) : O(d);
    },
    onSearch() {
      this.search = !0;
    }
  },
  mounted() {
    k("#e6fbef");
  }
}, nd = `.apps-center .search[data-v-3c26f646]{padding:4px 10px}.apps-center .search .search-button[data-v-3c26f646]{background-color:#fff;border-radius:10px;border:unset;width:100%;height:38px;cursor:pointer;color:#666;padding:10px}.apps-center .search .search-button i[data-v-3c26f646]{font-size:15px;margin-right:8px}.apps-center .apps-items[data-v-3c26f646]{display:flex;flex-wrap:wrap;justify-content:space-around;flex-direction:column;width:200%;height:165px;overflow-x:auto}.apps-center .apps-items .item[data-v-3c26f646]{display:flex;justify-content:center;align-items:center;overflow:hidden;width:10%;height:80px}.apps-center .apps-items .item .link[data-v-3c26f646]{display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:8px 10px;color:#fff}.apps-center .apps-items .item .link .icon[data-v-3c26f646]{width:50px;height:50px;margin-bottom:2px}.apps-center .apps-items .item .link .icon i[data-v-3c26f646]{font-size:26px}.apps-center .apps-items .item .link .name[data-v-3c26f646]{font-size:11px;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.apps-center .historys[data-v-3c26f646]{position:fixed;bottom:4px;left:4px;right:4px;border-radius:8px;backdrop-filter:blur(20px)}.apps-center .historys .apps[data-v-3c26f646]{text-align:center}.apps-center .historys .apps .item[data-v-3c26f646]{display:inline-block;margin-bottom:0;transition:all .4s}.apps-center .historys .apps .item .link[data-v-3c26f646]{padding:12px 10px}
`, rd = (d) => (_("data-v-3c26f646"), d = d(), y(), d), pd = { class: "apps-center" }, ld = { class: "search" }, fd = /* @__PURE__ */ rd(() => /* @__PURE__ */ i("i", { class: "ficon-sousuo-sousuo" }, null, -1)), ud = { class: "apps-items" }, hd = ["href", "onClick"], xd = { class: "name" }, md = /* @__PURE__ */ f('<div class="" data-v-3c26f646><div data-v-3c26f646></div></div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div><div data-v-3c26f646>-</div><div data-v-3c26f646>--</div>', 51);
function bd(d, a, t, v, n, c) {
  const l = x("Topbar"), $ = x("Search");
  return s(), o(p, null, [
    m(l),
    i("div", pd, [
      i("div", ld, [
        i("div", {
          class: "search-button",
          onClick: a[0] || (a[0] = (...e) => c.onSearch && c.onSearch(...e))
        }, [
          fd,
          A(b(v.langs.search), 1)
        ])
      ]),
      i("div", ud, [
        (s(!0), o(p, null, I(v.menu, ({ url: e, name: C, icon: z, color: E, target: S }) => (s(), o("div", {
          class: "item",
          key: e
        }, [
          i("a", {
            class: "link",
            href: e,
            onClick: j((gd) => c.open(e, S), ["prevent"])
          }, [
            i("div", {
              class: "icon center",
              style: g({ color: E })
            }, [
              i("i", {
                class: B(z)
              }, null, 2)
            ], 4),
            i("div", xd, b(C), 1)
          ], 8, hd)
        ]))), 128))
      ])
    ]),
    md,
    m(T, { name: "fade" }, {
      default: D(() => [
        v.search ? (s(), N($, {
          key: 0,
          onClose: a[1] || (a[1] = (e) => v.search = !1)
        })) : V("", !0)
      ]),
      _: 1
    })
  ], 64);
}
const Ed = /* @__PURE__ */ h(od, [["render", bd], ["styles", [nd]], ["__scopeId", "data-v-3c26f646"]]);
export {
  Ed as default
};
