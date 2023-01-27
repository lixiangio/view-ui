import { defineComponent as c, ref as l, onMounted as p, openBlock as i, createElementBlock as f, withModifiers as _, unref as r, renderSlot as u, createBlock as m, withCtx as v, pushScopeId as h, popScopeId as y, createElementVNode as x } from "/view-ui/libs/vue.js";
import w from "/view-ui/libs/view.js";
import g from "/view-ui/libs/pointer.js";
import { appsState as k, controllerSwitch as s } from "/view-ui/libs/state.js";
const I = /* @__PURE__ */ c({
  __name: "default",
  setup(t) {
    const o = l();
    return p(() => {
      const e = new g(o.value);
      e.on("lock", () => {
        e.dir === "X" && (k.value = !0, e.switch(w.appsPointer));
      });
    }), (e, n) => (i(), f("div", {
      class: "default-main",
      ref_key: "defaultPage",
      ref: o,
      onContextmenu: n[0] || (n[0] = _(
        (...a) => r(s) && r(s)(...a),
        ["prevent"]
      ))
    }, [
      u(e.$slots, "default", {}, void 0, !0)
    ], 544));
  }
}), S = `.default-main[data-v-4d470a76]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;user-select:none}
`, d = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, a] of o)
    e[n] = a;
  return e;
}, b = /* @__PURE__ */ d(I, [["styles", [S]], ["__scopeId", "data-v-4d470a76"]]), P = (t) => (h("data-v-5930fc58"), t = t(), y(), t), B = /* @__PURE__ */ P(() => /* @__PURE__ */ x("div", { class: "body" }, "...", -1)), C = /* @__PURE__ */ c({
  __name: "admin",
  setup(t) {
    return (o, e) => (i(), m(b, null, {
      default: v(() => [
        B
      ]),
      _: 1
    }));
  }
}), E = "", D = /* @__PURE__ */ d(C, [["styles", [E]], ["__scopeId", "data-v-5930fc58"]]);
export {
  D as default
};
