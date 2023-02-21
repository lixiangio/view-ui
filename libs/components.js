import { openBlock as f, createElementBlock as u, withModifiers as N, renderSlot as g, Fragment as F, createElementVNode as p, mergeProps as Y, normalizeStyle as $, toDisplayString as C, createCommentVNode as P, pushScopeId as T, popScopeId as M, ref as w, resolveComponent as x, createVNode as I, defineAsyncComponent as A } from "/libs/vue.js";
import B, { UA as W, language as D } from "/libs/view.js";
import { open as V } from "/libs/navigator.js";
import { back as H } from "/libs/router.js";
import E, { screenWidth as O, screenHeight as j, isTouch as z, switchPointer as m, MaskStyle as L } from "/libs/pointer.js";
import { controllerSwitch as U } from "/libs/state.js";
const v = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [r, c] of o)
    e[r] = c;
  return e;
}, q = {
  inject: ["router"],
  props: { href: String },
  setup({ href: t }) {
    return {
      $href: `#${t}`
    };
  },
  methods: {
    open(t) {
      this.router.open(t) || V(t);
    }
  }
}, G = ["href"];
function J(t, o, e, r, c, s) {
  return f(), u("a", {
    href: r.$href,
    onClick: o[0] || (o[0] = N((d) => s.open(e.href), ["prevent"]))
  }, [
    g(t.$slots, "default")
  ], 8, G);
}
const K = /* @__PURE__ */ v(q, [["render", J]]);
const Q = {
  props: { title: String },
  methods: {
    onback() {
      H(this.$el);
    }
  }
}, k = (t) => (T("data-v-3e39faf0"), t = t(), M(), t), R = /* @__PURE__ */ k(() => /* @__PURE__ */ p("use", { "xlink:href": "#ficon-left" }, null, -1)), Z = [
  R
], ee = {
  key: 0,
  class: "navbar-center"
}, te = /* @__PURE__ */ k(() => /* @__PURE__ */ p("div", { class: "navbar-right" }, null, -1)), ne = /* @__PURE__ */ k(() => /* @__PURE__ */ p("div", { class: "filling" }, null, -1));
function oe(t, o, e, r, c, s) {
  return f(), u(F, null, [
    p("div", Y({ class: "navbar" }, t.$attrs), [
      p("div", {
        class: "navbar-left center",
        onClick: o[0] || (o[0] = (...d) => s.onback && s.onback(...d))
      }, [
        (f(), u("svg", {
          class: "ficon",
          "aria-hidden": "true",
          style: $({ color: t.color })
        }, Z, 4))
      ]),
      g(t.$slots, "default", {}, () => [
        e.title ? (f(), u("div", ee, C(e.title), 1)) : P("", !0),
        te
      ], !0)
    ], 16),
    ne
  ], 64);
}
const re = /* @__PURE__ */ v(Q, [["render", oe], ["__scopeId", "data-v-3e39faf0"]]);
const se = {
  name: "Scroll",
  emits: ["start", "level", "vertical"],
  props: {
    direction: {
      type: String,
      default: "X"
    }
  },
  mounted() {
    const { direction: t, $el: o } = this;
    if (t === "X") {
      const e = new E(o, { angle: 30 });
      e.on("lock", () => {
        if (e.dir === "X") {
          if (e.trend > 0)
            o.scrollLeft === 0 && e.parent();
          else if (e.trend < 0) {
            const { scrollLeft: r, clientWidth: c, scrollWidth: s } = o;
            r + c === s && e.parent();
          }
        } else
          e.parent();
      }), e.on("level", (r) => {
        const { screenX: c } = r;
        let { move: s } = e;
        c ? c === O && (s = 12) : s = -12, o.scrollBy(-s, 0);
      });
    } else if (t === "Y") {
      const e = new E(o, { angle: 60 });
      e.on("lock", () => {
        if (e.dir === "Y") {
          if (e.trend > 0)
            o.scrollTop === 0 && e.parent();
          else if (e.trend < 0) {
            const { scrollTop: r, clientHeight: c, scrollHeight: s } = o;
            r + c === s && e.parent();
          }
        } else
          e.parent();
      }), e.on("vertical", (r) => {
        const { screenY: c } = r;
        let { move: s } = e;
        c ? c === j && (s = 12) : s = -12, o.scrollBy(0, -s);
      });
    }
  }
};
function ie(t, o, e, r, c, s) {
  return f(), u("div", {
    class: "scroll",
    style: $({ ["overflow" + e.direction]: "auto" })
  }, [
    g(t.$slots, "default", {}, void 0, !0)
  ], 4);
}
const ce = /* @__PURE__ */ v(se, [["render", ie], ["__scopeId", "data-v-9d54a56f"]]);
const le = ["src"], ae = {
  __name: "IFrame",
  props: { src: String, gesture: Boolean },
  emits: ["load"],
  setup(t, { emit: o }) {
    const e = t;
    let r;
    const c = w();
    function s(a) {
      const { appsPointer: i } = B;
      function S(n) {
        const [l] = n.touches;
        return n.clientX = l.clientX + r.left, n.clientY = l.clientY + i.el.offsetTop, n.screenX = l.screenX, n.screenY = l.screenY, n;
      }
      function b(n) {
        return new Proxy(n, {
          get(_, y) {
            return y === "clientX" ? _.clientX + r.left : y === "clientY" ? _.clientY + i.el.offsetTop : _[y];
          }
        });
      }
      if (z)
        a.addEventListener("touchstart", (n) => {
          "validity" in n.target || (n.preventDefault(), m(i), i.onstart(S(n)));
        }), a.addEventListener(
          "touchmove",
          (n) => i.onmove(S(n))
        ), a.addEventListener("touchend", (n) => i.onend(n));
      else {
        let n = 0;
        if (a.addEventListener("mousedown", (l) => {
          l.button === 0 && ("validity" in l.target ? l.stopPropagation() : (n = 1, l.isIFrame = !0, l.preventDefault()));
        }), W === "Firefox") {
          const l = c.value;
          a.addEventListener("mousemove", (_) => {
            n > 0 && (n === 1 ? (_.isIFrame = !0, m(i), i.onstart(b(_))) : n === 2 && (L.display = "", l.style.display = "none"), n++);
          }), l.addEventListener("mouseout", () => l.style.display = "");
        } else
          a.addEventListener("mousemove", (l) => {
            n > 0 && (n === 1 ? (l.isIFrame = !0, m(i), i.onstart(b(l))) : n === 2 && (L.display = ""), n++);
          });
        a.addEventListener("mouseup", () => {
          n = 0, m(void 0);
        });
      }
    }
    const d = w(!0);
    function h() {
      d.value = !1, o("load", (i) => r = i);
      const { contentWindow: a } = c.value;
      if (a.addEventListener("contextmenu", (i) => {
        "validity" in i.target || (i.preventDefault(), U());
      }), e.gesture === !0) {
        const { document: i } = a;
        i.compatMode === "CSS1Compat" ? s(i.documentElement) : s(i.body);
      }
    }
    return setTimeout(() => {
      d.value === !0 && (d.value = !1, o("load", (a) => r = a));
    }, 3e3), (a, i) => (f(), u("iframe", {
      src: e.src,
      style: $({ "pointer-events": d.value ? "none" : "all" }),
      frameborder: "0",
      ref_key: "iframe",
      ref: c,
      onLoad: h
    }, null, 44, le));
  }
}, $e = /* @__PURE__ */ v(ae, [["__scopeId", "data-v-ef65ffa1"]]);
const X = {
  markdown(t, o) {
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
      ...o
    };
  }
}, de = X;
function fe(t, o, e, r, c, s) {
  const d = x("Navbar"), h = x("Markdown");
  return f(), u(F, null, [
    I(d, { title: t.title }, null, 8, ["title"]),
    I(h, { class: "markdown" })
  ], 64);
}
const ue = /* @__PURE__ */ v(de, [["render", fe], ["__scopeId", "data-v-08a70f5f"]]), { markdown: _e } = ue;
function ke(t) {
  const o = t[D];
  return A(() => o().then((e) => _e(e.default, { level: 200 })));
}
function Se(t) {
  t.component("A", K), t.component("Navbar", re), t.component("Scroll", ce);
}
export {
  K as A,
  $e as IFrame,
  re as Navbar,
  ce as Scroll,
  Se as default,
  ke as defineAsyncMarkdown,
  _e as markdown
};
