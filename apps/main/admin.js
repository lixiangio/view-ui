import { defineComponent as c, ref as l, onMounted as d, openBlock as i, createElementBlock as _, withModifiers as f, unref as s, renderSlot as u, createBlock as m, withCtx as v, pushScopeId as h, popScopeId as y, createElementVNode as b } from "/view-ui/libs/vue.js";
import x from "/view-ui/libs/view.js";
import w from "/view-ui/libs/pointer.js";
import { appsState as g, controllerSwitch as a } from "/view-ui/libs/state.js";
const k = /* @__PURE__ */ c({
  __name: "float",
  setup(t) {
    const o = l();
    return d(() => {
      const e = new w(o.value);
      e.on("lock", () => {
        e.dir === "X" && (g.value = !0, e.switch(x.appsPointer));
      });
    }), (e, n) => (i(), _("main", {
      ref_key: "defaultPage",
      ref: o,
      onContextmenu: n[0] || (n[0] = f(
        (...r) => s(a) && s(a)(...r),
        ["prevent"]
      ))
    }, [
      u(e.$slots, "default", {}, void 0, !0)
    ], 544));
  }
}), I = `main[data-v-c3b0b9f6]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;user-select:none}
`, p = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
}, S = /* @__PURE__ */ p(k, [["styles", [I]], ["__scopeId", "data-v-c3b0b9f6"]]), P = (t) => (h("data-v-2361d6e5"), t = t(), y(), t), B = /* @__PURE__ */ P(() => /* @__PURE__ */ b("div", { class: "body" }, "...", -1)), C = /* @__PURE__ */ c({
  __name: "admin",
  setup(t) {
    return (o, e) => (i(), m(S, null, {
      default: v(() => [
        B
      ]),
      _: 1
    }));
  }
}), E = "", F = /* @__PURE__ */ p(C, [["styles", [E]], ["__scopeId", "data-v-2361d6e5"]]);
export {
  F as default
};
