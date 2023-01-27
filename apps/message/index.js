import { resolveComponent as g, openBlock as d, createElementBlock as r, Fragment as h, createVNode as m, createStaticVNode as T, createElementVNode as t, toDisplayString as o, pushScopeId as w, popScopeId as C, defineComponent as A, ref as E, reactive as z, watch as F, withCtx as b, TransitionGroup as B, renderList as I, withDirectives as L, withKeys as V, vModelText as K } from "/view-ui/libs/vue.js";
import { Lang as G, Langs as O } from "/view-ui/libs/view.js";
import k from "/view-ui/libs/network.js";
import { notification as U } from "/view-ui/libs/viewui.js";
import { back as S } from "/view-ui/libs/router.js";
const q = "", x = (e, i) => {
  const a = e.__vccOpts || e;
  for (const [s, f] of i)
    a[s] = f;
  return a;
}, H = {
  props: ["user"]
}, J = /* @__PURE__ */ T('<div class="system"><div class="items"><div class="item"> A: 1 </div><div class="item"> B: 2 </div><div class="item"> C: 3 </div></div></div>', 1);
function P(e, i, a, s, f, u) {
  const l = g("Navbar");
  return d(), r(h, null, [
    m(l, {
      title: a.user.name
    }, null, 8, ["title"]),
    J
  ], 64);
}
const Q = /* @__PURE__ */ x(H, [["render", P], ["styles", [q]]]), R = `.userinfo .header[data-v-691d64a3]{display:flex;justify-content:space-between;align-items:center;padding:5px 14px 10px}.userinfo .header .avatar[data-v-691d64a3]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:50px;font-size:30px;background:#fff}
`, W = {
  props: ["user"],
  app: {
    style: {
      flex: "none"
    }
  },
  methods: {
    onclick(e) {
      S(e.currentTarget);
    }
  }
}, X = (e) => (w("data-v-691d64a3"), e = e(), C(), e), Y = { class: "userinfo" }, Z = { class: "header" }, tt = { class: "avatar" }, et = /* @__PURE__ */ X(() => /* @__PURE__ */ t("i", { class: "ficon-cha" }, null, -1)), st = [
  et
];
function at(e, i, a, s, f, u) {
  return d(), r("div", Y, [
    t("div", Z, [
      t("div", tt, o(a.user.avatar), 1),
      t("div", null, o(a.user.name), 1),
      t("div", {
        class: "close",
        onClick: i[0] || (i[0] = (...l) => u.onclick && u.onclick(...l))
      }, st)
    ])
  ]);
}
const nt = /* @__PURE__ */ x(W, [["render", at], ["styles", [R]], ["__scopeId", "data-v-691d64a3"]]), it = `.setting .header[data-v-40c58d46]{display:flex;justify-content:space-between;align-items:center;padding:5px 14px 10px}.setting .header .title[data-v-40c58d46]{width:50px;height:50px}
`, j = G({
  en: "Monkey",
  zh: "Monkey"
}), ot = {
  app: {
    name: j,
    style: {
      flex: "none"
    }
  },
  setup() {
    return { name: j };
  },
  methods: {
    onclick(e) {
      S(e.currentTarget);
    }
  }
}, ct = { class: "setting" };
function dt(e, i, a, s, f, u) {
  const l = g("Navbar");
  return d(), r("div", ct, [
    m(l, { title: "Setting" })
  ]);
}
const rt = /* @__PURE__ */ x(ot, [["render", dt], ["styles", [it]], ["__scopeId", "data-v-40c58d46"]]), N = (e) => (w("data-v-16204693"), e = e(), C(), e), lt = { class: "navbar-center" }, pt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("i", { class: "ficon-gengduo" }, null, -1)), ft = { class: "list" }, ut = {
  key: 0,
  class: "me"
}, _t = ["onClick"], vt = { class: "message" }, mt = { class: "content" }, ht = {
  key: 1,
  class: "he"
}, gt = ["onClick"], xt = { class: "message" }, bt = { class: "content" }, $t = { class: "inputbox safe-bottom" }, yt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("button", null, [
  /* @__PURE__ */ t("i", { class: "ficon-yuyin" })
], -1)), kt = ["onKeyup"], wt = /* @__PURE__ */ N(() => /* @__PURE__ */ t("button", null, [
  /* @__PURE__ */ t("i", { class: "ficon-jia" })
], -1)), Ct = {
  app: {
    level: 200,
    style: {
      background: "#f7f7f7",
      flex: 1
    }
  },
  pages: { userinfo: nt, setting: rt }
}, Nt = /* @__PURE__ */ A({
  ...Ct,
  __name: "index",
  props: ["id", "user"],
  setup(e) {
    const i = e, a = E(""), s = z([]);
    let f;
    function u(p) {
      if (p.length) {
        const c = p.shift();
        c && (f = setTimeout(() => {
          s.push(c), u(p);
        }, 1500));
      }
    }
    function l(p) {
      k.get(`/view-ui/api/message/${p}.json`).then(({ users: c, list: _ }) => {
        const v = {};
        for (const n of c)
          v[n.id] = n;
        for (const n of _)
          n.user = v[n.uid];
        u(_);
      });
    }
    l(i.id), F(i, () => {
      s.splice(0), clearTimeout(f), l(i.id);
    });
    function $() {
      s.push({
        uid: 1,
        user: {
          id: 1,
          name: "Monkey",
          avatar: "\u{1F435}",
          me: !0
        },
        content: a.value
      }), a.value = "";
    }
    return (p, c) => {
      const _ = g("A"), v = g("Navbar");
      return d(), r(h, null, [
        m(v, null, {
          default: b(() => [
            t("div", lt, o(e.user.name), 1),
            m(_, {
              class: "navbar-right",
              href: "message/chat/setting"
            }, {
              default: b(() => [
                pt
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        t("div", ft, [
          m(B, { name: "fade-in" }, {
            default: b(() => [
              (d(!0), r(h, null, I(s, ({ user: n, content: y }) => (d(), r(h, null, [
                n.me ? (d(), r("div", ut, [
                  t("div", {
                    class: "avatar",
                    onClick: (M) => p.$router.open("message/chat/userinfo", { user: n })
                  }, o(n.avatar), 9, _t),
                  t("div", vt, [
                    t("div", mt, o(y), 1)
                  ])
                ])) : (d(), r("div", ht, [
                  t("div", {
                    class: "avatar",
                    onClick: (M) => p.$router.open("message/chat/userinfo", { user: n })
                  }, o(n.avatar), 9, gt),
                  t("div", xt, [
                    t("div", bt, o(y), 1)
                  ])
                ]))
              ], 64))), 256))
            ]),
            _: 1
          })
        ]),
        t("div", $t, [
          yt,
          L(t("input", {
            type: "text",
            "onUpdate:modelValue": c[0] || (c[0] = (n) => a.value = n),
            onKeyup: V($, ["enter"])
          }, null, 40, kt), [
            [K, a.value]
          ]),
          wt
        ])
      ], 64);
    };
  }
}), jt = `.list[data-v-16204693]{padding-bottom:50px}.list .me[data-v-16204693],.list .he[data-v-16204693]{padding:15px 10px}.list .me .avatar[data-v-16204693],.list .he .avatar[data-v-16204693]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:50px;font-size:30px;background:#fff;cursor:pointer}.list .me .message[data-v-16204693],.list .he .message[data-v-16204693]{flex:1;max-width:600px}.list .me .message .content[data-v-16204693],.list .he .message .content[data-v-16204693]{padding:16px;border-radius:10px}.list .me .message .content[data-v-16204693]:before,.list .he .message .content[data-v-16204693]:before{position:absolute;top:20px;content:"";width:10px;height:10px;transform:rotate(45deg)}.list .me[data-v-16204693]{display:flex;flex-direction:row-reverse}.list .me .message .content[data-v-16204693]{margin:0 12px 0 40px;background:#a8f7a7}.list .me .message .content[data-v-16204693]:before{right:-5px;background-color:#a8f7a7}.list .he[data-v-16204693]{display:flex}.list .he .message .content[data-v-16204693]{margin:0 40px 0 12px;background:#fff}.list .he .message .content[data-v-16204693]:before{left:-5px;background-color:#fff}.inputbox[data-v-16204693]{position:fixed;display:flex;width:100%;height:50px;padding:6px 0;background-color:#f7f7f7;border-top:1px solid #f1f1f1}.inputbox input[data-v-16204693]{flex:1;background-color:#fff;border-radius:10px;border:none}.inputbox button[data-v-16204693]{width:38px;height:38px;border-radius:50px;background:#fff;margin:0 10px;border:1px solid #efefef}.inputbox button i[data-v-16204693]{font-size:18px}.fade-in-enter-from[data-v-16204693]{opacity:0}.fade-in-enter-active[data-v-16204693]{transition:opacity .2s ease}
`, zt = /* @__PURE__ */ x(Nt, [["styles", [jt]], ["__scopeId", "data-v-16204693"]]), It = O({
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
}), D = z([]);
k.get("/view-ui/api/message/index.json").then((e) => {
  k.get("/view-ui/api/user.json").then((i) => {
    const a = {};
    for (const s of i)
      a[s.id] = s;
    for (const s of e)
      s.user = a[s.uid], D.push(s);
  });
});
const St = {
  pages: { chat: zt, system: Q },
  setup() {
    return { langs: It, list: D };
  },
  mounted() {
    U.add({ title: "Message", time: 3e3 });
  }
}, Dt = `.message .list .item[data-v-5f26c467]{display:flex;height:75px;cursor:pointer}.message .list .item .avatar[data-v-5f26c467]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;margin:10px 0 0 10px;background:#efefef;border-radius:50px;font-size:30px}.message .list .item .right[data-v-5f26c467]{flex:1;margin-left:10px;border-bottom:1px solid #f1f1f1;padding:0 5px}.message .list .item .right .title[data-v-5f26c467]{display:flex;justify-content:space-between;padding:12px 10px 0 0;height:30px}.message .list .item .right .title .name[data-v-5f26c467]{font-size:14px;font-weight:700}.message .list .item .right .title .time[data-v-5f26c467]{font-size:13px;color:#aaa}.message .list .item .right .content[data-v-5f26c467]{color:#888;padding:12px 12px 12px 0}
`, Mt = (e) => (w("data-v-5f26c467"), e = e(), C(), e), Tt = { class: "message" }, At = { class: "navbar-center" }, Et = /* @__PURE__ */ Mt(() => /* @__PURE__ */ t("div", { class: "navbar-right" }, [
  /* @__PURE__ */ t("i", { class: "ficon-gengduo" })
], -1)), Ft = { class: "list" }, Bt = ["onClick"], Lt = { class: "avatar" }, Vt = { class: "right" }, Kt = { class: "title" }, Gt = { class: "name" }, Ot = { class: "time" }, Ut = { class: "content" };
function qt(e, i, a, s, f, u) {
  const l = g("Navbar");
  return d(), r("div", Tt, [
    m(l, null, {
      default: b(() => [
        t("div", At, o(s.langs.message), 1),
        Et
      ]),
      _: 1
    }),
    t("div", Ft, [
      (d(!0), r(h, null, I(s.list, ({ id: $, type: p, user: c, time: _, content: v }, n) => (d(), r("div", {
        key: n,
        class: "item",
        onClick: (y) => e.$router.open(`message/${p}`, { id: $, user: c })
      }, [
        t("div", Lt, o(c.avatar), 1),
        t("div", Vt, [
          t("div", Kt, [
            t("div", Gt, o(c.name), 1),
            t("div", Ot, o(_), 1)
          ]),
          t("div", Ut, o(v), 1)
        ])
      ], 8, Bt))), 128))
    ])
  ]);
}
const Wt = /* @__PURE__ */ x(St, [["render", qt], ["styles", [Dt]], ["__scopeId", "data-v-5f26c467"]]);
export {
  Wt as default
};
