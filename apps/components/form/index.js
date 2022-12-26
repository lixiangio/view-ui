import { Input as x, Select as $, Form as N, Tag as S, Switch as y, Slider as I } from "/view-ui/libs/viewui.js";
import { resolveComponent as o, openBlock as i, createElementBlock as p, createVNode as t, createElementVNode as n, pushScopeId as g, popScopeId as w, unref as m, withCtx as l, createTextVNode as r, Fragment as v, toDisplayString as C, ref as T } from "/view-ui/libs/vue.js";
import { _ as h } from "../index2.js";
import "/view-ui/libs/view.js";
import "/view-ui/libs/navigator.js";
const F = `.input[data-v-a84e1739]{padding:10px}.input .name[data-v-a84e1739]{padding:10px 5px}.input input[data-v-a84e1739]{border:1px solid #eaeaea}
`, A = {
  components: { Input: x }
}, D = (e) => (g("data-v-a84e1739"), e = e(), w(), e), E = { class: "input" }, V = /* @__PURE__ */ D(() => /* @__PURE__ */ n("textarea", {
  class: "w100",
  rows: "10"
}, null, -1));
function k(e, c, d, u, a, f) {
  const _ = o("Navbar"), s = o("Input", !0);
  return i(), p("div", E, [
    t(_, { title: "Input" }),
    n("form", null, [
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
      V
    ])
  ]);
}
const B = /* @__PURE__ */ h(A, [["render", k], ["styles", [F]], ["__scopeId", "data-v-a84e1739"]]), q = `.select[data-v-13cac295]{padding:10px}
`, O = (e) => (g("data-v-13cac295"), e = e(), w(), e), P = { class: "select" }, Q = /* @__PURE__ */ r("Dog"), j = /* @__PURE__ */ r("Cat"), z = /* @__PURE__ */ r("Audi"), G = /* @__PURE__ */ O(() => /* @__PURE__ */ n("br", null, null, -1)), H = {
  __name: "select",
  setup(e) {
    const { Option: c } = $;
    return (d, u) => {
      const a = o("Navbar");
      return i(), p("div", P, [
        t(a, { title: "Select" }),
        t(m($), {
          class: "w100",
          name: "cars"
        }, {
          default: l(() => [
            t(m(c), { value: "dog" }, {
              default: l(() => [
                Q
              ]),
              _: 1
            }),
            t(m(c), { value: "cat" }, {
              default: l(() => [
                j
              ]),
              _: 1
            }),
            t(m(c), { value: "audi" }, {
              default: l(() => [
                z
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
}, J = /* @__PURE__ */ h(H, [["styles", [q]], ["__scopeId", "data-v-13cac295"]]), K = "", L = {
  components: { Form: N, Tag: S },
  data() {
    return {
      tag: ["Dog", "Cat"]
    };
  }
}, M = { class: "tag" };
function R(e, c, d, u, a, f) {
  const _ = o("Navbar"), s = o("Tag", !0), b = o("Form");
  return i(), p("div", M, [
    t(_, { title: "Tag" }),
    t(b, null, {
      default: l(() => [
        t(s, { value: a.tag }, null, 8, ["value"])
      ]),
      _: 1
    })
  ]);
}
const U = /* @__PURE__ */ h(L, [["render", R], ["styles", [K]], ["__scopeId", "data-v-d28edd9c"]]), W = {
  components: { Switch: y },
  data() {
    return { value: !0 };
  },
  methods: {
    confirm(e) {
      this.value = !e;
    }
  }
}, X = { class: "p10" }, Y = { class: "p10" };
function Z(e, c, d, u, a, f) {
  const _ = o("Navbar"), s = o("Switch", !0);
  return i(), p(v, null, [
    t(_, { title: "Switch" }),
    n("div", X, [
      t(s, {
        value: a.value,
        onConfirm: f.confirm
      }, null, 8, ["value", "onConfirm"])
    ]),
    n("div", Y, C(a.value), 1)
  ], 64);
}
const tt = /* @__PURE__ */ h(W, [["render", Z]]), et = { class: "p10" }, st = {
  __name: "slider",
  setup(e) {
    const c = T(!0);
    return (d, u) => {
      const a = o("Navbar");
      return i(), p(v, null, [
        t(a, { title: "Slider" }),
        n("div", et, [
          t(m(I), { value: c.value }, null, 8, ["value"])
        ])
      ], 64);
    };
  }
}, ot = {
  pages: { select: J, input: B, switch: tt, tag: U, slider: st }
}, nt = { class: "items" }, at = /* @__PURE__ */ r(" Input "), ct = /* @__PURE__ */ n("i", { class: "ficon-right" }, null, -1), lt = /* @__PURE__ */ r("Select "), _t = /* @__PURE__ */ n("i", { class: "ficon-right" }, null, -1), rt = /* @__PURE__ */ r(" Switch "), it = /* @__PURE__ */ n("i", { class: "ficon-right" }, null, -1), pt = /* @__PURE__ */ r(" Tag "), dt = /* @__PURE__ */ n("i", { class: "ficon-right" }, null, -1);
function ut(e, c, d, u, a, f) {
  const _ = o("Navbar"), s = o("A");
  return i(), p(v, null, [
    t(_, { title: "Form" }),
    n("div", nt, [
      t(s, {
        class: "item",
        href: "components/form/input"
      }, {
        default: l(() => [
          at,
          ct
        ]),
        _: 1
      }),
      t(s, {
        class: "item",
        href: "components/form/select"
      }, {
        default: l(() => [
          lt,
          _t
        ]),
        _: 1
      }),
      t(s, {
        class: "item",
        href: "components/form/switch"
      }, {
        default: l(() => [
          rt,
          it
        ]),
        _: 1
      }),
      t(s, {
        class: "item",
        href: "components/form/tag"
      }, {
        default: l(() => [
          pt,
          dt
        ]),
        _: 1
      })
    ])
  ], 64);
}
const gt = /* @__PURE__ */ h(ot, [["render", ut]]);
export {
  gt as default
};
