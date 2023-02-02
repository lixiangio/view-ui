import { defineComponent as R, resolveComponent as y, openBlock as p, createElementBlock as h, Fragment as P, createVNode as _, Transition as j, withCtx as C, normalizeStyle as F, withModifiers as U, createBlock as m, resolveDynamicComponent as X, normalizeProps as Z, guardReactiveProps as J, createCommentVNode as g, createElementVNode as f, inject as ce, getCurrentInstance as oe, shallowReactive as fe, shallowRef as ue, reactive as ve, ref as k, nextTick as B, createApp as he, normalizeClass as $, renderList as G, toDisplayString as S, createTextVNode as W, pushScopeId as me, popScopeId as be, onMounted as ge, withDirectives as we, unref as T, vShow as ye } from "/view-ui/libs/vue.js";
import b, { instances as v, addStyle as Y, asyncComponent404 as ke, Langs as xe, widths as z, baseURL as $e, Lang as K, importAsyncComponent as ee, minAppWidith as L, getLevel as H, events as ze, getChildOptions as te, urlHistory as q } from "/view-ui/libs/view.js";
import { controlbar as E, overview as V, openApp as Pe, addHistory as Ce, apps as I, appsState as ie, controllerSwitch as Le } from "/view-ui/libs/state.js";
import le, { DisableEvent as Ae, MaskStyle as re, isTouch as Q, screenHeight as Se } from "/view-ui/libs/pointer.js";
import { open as Ie, openBlank as _e, closeInstance as Me } from "/view-ui/libs/navigator.js";
import Ee, { IFrame as je } from "/view-ui/libs/components.js";
import { getRightBaseLine as N } from "/view-ui/libs/swiper.js";
import { message as se } from "/view-ui/libs/viewui.js";
import Be from "/view-ui/libs/router.js";
function Te(e) {
  const t = new le(e);
  let s = "", a;
  t.on("start", (i) => {
    if (s = "", a = void 0, "validity" in i.target)
      return Ae();
    for (const n in v) {
      a = v[n];
      return;
    }
    b.instance = a;
  }), t.on("lock", () => {
    if (a && t.dir === "Y")
      if (E.value === !1 && a.displays === !1)
        s = "scroll";
      else {
        s = "drag", re.cursor = "move", t.lastX = t.startX, t.lastY = t.startY, Object.assign(a.$el.style, { zIndex: 100, transition: "unset" }), t.initLeft = a.left;
        for (const i in v) {
          const n = v[i];
          n !== a && Object.assign(n.$el.style, { zIndex: "", transition: "" });
        }
      }
  });
  let o;
  Q === !1 && (t.on("lock", (i) => {
    if (s === "scroll") {
      let n = i.target;
      for (; n; ) {
        if (n.classList.contains("scroll-y")) {
          o = n;
          break;
        }
        const { parentElement: c } = n;
        if (c)
          n = c;
        else {
          o = n;
          break;
        }
      }
      o.classList.add("scrollbar");
    }
  }), t.on("vertical", (i) => {
    if (s === "scroll" && o) {
      const { scrollTop: n } = o, { move: c } = t;
      if (c)
        o.scroll(0, n - c);
      else {
        const { screenY: l } = i;
        l === 0 ? o.scroll(0, n + 16) : l === Se && o.scroll(0, n - 16);
      }
    }
  }), t.on("end", () => {
    s === "scroll" && o && (o.classList.remove("scrollbar"), o = void 0);
  })), t.on("end", () => {
    if (s === "drag") {
      const { style: i } = a.$el;
      Object.assign(i, {
        transition: ""
      });
    }
  }), t.on("click", ({ target: i }) => {
    V.value ? (V.value = !1, e.style.transformOrigin = `${t.clientX}px 50%`) : i.getAttribute("event") === "mask" ? E.value = !E.value : i === e && (E.value = !1);
  }), b.appsPointer = t;
}
function ae(e, t, s) {
  Y(t);
  const { app: a, pages: o } = t;
  if (a) {
    const { style: i, transition: n = "fade" } = a;
    s.style = i, s.transition = n;
  }
  o && e && (s.inlinePage = o[e]);
}
const Fe = R({
  props: ["page", "paths", "attrs"],
  data() {
    const [e, ...t] = this.paths, s = {
      subPaths: t,
      open: !1,
      style: void 0,
      inlinePage: void 0,
      transition: void 0
    }, { page: a } = this;
    return a.__asyncLoader === void 0 ? ae(e, a, s) : a.__asyncLoader().then((o) => ae(e, o, this)), s;
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
        const [a, ...o] = e, i = s[a];
        if (i) {
          Y(i), this.subPaths = o, this.inlinePage = i;
          return;
        }
      }
      this.subPaths = [], this.inlinePage = void 0;
    }
  },
  mounted() {
    this.open = !0;
  }
}), Re = `.page[data-v-58bd3f05]{position:fixed;left:0;top:0;right:0;bottom:0}
`, D = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [a, o] of t)
    s[a] = o;
  return s;
};
function De(e, t, s, a, o, i) {
  const n = y("Inline", !0);
  return p(), h(P, null, [
    _(j, {
      name: e.transition,
      onAfterLeave: e.back
    }, {
      default: C(() => [
        e.open ? (p(), h("div", {
          key: 0,
          class: "page scroll-y",
          style: F(e.style),
          onBack: t[0] || (t[0] = U((c) => e.open = !1, ["stop"]))
        }, [
          (p(), m(X(e.page), Z(J(e.attrs)), null, 16))
        ], 36)) : g("", !0)
      ]),
      _: 1
    }, 8, ["name", "onAfterLeave"]),
    e.inlinePage ? (p(), m(n, {
      key: 0,
      page: e.inlinePage,
      paths: e.subPaths
    }, null, 8, ["page", "paths"])) : g("", !0)
  ], 64);
}
const Oe = /* @__PURE__ */ D(Fe, [["render", De], ["styles", [Re]], ["__scopeId", "data-v-58bd3f05"]]);
function ne(e, t, s) {
  Y(t), s.open = !0;
  const { app: a, pages: o } = t;
  s.style = a ? a.style : null, o && e && (s.splitPage = o[e]);
}
const We = R({
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
    const { page: a } = this;
    return a.__asyncLoader ? a.__asyncLoader().then((o) => ne(e, o, this)) : ne(e, a, s), s;
  },
  methods: {
    afterLeave() {
      const { $parent: e } = this;
      e.splitPage = void 0, e.subPaths = [];
    }
  },
  watch: {
    paths(e) {
      const [t, ...s] = e, { app: a, pages: o } = this.page;
      if (this.style = a ? a.style : null, t && o) {
        const i = o[t];
        if (i) {
          Y(i), this.subAttrs = this.attrs, this.subPaths = s, this.splitPage = i;
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
}), Ne = `.child-container[data-v-d2395d03]{position:relative;flex:none;overflow:hidden;display:block;width:390px;min-width:390px;height:100%;box-sizing:content-box;transform:translate(0);background:inherit;border-left:1px solid #eee}.child-container .page[data-v-d2395d03]{width:100%;height:100%}.child-container[data-v-d2395d03]:last-child{flex:1}.child-container[data-v-d2395d03] .navbar .back{display:flex}.nav-goto-enter-active[data-v-d2395d03],.nav-goto-leave-active[data-v-d2395d03],.nav-back-enter-active[data-v-d2395d03],.nav-back-leave-active[data-v-d2395d03]{transition:transform .4s ease-in-out}.nav-goto-enter-from[data-v-d2395d03],.nav-back-leave-to[data-v-d2395d03]{transform:translate3d(100%,0,0)}.nav-back-enter-from[data-v-d2395d03],.nav-goto-leave-to[data-v-d2395d03]{transform:translate3d(-30%,0,0)}
`;
function Ve(e, t, s, a, o, i) {
  const n = y("container"), c = y("Child", !0);
  return p(), h(P, null, [
    _(j, {
      name: "fade",
      onAfterLeave: e.afterLeave
    }, {
      default: C(() => [
        e.open ? (p(), m(n, {
          key: 0,
          class: "child-container",
          style: F(e.style),
          level: e.level
        }, {
          default: C(() => [
            f("div", {
              class: "page scroll-y",
              onBack: t[0] || (t[0] = U((l) => e.open = !1, ["stop"]))
            }, [
              (p(), m(X(e.page), Z(J(e.currentAttrs)), null, 16))
            ], 32)
          ]),
          _: 1
        }, 8, ["style", "level"])) : g("", !0)
      ]),
      _: 1
    }, 8, ["onAfterLeave"]),
    e.splitPage ? (p(), m(c, {
      key: 0,
      paths: e.subPaths,
      page: e.splitPage,
      attrs: e.subAttrs
    }, null, 8, ["paths", "page", "attrs"])) : g("", !0)
  ], 64);
}
const Xe = /* @__PURE__ */ D(We, [["render", Ve], ["styles", [Ne]], ["__scopeId", "data-v-d2395d03"]]), Ye = R({
  props: ["entry", "pages", "paths", "style"],
  components: { Inline: Oe, Child: Xe },
  setup({ paths: e, pages: t }) {
    const [s, ...a] = e;
    ce("router").pagesInstance = oe().ctx;
    const o = {
      subPaths: a,
      attrs: void 0,
      subAttrs: void 0,
      splitPage: void 0,
      inlinePage: void 0
    };
    if (s) {
      const i = t[s];
      i ? i.inline === !0 ? o.inlinePage = i : o.splitPage = i : (o.subPaths = [], o.splitPage = ke);
    }
    return fe(o);
  },
  methods: {
    router(e, t) {
      const { pages: s } = this, [a, ...o] = e, i = s[a];
      i ? (this.subAttrs = t, this.subPaths = o, i.__asyncLoader ? i.__asyncLoader().then((n) => {
        s[a] = n, i.inline === !0 ? this.inlinePage = n : this.splitPage = n;
      }) : i.inline === !0 ? this.inlinePage = i : this.splitPage = i) : (this.subPaths = [], this.attrs = t, this.subAttrs = void 0, this.inlinePage = void 0, this.splitPage = void 0);
    }
  }
}), He = `container[data-v-f2f6f247]{display:block}.entry-container[data-v-f2f6f247]{position:relative;flex:none;width:390px;min-width:390px;height:100%;transform:translate(0)}@media screen and (max-width: 850px){.entry-container[data-v-f2f6f247]{width:100%!important}.child-container[data-v-f2f6f247]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:1;border-left:1px solid #eee}}@media screen and (min-width: 850px){.child-container[data-v-f2f6f247]{flex:1;box-sizing:content-box}.child-container.empty[data-v-f2f6f247]{border:unset!important;background-color:#f9f9f9}}.nav-goto-enter-active[data-v-f2f6f247],.nav-goto-leave-active[data-v-f2f6f247],.nav-back-enter-active[data-v-f2f6f247],.nav-back-leave-active[data-v-f2f6f247]{transition:transform .4s ease-in-out}.nav-goto-enter-from[data-v-f2f6f247],.nav-back-leave-to[data-v-f2f6f247]{transform:translate3d(100%,0,0)}.nav-back-enter-from[data-v-f2f6f247],.nav-goto-leave-to[data-v-f2f6f247]{transform:translate3d(-30%,0,0)}
`, qe = { class: "page scroll-y" };
function Ge(e, t, s, a, o, i) {
  const n = y("Inline"), c = y("container"), l = y("Child");
  return p(), h(P, null, [
    _(c, {
      class: "entry-container",
      style: F(e.style),
      level: "100"
    }, {
      default: C(() => [
        f("div", qe, [
          (p(), m(X(e.entry), Z(J(e.attrs)), null, 16))
        ]),
        e.inlinePage ? (p(), m(n, {
          key: 0,
          page: e.inlinePage,
          paths: e.subPaths,
          attrs: e.subAttrs
        }, null, 8, ["page", "paths", "attrs"])) : g("", !0)
      ]),
      _: 1
    }, 8, ["style"]),
    e.splitPage ? (p(), m(l, {
      key: 0,
      page: e.splitPage,
      paths: e.subPaths,
      attrs: e.subAttrs
    }, null, 8, ["page", "paths", "attrs"])) : (p(), m(c, {
      key: 1,
      class: "child-container empty"
    }))
  ], 64);
}
const Qe = /* @__PURE__ */ D(Ye, [["render", Ge], ["styles", [He]], ["__scopeId", "data-v-f2f6f247"]]), M = xe({
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
}), Ue = {
  100: z[100],
  200: z[200],
  300: z[300],
  400: z[400],
  500: z[500]
}, Ze = R({
  components: { IFrame: je },
  props: ["options"],
  setup({ options: e }) {
    const { app: t } = e, { split: s = !1, level: a = 100, style: o = {} } = t, i = ue(void 0), { ctx: n } = oe();
    return {
      app: t,
      langs: M,
      levels: Ue,
      overview: V,
      controlbar: E,
      style: ve(o),
      single: k(!0),
      split: k(s),
      splitSwitch: k(!1),
      level: k(a),
      displays: k(!1),
      init: k(!1),
      reload: k(!0),
      loading: k(!0),
      maskComponent: i,
      buttons: [
        {
          icon: "ficon-reload",
          name: M.reload,
          action() {
            n.onreload();
          }
        },
        {
          icon: "ficon-copy",
          name: M.multi,
          action() {
            n.onmulti();
          }
        },
        {
          icon: "ficon-erweima",
          name: M.QRCode,
          action() {
            n.openMask("mask/qrcode");
          }
        },
        {
          icon: "ficon-link",
          name: M.copy,
          action() {
            n.oncopy();
          }
        },
        {
          icon: "ficon-icons_send",
          name: M.share,
          action() {
            n.openMask("mask/share");
          }
        }
      ]
    };
  },
  computed: {
    href() {
      const { url: e } = this.options;
      return `${$e}/#${e}`;
    }
  },
  methods: {
    open: Ie,
    openBlank: _e,
    onmulti() {
      this.multiId ? this.multiId++ : this.multiId = 1;
      const e = { ...this.options, referer: this };
      e.url += `?mid=${this.multiId}`, Pe(e);
    },
    async oncopy() {
      navigator.clipboard ? (await navigator.clipboard.writeText(this.href), se.success(
        K({
          en: `Copy Success\b ${this.href}`,
          zh: `\u590D\u5236\u6210\u529F\b ${this.href}`
        })
      )) : se.error(
        K({
          en: "Copy Failed",
          zh: "\u590D\u5236\u5931\u8D25"
        })
      );
    },
    onclose() {
      Me(this);
    },
    timeouCloseResize() {
      const e = Q ? 3e3 : 1200;
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
      ee(e).then(
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
      let s = N() - (this.left + e), a = e - this.width;
      s < 0 ? a += s : s = 0, this.width = e, this.$el.style.width = `${e}px`;
      for (const o in v) {
        const i = v[o];
        i.left > this.left ? i.left += a : i.left += s;
        const { style: n } = i.$el;
        n.transition = "";
      }
    },
    setLevel(e) {
      const t = z[e];
      this.level = Number(e);
      const s = this.level / 100 - 1;
      this.setWidth(t + s);
    },
    onSplit(e) {
      this.single || (this.split = e, e ? this.setLevel(this.$refs.mount.childElementCount * 100) : (this.level = 100, this.setWidth(L)));
    },
    fullScreen() {
      const { left: e } = b.initOptions.apps, s = N() - e, a = e - this.left, o = a - (this.width - s);
      this.width = s, this.level = H(s), this.$el.style.width = `${s}px`;
      for (const i in v) {
        const n = v[i], { style: c } = n.$el;
        n.left <= this.left ? n.left += a : n.left += o, c.transition = "";
      }
    },
    autoScreen() {
      let e = 100;
      const { app: t } = this;
      t.iframe ? t.level && (e = t.level) : this.split && (e = this.$refs.mount.childElementCount * 100), this.level = e;
      const s = z[e], a = this.width - s;
      this.width = s, this.$el.style.width = `${s}px`;
      for (const o in v) {
        const i = v[o], { style: n } = i.$el;
        i.left > this.left && (i.left -= a), n.transition = "";
      }
    },
    autoAlign() {
      const e = N(), { left: t } = b.initOptions.apps;
      t + this.width === e ? this.autoScreen() : this.fullScreen();
    },
    initResize() {
      let e = 0, t = 0;
      const { style: s } = this.$el, a = new le(this.$refs.resize, { angle: 20 });
      Q === !1 && a.on("start", () => re.display = ""), a.on("lock", () => {
        a.dir === "X" && (clearTimeout(this.clearTimeouId), e = this.$el.clientWidth, s.transition = "unset", this.originlLeft = this.left, this.displays = !0);
      }), a.on("level", () => {
        const { move: i } = a;
        e -= i;
        const n = this.originlLeft - this.left;
        if (e > L) {
          if (n === 0)
            for (const c in v) {
              const l = v[c];
              l.left > this.left && (l.left += i);
              const { style: d } = l.$el;
              d.transition = "unset";
            }
          else {
            const c = this.left + this.width, l = a.current - c;
            e = a.current - this.originlLeft;
            for (const d in v) {
              const r = v[d];
              r.left > this.left ? r.left += l : r.left += n;
              const { style: u } = r.$el;
              u.transition = "unset";
            }
          }
          if (s.width = `${e}px`, this.level = H(e), this.width = e, this.single === !1) {
            const { children: c } = this.$refs.mount;
            for (const l of c) {
              const d = String(H(l.clientWidth));
              d !== l.getAttribute("level") && l.setAttribute("level", d);
            }
          }
        } else {
          const c = Math.ceil(Math.abs((e - L) / 15)) || 1;
          if (this.width === L)
            b.swiper.move(i / c);
          else {
            this.level = 100;
            const l = L - this.width, r = (i - l) / c, u = r + l;
            e = L, s.width = `${L}px`, this.width = L;
            for (const w in v) {
              const x = v[w];
              x.left > this.originlLeft ? x.left += u : x.left += r;
              const { style: O } = x.$el;
              O.transition = "unset";
            }
          }
        }
      }), a.on("vertical", (i) => {
        const { current: n, start: c, clientX: l } = a, d = l - t;
        b.swiper.move(d * 3), t = l;
      }), a.on("end", () => {
        if (a.dir === "X") {
          const i = this.originlLeft - this.left;
          i && b.swiper.scroll(i), this.timeouCloseResize();
        }
      });
      let o = 0;
      a.on("click", (i) => {
        this.displays = !0, this.controlbar = !1, this.timeouCloseResize(), i.timeStamp - o < 300 && this.autoAlign(), o = i.timeStamp;
      });
    },
    async onreload() {
      this.reload = !1, this.loading = !0, await B(), this.reload = !0, await B(), this.createApp && this.createApp();
    },
    onIFrameLoad(e) {
      this.loading = !1, e(this);
    }
  },
  async mounted() {
    await B(), this.initResize();
    let e = z[this.level];
    const t = N(), { options: s, app: a } = this;
    if (a.flex === !0) {
      const i = z[400], n = t - this.left;
      n < i ? e = n : e = i;
    }
    this.width = e;
    const { style: o } = this.$el;
    o.opacity = 0, o.width = `${e}px`, o.transition = "unset", requestAnimationFrame(() => {
      o.opacity = 1, o.transition = "";
    });
    for (const i in v) {
      const n = v[i];
      n.left >= this.left && (n.left += e, Object.assign(n.$el.style, {
        transition: "",
        transform: `translate3d(${n.left}px, 0, 0)`
      }));
    }
    if (v[s.url] = this, a.src) {
      const i = await ee(a.src);
      if (i.app) {
        Object.assign(a, i.app);
        const { name: d, color: r, icon: u } = i.app;
        d && (s.name = d), r && (s.color = r), u && (s.icon = u);
      }
      this.init = !0;
      const { level: n } = this;
      let c;
      const l = { instance: this, level: n };
      if (i.install === void 0) {
        const { pages: d } = i, { style: r } = a;
        if (d) {
          let { paths: u } = s;
          u ? u.shift() : u = [], c = { entry: i, pages: d, paths: u, style: r }, this.single = !1;
          let w = !1;
          for (const x in d) {
            const { __asyncLoader: O, inline: de } = d[x];
            O ? O().then((pe) => {
              w === !1 && pe.inline === void 0 && (w = !0, this.split = !0, this.splitSwitch = !0);
            }) : de === void 0 && (w = !0);
          }
          w && (this.split = !0, this.splitSwitch = !0), Object.assign(l, Qe);
        } else
          this.split = !1, Object.assign(l, i), r && Object.assign(this.style, r);
        await B(), this.createApp = () => {
          this.loading = !1;
          const u = he(l, c);
          u.use(Ee);
          const w = this.$refs.mount, x = new Be({
            app: u,
            options: s,
            el: w,
            container: this
          });
          this.router = x, u.provide("container", this), u.provide("router", x), this.pages = u.mount(w);
        };
      } else
        await B(), this.createApp = () => {
          this.loading = !1;
          const d = this.$refs.mount;
          i.install(d, { app: this });
        };
      this.createApp();
    }
    Ce(s), b.initComponentPromise && (await b.initComponentPromise, b.initComponentPromise = void 0), ze.emit("opened", s);
  }
}), Je = `app[data-v-dc2eab83]{position:absolute;top:0;bottom:0;right:58px;display:flex;white-space:initial;transition:all .4s;transform:translateZ(0)}app view[data-v-dc2eab83]{flex:1;overflow:hidden;transition:all .25s;transform:translate(0);background:#ffffff;border-radius:12px 0 0 12px;box-shadow:0 0 6px #ccc}app view.loading[data-v-dc2eab83]{background:#d1d1d14d}@keyframes loading-dc2eab83{0%{transform:translate3d(-100%,0,0)}to{transform:translate3d(100%,0,0)}}app view.loading[data-v-dc2eab83]:before{content:"";position:fixed;left:0;right:0;top:0;bottom:0;pointer-events:none;background:linear-gradient(98deg,#00000000,#00000000,#ffffff47,#00000000,#00000000);animation:loading-dc2eab83 1.2s infinite}app view .close[data-v-dc2eab83]{position:fixed;top:10px;left:10px;z-index:1000;width:32px;height:32px;flex:1;display:flex;justify-content:center;align-items:center;cursor:pointer;border-radius:20px;background:#ffffff;box-shadow:inset 0 0 3px #c9c9c9;transition:all .25s;transform:translate3d(0,-140%,0)}app view .close i[data-v-dc2eab83]{font-size:14px;color:#000}app view .mount[data-v-dc2eab83]{display:block;background:inherit;height:100%}app view .mount.flat[data-v-dc2eab83]{display:flex;justify-content:flex-end}app view .mount.fixed[data-v-dc2eab83]{width:100%}app view .mount.fixed[data-v-dc2eab83]>container{position:absolute;left:0;right:0;width:100%;border-left:unset}app view .view-display[data-v-dc2eab83]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:10;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .3s;opacity:0;pointer-events:none}app view .view-display .view-levels[data-v-dc2eab83],app view .view-display .view-resize[data-v-dc2eab83],app view .view-display .view-mode[data-v-dc2eab83]{display:flex;width:300px;height:120px;margin-bottom:10px;overflow:hidden;border-radius:10px;box-shadow:0 0 8px #bbb;background-color:#464646}app view .view-display .view-levels div[data-v-dc2eab83]{flex:1;display:flex;justify-content:center;align-items:center;color:#fff;font-size:12px;cursor:pointer;border-left:1px solid #555;transition:all .3s}app view .view-display .view-levels div.active[data-v-dc2eab83]{color:#444;background-color:#fff;border-left:1px solid #ddd}app view .view-display .view-levels div[data-v-dc2eab83]:first-child{border-left:none}app view .view-display .view-resize[data-v-dc2eab83]{justify-content:space-between;font-size:12px;padding:6px}app view .view-display .view-resize .auto-resize[data-v-dc2eab83],app view .view-display .view-resize .full-screen[data-v-dc2eab83]{display:flex;flex-direction:column;justify-content:center;align-items:center;cursor:pointer;border-radius:6px}app view .view-display .view-resize .auto-resize i[data-v-dc2eab83],app view .view-display .view-resize .full-screen i[data-v-dc2eab83]{font-size:20px;padding:9px}app view .view-display .view-resize .auto-resize[data-v-dc2eab83]{flex:none;width:110px;color:#555;background-color:#fff}app view .view-display .view-resize .full-screen[data-v-dc2eab83]{flex:1;margin-left:6px;color:#fff;transition:background-color .2s}app view .view-display .view-resize .full-screen[data-v-dc2eab83]:hover{color:#555;background-color:#fff}app view .view-display .view-mode[data-v-dc2eab83]{justify-content:space-between;font-size:12px;padding:6px}app view .view-display .view-mode .single-mode[data-v-dc2eab83],app view .view-display .view-mode .split-mode[data-v-dc2eab83]{cursor:pointer;transition:background-color .2s;border-radius:6px}app view .view-display .view-mode .single-mode i[data-v-dc2eab83],app view .view-display .view-mode .split-mode i[data-v-dc2eab83]{font-size:20px;padding:9px}app view .view-display .view-mode .single-mode[data-v-dc2eab83]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:110px;color:#555;background-color:#fff}app view .view-display .view-mode .split-mode[data-v-dc2eab83]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;margin-left:6px;overflow:hidden;color:#fff}app view .view-display .view-mode.split .single-mode[data-v-dc2eab83]{color:#fff;background-color:unset}app view .view-display .view-mode.split .split-mode[data-v-dc2eab83]{color:#555;background-color:#fff}app view .view-mask[data-v-dc2eab83]{position:fixed;left:0;right:0;top:0;bottom:0;z-index:100;background:linear-gradient(100deg,rgba(255,255,255,.1),rgba(159,159,159,.3));transition:opacity .3s;opacity:0;pointer-events:none}app view .view-drawer[data-v-dc2eab83]{position:fixed;left:0;right:0;bottom:0;z-index:1000;display:flex;flex-direction:column;justify-content:space-between;height:310px;background-color:#fcfcfc;border-radius:12px 12px 0 0;transition:all .2s;transform:translate3d(0,110%,0);box-shadow:0 0 8px #d5d5d5}app view .view-drawer .header[data-v-dc2eab83]{display:flex;justify-content:space-between;height:65px;cursor:pointer}app view .view-drawer .header .title[data-v-dc2eab83]{flex:1;padding:20px 15px 0;font-size:14px;font-weight:700;color:#555;white-space:nowrap;text-overflow:ellipsis}app view .view-drawer .header .title i[data-v-dc2eab83]{margin-right:8px;font-size:20px;vertical-align:middle}app view .view-drawer .header .title span[data-v-dc2eab83]{font-size:15px;vertical-align:middle}app view .view-drawer .header .button[data-v-dc2eab83]{flex:none;margin-left:4px;padding:20px 9px 0;width:40px;cursor:pointer}app view .view-drawer .header .button i[data-v-dc2eab83]{font-size:16px;color:#666}app view .view-drawer .buttons[data-v-dc2eab83]{flex:1;display:flex;flex-wrap:wrap;padding:0 6px;align-content:flex-start}app view .view-drawer .buttons .button[data-v-dc2eab83]{display:flex;flex-direction:column;width:75px;height:80px;color:#555;cursor:pointer;border-radius:10px;transition:background-color .2s}app view .view-drawer .buttons .button i[data-v-dc2eab83]{display:flex;justify-content:center;align-items:center;height:50px;font-size:20px}app view .view-drawer .buttons .button span[data-v-dc2eab83]{font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}app view .view-drawer .buttons .button[data-v-dc2eab83]:hover{background-color:#eee}app view .bottom-line[data-v-dc2eab83]{position:fixed;left:0;right:0;bottom:0;z-index:2000;height:26px;display:flex;justify-content:center;align-items:center;cursor:move;transition:transform .2s;transform:translate3d(0,100%,0)}app view .bottom-line[data-v-dc2eab83]:after{content:"";width:150px;height:3px;background-color:#666;border-radius:3px}app view .displays .view-display[data-v-dc2eab83]{opacity:1;pointer-events:all}app view .displays .close[data-v-dc2eab83]{transform:unset}app view .displays .view-drawer[data-v-dc2eab83]{transform:translate3d(0,76%,0)}app view .displays .bottom-line[data-v-dc2eab83]{transform:unset}app view .controlbar .view-mask[data-v-dc2eab83]{opacity:1;pointer-events:all;cursor:move}app view .controlbar .close[data-v-dc2eab83],app view .controlbar .view-drawer[data-v-dc2eab83],app view .controlbar .bottom-line[data-v-dc2eab83]{transform:unset}app view .controlbar .view-drawer .header[data-v-dc2eab83]{cursor:default}app resize[data-v-dc2eab83]{flex:none;width:16px;padding:4px 6px;cursor:move}app resize[data-v-dc2eab83]:before{display:block;content:"";height:100%;border-radius:50px;transition:background-color .25s;background-color:#ffffff50;box-shadow:inset 0 0 3px #ccc}app resize[data-v-dc2eab83]:hover:before,app resize[data-v-dc2eab83]:active:before{background-color:#00000085;box-shadow:0 0 2px #888}app.overview view .view-mask[data-v-dc2eab83]{pointer-events:all}@media screen and (max-width: 1025px){app[data-v-dc2eab83]{top:0px}}
`, A = (e) => (me("data-v-dc2eab83"), e = e(), be(), e), Ke = ["level"], et = { class: "view-resize" }, tt = /* @__PURE__ */ A(() => /* @__PURE__ */ f("i", { class: "ficon-auto" }, null, -1)), it = /* @__PURE__ */ A(() => /* @__PURE__ */ f("i", { class: "ficon-fullscreen" }, null, -1)), st = /* @__PURE__ */ A(() => /* @__PURE__ */ f("i", { class: "ficon-pages_outlined" }, null, -1)), at = /* @__PURE__ */ A(() => /* @__PURE__ */ f("i", { class: "ficon-fenping1" }, null, -1)), nt = /* @__PURE__ */ A(() => /* @__PURE__ */ f("div", {
  class: "view-mask",
  event: "mask"
}, null, -1)), ot = { class: "header item" }, lt = { class: "title" }, rt = ["title"], dt = /* @__PURE__ */ A(() => /* @__PURE__ */ f("i", { class: "ficon-xinchuangkou" }, null, -1)), pt = [
  dt
], ct = {
  key: 1,
  class: "button"
}, ft = /* @__PURE__ */ A(() => /* @__PURE__ */ f("i", { class: "ficon-up" }, null, -1)), ut = [
  ft
], vt = { class: "buttons" }, ht = ["onClick"], mt = ["title"], bt = /* @__PURE__ */ A(() => /* @__PURE__ */ f("i", { class: "ficon-cha" }, null, -1)), gt = [
  bt
];
function wt(e, t, s, a, o, i) {
  const n = y("resize"), c = y("container"), l = y("IFrame"), d = y("app");
  return p(), m(d, {
    class: $({ overview: e.overview })
  }, {
    default: C(() => [
      _(n, { ref: "resize" }, null, 512),
      f("view", {
        class: $({ loading: e.loading }),
        style: F(e.style)
      }, [
        e.reload ? (p(), m(j, {
          key: 0,
          name: "fade",
          appear: ""
        }, {
          default: C(() => [
            e.app.src ? (p(), h(P, { key: 0 }, [
              e.init ? (p(), h(P, { key: 0 }, [
                e.single ? (p(), m(c, {
                  key: 0,
                  class: "mount scroll-y",
                  level: e.level,
                  ref: "mount",
                  onBack: e.onclose
                }, null, 8, ["level", "onBack"])) : (p(), h("div", {
                  key: 1,
                  class: $(["mount", [e.split ? "flat" : "fixed"]]),
                  ref: "mount",
                  onBack: t[0] || (t[0] = (...r) => e.onclose && e.onclose(...r))
                }, null, 34))
              ], 64)) : g("", !0)
            ], 64)) : e.app.iframe ? (p(), m(l, {
              key: 1,
              src: e.app.iframe,
              gesture: e.app.gesture,
              onLoad: e.onIFrameLoad
            }, null, 8, ["src", "gesture", "onLoad"])) : g("", !0)
          ]),
          _: 1
        })) : g("", !0),
        _(j, {
          name: "fade",
          appear: ""
        }, {
          default: C(() => [
            e.maskComponent ? (p(), m(X(e.maskComponent), {
              key: 0,
              context: e.context
            }, null, 8, ["context"])) : g("", !0)
          ]),
          _: 1
        }),
        f("div", {
          class: $({ controlbar: e.controlbar, displays: e.displays }),
          onMouseenter: t[10] || (t[10] = (...r) => e.clearResizeTimeouID && e.clearResizeTimeouID(...r)),
          onMouseleave: t[11] || (t[11] = (...r) => e.timeouCloseResize && e.timeouCloseResize(...r))
        }, [
          f("div", {
            class: "view-display",
            onClick: t[6] || (t[6] = (...r) => e.closeResizeView && e.closeResizeView(...r))
          }, [
            f("div", {
              class: "view-levels",
              onClick: t[1] || (t[1] = (r) => e.setLevel(r.target.getAttribute("level")))
            }, [
              (p(!0), h(P, null, G(e.levels, (r, u) => (p(), h("div", {
                key: u,
                level: u,
                class: $({ active: u <= e.level })
              }, S(u) + "% ", 11, Ke))), 128))
            ]),
            f("div", et, [
              f("div", {
                class: "auto-resize",
                onClick: t[2] || (t[2] = (...r) => e.autoScreen && e.autoScreen(...r))
              }, [
                tt,
                W(" " + S(e.langs.autoScreen), 1)
              ]),
              f("div", {
                class: "full-screen",
                onClick: t[3] || (t[3] = (...r) => e.fullScreen && e.fullScreen(...r))
              }, [
                it,
                W(" " + S(e.langs.fullScreen), 1)
              ])
            ]),
            e.splitSwitch ? (p(), h("div", {
              key: 0,
              class: $(["view-mode", { split: e.split }])
            }, [
              f("div", {
                class: "single-mode",
                onClick: t[4] || (t[4] = (r) => e.onSplit(!1))
              }, [
                st,
                W(" " + S(e.langs.single), 1)
              ]),
              f("div", {
                class: "split-mode",
                onClick: t[5] || (t[5] = (r) => e.onSplit(!0))
              }, [
                at,
                W(" " + S(e.langs.split), 1)
              ])
            ], 2)) : g("", !0)
          ]),
          nt,
          f("div", {
            class: "view-drawer",
            onClick: t[8] || (t[8] = (...r) => e.drawer && e.drawer(...r))
          }, [
            f("div", ot, [
              f("div", lt, [
                e.app.icon ? (p(), h("i", {
                  key: 0,
                  class: $(e.app.icon),
                  style: F({ color: e.app.color })
                }, null, 6)) : g("", !0),
                f("span", null, S(e.app.name), 1)
              ]),
              e.controlbar ? (p(), h("div", {
                key: 0,
                class: "button",
                title: e.langs.newTab,
                onClick: t[7] || (t[7] = (r) => e.openBlank(e.options.url))
              }, pt, 8, rt)) : (p(), h("div", ct, ut))
            ]),
            f("div", vt, [
              (p(!0), h(P, null, G(e.buttons, ({ name: r, icon: u, action: w }) => (p(), h("div", {
                class: "button",
                onClick: w
              }, [
                f("i", {
                  class: $(u)
                }, null, 2),
                f("span", null, S(r), 1)
              ], 8, ht))), 256))
            ])
          ]),
          f("div", {
            class: "bottom-line",
            title: e.langs.drag
          }, null, 8, mt),
          f("div", {
            class: "close",
            onClick: t[9] || (t[9] = U((...r) => e.onclose && e.onclose(...r), ["stop"]))
          }, gt)
        ], 34)
      ], 6)
    ]),
    _: 1
  }, 8, ["class"]);
}
const yt = /* @__PURE__ */ D(Ze, [["render", wt], ["styles", [Je]], ["__scopeId", "data-v-dc2eab83"]]), kt = /* @__PURE__ */ R({
  __name: "index",
  setup(e) {
    const t = k(!1), { initOptions: s } = b, { apps: a } = s;
    s.app && I.push(s);
    const { urls: o, align: i = "left" } = a;
    if (o)
      for (const l of o) {
        const d = te(l);
        d && !I.includes(d) && (d.paths = l.split("/"), I.push(d));
      }
    if (a.left === void 0 && (a.left = 3), q && q.length)
      for (const l of q) {
        const d = te(l);
        d && !I.includes(d) && (d.paths = l.split("/"), I.push(d));
      }
    I.length === 0 && (ie.value = !1);
    const n = k();
    ge(() => {
      const l = n.value;
      b.$apps = l, Te(l), localStorage.guideState === void 0 && setTimeout(() => t.value = !0, 2e3);
    });
    function c(l) {
      "validity" in l.target || (l.preventDefault(), Le());
    }
    return (l, d) => {
      const r = y("Guide");
      return p(), h(P, null, [
        _(j, { name: "fade" }, {
          default: C(() => [
            we(f("section", {
              class: $(["apps split", { control: T(E), overview: T(V), [T(i)]: !0 }]),
              ref_key: "$apps",
              ref: n,
              onContextmenu: c
            }, [
              (p(!0), h(P, null, G(T(I), (u) => (p(), m(yt, {
                key: u.url,
                options: u
              }, null, 8, ["options"]))), 128))
            ], 34), [
              [ye, T(ie)]
            ])
          ]),
          _: 1
        }),
        _(j, {
          name: "fade",
          appear: ""
        }, {
          default: C(() => [
            t.value ? (p(), m(r, {
              key: 0,
              onClose: d[0] || (d[0] = (u) => t.value = !1)
            })) : g("", !0)
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), xt = `.apps[data-v-07fbcb4d]{position:fixed;z-index:20000;top:env(titlebar-area-height,0px);bottom:0;right:0;user-select:none;transition:all .25s}.apps.control[data-v-07fbcb4d]{right:0}.apps.overview[data-v-07fbcb4d]{transform:scale3d(.85,.85,1)}
`, Mt = /* @__PURE__ */ D(kt, [["styles", [xt]], ["__scopeId", "data-v-07fbcb4d"]]);
export {
  Mt as default
};
