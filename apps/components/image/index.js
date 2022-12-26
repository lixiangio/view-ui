import { defineComponent as h, resolveComponent as t, openBlock as c, createElementBlock as _, Fragment as r, createVNode as e, createElementVNode as s, unref as v, withCtx as g, createTextVNode as u } from "/demo/libs/vue.js";
import { Image as $, Images as I } from "/demo/libs/viewui.js";
import { _ as i } from "../index2.js";
import "/demo/libs/view.js";
import "/demo/libs/navigator.js";
const N = { class: "image p10" }, x = /* @__PURE__ */ h({
  __name: "image",
  setup(m) {
    return (l, p) => {
      const n = t("Navbar");
      return c(), _(r, null, [
        e(n, { title: "Image" }),
        s("div", N, [
          e(v($))
        ])
      ], 64);
    };
  }
}), b = "", y = /* @__PURE__ */ i(x, [["styles", [b]], ["__scopeId", "data-v-db3fc276"]]), C = "", V = {
  components: { Images: I },
  data() {
    return {
      images: []
    };
  }
}, k = { class: "p10" };
function A(m, l, p, n, d, f) {
  const a = t("Navbar"), o = t("Images", !0);
  return c(), _(r, null, [
    e(a, { title: "Images" }),
    s("div", k, [
      e(o, { value: d.images }, null, 8, ["value"])
    ])
  ], 64);
}
const B = /* @__PURE__ */ i(V, [["render", A], ["styles", [C]], ["__scopeId", "data-v-5c3f142d"]]), E = {
  pages: { image: y, images: B }
}, w = { class: "items" }, F = /* @__PURE__ */ u(" Image "), T = /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1), j = /* @__PURE__ */ u(" Images "), q = /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1);
function z(m, l, p, n, d, f) {
  const a = t("Navbar"), o = t("A");
  return c(), _(r, null, [
    e(a, { title: "Image" }),
    s("div", w, [
      e(o, {
        class: "item",
        href: "components/image/image"
      }, {
        default: g(() => [
          F,
          T
        ]),
        _: 1
      }),
      e(o, {
        class: "item",
        href: "components/image/images"
      }, {
        default: g(() => [
          j,
          q
        ]),
        _: 1
      })
    ])
  ], 64);
}
const L = /* @__PURE__ */ i(E, [["render", z]]);
export {
  L as default
};
