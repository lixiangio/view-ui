import { defineComponent as j, ref as A, onMounted as D, resolveComponent as U, openBlock as s, createElementBlock as c, withModifiers as _, unref as n, createVNode as y, Transition as V, withCtx as g, withDirectives as k, createElementVNode as e, toDisplayString as r, Fragment as b, renderList as w, normalizeStyle as C, normalizeClass as z, vShow as S, createTextVNode as P, pushScopeId as N, popScopeId as T } from "/demo/libs/vue.js";
import $, { urls as B, Langs as L } from "/demo/libs/view.js";
import M from "/demo/libs/pointer.js";
import { open as W } from "/demo/libs/navigator.js";
import { notification as O } from "/demo/libs/viewui.js";
import R from "/demo/libs/network.js";
import { menu as m, appsState as x, controllerSwitch as E, historys as I } from "/demo/libs/state.js";
const X = (i) => (N("data-v-87e7e97a"), i = i(), T(), i), Y = { class: "all-menu" }, q = { class: "center" }, G = { class: "apps-center scroll-y" }, H = { class: "historys" }, J = { class: "title" }, K = ["href", "onClick"], Q = { class: "name" }, Z = { class: "all-apps" }, ee = { class: "title" }, te = /* @__PURE__ */ X(() => /* @__PURE__ */ e("i", { class: "icon ficon-fenlei" }, null, -1)), ae = { class: "all-items" }, ne = ["href", "onClick"], ie = { class: "name" }, oe = /* @__PURE__ */ j({
  __name: "default",
  setup(i) {
    m.lock === void 0 && (m.lock = !0, R.get("/demo/api/menu.json").then((t) => {
      for (const d of t) {
        const f = B[d];
        f && m.push(f);
      }
    }));
    const o = L({
      recentlyUsed: {
        en: "Recently Used",
        zh: "\u6700\u8FD1\u4F7F\u7528"
      },
      allApplications: {
        en: "All Applications",
        zh: "\u5168\u90E8\u5E94\u7528"
      },
      applicationCenter: {
        en: "Application Center",
        zh: "\u5E94\u7528\u4E2D\u5FC3"
      },
      search: {
        en: "Search",
        zh: "\u641C\u7D22"
      }
    });
    function l(t) {
      x.value = !0, W(t);
    }
    const p = A();
    return D(() => {
      O.add({ title: "VIEW UI", time: 5e3 });
      const t = new M(p.value);
      t.on("lock", () => {
        t.dir === "X" && (x.value = !0, t.switch($.appsPointer));
      });
    }), (t, d) => {
      const f = U("Scroll");
      return s(), c("div", {
        class: "default-main",
        ref_key: "defaultPage",
        ref: p,
        onContextmenu: d[0] || (d[0] = _(
          (...a) => n(E) && n(E)(...a),
          ["prevent"]
        ))
      }, [
        y(V, { name: "bopacity" }, {
          default: g(() => [
            k(e("div", Y, [
              e("h3", q, r(n(o).applicationCenter), 1),
              e("div", G, [
                k(e("div", H, [
                  e("div", J, r(n(o).recentlyUsed), 1),
                  y(f, { class: "all-items" }, {
                    default: g(() => [
                      (s(!0), c(b, null, w(n(I), ({ url: a, name: u, icon: v, color: h }) => (s(), c("div", {
                        key: a,
                        class: "item col4"
                      }, [
                        e("a", {
                          class: "link",
                          href: a,
                          onClick: _((F) => l(a), ["stop", "prevent"])
                        }, [
                          e("div", {
                            class: "icon center",
                            style: C({ color: h })
                          }, [
                            e("i", {
                              class: z(v)
                            }, null, 2)
                          ], 4),
                          e("div", Q, r(u), 1)
                        ], 8, K)
                      ]))), 128))
                    ]),
                    _: 1
                  })
                ], 512), [
                  [S, n(I).length]
                ]),
                e("div", Z, [
                  e("div", ee, [
                    te,
                    P(" " + r(n(o).allApplications), 1)
                  ]),
                  e("div", ae, [
                    (s(!0), c(b, null, w(n(m), ({ url: a, name: u, icon: v, color: h }) => (s(), c("div", {
                      key: a,
                      class: "item col4"
                    }, [
                      e("a", {
                        class: "link",
                        href: a,
                        onClick: _((F) => l(a), ["stop", "prevent"])
                      }, [
                        e("div", {
                          class: "icon center",
                          style: C({ color: h })
                        }, [
                          e("i", {
                            class: z(v)
                          }, null, 2)
                        ], 4),
                        e("div", ie, r(u), 1)
                      ], 8, ne)
                    ]))), 128))
                  ])
                ])
              ])
            ], 512), [
              [S, !n(x)]
            ])
          ]),
          _: 1
        })
      ], 544);
    };
  }
}), le = `@charset "UTF-8";@keyframes main-background-87e7e97a{30%{background-color:#e4a87786}80%{background-color:#cea9cf85}}.default-main[data-v-87e7e97a]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;background:url(image/background01.jpeg);user-select:none}.default-main[data-v-87e7e97a]:before{position:fixed;top:0;bottom:0;left:0;right:0;content:"";animation:main-background-87e7e97a 100s infinite}.default-main .all-menu h3[data-v-87e7e97a]{flex:none;margin:30px 0;font-size:20px;color:#fff}.default-main .all-menu .apps-center[data-v-87e7e97a]{flex:1;max-width:1100px;margin:0 auto;transform:translate(0)}.default-main .all-menu .apps-center .title[data-v-87e7e97a]{font-size:15px;font-weight:700;padding:10px;color:#fff}.default-main .all-menu .apps-center .title .icon[data-v-87e7e97a]{margin-right:5px;font-size:16px}.default-main .all-menu .apps-center .all-items[data-v-87e7e97a]{display:flex;flex-direction:row;flex-wrap:wrap}.default-main .all-menu .apps-center .all-items .item[data-v-87e7e97a]{display:flex;justify-content:center;height:135px;padding:8px 14px}.default-main .all-menu .apps-center .all-items .item .link[data-v-87e7e97a]{display:flex;flex-direction:column;align-items:center;cursor:pointer;color:#fff}.default-main .all-menu .apps-center .all-items .item .link .icon[data-v-87e7e97a]{width:62px;height:62px;background-color:#ffffff29;border-radius:22px;margin-bottom:10px}.default-main .all-menu .apps-center .all-items .item .link .icon i[data-v-87e7e97a]{font-size:25px}.default-main .all-menu .apps-center .all-items .item .link .name[data-v-87e7e97a]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.default-main .all-menu .apps-center .historys .all-items[data-v-87e7e97a]{flex-wrap:nowrap;justify-content:flex-start}.default-main .all-menu .apps-center .historys .all-items .item[data-v-87e7e97a]{flex:none}.bopacity-enter-active[data-v-87e7e97a],.bopacity-leave-active[data-v-87e7e97a]{transition:opacity .25s ease}.bopacity-enter-active .apps-center[data-v-87e7e97a],.bopacity-leave-active .apps-center[data-v-87e7e97a]{transition:transform .25s ease}.bopacity-enter-from[data-v-87e7e97a],.bopacity-leave-to[data-v-87e7e97a]{opacity:0}.bopacity-enter-from .apps-center[data-v-87e7e97a],.bopacity-leave-to .apps-center[data-v-87e7e97a]{transform:translateY(8px)}
`, se = (i, o) => {
  const l = i.__vccOpts || i;
  for (const [p, t] of o)
    l[p] = t;
  return l;
}, ve = /* @__PURE__ */ se(oe, [["styles", [le]], ["__scopeId", "data-v-87e7e97a"]]);
export {
  ve as default
};
