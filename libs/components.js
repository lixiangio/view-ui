import { openBlock as u, createElementBlock as p, withModifiers as N, renderSlot as g, Fragment as E, createElementVNode as m, mergeProps as Y, toDisplayString as C, createCommentVNode as P, pushScopeId as T, popScopeId as M, normalizeStyle as L, ref as b, resolveComponent as S, createVNode as w, defineAsyncComponent as A } from "/view-ui/libs/vue.js";
import W, { UA as D, language as V } from "/view-ui/libs/view.js";
import { open as B } from "/view-ui/libs/navigator.js";
import { back as H } from "/view-ui/libs/router.js";
import x, { screenWidth as O, screenHeight as z, isTouch as U, switchPointer as v, MaskStyle as I } from "/view-ui/libs/pointer.js";
import { controllerSwitch as j } from "/view-ui/libs/state.js";
const _ = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [r, c] of n)
    e[r] = c;
  return e;
}, q = {
  props: { href: String },
  setup({ href: t }) {
    return {
      $href: `#${t}`
    };
  },
  methods: {
    open(t) {
      this.$router.open(t) || B(t);
    }
  }
}, G = ["href"];
function J(t, n, e, r, c, s) {
  return u(), p("a", {
    href: r.$href,
    onClick: n[0] || (n[0] = N((d) => s.open(e.href), ["prevent"]))
  }, [
    g(t.$slots, "default")
  ], 8, G);
}
const K = /* @__PURE__ */ _(q, [["render", J]]);
const Q = {
  props: { title: String },
  methods: {
    onback() {
      H(this.$el);
    }
  }
}, F = (t) => (T("data-v-42e986ea"), t = t(), M(), t), R = {
  key: 0,
  class: "navbar-center"
}, Z = /* @__PURE__ */ F(() => /* @__PURE__ */ m("div", { class: "navbar-right" }, null, -1)), ee = /* @__PURE__ */ F(() => /* @__PURE__ */ m("div", { class: "filling" }, null, -1));
function te(t, n, e, r, c, s) {
  return u(), p(E, null, [
    m("div", Y({ class: "navbar" }, t.$attrs), [
      m("div", {
        class: "navbar-left center ficon-left",
        onClick: n[0] || (n[0] = (...d) => s.onback && s.onback(...d))
      }),
      g(t.$slots, "default", {}, () => [
        e.title ? (u(), p("div", R, C(e.title), 1)) : P("", !0),
        Z
      ], !0)
    ], 16),
    ee
  ], 64);
}
const ne = /* @__PURE__ */ _(Q, [["render", te], ["__scopeId", "data-v-42e986ea"]]);
const oe = {
  name: "Scroll",
  emits: ["start", "level", "vertical"],
  props: {
    direction: {
      type: String,
      default: "X"
    }
  },
  mounted() {
    const { direction: t, $el: n } = this;
    if (t === "X") {
      const e = new x(n, { angle: 30 });
      e.on("lock", () => {
        if (e.dir === "X") {
          if (e.trend > 0)
            n.scrollLeft === 0 && e.parent();
          else if (e.trend < 0) {
            const { scrollLeft: r, clientWidth: c, scrollWidth: s } = n;
            r + c === s && e.parent();
          }
        } else
          e.parent();
      }), e.on("level", (r) => {
        const { screenX: c } = r;
        let { move: s } = e;
        c ? c === O && (s = 12) : s = -12, n.scroll(n.scrollLeft - s, 0);
      });
    } else if (t === "Y") {
      const e = new x(n, { angle: 60 });
      e.on("lock", () => {
        if (e.dir === "Y") {
          if (e.trend > 0)
            n.scrollTop === 0 && e.parent();
          else if (e.trend < 0) {
            const { scrollTop: r, clientHeight: c, scrollHeight: s } = n;
            r + c === s && e.parent();
          }
        } else
          e.parent();
      }), e.on("vertical", (r) => {
        const { screenY: c } = r;
        let { move: s } = e;
        c ? c === z && (s = 12) : s = -12, n.scroll(0, n.scrollTop - s);
      });
    }
  }
};
function re(t, n, e, r, c, s) {
  return u(), p("div", {
    class: "scroll",
    style: L({ ["overflow" + e.direction]: "auto" })
  }, [
    g(t.$slots, "default", {}, void 0, !0)
  ], 4);
}
const se = /* @__PURE__ */ _(oe, [["render", re], ["__scopeId", "data-v-f31fe234"]]);
const ie = ["src"], ce = {
  __name: "IFrame",
  props: { src: String, gesture: Boolean },
  emits: ["load"],
  setup(t, { emit: n }) {
    const e = t;
    let r;
    const c = b();
    function s(a) {
      const { appsPointer: i } = W;
      function $(o) {
        const [l] = o.touches;
        return o.clientX = l.clientX + r.left, o.clientY = l.clientY + i.el.offsetTop, o.screenX = l.screenX, o.screenY = l.screenY, o;
      }
      function k(o) {
        return new Proxy(o, {
          get(f, y) {
            return y === "clientX" ? f.clientX + r.left : y === "clientY" ? f.clientY + i.el.offsetTop : f[y];
          }
        });
      }
      if (U)
        a.addEventListener("touchstart", (o) => {
          "validity" in o.target || (o.preventDefault(), v(i), i.onstart($(o)));
        }), a.addEventListener(
          "touchmove",
          (o) => i.onmove($(o))
        ), a.addEventListener("touchend", (o) => i.onend(o));
      else {
        let o = 0;
        if (a.addEventListener("mousedown", (l) => {
          l.button === 0 && ("validity" in l.target ? l.stopPropagation() : (o = 1, l.isIFrame = !0, l.preventDefault()));
        }), D === "Firefox") {
          const l = c.value;
          a.addEventListener("mousemove", (f) => {
            o > 0 && (o === 1 ? (f.isIFrame = !0, v(i), i.onstart(k(f))) : o === 2 && (I.display = "", l.style.display = "none"), o++);
          }), l.addEventListener("mouseout", () => l.style.display = "");
        } else
          a.addEventListener("mousemove", (l) => {
            o > 0 && (o === 1 ? (l.isIFrame = !0, v(i), i.onstart(k(l))) : o === 2 && (I.display = ""), o++);
          });
        a.addEventListener("mouseup", () => {
          o = 0, v(void 0);
        });
      }
    }
    const d = b(!0);
    function h() {
      d.value = !1, n("load", (i) => r = i);
      const { contentWindow: a } = c.value;
      if (a.addEventListener("contextmenu", (i) => {
        "validity" in i.target || (i.preventDefault(), j());
      }), e.gesture === !0) {
        const { document: i } = a;
        i.compatMode === "CSS1Compat" ? s(i.documentElement) : s(i.body);
      }
    }
    return setTimeout(() => {
      d.value === !0 && (d.value = !1, n("load", (a) => r = a));
    }, 3e3), (a, i) => (u(), p("iframe", {
      src: e.src,
      style: L({ "pointer-events": d.value ? "none" : "all" }),
      frameborder: "0",
      ref_key: "iframe",
      ref: c,
      onLoad: h
    }, null, 44, ie));
  }
}, ye = /* @__PURE__ */ _(ce, [["__scopeId", "data-v-cdb081cf"]]);
const X = {
  markdown(t, n) {
    return {
      ...X,
      components: { Markdown: t },
      data() {
        let e;
        return t.setup(void 0, {
          expose({ frontmatter: r }) {
            e = r;
          }
        }), e;
      },
      ...n
    };
  }
}, le = X;
function ae(t, n, e, r, c, s) {
  const d = S("Navbar"), h = S("Markdown");
  return u(), p(E, null, [
    w(d, { title: t.title }, null, 8, ["title"]),
    w(h, { class: "markdown" })
  ], 64);
}
const de = /* @__PURE__ */ _(le, [["render", ae], ["__scopeId", "data-v-08a70f5f"]]), { markdown: fe } = de;
function ge(t) {
  const n = t[V];
  return A(() => n().then((e) => fe(e.default, { level: 200 })));
}
function $e(t) {
  t.component("A", K), t.component("Navbar", ne), t.component("Scroll", se);
}
export {
  K as A,
  ye as IFrame,
  ne as Navbar,
  se as Scroll,
  $e as default,
  ge as defineAsyncMarkdown,
  fe as markdown
};
