import { defineComponent as c, ref as d, onMounted as _, openBlock as l, createElementBlock as u, withModifiers as f, unref as s, renderSlot as m, createBlock as v, withCtx as h, pushScopeId as y, popScopeId as w, createElementVNode as x } from "/libs/vue.js";
import k, { events as S } from "/libs/view.js";
import I, { MaskStyle as b } from "/libs/pointer.js";
import { appsState as a, overview as g, controllerSwitch as i } from "/libs/state.js";
const B = /* @__PURE__ */ c({
  __name: "float",
  setup(t) {
    const o = d();
    return _(() => {
      const e = new I(o.value);
      e.on("lock", () => {
        e.dir === "X" ? a.value = !0 : a.value === !0 && (g.value = !0, b.cursor = "col-resize", S.emit("sidebar.switch", !1)), e.switch(k.appsPointer);
      });
    }), (e, n) => (l(), u("main", {
      ref_key: "el",
      ref: o,
      onContextmenu: n[0] || (n[0] = f(
        (...r) => s(i) && s(i)(...r),
        ["prevent"]
      ))
    }, [
      m(e.$slots, "default", {}, void 0, !0)
    ], 544));
  }
}), C = `main[data-v-e537a4d2]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;user-select:none}
`, p = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, r] of o)
    e[n] = r;
  return e;
}, E = /* @__PURE__ */ p(B, [["styles", [C]], ["__scopeId", "data-v-e537a4d2"]]), M = (t) => (y("data-v-2361d6e5"), t = t(), w(), t), $ = /* @__PURE__ */ M(() => /* @__PURE__ */ x("div", { class: "body" }, "...", -1)), P = /* @__PURE__ */ c({
  __name: "admin",
  setup(t) {
    return (o, e) => (l(), v(E, null, {
      default: h(() => [
        $
      ]),
      _: 1
    }));
  }
}), V = "", O = /* @__PURE__ */ p(P, [["styles", [V]], ["__scopeId", "data-v-2361d6e5"]]);
export {
  O as default
};
