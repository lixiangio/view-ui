import { defineComponent as O, ref as x, reactive as S, defineAsyncComponent as V, openBlock as r, createElementBlock as l, Fragment as _, normalizeStyle as g, unref as s, createElementVNode as e, renderList as y, normalizeClass as k, createCommentVNode as C, createVNode as $, Transition as q, withCtx as L, createBlock as Q, pushScopeId as R, popScopeId as A } from "/view-ui/libs/vue.js";
import F, { urls as w, getParentOptions as P, Lang as T, importComponent as U } from "/view-ui/libs/view.js";
import { historys as W } from "/view-ui/libs/state.js";
import { open as z } from "/view-ui/libs/navigator.js";
const m = (o) => (R("data-v-ac13bf38"), o = o(), A(), o), j = { class: "left" }, D = ["title", "onClick"], G = /* @__PURE__ */ m(() => /* @__PURE__ */ e("div", { class: "drag" }, null, -1)), H = { class: "right" }, J = ["title", "onClick"], K = ["title"], M = /* @__PURE__ */ m(() => /* @__PURE__ */ e("i", { class: "ficon-erweima" }, null, -1)), X = [
  M
], Y = /* @__PURE__ */ m(() => /* @__PURE__ */ e("i", { class: "ficon-reload" }, null, -1)), Z = [
  Y
], tt = /* @__PURE__ */ O({
  __name: "titlebar",
  setup(o) {
    const c = x(!1), a = S({}), { multi: f } = F.initOptions, { urls: u, style: I } = f.titlebar, { windowControlsOverlay: d } = window.navigator;
    if (d) {
      c.value = d.visible;
      for (const n of u) {
        const i = w[n];
        if (i)
          a[n] === void 0 && (a[n] = i);
        else {
          const t = P(n);
          t && (a[n] = t, w[n] = t);
        }
      }
      d.addEventListener("geometrychange", () => {
        c.value = d.visible;
      });
    }
    const v = x(!1), B = T({
      en: "qrcode",
      zh: "\u626B\u7801"
    }), E = V(() => U("/common/qrcode"));
    function N() {
      location.reload();
    }
    return (n, i) => (r(), l(_, null, [
      c.value ? (r(), l("div", {
        key: 0,
        class: "titlebar",
        style: g(s(I))
      }, [
        e("div", j, [
          (r(!0), l(_, null, y(s(W), ({ url: t, name: b, icon: p, color: h }) => (r(), l("div", {
            key: t,
            class: "item center",
            title: b,
            onClick: (at) => s(z)(t)
          }, [
            e("i", {
              class: k(p),
              style: g({ color: h })
            }, null, 6)
          ], 8, D))), 128))
        ]),
        G,
        e("div", H, [
          (r(!0), l(_, null, y(a, ({ name: t, icon: b }, p) => (r(), l("div", {
            class: "button center",
            key: p,
            title: t,
            onClick: (h) => s(z)(p)
          }, [
            e("i", {
              class: k(b)
            }, null, 2)
          ], 8, J))), 128)),
          e("div", {
            class: "button center",
            title: s(B),
            onClick: i[0] || (i[0] = (t) => v.value = !0)
          }, X, 8, K),
          e("div", {
            class: "button center",
            title: "Reload",
            onClick: N
          }, Z)
        ])
      ], 4)) : C("", !0),
      $(q, { name: "fade" }, {
        default: L(() => [
          v.value ? (r(), Q(s(E), {
            key: 0,
            onClose: i[1] || (i[1] = (t) => v.value = !1)
          })) : C("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), et = `.titlebar[data-v-ac13bf38]{position:fixed;z-index:15000;top:env(titlebar-area-y,0);left:env(titlebar-area-x,0);width:env(titlebar-area-width,0);height:env(titlebar-area-height,0);display:flex;background:#8383831c;overflow:hidden;user-select:none}.titlebar .left[data-v-ac13bf38],.titlebar .right[data-v-ac13bf38]{flex:none;display:flex}.titlebar .left[data-v-ac13bf38]{border-radius:0 20px 20px 0}.titlebar .right[data-v-ac13bf38]{border-radius:20px 0 0 20px}.titlebar .item[data-v-ac13bf38]{margin:0 5px;padding:0 8px;cursor:pointer}.titlebar .item i[data-v-ac13bf38]{font-size:15px;text-shadow:0 0 12px 2px #9191918a}.titlebar .drag[data-v-ac13bf38]{flex:1;app-region:drag;-webkit-app-region:drag}.titlebar .button[data-v-ac13bf38]{margin:0 5px;padding:0 10px;cursor:pointer}.titlebar .button i[data-v-ac13bf38]{font-size:15px}
`, ot = (o, c) => {
  const a = o.__vccOpts || o;
  for (const [f, u] of c)
    a[f] = u;
  return a;
}, st = /* @__PURE__ */ ot(tt, [["styles", [et]], ["__scopeId", "data-v-ac13bf38"]]);
export {
  st as default
};
