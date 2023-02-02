import { ref as P, reactive as F, defineComponent as K, resolveComponent as E, openBlock as b, createElementBlock as v, Fragment as L, createVNode as h, normalizeClass as p, withModifiers as B, withCtx as m, createElementVNode as s, normalizeStyle as d, TransitionGroup as U, renderList as X, toDisplayString as k, createTextVNode as I, createCommentVNode as G, pushScopeId as W, popScopeId as q } from "/view-ui/libs/vue.js";
import u, { Langs as H, urls as N, getParentOptions as J, events as _ } from "/view-ui/libs/view.js";
import { close as Q, openBlank as R, open as Y } from "/view-ui/libs/navigator.js";
import { appsState as f, apps as Z } from "/view-ui/libs/state.js";
import ee, { isTouch as te } from "/view-ui/libs/pointer.js";
import { Tip as ie } from "/view-ui/libs/viewui.js";
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
}), l = P(!0), a = F({}), c = 5, { initOptions: O } = u, { apps: n, multi: ne } = O, [o] = n.padding, { urls: V, style: oe } = ne.sidebar;
if (V)
  for (const e of V) {
    const t = N[e];
    if (t)
      t.shortcut = !0, a[e] === void 0 && (a[e] = t);
    else {
      const i = J(e);
      i && (i.shortcut = !0, a[e] = i, N[e] = i);
    }
  }
