import { ref as V, reactive as j, defineComponent as D, resolveComponent as M, openBlock as v, createElementBlock as b, normalizeClass as h, normalizeStyle as m, withModifiers as A, createElementVNode as i, createVNode as y, TransitionGroup as P, withCtx as k, Fragment as F, renderList as K, toDisplayString as g, createTextVNode as T, createCommentVNode as X, pushScopeId as G, popScopeId as U } from "/view-ui/libs/vue.js";
import d, { Langs as W, urls as E, getParentOptions as q, events as _ } from "/view-ui/libs/view.js";
import { appsState as c, apps as H } from "/view-ui/libs/state.js";
import { close as J, openBlank as Q, open as R } from "/view-ui/libs/navigator.js";
import Y, { isTouch as Z } from "/view-ui/libs/pointer.js";
import { Tip as ee } from "/view-ui/libs/viewui.js";
const r = V(!0), a = j({}), te = W({
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
}), p = 5, { initOptions: B } = d, { apps: o, sidebar: se } = B, { left: n } = o, { urls: L, style: ie } = se;
if (L)
  for (const e of L) {
    const t = E[e];
    if (t)
      t.shortcut = !0, a[e] === void 0 && (a[e] = t);
    else {
      const s = q(e);
      s && (s.shortcut = !0, a[e] = s, E[e] = s);
    }
  }
