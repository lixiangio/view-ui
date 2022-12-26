import { defineComponent as z, ref as I, reactive as E, openBlock as r, createElementBlock as l, normalizeStyle as b, unref as c, createElementVNode as o, Fragment as m, renderList as h, normalizeClass as x, createCommentVNode as O, pushScopeId as S, popScopeId as V } from "/demo/libs/vue.js";
import B, { urls as g, getParentOptions as L } from "/demo/libs/view.js";
import { historys as N } from "/demo/libs/state.js";
import { open as y } from "/demo/libs/navigator.js";
const k = (e) => (S("data-v-45a2a563"), e = e(), V(), e), R = { class: "left" }, $ = ["title", "onClick"], F = /* @__PURE__ */ k(() => /* @__PURE__ */ o("div", { class: "drag" }, null, -1)), P = { class: "right" }, U = ["title", "onClick"], W = /* @__PURE__ */ k(() => /* @__PURE__ */ o("i", { class: "ficon-reload" }, null, -1)), j = [
  W
], q = /* @__PURE__ */ z({
  __name: "default",
  setup(e) {
    const n = I(!1), a = E({}), { titlebar: p } = B.initOptions, { urls: v, style: w } = p, { windowControlsOverlay: s } = window.navigator;
    if (s) {
      n.value = s.visible;
      for (const i of v) {
        const u = g[i];
        if (u)
          a[i] === void 0 && (a[i] = u);
        else {
          const t = L(i);
          t && (a[i] = t, g[i] = t);
        }
      }
      s.addEventListener("geometrychange", () => {
        n.value = s.visible;
      });
    }
    function C() {
      location.reload();
    }
    return (i, u) => n.value ? (r(), l("div", {
      key: 0,
      class: "titlebar",
      style: b(c(w))
    }, [
      o("div", R, [
        (r(!0), l(m, null, h(c(N), ({ url: t, name: f, icon: d, color: _ }) => (r(), l("div", {
          key: t,
          class: "item center",
          title: f,
          onClick: (G) => c(y)(t)
        }, [
          o("i", {
            class: x(d),
            style: b({ color: _ })
          }, null, 6)
        ], 8, $))), 128))
      ]),
      F,
      o("div", P, [
        (r(!0), l(m, null, h(a, ({ name: t, icon: f }, d) => (r(), l("div", {
          class: "button center",
          key: d,
          title: t,
          onClick: (_) => c(y)(d)
        }, [
          o("i", {
            class: x(f)
          }, null, 2)
        ], 8, U))), 128)),
        o("div", {
          class: "button center",
          title: "Reload",
          onClick: C
        }, j)
      ])
    ], 4)) : O("", !0);
  }
}), A = `.titlebar[data-v-45a2a563]{position:fixed;z-index:15000;top:env(titlebar-area-y,0);left:env(titlebar-area-x,0);width:env(titlebar-area-width,0);height:env(titlebar-area-height,0);display:flex;background:#8383831c;overflow:hidden;user-select:none}.titlebar .left[data-v-45a2a563],.titlebar .right[data-v-45a2a563]{flex:none;display:flex}.titlebar .left[data-v-45a2a563]{border-radius:0 20px 20px 0}.titlebar .right[data-v-45a2a563]{border-radius:20px 0 0 20px}.titlebar .item[data-v-45a2a563]{margin:0 5px;padding:0 8px;cursor:pointer}.titlebar .item i[data-v-45a2a563]{font-size:15px;text-shadow:0 0 12px 2px #9191918a}.titlebar .drag[data-v-45a2a563]{flex:1;app-region:drag;-webkit-app-region:drag}.titlebar .button[data-v-45a2a563]{margin:0 5px;padding:0 10px;cursor:pointer}.titlebar .button i[data-v-45a2a563]{font-size:15px}
`, D = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [p, v] of n)
    a[p] = v;
  return a;
}, Q = /* @__PURE__ */ D(q, [["styles", [A]], ["__scopeId", "data-v-45a2a563"]]);
export {
  Q as default
};
