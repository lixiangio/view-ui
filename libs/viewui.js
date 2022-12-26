import { openBlock as o, createElementBlock as c, normalizeClass as v, withModifiers as b, renderSlot as y, normalizeStyle as W, createElementVNode as a, resolveComponent as $, createBlock as g, Transition as S, withCtx as _, KeepAlive as G, mergeProps as j, createCommentVNode as m, toDisplayString as h, createTextVNode as B, withDirectives as w, vModelDynamic as z, Fragment as x, renderList as C, vModelText as I, createVNode as D, h as U, pushScopeId as X, popScopeId as q, vShow as Y, TransitionGroup as J, withKeys as ae, createApp as re, markRaw as ce, resolveDynamicComponent as ue } from "/dist/libs/vue.js";
import de from "/dist/libs/dayjs.js";
const p = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [l, n] of t)
    s[l] = n;
  return s;
}, he = {
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
}, pe = ["type"];
function me(e, t, s, l, n, i) {
  return o(), c("button", {
    class: v(["v-button", n.cssClass]),
    type: s.type,
    onClick: t[0] || (t[0] = b((...r) => i.click && i.click(...r), ["prevent"]))
  }, [
    y(e.$slots, "default")
  ], 10, pe);
}
const Q = /* @__PURE__ */ p(he, [["render", me]]);
const _e = {
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
      const { targetClientRect: e, $el: t } = this, { left: s, right: l, width: n } = e, i = (t.clientWidth - n) / 2, r = n / 2;
      s < i ? (this.style.left = s + "px", this.arrow = { left: r - 4 + "px" }) : window.innerWidth - l < i && (this.style.right = window.innerWidth - l + "px", this.arrow = { right: r - 4 + "px" });
    },
    vertical() {
      const { clientHeight: e } = this.$el, { top: t, bottom: s, height: l } = this.targetClientRect;
      if (t + e < window.innerHeight) {
        this.style.top = `${t}px`;
        const n = l / 2 - 4;
        this.style.transformOrigin = `0 ${n}px`, this.arrow = { top: `${n}px` };
      } else {
        this.style.top = s - e + "px";
        const n = e - l / 2 - 4 + "px";
        this.style.transformOrigin = `0 ${n}`, this.arrow = { top: n };
      }
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
}, ve = { class: "v-bubble-content" }, fe = { class: "v-bubble-arrow" };
function ge(e, t, s, l, n, i) {
  return o(), c("div", {
    class: v(["v-bubble", [n.direction]]),
    style: W(n.style)
  }, [
    a("div", ve, [
      y(e.$slots, "default", {}, void 0, !0)
    ]),
    a("div", fe, [
      a("i", {
        style: W(n.arrow)
      }, null, 4)
    ])
  ], 6);
}
const F = /* @__PURE__ */ p(_e, [["render", ge], ["__scopeId", "data-v-79d1859a"]]);
const ye = {
  name: "Tip",
  components: { Bubble: F },
  props: { hover: Boolean },
  data() {
    return this.timeStamp = 0, { open: !1 };
  },
  methods: {
    mouseenter({ timeStamp: e }) {
      e - this.timeStamp > 200 && (this.open = !0), this.timeStamp = e;
    },
    mouseleave({ timeStamp: e, relatedTarget: t }) {
      if (this.timeStamp = e, this.hover) {
        let s = t.parentElement;
        for (; s; ) {
          if (s === this.$el)
            return;
          s = s.parentElement;
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
function be(e, t, s, l, n, i) {
  const r = $("Bubble");
  return o(), g(S, { name: "scale" }, {
    default: _(() => [
      (o(), g(G, null, [
        n.open ? (o(), g(r, j({
          key: 0,
          class: "v-tip"
        }, e.$attrs, {
          onClick: i.click,
          onMouseleave: i.bubbleMouseleave
        }), {
          default: _(() => [
            y(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["onClick", "onMouseleave"])) : m("", !0)
      ], 1024))
    ]),
    _: 3
  });
}
const hi = /* @__PURE__ */ p(ye, [["render", be]]);
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
function we(e, t, s, l, n, i) {
  return o(), g(S, {
    name: "fade",
    appear: ""
  }, {
    default: _(() => [
      a("div", {
        class: "v-mask",
        ref: "maskBox",
        onClick: t[0] || (t[0] = (...r) => i.maskClick && i.maskClick(...r)),
        onMousedown: t[1] || (t[1] = b(() => {
        }, ["stop"]))
      }, [
        a("div", {
          class: v(["v-dialog col", s.class])
        }, [
          s.title ? (o(), c("div", ke, h(s.title), 1)) : m("", !0),
          y(e.$slots, "default")
        ], 2)
      ], 544)
    ]),
    _: 3
  });
}
const xe = /* @__PURE__ */ p($e, [["render", we]]);
const Ce = {
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
}, De = { class: "v-dialog-page vertical" }, Se = {
  key: 0,
  class: "v-dialog-page-header"
}, Be = { class: "v-dialog-page-main" }, Me = { class: "v-dialog-page-sidebar" };
function Ie(e, t, s, l, n, i) {
  return o(), g(S, {
    name: "fade",
    appear: ""
  }, {
    default: _(() => [
      a("section", {
        class: "v-float-mask",
        ref: "maskBox",
        onMousedown: t[1] || (t[1] = b(() => {
        }, ["stop"]))
      }, [
        a("div", De, [
          s.title ? (o(), c("header", Se, [
            a("i", {
              class: v(s.icon)
            }, null, 2),
            B(" " + h(s.title), 1)
          ])) : m("", !0),
          a("main", Be, [
            y(e.$slots, "default")
          ]),
          a("aside", Me, [
            y(e.$slots, "sidebar")
          ])
        ]),
        a("i", {
          class: "vicon v-dialog-page-close",
          onClick: t[0] || (t[0] = (...r) => i.close && i.close(...r))
        }, "\uE679")
      ], 544)
    ]),
    _: 3
  });
}
const pi = /* @__PURE__ */ p(Ce, [["render", Ie]]);
const Le = {
  name: "Alert",
  props: {
    color: String,
    type: String
  },
  install(e) {
    e.component(this.name, this);
  }
};
function Fe(e, t, s, l, n, i) {
  return o(), c("div", {
    class: v(["v-alert", `v-alert-${s.type}`])
  }, [
    y(e.$slots, "default")
  ], 2);
}
const mi = /* @__PURE__ */ p(Le, [["render", Fe]]);
const Te = {
  name: "Loading",
  props: {
    status: String
  },
  install(e) {
    e.component(this.name, this);
  }
}, Ne = {
  key: 0,
  class: "center"
}, Ee = /* @__PURE__ */ a("div", { class: "v-loading-animation" }, [
  /* @__PURE__ */ a("div"),
  /* @__PURE__ */ a("div"),
  /* @__PURE__ */ a("div"),
  /* @__PURE__ */ a("div"),
  /* @__PURE__ */ a("div")
], -1), Re = [
  Ee
], Ae = {
  key: 1,
  class: "v-loading"
}, We = {
  key: 0,
  class: "empty center"
}, Ye = { class: "v-loading-main" };
function Ve(e, t, s, l, n, i) {
  return s.status === "loading" ? (o(), c("div", Ne, Re)) : (o(), c("div", Ae, [
    s.status !== "data" ? (o(), c("div", We, "\u6682\u65E0\u6570\u636E")) : m("", !0),
    a("div", Ye, [
      y(e.$slots, "default")
    ])
  ]));
}
const Pe = /* @__PURE__ */ p(Te, [["render", Ve]]);
const Ue = {
  name: "FormBox",
  props: {
    label: String,
    error: String
  }
}, je = { class: "v-form-box" }, Xe = {
  key: 0,
  class: "v-form-box-header"
};
function qe(e, t, s, l, n, i) {
  return o(), c("div", je, [
    s.label ? (o(), c("div", Xe, h(s.label), 1)) : m("", !0),
    y(e.$slots, "default")
  ]);
}
const L = /* @__PURE__ */ p(Ue, [["render", qe]]), ze = {
  name: "InputText",
  emits: ["click"],
  components: { FormBox: L },
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
}, He = { class: "v-input" }, Oe = { class: "v-input-before" }, Ke = { class: "v-input-after" }, Ge = {
  key: 1,
  class: "v-input-unit"
}, Je = {
  key: 1,
  class: "v-input-preview"
}, Qe = {
  key: 1,
  class: "v-input-preview-label"
}, Ze = { class: "v-input-preview-value" }, et = {
  key: 2,
  class: "v-input-preview-unit"
};
function tt(e, t, s, l, n, i) {
  const r = $("FormBox");
  return n.edit ? (o(), g(r, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      a("div", He, [
        a("div", Oe, [
          y(e.$slots, "before")
        ]),
        w(a("input", j({
          "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input = u)
        }, e.$attrs), null, 16), [
          [z, n.input]
        ]),
        a("div", Ke, [
          y(e.$slots, "after", {}, () => [
            s.icon ? (o(), c("i", {
              key: 0,
              class: v(s.icon)
            }, null, 2)) : m("", !0),
            s.unit ? (o(), c("span", Ge, h(s.unit), 1)) : m("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : s.value ? (o(), c("div", Je, [
    s.icon ? (o(), c("i", {
      key: 0,
      class: v(s.icon)
    }, null, 2)) : n.showLabel ? (o(), c("span", Qe, h(n.showLabel) + "\uFF1A", 1)) : m("", !0),
    a("span", Ze, h(s.value), 1),
    s.unit ? (o(), c("span", et, h(s.unit), 1)) : m("", !0)
  ])) : m("", !0);
}
const Z = /* @__PURE__ */ p(ze, [["render", tt]]), ee = {
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
        const [, s, l, n] = t;
        return [Number(s), Number(l), Number(n)];
      } else
        return [];
    },
    formatDate(e, t, s) {
      return t < 10 && (t = "0" + t), s < 10 && (s = "0" + s), `${e}\u5E74${t}\u6708${s}`;
    },
    getYMD(e) {
      const t = e.getFullYear(), s = e.getMonth(), l = e.getDate();
      return [t, s + 1, l];
    },
    nweDate(e, t = 0, s = 1) {
      return new Date(e, t - 1, s);
    },
    comparisonYMD(e, t) {
      for (const s in e) {
        const l = e[s], n = t[s];
        if (l > n)
          return !0;
        if (l < n)
          return !1;
      }
    }
  }
};
const st = {
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
      const t = e.getFullYear(), s = e.getMonth(), l = e.getDate();
      return [t, s + 1, l];
    },
    nweDate(e, t = 0, s = 1) {
      return new Date(e, t - 1, s);
    },
    generate(e, t, s) {
      const l = new Date(), [n, i, r] = this.getYMD(l);
      e || (e = n, t = i, s = r, this.$emit("change", [e, t, s])), this.year = e, this.month = t;
      const u = this.nweDate(e, t), d = u.getDay() || 7;
      u.setMilliseconds(-1);
      const f = u.getDate();
      let T = 6;
      d !== 1 && (T = d - 2);
      const M = [];
      for (let k = f - T; k <= f; k++)
        M.push({
          date: k,
          class: "v-date-prev-month"
        });
      const V = this.nweDate(e, t + 1);
      V.setMilliseconds(-1);
      const N = V.getDate();
      for (let k = 1; k <= N; k++) {
        const A = { date: k };
        k === r && e === n && t === i && (A.class = "v-date-select"), k === this.setDay && e === this.setYear && t === this.setMonth && (A.class = "v-date-prominent"), M.push(A);
      }
      const E = 42 - M.length;
      if (E)
        for (let k = 1; k <= E; k++)
          M.push({
            date: k,
            class: "v-date-next-month"
          });
      const R = [];
      for (let k = 0; k < M.length; k += 7) {
        const A = M.slice(k, k + 7);
        R.push(A);
      }
      this.dates = R;
    },
    switchMonth(e) {
      this.monthDate || (this.monthDate = this.nweDate(this.year, this.month));
      const t = this.monthDate.getMonth();
      this.monthDate.setMonth(t + e);
      const s = this.getYMD(this.monthDate);
      this.generate(...s);
    },
    selectDate(e) {
      const { className: t, localName: s, innerText: l } = e.target;
      if (s === "span") {
        t === "v-date-prev-month" ? this.month -= 1 : t === "v-date-next-month" && (this.month += 1), this.currentDate = this.nweDate(this.year, this.month, l), this.monthDate = new Date(this.currentDate);
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
}, nt = { class: "v-date-show" }, it = /* @__PURE__ */ a("div", { class: "v-date-week" }, [
  /* @__PURE__ */ a("span", null, "\u4E00"),
  /* @__PURE__ */ a("span", null, "\u4E8C"),
  /* @__PURE__ */ a("span", null, "\u4E09"),
  /* @__PURE__ */ a("span", null, "\u56DB"),
  /* @__PURE__ */ a("span", null, "\u4E94"),
  /* @__PURE__ */ a("span", null, "\u516D"),
  /* @__PURE__ */ a("span", null, "\u65E5")
], -1);
function ot(e, t, s, l, n, i) {
  return o(), c("div", {
    class: "v-date",
    onClick: t[3] || (t[3] = b(() => {
    }, ["stop"]))
  }, [
    a("div", nt, [
      a("i", {
        class: "vicon",
        onClick: t[0] || (t[0] = (r) => i.switchMonth(-1))
      }, "\uEB2A"),
      a("span", null, h(n.year) + " \u5E74 " + h(n.month) + " \u6708", 1),
      a("i", {
        class: "vicon",
        onClick: t[1] || (t[1] = (r) => i.switchMonth(1))
      }, "\uE6B7")
    ]),
    it,
    a("div", {
      class: "v-date-days",
      onClick: t[2] || (t[2] = (...r) => i.selectDate && i.selectDate(...r))
    }, [
      (o(!0), c(x, null, C(n.dates, (r, u) => (o(), c("ul", {
        class: "v-date-line",
        key: u
      }, [
        (o(!0), c(x, null, C(r, (d, f) => (o(), c("li", {
          key: f,
          class: v(d.class)
        }, [
          a("span", null, h(d.date), 1)
        ], 2))), 128))
      ]))), 128))
    ])
  ]);
}
const O = /* @__PURE__ */ p(st, [["render", ot]]);
const lt = {
  extends: ee,
  components: { FormBox: L, Bubble: F },
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
    e.component(this.name, this), e.component(O.name, O);
  }
}, at = { class: "v-input" }, rt = ["placeholder"], ct = /* @__PURE__ */ a("i", { class: "vicon-riqi1" }, null, -1), ut = {
  key: 1,
  class: "v-input-preview"
}, dt = { class: "v-input-preview-label" }, ht = { class: "v-input-preview-value" };
function pt(e, t, s, l, n, i) {
  const r = $("Date", !0), u = $("Bubble"), d = $("FormBox");
  return e.edit ? (o(), g(d, {
    key: 0,
    label: s.label,
    error: e.error
  }, {
    default: _(() => [
      a("div", {
        class: "v-date-picker",
        onClick: t[1] || (t[1] = b((...f) => e.click && e.click(...f), ["stop"]))
      }, [
        a("div", at, [
          w(a("input", {
            "onUpdate:modelValue": t[0] || (t[0] = (f) => e.input = f),
            placeholder: s.placeholder,
            readonly: ""
          }, null, 8, rt), [
            [I, e.input]
          ]),
          ct
        ]),
        e.open ? (o(), g(u, {
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
        })) : m("", !0)
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : s.value ? (o(), c("div", ut, [
    a("span", dt, h(s.label) + "\uFF1A", 1),
    a("span", ht, h(i.setInput(s.value)), 1)
  ])) : m("", !0);
}
const mt = /* @__PURE__ */ p(lt, [["render", pt]]), _t = {
  emits: ["click"],
  components: { FormBox: L },
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
}, vt = { class: "v-input" }, ft = { class: "v-input-before" }, gt = { class: "v-input-after" }, yt = {
  key: 1,
  class: "v-input-unit"
}, bt = {
  key: 1,
  class: "v-input-preview"
}, $t = {
  key: 1,
  class: "v-input-preview-label"
}, kt = { class: "v-input-preview-value" }, wt = {
  key: 2,
  class: "v-input-preview-unit"
};
function xt(e, t, s, l, n, i) {
  const r = $("FormBox");
  return n.edit ? (o(), g(r, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      a("div", vt, [
        a("div", ft, [
          y(e.$slots, "before")
        ]),
        w(a("input", j({
          "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input = u)
        }, e.$attrs), null, 16), [
          [
            z,
            n.input,
            void 0,
            { number: !0 }
          ]
        ]),
        a("div", gt, [
          y(e.$slots, "after", {}, () => [
            s.icon ? (o(), c("i", {
              key: 0,
              class: v(s.icon)
            }, null, 2)) : m("", !0),
            s.unit ? (o(), c("span", yt, h(s.unit), 1)) : m("", !0)
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["label", "error"])) : s.value ? (o(), c("div", bt, [
    s.icon ? (o(), c("i", {
      key: 0,
      class: v(s.icon)
    }, null, 2)) : n.showLabel ? (o(), c("span", $t, h(n.showLabel) + "\uFF1A", 1)) : m("", !0),
    a("span", kt, h(s.value), 1),
    s.unit ? (o(), c("span", wt, h(s.unit), 1)) : m("", !0)
  ])) : m("", !0);
}
const te = /* @__PURE__ */ p(_t, [["render", xt]]);
const Ct = {
  extends: ee,
  components: { InputNumber: te, Bubble: F },
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
      const [u, d] = this.getYMD(new Date());
      e = [u, d];
    }
    let [s, l] = e;
    t ? t = this.dateParser(t) : t = [s, l + 1];
    let n, i;
    return e[1] === t[1] ? (n = [e, t], i = [
      [s, l + 1],
      [s, l + 1]
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
          const [l, n] = t;
          this.comparisonYMD(n, l) ? this["picker" + e] = [l, n] : this["picker" + e] = [n, l], this.open = !1;
        }
      }
    },
    comparisonYMD(e, t) {
      for (let s in e) {
        const l = e[s], n = t[s];
        if (l > n)
          return !0;
        if (l < n)
          return !1;
      }
    }
  }
};
function Dt(e, t, s, l, n, i) {
  const r = $("DateRange", !0), u = $("Bubble");
  return o(), c("div", {
    class: "v-date-range",
    onClick: t[4] || (t[4] = b((...d) => e.click && e.click(...d), ["stop"]))
  }, [
    w(a("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (d) => n.input = d),
      type: "text",
      placeholder: "\u5F00\u59CB\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [I, n.input]
    ]),
    w(a("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (d) => n.input = d),
      type: "text",
      placeholder: "\u7ED3\u675F\u65E5\u671F",
      vicon: "\uE628",
      range: ""
    }, null, 512), [
      [I, n.input]
    ]),
    e.open ? (o(), g(u, {
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
    })) : m("", !0)
  ]);
}
const St = /* @__PURE__ */ p(Ct, [["render", Dt]]);
const Bt = {
  emits: ["input"],
  components: { FormBox: L },
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
}, Mt = { class: "v-input-range" }, It = ["placeholder"], Lt = /* @__PURE__ */ a("span", null, "~", -1), Ft = ["placeholder"], Tt = {
  key: 1,
  class: "v-input-preview"
}, Nt = {
  key: 1,
  class: "v-input-preview-label"
}, Et = { class: "v-input-preview-value" }, Rt = { class: "v-input-preview-unit" };
function At(e, t, s, l, n, i) {
  const r = $("FormBox");
  return n.edit ? (o(), g(r, {
    key: 0,
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      a("div", Mt, [
        s.icon ? (o(), c("i", {
          key: 0,
          class: v(s.icon)
        }, null, 2)) : m("", !0),
        w(a("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input[0] = u),
          type: "number",
          placeholder: s.placeholder[0],
          onInput: t[1] || (t[1] = (...u) => i.min && i.min(...u))
        }, null, 40, It), [
          [I, n.input[0]]
        ]),
        Lt,
        w(a("input", {
          type: "number",
          "onUpdate:modelValue": t[2] || (t[2] = (u) => n.input[1] = u),
          placeholder: s.placeholder[1],
          onInput: t[3] || (t[3] = (...u) => i.max && i.max(...u))
        }, null, 40, Ft), [
          [I, n.input[1]]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : (o(), c("div", Tt, [
    s.icon ? (o(), c("i", {
      key: 0,
      class: v(s.icon)
    }, null, 2)) : (o(), c("span", Nt, h(s.label) + "\uFF1A", 1)),
    a("span", Et, h(s.value[0]) + " - " + h(s.value[1]), 1),
    a("span", Rt, h(s.unit), 1)
  ]));
}
const Wt = /* @__PURE__ */ p(Bt, [["render", At]]), Yt = {
  emits: ["click"],
  components: { FormBox: L },
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
}, Vt = { class: "v-input" };
function Pt(e, t, s, l, n, i) {
  const r = $("FormBox");
  return o(), g(r, {
    label: s.label,
    error: l.error
  }, {
    default: _(() => [
      a("div", Vt, [
        w(a("input", j({
          "onUpdate:modelValue": t[0] || (t[0] = (u) => l.input = u)
        }, e.$attrs), null, 16), [
          [z, l.input]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"]);
}
const Ut = /* @__PURE__ */ p(Yt, [["render", Pt]]);
const jt = {
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
}, Xt = { class: "radio-label" };
function qt(e, t, s, l, n, i) {
  return o(), c("div", {
    class: "v-radio",
    onClick: t[0] || (t[0] = (...r) => i.click && i.click(...r))
  }, [
    a("div", {
      class: v(["radio-circular", { "radio-highlight": n.status }])
    }, null, 2),
    a("span", Xt, [
      y(e.$slots, "default")
    ])
  ]);
}
const zt = /* @__PURE__ */ p(jt, [["render", qt]]), K = {
  text: Z,
  date: mt,
  daterange: St,
  number: te,
  numberrange: Wt,
  password: Ut,
  radio: zt
}, _i = {
  name: "Input",
  render() {
    const { type: e, range: t } = this.$attrs;
    let s = K[e];
    return s ? t !== void 0 && (s = K[e + "range"]) : s = Z, U(s);
  }
};
const Ht = {
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
}, Ot = {
  key: 0,
  class: "v-img-box"
}, Kt = ["src"];
function Gt(e, t, s, l, n, i) {
  return o(), c("div", {
    class: v(["v-img", { "v-img-radius": s.radius }])
  }, [
    s.src ? (o(), c("div", Ot, [
      a("img", { src: s.src }, null, 8, Kt)
    ])) : (o(), c("i", {
      key: 1,
      class: v(["v-img-null", s.icon])
    }, null, 2))
  ], 2);
}
const vi = /* @__PURE__ */ p(Ht, [["render", Gt]]);
const Jt = {
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
  }
}, Qt = {
  key: 0,
  class: "v-image-preview-header"
}, Zt = { class: "v-image-preview-title" }, es = { class: "v-image-preview-main" }, ts = ["src"], ss = {
  key: 1,
  class: "v-image-preview-map"
}, ns = ["src", "onMouseover"], is = {
  key: 2,
  class: "v-image-preview-footer"
}, os = /* @__PURE__ */ a("i", { class: "v-image-preview-close vicon-cha" }, null, -1);
function ls(e, t, s, l, n, i) {
  return o(), g(S, {
    name: "fade",
    appear: ""
  }, {
    default: _(() => [
      a("div", {
        class: "v-image-preview",
        ref: "maskBox",
        onClick: t[2] || (t[2] = (r) => e.$emit("close"))
      }, [
        s.title ? (o(), c("div", Qt, [
          a("div", Zt, h(s.title), 1)
        ])) : m("", !0),
        a("div", es, [
          n.image ? (o(), c("img", {
            key: 0,
            class: "v-image-preview-img",
            src: n.image.src,
            onClick: t[0] || (t[0] = b(() => {
            }, ["stop"]))
          }, null, 8, ts)) : m("", !0)
        ]),
        s.images.length > 1 ? (o(), c("div", ss, [
          (o(!0), c(x, null, C(s.images, (r, u) => (o(), c("img", {
            key: u,
            class: v({ "v-image-preview-highlight": r === n.image }),
            src: r.src,
            onClick: t[1] || (t[1] = b(() => {
            }, ["stop"])),
            onMouseover: (d) => i.mouseover(r)
          }, null, 42, ns))), 128))
        ])) : m("", !0),
        n.image.name ? (o(), c("div", is, h(n.image.name), 1)) : m("", !0),
        os
      ], 512)
    ]),
    _: 1
  });
}
const se = /* @__PURE__ */ p(Jt, [["render", ls]]);
const as = {
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
          const l = await new Promise(function(n) {
            s.onload = () => n(s.result);
          });
          this.image = { file: t, src: l };
        }
      this.$refs.input.value = "";
    },
    destroy() {
      this.image = {}, this.$emit("input", "");
    },
    preview() {
      const { image: e } = this;
      se.open({ images: [e], index: 0 });
    },
    async upload(e) {
      const { file: t } = this.image;
      if (t) {
        const s = new FormData();
        s.append("image", t), await this.$options.network(e, s).then((l) => {
          const [n] = l.image;
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
}, rs = (e) => (X("data-v-57f77f8f"), e = e(), q(), e), cs = { class: "v-image-box" }, us = ["src"], ds = /* @__PURE__ */ rs(() => /* @__PURE__ */ a("i", { class: "vicon-add" }, null, -1)), hs = {
  key: 1,
  class: "v-image-show"
}, ps = ["src"], ms = {
  key: 1,
  class: "v-image-null vicon-tupian"
};
function _s(e, t, s, l, n, i) {
  return o(), c("div", {
    class: v(["v-image", { "v-image-round": s.round }])
  }, [
    n.edit ? (o(), c(x, { key: 0 }, [
      n.image.src ? (o(), c("div", {
        key: 0,
        class: "v-image-edit",
        onClick: t[1] || (t[1] = (...r) => i.preview && i.preview(...r))
      }, [
        a("div", cs, [
          a("img", {
            src: n.image.src
          }, null, 8, us)
        ]),
        a("i", {
          class: "v-image-delete vicon-cha",
          onClick: t[0] || (t[0] = b((...r) => i.destroy && i.destroy(...r), ["stop"]))
        })
      ])) : (o(), c("div", {
        key: 1,
        class: "v-image-add",
        onClick: t[3] || (t[3] = (...r) => i.add && i.add(...r))
      }, [
        ds,
        a("input", {
          ref: "input",
          type: "file",
          accept: "image/*",
          name: "file",
          onChange: t[2] || (t[2] = (r) => i.change(r.target.files))
        }, null, 544)
      ]))
    ], 64)) : (o(), c("div", hs, [
      n.image.src ? (o(), c("div", {
        key: 0,
        class: "v-image-box",
        onClick: t[4] || (t[4] = b((...r) => i.preview && i.preview(...r), ["stop"]))
      }, [
        a("img", {
          src: n.image.src
        }, null, 8, ps)
      ])) : (o(), c("i", ms))
    ]))
  ], 2);
}
const fi = /* @__PURE__ */ p(as, [["render", _s], ["__scopeId", "data-v-57f77f8f"]]), vs = {
  name: "Draggable",
  emits: ["click"],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    dragstart(e, t) {
      const { currentTarget: s } = e;
      s.style.opacity = 0.5, this.currentTarget = s, this.currentKey = t;
    },
    dragover(e) {
      e.preventDefault(), e.stopPropagation();
    },
    dragenter(e, t) {
      const { currentTarget: s } = e;
      if (s !== this.currentTarget) {
        const { currentTarget: l, currentKey: n } = this, { value: i } = this, r = i[n];
        i.splice(n, 1), i.splice(t, 0, r), l.style.opacity = "unset", s.style.opacity = 0.5, this.currentTarget = s, this.currentKey = t;
      }
    },
    dragend() {
      this.currentTarget.style.opacity = "unset", this.$emit("input", this.value);
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, fs = { class: "v-draggable" }, gs = ["onDragstart", "onDragover", "onDragenter", "onDragend", "onClick"];
function ys(e, t, s, l, n, i) {
  return o(), c("div", fs, [
    (o(!0), c(x, null, C(s.value, (r, u) => (o(), c("div", {
      class: "v-draggable-item",
      draggable: "true",
      key: u,
      onDragstart: b((d) => i.dragstart(d, u), ["stop"]),
      onDragover: b((d) => i.dragover(d, u), ["stop"]),
      onDragenter: b((d) => i.dragenter(d, u), ["stop"]),
      onDragend: b((d) => i.dragend(d, u), ["stop"]),
      onClick: (d) => e.$emit("click", u, r)
    }, [
      y(e.$slots, "default", {
        index: u,
        item: r
      })
    ], 40, gs))), 128))
  ]);
}
const bs = /* @__PURE__ */ p(vs, [["render", ys]]);
const $s = {
  name: "Images",
  components: { Draggable: bs },
  emits: ["input", "change"],
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    read: Boolean,
    max: {
      type: Number,
      default: 20
    },
    title: String,
    placeholder: String
  },
  data() {
    return this.count = this.value.length, {
      edit: !this.read,
      images: this.value
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
          const n = { src: await new Promise(function(i) {
            s.onload = () => {
              i(s.result);
            };
          }), file: t };
          this.$emit("change", n), this.images.push(n);
        }
      this.$refs.input.value = "";
    },
    destroy(e) {
      const t = this.images[e];
      if (t.file === void 0) {
        const s = [...this.value];
        s.splice(s.indexOf(t.src), 1), this.$emit("input", this.images);
      }
      this.images.splice(e, 1);
    },
    preview(e, t) {
      const { images: s, title: l } = this;
      se.open({ images: s, index: e, title: l });
    },
    async upload(e) {
      const t = new FormData(), s = [];
      for (const l of this.images)
        l.file && (t.append("images", l.file), s.push(l));
      s.length && await this.$options.network(e, t).then((l) => {
        const { images: n } = l;
        for (const i in n) {
          const r = n[i], u = s[i];
          u.src = r, delete u.file;
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
}, ne = (e) => (X("data-v-6887fea7"), e = e(), q(), e), ks = { class: "v-images-item" }, ws = ["src", "title"], xs = ["placeholder", "onUpdate:modelValue"], Cs = ["onClick"], Ds = /* @__PURE__ */ ne(() => /* @__PURE__ */ a("i", { class: "vicon-add" }, null, -1)), Ss = {
  key: 1,
  class: "v-images v-images-preview"
}, Bs = ["onClick"], Ms = ["src"], Is = {
  key: 1,
  class: "v-image-null"
}, Ls = /* @__PURE__ */ ne(() => /* @__PURE__ */ a("i", { class: "vicon-tupian" }, null, -1)), Fs = [
  Ls
];
function Ts(e, t, s, l, n, i) {
  const r = $("Draggable");
  return n.edit ? (o(), c("div", {
    key: 0,
    class: "v-images",
    onMousedownCapture: t[3] || (t[3] = b(() => {
    }, ["stop"])),
    onMousemoveCapture: t[4] || (t[4] = b(() => {
    }, ["stop"])),
    onMouseupCapture: t[5] || (t[5] = b(() => {
    }, ["stop"]))
  }, [
    n.images.length ? (o(), g(r, {
      key: 0,
      value: n.images,
      onClick: i.preview
    }, {
      default: _(({ index: u, item: d }) => [
        a("div", ks, [
          y(e.$slots, "default", { item: d }, () => [
            a("img", {
              draggable: "false",
              src: d.src,
              title: d.name
            }, null, 8, ws),
            w(a("input", {
              draggable: "false",
              class: "v-images-input",
              type: "text",
              placeholder: s.placeholder,
              "onUpdate:modelValue": (f) => d.name = f,
              onClick: t[0] || (t[0] = b(() => {
              }, ["stop"]))
            }, null, 8, xs), [
              [I, d.name]
            ])
          ], !0)
        ]),
        a("i", {
          class: "v-images-delete vicon-cha",
          onClick: b((f) => i.destroy(u), ["stop"])
        }, null, 8, Cs)
      ]),
      _: 3
    }, 8, ["value", "onClick"])) : m("", !0),
    w(a("div", {
      class: "v-images-add",
      onClick: t[2] || (t[2] = (...u) => i.add && i.add(...u))
    }, [
      Ds,
      a("input", {
        ref: "input",
        type: "file",
        accept: "image/*",
        name: "file",
        multiple: "multiple",
        onChange: t[1] || (t[1] = (u) => i.change(u.target.files))
      }, null, 544)
    ], 512), [
      [Y, n.images.length < s.max]
    ])
  ], 32)) : (o(), c("div", Ss, [
    s.value.length ? (o(!0), c(x, { key: 0 }, C(s.value, (u, d) => (o(), c("div", {
      class: "v-images-item",
      key: d,
      onClick: (f) => i.preview(d)
    }, [
      a("img", {
        src: u.src
      }, null, 8, Ms)
    ], 8, Bs))), 128)) : (o(), c("div", Is, Fs))
  ]));
}
const gi = /* @__PURE__ */ p($s, [["render", Ts], ["__scopeId", "data-v-6887fea7"]]);
const Ns = {
  name: "FloatMenu",
  components: { Bubble: F },
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
}, Es = { class: "v-float-menu-items" }, Rs = ["onClick"];
function As(e, t, s, l, n, i) {
  const r = $("Bubble");
  return o(), g(S, {
    name: "scale",
    appear: ""
  }, {
    default: _(() => [
      (o(), g(G, null, [
        n.open ? (o(), g(r, {
          key: 0,
          class: "v-float-menu",
          gap: s.gap
        }, {
          default: _(() => [
            a("ul", Es, [
              (o(!0), c(x, null, C(s.options, (u, d) => (o(), c("li", {
                class: v(["vt-sub vt-hover", { "vt-active": s.current == d }]),
                key: d,
                onClick: (f) => i.select(u)
              }, [
                a("i", {
                  class: v(u.icon)
                }, null, 2),
                B(" " + h(u.name), 1)
              ], 10, Rs))), 128))
            ])
          ]),
          _: 1
        }, 8, ["gap"])) : m("", !0)
      ], 1024))
    ]),
    _: 1
  });
}
const yi = /* @__PURE__ */ p(Ns, [["render", As]]);
const Ws = {
  name: "Dropdown",
  components: { Bubble: F },
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
function Ys(e, t, s, l, n, i) {
  const r = $("Bubble");
  return o(), c("div", {
    class: "v-dropdown",
    onClick: t[0] || (t[0] = (...u) => i.click && i.click(...u))
  }, [
    a("div", {
      class: v(["v-dropdown-select", { active: s.name && s.name !== n.oneName }])
    }, [
      B(h(s.name || n.oneName) + " ", 1),
      a("i", {
        class: v(["vicon arrow", { arrow_up: n.open }])
      }, "\uE678", 2)
    ], 2),
    D(S, { name: "scale" }, {
      default: _(() => [
        n.open ? (o(), g(r, {
          key: 0,
          placement: "bottom",
          gap: s.gap
        }, {
          default: _(() => [
            y(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["gap"])) : m("", !0)
      ]),
      _: 3
    })
  ]);
}
const bi = /* @__PURE__ */ p(Ws, [["render", Ys]]);
const Vs = {
  name: "List",
  components: { Loading: Pe },
  props: {
    loading: String,
    data: Array
  },
  data() {
    return { list: this.data };
  },
  watch: {
    data(e) {
      this.list = e;
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, Ps = { class: "v-list" };
function Us(e, t, s, l, n, i) {
  const r = $("Loading");
  return o(), g(r, { status: s.loading }, {
    default: _(() => [
      a("div", Ps, [
        y(e.$slots, "befor"),
        (o(!0), c(x, null, C(n.list, (u, d) => y(e.$slots, "default", {
          item: u,
          index: d
        })), 256)),
        y(e.$slots, "after")
      ])
    ]),
    _: 3
  }, 8, ["status"]);
}
const $i = /* @__PURE__ */ p(Vs, [["render", Us]]);
const js = {
  name: "ListItem",
  emits: ["click"],
  install(e) {
    e.component(this.name, this);
  },
  methods: {
    click(e) {
      this.timer = setTimeout(() => {
        this.$emit("click", e);
      }, 260);
    },
    dblclick(e) {
      clearTimeout(this.timer), this.$emit("dblclick", e);
    }
  }
};
function Xs(e, t, s, l, n, i) {
  return o(), c("div", {
    class: "v-list-item",
    onClick: t[0] || (t[0] = (...r) => i.click && i.click(...r)),
    onDblclick: t[1] || (t[1] = (...r) => i.dblclick && i.dblclick(...r)),
    onContextmenu: t[2] || (t[2] = (r) => e.$emit("contextmenu", r))
  }, [
    y(e.$slots, "default")
  ], 32);
}
const ki = /* @__PURE__ */ p(js, [["render", Xs]]);
const qs = {
  name: "Form",
  components: { Button: Q },
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
}, zs = { class: "v-form" }, Hs = { class: "v-form-header" }, Os = { key: 0 }, Ks = {
  key: 0,
  class: "remark"
}, Gs = { class: "v-form-main" }, Js = {
  key: 0,
  class: "v-form-footer"
}, Qs = /* @__PURE__ */ B("\u786E\u8BA4");
function Zs(e, t, s, l, n, i) {
  const r = $("Button");
  return o(), c("div", zs, [
    a("div", Hs, [
      s.name ? (o(), c("h4", Os, [
        B(h(s.name) + " ", 1),
        n.status === !0 ? (o(), c("span", Ks, h(s.remark), 1)) : m("", !0)
      ])) : m("", !0)
    ]),
    a("div", Gs, [
      y(e.$slots, "default")
    ]),
    n.confirm ? (o(), c("div", Js, [
      D(r, {
        color: "success",
        onClick: t[0] || (t[0] = (u) => e.$emit("confirm"))
      }, {
        default: _(() => [
          Qs
        ]),
        _: 1
      })
    ])) : m("", !0)
  ]);
}
const wi = /* @__PURE__ */ p(qs, [["render", Zs]]);
const en = {
  name: "Tag",
  components: { FormBox: L },
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
    }
  },
  install(e) {
    e.component(this.name, this);
  }
}, tn = { class: "v-tag" }, sn = ["onClick"], nn = ["placeholder"], on = {
  key: 1,
  class: "v-tag-preview"
}, ln = {
  key: 0,
  class: "v-tag-preview-label"
};
function an(e, t, s, l, n, i) {
  const r = $("FormBox");
  return n.edit ? (o(), g(r, {
    key: 0,
    class: "w100",
    label: s.label,
    error: n.error
  }, {
    default: _(() => [
      a("div", tn, [
        D(J, {
          class: "v-tag-group",
          tag: "div",
          name: "fade"
        }, {
          default: _(() => [
            (o(!0), c(x, null, C(n.tags, (u, d) => (o(), c("span", {
              class: "v-tag-item",
              key: u
            }, [
              B(h(u) + " ", 1),
              a("i", {
                class: "vicon",
                onClick: (f) => i.destroy(d)
              }, "\uE679", 8, sn)
            ]))), 128))
          ]),
          _: 1
        }),
        w(a("input", {
          class: "v-tag-input",
          placeholder: s.placeholder,
          ref: "input",
          type: "text",
          "onUpdate:modelValue": t[0] || (t[0] = (u) => n.input = u),
          onKeyup: t[1] || (t[1] = ae((...u) => i.enter && i.enter(...u), ["enter"])),
          onBlur: t[2] || (t[2] = (...u) => i.blur && i.blur(...u))
        }, null, 40, nn), [
          [I, n.input]
        ])
      ])
    ]),
    _: 1
  }, 8, ["label", "error"])) : s.value.length ? (o(), c("div", on, [
    s.label ? (o(), c("span", ln, h(s.label) + "\uFF1A", 1)) : m("", !0),
    (o(!0), c(x, null, C(s.value, (u) => (o(), c("span", {
      class: "v-tag-preview-item",
      key: u
    }, h(u), 1))), 128))
  ])) : m("", !0);
}
const xi = /* @__PURE__ */ p(en, [["render", an], ["__scopeId", "data-v-b9e84a75"]]);
const rn = {
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
}, cn = (e) => (X("data-v-54f1654a"), e = e(), q(), e), un = /* @__PURE__ */ cn(() => /* @__PURE__ */ a("div", { class: "v-switch-circle" }, null, -1)), dn = [
  un
];
function hn(e, t, s, l, n, i) {
  return o(), c("div", {
    class: v(["v-switch", { "v-switch-open": n.status, "v-switch-disable": s.disable }]),
    onClick: t[0] || (t[0] = (...r) => i.click && i.click(...r)),
    onDblclick: t[1] || (t[1] = b(() => {
    }, ["stop"]))
  }, dn, 34);
}
const Ci = /* @__PURE__ */ p(rn, [["render", hn], ["__scopeId", "data-v-54f1654a"]]);
const ie = {
  components: { FormBox: L },
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
}, pn = {
  extends: ie,
  mounted() {
    this.select(this.value);
  }
}, mn = {
  key: 0,
  class: "show-current"
}, _n = {
  key: 1,
  class: "show-current placeholder"
}, vn = {
  key: 1,
  class: "v-select-preview"
}, fn = { class: "v-select-preview-name" };
function gn(e, t, s, l, n, i) {
  const r = $("FormBox");
  return e.ready === !1 ? (o(), g(r, {
    key: 0,
    ref: "FormBox",
    label: e.label
  }, {
    default: _(() => [
      a("div", {
        class: "v-select",
        onClick: t[0] || (t[0] = (...u) => e.click && e.click(...u))
      }, [
        e.current ? (o(), c("div", mn, h(e.current), 1)) : (o(), c("div", _n, h(e.placeholder), 1)),
        a("i", {
          class: v(["vicon arrow", { arrow_up: e.drop }])
        }, "\uE678", 2),
        D(S, {
          name: "select-drop",
          appear: ""
        }, {
          default: _(() => [
            w(a("ul", null, [
              y(e.$slots, "default")
            ], 512), [
              [Y, e.drop]
            ])
          ]),
          _: 3
        })
      ])
    ]),
    _: 3
  }, 8, ["label"])) : (o(), c("div", vn, [
    a("span", fn, h(e.label) + "\uFF1A", 1),
    a("span", null, h(e.current || "-"), 1)
  ]));
}
const yn = /* @__PURE__ */ p(pn, [["render", gn]]);
const bn = {
  extends: ie,
  methods: {
    change() {
      this.$emit("input", this.input);
    }
  }
}, $n = ["placeholder"];
function kn(e, t, s, l, n, i) {
  const r = $("FormBox");
  return o(), g(r, {
    ref: "FormBox",
    label: e.label
  }, {
    default: _(() => [
      a("div", {
        class: "v-select",
        onClick: t[2] || (t[2] = (...u) => e.click && e.click(...u))
      }, [
        w(a("input", {
          placeholder: e.placeholder,
          "onUpdate:modelValue": t[0] || (t[0] = (u) => e.current = u),
          onChange: t[1] || (t[1] = (...u) => i.change && i.change(...u))
        }, null, 40, $n), [
          [I, e.current]
        ]),
        a("i", {
          class: v(["vicon arrow", { arrow_up: e.drop }])
        }, "\uE678", 2),
        D(S, {
          name: "drop",
          appear: ""
        }, {
          default: _(() => [
            w(a("ul", null, [
              y(e.$slots, "default")
            ], 512), [
              [Y, e.drop]
            ])
          ]),
          _: 3
        })
      ])
    ]),
    _: 3
  }, 8, ["label"]);
}
const wn = /* @__PURE__ */ p(bn, [["render", kn]]), xn = {
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
function Cn(e, t, s, l, n, i) {
  return o(), c("li", {
    class: v({ "vt-active": n.active }),
    onClick: t[0] || (t[0] = (r) => i.select(s.value))
  }, [
    y(e.$slots, "default", {}, () => [
      B(h(s.label || s.value), 1)
    ])
  ], 2);
}
const Dn = /* @__PURE__ */ p(xn, [["render", Cn]]), Di = {
  name: "Select",
  render() {
    const { edit: e, multiple: t } = this.$attrs;
    return e === !0 ? U(wn) : U(yn, this.$attrs, this.$slots);
  },
  Option: Dn
};
function Sn(e, t) {
  return re(e).mount(t);
}
const H = { Component: Sn };
const Bn = {
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
      const l = document.createElement("section");
      l.id = "v-message-layer", document.body.appendChild(l), this.instance = H.Component(this, l);
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
function Mn(e, t, s, l, n, i) {
  return o(), g(J, { name: "tg-top" }, {
    default: _(() => [
      (o(!0), c(x, null, C(n.components, (r) => (o(), c("div", {
        class: "v-message-item",
        key: r.id
      }, [
        (o(), g(ue(r)))
      ]))), 128))
    ]),
    _: 1
  });
}
const P = /* @__PURE__ */ p(Bn, [["render", Mn], ["__scopeId", "data-v-9c1c8f7b"]]);
const In = {
  add(e) {
    const { type: t = "", body: s = "", time: l = 3e3 } = e;
    P.add({
      data() {
        return {
          type: t,
          body: s
        };
      },
      render: this.render,
      time: l
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
    this.add({
      type: "load",
      body: e,
      time: t
    });
  }
}, Ln = { class: "v-message" }, Fn = { class: "body" };
function Tn(e, t, s, l, n, i) {
  return o(), c("div", Ln, [
    a("i", {
      class: v(["vicon", `vicon-${e.type}`])
    }, null, 2),
    a("span", Fn, h(e.body), 1)
  ]);
}
const Si = /* @__PURE__ */ p(In, [["render", Tn]]);
const Nn = {
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
      document.body.appendChild(s), this.instance = H.Component(
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
  components: { Dialog: xe, Button: Q },
  methods: {
    onConfirm() {
      this.confirm && this.confirm(this), this.open = !1;
    },
    onClose() {
      this.close && this.close(), this.open = !1;
    }
  }
}, En = { class: "v-confirm-body center" }, Rn = { class: "v-confirm-footer" };
function An(e, t, s, l, n, i) {
  const r = $("Dialog");
  return w((o(), g(r, {
    class: "v-confirm",
    title: e.title,
    onClose: i.onClose
  }, {
    default: _(() => [
      a("div", En, h(e.body), 1),
      a("div", Rn, [
        a("button", {
          class: "v-confirm-close",
          onClick: t[0] || (t[0] = (...u) => i.onClose && i.onClose(...u))
        }, h(e.cancelButton), 1),
        a("button", {
          class: "v-confirm-confirm",
          onClick: t[1] || (t[1] = (...u) => i.onConfirm && i.onConfirm(...u))
        }, h(e.confirmButton), 1)
      ])
    ]),
    _: 1
  }, 8, ["title", "onClose"])), [
    [Y, e.open]
  ]);
}
const Bi = /* @__PURE__ */ p(Nn, [["render", An], ["__scopeId", "data-v-b23319c2"]]);
const Wn = {
  add(e) {
    const { title: t = "", body: s = "", time: l, confirm: n, close: i } = e;
    return P.add({
      data() {
        return {
          title: t,
          body: s,
          showConfirm: Boolean(n)
        };
      },
      methods: {
        close() {
          P.close(this.$options.id), i && i();
        },
        confirm() {
          P.close(this.$options.id), n && n();
        }
      },
      render: this.render,
      time: l
    });
  }
}, Yn = { class: "v-notification vertical" }, Vn = { key: 0 }, Pn = /* @__PURE__ */ a("i", { class: "vicon-info" }, null, -1), Un = {
  key: 1,
  class: "body"
}, jn = { class: "actions" };
function Xn(e, t, s, l, n, i) {
  return o(), c("div", Yn, [
    e.title ? (o(), c("h4", Vn, [
      Pn,
      B(" " + h(e.title), 1)
    ])) : m("", !0),
    a("i", {
      class: "ficon-cha close center",
      onClick: t[0] || (t[0] = (...r) => e.close && e.close(...r))
    }),
    e.body ? (o(), c("div", Un, h(e.body), 1)) : m("", !0),
    a("div", jn, [
      e.showConfirm ? (o(), c("button", {
        key: 0,
        class: "confirm",
        onClick: t[1] || (t[1] = (...r) => e.confirm && e.confirm(...r))
      }, " Confirm ")) : m("", !0)
    ])
  ]);
}
const Mi = /* @__PURE__ */ p(Wn, [["render", Xn]]);
const qn = {
  instance: void 0,
  active: !1,
  data() {
    return {
      menu: [],
      show: !0,
      style: {}
    };
  },
  methods: {
    click(e) {
      this.show = !1, e.action(e);
    },
    position(e) {
      const { clientX: t, clientY: s } = e;
      let { innerWidth: l, innerHeight: n } = window;
      const i = {}, { $el: r } = this;
      l = l - 6, n = n - 6, t + r.clientWidth > l ? i.left = l - r.clientWidth + "px" : i.left = t + "px", s + r.clientHeight > n ? i.top = s - r.clientHeight + "px" : i.top = s + "px", this.style = i;
    }
  },
  open(e) {
    this.active = !0;
    let { instance: t } = this;
    if (t === void 0) {
      const s = document.createElement("section");
      document.body.appendChild(s), t = H.Component(this, s), this.instance = t;
    }
  }
}, zn = ["onClick"];
function Hn(e, t, s, l, n, i) {
  return o(), g(S, { name: "fade" }, {
    default: _(() => [
      w(a("div", {
        class: "v-contextmenu",
        style: W(n.style),
        onMousedownCapture: t[0] || (t[0] = b(() => {
        }, ["stop"]))
      }, [
        a("ul", null, [
          (o(!0), c(x, null, C(n.menu, (r, u) => (o(), c("li", {
            key: u,
            class: v({ disabled: r.disable }),
            onClick: (d) => !r.disable && i.click(r)
          }, [
            r.icon ? (o(), c("i", {
              key: 0,
              class: v(r.icon)
            }, null, 2)) : m("", !0),
            a("span", null, h(r.name), 1)
          ], 10, zn))), 128))
        ])
      ], 36), [
        [Y, n.show]
      ])
    ]),
    _: 1
  });
}
const Ii = /* @__PURE__ */ p(qn, [["render", Hn]]);
class Li {
  constructor(t, s) {
    this.form = t, this.to = s, this.queue = [t.children, s.children];
    for (const l of this.queue)
      for (const n of l) {
        const { offsetLeft: i, offsetTop: r } = n;
        n.data = { offsetLeft: i, offsetTop: r };
      }
  }
  insert(t, s) {
    this.target = t;
    const { left: l, top: n } = t.getBoundingClientRect();
    t.data = { left: l, top: n };
    const { to: i } = this;
    s ? i.insertBefore(t, s) : i.appendChild(t), this.keep();
  }
  keep() {
    const t = [];
    for (const d of this.queue)
      for (const f of d) {
        const { data: T, offsetLeft: M, offsetTop: V, style: N } = f, E = T.offsetLeft - M, R = T.offsetTop - V;
        (E || R) && (N.zIndex = "", N.transition = "unset", N.transform = `translate(${E}px, ${R}px)`, t.push(f));
      }
    this.moves = t;
    const { target: s } = this, { data: l, style: n } = s, i = s.getBoundingClientRect(), r = l.left - i.left, u = l.top - i.top;
    n.zIndex = 1, n.transition = "unset", n.transform = `translate(${r}px, ${u}px)`;
  }
  play() {
    requestAnimationFrame(() => {
      for (const { style: s } of this.moves)
        s.transition = "", s.transform = "";
      const { style: t } = this.target;
      t.transition = "", t.transform = "";
    });
  }
}
const oe = {
  components: { Bubble: F },
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
  },
  data() {
    return { scope: this.value, ruler: [] };
  },
  updated() {
    this.$refs.bubble && this.$refs.bubble.initView();
  }
};
const On = {
  name: "Slider",
  extends: oe,
  data() {
    return {
      progress: { right: 0 }
    };
  },
  methods: {
    mousedown(e) {
      const { pageX: t } = e;
      this.lastPageX = t, this.x = t - this.left, this.progress.right = this.clientWidth - this.x + "px", this.scope = this.getScope(this.x), document.body.addEventListener("mousemove", this.mousemove), document.body.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      if (this.x += e.pageX - this.lastPageX, this.lastPageX = e.pageX, this.x >= 0 && this.x <= this.clientWidth)
        this.progress.right = this.clientWidth - this.x + "px", this.scope = this.getScope(this.x);
      else if (this.x < 0)
        this.progress.right = this.clientWidth + "px", this.scope = [0, 0];
      else if (this.x > this.clientWidth) {
        this.progress.right = "0px";
        const { min: t, max: s } = this;
        this.scope = { min: t, max: s };
      }
    },
    mouseup(e) {
      this.$emit("input", this.scope), this.$emit("change", this.scope), document.body.removeEventListener("mousemove", this.mousemove), document.body.removeEventListener("mouseup", this.mouseup);
    },
    getScope(e) {
      const { min: t, max: s } = this, l = e / this.clientWidth * s;
      return [t, Math.floor(l)];
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { width: e, left: t } = this.$el.getBoundingClientRect();
      this.left = t, this.clientWidth = e;
      const [s, l] = this.range, [n, i] = this.value;
      if (this.x1 = Math.floor(i / l * this.clientWidth), this.progress.right = this.x1 + "px", this.step) {
        const { gauge: r } = this.$refs, u = this.clientWidth / this.step;
        r.style.width = e + u + "px", r.style.marginLeft = `-${u / 2}px`;
        const d = l / this.step;
        for (let f = s; f <= l; f += d)
          this.ruler.push(f);
      }
    });
  }
}, Kn = { class: "v-slider" }, Gn = /* @__PURE__ */ a("div", { class: "v-slider-button" }, null, -1), Jn = { class: "v-slider-right" }, Qn = {
  key: 0,
  ref: "gauge",
  class: "v-slider-gauge"
};
function Zn(e, t, s, l, n, i) {
  const r = $("Bubble"), u = $("dir");
  return o(), c("div", Kn, [
    a("div", {
      class: "v-slider-track",
      onMousedown: t[0] || (t[0] = b((...d) => i.mousedown && i.mousedown(...d), ["stop"]))
    }, [
      D(u, { class: "v-slider-baseline" }, {
        default: _(() => [
          a("div", {
            class: "v-slider-progress vt-main",
            style: W(n.progress)
          }, [
            Gn,
            a("div", Jn, [
              D(r, {
                class: "v-slider-bubble",
                ref: "bubble",
                gap: 14
              }, {
                default: _(() => [
                  B(h(e.scope[1] + e.unit), 1)
                ]),
                _: 1
              }, 512)
            ])
          ], 4)
        ]),
        _: 1
      })
    ], 32),
    e.step ? (o(), c("div", Qn, [
      (o(!0), c(x, null, C(e.ruler, (d, f) => (o(), c("span", { key: f }, h(d), 1))), 128))
    ], 512)) : m("", !0)
  ]);
}
const ei = /* @__PURE__ */ p(On, [["render", Zn]]);
const ti = {
  name: "SliderRange",
  extends: oe,
  data() {
    return {
      left: 0,
      right: 0,
      pageLeft: 0,
      transition: "",
      v1: 0,
      v2: 0
    };
  },
  methods: {
    getScope(e, t) {
      const { max: s } = this, l = e !== 0 ? e / this.width * s : 0, n = t !== 0 ? t / this.width * s : 0;
      return [Math.floor(l), Math.floor(n)];
    },
    mousedown(e) {
      this.transition = "all 0.2s";
      const t = Math.floor(e.pageX - this.pageLeft);
      if (t >= 0 && t <= this.width)
        if (t <= this.p1)
          this.p1 = t, this.static = this.p2;
        else if (t >= this.p2)
          this.p2 = t, this.static = this.p1;
        else {
          const s = Math.floor((this.p2 - this.p1) / 2);
          t - this.p1 < s ? (this.p1 = t, this.static = this.p2) : (this.p2 = t, this.static = this.p1);
        }
      else
        t < 0 ? (this.p1 = 0, this.static = this.p2) : t > this.width && (this.p2 = this.width, this.static = this.p1);
      this.left = this.p1 + "px", this.right = this.width - this.p2 + "px", this.scope = this.getScope(this.p1, this.p2), document.body.addEventListener("mousemove", this.mousemove), document.body.addEventListener("mouseup", this.mouseup);
    },
    mousemove(e) {
      this.transition = "none";
      const t = Math.floor(e.pageX - this.pageLeft);
      t >= 0 && t <= this.width ? t < this.static ? (this.p1 = t, this.p2 = this.static) : (this.p1 = this.static, this.p2 = t) : t < 0 ? (this.p1 = 0, this.p2 = this.static) : t > this.width && (this.p1 = this.static, this.p2 = this.width), this.left = this.p1 + "px", this.right = this.width - this.p2 + "px", this.scope = this.getScope(this.p1, this.p2);
    },
    mouseup(e) {
      this.$emit("change", this.scope), this.$emit("input", this.scope), document.body.removeEventListener("mousemove", this.mousemove), document.body.removeEventListener("mouseup", this.mouseup);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { width: e, left: t } = this.$el.getBoundingClientRect();
      this.pageLeft = t, this.width = e;
      const { min: s, max: l } = this, [n, i] = this.value;
      if (this.p1 = Math.floor((n - s) / l * e), this.p2 = Math.floor((i - s) / l * e), this.left = this.p1 + "px", this.right = e - this.p2 + "px", this.step) {
        const { gauge: r } = this.$refs, u = e / this.step;
        r.style.width = e + u + "px", r.style.marginLeft = `-${u / 2}px`;
        const d = l / this.step;
        for (let f = s; f <= l; f += d)
          this.ruler.push(f);
      }
    });
  }
}, le = (e) => (X("data-v-b825b1ae"), e = e(), q(), e), si = { class: "v-slider" }, ni = { class: "v-slider-baseline" }, ii = /* @__PURE__ */ le(() => /* @__PURE__ */ a("div", { class: "v-slider-button v-slider-left" }, null, -1)), oi = /* @__PURE__ */ le(() => /* @__PURE__ */ a("div", { class: "v-slider-button v-slider-right" }, null, -1)), li = [
  ii,
  oi
], ai = {
  key: 0,
  ref: "gauge",
  class: "v-slider-gauge"
};
function ri(e, t, s, l, n, i) {
  return o(), c("div", si, [
    a("div", {
      class: "v-slider-range-track",
      onMousedown: t[0] || (t[0] = (...r) => i.mousedown && i.mousedown(...r))
    }, [
      a("div", ni, [
        a("div", {
          class: "v-slider-progress vt-main",
          style: W({ left: n.left, right: n.right, transition: n.transition })
        }, li, 4)
      ])
    ], 32),
    e.step ? (o(), c("div", ai, [
      (o(!0), c(x, null, C(e.ruler, (r, u) => (o(), c("span", { key: u }, h(r), 1))), 128))
    ], 512)) : m("", !0)
  ]);
}
const ci = /* @__PURE__ */ p(ti, [["render", ri], ["__scopeId", "data-v-b825b1ae"]]), Fi = {
  props: {
    range: Boolean
  },
  render() {
    const { $attrs: e } = this, { range: t } = e;
    let s;
    return t ? s = ci : s = ei, U(s);
  }
};
export {
  mi as Alert,
  F as Bubble,
  Q as Button,
  xe as Dialog,
  pi as DialogPage,
  bi as Dropdown,
  Li as Flip,
  yi as FloatMenu,
  wi as Form,
  fi as Image,
  gi as Images,
  vi as Img,
  _i as Input,
  $i as List,
  ki as ListItem,
  Pe as Loading,
  Di as Select,
  Fi as Slider,
  Ci as Switch,
  xi as Tag,
  hi as Tip,
  Bi as confirm,
  Ii as contextmenu,
  Si as message,
  Mi as notification
};
