import { resolveComponent as g, openBlock as d, createElementBlock as c, Fragment as h, createVNode as v, createStaticVNode as A, createElementVNode as e, toDisplayString as p, pushScopeId as N, popScopeId as j, defineComponent as E, ref as F, reactive as z, watch as M, withCtx as $, TransitionGroup as B, renderList as I, withDirectives as L, withKeys as V, vModelText as K } from "/view-ui/libs/vue.js";
import { Lang as G, Langs as O } from "/view-ui/libs/view.js";
import k from "/view-ui/libs/network.js";
import { back as S } from "/view-ui/libs/router.js";
const U = "", x = (t, i) => {
  const a = t.__vccOpts || t;
  for (const [s, f] of i)
    a[s] = f;
  return a;
}, q = {
  props: ["user"]
}, H = /* @__PURE__ */ A('<div class="system"><div class="items"><div class="item"> A: 1 </div><div class="item"> B: 2 </div><div class="item"> C: 3 </div></div></div>', 1);
function J(t, i, a, s, f, u) {
  const r = g("Navbar");
  return d(), c(h, null, [
    v(r, {
      title: a.user.name
    }, null, 8, ["title"]),
    H
  ], 64);
}
const P = /* @__PURE__ */ x(q, [["render", J], ["styles", [U]]]), Q = `.userinfo .header[data-v-691d64a3]{display:flex;justify-content:space-between;align-items:center;padding:5px 14px 10px}.userinfo .header .avatar[data-v-691d64a3]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:50px;font-size:30px;background:#fff}
`, R = {
  props: ["user"],
  app: {
    style: {
      flex: "none"
    }
  },
  methods: {
    onclick(t) {
      S(t.currentTarget);
    }
  }
}, W = (t) => (N("data-v-691d64a3"), t = t(), j(), t), X = { class: "userinfo" }, Y = { class: "header" }, Z = { class: "avatar" }, ee = /* @__PURE__ */ W(() => /* @__PURE__ */ e("i", { class: "ficon-cha" }, null, -1)), te = [
  ee
];
function se(t, i, a, s, f, u) {
  return d(), c("div", X, [
    e("div", Y, [
      e("div", Z, p(a.user.avatar), 1),
      e("div", null, p(a.user.name), 1),
      e("div", {
        class: "close",
        onClick: i[0] || (i[0] = (...r) => u.onclick && u.onclick(...r))
      }, te)
    ])
  ]);
}
const ae = /* @__PURE__ */ x(R, [["render", se], ["styles", [Q]], ["__scopeId", "data-v-691d64a3"]]), ne = `.setting .header[data-v-40c58d46]{display:flex;justify-content:space-between;align-items:center;padding:5px 14px 10px}.setting .header .title[data-v-40c58d46]{width:50px;height:50px}
`, C = G({
  en: "Monkey",
  zh: "Monkey"
}), ie = {
  app: {
    name: C,
    style: {
      flex: "none"
    }
  },
  setup() {
    return { name: C };
  },
  methods: {
    onclick(t) {
      S(t.currentTarget);
    }
  }
}, oe = { class: "setting" };
function de(t, i, a, s, f, u) {
  const r = g("Navbar");
  return d(), c("div", oe, [
    v(r, { title: "Setting" })
  ]);
}
const ce = /* @__PURE__ */ x(ie, [["render", de], ["styles", [ne]], ["__scopeId", "data-v-40c58d46"]]), w = (t) => (N("data-v-83ad578e"), t = t(), j(), t), re = /* @__PURE__ */ w(() => /* @__PURE__ */ e("i", { class: "ficon-gengduo" }, null, -1)), le = { class: "list" }, pe = {
  key: 0,
  class: "me"
}, fe = ["onClick"], ue = { class: "message" }, _e = { class: "content" }, me = {
  key: 1,
  class: "he"
}, ve = ["onClick"], he = { class: "message" }, ge = { class: "content" }, xe = { class: "inputbox safe-bottom" }, be = /* @__PURE__ */ w(() => /* @__PURE__ */ e("button", null, [
  /* @__PURE__ */ e("i", { class: "ficon-yuyin" })
], -1)), ye = ["onKeyup"], $e = /* @__PURE__ */ w(() => /* @__PURE__ */ e("button", null, [
  /* @__PURE__ */ e("i", { class: "ficon-jia" })
], -1)), ke = {
  app: {
    level: 200,
    style: {
      background: "#f7f7f7",
      flex: 1
    }
  },
  pages: { userinfo: ae, setting: ce }
}, we = /* @__PURE__ */ E({
  ...ke,
  __name: "index",
  props: ["id", "user"],
  setup(t) {
    const i = t, a = F(""), s = z([]);
    let f;
    function u(l) {
      if (l.length) {
        const o = l.shift();
        o && s.push(o), f = setTimeout(() => u(l), 1500);
      }
    }
    function r(l) {
      k.get(`/view-ui/api/message/${l}.json`).then(({ users: o, list: _ }) => {
        const m = {};
        for (const n of o)
          m[n.id] = n;
        for (const n of _)
          n.user = m[n.uid];
        u(_);
      });
    }
    r(i.id), M(i, () => {
      s.splice(0), clearTimeout(f), r(i.id);
    });
    function b() {
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
    return (l, o) => {
      const _ = g("A"), m = g("Navbar");
      return d(), c(h, null, [
        v(m, {
          title: t.user.name
        }, {
          default: $(() => [
            v(_, {
              class: "center",
              href: "message/chat/setting"
            }, {
              default: $(() => [
                re
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title"]),
        e("div", le, [
          v(B, { name: "fade-in" }, {
            default: $(() => [
              (d(!0), c(h, null, I(s, ({ user: n, content: y }) => (d(), c(h, null, [
                n.me ? (d(), c("div", pe, [
                  e("div", {
                    class: "avatar",
                    onClick: (T) => l.$router.open("message/chat/userinfo", { user: n })
                  }, p(n.avatar), 9, fe),
                  e("div", ue, [
                    e("div", _e, p(y), 1)
                  ])
                ])) : (d(), c("div", me, [
                  e("div", {
                    class: "avatar",
                    onClick: (T) => l.$router.open("message/chat/userinfo", { user: n })
                  }, p(n.avatar), 9, ve),
                  e("div", he, [
                    e("div", ge, p(y), 1)
                  ])
                ]))
              ], 64))), 256))
            ]),
            _: 1
          })
        ]),
        e("div", xe, [
          be,
          L(e("input", {
            type: "text",
            "onUpdate:modelValue": o[0] || (o[0] = (n) => a.value = n),
            onKeyup: V(b, ["enter"])
          }, null, 40, ye), [
            [K, a.value]
          ]),
          $e
        ])
      ], 64);
    };
  }
}), Ce = `.list[data-v-83ad578e]{padding-bottom:50px}.list .me[data-v-83ad578e],.list .he[data-v-83ad578e]{padding:15px 10px}.list .me .avatar[data-v-83ad578e],.list .he .avatar[data-v-83ad578e]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;border-radius:50px;font-size:30px;background:#fff}.list .me .message[data-v-83ad578e],.list .he .message[data-v-83ad578e]{flex:1;max-width:600px}.list .me .message .content[data-v-83ad578e],.list .he .message .content[data-v-83ad578e]{padding:16px;border-radius:10px}.list .me .message .content[data-v-83ad578e]:before,.list .he .message .content[data-v-83ad578e]:before{position:absolute;top:20px;content:"";width:10px;height:10px;transform:rotate(45deg)}.list .me[data-v-83ad578e]{display:flex;flex-direction:row-reverse}.list .me .message .content[data-v-83ad578e]{margin:0 12px 0 40px;background:#a8f7a7}.list .me .message .content[data-v-83ad578e]:before{right:-5px;background-color:#a8f7a7}.list .he[data-v-83ad578e]{display:flex}.list .he .message .content[data-v-83ad578e]{margin:0 40px 0 12px;background:#fff}.list .he .message .content[data-v-83ad578e]:before{left:-5px;background-color:#fff}.inputbox[data-v-83ad578e]{position:fixed;display:flex;width:100%;height:50px;padding:6px 0;background-color:#f7f7f7;border-top:1px solid #f1f1f1}.inputbox input[data-v-83ad578e]{flex:1;background-color:#fff;border-radius:10px;border:none}.inputbox button[data-v-83ad578e]{width:38px;height:38px;border-radius:50px;background:#fff;margin:0 10px;border:1px solid #efefef}.inputbox button i[data-v-83ad578e]{font-size:18px}.fade-in-enter-from[data-v-83ad578e]{opacity:0}.fade-in-enter-active[data-v-83ad578e]{transition:opacity .2s ease}
`, Ne = /* @__PURE__ */ x(we, [["styles", [Ce]], ["__scopeId", "data-v-83ad578e"]]), je = O({
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
k.get("/view-ui/api/message/index.json").then((t) => {
  k.get("/view-ui/api/user.json").then((i) => {
    const a = {};
    for (const s of i)
      a[s.id] = s;
    for (const s of t)
      s.user = a[s.uid], D.push(s);
  });
});
const ze = {
  pages: { chat: Ne, system: P },
  setup() {
    return { langs: je, list: D };
  }
}, Ie = `.message .list .item[data-v-be78fd1e]{display:flex;height:75px}.message .list .item .avatar[data-v-be78fd1e]{display:flex;justify-content:center;align-items:center;width:50px;height:50px;margin:10px 0 0 10px;background:#efefef;border-radius:50px;font-size:30px}.message .list .item .right[data-v-be78fd1e]{flex:1;margin-left:10px;border-bottom:1px solid #f1f1f1;padding:0 5px}.message .list .item .right .title[data-v-be78fd1e]{display:flex;justify-content:space-between;padding:12px 10px 0 0;height:30px}.message .list .item .right .title .name[data-v-be78fd1e]{font-size:14px;font-weight:700}.message .list .item .right .title .time[data-v-be78fd1e]{font-size:13px;color:#aaa}.message .list .item .right .content[data-v-be78fd1e]{color:#888;padding:12px 12px 12px 0}
`, Se = { class: "message" }, De = { class: "list" }, Te = ["onClick"], Ae = { class: "avatar" }, Ee = { class: "right" }, Fe = { class: "title" }, Me = { class: "name" }, Be = { class: "time" }, Le = { class: "content" };
function Ve(t, i, a, s, f, u) {
  const r = g("Navbar");
  return d(), c("div", Se, [
    v(r, {
      title: s.langs.message
    }, null, 8, ["title"]),
    e("div", De, [
      (d(!0), c(h, null, I(s.list, ({ id: b, type: l, user: o, time: _, content: m }, n) => (d(), c("div", {
        key: n,
        class: "item",
        onClick: (y) => t.$router.open(`message/${l}`, { id: b, user: o })
      }, [
        e("div", Ae, p(o.avatar), 1),
        e("div", Ee, [
          e("div", Fe, [
            e("div", Me, p(o.name), 1),
            e("div", Be, p(_), 1)
          ]),
          e("div", Le, p(m), 1)
        ])
      ], 8, Te))), 128))
    ])
  ]);
}
const qe = /* @__PURE__ */ x(ze, [["render", Ve], ["styles", [Ie]], ["__scopeId", "data-v-be78fd1e"]]);
export {
  qe as default
};
