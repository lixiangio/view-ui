import { Input as I, Select as S, Form as R, Tag as B, Switch as M } from "/view-ui/libs/viewui.js";
import { resolveComponent as p, openBlock as c, createElementBlock as h, createVNode as n, createElementVNode as l, pushScopeId as y, popScopeId as k, unref as f, withCtx as u, createTextVNode as m, Fragment as _, toDisplayString as x, normalizeClass as E, normalizeStyle as w, renderSlot as T, withModifiers as X, createBlock as z, createCommentVNode as $, renderList as N, h as V, reactive as A } from "/view-ui/libs/vue.js";
import { _ as g } from "../index2.js";
import "/view-ui/libs/view.js";
import "/view-ui/libs/navigator.js";
const F = `.input[data-v-a84e1739]{padding:10px}.input .name[data-v-a84e1739]{padding:10px 5px}.input input[data-v-a84e1739]{border:1px solid #eaeaea}
`, H = {
  components: { Input: I }
}, P = (t) => (y("data-v-a84e1739"), t = t(), k(), t), D = { class: "input" }, O = /* @__PURE__ */ P(() => /* @__PURE__ */ l("textarea", {
  class: "w100",
  rows: "10"
}, null, -1));
function q(t, e, s, a, i, d) {
  const r = p("Navbar"), o = p("Input", !0);
  return c(), h("div", D, [
    n(r, { title: "Input" }),
    l("form", null, [
      n(o, {
        class: "w100",
        type: "text",
        label: "Name",
        placeholder: "name"
      }),
      n(o, {
        class: "w100",
        type: "text",
        label: "Email",
        placeholder: "email"
      }),
      n(o, {
        class: "w100",
        type: "password",
        label: "Password",
        placeholder: "password",
        autocomplete: "current-password",
        required: ""
      }),
      n(o, {
        class: "w100",
        type: "number",
        label: "Age"
      }),
      n(o, {
        class: "w100",
        type: "number",
        label: "Quantity",
        range: ""
      }),
      n(o, {
        type: "radio",
        label: "sex"
      }),
      O
    ])
  ]);
}
const Q = /* @__PURE__ */ g(H, [["render", q], ["styles", [F]], ["__scopeId", "data-v-a84e1739"]]), j = `.select[data-v-13cac295]{padding:10px}
`, G = (t) => (y("data-v-13cac295"), t = t(), k(), t), J = { class: "select" }, K = /* @__PURE__ */ m("Dog"), U = /* @__PURE__ */ m("Cat"), Y = /* @__PURE__ */ m("Audi"), Z = /* @__PURE__ */ G(() => /* @__PURE__ */ l("br", null, null, -1)), tt = {
  __name: "select",
  setup(t) {
    const { Option: e } = S;
    return (s, a) => {
      const i = p("Navbar");
      return c(), h("div", J, [
        n(i, { title: "Select" }),
        n(f(S), {
          class: "w100",
          name: "cars"
        }, {
          default: u(() => [
            n(f(e), { value: "dog" }, {
              default: u(() => [
                K
              ]),
              _: 1
            }),
            n(f(e), { value: "cat" }, {
              default: u(() => [
                U
              ]),
              _: 1
            }),
            n(f(e), { value: "audi" }, {
              default: u(() => [
                Y
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        Z
      ]);
    };
  }
}, et = /* @__PURE__ */ g(tt, [["styles", [j]], ["__scopeId", "data-v-13cac295"]]), st = "", it = {
  components: { Form: R, Tag: B },
  data() {
    return {
      tag: ["Dog", "Cat"]
    };
  }
}, ot = { class: "tag" };
function rt(t, e, s, a, i, d) {
  const r = p("Navbar"), o = p("Tag", !0), v = p("Form");
  return c(), h("div", ot, [
    n(r, { title: "Tag" }),
    n(v, null, {
      default: u(() => [
        n(o, { value: i.tag }, null, 8, ["value"])
      ]),
      _: 1
    })
  ]);
}
const at = /* @__PURE__ */ g(it, [["render", rt], ["styles", [st]], ["__scopeId", "data-v-d28edd9c"]]), nt = {
  components: { Switch: M },
  data() {
    return { value: !0 };
  },
  methods: {
    confirm(t) {
      this.value = !t;
    }
  }
}, lt = { class: "p10" }, dt = { class: "p10" };
function ct(t, e, s, a, i, d) {
  const r = p("Navbar"), o = p("Switch", !0);
  return c(), h(_, null, [
    n(r, { title: "Switch" }),
    l("div", lt, [
      n(o, {
        value: i.value,
        onConfirm: d.confirm
      }, null, 8, ["value", "onConfirm"])
    ]),
    l("div", dt, x(i.value), 1)
  ], 64);
}
const ht = /* @__PURE__ */ g(nt, [["render", ct]]);
const C = {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Array,
      default() {
        return [0, 0];
      }
    },
    step: {
      type: Number,
      default: 5
    },
    unit: {
      type: String,
      default: ""
    },
    bubble: {
      type: Boolean,
      default: !0
    }
  }
}, pt = `.v-bubble[data-v-645d64d6]{position:fixed;z-index:1000000;display:flex;color:#999;line-height:normal}.v-bubble .v-bubble-content[data-v-645d64d6]{max-width:200px;font-size:12px;line-height:20px;background-color:#fff;border-radius:6px;box-shadow:0 0 3px #0003;overflow:hidden}.v-bubble .v-bubble-arrow[data-v-645d64d6]{position:relative;overflow:hidden}.v-bubble .v-bubble-arrow i[data-v-645d64d6]{display:block;width:8px;height:8px;background-color:#fff;position:absolute;transform:rotate(45deg);box-shadow:0 0 3px #0003}.v-bubble.left .v-bubble-arrow[data-v-645d64d6]{width:8px}.v-bubble.left .v-bubble-arrow i[data-v-645d64d6]{left:-4px}.v-bubble.right[data-v-645d64d6]{flex-direction:row-reverse}.v-bubble.right .v-bubble-arrow[data-v-645d64d6]{width:8px}.v-bubble.right .v-bubble-arrow i[data-v-645d64d6]{left:4px}.v-bubble.top[data-v-645d64d6]{flex-direction:column}.v-bubble.top .v-bubble-arrow[data-v-645d64d6]{height:8px}.v-bubble.top .v-bubble-arrow i[data-v-645d64d6]{top:-4px}.v-bubble.bottom[data-v-645d64d6]{flex-direction:column-reverse}.v-bubble.bottom .v-bubble-arrow[data-v-645d64d6]{height:8px}.v-bubble.bottom .v-bubble-arrow i[data-v-645d64d6]{top:4px}
`, ut = {
  name: "Bubble",
  props: {
    placement: {
      type: String,
      default: "top"
    },
    gap: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      direction: "top",
      style: {},
      arrow: {}
    };
  },
  methods: {
    level(t) {
      const { targetClientRect: e, $el: s } = this, { left: a, right: i, width: d } = e, r = (s.clientWidth - d) / 2, o = d / 2;
      a < r ? (this.style.left = a + "px", this.arrow = { left: o - 4 + "px" }) : window.innerWidth - i < r && (this.style.right = window.innerWidth - i + "px", this.arrow = { right: o - 4 + "px" });
    },
    vertical(t) {
      const { clientHeight: e, clientWidth: s } = this.$el, { top: a, bottom: i, height: d } = this.targetClientRect;
      let r;
      a + e < window.innerHeight ? (this.style = { top: `${a}px` }, r = d / 2 - 4 + "px") : (this.style = { top: `${i - e}px` }, r = e - d / 2 - 4 + "px"), this.arrow = { top: r }, t === "R" ? this.style.transformOrigin = `0 ${r}` : this.style.transformOrigin = `${s}px ${r}`;
    },
    top() {
      this.level();
      const { clientHeight: t } = this.$el, { top: e, bottom: s } = this.targetClientRect;
      e > t ? (this.direction = "top", this.style.top = e - t - this.gap + "px") : (this.direction = "bottom", this.style.top = s + this.gap + "px");
    },
    bottom() {
      this.level();
      const { clientHeight: t } = this.$el, { top: e, bottom: s } = this.targetClientRect;
      window.innerHeight - s > t ? (this.direction = "bottom", this.style.top = s + this.gap + "px") : (this.direction = "top", this.style.top = e - t - this.gap + "px");
    },
    left() {
      this.vertical("L");
      const { right: t, left: e } = this.targetClientRect, s = this.$el.clientWidth + this.gap;
      e > s ? (this.direction = "left", this.style.left = e - s + "px") : (this.direction = "right", this.style.left = t + this.gap + "px");
    },
    right() {
      this.vertical("R");
      const { right: t, left: e } = this.targetClientRect, s = this.$el.clientWidth + this.gap;
      t + s < window.innerWidth ? (this.direction = "right", this.style.left = t + this.gap + "px") : (this.direction = "left", this.style.left = e - s + "px");
    }
  },
  mounted() {
    this.parentNode = this.$el.parentNode, document.body.appendChild(this.$el);
  },
  activated() {
    this.targetClientRect = this.parentNode.getBoundingClientRect();
    const t = this[this.placement];
    t && t();
  }
}, vt = { class: "v-bubble-content" }, bt = { class: "v-bubble-arrow" };
function mt(t, e, s, a, i, d) {
  return c(), h("div", {
    class: E(["v-bubble", [i.direction]]),
    style: w(i.style)
  }, [
    l("div", vt, [
      T(t.$slots, "default", {}, void 0, !0)
    ]),
    l("div", bt, [
      l("i", {
        style: w(i.arrow)
      }, null, 4)
    ])
  ], 6);
}
const W = /* @__PURE__ */ g(ut, [["render", mt], ["styles", [pt]], ["__scopeId", "data-v-645d64d6"]]), gt = `.v-slider-track{position:relative;width:100%;padding:6px 0}.v-slider-track:hover{cursor:pointer}.v-slider-track:hover .v-slider-baseline{background-color:#ccc}.v-slider-track .v-slider-baseline{height:4px;background-color:#efefef;transition:background .15s ease-in-out;border-radius:3px}.v-slider-track .v-slider-progress{position:absolute;left:0;height:inherit;border-radius:inherit}.v-slider-track .v-slider-progress .v-slider-button{position:absolute;z-index:10;right:0;top:-6px;width:16px;height:16px;margin-right:-7.5px;border-radius:50%;background-color:#188fff;transition:all .25s}.v-slider-track .v-slider-progress .v-slider-button:hover{box-shadow:0 0 0 5px #1890ff33}.v-slider-track .v-slider-progress .v-slider-right{position:absolute;right:0}.v-slider-track .v-bubble-content{background-color:var(--v-main-background)!important}.v-slider-track .v-bubble-arrow-right:after{border-right-color:var(--v-main-background)!important}.v-slider-track .v-bubble-arrow-left:after{border-left-color:var(--v-main-background)!important}.v-slider-track .v-bubble-arrow-top:after{border-top-color:var(--v-main-background)!important}.v-slider-track .v-bubble-arrow-bottom:after{border-bottom-color:var(--v-main-background)!important}
`, ft = {
  name: "Slider",
  extends: C,
  components: { Bubble: W },
  data() {
    return {
      progress: { right: 0 },
      scope: this.value,
      ruler: []
    };
  },
  methods: {
    mousedown(t) {
      const { pageX: e } = t;
      this.lastPageX = e, this.x = e - this.left, this.progress.right = this.clientWidth - this.x + "px", this.scope = this.getScope(this.x), document.body.addEventListener("mousemove", this.mousemove), document.body.addEventListener("mouseup", this.mouseup);
    },
    mousemove(t) {
      if (this.x += t.pageX - this.lastPageX, this.lastPageX = t.pageX, this.x >= 0 && this.x <= this.clientWidth)
        this.progress.right = this.clientWidth - this.x + "px", this.scope = this.getScope(this.x);
      else if (this.x < 0)
        this.progress.right = this.clientWidth + "px", this.scope = [0, 0];
      else if (this.x > this.clientWidth) {
        this.progress.right = "0px";
        const { min: e, max: s } = this;
        this.scope = { min: e, max: s };
      }
    },
    mouseup(t) {
      this.$emit("input", this.scope), this.$emit("change", this.scope), document.body.removeEventListener("mousemove", this.mousemove), document.body.removeEventListener("mouseup", this.mouseup);
    },
    getScope(t) {
      const { min: e, max: s } = this, a = t / this.clientWidth * s;
      return [e, Math.floor(a)];
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { width: t, left: e } = this.$el.getBoundingClientRect();
      this.left = e, this.clientWidth = t;
      const [s, a] = this.value, [i, d] = this.value;
      if (this.x1 = Math.floor(d / a * this.clientWidth), this.progress.right = this.x1 + "px", this.step) {
        const { gauge: r } = this.$refs, o = this.clientWidth / this.step;
        r.style.width = t + o + "px", r.style.marginLeft = `-${o / 2}px`;
        const v = a / this.step;
        for (let b = s; b <= a; b += v)
          this.ruler.push(b);
      }
    });
  }
}, _t = { class: "v-slider" }, xt = /* @__PURE__ */ l("div", { class: "v-slider-button" }, null, -1), wt = { class: "v-slider-right" }, $t = {
  key: 0,
  ref: "gauge",
  class: "v-slider-gauge"
};
function yt(t, e, s, a, i, d) {
  const r = p("Bubble"), o = p("dir");
  return c(), h("div", _t, [
    l("div", {
      class: "v-slider-track",
      onMousedown: e[0] || (e[0] = X((...v) => d.mousedown && d.mousedown(...v), ["stop"]))
    }, [
      n(o, { class: "v-slider-baseline" }, {
        default: u(() => [
          l("div", {
            class: "v-slider-progress vt-main",
            style: w(i.progress)
          }, [
            xt,
            l("div", wt, [
              t.bubble ? (c(), z(r, {
                key: 0,
                class: "v-slider-bubble",
                ref: "bubble",
                gap: 14
              }, {
                default: u(() => [
                  m(x(i.scope[1] + t.unit), 1)
                ]),
                _: 1
              }, 512)) : $("", !0)
            ])
          ], 4)
        ]),
        _: 1
      })
    ], 32),
    t.step ? (c(), h("div", $t, [
      (c(!0), h(_, null, N(i.ruler, (v, b) => (c(), h("span", { key: b }, x(v), 1))), 128))
    ], 512)) : $("", !0)
  ]);
}
const kt = /* @__PURE__ */ g(ft, [["render", yt], ["styles", [gt]]]), St = `.v-slider-range-track[data-v-dadc1786]{width:100%;padding:6px 0}.v-slider-range-track .v-slider-baseline[data-v-dadc1786]{position:relative;width:100%;height:4px;background-color:#efefef;border-radius:3px;transition:background .15s}.v-slider-range-track .v-slider-baseline .v-slider-progress[data-v-dadc1786]{position:absolute;left:0;right:0;height:4px;transition:all .2s}.v-slider-range-track .v-slider-baseline .v-slider-progress .v-slider-button[data-v-dadc1786]{position:absolute;z-index:10;top:-6px;width:15px;height:15px;border-radius:50%;display:inline-block;background-color:#fff;transition:all .25s;transform:translate(-50%)}.v-slider-range-track .v-slider-baseline .v-slider-progress .v-slider-button[data-v-dadc1786]:hover{box-shadow:0 0 0 5px #1890ff33}.v-slider-range-track .v-slider-baseline .v-slider-progress .v-slider-left[data-v-dadc1786]{left:0}.v-slider-range-track .v-slider-baseline .v-slider-progress .v-slider-right[data-v-dadc1786]{left:100%}.v-slider-range-track .v-slider-baseline .v-slider-button[data-v-dadc1786]{border:2px solid var(--v-main-background)}.v-slider-range-track .v-slider-baseline .v-bubble-content[data-v-dadc1786]{background-color:var(--v-main-background)!important}.v-slider-range-track .v-slider-baseline .v-bubble-arrow-right[data-v-dadc1786]:after{border-right-color:var(--v-main-background)!important}.v-slider-range-track .v-slider-baseline .v-bubble-arrow-left[data-v-dadc1786]:after{border-left-color:var(--v-main-background)!important}.v-slider-range-track .v-slider-baseline .v-bubble-arrow-top[data-v-dadc1786]:after{border-top-color:var(--v-main-background)!important}.v-slider-range-track .v-slider-baseline .v-bubble-arrow-bottom[data-v-dadc1786]:after{border-bottom-color:var(--v-main-background)!important}.v-slider-range-track[data-v-dadc1786]:hover{cursor:pointer}.v-slider-range-track:hover .v-slider-baseline[data-v-dadc1786]{background-color:#ccc}
`, Nt = {
  name: "SliderRange",
  extends: C,
  components: { Bubble: W },
  data() {
    return {
      left: 0,
      right: 0,
      scope: this.value,
      ruler: [],
      pageLeft: 0,
      transition: "",
      v1: 0,
      v2: 0
    };
  },
  methods: {
    getScope(t, e) {
      const { max: s } = this, a = t !== 0 ? t / this.width * s : 0, i = e !== 0 ? e / this.width * s : 0;
      return [Math.floor(a), Math.floor(i)];
    },
    mousedown(t) {
      this.transition = "all 0.2s";
      const e = Math.floor(t.pageX - this.pageLeft);
      if (e >= 0 && e <= this.width)
        if (e <= this.p1)
          this.p1 = e, this.static = this.p2;
        else if (e >= this.p2)
          this.p2 = e, this.static = this.p1;
        else {
          const s = Math.floor((this.p2 - this.p1) / 2);
          e - this.p1 < s ? (this.p1 = e, this.static = this.p2) : (this.p2 = e, this.static = this.p1);
        }
      else
        e < 0 ? (this.p1 = 0, this.static = this.p2) : e > this.width && (this.p2 = this.width, this.static = this.p1);
      this.left = this.p1 + "px", this.right = this.width - this.p2 + "px", this.scope = this.getScope(this.p1, this.p2), document.body.addEventListener("mousemove", this.mousemove), document.body.addEventListener("mouseup", this.mouseup);
    },
    mousemove(t) {
      this.transition = "none";
      const e = Math.floor(t.pageX - this.pageLeft);
      e >= 0 && e <= this.width ? e < this.static ? (this.p1 = e, this.p2 = this.static) : (this.p1 = this.static, this.p2 = e) : e < 0 ? (this.p1 = 0, this.p2 = this.static) : e > this.width && (this.p1 = this.static, this.p2 = this.width), this.left = this.p1 + "px", this.right = this.width - this.p2 + "px", this.scope = this.getScope(this.p1, this.p2);
    },
    mouseup(t) {
      this.$emit("change", this.scope), this.$emit("input", this.scope), document.body.removeEventListener("mousemove", this.mousemove), document.body.removeEventListener("mouseup", this.mouseup);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { width: t, left: e } = this.$el.getBoundingClientRect();
      this.pageLeft = e, this.width = t;
      const { min: s, max: a } = this, [i, d] = this.value;
      if (this.p1 = Math.floor((i - s) / a * t), this.p2 = Math.floor((d - s) / a * t), this.left = this.p1 + "px", this.right = t - this.p2 + "px", this.step) {
        const { gauge: r } = this.$refs, o = t / this.step;
        r.style.width = t + o + "px", r.style.marginLeft = `-${o / 2}px`;
        const v = a / this.step;
        for (let b = s; b <= a; b += v)
          this.ruler.push(b);
      }
    });
  }
}, L = (t) => (y("data-v-dadc1786"), t = t(), k(), t), Ct = { class: "v-slider" }, Wt = { class: "v-slider-baseline" }, Lt = /* @__PURE__ */ L(() => /* @__PURE__ */ l("div", { class: "v-slider-button v-slider-left" }, null, -1)), It = /* @__PURE__ */ L(() => /* @__PURE__ */ l("div", { class: "v-slider-button v-slider-right" }, null, -1)), Rt = [
  Lt,
  It
], Bt = {
  key: 0,
  ref: "gauge",
  class: "v-slider-gauge"
};
function Mt(t, e, s, a, i, d) {
  return c(), h("div", Ct, [
    l("div", {
      class: "v-slider-range-track",
      onMousedown: e[0] || (e[0] = (...r) => d.mousedown && d.mousedown(...r))
    }, [
      l("div", Wt, [
        l("div", {
          class: "v-slider-progress vt-main",
          style: w({ left: i.left, right: i.right, transition: i.transition })
        }, Rt, 4)
      ])
    ], 32),
    t.step ? (c(), h("div", Bt, [
      (c(!0), h(_, null, N(i.ruler, (r, o) => (c(), h("span", { key: o }, x(r), 1))), 128))
    ], 512)) : $("", !0)
  ]);
}
const Et = /* @__PURE__ */ g(Nt, [["render", Mt], ["styles", [St]], ["__scopeId", "data-v-dadc1786"]]), Tt = {
  props: { range: Boolean },
  render() {
    const { $attrs: t } = this, { range: e } = t;
    let s;
    return e ? s = Et : s = kt, V(s);
  }
}, Xt = { class: "p10" }, zt = {
  __name: "slider",
  setup(t) {
    const e = A([0, 100]);
    return (s, a) => {
      const i = p("Navbar");
      return c(), h(_, null, [
        n(i, { title: "Slider" }),
        l("div", Xt, [
          n(f(Tt), {
            value: e,
            bubble: !1
          }, null, 8, ["value"])
        ])
      ], 64);
    };
  }
}, Vt = {
  pages: { select: et, input: Q, switch: ht, tag: at, slider: zt }
}, At = { class: "items" }, Ft = /* @__PURE__ */ m(" Input "), Ht = /* @__PURE__ */ l("i", { class: "ficon-right" }, null, -1), Pt = /* @__PURE__ */ m("Select "), Dt = /* @__PURE__ */ l("i", { class: "ficon-right" }, null, -1), Ot = /* @__PURE__ */ m(" Switch "), qt = /* @__PURE__ */ l("i", { class: "ficon-right" }, null, -1), Qt = /* @__PURE__ */ m(" Tag "), jt = /* @__PURE__ */ l("i", { class: "ficon-right" }, null, -1), Gt = /* @__PURE__ */ m(" Slider "), Jt = /* @__PURE__ */ l("i", { class: "ficon-right" }, null, -1);
function Kt(t, e, s, a, i, d) {
  const r = p("Navbar"), o = p("A");
  return c(), h(_, null, [
    n(r, { title: "Form" }),
    l("div", At, [
      n(o, {
        class: "item",
        href: "components/form/input"
      }, {
        default: u(() => [
          Ft,
          Ht
        ]),
        _: 1
      }),
      n(o, {
        class: "item",
        href: "components/form/select"
      }, {
        default: u(() => [
          Pt,
          Dt
        ]),
        _: 1
      }),
      n(o, {
        class: "item",
        href: "components/form/switch"
      }, {
        default: u(() => [
          Ot,
          qt
        ]),
        _: 1
      }),
      n(o, {
        class: "item",
        href: "components/form/tag"
      }, {
        default: u(() => [
          Qt,
          jt
        ]),
        _: 1
      }),
      n(o, {
        class: "item",
        href: "components/form/slider"
      }, {
        default: u(() => [
          Gt,
          Jt
        ]),
        _: 1
      })
    ])
  ], 64);
}
const se = /* @__PURE__ */ g(Vt, [["render", Kt]]);
export {
  se as default
};
