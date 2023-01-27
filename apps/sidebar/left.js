import { ref as D, reactive as M, defineComponent as P, resolveComponent as T, openBlock as f, createBlock as F, normalizeClass as u, withModifiers as E, withCtx as v, createElementVNode as i, normalizeStyle as c, createVNode as y, TransitionGroup as K, createElementBlock as k, Fragment as U, renderList as X, toDisplayString as _, createTextVNode as B, createCommentVNode as G, pushScopeId as W, popScopeId as q } from "/view-ui/libs/vue.js";
import b, { Langs as H, urls as L, getParentOptions as J, events as C } from "/view-ui/libs/view.js";
import { close as Q, openBlank as R, open as Y } from "/view-ui/libs/navigator.js";
import { appsState as d, apps as Z } from "/view-ui/libs/state.js";
import ee, { isTouch as te } from "/view-ui/libs/pointer.js";
import { Tip as se } from "/view-ui/libs/viewui.js";
const l = D(!0), a = M({}), ie = H({
  appsMenu: {
    en: "Switch apps",
    zh: "\u5207\u6362\u5E94\u7528\u5C42"
  },
  newTab: {
    en: "New tab",
    zh: "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00"
  },
  close: {
    en: "Close app",
    zh: "\u5173\u95ED\u5E94\u7528"
  }
}), p = 5, { initOptions: N } = b, { apps: o, sidebar: oe } = N, { left: n } = o, { urls: I, style: ne } = oe;
if (I)
  for (const e of I) {
    const t = L[e];
    if (t)
      t.shortcut = !0, a[e] === void 0 && (a[e] = t);
    else {
      const s = J(e);
      s && (s.shortcut = !0, a[e] = s, L[e] = s);
    }
  }
