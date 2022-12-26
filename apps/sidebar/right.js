import { ref as V, reactive as j, defineComponent as D, resolveComponent as M, openBlock as c, createElementBlock as d, Fragment as E, createElementVNode as i, normalizeClass as a, normalizeStyle as f, withModifiers as $, createVNode as v, TransitionGroup as F, withCtx as h, renderList as K, toDisplayString as m, createTextVNode as L, createCommentVNode as P, pushScopeId as G, popScopeId as U } from "/view-ui/libs/vue.js";
import u, { Langs as W, urls as X, events as B } from "/view-ui/libs/view.js";
import { appsState as l } from "/view-ui/libs/state.js";
import { close as q, openBlank as A, open as H } from "/view-ui/libs/navigator.js";
import J from "/view-ui/libs/pointer.js";
import { Tip as Q } from "/view-ui/libs/viewui.js";
const r = V(!0), n = j([]), R = W({
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
}), x = 5, { initOptions: I } = u, { apps: g, sidebar: Y } = I, { urls: T, style: Z } = Y;
if (T)
  for (const e of T) {
    let t = X[e];
    if (t === void 0) {
      if (!(e.split("/").length > 1))
        continue;
      continue;
    }
    t.shortcut = !0, n.includes(t) === !1 && n.push(t);
  }