function I(e) {
  let t;
  for (const s in a)
    if (a[s] === e) {
      t = s;
      break;
    }
  return t;
}
_.on("opened", (e) => {
  I(e) === void 0 && (a[e.url] = e), e.active = !0;
});
_.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const s = I(t);
    s && delete a[s], t.active = !1;
  }
});
const oe = D({
  components: { Tip: ee },
  setup() {
    const { name: e, icon: t, color: s } = B;
    return {
      langs: te,
      links: a,
      sidebarState: r,
      appsState: c,
      style: ie,
      name: e,
      icon: t,
      color: s
    };
  },
  methods: {
    close: J,
    open(e, t) {
      t === "blank" ? Q(e) : R(e);
    },
    switchLayer() {
      c.value === !0 ? (c.value = !1, r.value === !0 && this.collapse()) : (H.length && (c.value = !0, d.swiper.align()), r.value === !1 && this.expand());
    },
    expand() {
      this.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${n}px,0,0)`
      ), r.value = !0, o.left = n, d.swiper.scroll(n - p);
    },
    collapse() {
      this.$el.setAttribute(
        "style",
        `transition: transform 0.25s; transform: translate3d(${p}px,0,0)`
      ), r.value = !1, o.left = p, d.swiper.scroll(-(n - p));
    }
  },
  async mounted() {
    const { $el: e } = this;
    e.style.transform = `translate3d(${n}px,0,0)`;
    const t = new Y(e, { angle: 40 });
    if (t.on("lock", () => {
      t.dir === "X" && t.trend > 0 && o.left === n && (c.value = !0, t.switch(d.appsPointer));
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
    }), _.on("sidebarSwitch", (s) => {
      (typeof s == "boolean" ? s : !r.value) ? this.expand() : this.collapse();
    });
  }
}), ne = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;width:36px;padding:13px 10px;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{color:#666;font-size:14px}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, ae = `.sidebar[data-v-609f80f5]{position:fixed;top:env(titlebar-area-height,0);left:-62px;bottom:0;z-index:100000;width:60px;cursor:col-resize;backdrop-filter:blur(10px);border-radius:0 12px 12px 0}.sidebar .scroll[data-v-609f80f5]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}.sidebar .scroll[data-v-609f80f5]::-webkit-scrollbar{display:none}.sidebar .scroll .item[data-v-609f80f5]{width:100%;padding:5px 0;transition:all .4s}.sidebar .scroll .item .link[data-v-609f80f5]{height:50px;cursor:pointer}.sidebar .scroll .item .link i[data-v-609f80f5]{display:flex;justify-content:center;align-items:center;width:44px;height:44px;border-radius:44px;font-size:20px;background-color:#ffffff1c;transition:all .25s ease}.sidebar .scroll .item.active .link i[data-v-609f80f5]{background-color:var(--active)!important}.sidebar .scroll .bottom-padding[data-v-609f80f5]{height:60px}.sidebar .switch[data-v-609f80f5]{position:fixed;left:8px;bottom:8px;z-index:1000;width:44px;height:44px;border-radius:44px;transition:all .3s;transform:translate(58px);background-color:#00000030;cursor:pointer}.sidebar .switch i[data-v-609f80f5]{color:#fff;transition:all .3s}.sidebar .switch .round[data-v-609f80f5]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.sidebar.appsActive .switch i[data-v-609f80f5]{opacity:0}.sidebar.appsActive .switch .round[data-v-609f80f5]{opacity:1;transform:scale(4)}.sidebar.appsActive .switch .tip-name[data-v-609f80f5]{display:block}.sidebar.sidebarActive[data-v-609f80f5]{cursor:default}.sidebar.sidebarActive .switch[data-v-609f80f5]{transform:translate(0)}.shortcutKey[data-v-609f80f5]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}@media (any-hover: hover){.sidebar .scroll .item .link:hover i[data-v-609f80f5]{background-color:var(--active)}}
`, le = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [x, C] of t)
    s[x] = C;
  return s;
}, f = (e) => (G("data-v-609f80f5"), e = e(), U(), e), re = {
  class: "scroll apps",
  ref: "scroll"
}, pe = ["href", "onClick"], ce = { class: "tip-title" }, de = ["onClick"], fe = ["title", "onClick"], ue = /* @__PURE__ */ f(() => /* @__PURE__ */ i("i", { class: "ficon-xinchuangkou" }, null, -1)), ve = [
  ue
], be = ["onClick"], he = /* @__PURE__ */ f(() => /* @__PURE__ */ i("i", { class: "ficon-cha" }, null, -1)), me = /* @__PURE__ */ f(() => /* @__PURE__ */ i("div", { class: "bottom-padding" }, null, -1)), xe = /* @__PURE__ */ f(() => /* @__PURE__ */ i("div", { class: "round" }, null, -1)), we = /* @__PURE__ */ f(() => /* @__PURE__ */ i("span", { class: "shortcutKey" }, "S", -1));
function ye(e, t, s, x, C, ke) {
  const $ = M("Tip");
  return v(), b("section", {
    class: h(["sidebar", { sidebarActive: e.sidebarState, appsActive: !e.appsState }]),
    style: m(e.style),
    onContextmenu: t[1] || (t[1] = A(() => {
    }, ["prevent", "stop"]))
  }, [
    i("div", re, [
      y(P, { name: "scale" }, {
        default: k(() => [
          (v(!0), b(F, null, K(e.links, ({ active: u, name: N, color: z, icon: O, target: S }, l) => (v(), b("div", {
            class: h(["item center", { active: u }]),
            key: l
          }, [
            i("a", {
              class: "link center",
              href: l,
              onClick: A((w) => e.open(l, S), ["prevent"])
            }, [
              i("i", {
                class: h(O),
                style: m({ color: z })
              }, null, 6),
              y($, {
                class: "menu-tip",
                placement: "right",
                hover: ""
              }, {
                default: k(() => [
                  i("div", ce, [
                    i("div", {
                      class: "tip-name",
                      style: m({ color: z }),
                      onClick: (w) => e.open(l, S)
                    }, g(N), 13, de),
                    i("div", {
                      class: "new-tab",
                      title: e.langs.newTab,
                      onClick: (w) => e.open(l, "blank")
                    }, ve, 8, fe)
                  ]),
                  u ? (v(), b("div", {
                    key: 0,
                    class: "link close",
                    onClick: (w) => e.close(l)
                  }, [
                    T(g(e.langs.close) + " ", 1),
                    he
                  ], 8, be)) : X("", !0)
                ]),
                _: 2
              }, 1024)
            ], 8, pe)
          ], 2))), 128))
        ]),
        _: 1
      }),
      me
    ], 512),
    i("div", {
      class: "switch center",
      ref: "switch",
      onClick: t[0] || (t[0] = (...u) => e.switchLayer && e.switchLayer(...u))
    }, [
      i("i", {
        class: h(e.icon),
        style: m({ color: e.color })
      }, null, 6),
      xe,
      y($, { placement: "right" }, {
        default: k(() => [
          we,
          T(" / " + g(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 512)
  ], 38);
}
const Ae = /* @__PURE__ */ le(oe, [["render", ye], ["styles", [ne, ae]], ["__scopeId", "data-v-609f80f5"]]);
export {
  Ae as default
};
