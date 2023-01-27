import { openBlock as o, createElementBlock as c, normalizeClass as _, normalizeStyle as H, createElementVNode as a, renderSlot as b, resolveComponent as k, createBlock as f, Transition as S, withCtx as v, KeepAlive as G, mergeProps as E, createCommentVNode as h, withModifiers as g, toDisplayString as d, createTextVNode as M, withDirectives as $, vModelDynamic as Y, Fragment as C, renderList as D, vModelText as x, createVNode as B, h as A, pushScopeId as V, popScopeId as P, TransitionGroup as U, vShow as R, withKeys as oe, createApp as ae, markRaw as le, resolveDynamicComponent as re } from "/view-ui/libs/vue.js";
import ce from "/view-ui/libs/dayjs.js";
const p = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, n] of t)
    s[r] = n;
  return s;
}, ue = {
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
    level(e) {
      const { targetClientRect: t, $el: s } = this, { left: r, right: n, width: i } = t, l = (s.clientWidth - i) / 2, u = i / 2;
      r < l ? (this.style.left = r + "px", this.arrow = { left: u - 4 + "px" }) : window.innerWidth - n < l && (this.style.right = window.innerWidth - n + "px", this.arrow = { right: u - 4 + "px" });
    },
    vertical(e) {
      const { clientHeight: t, clientWidth: s } = this.$el, { top: r, bottom: n, height: i } = this.targetClientRect;
      let l;
      r + t < window.innerHeight ? (this.style = { top: `${r}px` }, l = i / 2 - 4 + "px") : (this.style = { top: `${n - t}px` }, l = t - i / 2 - 4 + "px"), this.arrow = { top: l }, e === "R" ? this.style.transformOrigin = `0 ${l}` : this.style.transformOrigin = `${s}px ${l}`;
    },
    top() {
      this.level();
      const { clientHeight: e } = this.$el, { top: t, bottom: s } = this.targetClientRect;
      t > e ? (this.direction = "top", this.style.top = t - e - this.gap + "px") : (this.direction = "bottom", this.style.top = s + this.gap + "px");
    },
    bottom() {
      this.level();
      const { clientHeight: e } = this.$el, { top: t, bottom: s } = this.targetClientRect;
      window.innerHeight - s > e ? (this.direction = "bottom", this.style.top = s + this.gap + "px") : (this.direction = "top", this.style.top = t - e - this.gap + "px");
    },
    left() {
      this.vertical("L");
      const { right: e, left: t } = this.targetClientRect, s = this.$el.clientWidth + this.gap;
      t > s ? (this.direction = "left", this.style.left = t - s + "px") : (this.direction = "right", this.style.left = e + this.gap + "px");
    },
    right() {
      this.vertical("R");
      const { right: e, left: t } = this.targetClientRect, s = this.$el.clientWidth + this.gap;
      e + s < window.innerWidth ? (this.direction = "right", this.style.left = e + this.gap + "px") : (this.direction = "left", this.style.left = t - s + "px");
    }
  },
  mounted() {
    this.parentNode = this.$el.parentNode, document.body.appendChild(this.$el);
  },
  activated() {
    this.targetClientRect = this.parentNode.getBoundingClientRect();
    const e = this[this.placement];
    e && e();
  }
}, de = { class: "v-bubble-content" }, me = { class: "v-bubble-arrow" };
function he(e, t, s, r, n, i) {
  return o(), c("div", {
    class: _(["v-bubble", [n.direction]]),
    style: H(n.style)
  }, [
    a("div", de, [
      b(e.$slots, "default", {}, void 0, !0)
    ]),
    a("div", me, [
      a("i", {
        style: H(n.arrow)
      }, null, 4)
    ])
  ], 6);
}
const L = /* @__PURE__ */ p(ue, [["render", he], ["__scopeId", "data-v-645d64d6"]]);
const pe = {
  name: "Tip",
  components: { Bubble: L },
  props: { hover: Boolean },
  data() {
    return { open: !1 };
  },
  methods: {
    mouseenter() {
      this.open = !0;
    },
    mouseleave({ relatedTarget: e }) {
      if (this.hover) {
        let t = e.parentElement;
        for (; t; ) {
          if (t === this.$el)
            return;
          t = t.parentElement;
        }
      }
      this.open = !1;
    },
    bubbleMouseleave() {
      this.hover && (this.open = !1);
    },
    click() {
      this.open = !1;
    }
  },
  mounted() {
    if ("ontouchstart" in document)
      return;
    const { parentNode: e } = this.$el;
    e.addEventListener("mouseenter", this.mouseenter), e.addEventListener("mouseleave", this.mouseleave);
  },
  install(e) {
    e.component(this.name, this);
  }
};
function _e(e, t, s, r, n, i) {
  const l = k("Bubble");
  return o(), f(S, { name: "scale" }, {
    default: v(() => [
      (o(), f(G, null, [
        n.open ? (o(), f(l, E({
          key: 0,
          class: "v-tip"
        }, e.$attrs, {
          onClick: i.click,
          onMouseleave: i.bubbleMouseleave
        }), {
          default: v(() => [
            b(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["onClick", "onMouseleave"])) : h("", !0)
      ], 1024))
    ]),
    _: 3
  });
}
const xn = /* @__PURE__ */ p(pe, [["render", _e]]);
const ve = {
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
}, fe = ["type"];
function ge(e, t, s, r, n, i) {
  return o(), c("button", {
    class: _(["v-button", n.cssClass]),
    type: s.type,
    onClick: t[0] || (t[0] = g((...l) => i.click && i.click(...l), ["prevent"]))
  }, [
    b(e.$slots, "default")
  ], 10, fe);
}
const J = /* @__PURE__ */ p(ve, [["render", ge]]);
const ye = {
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
}, be = {
  key: 0,
  class: "v-dialog-title"
};
function ke(e, t, s, r, n, i) {
  return o(), f(S, {
    name: "fade",
    appear: ""
  }, {
    default: v(() => [
      a("div", {
        class: "v-mask",
        ref: "maskBox",
        onClick: t[0] || (t[0] = (...l) => i.maskClick && i.maskClick(...l)),
        onMousedown: t[1] || (t[1] = g(() => {
        }, ["stop"]))
      }, [
        a("div", {
          class: _(["v-dialog col", s.class])
        }, [
          s.title ? (o(), c("div", be, d(s.title), 1)) : h("", !0),
          b(e.$slots, "default")
        ], 2)
      ], 544)
    ]),
    _: 3
  });
}
const $e = /* @__PURE__ */ p(ye, [["render", ke]]);
const we = {
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
}, Be = { class: "v-dialog-page-main" }, xe = { class: "v-dialog-page-sidebar" };
function Se(e, t, s, r, n, i) {
  return o(), f(S, {
    name: "fade",
    appear: ""
  }, {
    default: v(() => [
      a("section", {
        class: "v-float-mask",
        ref: "maskBox",
        onMousedown: t[1] || (t[1] = g(() => {
        }, ["stop"]))
      }, [
        a("div", Ce, [
          s.title ? (o(), c("header", De, [
            a("i", {
              class: _(s.icon)
            }, null, 2),
            M(" " + d(s.title), 1)
          ])) : h("", !0),
          a("main", Be, [
            b(e.$slots, "default")
          ]),
          a("aside", xe, [
            b(e.$slots, "sidebar")
          ])
        ]),
        a("i", {
          class: "vicon v-dialog-page-close",
          onClick: t[0] || (t[0] = (...l) => i.close && i.close(...l))
        }, "\uE679")
      ], 544)
    ]),
    _: 3
  });
}
const Sn = /* @__PURE__ */ p(we, [["render", Se]]);
const Me = {
  name: "Alert",
  props: {
    color: String,
    type: String
  },
  install(e) {
    e.component(this.name, this);
  }
};
function Ie(e, t, s, r, n, i) {
  return o(), c("div", {
    class: _(["v-alert", `v-alert-${s.type}`])
  }, [
    b(e.$slots, "default")
  ], 2);
}
const Mn = /* @__PURE__ */ p(Me, [["render", Ie]]);
const Fe = {
  name: "FormBox",
  props: {
    label: String,
    error: String
  }
}, Ne = { class: "v-form-box" }, Le = {
  key: 0,
  class: "v-form-box-header"
};
function Te(e, t, s, r, n, i) {
  return o(), c("div", Ne, [
    s.label ? (o(), c("div", Le, d(s.label), 1)) : h("", !0),
    b(e.$slots, "default")
  ]);
}
const I = /* @__PURE__ */ p(Fe, [["render", Te]]), Ee = {
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
}, Re = { class: "v-input" }, Ae = { class: "v-input-before" }, Ye = { class: "v-input-after" }, Ve = {
  key: 1,
  class: "v-input-unit"
}, Pe = {
  key: 1,
  class: "v-input-preview"
}, Ue = {
  key: 1,
  class: "v-input-preview-label"
}, je = { class: "v-input-preview-value" }, Oe = {
  key: 2,
  class: "v-input-preview-unit"
};
function We(e, t, s, r, n, i) {
  const l = k("FormBox");
  return n.edit ? (o(), f(l, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: v(() => [
      a("div", Re, [
        a("div", Ae, [
          b(e.$slots, "before")
        ]),
        $(a("input", E({
          "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input = u)
        }, e.$attrs), null, 16), [
          [Y, n.input]
        ]),
        a("div", Ye, [
          b(e.$slots, "after", {}, () => [
            s.icon ? (o(), c("i", {
              key: 0,
              class: _(s.icon)
            }, null, 2)) : h("", !0),
            s.unit ? (o(), c("span", Ve, d(s.unit), 1)) : h("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : s.value ? (o(), c("div", Pe, [
    s.icon ? (o(), c("i", {
      key: 0,
      class: _(s.icon)
    }, null, 2)) : n.showLabel ? (o(), c("span", Ue, d(n.showLabel) + "\uFF1A", 1)) : h("", !0),
    a("span", je, d(s.value), 1),
    s.unit ? (o(), c("span", Oe, d(s.unit), 1)) : h("", !0)
  ])) : h("", !0);
}
const Q = /* @__PURE__ */ p(Ee, [["render", We]]), X = {
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
        const [, s, r, n] = t;
        return [Number(s), Number(r), Number(n)];
      } else
        return [];
    },
    formatDate(e, t, s) {
      return t < 10 && (t = "0" + t), s < 10 && (s = "0" + s), `${e}\u5E74${t}\u6708${s}`;
    },
    getYMD(e) {
      const t = e.getFullYear(), s = e.getMonth(), r = e.getDate();
      return [t, s + 1, r];
    },
    nweDate(e, t = 0, s = 1) {
      return new Date(e, t - 1, s);
    },
    comparisonYMD(e, t) {
      for (const s in e) {
        const r = e[s], n = t[s];
        if (r > n)
          return !0;
        if (r < n)
          return !1;
      }
    }
  }
};
const Ke = {
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
      const t = e.getFullYear(), s = e.getMonth(), r = e.getDate();
      return [t, s + 1, r];
    },
    nweDate(e, t = 0, s = 1) {
      return new Date(e, t - 1, s);
    },
    generate(e, t, s) {
      const r = new Date(), [n, i, l] = this.getYMD(r);
      e || (e = n, t = i, s = l, this.$emit("change", [e, t, s])), this.year = e, this.month = t;
      const u = this.nweDate(e, t), m = u.getDay() || 7;
      u.setMilliseconds(-1);
      const w = u.getDate();
      let j = 6;
      m !== 1 && (j = m - 2);
      const F = [];
      for (let y = w - j; y <= w; y++)
        F.push({
          date: y,
          class: "v-date-prev-month"
        });
      const O = this.nweDate(e, t + 1);
      O.setMilliseconds(-1);
      const ie = O.getDate();
      for (let y = 1; y <= ie; y++) {
        const N = { date: y };
        y === l && e === n && t === i && (N.class = "v-date-select"), y === this.setDay && e === this.setYear && t === this.setMonth && (N.class = "v-date-prominent"), F.push(N);
      }
      const W = 42 - F.length;
      if (W)
        for (let y = 1; y <= W; y++)
          F.push({
            date: y,
            class: "v-date-next-month"
          });
      const K = [];
      for (let y = 0; y < F.length; y += 7) {
        const N = F.slice(y, y + 7);
        K.push(N);
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
      const { className: t, localName: s, innerText: r } = e.target;
      if (s === "span") {
        t === "v-date-prev-month" ? this.month -= 1 : t === "v-date-next-month" && (this.month += 1), this.currentDate = this.nweDate(this.year, this.month, r), this.monthDate = new Date(this.currentDate);
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
}, He = { class: "v-date-show" }, qe = /* @__PURE__ */ a("div", { class: "v-date-week" }, [
  /* @__PURE__ */ a("span", null, "\u4E00"),
  /* @__PURE__ */ a("span", null, "\u4E8C"),
  /* @__PURE__ */ a("span", null, "\u4E09"),
  /* @__PURE__ */ a("span", null, "\u56DB"),
  /* @__PURE__ */ a("span", null, "\u4E94"),
  /* @__PURE__ */ a("span", null, "\u516D"),
  /* @__PURE__ */ a("span", null, "\u65E5")
], -1);
function ze(e, t, s, r, n, i) {
  return o(), c("div", {
    class: "v-date",
    onClick: t[3] || (t[3] = g(() => {
    }, ["stop"]))
  }, [
    a("div", He, [
      a("i", {
        class: "vicon",
        onClick: t[0] || (t[0] = (l) => i.switchMonth(-1))
      }, "\uEB2A"),
      a("span", null, d(n.year) + " \u5E74 " + d(n.month) + " \u6708", 1),
      a("i", {
        class: "vicon",
        onClick: t[1] || (t[1] = (l) => i.switchMonth(1))
      }, "\uE6B7")
    ]),
    qe,
    a("div", {
      class: "v-date-days",
      onClick: t[2] || (t[2] = (...l) => i.selectDate && i.selectDate(...l))
    }, [
      (o(!0), c(C, null, D(n.dates, (l, u) => (o(), c("ul", {
        class: "v-date-line",
        key: u
      }, [
        (o(!0), c(C, null, D(l, (m, w) => (o(), c("li", {
          key: w,
          class: _(m.class)
        }, [
          a("span", null, d(m.date), 1)
        ], 2))), 128))
      ]))), 128))
    ])
  ]);
}
const q = /* @__PURE__ */ p(Ke, [["render", ze]]);
const Ge = {
  extends: X,
  components: { FormBox: I, Bubble: L },
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
    e.component(this.name, this), e.component(q.name, q);
  }
}, Je = { class: "v-input" }, Qe = ["placeholder"], Xe = /* @__PURE__ */ a("i", { class: "vicon-riqi1" }, null, -1), Ze = {
  key: 1,
  class: "v-input-preview"
}, et = { class: "v-input-preview-label" }, tt = { class: "v-input-preview-value" };
function st(e, t, s, r, n, i) {
  const l = k("Date", !0), u = k("Bubble"), m = k("FormBox");
  return e.edit ? (o(), f(m, {
    key: 0,
    label: s.label,
    error: e.error
  }, {
    default: v(() => [
      a("div", {
        class: "v-date-picker",
        onClick: t[1] || (t[1] = g((...w) => e.click && e.click(...w), ["stop"]))
      }, [
        a("div", Je, [
          $(a("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (w) => e.input = w),
            placeholder: s.placeholder,
            readonly: ""
          }, null, 8, Qe), [
            [x, e.input]
          ]),
          Xe
        ]),
        e.open ? (o(), f(u, {
          key: 0,
          placement: "bottom"
        }, {
          default: v(() => [
            B(l, {
              value: e.ymd,
              onChange: i.change
            }, null, 8, ["value", "onChange"])
          ]),
          _: 1
        })) : h("", !0)
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : s.value ? (o(), c("div", Ze, [
    a("span", et, d(s.label) + "\uFF1A", 1),
    a("span", tt, d(i.setInput(s.value)), 1)
  ])) : h("", !0);
}
const nt = /* @__PURE__ */ p(Ge, [["render", st]]), it = {
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
}, ot = { class: "v-input" }, at = { class: "v-input-before" }, lt = { class: "v-input-after" }, rt = {
  key: 1,
  class: "v-input-unit"
}, ct = {
  key: 1,
  class: "v-input-preview"
}, ut = {
  key: 1,
  class: "v-input-preview-label"
}, dt = { class: "v-input-preview-value" }, mt = {
  key: 2,
  class: "v-input-preview-unit"
};
function ht(e, t, s, r, n, i) {
  const l = k("FormBox");
  return n.edit ? (o(), f(l, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: v(() => [
      a("div", ot, [
        a("div", at, [
          b(e.$slots, "before")
        ]),
        $(a("input", E({
          "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input = u)
        }, e.$attrs), null, 16), [
          [
            Y,
            n.input,
            void 0,
            { number: !0 }
          ]
        ]),
        a("div", lt, [
          b(e.$slots, "after", {}, () => [
            s.icon ? (o(), c("i", {
              key: 0,
              class: _(s.icon)
            }, null, 2)) : h("", !0),
            s.unit ? (o(), c("span", rt, d(s.unit), 1)) : h("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : s.value ? (o(), c("div", ct, [
    s.icon ? (o(), c("i", {
      key: 0,
      class: _(s.icon)
    }, null, 2)) : n.showLabel ? (o(), c("span", ut, d(n.showLabel) + "\uFF1A", 1)) : h("", !0),
    a("span", dt, d(s.value), 1),
    s.unit ? (o(), c("span", mt, d(s.unit), 1)) : h("", !0)
  ])) : h("", !0);
}
const Z = /* @__PURE__ */ p(it, [["render", ht]]);
const pt = {
  extends: X,
  components: { InputNumber: Z, Bubble: L },
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
      const [u, m] = this.getYMD(new Date());
      e = [u, m];
    }
    let [s, r] = e;
    t ? t = this.dateParser(t) : t = [s, r + 1];
    let n, i;
    return e[1] === t[1] ? (n = [e, t], i = [
      [s, r + 1],
      [s, r + 1]
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
          const [r, n] = t;
          this.comparisonYMD(n, r) ? this["picker" + e] = [r, n] : this["picker" + e] = [n, r], this.open = !1;
        }
      }
    },
    comparisonYMD(e, t) {
      for (let s in e) {
        const r = e[s], n = t[s];
        if (r > n)
          return !0;
        if (r < n)
          return !1;
      }
    }
  }
};
function _t(e, t, s, r, n, i) {
  const l = k("DateRange", !0), u = k("Bubble");
  return o(), c("div", {
    class: "v-date-range",
    onClick: t[4] || (t[4] = g((...m) => e.click && e.click(...m), ["stop"]))
  }, [
    $(a("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (m) => n.input = m),
      type: "text",
      placeholder: "\u5F00\u59CB\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [x, n.input]
    ]),
    $(a("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (m) => n.input = m),
      type: "text",
      placeholder: "\u7ED3\u675F\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [x, n.input]
    ]),
    e.open ? (o(), f(u, {
      key: 0,
      class: "v-date-range-box",
      placement: "bottom"
    }, {
      default: v(() => [
        B(l, {
          value: n.pickerA,
          onChange: t[2] || (t[2] = (m) => i.change("A", m))
        }, null, 8, ["value"]),
        B(l, {
          value: n.pickerB,
          onChange: t[3] || (t[3] = (m) => i.change("B", m))
        }, null, 8, ["value"])
      ]),
      _: 1
    })) : h("", !0)
  ]);
}
const vt = /* @__PURE__ */ p(pt, [["render", _t]]);
const ft = {
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
}, gt = { class: "v-input-range" }, yt = ["placeholder"], bt = /* @__PURE__ */ a("span", null, "~", -1), kt = ["placeholder"], $t = {
  key: 1,
  class: "v-input-preview"
}, wt = {
  key: 1,
  class: "v-input-preview-label"
}, Ct = { class: "v-input-preview-value" }, Dt = { class: "v-input-preview-unit" };
function Bt(e, t, s, r, n, i) {
  const l = k("FormBox");
  return n.edit ? (o(), f(l, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: v(() => [
      a("div", gt, [
        s.icon ? (o(), c("i", {
          key: 0,
          class: _(s.icon)
        }, null, 2)) : h("", !0),
        $(a("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input[0] = u),
          type: "number",
          placeholder: s.placeholder[0],
          onInput: t[1] || (t[1] = (...u) => i.min && i.min(...u))
        }, null, 40, yt), [
          [x, n.input[0]]
        ]),
        bt,
        $(a("input", {
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (u) => n.input[1] = u),
          placeholder: s.placeholder[1],
          onInput: t[3] || (t[3] = (...u) => i.max && i.max(...u))
        }, null, 40, kt), [
          [x, n.input[1]]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : (o(), c("div", $t, [
    s.icon ? (o(), c("i", {
      key: 0,
      class: _(s.icon)
    }, null, 2)) : (o(), c("span", wt, d(s.label) + "\uFF1A", 1)),
    a("span", Ct, d(s.value[0]) + " - " + d(s.value[1]), 1),
    a("span", Dt, d(s.unit), 1)
  ]));
}
const xt = /* @__PURE__ */ p(ft, [["render", Bt]]), St = {
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
}, Mt = { class: "v-input" };
function It(e, t, s, r, n, i) {
  const l = k("FormBox");
  return o(), f(l, {
    label: s.label,
    error: r.error
  }, {
    default: v(() => [
      a("div", Mt, [
        $(a("input", E({
          "onUpdate:modelValue": t[0] || (t[0] = (u) => r.input = u)
        }, e.$attrs), null, 16), [
          [Y, r.input]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"]);
}
const Ft = /* @__PURE__ */ p(St, [["render", It]]);
const Nt = {
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
}, Lt = { class: "radio-label" };
function Tt(e, t, s, r, n, i) {
  return o(), c("div", {
    class: "v-radio",
    onClick: t[0] || (t[0] = (...l) => i.click && i.click(...l))
  }, [
    a("div", {
      class: _(["radio-circular", { "radio-highlight": n.status }])
    }, null, 2),
    a("span", Lt, [
      b(e.$slots, "default")
    ])
  ]);
}
const Et = /* @__PURE__ */ p(Nt, [["render", Tt]]), z = {
  text: Q,
  date: nt,
  daterange: vt,
  number: Z,
  numberrange: xt,
  password: Ft,
  radio: Et
}, In = {
  name: "Input",
  render() {
    const { type: e, range: t } = this.$attrs;
    let s = z[e];
    return s ? t !== void 0 && (s = z[e + "range"]) : s = Q, A(s);
  }
};
const Rt = {
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
}, At = {
  key: 0,
  class: "v-img-box"
}, Yt = ["src"];
function Vt(e, t, s, r, n, i) {
  return o(), c("div", {
    class: _(["v-img", { "v-img-radius": s.radius }])
  }, [
    s.src ? (o(), c("div", At, [
      a("img", { src: s.src }, null, 8, Yt)
    ])) : (o(), c("i", {
      key: 1,
      class: _(["v-img-null", s.icon])
    }, null, 2))
  ], 2);
}
const Fn = /* @__PURE__ */ p(Rt, [["render", Vt]]);
const Pt = {
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
}, Ut = {
  key: 0,
  class: "v-image-preview-header"
}, jt = { class: "v-image-preview-title" }, Ot = { class: "v-image-preview-main" }, Wt = ["src"], Kt = {
  key: 1,
  class: "v-image-preview-map"
}, Ht = ["src", "onMouseover"], qt = {
  key: 2,
  class: "v-image-preview-footer"
}, zt = /* @__PURE__ */ a("i", { class: "v-image-preview-close vicon-cha" }, null, -1);
function Gt(e, t, s, r, n, i) {
  return o(), f(S, {
    name: "fade",
    appear: ""
  }, {
    default: v(() => [
      a("div", {
        class: "v-image-preview",
        ref: "maskBox",
        onClick: t[2] || (t[2] = (l) => e.$emit("close"))
      }, [
        s.title ? (o(), c("div", Ut, [
          a("div", jt, d(s.title), 1)
        ])) : h("", !0),
        a("div", Ot, [
          n.image ? (o(), c("img", {
            key: 0,
            class: "v-image-preview-img",
            src: n.image.src,
            onClick: t[0] || (t[0] = g(() => {
            }, ["stop"]))
          }, null, 8, Wt)) : h("", !0)
        ]),
        s.images.length > 1 ? (o(), c("div", Kt, [
          (o(!0), c(C, null, D(s.images, (l, u) => (o(), c("img", {
            key: u,
            class: _({ "v-image-preview-highlight": l === n.image }),
            src: l.src,
            onClick: t[1] || (t[1] = g(() => {
            }, ["stop"])),
            onMouseover: (m) => i.mouseover(l)
          }, null, 42, Ht))), 128))
        ])) : h("", !0),
        n.image.name ? (o(), c("div", qt, d(n.image.name), 1)) : h("", !0),
        zt
      ], 512)
    ]),
    _: 1
  });
}
const ee = /* @__PURE__ */ p(Pt, [["render", Gt]]);
const Jt = {
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
          const r = await new Promise(function(n) {
            s.onload = () => n(s.result);
          });
          this.image = { file: t, src: r };
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
        s.append("image", t), await this.$options.network(e, s).then((r) => {
          const [n] = r.image;
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
}, Qt = (e) => (V("data-v-422a6ba1"), e = e(), P(), e), Xt = { class: "v-image-box" }, Zt = ["src"], es = /* @__PURE__ */ Qt(() => /* @__PURE__ */ a("i", { class: "vicon-add" }, null, -1)), ts = {
  key: 1,
  class: "v-image-show"
}, ss = ["src"], ns = {
  key: 1,
  class: "v-image-null vicon-tupian"
};
function is(e, t, s, r, n, i) {
  return o(), c("div", {
    class: _(["v-image", { "v-image-round": s.round }])
  }, [
    n.edit ? (o(), c(C, { key: 0 }, [
      n.image.src ? (o(), c("div", {
        key: 0,
        class: "v-image-edit",
        onClick: t[1] || (t[1] = (...l) => i.preview && i.preview(...l))
      }, [
        a("div", Xt, [
          a("img", {
            src: n.image.src
          }, null, 8, Zt)
        ]),
        a("i", {
          class: "v-image-delete vicon-cha",
          onClick: t[0] || (t[0] = g((...l) => i.destroy && i.destroy(...l), ["stop"]))
        })
      ])) : (o(), c("div", {
        key: 1,
        class: "v-image-add",
        onClick: t[3] || (t[3] = (...l) => i.add && i.add(...l))
      }, [
        es,
        a("input", {
          ref: "input",
          type: "file",
          accept: "image/*",
          name: "file",
          onChange: t[2] || (t[2] = (l) => i.change(l.target.files))
        }, null, 544)
      ]))
    ], 64)) : (o(), c("div", ts, [
      n.image.src ? (o(), c("div", {
        key: 0,
        class: "v-image-box",
        onClick: t[4] || (t[4] = g((...l) => i.preview && i.preview(...l), ["stop"]))
      }, [
        a("img", {
          src: n.image.src
        }, null, 8, ss)
      ])) : (o(), c("i", ns))
    ]))
  ], 2);
}
const Nn = /* @__PURE__ */ p(Jt, [["render", is], ["__scopeId", "data-v-422a6ba1"]]);
const os = {
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
        const { images: r, currentKey: n } = this, i = r[t];
        i && (r.splice(n, 1), r.splice(t, 0, i)), this.currentTarget.style.opacity = "", this.currentKey = t, this.currentTarget = s, s.style.opacity = 0;
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
          const r = await new Promise(function(i) {
            s.onload = () => {
              i(s.result);
            };
          }), n = { id: this.id++, src: r, file: t };
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
      for (const r of this.images)
        r.file && (t.append("images", r.file), s.push(r));
      s.length && await this.$options.network(e, t).then((r) => {
        const { images: n } = r;
        for (const i in n) {
          const l = n[i], u = s[i];
          u.src = l, delete u.file;
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
}, te = (e) => (V("data-v-ae047926"), e = e(), P(), e), as = ["onDragstart", "onDragover", "onDragenter", "onDragend", "onClick"], ls = { class: "v-images-item" }, rs = ["src", "title"], cs = ["placeholder", "onUpdate:modelValue"], us = ["onClick"], ds = /* @__PURE__ */ te(() => /* @__PURE__ */ a("i", { class: "vicon-add" }, null, -1)), ms = {
  key: 1,
  class: "v-images v-images-preview"
}, hs = ["onClick"], ps = ["src"], _s = {
  key: 1,
  class: "v-image-null"
}, vs = /* @__PURE__ */ te(() => /* @__PURE__ */ a("i", { class: "vicon-tupian" }, null, -1)), fs = [
  vs
];
function gs(e, t, s, r, n, i) {
  return r.edit ? (o(), c("div", {
    key: 0,
    class: "v-images",
    onMousedownCapture: t[3] || (t[3] = g(() => {
    }, ["stop"])),
    onMousemoveCapture: t[4] || (t[4] = g(() => {
    }, ["stop"])),
    onMouseupCapture: t[5] || (t[5] = g(() => {
    }, ["stop"]))
  }, [
    B(U, {
      name: "drag",
      onBeforeLeave: i.onBeforeLeave
    }, {
      default: v(() => [
        r.images.length ? (o(!0), c(C, { key: 0 }, D(s.value, (l, u) => (o(), c("div", {
          key: l.id,
          class: "v-draggable-item",
          draggable: "true",
          onDragstart: g((m) => i.dragstart(m, u), ["stop"]),
          onDragover: g((m) => i.dragover(m, u), ["stop"]),
          onDragenter: g((m) => i.dragenter(m, u), ["stop"]),
          onDragend: g((m) => i.dragend(m, u), ["stop"]),
          onClick: (m) => i.preview(u)
        }, [
          a("div", ls, [
            a("img", {
              draggable: "false",
              src: l.src,
              title: l.name
            }, null, 8, rs),
            $(a("input", {
              draggable: "false",
              class: "v-images-input",
              type: "text",
              placeholder: s.placeholder,
              "onUpdate:modelValue": (m) => l.name = m,
              onClick: t[0] || (t[0] = g(() => {
              }, ["stop"]))
            }, null, 8, cs), [
              [x, l.name]
            ])
          ]),
          a("i", {
            class: "v-images-delete vicon-cha",
            onClick: g((m) => i.destroy(l, u), ["stop"])
          }, null, 8, us)
        ], 40, as))), 128)) : h("", !0),
        $(a("div", {
          key: "add",
          class: "v-images-add",
          onClick: t[2] || (t[2] = (...l) => i.add && i.add(...l))
        }, [
          ds,
          a("input", {
            ref: "input",
            type: "file",
            accept: "image/*",
            name: "file",
            multiple: "multiple",
            onChange: t[1] || (t[1] = (l) => i.change(l.target.files))
          }, null, 544)
        ], 512), [
          [R, r.images.length < s.max]
        ])
      ]),
      _: 1
    }, 8, ["onBeforeLeave"])
  ], 32)) : (o(), c("div", ms, [
    s.value.length ? (o(!0), c(C, { key: 0 }, D(s.value, (l, u) => (o(), c("div", {
      class: "v-images-item",
      key: u,
      onClick: (m) => i.preview(u)
    }, [
      a("img", {
        src: l.src
      }, null, 8, ps)
    ], 8, hs))), 128)) : (o(), c("div", _s, fs))
  ]));
}
const Ln = /* @__PURE__ */ p(os, [["render", gs], ["__scopeId", "data-v-ae047926"]]);
const ys = {
  name: "FloatMenu",
  components: { Bubble: L },
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
}, bs = { class: "v-float-menu-items" }, ks = ["onClick"];
function $s(e, t, s, r, n, i) {
  const l = k("Bubble");
  return o(), f(S, {
    name: "scale",
    appear: ""
  }, {
    default: v(() => [
      (o(), f(G, null, [
        n.open ? (o(), f(l, {
          key: 0,
          class: "v-float-menu",
          gap: s.gap
        }, {
          default: v(() => [
            a("ul", bs, [
              (o(!0), c(C, null, D(s.options, (u, m) => (o(), c("li", {
                class: _(["vt-sub vt-hover", { "vt-active": s.current == m }]),
                key: m,
                onClick: (w) => i.select(u)
              }, [
                a("i", {
                  class: _(u.icon)
                }, null, 2),
                M(" " + d(u.name), 1)
              ], 10, ks))), 128))
            ])
          ]),
          _: 1
        }, 8, ["gap"])) : h("", !0)
      ], 1024))
    ]),
    _: 1
  });
}
const Tn = /* @__PURE__ */ p(ys, [["render", $s]]);
const ws = {
  name: "Dropdown",
  components: { Bubble: L },
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
function Cs(e, t, s, r, n, i) {
  const l = k("Bubble");
  return o(), c("div", {
    class: "v-dropdown",
    onClick: t[0] || (t[0] = (...u) => i.click && i.click(...u))
  }, [
    a("div", {
      class: _(["v-dropdown-select", { active: s.name && s.name !== n.oneName }])
    }, [
      M(d(s.name || n.oneName) + " ", 1),
      a("i", {
        class: _(["vicon arrow", { arrow_up: n.open }])
      }, "\uE678", 2)
    ], 2),
    B(S, { name: "scale" }, {
      default: v(() => [
        n.open ? (o(), f(l, {
          key: 0,
          placement: "bottom",
          gap: s.gap
        }, {
          default: v(() => [
            b(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["gap"])) : h("", !0)
      ]),
      _: 3
    })
  ]);
}
const En = /* @__PURE__ */ p(ws, [["render", Cs]]);
const Ds = {
  name: "Form",
  components: { Button: J },
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
}, Bs = { class: "v-form" }, xs = { class: "v-form-header" }, Ss = { key: 0 }, Ms = {
  key: 0,
  class: "remark"
}, Is = { class: "v-form-main" }, Fs = {
  key: 0,
  class: "v-form-footer"
}, Ns = /* @__PURE__ */ M("\u786E\u8BA4");
function Ls(e, t, s, r, n, i) {
  const l = k("Button");
  return o(), c("div", Bs, [
    a("div", xs, [
      s.name ? (o(), c("h4", Ss, [
        M(d(s.name) + " ", 1),
        n.status === !0 ? (o(), c("span", Ms, d(s.remark), 1)) : h("", !0)
      ])) : h("", !0)
    ]),
    a("div", Is, [
      b(e.$slots, "default")
    ]),
    n.confirm ? (o(), c("div", Fs, [
      B(l, {
        color: "success",
        onClick: t[0] || (t[0] = (u) => e.$emit("confirm"))
      }, {
        default: v(() => [
          Ns
        ]),
        _: 1
      })
    ])) : h("", !0)
  ]);
}
const Rn = /* @__PURE__ */ p(Ds, [["render", Ls]]);
const Ts = {
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
}, Es = { class: "v-tag" }, Rs = ["onClick"], As = ["placeholder"], Ys = {
  key: 1,
  class: "v-tag-preview"
}, Vs = {
  key: 0,
  class: "v-tag-preview-label"
};
function Ps(e, t, s, r, n, i) {
  const l = k("FormBox");
  return n.edit ? (o(), f(l, {
    key: 0,
    class: "w100",
    label: s.label,
    error: n.error
  }, {
    default: v(() => [
      a("div", Es, [
        B(U, {
          name: "tag",
          onBeforeLeave: i.onBeforeLeave
        }, {
          default: v(() => [
            (o(!0), c(C, null, D(n.tags, (u, m) => (o(), c("div", {
              class: "v-tag-item",
              key: u
            }, [
              M(d(u) + " ", 1),
              a("i", {
                class: "vicon",
                onClick: (w) => i.destroy(m)
              }, "\uE679", 8, Rs)
            ]))), 128)),
            $(a("input", {
              class: "v-tag-input",
              key: "tag-inpu",
              placeholder: s.placeholder,
              ref: "input",
              type: "text",
              "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input = u),
              onKeyup: t[1] || (t[1] = oe((...u) => i.enter && i.enter(...u), ["enter"])),
              onBlur: t[2] || (t[2] = (...u) => i.blur && i.blur(...u))
            }, null, 40, As), [
              [x, n.input]
            ])
          ]),
          _: 1
        }, 8, ["onBeforeLeave"])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : s.value.length ? (o(), c("div", Ys, [
    s.label ? (o(), c("span", Vs, d(s.label) + "\uFF1A", 1)) : h("", !0),
    (o(!0), c(C, null, D(s.value, (u) => (o(), c("span", {
      class: "v-tag-preview-item",
      key: u
    }, d(u), 1))), 128))
  ])) : h("", !0);
}
const An = /* @__PURE__ */ p(Ts, [["render", Ps], ["__scopeId", "data-v-5fc7ee63"]]);
const Us = {
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
}, js = (e) => (V("data-v-54f1654a"), e = e(), P(), e), Os = /* @__PURE__ */ js(() => /* @__PURE__ */ a("div", { class: "v-switch-circle" }, null, -1)), Ws = [
  Os
];
function Ks(e, t, s, r, n, i) {
  return o(), c("div", {
    class: _(["v-switch", { "v-switch-open": n.status, "v-switch-disable": s.disable }]),
    onClick: t[0] || (t[0] = (...l) => i.click && i.click(...l)),
    onDblclick: t[1] || (t[1] = g(() => {
    }, ["stop"]))
  }, Ws, 34);
}
const Yn = /* @__PURE__ */ p(Us, [["render", Ks], ["__scopeId", "data-v-54f1654a"]]);
const se = {
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
}, Hs = {
  extends: se,
  mounted() {
    this.select(this.value);
  }
}, qs = {
  key: 0,
  class: "show-current"
}, zs = {
  key: 1,
  class: "show-current placeholder"
}, Gs = {
  key: 1,
  class: "v-select-preview"
}, Js = { class: "v-select-preview-name" };
function Qs(e, t, s, r, n, i) {
  const l = k("FormBox");
  return e.ready === !1 ? (o(), f(l, {
    key: 0,
    ref: "FormBox",
    label: e.label
  }, {
    default: v(() => [
      a("div", {
        class: "v-select",
        onClick: t[0] || (t[0] = (...u) => e.click && e.click(...u))
      }, [
        e.current ? (o(), c("div", qs, d(e.current), 1)) : (o(), c("div", zs, d(e.placeholder), 1)),
        a("i", {
          class: _(["vicon arrow", { arrow_up: e.drop }])
        }, "\uE678", 2),
        B(S, {
          name: "select-drop",
          appear: ""
        }, {
          default: v(() => [
            $(a("ul", null, [
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
  }, 8, ["label"])) : (o(), c("div", Gs, [
    a("span", Js, d(e.label) + "\uFF1A", 1),
    a("span", null, d(e.current || "-"), 1)
  ]));
}
const Xs = /* @__PURE__ */ p(Hs, [["render", Qs]]);
const Zs = {
  extends: se,
  methods: {
    change() {
      this.$emit("input", this.input);
    }
  }
}, en = ["placeholder"];
function tn(e, t, s, r, n, i) {
  const l = k("FormBox");
  return o(), f(l, {
    ref: "FormBox",
    label: e.label
  }, {
    default: v(() => [
      a("div", {
        class: "v-select",
        onClick: t[2] || (t[2] = (...u) => e.click && e.click(...u))
      }, [
        $(a("input", {
          placeholder: e.placeholder,
          "onUpdate:modelValue": t[0] || (t[0] = (u) => e.current = u),
          onChange: t[1] || (t[1] = (...u) => i.change && i.change(...u))
        }, null, 40, en), [
          [x, e.current]
        ]),
        a("i", {
          class: _(["vicon arrow", { arrow_up: e.drop }])
        }, "\uE678", 2),
        B(S, {
          name: "drop",
          appear: ""
        }, {
          default: v(() => [
            $(a("ul", null, [
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
const sn = /* @__PURE__ */ p(Zs, [["render", tn]]), nn = {
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
function on(e, t, s, r, n, i) {
  return o(), c("li", {
    class: _({ "vt-active": n.active }),
    onClick: t[0] || (t[0] = (l) => i.select(s.value))
  }, [
    b(e.$slots, "default", {}, () => [
      M(d(s.label || s.value), 1)
    ])
  ], 2);
}
const an = /* @__PURE__ */ p(nn, [["render", on]]), Vn = {
  name: "Select",
  render() {
    const { edit: e, multiple: t } = this.$attrs;
    return e === !0 ? A(sn) : A(Xs, this.$attrs, this.$slots);
  },
  Option: an
};
function ln(e, t) {
  return ae(e).mount(t);
}
const ne = { Component: ln };
const rn = {
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
      const r = document.createElement("section");
      r.id = "v-message-layer", document.body.appendChild(r), this.instance = ne.Component(this, r);
    }
    const t = this.id++;
    e.id = t, this.instance.components.unshift(le(e));
    const { time: s } = e;
    return s && setTimeout(() => this.instance.close(t), s), this.instance.show = !0, t;
  },
  close(e) {
    this.instance.close(e);
  }
};
function cn(e, t, s, r, n, i) {
  return o(), f(U, { name: "tg-top" }, {
    default: v(() => [
      (o(!0), c(C, null, D(n.components, (l) => (o(), c("div", {
        class: "v-message-item",
        key: l.id
      }, [
        (o(), f(re(l)))
      ]))), 128))
    ]),
    _: 1
  });
}
const T = /* @__PURE__ */ p(rn, [["render", cn], ["__scopeId", "data-v-9c1c8f7b"]]);
const un = {
  add(e) {
    const { type: t = "", body: s = "", time: r = 3e3 } = e;
    T.add({
      data() {
        return {
          type: t,
          body: s
        };
      },
      render: this.render,
      time: r
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
}, dn = { class: "v-message" }, mn = { class: "body" };
function hn(e, t, s, r, n, i) {
  return o(), c("div", dn, [
    a("i", {
      class: _(["vicon", `vicon-${e.type}`])
    }, null, 2),
    a("span", mn, d(e.body), 1)
  ]);
}
const Pn = /* @__PURE__ */ p(un, [["render", hn]]);
const pn = {
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
      document.body.appendChild(s), this.instance = ne.Component(
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
  components: { Dialog: $e, Button: J },
  methods: {
    onConfirm() {
      this.confirm && this.confirm(this), this.open = !1;
    },
    onClose() {
      this.close && this.close(), this.open = !1;
    }
  }
}, _n = { class: "v-confirm-body center" }, vn = { class: "v-confirm-footer" };
function fn(e, t, s, r, n, i) {
  const l = k("Dialog");
  return $((o(), f(l, {
    class: "v-confirm",
    title: e.title,
    onClose: i.onClose
  }, {
    default: v(() => [
      a("div", _n, d(e.body), 1),
      a("div", vn, [
        a("button", {
          class: "v-confirm-close",
          onClick: t[0] || (t[0] = (...u) => i.onClose && i.onClose(...u))
        }, d(e.cancelButton), 1),
        a("button", {
          class: "v-confirm-confirm",
          onClick: t[1] || (t[1] = (...u) => i.onConfirm && i.onConfirm(...u))
        }, d(e.confirmButton), 1)
      ])
    ]),
    _: 1
  }, 8, ["title", "onClose"])), [
    [R, e.open]
  ]);
}
const Un = /* @__PURE__ */ p(pn, [["render", fn], ["__scopeId", "data-v-b23319c2"]]);
const gn = {
  add(e) {
    const { title: t = "", body: s = "", time: r, confirm: n, close: i } = e;
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
      time: r
    });
  }
}, yn = { class: "v-notification vertical" }, bn = { key: 0 }, kn = /* @__PURE__ */ a("i", { class: "vicon-info" }, null, -1), $n = {
  key: 1,
  class: "body"
}, wn = { class: "actions" };
function Cn(e, t, s, r, n, i) {
  return o(), c("div", yn, [
    e.title ? (o(), c("h4", bn, [
      kn,
      M(" " + d(e.title), 1)
    ])) : h("", !0),
    a("i", {
      class: "ficon-cha close center",
      onClick: t[0] || (t[0] = (...l) => e.close && e.close(...l))
    }),
    e.body ? (o(), c("div", $n, d(e.body), 1)) : h("", !0),
    a("div", wn, [
      e.showConfirm ? (o(), c("button", {
        key: 0,
        class: "confirm",
        onClick: t[1] || (t[1] = (...l) => e.confirm && e.confirm(...l))
      }, " Confirm ")) : h("", !0)
    ])
  ]);
}
const jn = /* @__PURE__ */ p(gn, [["render", Cn]]);
export {
  Mn as Alert,
  L as Bubble,
  J as Button,
  $e as Dialog,
  Sn as DialogPage,
  En as Dropdown,
  Tn as FloatMenu,
  Rn as Form,
  Nn as Image,
  Ln as Images,
  Fn as Img,
  In as Input,
  Vn as Select,
  Yn as Switch,
  An as Tag,
  xn as Tip,
  Un as confirm,
  Pn as message,
  jn as notification
};
