import { defineComponent as h, resolveComponent as t, openBlock as c, createElementBlock as _, Fragment as r, createVNode as e, createElementVNode as s, unref as v, reactive as $, withCtx as d, createTextVNode as g } from "/view-ui/libs/vue.js";
import { Image as I, Images as N } from "/view-ui/libs/viewui.js";
import { _ as i } from "../index2.js";
import "/view-ui/libs/view.js";
import "/view-ui/libs/navigator.js";
const b = { class: "image p10" }, x = /* @__PURE__ */ h({
  __name: "image",
  setup(m) {
    return (l, p) => {
      const o = t("Navbar");
      return c(), _(r, null, [
        e(o, { title: "Image" }),
        s("div", b, [
          e(v(I))
        ])
      ], 64);
    };
  }
}), y = "", C = /* @__PURE__ */ i(x, [["styles", [y]], ["__scopeId", "data-v-db3fc276"]]), V = "", k = {
  components: { Images: N },
  setup() {
    return {
      images: $([])
    };
  }
}, A = { class: "p10" };
function B(m, l, p, o, u, f) {
  const a = t("Navbar"), n = t("Images", !0);
  return c(), _(r, null, [
    e(a, { title: "Images" }),
    s("div", A, [
      e(n, { value: o.images }, null, 8, ["value"])
    ])
  ], 64);
}
const E = /* @__PURE__ */ i(k, [["render", B], ["styles", [V]], ["__scopeId", "data-v-bdcf82e1"]]), w = {
  pages: { image: C, images: E }
}, F = { class: "items" }, T = /* @__PURE__ */ g(" Image "), j = /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1), q = /* @__PURE__ */ g(" Images "), z = /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1);
function D(m, l, p, o, u, f) {
  const a = t("Navbar"), n = t("A");
  return c(), _(r, null, [
    e(a, { title: "Image" }),
    s("div", F, [
      e(n, {
        class: "item",
        href: "components/image/image"
      }, {
        default: d(() => [
          T,
          j
        ]),
        _: 1
      }),
      e(n, {
        class: "item",
        href: "components/image/images"
      }, {
        default: d(() => [
          q,
          z
        ]),
        _: 1
      })
    ])
  ], 64);
}
const M = /* @__PURE__ */ i(w, [["render", D]]);
export {
  M as default
};
