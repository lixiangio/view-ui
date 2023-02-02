import { openBlock as a, createBlock as v, Transition as M, withCtx as _, createElementVNode as l, normalizeClass as f, normalizeStyle as E, renderSlot as b, resolveComponent as y, KeepAlive as z, mergeProps as A, createCommentVNode as p, createElementBlock as u, withModifiers as g, toDisplayString as h, createTextVNode as x, withDirectives as k, vModelDynamic as W, Fragment as w, renderList as B, vModelText as S, createVNode as D, h as P, pushScopeId as V, popScopeId as Y, TransitionGroup as U, vShow as R, withKeys as ae, createApp as re, markRaw as ce, resolveDynamicComponent as ue } from "/view-ui/libs/vue.js";
import de from "/view-ui/libs/dayjs.js";
const m = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [o, n] of t)
    s[o] = n;
  return s;
}, he = {
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
      const { left: s, right: o, width: n } = t, i = (this.$el.clientWidth - n) / 2, r = n / 2;
      s < i ? (this.style.left = s + "px", this.arrow = { left: r - 4 + "px" }) : window.innerWidth - o < i && (this.style.right = window.innerWidth - o + "px", this.arrow = { right: r - 4 + "px" });
    },
    vertical(e, t) {
      const { clientHeight: s, clientWidth: o } = this.$el, { top: n, bottom: i, height: r } = t;
      let c;
      n + s < window.innerHeight ? (this.style = { top: `${n}px` }, c = r / 2 - 4 + "px") : (this.style = { top: `${i - s}px` }, c = s - r / 2 - 4 + "px"), this.arrow = { top: c }, e === "R" ? this.style.transformOrigin = `0 ${c}` : this.style.transformOrigin = `${o}px ${c}`;
    },
    top(e) {
      this.level("T", e);
      const { clientHeight: t } = this.$el, { top: s, bottom: o } = e;
      s > t ? (this.direction = "top", this.style.top = s - t - this.gap + "px") : (this.direction = "bottom", this.style.top = o + this.gap + "px");
    },
    bottom(e) {
      this.level("B", e);
      const { clientHeight: t } = this.$el, { top: s, bottom: o } = e;
      window.innerHeight - o > t ? (this.direction = "bottom", this.style.top = o + this.gap + "px") : (this.direction = "top", this.style.top = s - t - this.gap + "px");
    },
    left(e) {
      const { right: t, left: s } = e;
      this.vertical("L", e);
      const o = this.$el.clientWidth + this.gap;
      s > o ? (this.direction = "left", this.style.left = s - o + "px") : (this.direction = "right", this.style.left = t + this.gap + "px");
    },
    right(e) {
      this.vertical("R", e);
      const { right: t, left: s } = e, o = this.$el.clientWidth + this.gap;
      t + o < window.innerWidth ? (this.direction = "right", this.style.left = t + this.gap + "px") : (this.direction = "left", this.style.left = s - o + "px");
    },
    display(e) {
      const t = e.getBoundingClientRect(), s = this[this.placement];
      s && s(t);
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
}, pe = { class: "v-bubble-content" }, me = { class: "v-bubble-arrow" };
function _e(e, t, s, o, n, i) {
  return a(), v(M, {
    name: "scale",
    appear: "",
    onAfterLeave: t[0] || (t[0] = (r) => n.style = {})
  }, {
    default: _(() => [
      l("div", {
        class: f(["v-bubble", [n.direction]]),
        style: E(n.style)
      }, [
        l("div", pe, [
          b(e.$slots, "default", {}, void 0, !0)
        ]),
        l("div", me, [
          l("i", {
            style: E(n.arrow)
          }, null, 4)
        ])
      ], 6)
    ]),
    _: 3
  });
}
const N = /* @__PURE__ */ m(he, [["render", _e], ["__scopeId", "data-v-780e8aac"]]);
const ve = {
  name: "Tip",
  components: { Bubble: N },
  data() {
    return { open: !1 };
  },
  methods: {
    bubbleMouseleave() {
      this.open = !1;
    },
    close() {
      this.open = !1;
    }
  },
  mounted() {
    if ("ontouchstart" in document)
      return;
    const { parentNode: e } = this.$el;
    e.addEventListener("mouseenter", () => this.open = !0), e.addEventListener("mouseleave", ({ relatedTarget: t }) => {
      if (t) {
        let s = t.parentElement;
        for (; s; ) {
          if (s === this.$el)
            return;
          s = s.parentElement;
        }
      }
      this.open = !1;
    });
  },
  install(e) {
    e.component(this.name, this);
  }
};
function fe(e, t, s, o, n, i) {
  const r = y("Bubble");
  return a(), v(z, null, [
    n.open ? (a(), v(r, A({
      key: 0,
      class: "v-tip"
    }, e.$attrs, { onMouseleave: i.bubbleMouseleave }), {
      default: _(() => [
        b(e.$slots, "default", { close: i.close })
      ]),
      _: 3
    }, 16, ["onMouseleave"])) : p("", !0)
  ], 1024);
}
const Gn = /* @__PURE__ */ m(ve, [["render", fe]]);
const ge = {
  name: "Button",
  emits: ["click"],
  props: {
    size: {
      type: String,
      default: "medium"
    },
    type: {
      type: String,
      default: "button"
    },
    disable: Boolean,
    fab: Boolean
  },
  data() {
    const e = [];
    return e.push(`v-button-${this.size}`), this.fab && e.push("v-button-fab"), this.disable && e.push("v-button-disable"), { cssClass: e };
  },
  methods: {
    click(e) {
      this.disable || this.$emit("click", e);
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, ye = ["type"];
function be(e, t, s, o, n, i) {
  return a(), u("button", {
    class: f(["v-button", n.cssClass]),
    type: s.type,
    onClick: t[0] || (t[0] = g((...r) => i.click && i.click(...r), ["prevent"]))
  }, [
    b(e.$slots, "default")
  ], 10, ye);
}
const G = /* @__PURE__ */ m(ge, [["render", be]]);
const $e = {
  name: "Dialog",
  emits: ["confirm", "close"],
  props: {
    class: String,
    title: String,
    mask: Boolean,
    maskClose: Boolean
  },
  methods: {
    maskClick(e) {
      this.maskClose === !0 && e.target === this.$refs.maskBox && this.$emit("close");
    },
    close() {
      this.$emit("close");
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, ke = {
  key: 0,
  class: "v-dialog-title"
};
function we(e, t, s, o, n, i) {
  return a(), v(M, {
    name: "fade",
    appear: ""
  }, {
    default: _(() => [
      l("div", {
        class: "v-mask",
        ref: "maskBox",
        onClick: t[0] || (t[0] = (...r) => i.maskClick && i.maskClick(...r)),
        onMousedown: t[1] || (t[1] = g(() => {
        }, ["stop"]))
      }, [
        l("div", {
          class: f(["v-dialog col", s.class])
        }, [
          s.title ? (a(), u("div", ke, h(s.title), 1)) : p("", !0),
          b(e.$slots, "default")
        ], 2)
      ], 544)
    ]),
    _: 3
  });
}
const xe = /* @__PURE__ */ m($e, [["render", we]]);
const Be = {
  name: "DialogPage",
  props: {
    title: String,
    icon: String
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  mounted() {
    document.body.appendChild(this.$el);
  },
  install(e) {
    e.component(this.name, this);
  }
}, Ce = { class: "v-dialog-page vertical" }, De = {
  key: 0,
  class: "v-dialog-page-header"
}, Se = { class: "v-dialog-page-main" }, Me = { class: "v-dialog-page-sidebar" };
function Ie(e, t, s, o, n, i) {
  return a(), v(M, {
    name: "fade",
    appear: ""
  }, {
    default: _(() => [
      l("section", {
        class: "v-float-mask",
        ref: "maskBox",
        onMousedown: t[1] || (t[1] = g(() => {
        }, ["stop"]))
      }, [
        l("div", Ce, [
          s.title ? (a(), u("header", De, [
            l("i", {
              class: f(s.icon)
            }, null, 2),
            x(" " + h(s.title), 1)
          ])) : p("", !0),
          l("main", Se, [
            b(e.$slots, "default")
          ]),
          l("aside", Me, [
            b(e.$slots, "sidebar")
          ])
        ]),
        l("i", {
          class: "vicon v-dialog-page-close",
          onClick: t[0] || (t[0] = (...r) => i.close && i.close(...r))
        }, "\uE679")
      ], 544)
    ]),
    _: 3
  });
}
const Jn = /* @__PURE__ */ m(Be, [["render", Ie]]);
const Le = {
  name: "Alert",
  props: {
    type: String
  },
  install(e) {
    e.component(this.name, this);
  }
};
function Fe(e, t, s, o, n, i) {
  return a(), u("div", {
    class: f(["v-alert", s.type || `v-alert-${s.type}`])
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Qn = /* @__PURE__ */ m(Le, [["render", Fe]]);
const Ne = {
  name: "FormBox",
  props: {
    label: String,
    error: String
  }
}, Te = { class: "v-form-box" }, Ee = {
  key: 0,
  class: "v-form-box-header"
};
function Pe(e, t, s, o, n, i) {
  return a(), u("div", Te, [
    s.label ? (a(), u("div", Ee, h(s.label), 1)) : p("", !0),
    b(e.$slots, "default")
  ]);
}
const I = /* @__PURE__ */ m(Ne, [["render", Pe]]), Ae = {
  name: "InputText",
  emits: ["click"],
  components: { FormBox: I },
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
}, Ve = { class: "v-input" }, Ye = { class: "v-input-before" }, Re = { class: "v-input-after" }, We = {
  key: 1,
  class: "v-input-unit"
}, Ue = {
  key: 1,
  class: "v-input-preview"
}, je = {
  key: 1,
  class: "v-input-preview-label"
}, Oe = { class: "v-input-preview-value" }, Xe = {
  key: 2,
  class: "v-input-preview-unit"
};
function Ke(e, t, s, o, n, i) {
  const r = y("FormBox");
  return n.edit ? (a(), v(r, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      l("div", Ve, [
        l("div", Ye, [
          b(e.$slots, "before")
        ]),
        k(l("input", A({
          "onUpdate:modelValue": t[0] || (t[0] = (c) => n.input = c)
        }, e.$attrs), null, 16), [
          [W, n.input]
        ]),
        l("div", Re, [
          b(e.$slots, "after", {}, () => [
            s.icon ? (a(), u("i", {
              key: 0,
              class: f(s.icon)
            }, null, 2)) : p("", !0),
            s.unit ? (a(), u("span", We, h(s.unit), 1)) : p("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : s.value ? (a(), u("div", Ue, [
    s.icon ? (a(), u("i", {
      key: 0,
      class: f(s.icon)
    }, null, 2)) : n.showLabel ? (a(), u("span", je, h(n.showLabel) + "\uFF1A", 1)) : p("", !0),
    l("span", Oe, h(s.value), 1),
    s.unit ? (a(), u("span", Xe, h(s.unit), 1)) : p("", !0)
  ])) : p("", !0);
}
const J = /* @__PURE__ */ m(Ae, [["render", Ke]]), Q = {
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
        const [, s, o, n] = t;
        return [Number(s), Number(o), Number(n)];
      } else
        return [];
    },
    formatDate(e, t, s) {
      return t < 10 && (t = "0" + t), s < 10 && (s = "0" + s), `${e}\u5E74${t}\u6708${s}`;
    },
    getYMD(e) {
      const t = e.getFullYear(), s = e.getMonth(), o = e.getDate();
      return [t, s + 1, o];
    },
    nweDate(e, t = 0, s = 1) {
      return new Date(e, t - 1, s);
    },
    comparisonYMD(e, t) {
      for (const s in e) {
        const o = e[s], n = t[s];
        if (o > n)
          return !0;
        if (o < n)
          return !1;
      }
    }
  }
};
const qe = {
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
      const t = e.getFullYear(), s = e.getMonth(), o = e.getDate();
      return [t, s + 1, o];
    },
    nweDate(e, t = 0, s = 1) {
      return new Date(e, t - 1, s);
    },
    generate(e, t, s) {
      const o = new Date(), [n, i, r] = this.getYMD(o);
      e || (e = n, t = i, s = r, this.$emit("change", [e, t, s])), this.year = e, this.month = t;
      const c = this.nweDate(e, t), d = c.getDay() || 7;
      c.setMilliseconds(-1);
      const C = c.getDate();
      let j = 6;
      d !== 1 && (j = d - 2);
      const L = [];
      for (let $ = C - j; $ <= C; $++)
        L.push({
          date: $,
          class: "v-date-prev-month"
        });
      const O = this.nweDate(e, t + 1);
      O.setMilliseconds(-1);
      const le = O.getDate();
      for (let $ = 1; $ <= le; $++) {
        const F = { date: $ };
        $ === r && e === n && t === i && (F.class = "v-date-select"), $ === this.setDay && e === this.setYear && t === this.setMonth && (F.class = "v-date-prominent"), L.push(F);
      }
      const X = 42 - L.length;
      if (X)
        for (let $ = 1; $ <= X; $++)
          L.push({
            date: $,
            class: "v-date-next-month"
          });
      const K = [];
      for (let $ = 0; $ < L.length; $ += 7) {
        const F = L.slice($, $ + 7);
        K.push(F);
      }
      this.dates = K;
    },
    switchMonth(e) {
      this.monthDate || (this.monthDate = this.nweDate(this.year, this.month));
      const t = this.monthDate.getMonth();
      this.monthDate.setMonth(t + e);
      const s = this.getYMD(this.monthDate);
      this.generate(...s);
    },
    selectDate(e) {
      const { className: t, localName: s, innerText: o } = e.target;
      if (s === "span") {
        t === "v-date-prev-month" ? this.month -= 1 : t === "v-date-next-month" && (this.month += 1), this.currentDate = this.nweDate(this.year, this.month, o), this.monthDate = new Date(this.currentDate);
        const n = this.getYMD(this.currentDate);
        this.setCurrent(...n), this.generate(...n), this.$emit("change", n);
      }
    },
    setCurrent(e, t, s) {
      this.setYear = e, this.setMonth = t, this.setDay = s;
    }
  },
  created() {
    this.setCurrent(...this.date), this.generate(...this.date);
  },
  install(e) {
    e.component(this.name, this);
  }
}, He = { class: "v-date-show" }, ze = /* @__PURE__ */ l("div", { class: "v-date-week" }, [
  /* @__PURE__ */ l("span", null, "\u4E00"),
  /* @__PURE__ */ l("span", null, "\u4E8C"),
  /* @__PURE__ */ l("span", null, "\u4E09"),
  /* @__PURE__ */ l("span", null, "\u56DB"),
  /* @__PURE__ */ l("span", null, "\u4E94"),
  /* @__PURE__ */ l("span", null, "\u516D"),
  /* @__PURE__ */ l("span", null, "\u65E5")
], -1);
function Ge(e, t, s, o, n, i) {
  return a(), u("div", {
    class: "v-date",
    onClick: t[3] || (t[3] = g(() => {
    }, ["stop"]))
  }, [
    l("div", He, [
      l("i", {
        class: "vicon",
        onClick: t[0] || (t[0] = (r) => i.switchMonth(-1))
      }, "\uEB2A"),
      l("span", null, h(n.year) + " \u5E74 " + h(n.month) + " \u6708", 1),
      l("i", {
        class: "vicon",
        onClick: t[1] || (t[1] = (r) => i.switchMonth(1))
      }, "\uE6B7")
    ]),
    ze,
    l("div", {
      class: "v-date-days",
      onClick: t[2] || (t[2] = (...r) => i.selectDate && i.selectDate(...r))
    }, [
      (a(!0), u(w, null, B(n.dates, (r, c) => (a(), u("ul", {
        class: "v-date-line",
        key: c
      }, [
        (a(!0), u(w, null, B(r, (d, C) => (a(), u("li", {
          key: C,
          class: f(d.class)
        }, [
          l("span", null, h(d.date), 1)
        ], 2))), 128))
      ]))), 128))
    ])
  ]);
}
const q = /* @__PURE__ */ m(qe, [["render", Ge]]);
const Je = {
  extends: Q,
  components: { FormBox: I, Bubble: N },
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
      return de(e).format(this.format);
    },
    change(e) {
      this.ymd = e, this.input = this.setInput(e.join("-")), this.$emit("input", this.input);
    }
  },
  install(e) {
    e.component(this.name, this), e.component(q.name, q);
  }
}, Qe = { class: "v-input" }, Ze = ["placeholder"], et = /* @__PURE__ */ l("i", { class: "vicon-riqi1" }, null, -1), tt = {
  key: 1,
  class: "v-input-preview"
}, st = { class: "v-input-preview-label" }, nt = { class: "v-input-preview-value" };
function it(e, t, s, o, n, i) {
  const r = y("Date", !0), c = y("Bubble"), d = y("FormBox");
  return e.edit ? (a(), v(d, {
    key: 0,
    label: s.label,
    error: e.error
  }, {
    default: _(() => [
      l("div", {
        class: "v-date-picker",
        onClick: t[1] || (t[1] = g((...C) => e.click && e.click(...C), ["stop"]))
      }, [
        l("div", Qe, [
          k(l("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (C) => e.input = C),
            placeholder: s.placeholder,
            readonly: ""
          }, null, 8, Ze), [
            [S, e.input]
          ]),
          et
        ]),
        e.open ? (a(), v(c, {
          key: 0,
          placement: "bottom"
        }, {
          default: _(() => [
            D(r, {
              value: e.ymd,
              onChange: i.change
            }, null, 8, ["value", "onChange"])
          ]),
          _: 1
        })) : p("", !0)
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : s.value ? (a(), u("div", tt, [
    l("span", st, h(s.label) + "\uFF1A", 1),
    l("span", nt, h(i.setInput(s.value)), 1)
  ])) : p("", !0);
}
const ot = /* @__PURE__ */ m(Je, [["render", it]]), lt = {
  emits: ["click"],
  components: { FormBox: I },
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
}, at = { class: "v-input" }, rt = { class: "v-input-before" }, ct = { class: "v-input-after" }, ut = {
  key: 1,
  class: "v-input-unit"
}, dt = {
  key: 1,
  class: "v-input-preview"
}, ht = {
  key: 1,
  class: "v-input-preview-label"
}, pt = { class: "v-input-preview-value" }, mt = {
  key: 2,
  class: "v-input-preview-unit"
};
function _t(e, t, s, o, n, i) {
  const r = y("FormBox");
  return n.edit ? (a(), v(r, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      l("div", at, [
        l("div", rt, [
          b(e.$slots, "before")
        ]),
        k(l("input", A({
          "onUpdate:modelValue": t[0] || (t[0] = (c) => n.input = c)
        }, e.$attrs), null, 16), [
          [
            W,
            n.input,
            void 0,
            { number: !0 }
          ]
        ]),
        l("div", ct, [
          b(e.$slots, "after", {}, () => [
            s.icon ? (a(), u("i", {
              key: 0,
              class: f(s.icon)
            }, null, 2)) : p("", !0),
            s.unit ? (a(), u("span", ut, h(s.unit), 1)) : p("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : s.value ? (a(), u("div", dt, [
    s.icon ? (a(), u("i", {
      key: 0,
      class: f(s.icon)
    }, null, 2)) : n.showLabel ? (a(), u("span", ht, h(n.showLabel) + "\uFF1A", 1)) : p("", !0),
    l("span", pt, h(s.value), 1),
    s.unit ? (a(), u("span", mt, h(s.unit), 1)) : p("", !0)
  ])) : p("", !0);
}
const Z = /* @__PURE__ */ m(lt, [["render", _t]]);
const vt = {
  extends: Q,
  components: { InputNumber: Z, Bubble: N },
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
      const [c, d] = this.getYMD(new Date());
      e = [c, d];
    }
    let [s, o] = e;
    t ? t = this.dateParser(t) : t = [s, o + 1];
    let n, i;
    return e[1] === t[1] ? (n = [e, t], i = [
      [s, o + 1],
      [s, o + 1]
    ]) : (n = [e, [e[0], e[1], 32]], i = [[t[0], t[1], 0], t]), {
      input: [this.formatDate(...e), this.formatDate(...t)],
      pickerA: n,
      pickerB: i
    };
  },
  methods: {
    change(e, t) {
      const s = t.length;
      if (s !== 1) {
        if (s === 2) {
          const [o, n] = t;
          this.comparisonYMD(n, o) ? this["picker" + e] = [o, n] : this["picker" + e] = [n, o], this.open = !1;
        }
      }
    },
    comparisonYMD(e, t) {
      for (let s in e) {
        const o = e[s], n = t[s];
        if (o > n)
          return !0;
        if (o < n)
          return !1;
      }
    }
  }
};
function ft(e, t, s, o, n, i) {
  const r = y("DateRange", !0), c = y("Bubble");
  return a(), u("div", {
    class: "v-date-range",
    onClick: t[4] || (t[4] = g((...d) => e.click && e.click(...d), ["stop"]))
  }, [
    k(l("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (d) => n.input = d),
      type: "text",
      placeholder: "\u5F00\u59CB\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [S, n.input]
    ]),
    k(l("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (d) => n.input = d),
      type: "text",
      placeholder: "\u7ED3\u675F\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [S, n.input]
    ]),
    e.open ? (a(), v(c, {
      key: 0,
      class: "v-date-range-box",
      placement: "bottom"
    }, {
      default: _(() => [
        D(r, {
          value: n.pickerA,
          onChange: t[2] || (t[2] = (d) => i.change("A", d))
        }, null, 8, ["value"]),
        D(r, {
          value: n.pickerB,
          onChange: t[3] || (t[3] = (d) => i.change("B", d))
        }, null, 8, ["value"])
      ]),
      _: 1
    })) : p("", !0)
  ]);
}
const gt = /* @__PURE__ */ m(vt, [["render", ft]]);
const yt = {
  emits: ["input"],
  components: { FormBox: I },
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
}, bt = { class: "v-input-range" }, $t = ["placeholder"], kt = /* @__PURE__ */ l("span", null, "~", -1), wt = ["placeholder"], xt = {
  key: 1,
  class: "v-input-preview"
}, Bt = {
  key: 1,
  class: "v-input-preview-label"
}, Ct = { class: "v-input-preview-value" }, Dt = { class: "v-input-preview-unit" };
function St(e, t, s, o, n, i) {
  const r = y("FormBox");
  return n.edit ? (a(), v(r, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      l("div", bt, [
        s.icon ? (a(), u("i", {
          key: 0,
          class: f(s.icon)
        }, null, 2)) : p("", !0),
        k(l("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (c) => n.input[0] = c),
          type: "number",
          placeholder: s.placeholder[0],
          onInput: t[1] || (t[1] = (...c) => i.min && i.min(...c))
        }, null, 40, $t), [
          [S, n.input[0]]
        ]),
        kt,
        k(l("input", {
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (c) => n.input[1] = c),
          placeholder: s.placeholder[1],
          onInput: t[3] || (t[3] = (...c) => i.max && i.max(...c))
        }, null, 40, wt), [
          [S, n.input[1]]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : (a(), u("div", xt, [
    s.icon ? (a(), u("i", {
      key: 0,
      class: f(s.icon)
    }, null, 2)) : (a(), u("span", Bt, h(s.label) + "\uFF1A", 1)),
    l("span", Ct, h(s.value[0]) + " - " + h(s.value[1]), 1),
    l("span", Dt, h(s.unit), 1)
  ]));
}
const Mt = /* @__PURE__ */ m(yt, [["render", St]]), It = {
  emits: ["click"],
  components: { FormBox: I },
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
}, Lt = { class: "v-input" };
function Ft(e, t, s, o, n, i) {
  const r = y("FormBox");
  return a(), v(r, {
    label: s.label,
    error: o.error
  }, {
    default: _(() => [
      l("div", Lt, [
        k(l("input", A({
          "onUpdate:modelValue": t[0] || (t[0] = (c) => o.input = c)
        }, e.$attrs), null, 16), [
          [W, o.input]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"]);
}
const Nt = /* @__PURE__ */ m(It, [["render", Ft]]);
const Tt = {
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
}, Et = { class: "radio-label" };
function Pt(e, t, s, o, n, i) {
  return a(), u("div", {
    class: "v-radio",
    onClick: t[0] || (t[0] = (...r) => i.click && i.click(...r))
  }, [
    l("div", {
      class: f(["radio-circular", { "radio-highlight": n.status }])
    }, null, 2),
    l("span", Et, [
      b(e.$slots, "default")
    ])
  ]);
}
const At = /* @__PURE__ */ m(Tt, [["render", Pt]]), H = {
  text: J,
  date: ot,
  daterange: gt,
  number: Z,
  numberrange: Mt,
  password: Nt,
  radio: At
}, Zn = {
  name: "Input",
  render() {
    const { type: e, range: t } = this.$attrs;
    let s = H[e];
    return s ? t !== void 0 && (s = H[e + "range"]) : s = J, P(s);
  }
};
const Vt = {
  name: "Img",
  props: {
    src: String,
    icon: {
      type: String,
      default: "vicon-tupian"
    },
    radius: Boolean
  },
  install(e) {
    e.component(this.name, this);
  }
}, Yt = {
  key: 0,
  class: "v-img-box"
}, Rt = ["src"];
function Wt(e, t, s, o, n, i) {
  return a(), u("div", {
    class: f(["v-img", { "v-img-radius": s.radius }])
  }, [
    s.src ? (a(), u("div", Yt, [
      l("img", { src: s.src }, null, 8, Rt)
    ])) : (a(), u("i", {
      key: 1,
      class: f(["v-img-null", s.icon])
    }, null, 2))
  ], 2);
}
const ei = /* @__PURE__ */ m(Vt, [["render", Wt]]);
const Ut = {
  name: "ImagePreview",
  props: {
    images: Array,
    index: {
      type: Number,
      default: 0
    },
    title: String
  },
  data() {
    return {
      image: {}
    };
  },
  methods: {
    mouseover(e) {
      this.image = e;
    }
  },
  mounted() {
    const { images: e, index: t } = this;
    this.image = e[t], document.body.appendChild(this.$el);
  },
  open({ images: e, index: t, title: s }) {
    console.log(e, t, s);
  }
}, jt = {
  key: 0,
  class: "v-image-preview-header"
}, Ot = { class: "v-image-preview-title" }, Xt = { class: "v-image-preview-main" }, Kt = ["src"], qt = {
  key: 1,
  class: "v-image-preview-map"
}, Ht = ["src", "onMouseover"], zt = {
  key: 2,
  class: "v-image-preview-footer"
}, Gt = /* @__PURE__ */ l("i", { class: "v-image-preview-close vicon-cha" }, null, -1);
function Jt(e, t, s, o, n, i) {
  return a(), v(M, {
    name: "fade",
    appear: ""
  }, {
    default: _(() => [
      l("div", {
        class: "v-image-preview",
        ref: "maskBox",
        onClick: t[2] || (t[2] = (r) => e.$emit("close"))
      }, [
        s.title ? (a(), u("div", jt, [
          l("div", Ot, h(s.title), 1)
        ])) : p("", !0),
        l("div", Xt, [
          n.image ? (a(), u("img", {
            key: 0,
            class: "v-image-preview-img",
            src: n.image.src,
            onClick: t[0] || (t[0] = g(() => {
            }, ["stop"]))
          }, null, 8, Kt)) : p("", !0)
        ]),
        s.images.length > 1 ? (a(), u("div", qt, [
          (a(!0), u(w, null, B(s.images, (r, c) => (a(), u("img", {
            key: c,
            class: f({ "v-image-preview-highlight": r === n.image }),
            src: r.src,
            onClick: t[1] || (t[1] = g(() => {
            }, ["stop"])),
            onMouseover: (d) => i.mouseover(r)
          }, null, 42, Ht))), 128))
        ])) : p("", !0),
        n.image.name ? (a(), u("div", zt, h(n.image.name), 1)) : p("", !0),
        Gt
      ], 512)
    ]),
    _: 1
  });
}
const ee = /* @__PURE__ */ m(Ut, [["render", Jt]]);
const Qt = {
  name: "Image",
  props: {
    src: { type: String, default: void 0 },
    read: Boolean,
    round: Boolean
  },
  data() {
    let { src: e, read: t } = this;
    return e && (e = "/view-ui/" + e), {
      image: { src: e },
      edit: !t
    };
  },
  methods: {
    add() {
      this.$refs.input.click();
    },
    async change(e) {
      if (e.length)
        for (const t of e) {
          const s = new FileReader();
          s.readAsDataURL(t);
          const o = await new Promise(function(n) {
            s.onload = () => n(s.result);
          });
          this.image = { file: t, src: o };
        }
      this.$refs.input.value = "";
    },
    destroy() {
      this.image = {}, this.$emit("input", "");
    },
    preview() {
      const { image: e } = this;
      ee.open({ images: [e], index: 0 });
    },
    async upload(e) {
      const { file: t } = this.image;
      if (t) {
        const s = new FormData();
        s.append("image", t), await this.$options.network(e, s).then((o) => {
          const [n] = o.image;
          this.image = { src: n }, this.$emit("input", n);
        });
      }
    }
  },
  watch: {
    src(e) {
      this.image = { src: e };
    },
    read(e) {
      this.edit = !e;
    }
  },
  install(e, t) {
    this.network = t, e.component(this.name, this);
  }
}, Zt = (e) => (V("data-v-422a6ba1"), e = e(), Y(), e), es = { class: "v-image-box" }, ts = ["src"], ss = /* @__PURE__ */ Zt(() => /* @__PURE__ */ l("i", { class: "vicon-add" }, null, -1)), ns = {
  key: 1,
  class: "v-image-show"
}, is = ["src"], os = {
  key: 1,
  class: "v-image-null vicon-tupian"
};
function ls(e, t, s, o, n, i) {
  return a(), u("div", {
    class: f(["v-image", { "v-image-round": s.round }])
  }, [
    n.edit ? (a(), u(w, { key: 0 }, [
      n.image.src ? (a(), u("div", {
        key: 0,
        class: "v-image-edit",
        onClick: t[1] || (t[1] = (...r) => i.preview && i.preview(...r))
      }, [
        l("div", es, [
          l("img", {
            src: n.image.src
          }, null, 8, ts)
        ]),
        l("i", {
          class: "v-image-delete vicon-cha",
          onClick: t[0] || (t[0] = g((...r) => i.destroy && i.destroy(...r), ["stop"]))
        })
      ])) : (a(), u("div", {
        key: 1,
        class: "v-image-add",
        onClick: t[3] || (t[3] = (...r) => i.add && i.add(...r))
      }, [
        ss,
        l("input", {
          ref: "input",
          type: "file",
          accept: "image/*",
          name: "file",
          onChange: t[2] || (t[2] = (r) => i.change(r.target.files))
        }, null, 544)
      ]))
    ], 64)) : (a(), u("div", ns, [
      n.image.src ? (a(), u("div", {
        key: 0,
        class: "v-image-box",
        onClick: t[4] || (t[4] = g((...r) => i.preview && i.preview(...r), ["stop"]))
      }, [
        l("img", {
          src: n.image.src
        }, null, 8, is)
      ])) : (a(), u("i", os))
    ]))
  ], 2);
}
const ti = /* @__PURE__ */ m(Qt, [["render", ls], ["__scopeId", "data-v-422a6ba1"]]);
const as = {
  name: "Images",
  emits: ["input", "change"],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    max: {
      type: Number,
      default: 20
    },
    read: Boolean,
    title: String,
    placeholder: String
  },
  setup({ read: e, value: t }) {
    return {
      id: 0,
      edit: !e,
      images: t
    };
  },
  methods: {
    dragstart(e, t) {
      const { currentTarget: s } = e;
      requestAnimationFrame(() => s.style.opacity = 0), this.currentTarget = s, this.currentKey = t;
    },
    dragover(e) {
      e.preventDefault(), e.stopPropagation();
    },
    dragenter(e, t) {
      e.preventDefault(), e.stopPropagation();
      const { currentTarget: s } = e;
      if (s !== this.currentTarget) {
        console.log("dragenter ->");
        const { images: o, currentKey: n } = this, i = o[t];
        i && (o.splice(n, 1), o.splice(t, 0, i)), this.currentTarget.style.opacity = "", this.currentKey = t, this.currentTarget = s, s.style.opacity = 0;
      }
    },
    dragend() {
      this.currentTarget.style.opacity = "", this.$emit("input", this.value);
    },
    add() {
      this.$refs.input.click();
    },
    async change(e) {
      if (e.length)
        for (const t of e) {
          const s = new FileReader();
          s.readAsDataURL(t);
          const o = await new Promise(function(i) {
            s.onload = () => {
              i(s.result);
            };
          }), n = { id: this.id++, src: o, file: t };
          this.$emit("change", n), this.images.push(n);
        }
      this.$refs.input.value = "";
    },
    destroy(e, t) {
      this.images.splice(t, 1);
    },
    onBeforeLeave(e) {
      e.style.left = `${e.offsetLeft}px`, e.style.top = `${e.offsetTop}px`;
    },
    preview(e) {
      const { images: t, title: s } = this;
      ee.open({ images: t, index: e, title: s });
    },
    async upload(e) {
      const t = new FormData(), s = [];
      for (const o of this.images)
        o.file && (t.append("images", o.file), s.push(o));
      s.length && await this.$options.network(e, t).then((o) => {
        const { images: n } = o;
        for (const i in n) {
          const r = n[i], c = s[i];
          c.src = r, delete c.file;
        }
        this.$emit("input", this.images);
      });
    }
  },
  watch: {
    value(e) {
      this.images = e;
    },
    images() {
      this.$emit("input", this.images);
    }
  },
  install(e, t) {
    this.network = t, e.component(this.name, this);
  }
}, te = (e) => (V("data-v-ae047926"), e = e(), Y(), e), rs = ["onDragstart", "onDragover", "onDragenter", "onDragend", "onClick"], cs = { class: "v-images-item" }, us = ["src", "title"], ds = ["placeholder", "onUpdate:modelValue"], hs = ["onClick"], ps = /* @__PURE__ */ te(() => /* @__PURE__ */ l("i", { class: "vicon-add" }, null, -1)), ms = {
  key: 1,
  class: "v-images v-images-preview"
}, _s = ["onClick"], vs = ["src"], fs = {
  key: 1,
  class: "v-image-null"
}, gs = /* @__PURE__ */ te(() => /* @__PURE__ */ l("i", { class: "vicon-tupian" }, null, -1)), ys = [
  gs
];
function bs(e, t, s, o, n, i) {
  return o.edit ? (a(), u("div", {
    key: 0,
    class: "v-images",
    onMousedownCapture: t[3] || (t[3] = g(() => {
    }, ["stop"])),
    onMousemoveCapture: t[4] || (t[4] = g(() => {
    }, ["stop"])),
    onMouseupCapture: t[5] || (t[5] = g(() => {
    }, ["stop"]))
  }, [
    D(U, {
      name: "drag",
      onBeforeLeave: i.onBeforeLeave
    }, {
      default: _(() => [
        o.images.length ? (a(!0), u(w, { key: 0 }, B(s.value, (r, c) => (a(), u("div", {
          key: r.id,
          class: "v-draggable-item",
          draggable: "true",
          onDragstart: g((d) => i.dragstart(d, c), ["stop"]),
          onDragover: g((d) => i.dragover(d, c), ["stop"]),
          onDragenter: g((d) => i.dragenter(d, c), ["stop"]),
          onDragend: g((d) => i.dragend(d, c), ["stop"]),
          onClick: (d) => i.preview(c)
        }, [
          l("div", cs, [
            l("img", {
              draggable: "false",
              src: r.src,
              title: r.name
            }, null, 8, us),
            k(l("input", {
              draggable: "false",
              class: "v-images-input",
              type: "text",
              placeholder: s.placeholder,
              "onUpdate:modelValue": (d) => r.name = d,
              onClick: t[0] || (t[0] = g(() => {
              }, ["stop"]))
            }, null, 8, ds), [
              [S, r.name]
            ])
          ]),
          l("i", {
            class: "v-images-delete vicon-cha",
            onClick: g((d) => i.destroy(r, c), ["stop"])
          }, null, 8, hs)
        ], 40, rs))), 128)) : p("", !0),
        k(l("div", {
          key: "add",
          class: "v-images-add",
          onClick: t[2] || (t[2] = (...r) => i.add && i.add(...r))
        }, [
          ps,
          l("input", {
            ref: "input",
            type: "file",
            accept: "image/*",
            name: "file",
            multiple: "multiple",
            onChange: t[1] || (t[1] = (r) => i.change(r.target.files))
          }, null, 544)
        ], 512), [
          [R, o.images.length < s.max]
        ])
      ]),
      _: 1
    }, 8, ["onBeforeLeave"])
  ], 32)) : (a(), u("div", ms, [
    s.value.length ? (a(!0), u(w, { key: 0 }, B(s.value, (r, c) => (a(), u("div", {
      class: "v-images-item",
      key: c,
      onClick: (d) => i.preview(c)
    }, [
      l("img", {
        src: r.src
      }, null, 8, vs)
    ], 8, _s))), 128)) : (a(), u("div", fs, ys))
  ]));
}
const si = /* @__PURE__ */ m(as, [["render", bs], ["__scopeId", "data-v-ae047926"]]);
const $s = {
  name: "FloatMenu",
  components: { Bubble: N },
  props: {
    options: {
      type: Array
    },
    current: {
      type: [String, Number]
    },
    gap: {
      type: Number
    }
  },
  data() {
    return { open: !1 };
  },
  methods: {
    select(e) {
      this.open = !1, this.$emit("select", e);
    },
    mouseenter() {
      clearTimeout(this.timeId), this.open = !0;
    },
    mouseleave() {
      clearTimeout(this.timeId), this.timeId = setTimeout(() => {
        this.open = !1;
      }, 200);
    }
  },
  mounted() {
    const { parentNode: e } = this.$el;
    e.addEventListener("mouseenter", this.mouseenter), e.addEventListener("mouseleave", this.mouseleave);
  },
  watch: {
    open() {
      this.active !== !0 && (this.active = !0, this.$nextTick(() => {
        this.$el.addEventListener("mouseenter", this.mouseenter), this.$el.addEventListener("mouseleave", this.mouseleave);
      }));
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, ks = { class: "v-float-menu-items" }, ws = ["onClick"];
function xs(e, t, s, o, n, i) {
  const r = y("Bubble");
  return a(), v(M, {
    name: "scale",
    appear: ""
  }, {
    default: _(() => [
      (a(), v(z, null, [
        n.open ? (a(), v(r, {
          key: 0,
          class: "v-float-menu",
          gap: s.gap
        }, {
          default: _(() => [
            l("ul", ks, [
              (a(!0), u(w, null, B(s.options, (c, d) => (a(), u("li", {
                class: f(["vt-sub vt-hover", { "vt-active": s.current == d }]),
                key: d,
                onClick: (C) => i.select(c)
              }, [
                l("i", {
                  class: f(c.icon)
                }, null, 2),
                x(" " + h(c.name), 1)
              ], 10, ws))), 128))
            ])
          ]),
          _: 1
        }, 8, ["gap"])) : p("", !0)
      ], 1024))
    ]),
    _: 1
  });
}
const ni = /* @__PURE__ */ m($s, [["render", xs]]);
const Bs = {
  name: "Dropdown",
  components: { Bubble: N },
  props: {
    name: {
      type: String
    },
    gap: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      oneName: this.oneName || this.name,
      open: !1
    };
  },
  methods: {
    click(e) {
      this.open === !1 && (this.open = !0, setTimeout(() => {
        window.addEventListener("click", this.close, { once: !0 });
      }, 0));
    },
    close(e) {
      this.open = !1;
    }
  },
  install(e) {
    e.component(this.name, this);
  }
};
function Cs(e, t, s, o, n, i) {
  const r = y("Bubble");
  return a(), u("div", {
    class: "v-dropdown",
    onClick: t[0] || (t[0] = (...c) => i.click && i.click(...c))
  }, [
    l("div", {
      class: f(["v-dropdown-select", { active: s.name && s.name !== n.oneName }])
    }, [
      x(h(s.name || n.oneName) + " ", 1),
      l("i", {
        class: f(["vicon arrow", { arrow_up: n.open }])
      }, "\uE678", 2)
    ], 2),
    D(M, { name: "scale" }, {
      default: _(() => [
        n.open ? (a(), v(r, {
          key: 0,
          placement: "bottom",
          gap: s.gap
        }, {
          default: _(() => [
            b(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["gap"])) : p("", !0)
      ]),
      _: 3
    })
  ]);
}
const ii = /* @__PURE__ */ m(Bs, [["render", Cs]]);
const Ds = {
  name: "Form",
  components: { Button: G },
  props: {
    name: {
      type: String
    },
    remark: {
      type: String
    },
    edit: {
      type: Boolean
    }
  },
  data() {
    return {
      confirm: !1,
      status: !0
    };
  },
  methods: {
    setEdit(e) {
      this.edit && (e = this.edit), this.status = e;
      for (const t in this.$refs)
        ;
    }
  },
  mounted() {
    this.setEdit(!0);
  },
  install(e) {
    e.component(this.name, this);
  }
}, Ss = { class: "v-form" }, Ms = { class: "v-form-header" }, Is = { key: 0 }, Ls = {
  key: 0,
  class: "remark"
}, Fs = { class: "v-form-main" }, Ns = {
  key: 0,
  class: "v-form-footer"
}, Ts = /* @__PURE__ */ x("\u786E\u8BA4");
function Es(e, t, s, o, n, i) {
  const r = y("Button");
  return a(), u("div", Ss, [
    l("div", Ms, [
      s.name ? (a(), u("h4", Is, [
        x(h(s.name) + " ", 1),
        n.status === !0 ? (a(), u("span", Ls, h(s.remark), 1)) : p("", !0)
      ])) : p("", !0)
    ]),
    l("div", Fs, [
      b(e.$slots, "default")
    ]),
    n.confirm ? (a(), u("div", Ns, [
      D(r, {
        color: "success",
        onClick: t[0] || (t[0] = (c) => e.$emit("confirm"))
      }, {
        default: _(() => [
          Ts
        ]),
        _: 1
      })
    ])) : p("", !0)
  ]);
}
const oi = /* @__PURE__ */ m(Ds, [["render", Es]]);
const Ps = {
  name: "Tag",
  components: { FormBox: I },
  emits: ["input"],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    label: {
      type: String
    },
    name: {
      type: String
    },
    placeholder: {
      type: String,
      default: "\u8F93\u5165\u81EA\u5B9A\u4E49\u6807\u7B7E\u540D"
    }
  },
  data() {
    return {
      tags: this.value,
      input: "",
      edit: !0,
      error: ""
    };
  },
  methods: {
    destroy(e) {
      this.tags.splice(e, 1), this.$emit("input", this.tags);
    },
    enter(e) {
      e.target.blur(), e.target.focus(), this.$emit("input", this.tags);
    },
    blur(e) {
      const t = e.target.value;
      t !== "" && (this.tags.includes(t), this.tags.push(t), this.input = "", this.$emit("input", this.tags));
    },
    onBeforeLeave(e) {
      e.style.left = `${e.offsetLeft}px`, e.style.top = `${e.offsetTop}px`;
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, As = { class: "v-tag" }, Vs = ["onClick"], Ys = ["placeholder"], Rs = {
  key: 1,
  class: "v-tag-preview"
}, Ws = {
  key: 0,
  class: "v-tag-preview-label"
};
function Us(e, t, s, o, n, i) {
  const r = y("FormBox");
  return n.edit ? (a(), v(r, {
    key: 0,
    class: "w100",
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      l("div", As, [
        D(U, {
          name: "tag",
          onBeforeLeave: i.onBeforeLeave
        }, {
          default: _(() => [
            (a(!0), u(w, null, B(n.tags, (c, d) => (a(), u("div", {
              class: "v-tag-item",
              key: c
            }, [
              x(h(c) + " ", 1),
              l("i", {
                class: "vicon",
                onClick: (C) => i.destroy(d)
              }, "\uE679", 8, Vs)
            ]))), 128)),
            k(l("input", {
              class: "v-tag-input",
              key: "tag-inpu",
              placeholder: s.placeholder,
              ref: "input",
              type: "text",
              "onUpdate:modelValue": t[0] || (t[0] = (c) => n.input = c),
              onKeyup: t[1] || (t[1] = ae((...c) => i.enter && i.enter(...c), ["enter"])),
              onBlur: t[2] || (t[2] = (...c) => i.blur && i.blur(...c))
            }, null, 40, Ys), [
              [S, n.input]
            ])
          ]),
          _: 1
        }, 8, ["onBeforeLeave"])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : s.value.length ? (a(), u("div", Rs, [
    s.label ? (a(), u("span", Ws, h(s.label) + "\uFF1A", 1)) : p("", !0),
    (a(!0), u(w, null, B(s.value, (c) => (a(), u("span", {
      class: "v-tag-preview-item",
      key: c
    }, h(c), 1))), 128))
  ])) : p("", !0);
}
const li = /* @__PURE__ */ m(Ps, [["render", Us], ["__scopeId", "data-v-5fc7ee63"]]), se = {
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
};
const js = {}, Os = (e) => (V("data-v-1769e00a"), e = e(), Y(), e), Xs = { class: "v-slider-bubble" }, Ks = { class: "v-slider-bubble-content" }, qs = /* @__PURE__ */ Os(() => /* @__PURE__ */ l("div", { class: "v-slider-bubble-arrow" }, [
  /* @__PURE__ */ l("i")
], -1));
function Hs(e, t) {
  return a(), u("div", Xs, [
    l("div", Ks, [
      b(e.$slots, "default", {}, void 0, !0)
    ]),
    qs
  ]);
}
const ne = /* @__PURE__ */ m(js, [["render", Hs], ["__scopeId", "data-v-1769e00a"]]);
const zs = {
  name: "Slider",
  extends: se,
  components: { Bubble: ne },
  data() {
    return {
      style: { right: 0, transition: "" },
      scope: this.value[0],
      ruler: []
    };
  },
  methods: {
    mousedown(e) {
      this.style.transition = "all 0.2s";
      const { width: t, left: s } = this.$el.getBoundingClientRect();
      this.left = s;
      const { pageX: o } = e;
      this.lastPageX = o, this.x = o - s, this.style.right = t - this.x + "px", this.scope = this.getScope(this.x), document.body.addEventListener("mousemove", this.mousemove), document.body.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      this.style.transition = "none", this.x += e.pageX - this.lastPageX, this.lastPageX = e.pageX;
      const { clientWidth: t } = this.$el;
      if (this.x >= 0 && this.x <= t)
        this.style.right = t - this.x + "px", this.scope = this.getScope(this.x);
      else if (this.x < 0)
        this.style.right = t + "px", this.scope = 0;
      else if (this.x > t) {
        this.style.right = "0px";
        const { max: s } = this;
        this.scope = s;
      }
    },
    mouseup(e) {
      this.$emit("input", this.scope), this.$emit("change", this.scope), document.body.removeEventListener("mousemove", this.mousemove), document.body.removeEventListener("mouseup", this.mouseup);
    },
    getScope(e) {
      const { max: t } = this, s = e / this.$el.clientWidth * t;
      return Math.floor(s);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { clientWidth: e } = this.$el, [t, s] = this.value, [o, n] = this.value;
      if (this.x1 = Math.floor(n / s * e), this.style.right = this.x1 + "px", this.step) {
        const { gauge: i } = this.$refs, r = e / this.step;
        i.style.width = e + r + "px", i.style.marginLeft = `-${r / 2}px`;
        const c = s / this.step;
        for (let d = t; d <= s; d += c)
          this.ruler.push(d);
      }
    });
  }
}, Gs = { class: "v-slider" }, Js = { class: "v-slider-baseline" }, Qs = { class: "v-slider-button" }, Zs = {
  key: 0,
  ref: "gauge",
  class: "v-slider-gauge"
};
function en(e, t, s, o, n, i) {
  const r = y("Bubble");
  return a(), u("div", Gs, [
    l("div", {
      class: "v-slider-track",
      onMousedown: t[0] || (t[0] = g((...c) => i.mousedown && i.mousedown(...c), ["stop"]))
    }, [
      l("div", Js, [
        l("div", {
          class: "v-slider-progress",
          style: E(n.style)
        }, [
          l("div", Qs, [
            e.bubble ? (a(), v(r, { key: 0 }, {
              default: _(() => [
                x(h(n.scope + e.unit), 1)
              ]),
              _: 1
            })) : p("", !0)
          ])
        ], 4)
      ])
    ], 32),
    e.step ? (a(), u("div", Zs, [
      (a(!0), u(w, null, B(n.ruler, (c, d) => (a(), u("span", { key: d }, h(c), 1))), 128))
    ], 512)) : p("", !0)
  ]);
}
const tn = /* @__PURE__ */ m(zs, [["render", en], ["__scopeId", "data-v-a24306b5"]]);
const sn = {
  name: "SliderRange",
  extends: se,
  components: { Bubble: ne },
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
    getScope(e, t) {
      const { max: s } = this, { clientWidth: o } = this.$el, n = e !== 0 ? e / o * s : 0, i = t !== 0 ? t / o * s : 0;
      return [Math.floor(n), Math.floor(i)];
    },
    mousedown(e) {
      const { width: t, left: s } = this.$el.getBoundingClientRect();
      this.pageLeft = s, this.transition = "all 0.2s";
      const o = Math.floor(e.pageX - this.pageLeft);
      if (o >= 0 && o <= t)
        if (o <= this.p1)
          this.p1 = o, this.static = this.p2;
        else if (o >= this.p2)
          this.p2 = o, this.static = this.p1;
        else {
          const n = Math.floor((this.p2 - this.p1) / 2);
          o - this.p1 < n ? (this.p1 = o, this.static = this.p2) : (this.p2 = o, this.static = this.p1);
        }
      else
        o < 0 ? (this.p1 = 0, this.static = this.p2) : o > t && (this.p2 = t, this.static = this.p1);
      this.left = this.p1 + "px", this.right = t - this.p2 + "px", this.scope = this.getScope(this.p1, this.p2), document.body.addEventListener("mousemove", this.mousemove), document.body.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      this.transition = "none";
      const t = Math.floor(e.pageX - this.pageLeft), { clientWidth: s } = this.$el;
      t >= 0 && t <= s ? t < this.static ? (this.p1 = t, this.p2 = this.static) : (this.p1 = this.static, this.p2 = t) : t < 0 ? (this.p1 = 0, this.p2 = this.static) : t > s && (this.p1 = this.static, this.p2 = s), this.left = this.p1 + "px", this.right = s - this.p2 + "px", this.scope = this.getScope(this.p1, this.p2);
    },
    mouseup() {
      this.$emit("change", this.scope), this.$emit("input", this.scope), document.body.removeEventListener("mousemove", this.mousemove), document.body.removeEventListener("mouseup", this.mouseup);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { clientWidth: e } = this.$el, { min: t, max: s } = this, [o, n] = this.value;
      if (this.p1 = Math.floor((o - t) / s * e), this.p2 = Math.floor((n - t) / s * e), this.left = this.p1 + "px", this.right = e - this.p2 + "px", this.step) {
        const { gauge: i } = this.$refs, r = e / this.step;
        i.style.width = e + r + "px", i.style.marginLeft = `-${r / 2}px`;
        const c = s / this.step;
        for (let d = t; d <= s; d += c)
          this.ruler.push(d);
      }
    });
  }
}, nn = { class: "v-slider" }, on = { class: "v-slider-baseline" }, ln = { class: "v-slider-button v-slider-left" }, an = { class: "v-slider-button v-slider-right" }, rn = {
  key: 0,
  ref: "gauge",
  class: "v-slider-gauge"
};
function cn(e, t, s, o, n, i) {
  const r = y("Bubble");
  return a(), u("div", nn, [
    l("div", {
      class: "v-slider-range",
      onMousedown: t[0] || (t[0] = g((...c) => i.mousedown && i.mousedown(...c), ["stop"]))
    }, [
      l("div", on, [
        l("div", {
          class: "v-slider-progress",
          style: E({ left: n.left, right: n.right, transition: n.transition })
        }, [
          l("div", ln, [
            e.bubble ? (a(), v(r, { key: 0 }, {
              default: _(() => [
                x(h(n.scope[0]), 1)
              ]),
              _: 1
            })) : p("", !0)
          ]),
          l("div", an, [
            e.bubble ? (a(), v(r, { key: 0 }, {
              default: _(() => [
                x(h(n.scope[1]), 1)
              ]),
              _: 1
            })) : p("", !0)
          ])
        ], 4)
      ])
    ], 32),
    e.step ? (a(), u("div", rn, [
      (a(!0), u(w, null, B(n.ruler, (c, d) => (a(), u("span", { key: d }, h(c), 1))), 128))
    ], 512)) : p("", !0)
  ]);
}
const un = /* @__PURE__ */ m(sn, [["render", cn], ["__scopeId", "data-v-d7740351"]]), ai = {
  render() {
    const { $attrs: e } = this;
    let t;
    return hasOwnProperty.call(e, "range") ? t = un : t = tn, P(t, e);
  }
};
const dn = {
  name: "Switch",
  emits: ["click", "input"],
  props: {
    value: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String
    },
    name: {
      type: String
    },
    disable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      edit: !0,
      status: this.value
    };
  },
  methods: {
    click() {
      if (this.disable)
        return;
      this.status = !this.status, this.$emit("click", this.status);
      const { $attrs: e } = this;
      e.onConfirm ? e.onConfirm(!this.status) : this.$emit("input", this.status);
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, hn = (e) => (V("data-v-54f1654a"), e = e(), Y(), e), pn = /* @__PURE__ */ hn(() => /* @__PURE__ */ l("div", { class: "v-switch-circle" }, null, -1)), mn = [
  pn
];
function _n(e, t, s, o, n, i) {
  return a(), u("div", {
    class: f(["v-switch", { "v-switch-open": n.status, "v-switch-disable": s.disable }]),
    onClick: t[0] || (t[0] = (...r) => i.click && i.click(...r)),
    onDblclick: t[1] || (t[1] = g(() => {
    }, ["stop"]))
  }, mn, 34);
}
const ri = /* @__PURE__ */ m(dn, [["render", _n], ["__scopeId", "data-v-54f1654a"]]);
const ie = {
  components: { FormBox: I },
  props: {
    value: [String, Number, Boolean],
    label: String,
    placeholder: String,
    ready: Boolean
  },
  data() {
    return {
      drop: !1,
      current: ""
    };
  },
  methods: {
    click() {
      this.drop === !1 && (this.drop = !0, setTimeout(() => {
        window.addEventListener("click", this.close, { once: !0 });
      }, 0));
    },
    close() {
      this.drop = !1;
    },
    select(e) {
      this.$refs, this.$nextTick(() => {
      }), this.$emit("input", e);
    }
  },
  watch: {
    ready() {
      this.select(this.value);
    }
  }
}, vn = {
  extends: ie,
  mounted() {
    this.select(this.value);
  }
}, fn = {
  key: 0,
  class: "show-current"
}, gn = {
  key: 1,
  class: "show-current placeholder"
}, yn = {
  key: 1,
  class: "v-select-preview"
}, bn = { class: "v-select-preview-name" };
function $n(e, t, s, o, n, i) {
  const r = y("FormBox");
  return e.ready === !1 ? (a(), v(r, {
    key: 0,
    ref: "FormBox",
    label: e.label
  }, {
    default: _(() => [
      l("div", {
        class: "v-select",
        onClick: t[0] || (t[0] = (...c) => e.click && e.click(...c))
      }, [
        e.current ? (a(), u("div", fn, h(e.current), 1)) : (a(), u("div", gn, h(e.placeholder), 1)),
        l("i", {
          class: f(["vicon arrow", { arrow_up: e.drop }])
        }, "\uE678", 2),
        D(M, {
          name: "select-drop",
          appear: ""
        }, {
          default: _(() => [
            k(l("ul", null, [
              b(e.$slots, "default")
            ], 512), [
              [R, e.drop]
            ])
          ]),
          _: 3
        })
      ])
    ]),
    _: 3
  }, 8, ["label"])) : (a(), u("div", yn, [
    l("span", bn, h(e.label) + "\uFF1A", 1),
    l("span", null, h(e.current || "-"), 1)
  ]));
}
const kn = /* @__PURE__ */ m(vn, [["render", $n]]);
const wn = {
  extends: ie,
  methods: {
    change() {
      this.$emit("input", this.input);
    }
  }
}, xn = ["placeholder"];
function Bn(e, t, s, o, n, i) {
  const r = y("FormBox");
  return a(), v(r, {
    ref: "FormBox",
    label: e.label
  }, {
    default: _(() => [
      l("div", {
        class: "v-select",
        onClick: t[2] || (t[2] = (...c) => e.click && e.click(...c))
      }, [
        k(l("input", {
          placeholder: e.placeholder,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => e.current = c),
          onChange: t[1] || (t[1] = (...c) => i.change && i.change(...c))
        }, null, 40, xn), [
          [S, e.current]
        ]),
        l("i", {
          class: f(["vicon arrow", { arrow_up: e.drop }])
        }, "\uE678", 2),
        D(M, {
          name: "drop",
          appear: ""
        }, {
          default: _(() => [
            k(l("ul", null, [
              b(e.$slots, "default")
            ], 512), [
              [R, e.drop]
            ])
          ]),
          _: 3
        })
      ])
    ]),
    _: 3
  }, 8, ["label"]);
}
const Cn = /* @__PURE__ */ m(wn, [["render", Bn]]), Dn = {
  name: "Option",
  props: {
    label: {
      type: String
    },
    value: {
      type: [String, Number, Boolean]
    }
  },
  data() {
    return {
      active: !1
    };
  },
  methods: {
    select(e) {
      this.$parent.$parent.$parent.select(e);
    }
  }
};
function Sn(e, t, s, o, n, i) {
  return a(), u("li", {
    class: f({ "vt-active": n.active }),
    onClick: t[0] || (t[0] = (r) => i.select(s.value))
  }, [
    b(e.$slots, "default", {}, () => [
      x(h(s.label || s.value), 1)
    ])
  ], 2);
}
const Mn = /* @__PURE__ */ m(Dn, [["render", Sn]]), ci = {
  name: "Select",
  render() {
    const { edit: e, multiple: t } = this.$attrs;
    return e === !0 ? P(Cn) : P(kn, this.$attrs, this.$slots);
  },
  Option: Mn
};
function In(e, t) {
  return re(e).mount(t);
}
const oe = { Component: In };
const Ln = {
  instance: void 0,
  id: 0,
  data() {
    return {
      show: !1,
      components: []
    };
  },
  methods: {
    close(e) {
      const { components: t } = this;
      for (const s in t)
        t[s].id === e && t.splice(s, 1);
    }
  },
  add(e) {
    if (this.instance === void 0) {
      const o = document.createElement("section");
      o.id = "v-message-layer", document.body.appendChild(o), this.instance = oe.Component(this, o);
    }
    const t = this.id++;
    e.id = t, this.instance.components.unshift(ce(e));
    const { time: s } = e;
    return s && setTimeout(() => this.instance.close(t), s), this.instance.show = !0, t;
  },
  close(e) {
    this.instance.close(e);
  }
};
function Fn(e, t, s, o, n, i) {
  return a(), v(U, { name: "tg-top" }, {
    default: _(() => [
      (a(!0), u(w, null, B(n.components, (r) => (a(), u("div", {
        key: r.id,
        class: "v-message-item"
      }, [
        (a(), v(ue(r)))
      ]))), 128))
    ]),
    _: 1
  });
}
const T = /* @__PURE__ */ m(Ln, [["render", Fn], ["__scopeId", "data-v-40bff31d"]]);
const Nn = {
  add(e) {
    const { type: t = "", body: s = "", time: o = 3e3 } = e;
    T.add({
      setup() {
        return { type: t, body: s };
      },
      render: this.render,
      time: o
    });
  },
  info(e, t) {
    this.add({ type: "info", body: e, time: t });
  },
  success(e, t) {
    this.add({ type: "success", body: e, time: t });
  },
  error(e, t) {
    this.add({ type: "error", body: e, time: t });
  },
  warning(e, t) {
    this.add({ type: "warning", body: e, time: t });
  },
  load(e, t) {
    this.add({ type: "load", body: e, time: t });
  }
}, Tn = { class: "v-message" }, En = { class: "body" };
function Pn(e, t, s, o, n, i) {
  return a(), u("div", Tn, [
    l("i", {
      class: f(["vicon", `vicon-${e.type}`])
    }, null, 2),
    l("span", En, h(e.body), 1)
  ]);
}
const ui = /* @__PURE__ */ m(Nn, [["render", Pn]]);
const An = {
  name: "confirm",
  instance: void 0,
  open(e) {
    const t = {
      title: void 0,
      cancelButton: "Cancel",
      confirmButton: "Confirm",
      open: !0
    };
    if (typeof e == "object" ? Object.assign(t, e) : t.body = e, this.instance)
      Object.assign(this.instance, t);
    else {
      const s = document.createElement("section");
      document.body.appendChild(s), this.instance = oe.Component(
        {
          data() {
            return t;
          },
          ...this
        },
        s
      );
    }
  },
  components: { Dialog: xe, Button: G },
  methods: {
    onConfirm() {
      this.confirm && this.confirm(this), this.open = !1;
    },
    onClose() {
      this.close && this.close(), this.open = !1;
    }
  }
}, Vn = { class: "v-confirm-body center" }, Yn = { class: "v-confirm-footer" };
function Rn(e, t, s, o, n, i) {
  const r = y("Dialog");
  return k((a(), v(r, {
    class: "v-confirm",
    title: e.title,
    onClose: i.onClose
  }, {
    default: _(() => [
      l("div", Vn, h(e.body), 1),
      l("div", Yn, [
        l("button", {
          class: "v-confirm-close",
          onClick: t[0] || (t[0] = (...c) => i.onClose && i.onClose(...c))
        }, h(e.cancelButton), 1),
        l("button", {
          class: "v-confirm-confirm",
          onClick: t[1] || (t[1] = (...c) => i.onConfirm && i.onConfirm(...c))
        }, h(e.confirmButton), 1)
      ])
    ]),
    _: 1
  }, 8, ["title", "onClose"])), [
    [R, e.open]
  ]);
}
const di = /* @__PURE__ */ m(An, [["render", Rn], ["__scopeId", "data-v-b23319c2"]]);
const Wn = {
  add(e) {
    const { title: t = "", body: s = "", time: o, confirm: n, close: i } = e;
    return T.add({
      data() {
        return {
          title: t,
          body: s,
          showConfirm: Boolean(n)
        };
      },
      methods: {
        close() {
          T.close(this.$options.id), i && i();
        },
        confirm() {
          T.close(this.$options.id), n && n();
        }
      },
      render: this.render,
      time: o
    });
  }
}, Un = { class: "v-notification vertical" }, jn = { key: 0 }, On = /* @__PURE__ */ l("i", { class: "vicon-info" }, null, -1), Xn = {
  key: 1,
  class: "body"
}, Kn = { class: "actions" };
function qn(e, t, s, o, n, i) {
  return a(), u("div", Un, [
    e.title ? (a(), u("h4", jn, [
      On,
      x(" " + h(e.title), 1)
    ])) : p("", !0),
    l("i", {
      class: "ficon-cha close center",
      onClick: t[0] || (t[0] = (...r) => e.close && e.close(...r))
    }),
    e.body ? (a(), u("div", Xn, h(e.body), 1)) : p("", !0),
    l("div", Kn, [
      e.showConfirm ? (a(), u("button", {
        key: 0,
        class: "confirm",
        onClick: t[1] || (t[1] = (...r) => e.confirm && e.confirm(...r))
      }, " Confirm ")) : p("", !0)
    ])
  ]);
}
const hi = /* @__PURE__ */ m(Wn, [["render", qn]]);
export {
  Qn as Alert,
  N as Bubble,
  G as Button,
  xe as Dialog,
  Jn as DialogPage,
  ii as Dropdown,
  ni as FloatMenu,
  oi as Form,
  ti as Image,
  si as Images,
  ei as Img,
  Zn as Input,
  ci as Select,
  ai as Slider,
  ri as Switch,
  li as Tag,
  Gn as Tip,
  di as confirm,
  ui as message,
  hi as notification
};
