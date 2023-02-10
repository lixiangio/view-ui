import B from "/libs/network.js";
import Q, { Langs as X, events as U } from "/libs/view.js";
import { openBlock as r, createElementBlock as d, toDisplayString as u, createCommentVNode as g, renderSlot as D, resolveComponent as f, createBlock as x, withCtx as b, createElementVNode as i, withDirectives as k, mergeProps as I, vModelDynamic as L, normalizeClass as y, withModifiers as N, Fragment as $, renderList as R, Transition as j, normalizeStyle as A, vModelText as P, createVNode as v, h as Z, defineAsyncComponent as ee, vShow as te, createTextVNode as C, pushScopeId as ne, popScopeId as oe } from "/libs/vue.js";
import { Input as ie, Button as se, DialogPage as le } from "/libs/viewui.js";
import "/libs/state.js";
import "/libs/navigator.js";
import re from "/libs/dayjs.js";
const ae = `.v-form-box{position:relative}.v-form-box .v-form-box-header{padding:10px 0 5px 2px;display:block}.v-form-box .v-form-box-header .v-form-box-error{float:right;color:red}
`, _ = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ce = {
  name: "FormBox",
  props: {
    label: String,
    error: String
  }
}, de = { class: "v-form-box" }, ue = {
  key: 0,
  class: "v-form-box-header"
};
function pe(e, t, n, s, o, l) {
  return r(), d("div", de, [
    n.label ? (r(), d("div", ue, u(n.label), 1)) : g("", !0),
    D(e.$slots, "default")
  ]);
}
const V = /* @__PURE__ */ _(ce, [["render", pe], ["styles", [ae]]]), he = {
  name: "InputText",
  emits: ["click"],
  components: { FormBox: V },
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
}, me = { class: "v-input" }, ge = { class: "v-input-before" }, ve = { class: "v-input-after" }, fe = {
  key: 1,
  class: "v-input-unit"
}, be = {
  key: 1,
  class: "v-input-preview"
}, ye = {
  key: 1,
  class: "v-input-preview-label"
}, _e = { class: "v-input-preview-value" }, we = {
  key: 2,
  class: "v-input-preview-unit"
};
function xe(e, t, n, s, o, l) {
  const a = f("FormBox");
  return o.edit ? (r(), x(a, {
    key: 0,
    label: n.label,
    error: o.error
  }, {
    default: b(() => [
      i("div", me, [
        i("div", ge, [
          D(e.$slots, "before")
        ]),
        k(i("input", I({
          "onUpdate:modelValue": t[0] || (t[0] = (c) => o.input = c)
        }, e.$attrs), null, 16), [
          [L, o.input]
        ]),
        i("div", ve, [
          D(e.$slots, "after", {}, () => [
            n.icon ? (r(), d("i", {
              key: 0,
              class: y(n.icon)
            }, null, 2)) : g("", !0),
            n.unit ? (r(), d("span", fe, u(n.unit), 1)) : g("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : n.value ? (r(), d("div", be, [
    n.icon ? (r(), d("i", {
      key: 0,
      class: y(n.icon)
    }, null, 2)) : o.showLabel ? (r(), d("span", ye, u(o.showLabel) + "\uFF1A", 1)) : g("", !0),
    i("span", _e, u(n.value), 1),
    n.unit ? (r(), d("span", we, u(n.unit), 1)) : g("", !0)
  ])) : g("", !0);
}
const H = /* @__PURE__ */ _(he, [["render", xe]]), O = {
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
const ke = `.v-date-show .vicon:hover,.v-date-days li:hover,.v-date-days li.v-date-select{color:var(--v-main-background)}.v-date-days .v-date-prominent span{background-color:var(--v-main-background)}
`, De = {
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
      const c = this.nweDate(e, t), h = c.getDay() || 7;
      c.setMilliseconds(-1);
      const w = c.getDate();
      let M = 6;
      h !== 1 && (M = h - 2);
      const p = [];
      for (let m = w - M; m <= w; m++)
        p.push({
          date: m,
          class: "v-date-prev-month"
        });
      const z = this.nweDate(e, t + 1);
      z.setMilliseconds(-1);
      const K = z.getDate();
      for (let m = 1; m <= K; m++) {
        const S = { date: m };
        m === a && e === o && t === l && (S.class = "v-date-select"), m === this.setDay && e === this.setYear && t === this.setMonth && (S.class = "v-date-prominent"), p.push(S);
      }
      const Y = 42 - p.length;
      if (Y)
        for (let m = 1; m <= Y; m++)
          p.push({
            date: m,
            class: "v-date-next-month"
          });
      const F = [];
      for (let m = 0; m < p.length; m += 7) {
        const S = p.slice(m, m + 7);
        F.push(S);
      }
      this.dates = F;
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
}, Ce = { class: "v-date-show" }, Se = /* @__PURE__ */ i("div", { class: "v-date-week" }, [
  /* @__PURE__ */ i("span", null, "\u4E00"),
  /* @__PURE__ */ i("span", null, "\u4E8C"),
  /* @__PURE__ */ i("span", null, "\u4E09"),
  /* @__PURE__ */ i("span", null, "\u56DB"),
  /* @__PURE__ */ i("span", null, "\u4E94"),
  /* @__PURE__ */ i("span", null, "\u516D"),
  /* @__PURE__ */ i("span", null, "\u65E5")
], -1);
function $e(e, t, n, s, o, l) {
  return r(), d("div", {
    class: "v-date",
    onClick: t[3] || (t[3] = N(() => {
    }, ["stop"]))
  }, [
    i("div", Ce, [
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
    Se,
    i("div", {
      class: "v-date-days",
      onClick: t[2] || (t[2] = (...a) => l.selectDate && l.selectDate(...a))
    }, [
      (r(!0), d($, null, R(o.dates, (a, c) => (r(), d("ul", {
        class: "v-date-line",
        key: c
      }, [
        (r(!0), d($, null, R(a, (h, w) => (r(), d("li", {
          key: w,
          class: y(h.class)
        }, [
          i("span", null, u(h.date), 1)
        ], 2))), 128))
      ]))), 128))
    ])
  ]);
}
const E = /* @__PURE__ */ _(De, [["render", $e], ["styles", [ke]]]), Pe = `.v-bubble[data-v-780e8aac]{position:fixed;z-index:1000000;display:flex;color:#999;line-height:normal;user-select:none}.v-bubble .v-bubble-content[data-v-780e8aac]{max-width:200px;font-size:12px;line-height:20px;background-color:#fff;border-radius:6px;box-shadow:0 0 3px #0003;overflow:hidden}.v-bubble .v-bubble-arrow[data-v-780e8aac]{position:relative;overflow:hidden}.v-bubble .v-bubble-arrow i[data-v-780e8aac]{display:block;width:8px;height:8px;background-color:#fff;position:absolute;transform:rotate(45deg);box-shadow:0 0 3px #0003}.v-bubble.left .v-bubble-arrow[data-v-780e8aac]{width:8px}.v-bubble.left .v-bubble-arrow i[data-v-780e8aac]{left:-4px}.v-bubble.right[data-v-780e8aac]{flex-direction:row-reverse}.v-bubble.right .v-bubble-arrow[data-v-780e8aac]{width:8px}.v-bubble.right .v-bubble-arrow i[data-v-780e8aac]{left:4px}.v-bubble.top[data-v-780e8aac]{flex-direction:column}.v-bubble.top .v-bubble-arrow[data-v-780e8aac]{height:8px}.v-bubble.top .v-bubble-arrow i[data-v-780e8aac]{top:-4px}.v-bubble.bottom[data-v-780e8aac]{flex-direction:column-reverse}.v-bubble.bottom .v-bubble-arrow[data-v-780e8aac]{height:8px}.v-bubble.bottom .v-bubble-arrow i[data-v-780e8aac]{top:4px}
`, Ve = {
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
    level(e, t) {
      const { left: n, right: s, width: o } = t, l = (this.$el.clientWidth - o) / 2, a = o / 2;
      n < l ? (this.style.left = n + "px", this.arrow = { left: a - 4 + "px" }) : window.innerWidth - s < l && (this.style.right = window.innerWidth - s + "px", this.arrow = { right: a - 4 + "px" });
    },
    vertical(e, t) {
      const { clientHeight: n, clientWidth: s } = this.$el, { top: o, bottom: l, height: a } = t;
      let c;
      o + n < window.innerHeight ? (this.style = { top: `${o}px` }, c = a / 2 - 4 + "px") : (this.style = { top: `${l - n}px` }, c = n - a / 2 - 4 + "px"), this.arrow = { top: c }, e === "R" ? this.style.transformOrigin = `0 ${c}` : this.style.transformOrigin = `${s}px ${c}`;
    },
    top(e) {
      this.level("T", e);
      const { clientHeight: t } = this.$el, { top: n, bottom: s } = e;
      n > t ? (this.direction = "top", this.style.top = n - t - this.gap + "px") : (this.direction = "bottom", this.style.top = s + this.gap + "px");
    },
    bottom(e) {
      this.level("B", e);
      const { clientHeight: t } = this.$el, { top: n, bottom: s } = e;
      window.innerHeight - s > t ? (this.direction = "bottom", this.style.top = s + this.gap + "px") : (this.direction = "top", this.style.top = n - t - this.gap + "px");
    },
    left(e) {
      const { right: t, left: n } = e;
      this.vertical("L", e);
      const s = this.$el.clientWidth + this.gap;
      n > s ? (this.direction = "left", this.style.left = n - s + "px") : (this.direction = "right", this.style.left = t + this.gap + "px");
    },
    right(e) {
      this.vertical("R", e);
      const { right: t, left: n } = e, s = this.$el.clientWidth + this.gap;
      t + s < window.innerWidth ? (this.direction = "right", this.style.left = t + this.gap + "px") : (this.direction = "left", this.style.left = n - s + "px");
    },
    display(e) {
      const t = e.getBoundingClientRect(), n = this[this.placement];
      n && n(t);
    }
  },
  mounted() {
    const { $el: e } = this;
    let { parentNode: t } = e;
    this.initParentNode = t, document.body.appendChild(e), this.display(t);
  },
  activated() {
    this.display(this.initParentNode);
  }
}, Me = { class: "v-bubble-content" }, Be = { class: "v-bubble-arrow" };
function Ie(e, t, n, s, o, l) {
  return r(), x(j, {
    name: "scale",
    appear: "",
    onAfterLeave: t[0] || (t[0] = (a) => o.style = {})
  }, {
    default: b(() => [
      i("div", {
        class: y(["v-bubble", [o.direction]]),
        style: A(o.style)
      }, [
        i("div", Me, [
          D(e.$slots, "default", {}, void 0, !0)
        ]),
        i("div", Be, [
          i("i", {
            style: A(o.arrow)
          }, null, 4)
        ])
      ], 6)
    ]),
    _: 3
  });
}
const q = /* @__PURE__ */ _(Ve, [["render", Ie], ["styles", [Pe]], ["__scopeId", "data-v-780e8aac"]]), Le = `.v-date-picker{position:relative;height:38px}
`, Ne = {
  extends: O,
  components: { FormBox: V, Bubble: q },
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
      return re(e).format(this.format);
    },
    change(e) {
      this.ymd = e, this.input = this.setInput(e.join("-")), this.$emit("input", this.input);
    }
  },
  install(e) {
    e.component(this.name, this), e.component(E.name, E);
  }
}, ze = { class: "v-input" }, Ye = ["placeholder"], Fe = /* @__PURE__ */ i("i", { class: "vicon-riqi1" }, null, -1), Ue = {
  key: 1,
  class: "v-input-preview"
}, Re = { class: "v-input-preview-label" }, Ae = { class: "v-input-preview-value" };
function Ee(e, t, n, s, o, l) {
  const a = f("Date", !0), c = f("Bubble"), h = f("FormBox");
  return e.edit ? (r(), x(h, {
    key: 0,
    label: n.label,
    error: e.error
  }, {
    default: b(() => [
      i("div", {
        class: "v-date-picker",
        onClick: t[1] || (t[1] = N((...w) => e.click && e.click(...w), ["stop"]))
      }, [
        i("div", ze, [
          k(i("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (w) => e.input = w),
            placeholder: n.placeholder,
            readonly: ""
          }, null, 8, Ye), [
            [P, e.input]
          ]),
          Fe
        ]),
        e.open ? (r(), x(c, {
          key: 0,
          placement: "bottom"
        }, {
          default: b(() => [
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
  }, 8, ["label", "error"])) : n.value ? (r(), d("div", Ue, [
    i("span", Re, u(n.label) + "\uFF1A", 1),
    i("span", Ae, u(l.setInput(n.value)), 1)
  ])) : g("", !0);
}
const Te = /* @__PURE__ */ _(Ne, [["render", Ee], ["styles", [Le]]]), We = {
  emits: ["click"],
  components: { FormBox: V },
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
}, je = { class: "v-input" }, He = { class: "v-input-before" }, Oe = { class: "v-input-after" }, qe = {
  key: 1,
  class: "v-input-unit"
}, Ge = {
  key: 1,
  class: "v-input-preview"
}, Je = {
  key: 1,
  class: "v-input-preview-label"
}, Ke = { class: "v-input-preview-value" }, Qe = {
  key: 2,
  class: "v-input-preview-unit"
};
function Xe(e, t, n, s, o, l) {
  const a = f("FormBox");
  return o.edit ? (r(), x(a, {
    key: 0,
    label: n.label,
    error: o.error
  }, {
    default: b(() => [
      i("div", je, [
        i("div", He, [
          D(e.$slots, "before")
        ]),
        k(i("input", I({
          "onUpdate:modelValue": t[0] || (t[0] = (c) => o.input = c)
        }, e.$attrs), null, 16), [
          [
            L,
            o.input,
            void 0,
            { number: !0 }
          ]
        ]),
        i("div", Oe, [
          D(e.$slots, "after", {}, () => [
            n.icon ? (r(), d("i", {
              key: 0,
              class: y(n.icon)
            }, null, 2)) : g("", !0),
            n.unit ? (r(), d("span", qe, u(n.unit), 1)) : g("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : n.value ? (r(), d("div", Ge, [
    n.icon ? (r(), d("i", {
      key: 0,
      class: y(n.icon)
    }, null, 2)) : o.showLabel ? (r(), d("span", Je, u(o.showLabel) + "\uFF1A", 1)) : g("", !0),
    i("span", Ke, u(n.value), 1),
    n.unit ? (r(), d("span", Qe, u(n.unit), 1)) : g("", !0)
  ])) : g("", !0);
}
const G = /* @__PURE__ */ _(We, [["render", Xe]]), Ze = `.v-date-range{position:relative;height:38px}.v-date-range .v-date:nth-child(1){border-right:1px solid #ebeef5}
`, et = {
  extends: O,
  components: { InputNumber: G, Bubble: q },
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
      const [c, h] = this.getYMD(new Date());
      e = [c, h];
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
function tt(e, t, n, s, o, l) {
  const a = f("DateRange", !0), c = f("Bubble");
  return r(), d("div", {
    class: "v-date-range",
    onClick: t[4] || (t[4] = N((...h) => e.click && e.click(...h), ["stop"]))
  }, [
    k(i("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (h) => o.input = h),
      type: "text",
      placeholder: "\u5F00\u59CB\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [P, o.input]
    ]),
    k(i("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (h) => o.input = h),
      type: "text",
      placeholder: "\u7ED3\u675F\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [P, o.input]
    ]),
    e.open ? (r(), x(c, {
      key: 0,
      class: "v-date-range-box",
      placement: "bottom"
    }, {
      default: b(() => [
        v(a, {
          value: o.pickerA,
          onChange: t[2] || (t[2] = (h) => l.change("A", h))
        }, null, 8, ["value"]),
        v(a, {
          value: o.pickerB,
          onChange: t[3] || (t[3] = (h) => l.change("B", h))
        }, null, 8, ["value"])
      ]),
      _: 1
    })) : g("", !0)
  ]);
}
const nt = /* @__PURE__ */ _(et, [["render", tt], ["styles", [Ze]]]), ot = `.v-input-range input{width:45%}.v-input-range span{padding:0 10px;line-height:37px}
`, it = {
  emits: ["input"],
  components: { FormBox: V },
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
}, st = { class: "v-input-range" }, lt = ["placeholder"], rt = /* @__PURE__ */ i("span", null, "~", -1), at = ["placeholder"], ct = {
  key: 1,
  class: "v-input-preview"
}, dt = {
  key: 1,
  class: "v-input-preview-label"
}, ut = { class: "v-input-preview-value" }, pt = { class: "v-input-preview-unit" };
function ht(e, t, n, s, o, l) {
  const a = f("FormBox");
  return o.edit ? (r(), x(a, {
    key: 0,
    label: n.label,
    error: o.error
  }, {
    default: b(() => [
      i("div", st, [
        n.icon ? (r(), d("i", {
          key: 0,
          class: y(n.icon)
        }, null, 2)) : g("", !0),
        k(i("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (c) => o.input[0] = c),
          type: "number",
          placeholder: n.placeholder[0],
          onInput: t[1] || (t[1] = (...c) => l.min && l.min(...c))
        }, null, 40, lt), [
          [P, o.input[0]]
        ]),
        rt,
        k(i("input", {
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (c) => o.input[1] = c),
          placeholder: n.placeholder[1],
          onInput: t[3] || (t[3] = (...c) => l.max && l.max(...c))
        }, null, 40, at), [
          [P, o.input[1]]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : (r(), d("div", ct, [
    n.icon ? (r(), d("i", {
      key: 0,
      class: y(n.icon)
    }, null, 2)) : (r(), d("span", dt, u(n.label) + "\uFF1A", 1)),
    i("span", ut, u(n.value[0]) + " - " + u(n.value[1]), 1),
    i("span", pt, u(n.unit), 1)
  ]));
}
const mt = /* @__PURE__ */ _(it, [["render", ht], ["styles", [ot]]]), gt = {
  emits: ["click"],
  components: { FormBox: V },
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
}, vt = { class: "v-input" };
function ft(e, t, n, s, o, l) {
  const a = f("FormBox");
  return r(), x(a, {
    label: n.label,
    error: s.error
  }, {
    default: b(() => [
      i("div", vt, [
        k(i("input", I({
          "onUpdate:modelValue": t[0] || (t[0] = (c) => s.input = c)
        }, e.$attrs), null, 16), [
          [L, s.input]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"]);
}
const bt = /* @__PURE__ */ _(gt, [["render", ft]]), yt = `.v-radio{cursor:pointer;display:inline-block;padding:9px 3px}.v-radio .radio-circular{width:16px;height:16px;border-radius:100%;border:3px solid #d8d8d8;display:inline-block;align-items:center;justify-content:center;transition:all .1s linear}.v-radio .radio-highlight{border:5px solid var(--v-active-color)}.v-radio .radio-label{padding:0 5px}
`, _t = {
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
}, wt = { class: "radio-label" };
function xt(e, t, n, s, o, l) {
  return r(), d("div", {
    class: "v-radio",
    onClick: t[0] || (t[0] = (...a) => l.click && l.click(...a))
  }, [
    i("div", {
      class: y(["radio-circular", { "radio-highlight": o.status }])
    }, null, 2),
    i("span", wt, [
      D(e.$slots, "default")
    ])
  ]);
}
const kt = /* @__PURE__ */ _(_t, [["render", xt], ["styles", [yt]]]), T = {
  text: H,
  date: Te,
  daterange: nt,
  number: G,
  numberrange: mt,
  password: bt,
  radio: kt
}, Dt = {
  name: "Input",
  render() {
    const { type: e, range: t } = this.$attrs;
    let n = T[e];
    return n ? t !== void 0 && (n = T[e + "range"]) : n = H, Z(n);
  }
}, Ct = `.input-code .button{cursor:pointer;user-select:none;color:#396afe}.input-code .countdown{cursor:pointer;user-select:none;color:gray}
`, St = {
  components: { Input: Dt },
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
}, $t = {
  key: 1,
  class: "countdown"
};
function Pt(e, t, n, s, o, l) {
  const a = f("Input");
  return r(), x(a, {
    class: "input-code",
    label: n.label,
    placeholder: n.placeholder,
    type: "text",
    modelValue: o.mobilePhone,
    "onUpdate:modelValue": t[1] || (t[1] = (c) => o.mobilePhone = c),
    onInput: l.input
  }, {
    after: b(() => [
      o.status ? (r(), d("div", {
        key: 0,
        class: "button",
        onClick: t[0] || (t[0] = (...c) => l.sendCode && l.sendCode(...c))
      }, "\u53D1\u9001\u77ED\u4FE1\u9A8C\u8BC1\u7801")) : (r(), d("div", $t, u(o.count) + "s\u540E\u91CD\u8BD5", 1))
    ]),
    _: 1
  }, 8, ["label", "placeholder", "modelValue", "onInput"]);
}
const Vt = /* @__PURE__ */ _(St, [["render", Pt], ["styles", [Ct]]]), Mt = `.login[data-v-da29dcd7]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;z-index:100000000;width:100%;height:100vh;background-image:url(./image/background01.jpeg);background-repeat:no-repeat;background-size:cover;--login-color: #17a049}.login .login-center[data-v-da29dcd7]{flex:1}.login .login-center .login-main[data-v-da29dcd7]{width:350px;height:520px;background-color:#fff;overflow:hidden;border-radius:15px;box-shadow:0 6px 20px 5px #2878ff1a,0 16px 24px 2px #0000000d}.login .login-center .login-main .logo[data-v-da29dcd7]{display:flex;height:100px;justify-content:center;align-items:center}.login .login-center .login-main .logo i[data-v-da29dcd7]{font-size:50px;color:var(--login-color)}.login .login-center .login-main .login-form[data-v-da29dcd7]{padding:0 18px}.login .login-center .login-main .login-form .login-form-header[data-v-da29dcd7]{flex:none;display:flex;justify-content:space-between}.login .login-center .login-main .login-form .login-form-header h3[data-v-da29dcd7]{cursor:pointer;font-size:18px;padding:12px 0}.login .login-center .login-main .login-form .login-form-header h3.active[data-v-da29dcd7]{color:var(--login-color)}.login .login-center .login-main .login-form .login-form-main[data-v-da29dcd7]{flex:1}.login .login-center .login-main .login-form .login-form-main .sign-with[data-v-da29dcd7]{padding:10px 0}.login .login-center .login-main .login-form .login-form-main .verification-code[data-v-da29dcd7]{padding:15px 0}.login .login-center .login-main .login-form .login-form-main .login-button[data-v-da29dcd7]{width:100%;margin:20px 0 0;padding:12px 0;height:auto;background-color:var(--login-color);color:#fff}.login .login-center .login-main .login-form .login-form-main .forget-password[data-v-da29dcd7]{margin:10px 0 0;display:inline-block}.login .login-center .login-main .login-form .login-form-main .v-input .v-input-after[data-v-da29dcd7]{background:none}.login .login-center .login-main .login-form .login-form-footer[data-v-da29dcd7]{flex:none;margin:0 -8px}.login .login-center .login-main .login-form .login-form-footer .protocol[data-v-da29dcd7]{padding:10px;height:50px}.login .login-center .login-main .login-form .login-form-footer .protocol a[data-v-da29dcd7]{color:var(--login-color)}.login .login-center .login-main .login-form .login-form-footer span[data-v-da29dcd7]{cursor:pointer;user-select:none;margin:5px 10px;font-size:16px}.login .login-footer[data-v-da29dcd7]{height:26px;font-size:12px;text-align:center;color:#fff}
`, { brand: W } = Q.initOptions, Bt = X({
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
    en: W,
    zh: W
  }
}), It = {
  components: {
    Input: ie,
    InputCode: Vt,
    Button: se,
    DialogPage: le,
    Privacy: ee(() => import("../pages/privacy.js"))
  },
  data() {
    this.langs = Bt;
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
      isSendCode: !1,
      open: !0
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
      U.emit("init", ""), this.open = !1, history.pushState({ url: "#" }, "", "#");
    },
    accountRegister() {
      const { error: e, data: t } = {};
      if (e)
        return this.$error(e);
      B.post("tenant/register/account", t).then(this.result).catch((n) => {
        this.$error(n);
      });
    }
  },
  mounted() {
    U.on("login", (e) => (this.open = e, !0));
  }
}, J = (e) => (ne("data-v-da29dcd7"), e = e(), oe(), e), Lt = {
  key: 0,
  class: "login"
}, Nt = { class: "login-center center" }, zt = { class: "login-main" }, Yt = /* @__PURE__ */ J(() => /* @__PURE__ */ i("div", { class: "logo" }, [
  /* @__PURE__ */ i("i", { class: "ficon-tuozhuai" })
], -1)), Ft = { class: "login-form" }, Ut = { class: "login-form-header" }, Rt = {
  key: 0,
  class: "login-form-main"
}, At = {
  class: "forget-password",
  href: ""
}, Et = /* @__PURE__ */ C("Login"), Tt = { class: "sign-with" }, Wt = /* @__PURE__ */ C(" Sign in with "), jt = {
  key: 1,
  class: "login-form-main"
}, Ht = /* @__PURE__ */ C("Registered"), Ot = { class: "login-form-header" }, qt = { class: "active" }, Gt = { class: "login-form-main" }, Jt = /* @__PURE__ */ C("Login"), Kt = { class: "login-form-footer" }, Qt = { class: "protocol" }, Xt = /* @__PURE__ */ C(" Registration means that you accept the "), Zt = /* @__PURE__ */ C(" of the user agreement and "), en = /* @__PURE__ */ J(() => /* @__PURE__ */ i("a", null, "privacy", -1)), tn = /* @__PURE__ */ C(" policy "), nn = { class: "login-footer" };
function on(e, t, n, s, o, l) {
  const a = f("Input"), c = f("Button"), h = f("InputCode"), w = f("Privacy"), M = f("DialogPage");
  return r(), d($, null, [
    v(j, { name: "fade" }, {
      default: b(() => [
        o.open ? (r(), d("div", Lt, [
          i("div", Nt, [
            i("div", zt, [
              Yt,
              i("div", Ft, [
                o.type === "account" ? (r(), d($, { key: 0 }, [
                  i("div", Ut, [
                    i("h3", {
                      onClick: t[0] || (t[0] = (p) => o.mode = "Login"),
                      class: y({ active: o.mode === "Login" })
                    }, u(e.langs.login), 3),
                    i("h3", {
                      onClick: t[1] || (t[1] = (p) => o.mode = "Registered"),
                      class: y({ active: o.mode === "Registered" })
                    }, u(e.langs.registered), 3)
                  ]),
                  o.mode === "Login" ? (r(), d("div", Rt, [
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
                    v(c, {
                      class: "login-button",
                      onClick: l.accountLogin
                    }, {
                      default: b(() => [
                        Et
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    i("div", Tt, [
                      Wt,
                      i("span", {
                        onClick: t[2] || (t[2] = (p) => l.switchLogin("account")),
                        class: y({ active: o.type === "account" })
                      }, u(e.langs.accountNumber) + u(e.langs.login), 3),
                      i("span", {
                        onClick: t[3] || (t[3] = (p) => l.switchLogin("sms")),
                        class: y({ active: o.type === "sms" })
                      }, u(e.langs.sms) + u(e.langs.login), 3)
                    ])
                  ])) : (r(), d("div", jt, [
                    v(h, {
                      class: "w100",
                      label: e.langs.mobilePhoneNumber,
                      placeholder: "\u8F93\u5165\u624B\u673A\u53F7",
                      type: "text",
                      modelValue: o.account.mobilePhone,
                      "onUpdate:modelValue": t[4] || (t[4] = (p) => o.account.mobilePhone = p),
                      onSend: t[5] || (t[5] = (p) => o.isSendCode = !0)
                    }, null, 8, ["label", "modelValue"]),
                    k(v(a, {
                      class: "w100",
                      label: "\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                      placeholder: "\u8F93\u5165\u624B\u673A\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                      type: "text",
                      modelValue: o.account.code,
                      "onUpdate:modelValue": t[6] || (t[6] = (p) => o.account.code = p)
                    }, null, 8, ["modelValue"]), [
                      [te, o.isSendCode]
                    ]),
                    v(a, {
                      class: "w100",
                      label: e.langs.accountNumber,
                      placeholder: "\u8F93\u5165\u8D26\u53F7",
                      type: "text",
                      modelValue: o.account.username,
                      "onUpdate:modelValue": t[7] || (t[7] = (p) => o.account.username = p)
                    }, null, 8, ["label", "modelValue"]),
                    v(a, {
                      class: "w100",
                      label: e.langs.password,
                      placeholder: e.langs.passwordPlaceholder,
                      type: "password",
                      modelValue: o.account.password,
                      "onUpdate:modelValue": t[8] || (t[8] = (p) => o.account.password = p)
                    }, null, 8, ["label", "placeholder", "modelValue"]),
                    v(c, {
                      class: "login-button",
                      onClick: l.accountRegister
                    }, {
                      default: b(() => [
                        Ht
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ], 64)) : o.type === "sms" ? (r(), d($, { key: 1 }, [
                  i("div", Ot, [
                    i("h3", qt, u(e.langs.sms) + " " + u(e.langs.login), 1)
                  ]),
                  i("div", Gt, [
                    v(h, {
                      class: "w100",
                      label: e.langs.mobilePhoneNumber,
                      placeholder: "\u8F93\u5165\u624B\u673A\u53F7",
                      type: "text",
                      modelValue: o.sms.mobilePhone,
                      "onUpdate:modelValue": t[9] || (t[9] = (p) => o.sms.mobilePhone = p)
                    }, null, 8, ["label", "modelValue"]),
                    v(a, {
                      class: "w100",
                      label: "\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                      placeholder: "\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",
                      type: "text",
                      modelValue: o.sms.code,
                      "onUpdate:modelValue": t[10] || (t[10] = (p) => o.sms.code = p)
                    }, null, 8, ["modelValue"]),
                    v(c, {
                      class: "login-button",
                      onClick: l.smsLogin
                    }, {
                      default: b(() => [
                        Jt
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ], 64)) : g("", !0),
                i("div", Kt, [
                  i("div", Qt, [
                    Xt,
                    i("a", {
                      onClick: t[11] || (t[11] = (p) => o.privacy = !0)
                    }, "terms"),
                    Zt,
                    en,
                    tn
                  ])
                ])
              ])
            ])
          ]),
          i("div", nn, [
            i("span", null, u(e.langs.brand), 1)
          ])
        ])) : g("", !0)
      ]),
      _: 1
    }),
    o.privacy ? (r(), x(M, {
      key: 0,
      width: "600px",
      height: "99%",
      onClose: t[12] || (t[12] = (p) => o.privacy = !1)
    }, {
      default: b(() => [
        v(w)
      ]),
      _: 1
    })) : g("", !0)
  ], 64);
}
const pn = /* @__PURE__ */ _(It, [["render", on], ["styles", [Mt]], ["__scopeId", "data-v-da29dcd7"]]);
export {
  _,
  pn as i
};
