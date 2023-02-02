import { reactive as V, defineComponent as A, resolveComponent as j, openBlock as l, createElementBlock as p, Fragment as $, createElementVNode as t, normalizeStyle as c, withModifiers as E, createVNode as f, TransitionGroup as D, withCtx as h, renderList as M, normalizeClass as d, toDisplayString as v, createTextVNode as T, createCommentVNode as O, pushScopeId as F, popScopeId as K } from "/view-ui/libs/vue.js";
import r, { Langs as P, urls as G } from "/view-ui/libs/view.js";
import { appsState as s, apps as U } from "/view-ui/libs/state.js";
import { close as W, openBlank as X, open as q } from "/view-ui/libs/navigator.js";
import H from "/view-ui/libs/pointer.js";
import { Tip as J } from "/view-ui/libs/viewui.js";
const x = V([]), Q = P({
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
}), m = 5, { initOptions: L } = r, { multi: R, apps: k } = L, { sidebar: g } = R;
let B = {};
if (g) {
  B = g.style;
  const { urls: e } = g;
  if (e)
    for (const i of e) {
      let o = G[i];
      if (o === void 0) {
        if (!(i.split("/").length > 1))
          continue;
        continue;
      }
      o.shortcut = !0, x.includes(o) === !1 && x.push(o);
    }
}
const [w] = k.padding, Y = A({
  components: { Tip: J },
  setup() {
    const { name: e, icon: i, color: o } = L;
    return {
      langs: Q,
      appbar: x,
      appsState: s,
      style: B,
      name: e,
      icon: i,
      color: o
    };
  },
  methods: {
    close: W,
    open(e, i) {
      i === "blank" ? X(e) : q(e);
    },
    switchLayer() {
      s.value === !0 ? s.value = !1 : U.length && (s.value = !0);
    },
    expand() {
      k.padding[0] = w, r.swiper.scroll(w - m);
    },
    collapse() {
      k.padding[0] = m, r.swiper.scroll(-(w - m));
    }
  },
  mounted() {
    const e = new H(this.$el.nextElementSibling, { angle: 40 });
    e.on("lock", () => {
      e.dir === "X" && (console.log(e.trend), e.trend < 0 && (s.value = !0, e.switch(r.appsPointer)));
    });
  }
}), Z = `.v-tip.menu-tip .v-bubble-content{padding:0;width:160px}.v-tip.menu-tip .v-bubble-content .tip-title{display:flex;justify-content:space-between;font-size:14px}.v-tip.menu-tip .v-bubble-content .tip-title .tip-name{flex:1;padding:14px;font-weight:700;color:#555;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab{flex:none;width:36px;padding:13px 10px;cursor:pointer}.v-tip.menu-tip .v-bubble-content .tip-title .new-tab i{color:#666;font-size:14px}.v-tip.menu-tip .v-bubble-content .link{display:flex;justify-content:space-between;padding:12px 14px;font-size:13px;cursor:pointer;border-top:1px solid #f0f0f0}.v-tip.menu-tip .v-bubble-content .link i{font-size:13px}.v-tip.menu-tip .v-bubble-content .link.close{color:#e44343}
`, ee = `.sidebar[data-v-9d9c0d3e]{position:fixed;top:env(titlebar-area-height,0);right:0;bottom:0;z-index:100000;width:50px;transition:background-color .3s;background:rgba(131,131,131,.11);backdrop-filter:blur(10px)}.sidebar .scroll[data-v-9d9c0d3e]{overflow-x:hidden;overflow-y:auto;touch-action:pan-x pan-y;scrollbar-width:none;height:100%}.sidebar .scroll[data-v-9d9c0d3e]::-webkit-scrollbar{display:none}.sidebar .scroll .item[data-v-9d9c0d3e]{width:100%;padding:5px 0;transition:all .4s}.sidebar .scroll .item .link[data-v-9d9c0d3e]{height:50px;cursor:pointer}.sidebar .scroll .item .link i[data-v-9d9c0d3e]{display:flex;justify-content:center;align-items:center;width:36px;height:36px;border-radius:40px;font-size:20px;transition:all .25s ease}.sidebar .scroll .item .link i[data-v-9d9c0d3e]:hover{background-color:#666}.sidebar .scroll .item.active .link i[data-v-9d9c0d3e]{background-color:var(--active)!important}.sidebar .scroll .bottom-padding[data-v-9d9c0d3e]{height:60px}.switch[data-v-9d9c0d3e]{position:fixed;right:8px;bottom:8px;z-index:110000;width:38px;height:38px;border-radius:38px;transition:all .3s;background-color:#00000030;cursor:pointer}.switch i[data-v-9d9c0d3e]{color:#fff;transition:all .3s}.switch .round[data-v-9d9c0d3e]{position:absolute;transition:all .3s;width:6px;height:6px;border-radius:6px;border:2px solid #ffffff;opacity:0}.switch.appsActive i[data-v-9d9c0d3e]{opacity:0}.switch.appsActive .round[data-v-9d9c0d3e]{opacity:1;transform:scale(3)}.switch.appsActive .tip-name[data-v-9d9c0d3e]{display:block}.shortcutKey[data-v-9d9c0d3e]{border:1px solid #2c2c2c;border-radius:3px;padding:0 3px}
`, te = (e, i) => {
  const o = e.__vccOpts || e;
  for (const [u, y] of i)
    o[u] = y;
  return o;
}, a = (e) => (F("data-v-9d9c0d3e"), e = e(), K(), e), ie = {
  class: "scroll apps",
  ref: "scroll"
}, oe = ["href", "onClick"], ne = { class: "tip-title" }, se = ["onClick"], ae = ["title", "onClick"], le = /* @__PURE__ */ a(() => /* @__PURE__ */ t("i", { class: "ficon-xinchuangkou" }, null, -1)), pe = [
  le
], ce = ["onClick"], de = /* @__PURE__ */ a(() => /* @__PURE__ */ t("i", { class: "ficon-cha" }, null, -1)), re = /* @__PURE__ */ a(() => /* @__PURE__ */ t("div", { class: "bottom-padding" }, null, -1)), ue = /* @__PURE__ */ a(() => /* @__PURE__ */ t("div", { class: "round" }, null, -1)), be = /* @__PURE__ */ a(() => /* @__PURE__ */ t("span", { class: "shortcutKey" }, "S", -1));
function fe(e, i, o, u, y, he) {
  const _ = j("Tip");
  return l(), p($, null, [
    t("section", {
      class: "sidebar",
      style: c(e.style),
      onContextmenu: i[0] || (i[0] = E(() => {
      }, ["prevent", "stop"]))
    }, [
      t("div", ie, [
        f(D, { name: "scale" }, {
          default: h(() => [
            (l(!0), p($, null, M(e.appbar, ({ url: n, active: C, name: I, color: z, icon: N, target: S }) => (l(), p("div", {
              class: d(["item center", { active: C }]),
              key: n
            }, [
              t("a", {
                class: "link center",
                href: n,
                onClick: E((b) => e.open(n, S), ["prevent"])
              }, [
                t("i", {
                  class: d(N),
                  style: c({ color: z })
                }, null, 6)
              ], 8, oe),
              f(_, {
                class: "menu-tip",
                placement: "left",
                gap: -10
              }, {
                default: h(() => [
                  t("div", ne, [
                    t("div", {
                      class: "tip-name",
                      style: c({ color: z }),
                      onClick: (b) => e.open(n, S)
                    }, v(I), 13, se),
                    t("div", {
                      class: "new-tab",
                      title: e.langs.newTab,
                      onClick: (b) => e.open(n, "blank")
                    }, pe, 8, ae)
                  ]),
                  C ? (l(), p("div", {
                    key: 0,
                    class: "link close",
                    onClick: (b) => e.close(n)
                  }, [
                    T(v(e.langs.close) + " ", 1),
                    de
                  ], 8, ce)) : O("", !0)
                ]),
                _: 2
              }, 1024)
            ], 2))), 128))
          ]),
          _: 1
        }),
        re
      ], 512)
    ], 36),
    t("div", {
      class: d(["switch center", { appsActive: !e.appsState }]),
      ref: "switch",
      onClick: i[1] || (i[1] = (...n) => e.switchLayer && e.switchLayer(...n))
    }, [
      t("i", {
        class: d(e.icon),
        style: c({ color: e.color })
      }, null, 6),
      ue,
      f(_, { placement: "left" }, {
        default: h(() => [
          be,
          T(" / " + v(e.langs.appsMenu), 1)
        ]),
        _: 1
      })
    ], 2)
  ], 64);
}
const ye = /* @__PURE__ */ te(Y, [["render", fe], ["styles", [Z, ee]], ["__scopeId", "data-v-9d9c0d3e"]]);
export {
  ye as default
};
