import { ref as O, reactive as j, defineComponent as D, resolveComponent as M, openBlock as u, createElementBlock as b, normalizeClass as v, normalizeStyle as c, withModifiers as T, createElementVNode as i, createVNode as y, TransitionGroup as P, withCtx as k, Fragment as F, renderList as K, toDisplayString as _, createTextVNode as E, createCommentVNode as U, pushScopeId as X, popScopeId as G } from "/view-ui/libs/vue.js";
import f, { Langs as W, urls as L, getParentOptions as q, events as C } from "/view-ui/libs/view.js";
import { close as H, openBlank as J, open as Q } from "/view-ui/libs/navigator.js";
import { appsState as d, apps as R } from "/view-ui/libs/state.js";
import Y, { isTouch as Z } from "/view-ui/libs/pointer.js";
import { Tip as ee } from "/view-ui/libs/viewui.js";
const l = O(!0), a = j({}), te = W({
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
}), p = 5, { initOptions: I } = f, { apps: o, sidebar: se } = I, { left: n } = o, { urls: B, style: ie } = se;
if (B)
  for (const e of B) {
    const t = L[e];
    if (t)
      t.shortcut = !0, a[e] === void 0 && (a[e] = t);
    else {
      const s = q(e);
      s && (s.shortcut = !0, a[e] = s, L[e] = s);
    }
  }
