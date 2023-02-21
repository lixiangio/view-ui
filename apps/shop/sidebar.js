import { reactive as V, defineComponent as A, resolveComponent as j, openBlock as s, createElementBlock as a, Fragment as $, createElementVNode as e, normalizeStyle as r, withModifiers as E, createVNode as b, TransitionGroup as D, withCtx as f, renderList as M, normalizeClass as h, toDisplayString as v, createTextVNode as T, createCommentVNode as O, pushScopeId as F, popScopeId as K } from "/libs/vue.js";
import c, { Langs as P, urls as G } from "/libs/view.js";
import { appsState as l, apps as U } from "/libs/state.js";
import { close as W, openBlank as X, open as q } from "/libs/navigator.js";
import H from "/libs/pointer.js";
import { Tip as J } from "/libs/viewui.js";
const w = V([]), Q = P({
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
}), m = 5, { initOptions: L } = c, { multi: R, apps: k } = L, { sidebar: g } = R;
let B = {};
if (g) {
  B = g.style;
  const { urls: t } = g;
  if (t)
    for (const i of t) {
      let o = G[i];
      if (o === void 0) {
        if (!(i.split("/").length > 1))
          continue;
        continue;
      }
      o.shortcut = !0, w.includes(o) === !1 && w.push(o);
    }
}
const [x] = k.padding, Y = A({
  components: { Tip: J },
  setup() {
    const { name: t, icon: i, color: o } = L;
    return {
      langs: Q,
      appbar: w,
      appsState: l,
      style: B,
      name: t,
      icon: i,
      color: o
    };
  },
  methods: {
    close: W,
    open(t, i) {
      i === "blank" ? X(t) : q(t);
    },
    switchLayer() {
      l.value === !0 ? l.value = !1 : U.length && (l.value = !0);
    },
    expand() {
      k.padding[0] = x, c.swiper.scroll(x - m);
    },
    collapse() {
      k.padding[0] = m, c.swiper.scroll(-(x - m));
    }
  },
  mounted() {
    const t = new H(this.$el.nextElementSibling, { angle: 40 });
    t.on("lock", () => {
      t.dir === "X" && (console.log(t.trend), t.trend < 0 && (l.value = !0, t.switch(c.appsPointer)));
    });
  }
}), Z = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;width:36px;padding:13px 10px;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{color:#666;font-size:14px}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, tt = `.sidebar[data-v-22a5780b]{position:fixed;top:env(titlebar-area-height,0);right:0;bottom:0;z-index:100000;width:50px;transition:background-color .3s;background:rgba(131,131,131,.11);backdrop-filter:blur(10px)}.sidebar .scroll[data-v-22a5780b]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}.sidebar .scroll[data-v-22a5780b]::-webkit-scrollbar{display:none}.sidebar .scroll .item[data-v-22a5780b]{width:100%;padding:5px 0;transition:all .4s}.sidebar .scroll .item .link[data-v-22a5780b]{height:50px;cursor:pointer}.sidebar .scroll .item .link .icon[data-v-22a5780b]{display:flex;justify-content:center;align-items:center;width:38px;height:38px;border-radius:40px;font-size:20px;transition:all .25s ease}.sidebar .scroll .item .link .icon .ficon[data-v-22a5780b]{width:22px;height:22px}.sidebar .scroll .item .link .icon[data-v-22a5780b]:hover{background-color:#666}.sidebar .scroll .item.active .link .icon[data-v-22a5780b]{background-color:var(--active)!important}.sidebar .scroll .bottom-padding[data-v-22a5780b]{height:60px}.switch[data-v-22a5780b]{position:fixed;right:8px;bottom:8px;z-index:110000;width:38px;height:38px;border-radius:38px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-22a5780b]{color:#fff;transition:all .3s}.switch .round[data-v-22a5780b]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.appsActive i[data-v-22a5780b]{opacity:0}.switch.appsActive .round[data-v-22a5780b]{opacity:1;transform:scale(3)}.switch.appsActive .tip-name[data-v-22a5780b]{display:block}.shortcutKey[data-v-22a5780b]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}
`, et = (t, i) => {
  const o = t.__vccOpts || t;
  for (const [d, y] of i)
    o[d] = y;
  return o;
}, p = (t) => (F("data-v-22a5780b"), t = t(), K(), t), it = {
  class: "scroll apps",
  ref: "scroll"
}, ot = ["href", "onClick"], nt = { class: "icon" }, st = ["xlink:href"], at = { class: "tip-title" }, lt = ["onClick"], pt = ["title", "onClick"], rt = /* @__PURE__ */ p(() => /* @__PURE__ */ e("i", { class: "ficon-xinchuangkou" }, null, -1)), ct = [
  rt
], dt = ["onClick"], ut = /* @__PURE__ */ p(() => /* @__PURE__ */ e("i", { class: "ficon-cha" }, null, -1)), bt = /* @__PURE__ */ p(() => /* @__PURE__ */ e("div", { class: "bottom-padding" }, null, -1)), ft = /* @__PURE__ */ p(() => /* @__PURE__ */ e("div", { class: "round" }, null, -1)), ht = /* @__PURE__ */ p(() => /* @__PURE__ */ e("span", { class: "shortcutKey" }, "S", -1));
function vt(t, i, o, d, y, mt) {
  const _ = j("Tip");
  return s(), a($, null, [
    e("section", {
      class: "sidebar",
      style: r(t.style),
      onContextmenu: i[0] || (i[0] = E(() => {
      }, ["prevent", "stop"]))
    }, [
      e("div", it, [
        b(D, { name: "scale" }, {
          default: f(() => [
            (s(!0), a($, null, M(t.appbar, ({ url: n, active: C, name: I, color: z, icon: N, target: S }) => (s(), a("div", {
              class: h(["item center", { active: C }]),
              key: n
            }, [
              e("a", {
                class: "link center",
                href: n,
                onClick: E((u) => t.open(n, S), ["prevent"])
              }, [
                e("div", nt, [
                  (s(), a("svg", {
                    class: "ficon",
                    "aria-hidden": "true",
                    style: r({ color: z })
                  }, [
                    e("use", {
                      "xlink:href": "#" + N
                    }, null, 8, st)
                  ], 4))
                ])
              ], 8, ot),
              b(_, {
                class: "menu-tip",
                placement: "left",
                gap: -10
              }, {
                default: f(() => [
                  e("div", at, [
                    e("div", {
                      class: "tip-name",
                      style: r({ color: z }),
                      onClick: (u) => t.open(n, S)
                    }, v(I), 13, lt),
                    e("div", {
                      class: "new-tab",
                      title: t.langs.newTab,
                      onClick: (u) => t.open(n, "blank")
                    }, ct, 8, pt)
                  ]),
                  C ? (s(), a("div", {
                    key: 0,
                    class: "link close",
                    onClick: (u) => t.close(n)
                  }, [
                    T(v(t.langs.close) + " ", 1),
                    ut
                  ], 8, dt)) : O("", !0)
                ]),
                _: 2
              }, 1024)
            ], 2))), 128))
          ]),
          _: 1
        }),
        bt
      ], 512)
    ], 36),
    e("div", {
      class: h(["switch center", { appsActive: !t.appsState }]),
      ref: "switch",
      onClick: i[1] || (i[1] = (...n) => t.switchLayer && t.switchLayer(...n))
    }, [
      e("i", {
        class: h(t.icon),
        style: r({ color: t.color })
      }, null, 6),
      ft,
      b(_, { placement: "left" }, {
        default: f(() => [
          ht,
          T(" / " + v(t.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const Ct = /* @__PURE__ */ et(Y, [["render", vt], ["styles", [Z, tt]], ["__scopeId", "data-v-22a5780b"]]);
export {
  Ct as default
};
