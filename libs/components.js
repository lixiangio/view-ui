import { open as N } from "/dist/libs/navigator.js";
import { openBlock as f, createElementBlock as p, withModifiers as P, renderSlot as g, Fragment as L, createElementVNode as m, mergeProps as T, toDisplayString as D, createCommentVNode as F, pushScopeId as B, popScopeId as M, normalizeClass as V, normalizeStyle as x, ref as k, resolveComponent as b, createVNode as S } from "/dist/libs/vue.js";
import { back as W } from "/dist/libs/router.js";
import w, { isTouch as $, SetPointer as y, Mask as E } from "/dist/libs/pointer.js";
import X, { UA as A } from "/dist/libs/view.js";
import { controllerSwitch as O } from "/dist/libs/state.js";
const _ = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [s, a] of r)
    t[s] = a;
  return t;
}, Y = {
  props: { href: String },
  setup({ href: e }) {
    return {
      $href: `#${e}`
    };
  },
  methods: {
    open(e) {
      this.$router.open(e) || N(e);
    }
  }
}, z = ["href"];
function H(e, r, t, s, a, l) {
  return f(), p("a", {
    href: s.$href,
    onClick: r[0] || (r[0] = P((c) => l.open(t.href), ["prevent"]))
  }, [
    g(e.$slots, "default")
  ], 8, z);
}
const U = /* @__PURE__ */ _(Y, [["render", H]]);
const j = {
  props: { title: String },
  methods: {
    onback() {
      W(this.$el);
    }
  }
}, I = (e) => (B("data-v-d800a501"), e = e(), M(), e), q = {
  key: 0,
  class: "navbar-title"
}, G = /* @__PURE__ */ I(() => /* @__PURE__ */ m("div", { class: "navbar-right" }, null, -1)), J = /* @__PURE__ */ I(() => /* @__PURE__ */ m("div", { class: "filling" }, null, -1));
function K(e, r, t, s, a, l) {
  return f(), p(L, null, [
    m("div", T({ class: "navbar" }, e.$attrs), [
      m("div", {
        class: "navbar-left center ficon-left",
        onClick: r[0] || (r[0] = (...c) => l.onback && l.onback(...c))
      }),
      t.title ? (f(), p("div", q, D(t.title), 1)) : F("", !0),
      g(e.$slots, "default", {}, () => [
        G
      ], !0)
    ], 16),
    J
  ], 64);
}
const Q = /* @__PURE__ */ _(j, [["render", K], ["__scopeId", "data-v-d800a501"]]);
const R = {
  name: "Scroll",
  emits: ["start", "level", "vertical"],
  props: {
    direction: {
      type: String,
      default: "X"
    },
    snap: {
      type: Boolean,
      default: !0
    }
  },
  mounted() {
    const { $el: e } = this, { direction: r } = this;
    if (r === "X") {
      const t = new w(e, { angle: 30 });
      t.on("lock", () => {
        if (t.dir === "X") {
          if (t.trend > 0)
            e.scrollLeft === 0 && t.parent();
          else if (t.trend < 0) {
            const { scrollLeft: s, clientWidth: a, scrollWidth: l } = e;
            s + a === l && t.parent();
          }
        } else
          t.parent();
      }), $ === !1 && t.on("level", () => {
        e.scroll(e.scrollLeft - t.move, 0);
      });
    } else if (r === "Y") {
      if ($)
        return;
      const t = new w(e, { angle: 60 });
      t.on("lock", () => {
        if (t.dir === "Y") {
          if (t.trend > 0)
            e.scrollTop === 0 && t.parent();
          else if (t.trend < 0) {
            const { scrollTop: s, clientHeight: a, scrollHeight: l } = e;
            s + a === l && t.parent();
          }
        } else
          t.parent();
      }), t.on("vertical", () => {
        e.scroll(0, e.scrollTop - t.move);
      });
    }
  }
};
function Z(e, r, t, s, a, l) {
  return f(), p("div", {
    class: V(["scroll", { "scroll-snap": t.snap }]),
    style: x({ ["overflow" + t.direction]: "auto" })
  }, [
    g(e.$slots, "default", {}, void 0, !0)
  ], 6);
}
const ee = /* @__PURE__ */ _(R, [["render", Z], ["__scopeId", "data-v-531bc6a0"]]);
const te = ["src"], ne = {
  __name: "IFrame",
  props: { src: String, gesture: Boolean },
  emits: ["load"],
  setup(e, { emit: r }) {
    const t = e;
    let s;
    const a = k();
    function l(i) {
      const { appsPointer: o } = X, v = ({ clientX: n, clientY: u }) => ({
        clientX: n + s.left,
        clientY: u + o.el.offsetTop
      });
      if ($)
        i.addEventListener("touchstart", (n) => {
          "validity" in n.target || (n.preventDefault(), y(o), o.onstart(n, v(n.touches[0])));
        }), i.addEventListener(
          "touchmove",
          (n) => o.onmove(n, v(n.touches[0]))
        ), i.addEventListener("touchend", (n) => o.onend(n));
      else if (A === "Firefox") {
        let n = !1;
        i.addEventListener("mousedown", (d) => {
          d.button === 0 && ("validity" in d.target ? d.stopPropagation() : (n = !0, d.preventDefault()));
        });
        const u = a.value;
        i.addEventListener("mousemove", (d) => {
          n === !0 && (u.style.display = "none", y(o), o.onstart(d, v(d)), E.style.display = "");
        }), i.addEventListener("mouseup", () => n = !1), u.addEventListener("mouseout", () => {
          n = !1, u.style.display = "";
        });
      } else
        i.addEventListener("mousedown", (n) => {
          n.button === 0 && ("validity" in n.target ? n.stopPropagation() : (n.preventDefault(), y(o), o.onstart(n, v(n)), E.style.display = ""));
        });
    }
    const c = k(!0);
    function h() {
      c.value = !1, r("load", (o) => s = o);
      const { contentWindow: i } = a.value;
      if (i.addEventListener("contextmenu", (o) => {
        "validity" in o.target || (o.preventDefault(), O());
      }), t.gesture !== !1) {
        const { document: o } = i;
        o.compatMode === "CSS1Compat" ? l(o.documentElement) : l(o.body);
      }
    }
    return setTimeout(() => {
      c.value === !0 && (c.value = !1, r("load", (i) => s = i));
    }, 3e3), (i, o) => (f(), p("iframe", {
      src: t.src,
      style: x({ "pointer-events": c.value ? "none" : "all" }),
      frameborder: "0",
      ref_key: "iframe",
      ref: a,
      onLoad: h
    }, null, 44, te));
  }
}, pe = /* @__PURE__ */ _(ne, [["__scopeId", "data-v-a9eaf276"]]);
const C = {
  markdown(e, r) {
    return {
      ...C,
      components: { Markdown: e },
      data() {
        let t;
        return e.setup(void 0, {
          expose({ frontmatter: s }) {
            t = s;
          }
        }), t;
      },
      ...r
    };
  }
}, oe = C;
function re(e, r, t, s, a, l) {
  const c = b("Navbar"), h = b("Markdown");
  return f(), p(L, null, [
    S(c, { title: e.title }, null, 8, ["title"]),
    S(h, { class: "markdown" })
  ], 64);
}
const se = /* @__PURE__ */ _(oe, [["render", re], ["__scopeId", "data-v-08a70f5f"]]), { markdown: ue } = se;
function _e(e) {
  e.component("A", U), e.component("Navbar", Q), e.component("Scroll", ee);
}
export {
  U as A,
  pe as IFrame,
  Q as Navbar,
  ee as Scroll,
  _e as default,
  ue as markdown
};