function N(e) {
  for (const t in a)
    if (a[t] === e)
      return t;
}
C.on("opened", (e) => {
  N(e) === void 0 && (a[e.url] = e), e.active = !0;
});
C.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const s = N(t);
    s && delete a[s], t.active = !1;
  }
});
const oe = D({
  components: { Tip: ee },
  setup() {
    const { name: e, icon: t, color: s } = I.main;
    return {
      langs: te,
      links: a,
      sidebarState: l,
      appsState: d,
      style: ie,
      name: e,
      icon: t,
      color: s
    };
  },
  methods: {
    close: H,
    open(e, t) {
      t === "blank" ? J(e) : Q(e);
    },
    switchLayer() {
      d.value === !0 ? (d.value = !1, l.value === !0 && this.collapse()) : (R.length && (d.value = !0, f.swiper.align()), l.value === !1 && this.expand());
    },
    expand() {
      this.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${n}px,0,0)`
      ), l.value = !0, o.left = n, f.swiper.scroll(n - p);
    },
    collapse() {
      this.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${p}px,0,0)`
      ), l.value = !1, o.left = p, f.swiper.scroll(-(n - p));
    }
  },
  async mounted() {
    const { $el: e } = this;
    e.style.transform = `translate3d(${n}px,0,0)`;
    const t = new Y(e, { angle: 40 });
    if (t.on("lock", () => {
      t.dir === "X" && t.trend > 0 && o.left === n && (d.value = !0, t.switch(f.appsPointer));
    }), t.on("level", () => {
      o.left += t.move, o.left < p ? o.left = p : o.left > n && (o.left = n), e.setAttribute(
        "style",
        `transform: translate3d(${o.left}px,0,0)`
      );
    }), Z === !1) {
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
}), ne = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;align-items:center;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;cursor:pointer;padding-right:8px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{width:26px;height:26px;font-size:14px;border-radius:30px;padding:6px}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab:hover i{background-color:#eee}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, ae = `.sidebar[data-v-58e4ab65]{position:fixed;top:env(titlebar-area-height,0);left:-62px;bottom:0;z-index:100000;width:60px;cursor:col-resize;backdrop-filter:blur(10px);border-radius:0 12px 12px 0}.sidebar .scroll[data-v-58e4ab65]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}.sidebar .scroll[data-v-58e4ab65]::-webkit-scrollbar{display:none}.sidebar .scroll .item[data-v-58e4ab65]{width:100%;height:60px;transition:all .4s}.sidebar .scroll .item .link[data-v-58e4ab65]{display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:44px;background-color:#ffffff1c;cursor:pointer;transition:all .25s ease}.sidebar .scroll .item .link i[data-v-58e4ab65]{font-size:20px}.sidebar .scroll .item.active .link[data-v-58e4ab65]{background-color:var(--active)!important}.sidebar .scroll .bottom-padding[data-v-58e4ab65]{height:60px}.sidebar .switch[data-v-58e4ab65]{position:fixed;left:8px;bottom:8px;z-index:1000;width:44px;height:44px;border-radius:44px;transition:all .3s;transform:translate(58px);background-color:#00000030;cursor:pointer}.sidebar .switch i[data-v-58e4ab65]{color:#fff;transition:all .3s;font-size:20px}.sidebar .switch .round[data-v-58e4ab65]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.sidebar.appsActive .switch i[data-v-58e4ab65]{opacity:0}.sidebar.appsActive .switch .round[data-v-58e4ab65]{opacity:1;transform:scale(4)}.sidebar.appsActive .switch .tip-name[data-v-58e4ab65]{display:block}.sidebar.sidebarActive[data-v-58e4ab65]{cursor:default}.sidebar.sidebarActive .switch[data-v-58e4ab65]{transform:translate(0)}.shortcutKey[data-v-58e4ab65]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}@media (any-hover: hover){.sidebar .scroll .item .link[data-v-58e4ab65]:hover{background-color:var(--active)}}
`, le = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [m, $] of t)
    s[m] = $;
  return s;
}, h = (e) => (X("data-v-58e4ab65"), e = e(), G(), e), re = {
  class: "scroll apps",
  ref: "scroll"
}, pe = ["href", "onClick"], ce = { class: "tip-title" }, de = ["onClick"], fe = ["title", "onClick"], ue = ["onClick"], be = /* @__PURE__ */ h(() => /* @__PURE__ */ i("i", { class: "ficon-cha" }, null, -1)), ve = /* @__PURE__ */ h(() => /* @__PURE__ */ i("div", { class: "bottom-padding" }, null, -1)), he = /* @__PURE__ */ h(() => /* @__PURE__ */ i("div", { class: "round" }, null, -1)), me = /* @__PURE__ */ h(() => /* @__PURE__ */ i("span", { class: "shortcutKey" }, "S", -1));
function xe(e, t, s, m, $, we) {
  const z = M("Tip");
  return u(), b("section", {
    class: v(["sidebar", { sidebarActive: e.sidebarState, appsActive: !e.appsState }]),
    style: c(e.style),
    onContextmenu: t[1] || (t[1] = T(() => {
    }, ["prevent", "stop"]))
  }, [
    i("div", re, [
      y(P, { name: "scale" }, {
        default: k(() => [
          (u(!0), b(F, null, K(e.links, ({ name: x, color: w, icon: V, active: S, target: A }, r) => (u(), b("div", {
            key: r,
            class: v([{ active: S }, "item center"])
          }, [
            i("a", {
              class: "link center",
              href: r,
              onClick: T((g) => e.open(r, A), ["prevent"])
            }, [
              i("i", {
                class: v(V),
                style: c({ color: w })
              }, null, 6),
              y(z, {
                class: "menu-tip",
                placement: "right",
                hover: ""
              }, {
                default: k(() => [
                  i("div", ce, [
                    i("div", {
                      class: "tip-name",
                      style: c({ color: w }),
                      onClick: (g) => e.open(r, A)
                    }, _(x), 13, de),
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
                  S ? (u(), b("div", {
                    key: 0,
                    class: "link close",
                    onClick: (g) => e.close(r)
                  }, [
                    E(_(e.langs.close) + " ", 1),
                    be
                  ], 8, ue)) : U("", !0)
                ]),
                _: 2
              }, 1024)
            ], 8, pe)
          ], 2))), 128))
        ]),
        _: 1
      }),
      ve
    ], 512),
    i("div", {
      class: "switch center",
      ref: "switch",
      onClick: t[0] || (t[0] = (...x) => e.switchLayer && e.switchLayer(...x))
    }, [
      i("i", {
        class: v(e.icon),
        style: c({ color: e.color })
      }, null, 6),
      he,
      y(z, { placement: "right" }, {
        default: k(() => [
          me,
          E(" / " + _(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 512)
  ], 38);
}
const ze = /* @__PURE__ */ le(oe, [["render", xe], ["styles", [ne, ae]], ["__scopeId", "data-v-58e4ab65"]]);
export {
  ze as default
};
