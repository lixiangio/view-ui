import { defineComponent as F, ref as A, onMounted as D, openBlock as r, createElementBlock as c, withModifiers as x, unref as o, renderSlot as U, resolveComponent as V, createBlock as B, withCtx as _, createVNode as y, Transition as M, withDirectives as g, createElementVNode as e, toDisplayString as d, Fragment as k, renderList as b, normalizeStyle as w, normalizeClass as C, vShow as S, createTextVNode as N, pushScopeId as T, popScopeId as L } from "/libs/vue.js";
import O, { events as P, urls as R, Langs as W } from "/libs/view.js";
import X, { MaskStyle as Y } from "/libs/pointer.js";
import { appsState as f, overview as q, controllerSwitch as z, menu as m, historys as E } from "/libs/state.js";
import { open as G } from "/libs/navigator.js";
import H from "/libs/network.js";
const J = /* @__PURE__ */ F({
  __name: "float",
  setup(n) {
    const i = A();
    return D(() => {
      const t = new X(i.value);
      t.on("lock", () => {
        t.dir === "X" ? f.value = !0 : f.value === !0 && (q.value = !0, Y.cursor = "col-resize", P.emit("sidebar.switch", !1)), t.switch(O.appsPointer);
      });
    }), (t, a) => (r(), c("main", {
      ref_key: "el",
      ref: i,
      onContextmenu: a[0] || (a[0] = x(
        (...l) => o(z) && o(z)(...l),
        ["prevent"]
      ))
    }, [
      U(t.$slots, "default", {}, void 0, !0)
    ], 544));
  }
}), K = `main[data-v-e537a4d2]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;user-select:none}
`, j = (n, i) => {
  const t = n.__vccOpts || n;
  for (const [a, l] of i)
    t[a] = l;
  return t;
}, Q = /* @__PURE__ */ j(J, [["styles", [K]], ["__scopeId", "data-v-e537a4d2"]]), I = (n) => (T("data-v-e886963e"), n = n(), L(), n), Z = { class: "all-menu" }, ee = /* @__PURE__ */ I(() => /* @__PURE__ */ e("h3", { class: "center" }, null, -1)), te = { class: "apps-center scroll-y" }, ae = { class: "historys" }, ne = { class: "title" }, oe = ["href", "onClick"], ie = { class: "name" }, se = { class: "all-apps" }, le = { class: "title" }, re = /* @__PURE__ */ I(() => /* @__PURE__ */ e("i", { class: "icon ficon-fenlei" }, null, -1)), ce = { class: "all-items" }, pe = ["href", "onClick"], de = { class: "name" }, me = /* @__PURE__ */ F({
  __name: "appsCenter",
  setup(n) {
    m.lock === void 0 && (m.lock = !0, H.get("/api/menu.json").then((a) => {
      for (const l of a) {
        const p = R[l];
        p && m.push(p);
      }
    }));
    const i = W({
      recentlyUsed: {
        en: "Recently Used",
        zh: "\u6700\u8FD1\u4F7F\u7528"
      },
      allApplications: {
        en: "All Applications",
        zh: "\u5168\u90E8\u5E94\u7528"
      },
      appsCenter: {
        en: "Application Center",
        zh: "\u5E94\u7528\u4E2D\u5FC3"
      },
      search: {
        en: "Search",
        zh: "\u641C\u7D22"
      }
    });
    function t(a) {
      f.value = !0, G(a);
    }
    return (a, l) => {
      const p = V("Scroll");
      return r(), B(Q, null, {
        default: _(() => [
          y(M, { name: "bopacity" }, {
            default: _(() => [
              g(e("div", Z, [
                ee,
                e("div", te, [
                  g(e("div", ae, [
                    e("div", ne, d(o(i).recentlyUsed), 1),
                    y(p, { class: "all-items" }, {
                      default: _(() => [
                        (r(!0), c(k, null, b(o(E), ({ url: s, name: u, icon: v, color: h }) => (r(), c("div", {
                          key: s,
                          class: "item col4"
                        }, [
                          e("a", {
                            class: "link",
                            href: s,
                            onClick: x(($) => t(s), ["prevent"])
                          }, [
                            e("div", {
                              class: "icon center",
                              style: w({ color: h })
                            }, [
                              e("i", {
                                class: C(v)
                              }, null, 2)
                            ], 4),
                            e("div", ie, d(u), 1)
                          ], 8, oe)
                        ]))), 128))
                      ]),
                      _: 1
                    })
                  ], 512), [
                    [S, o(E).length]
                  ]),
                  e("div", se, [
                    e("div", le, [
                      re,
                      N(" " + d(o(i).allApplications), 1)
                    ]),
                    e("div", ce, [
                      (r(!0), c(k, null, b(o(m), ({ url: s, name: u, icon: v, color: h }) => (r(), c("div", {
                        key: s,
                        class: "item col4"
                      }, [
                        e("a", {
                          class: "link",
                          href: s,
                          onClick: x(($) => t(s), ["prevent"])
                        }, [
                          e("div", {
                            class: "icon center",
                            style: w({ color: h })
                          }, [
                            e("i", {
                              class: C(v)
                            }, null, 2)
                          ], 4),
                          e("div", de, d(u), 1)
                        ], 8, pe)
                      ]))), 128))
                    ])
                  ])
                ])
              ], 512), [
                [S, !o(f)]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), fe = `@charset "UTF-8";@keyframes main-background-e886963e{30%{background-color:#e4a87786}80%{background-color:#cea9cf85}}main[data-v-e886963e]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;background:url(image/background01.jpeg);user-select:none}main[data-v-e886963e]:before{position:fixed;top:0;bottom:0;left:0;right:0;content:"";animation:main-background-e886963e 100s infinite}main .all-menu h3[data-v-e886963e]{flex:none;margin:30px 0;font-size:20px;color:#fff}main .all-menu .apps-center[data-v-e886963e]{flex:1;max-width:1100px;margin:0 auto;transform:translate(0)}main .all-menu .apps-center .title[data-v-e886963e]{font-size:15px;font-weight:700;padding:10px;color:#fff}main .all-menu .apps-center .title .icon[data-v-e886963e]{margin-right:5px;font-size:16px}main .all-menu .apps-center .all-items[data-v-e886963e]{display:flex;flex-direction:row;flex-wrap:wrap}main .all-menu .apps-center .all-items .item[data-v-e886963e]{display:flex;justify-content:center;height:135px;padding:8px 14px}main .all-menu .apps-center .all-items .item .link[data-v-e886963e]{display:flex;flex-direction:column;align-items:center;cursor:pointer;color:#fff}main .all-menu .apps-center .all-items .item .link .icon[data-v-e886963e]{width:70px;height:70px;background-color:#ffffff29;border-radius:22px;margin-bottom:10px}main .all-menu .apps-center .all-items .item .link .icon i[data-v-e886963e]{font-size:34px}main .all-menu .apps-center .all-items .item .link .name[data-v-e886963e]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}main .all-menu .apps-center .historys .all-items[data-v-e886963e]{flex-wrap:nowrap;justify-content:flex-start}main .all-menu .apps-center .historys .all-items .item[data-v-e886963e]{flex:none}.bopacity-enter-active[data-v-e886963e],.bopacity-leave-active[data-v-e886963e]{transition:opacity .25s ease}.bopacity-enter-active .apps-center[data-v-e886963e],.bopacity-leave-active .apps-center[data-v-e886963e]{transition:transform .25s ease}.bopacity-enter-from[data-v-e886963e],.bopacity-leave-to[data-v-e886963e]{opacity:0}.bopacity-enter-from .apps-center[data-v-e886963e],.bopacity-leave-to .apps-center[data-v-e886963e]{transform:translateY(8px)}
`, ge = /* @__PURE__ */ j(me, [["styles", [fe]], ["__scopeId", "data-v-e886963e"]]);
export {
  ge as default
};
