import { defineComponent as l, ref as c, onMounted as f, openBlock as p, createElementBlock as u, withModifiers as d, unref as s, renderSlot as m } from "/libs/vue.js";
import v, { events as _ } from "/libs/view.js";
import w, { MaskStyle as y } from "/libs/pointer.js";
import { appsState as i, overview as h, controllerSwitch as a } from "/libs/state.js";
const k = /* @__PURE__ */ l({
  __name: "float",
  setup(r) {
    const t = c();
    return f(() => {
      const e = new w(t.value);
      e.on("lock", () => {
        e.dir === "X" ? i.value = !0 : i.value === !0 && (h.value = !0, y.cursor = "col-resize", _.emit("sidebar.switch", !1)), e.switch(v.appsPointer);
      });
    }), (e, o) => (p(), u("main", {
      ref_key: "el",
      ref: t,
      onContextmenu: o[0] || (o[0] = d(
        (...n) => s(a) && s(a)(...n),
        ["prevent"]
      ))
    }, [
      m(e.$slots, "default", {}, void 0, !0)
    ], 544));
  }
}), x = `main[data-v-e537a4d2]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;user-select:none}
`, b = (r, t) => {
  const e = r.__vccOpts || r;
  for (const [o, n] of t)
    e[o] = n;
  return e;
}, C = /* @__PURE__ */ b(k, [["styles", [x]], ["__scopeId", "data-v-e537a4d2"]]);
export {
  C as default
};
