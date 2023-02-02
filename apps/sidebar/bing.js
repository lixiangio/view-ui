import { ref as D, reactive as M, defineComponent as A, resolveComponent as E, openBlock as c, createElementBlock as d, Fragment as $, createVNode as u, normalizeClass as a, normalizeStyle as f, withModifiers as L, withCtx as v, createElementVNode as i, TransitionGroup as F, renderList as K, toDisplayString as m, createTextVNode as T, createCommentVNode as P, pushScopeId as G, popScopeId as U } from "/view-ui/libs/vue.js";
import h, { Langs as W, urls as X, events as I } from "/view-ui/libs/view.js";
import { appsState as l } from "/view-ui/libs/state.js";
import { close as q, openBlank as H, open as J } from "/view-ui/libs/navigator.js";
import Q from "/view-ui/libs/pointer.js";
import { Tip as R } from "/view-ui/libs/viewui.js";
const Y = W({
  appsMenu: {
    en: "Switch Apps",
    zh: "\u5207\u6362\u5E94\u7528\u5C42"
  },
  newTab: {
    en: "New tab",
    zh: "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00"
  },
  close: {
    en: "Close App",
    zh: "\u5173\u95ED\u5E94\u7528"
  }
}), r = D(!0), o = M([]), x = 5, { initOptions: N } = h, { apps: g, multi: Z } = N, { urls: B, style: ee } = Z.sidebar;
if (B)
  for (const e of B) {
    let t = X[e];
    if (t === void 0) {
      if (!(e.split("/").length > 1))
        continue;
      continue;
    }
    t.shortcut = !0, o.includes(t) === !1 && o.push(t);
  }
