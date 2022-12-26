import { defineCustomElement as n, openBlock as a, createElementBlock as r, createElementVNode as d } from "/demo/libs/vue.js";
const _ = `.shadow{width:100%;padding:5px}.shadow .title{color:#fc0000;text-align:center}
`, l = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [s, c] of o)
    e[s] = c;
  return e;
}, i = n({}), h = { class: "shadow full" }, p = /* @__PURE__ */ d("h3", { class: "title" }, "Shadow DOM", -1), f = [
  p
];
function m(t, o, e, s, c, u) {
  return a(), r("div", h, f);
}
const x = /* @__PURE__ */ l(i, [["render", m], ["styles", [_]]]);
export {
  x as default
};
