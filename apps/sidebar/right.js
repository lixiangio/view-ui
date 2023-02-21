import { ref as D, reactive as M, defineComponent as A, resolveComponent as E, openBlock as a, createElementBlock as l, Fragment as $, createVNode as d, normalizeClass as u, normalizeStyle as f, withModifiers as L, withCtx as h, createElementVNode as i, TransitionGroup as F, renderList as K, toDisplayString as m, createTextVNode as T, createCommentVNode as P, pushScopeId as G, popScopeId as U } from "/libs/vue.js";
import v, { Langs as W, urls as X, events as I } from "/libs/view.js";
import { appsState as r } from "/libs/state.js";
import { close as q, openBlank as H, open as J } from "/libs/navigator.js";
import Q from "/libs/pointer.js";
import { Tip as R } from "/libs/viewui.js";
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
}), p = D(!0), o = M([]), x = 5, { initOptions: N } = v, { apps: g, multi: Z } = N, { urls: B, style: ee } = Z.sidebar;
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
      appsList: o,
      appsState: r,
      sidebarState: p
    };
  },
  methods: {
    close: q,
    open(e, t) {
      t === "blank" ? H(e) : J(e);
    },
    switchLayer() {
      r.value === !0 ? (r.value = !1, p.value === !0 && this.collapse()) : (r.value = !0, p.value === !1 && this.expand());
    },
    expand() {
      p.value = !0, g.padding[0] = w, v.swiper.scroll(w - x);
    },
    collapse() {
      p.value = !1, g.padding[0] = x, v.swiper.scroll(-(w - x));
    }
  },
  async mounted() {
    const e = new Q(this.$el.nextElementSibling, { angle: 40 });
    e.on("lock", () => {
      e.dir === "X" && e.trend < 0 && (r.value = !0, e.switch(v.appsPointer));
    });
  }
}), se = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;width:36px;padding:13px 10px;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{color:#666;font-size:14px}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, ae = `sidebar[data-v-92754e07]{position:fixed;top:env(titlebar-area-height,0);right:0px;bottom:0;z-index:100000;width:58px;backdrop-filter:blur(10px);transition:transform .25s;overflow:hidden}sidebar .scroll[data-v-92754e07]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}sidebar .scroll[data-v-92754e07]::-webkit-scrollbar{display:none}sidebar .scroll .item[data-v-92754e07]{width:100%;padding:5px 0;transition:all .4s}sidebar .scroll .item .link[data-v-92754e07]{width:40px;height:40px;border-radius:40px;cursor:pointer;transition:all .25s ease;display:flex;justify-content:center;align-items:center}sidebar .scroll .item .link .ficon[data-v-92754e07]{width:22px;height:22px}sidebar .scroll .item.active .link[data-v-92754e07]{background-color:var(--active)!important}sidebar .scroll .bottom-padding[data-v-92754e07]{height:60px}sidebar.hide[data-v-92754e07]{transform:translate3d(100%,0,0)}.switch[data-v-92754e07]{position:fixed;right:8px;bottom:8px;z-index:110000;width:40px;height:40px;border-radius:40px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-92754e07]{color:#fff;transition:all .3s}.switch .round[data-v-92754e07]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.active i[data-v-92754e07]{opacity:0}.switch.active .round[data-v-92754e07]{opacity:1;transform:scale(3)}.switch.active .tip-name[data-v-92754e07]{display:block}.shortcutKey[data-v-92754e07]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}@media (any-hover: hover){sidebar .scroll .item .link[data-v-92754e07]:hover{background-color:var(--active)}}
`, le = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [k, y] of t)
    s[k] = y;
  return s;
}, c = (e) => (G("data-v-92754e07"), e = e(), U(), e), re = {
  class: "scroll apps",
  ref: "scroll"
}, pe = ["href", "onClick"], ce = ["xlink:href"], de = { class: "tip-title" }, ue = ["onClick"], fe = ["title", "onClick"], he = /* @__PURE__ */ c(() => /* @__PURE__ */ i("i", { class: "ficon-xinchuangkou" }, null, -1)), ve = [
  he
], be = ["onClick"], me = /* @__PURE__ */ c(() => /* @__PURE__ */ i("i", { class: "ficon-cha" }, null, -1)), xe = /* @__PURE__ */ c(() => /* @__PURE__ */ i("div", { class: "bottom-padding" }, null, -1)), we = /* @__PURE__ */ c(() => /* @__PURE__ */ i("div", { class: "round" }, null, -1)), ge = /* @__PURE__ */ c(() => /* @__PURE__ */ i("span", { class: "shortcutKey" }, "S", -1));
function ke(e, t, s, k, y, ye) {
  const _ = E("Tip"), O = E("sidebar");
  return a(), l($, null, [
    d(O, {
      class: u({ hide: e.sidebarState === !1 }),
      style: f(e.style),
      onContextmenu: t[0] || (t[0] = L(() => {
      }, ["prevent", "stop"]))
    }, {
      default: h(() => [
        i("div", re, [
          d(F, { name: "scale" }, {
            default: h(() => [
              (a(!0), l($, null, K(e.appsList, ({ url: n, active: C, name: V, color: S, icon: j, target: z }) => (a(), l("div", {
                class: u(["item center", { active: C }]),
                key: n
              }, [
                i("a", {
                  class: "link center",
                  href: n,
                  onClick: L((b) => e.open(n, z), ["prevent"])
                }, [
                  (a(), l("svg", {
                    class: "ficon",
                    "aria-hidden": "true",
                    style: f({ color: S })
                  }, [
                    i("use", {
                      "xlink:href": "#" + j
                    }, null, 8, ce)
                  ], 4))
                ], 8, pe),
                d(_, {
                  class: "menu-tip",
                  placement: "left"
                }, {
                  default: h(() => [
                    i("div", de, [
                      i("div", {
                        class: "tip-name",
                        style: f({ color: S }),
                        onClick: (b) => e.open(n, z)
                      }, m(V), 13, ue),
                      i("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (b) => e.open(n, "blank")
                      }, ve, 8, fe)
                    ]),
                    C ? (a(), l("div", {
                      key: 0,
                      class: "link close",
                      onClick: (b) => e.close(n)
                    }, [
                      T(m(e.langs.close) + " ", 1),
                      me
                    ], 8, be)) : P("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 2))), 128))
            ]),
            _: 1
          }),
          xe
        ], 512)
      ]),
      _: 1
    }, 8, ["class", "style"]),
    i("div", {
      class: u(["switch center", { active: e.appsState === !1 }]),
      ref: "switch",
      onClick: t[1] || (t[1] = (...n) => e.switchLayer && e.switchLayer(...n))
    }, [
      i("i", {
        class: u(e.icon),
        style: f({ color: e.color })
      }, null, 6),
      we,
      d(_, { placement: "left" }, {
        default: h(() => [
          ge,
          T(" / " + m(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const Le = /* @__PURE__ */ le(oe, [["render", ke], ["styles", [se, ae]], ["__scopeId", "data-v-92754e07"]]);
export {
  Le as default
};
