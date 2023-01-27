import { defineComponent as v, resolveComponent as t, openBlock as c, createElementBlock as _, Fragment as i, createVNode as e, createElementVNode as s, unref as h, reactive as $, withCtx as p, createTextVNode as g } from "/view-ui/libs/vue.js";
import { Image as I, Images as x } from "/view-ui/libs/viewui.js";
import { _ as m } from "../index2.js";
import "/view-ui/libs/view.js";
import "/view-ui/libs/navigator.js";
const N = { class: "image" }, b = /* @__PURE__ */ v({
  __name: "image",
  setup(r) {
    return (d, l) => {
      const a = t("Navbar");
      return c(), _(i, null, [
        e(a, { title: "Image" }),
        s("div", N, [
          e(h(I))
        ])
      ], 64);
    };
  }
}), y = `.image[data-v-5ad0a7ce]{padding:5px}
`, C = /* @__PURE__ */ m(b, [["styles", [y]], ["__scopeId", "data-v-5ad0a7ce"]]), V = `.images[data-v-1d9f688c]{padding:5px}
`, k = {
  components: { Images: x },
  setup() {
    return {
      images: $([])
    };
  }
}, A = { class: "images" };
function B(r, d, l, a, u, f) {
  const o = t("Navbar"), n = t("Images", !0);
  return c(), _(i, null, [
    e(o, { title: "Images" }),
    s("div", A, [
      e(n, { value: a.images }, null, 8, ["value"])
    ])
  ], 64);
}
const E = /* @__PURE__ */ m(k, [["render", B], ["styles", [V]], ["__scopeId", "data-v-1d9f688c"]]), w = {
  pages: { image: C, images: E }
}, F = { class: "items" }, T = /* @__PURE__ */ g(" Image "), j = /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1), q = /* @__PURE__ */ g(" Images "), z = /* @__PURE__ */ s("i", { class: "ficon-right" }, null, -1);
function D(r, d, l, a, u, f) {
  const o = t("Navbar"), n = t("A");
  return c(), _(i, null, [
    e(o, { title: "Image" }),
    s("div", F, [
      e(n, {
        class: "item",
        href: "components/image/image"
      }, {
        default: p(() => [
          T,
          j
        ]),
        _: 1
      }),
      e(n, {
        class: "item",
        href: "components/image/images"
      }, {
        default: p(() => [
          q,
          z
        ]),
        _: 1
      })
    ])
  ], 64);
}
const M = /* @__PURE__ */ m(w, [["render", D]]);
export {
  M as default
};