const { left: w } = g;
B.on("opened", (e) => {
  const t = n.indexOf(e);
  t === -1 ? (e.active = !0, n.push(e)) : n[t].active = !0;
});
B.on("closing", (e) => {
  const { options: t } = e;
  if (t.shortcut)
    t.active = !1;
  else {
    const s = n.indexOf(t);
    n.splice(s, 1);
  }
});
const { name: ee, icon: te, color: ie } = I, oe = D({
  components: { Tip: Q },
  setup() {
    return {
      name: ee,
      icon: te,
      color: ie,
      langs: R,
      style: Z,
      appsState: l,
      sidebarState: r,
      appsList: n
    };
  },
  methods: {
    close: q,
    open(e, t) {
      t === "blank" ? A(e) : H(e);
    },
    switchLayer() {
      l.value === !0 ? (l.value = !1, r.value === !0 && this.collapse()) : (l.value = !0, r.value === !1 && this.expand());
    },
    expand() {
      r.value = !0, g.left = w, u.swiper.scroll(w - x);
    },
    collapse() {
      r.value = !1, g.left = x, u.swiper.scroll(-(w - x));
    }
  },
  async mounted() {
    const e = new J(this.$el.nextElementSibling, { angle: 40 });
    e.on("lock", () => {
      e.dir === "X" && (console.log(e.trend), e.trend < 0 && (l.value = !0, e.switch(u.appsPointer)));
    });
  }
}), ne = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;width:36px;padding:13px 10px;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{color:#666;font-size:14px}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, se = `.sidebar[data-v-f5bd9870]{position:fixed;top:env(titlebar-area-height,0);right:0px;bottom:0;z-index:100000;width:54px;backdrop-filter:blur(10px);transition:transform .25s;overflow:hidden}.sidebar .scroll[data-v-f5bd9870]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}.sidebar .scroll[data-v-f5bd9870]::-webkit-scrollbar{display:none}.sidebar .scroll .item[data-v-f5bd9870]{width:100%;padding:5px 0;transition:all .4s}.sidebar .scroll .item .link[data-v-f5bd9870]{height:50px;cursor:pointer}.sidebar .scroll .item .link i[data-v-f5bd9870]{display:flex;justify-content:center;align-items:center;width:38px;height:38px;border-radius:40px;font-size:20px;transition:all .25s ease}.sidebar .scroll .item.active .link i[data-v-f5bd9870]{background-color:var(--active)!important}.sidebar .scroll .bottom-padding[data-v-f5bd9870]{height:60px}.sidebar.hide[data-v-f5bd9870]{transform:translate3d(100%,0,0)}.switch[data-v-f5bd9870]{position:fixed;right:8px;bottom:8px;z-index:110000;width:38px;height:38px;border-radius:38px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-f5bd9870]{color:#fff;transition:all .3s}.switch .round[data-v-f5bd9870]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.active i[data-v-f5bd9870]{opacity:0}.switch.active .round[data-v-f5bd9870]{opacity:1;transform:scale(3)}.switch.active .tip-name[data-v-f5bd9870]{display:block}.shortcutKey[data-v-f5bd9870]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}@media (any-hover: hover){.sidebar .scroll .item .link:hover i[data-v-f5bd9870]{background-color:var(--active)}}
`, ae = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [k, y] of t)
    s[k] = y;
  return s;
}, p = (e) => (G("data-v-f5bd9870"), e = e(), U(), e), le = {
  class: "scroll apps",
  ref: "scroll"
}, re = ["href", "onClick"], pe = { class: "tip-title" }, ce = ["onClick"], de = ["title", "onClick"], fe = /* @__PURE__ */ p(() => /* @__PURE__ */ i("i", { class: "ficon-xinchuangkou" }, null, -1)), ue = [
  fe
], be = ["onClick"], ve = /* @__PURE__ */ p(() => /* @__PURE__ */ i("i", { class: "ficon-cha" }, null, -1)), he = /* @__PURE__ */ p(() => /* @__PURE__ */ i("div", { class: "bottom-padding" }, null, -1)), me = /* @__PURE__ */ p(() => /* @__PURE__ */ i("div", { class: "round" }, null, -1)), xe = /* @__PURE__ */ p(() => /* @__PURE__ */ i("span", { class: "shortcutKey" }, "S", -1));
function we(e, t, s, k, y, ge) {
  const _ = M("Tip");
  return c(), d(E, null, [
    i("section", {
      class: a(["sidebar", { hide: e.sidebarState === !1 }]),
      style: f(e.style),
      onContextmenu: t[0] || (t[0] = $(() => {
      }, ["prevent", "stop"]))
    }, [
      i("div", le, [
        v(F, { name: "scale" }, {
          default: h(() => [
            (c(!0), d(E, null, K(e.appsList, ({ url: o, active: C, name: N, color: S, icon: O, target: z }) => (c(), d("div", {
              class: a(["item center", { active: C }]),
              key: o
            }, [
              i("a", {
                class: "link center",
                href: o,
                onClick: $((b) => e.open(o, z), ["prevent"])
              }, [
                i("i", {
                  class: a(O),
                  style: f({ color: S })
                }, null, 6),
                v(_, {
                  class: "menu-tip",
                  placement: "left",
                  hover: ""
                }, {
                  default: h(() => [
                    i("div", pe, [
                      i("div", {
                        class: "tip-name",
                        style: f({ color: S }),
                        onClick: (b) => e.open(o, z)
                      }, m(N), 13, ce),
                      i("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (b) => e.open(o, "blank")
                      }, ue, 8, de)
                    ]),
                    C ? (c(), d("div", {
                      key: 0,
                      class: "link close",
                      onClick: (b) => e.close(o)
                    }, [
                      L(m(e.langs.close) + " ", 1),
                      ve
                    ], 8, be)) : P("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 8, re)
            ], 2))), 128))
          ]),
          _: 1
        }),
        he
      ], 512)
    ], 38),
    i("div", {
      class: a(["switch center", { active: e.appsState === !1 }]),
      ref: "switch",
      onClick: t[1] || (t[1] = (...o) => e.switchLayer && e.switchLayer(...o))
    }, [
      i("i", {
        class: a(e.icon),
        style: f({ color: e.color })
      }, null, 6),
      me,
      v(_, { placement: "left" }, {
        default: h(() => [
          xe,
          L(" / " + m(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const Ee = /* @__PURE__ */ ae(oe, [["render", we], ["styles", [ne, se]], ["__scopeId", "data-v-f5bd9870"]]);
export {
  Ee as default
};