function j(e) {
  for (const t in a)
    if (a[t] === e)
      return t;
}
_.on("opened", (e) => {
  j(e) === void 0 && (a[e.url] = e), e.active = !0;
});
_.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const i = j(t);
    i && delete a[i], t.active = !1;
  }
});
const ae = K({
  components: { Tip: ie },
  setup() {
    const { name: e, icon: t, color: i } = O.main;
    return {
      langs: se,
      links: a,
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
      f.value === !0 ? (f.value = !1, l.value === !0 && this.collapse()) : (Z.length && (f.value = !0, u.swiper.align()), l.value === !1 && this.expand());
    },
    expand() {
      this.$refs.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${o}px,0,0)`
      ), l.value = !0, n.padding[0] = o, u.swiper.scroll(o - c);
    },
    collapse() {
      this.$refs.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${c}px,0,0)`
      ), l.value = !1, n.padding[0] = c, u.swiper.scroll(-(o - c));
    }
  },
  async mounted() {
    const { $el: e } = this.$refs;
    e.style.transform = `translate3d(${o}px,0,0)`;
    const t = new ee(e, { angle: 40 });
    if (t.on("lock", () => {
      t.dir === "X" && t.trend > 0 && n.padding[0] === o && (f.value = !0, t.switch(u.appsPointer));
    }), t.on("level", () => {
      n.padding[0] += t.move, n.padding[0] < c ? n.padding[0] = c : n.padding[0] > o && (n.padding[0] = o), e.setAttribute(
        "style",
        `transform: translate3d(${n.left}px,0,0)`
      );
    }), te === !1) {
      const i = this.$refs.scroll;
      t.on("vertical", () => {
        i.scroll(0, i.scrollTop - t.move);
      });
    }
    t.on("end", () => {
      t.dir === "X" && (t.move > 0 ? this.expand() : t.move < 0 ? this.collapse() : n.padding[0] < o ? this.collapse() : this.expand());
    }), t.on("click", () => {
      l.value === !1 && this.expand();
    }), _.on("sidebar.switch", (i) => {
      (typeof i == "boolean" ? i : !l.value) ? this.expand() : this.collapse();
    });
  }
}), le = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;align-items:center;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;white-space:nowrap;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{width:30;flex:none;cursor:pointer;padding-right:8px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{width:26px;height:26px;font-size:14px;border-radius:30px;padding:6px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab:hover i{background-color:#eee}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, re = `sidebar[data-v-0bfa2bc8]{position:fixed;top:env(titlebar-area-height,0);left:-62px;bottom:0;z-index:100000;width:60px;cursor:col-resize}sidebar .scroll[data-v-0bfa2bc8]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%;border-radius:0 12px 12px 0}sidebar .scroll[data-v-0bfa2bc8]::-webkit-scrollbar{display:none}sidebar .scroll .item[data-v-0bfa2bc8]{width:50px;height:60px;transition:all .4s;margin:0 auto}sidebar .scroll .item .link[data-v-0bfa2bc8]{display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:44px;background-color:#ffffff1c;cursor:pointer;transition:all .25s ease}sidebar .scroll .item .link i[data-v-0bfa2bc8]{font-size:20px}sidebar .scroll .item.active .link[data-v-0bfa2bc8]{background-color:var(--active)!important}sidebar .scroll .bottom-padding[data-v-0bfa2bc8]{height:60px}sidebar.sidebarActive[data-v-0bfa2bc8]{cursor:default}.shortcutKey[data-v-0bfa2bc8]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}.switch[data-v-0bfa2bc8]{position:fixed;left:8px;bottom:8px;z-index:100000;width:44px;height:44px;border-radius:44px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-0bfa2bc8]{color:#fff;transition:all .3s;font-size:20px}.switch .round[data-v-0bfa2bc8]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.appsActive i[data-v-0bfa2bc8]{opacity:0}.switch.appsActive .round[data-v-0bfa2bc8]{opacity:1;transform:scale(4)}.switch.appsActive .tip-name[data-v-0bfa2bc8]{display:block}@media (any-hover: hover){sidebar .scroll .item .link[data-v-0bfa2bc8]:hover{background-color:var(--active)}}
`, ce = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [x, $] of t)
    i[x] = $;
  return i;
}, g = (e) => (W("data-v-0bfa2bc8"), e = e(), q(), e), pe = ["href", "onClick"], de = { class: "tip-title" }, fe = ["onClick"], ue = ["title", "onClick"], be = ["onClick"], ve = /* @__PURE__ */ g(() => /* @__PURE__ */ s("i", { class: "ficon-cha" }, null, -1)), he = /* @__PURE__ */ g(() => /* @__PURE__ */ s("div", { class: "bottom-padding" }, null, -1)), me = /* @__PURE__ */ g(() => /* @__PURE__ */ s("div", { class: "round" }, null, -1)), ge = /* @__PURE__ */ g(() => /* @__PURE__ */ s("span", { class: "shortcutKey" }, "S", -1));
function xe(e, t, i, x, $, we) {
  const C = E("Tip"), D = E("sidebar");
  return b(), v(L, null, [
    h(D, {
      class: p({ sidebarActive: e.sidebarActive }),
      ref: "$el",
      onContextmenu: t[0] || (t[0] = B(() => {
      }, ["prevent", "stop"]))
    }, {
      default: m(() => [
        s("div", {
          class: "scroll apps",
          style: d(e.style),
          ref: "scroll"
        }, [
          h(U, { name: "scale" }, {
            default: m(() => [
              (b(!0), v(L, null, X(e.links, ({ name: w, color: y, icon: M, active: z, target: A }, r) => (b(), v("div", {
                key: r,
                class: p([{ active: z }, "item center"])
              }, [
                s("a", {
                  class: "link center",
                  href: r,
                  onClick: B((S) => e.open(r, A), ["prevent"])
                }, [
                  s("i", {
                    class: p(M),
                    style: d({ color: y })
                  }, null, 6)
                ], 8, pe),
                h(C, {
                  class: "menu-tip",
                  placement: "right",
                  gap: -3
                }, {
                  default: m(({ close: S }) => [
                    s("div", de, [
                      s("div", {
                        class: "tip-name",
                        style: d({ color: y }),
                        onClick: (T) => e.open(r, A)
                      }, k(w), 13, fe),
                      s("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (T) => e.open(r, "blank")
                      }, [
                        s("i", {
                          class: "ficon-xinchuangkou",
                          style: d({ color: y })
                        }, null, 4)
                      ], 8, ue)
                    ]),
                    z ? (b(), v("div", {
                      key: 0,
                      class: "link close",
                      onClick: (T) => {
                        S(), e.$nextTick(() => e.close(r));
                      }
                    }, [
                      I(k(e.langs.close) + " ", 1),
                      ve
                    ], 8, be)) : G("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 2))), 128))
            ]),
            _: 1
          }),
          he
        ], 4)
      ]),
      _: 1
    }, 8, ["class"]),
    s("div", {
      class: p(["switch center", { appsActive: !e.appsState }]),
      ref: "switch",
      onClick: t[1] || (t[1] = (...w) => e.switchLayer && e.switchLayer(...w))
    }, [
      s("i", {
        class: p(e.icon),
        style: d({ color: e.color })
      }, null, 6),
      me,
      h(C, { placement: "right" }, {
        default: m(() => [
          ge,
          I(" / " + k(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const Ae = /* @__PURE__ */ ce(ae, [["render", xe], ["styles", [le, re]], ["__scopeId", "data-v-0bfa2bc8"]]);
export {
  Ae as default
};
