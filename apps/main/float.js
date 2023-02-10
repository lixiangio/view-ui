import { defineComponent as s, ref as f, onMounted as l, openBlock as p, createElementBlock as c, withModifiers as d, unref as a, renderSlot as u } from "/libs/vue.js";
import m from "/libs/view.js";
import _ from "/libs/pointer.js";
import { appsState as v, controllerSwitch as i } from "/libs/state.js";
const b = /* @__PURE__ */ s({
  __name: "float",
  setup(n) {
    const e = f();
    return l(() => {
      const t = new _(e.value);
      t.on("lock", () => {
        t.dir === "X" && (v.value = !0, t.switch(m.appsPointer));
      });
    }), (t, o) => (p(), c("main", {
      ref_key: "defaultPage",
      ref: e,
      onContextmenu: o[0] || (o[0] = d(
        (...r) => a(i) && a(i)(...r),
        ["prevent"]
      ))
    }, [
      u(t.$slots, "default", {}, void 0, !0)
    ], 544));
  }
}), g = `main[data-v-c3b0b9f6]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;user-select:none}
`, x = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, r] of e)
    t[o] = r;
  return t;
}, P = /* @__PURE__ */ x(b, [["styles", [g]], ["__scopeId", "data-v-c3b0b9f6"]]);
export {
  P as default
};
