import { ref as P, reactive as F, defineComponent as K, resolveComponent as E, openBlock as v, createElementBlock as h, Fragment as B, createVNode as b, normalizeClass as c, withModifiers as L, withCtx as m, createElementVNode as s, normalizeStyle as d, TransitionGroup as U, renderList as X, toDisplayString as _, createTextVNode as I, createCommentVNode as G, pushScopeId as W, popScopeId as q } from "/libs/vue.js";
import u, { Langs as H, urls as N, getParentOptions as J, events as $ } from "/libs/view.js";
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
}), l = P(!0), n = F({}), p = 3, { initOptions: O } = u, { apps: x, multi: oe } = O, [o] = x.padding, { urls: V, style: ne } = oe.sidebar;
if (V)
  for (const e of V) {
    const t = N[e];
    if (t)
      t.shortcut = !0, n[e] === void 0 && (n[e] = t);
    else {
      const i = J(e);
      i && (i.shortcut = !0, n[e] = i, N[e] = i);
    }
  }
function j(e) {
  for (const t in n)
    if (n[t] === e)
      return t;
}
$.on("opened", (e) => {
  j(e) === void 0 && (n[e.url] = e), e.active = !0;
});
$.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const i = j(t);
    i && delete n[i], t.active = !1;
  }
});
const ae = K({
  components: { Tip: ie },
  setup() {
    const { name: e, icon: t, color: i } = O.main;
    return {
      langs: se,
      links: n,
      style: ne,
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
      f.value === !0 ? (f.value = !1, l.value === !0 && this.collapse()) : (Z.length && (f.value = !0, u.swiper.align()), l.value === !1 && this.expand());
    },
    expand() {
      this.$refs.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${o}px,0,0)`
      ), l.value = !0, x.padding[0] = o, u.swiper.scroll(o - p);
    },
    collapse() {
      this.$refs.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${p}px,0,0)`
      ), l.value = !1, x.padding[0] = p, u.swiper.scroll(-(o - p));
    }
  },
  async mounted() {
    const { $el: e } = this.$refs;
    e.style.transform = `translate3d(${o}px,0,0)`;
    const t = new ee(e, { angle: 40 }), { padding: i } = x;
    if (t.on("lock", () => {
      t.dir === "X" && t.trend > 0 && i[0] === o && (f.value = !0, t.switch(u.appsPointer));
    }), te === !1) {
      const a = this.$refs.scroll;
      t.on("vertical", () => {
        a.scrollBy(0, -t.move);
      });
    }
    t.on("level", () => {
      i[0] += t.move, i[0] < p ? i[0] = p : i[0] > o && (i[0] = o), e.setAttribute("style", `transform: translate3d(${i[0]}px,0,0)`);
    }), t.on("end", () => {
      t.dir === "X" && (t.move > 0 ? this.expand() : t.move < 0 ? this.collapse() : i[0] < o ? this.collapse() : this.expand());
    }), t.on("click", () => {
      l.value === !1 && this.expand();
    }), $.on("sidebar.switch", (a) => {
      (typeof a == "boolean" ? a : !l.value) ? this.expand() : this.collapse();
    });
  }
}), le = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;align-items:center;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;white-space:nowrap;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{width:30;flex:none;cursor:pointer;padding-right:8px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{width:26px;height:26px;font-size:14px;border-radius:30px;padding:6px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab:hover i{background-color:#eee}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, re = `sidebar[data-v-eaeafd43]{position:fixed;top:env(titlebar-area-height,0);left:-62px;bottom:0;z-index:100000;width:60px;cursor:col-resize}sidebar .scroll[data-v-eaeafd43]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%;border-radius:0 12px 12px 0}sidebar .scroll[data-v-eaeafd43]::-webkit-scrollbar{display:none}sidebar .scroll .item[data-v-eaeafd43]{width:50px;height:60px;transition:all .4s;margin:0 auto}sidebar .scroll .item .link[data-v-eaeafd43]{display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:44px;background-color:#ffffff1c;cursor:pointer;transition:all .25s ease}sidebar .scroll .item .link i[data-v-eaeafd43]{font-size:20px}sidebar .scroll .item.active .link[data-v-eaeafd43]{background-color:var(--active)!important}sidebar .scroll .bottom-padding[data-v-eaeafd43]{height:60px}sidebar.sidebarActive[data-v-eaeafd43]{cursor:default}.shortcutKey[data-v-eaeafd43]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}.switch[data-v-eaeafd43]{position:fixed;left:8px;bottom:8px;z-index:100000;width:44px;height:44px;border-radius:44px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-eaeafd43]{color:#fff;transition:all .3s;font-size:20px}.switch .round[data-v-eaeafd43]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.appsActive i[data-v-eaeafd43]{opacity:0}.switch.appsActive .round[data-v-eaeafd43]{opacity:1;transform:scale(4)}.switch.appsActive .tip-name[data-v-eaeafd43]{display:block}@media (any-hover: hover){sidebar .scroll .item .link[data-v-eaeafd43]:hover{background-color:var(--active)}}
`, pe = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [a, w] of t)
    i[a] = w;
  return i;
}, g = (e) => (W("data-v-eaeafd43"), e = e(), q(), e), ce = ["href", "onClick"], de = { class: "tip-title" }, fe = ["onClick"], ue = ["title", "onClick"], ve = ["onClick"], he = /* @__PURE__ */ g(() => /* @__PURE__ */ s("i", { class: "ficon-cha" }, null, -1)), be = /* @__PURE__ */ g(() => /* @__PURE__ */ s("div", { class: "bottom-padding" }, null, -1)), me = /* @__PURE__ */ g(() => /* @__PURE__ */ s("div", { class: "round" }, null, -1)), xe = /* @__PURE__ */ g(() => /* @__PURE__ */ s("span", { class: "shortcutKey" }, "S", -1));
function ge(e, t, i, a, w, we) {
  const C = E("Tip"), D = E("sidebar");
  return v(), h(B, null, [
    b(D, {
      class: c({ sidebarActive: e.sidebarActive }),
      ref: "$el",
      onContextmenu: t[0] || (t[0] = L(() => {
      }, ["prevent", "stop"]))
    }, {
      default: m(() => [
        s("div", {
          class: "scroll apps",
          style: d(e.style),
          ref: "scroll"
        }, [
          b(U, { name: "scale" }, {
            default: m(() => [
              (v(!0), h(B, null, X(e.links, ({ name: y, color: k, icon: M, active: z, target: A }, r) => (v(), h("div", {
                key: r,
                class: c([{ active: z }, "item center"])
              }, [
                s("a", {
                  class: "link center",
                  href: r,
                  onClick: L((S) => e.open(r, A), ["prevent"])
                }, [
                  s("i", {
                    class: c(M),
                    style: d({ color: k })
                  }, null, 6)
                ], 8, ce),
                b(C, {
                  class: "menu-tip",
                  placement: "right",
                  gap: -3
                }, {
                  default: m(({ close: S }) => [
                    s("div", de, [
                      s("div", {
                        class: "tip-name",
                        style: d({ color: k }),
                        onClick: (T) => e.open(r, A)
                      }, _(y), 13, fe),
                      s("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (T) => e.open(r, "blank")
                      }, [
                        s("i", {
                          class: "ficon-xinchuangkou",
                          style: d({ color: k })
                        }, null, 4)
                      ], 8, ue)
                    ]),
                    z ? (v(), h("div", {
                      key: 0,
                      class: "link close",
                      onClick: (T) => {
                        S(), e.$nextTick(() => e.close(r));
                      }
                    }, [
                      I(_(e.langs.close) + " ", 1),
                      he
                    ], 8, ve)) : G("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 2))), 128))
            ]),
            _: 1
          }),
          be
        ], 4)
      ]),
      _: 1
    }, 8, ["class"]),
    s("div", {
      class: c(["switch center", { appsActive: !e.appsState }]),
      ref: "switch",
      onClick: t[1] || (t[1] = (...y) => e.switchLayer && e.switchLayer(...y))
    }, [
      s("i", {
        class: c(e.icon),
        style: d({ color: e.color })
      }, null, 6),
      me,
      b(C, { placement: "right" }, {
        default: m(() => [
          xe,
          I(" / " + _(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const Ae = /* @__PURE__ */ pe(ae, [["render", ge], ["styles", [le, re]], ["__scopeId", "data-v-eaeafd43"]]);
export {
  Ae as default
};
