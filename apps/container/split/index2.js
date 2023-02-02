import { defineComponent as V, resolveComponent as C, openBlock as f, createElementBlock as k, Fragment as E, createVNode as B, Transition as X, withCtx as S, normalizeStyle as O, withModifiers as ie, createBlock as x, resolveDynamicComponent as H, normalizeProps as se, guardReactiveProps as ne, createCommentVNode as $, createElementVNode as v, inject as we, getCurrentInstance as ve, shallowReactive as ge, shallowRef as ye, reactive as be, ref as L, nextTick as W, createApp as ke, normalizeClass as z, toDisplayString as M, renderList as U, createTextVNode as q, pushScopeId as xe, popScopeId as $e, defineAsyncComponent as ze, onMounted as Ce, unref as P, withDirectives as Pe, vShow as Ae } from "/view-ui/libs/vue.js";
import m, { instances as y, addStyle as Q, asyncComponent404 as Le, Langs as Se, widths as I, baseURL as Ie, Lang as oe, importAsyncComponent as le, minAppWidith as F, getLevel as Z, events as J, getChildOptions as re, urlHistory as K } from "/view-ui/libs/view.js";
import { controlbar as R, overview as N, openApp as Ee, addHistory as _e, apps as j, appsState as A, controllerSwitch as pe } from "/view-ui/libs/state.js";
import ue, { DisableEvent as Me, MaskStyle as ee, isTouch as te, screenHeight as Fe } from "/view-ui/libs/pointer.js";
import Te, { getRightBaseLine as G } from "/view-ui/libs/swiper.js";
import { open as je, openBlank as Re, closeInstance as Be } from "/view-ui/libs/navigator.js";
import De, { IFrame as Oe } from "/view-ui/libs/components.js";
import { message as ce } from "/view-ui/libs/viewui.js";
import Xe from "/view-ui/libs/router.js";
function Ne(e) {
  const t = new ue(e);
  t.use(Te(e, { inertia: 4 }));
  let s = "", n;
  t.on("start", (o) => {
    if (s = "", n = void 0, "validity" in o.target)
      return Me();
    const { startX: i } = t;
    for (const u in y) {
      const h = y[u], { left: p, width: r } = h, l = p + r;
      if (i > p && i < l) {
        n = h;
        break;
      }
    }
    m.instance = n;
  }), t.on("lock", () => {
    if (n && t.dir === "Y")
      if (R.value === !1 && n.displays === !1)
        s = "scroll";
      else {
        s = "drag", ee.cursor = "move", t.lastX = t.startX, t.lastY = t.startY, Object.assign(n.$el.style, { zIndex: 100, transition: "unset" }), t.initLeft = n.left;
        for (const o in y) {
          const i = y[o];
          i !== n && Object.assign(i.$el.style, { zIndex: "", transition: "" });
        }
      }
  }), t.on("vertical", (o) => {
    if (s === "drag") {
      const { clientX: i, clientY: u } = o, h = i - t.startX + t.initLeft, p = u - t.startY;
      n.$el.style.transform = `translate3d(${h}px, ${p}px, 0)`;
      const r = n.width, { lastX: l } = t;
      if (i > l)
        for (const c in y) {
          const d = y[c];
          if (d === n)
            continue;
          const g = d.left + d.width / 2;
          l < g && i >= g && (d.left -= r, d.$el.style.transform = `translate3d(${d.left}px, 0, 0)`, n.left = d.left + d.width);
        }
      else if (i < l)
        for (const c in y) {
          const d = y[c];
          if (d === n)
            continue;
          const g = d.left + d.width / 2;
          l > g && i <= g && (n.left = d.left, d.left += r, d.$el.style.transform = `translate3d(${d.left}px, 0, 0)`);
        }
      t.lastX = i, t.lastY = u;
    }
  });
  let a;
  te === !1 && (t.on("lock", (o) => {
    if (s === "scroll") {
      let i = o.target;
      for (; i; ) {
        if (i.classList.contains("scroll-y")) {
          a = i;
          break;
        }
        const { parentElement: u } = i;
        if (u)
          i = u;
        else {
          a = i;
          break;
        }
      }
      a.classList.add("scrollbar");
    }
  }), t.on("vertical", (o) => {
    if (s === "scroll" && a) {
      const { scrollTop: i } = a, { move: u } = t;
      if (u)
        a.scroll(0, i - u);
      else {
        const { screenY: h } = o;
        h === 0 ? a.scroll(0, i + 16) : h === Fe && a.scroll(0, i - 16);
      }
    }
  }), t.on("end", () => {
    s === "scroll" && a && (a.classList.remove("scrollbar"), a = void 0);
  })), t.on("end", () => {
    if (s === "drag") {
      const { style: o } = n.$el;
      Object.assign(o, {
        transition: "",
        transform: `translate3d(${n.left}px, 0, 0)`
      });
    }
  }), t.on("click", ({ target: o }) => {
    N.value ? (N.value = !1, e.style.transformOrigin = `${t.clientX}px 50%`) : o.getAttribute("event") === "mask" ? R.value = !R.value : o === e && (R.value = !1);
  }), m.appsPointer = t;
}
function de(e, t, s) {
  Q(t);
  const { app: n, pages: a } = t;
  if (n) {
    const { style: o, transition: i = "fade" } = n;
    s.style = o, s.transition = i;
  }
  a && e && (s.inlinePage = a[e]);
}
const We = V({
  props: ["page", "paths", "attrs"],
  data() {
    const [e, ...t] = this.paths, s = {
      subPaths: t,
      open: !1,
      style: void 0,
      inlinePage: void 0,
      transition: void 0
    }, { page: n } = this;
    return n.__asyncLoader === void 0 ? de(e, n, s) : n.__asyncLoader().then((a) => de(e, a, this)), s;
  },
  methods: {
    back() {
      const { $parent: e } = this;
      e.inlinePage = void 0, e.subPaths = [];
    }
  },
  watch: {
    paths(e) {
      const { app: t, pages: s } = this.page;
      if (this.style = t ? t.style : null, s) {
        const [n, ...a] = e, o = s[n];
        if (o) {
          Q(o), this.subPaths = a, this.inlinePage = o;
          return;
        }
      }
      this.subPaths = [], this.inlinePage = void 0;
    }
  },
  mounted() {
    this.open = !0;
  }
}), Ve = `.page[data-v-0ec7d729]{position:fixed;left:0;top:0;right:0;bottom:0}
`, Y = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, a] of t)
    s[n] = a;
  return s;
};
function Ye(e, t, s, n, a, o) {
  const i = C("Inline", !0);
  return f(), k(E, null, [
    B(X, {
      name: e.transition,
      onAfterLeave: e.back
    }, {
      default: S(() => [
        e.open ? (f(), k("div", {
          key: 0,
          class: "page scroll-y",
          style: O(e.style),
          onBack: t[0] || (t[0] = ie((u) => e.open = !1, ["stop"]))
        }, [
          (f(), x(H(e.page), se(ne(e.attrs)), null, 16))
        ], 36)) : $("", !0)
      ]),
      _: 1
    }, 8, ["name", "onAfterLeave"]),
    e.inlinePage ? (f(), x(i, {
      key: 0,
      page: e.inlinePage,
      paths: e.subPaths
    }, null, 8, ["page", "paths"])) : $("", !0)
  ], 64);
}
const qe = /* @__PURE__ */ Y(We, [["render", Ye], ["styles", [Ve]], ["__scopeId", "data-v-0ec7d729"]]);
function fe(e, t, s) {
  Q(t), s.open = !0;
  const { app: n, pages: a } = t;
  s.style = n ? n.style : null, a && e && (s.splitPage = a[e]);
}
const Ge = V({
  inject: ["container"],
  props: ["page", "paths", "attrs"],
  data() {
    const [e, ...t] = this.paths, s = {
      subPaths: t,
      level: 100,
      open: !1,
      style: void 0,
      splitPage: void 0,
      subAttrs: void 0,
      currentAttrs: void 0
    };
    e ? s.subAttrs = this.attrs : s.currentAttrs = this.attrs;
    const { page: n } = this;
    return n.__asyncLoader ? n.__asyncLoader().then((a) => fe(e, a, this)) : fe(e, n, s), s;
  },
  methods: {
    afterLeave() {
      const { $parent: e } = this;
      e.splitPage = void 0, e.subPaths = [];
    }
  },
  watch: {
    paths(e) {
      const [t, ...s] = e, { app: n, pages: a } = this.page;
      if (this.style = n ? n.style : null, t && a) {
        const o = a[t];
        if (o) {
          Q(o), this.subAttrs = this.attrs, this.subPaths = s, this.splitPage = o;
          return;
        } else
          this.currentAttrs = this.attrs;
      } else
        this.currentAttrs = this.attrs;
      this.subPaths = [], this.splitPage = void 0;
    }
  },
  mounted() {
    const { container: e } = this;
    e.app.flex === !0 ? e.app.flex = !1 : this.splitPage === void 0 && e.split && this.$nextTick(() => {
      const t = e.$refs.mount.childElementCount * 100;
      t > e.level && e.setLevel(t);
    });
  },
  unmounted() {
    if (this.splitPage === void 0) {
      const { container: e } = this;
      if (e.split) {
        const t = e.$refs.mount.childElementCount * 100;
        t < e.level && e.setLevel(t);
      }
    }
  }
}), He = `.child-container[data-v-397aaf42]{position:relative;flex:none;overflow:hidden;display:block;width:390px;min-width:390px;height:100%;box-sizing:content-box;transform:translate(0);background:inherit;border-left:1px solid #eee}.child-container .page[data-v-397aaf42]{width:100%;height:100%}.child-container[data-v-397aaf42]:last-child{flex:1}.child-container[data-v-397aaf42] .navbar .back{display:flex}.nav-goto-enter-active[data-v-397aaf42],.nav-goto-leave-active[data-v-397aaf42],.nav-back-enter-active[data-v-397aaf42],.nav-back-leave-active[data-v-397aaf42]{transition:transform .4s ease-in-out}.nav-goto-enter-from[data-v-397aaf42],.nav-back-leave-to[data-v-397aaf42]{transform:translate3d(100%,0,0)}.nav-back-enter-from[data-v-397aaf42],.nav-goto-leave-to[data-v-397aaf42]{transform:translate3d(-30%,0,0)}
`;
function Qe(e, t, s, n, a, o) {
  const i = C("container"), u = C("Child", !0);
  return f(), k(E, null, [
    B(X, {
      name: "fade",
      onAfterLeave: e.afterLeave
    }, {
      default: S(() => [
        e.open ? (f(), x(i, {
          key: 0,
          class: "child-container",
          style: O(e.style),
          level: e.level
        }, {
          default: S(() => [
            v("div", {
              class: "page scroll-y",
              onBack: t[0] || (t[0] = ie((h) => e.open = !1, ["stop"]))
            }, [
              (f(), x(H(e.page), se(ne(e.currentAttrs)), null, 16))
            ], 32)
          ]),
          _: 1
        }, 8, ["style", "level"])) : $("", !0)
      ]),
      _: 1
    }, 8, ["onAfterLeave"]),
    e.splitPage ? (f(), x(u, {
      key: 0,
      paths: e.subPaths,
      page: e.splitPage,
      attrs: e.subAttrs
    }, null, 8, ["paths", "page", "attrs"])) : $("", !0)
  ], 64);
}
const Ze = /* @__PURE__ */ Y(Ge, [["render", Qe], ["styles", [He]], ["__scopeId", "data-v-397aaf42"]]), Ke = V({
  props: ["entry", "pages", "paths", "style"],
  components: { Inline: qe, Child: Ze },
  setup({ paths: e, pages: t }) {
    const [s, ...n] = e;
    we("router").pagesInstance = ve().ctx;
    const a = {
      subPaths: n,
      attrs: void 0,
      subAttrs: void 0,
      splitPage: void 0,
      inlinePage: void 0
    };
    if (s) {
      const o = t[s];
      o ? o.inline === !0 ? a.inlinePage = o : a.splitPage = o : (a.subPaths = [], a.splitPage = Le);
    }
    return ge(a);
  },
  methods: {
    router(e, t) {
      const { pages: s } = this, [n, ...a] = e, o = s[n];
      o ? (this.subAttrs = t, this.subPaths = a, o.__asyncLoader ? o.__asyncLoader().then((i) => {
        s[n] = i, o.inline === !0 ? this.inlinePage = i : this.splitPage = i;
      }) : o.inline === !0 ? this.inlinePage = o : this.splitPage = o) : (this.subPaths = [], this.attrs = t, this.subAttrs = void 0, this.inlinePage = void 0, this.splitPage = void 0);
    }
  }
}), Ue = `container[data-v-965835d9]{display:block}.entry-container[data-v-965835d9]{position:relative;flex:none;width:390px;min-width:390px;height:100%;transform:translate(0)}@media screen and (max-width: 850px){.entry-container[data-v-965835d9]{width:100%!important}.child-container[data-v-965835d9]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:1;border-left:1px solid #eee}}@media screen and (min-width: 850px){.child-container[data-v-965835d9]{flex:1;box-sizing:content-box}.child-container.empty[data-v-965835d9]{border:unset!important;background-color:#f9f9f9}}.nav-goto-enter-active[data-v-965835d9],.nav-goto-leave-active[data-v-965835d9],.nav-back-enter-active[data-v-965835d9],.nav-back-leave-active[data-v-965835d9]{transition:transform .4s ease-in-out}.nav-goto-enter-from[data-v-965835d9],.nav-back-leave-to[data-v-965835d9]{transform:translate3d(100%,0,0)}.nav-back-enter-from[data-v-965835d9],.nav-goto-leave-to[data-v-965835d9]{transform:translate3d(-30%,0,0)}
`, Je = { class: "page scroll-y" };
function et(e, t, s, n, a, o) {
  const i = C("Inline"), u = C("container"), h = C("Child");
  return f(), k(E, null, [
    B(u, {
      class: "entry-container",
      style: O(e.style),
      level: "100"
    }, {
      default: S(() => [
        v("div", Je, [
          (f(), x(H(e.entry), se(ne(e.attrs)), null, 16))
        ]),
        e.inlinePage ? (f(), x(i, {
          key: 0,
          page: e.inlinePage,
          paths: e.subPaths,
          attrs: e.subAttrs
        }, null, 8, ["page", "paths", "attrs"])) : $("", !0)
      ]),
      _: 1
    }, 8, ["style"]),
    e.splitPage ? (f(), x(h, {
      key: 0,
      page: e.splitPage,
      paths: e.subPaths,
      attrs: e.subAttrs
    }, null, 8, ["page", "paths", "attrs"])) : (f(), x(u, {
      key: 1,
      class: "child-container empty"
    }))
  ], 64);
}
const tt = /* @__PURE__ */ Y(Ke, [["render", et], ["styles", [Ue]], ["__scopeId", "data-v-965835d9"]]), D = Se({
  QRCode: {
    en: "Scan Code",
    zh: "\u4E8C\u7EF4\u7801"
  },
  split: {
    en: "Split Mode",
    zh: "\u5206\u5C4F\u6A21\u5F0F"
  },
  single: {
    en: "Single Mode",
    zh: "\u5355\u5C4F\u6A21\u5F0F"
  },
  autoScreen: {
    en: "Auto",
    zh: "\u81EA\u9002\u5E94"
  },
  fullScreen: {
    en: "Fullscreen",
    zh: "\u5168\u5C4F\u663E\u793A"
  },
  multi: {
    en: "Multiple",
    zh: "\u590D\u5236\u5E94\u7528"
  },
  copy: {
    en: "Copy Link",
    zh: "\u590D\u5236\u94FE\u63A5"
  },
  newTab: {
    en: "New Tab",
    zh: "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00"
  },
  reload: {
    en: "Reload",
    zh: "\u5237\u65B0"
  },
  back: {
    en: "Back",
    zh: "\u8FD4\u56DE"
  },
  share: {
    en: "Share",
    zh: "\u5206\u4EAB"
  },
  close: {
    en: "Close App",
    zh: "\u5173\u95ED\u5E94\u7528"
  },
  drag: {
    en: "Drag up and down to sort",
    zh: "\u4E0A\u4E0B\u62D6\u52A8\u6392\u5E8F"
  }
}), it = {
  100: I[100],
  200: I[200],
  300: I[300],
  400: I[400],
  500: I[500]
}, st = V({
  components: { IFrame: Oe },
  props: ["options"],
  setup({ options: e }) {
    const { app: t } = e, { split: s = !1, level: n = 100, style: a = {} } = t, o = ye(void 0), { ctx: i } = ve();
    return {
      app: t,
      langs: D,
      levels: it,
      overview: N,
      controlbar: R,
      style: be(a),
      single: L(!0),
      split: L(s),
      splitSwitch: L(!1),
      level: L(n),
      displays: L(!1),
      init: L(!1),
      reload: L(!0),
      loading: L(!0),
      maskComponent: o,
      buttons: [
        {
          icon: "ficon-reload",
          name: D.reload,
          action() {
            i.onreload();
          }
        },
        {
          icon: "ficon-copy",
          name: D.multi,
          action() {
            i.onmulti();
          }
        },
        {
          icon: "ficon-erweima",
          name: D.QRCode,
          action() {
            i.openMask("mask/qrcode");
          }
        },
        {
          icon: "ficon-link",
          name: D.copy,
          action() {
            i.oncopy();
          }
        },
        {
          icon: "ficon-icons_send",
          name: D.share,
          action() {
            i.openMask("mask/share");
          }
        }
      ]
    };
  },
  computed: {
    href() {
      const { url: e } = this.options;
      return `${Ie}/#${e}`;
    }
  },
  methods: {
    open: je,
    openBlank: Re,
    onmulti() {
      this.multiId ? this.multiId++ : this.multiId = 1;
      const e = { ...this.options, referer: this };
      e.url += `?mid=${this.multiId}`, Ee(e);
    },
    async oncopy() {
      navigator.clipboard ? (await navigator.clipboard.writeText(this.href), ce.success(
        oe({
          en: `Copy Success\b ${this.href}`,
          zh: `\u590D\u5236\u6210\u529F\b ${this.href}`
        })
      )) : ce.error(
        oe({
          en: "Copy Failed",
          zh: "\u590D\u5236\u5931\u8D25"
        })
      );
    },
    onclose() {
      Be(this);
    },
    timeouCloseResize() {
      const e = te ? 3e3 : 1200;
      clearTimeout(this.clearTimeouId), this.clearTimeouId = setTimeout(() => this.displays = !1, e);
    },
    clearResizeTimeouID() {
      clearTimeout(this.clearTimeouId);
    },
    closeResizeView(e) {
      this.controlbar ? this.controlbar = !1 : e.target === e.currentTarget && (this.displays = !1);
    },
    drawer() {
      this.controlbar = !0;
    },
    openMask(e) {
      le(e).then(
        (t) => this.maskComponent = t
      );
    },
    closeMask() {
      this.maskComponent = void 0;
    },
    context() {
      return this;
    },
    setWidth(e) {
      let s = G() - (this.left + e), n = e - this.width;
      s < 0 ? n += s : s = 0, this.width = e, this.$el.style.width = `${e}px`;
      for (const a in y) {
        const o = y[a];
        o.left > this.left ? o.left += n : o.left += s;
        const { style: i } = o.$el;
        i.transition = "", i.transform = `translate3d(${o.left}px, 0, 0)`;
      }
    },
    setLevel(e) {
      const t = I[e];
      this.level = Number(e);
      const s = this.level / 100 - 1;
      this.setWidth(t + s);
    },
    onSplit(e) {
      this.single || (this.split = e, e ? this.setLevel(this.$refs.mount.childElementCount * 100) : (this.level = 100, this.setWidth(F)));
    },
    fullScreen() {
      const { left: e } = m.initOptions.apps, s = G() - e, n = e - this.left, a = n - (this.width - s);
      this.width = s, this.level = Z(s), this.$el.style.width = `${s}px`;
      for (const o in y) {
        const i = y[o], { style: u } = i.$el;
        i.left <= this.left ? i.left += n : i.left += a, u.transition = "", u.transform = `translate3d(${i.left}px, 0, 0)`;
      }
    },
    autoScreen() {
      let e = 100;
      const { app: t } = this;
      t.iframe ? t.level && (e = t.level) : this.split && (e = this.$refs.mount.childElementCount * 100), this.level = e;
      const s = I[e], n = this.width - s;
      this.width = s, this.$el.style.width = `${s}px`;
      for (const a in y) {
        const o = y[a], { style: i } = o.$el;
        o.left > this.left && (o.left -= n), i.transition = "", i.transform = `translate3d(${o.left}px, 0, 0)`;
      }
    },
    autoAlign() {
      const e = G(), { left: t } = m.initOptions.apps;
      t + this.width === e ? this.autoScreen() : this.fullScreen();
    },
    initResize() {
      let e = 0, t = 0;
      const { $apps: s } = m, { style: n } = this.$el, a = new ue(this.$refs.resize, { angle: 20 });
      te === !1 && a.on("start", () => ee.display = ""), a.on("lock", () => {
        a.dir === "X" ? (clearTimeout(this.clearTimeouId), e = this.$el.clientWidth, n.transition = "unset", this.originlLeft = this.left, this.displays = !0) : (N.value = !0, ee.cursor = "col-resize", t = a.clientX, s.style.transformOrigin = `${a.clientX}px 50%`, J.emit("sidebar.switch", !1));
      }), a.on("level", () => {
        const { move: i } = a;
        e += i;
        const u = this.originlLeft - this.left;
        if (e > F) {
          if (u === 0)
            for (const h in y) {
              const p = y[h];
              p.left > this.left && (p.left += i);
              const { style: r } = p.$el;
              r.transition = "unset", r.transform = `translate3d(${p.left}px, 0, 0)`;
            }
          else {
            const h = this.left + this.width, p = a.current - h;
            e = a.current - this.originlLeft;
            for (const r in y) {
              const l = y[r];
              l.left > this.left ? l.left += p : l.left += u;
              const { style: c } = l.$el;
              c.transition = "unset", c.transform = `translate3d(${l.left}px, 0, 0)`;
            }
          }
          if (n.width = `${e}px`, this.level = Z(e), this.width = e, this.single === !1) {
            const { children: h } = this.$refs.mount;
            for (const p of h) {
              const r = String(Z(p.clientWidth));
              r !== p.getAttribute("level") && p.setAttribute("level", r);
            }
          }
        } else {
          const h = Math.ceil(Math.abs((e - F) / 15)) || 1;
          if (this.width === F)
            m.swiper.move(i / h);
          else {
            this.level = 100;
            const p = F - this.width, l = (i - p) / h, c = l + p;
            e = F, n.width = `${F}px`, this.width = F;
            for (const d in y) {
              const g = y[d];
              g.left > this.originlLeft ? g.left += c : g.left += l;
              const { style: b } = g.$el;
              b.transition = "unset", b.transform = `translate3d(${g.left}px, 0, 0)`;
            }
          }
        }
      }), a.on("vertical", (i) => {
        const { current: u, start: h, clientX: p } = a, r = p - t;
        m.swiper.move(r * 3), t = p;
      }), a.on("end", () => {
        if (a.dir === "X") {
          const i = this.originlLeft - this.left;
          i && m.swiper.scroll(i), this.timeouCloseResize();
        }
      });
      let o = 0;
      a.on("click", (i) => {
        this.displays = !0, this.controlbar = !1, this.timeouCloseResize(), i.timeStamp - o < 300 && this.autoAlign(), o = i.timeStamp;
      });
    },
    async onreload() {
      this.reload = !1, this.loading = !0, await W(), this.reload = !0, await W(), this.createApp && this.createApp();
    },
    onIFrameLoad(e) {
      this.loading = !1, e(this);
    }
  },
  async mounted() {
    var h;
    await W(), this.initResize();
    let e = I[this.level];
    const t = G(), { left: s } = m.initOptions.apps, { options: n, app: a } = this, { referer: o } = n;
    if (o) {
      let p = o.left + o.width;
      const r = t - (p + e);
      r < 0 && (p += r, m.swiper.scroll(r)), this.left = p > s ? p : s;
    } else {
      const p = Object.values(y);
      if (p.length) {
        let r, l, c, d = Number.MAX_SAFE_INTEGER, g = Number.MIN_SAFE_INTEGER, b = Number.MIN_SAFE_INTEGER;
        for (const w of p)
          w.left < d && (r = w, d = w.left), w.left > b && (b = w.left, b + w.width <= t && (c = w)), w.left > g && (l = w, g = w.left);
        if (l.left < 0) {
          this.left = s;
          const w = s - (l.left + l.width);
          m.swiper.scroll(w);
        } else if (c) {
          let w = c.left + c.width;
          const _ = t - (w + e);
          _ < 0 && (w += _, m.swiper.scroll(_)), this.left = w;
        } else {
          const w = s - r.left;
          m.swiper.scroll(w), this.left = s;
        }
      } else {
        const r = (h = m.initOptions.apps) == null ? void 0 : h.align;
        this.left = r === "right" ? t - e : s;
      }
    }
    if (a.flex === !0) {
      const p = I[400], r = t - this.left;
      r < p ? e = r : e = p;
    }
    this.width = e;
    const { style: i } = this.$el;
    i.opacity = 0, i.width = `${e}px`, i.transition = "unset";
    const u = this.left - 100;
    i.transform = `translate3d(${u}px, 0, 0)`, requestAnimationFrame(() => {
      i.opacity = 1, i.transition = "", i.transform = `translate3d(${this.left}px, 0, 0)`;
    });
    for (const p in y) {
      const r = y[p];
      r.left >= this.left && (r.left += e, Object.assign(r.$el.style, {
        transition: "",
        transform: `translate3d(${r.left}px, 0, 0)`
      }));
    }
    if (y[n.url] = this, a.src) {
      const p = await le(a.src);
      if (p.app) {
        Object.assign(a, p.app);
        const { name: d, color: g, icon: b } = p.app;
        d && (n.name = d), g && (n.color = g), b && (n.icon = b);
      }
      this.init = !0;
      const { level: r } = this;
      let l;
      const c = { instance: this, level: r };
      if (p.install === void 0) {
        const { pages: d } = p, { style: g } = a;
        if (d) {
          let { paths: b } = n;
          b ? b.shift() : b = [], l = { entry: p, pages: d, paths: b, style: g }, this.single = !1;
          let w = !1;
          for (const _ in d) {
            const { __asyncLoader: ae, inline: he } = d[_];
            ae ? ae().then((me) => {
              w === !1 && me.inline === void 0 && (w = !0, this.split = !0, this.splitSwitch = !0);
            }) : he === void 0 && (w = !0);
          }
          w && (this.split = !0, this.splitSwitch = !0), Object.assign(c, tt);
        } else
          this.split = !1, Object.assign(c, p), g && Object.assign(this.style, g);
        await W(), this.createApp = () => {
          this.loading = !1;
          const b = ke(c, l);
          b.use(De);
          const w = this.$refs.mount, _ = new Xe({
            app: b,
            options: n,
            el: w,
            container: this
          });
          this.router = _, b.provide("container", this), b.provide("router", _), this.pages = b.mount(w);
        };
      } else
        await W(), this.createApp = () => {
          this.loading = !1;
          const d = this.$refs.mount;
          p.install(d, { app: this });
        };
      this.createApp();
    }
    _e(n), m.initComponentPromise && (await m.initComponentPromise, m.initComponentPromise = void 0), J.emit("opened", n);
  }
}), nt = `app[data-v-2f91ec47]{position:absolute;top:1px;bottom:0;left:0;display:flex;white-space:initial;transition:all .4s;transform:translateZ(0)}app titlebar[data-v-2f91ec47]{position:absolute;top:-35px;left:0;right:0;display:flex;justify-content:space-between;font-size:18px}app titlebar .title[data-v-2f91ec47]{font-weight:700;color:#fff}app titlebar .title i[data-v-2f91ec47]{font-size:20px;padding:0 10px}app view[data-v-2f91ec47]{flex:1;overflow:hidden;transition:all .25s;transform:translate(0);background:#ffffff;border-radius:12px;box-shadow:0 0 6px #ccc}app view.loading[data-v-2f91ec47]{background:#d1d1d14d}@keyframes loading-2f91ec47{0%{transform:translate3d(-100%,0,0)}to{transform:translate3d(100%,0,0)}}app view.loading[data-v-2f91ec47]:before{content:"";position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;background:linear-gradient(98deg,#00000000,#00000000,#ffffff47,#00000000,#00000000);animation:loading-2f91ec47 1.2s infinite}app view .close[data-v-2f91ec47]{position:fixed;top:10px;right:10px;z-index:1000;width:32px;height:32px;flex:1;display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;background:#ffffff;box-shadow:inset 0 0 3px #c9c9c9;transition:all .25s;transform:translate3d(0,-140%,0)}app view .close i[data-v-2f91ec47]{font-size:14px;color:#000}app view .mount[data-v-2f91ec47]{display:block;background:inherit;height:100%}app view .mount.flat[data-v-2f91ec47]{display:flex;justify-content:flex-end}app view .mount.fixed[data-v-2f91ec47]{width:100%}app view .mount.fixed[data-v-2f91ec47]>container{position:absolute;left:0;right:0;width:100%;border-left:unset}app view .view-display[data-v-2f91ec47]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .3s;opacity:0;pointer-events:none}app view .view-display .view-levels[data-v-2f91ec47],app view .view-display .view-resize[data-v-2f91ec47],app view .view-display .view-mode[data-v-2f91ec47]{display:flex;width:300px;height:120px;margin-bottom:10px;overflow:hidden;border-radius:10px;box-shadow:0 0 8px #bbb;background-color:#464646}app view .view-display .view-levels div[data-v-2f91ec47]{flex:1;display:flex;justify-content:center;align-items:center;color:#fff;font-size:12px;cursor:pointer;border-left:1px solid #555;transition:all .3s}app view .view-display .view-levels div.active[data-v-2f91ec47]{color:#444;background-color:#fff;border-left:1px solid #ddd}app view .view-display .view-levels div[data-v-2f91ec47]:first-child{border-left:none}app view .view-display .view-resize[data-v-2f91ec47]{justify-content:space-between;font-size:12px;padding:6px}app view .view-display .view-resize .auto-resize[data-v-2f91ec47],app view .view-display .view-resize .full-screen[data-v-2f91ec47]{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:6px}app view .view-display .view-resize .auto-resize i[data-v-2f91ec47],app view .view-display .view-resize .full-screen i[data-v-2f91ec47]{font-size:20px;padding:9px}app view .view-display .view-resize .auto-resize[data-v-2f91ec47]{flex:none;width:110px;color:#555;background-color:#fff}app view .view-display .view-resize .full-screen[data-v-2f91ec47]{flex:1;margin-left:6px;color:#fff;transition:background-color .2s}app view .view-display .view-resize .full-screen[data-v-2f91ec47]:hover{color:#555;background-color:#fff}app view .view-display .view-mode[data-v-2f91ec47]{justify-content:space-between;font-size:12px;padding:6px}app view .view-display .view-mode .single-mode[data-v-2f91ec47],app view .view-display .view-mode .split-mode[data-v-2f91ec47]{cursor:pointer;transition:background-color .2s;border-radius:6px}app view .view-display .view-mode .single-mode i[data-v-2f91ec47],app view .view-display .view-mode .split-mode i[data-v-2f91ec47]{font-size:20px;padding:9px}app view .view-display .view-mode .single-mode[data-v-2f91ec47]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:110px;color:#555;background-color:#fff}app view .view-display .view-mode .split-mode[data-v-2f91ec47]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-left:6px;overflow:hidden;color:#fff}app view .view-display .view-mode.split .single-mode[data-v-2f91ec47]{color:#fff;background-color:unset}app view .view-display .view-mode.split .split-mode[data-v-2f91ec47]{color:#555;background-color:#fff}app view .view-mask[data-v-2f91ec47]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100;background:linear-gradient(100deg,rgba(255,255,255,.1),rgba(159,159,159,.3));transition:opacity .3s;opacity:0;pointer-events:none}app view .view-drawer[data-v-2f91ec47]{position:fixed;left:0;right:0;bottom:0;z-index:1000;display:flex;flex-direction:column;justify-content:space-between;height:310px;background-color:#fcfcfc;border-radius:12px 12px 0 0;transition:all .2s;transform:translate3d(0,110%,0);box-shadow:0 0 8px #d5d5d5}app view .view-drawer .header[data-v-2f91ec47]{display:flex;justify-content:space-between;height:65px;cursor:pointer}app view .view-drawer .header .title[data-v-2f91ec47]{flex:1;padding:20px 15px 0;font-size:14px;font-weight:700;color:#555;white-space:nowrap;text-overflow:ellipsis}app view .view-drawer .header .title i[data-v-2f91ec47]{margin-right:8px;font-size:20px;vertical-align:middle}app view .view-drawer .header .title span[data-v-2f91ec47]{font-size:15px;vertical-align:middle}app view .view-drawer .header .button[data-v-2f91ec47]{flex:none;margin-left:4px;padding:20px 9px 0;width:40px;cursor:pointer}app view .view-drawer .header .button i[data-v-2f91ec47]{font-size:16px;color:#666}app view .view-drawer .buttons[data-v-2f91ec47]{flex:1;display:flex;flex-wrap:wrap;padding:0 6px;align-content:flex-start}app view .view-drawer .buttons .button[data-v-2f91ec47]{display:flex;flex-direction:column;width:75px;height:80px;color:#555;cursor:pointer;border-radius:10px;transition:background-color .2s}app view .view-drawer .buttons .button i[data-v-2f91ec47]{display:flex;justify-content:center;align-items:center;height:50px;font-size:20px}app view .view-drawer .buttons .button span[data-v-2f91ec47]{font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}app view .view-drawer .buttons .button[data-v-2f91ec47]:hover{background-color:#eee}app view .bottom-line[data-v-2f91ec47]{position:fixed;left:0;right:0;bottom:0;z-index:2000;height:26px;display:flex;justify-content:center;align-items:center;cursor:move;transition:transform .2s;transform:translate3d(0,100%,0)}app view .bottom-line[data-v-2f91ec47]:after{content:"";width:150px;height:3px;background-color:#666;border-radius:3px}app view .displays .view-display[data-v-2f91ec47]{opacity:1;pointer-events:all}app view .displays .close[data-v-2f91ec47]{transform:unset}app view .displays .view-drawer[data-v-2f91ec47]{transform:translate3d(0,76%,0)}app view .displays .bottom-line[data-v-2f91ec47]{transform:unset}app view .controlbar .view-mask[data-v-2f91ec47]{opacity:1;pointer-events:all;cursor:move}app view .controlbar .close[data-v-2f91ec47],app view .controlbar .view-drawer[data-v-2f91ec47],app view .controlbar .bottom-line[data-v-2f91ec47]{transform:unset}app view .controlbar .view-drawer .header[data-v-2f91ec47]{cursor:default}app resize[data-v-2f91ec47]{flex:none;width:16px;padding:8px 6px;cursor:move}app resize[data-v-2f91ec47]:before{display:block;content:"";height:100%;border-radius:50px;transition:background-color .25s;background-color:#ffffff50;box-shadow:inset 0 0 3px #ccc}app resize[data-v-2f91ec47]:hover:before,app resize[data-v-2f91ec47]:active:before{background-color:#00000085;box-shadow:0 0 2px #888}app.overview view .view-mask[data-v-2f91ec47]{pointer-events:all}@media screen and (max-width: 1025px){app[data-v-2f91ec47]{top:0px}}
`, T = (e) => (xe("data-v-2f91ec47"), e = e(), $e(), e), at = { class: "title" }, ot = ["level"], lt = { class: "view-resize" }, rt = /* @__PURE__ */ T(() => /* @__PURE__ */ v("i", { class: "ficon-auto" }, null, -1)), pt = /* @__PURE__ */ T(() => /* @__PURE__ */ v("i", { class: "ficon-fullscreen" }, null, -1)), ct = /* @__PURE__ */ T(() => /* @__PURE__ */ v("i", { class: "ficon-pages_outlined" }, null, -1)), dt = /* @__PURE__ */ T(() => /* @__PURE__ */ v("i", { class: "ficon-fenping1" }, null, -1)), ft = /* @__PURE__ */ T(() => /* @__PURE__ */ v("div", {
  class: "view-mask",
  event: "mask"
}, null, -1)), vt = { class: "header item" }, ut = { class: "title" }, ht = ["title"], mt = /* @__PURE__ */ T(() => /* @__PURE__ */ v("i", { class: "ficon-xinchuangkou" }, null, -1)), wt = [
  mt
], gt = {
  key: 1,
  class: "button"
}, yt = /* @__PURE__ */ T(() => /* @__PURE__ */ v("i", { class: "ficon-up" }, null, -1)), bt = [
  yt
], kt = { class: "buttons" }, xt = ["onClick"], $t = ["title"], zt = /* @__PURE__ */ T(() => /* @__PURE__ */ v("i", { class: "ficon-cha" }, null, -1)), Ct = [
  zt
];
function Pt(e, t, s, n, a, o) {
  const i = C("titlebar"), u = C("container"), h = C("IFrame"), p = C("resize"), r = C("app");
  return f(), x(r, {
    class: z({ overview: e.overview })
  }, {
    default: S(() => [
      e.overview ? (f(), x(i, { key: 0 }, {
        default: S(() => [
          v("div", at, [
            e.app.icon ? (f(), k("i", {
              key: 0,
              class: z(e.app.icon),
              style: O({ color: e.app.color })
            }, null, 6)) : $("", !0),
            v("span", null, M(e.app.name), 1)
          ])
        ]),
        _: 1
      })) : $("", !0),
      v("view", {
        class: z({ loading: e.loading }),
        style: O(e.style)
      }, [
        e.reload ? (f(), x(X, {
          key: 0,
          name: "fade",
          appear: ""
        }, {
          default: S(() => [
            e.app.src ? (f(), k(E, { key: 0 }, [
              e.init ? (f(), k(E, { key: 0 }, [
                e.single ? (f(), x(u, {
                  key: 0,
                  class: "mount scroll-y",
                  level: e.level,
                  ref: "mount",
                  onBack: e.onclose
                }, null, 8, ["level", "onBack"])) : (f(), k("div", {
                  key: 1,
                  class: z(["mount", [e.split ? "flat" : "fixed"]]),
                  ref: "mount",
                  onBack: t[0] || (t[0] = (...l) => e.onclose && e.onclose(...l))
                }, null, 34))
              ], 64)) : $("", !0)
            ], 64)) : e.app.iframe ? (f(), x(h, {
              key: 1,
              src: e.app.iframe,
              gesture: e.app.gesture,
              onLoad: e.onIFrameLoad
            }, null, 8, ["src", "gesture", "onLoad"])) : $("", !0)
          ]),
          _: 1
        })) : $("", !0),
        B(X, {
          name: "fade",
          appear: ""
        }, {
          default: S(() => [
            e.maskComponent ? (f(), x(H(e.maskComponent), {
              key: 0,
              context: e.context
            }, null, 8, ["context"])) : $("", !0)
          ]),
          _: 1
        }),
        v("div", {
          class: z({ controlbar: e.controlbar, displays: e.displays }),
          onMouseenter: t[10] || (t[10] = (...l) => e.clearResizeTimeouID && e.clearResizeTimeouID(...l)),
          onMouseleave: t[11] || (t[11] = (...l) => e.timeouCloseResize && e.timeouCloseResize(...l))
        }, [
          v("div", {
            class: "view-display",
            onClick: t[6] || (t[6] = (...l) => e.closeResizeView && e.closeResizeView(...l))
          }, [
            v("div", {
              class: "view-levels",
              onClick: t[1] || (t[1] = (l) => e.setLevel(l.target.getAttribute("level")))
            }, [
              (f(!0), k(E, null, U(e.levels, (l, c) => (f(), k("div", {
                key: c,
                level: c,
                class: z({ active: c <= e.level })
              }, M(c) + "% ", 11, ot))), 128))
            ]),
            v("div", lt, [
              v("div", {
                class: "auto-resize",
                onClick: t[2] || (t[2] = (...l) => e.autoScreen && e.autoScreen(...l))
              }, [
                rt,
                q(" " + M(e.langs.autoScreen), 1)
              ]),
              v("div", {
                class: "full-screen",
                onClick: t[3] || (t[3] = (...l) => e.fullScreen && e.fullScreen(...l))
              }, [
                pt,
                q(" " + M(e.langs.fullScreen), 1)
              ])
            ]),
            e.splitSwitch ? (f(), k("div", {
              key: 0,
              class: z(["view-mode", { split: e.split }])
            }, [
              v("div", {
                class: "single-mode",
                onClick: t[4] || (t[4] = (l) => e.onSplit(!1))
              }, [
                ct,
                q(" " + M(e.langs.single), 1)
              ]),
              v("div", {
                class: "split-mode",
                onClick: t[5] || (t[5] = (l) => e.onSplit(!0))
              }, [
                dt,
                q(" " + M(e.langs.split), 1)
              ])
            ], 2)) : $("", !0)
          ]),
          ft,
          v("div", {
            class: "view-drawer",
            onClick: t[8] || (t[8] = (...l) => e.drawer && e.drawer(...l))
          }, [
            v("div", vt, [
              v("div", ut, [
                e.app.icon ? (f(), k("i", {
                  key: 0,
                  class: z(e.app.icon),
                  style: O({ color: e.app.color })
                }, null, 6)) : $("", !0),
                v("span", null, M(e.app.name), 1)
              ]),
              e.controlbar ? (f(), k("div", {
                key: 0,
                class: "button",
                title: e.langs.newTab,
                onClick: t[7] || (t[7] = (l) => e.openBlank(e.options.url))
              }, wt, 8, ht)) : (f(), k("div", gt, bt))
            ]),
            v("div", kt, [
              (f(!0), k(E, null, U(e.buttons, ({ name: l, icon: c, action: d }) => (f(), k("div", {
                class: "button",
                onClick: d
              }, [
                v("i", {
                  class: z(c)
                }, null, 2),
                v("span", null, M(l), 1)
              ], 8, xt))), 256))
            ])
          ]),
          v("div", {
            class: "bottom-line",
            title: e.langs.drag
          }, null, 8, $t),
          v("div", {
            class: "close",
            onClick: t[9] || (t[9] = ie((...l) => e.onclose && e.onclose(...l), ["stop"]))
          }, Ct)
        ], 34)
      ], 6),
      B(p, { ref: "resize" }, null, 512)
    ]),
    _: 1
  }, 8, ["class"]);
}
const At = /* @__PURE__ */ Y(st, [["render", Pt], ["styles", [nt]], ["__scopeId", "data-v-2f91ec47"]]), Lt = /* @__PURE__ */ V({
  __name: "index",
  setup(e) {
    const t = ze(() => import("./guide.js")), s = L(!1), { initOptions: n } = m, { apps: a } = n;
    n.app && j.push(n);
    const { urls: o, align: i = "left" } = a;
    if (o)
      for (const r of o) {
        const l = re(r);
        l && !j.includes(l) && (l.paths = r.split("/"), j.push(l));
      }
    if (a.left === void 0 && (a.left = 3), K && K.length)
      for (const r of K) {
        const l = re(r);
        l && !j.includes(l) && (l.paths = r.split("/"), j.push(l));
      }
    j.length === 0 && (A.value = !1);
    function u() {
      const r = {
        37() {
          A.value === !1 ? (A.value = !0, requestAnimationFrame(() => {
            m.swiper.move(-1), m.swiper.next();
          })) : (m.swiper.move(-1), m.swiper.next());
        },
        39() {
          A.value === !1 ? (A.value = !0, requestAnimationFrame(() => {
            m.swiper.move(1), m.swiper.previous();
          })) : (m.swiper.move(1), m.swiper.previous());
        },
        65() {
          J.emit("sidebar.switch");
        },
        67() {
          pe();
        },
        83() {
          A.value = !A.value;
        },
        112(c) {
          c.preventDefault(), s.value = !s.value;
        }
      };
      let l;
      document.addEventListener("keydown", (c) => {
        const { keyCode: d } = c, g = r[d];
        g && l === void 0 && (l = d, c.target.validity === void 0 && g(c));
      }), document.addEventListener("keyup", (c) => {
        l === c.keyCode && (l = void 0);
      });
    }
    const h = L();
    Ce(() => {
      const r = h.value;
      m.$apps = r, Ne(r), u(), localStorage.guideState === void 0 && setTimeout(() => s.value = !0, 2e3);
    });
    function p(r) {
      "validity" in r.target || (r.preventDefault(), pe());
    }
    return (r, l) => (f(), k(E, null, [
      v("div", {
        class: z(["apps-mask full", {
          active: P(A) && P(R),
          overview: P(A) && P(N)
        }])
      }, null, 2),
      B(X, { name: "fade" }, {
        default: S(() => [
          Pe(v("section", {
            class: z(["apps split", { control: P(R), overview: P(N), [P(i)]: !0 }]),
            ref_key: "$apps",
            ref: h,
            onContextmenu: p
          }, [
            (f(!0), k(E, null, U(P(j), (c) => (f(), x(At, {
              key: c.url,
              options: c
            }, null, 8, ["options"]))), 128))
          ], 34), [
            [Ae, P(A)]
          ])
        ]),
        _: 1
      }),
      B(X, {
        name: "fade",
        appear: ""
      }, {
        default: S(() => [
          s.value ? (f(), x(P(t), {
            key: 0,
            onClose: l[0] || (l[0] = (c) => s.value = !1)
          })) : $("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}), St = `.apps-mask[data-v-9fcfc60e]{position:fixed;z-index:10000;left:0;right:0;top:0;bottom:0;transition:background .3s;pointer-events:none;transform:translateZ(0)}.apps-mask.active[data-v-9fcfc60e]{pointer-events:unset;background:#00000030}.apps-mask.overview[data-v-9fcfc60e]{pointer-events:unset;background:#00000060}.apps[data-v-9fcfc60e]{position:fixed;z-index:20000;top:env(titlebar-area-height,0px);bottom:0;left:0;user-select:none;transition:all .25s}.apps.control[data-v-9fcfc60e]{right:0}.apps.overview[data-v-9fcfc60e]{transform:scale3d(.85,.85,1)}
`, Dt = /* @__PURE__ */ Y(Lt, [["styles", [St]], ["__scopeId", "data-v-9fcfc60e"]]);
export {
  Y as _,
  Dt as i
};
