import { ref as P, reactive as F, defineComponent as K, resolveComponent as E, openBlock as c, createElementBlock as p, Fragment as B, createVNode as h, normalizeClass as y, withModifiers as L, withCtx as v, createElementVNode as s, normalizeStyle as u, TransitionGroup as U, renderList as X, toDisplayString as _, createTextVNode as I, createCommentVNode as G, pushScopeId as W, popScopeId as q } from "/libs/vue.js";
import b, { Langs as H, urls as N, getParentOptions as J, events as $ } from "/libs/view.js";
import { close as Q, openBlank as R, open as Y } from "/libs/navigator.js";
import { appsState as f, apps as Z } from "/libs/state.js";
import ee, { isTouch as te } from "/libs/pointer.js";
import { Tip as ie } from "/libs/viewui.js";
const se = H({
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
}), l = P(!0), o = F({}), d = 3, { initOptions: O } = b, { apps: m, multi: ne } = O, [n] = m.padding, { urls: V, style: oe } = ne.sidebar;
if (V)
  for (const e of V) {
    const t = N[e];
    if (t)
      t.shortcut = !0, o[e] === void 0 && (o[e] = t);
    else {
      const i = J(e);
      i && (i.shortcut = !0, o[e] = i, N[e] = i);
    }
  }
