import { defineComponent as s, ref as l, onMounted as f, openBlock as d, createElementBlock as p, withModifiers as c, unref as a, renderSlot as u } from "/view-ui/libs/vue.js";
import m from "/view-ui/libs/view.js";
import _ from "/view-ui/libs/pointer.js";
import { appsState as v, controllerSwitch as i } from "/view-ui/libs/state.js";
const g = /* @__PURE__ */ s({
  __name: "default",
  setup(n) {
    const t = l();
    return f(() => {
      const e = new _(t.value);
      e.on("lock", () => {
        e.dir === "X" && (v.value = !0, e.switch(m.appsPointer));
      });
    }), (e, o) => (d(), p("div", {
      class: "default-main",
      ref_key: "defaultPage",
      ref: t,
      onContextmenu: o[0] || (o[0] = c(
        (...r) => a(i) && a(i)(...r),
        ["prevent"]
      ))
    }, [
      u(e.$slots, "default", {}, void 0, !0)
    ], 544));
  }
}), x = `.default-main[data-v-4d470a76]{position:fixed;top:0;bottom:0;left:0;right:0;padding-top:env(titlebar-area-height,0);display:flex;flex-direction:column;justify-content:space-between;user-select:none}
`, y = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, r] of t)
    e[o] = r;
  return e;
}, b = /* @__PURE__ */ y(g, [["styles", [x]], ["__scopeId", "data-v-4d470a76"]]);
export {
  b as default
};
