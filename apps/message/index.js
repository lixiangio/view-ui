import { resolveComponent as b, openBlock as r, createElementBlock as l, Fragment as x, createVNode as v, createStaticVNode as L, createElementVNode as e, toDisplayString as c, pushScopeId as z, popScopeId as C, unref as y, defineComponent as E, inject as D, reactive as A, ref as S, watch as V, withCtx as w, TransitionGroup as K, renderList as F, withDirectives as H, withKeys as O, vModelText as G, nextTick as T, onMounted as U } from "/libs/vue.js";
import { Lang as q, Langs as J } from "/libs/view.js";
import j from "/libs/network.js";
import { notification as P } from "/libs/viewui.js";
import { back as Q } from "/libs/router.js";
const R = "", $ = (t, i) => {
  const s = t.__vccOpts || t;
  for (const [o, _] of i)
    s[o] = _;
  return s;
}, W = {
  props: ["user"]
}, X = /* @__PURE__ */ L('<div class="system"><div class="items"><div class="item"> A: 1 </div><div class="item"> B: 2 </div><div class="item"> C: 3 </div></div></div>', 1);
function Y(t, i, s, o, _, p) {
  const a = b("Navbar");
  return r(), l(x, null, [
    v(a, {
      title: s.user.name
    }, null, 8, ["title"]),
    X
  ], 64);
}
const Z = /* @__PURE__ */ $(W, [["render", Y], ["styles", [R]]]), ee = `.userinfo .header[data-v-dc46cc65]{display:flex;justify-content:space-between;padding:10px}.userinfo .header .header-left[data-v-dc46cc65]{display:flex;align-items:center}.userinfo .header .header-left .avatar[data-v-dc46cc65]{display:flex;justify-content:center;align-items:center;width:56px;height:56px;font-size:34px;background:#efefef;border-radius:50px;flex:none}.userinfo .header .header-left .user-name[data-v-dc46cc65]{margin-left:12px;font-size:14px}.userinfo .close[data-v-dc46cc65]{position:absolute;right:6px;top:6px;z-index:1;display:flex;justify-content:center;align-items:center;width:50px;height:50px;flex:none;cursor:pointer}
`, te = {
  app: {
    style: { flex: "none" }
  },
  props: ["user"],
  methods: {
    onclick(t) {
      Q(t.currentTarget);
    }
  }
}, se = (t) => (z("data-v-dc46cc65"), t = t(), C(), t), ae = { class: "userinfo" }, ne = { class: "header" }, ie = { class: "header-left" }, oe = { class: "avatar" }, ce = { class: "user-name" }, de = /* @__PURE__ */ se(() => /* @__PURE__ */ e("i", { class: "ficon-cha" }, null, -1)), re = [
  de
];
function le(t, i, s, o, _, p) {
  return r(), l("div", ae, [
    e("div", ne, [
      e("div", ie, [
        e("div", oe, c(s.user.avatar), 1),
        e("div", ce, c(s.user.name), 1)
      ])
    ]),
    e("div", {
      class: "close",
      onClick: i[0] || (i[0] = (...a) => p.onclick && p.onclick(...a))
    }, re)
  ]);
}
const pe = /* @__PURE__ */ $(te, [["render", le], ["styles", [ee]], ["__scopeId", "data-v-dc46cc65"]]), fe = `.setting .header[data-v-4c0d827f]{display:flex;justify-content:space-between;align-items:center;padding:5px 14px 10px}.setting .header .title[data-v-4c0d827f]{width:50px;height:50px}
`, _e = { class: "setting" }, M = q({
  en: "Setting",
  zh: "\u8BBE\u7F6E"
}), ue = {
  app: {
    name: M,
    style: { flex: "none" }
  }
}, he = /* @__PURE__ */ Object.assign(ue, {
  __name: "setting",
  setup(t) {
    return (i, s) => {
      const o = b("Navbar");
      return r(), l("div", _e, [
        v(o, { title: y(M) }, null, 8, ["title"])
      ]);
    };
  }
}), me = /* @__PURE__ */ $(he, [["styles", [fe]], ["__scopeId", "data-v-4c0d827f"]]), N = (t) => (z("data-v-cc8b288d"), t = t(), C(), t), ve = { class: "navbar-center" }, ge = /* @__PURE__ */ N(() => /* @__PURE__ */ e("i", { class: "ficon-gengduo" }, null, -1)), xe = {
  key: 0,
  class: "me"
}, be = ["onClick"], ye = { class: "message" }, $e = { class: "content" }, ke = {
  key: 1,
  class: "he"
}, we = ["onClick"], je = { class: "message" }, ze = { class: "content" }, Ce = { class: "inputbox safe-bottom" }, Ne = /* @__PURE__ */ N(() => /* @__PURE__ */ e("button", null, [
  /* @__PURE__ */ e("i", { class: "ficon-yuyin" })
], -1)), Ie = ["onKeyup"], Se = /* @__PURE__ */ N(() => /* @__PURE__ */ e("button", null, [
  /* @__PURE__ */ e("i", { class: "ficon-jia" })
], -1)), Te = {
  app: {
    level: 200,
    style: {
      background: "#f7f7f7",
      flex: 1
    }
  },
  pages: { userinfo: pe, setting: me }
}, Ee = /* @__PURE__ */ E({
  ...Te,
  __name: "index",
  props: ["id", "user"],
  setup(t) {
    const i = t, s = D("router"), o = A([]);
    let _;
    const p = S(), a = S("");
    function f() {
      a.value !== "" && (o.push({
        uid: 1,
        user: {
          id: 1,
          name: "Monkey",
          avatar: "\u{1F435}",
          me: !0
        },
        content: a.value
      }), a.value = "", T(() => {
        const { parentElement: d } = p.value;
        d.scrollTo(0, d.scrollHeight);
      }));
    }
    function k(d) {
      if (d.length) {
        const u = d.shift();
        u && (o.push(u), T(() => {
          const { parentElement: h } = p.value;
          h.scrollTo(0, h.scrollHeight), _ = setTimeout(() => k(d), 1500);
        }));
      }
    }
    function m(d) {
      j.get(`/api/message/${d}.json`).then(({ users: u, list: h }) => {
        const g = {};
        for (const n of u)
          g[n.id] = n;
        for (const n of h)
          n.user = g[n.uid];
        k(h);
      });
    }
    return m(i.id), V(i, () => {
      o.splice(0), clearTimeout(_), m(i.id);
    }), (d, u) => {
      const h = b("A"), g = b("Navbar");
      return r(), l(x, null, [
        v(g, null, {
          default: w(() => [
            e("div", ve, c(t.user.name), 1),
            v(h, {
              class: "navbar-right",
              href: "message/chat/setting"
            }, {
              default: w(() => [
                ge
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e("div", {
          class: "list",
          ref_key: "$list",
          ref: p
        }, [
          v(K, { name: "fade-in" }, {
            default: w(() => [
              (r(!0), l(x, null, F(o, ({ user: n, content: I }) => (r(), l(x, null, [
                n.me ? (r(), l("div", xe, [
                  e("div", {
                    class: "avatar",
                    onClick: (B) => y(s).open("message/chat/userinfo", { user: n })
                  }, c(n.avatar), 9, be),
                  e("div", ye, [
                    e("div", $e, c(I), 1)
                  ])
                ])) : (r(), l("div", ke, [
                  e("div", {
                    class: "avatar",
                    onClick: (B) => y(s).open("message/chat/userinfo", { user: n })
                  }, c(n.avatar), 9, we),
                  e("div", je, [
                    e("div", ze, c(I), 1)
                  ])
                ]))
              ], 64))), 256))
            ]),
            _: 1
          })
        ], 512),
        e("div", Ce, [
          Ne,
          H(e("input", {
            type: "text",
            "onUpdate:modelValue": u[0] || (u[0] = (n) => a.value = n),
            onKeyup: O(f, ["enter"])
          }, null, 40, Ie), [
            [G, a.value]
          ]),
          Se
        ])
      ], 64);
    };
  }
}), De = `.list[data-v-cc8b288d]{padding-bottom:50px}.list .me[data-v-cc8b288d],.list .he[data-v-cc8b288d]{padding:15px 10px}.list .me .avatar[data-v-cc8b288d],.list .he .avatar[data-v-cc8b288d]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:50px;font-size:30px;background:#fff;cursor:pointer}.list .me .message[data-v-cc8b288d],.list .he .message[data-v-cc8b288d]{flex:1;max-width:600px}.list .me .message .content[data-v-cc8b288d],.list .he .message .content[data-v-cc8b288d]{min-height:45px;line-height:23px;padding:12px 15px;border-radius:10px;color:#333}.list .me .message .content[data-v-cc8b288d]:before,.list .he .message .content[data-v-cc8b288d]:before{position:absolute;top:20px;content:"";width:10px;height:10px;transform:rotate(45deg)}.list .me[data-v-cc8b288d]{display:flex;flex-direction:row-reverse}.list .me .message .content[data-v-cc8b288d]{margin:0 12px 0 40px;background:#a8f7a7}.list .me .message .content[data-v-cc8b288d]:before{right:-5px;background-color:#a8f7a7}.list .he[data-v-cc8b288d]{display:flex}.list .he .message .content[data-v-cc8b288d]{margin:0 40px 0 12px;background:#fff}.list .he .message .content[data-v-cc8b288d]:before{left:-5px;background-color:#fff}.inputbox[data-v-cc8b288d]{position:fixed;display:flex;width:100%;height:50px;padding:6px 0;background-color:#f7f7f7;border-top:1px solid #f1f1f1}.inputbox input[data-v-cc8b288d]{flex:1;background-color:#fff;border-radius:10px;border:none}.inputbox button[data-v-cc8b288d]{width:38px;height:38px;border-radius:50px;background:#fff;margin:0 10px;border:1px solid #efefef}.inputbox button i[data-v-cc8b288d]{font-size:18px}.fade-in-enter-from[data-v-cc8b288d]{opacity:0}.fade-in-enter-active[data-v-cc8b288d]{transition:opacity .2s ease}
`, Ae = /* @__PURE__ */ $(Ee, [["styles", [De]], ["__scopeId", "data-v-cc8b288d"]]), Fe = (t) => (z("data-v-321060c2"), t = t(), C(), t), Me = { class: "message" }, Be = { class: "navbar-center" }, Le = /* @__PURE__ */ Fe(() => /* @__PURE__ */ e("div", { class: "navbar-right" }, [
  /* @__PURE__ */ e("i", { class: "ficon-gengduo" })
], -1)), Ve = { class: "list" }, Ke = ["onClick"], He = { class: "avatar" }, Oe = { class: "right" }, Ge = { class: "title" }, Ue = { class: "name" }, qe = { class: "time" }, Je = { class: "content" }, Pe = {
  pages: { chat: Ae, system: Z }
}, Qe = /* @__PURE__ */ E({
  ...Pe,
  __name: "index",
  setup(t) {
    const i = J({
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
    }), s = A([]), o = D("router");
    return j.get("/api/message/index.json").then((_) => {
      j.get("/api/user.json").then((p) => {
        const a = {};
        for (const f of p)
          a[f.id] = f;
        for (const f of _)
          f.user = a[f.uid], s.push(f);
      });
    }), U(() => {
      P.add({ title: "Message", time: 3e3 });
    }), (_, p) => {
      const a = b("Navbar");
      return r(), l("div", Me, [
        v(a, null, {
          default: w(() => [
            e("div", Be, c(y(i).message), 1),
            Le
          ]),
          _: 1
        }),
        e("div", Ve, [
          (r(!0), l(x, null, F(s, ({ id: f, type: k, user: m, time: d, content: u }, h) => (r(), l("div", {
            key: h,
            class: "item",
            onClick: (g) => y(o).open(`message/${k}`, { id: f, user: m })
          }, [
            e("div", He, c(m.avatar), 1),
            e("div", Oe, [
              e("div", Ge, [
                e("div", Ue, c(m.name), 1),
                e("div", qe, c(d), 1)
              ]),
              e("div", Je, c(u), 1)
            ])
          ], 8, Ke))), 128))
        ])
      ]);
    };
  }
}), Re = `.message .list .item[data-v-321060c2]{display:flex;height:75px;cursor:pointer}.message .list .item .avatar[data-v-321060c2]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;margin:10px 0 0 10px;background:#efefef;border-radius:50px;font-size:30px}.message .list .item .right[data-v-321060c2]{flex:1;margin-left:10px;border-bottom:1px solid #f1f1f1;padding:0 5px}.message .list .item .right .title[data-v-321060c2]{display:flex;justify-content:space-between;padding:12px 10px 0 0;height:30px}.message .list .item .right .title .name[data-v-321060c2]{font-size:14px;font-weight:700}.message .list .item .right .title .time[data-v-321060c2]{font-size:13px;color:#aaa}.message .list .item .right .content[data-v-321060c2]{color:#888;padding:12px 12px 12px 0}
`, tt = /* @__PURE__ */ $(Qe, [["styles", [Re]], ["__scopeId", "data-v-321060c2"]]);
export {
  tt as default
};
