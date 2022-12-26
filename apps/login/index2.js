import B from "/demo/libs/network.js";
import E, { Langs as K, extendsOptions as Q, urls as X, events as Z } from "/demo/libs/view.js";
import { openBlock as r, createElementBlock as c, toDisplayString as u, createCommentVNode as g, renderSlot as D, resolveComponent as b, createBlock as x, withCtx as y, createElementVNode as i, withDirectives as k, mergeProps as N, vModelDynamic as I, normalizeClass as f, withModifiers as L, Fragment as $, renderList as F, normalizeStyle as U, vModelText as V, createVNode as v, h as ee, defineAsyncComponent as te, vShow as ne, createTextVNode as C, pushScopeId as oe, popScopeId as ie } from "/demo/libs/vue.js";
import { Input as se, Button as le, DialogPage as re } from "/demo/libs/viewui.js";
import { open as ae } from "/demo/libs/navigator.js";
import ce from "/demo/libs/dayjs.js";
const de = `.v-form-box{position:relative}.v-form-box .v-form-box-header{padding:10px 0 5px 2px;display:block}.v-form-box .v-form-box-header .v-form-box-error{float:right;color:red}
`, _ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ue = {
  name: "FormBox",
  props: {
    label: String,
    error: String
  }
}, he = { class: "v-form-box" }, pe = {
  key: 0,
  class: "v-form-box-header"
};
function me(e, t, n, s, o, l) {
  return r(), c("div", he, [
    n.label ? (r(), c("div", pe, u(n.label), 1)) : g("", !0),
    D(e.$slots, "default")
  ]);
}
const P = /* @__PURE__ */ _(ue, [["render", me], ["styles", [de]]]), ge = {
  name: "InputText",
  emits: ["click"],
  components: { FormBox: P },
  props: {
    value: String,
    name: String,
    label: String,
    icon: String,
    unit: String
  },
  data() {
    return {
      input: this.value,
      edit: !0,
      showLabel: this.name || this.label,
      error: ""
    };
  },
  methods: {},
  watch: {
    value(e) {
      this.input = e;
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, ve = { class: "v-input" }, be = { class: "v-input-before" }, fe = { class: "v-input-after" }, ye = {
  key: 1,
  class: "v-input-unit"
}, _e = {
  key: 1,
  class: "v-input-preview"
}, we = {
  key: 1,
  class: "v-input-preview-label"
}, xe = { class: "v-input-preview-value" }, ke = {
  key: 2,
  class: "v-input-preview-unit"
};
function De(e, t, n, s, o, l) {
  const a = b("FormBox");
  return o.edit ? (r(), x(a, {
    key: 0,
    label: n.label,
    error: o.error
  }, {
    default: y(() => [
      i("div", ve, [
        i("div", be, [
          D(e.$slots, "before")
        ]),
        k(i("input", N({
          "onUpdate:modelValue": t[0] || (t[0] = (d) => o.input = d)
        }, e.$attrs), null, 16), [
          [I, o.input]
        ]),
        i("div", fe, [
          D(e.$slots, "after", {}, () => [
            n.icon ? (r(), c("i", {
              key: 0,
              class: f(n.icon)
            }, null, 2)) : g("", !0),
            n.unit ? (r(), c("span", ye, u(n.unit), 1)) : g("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : n.value ? (r(), c("div", _e, [
    n.icon ? (r(), c("i", {
      key: 0,
      class: f(n.icon)
    }, null, 2)) : o.showLabel ? (r(), c("span", we, u(o.showLabel) + "\uFF1A", 1)) : g("", !0),
    i("span", xe, u(n.value), 1),
    n.unit ? (r(), c("span", ke, u(n.unit), 1)) : g("", !0)
  ])) : g("", !0);
}
const j = /* @__PURE__ */ _(ge, [["render", De]]), T = {
  data() {
    return { open: !1 };
  },
  methods: {
    click(e) {
      this.open === !1 && (this.open = !0, document.body.addEventListener("click", (t) => this.open = !1, {
        once: !0
      }));
    },
    dateParser(e = "") {
      const t = e.match(/(\d{4})\D(\d{1,2})\D(\d{1,2})/);
      if (t) {
        const [, n, s, o] = t;
        return [Number(n), Number(s), Number(o)];
      } else
        return [];
    },
    formatDate(e, t, n) {
      return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), `${e}\u5E74${t}\u6708${n}`;
    },
    getYMD(e) {
      const t = e.getFullYear(), n = e.getMonth(), s = e.getDate();
      return [t, n + 1, s];
    },
    nweDate(e, t = 0, n = 1) {
      return new Date(e, t - 1, n);
    },
    comparisonYMD(e, t) {
      for (const n in e) {
        const s = e[n], o = t[n];
        if (s > o)
          return !0;
        if (s < o)
          return !1;
      }
    }
  }
};
const Ce = `.v-date-show .vicon:hover,.v-date-days li:hover,.v-date-days li.v-date-select{color:var(--v-main-background)}.v-date-days .v-date-prominent span{background-color:var(--v-main-background)}
`, Se = {
  name: "Date",
  props: {
    value: Array
  },
  data() {
    return {
      date: this.value,
      dates: {},
      year: "",
      month: ""
    };
  },
  methods: {
    getYMD(e) {
      const t = e.getFullYear(), n = e.getMonth(), s = e.getDate();
      return [t, n + 1, s];
    },
    nweDate(e, t = 0, n = 1) {
      return new Date(e, t - 1, n);
    },
    generate(e, t, n) {
      const s = new Date(), [o, l, a] = this.getYMD(s);
      e || (e = o, t = l, n = a, this.$emit("change", [e, t, n])), this.year = e, this.month = t;
      const d = this.nweDate(e, t), p = d.getDay() || 7;
      d.setMilliseconds(-1);
      const w = d.getDate();
      let M = 6;
      p !== 1 && (M = p - 2);
      const h = [];
      for (let m = w - M; m <= w; m++)
        h.push({
          date: m,
          class: "v-date-prev-month"
        });
      const z = this.nweDate(e, t + 1);
      z.setMilliseconds(-1);
      const G = z.getDate();
      for (let m = 1; m <= G; m++) {
        const S = { date: m };
        m === a && e === o && t === l && (S.class = "v-date-select"), m === this.setDay && e === this.setYear && t === this.setMonth && (S.class = "v-date-prominent"), h.push(S);
      }
      const Y = 42 - h.length;
      if (Y)
        for (let m = 1; m <= Y; m++)
          h.push({
            date: m,
            class: "v-date-next-month"
          });
      const R = [];
      for (let m = 0; m < h.length; m += 7) {
        const S = h.slice(m, m + 7);
        R.push(S);
      }
      this.dates = R;
    },
    switchMonth(e) {
      this.monthDate || (this.monthDate = this.nweDate(this.year, this.month));
      const t = this.monthDate.getMonth();
      this.monthDate.setMonth(t + e);
      const n = this.getYMD(this.monthDate);
      this.generate(...n);
    },
    selectDate(e) {
      const { className: t, localName: n, innerText: s } = e.target;
      if (n === "span") {
        t === "v-date-prev-month" ? this.month -= 1 : t === "v-date-next-month" && (this.month += 1), this.currentDate = this.nweDate(this.year, this.month, s), this.monthDate = new Date(this.currentDate);
        const o = this.getYMD(this.currentDate);
        this.setCurrent(...o), this.generate(...o), this.$emit("change", o);
      }
    },
    setCurrent(e, t, n) {
      this.setYear = e, this.setMonth = t, this.setDay = n;
    }
  },
  created() {
    this.setCurrent(...this.date), this.generate(...this.date);
  },
  install(e) {
    e.component(this.name, this);
  }
}, $e = { class: "v-date-show" }, Ve = /* @__PURE__ */ i("div", { class: "v-date-week" }, [
  /* @__PURE__ */ i("span", null, "\u4E00"),
  /* @__PURE__ */ i("span", null, "\u4E8C"),
  /* @__PURE__ */ i("span", null, "\u4E09"),
  /* @__PURE__ */ i("span", null, "\u56DB"),
  /* @__PURE__ */ i("span", null, "\u4E94"),
  /* @__PURE__ */ i("span", null, "\u516D"),
  /* @__PURE__ */ i("span", null, "\u65E5")
], -1);
function Pe(e, t, n, s, o, l) {
  return r(), c("div", {
    class: "v-date",
    onClick: t[3] || (t[3] = L(() => {
    }, ["stop"]))
  }, [
    i("div", $e, [
      i("i", {
        class: "vicon",
        onClick: t[0] || (t[0] = (a) => l.switchMonth(-1))
      }, "\uEB2A"),
      i("span", null, u(o.year) + " \u5E74 " + u(o.month) + " \u6708", 1),
      i("i", {
        class: "vicon",
        onClick: t[1] || (t[1] = (a) => l.switchMonth(1))
      }, "\uE6B7")
    ]),
    Ve,
    i("div", {
      class: "v-date-days",
      onClick: t[2] || (t[2] = (...a) => l.selectDate && l.selectDate(...a))
    }, [
      (r(!0), c($, null, F(o.dates, (a, d) => (r(), c("ul", {
        class: "v-date-line",
        key: d
      }, [
        (r(!0), c($, null, F(a, (p, w) => (r(), c("li", {
          key: w,
          class: f(p.class)
        }, [
          i("span", null, u(p.date), 1)
        ], 2))), 128))
      ]))), 128))
    ])
  ]);
}
const O = /* @__PURE__ */ _(Se, [["render", Pe], ["styles", [Ce]]]), Me = `.v-bubble[data-v-79d1859a]{position:fixed;z-index:1000000;display:flex;color:#999;line-height:normal}.v-bubble .v-bubble-content[data-v-79d1859a]{max-width:200px;font-size:12px;line-height:20px;background-color:#fff;border-radius:6px;box-shadow:0 0 3px #0003;overflow:hidden}.v-bubble .v-bubble-arrow[data-v-79d1859a]{position:relative;overflow:hidden}.v-bubble .v-bubble-arrow i[data-v-79d1859a]{display:block;width:8px;height:8px;background-color:#fff;position:absolute;transform:rotate(45deg);box-shadow:0 0 3px #0003}.v-bubble.left .v-bubble-arrow[data-v-79d1859a]{width:8px}.v-bubble.left .v-bubble-arrow i[data-v-79d1859a]{left:-4px}.v-bubble.right[data-v-79d1859a]{flex-direction:row-reverse}.v-bubble.right .v-bubble-arrow[data-v-79d1859a]{width:8px}.v-bubble.right .v-bubble-arrow i[data-v-79d1859a]{left:4px}.v-bubble.top[data-v-79d1859a]{flex-direction:column}.v-bubble.top .v-bubble-arrow[data-v-79d1859a]{height:8px}.v-bubble.top .v-bubble-arrow i[data-v-79d1859a]{top:-4px}.v-bubble.bottom[data-v-79d1859a]{flex-direction:column-reverse}.v-bubble.bottom .v-bubble-arrow[data-v-79d1859a]{height:8px}.v-bubble.bottom .v-bubble-arrow i[data-v-79d1859a]{top:4px}
`, Be = {
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
    level() {
      const { targetClientRect: e, $el: t } = this, { left: n, right: s, width: o } = e, l = (t.clientWidth - o) / 2, a = o / 2;
      n < l ? (this.style.left = n + "px", this.arrow = { left: a - 4 + "px" }) : window.innerWidth - s < l && (this.style.right = window.innerWidth - s + "px", this.arrow = { right: a - 4 + "px" });
    },
    vertical() {
      const { clientHeight: e } = this.$el, { top: t, bottom: n, height: s } = this.targetClientRect;
      if (t + e < window.innerHeight) {
        this.style.top = `${t}px`;
        const o = s / 2 - 4;
        this.style.transformOrigin = `0 ${o}px`, this.arrow = { top: `${o}px` };
      } else {
        this.style.top = n - e + "px";
        const o = e - s / 2 - 4 + "px";
        this.style.transformOrigin = `0 ${o}`, this.arrow = { top: o };
      }
    },
    top() {
      this.level();
      const { clientHeight: e } = this.$el, { top: t, bottom: n } = this.targetClientRect;
      t > e ? (this.direction = "top", this.style.top = t - e - this.gap + "px") : (this.direction = "bottom", this.style.top = n + this.gap + "px");
    },
    bottom() {
      this.level();
      const { clientHeight: e } = this.$el, { top: t, bottom: n } = this.targetClientRect;
      window.innerHeight - n > e ? (this.direction = "bottom", this.style.top = n + this.gap + "px") : (this.direction = "top", this.style.top = t - e - this.gap + "px");
    },
    right() {
      this.vertical();
      const { right: e, left: t } = this.targetClientRect;
      e + this.$el.clientWidth < window.innerWidth ? (this.direction = "right", this.style.left = e + this.gap + "px") : (this.direction = "left", this.style.left = t - this.$el.clientWidth - this.gap + "px");
    },
    left() {
      this.vertical();
      const { right: e, left: t } = this.targetClientRect;
      console.log(e, t), t > this.$el.clientWidth ? (this.direction = "left", this.style.left = t - this.$el.clientWidth - this.gap + "px") : (this.direction = "right", this.style.left = e + this.gap + "px");
    }
  },
  mounted() {
    this.envNode = this.$el.parentNode, document.body.appendChild(this.$el);
  },
  activated() {
    this.targetClientRect = this.envNode.getBoundingClientRect();
    const e = this[this.placement];
    e && e();
  },
  install(e) {
    e.component(this.name, this);
  }
}, Ne = { class: "v-bubble-content" }, Ie = { class: "v-bubble-arrow" };
function Le(e, t, n, s, o, l) {
  return r(), c("div", {
    class: f(["v-bubble", [o.direction]]),
    style: U(o.style)
  }, [
    i("div", Ne, [
      D(e.$slots, "default", {}, void 0, !0)
    ]),
    i("div", Ie, [
      i("i", {
        style: U(o.arrow)
      }, null, 4)
    ])
  ], 6);
}
const H = /* @__PURE__ */ _(Be, [["render", Le], ["styles", [Me]], ["__scopeId", "data-v-79d1859a"]]), ze = `.v-date-picker{position:relative;height:38px}
`, Ye = {
  extends: T,
  components: { FormBox: P, Bubble: H },
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: "\u9009\u62E9\u65E5\u671F"
    },
    format: {
      type: String,
      default: "YYYY-MM-DD"
    }
  },
  data() {
    const e = {
      ymd: [],
      input: "",
      edit: !0,
      error: ""
    };
    return this.value && (e.ymd = this.dateParser(this.value), e.input = this.setInput(this.value)), e;
  },
  methods: {
    setInput(e) {
      return ce(e).format(this.format);
    },
    change(e) {
      this.ymd = e, this.input = this.setInput(e.join("-")), this.$emit("input", this.input);
    }
  },
  install(e) {
    e.component(this.name, this), e.component(O.name, O);
  }
}, Re = { class: "v-input" }, Fe = ["placeholder"], Ue = /* @__PURE__ */ i("i", { class: "vicon-riqi1" }, null, -1), Oe = {
  key: 1,
  class: "v-input-preview"
}, We = { class: "v-input-preview-label" }, Ae = { class: "v-input-preview-value" };
function Ee(e, t, n, s, o, l) {
  const a = b("Date", !0), d = b("Bubble"), p = b("FormBox");
  return e.edit ? (r(), x(p, {
    key: 0,
    label: n.label,
    error: e.error
  }, {
    default: y(() => [
      i("div", {
        class: "v-date-picker",
        onClick: t[1] || (t[1] = L((...w) => e.click && e.click(...w), ["stop"]))
      }, [
        i("div", Re, [
          k(i("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (w) => e.input = w),
            placeholder: n.placeholder,
            readonly: ""
          }, null, 8, Fe), [
            [V, e.input]
          ]),
          Ue
        ]),
        e.open ? (r(), x(d, {
          key: 0,
          placement: "bottom"
        }, {
          default: y(() => [
            v(a, {
              value: e.ymd,
              onChange: l.change
            }, null, 8, ["value", "onChange"])
          ]),
          _: 1
        })) : g("", !0)
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : n.value ? (r(), c("div", Oe, [
    i("span", We, u(n.label) + "\uFF1A", 1),
    i("span", Ae, u(l.setInput(n.value)), 1)
  ])) : g("", !0);
}
const je = /* @__PURE__ */ _(Ye, [["render", Ee], ["styles", [ze]]]), Te = {
  emits: ["click"],
  components: { FormBox: P },
  props: {
    value: Number,
    readonly: Boolean,
    name: String,
    label: String,
    icon: String,
    unit: String,
    placeholder: String
  },
  data() {
    return {
      input: this.value,
      edit: !0,
      showLabel: this.name || this.label,
      error: ""
    };
  },
  watch: {
    value(e) {
      this.input = e;
    }
  }
}, He = { class: "v-input" }, Je = { class: "v-input-before" }, qe = { class: "v-input-after" }, Ge = {
  key: 1,
  class: "v-input-unit"
}, Ke = {
  key: 1,
  class: "v-input-preview"
}, Qe = {
  key: 1,
  class: "v-input-preview-label"
}, Xe = { class: "v-input-preview-value" }, Ze = {
  key: 2,
  class: "v-input-preview-unit"
};
function et(e, t, n, s, o, l) {
  const a = b("FormBox");
  return o.edit ? (r(), x(a, {
    key: 0,
    label: n.label,
    error: o.error
  }, {
    default: y(() => [
      i("div", He, [
        i("div", Je, [
          D(e.$slots, "before")
        ]),
        k(i("input", N({
          "onUpdate:modelValue": t[0] || (t[0] = (d) => o.input = d)
        }, e.$attrs), null, 16), [
          [
            I,
            o.input,
            void 0,
            { number: !0 }
          ]
        ]),
        i("div", qe, [
          D(e.$slots, "after", {}, () => [
            n.icon ? (r(), c("i", {
              key: 0,
              class: f(n.icon)
            }, null, 2)) : g("", !0),
            n.unit ? (r(), c("span", Ge, u(n.unit), 1)) : g("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : n.value ? (r(), c("div", Ke, [
    n.icon ? (r(), c("i", {
      key: 0,
      class: f(n.icon)
    }, null, 2)) : o.showLabel ? (r(), c("span", Qe, u(o.showLabel) + "\uFF1A", 1)) : g("", !0),
    i("span", Xe, u(n.value), 1),
    n.unit ? (r(), c("span", Ze, u(n.unit), 1)) : g("", !0)
  ])) : g("", !0);
}
const J = /* @__PURE__ */ _(Te, [["render", et]]), tt = `.v-date-range{position:relative;height:38px}.v-date-range .v-date:nth-child(1){border-right:1px solid #ebeef5}
`, nt = {
  extends: T,
  components: { InputNumber: J, Bubble: H },
  props: {
    value: {
      type: Array
    }
  },
  data() {
    let [e, t] = this.value;
    if (e)
      e = this.dateParser(e);
    else {
      const [d, p] = this.getYMD(new Date());
      e = [d, p];
    }
    let [n, s] = e;
    t ? t = this.dateParser(t) : t = [n, s + 1];
    let o, l;
    return e[1] === t[1] ? (o = [e, t], l = [
      [n, s + 1],
      [n, s + 1]
    ]) : (o = [e, [e[0], e[1], 32]], l = [[t[0], t[1], 0], t]), {
      input: [this.formatDate(...e), this.formatDate(...t)],
      pickerA: o,
      pickerB: l
    };
  },
  methods: {
    change(e, t) {
      const n = t.length;
      if (n !== 1) {
        if (n === 2) {
          const [s, o] = t;
          this.comparisonYMD(o, s) ? this["picker" + e] = [s, o] : this["picker" + e] = [o, s], this.open = !1;
        }
      }
    },
    comparisonYMD(e, t) {
      for (let n in e) {
        const s = e[n], o = t[n];
        if (s > o)
          return !0;
        if (s < o)
          return !1;
      }
    }
  }
};
function ot(e, t, n, s, o, l) {
  const a = b("DateRange", !0), d = b("Bubble");
  return r(), c("div", {
    class: "v-date-range",
    onClick: t[4] || (t[4] = L((...p) => e.click && e.click(...p), ["stop"]))
  }, [
    k(i("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (p) => o.input = p),
      type: "text",
      placeholder: "\u5F00\u59CB\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [V, o.input]
    ]),
    k(i("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (p) => o.input = p),
      type: "text",
      placeholder: "\u7ED3\u675F\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [V, o.input]
    ]),
    e.open ? (r(), x(d, {
      key: 0,
      class: "v-date-range-box",
      placement: "bottom"
    }, {
      default: y(() => [
        v(a, {
          value: o.pickerA,
          onChange: t[2] || (t[2] = (p) => l.change("A", p))
        }, null, 8, ["value"]),
        v(a, {
          value: o.pickerB,
          onChange: t[3] || (t[3] = (p) => l.change("B", p))
        }, null, 8, ["value"])
      ]),
      _: 1
    })) : g("", !0)
  ]);
}
const it = /* @__PURE__ */ _(nt, [["render", ot], ["styles", [tt]]]), st = `.v-input-range input{width:45%}.v-input-range span{padding:0 10px;line-height:37px}
`, lt = {
  emits: ["input"],
  components: { FormBox: P },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    placeholder: {
      type: Array,
      default() {
        return ["\u6700\u5C0F\u503C", "\u6700\u5927\u503C"];
      }
    },
    label: String,
    icon: String,
    unit: String
  },
  data() {
    return {
      input: this.value || [],
      edit: !0,
      error: ""
    };
  },
  methods: {
    min() {
      this.input[0] = Number(this.input[0]), this.$emit("input", this.input);
    },
    max() {
      this.input[1] = Number(this.input[1]), this.$emit("input", this.input);
    }
  },
  watch: {
    value(e) {
      this.input = e;
    }
  },
  created() {
  }
}, rt = { class: "v-input-range" }, at = ["placeholder"], ct = /* @__PURE__ */ i("span", null, "~", -1), dt = ["placeholder"], ut = {
  key: 1,
  class: "v-input-preview"
}, ht = {
  key: 1,
  class: "v-input-preview-label"
}, pt = { class: "v-input-preview-value" }, mt = { class: "v-input-preview-unit" };
function gt(e, t, n, s, o, l) {
  const a = b("FormBox");
  return o.edit ? (r(), x(a, {
    key: 0,
    label: n.label,
    error: o.error
  }, {
    default: y(() => [
      i("div", rt, [
        n.icon ? (r(), c("i", {
          key: 0,
          class: f(n.icon)
        }, null, 2)) : g("", !0),
        k(i("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (d) => o.input[0] = d),
          type: "number",
          placeholder: n.placeholder[0],
          onInput: t[1] || (t[1] = (...d) => l.min && l.min(...d))
        }, null, 40, at), [
          [V, o.input[0]]
        ]),
        ct,
        k(i("input", {
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (d) => o.input[1] = d),
          placeholder: n.placeholder[1],
          onInput: t[3] || (t[3] = (...d) => l.max && l.max(...d))
        }, null, 40, dt), [
          [V, o.input[1]]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : (r(), c("div", ut, [
    n.icon ? (r(), c("i", {
      key: 0,
      class: f(n.icon)
    }, null, 2)) : (r(), c("span", ht, u(n.label) + "\uFF1A", 1)),
    i("span", pt, u(n.value[0]) + " - " + u(n.value[1]), 1),
    i("span", mt, u(n.unit), 1)
  ]));
}
const vt = /* @__PURE__ */ _(lt, [["render", gt], ["styles", [st]]]), bt = {
  emits: ["click"],
  components: { FormBox: P },
  props: {
    value: String,
    name: String,
    label: String
  },
  setup(e) {
    return {
      input: e.value,
      edit: !0,
      showLabel: e.name || e.label,
      error: ""
    };
  },
  watch: {
    value(e) {
      this.input = e;
    }
  }
}, ft = { class: "v-input" };
function yt(e, t, n, s, o, l) {
  const a = b("FormBox");
  return r(), x(a, {
    label: n.label,
    error: s.error
  }, {
    default: y(() => [
      i("div", ft, [
        k(i("input", N({
          "onUpdate:modelValue": t[0] || (t[0] = (d) => s.input = d)
        }, e.$attrs), null, 16), [
          [I, s.input]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"]);
}
const _t = /* @__PURE__ */ _(bt, [["render", yt]]), wt = `.v-radio{cursor:pointer;display:inline-block;padding:9px 3px}.v-radio .radio-circular{width:16px;height:16px;border-radius:100%;border:3px solid #d8d8d8;display:inline-block;align-items:center;justify-content:center;transition:all .1s linear}.v-radio .radio-highlight{border:5px solid var(--v-active-color)}.v-radio .radio-label{padding:0 5px}
`, xt = {
  name: "Radio",
  props: ["value", "label"],
  data() {
    return {
      status: this.value == this.label
    };
  },
  methods: {
    click() {
      this.status = !0, this.$emit("input", this.label);
    }
  },
  watch: {
    value(e) {
      e !== this.label && (this.status = !1);
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, kt = { class: "radio-label" };
function Dt(e, t, n, s, o, l) {
  return r(), c("div", {
    class: "v-radio",
    onClick: t[0] || (t[0] = (...a) => l.click && l.click(...a))
  }, [
    i("div", {
      class: f(["radio-circular", { "radio-highlight": o.status }])
    }, null, 2),
    i("span", kt, [
      D(e.$slots, "default")
    ])
  ]);
}
const Ct = /* @__PURE__ */ _(xt, [["render", Dt], ["styles", [wt]]]), W = {
  text: j,
  date: je,
  daterange: it,
  number: J,
  numberrange: vt,
  password: _t,
  radio: Ct
}, St = {
  name: "Input",
  render() {
    const { type: e, range: t } = this.$attrs;
    let n = W[e];
    return n ? t !== void 0 && (n = W[e + "range"]) : n = j, ee(n);
  }
}, $t = `.input-code .button{cursor:pointer;user-select:none;color:#396afe}.input-code .countdown{cursor:pointer;user-select:none;color:gray}
`, Vt = {
  components: { Input: St },
  props: {
    value: String,
    label: String,
    placeholder: String
  },
  data() {
    return {
      mobilePhone: this.value,
      status: !0,
      count: 60
    };
  },
  methods: {
    async sendCode() {
      const { mobilePhone: e } = this, { error: t } = {};
      if (t)
        return this.$error(t);
      await this.$axios.post("sms/code", { mobilePhone: e }).then(({ code: n, error: s }) => {
        if (n)
          return this.$error(s);
        this.status = !1, this.countdown();
      }).catch((n) => {
        this.$error(n);
      }), this.$emit("send");
    },
    input(e) {
      this.$emit("input", e);
    },
    countdown() {
      setTimeout(() => {
        if (--this.count)
          return this.countdown();
        this.count = 60, this.status = !0;
      }, 1e3);
    }
  }
}, Pt = {
  key: 1,
  class: "countdown"
};
function Mt(e, t, n, s, o, l) {
  const a = b("Input");
  return r(), x(a, {
    class: "input-code",
    label: n.label,
    placeholder: n.placeholder,
    type: "text",
    modelValue: o.mobilePhone,
    "onUpdate:modelValue": t[1] || (t[1] = (d) => o.mobilePhone = d),
    onInput: l.input
  }, {
    after: y(() => [
      o.status ? (r(), c("div", {
        key: 0,
        class: "button",
        onClick: t[0] || (t[0] = (...d) => l.sendCode && l.sendCode(...d))
      }, "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801")) : (r(), c("div", Pt, u(o.count) + "s\u540E\u91CD\u8BD5", 1))
    ]),
    _: 1
  }, 8, ["label", "placeholder", "modelValue", "onInput"]);
}
const Bt = /* @__PURE__ */ _(Vt, [["render", Mt], ["styles", [$t]]]), Nt = `.login[data-v-10cd578b]{width:100%;height:100%;background-image:url(./image/background01.jpeg);background-repeat:no-repeat;background-size:cover;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.login .login-center[data-v-10cd578b]{flex:1}.login .login-center .login-main[data-v-10cd578b]{width:350px;height:520px;background-color:#fff;overflow:hidden;border-radius:15px;box-shadow:0 6px 20px 5px #2878ff1a,0 16px 24px 2px #0000000d}.login .login-center .login-main .logo[data-v-10cd578b]{display:flex;height:100px;justify-content:center;align-items:center}.login .login-center .login-main .login-form[data-v-10cd578b]{padding:0 18px}.login .login-center .login-main .login-form .login-form-header[data-v-10cd578b]{flex:none;display:flex;justify-content:space-between}.login .login-center .login-main .login-form .login-form-header h3[data-v-10cd578b]{cursor:pointer;font-size:18px;padding:12px 0}.login .login-center .login-main .login-form .login-form-header h3.active[data-v-10cd578b]{color:#396afe}.login .login-center .login-main .login-form .login-form-main[data-v-10cd578b]{flex:1}.login .login-center .login-main .login-form .login-form-main .sign-with[data-v-10cd578b]{padding:10px 0}.login .login-center .login-main .login-form .login-form-main .verification-code[data-v-10cd578b]{padding:15px 0}.login .login-center .login-main .login-form .login-form-main .login-button[data-v-10cd578b]{width:100%;margin:20px 0 0;padding:12px 0;height:auto;background-color:#396afe;color:#fff}.login .login-center .login-main .login-form .login-form-main .forget-password[data-v-10cd578b]{margin:10px 0 0;display:inline-block}.login .login-center .login-main .login-form .login-form-main .v-input .v-input-after[data-v-10cd578b]{background:none}.login .login-center .login-main .login-form .login-form-footer[data-v-10cd578b]{flex:none;margin:0 -8px}.login .login-center .login-main .login-form .login-form-footer .protocol[data-v-10cd578b]{padding:10px;height:50px}.login .login-center .login-main .login-form .login-form-footer .protocol a[data-v-10cd578b]{color:#396afe}.login .login-center .login-main .login-form .login-form-footer span[data-v-10cd578b]{cursor:pointer;user-select:none;margin:5px 10px;font-size:16px}.login .login-footer[data-v-10cd578b]{height:26px;font-size:12px;text-align:center;color:#fff}
`, { brand: A } = E.initOptions, It = K({
  registered: {
    en: "Registered",
    zh: "\u6CE8\u518C"
  },
  login: {
    en: "Log in",
    zh: "\u767B\u5F55"
  },
  mobilePhoneNumber: {
    en: "Mobile phone number",
    zh: "\u624B\u673A\u53F7"
  },
  merchantAgreement: {
    en: "Merchant agreement",
    zh: "\u7528\u6237\u534F\u8BAE"
  },
  privacyPolicy: {
    en: "Privacy policy",
    zh: "\u9690\u79C1\u653F\u7B56"
  },
  sms: {
    en: "SMS",
    zh: "\u77ED\u4FE1"
  },
  accountNumber: {
    en: "Account",
    zh: "\u8D26\u53F7"
  },
  password: {
    en: "Password",
    zh: "\u5BC6\u7801"
  },
  accountNumberPlaceholder: {
    en: "Enter phone number or email or user name",
    zh: "\u8F93\u5165\u624B\u673A\u53F7\u3001\u90AE\u7BB1\u3001\u7528\u6237\u540D"
  },
  passwordPlaceholder: {
    en: "Enter password",
    zh: "\u8F93\u5165\u5BC6\u7801"
  },
  forgotPassword: {
    en: "Forgot password?",
    zh: "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"
  },
  brand: {
    en: A,
    zh: A
  }
}), Lt = {
  components: {
    Input: se,
    InputCode: Bt,
    Button: le,
    DialogPage: re,
    Privacy: te(() => import("../pages/privacy.js"))
  },
  data() {
    this.langs = It;
    const { bid: e } = localStorage;
    return {
      bid: e,
      type: "account",
      privacy: !1,
      mode: "Login",
      account: {
        username: "viewui",
        password: "viewui"
      },
      sms: {
        mobilePhone: "",
        code: ""
      },
      isSendCode: !1
    };
  },
  methods: {
    sendSms() {
      const { error: e, data: t } = {};
      if (e)
        return this.$error(e);
      B.post("/sms/code", t).then((n) => {
        n.code ? this.$error(n.error) : this.$success("\u77ED\u4FE1\u5DF2\u53D1\u9001");
      }).catch((n) => {
        this.$error(n);
      });
    },
    smsLogin() {
      const { error: e, data: t } = {};
      if (e)
        return this.$error(e);
      B.post("/tenant/login/sms", t).then(this.result).catch(() => this.$error(e));
    },
    switchLogin(e) {
      e === "account" && (this.mode = "Login"), this.type = e;
    },
    accountLogin() {
      const e = Q(X[""]);
      E.initOptions = e, Z.emit("initVive", e), history.pushState({ url: "#" }, "", "#");
    },
    accountRegister() {
      const { error: e, data: t } = {};
      if (e)
        return this.$error(e);
      B.post("tenant/register/account", t).then(this.result).catch((n) => {
        this.$error(n);
      });
    },
    result(e) {
      if (e.error)
        return this.$error(e.error);
      this.$success("\u767B\u5F55\u6210\u529F"), localStorage.clear();
      const { sign: t, user: n, authority: s } = e;
      localStorage.sign = t, localStorage.bid = n.bid, localStorage.user = JSON.stringify(n), localStorage.authority = JSON.stringify(s), ae("");
    }
  }
}, q = (e) => (oe("data-v-10cd578b"), e = e(), ie(), e), zt = { class: "login" }, Yt = { class: "login-center center" }, Rt = { class: "login-main" }, Ft = /* @__PURE__ */ q(() => /* @__PURE__ */ i("div", { class: "logo" }, [
  /* @__PURE__ */ i("svg", {
    t: "1629032783534",
    class: "icon",
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "net://www.w3.org/2000/svg",
    "p-id": "2789",
    width: "60",
    height: "60"
  }, [
    /* @__PURE__ */ i("path", {
      d: "M977.43602 637.096119L559.761194 889.504478V628.078806l250.905473-141.220299-250.905473-139.742885V82.684179l417.674826 250.905473v303.506467z",
      fill: "#169339",
      "p-id": "2790"
    }),
    /* @__PURE__ */ i("path", {
      d: "M463.11801 679.02408V940.449751L45.443184 688.041393V384.534925l417.674826-250.905472v264.431443l-250.905473 139.742885 250.905473 141.220299z",
      fill: "#5008C4",
      "p-id": "2791"
    })
  ])
], -1)), Ut = { class: "login-form" }, Ot = { class: "login-form-header" }, Wt = {
  key: 0,
  class: "login-form-main"
}, At = {
  class: "forget-password",
  href: ""
}, Et = /* @__PURE__ */ C("Login"), jt = { class: "sign-with" }, Tt = /* @__PURE__ */ C(" Sign in with "), Ht = {
  key: 1,
  class: "login-form-main"
}, Jt = /* @__PURE__ */ C("Registered"), qt = { class: "login-form-header" }, Gt = { class: "active" }, Kt = { class: "login-form-main" }, Qt = /* @__PURE__ */ C("Login"), Xt = { class: "login-form-footer" }, Zt = { class: "protocol" }, en = /* @__PURE__ */ C(" Registration means that you accept the "), tn = /* @__PURE__ */ C(" of the user agreement and "), nn = /* @__PURE__ */ q(() => /* @__PURE__ */ i("a", null, "privacy", -1)), on = /* @__PURE__ */ C(" policy "), sn = { class: "login-footer" };
function ln(e, t, n, s, o, l) {
  const a = b("Input"), d = b("Button"), p = b("InputCode"), w = b("Privacy"), M = b("DialogPage");
  return r(), c($, null, [
    i("div", zt, [
      i("div", Yt, [
        i("div", Rt, [
          Ft,
          i("div", Ut, [
            o.type === "account" ? (r(), c($, { key: 0 }, [
              i("div", Ot, [
                i("h3", {
                  onClick: t[0] || (t[0] = (h) => o.mode = "Login"),
                  class: f({ active: o.mode === "Login" })
                }, u(e.langs.login), 3),
                i("h3", {
                  onClick: t[1] || (t[1] = (h) => o.mode = "Registered"),
                  class: f({ active: o.mode === "Registered" })
                }, u(e.langs.registered), 3)
              ]),
              o.mode === "Login" ? (r(), c("div", Wt, [
                v(a, {
                  class: "w100",
                  type: "text",
                  label: e.langs.accountNumber,
                  placeholder: e.langs.accountNumberPlaceholder,
                  value: o.account.username
                }, null, 8, ["label", "placeholder", "value"]),
                v(a, {
                  class: "w100",
                  type: "password",
                  label: e.langs.password,
                  placeholder: e.langs.passwordPlaceholder,
                  value: o.account.password
                }, null, 8, ["label", "placeholder", "value"]),
                i("a", At, u(e.langs.forgotPassword), 1),
                v(d, {
                  class: "login-button",
                  onClick: l.accountLogin
                }, {
                  default: y(() => [
                    Et
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                i("div", jt, [
                  Tt,
                  i("span", {
                    onClick: t[2] || (t[2] = (h) => l.switchLogin("account")),
                    class: f({ active: o.type === "account" })
                  }, u(e.langs.accountNumber) + " " + u(e.langs.login), 3),
                  i("span", {
                    onClick: t[3] || (t[3] = (h) => l.switchLogin("sms")),
                    class: f({ active: o.type === "sms" })
                  }, u(e.langs.sms) + " " + u(e.langs.login), 3)
                ])
              ])) : (r(), c("div", Ht, [
                v(p, {
                  class: "w100",
                  label: e.langs.mobilePhoneNumber,
                  placeholder: "\u8F93\u5165\u624B\u673A\u53F7",
                  type: "text",
                  modelValue: o.account.mobilePhone,
                  "onUpdate:modelValue": t[4] || (t[4] = (h) => o.account.mobilePhone = h),
                  onSend: t[5] || (t[5] = (h) => o.isSendCode = !0)
                }, null, 8, ["label", "modelValue"]),
                k(v(a, {
                  class: "w100",
                  label: "\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                  placeholder: "\u8F93\u5165\u624B\u673A\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                  type: "text",
                  modelValue: o.account.code,
                  "onUpdate:modelValue": t[6] || (t[6] = (h) => o.account.code = h)
                }, null, 8, ["modelValue"]), [
                  [ne, o.isSendCode]
                ]),
                v(a, {
                  class: "w100",
                  label: e.langs.accountNumber,
                  placeholder: "\u8F93\u5165\u8D26\u53F7",
                  type: "text",
                  modelValue: o.account.username,
                  "onUpdate:modelValue": t[7] || (t[7] = (h) => o.account.username = h)
                }, null, 8, ["label", "modelValue"]),
                v(a, {
                  class: "w100",
                  label: e.langs.password,
                  placeholder: e.langs.passwordPlaceholder,
                  type: "password",
                  modelValue: o.account.password,
                  "onUpdate:modelValue": t[8] || (t[8] = (h) => o.account.password = h)
                }, null, 8, ["label", "placeholder", "modelValue"]),
                v(d, {
                  class: "login-button",
                  onClick: l.accountRegister
                }, {
                  default: y(() => [
                    Jt
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]))
            ], 64)) : o.type === "sms" ? (r(), c($, { key: 1 }, [
              i("div", qt, [
                i("h3", Gt, u(e.langs.sms) + " " + u(e.langs.login), 1)
              ]),
              i("div", Kt, [
                v(p, {
                  class: "w100",
                  label: e.langs.mobilePhoneNumber,
                  placeholder: "\u8F93\u5165\u624B\u673A\u53F7",
                  type: "text",
                  modelValue: o.sms.mobilePhone,
                  "onUpdate:modelValue": t[9] || (t[9] = (h) => o.sms.mobilePhone = h)
                }, null, 8, ["label", "modelValue"]),
                v(a, {
                  class: "w100",
                  label: "\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                  placeholder: "\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                  type: "text",
                  modelValue: o.sms.code,
                  "onUpdate:modelValue": t[10] || (t[10] = (h) => o.sms.code = h)
                }, null, 8, ["modelValue"]),
                v(d, {
                  class: "login-button",
                  onClick: l.smsLogin
                }, {
                  default: y(() => [
                    Qt
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ], 64)) : g("", !0),
            i("div", Xt, [
              i("div", Zt, [
                en,
                i("a", {
                  onClick: t[11] || (t[11] = (h) => o.privacy = !0)
                }, "terms"),
                tn,
                nn,
                on
              ])
            ])
          ])
        ])
      ]),
      i("div", sn, [
        i("span", null, u(e.langs.brand), 1)
      ])
    ]),
    o.privacy ? (r(), x(M, {
      key: 0,
      width: "600px",
      height: "99%",
      onClose: t[12] || (t[12] = (h) => o.privacy = !1)
    }, {
      default: y(() => [
        v(w)
      ]),
      _: 1
    })) : g("", !0)
  ], 64);
}
const pn = /* @__PURE__ */ _(Lt, [["render", ln], ["styles", [Nt]], ["__scopeId", "data-v-10cd578b"]]);
export {
  _,
  pn as i
};
