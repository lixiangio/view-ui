import { defineComponent as D, ref as I, onMounted as U, resolveComponent as V, openBlock as s, createElementBlock as l, withModifiers as b, unref as a, createVNode as x, Transition as N, withCtx as y, withDirectives as g, createElementVNode as e, toDisplayString as f, Fragment as k, renderList as w, normalizeStyle as C, normalizeClass as z, vShow as S, createTextVNode as T, pushScopeId as $, popScopeId as B } from "/view-ui/libs/vue.js";
import L, { urls as M, Langs as O } from "/view-ui/libs/view.js";
import { open as P } from "/view-ui/libs/navigator.js";
import R from "/view-ui/libs/network.js";
import W from "/view-ui/libs/pointer.js";
import { menu as m, appsState as _, controllerSwitch as E, historys as F } from "/view-ui/libs/state.js";
const j = (i) => ($("data-v-0decf28b"), i = i(), B(), i), X = { class: "all-menu" }, Y = /* @__PURE__ */ j(() => /* @__PURE__ */ e("h3", { class: "center" }, null, -1)), q = { class: "apps-center scroll-y" }, G = { class: "historys" }, H = { class: "title" }, J = ["href", "onClick"], K = { class: "name" }, Q = { class: "all-apps" }, Z = { class: "title" }, ee = /* @__PURE__ */ j(() => /* @__PURE__ */ e("i", { class: "icon ficon-fenlei" }, null, -1)), te = { class: "all-items" }, ne = ["href", "onClick"], ae = { class: "name" }, ie = /* @__PURE__ */ D({
  __name: "appsCenter",
  setup(i) {
    m.lock === void 0 && (m.lock = !0, R.get("/view-ui/api/menu.json").then((t) => {
      for (const p of t) {
        const d = M[p];
        d && m.push(d);
      }
    }));
    const c = O({
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
    function o(t) {
      _.value = !0, P(t);
    }
    const r = I();
    return U(() => {
      const t = new W(r.value);
      t.on("lock", () => {
        t.dir === "X" && (_.value = !0, t.switch(L.appsPointer));
      });
    }), (t, p) => {
      const d = V("Scroll");
      return s(), l("main", {
        ref_key: "el",
        ref: r,
        onContextmenu: p[0] || (p[0] = b(
          (...n) => a(E) && a(E)(...n),
          ["prevent"]
        ))
      }, [
        x(N, { name: "bopacity" }, {
          default: y(() => [
            g(e("div", X, [
              Y,
              e("div", q, [
                g(e("div", G, [
                  e("div", H, f(a(c).recentlyUsed), 1),
                  x(d, { class: "all-items" }, {
                    default: y(() => [
                      (s(!0), l(k, null, w(a(F), ({ url: n, name: u, icon: v, color: h }) => (s(), l("div", {
                        key: n,
                        class: "item col4"
                      }, [
                        e("a", {
                          class: "link",
                          href: n,
                          onClick: b((A) => o(n), ["prevent"])
                        }, [
                          e("div", {
                            class: "icon center",
                            style: C({ color: h })
                          }, [
                            e("i", {
                              class: z(v)
                            }, null, 2)
                          ], 4),
                          e("div", K, f(u), 1)
                        ], 8, J)
                      ]))), 128))
                    ]),
                    _: 1
                  })
                ], 512), [
                  [S, a(F).length]
                ]),
                e("div", Q, [
                  e("div", Z, [
                    ee,
                    T(" " + f(a(c).allApplications), 1)
                  ]),
                  e("div", te, [
                    (s(!0), l(k, null, w(a(m), ({ url: n, name: u, icon: v, color: h }) => (s(), l("div", {
                      key: n,
                      class: "item col4"
                    }, [
                      e("a", {
                        class: "link",
                        href: n,
                        onClick: b((A) => o(n), ["prevent"])
                      }, [
                        e("div", {
                          class: "icon center",
                          style: C({ color: h })
                        }, [
                          e("i", {
                            class: z(v)
                          }, null, 2)
                        ], 4),
                        e("div", ae, f(u), 1)
                      ], 8, ne)
                    ]))), 128))
                  ])
                ])
              ])
            ], 512), [
              [S, !a(_)]
            ])
          ]),
          _: 1
        })
      ], 544);
    };
  }
}), oe = `@charset "UTF-8";@keyframes main-background-0decf28b{30%{background-color:#e4a87786}80%{background-color:#cea9cf85}}main[data-v-0decf28b]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;background:url(image/background01.jpeg);user-select:none}main[data-v-0decf28b]:before{position:fixed;top:0;bottom:0;left:0;right:0;content:"";animation:main-background-0decf28b 100s infinite}main .all-menu h3[data-v-0decf28b]{flex:none;margin:30px 0;font-size:20px;color:#fff}main .all-menu .apps-center[data-v-0decf28b]{flex:1;max-width:1100px;margin:0 auto;transform:translate(0)}main .all-menu .apps-center .title[data-v-0decf28b]{font-size:15px;font-weight:700;padding:10px;color:#fff}main .all-menu .apps-center .title .icon[data-v-0decf28b]{margin-right:5px;font-size:16px}main .all-menu .apps-center .all-items[data-v-0decf28b]{display:flex;flex-direction:row;flex-wrap:wrap}main .all-menu .apps-center .all-items .item[data-v-0decf28b]{display:flex;justify-content:center;height:135px;padding:8px 14px}main .all-menu .apps-center .all-items .item .link[data-v-0decf28b]{display:flex;flex-direction:column;align-items:center;cursor:pointer;color:#fff}main .all-menu .apps-center .all-items .item .link .icon[data-v-0decf28b]{width:70px;height:70px;background-color:#ffffff29;border-radius:22px;margin-bottom:10px}main .all-menu .apps-center .all-items .item .link .icon i[data-v-0decf28b]{font-size:34px}main .all-menu .apps-center .all-items .item .link .name[data-v-0decf28b]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}main .all-menu .apps-center .historys .all-items[data-v-0decf28b]{flex-wrap:nowrap;justify-content:flex-start}main .all-menu .apps-center .historys .all-items .item[data-v-0decf28b]{flex:none}.bopacity-enter-active[data-v-0decf28b],.bopacity-leave-active[data-v-0decf28b]{transition:opacity .25s ease}.bopacity-enter-active .apps-center[data-v-0decf28b],.bopacity-leave-active .apps-center[data-v-0decf28b]{transition:transform .25s ease}.bopacity-enter-from[data-v-0decf28b],.bopacity-leave-to[data-v-0decf28b]{opacity:0}.bopacity-enter-from .apps-center[data-v-0decf28b],.bopacity-leave-to .apps-center[data-v-0decf28b]{transform:translateY(8px)}
`, se = (i, c) => {
  const o = i.__vccOpts || i;
  for (const [r, t] of c)
    o[r] = t;
  return o;
}, me = /* @__PURE__ */ se(ie, [["styles", [oe]], ["__scopeId", "data-v-0decf28b"]]);
export {
  me as default
};