const [w] = g.padding;
I.on("opened", (e) => {
  const t = o.indexOf(e);
  t === -1 ? (e.active = !0, o.push(e)) : o[t].active = !0;
});
I.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const s = o.indexOf(t);
    o.splice(s, 1);
  }
});
const { name: te, icon: ie, color: ne } = N.main, oe = A({
  components: { Tip: R },
  setup() {
    return {
      name: te,
      icon: ie,
      color: ne,
      langs: Y,
      style: ee,
      appsState: l,
      sidebarState: r,
      appsList: o
    };
  },
  methods: {
    close: q,
    open(e, t) {
      t === "blank" ? H(e) : J(e);
    },
    switchLayer() {
      l.value === !0 ? (l.value = !1, r.value === !0 && this.collapse()) : (l.value = !0, r.value === !1 && this.expand());
    },
    expand() {
      r.value = !0, g.padding[0] = w, h.swiper.scroll(w - x);
    },
    collapse() {
      r.value = !1, g.padding[0] = x, h.swiper.scroll(-(w - x));
    }
  },
  async mounted() {
    const e = new Q(this.$el.nextElementSibling, { angle: 40 });
    e.on("lock", () => {
      e.dir === "X" && e.trend < 0 && (l.value = !0, e.switch(h.appsPointer));
    });
  }
}), se = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;width:36px;padding:13px 10px;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{color:#666;font-size:14px}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, ae = `sidebar[data-v-e99f4535]{position:fixed;top:env(titlebar-area-height,0);right:0px;bottom:0;z-index:100000;width:58px;backdrop-filter:blur(10px);transition:transform .25s;overflow:hidden}sidebar .scroll[data-v-e99f4535]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}sidebar .scroll[data-v-e99f4535]::-webkit-scrollbar{display:none}sidebar .scroll .item[data-v-e99f4535]{width:100%;padding:5px 0;transition:all .4s}sidebar .scroll .item .link[data-v-e99f4535]{width:40px;height:40px;border-radius:40px;cursor:pointer;transition:all .25s ease;display:flex;justify-content:center;align-items:center}sidebar .scroll .item .link i[data-v-e99f4535]{font-size:20px}sidebar .scroll .item.active .link[data-v-e99f4535]{background-color:var(--active)!important}sidebar .scroll .bottom-padding[data-v-e99f4535]{height:60px}sidebar.hide[data-v-e99f4535]{transform:translate3d(100%,0,0)}.switch[data-v-e99f4535]{position:fixed;right:8px;bottom:8px;z-index:110000;width:40px;height:40px;border-radius:40px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-e99f4535]{color:#fff;transition:all .3s}.switch .round[data-v-e99f4535]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.active i[data-v-e99f4535]{opacity:0}.switch.active .round[data-v-e99f4535]{opacity:1;transform:scale(3)}.switch.active .tip-name[data-v-e99f4535]{display:block}.shortcutKey[data-v-e99f4535]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}@media (any-hover: hover){sidebar .scroll .item .link[data-v-e99f4535]:hover{background-color:var(--active)}}
`, le = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [y, k] of t)
    s[y] = k;
  return s;
}, p = (e) => (G("data-v-e99f4535"), e = e(), U(), e), re = {
  class: "scroll apps",
  ref: "scroll"
}, pe = ["href", "onClick"], ce = { class: "tip-title" }, de = ["onClick"], ue = ["title", "onClick"], fe = /* @__PURE__ */ p(() => /* @__PURE__ */ i("i", { class: "ficon-xinchuangkou" }, null, -1)), ve = [
  fe
], he = ["onClick"], be = /* @__PURE__ */ p(() => /* @__PURE__ */ i("i", { class: "ficon-cha" }, null, -1)), me = /* @__PURE__ */ p(() => /* @__PURE__ */ i("div", { class: "bottom-padding" }, null, -1)), xe = /* @__PURE__ */ p(() => /* @__PURE__ */ i("div", { class: "round" }, null, -1)), we = /* @__PURE__ */ p(() => /* @__PURE__ */ i("span", { class: "shortcutKey" }, "S", -1));
function ge(e, t, s, y, k, ye) {
  const _ = E("Tip"), O = E("sidebar");
  return c(), d($, null, [
    u(O, {
      class: a({ hide: e.sidebarState === !1 }),
      style: f(e.style),
      onContextmenu: t[0] || (t[0] = L(() => {
      }, ["prevent", "stop"]))
    }, {
      default: v(() => [
        i("div", re, [
          u(F, { name: "scale" }, {
            default: v(() => [
              (c(!0), d($, null, K(e.appsList, ({ url: n, active: C, name: V, color: S, icon: j, target: z }) => (c(), d("div", {
                class: a(["item center", { active: C }]),
                key: n
              }, [
                i("a", {
                  class: "link center",
                  href: n,
                  onClick: L((b) => e.open(n, z), ["prevent"])
                }, [
                  i("i", {
                    class: a(j),
                    style: f({ color: S })
                  }, null, 6)
                ], 8, pe),
                u(_, {
                  class: "menu-tip",
                  placement: "left"
                }, {
                  default: v(() => [
                    i("div", ce, [
                      i("div", {
                        class: "tip-name",
                        style: f({ color: S }),
                        onClick: (b) => e.open(n, z)
                      }, m(V), 13, de),
                      i("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (b) => e.open(n, "blank")
                      }, ve, 8, ue)
                    ]),
                    C ? (c(), d("div", {
                      key: 0,
                      class: "link close",
                      onClick: (b) => e.close(n)
                    }, [
                      T(m(e.langs.close) + " ", 1),
                      be
                    ], 8, he)) : P("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 2))), 128))
            ]),
            _: 1
          }),
          me
        ], 512)
      ]),
      _: 1
    }, 8, ["class", "style"]),
    i("div", {
      class: a(["switch center", { active: e.appsState === !1 }]),
      ref: "switch",
      onClick: t[1] || (t[1] = (...n) => e.switchLayer && e.switchLayer(...n))
    }, [
      i("i", {
        class: a(e.icon),
        style: f({ color: e.color })
      }, null, 6),
      xe,
      u(_, { placement: "left" }, {
        default: v(() => [
          we,
          T(" / " + m(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const $e = /* @__PURE__ */ le(oe, [["render", ge], ["styles", [se, ae]], ["__scopeId", "data-v-e99f4535"]]);
export {
  $e as default
};
