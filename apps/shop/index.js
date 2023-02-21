import { defineComponent as g, reactive as v, ref as y, onMounted as k, openBlock as t, createElementBlock as a, createVNode as l, unref as d, withCtx as c, Fragment as p, renderList as f, toDisplayString as u, pushScopeId as F, popScopeId as b, createElementVNode as m } from "/libs/vue.js";
import { Scroll as x } from "/libs/components.js";
import { Lang as w } from "/libs/view.js";
import { message as X } from "/libs/viewui.js";
import E, { isTouch as z } from "/libs/pointer.js";
import { appsState as _ } from "/libs/state.js";
const h = (n) => (F("data-v-4f6a2da1"), n = n(), b(), n), S = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", {
  class: "header center",
  center: ""
}, "Logo", -1)), B = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", { class: "title" }, "A", -1)), C = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", { class: "title" }, "B", -1)), I = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", { class: "title" }, "C", -1)), j = {}, A = /* @__PURE__ */ g({
  ...j,
  __name: "index",
  setup(n) {
    const s = v([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]), i = y();
    return k(() => {
      X.warning(
        w({
          en: "Fixed Mode, Experimental features!",
          zh: "Fixed \u6A21\u5F0F\uFF0C\u5B9E\u9A8C\u6027\u529F\u80FD\uFF01"
        }),
        5e3
      );
      const r = i.value.parentElement.parentElement, o = new E(i.value);
      z === !1 && (o.on("lock", () => {
        _.value = !1;
      }), o.on("vertical", () => {
        r.scrollBy(0, -o.move);
      })), o.on("click", () => {
        _.value = !1;
      });
    }), (r, o) => (t(), a("main", {
      ref_key: "el",
      ref: i,
      class: "shop"
    }, [
      S,
      l(d(x), {
        class: "scroll-menu",
        direction: "X"
      }, {
        default: c(() => [
          (t(!0), a(p, null, f(s, (e) => (t(), a("div", {
            key: e,
            class: "itemX"
          }, u(e), 1))), 128))
        ]),
        _: 1
      }),
      B,
      l(d(x), {
        class: "scroll-x",
        direction: "X"
      }, {
        default: c(() => [
          (t(!0), a(p, null, f(s, (e) => (t(), a("div", {
            key: e,
            class: "itemX"
          }, u(e), 1))), 128))
        ]),
        _: 1
      }),
      C,
      l(d(x), {
        class: "scroll-x",
        direction: "X"
      }, {
        default: c(() => [
          (t(!0), a(p, null, f(s, (e) => (t(), a("div", {
            key: e,
            class: "itemX"
          }, u(e), 1))), 128))
        ]),
        _: 1
      }),
      I,
      l(d(x), {
        class: "scroll-y",
        direction: "Y"
      }, {
        default: c(() => [
          (t(!0), a(p, null, f(s, (e) => (t(), a("div", {
            key: e,
            class: "itemY"
          }, u(e), 1))), 128))
        ]),
        _: 1
      })
    ], 512));
  }
}), L = `.shop[data-v-4f6a2da1]{user-select:none;padding-right:60px;background:-webkit-linear-gradient(315deg,#ff7878 25%,#647eff)}.shop .header[data-v-4f6a2da1]{font-size:30px;height:100px}.shop .title[data-v-4f6a2da1]{font-size:16px;height:38px;line-height:38px;padding:0 6px}.shop .scroll-menu[data-v-4f6a2da1]{flex:none;display:flex}.shop .scroll-menu .itemX[data-v-4f6a2da1]{display:flex;justify-content:center;align-items:center;flex:none;width:100px;height:32px;margin:0 4px;color:#fff;background:#0000003d;border-radius:6px;font-size:16px}.shop .scroll-x[data-v-4f6a2da1]{flex:none;display:flex}.shop .scroll-x .itemX[data-v-4f6a2da1]{display:flex;justify-content:center;align-items:center;flex:none;width:120px;height:200px;margin:0 4px;background:-webkit-linear-gradient(283deg,#f5f5f53b 65%,#a1a1a1);border-radius:6px;font-size:16px}.shop .scroll-y[data-v-4f6a2da1]{display:flex;flex-direction:column;height:800px}.shop .scroll-y .itemY[data-v-4f6a2da1]{display:flex;justify-content:center;align-items:center;flex:none;height:300px;margin:5px;background:#eeeeee69;border-radius:6px;font-size:16px}
`, Y = (n, s) => {
  const i = n.__vccOpts || n;
  for (const [r, o] of s)
    i[r] = o;
  return i;
}, T = /* @__PURE__ */ Y(A, [["styles", [L]], ["__scopeId", "data-v-4f6a2da1"]]);
export {
  T as default
};
