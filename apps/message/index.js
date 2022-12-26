import { Lang as b, Langs as $ } from "/view-ui/libs/view.js";
import { resolveComponent as l, openBlock as f, createElementBlock as m, Fragment as v, createVNode as e, createElementVNode as s, withCtx as a, createTextVNode as o, toDisplayString as y, pushScopeId as k, popScopeId as N } from "/view-ui/libs/vue.js";
const g = (i, r) => {
  const d = i.__vccOpts || i;
  for (const [_, n] of r)
    d[_] = n;
  return d;
}, u = b({
  en: "System Notification",
  zh: "\u7CFB\u7EDF\u901A\u77E5"
}), w = {
  name: u,
  data() {
    return { name: u };
  }
}, z = /* @__PURE__ */ s("div", { class: "list" }, null, -1);
function S(i, r, d, _, n, p) {
  const t = l("Navbar");
  return f(), m(v, null, [
    e(t, { title: n.name }, null, 8, ["title"]),
    z
  ], 64);
}
const j = /* @__PURE__ */ g(w, [["render", S]]), x = b({
  en: "Monkey",
  zh: "Monkey"
}), A = {
  name: x,
  style: {
    flex: "none"
  },
  data() {
    return { name: x };
  }
}, I = /* @__PURE__ */ s("div", { class: "list" }, "\u{1F435}\u{1F435}\u{1F435}\u{1F435}\u{1F435}", -1);
function L(i, r, d, _, n, p) {
  const t = l("Navbar");
  return f(), m(v, null, [
    e(t, { title: n.name }, null, 8, ["title"]),
    I
  ], 64);
}
const M = /* @__PURE__ */ g(A, [["render", L]]), U = `.list{padding-bottom:50px}.list .me,.list .he{padding:15px 10px}.list .me .avatar,.list .he .avatar{background:#fff;border-radius:50px;width:50px;height:50px;display:flex;justify-content:center;align-items:center}.list .me .message,.list .he .message{flex:1;max-width:500px}.list .me .message .content,.list .he .message .content{padding:18px;border-radius:22px}.list .me .message .content:before,.list .he .message .content:before{position:absolute;top:20px;content:"";width:10px;height:10px;transform:rotate(45deg)}.list .me{display:flex}.list .me .message .content{margin:0 40px 0 11px;background:#fff}.list .me .message .content:before{left:-5px;background-color:#fff}.list .he{display:flex;flex-direction:row-reverse}.list .he .message .content{margin:0 11px 0 40px;background:#a8f7a7}.list .he .message .content:before{right:-5px;background-color:#a8f7a7}.inputbox{position:fixed;display:flex;width:100%;height:50px;padding:6px 0;background-color:#f7f7f7;border-top:1px solid #f1f1f1}.inputbox input{flex:1;background-color:#fff;border-radius:10px;border:none}.inputbox button{width:38px;height:38px;border-radius:50px;background:#fff;margin:0 10px;border:1px solid #efefef}
`, V = {
  pages: { userinfo: M },
  level: 200,
  style: {
    background: "#f7f7f7",
    flex: 1
  },
  data() {
    return { name: "User 1" };
  }
}, B = /* @__PURE__ */ s("i", { class: "ficon-gengduo" }, null, -1), C = { class: "list" }, E = { class: "me" }, D = /* @__PURE__ */ o("\u{1F435}"), F = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F435}")
], -1), O = { class: "he" }, T = /* @__PURE__ */ o("\u{1F481}"), q = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), G = { class: "me" }, H = /* @__PURE__ */ o("\u{1F435}"), J = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, " \u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366} ")
], -1), K = { class: "he" }, P = /* @__PURE__ */ o("\u{1F481}"), Q = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, " \u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366}\u{1F4DA}\u{1F379}\u{1F43C}\u{1F491}\u{1F371}\u{1F49D}\u26F9\uFE0F\u{1F483}\u{1F35F}\u{1F366} ")
], -1), R = { class: "he" }, W = /* @__PURE__ */ o("\u{1F481}"), X = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), Y = { class: "he" }, Z = /* @__PURE__ */ o("\u{1F481}"), ss = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), es = { class: "he" }, ts = /* @__PURE__ */ o("\u{1F481}"), as = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), os = { class: "he" }, is = /* @__PURE__ */ o("\u{1F481}"), ns = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), cs = { class: "he" }, ds = /* @__PURE__ */ o("\u{1F481}"), ls = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), rs = { class: "he" }, _s = /* @__PURE__ */ o("\u{1F481}"), hs = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), fs = { class: "he" }, ms = /* @__PURE__ */ o("\u{1F481}"), gs = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), ps = { class: "he" }, vs = /* @__PURE__ */ o("\u{1F481}"), us = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), xs = { class: "he" }, bs = /* @__PURE__ */ o("\u{1F481}"), $s = /* @__PURE__ */ s("div", { class: "message" }, [
  /* @__PURE__ */ s("div", { class: "content" }, "\u{1F44C}\u{1F38D}\u{1F60D}")
], -1), ys = /* @__PURE__ */ s("div", { class: "inputbox safe-bottom" }, [
  /* @__PURE__ */ s("button", null, [
    /* @__PURE__ */ s("i", { class: "ficon-yuyin" })
  ]),
  /* @__PURE__ */ s("input", {
    type: "text",
    p: ""
  }),
  /* @__PURE__ */ s("button", null, [
    /* @__PURE__ */ s("i", { class: "ficon-jia" })
  ])
], -1);
function ks(i, r, d, _, n, p) {
  const t = l("A"), h = l("Navbar");
  return f(), m(v, null, [
    e(h, { title: n.name }, {
      default: a(() => [
        e(t, {
          class: "center",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            B
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]),
    s("div", C, [
      s("div", E, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            D
          ]),
          _: 1
        }),
        F
      ]),
      s("div", O, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            T
          ]),
          _: 1
        }),
        q
      ]),
      s("div", G, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            H
          ]),
          _: 1
        }),
        J
      ]),
      s("div", K, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            P
          ]),
          _: 1
        }),
        Q
      ]),
      s("div", R, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            W
          ]),
          _: 1
        }),
        X
      ]),
      s("div", Y, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            Z
          ]),
          _: 1
        }),
        ss
      ]),
      s("div", es, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            ts
          ]),
          _: 1
        }),
        as
      ]),
      s("div", os, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            is
          ]),
          _: 1
        }),
        ns
      ]),
      s("div", cs, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            ds
          ]),
          _: 1
        }),
        ls
      ]),
      s("div", rs, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            _s
          ]),
          _: 1
        }),
        hs
      ]),
      s("div", fs, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            ms
          ]),
          _: 1
        }),
        gs
      ]),
      s("div", ps, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            vs
          ]),
          _: 1
        }),
        us
      ]),
      s("div", xs, [
        e(t, {
          class: "avatar",
          href: "message/chat/userinfo"
        }, {
          default: a(() => [
            bs
          ]),
          _: 1
        }),
        $s
      ])
    ]),
    ys
  ], 64);
}
const Ns = /* @__PURE__ */ g(V, [["render", ks], ["styles", [U]]]), ws = `.message .list .item[data-v-e5416df6]{display:flex;height:75px}.message .list .item .avatar[data-v-e5416df6]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;margin:10px 0 0 10px;background:#fff;border-radius:50px}.message .list .item .right[data-v-e5416df6]{flex:1;margin-left:10px;border-bottom:1px solid #f1f1f1;padding:0 5px}.message .list .item .right .title[data-v-e5416df6]{display:flex;justify-content:space-between;padding:12px 10px 0 0;height:30px}.message .list .item .right .title .name[data-v-e5416df6]{font-size:14px;font-weight:700}.message .list .item .right .title .time[data-v-e5416df6]{font-size:13px;color:#888}.message .list .item .right .absrtact[data-v-e5416df6]{color:#888;padding:12px 12px 12px 0}
`, zs = $({
  message: {
    en: "Message",
    zh: "\u6D88\u606F"
  },
  system: {
    en: "System Notification",
    zh: "\u7CFB\u7EDF\u901A\u77E5"
  },
  logistics: {
    en: "Logistics",
    zh: "\u4EA4\u6613\u7269\u6D41"
  }
}), Ss = {
  pages: { chat: Ns, system: j },
  data() {
    return { langs: zs };
  }
}, c = (i) => (k("data-v-e5416df6"), i = i(), N(), i), js = { class: "message" }, As = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "center" }, [
  /* @__PURE__ */ s("i", { class: "ficon-gengduo" })
], -1)), Is = { class: "list" }, Ls = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", {
  class: "avatar",
  style: { background: "#a0ffd0" }
}, "\u{1F43C}", -1)), Ms = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "right" }, [
  /* @__PURE__ */ s("div", { class: "title" }, [
    /* @__PURE__ */ s("div", { class: "name" }, "User 1"),
    /* @__PURE__ */ s("div", { class: "time" }, "22/10/24")
  ]),
  /* @__PURE__ */ s("div", { class: "absrtact" }, "\u{1F379}\u{1F43C}")
], -1)), Us = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", {
  class: "avatar",
  style: { background: "rgb(163 190 233)" }
}, "\u{1F481}", -1)), Vs = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "right" }, [
  /* @__PURE__ */ s("div", { class: "title" }, [
    /* @__PURE__ */ s("div", { class: "name" }, "User 2"),
    /* @__PURE__ */ s("div", { class: "time" }, "22/10/24")
  ]),
  /* @__PURE__ */ s("div", { class: "absrtact" }, "\u{1F379}\u{1F379}\u{1F379}")
], -1)), Bs = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", {
  class: "avatar",
  style: { background: "#a0ffd0" }
}, "\u{1F43C}", -1)), Cs = { class: "right" }, Es = { class: "title" }, Ds = { class: "name" }, Fs = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "time" }, "10:20", -1)), Os = /* @__PURE__ */ c(() => /* @__PURE__ */ s("div", { class: "absrtact" }, "...", -1));
function Ts(i, r, d, _, n, p) {
  const t = l("Navbar"), h = l("A");
  return f(), m("div", js, [
    e(t, {
      title: n.langs.message
    }, {
      default: a(() => [
        As
      ]),
      _: 1
    }, 8, ["title"]),
    s("div", Is, [
      e(h, {
        class: "item",
        href: "message/chat"
      }, {
        default: a(() => [
          Ls,
          Ms
        ]),
        _: 1
      }),
      e(h, {
        class: "item",
        href: "message/chat"
      }, {
        default: a(() => [
          Us,
          Vs
        ]),
        _: 1
      }),
      e(h, {
        class: "item",
        href: "message/system"
      }, {
        default: a(() => [
          Bs,
          s("div", Cs, [
            s("div", Es, [
              s("div", Ds, y(n.langs.system), 1),
              Fs
            ]),
            Os
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
const Hs = /* @__PURE__ */ g(Ss, [["render", Ts], ["styles", [ws]], ["__scopeId", "data-v-e5416df6"]]);
export {
  Hs as default
};
