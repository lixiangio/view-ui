import { defineComponent as A, ref as D, onMounted as I, resolveComponent as P, openBlock as s, createElementBlock as c, withModifiers as _, unref as n, createVNode as y, Transition as U, withCtx as g, withDirectives as k, createElementVNode as e, toDisplayString as r, Fragment as w, renderList as b, normalizeStyle as C, normalizeClass as z, vShow as S, createTextVNode as V, pushScopeId as N, popScopeId as T } from "/view-ui/libs/vue.js";
import $, { urls as B, Langs as L } from "/view-ui/libs/view.js";
import M from "/view-ui/libs/pointer.js";
import { open as O } from "/view-ui/libs/navigator.js";
import R from "/view-ui/libs/network.js";
import { menu as m, appsState as x, controllerSwitch as E, historys as F } from "/view-ui/libs/state.js";
const W = (i) => (N("data-v-ec41fd87"), i = i(), T(), i), X = { class: "all-menu" }, Y = { class: "center" }, q = { class: "apps-center scroll-y" }, G = { class: "historys" }, H = { class: "title" }, J = ["href", "onClick"], K = { class: "name" }, Q = { class: "all-apps" }, Z = { class: "title" }, ee = /* @__PURE__ */ W(() => /* @__PURE__ */ e("i", { class: "icon ficon-fenlei" }, null, -1)), te = { class: "all-items" }, ae = ["href", "onClick"], ne = { class: "name" }, ie = /* @__PURE__ */ A({
  __name: "applicationCenter",
  setup(i) {
    m.lock === void 0 && (m.lock = !0, R.get("/view-ui/api/menu.json").then((t) => {
      for (const p of t) {
        const f = B[p];
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
      x.value = !0, O(t);
    }
    const d = D();
    return I(() => {
      const t = new M(d.value);
      t.on("lock", () => {
        t.dir === "X" && (x.value = !0, t.switch($.appsPointer));
      });
    }), (t, p) => {
      const f = P("Scroll");
      return s(), c("div", {
        class: "default-main",
        ref_key: "defaultPage",
        ref: d,
        onContextmenu: p[0] || (p[0] = _(
          (...a) => n(E) && n(E)(...a),
          ["prevent"]
        ))
      }, [
        y(U, { name: "bopacity" }, {
          default: g(() => [
            k(e("div", X, [
              e("h3", Y, r(n(o).applicationCenter), 1),
              e("div", q, [
                k(e("div", G, [
                  e("div", H, r(n(o).recentlyUsed), 1),
                  y(f, { class: "all-items" }, {
                    default: g(() => [
                      (s(!0), c(w, null, b(n(F), ({ url: a, name: u, icon: v, color: h }) => (s(), c("div", {
                        key: a,
                        class: "item col4"
                      }, [
                        e("a", {
                          class: "link",
                          href: a,
                          onClick: _((j) => l(a), ["stop", "prevent"])
                        }, [
                          e("div", {
                            class: "icon center",
                            style: C({ color: h })
                          }, [
                            e("i", {
                              class: z(v)
                            }, null, 2)
                          ], 4),
                          e("div", K, r(u), 1)
                        ], 8, J)
                      ]))), 128))
                    ]),
                    _: 1
                  })
                ], 512), [
                  [S, n(F).length]
                ]),
                e("div", Q, [
                  e("div", Z, [
                    ee,
                    V(" " + r(n(o).allApplications), 1)
                  ]),
                  e("div", te, [
                    (s(!0), c(w, null, b(n(m), ({ url: a, name: u, icon: v, color: h }) => (s(), c("div", {
                      key: a,
                      class: "item col4"
                    }, [
                      e("a", {
                        class: "link",
                        href: a,
                        onClick: _((j) => l(a), ["stop", "prevent"])
                      }, [
                        e("div", {
                          class: "icon center",
                          style: C({ color: h })
                        }, [
                          e("i", {
                            class: z(v)
                          }, null, 2)
                        ], 4),
                        e("div", ne, r(u), 1)
                      ], 8, ae)
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
}), oe = `@charset "UTF-8";@keyframes main-background-ec41fd87{30%{background-color:#e4a87786}80%{background-color:#cea9cf85}}.default-main[data-v-ec41fd87]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;background:url(image/background01.jpeg);user-select:none}.default-main[data-v-ec41fd87]:before{position:fixed;top:0;bottom:0;left:0;right:0;content:"";animation:main-background-ec41fd87 100s infinite}.default-main .all-menu h3[data-v-ec41fd87]{flex:none;margin:30px 0;font-size:20px;color:#fff}.default-main .all-menu .apps-center[data-v-ec41fd87]{flex:1;max-width:1100px;margin:0 auto;transform:translate(0)}.default-main .all-menu .apps-center .title[data-v-ec41fd87]{font-size:15px;font-weight:700;padding:10px;color:#fff}.default-main .all-menu .apps-center .title .icon[data-v-ec41fd87]{margin-right:5px;font-size:16px}.default-main .all-menu .apps-center .all-items[data-v-ec41fd87]{display:flex;flex-direction:row;flex-wrap:wrap}.default-main .all-menu .apps-center .all-items .item[data-v-ec41fd87]{display:flex;justify-content:center;height:135px;padding:8px 14px}.default-main .all-menu .apps-center .all-items .item .link[data-v-ec41fd87]{display:flex;flex-direction:column;align-items:center;cursor:pointer;color:#fff}.default-main .all-menu .apps-center .all-items .item .link .icon[data-v-ec41fd87]{width:62px;height:62px;background-color:#ffffff29;border-radius:22px;margin-bottom:10px}.default-main .all-menu .apps-center .all-items .item .link .icon i[data-v-ec41fd87]{font-size:25px}.default-main .all-menu .apps-center .all-items .item .link .name[data-v-ec41fd87]{font-size:12px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.default-main .all-menu .apps-center .historys .all-items[data-v-ec41fd87]{flex-wrap:nowrap;justify-content:flex-start}.default-main .all-menu .apps-center .historys .all-items .item[data-v-ec41fd87]{flex:none}.bopacity-enter-active[data-v-ec41fd87],.bopacity-leave-active[data-v-ec41fd87]{transition:opacity .25s ease}.bopacity-enter-active .apps-center[data-v-ec41fd87],.bopacity-leave-active .apps-center[data-v-ec41fd87]{transition:transform .25s ease}.bopacity-enter-from[data-v-ec41fd87],.bopacity-leave-to[data-v-ec41fd87]{opacity:0}.bopacity-enter-from .apps-center[data-v-ec41fd87],.bopacity-leave-to .apps-center[data-v-ec41fd87]{transform:translateY(8px)}
`, le = (i, o) => {
  const l = i.__vccOpts || i;
  for (const [d, t] of o)
    l[d] = t;
  return l;
}, me = /* @__PURE__ */ le(ie, [["styles", [oe]], ["__scopeId", "data-v-ec41fd87"]]);
export {
  me as default
};
