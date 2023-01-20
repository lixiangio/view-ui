import { openBlock as f, createElementBlock as p, withModifiers as N, renderSlot as $, Fragment as L, createElementVNode as m, mergeProps as P, toDisplayString as T, createCommentVNode as A, pushScopeId as D, popScopeId as F, normalizeClass as M, normalizeStyle as x, ref as k, resolveComponent as b, createVNode as S, defineAsyncComponent as B } from "/view-ui/libs/vue.js";
import V, { UA as W, language as X } from "/view-ui/libs/view.js";
import { open as O } from "/view-ui/libs/navigator.js";
import { back as Y } from "/view-ui/libs/router.js";
import w, { isTouch as g, SetPointer as y, Mask as E } from "/view-ui/libs/pointer.js";
import { controllerSwitch as z } from "/view-ui/libs/state.js";
const _ = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [s, a] of o)
    t[s] = a;
  return t;
}, H = {
  props: { href: String },
  setup({ href: e }) {
    return {
      $href: `#${e}`
    };
  },
  methods: {
    open(e) {
      this.$router.open(e) || O(e);
    }
  }
}, U = ["href"];
function j(e, o, t, s, a, l) {
  return f(), p("a", {
    href: s.$href,
    onClick: o[0] || (o[0] = N((c) => l.open(t.href), ["prevent"]))
  }, [
    $(e.$slots, "default")
  ], 8, U);
}
const q = /* @__PURE__ */ _(H, [["render", j]]);
const G = {
  props: { title: String },
  methods: {
    onback() {
      Y(this.$el);
    }
  }
}, I = (e) => (D("data-v-d800a501"), e = e(), F(), e), J = {
  key: 0,
  class: "navbar-title"
}, K = /* @__PURE__ */ I(() => /* @__PURE__ */ m("div", { class: "navbar-right" }, null, -1)), Q = /* @__PURE__ */ I(() => /* @__PURE__ */ m("div", { class: "filling" }, null, -1));
function R(e, o, t, s, a, l) {
  return f(), p(L, null, [
    m("div", P({ class: "navbar" }, e.$attrs), [
      m("div", {
        class: "navbar-left center ficon-left",
        onClick: o[0] || (o[0] = (...c) => l.onback && l.onback(...c))
      }),
      t.title ? (f(), p("div", J, T(t.title), 1)) : A("", !0),
      $(e.$slots, "default", {}, () => [
        K
      ], !0)
    ], 16),
    Q
  ], 64);
}
const Z = /* @__PURE__ */ _(G, [["render", R], ["__scopeId", "data-v-d800a501"]]);
const ee = {
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
    const { $el: e } = this, { direction: o } = this;
    if (o === "X") {
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
      }), g === !1 && t.on("level", () => {
        e.scroll(e.scrollLeft - t.move, 0);
      });
    } else if (o === "Y") {
      if (g)
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
function te(e, o, t, s, a, l) {
  return f(), p("div", {
    class: M(["scroll", { "scroll-snap": t.snap }]),
    style: x({ ["overflow" + t.direction]: "auto" })
  }, [
    $(e.$slots, "default", {}, void 0, !0)
  ], 6);
}
const ne = /* @__PURE__ */ _(ee, [["render", te], ["__scopeId", "data-v-531bc6a0"]]);
const oe = ["src"], re = {
  __name: "IFrame",
  props: { src: String, gesture: Boolean },
  emits: ["load"],
  setup(e, { emit: o }) {
    const t = e;
    let s;
    const a = k();
    function l(i) {
      const { appsPointer: r } = V, v = ({ clientX: n, clientY: u }) => ({
        clientX: n + s.left,
        clientY: u + r.el.offsetTop
      });
      if (g)
        i.addEventListener("touchstart", (n) => {
          "validity" in n.target || (n.preventDefault(), y(r), r.onstart(n, v(n.touches[0])));
        }), i.addEventListener(
          "touchmove",
          (n) => r.onmove(n, v(n.touches[0]))
        ), i.addEventListener("touchend", (n) => r.onend(n));
      else if (W === "Firefox") {
        let n = !1;
        i.addEventListener("mousedown", (d) => {
          d.button === 0 && ("validity" in d.target ? d.stopPropagation() : (n = !0, d.preventDefault()));
        });
        const u = a.value;
        i.addEventListener("mousemove", (d) => {
          n === !0 && (u.style.display = "none", y(r), r.onstart(d, v(d)), E.style.display = "");
        }), i.addEventListener("mouseup", () => n = !1), u.addEventListener("mouseout", () => {
          n = !1, u.style.display = "";
        });
      } else
        i.addEventListener("mousedown", (n) => {
          n.button === 0 && ("validity" in n.target ? n.stopPropagation() : (n.preventDefault(), y(r), r.onstart(n, v(n)), E.style.display = ""));
        });
    }
    const c = k(!0);
    function h() {
      c.value = !1, o("load", (r) => s = r);
      const { contentWindow: i } = a.value;
      if (i.addEventListener("contextmenu", (r) => {
        "validity" in r.target || (r.preventDefault(), z());
      }), t.gesture !== !1) {
        const { document: r } = i;
        r.compatMode === "CSS1Compat" ? l(r.documentElement) : l(r.body);
      }
    }
    return setTimeout(() => {
      c.value === !0 && (c.value = !1, o("load", (i) => s = i));
    }, 3e3), (i, r) => (f(), p("iframe", {
      src: t.src,
      style: x({ "pointer-events": c.value ? "none" : "all" }),
      frameborder: "0",
      ref_key: "iframe",
      ref: a,
      onLoad: h
    }, null, 44, oe));
  }
}, ve = /* @__PURE__ */ _(re, [["__scopeId", "data-v-a9eaf276"]]);
const C = {
  markdown(e, o) {
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
      ...o
    };
  }
}, se = C;
function ae(e, o, t, s, a, l) {
  const c = b("Navbar"), h = b("Markdown");
  return f(), p(L, null, [
    S(c, { title: e.title }, null, 8, ["title"]),
    S(h, { class: "markdown" })
  ], 64);
}
const le = /* @__PURE__ */ _(se, [["render", ae], ["__scopeId", "data-v-08a70f5f"]]), { markdown: ie } = le;
function me(e) {
  const o = e[X];
  return B(() => o().then((t) => ie(t.default, { level: 200 })));
}
function he(e) {
  e.component("A", q), e.component("Navbar", Z), e.component("Scroll", ne);
}
export {
  q as A,
  ve as IFrame,
  Z as Navbar,
  ne as Scroll,
  he as default,
  me as defineAsyncMarkdown,
  ie as markdown
};