function V(e) {
  for (const t in a)
    if (a[t] === e)
      return t;
}
C.on("opened", (e) => {
  V(e) === void 0 && (a[e.url] = e), e.active = !0;
});
C.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const s = V(t);
    s && delete a[s], t.active = !1;
  }
});
const ae = P({
  components: { Tip: se },
  setup() {
    const { name: e, icon: t, color: s } = N.main;
    return {
      langs: ie,
      links: a,
      sidebarState: l,
      appsState: d,
      style: ne,
      name: e,
      icon: t,
      color: s
    };
  },
  methods: {
    close: Q,
    open(e, t) {
      t === "blank" ? R(e) : Y(e);
    },
    switchLayer() {
      d.value === !0 ? (d.value = !1, l.value === !0 && this.collapse()) : (Z.length && (d.value = !0, b.swiper.align()), l.value === !1 && this.expand());
    },
    expand() {
      this.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${n}px,0,0)`
      ), l.value = !0, o.left = n, b.swiper.scroll(n - p);
    },
    collapse() {
      this.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${p}px,0,0)`
      ), l.value = !1, o.left = p, b.swiper.scroll(-(n - p));
    }
  },
  async mounted() {
    const { $el: e } = this;
    e.style.transform = `translate3d(${n}px,0,0)`;
    const t = new ee(e, { angle: 40 });
    if (t.on("lock", () => {
      t.dir === "X" && t.trend > 0 && o.left === n && (d.value = !0, t.switch(b.appsPointer));
    }), t.on("level", () => {
      o.left += t.move, o.left < p ? o.left = p : o.left > n && (o.left = n), e.setAttribute(
        "style",
        `transform: translate3d(${o.left}px,0,0)`
      );
    }), te === !1) {
      const s = this.$refs.scroll;
      t.on("vertical", () => {
        s.scroll(0, s.scrollTop - t.move);
      });
    }
    t.on("end", () => {
      t.dir === "X" && (t.move > 0 ? this.expand() : t.move < 0 ? this.collapse() : o.left < n ? this.collapse() : this.expand());
    }), t.on("click", () => {
      l.value === !1 && this.expand();
    }), C.on("sidebar.switch", (s) => {
      (typeof s == "boolean" ? s : !l.value) ? this.expand() : this.collapse();
    });
  }
}), le = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;align-items:center;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;cursor:pointer;padding-right:8px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{width:26px;height:26px;font-size:14px;border-radius:30px;padding:6px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab:hover i{background-color:#eee}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, re = `sidebar[data-v-a215bb15]{position:fixed;top:env(titlebar-area-height,0);left:-62px;bottom:0;z-index:100000;width:60px;cursor:col-resize}sidebar .scroll[data-v-a215bb15]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%;border-radius:0 12px 12px 0}sidebar .scroll[data-v-a215bb15]::-webkit-scrollbar{display:none}sidebar .scroll .item[data-v-a215bb15]{width:100%;height:60px;transition:all .4s}sidebar .scroll .item .link[data-v-a215bb15]{display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:44px;background-color:#ffffff1c;cursor:pointer;transition:all .25s ease}sidebar .scroll .item .link i[data-v-a215bb15]{font-size:20px}sidebar .scroll .item.active .link[data-v-a215bb15]{background-color:var(--active)!important}sidebar .scroll .bottom-padding[data-v-a215bb15]{height:60px}sidebar .switch[data-v-a215bb15]{position:fixed;left:8px;bottom:8px;z-index:1000;width:44px;height:44px;border-radius:44px;transition:all .3s;transform:translate(58px);background-color:#00000030;cursor:pointer}sidebar .switch i[data-v-a215bb15]{color:#fff;transition:all .3s;font-size:20px}sidebar .switch .round[data-v-a215bb15]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}sidebar.appsActive .switch i[data-v-a215bb15]{opacity:0}sidebar.appsActive .switch .round[data-v-a215bb15]{opacity:1;transform:scale(4)}sidebar.appsActive .switch .tip-name[data-v-a215bb15]{display:block}sidebar.sidebarActive[data-v-a215bb15]{cursor:default}sidebar.sidebarActive .switch[data-v-a215bb15]{transform:translate(0)}.shortcutKey[data-v-a215bb15]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}@media (any-hover: hover){sidebar .scroll .item .link[data-v-a215bb15]:hover{background-color:var(--active)}}
`, pe = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [m, $] of t)
    s[m] = $;
  return s;
}, h = (e) => (W("data-v-a215bb15"), e = e(), q(), e), ce = ["href", "onClick"], de = { class: "tip-title" }, be = ["onClick"], fe = ["title", "onClick"], ue = ["onClick"], ve = /* @__PURE__ */ h(() => /* @__PURE__ */ i("i", { class: "ficon-cha" }, null, -1)), he = /* @__PURE__ */ h(() => /* @__PURE__ */ i("div", { class: "bottom-padding" }, null, -1)), me = /* @__PURE__ */ h(() => /* @__PURE__ */ i("div", { class: "round" }, null, -1)), xe = /* @__PURE__ */ h(() => /* @__PURE__ */ i("span", { class: "shortcutKey" }, "S", -1));
function we(e, t, s, m, $, ge) {
  const z = T("Tip"), O = T("sidebar");
  return f(), F(O, {
    class: u({ sidebarActive: e.sidebarState, appsActive: !e.appsState }),
    onContextmenu: t[1] || (t[1] = E(() => {
    }, ["prevent", "stop"]))
  }, {
    default: v(() => [
      i("div", {
        class: "scroll apps",
        style: c(e.style),
        ref: "scroll"
      }, [
        y(K, { name: "scale" }, {
          default: v(() => [
            (f(!0), k(U, null, X(e.links, ({ name: x, color: w, icon: j, active: S, target: A }, r) => (f(), k("div", {
              key: r,
              class: u([{ active: S }, "item center"])
            }, [
              i("a", {
                class: "link center",
                href: r,
                onClick: E((g) => e.open(r, A), ["prevent"])
              }, [
                i("i", {
                  class: u(j),
                  style: c({ color: w })
                }, null, 6),
                y(z, {
                  class: "menu-tip",
                  placement: "right",
                  hover: ""
                }, {
                  default: v(() => [
                    i("div", de, [
                      i("div", {
                        class: "tip-name",
                        style: c({ color: w }),
                        onClick: (g) => e.open(r, A)
                      }, _(x), 13, be),
                      i("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (g) => e.open(r, "blank")
                      }, [
                        i("i", {
                          class: "ficon-xinchuangkou",
                          style: c({ color: w })
                        }, null, 4)
                      ], 8, fe)
                    ]),
                    S ? (f(), k("div", {
                      key: 0,
                      class: "link close",
                      onClick: (g) => e.close(r)
                    }, [
                      B(_(e.langs.close) + " ", 1),
                      ve
                    ], 8, ue)) : G("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 8, ce)
            ], 2))), 128))
          ]),
          _: 1
        }),
        he
      ], 4),
      i("div", {
        class: "switch center",
        ref: "switch",
        onClick: t[0] || (t[0] = (...x) => e.switchLayer && e.switchLayer(...x))
      }, [
        i("i", {
          class: u(e.icon),
          style: c({ color: e.color })
        }, null, 6),
        me,
        y(z, { placement: "right" }, {
          default: v(() => [
            xe,
            B(" / " + _(e.langs.appsMenu), 1)
          ]),
          _: 1
        })
      ], 512)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Se = /* @__PURE__ */ pe(ae, [["render", we], ["styles", [le, re]], ["__scopeId", "data-v-a215bb15"]]);
export {
  Se as default
};
