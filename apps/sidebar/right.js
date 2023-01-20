import { ref as V, reactive as j, defineComponent as D, resolveComponent as M, openBlock as c, createElementBlock as d, Fragment as E, createElementVNode as i, normalizeClass as a, normalizeStyle as f, withModifiers as $, createVNode as h, TransitionGroup as F, withCtx as b, renderList as K, toDisplayString as m, createTextVNode as L, createCommentVNode as P, pushScopeId as G, popScopeId as U } from "/view-ui/libs/vue.js";
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
const { name: ee, icon: te, color: ie } = I.main, oe = D({
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
      e.dir === "X" && e.trend < 0 && (l.value = !0, e.switch(u.appsPointer));
    });
  }
}), ne = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;width:36px;padding:13px 10px;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{color:#666;font-size:14px}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, se = `.sidebar[data-v-4583a2af]{position:fixed;top:env(titlebar-area-height,0);right:0px;bottom:0;z-index:100000;width:54px;backdrop-filter:blur(10px);transition:transform .25s;overflow:hidden}.sidebar .scroll[data-v-4583a2af]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}.sidebar .scroll[data-v-4583a2af]::-webkit-scrollbar{display:none}.sidebar .scroll .item[data-v-4583a2af]{width:100%;padding:5px 0;transition:all .4s}.sidebar .scroll .item .link[data-v-4583a2af]{width:40px;height:40px;border-radius:40px;cursor:pointer;transition:all .25s ease;display:flex;justify-content:center;align-items:center}.sidebar .scroll .item .link i[data-v-4583a2af]{font-size:20px}.sidebar .scroll .item.active .link[data-v-4583a2af]{background-color:var(--active)!important}.sidebar .scroll .bottom-padding[data-v-4583a2af]{height:60px}.sidebar.hide[data-v-4583a2af]{transform:translate3d(100%,0,0)}.switch[data-v-4583a2af]{position:fixed;right:8px;bottom:8px;z-index:110000;width:40px;height:40px;border-radius:40px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-4583a2af]{color:#fff;transition:all .3s}.switch .round[data-v-4583a2af]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.active i[data-v-4583a2af]{opacity:0}.switch.active .round[data-v-4583a2af]{opacity:1;transform:scale(3)}.switch.active .tip-name[data-v-4583a2af]{display:block}.shortcutKey[data-v-4583a2af]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}@media (any-hover: hover){.sidebar .scroll .item .link[data-v-4583a2af]:hover{background-color:var(--active)}}
`, ae = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [k, y] of t)
    s[k] = y;
  return s;
}, p = (e) => (G("data-v-4583a2af"), e = e(), U(), e), le = {
  class: "scroll apps",
  ref: "scroll"
}, re = ["href", "onClick"], pe = { class: "tip-title" }, ce = ["onClick"], de = ["title", "onClick"], fe = /* @__PURE__ */ p(() => /* @__PURE__ */ i("i", { class: "ficon-xinchuangkou" }, null, -1)), ue = [
  fe
], ve = ["onClick"], he = /* @__PURE__ */ p(() => /* @__PURE__ */ i("i", { class: "ficon-cha" }, null, -1)), be = /* @__PURE__ */ p(() => /* @__PURE__ */ i("div", { class: "bottom-padding" }, null, -1)), me = /* @__PURE__ */ p(() => /* @__PURE__ */ i("div", { class: "round" }, null, -1)), xe = /* @__PURE__ */ p(() => /* @__PURE__ */ i("span", { class: "shortcutKey" }, "S", -1));
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
        h(F, { name: "scale" }, {
          default: b(() => [
            (c(!0), d(E, null, K(e.appsList, ({ url: o, active: C, name: N, color: S, icon: O, target: z }) => (c(), d("div", {
              class: a(["item center", { active: C }]),
              key: o
            }, [
              i("a", {
                class: "link center",
                href: o,
                onClick: $((v) => e.open(o, z), ["prevent"])
              }, [
                i("i", {
                  class: a(O),
                  style: f({ color: S })
                }, null, 6),
                h(_, {
                  class: "menu-tip",
                  placement: "left",
                  hover: ""
                }, {
                  default: b(() => [
                    i("div", pe, [
                      i("div", {
                        class: "tip-name",
                        style: f({ color: S }),
                        onClick: (v) => e.open(o, z)
                      }, m(N), 13, ce),
                      i("div", {
                        class: "new-tab",
                        title: e.langs.newTab,
                        onClick: (v) => e.open(o, "blank")
                      }, ue, 8, de)
                    ]),
                    C ? (c(), d("div", {
                      key: 0,
                      class: "link close",
                      onClick: (v) => e.close(o)
                    }, [
                      L(m(e.langs.close) + " ", 1),
                      he
                    ], 8, ve)) : P("", !0)
                  ]),
                  _: 2
                }, 1024)
              ], 8, re)
            ], 2))), 128))
          ]),
          _: 1
        }),
        be
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
      h(_, { placement: "left" }, {
        default: b(() => [
          xe,
          L(" / " + m(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const Ee = /* @__PURE__ */ ae(oe, [["render", we], ["styles", [ne, se]], ["__scopeId", "data-v-4583a2af"]]);
export {
  Ee as default
};
