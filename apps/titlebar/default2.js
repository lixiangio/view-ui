import { defineComponent as O, ref as x, reactive as S, defineAsyncComponent as V, openBlock as s, createElementBlock as l, Fragment as _, normalizeStyle as g, unref as r, createElementVNode as e, renderList as y, normalizeClass as k, createCommentVNode as C, createVNode as $, Transition as L, withCtx as q, createBlock as Q, pushScopeId as R, popScopeId as A } from "/view-ui/libs/vue.js";
import F, { urls as w, getParentOptions as P, Lang as T } from "/view-ui/libs/view.js";
import { historys as U } from "/view-ui/libs/state.js";
import { open as z } from "/view-ui/libs/navigator.js";
const m = (o) => (R("data-v-1bb8a795"), o = o(), A(), o), W = { class: "left" }, j = ["title", "onClick"], D = /* @__PURE__ */ m(() => /* @__PURE__ */ e("div", { class: "drag" }, null, -1)), G = { class: "right" }, H = ["title", "onClick"], J = ["title"], K = /* @__PURE__ */ m(() => /* @__PURE__ */ e("i", { class: "ficon-erweima" }, null, -1)), M = [
  K
], X = /* @__PURE__ */ m(() => /* @__PURE__ */ e("i", { class: "ficon-reload" }, null, -1)), Y = [
  X
], Z = /* @__PURE__ */ O({
  __name: "default",
  setup(o) {
    const d = x(!1), a = S({}), { split: p } = F.initOptions, { urls: u, style: I } = p.titlebar, { windowControlsOverlay: c } = window.navigator;
    if (c) {
      d.value = c.visible;
      for (const i of u) {
        const n = w[i];
        if (n)
          a[i] === void 0 && (a[i] = n);
        else {
          const t = P(i);
          t && (a[i] = t, w[i] = t);
        }
      }
      c.addEventListener("geometrychange", () => {
        d.value = c.visible;
      });
    }
    const v = x(!1), B = T({
      en: "qrcode",
      zh: "\u626B\u7801"
    }), E = V(() => import("./qrcode.js"));
    function N() {
      location.reload();
    }
    return (i, n) => (s(), l(_, null, [
      d.value ? (s(), l("div", {
        key: 0,
        class: "titlebar",
        style: g(r(I))
      }, [
        e("div", W, [
          (s(!0), l(_, null, y(r(U), ({ url: t, name: f, icon: b, color: h }) => (s(), l("div", {
            key: t,
            class: "item center",
            title: f,
            onClick: (ot) => r(z)(t)
          }, [
            e("i", {
              class: k(b),
              style: g({ color: h })
            }, null, 6)
          ], 8, j))), 128))
        ]),
        D,
        e("div", G, [
          (s(!0), l(_, null, y(a, ({ name: t, icon: f }, b) => (s(), l("div", {
            class: "button center",
            key: b,
            title: t,
            onClick: (h) => r(z)(b)
          }, [
            e("i", {
              class: k(f)
            }, null, 2)
          ], 8, H))), 128)),
          e("div", {
            class: "button center",
            title: r(B),
            onClick: n[0] || (n[0] = (t) => v.value = !0)
          }, M, 8, J),
          e("div", {
            class: "button center",
            title: "Reload",
            onClick: N
          }, Y)
        ])
      ], 4)) : C("", !0),
      $(L, { name: "fade" }, {
        default: q(() => [
          v.value ? (s(), Q(r(E), {
            key: 0,
            onClose: n[1] || (n[1] = (t) => v.value = !1)
          })) : C("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), tt = `.titlebar[data-v-1bb8a795]{position:fixed;z-index:15000;top:env(titlebar-area-y,0);left:env(titlebar-area-x,0);width:env(titlebar-area-width,0);height:env(titlebar-area-height,0);display:flex;background:#8383831c;overflow:hidden;user-select:none}.titlebar .left[data-v-1bb8a795],.titlebar .right[data-v-1bb8a795]{flex:none;display:flex}.titlebar .left[data-v-1bb8a795]{border-radius:0 20px 20px 0}.titlebar .right[data-v-1bb8a795]{border-radius:20px 0 0 20px}.titlebar .item[data-v-1bb8a795]{margin:0 5px;padding:0 8px;cursor:pointer}.titlebar .item i[data-v-1bb8a795]{font-size:15px;text-shadow:0 0 12px 2px #9191918a}.titlebar .drag[data-v-1bb8a795]{flex:1;app-region:drag;-webkit-app-region:drag}.titlebar .button[data-v-1bb8a795]{margin:0 5px;padding:0 10px;cursor:pointer}.titlebar .button i[data-v-1bb8a795]{font-size:15px}
`, et = (o, d) => {
  const a = o.__vccOpts || o;
  for (const [p, u] of d)
    a[p] = u;
  return a;
}, lt = /* @__PURE__ */ et(Z, [["styles", [tt]], ["__scopeId", "data-v-1bb8a795"]]);
export {
  et as _,
  lt as a
};
