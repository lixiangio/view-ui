import { Input as N, Select as b, Form as I, Tag as C, Switch as T, Slider as w } from "/libs/viewui.js";
import { resolveComponent as n, openBlock as u, createElementBlock as m, createVNode as t, createElementVNode as o, pushScopeId as v, popScopeId as $, unref as p, withCtx as a, createTextVNode as _, Fragment as g, toDisplayString as F, reactive as x } from "/libs/vue.js";
import { _ as h } from "../index2.js";
import "/libs/view.js";
import "/libs/navigator.js";
const A = `.input[data-v-a84e1739]{padding:10px}.input .name[data-v-a84e1739]{padding:10px 5px}.input input[data-v-a84e1739]{border:1px solid #eaeaea}
`, D = {
  components: { Input: N }
}, E = (e) => (v("data-v-a84e1739"), e = e(), $(), e), V = { class: "input" }, k = /* @__PURE__ */ E(() => /* @__PURE__ */ o("textarea", {
  class: "w100",
  rows: "10"
}, null, -1));
function B(e, c, r, f, l, d) {
  const i = n("Navbar"), s = n("Input", !0);
  return u(), m("div", V, [
    t(i, { title: "Input" }),
    o("form", null, [
      t(s, {
        class: "w100",
        type: "text",
        label: "Name",
        placeholder: "name"
      }),
      t(s, {
        class: "w100",
        type: "text",
        label: "Email",
        placeholder: "email"
      }),
      t(s, {
        class: "w100",
        type: "password",
        label: "Password",
        placeholder: "password",
        autocomplete: "current-password",
        required: ""
      }),
      t(s, {
        class: "w100",
        type: "number",
        label: "Age"
      }),
      t(s, {
        class: "w100",
        type: "number",
        label: "Quantity",
        range: ""
      }),
      t(s, {
        type: "radio",
        label: "sex"
      }),
      k
    ])
  ]);
}
const q = /* @__PURE__ */ h(D, [["render", B], ["styles", [A]], ["__scopeId", "data-v-a84e1739"]]), z = `.select[data-v-13cac295]{padding:10px}
`, O = (e) => (v("data-v-13cac295"), e = e(), $(), e), P = { class: "select" }, Q = /* @__PURE__ */ _("Dog"), R = /* @__PURE__ */ _("Cat"), j = /* @__PURE__ */ _("Audi"), G = /* @__PURE__ */ O(() => /* @__PURE__ */ o("br", null, null, -1)), H = {
  __name: "select",
  setup(e) {
    const { Option: c } = b;
    return (r, f) => {
      const l = n("Navbar");
      return u(), m("div", P, [
        t(l, { title: "Select" }),
        t(p(b), {
          class: "w100",
          name: "cars"
        }, {
          default: a(() => [
            t(p(c), { value: "dog" }, {
              default: a(() => [
                Q
              ]),
              _: 1
            }),
            t(p(c), { value: "cat" }, {
              default: a(() => [
                R
              ]),
              _: 1
            }),
            t(p(c), { value: "audi" }, {
              default: a(() => [
                j
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        G
      ]);
    };
  }
}, J = /* @__PURE__ */ h(H, [["styles", [z]], ["__scopeId", "data-v-13cac295"]]), K = "", L = {
  components: { Form: I, Tag: C },
  data() {
    return {
      tag: ["Dog", "Cat"]
    };
  }
}, M = { class: "tag" };
function U(e, c, r, f, l, d) {
  const i = n("Navbar"), s = n("Tag", !0), y = n("Form");
  return u(), m("div", M, [
    t(i, { title: "Tag" }),
    t(y, null, {
      default: a(() => [
        t(s, { value: l.tag }, null, 8, ["value"])
      ]),
      _: 1
    })
  ]);
}
const W = /* @__PURE__ */ h(L, [["render", U], ["styles", [K]], ["__scopeId", "data-v-d28edd9c"]]), X = {
  components: { Switch: T },
  data() {
    return { value: !0 };
  },
  methods: {
    confirm(e) {
      this.value = !e;
    }
  }
}, Y = { class: "p10" }, Z = { class: "p10" };
function tt(e, c, r, f, l, d) {
  const i = n("Navbar"), s = n("Switch", !0);
  return u(), m(g, null, [
    t(i, { title: "Switch" }),
    o("div", Y, [
      t(s, {
        value: l.value,
        onConfirm: d.confirm
      }, null, 8, ["value", "onConfirm"])
    ]),
    o("div", Z, F(l.value), 1)
  ], 64);
}
const et = /* @__PURE__ */ h(X, [["render", tt]]), st = `.slider[data-v-f0384d93]{padding:20px 10px}.slider .name[data-v-f0384d93]{margin-bottom:50px;font-size:15px}
`, S = (e) => (v("data-v-f0384d93"), e = e(), $(), e), ot = { class: "slider" }, nt = /* @__PURE__ */ S(() => /* @__PURE__ */ o("div", { class: "name" }, "Single", -1)), at = { class: "slider" }, ct = /* @__PURE__ */ S(() => /* @__PURE__ */ o("div", { class: "name" }, "Range", -1)), lt = {
  __name: "slider",
  setup(e) {
    const c = x([0, 100]), r = x([0, 100]);
    return (f, l) => {
      const d = n("Navbar");
      return u(), m(g, null, [
        t(d, { title: "Slider" }),
        o("div", ot, [
          nt,
          t(p(w), {
            value: c,
            bubble: ""
          }, null, 8, ["value"])
        ]),
        o("div", at, [
          ct,
          t(p(w), {
            value: r,
            bubble: "",
            range: ""
          }, null, 8, ["value"])
        ])
      ], 64);
    };
  }
}, _t = /* @__PURE__ */ h(lt, [["styles", [st]], ["__scopeId", "data-v-f0384d93"]]), it = {
  pages: { select: J, input: q, switch: et, tag: W, slider: _t }
}, rt = { class: "items" }, dt = /* @__PURE__ */ _(" Input "), pt = /* @__PURE__ */ o("i", { class: "ficon-right" }, null, -1), ut = /* @__PURE__ */ _(" Tag "), mt = /* @__PURE__ */ o("i", { class: "ficon-right" }, null, -1), ht = /* @__PURE__ */ _(" Slider "), ft = /* @__PURE__ */ o("i", { class: "ficon-right" }, null, -1), vt = /* @__PURE__ */ _(" Select "), $t = /* @__PURE__ */ o("i", { class: "ficon-right" }, null, -1), gt = /* @__PURE__ */ _(" Switch "), bt = /* @__PURE__ */ o("i", { class: "ficon-right" }, null, -1);
function wt(e, c, r, f, l, d) {
  const i = n("Navbar"), s = n("A");
  return u(), m(g, null, [
    t(i, { title: "Form" }),
    o("div", rt, [
      t(s, {
        class: "item",
        href: "components/form/input"
      }, {
        default: a(() => [
          dt,
          pt
        ]),
        _: 1
      }),
      t(s, {
        class: "item",
        href: "components/form/tag"
      }, {
        default: a(() => [
          ut,
          mt
        ]),
        _: 1
      }),
      t(s, {
        class: "item",
        href: "components/form/slider"
      }, {
        default: a(() => [
          ht,
          ft
        ]),
        _: 1
      }),
      t(s, {
        class: "item",
        href: "components/form/select"
      }, {
        default: a(() => [
          vt,
          $t
        ]),
        _: 1
      }),
      t(s, {
        class: "item",
        href: "components/form/switch"
      }, {
        default: a(() => [
          gt,
          bt
        ]),
        _: 1
      })
    ])
  ], 64);
}
const Ct = /* @__PURE__ */ h(it, [["render", wt]]);
export {
  Ct as default
};
