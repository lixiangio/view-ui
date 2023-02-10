import { defineComponent as g, reactive as v, ref as y, onMounted as b, openBlock as t, createElementBlock as n, createVNode as a, unref as c, withCtx as d, Fragment as p, renderList as f, toDisplayString as u, pushScopeId as k, popScopeId as F, createElementVNode as m } from "/libs/vue.js";
import { Scroll as x } from "/libs/components.js";
import { Lang as w } from "/libs/view.js";
import { message as X } from "/libs/viewui.js";
import E, { isTouch as z } from "/libs/pointer.js";
import { appsState as _ } from "/libs/state.js";
const h = (o) => (k("data-v-d1b1337c"), o = o(), F(), o), C = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", {
  class: "header center",
  center: ""
}, "Logo", -1)), S = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", { class: "title" }, "A", -1)), B = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", { class: "title" }, "B", -1)), I = /* @__PURE__ */ h(() => /* @__PURE__ */ m("div", { class: "title" }, "C", -1)), j = {}, A = /* @__PURE__ */ g({
  ...j,
  __name: "index",
  setup(o) {
    const i = v([
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
    ]), r = y();
    return b(() => {
      X.warning(
        w({
          en: "Fixed Mode\uFF0CExperimental features!",
          zh: "Fixed \u6A21\u5F0F\uFF0C\u5B9E\u9A8C\u6027\u529F\u80FD\uFF01"
        }),
        5e3
      );
      const l = r.value.parentElement.parentElement, s = new E(r.value);
      z === !1 && (s.on("lock", () => {
        _.value = !1;
      }), s.on("vertical", () => {
        l.scrollBy(0, -s.move);
      })), s.on("click", () => {
        _.value = !1;
      });
    }), (l, s) => (t(), n("main", {
      ref_key: "el",
      ref: r,
      class: "shop"
    }, [
      C,
      a(c(x), {
        class: "scroll-menu",
        direction: "X"
      }, {
        default: d(() => [
          (t(!0), n(p, null, f(i, (e) => (t(), n("div", {
            key: e,
            class: "itemX"
          }, u(e), 1))), 128))
        ]),
        _: 1
      }),
      S,
      a(c(x), {
        class: "scroll-x",
        direction: "X"
      }, {
        default: d(() => [
          (t(!0), n(p, null, f(i, (e) => (t(), n("div", {
            key: e,
            class: "itemX"
          }, u(e), 1))), 128))
        ]),
        _: 1
      }),
      B,
      a(c(x), {
        class: "scroll-x",
        direction: "X"
      }, {
        default: d(() => [
          (t(!0), n(p, null, f(i, (e) => (t(), n("div", {
            key: e,
            class: "itemX"
          }, u(e), 1))), 128))
        ]),
        _: 1
      }),
      I,
      a(c(x), {
        class: "scroll-y",
        direction: "Y"
      }, {
        default: d(() => [
          (t(!0), n(p, null, f(i, (e) => (t(), n("div", {
            key: e,
            class: "itemY"
          }, u(e), 1))), 128))
        ]),
        _: 1
      })
    ], 512));
  }
}), L = `.shop[data-v-d1b1337c]{user-select:none;padding-right:60px;background:-webkit-linear-gradient(315deg,#ff7878 25%,#647eff)}.shop .header[data-v-d1b1337c]{font-size:30px;height:100px}.shop .title[data-v-d1b1337c]{font-size:16px;height:38px;line-height:38px;padding:0 6px}.shop .scroll-menu[data-v-d1b1337c]{flex:none;display:flex}.shop .scroll-menu .itemX[data-v-d1b1337c]{display:flex;justify-content:center;align-items:center;flex:none;width:100px;height:32px;margin:0 4px;color:#fff;background:#0000003d;border-radius:6px;font-size:16px}.shop .scroll-x[data-v-d1b1337c]{flex:none;display:flex}.shop .scroll-x .itemX[data-v-d1b1337c]{display:flex;justify-content:center;align-items:center;flex:none;width:120px;height:200px;margin:0 4px;background:-webkit-linear-gradient(283deg,#f5f5f53b 65%,#a1a1a1);border-radius:6px;font-size:16px}.shop .scroll-y[data-v-d1b1337c]{display:flex;flex-direction:column;height:800px}.shop .scroll-y .itemY[data-v-d1b1337c]{display:flex;justify-content:center;align-items:center;flex:none;height:300px;margin:5px;background:#eeeeee69;border-radius:6px;font-size:16px}
`, Y = (o, i) => {
  const r = o.__vccOpts || o;
  for (const [l, s] of i)
    r[l] = s;
  return r;
}, T = /* @__PURE__ */ Y(A, [["styles", [L]], ["__scopeId", "data-v-d1b1337c"]]);
export {
  T as default
};