function j(e) {
  for (const t in o)
    if (o[t] === e)
      return t;
}
$.on("opened", (e) => {
  j(e) === void 0 && (o[e.url] = e), e.active = !0;
});
$.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const i = j(t);
    i && delete o[i], t.active = !1;
  }
});
const ae = K({
  components: { Tip: ie },
  setup() {
    const { name: e, icon: t, color: i } = O.main;
    return {
      langs: se,
      links: o,
      style: oe,
      name: e,
      icon: t,
      color: i,
      appsState: f,
      sidebarActive: l
    };
  },
  methods: {
    close: Q,
    open(e, t) {
      t === "blank" ? R(e) : Y(e);
    },
    switchLayer() {
      f.value === !0 ? (f.value = !1, l.value === !0 && this.collapse()) : (Z.length && (f.value = !0, b.swiper.align()), l.value === !1 && this.expand());
    },
    expand() {
      this.$refs.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${n}px,0,0)`
      ), l.value = !0, m.padding[0] = n, b.swiper.scroll(n - d);
    },
    collapse() {
      this.$refs.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${d}px,0,0)`
      ), l.value = !1, m.padding[0] = d, b.swiper.scroll(-(n - d));
    }
  },
  async mounted() {
    const { $el: e } = this.$refs;
    e.style.transform = `translate3d(${n}px,0,0)`;
    const t = new ee(e, { angle: 40 }), { padding: i } = m;
    if (t.on("lock", () => {
      t.dir === "X" && t.trend > 0 && i[0] === n && (f.value = !0, t.switch(b.appsPointer));
    }), te === !1) {
      const a = this.$refs.scroll;
      t.on("vertical", () => {
        a.scrollBy(0, -t.move);
      });
    }
    t.on("level", () => {
      i[0] += t.move, i[0] < d ? i[0] = d : i[0] > n && (i[0] = n), e.setAttribute("style", `transform: translate3d(${i[0]}px,0,0)`);
    }), t.on("end", () => {
      t.dir === "X" && (t.move > 0 ? this.expand() : t.move < 0 ? this.collapse() : i[0] < n ? this.collapse() : this.expand());
    }), t.on("click", () => {
      l.value === !1 && this.expand();
    }), $.on("sidebar.switch", (a) => {
      (typeof a == "boolean" ? a : !l.value) ? this.expand() : this.collapse();
    });
  }
}), le = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;align-items:center;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;white-space:nowrap;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{width:30;flex:none;cursor:pointer;padding-right:8px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{width:26px;height:26px;font-size:14px;border-radius:30px;padding:6px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab:hover i{background-color:#eee}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, re = `sidebar[data-v-6158b9ec]{position:fixed;top:env(titlebar-area-height,0);left:-62px;bottom:0;z-index:100000;width:60px;cursor:col-resize}sidebar .scroll[data-v-6158b9ec]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%;border-radius:0 12px 12px 0}sidebar .scroll[data-v-6158b9ec]::-webkit-scrollbar{display:none}sidebar .scroll .item[data-v-6158b9ec]{width:50px;height:60px;transition:all .4s;margin:0 auto}sidebar .scroll .item .link[data-v-6158b9ec]{display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:44px;background-color:#ffffff1c;cursor:pointer;transition:all .25s ease}sidebar .scroll .item .link .ficon[data-v-6158b9ec]{width:22px;height:22px}sidebar .scroll .item.active .link[data-v-6158b9ec]{background-color:var(--active)!important}sidebar .scroll .bottom-padding[data-v-6158b9ec]{height:60px}sidebar.sidebarActive[data-v-6158b9ec]{cursor:default}.shortcutKey[data-v-6158b9ec]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}.switch[data-v-6158b9ec]{position:fixed;left:8px;bottom:8px;z-index:100000;width:44px;height:44px;border-radius:44px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch .ficon[data-v-6158b9ec]{color:#fff;transition:all .3s;font-size:18px}.switch .round[data-v-6158b9ec]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.appsActive .ficon[data-v-6158b9ec]{opacity:0}.switch.appsActive .round[data-v-6158b9ec]{opacity:1;transform:scale(4)}.switch.appsActive .tip-name[data-v-6158b9ec]{display:block}@media (any-hover: hover){sidebar .scroll .item .link[data-v-6158b9ec]:hover{background-color:var(--active)}}
`, ce = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, g] of t)
    i[a] = g;
  return i;
}, x = (e) => (W("data-v-6158b9ec"), e = e(), q(), e), pe = ["href", "onClick"], de = ["xlink:href"], ue = { class: "tip-title" }, fe = ["onClick"], be = ["title", "onClick"], he = ["onClick"], ve = /* @__PURE__ */ x(() => /* @__PURE__ */ s("i", { class: "ficon-cha" }, null, -1)), me = /* @__PURE__ */ x(() => /* @__PURE__ */ s("div", { class: "bottom-padding" }, null, -1)), xe = ["xlink:href"], ge = /* @__PURE__ */ x(() => /* @__PURE__ */ s("div", { class: "round" }, null, -1)), we = /* @__PURE__ */ x(() => /* @__PURE__ */ s("span", { class: "shortcutKey" }, "S", -1));
function ke(e, t, i, a, g, ye) {
  const C = E("Tip"), D = E("sidebar");
  return c(), p(B, null, [
    h(D, {
      class: y({ sidebarActive: e.sidebarActive }),
      ref: "$el",
      onContextmenu: t[0] || (t[0] = L(() => {
      }, ["prevent", "stop"]))
    }, {
      default: v(() => [
        s("div", {
          class: "scroll apps",
          style: u(e.style),
          ref: "scroll"
        }, [
          h(U, { name: "scale" }, {
            default: v(() => [
              (c(!0), p(B, null, X(e.links, ({ name: w, color: k, icon: M, active: z, target: A }, r) => (c(), p("div", {
                key: r,
                class: y([{ active: z }, "item center"])
              }, [
                s("a", {
                  class: "link center",
                  href: r,
                  onClick: L((S) => e.open(r, A), ["prevent"])
                }, [
                  (c(), p("svg", {
                    class: "ficon",
                    "aria-hidden": "true",
                    style: u({ color: k })
                  }, [
                    s("use", {
                      "xlink:href": "#" + M
                    }, null, 8, de)
                  ], 4))
                ], 8, pe),
                h(C, {
                  class: "menu-tip",
                  placement: "right",
                  gap: -3
                }, {
                  default: v(({ close: S }) => [
                    s("div", ue, [
                      s("div", {
                        class: "tip-name",
                        style: u({ color: k }),
                        onClick: (T) => e.open(r, A)
                      }, _(w), 13, fe),
                      s("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (T) => e.open(r, "blank")
                      }, [
                        s("i", {
                          class: "ficon-xinchuangkou",
                          style: u({ color: k })
                        }, null, 4)
                      ], 8, be)
                    ]),
                    z ? (c(), p("div", {
                      key: 0,
                      class: "link close",
                      onClick: (T) => {
                        S(), e.$nextTick(() => e.close(r));
                      }
                    }, [
                      I(_(e.langs.close) + " ", 1),
                      ve
                    ], 8, he)) : G("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 2))), 128))
            ]),
            _: 1
          }),
          me
        ], 4)
      ]),
      _: 1
    }, 8, ["class"]),
    s("div", {
      class: y(["switch center", { appsActive: !e.appsState }]),
      ref: "switch",
      onClick: t[1] || (t[1] = (...w) => e.switchLayer && e.switchLayer(...w))
    }, [
      (c(), p("svg", {
        class: "ficon",
        "aria-hidden": "true",
        style: u({ color: e.color })
      }, [
        s("use", {
          "xlink:href": "#" + e.icon
        }, null, 8, xe)
      ], 4)),
      ge,
      h(C, { placement: "right" }, {
        default: v(() => [
          we,
          I(" / " + _(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const Te = /* @__PURE__ */ ce(ae, [["render", ke], ["styles", [le, re]], ["__scopeId", "data-v-6158b9ec"]]);
export {
  Te as default
};
