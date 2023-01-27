import { defineComponent as S, reactive as C, resolveComponent as g, openBlock as a, createElementBlock as l, Fragment as _, createVNode as m, unref as j, createElementVNode as o, renderList as x, withCtx as h, toDisplayString as v, normalizeClass as E, normalizeStyle as I, pushScopeId as N, popScopeId as A } from "/view-ui/libs/vue.js";
import B from "/view-ui/libs/network.js";
import { Langs as L, urls as y } from "/view-ui/libs/view.js";
const V = (e) => (N("data-v-50634316"), e = e(), A(), e), D = { class: "groups" }, F = { class: "header item" }, G = { class: "name" }, O = /* @__PURE__ */ V(() => /* @__PURE__ */ o("i", { class: "ficon-xinchuangkou" }, null, -1)), $ = { class: "name" }, q = {}, H = /* @__PURE__ */ S({
  ...q,
  __name: "index",
  setup(e) {
    const d = L({
      group: {
        en: "Group",
        zh: "\u5E94\u7528\u7EC4"
      }
    }), t = C({});
    return B.get("/view-ui/api/group.json").then((i) => {
      for (const n of i) {
        const p = y[n], { apps: s } = p;
        if (s) {
          const c = { name: p.name };
          t[n] = c;
          const u = [];
          if (s.urls)
            for (const f of s.urls) {
              const r = y[f];
              r && u.push(r);
            }
          c.items = u;
        }
      }
    }), (i, n) => {
      const p = g("Navbar"), s = g("Scroll"), c = g("A");
      return a(), l(_, null, [
        m(p, {
          title: j(d).group
        }, null, 8, ["title"]),
        o("div", D, [
          (a(!0), l(_, null, x(t, ({ name: u, items: f }, r) => (a(), l("div", {
            class: "group",
            key: r
          }, [
            m(c, {
              href: r,
              target: "_blank"
            }, {
              default: h(() => [
                o("div", F, [
                  o("div", G, v(u), 1),
                  O
                ]),
                m(s, null, {
                  default: h(() => [
                    o("ul", null, [
                      (a(!0), l(_, null, x(f, ({ name: k, icon: b, color: w }, z) => (a(), l("li", { key: z }, [
                        o("i", {
                          class: E(b),
                          style: I({ color: w })
                        }, null, 6),
                        o("div", $, v(k), 1)
                      ]))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["href"])
          ]))), 128))
        ])
      ], 64);
    };
  }
}), J = `.groups .group[data-v-50634316]{display:block;margin:10px;padding:8px 3px;background:#f3f3f3c7;border-radius:10px}.groups .group .header[data-v-50634316]{display:flex;justify-content:space-between;padding:10px}.groups .group .header .name[data-v-50634316]{font-size:15px;color:#444;font-weight:700}.groups .group .header i[data-v-50634316]{font-size:12px;color:#666;font-size:14px}.groups .group ul[data-v-50634316]{display:flex}.groups .group ul li[data-v-50634316]{display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;margin:0 4px;flex:none;list-style:none;width:75px;height:100px}.groups .group ul li i[data-v-50634316]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#efefef;width:66px;height:66px;border-radius:18px;font-size:24px}.groups .group ul li .name[data-v-50634316]{margin-top:8px;font-size:12px}
`, K = (e, d) => {
  const t = e.__vccOpts || e;
  for (const [i, n] of d)
    t[i] = n;
  return t;
}, R = /* @__PURE__ */ K(H, [["styles", [J]], ["__scopeId", "data-v-50634316"]]);
export {
  R as default
};
