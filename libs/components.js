import { openBlock as u, createElementBlock as p, withModifiers as N, renderSlot as g, Fragment as E, createElementVNode as m, mergeProps as Y, toDisplayString as C, createCommentVNode as P, pushScopeId as T, popScopeId as M, normalizeStyle as L, ref as S, resolveComponent as b, createVNode as w, defineAsyncComponent as A } from "/view-ui/libs/vue.js";
import B, { UA as W, language as D } from "/view-ui/libs/view.js";
import { open as V } from "/view-ui/libs/navigator.js";
import { back as H } from "/view-ui/libs/router.js";
import x, { screenWidth as O, screenHeight as j, isTouch as z, switchPointer as v, MaskStyle as I } from "/view-ui/libs/pointer.js";
import { controllerSwitch as U } from "/view-ui/libs/state.js";
const _ = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [r, a] of o)
    e[r] = a;
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
function J(t, o, e, r, a, s) {
  return u(), p("a", {
    href: r.$href,
    onClick: o[0] || (o[0] = N((d) => s.open(e.href), ["prevent"]))
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
function te(t, o, e, r, a, s) {
  return u(), p(E, null, [
    m("div", Y({ class: "navbar" }, t.$attrs), [
      m("div", {
        class: "navbar-left center ficon-left",
        onClick: o[0] || (o[0] = (...d) => s.onback && s.onback(...d))
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
    const { direction: t, $el: o } = this;
    if (t === "X") {
      const e = new x(o, { angle: 30 });
      e.on("lock", () => {
        if (e.dir === "X") {
          if (e.trend > 0)
            o.scrollLeft === 0 && e.parent();
          else if (e.trend < 0) {
            const { scrollLeft: r, clientWidth: a, scrollWidth: s } = o;
            r + a === s && e.parent();
          }
        } else
          e.parent();
      }), e.on("level", (r) => {
        const { screenX: a } = r;
        let { move: s } = e;
        a ? a === O && (s = 12) : s = -12, o.scrollBy(-s, 0);
      });
    } else if (t === "Y") {
      const e = new x(o, { angle: 60 });
      e.on("lock", () => {
        if (e.dir === "Y") {
          if (e.trend > 0)
            o.scrollTop === 0 && e.parent();
          else if (e.trend < 0) {
            const { scrollTop: r, clientHeight: a, scrollHeight: s } = o;
            r + a === s && e.parent();
          }
        } else
          e.parent();
      }), e.on("vertical", (r) => {
        const { screenY: a } = r;
        let { move: s } = e;
        a ? a === j && (s = 12) : s = -12, o.scrollBy(0, -s);
      });
    }
  }
};
function re(t, o, e, r, a, s) {
  return u(), p("div", {
    class: "scroll",
    style: L({ ["overflow" + e.direction]: "auto" })
  }, [
    g(t.$slots, "default", {}, void 0, !0)
  ], 4);
}
const se = /* @__PURE__ */ _(oe, [["render", re], ["__scopeId", "data-v-9d54a56f"]]);
const ie = ["src"], ae = {
  __name: "IFrame",
  props: { src: String, gesture: Boolean },
  emits: ["load"],
  setup(t, { emit: o }) {
    const e = t;
    let r;
    const a = S();
    function s(l) {
      const { appsPointer: i } = B;
      function $(n) {
        const [c] = n.touches;
        return n.clientX = c.clientX + r.left, n.clientY = c.clientY + i.el.offsetTop, n.screenX = c.screenX, n.screenY = c.screenY, n;
      }
      function k(n) {
        return new Proxy(n, {
          get(f, y) {
            return y === "clientX" ? f.clientX + r.left : y === "clientY" ? f.clientY + i.el.offsetTop : f[y];
          }
        });
      }
      if (z)
        l.addEventListener("touchstart", (n) => {
          "validity" in n.target || (n.preventDefault(), v(i), i.onstart($(n)));
        }), l.addEventListener(
          "touchmove",
          (n) => i.onmove($(n))
        ), l.addEventListener("touchend", (n) => i.onend(n));
      else {
        let n = 0;
        if (l.addEventListener("mousedown", (c) => {
          c.button === 0 && ("validity" in c.target ? c.stopPropagation() : (n = 1, c.isIFrame = !0, c.preventDefault()));
        }), W === "Firefox") {
          const c = a.value;
          l.addEventListener("mousemove", (f) => {
            n > 0 && (n === 1 ? (f.isIFrame = !0, v(i), i.onstart(k(f))) : n === 2 && (I.display = "", c.style.display = "none"), n++);
          }), c.addEventListener("mouseout", () => c.style.display = "");
        } else
          l.addEventListener("mousemove", (c) => {
            n > 0 && (n === 1 ? (c.isIFrame = !0, v(i), i.onstart(k(c))) : n === 2 && (I.display = ""), n++);
          });
        l.addEventListener("mouseup", () => {
          n = 0, v(void 0);
        });
      }
    }
    const d = S(!0);
    function h() {
      d.value = !1, o("load", (i) => r = i);
      const { contentWindow: l } = a.value;
      if (l.addEventListener("contextmenu", (i) => {
        "validity" in i.target || (i.preventDefault(), U());
      }), e.gesture === !0) {
        const { document: i } = l;
        i.compatMode === "CSS1Compat" ? s(i.documentElement) : s(i.body);
      }
    }
    return setTimeout(() => {
      d.value === !0 && (d.value = !1, o("load", (l) => r = l));
    }, 3e3), (l, i) => (u(), p("iframe", {
      src: e.src,
      style: L({ "pointer-events": d.value ? "none" : "all" }),
      frameborder: "0",
      ref_key: "iframe",
      ref: a,
      onLoad: h
    }, null, 44, ie));
  }
}, ye = /* @__PURE__ */ _(ae, [["__scopeId", "data-v-ef65ffa1"]]);
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
}, ce = X;
function le(t, o, e, r, a, s) {
  const d = b("Navbar"), h = b("Markdown");
  return u(), p(E, null, [
    w(d, { title: t.title }, null, 8, ["title"]),
    w(h, { class: "markdown" })
  ], 64);
}
const de = /* @__PURE__ */ _(ce, [["render", le], ["__scopeId", "data-v-08a70f5f"]]), { markdown: fe } = de;
function ge(t) {
  const o = t[D];
  return A(() => o().then((e) => fe(e.default, { level: 200 })));
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
